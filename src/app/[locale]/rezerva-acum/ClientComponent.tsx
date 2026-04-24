"use client";
import { Link } from "@/components/ui/Link";
import { useTranslations } from "next-intl";
import { FaWhatsapp, FaPhone, FaCalendarCheck, FaClock, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "motion/react";

function ContactCard({
  icon: Icon,
  iconBg,
  title,
  description,
  actionText,
  href,
  delay = 0,
}: {
  icon: React.ElementType;
  iconBg: string;
  title: string;
  description: string;
  actionText: string;
  href: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="bg-surface rounded-2xl p-25 shadow-md border border-foreground/30 hover:shadow-xl transition-all duration-300 cursor-pointer">
        <div
          className={`w-60 h-60 rounded-full ${iconBg} flex items-center justify-center mx-auto mb-20 transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon className="w-28 h-28 text-white" />
        </div>
        <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-text mb-8 text-center">
          {title}
        </h2>
        <p className="text-sm text-text/60 text-center mb-18">{description}</p>
        <a
          href={href}
          className="flex items-center justify-center gap-8 bg-primary text-white rounded-full px-20 py-12 shadow-md transition-all duration-200 hover:brightness-110 hover:shadow-lg active:scale-95 cursor-pointer text-sm font-medium w-full"
        >
          <Icon className="w-14 h-14" />
          {actionText}
        </a>
      </div>
    </motion.div>
  );
}

function InfoRow({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <div className="flex items-center gap-10 text-sm">
      <Icon className="w-16 h-16 text-primary" />
      <span>{text}</span>
    </div>
  );
}

export default function ClientComponent() {
  const t = useTranslations("BookNow");
  const t2 = useTranslations("Menu");
  const t3 = useTranslations("Footer");

  const phoneNumber = "+40 750 490 838";
  const whatsappNumber = "40750490838";
  const email = "rezervari@perlabrazilor.ro";

  return (
    <section className="w-full px-20 py-30 md:py-40 bg-surface">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-20 mb-35">
          <ContactCard
            icon={FaPhone}
            iconBg="bg-primary"
            title={t("call_us")}
            description={t("call_us_desc")}
            actionText={phoneNumber}
            href={`tel:${phoneNumber.replace(/\s/g, "")}`}
            delay={0}
          />
          <ContactCard
            icon={FaWhatsapp}
            iconBg="bg-[#25D366]"
            title={t("whatsapp")}
            description={t("whatsapp_desc")}
            actionText={t("send_message")}
            href={`https://wa.me/${whatsappNumber}`}
            delay={0.1}
          />
          <ContactCard
            icon={FaEnvelope}
            iconBg="bg-[#EA4335]"
            title={t("email_us")}
            description={t("email_us_desc")}
            actionText={t("send_email")}
            href={`mailto:${email}`}
            delay={0.2}
          />
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-2xl p-25 shadow-md border border-foreground/30"
        >
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-center mb-20">
            {t("contact_info")}
          </h3>
          <div className="flex flex-wrap justify-center gap-x-25 gap-y-15">
            <InfoRow icon={FaClock} text={t3("open_hours")} />
            <InfoRow icon={FaPhone} text="+40 750 490 838" />
            <InfoRow icon={FaMapMarkerAlt} text={t3("address")} />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-30"
        >
          <p className="text-text/70 mb-15">{t("not_ready")}</p>
          <Link
            href="/preturi-valabilitate"
            type="primary-button"
            className="inline-flex items-center gap-8 text-sm px-20 py-10 !rounded-full"
          >
            <FaCalendarCheck className="w-14 h-14" />
            {t("verify_availability")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}