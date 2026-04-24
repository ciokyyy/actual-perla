"use client";

import { useTranslations } from "next-intl";
import { FaUtensils, FaSpa, FaBed, FaGift } from "react-icons/fa";
import { motion } from "motion/react";
import Image from "next/image";
import Demipensiune1 from "~/images/demipensiune/demipensiune-1.webp";
import Demipensiune2 from "~/images/demipensiune/demipensiune-2.webp";
import Demipensiune3 from "~/images/demipensiune/demipensiune-3.webp";

interface BenefitsProps {
  locale: string;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-semibold text-center text-primary">
      {children}
    </h2>
  );
}

function BenefitCard({ icon: Icon, title, description, link, linkText }: { icon: React.ElementType; title: string; description: string; link: string; linkText: string }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white/80 backdrop-blur-md rounded-3xl p-25 text-center border border-white/50 shadow-xl"
    >
      <div className="w-50 h-50 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-15">
        <Icon className="w-22 h-22 text-primary" />
      </div>
      <h4 className="font-[family-name:var(--font-heading)] text-xl font-semibold mb-10 text-primary">{title}</h4>
      <p className="text-sm text-text/70 mb-15">{description}</p>
      <a
        href={link}
        className="inline-flex items-center gap-8 bg-primary text-white rounded-full px-20 py-12 shadow-md transition-all duration-200 hover:brightness-110 hover:shadow-lg active:scale-95 cursor-pointer text-sm font-medium"
      >
        {linkText}
      </a>
    </motion.div>
  );
}

function FoodSection() {
  const t = useTranslations("HalfBoardPage");
  
  return (
    <section className="grid md:grid-cols-2 gap-20 items-center">
      <div className="rounded-3xl overflow-hidden shadow-xl aspect-video relative">
        <Image src={Demipensiune2} alt="Traditional food" fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-15">
        <SectionTitle>{t("food_card_title")}</SectionTitle>
        <p className="text-text/70 text-center">{t("food_card_desc")}</p>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="bg-primary/10 rounded-full px-15 py-8 text-sm text-primary font-medium">{t("breakfast")}</div>
          <div className="bg-primary/10 rounded-full px-15 py-8 text-sm text-primary font-medium">{t("dinner")}</div>
        </div>
        <p className="text-sm text-text/60 text-center italic">{t("food_traditional")}</p>
      </div>
    </section>
  );
}

function SpaSection() {
  const t = useTranslations("HalfBoardPage");
  
  return (
    <section className="grid md:grid-cols-2 gap-20 items-center">
      <div className="rounded-3xl overflow-hidden shadow-xl aspect-video relative md:order-2">
        <Image src={Demipensiune1} alt="Spa" fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-15 md:order-1">
        <SectionTitle>{t("spa_card_title")}</SectionTitle>
        <p className="text-text/70 text-center">{t("spa_card_desc")}</p>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="bg-primary/10 rounded-full px-15 py-8 text-sm text-primary font-medium">Jacuzzi</div>
          <div className="bg-primary/10 rounded-full px-15 py-8 text-sm text-primary font-medium">Piscină</div>
          <div className="bg-primary/10 rounded-full px-15 py-8 text-sm text-primary font-medium">Saună</div>
        </div>
        <p className="text-sm text-text/60 text-center italic">{t("spa_included")}</p>
      </div>
    </section>
  );
}

function RoomsSection() {
  const t = useTranslations("HalfBoardPage");
  
  return (
    <section className="grid md:grid-cols-2 gap-20 items-center">
      <div className="rounded-3xl overflow-hidden shadow-xl aspect-video relative">
        <Image src={Demipensiune3} alt="Rooms" fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-15">
        <SectionTitle>{t("rooms_card_title")}</SectionTitle>
        <p className="text-text/70 text-center">{t("rooms_card_desc")}</p>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="bg-primary/10 rounded-full px-15 py-8 text-sm text-primary font-medium">8 Camere</div>
          <div className="bg-primary/10 rounded-full px-15 py-8 text-sm text-primary font-medium">Baie privată</div>
        </div>
      </div>
    </section>
  );
}

function OffersSection() {
  const t = useTranslations("HalfBoardPage");
  
  return (
    <section className="grid md:grid-cols-2 gap-20 items-center">
      <div className="rounded-3xl overflow-hidden shadow-xl aspect-video relative md:order-2">
        <Image src={Demipensiune3} alt="Offers" fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-15 md:order-1">
        <SectionTitle>{t("offers_card_title")}</SectionTitle>
        <p className="text-text/70 text-center">{t("offers_card_desc")}</p>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="bg-primary/10 rounded-full px-15 py-8 text-sm text-primary font-medium">Crăciun</div>
          <div className="bg-primary/10 rounded-full px-15 py-8 text-sm text-primary font-medium">Revelion</div>
        </div>
      </div>
    </section>
  );
}

export function HalfBoardBenefits({ locale }: BenefitsProps) {
  return (
    <div className="grid gap-30 md:gap-40">
      <FoodSection />
      <SpaSection />
      <RoomsSection />
      <OffersSection />
    </div>
  );
}