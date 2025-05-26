"use client";
import { IoIosBed, IoMdWater } from "react-icons/io";
import { ImSpoonKnife } from "react-icons/im";
import { BiSolidOffer } from "react-icons/bi";
import C from "@/components/ComponentNames";
import { Link } from "@/components/ui/Link";
import { useTranslations } from "next-intl";
import { ImageSlideshow } from "@/components/ImageSlideshow";
import { cn } from "@/libs/utils";

export default function Page() {
  const t = useTranslations("HalfBoardPage");
  const spa = useTranslations("Spa");
  const sala = useTranslations("Sala");
  return (
    <>
      <C.MainTitle as={"h3"} className="title">
        {t("title")}
      </C.MainTitle>
      <C.PicturesContainer
        className={cn(
          "grid w-full sm:mx-20 rounded-normal max-w-1200 relative",
          "aspect-1/2",
          "sm:aspect-2/1 sm:grid-cols-2"
        )}
      >
        <ImageSlideshow
          className="rounded-t-normal sm:rounded-none sm:rounded-l-normal"
          images={[
            { src: "/images/spa/ciubar-1.webp", alt: spa("ciubar_1_alt") },
            { src: "/images/spa/jacuzzi-1.webp", alt: spa("jacuzzi_1_alt") },
            { src: "/images/spa/piscina-1.webp", alt: spa("piscina_1_alt") },
            { src: "/images/spa/salina-1.webp", alt: spa("salina_1_alt") },
            { src: "/images/spa/sauna-1.webp", alt: spa("sauna_1_alt") },
          ]}
        ></ImageSlideshow>
        <ImageSlideshow
          className="rounded-b-normal sm:rounded-none sm:rounded-r-normal"
          initialDelay={2000}
          images={[
            { src: "/images/sala/sala-1.webp", alt: sala("sala_1_alt") },
            { src: "/images/sala/sala-4.webp", alt: sala("sala_4_alt") },
          ]}
        ></ImageSlideshow>
        <C.Container className="absolute w-full flex justify-center bottom-20 left-0">
          <C.ButtonRezervaAcum
            as={Link}
            type="primary-button"
            href="/rezerva-acum"
            className="z-10"
          >
            {t("book_now")}
          </C.ButtonRezervaAcum>
        </C.Container>
      </C.PicturesContainer>
      <C.GridContainer className=" grid-rows-auto mx-20 grid w-full grid-cols-1 place-items-center gap-20 *:grid *:place-items-center sm:w-auto sm:grid-cols-[repeat(2,minmax(250px,350px))] sm:grid-rows-[2fr_1fr]">
        <C.Cont>
          <C.ContainerText className="square-card rounded-t-normal text-desc sm:rounded-t-normal bg-primary p-40 !cursor-auto sm:rounded-none self-end max-w-350">
            <p className="font-light text-white">{t("food_included")}</p>
            <p className="font-light text-white">{t("food_traditional")}</p>
          </C.ContainerText>
          <C.LinkFood
            href="/mancare"
            as={Link}
            type="card"
            className="text-text shadow-xl square-card max-w-350 rounded-b-normal transition-all bg-foreground"
          >
            <ImSpoonKnife size="24" />
            <h3 className="text-logo">{t("food_card_title")}</h3>
            <p className="text-desc">{t("food_card_desc")}</p>
          </C.LinkFood>
        </C.Cont>
        <C.Contt>
          <C.ContainerText className="square-card text-right text-desc rounded-t-normal !cursor-auto bg-primary text-white p-40 max-w-350">
            <p className="font-light">{t("spa_included")}</p>
          </C.ContainerText>
          <C.LinkSpa
            href="/spa"
            type="card"
            as={Link}
            className="text-text rounded-b-normal shadow-xl square-card max-w-350 transition-all bg-foreground"
          >
            <IoMdWater size="24" />
            <h3 className="text-logo">{t("spa_card_title")}</h3>
            <p className="text-desc">{t("spa_card_desc")}</p>
          </C.LinkSpa>
        </C.Contt>
        <C.LinkRooms
          href="/camere"
          as={Link}
          type="card"
          className="text-text shadow-xl square-card max-w-350 rounded-normal transition-all bg-foreground"
        >
          <IoIosBed size="24" />
          <h3 className="text-logo">{t("rooms_card_title")}</h3>
          <p className="text-desc">{t("rooms_card_desc")}</p>
        </C.LinkRooms>
        <C.LinkOffers
          as={Link}
          href="/oferte"
          type="card"
          className="text-text shadow-xl square-card max-w-350 rounded-normal transition-all bg-foreground"
        >
          <BiSolidOffer size="24" />
          <h3 className="text-logo">{t("offers_card_title")}</h3>
          <p className="text-desc mx-40 text-center">{t("offers_card_desc")}</p>
        </C.LinkOffers>
      </C.GridContainer>
    </>
  );
}
