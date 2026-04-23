import { MetadataRoute } from "next";
import { Locale } from "next-intl";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export const dynamic = "force-static";

const host = process.env.NEXT_PUBLIC_SITE_URL || "https://www.perlabrazilor.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...getEntries("/"),
    ...getEntries("/rezerva-acum"),
    ...getEntries("/oferta-craciun"),
    ...getEntries("/oferta-revelion"),
    ...getEntries("/oferta-demipensiune"),
    ...getEntries("/camere"),
    ...getEntries("/spa"),
    ...getEntries("/mancare"),
    ...getEntries("/preturi-valabilitate"),
    ...getEntries("/oferte"),
  ];
}

type Href = Parameters<typeof getPathname>[0]["href"];

function getEntries(href: Href) {
  const today = new Date().toISOString().split("T")[0];
  
  return routing.locales.map((locale) => ({
    url: getUrl(href, locale),
    lastModified: today,
    changeFrequency: "weekly" as const,
    priority: href === "/" ? 1.0 : 0.8,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((cur) => [cur, getUrl(href, cur)])
      ),
    },
  }));
}

function getUrl(href: Href, locale: Locale) {
  const pathname = getPathname({ locale, href });
  return host + pathname;
}
