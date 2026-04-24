"use client";
import Logo from "@/components/ui/Logo";
import Image from "next/image";
import HeaderImage from "~/images/ui/header.jpg";
import LogoWhiteText from "~/images/ui/logo-white-text.webp";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { motion } from "motion/react";
import { FaBed, FaUtensils, FaSpa, FaMapMarkerAlt, FaCalendarCheck, FaPhone } from "react-icons/fa";
import { Link } from "@/components/ui/Link";

export default function Header() {
  const pathname = usePathname();
  const t = useTranslations("Hero");

  // Only render on home page - all other pages handle their own hero
  if (pathname !== "/") return null;

  const features = [
    { icon: FaBed, label: t("feature_rooms") },
    { icon: FaUtensils, label: t("feature_food") },
    { icon: FaSpa, label: t("feature_spa") },
    { icon: FaMapMarkerAlt, label: t("feature_location") },
  ];

  return (
    <header className="relative w-full min-h-[80dvh] md:min-h-[90dvh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        className="absolute inset-0 h-full w-full object-cover object-center"
        priority
        src={HeaderImage}
        alt="Pensiunea Perla Brazilor"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgb(29,91,23)]/70 via-[rgb(29,91,23)]/50 to-[rgb(29,91,23)]/80" />

      {/* Centered content */}
      <div className="relative z-10 text-center px-20 max-w-900 mx-auto flex flex-col items-center">
        {/* Logo */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-8 mb-30"
        >
          <Logo white className="h-80 md:h-110 w-auto drop-shadow-lg" />
          <Image
            priority
            className="h-60 md:h-80 w-auto drop-shadow-lg"
            src={LogoWhiteText}
            alt="Perla Brazilor"
          />
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="font-[family-name:var(--font-heading)] text-2xl md:text-4xl lg:text-5xl text-white font-bold mb-15 drop-shadow-lg"
        >
          {t("title")}
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
          className="text-sm md:text-base text-white/80 mb-30 max-w-500 mx-auto leading-relaxed"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          className="flex flex-wrap justify-center gap-12 mb-40"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              className="flex items-center gap-8 bg-white/15 backdrop-blur-sm rounded-full px-16 py-8 text-white text-sm"
            >
              <feature.icon className="w-16 h-16" />
              <span>{feature.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
          className="flex flex-wrap justify-center gap-15"
        >
          <Link
            href="/rezerva-acum"
            type="primary-button"
            className="inline-flex items-center gap-10 text-lg px-30 py-15"
          >
            <FaCalendarCheck />
            {t("cta_book")}
          </Link>
          <a
            href="tel:+40750490838"
            className="inline-flex items-center gap-10 text-lg px-30 py-15 rounded-normal bg-white/15 backdrop-blur-sm text-white border border-white/30 transition-all duration-200 hover:bg-white/25 hover:shadow-lg active:brightness-90 cursor-pointer"
          >
            <FaPhone />
            {t("cta_call")}
          </a>
        </motion.div>
      </div>

      {/* Bottom wave transition to background color */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80V40C240 80 480 0 720 0C960 0 1200 80 1440 40V80H0Z" fill="#cae0bd" />
        </svg>
      </div>
    </header>
  );
}