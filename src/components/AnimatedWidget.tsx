"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ElfsightWidget } from "react-elfsight-widget"; // Assuming this is the correct import

export default function AnimatedWidget() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log(isLoaded);
    // Check periodically if the widget content is available in the DOM
    const interval = setInterval(() => {
      const widgetFrame = document.querySelector(
        ".elfsight-app-bfe0e757-d926-4dfd-9010-ce79282e6a99"
      ); // Adjust selector if needed
      if (widgetFrame) {
        setIsLoaded(true);
        clearInterval(interval); // Stop checking once loaded
      }
    }, 500); // Check every 500ms

    return () => clearInterval(interval); // Cleanup
  }, [isLoaded]);

  return (
    <motion.div
      initial={{ y: "-15%", opacity: 0 }}
      animate={isLoaded ? { y: "0", opacity: 1 } : {}} // Animate only when loaded
      transition={{ duration: 0.3, ease: "easeIn", delay: 0.5 }}
      className="w-[calc(100dvw-40px)] max-w-1200"
    >
      <ElfsightWidget lazy widgetId="bfe0e757-d926-4dfd-9010-ce79282e6a99" />
    </motion.div>
  );
}
