import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import { CompactOfferCards } from "./oferte/ClientComponent";
import { generatePageMetadata } from "@/libs/metadata";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata(props: Omit<Props, "children">) {
  return generatePageMetadata({
    params: await props.params,
  });
}

export default function Home({ params }: Readonly<Props>) {
  const { locale } = use(params);

  setRequestLocale(locale);

  return (
    <>
      <section className="w-full py-30">
        <CompactOfferCards />
      </section>
      <AboutSection />
      <ReviewsSection />
    </>
  );
}
