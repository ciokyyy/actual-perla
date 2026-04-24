import { generatePageMetadata } from "@/libs/metadata";
import { Props } from "@/libs/props";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import OfferHero from "@/components/OfferHero";
import RoomSection from "@/components/RoomSection";
import RoomImg from "~/images/camere/camera-1/camera-1-1.webp";

export async function generateMetadata(props: Omit<Props, "children">) {
  return generatePageMetadata({
    params: await props.params,
    pageName: "our_rooms",
    imageName: "rooms.png",
    pathSegment: "camere",
  });
}

export default function Camere({ params }: Readonly<Props>) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("Rooms");

  return (
    <>
<OfferHero
        image={RoomImg}
        title={t("title")}
        pricing=""
      />
      <RoomSection />
    </>
  );
}