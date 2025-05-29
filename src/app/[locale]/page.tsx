import AnimatedWidget from "@/components/AnimatedWidget";
import C from "@/components/ComponentNames";
import { Locale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { use } from "react";
import OfertePage from "./oferte/page";
type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata(props: Omit<Props, "children">) {
  const { locale } = await props.params;
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://perla-brazilor.ro";
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });
  const ogImageUrl = `${baseUrl}/images/demipensiune/demipensiune-2.webp`;

  return {
    title: t("book_now.title"),
    description: t("book_now.description"),
    openGraph: {
      title: t("book_now.title"),
      description: t("book_now.description"),
      type: "website",
      locale: locale,
      url: `${baseUrl}/${locale}/rezerva-acum`,
      siteName: "Pensiunea Perla Brazilor",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: t("book_now.title"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("book_now.title"),
      description: t("book_now.description"),
      images: [ogImageUrl],
    },
  };
}

export default function Home({ params }: Readonly<Props>) {
  const { locale } = use(params);

  setRequestLocale(locale);

  return (
    <>
      <C.HomePageContainer className="gap-30 flex flex-col items-center">
        <AnimatedWidget />
      </C.HomePageContainer>
      <OfertePage />
    </>
  );
}
