"use client";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { FaHome, FaTree, FaSpa } from "react-icons/fa";

export default function AboutSection() {
  const t = useTranslations("AboutSection");

  const featureCards = [
    { icon: FaHome, title: t("feature_1_title"), description: t("feature_1_desc") },
    { icon: FaTree, title: t("feature_2_title"), description: t("feature_2_desc") },
    { icon: FaSpa, title: t("feature_3_title"), description: t("feature_3_desc") },
  ];

  return (
    <section className="w-full py-30 px-5 flex justify-center bg-primary">
      <div className="max-w-container mx-auto flex flex-col items-center gap-14">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-white font-extrabold">
            {t("title")}
          </h2>
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-white/80 text-xl max-w-700"
        >
          {t("description")}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-15 w-full max-w-1200">
          {featureCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
              className="flex flex-col items-center gap-10 p-20 bg-primary/20 rounded-2xl"
            >
              <card.icon className="w-24 h-24 text-white" />
              <h3 className="text-white font-semibold text-center">{card.title}</h3>
              <p className="text-white/80 text-center text-sm">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}