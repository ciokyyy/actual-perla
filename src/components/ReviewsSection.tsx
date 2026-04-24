"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslations } from "next-intl";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    text: {
      ro: "Paștele petrecut în Bucovina, la Perla Brazilor, a fost o experiență autentică pe care o recomand oricui vrea să redescopere tradițiile românești.",
      en: "Easter spent in Bucovina, at Perla Brazilor, was an authentic experience that I recommend to anyone who wants to rediscover Romanian traditions.",
      it: "Pasqua trascorsa in Bucovina, alla Perla Brazilor, è stata un'esperienza autentica che raccomando a chi vuole riscoprire le tradizioni rumene.",
    },
    author: "Familia Ionescu",
    location: "Iași",
    period: "Paște 2025",
  },
  {
    text: {
      ro: "Am stat 3 nopți și a fost perfect. Mâncarea tradițională, aerul de munte și atmosfera familiale ne-au făcut să ne întoarcem cu drag.",
      en: "We stayed 3 nights and it was perfect. Traditional food, mountain air and family atmosphere made us want to come back.",
      it: "Abbiamo soggiornato 3 notti ed è stato perfetto. Il cibo tradizionale, l'aria di montagna e l'atmosfera familiare ci hanno fatto tornare volentieri.",
    },
    author: "Maria și Andrei",
    location: "București",
    period: "Octombrie 2025",
  },
  {
    text: {
      ro: "Cea mai frumoasă vacanță din ultimii ani. Copiii s-au bucurat de animale, iar noi ne-am relaxat la spa. Recomand cu drag!",
      en: "The most beautiful vacation in recent years. The kids enjoyed the animals, and we relaxed at the spa. I highly recommend!",
      it: "Le più belle vacanze degli ultimi anni. I bambini si sono goduti gli animali e noi ci siamo rilassati allo spa. Consiglio vivamente!",
    },
    author: "Familia Popescu",
    location: "Cluj-Napoca",
    period: "August 2025",
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <FaStar key={i} className="w-8 h-8 text-primary" />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const [index, setIndex] = useState(0);
  const t = useTranslations("ReviewsSection");

  useEffect(() => {
    const interval = setInterval(() => setIndex((i) => (i + 1) % reviews.length), 6000);
    return () => clearInterval(interval);
  }, []);

  const lang = t("lang") as "ro" | "en" | "it";
  const review = reviews[index];

  return (
    <section className="w-full px-5 py-40 flex flex-col items-center gap-20">
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

      <div className="max-w-700 w-full relative h-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center gap-15"
          >
            <p className="text-center text-text text-xl md:text-2xl font-[family-name:var(--font-heading)] italic">
              "{review.text[lang]}"
            </p>

            <div className="flex flex-col items-center gap-2">
              <span className="text-text font-semibold text-lg">{review.author}</span>
              <span className="text-text/50 text-sm">
                {review.location} — {review.period}
              </span>
            </div>

            <div className="flex gap-3">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-10 h-10 rounded-full transition-all ${
                    i === index ? "bg-primary" : "bg-primary/20"
                  }`}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}