"use client";
import { useState, useEffect } from "react";
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

function CompactOfferCardLarge({ title, icon: Icon, images, href, subtitle, price }: { title: string; icon: React.ElementType; images: [StaticImageData, StaticImageData, StaticImageData]; href: string; subtitle: string; price: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setIndex((i) => (i + 1) % images.length), 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Link href={href as "/oferta-craciun"} className="flex-1 group relative rounded-3xl overflow-hidden shadow-lg cursor-pointer">
      <div className="relative h-full min-h-350 md:min-h-400" style={{ paddingBottom: "80%" }}>
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: i === index ? 1 : 0, scale: i === index ? 1 : 1.2 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Image src={img} alt="" fill className="object-cover" />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-20 flex flex-col items-center gap-10">
          <Icon className="w-40 h-40 text-white" />
          <h3 className="font-[family-name:var(--font-heading)] text-white text-2xl font-bold text-center">{title}</h3>
          <p className="text-white/80 text-center">{subtitle}</p>
          <p className="text-white/60 text-center text-sm">{price}</p>
          <button className="px-20 py-10 bg-primary text-white rounded-2xl font-medium">
            Rezervă acum !
          </button>
        </div>
      </div>
    </Link>
  );
}

function CompactOfferCardSmall({ title, icon: Icon, image, href, price }: { title: string; icon: React.ElementType; image: StaticImageData; href: string; price: string }) {
  return (
    <Link href={href as any} className="group flex-1 relative rounded-2xl overflow-hidden shadow-md cursor-pointer">
      <div className="relative h-150">
        <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-15 flex flex-col items-center gap-5">
          <Icon className="w-20 h-20 text-white" />
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-white text-base font-bold text-center">{title}</h3>
            <p className="text-white/60 text-center text-xs">{price}</p>
          </div>
          <button className="px-10 py-5 bg-primary text-white rounded-xl text-xs">
            Rezervă acum !
          </button>
        </div>
      </div>
    </Link>
  );
}

export function CompactOfferCards() {
  const t = useTranslations("OffersPage");

  return (
    <section className="w-full py-30 px-5">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-text font-bold text-center"
      >
        {t("section_title")}
      </motion.h2>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-text/70 mt-8 mb-30 max-w-600 mx-auto"
      >
        {t("section_subtitle")}
      </motion.p>

      <div className="flex flex-col md:flex-row gap-15 max-w-1200 mx-auto">
        {/* Main large card */}
        <CompactOfferCardLarge 
          title={t("craciun_title")} 
          icon={TbChristmasTreeFilled} 
          images={[CraciunOne, CraciunTwo, CraciunThree]} 
          href="/oferta-craciun"
          subtitle="Bucate pe-ndelete, distracție și tradiții"
          price="De la 3,200 lei de persoană"
        />
        
        {/* Small cards stack */}
        <div className="flex flex-col gap-15">
          <CompactOfferCardSmall
            title={t("revelion_title")}
            icon={PiSparkleFill}
            image={RevelionOne}
            href="/oferta-revelion"
            price="De la 3,500 lei de persoană"
          />
          <CompactOfferCardSmall
            title={t("demipensiune_title")}
            icon={FaConciergeBell}
            image={DemipensiuneOne}
            href="/oferta-demipensiune"
            price="De la 650 lei pe noapte"
          />
        </div>
      </div>
    </section>
  );
}
