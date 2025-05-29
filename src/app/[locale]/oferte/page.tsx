import { BiSolidOffer } from "react-icons/bi";
import { TbChristmasTreeFilled } from "react-icons/tb";
import { motion } from "motion/react";
import { PiSparkleFill } from "react-icons/pi";
import { FaConciergeBell } from "react-icons/fa";
import C from "@/components/ComponentNames";
import { Link } from "@/components/ui/Link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export async function generateMetadata(props: Omit<Props, "children">) {
  return generatePageMetadata({
    params: await props.params,
    pageName: "offers",
    imageName: "rezerva.png",
  });
}

import DemipensiuneOne from "~/images/demipensiune/demipensiune-1.webp";
import DemipensiuneTwo from "~/images/demipensiune/demipensiune-2.webp";
import DemipensiuneThree from "~/images/demipensiune/demipensiune-3.webp";

import CraciunOne from "~/images/craciun/craciun-1.webp";
import CraciunTwo from "~/images/craciun/craciun-2.webp";
import CraciunThree from "~/images/craciun/craciun-3.webp";

import RevelionOne from "~/images/revelion/revelion-1.webp";
import RevelionTwo from "~/images/revelion/revelion-2.webp";
import RevelionThree from "~/images/revelion/revelion-3.webp";
import { generatePageMetadata } from "@/libs/metadata";
import { Props } from "@/libs/props";

export default function OfertePage() {
  const t = useTranslations("OffersPage");

  return (
    <>
      <h2 className="title mb-40 flex items-center gap-6">
        {t("our_offers")} <BiSolidOffer size="35" />
      </h2>
      <C.ContainerWGradient className="relative w-full grid place-items-center">
        <C.Gradient className="absolute inset-0 oferte-gradient -z-10"></C.Gradient>

        <C.ContainerDemipensiune className="grid place-items-center overflow-hidden p-20 sm:grid-cols-2 with-drop-shadow ">
          <C.AnimateFromTop
            as={motion.div}
            initial={{ y: "-15%" }}
            whileInView={{ y: "0" }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            className="sm:col-span-2 max-w-500 w-full"
          >
            <C.Link
              as={Link}
              href="/oferta-demipensiune"
              type="card"
              className=" square-card bg-foreground rounded-t-normal transition-all  sm:!max-w-350 text-text mx-auto flex flex-col items-center gap-10 p-20"
            >
              <FaConciergeBell className="w-35 h-35 md:w-50 md:h-50" />
              <h3 className="text-logo text-center">
                {t("demipensiune_title")}
              </h3>
            </C.Link>
          </C.AnimateFromTop>

          <C.AnimateFromLeft
            as={motion.div}
            initial={{ x: -100, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-500"
          >
            <Image
              src={DemipensiuneOne}
              alt="Demipensiune 1"
              className="sm:rounded-l-normal aspect-square object-cover object-center"
            />
          </C.AnimateFromLeft>
          <C.AnimateFromRight
            as={motion.div}
            initial={{ x: 100, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-500"
          >
            <Image
              src={DemipensiuneTwo}
              alt="Demipensiune 2"
              className="sm:rounded-r-normal aspect-square w-full object-cover object-center"
            />
          </C.AnimateFromRight>
          <C.AnimateFromBottom
            as={motion.div}
            initial={{ y: 100, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex flex-col items-center sm:col-span-2 max-w-500"
          >
            <Image
              src={DemipensiuneThree}
              alt="Demipensiune 3"
              className="rounded-b-normal aspect-square w-full object-cover object-center"
            />
            <C.LinkAflaMaiMulte
              as={Link}
              href="/oferta-demipensiune"
              type="primary-button"
              className=" bottom-1/10 absolute"
            >
              {t("demipensiune_more")}
            </C.LinkAflaMaiMulte>
          </C.AnimateFromBottom>
        </C.ContainerDemipensiune>
      </C.ContainerWGradient>
      <C.ContainerWGradient className="relative w-full grid place-items-center">
        <C.Gradient className="absolute inset-0 oferte-gradient -z-10"></C.Gradient>
        <C.ContainerCraciun className="*:max-w-500 *:w-full grid place-items-center overflow-hidden p-20 sm:grid-cols-2 with-drop-shadow with-drop-shadow">
          <C.AnimateFromTop
            as={motion.div}
            initial={{ y: "-15%" }}
            whileInView={{ y: "0" }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            className="sm:col-span-2"
          >
            <C.Link
              type="card-inverse"
              as={Link}
              href="/oferta-craciun"
              className="square-card bg-primary rounded-t-normal transition-all sm:!max-w-350 mx-auto flex flex-col items-center gap-10 p-20 text-white"
            >
              <TbChristmasTreeFilled className="w-35 h-35 md:w-50 md:h-50" />
              <h3 className="text-logo text-center">{t("craciun_title")}</h3>
            </C.Link>
          </C.AnimateFromTop>
          <C.AnimateFromLeft
            as={motion.div}
            initial={{ x: -100, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src={CraciunOne}
              alt="Craciun 1"
              className="sm:rounded-l-normal aspect-square w-full object-cover object-center"
            />
          </C.AnimateFromLeft>
          <C.AnimateFromRight
            as={motion.div}
            initial={{ x: 100, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src={CraciunTwo}
              alt="Craciun 2"
              className="sm:rounded-r-normal aspect-square w-full object-cover object-center"
            />
          </C.AnimateFromRight>
          <C.AnimateFromBottom
            as={motion.div}
            initial={{ y: 100, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex flex-col items-center sm:col-span-2"
          >
            <Image
              src={CraciunThree}
              alt="Craciun 3"
              className="rounded-b-normal aspect-square w-full object-cover object-center"
            />
            <C.LinkAflaMaiMulte
              as={Link}
              type="primary-button"
              href="/oferta-craciun"
              className="bottom-1/10 absolute"
            >
              {t("craciun_more")}
            </C.LinkAflaMaiMulte>
          </C.AnimateFromBottom>
        </C.ContainerCraciun>
      </C.ContainerWGradient>
      <C.ContainerRevelion className="*:max-w-500 *:w-full grid place-items-center overflow-hidden p-20 sm:grid-cols-2 with-drop-shadow">
        <C.AnimateFromTop
          as={motion.div}
          initial={{ y: "-15%" }}
          whileInView={{ y: "0" }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className="sm:col-span-2"
        >
          <C.Link
            type="card-inverse"
            as={Link}
            href="/oferta-revelion"
            className="square-card bg-primary rounded-t-normal transition-all sm:!max-w-350 mx-auto flex flex-col items-center gap-10 p-20 text-white"
          >
            <PiSparkleFill className="w-35 h-35 md:w-50 md:h-50" />
            <h3 className="text-logo text-center">{t("revelion_title")}</h3>
          </C.Link>
        </C.AnimateFromTop>
        <C.AnimateFromLeft
          as={motion.div}
          initial={{ x: -100, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src={RevelionOne}
            alt="Revelion 1"
            className="sm:rounded-l-normal aspect-square w-full object-cover object-center"
          />
        </C.AnimateFromLeft>
        <C.AnimateFromRight
          as={motion.div}
          initial={{ x: 100, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src={RevelionTwo}
            alt="Revelion 2"
            className="sm:rounded-r-normal aspect-square w-full object-cover object-center"
          />
        </C.AnimateFromRight>
        <C.AnimateFromBottom
          as={motion.div}
          initial={{ y: 100, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex flex-col items-center sm:col-span-2"
        >
          <Image
            src={RevelionThree}
            alt="Revelion 3"
            className="rounded-b-normal aspect-square w-full object-cover object-center"
          />
          <C.LinkAflaMaiMulte
            as={Link}
            type="primary-button"
            href="/oferta-revelion"
            className="bottom-1/10 absolute"
          >
            {t("revelion_more")}
          </C.LinkAflaMaiMulte>
        </C.AnimateFromBottom>
      </C.ContainerRevelion>
    </>
  );
}
