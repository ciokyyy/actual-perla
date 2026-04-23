"use client";
import { motion } from "motion/react";

interface PageHeroProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
}

export default function PageHero({ icon, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative w-full py-50 md:py-70 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 header-gradient" />
      
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-surface/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 text-center px-20 max-w-900 mx-auto">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="inline-flex items-center justify-center w-60 h-60 rounded-full bg-surface/15 backdrop-blur-sm text-white mb-20"
        >
          <span className="text-3xl">{icon}</span>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl text-white font-bold drop-shadow-lg"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className="text-white/80 mt-15 text-lg max-w-600 mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60V30C240 60 480 0 720 0C960 0 1200 60 1440 30V60H0Z" fill="#cae0bd" />
        </svg>
      </div>
    </section>
  );
}
