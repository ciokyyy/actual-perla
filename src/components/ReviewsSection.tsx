"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { FaStar } from "react-icons/fa";

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <FaStar key={i} className="w-16 h-16 text-primary fill-primary" />
      ))}
    </div>
  );
}

function ReviewCard({ review, index: idx }: { review: { text: string; author: string; location: string }; index: number }) {
  return (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -30, scale: 0.95 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center gap-15"
    >
      <p className="text-center text-text text-xl md:text-2xl font-[family-name:var(--font-heading)] italic leading-relaxed">
        {review.text}
      </p>
      <div className="flex flex-col items-center gap-2">
        <span className="text-text font-semibold text-lg">{review.author}</span>
        <span className="text-text/50 text-sm">{review.location}</span>
      </div>
    </motion.div>
  );
}

export default function ReviewsSection() {
  const [index, setIndex] = useState(0);
  const t = useTranslations("ReviewsSection");

  const reviews = t.raw("reviews") as Array<{
    text: string;
    author: string;
    location: string;
  }>;

  useEffect(() => {
    const interval = setInterval(() => setIndex((i) => (i + 1) % reviews.length), 6000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section className="w-full px-5 py-50 flex flex-col items-center gap-20">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-primary font-extrabold text-center"
      >
        {t("title")}
      </motion.h2>

      <Stars />

      <div className="max-w-900 w-full flex flex-col items-center gap-15">
        <div className="min-h-[200px] flex items-center w-full">
          <ReviewCard review={reviews[index]} index={index} />
        </div>

        <div className="flex gap-8 pt-4">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-24 h-24 rounded-full transition-all cursor-pointer flex items-center justify-center text-white text-sm font-bold ${
                i === index ? "bg-primary" : "bg-primary/30 hover:bg-primary/50"
              }`}
              aria-label={`Review ${i + 1}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}