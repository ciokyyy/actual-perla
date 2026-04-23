import AnimatedWidget from "@/components/AnimatedWidget";
import C from "@/components/ComponentNames";
import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import { OfferCards } from "./oferte/ClientComponent";
import { generatePageMetadata } from "@/libs/metadata";
import FeaturesSection from "@/components/FeaturesSection";

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
      <FeaturesSection />
      <C.HomePageContainer className="gap-30 flex flex-col items-center w-full max-w-1400 mx-auto px-20">
        <AnimatedWidget />
      </C.HomePageContainer>
      <section className="w-full py-50">
        <OfferCards />
      </section>
    </>
  );
}
