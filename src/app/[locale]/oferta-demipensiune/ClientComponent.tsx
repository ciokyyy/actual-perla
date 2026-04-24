"use client";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import Image from "next/image";
import { Link } from "@/components/ui/Link";
import { FaUtensils, FaSpa, FaBed, FaArrowRight, FaCheck, FaMountain, FaEye, FaWineGlass, FaMugHot } from "react-icons/fa";
import { IoMdWater, IoMdLeaf } from "react-icons/io";

function Section({
  icon: Icon,
  title,
  description,
  image,
  imageAlt,
  benefits,
  reverse,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  benefits?: { icon: React.ElementType; title: string; desc: string }[];
  reverse?: boolean;
}) {
  return (
    <section className="grid md:grid-cols-2 gap-20 items-center">
      <div className={`rounded-2xl overflow-hidden shadow-xl aspect-video relative ${reverse ? 'md:order-2' : ''}`}>
        <Image 
          src={image} 
          alt={imageAlt} 
          fill 
          className="object-cover" 
        />
      </div>
      <div className="flex flex-col gap-15">
        <div className="flex items-center gap-12">
          <div className="w-40 h-40 rounded-full bg-primary/10 flex items-center justify-center">
            <Icon className="w-18 h-18 text-primary" />
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-semibold text-primary">
            {title}
          </h2>
        </div>
        <p className="text-text/70 text-center">{description}</p>
        {benefits && benefits.length > 0 && (
          <div className="grid grid-cols-2 gap-10">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-surface rounded-2xl p-15 text-center border border-foreground/30 shadow-md"
              >
                <benefit.icon className="w-25 h-25 mx-auto mb-8 text-primary" />
                <h4 className="font-semibold text-sm mb-3">{benefit.title}</h4>
                <p className="text-xs text-text/70">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function HighlightCard({ 
  icon: Icon, 
  title, 
  description, 
  href,
  cta 
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  href: "/preturi-valabilitate" | "/oferte";
  cta: string;
}) {
  return (
    <Link
      href={href}
      className="group bg-surface rounded-2xl p-20 shadow-md border border-foreground/30 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col items-center text-center"
    >
      <div className="w-50 h-50 rounded-full bg-primary/10 flex items-center justify-center mb-15 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-22 h-22 text-primary" />
      </div>
      <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold mb-8 text-primary">
        {title}
      </h3>
      <p className="text-sm text-text/70 mb-12">{description}</p>
      <div className="flex items-center gap-6 text-primary font-medium text-sm group-hover:gap-8 transition-all duration-200">
        <span>{cta}</span>
        <FaArrowRight className="w-10 h-10" />
      </div>
    </Link>
  );
}

export default function ClientComponent() {
  const t = useTranslations("HalfBoardPage");
  const spa = useTranslations("SpaPage");
  
  const foodBenefits = [
    { icon: FaWineGlass, title: "Bufet Suedez", desc: "Varietate de preparate" },
    { icon: FaMugHot, title: "Mic Dejun", desc: "Pana la ora 10:30" },
    { icon: FaUtensils, title: "Cina Inclusa", desc: "Tip bufet" },
    { icon: FaCheck, title: "60% Producție Proprie", desc: "Ingrediente proaspete" }
  ];
  
  const spaBenefits = [
    { icon: IoMdWater, title: spa("jacuzzi.benefits.hydrotherapy.title"), desc: spa("jacuzzi.benefits.hydrotherapy.description") },
    { icon: FaSpa, title: spa("ciubar.benefits.detox.title"), desc: spa("ciubar.benefits.detox.desc") },
    { icon: FaMountain, title: "Vedere Munte", desc: "Peisaj natural" },
    { icon: FaCheck, title: "Acces Nelimitat", desc: "Toata ziua" }
  ];
  
  return (
    <section className="w-full px-5 py-10 md:py-20">
      <div className="max-w-7xl mx-auto grid gap-30 md:gap-40">
        <Section
          icon={FaUtensils}
          title={t("food_card_title")}
          description={t("food_included") + " " + t("food_traditional")}
          image="/images/demipensiune/demipensiune-2.webp"
          imageAlt="Traditional Romanian cuisine"
          benefits={foodBenefits}
          reverse={false}
        />
        
        <Section
          icon={FaSpa}
          title={t("spa_card_title")}
          description={t("spa_included")}
          image="/images/spa/jacuzzi-1.webp"
          imageAlt="Wellness Spa"
          benefits={spaBenefits}
          reverse={true}
        />
        
        <Section
          icon={FaBed}
          title={t("rooms_card_title")}
          description={t("rooms_card_desc")}
          image="/images/camere/camera-1/camera-1-1.webp"
          imageAlt="Mountain view room"
          reverse={false}
        />
        
        <div className="grid md:grid-cols-2 gap-20">
          <HighlightCard
            icon={FaEye}
            title="Verifica Disponibilitatea"
            description="Vezi preturile actualizate in timp real pentru perioada dorita."
            href="/preturi-valabilitate"
            cta="Vezi preturi"
          />
          <HighlightCard
            icon={FaArrowRight}
            title={t("offers_card_title")}
            description={t("offers_card_desc")}
            href="/oferte"
            cta="Descopera"
          />
        </div>
      </div>
    </section>
  );
}