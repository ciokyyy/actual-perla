import { FaSpa, FaHotTub, FaWater, FaSwimmer } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import Image from "next/image";
import OfferHero from "@/components/OfferHero";
import { generatePageMetadata } from "@/libs/metadata";
import { Props } from "@/libs/props";
import JacuzziImg from "~/images/spa/jacuzzi-1.webp";
import {
  SpaBenefits,
  JacuzziBenefits,
  PiscinaBenefits,
  SaunaBenefits,
  SalinaBenefits,
} from "@/components/SpaBenefits";

export async function generateMetadata(props: Omit<Props, "children">) {
  return generatePageMetadata({
    params: await props.params,
    pageName: "spa",
    imageName: "spa.png",
  });
}

export default function Page({ params }: Readonly<Props>) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("SpaPage");

  return (
    <>
      <OfferHero
        image={JacuzziImg}
        title={t("header_title")}
        pricing=""
      />
      <section className="w-full px-5 py-10 md:py-20">
        <div className="max-w-7xl mx-auto grid gap-30 md:gap-40">
          <SpaBenefits locale={locale} />
          <JacuzziBenefits locale={locale} />
          <PiscinaBenefits locale={locale} />
          <SaunaBenefits locale={locale} />
          <SalinaBenefits locale={locale} />
        </div>
      </section>
    </>
  );
}