import { ImSpoonKnife } from "react-icons/im";
import { IoMdWater } from "react-icons/io";
import { FaCalculator, FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";

import { useTranslations } from "next-intl";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";

import Dansuri from "~/images/revelion/revelion-pg-1.webp";
import FestivThree from "~/images/revelion/revelion-pg-4.webp";
import FestivFour from "~/images/revelion/revelion-pg-5.webp";
import FestivTwo from "~/images/revelion/revelion-pg-3.webp";
import Cai from "~/images/craciun/cai.webp";

import Calculate from "@/components/Calculate";
import OfferHero from "@/components/OfferHero";
import Video from "@/components/ui/Video";
import { generatePageMetadata } from "@/libs/metadata";
import { Props } from "@/libs/props";
import { Link } from "@/components/ui/Link";

export async function generateMetadata(props: Omit<Props, "children">) {
  return generatePageMetadata({
    params: await props.params,
    pageName: "new_years_offer",
    imageName: "new_years_eve.png",
    pathSegment: "oferta-revelion",
  });
}

export default function RevelionPage({ params }: Readonly<Props>) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("NewYearPage");

  return (
    <>
      <OfferHero
        image={Dansuri}
        title={t("title")}
        pricing={t("pricing")}
        ctaText={t("book_now")}
      />
      <section className="w-full px-20 py-30 flex flex-col items-center gap-30">
        <div className="mx-20 flex flex-col place-items-center gap-20 w-full max-w-1200">
          <div className="grid h-full w-full sm:grid-cols-2">
            <div className="bg-surface rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none rounded-b-none sm:rounded-br-none p-25 shadow-md border border-foreground/30 relative flex flex-col gap-10 items-center text-center">
              <ImSpoonKnife size="24" className="text-primary" />
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-text">
                {t("food_drink.title")}
              </h3>
              <p className="text-sm text-text/70">{t("food_drink.subtitle")}</p>
            </div>
            <div className="bg-primary rounded-b-2xl sm:rounded-r-2xl sm:rounded-bl-none rounded-t-none sm:rounded-tl-none p-25 shadow-md flex flex-col gap-10 items-center text-center">
              <p className="font-light text-white">{t("food_drink.desc1")}</p>
              <p className="font-light text-white">{t("food_drink.desc2")}</p>
            </div>
          </div>

          <div className="grid h-full w-full sm:grid-cols-2">
            <div className="bg-primary rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none rounded-b-none sm:rounded-br-none p-25 shadow-md flex flex-col gap-10 items-center text-center sm:col-[1/2] sm:row-[1/2]">
              <p className="font-light text-white">{t("spa.desc")}</p>
            </div>
            <div className="bg-surface rounded-b-2xl sm:rounded-r-2xl sm:rounded-bl-none rounded-t-none sm:rounded-tl-none p-25 shadow-md border border-foreground/30 relative flex flex-col gap-10 items-center text-center sm:col-[2/3]">
              <IoMdWater size="24" className="text-primary" />
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-text">
                {t("spa.title")}
              </h3>
              <p className="text-sm text-text/70">{t("spa.subtitle")}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-10">
          <FaCalendarAlt className="text-primary text-2xl" />
          <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-text">
            {t("schedule.title")}
          </h3>
        </div>

        <div className="relative w-full h-full grid place-items-center max-w-1200">
          <div className="rounded-2xl shadow-xl bg-primary p-30 grid h-full w-full place-items-end gap-20 text-center text-white md:grid-cols-2">
            <div className="flex flex-col gap-10 md:col-span-2 md:place-self-center py-30">
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold">
                {t("schedule.dec29.title")}
              </h3>
              <p className="font-light">{t("schedule.dec29.desc")}</p>
            </div>
            <div className="flex flex-col gap-10 py-30">
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold">
                {t("schedule.dec30.title")}
              </h3>
              <p className="font-light">{t("schedule.dec30.desc")}</p>
              <div className="rounded-2xl mt-20 grid grid-cols-1 grid-rows-2 overflow-hidden border-2 border-white">
                <div className="row-span-2 aspect-square">
                  <Video src="/videos/pomana.mp4" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 py-30">
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold">
                {t("schedule.dec31.title")}
              </h3>
              <p className="font-light">{t("schedule.dec31.desc")}</p>
              <div className="rounded-2xl mt-20 grid grid-cols-2 grid-rows-2 overflow-hidden border-2 border-white">
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
            </div>
            <div className="flex flex-col gap-10 md:max-w-600 place-self-center md:col-span-2 py-30">
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold">
                {t("schedule.jan1.title")}
              </h3>
              <p className="font-light">{t("schedule.jan1.desc")}</p>
            </div>
          </div>
        </div>

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

        <Calculate basePrice={3700} />

        <Link
          type="primary-button"
          href="/rezerva-acum"
          className="bg-primary text-white rounded-full px-20 py-10 shadow-md transition-all duration-200 hover:brightness-110 hover:shadow-lg active:scale-95 cursor-pointer text-sm font-medium inline-flex items-center gap-8"
        >
          {t("book_now")}
        </Link>
      </section>
    </>
  );
}
