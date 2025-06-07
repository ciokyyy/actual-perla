import { TbChristmasTreeFilled } from "react-icons/tb";
import { ImSpoonKnife } from "react-icons/im";
import { IoMdWater } from "react-icons/io";
import { FaCalculator, FaCalendarAlt } from "react-icons/fa";
import C from "@/components/ComponentNames";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Instaplay from "player.style/instaplay/react";
export async function generateMetadata(props: Omit<Props, "children">) {
  return generatePageMetadata({
    params: await props.params,
    pageName: "christmas_offer",
    imageName: "christmas.png",
    pathSegment: "oferta-craciun",
  });
}

import Colindatori from "/videos/colindatori.mp4";

import Cadou from "~/images/craciun/cadou.webp";
import FestivThree from "~/images/craciun/craciun-festiv-3.webp";
import FestivFour from "~/images/craciun/craciun-festiv-4.webp";
import Cai from "~/images/craciun/cai.webp";
import Pomana from "~/images/craciun/pomana.webp";

import Calculate from "@/components/Calculate";
import { generatePageMetadata } from "@/libs/metadata";
import { Props } from "@/libs/props";
import Video from "next-video";
import Link from "next/link";
export default function CraciunPage() {
  const t = useTranslations("ChristmasPage");

  return (
    <>
      <C.CraciunIcon as={TbChristmasTreeFilled} className="oferta-icon-title" />
      <C.TitluCraciun className="oferta-title" as="h1">
        {t("title")}
      </C.TitluCraciun>
      <C.TitluPret as="h4" className="title font-light">
        {t("pricing")}
      </C.TitluPret>
      <C.ImagineCadou className="mx-20">
        <Image
          src={Cadou}
          alt="Alt"
          className="aspect-2/1 rounded-normal object-cover object-center"
        />
      </C.ImagineCadou>
      <C.ContainerBeneficii className=" mx-20 flex flex-col place-items-center gap-20 *:justify-center sm:gap-0 ">
        <C.Mancare className="*:max-w-330 grid h-full w-full sm:grid-cols-2 *:!cursor-auto">
          <div className="square-card rounded-t-normal bg-foreground sm:rounded-l-normal relative sm:rounded-none">
            <ImSpoonKnife size="24" />
            <h3 className="text-logo">{t("food_drink.title")}</h3>
            <p className="text-desc">{t("food_drink.subtitle")}</p>
          </div>
          <div className="square-card rounded-b-normal sm:rounded-r-normal bg-primary text-desc p-40 sm:rounded-none">
            <p className="font-light text-white">{t("food_drink.desc1")}</p>
            <p className="font-light text-white">{t("food_drink.desc2")}</p>
          </div>
        </C.Mancare>
        <C.Spa className="*:max-w-330 grid h-full w-full sm:grid-cols-2 *:!cursor-auto">
          <div className="square-card rounded-t-normal bg-foreground sm:rounded-r-normal relative sm:col-[2/3] sm:mt-0 sm:rounded-none">
            <div className="rounded-normal bg-foreground absolute -left-28 -top-28 z-10 hidden aspect-square w-56 sm:block"></div>

            <IoMdWater size="24" />
            <h3 className="text-logo">{t("spa.title")}</h3>
            <p className="text-desc">{t("spa.subtitle")}</p>
          </div>
          <div className="square-card rounded-b-normal sm:rounded-l-normal bg-primary text-desc p-40 sm:col-[1/2] sm:row-[1/2] sm:rounded-none">
            <p className="font-light text-white">{t("spa.desc")}</p>
          </div>
        </C.Spa>
      </C.ContainerBeneficii>
      <C.IconProgram as={FaCalendarAlt} className="oferta-icon-title" />
      <C.TitluProgram as="h3" className="oferta-title">
        {t("schedule.title")}
      </C.TitluProgram>
      <C.AnotherContainerProgram className="relative w-full h-full grid place-items-center">
        <C.Gradient className="absolute inset-0 oferte-gradient -z-10"></C.Gradient>
        <C.ContainerProgram className="rounded-normal shadow-xl bg-primary *:py-30 sm:px-30 md:max-w-1200 grid h-full w-full place-items-end gap-20 px-10 text-center text-white *:flex *:flex-col *:gap-10 md:grid-cols-2">
          <C.Container1 className="flex-col md:col-span-2 md:place-self-center">
            <h3 className="text-logo">{t("schedule.dec23.title")}</h3>
            <p className="text-desc">{t("schedule.dec23.desc")}</p>
          </C.Container1>
          <C.Container2 className="flex-col">
            <h3 className="text-logo">{t("schedule.dec24.title")}</h3>
            <p className="text-desc">{t("schedule.dec24.desc")}</p>
            <div className="rounded-normal mt-50 grid grid-cols-1 grid-rows-2 overflow-hidden border-2 border-white">
              <Image
                src={Cai}
                alt=""
                className="aspect-2/1 object-cover object-center"
              />
              <Image
                src={Pomana}
                alt=""
                className="aspect-2/1 object-cover object-center"
              />
            </div>
          </C.Container2>
          <C.Container3 className="flex-col">
            <h3 className="text-logo">{t("schedule.dec25.title")}</h3>
            <p className="text-desc">{t("schedule.dec25.desc")}</p>
            <div className="rounded-normal mt-50 grid grid-cols-2 grid-rows-2 overflow-hidden border-2 border-white">
              <C.ContainerVideo className="row-span-2 aspect-1/2 w-full h-full relative">
                <Video
                  src={Colindatori}
                  theme={Instaplay}
                  autoplay
                  loop
                  muted
                  playsInline
                  preferPlayback="mse"
                ></Video>
              </C.ContainerVideo>
              <Image
                alt=""
                src={FestivThree}
                className="aspect-1/1 object-cover object-center"
              />
              <Image
                alt=""
                src={FestivFour}
                className="aspect-1/1 object-cover object-center"
              />
            </div>
          </C.Container3>
          <C.Container4 className="md:max-w-600 flex-col place-self-center md:col-span-2">
            <h3 className="text-logo">{t("schedule.dec26.title")}</h3>
            <p className="text-desc">{t("schedule.dec26.desc")}</p>
          </C.Container4>
        </C.ContainerProgram>
      </C.AnotherContainerProgram>
      <FaCalculator className="oferta-icon-title" />
      <C.Calculeaza as="h3" className="oferta-title">
        {t("calculate.title")}
      </C.Calculeaza>
      <div className="shadow-xl sm:mx-50 leading-40 bg-foreground rounded-normal max-w-450 m-20 p-40 text-center text-[20px]">
        <span className="font-bold">{t("calculate.discounts.title")}</span>
        <br />
        <br />
        {t("calculate.discounts.desc")}
      </div>
      <Calculate basePrice={3000}></Calculate>
      <Link
        type="primary-button"
        href="/rezerva-acum"
        className="mx-20 sm:mx-50 p-50 text-logo"
      >
        {t("book_now")}
      </Link>{" "}
    </>
  );
}
