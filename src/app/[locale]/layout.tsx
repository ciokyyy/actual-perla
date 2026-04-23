import "./globals.css";
import { Roboto_Serif, Space_Grotesk } from "next/font/google";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import { QueryProvider } from "@/libs/QueryProvider";
import { routing } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { OrganizationJsonLd, LocalBusinessJsonLd } from "@/components/JsonLd";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});
const robotoSerif = Roboto_Serif({
  variable: "--font-heading",
  subsets: ["latin"],
});

import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Menu from "@/components/ui/Menu";
import LocaleSwitcher from "@/components/LocaleSwitcherOptions";
import { BookNow } from "@/components/ui/BookNow";
import { Props } from "@/libs/props";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: Omit<Props, "children">) {
  const { locale } = await props.params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.perlabrazilor.com";

  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return {
    title: t("default.title"),
    description: t("default.description"),
    metadataBase: new URL(baseUrl),
    viewport: {
      width: "device-width",
      initialScale: 1,
      viewportFit: "cover",
    },
    themeColor: "#1d5b17",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: baseUrl,
      languages: {
        en: "https://www.perlabrazilor.com/en-us",
        ro: "https://www.perlabrazilor.com/ro",
        it: "https://www.perlabrazilor.com/it",
      },
    },
    verification: {
      google: "google-site-verification-code",
    },
  };
}

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
      </head>
      <body className={`${spaceGrotesk.variable} ${robotoSerif.variable} antialiased`}>
        <NextIntlClientProvider>
          <QueryProvider>
            <div className="text-text flex min-h-screen flex-col items-center gap-20">
              <Header></Header>
              {children}
            </div>
            <Footer></Footer>
            <Menu />
            <LocaleSwitcher />
            <BookNow />
          </QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
