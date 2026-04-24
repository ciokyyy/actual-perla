"use client";

import { useTranslations } from "next-intl";
import { FaPhone, FaWhatsapp, FaEnvelope, FaClock, FaCalendarCheck } from "react-icons/fa";
import { motion } from "motion/react";

interface BenefitsProps {
  locale: string;
}

function BenefitCard({ icon: Icon, title, description, button, buttonHref }: { icon: React.ElementType; title: string; description: string; button?: string; buttonHref?: string }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white/80 backdrop-blur-md rounded-3xl p-25 text-center border border-white/50 shadow-xl"
    >
      <div className="w-50 h-50 rounded-xl bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center mx-auto mb-15">
        <Icon className="w-22 h-22 text-primary" />
      </div>
      <h4 className="font-[family-name:var(--font-heading)] text-xl font-semibold mb-10 text-primary">{title}</h4>
      <p className="text-sm text-text/70 mb-15">{description}</p>
      {button && buttonHref && (
        <a
          href={buttonHref}
          className="inline-flex items-center gap-8 bg-primary text-white rounded-full px-20 py-12 shadow-md transition-all duration-200 hover:brightness-110 hover:shadow-lg active:scale-95 cursor-pointer text-sm font-medium"
        >
          {button}
        </a>
      )}
    </motion.div>
  );
}

export function BookNowBenefits({ locale }: BenefitsProps) {
  const t = useTranslations("BookNow");

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20">
      <BenefitCard 
        icon={FaPhone} 
        title={t("call_us")} 
        description={t("call_us_desc")}
        button="+40 750 490 838"
        buttonHref="tel:+40750490838"
      />
      <BenefitCard 
        icon={FaWhatsapp} 
        title={t("whatsapp")} 
        description={t("whatsapp_desc")}
        button={t("send_message")}
        buttonHref="https://wa.me/+40750490838"
      />
      <BenefitCard 
        icon={FaEnvelope} 
        title={t("email_us")} 
        description={t("email_us_desc")}
        button={t("send_email")}
        buttonHref="mailto:perlabrazilor@gmail.com"
      />
      <BenefitCard 
        icon={FaCalendarCheck} 
        title={t("verify_availability")} 
        description={t("selectDatesAndCheck")}
        button={t("check_availability")}
        buttonHref="/preturi-valabilitate"
      />
    </div>
  );
}
