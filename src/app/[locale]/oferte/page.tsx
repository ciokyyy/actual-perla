import { BiSolidOffer } from "react-icons/bi";

import { useTranslations } from "next-intl";

export async function generateMetadata(props: Omit<Props, "children">) {
  return generatePageMetadata({
    params: await props.params,
    pageName: "offers",
    imageName: "rezerva.png",
    pathSegment: "oferte",
  });
}

import { generatePageMetadata } from "@/libs/metadata";
import { Props } from "@/libs/props";
import { ClientComponent } from "./ClientComponent";

export default function OfertePage() {
  const t = useTranslations("OffersPage");

  return (
    <>
      <h1 className="title mb-40 flex items-center gap-6">
        {t("our_offers")} <BiSolidOffer size="35" />
      </h1>
      <ClientComponent />
    </>
  );
}
