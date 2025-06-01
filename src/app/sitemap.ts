import { MetadataRoute } from "next";
import { Locale } from "next-intl";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

// Adapt this as necessary
const host = process.env.NEXT_PROJECT_URL || "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  // Adapt this as necessary
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
  ];
}

type Href = Parameters<typeof getPathname>[0]["href"];

function getEntries(href: Href) {
  return routing.locales.map((locale) => ({
    url: getUrl(href, locale),
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
