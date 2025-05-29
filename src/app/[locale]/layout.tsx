import "./globals.css";
import { League_Spartan, Quicksand } from "next/font/google";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import { QueryProvider } from "@/libs/QueryProvider";
import { routing } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";

const quickSand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});
const aleo = League_Spartan({
  variable: "--font-league-spartan",
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

  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return {
    title: t("default.title"),
    description: t("default.description"),
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
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${quickSand.variable} ${aleo.variable} antialiased`}>
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
