import { TbChristmasTreeFilled } from "react-icons/tb";
import { ImSpoonKnife } from "react-icons/im";
import { IoMdWater } from "react-icons/io";
import { FaCalculator, FaCalendarAlt } from "react-icons/fa";
import C from "@/components/ComponentNames";
import Image from "next/image";
import { useTranslations } from "next-intl";

import Dansuri from "~/images/revelion/revelion-pg-1.webp";
import FestivThree from "~/images/revelion/revelion-pg-4.webp";
import FestivFour from "~/images/revelion/revelion-pg-5.webp";
import FestivTwo from "~/images/revelion/revelion-pg-3.webp";
import Cai from "~/images/craciun/cai.webp";
import Pomana from "/videos/pomana.mp4";

export async function generateMetadata(props: Omit<Props, "children">) {
  return generatePageMetadata({
    params: await props.params,
    pageName: "new_years_offer",
    imageName: "new_years_eve.png",
  });
}

import Calculate from "@/components/Calculate";
import Video from "@/components/ui/Video";
import { Props } from "@/libs/props";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { generatePageMetadata } from "@/libs/metadata";
import { Link } from "@/components/ui/Link";
export default function RevelionPage({ params }: Readonly<Props>) {
  const t = useTranslations("NewYearPage");
  const { locale } = use(params);
  setRequestLocale(locale);
  return (
    <>
      <C.CraciunIcon as={TbChristmasTreeFilled} className="oferta-icon-title" />
      <C.TitluCraciun className="oferta-title">{t("title")}</C.TitluCraciun>
      <C.TitluPret as="h4" className="title font-light">
        {t("pricing")}
      </C.TitluPret>
      <C.ImagineCadou className="mx-20 max-w-1200">
        <Image
          src={Dansuri}
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
            <h3 className="text-logo">{t("schedule.dec29.title")}</h3>
            <p className="text-desc">{t("schedule.dec29.desc")}</p>
          </C.Container1>
          <C.Container2 className="flex-col">
            <h3 className="text-logo">{t("schedule.dec30.title")}</h3>
            <p className="text-desc">{t("schedule.dec30.desc")}</p>
            <div className="rounded-normal mt-50 grid grid-cols-1 grid-rows-2 overflow-hidden border-2 border-white">
              <C.VideoContainer className="row-span-2 aspect-square">
                <Video src={Pomana}></Video>
              </C.VideoContainer>
            </div>
          </C.Container2>
          <C.Container3 className="flex-col">
            <h3 className="text-logo">{t("schedule.dec31.title")}</h3>
            <p className="text-desc">{t("schedule.dec31.desc")}</p>
            <div className="rounded-normal mt-50 grid grid-cols-2 grid-rows-2 overflow-hidden border-2 border-white">
              <Image
                src={FestivTwo}
                alt=""
                className="aspect-1/1 object-cover object-center"
              />
              <Image
                alt=""
                src={Cai}
                className="aspect-1/1 object-cover object-center"
              />
              <Image
                alt=""
                src={FestivThree}
                className="aspect-1/1 object-cover object-center rotate-90"
              />
              <Image
                alt=""
                src={FestivFour}
                className="aspect-1/1 object-cover object-center"
              />
            </div>
          </C.Container3>
          <C.Container4 className="md:max-w-600 flex-col place-self-center md:col-span-2">
            <h3 className="text-logo">{t("schedule.jan1.title")}</h3>
            <p className="text-desc">{t("schedule.jan1.desc")}</p>
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
      <Calculate basePrice={3200}></Calculate>
      <Link
        type="primary-button"
        href="/rezerva-acum"
        className="mx-20 sm:mx-50 p-50 text-logo"
      >
        {t("book_now")}
      </Link>
    </>
  );
}
