"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/components/ui/Link";
import { FaUtensils, FaSpa, FaBed, FaArrowRight, FaCheck, FaMugHot, FaWineGlass, FaSwimmer, FaMountain, FaTree, FaLeaf, FaHome } from "react-icons/fa";
import { IoMdWater } from "react-icons/io";
import { GiHealthPotion, GiChickenLeg } from "react-icons/gi";

interface SectionProps {
  id: string;
  imageSrc: string;
  imageAlt: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  features: { icon: React.ElementType; text: string }[];
  reverse?: boolean;
  ctaText?: string;
  ctaHref?: string;
  inGrid?: boolean;
}

function HeroSection({ id, imageSrc, imageAlt, icon: Icon, title, subtitle, features, ctaText, ctaHref }: SectionProps) {
  return (
    <motion.article
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="relative w-full max-w-[520px] mx-auto lg:mx-0 h-[72vh] min-h-[620px] max-h-[940px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/40">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 520px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <div className="absolute bottom-12 left-12 right-12 sm:right-auto sm:max-w-[360px]">
          <div className="rounded-2xl bg-black/35 backdrop-blur-sm p-14 sm:p-16 text-white space-y-10 ring-1 ring-white/15">
            <div className="inline-flex items-center gap-8 px-14 py-8 bg-white/15 rounded-full w-fit">
              <div className="w-30 h-30 rounded-full bg-white/20 ring-1 ring-white/25 flex items-center justify-center">
                <Icon className="w-14 h-14 text-white" />
              </div>
              <span className="text-sm font-semibold text-white">{subtitle}</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-heading)] leading-tight">
              {title}
            </h2>

            <ul className="space-y-8">
              {features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.04 * idx }}
                  className="flex items-center gap-10"
                >
                  <div className="w-36 h-36 rounded-xl bg-primary/90 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-14 h-14 text-white" />
                  </div>
                  <span className="text-sm leading-relaxed text-white/95">{feature.text}</span>
                </motion.li>
              ))}
            </ul>

            {ctaText && ctaHref && (
              <Link
                href={ctaHref as never}
                className="inline-flex items-center gap-8 text-white font-semibold text-sm hover:gap-10 transition-all duration-200"
              >
                {ctaText}
                <span className="w-28 h-28 rounded-full bg-white/15 ring-1 ring-white/20 flex items-center justify-center">
                  <FaArrowRight className="w-14 h-14" />
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ContentSection({ id, imageSrc, imageAlt, icon: Icon, title, subtitle, features, reverse, ctaText, ctaHref, inGrid }: SectionProps) {
  return (
    <section id={id} className={inGrid ? "py-0 px-0" : "py-35 md:py-48 px-20 sm:px-30"}>
      <div className={inGrid ? "max-w-none" : "max-w-6xl mx-auto"}>
        <div className={`flex flex-col md:flex-row gap-24 md:gap-40 items-stretch ${reverse ? 'md:flex-row-reverse' : ''}`}>
          <motion.div
            initial={{ opacity: 0, x: reverse ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`w-full md:w-5/12 ${reverse ? 'md:order-2' : ''}`}
          >
            <div className="relative h-[260px] sm:h-[320px] md:h-full rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: reverse ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className={`w-full md:w-7/12 flex flex-col justify-center space-y-16 ${reverse ? 'md:order-1' : ''}`}
          >
            <div className="inline-flex items-center gap-8 px-14 py-8 bg-primary/10 rounded-full w-fit">
              <div className="w-30 h-30 rounded-full bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center">
                <Icon className="w-14 h-14 text-primary" />
              </div>
              <span className="text-[15px] font-semibold text-primary">{subtitle}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-[family-name:var(--font-heading)] leading-tight">
              {title}
            </h2>

            <ul className="space-y-10">
              {features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * idx }}
                  className="flex items-center gap-12"
                >
                  <div className="w-[40px] h-[40px] rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-14 h-14 text-white" />
                  </div>
                  <span className="text-base text-gray-800 leading-relaxed">{feature.text}</span>
                </motion.li>
              ))}
            </ul>

            {ctaText && ctaHref && (
              <Link
                href={ctaHref as never}
                className="inline-flex items-center gap-10 text-primary font-bold text-base hover:gap-12 transition-all duration-200"
              >
                {ctaText}
                <span className="w-30 h-30 rounded-full bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center">
                  <FaArrowRight className="w-14 h-14" />
                </span>
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface WhyPointProps {
  icon: React.ElementType;
  title: string;
  delay: number;
}

function WhyPoint({ icon: Icon, title, delay }: WhyPointProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="flex items-center gap-12 bg-white rounded-xl p-14 shadow-sm ring-1 ring-primary/10"
    >
      <div className="w-34 h-34 rounded-xl bg-primary/12 ring-1 ring-primary/20 flex items-center justify-center flex-shrink-0">
        <Icon className="w-14 h-14 text-primary" />
      </div>
      <p className="text-sm font-semibold text-gray-800 leading-tight">{title}</p>
    </motion.div>
  );
}

interface CtaCardProps {
  title: string;
  description: string;
  href: string;
  ctaText: string;
  icon: React.ElementType;
  delay: number;
}

function CtaCard({ title, description, href, ctaText, icon: Icon, delay }: CtaCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Link
        href={href as never}
        className="group block bg-white rounded-2xl p-24 md:p-30 shadow-xl cursor-pointer"
      >
        <div className="flex items-start gap-18 md:gap-24">
          <div className="w-[60px] h-[60px] lg:w-[72px] lg:h-[72px] rounded-2xl bg-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/25 transition-colors">
            <Icon className="w-[24px] h-[24px] lg:w-[30px] lg:h-[30px] text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-xl text-gray-900 mb-10 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-base text-gray-600 mb-16 leading-relaxed">{description}</p>
            <span className="inline-flex items-center gap-10 text-primary font-semibold text-base group-hover:gap-12 transition-all duration-200">
              {ctaText}
              <span className="w-30 h-30 rounded-full bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center">
                <FaArrowRight className="w-14 h-14" />
              </span>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ClientComponent() {
  const t = useTranslations("HalfBoardPage");

  return (
    <div className="w-full">
      <section className="py-70 md:py-100 px-20 sm:px-30">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 md:gap-30 items-start">
          <HeroSection
            id="dining"
            imageSrc="/images/demipensiune/demipensiune-2.webp"
            imageAlt={t("food_image_alt")}
            icon={FaUtensils}
            title={t("food_card_title")}
            subtitle={t("local_gastronomy")}
            features={[
              { icon: FaMugHot, text: t("breakfast_included") },
              { icon: FaWineGlass, text: t("dinner_included") },
              { icon: GiChickenLeg, text: t("traditional_cooking") },
              { icon: FaLeaf, text: t("own_production") },
            ]}
            reverse={false}
          />

          <div className="flex flex-col gap-24 md:gap-30">
            <ContentSection
              id="spa"
              imageSrc="/images/spa/jacuzzi-1.webp"
              imageAlt={t("spa_image_alt")}
              icon={FaSpa}
              title={t("spa_card_title")}
              subtitle={t("wellness_relaxare")}
              features={[
                { icon: FaSwimmer, text: t("jacuzzi_title") },
                { icon: IoMdWater, text: t("piscina_title") },
                { icon: GiHealthPotion, text: t("sauna_title") },
                { icon: FaTree, text: t("salina_title") },
              ]}
              ctaText={t("spa_cta")}
              ctaHref="/siguranta-bucatariei-si-spa"
              reverse={true}
              inGrid
            />

            <ContentSection
              id="rooms"
              imageSrc="/images/camere/camera-1/camera-1-1.webp"
              imageAlt={t("rooms_image_alt")}
              icon={FaBed}
              title={t("rooms_card_title")}
              subtitle={t("fairy_accommodation")}
              features={[
                { icon: FaMountain, text: t("mountain_view") },
                { icon: FaHome, text: t("forest_atmosphere") },
                { icon: FaCheck, text: t("private_bathroom") },
              ]}
              reverse={false}
              inGrid
            />
          </div>
        </div>
      </section>

      <section className="py-70 md:py-90 px-20 sm:px-30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 md:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-24 md:p-30 shadow-xl"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-[family-name:var(--font-heading)] mb-12 leading-tight">
                {t("why_halfboard_title")}
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-16">
                {t("why_halfboard_desc")}
              </p>
              <div className="flex flex-wrap gap-10">
                <span className="inline-flex items-center gap-8 px-14 py-8 bg-primary/10 rounded-full text-sm font-semibold text-primary">
                  <span className="w-24 h-24 rounded-xl bg-primary/15 ring-1 ring-primary/20 flex items-center justify-center">
                    <FaUtensils className="w-14 h-14" />
                  </span>
                  {t("local_gastronomy")}
                </span>
                <span className="inline-flex items-center gap-8 px-14 py-8 bg-primary/10 rounded-full text-sm font-semibold text-primary">
                  <span className="w-24 h-24 rounded-xl bg-primary/15 ring-1 ring-primary/20 flex items-center justify-center">
                    <FaSpa className="w-14 h-14" />
                  </span>
                  {t("wellness_relaxare")}
                </span>
                <span className="inline-flex items-center gap-8 px-14 py-8 bg-primary/10 rounded-full text-sm font-semibold text-primary">
                  <span className="w-24 h-24 rounded-xl bg-primary/15 ring-1 ring-primary/20 flex items-center justify-center">
                    <FaBed className="w-14 h-14" />
                  </span>
                  {t("fairy_accommodation")}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/80 rounded-2xl p-24 md:p-30 shadow-lg ring-1 ring-primary/10"
            >
              <h3 className="text-xl font-bold text-primary font-[family-name:var(--font-heading)] mb-14">
                {t("halfboard_title")}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-16">{t("halfboard_desc")}</p>
              <div className="space-y-10">
                <WhyPoint icon={FaMountain} title={t("nature_relax_title")} delay={0} />
                <WhyPoint icon={FaSpa} title={t("wellness_title")} delay={0.06} />
                <WhyPoint icon={FaLeaf} title={t("local_products_title")} delay={0.12} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-70 md:py-90 px-20 sm:px-30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 md:gap-24">
            <CtaCard
              title={t("check_availability_title")}
              description={t("check_availability_desc")}
              href="/preturi-valabilitate"
              ctaText={t("see_prices")}
              icon={FaMountain}
              delay={0}
            />
            <CtaCard
              title={t("discover_offers_title")}
              description={t("offers_card_desc")}
              href="/"
              ctaText={t("see_offers")}
              icon={FaArrowRight}
              delay={0.1}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
