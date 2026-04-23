import PageHero from "@/components/PageHero";
import { FaSpa } from "react-icons/fa";
import {
  SpaBenefits,
  VideoShowcase,
  JacuzziBenefits,
  PiscinaBenefits,
  SaunaBenefits,
  SalinaBenefits,
} from "@/components/SpaBenefits";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return {
    title: "Spa - Perla Brazilor",
    description: "Relaxare complet la pensiunea Perla Brazilor - tratamente spa, jacuzzi, piscina si sauna",
  };
}

export default function SpaPage({ locale }: { locale: string }) {
  return (
    <>
      <PageHero
        icon={<FaSpa />}
        title="Spa"
        subtitle="Relaxati-va la piscina, jacuzzi, sauna si tratamente spa"
      />

      <section className="w-full px-5 py-10 md:py-20">
        <div className="max-w-7xl mx-auto grid gap-30 md:gap-40">
          <SpaBenefits locale={locale} />
          <VideoShowcase />
          <JacuzziBenefits locale={locale} />
          <PiscinaBenefits locale={locale} />
          <SaunaBenefits locale={locale} />
          <SalinaBenefits locale={locale} />
        </div>
      </section>
    </>
  );
}