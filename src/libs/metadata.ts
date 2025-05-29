import { getTranslations } from "next-intl/server";
import { Locale } from "next-intl";

interface MetadataProps {
  params: {
    locale: Locale;
  };
  pageName?: string;
  imageName?: string;
}

export async function generatePageMetadata({
  params,
  pageName = "home",
  imageName = "home.jpg",
}: MetadataProps) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });
  const baseUrl = process.env.NEXT_PROJECT_URL ?? "http://localhost:3000";
  const ogImageUrl = `${baseUrl}/images/ogImages/${imageName}`;

  return {
    title: t(`${pageName}.title`),
    description: t(`${pageName}.description`),
    openGraph: {
      title: t(`${pageName}.title`),
      description: t(`${pageName}.description`),
      type: "website",
      locale: locale,
      url: `${baseUrl}/${locale}/${pageName === "home" ? "" : pageName}`,
      siteName: "Pensiunea Perla Brazilor",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: t(`${pageName}.title`),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t(`${pageName}.title`),
      description: t(`${pageName}.description`),
      images: [ogImageUrl],
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/${pageName === "home" ? "" : pageName}`,
      languages: {
        en: `${baseUrl}/en/${pageName === "home" ? "" : pageName}`,
        ro: `${baseUrl}/ro/${pageName === "home" ? "" : pageName}`,
      },
    },
    metadataBase: new URL(baseUrl),
  };
}
