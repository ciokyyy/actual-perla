import { ImagesCarousel } from "@/components/ImagesCarousel";
import { generatePageMetadata } from "@/libs/metadata";
import { Props } from "@/libs/props";

export async function generateMetadata(props: Omit<Props, "children">) {
  return generatePageMetadata({
    params: await props.params,
    pageName: "our_rooms",
    imageName: "rooms.pmg",
  });
}

export default function Camere() {
  return <ImagesCarousel></ImagesCarousel>;
}
