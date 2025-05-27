"use client";
import { useTranslations } from "next-intl";
import C from "../ComponentNames";
import { Link } from "./Link";
import { AnimatePresence, motion, useScroll } from "motion/react";
import { useState } from "react";
import { FaCalendarCheck } from "react-icons/fa";
export function BookNow() {
  const t = useTranslations("BookNow");
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  scrollYProgress.on("change", (scroll) => {
    const temp = scroll > 0.01 && scroll < 0.99;
    setIsVisible(temp);
  });
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-20 right-20"
        >
          <C.BookNow
            className="drop-shadow-lg flex gap-10 items-center justify-center bg-primary"
            as={Link}
            type="primary-button"
            href="/rezerva-acum"
          >
            <FaCalendarCheck />
            {t("book_now")}
          </C.BookNow>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
