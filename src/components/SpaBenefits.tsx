"use client";

import { useTranslations } from "next-intl";
import { FaWater, FaHotTub, FaHeart, FaFire, FaTree, FaMountain, FaLeaf, FaTint, FaLungs, FaBrain } from "react-icons/fa";
import { IoMdWater, IoMdLeaf } from "react-icons/io";
import { motion } from "motion/react";
import Image from "next/image";
import SalinaOne from "~/images/spa/salina-1.webp";
import SaunaOne from "~/images/spa/sauna-1.webp";
import SaunaTwo from "~/images/spa/sauna-2.webp";

interface BenefitsProps {
  locale: string;
}

function VideoBg({ src, className }: { src: string; className?: string }) {
  return (
    <video autoPlay loop muted playsInline className={className || "w-full h-full object-cover"}>
      <source src={src} type="video/mp4" />
    </video>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-semibold text-center">
      {children}
    </h2>
  );
}

function BenefitCard({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-surface rounded-2xl p-20 text-center border border-foreground/30 shadow-md"
    >
      <div className="w-50 h-50 rounded-xl bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center mx-auto mb-10">
        <Icon className="w-30 h-30 text-primary" />
      </div>
      <h4 className="font-semibold mb-5">{title}</h4>
      <p className="text-sm text-text/70">{description}</p>
    </motion.div>
  );
}

export function SpaBenefits({ locale }: BenefitsProps) {
  const t = useTranslations("SpaPage");

  return (
    <section className="grid md:grid-cols-2 gap-20 items-center">
      <div className="rounded-2xl overflow-hidden shadow-xl aspect-video relative">
        <VideoBg src="/videos/ciubar-video-3.mp4" />
      </div>
      <div className="flex flex-col gap-15">
        <SectionTitle>{t("ciubar.title")}</SectionTitle>
        <p className="text-text/70 text-center">{t("ciubar.description")}</p>
        <div className="grid grid-cols-2 gap-10">
          <BenefitCard icon={IoMdWater} title={t("ciubar.benefits.detox.title")} description={t("ciubar.benefits.detox.desc")} />
          <BenefitCard icon={FaHeart} title={t("ciubar.benefits.muscleRelax.title")} description={t("ciubar.benefits.muscleRelax.desc")} />
        </div>
      </div>
    </section>
  );
}

export function VideoShowcase() {
  return (
    <section className="rounded-2xl overflow-hidden shadow-xl aspect-video relative">
      <VideoBg src="/videos/jacuzzi-video-1.mp4" />
    </section>
  );
}

export function JacuzziBenefits({ locale }: BenefitsProps) {
  const t = useTranslations("SpaPage");

  return (
    <section className="grid md:grid-cols-2 gap-20 items-center">
      <div className="flex flex-col gap-15">
        <SectionTitle>{t("jacuzzi.title")}</SectionTitle>
        <p className="text-text/70 text-center">{t("jacuzzi.intro")}</p>
        <div className="grid grid-cols-2 gap-10">
          <BenefitCard icon={FaHotTub} title={t("jacuzzi.benefits.hydrotherapy.title")} description={t("jacuzzi.benefits.hydrotherapy.description")} />
          <BenefitCard icon={FaBrain} title={t("jacuzzi.benefits.stressRelief.title")} description={t("jacuzzi.benefits.stressRelief.description")} />
        </div>
      </div>
      <div className="rounded-2xl overflow-hidden shadow-xl aspect-video relative order-first md:order-last">
        <VideoBg src="/videos/jacuzzi-video-1.mp4" />
      </div>
    </section>
  );
}

export function PiscinaBenefits({ locale }: BenefitsProps) {
  const t = useTranslations("SpaPage");

  return (
    <section className="grid md:grid-cols-2 gap-20 items-center">
      <div className="rounded-2xl overflow-hidden shadow-xl aspect-video relative">
        <VideoBg src="/videos/piscina-video-1.mp4" />
      </div>
      <div className="flex flex-col gap-15">
        <SectionTitle>{t("piscina.title")}</SectionTitle>
        <p className="text-text/70 text-center">{t("piscina.description")}</p>
        <div className="grid grid-cols-2 gap-10">
          <BenefitCard icon={IoMdLeaf} title={t("piscina.benefits.swimming_title")} description={t("piscina.benefits.swimming_desc")} />
          <BenefitCard icon={FaTint} title={t("piscina.benefits.waterQuality_title")} description={t("piscina.benefits.waterQuality_desc")} />
        </div>
      </div>
    </section>
  );
}

export function SaunaBenefits({ locale }: BenefitsProps) {
  const t = useTranslations("SpaPage");

  return (
    <section className="grid md:grid-cols-2 gap-20 items-center">
      <div className="flex flex-col gap-15">
        <SectionTitle>{t("sauna.title")}</SectionTitle>
        <p className="text-text/70 text-center">{t("sauna.description")}</p>
        <div className="grid grid-cols-2 gap-10">
          <BenefitCard icon={FaFire} title={t("sauna.benefits.detox.title")} description={t("sauna.benefits.detox.desc")} />
          <BenefitCard icon={FaLeaf} title={t("sauna.benefits.hydration.title")} description={t("sauna.benefits.hydration.desc")} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 rounded-2xl overflow-hidden shadow-xl">
        <div className="relative aspect-square">
          <Image src={SaunaOne} alt="Sauna" fill className="object-cover" />
        </div>
        <div className="relative aspect-square">
          <Image src={SaunaTwo} alt="Sauna" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}

export function SalinaBenefits({ locale }: BenefitsProps) {
  const t = useTranslations("SpaPage");

  return (
    <section className="grid md:grid-cols-2 gap-20 items-center">
      <div className="rounded-2xl overflow-hidden shadow-xl aspect-video relative">
        <Image src={SalinaOne} alt="Salina" fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-15">
        <SectionTitle>{t("salina.title")}</SectionTitle>
        <p className="text-text/70 text-center">{t("salina.description")}</p>
        <div className="grid grid-cols-2 gap-10">
          <BenefitCard icon={FaMountain} title={t("salina.benefits.naturalEnvironment.title")} description={t("salina.benefits.naturalEnvironment.desc")} />
          <BenefitCard icon={FaLungs} title={t("salina.benefits.respiratoryHealth.title")} description={t("salina.benefits.respiratoryHealth.desc")} />
        </div>
      </div>
    </section>
  );
}
