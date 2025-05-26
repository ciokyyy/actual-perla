import "./globals.css";
import { League_Spartan, Noto_Color_Emoji, Quicksand } from "next/font/google";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import { QueryProvider } from "@/libs/QueryProvider";
import { routing } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";

const quickSand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});
const aleo = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
});
const segoe = Noto_Color_Emoji({
  variable: "--font-noto",
  weight: "400",
});

import { hasLocale, Locale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Menu from "@/components/ui/Menu";
import LocaleSwitcher from "@/components/LocaleSwitcherOptions";
import { BookNow } from "@/components/ui/BookNow";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata(props: Omit<Props, "children">) {
  const { locale } = await props.params;

  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return {
    title: t("title"),
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
    <html lang="en">
      <body
        className={`${quickSand.variable} ${aleo.variable} antialiased ${segoe.variable}`}
      >
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
