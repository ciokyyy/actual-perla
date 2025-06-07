import { getTranslations } from "next-intl/server";
import { Locale } from "next-intl";
import type { Metadata } from "next"; // Import Metadata type for better type hinting
import { getPathname } from "@/i18n/navigation"; // <<<< UPDATED: Only import getPathname
import { routing } from "@/i18n/routing";

interface MetadataProps {
  params: {
    locale: Locale;
  };
  pageName?: string; // Used for translation keys (e.g., "home", "about", "book-now-page")
  imageName?: string;
  pathSegment?: string; // The actual URL segment for the current page in the current locale (e.g., "rezerva-acum", "book-now")
}
export async function generatePageMetadata({
  params,
  pageName = "home", // Default page name for translations and conceptual identifier
  imageName = "home.jpg", // Default image name for Open Graph and Twitter cards
  pathSegment, // The actual URL segment for the current page in the current locale (e.g., "rezerva-acum", "book-now")
}: MetadataProps): Promise<Metadata> {
  const { locale } = params;
  // 'LocaleLayout' is used as the namespace for general layout translations (title, description, keywords).
  // Make sure your translation files (e.g., messages/en.json, messages/ro.json)
  // have a "LocaleLayout" namespace with keys like "home.title", "home.description", "home.keywords".
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  // IMPORTANT: Set your production site URL. This is crucial for absolute URLs in metadata.
  // Using NEXT_PUBLIC_SITE_URL is a common convention for public-facing environment variables in Next.js.
  const baseUrl = process.env.NEXT_PROJECT_URL ?? "http://localhost:3000"; // <<<< REPLACE with your actual production domain (e.g., "https://www.yourdomain.com")

  // Construct the full URL for the Open Graph image.
  const ogImageUrl = `${baseUrl}/images/ogImages/${imageName}`;

  // Determine the effective path for URL construction for the current page.
  // If a specific 'pathSegment' is provided, use it. Otherwise, fall back to what
  // pageName would typically resolve to (empty string for home, pageName itself for others).
  const effectivePath = pathSegment ?? (pageName === "home" ? "" : pageName);

  // Dynamically generate the 'alternates.languages' object for hreflang tags.
  const alternatesLanguages: { [key: string]: string } = {};

  // Determine the canonical href for getPathname based on the conceptual pageName.
  // This string (e.g., "/book-now-page") should be what your next-intl routing expects
  // to map to locale-specific slugs (e.g., "/en-us/book-now", "/ro/rezerva-acum").
  const canonicalHref = pageName === "home" ? "/" : `/${pageName}`;

  for (const supportedLocale of routing.locales) {
    // Use getPathname to correctly generate the localized slug for each supported locale.
    // This line might produce a TypeScript error if `canonicalHref` doesn't strictly match
    const localizedPath = getPathname({
      locale: supportedLocale,
      // @ts-expect-error its just a string, not a URL

      href: canonicalHref, // Pass the canonical href (e.g., "/book-now-page") to getPathname
    });
    alternatesLanguages[supportedLocale] = `${baseUrl}${localizedPath}`;
  }

  // Optionally, add an 'x-default' alternate for unmatched locales.
  // This typically points to your default locale or a generic version of the page.
  // For 'next-intl', `x-default` is often configured to point to your default locale.
  // Make sure your `i18n.ts` is set up to handle 'x-default'.
  // This line might also produce a TypeScript error for the same reason.
  alternatesLanguages["x-default"] = `${baseUrl}${getPathname({
    locale: "ro",
    // @ts-expect-error its just a string, not a URL
    href: canonicalHref,
  })}`; // <<<< REPLACE 'en' with your desired x-default locale

  return {
    // --- BASIC SEO METADATA ---

    // Sets the base URL for relative URLs in the metadata.
    metadataBase: new URL(baseUrl),

    // The primary title displayed in browser tabs, search results, and social shares.
    title: t(`${pageName}.title`),

    // A brief summary of the page content, shown in search results.
    description: t(`${pageName}.description`), // <<<< ENSURE "LocaleLayout" namespace has keys like "home.description"

    // A list of keywords relevant to the page content. While less impactful for Google, still useful for some engines.

    // Identifies the author(s) of the page.
    authors: [
      {
        name: "Pensiunea Perla Brazilor", // <<<< REPLACE with your company/author name
        url: baseUrl, // Optional: URL associated with the author (e.g., your homepage)
      },
    ],

    // Identifies the publisher of the website (useful for news sites, etc.).
    publisher: "Pensiunea Perla Brazilor", // <<<< REPLACE with your company/publisher name

    // Specifies how search engines should crawl and index the page.
    robots: {
      index: true, // Allow search engines to index this page
      follow: true, // Allow search engines to follow links on this page
      googleBot: {
        // Specific rules for Googlebot
        index: true,
        follow: true,
        "max-video-preview": -1, // No limit on video preview length in search results
        "max-snippet": -1, // No limit on snippet length in search results
      },
    },

    // Remove the verification section until you have actual codes
    // verification: {
    //   google: "your-google-verification-code",
    //   yandex: "your-yandex-verification-code",
    //   yahoo: "your-yahoo-verification-code",
    //   other: {
    //     me: ["your-personal-verification-code", "another-code"],
    //   },
    // },

    // Prevents mobile browsers from automatically detecting and formatting phone numbers.
    formatDetection: {
      telephone: false,
    },

    // --- OPEN GRAPH METADATA (for Facebook, LinkedIn, etc.) ---
    openGraph: {
      title: t(`${pageName}.title`),
      description: t(`${pageName}.description`),
      url: `${baseUrl}/${locale}/${effectivePath}`, // Uses effectivePath which is the current locale's actual segment
      siteName: "Pensiunea Perla Brazilor", // <<<< REPLACE with your overall website name
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: t(`${pageName}.title`), // Alt text for accessibility and SEO
        },
      ],
      type: "website",
      locale: locale.toString(),
    },

    // --- TWITTER CARD METADATA ---
    twitter: {
      card: "summary_large_image",
      title: t(`${pageName}.title`),
      description: t(`${pageName}.description`),
      images: [
        {
          url: ogImageUrl,
          alt: t(`${pageName}.title`), // Alt text for Twitter image (important for accessibility)
        },
      ],
      // creator: "@your_twitter_handle", // <<<< REPLACE with your Twitter handle (e.g., "@PerlaBrazilor")
      // site: "@your_twitter_handle", // <<<< REPLACE with your website's Twitter handle
    },

    // --- CANONICAL AND HREFLANG ALTERNATES ---
    alternates: {
      canonical: `${baseUrl}/${locale}/${effectivePath}`, // Uses effectivePath which is the current locale's actual segment
      languages: alternatesLanguages,
    },

    // --- FAVICONS AND APP ICONS ---
    icons: {
      icon: "/favicon.ico", // This is your main favicon
    },

    // --- APPLICATION NAME (for web app manifests, etc.) ---
    applicationName: "Pensiunea Perla Brazilor", // <<<< REPLACE with the official name of your application/website
  };
}
