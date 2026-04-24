import { ImSpoonKnife } from "react-icons/im";
import { IoMdWater } from "react-icons/io";
import { FaCalculator, FaCalendarAlt } from "react-icons/fa";
import { type ElementType, use } from "react";
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

function OfferFeatureCard({
  icon: Icon,
  title,
  subtitle,
  points,
  tone = "surface",
}: {
  icon: ElementType;
  title: string;
  subtitle: string;
  points: string[];
  tone?: "surface" | "primary";
}) {
  const isPrimary = tone === "primary";

  return (
    <article
      className={`rounded-2xl p-20 md:p-25 shadow-md border ${
        isPrimary
          ? "bg-primary text-white border-primary/40"
          : "bg-surface text-text border-foreground/30"
      }`}
    >
      <div className="flex items-start gap-12">
        <div
          className={`w-44 h-44 rounded-xl flex items-center justify-center flex-shrink-0 ${
            isPrimary ? "bg-white/15 ring-1 ring-white/20" : "bg-primary/10 ring-1 ring-primary/20"
          }`}
        >
          <Icon className={`w-20 h-20 ${isPrimary ? "text-white" : "text-primary"}`} />
        </div>
        <div>
          <h3 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl font-bold">{title}</h3>
          <p className={`text-sm mt-6 ${isPrimary ? "text-white/85" : "text-text/70"}`}>{subtitle}</p>
        </div>
      </div>

      <ul className="mt-14 space-y-8">
        {points.map((point, idx) => (
          <li key={idx} className="flex items-start gap-8 text-sm leading-relaxed">
            <span
              className={`mt-4 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                isPrimary ? "bg-white/15" : "bg-primary/10"
              }`}
            >
              •
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function DayPlanCard({
  day,
  description,
}: {
  day: string;
  description: string;
}) {
  return (
    <article className="bg-surface rounded-2xl p-18 md:p-22 shadow-md border border-foreground/30 flex flex-col gap-12">
      <div className="inline-flex items-center gap-8 px-12 py-6 rounded-full bg-primary/10 text-primary text-xs font-semibold w-fit">
        <FaCalendarAlt className="w-12 h-12" />
        {day}
      </div>
      <p className="text-sm text-text/80 leading-relaxed">{description}</p>
    </article>
  );
}

export async function generateMetadata(props: Omit<Props, "children">) {
  return generatePageMetadata({
    params: await props.params,
    pageName: "christmas_offer",
    imageName: "christmas.webp",
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
        <div className="mx-20 flex flex-col gap-20 w-full max-w-1200">
          <div className="grid md:grid-cols-2 gap-16 md:gap-20">
            <OfferFeatureCard
              icon={ImSpoonKnife}
              title={t("food_drink.title")}
              subtitle={t("food_drink.subtitle")}
              points={[t("food_drink.desc1"), t("food_drink.desc2")]}
              tone="surface"
            />
            <OfferFeatureCard
              icon={IoMdWater}
              title={t("spa.title")}
              subtitle={t("spa.subtitle")}
              points={[t("spa.desc")]}
              tone="primary"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-10">
          <FaCalendarAlt className="text-primary text-2xl" />
          <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-text text-center">
            {t("schedule.title")}
          </h3>
        </div>

        <div className="w-full max-w-900 bg-primary/8 rounded-2xl p-16 md:p-20 border border-primary/15 shadow-md">
          <div className="flex flex-col gap-12">
            <DayPlanCard day={t("schedule.dec23.title")} description={t("schedule.dec23.desc")} />
            <DayPlanCard day={t("schedule.dec24.title")} description={t("schedule.dec24.desc")} />
            <DayPlanCard day={t("schedule.dec25.title")} description={t("schedule.dec25.desc")} />
            <DayPlanCard day={t("schedule.dec26.title")} description={t("schedule.dec26.desc")} />
          </div>
        </div>

        <div className="w-full max-w-900 grid grid-cols-2 md:grid-cols-3 gap-10">
          <div className="col-span-2 md:col-span-1 md:row-span-2 rounded-xl overflow-hidden border border-foreground/20 bg-surface min-h-[420px] md:min-h-0 h-full">
            <div className="h-full w-full">
              <Video src="/videos/colindatori.mp4" showMuteToggle />
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-foreground/20 bg-surface aspect-square relative">
            <Image src={Cai} alt="Plimbare cu sania trasa de cai prin peisajul de iarna al Bucovinei" fill className="object-cover object-center" sizes="(max-width: 768px) 50vw, 33vw" />
          </div>
          <div className="rounded-xl overflow-hidden border border-foreground/20 bg-surface aspect-square relative">
            <Image src={Pomana} alt="Masa traditionala cu preparate specifice Bucovinei" fill className="object-cover object-center" sizes="(max-width: 768px) 50vw, 33vw" />
          </div>
          <div className="rounded-xl overflow-hidden border border-foreground/20 bg-surface aspect-square relative">
            <Image alt="Masa festiva de Craciun decorata in stil traditional" src={FestivThree} fill className="object-cover object-center" sizes="(max-width: 768px) 50vw, 33vw" />
          </div>
          <div className="rounded-xl overflow-hidden border border-foreground/20 bg-surface aspect-square relative">
            <Image alt="Decoratiuni de Craciun in incinta pensiunii" src={FestivFour} fill className="object-cover object-center" sizes="(max-width: 768px) 50vw, 33vw" />
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
