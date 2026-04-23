import { BiSolidOffer } from "react-icons/bi";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import { generatePageMetadata } from "@/libs/metadata";
import { Props } from "@/libs/props";
import { ClientComponent } from "./ClientComponent";
import PageHero from "@/components/PageHero";

export async function generateMetadata(props: Omit<Props, "children">) {
  return generatePageMetadata({
    params: await props.params,
    pageName: "offers",
    imageName: "rezerva.png",
    pathSegment: "oferte",
  });
}

export default function OfertePage({ params }: Readonly<Props>) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("OffersPage");

  return (
    <>
      <PageHero
        icon={<BiSolidOffer />}
        title={t("our_offers")}
      />
      <ClientComponent />
    </>
  );
}
