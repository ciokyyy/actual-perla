import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import OfferHero from "@/components/OfferHero";
import ClientComponent from "./ClientComponent";
import { generatePageMetadata } from "@/libs/metadata";
import { Props } from "@/libs/props";
import DemipensiuneBg from "~/images/demipensiune/demipensiune-1.webp";

export async function generateMetadata(props: Omit<Props, "children">) {
  return generatePageMetadata({
    params: await props.params,
    pageName: "half_board_offer",
    imageName: "rezerva.webp",
    pathSegment: "oferta-demipensiune",
  });
}

export default function Page({ params }: Readonly<Props>) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("HalfBoardPage");

  return (
    <>
      <OfferHero
        image={DemipensiuneBg}
        title={t("title")}
        pricing=""
        ctaText={t("book_now")}
      />
      <ClientComponent />
    </>
  );
}