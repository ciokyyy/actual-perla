"use client";
import { Link } from "@/components/ui/Link";
import { motion } from "motion/react";
import Image from "next/image";
import { FaConciergeBell } from "react-icons/fa";
import { PiSparkleFill } from "react-icons/pi";
import { TbChristmasTreeFilled } from "react-icons/tb";
import DemipensiuneOne from "~/images/demipensiune/demipensiune-1.webp";
import DemipensiuneTwo from "~/images/demipensiune/demipensiune-2.webp";
import DemipensiuneThree from "~/images/demipensiune/demipensiune-3.webp";

import CraciunOne from "~/images/craciun/craciun-1.webp";
import CraciunTwo from "~/images/craciun/craciun-2.webp";
import CraciunThree from "~/images/craciun/craciun-3.webp";

import RevelionOne from "~/images/revelion/revelion-1.webp";
import RevelionTwo from "~/images/revelion/revelion-2.webp";
import RevelionThree from "~/images/revelion/revelion-3.webp";
import { useTranslations } from "next-intl";
import type { StaticImageData } from "next/image";

interface OfferCardProps {
  title: string;
  icon: React.ElementType;
  images: [StaticImageData, StaticImageData, StaticImageData];
  imageAlts: [string, string, string];
  href: "/oferta-demipensiune" | "/oferta-craciun" | "/oferta-revelion";
  ctaText: string;
  variant: "primary" | "inverse";
}

function OfferCard({ title, icon: Icon, images, imageAlts, href, ctaText, variant }: OfferCardProps) {
  const isPrimary = variant === "primary";

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-900 mx-auto rounded-normal overflow-hidden shadow-xl cursor-pointer"
    >
      {/* Card Header */}
      <Link
        href={href}
        type={isPrimary ? "card" : "card-inverse"}
        className="w-full flex flex-col items-center gap-15 p-25 md:p-30"
      >
        <Icon className="w-40 h-40 md:w-50 md:h-50" />
        <h3 className="font-[family-name:var(--font-heading)] text-logo text-center font-semibold">
          {title}
        </h3>
      </Link>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-0">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative aspect-square overflow-hidden"
        >
          <Image
            src={images[0]}
            alt={imageAlts[0]}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </motion.div>
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-square overflow-hidden"
        >
          <Image
            src={images[1]}
            alt={imageAlts[1]}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative aspect-[2/1] overflow-hidden col-span-2"
        >
          <Image
            src={images[2]}
            alt={imageAlts[2]}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          {/* CTA Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-30">
            <Link
              href={href}
              type="primary-button"
              className="shadow-xl"
            >
              {ctaText}
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function OfferCards() {
  const t = useTranslations("OffersPage");

  return (
    <div className="flex flex-col gap-60 md:gap-80 max-w-1000 mx-auto px-20">
      <OfferCard
        title={t("demipensiune_title")}
        icon={FaConciergeBell}
        images={[DemipensiuneOne, DemipensiuneTwo, DemipensiuneThree]}
        imageAlts={[t("demipensiune_alt_1"), t("demipensiune_alt_2"), t("demipensiune_alt_3")]}
        href="/oferta-demipensiune"
        ctaText={t("demipensiune_more")}
        variant="primary"
      />

      <OfferCard
        title={t("craciun_title")}
        icon={TbChristmasTreeFilled}
        images={[CraciunOne, CraciunTwo, CraciunThree]}
        imageAlts={[t("craciun_alt_1"), t("craciun_alt_2"), t("craciun_alt_3")]}
        href="/oferta-craciun"
        ctaText={t("craciun_more")}
        variant="inverse"
      />

      <OfferCard
        title={t("revelion_title")}
        icon={PiSparkleFill}
        images={[RevelionOne, RevelionTwo, RevelionThree]}
        imageAlts={[t("revelion_alt_1"), t("revelion_alt_2"), t("revelion_alt_3")]}
        href="/oferta-revelion"
        ctaText={t("revelion_more")}
        variant="primary"
      />
    </div>
  );
}

export function ClientComponent() {
  const t = useTranslations("OffersPage");

  return (
    <section className="w-full py-50">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-text font-bold text-center mb-50"
      >
        {t("section_title")}
      </motion.h2>

      <OfferCards />
    </section>
  );
}
