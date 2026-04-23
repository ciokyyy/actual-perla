"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ElfsightWidget } from "react-elfsight-widget";

export default function AnimatedWidget() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const widgetFrame = document.querySelector(
        ".elfsight-app-bfe0e757-d926-4dfd-9010-ce79282e6a99"
      );
      if (widgetFrame) {
        setIsLoaded(true);
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [isLoaded]);

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={isLoaded ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-1200 mx-auto rounded-normal overflow-hidden shadow-xl"
    >
      <ElfsightWidget lazy widgetId="bfe0e757-d926-4dfd-9010-ce79282e6a99" />
    </motion.div>
  );
}
