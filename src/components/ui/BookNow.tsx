"use client";
import { useTranslations } from "next-intl";
import { Link } from "./Link";
import { AnimatePresence, motion, useScroll } from "motion/react";
import { useState } from "react";
import { FaCalendarCheck } from "react-icons/fa";

export function BookNow() {
  const t = useTranslations("BookNow");
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  scrollYProgress.on("change", (scroll) => {
    setIsVisible(scroll > 0.01 && scroll < 0.99);
  });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-20 right-20 z-40"
        >
          <Link
            href="/rezerva-acum"
            className="flex items-center gap-8 bg-primary text-white rounded-full px-18 py-10 shadow-lg transition-all duration-200 hover:brightness-110 hover:shadow-xl active:scale-95 cursor-pointer text-sm font-medium"
          >
            <FaCalendarCheck className="w-15 h-15" />
            <span>{t("book_now")}</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
