#!/usr/bin/env node
/**
 * Image optimizer — re-compresses all public/images/ to WebP 60%.
 * In-place for .webp/.jpg, converts .png to .webp always.
 * Updates all import paths in src/ from .png to .webp.
 */
import sharp from "sharp";
import { readdirSync, statSync, unlinkSync, renameSync } from "fs";
import { join, extname, dirname, basename } from "path";
import { readFileSync, writeFileSync } from "fs";

const IMG_DIR = new URL("../public/images", import.meta.url).pathname;
const SRC_DIR = new URL("../src", import.meta.url).pathname;
const QUALITY = 60;
const MAX_WIDTH = 2000;

let converted = 0;
let skipped = 0;
let errors = [];

/** Recursively get all image files */
function walk(dir) {
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(full));
    } else if (/\.(webp|jpg|jpeg|png)$/i.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

async function optimize(file) {
  const ext = extname(file).toLowerCase();
  const isPng = ext === ".png";

  try {
    const img = sharp(file);
    const meta = await img.metadata();
    const width = meta.width || MAX_WIDTH;

    // Resize if larger than max
    const resizeOpts = width > MAX_WIDTH ? { width: MAX_WIDTH, withoutEnlargement: true } : {};

    if (isPng) {
      // Convert PNG → WebP (output: .webp next to original)
      const out = file.replace(/\.png$/i, ".webp");
      if (file === out) return; // safety
      await sharp(file)
        .resize(resizeOpts)
        .webp({ quality: QUALITY })
        .toFile(out);
      // Remove original PNG
      unlinkSync(file);
      converted++;
      process.stdout.write(".");
      return out;
    }

    // WebP or JPG — re-compress in-place (write to tmp, rename)
    const tmp = file + ".tmp";
    if (ext === ".webp") {
      await img.resize(resizeOpts).webp({ quality: QUALITY }).toFile(tmp);
    } else {
      // JPG → keep as jpg (for imports that reference .jpg)
      await img.resize(resizeOpts).jpeg({ quality: QUALITY, mozjpeg: true }).toFile(tmp);
    }
    renameSync(tmp, file);
    converted++;
    process.stdout.write(".");
    return null; // no rename needed
  } catch (err) {
    errors.push(`${file}: ${err.message}`);
    skipped++;
    process.stdout.write("x");
    return null;
  }
}

/** Update .png → .webp in all import paths under src/ */
function updatePngImports() {
  let updatedCount = 0;

  function walkSrc(dir) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory() && !entry.name.startsWith(".") && entry.name !== "node_modules") {
        walkSrc(full);
      } else if (/\.(tsx?|jsx?)$/.test(entry.name)) {
        const content = readFileSync(full, "utf8");
        const newContent = content.replace(
          /from\s+["']~\/images\/[^"']*?\.png["']/g,
          (match) => match.replace(/\.png["']$/, '.webp"')
        );
        if (newContent !== content) {
          writeFileSync(full, newContent);
          updatedCount++;
          process.stdout.write("u");
        }
      }
    }
  }

  walkSrc(SRC_DIR);
  return updatedCount;
}

console.log(`\n🔍 Scanning ${IMG_DIR}...`);
const files = walk(IMG_DIR);
console.log(`📦 Found ${files.length} images`);

(async () => {
  for (const f of files) {
    await optimize(f);
  }

  console.log(`\n✅ Converted: ${converted}`);
  if (skipped) console.log(`⚠️  Skipped/errors: ${skipped}`);
  if (errors.length) {
    console.log("Errors:");
    errors.forEach((e) => console.log(`  ${e}`));
  }

  const updated = updatePngImports();
  if (updated) {
    console.log(`📝 Updated imports: ${updated} files`);
  }

  console.log("✨ Done!");
})();
