import { ImagesCarousel } from "@/components/ImagesCarousel";
import { generatePageMetadata } from "@/libs/metadata";
import { Props } from "@/libs/props";
import { useTranslations } from "next-intl";
import { MdBedroomParent } from "react-icons/md";

export async function generateMetadata(props: Omit<Props, "children">) {
  return generatePageMetadata({
    params: await props.params,
    pageName: "our_rooms",
    imageName: "rooms.png",
    pathSegment: "camere",
  });
}

export default function Camere() {
  const t = useTranslations("Rooms");
  return (
    <>
      <h1 className="oferta-title flex gap-10 items-center justify-center">
        <MdBedroomParent />
        {t("title")}
      </h1>
      <ImagesCarousel></ImagesCarousel>
    </>
  );
}
