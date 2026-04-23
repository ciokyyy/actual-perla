import { ImSpoonKnife } from "react-icons/im";
import { IoMdWater } from "react-icons/io";
import { FaCalculator, FaCalendarAlt } from "react-icons/fa";
import { use } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import Cadou from "~/images/craciun/cadou.webp";
import FestivThree from "~/images/craciun/craciun-festiv-3.webp";
import FestivFour from "~/images/craciun/craciun-festiv-4.webp";
import Cai from "~/images/craciun/cai.webp";
import Pomana from "~/images/craciun/pomana.webp";

import OfferHero from "@/components/OfferHero";
import Calculate from "@/components/Calculate";
import { generatePageMetadata } from "@/libs/metadata";
import { Props } from "@/libs/props";
import Video from "@/components/ui/Video";
import { Link } from "@/components/ui/Link";

export async function generateMetadata(props: Omit<Props, "children">) {
  return generatePageMetadata({
    params: await props.params,
    pageName: "christmas_offer",
    imageName: "christmas.png",
    pathSegment: "oferta-craciun",
  });
}

export default function CraciunPage({ params }: Readonly<Props>) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("ChristmasPage");

  return (
    <>
      <OfferHero
        image={Cadou}
        title={t("title")}
        pricing={t("pricing")}
        ctaText={t("book_now")}
      />
      <section className="w-full px-20 py-30 flex flex-col items-center gap-30">
        {/* Benefits */}
        <div className="mx-20 flex flex-col gap-20 w-full max-w-800">
          <div className="bg-surface rounded-2xl shadow-md overflow-hidden grid sm:grid-cols-2">
            <div className="p-25 flex flex-col gap-10">
              <ImSpoonKnife size="24" className="text-primary" />
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-text">
                {t("food_drink.title")}
              </h3>
              <p className="text-sm text-text/70">{t("food_drink.subtitle")}</p>
            </div>
            <div className="bg-primary p-25 flex flex-col gap-10">
              <p className="font-light text-white text-sm">{t("food_drink.desc1")}</p>
              <p className="font-light text-white text-sm">{t("food_drink.desc2")}</p>
            </div>
          </div>

          <div className="bg-surface rounded-2xl shadow-md overflow-hidden grid sm:grid-cols-2">
            <div className="p-25 flex flex-col gap-10 sm:order-2">
              <IoMdWater size="24" className="text-primary" />
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-text">
                {t("spa.title")}
              </h3>
              <p className="text-sm text-text/70">{t("spa.subtitle")}</p>
            </div>
            <div className="bg-primary p-25 flex flex-col gap-10 sm:order-1">
              <p className="font-light text-white text-sm">{t("spa.desc")}</p>
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div className="flex flex-col items-center gap-10">
          <FaCalendarAlt className="text-primary text-2xl" />
          <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-text">
            {t("schedule.title")}
          </h3>
        </div>

        <div className="relative w-full grid place-items-center">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent -z-10 rounded-2xl"></div>
          <div className="rounded-2xl shadow-xl bg-primary w-full max-w-1200 grid gap-20 px-20 py-30 text-center text-white md:grid-cols-2">
            <div className="flex flex-col gap-10 md:col-span-2 md:place-self-center">
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold">
                {t("schedule.dec23.title")}
              </h3>
              <p className="text-sm font-light">{t("schedule.dec23.desc")}</p>
            </div>
            <div className="flex flex-col gap-10">
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold">
                {t("schedule.dec24.title")}
              </h3>
              <p className="text-sm font-light">{t("schedule.dec24.desc")}</p>
              <div className="rounded-xl mt-20 grid grid-cols-1 grid-rows-2 overflow-hidden border-2 border-white">
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
            </div>
            <div className="flex flex-col gap-10">
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold">
                {t("schedule.dec25.title")}
              </h3>
              <p className="text-sm font-light">{t("schedule.dec25.desc")}</p>
              <div className="rounded-xl mt-20 grid grid-cols-2 grid-rows-2 overflow-hidden border-2 border-white">
                <div className="row-span-2 aspect-1/2 w-full h-full relative">
                  <Video src="/videos/colindatori.mp4" showMuteToggle />
                </div>
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
            </div>
            <div className="flex flex-col gap-10 md:max-w-600 place-self-center md:col-span-2">
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold">
                {t("schedule.dec26.title")}
              </h3>
              <p className="text-sm font-light">{t("schedule.dec26.desc")}</p>
            </div>
          </div>
        </div>

        {/* Calculator */}
        <div className="flex flex-col items-center gap-10">
          <FaCalculator className="text-primary text-2xl" />
          <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-text">
            {t("calculate.title")}
          </h3>
        </div>

        <div className="bg-surface rounded-2xl p-25 shadow-md border border-foreground/30 text-center max-w-450">
          <span className="font-bold text-text">{t("calculate.discounts.title")}</span>
          <br />
          <br />
          <span className="text-sm text-text/70">{t("calculate.discounts.desc")}</span>
        </div>

        <Calculate basePrice={3500} />

        <Link
          href="/rezerva-acum"
          className="bg-primary text-white rounded-full px-20 py-10 shadow-md transition-all duration-200 hover:brightness-110 hover:shadow-lg active:scale-95 cursor-pointer text-sm font-medium inline-flex items-center gap-8"
        >
          {t("book_now")}
        </Link>
      </section>
    </>
  );
}
