"use client";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { FaWifi, FaParking, FaTv, FaShower, FaCoffee, FaUtensils } from "react-icons/fa";

export default function FeaturesSection() {
  const t = useTranslations("Features");

  const amenities = [
    { icon: FaWifi, label: t("wifi") },
    { icon: FaParking, label: t("parking") },
    { icon: FaUtensils, label: t("dinner") },
    { icon: FaTv, label: t("tv") },
    { icon: FaShower, label: t("shower") },
    { icon: FaCoffee, label: t("breakfast") },
  ];

  return (
    <section className="w-full py-30 px-20">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-[family-name:var(--font-heading)] text-xl md:text-2xl text-text font-bold text-center mb-25"
      >
        {t("title")}
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-15 max-w-1000 mx-auto">
        {amenities.map((amenity, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="flex flex-col items-center p-20 rounded-normal bg-foreground shadow-md transition-all duration-200 hover:shadow-xl hover:brightness-105 cursor-pointer min-h-100"
          >
            <amenity.icon className="w-25 h-25 text-primary mt-10" />
            <span className="text-desc text-text text-center mt-auto mb-10">{amenity.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
