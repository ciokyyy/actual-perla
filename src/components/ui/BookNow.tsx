"use client";
import { useTranslations } from "next-intl";
import C from "../ComponentNames";
import { Link } from "./Link";
import { AnimatePresence, motion, useScroll } from "motion/react";
import { useState } from "react";
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
            className="drop-shadow-lg bg-secondary"
            as={Link}
            type="primary-button"
            href="/rezerva-acum"
          >
            {t("book_now")}
          </C.BookNow>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
