import { PreturiClient } from "./PreturiClient";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import { Props } from "@/libs/props";
import OfferHero from "@/components/OfferHero";
import HeaderImage from "~/images/ui/header.jpg";

export default function PreturiValabilitate({ params }: Readonly<Props>) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("Rooms");

  return (
    <>
      <OfferHero
        image={HeaderImage}
        title={t("pricesAndAvailability")}
        pricing={t("choosePeriodToSeePrices")}
      />
      <section className="w-full py-30 flex justify-center">
        <PreturiClient />
      </section>
    </>
  );
}
