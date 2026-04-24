"use client";
import Logo from "@/components/ui/Logo";
import LogoWhiteText from "~/images/ui/logo-white-text.webp";
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";
import { FaCalendarCheck } from "react-icons/fa";
import { Link } from "@/components/ui/Link";

interface OfferHeroProps {
  image: StaticImageData;
  title: string;
  pricing: string;
  ctaText?: string;
}

export default function OfferHero({ image, title, pricing, ctaText }: OfferHeroProps) {
  return (
    <header className="relative w-full min-h-[70dvh] md:min-h-[80dvh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        className="absolute inset-0 h-full w-full object-cover object-center"
        priority
        src={image}
        alt={title}
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
          className="flex flex-col items-center gap-8 mb-25"
        >
          <Logo white className="h-75 md:h-100 w-auto drop-shadow-lg" />
          <Image
            priority
            className="h-55 md:h-75 w-auto drop-shadow-lg"
            src={LogoWhiteText}
            alt="Perla Brazilor"
          />
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="font-[family-name:var(--font-heading)] text-2xl md:text-4xl lg:text-5xl text-white font-bold mb-12 drop-shadow-lg"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
          className="text-sm md:text-base text-white/80 mb-25 drop-shadow-md"
        >
          {pricing}
        </motion.p>

        {ctaText && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          >
            <Link
              href="/rezerva-acum"
              type="primary-button"
              className="inline-flex items-center gap-10 text-lg px-30 py-15"
            >
              <FaCalendarCheck />
              {ctaText}
            </Link>
          </motion.div>
        )}
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80V40C240 80 480 0 720 0C960 0 1200 80 1440 40V80H0Z" fill="#cae0bd" />
        </svg>
      </div>
    </header>
  );
}
