import { readdir, writeFile } from "fs/promises";
import path from "path";

const camereDir = path.join(import.meta.dir, "public/images/camere");
const outputPath = path.join(
  import.meta.dir,
  "src/libs/images/room-images.json"
);

async function generateRoomImagesJSON() {
  const roomFolders = await readdir(camereDir, { withFileTypes: true });
  const result: {
    roomId: string;
    images: string[];
  }[] = [];

  for (const folder of roomFolders) {
    if (!folder.isDirectory()) continue;

    const roomId = folder.name;
    const folderPath = path.join(camereDir, roomId);
    const files = await readdir(folderPath);

    const webpImages = files
      .filter((file) => file.endsWith(".webp"))
      .map((file) => `/images/camere/${roomId}/${file}`);

    result.push({ roomId, images: webpImages });
  }

  await writeFile(outputPath, JSON.stringify(result, null, 2));
  console.log(`✅ Saved image map to ${outputPath}`);
}

generateRoomImagesJSON().catch(console.error);
