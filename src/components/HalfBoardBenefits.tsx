"use client";

import { useTranslations } from "next-intl";
import { FaUtensils, FaSpa, FaBed, FaCheck, FaArrowRight } from "react-icons/fa";
import { motion } from "motion/react";
import Image from "next/image";
import Demipensiune1 from "~/images/demipensiune/demipensiune-1.webp";
import Demipensiune2 from "~/images/demipensiune/demipensiune-2.webp";
import Demipensiune3 from "~/images/demipensiune/demipensiune-3.webp";

interface BenefitsProps {
  locale: string;
}

function FeatureCard({ 
  image, 
  icon: Icon, 
  title, 
  items, 
  reversed 
}: { 
  image: any; 
  icon: React.ElementType; 
  title: string; 
  items: string[];
  reversed?: boolean;
}) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="relative rounded-3xl overflow-hidden h-[400px] md:h-[450px] shadow-xl"
    >
      <Image src={image} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgb(29,91,23)]/90 via-[rgb(29,91,23)]/50 to-transparent" />
      
      <div className="absolute inset-0 flex flex-col justify-end p-30 md:p-40">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-20"
        >
          <Icon className="w-32 h-32 md:w-40 md:h-40 text-white" />
        </motion.div>
        
        <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-15">
          {title}
        </h3>
        
        <div className="flex flex-col gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ x: reversed ? 20 : -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
              className="flex items-center gap-10 text-white/90"
            >
              <div className="w-20 h-20 rounded-xl bg-white/20 backdrop-blur-sm ring-1 ring-white/20 flex items-center justify-center">
                <FaCheck className="w-10 h-10" />
              </div>
              <span className="text-sm font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-center text-primary mb-30">
      {children}
    </h2>
  );
}

export function HalfBoardBenefits({ locale }: BenefitsProps) {
  const t = useTranslations("HalfBoardPage");

  return (
    <div className="flex flex-col gap-40 md:gap-50">
      <SectionTitle>{t("section_title") || t("title")}</SectionTitle>
      
      <div className="grid md:grid-cols-2 gap-20 md:gap-25">
        <FeatureCard
          image={Demipensiune2}
          icon={FaUtensils}
          title={t("food_card_title")}
          items={[t("breakfast"), t("dinner"), t("food_traditional")]}
        />
        
        <FeatureCard
          image={Demipensiune1}
          icon={FaSpa}
          title={t("spa_card_title")}
          items={[t("spa_included"), "Jacuzzi", "Saună", "Piscină"]}
          reversed
        />
        
        <FeatureCard
          image={Demipensiune3}
          icon={FaBed}
          title={t("rooms_card_title")}
          items={["8 Camere", "Baie privată", "Vedere la munte"]}
        />
        
        <div className="relative rounded-3xl overflow-hidden h-[400px] md:h-[450px] shadow-xl bg-primary/90 flex flex-col items-center justify-center p-30 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-20"
          >
            <span className="text-6xl md:text-7xl font-[family-name:var(--font-heading)] font-bold text-white">
              2
            </span>
            <span className="text-3xl md:text-4xl text-white/80 ml-5">
              /
            </span>
            <span className="text-4xl md:text-5xl text-white/60 ml-3">
              7
            </span>
          </motion.div>
          
          <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-white mb-10">
            {t("offers_card_title")}
          </h3>
          
          <p className="text-white/70 text-sm mb-20 max-w-300">
            {t("offers_card_desc")}
          </p>
          
          <a
            href="/"
            className="inline-flex items-center gap-8 bg-white text-primary rounded-full px-20 py-12 shadow-lg transition-all duration-200 hover:brightness-110 hover:shadow-xl active:scale-95 cursor-pointer text-sm font-medium"
          >
            Vezi ofertele
            <FaArrowRight className="w-14 h-14" />
          </a>
        </div>
      </div>
      
      <div className="bg-white/80 backdrop-blur-md rounded-3xl p-30 md:p-40 text-center border border-white/50 shadow-xl">
        <p className="text-text/70 text-lg mb-15">
          {t("food_included")}
        </p>
        <div className="flex flex-wrap justify-center gap-15">
          <div className="bg-primary text-white rounded-full px-20 py-10 text-sm font-semibold">
            {t("breakfast")}
          </div>
          <div className="bg-primary text-white rounded-full px-20 py-10 text-sm font-semibold">
            {t("dinner")}
          </div>
        </div>
      </div>
    </div>
  );
}
