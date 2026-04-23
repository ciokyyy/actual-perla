import { ImagesCarousel } from "@/components/ImagesCarousel";
import { generatePageMetadata } from "@/libs/metadata";
import { Props } from "@/libs/props";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import PageHero from "@/components/PageHero";
import { MdBedroomParent } from "react-icons/md";

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
      <PageHero
        icon={<MdBedroomParent />}
        title={t("title")}
      />
      <section className="w-full px-20 py-30">
        <ImagesCarousel />
      </section>
    </>
  );
}
