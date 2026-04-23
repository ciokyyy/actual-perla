import { Link } from "@/components/ui/Link";
import { generatePageMetadata } from "@/libs/metadata";
import { Props } from "@/libs/props";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import { FaWhatsapp, FaPhone, FaCalendarCheck } from "react-icons/fa";
import OfferHero from "@/components/OfferHero";
import HeaderImage from "~/images/ui/header.jpg";

export async function generateMetadata(props: Omit<Props, "children">) {
  return generatePageMetadata({
    params: await props.params,
    pageName: "book_now",
    imageName: "rezerva.png",
    pathSegment: "rezerva-acum",
  });
}

export default function Page({ params }: Readonly<Props>) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("BookNow");
  return (
    <>
      <OfferHero
        image={HeaderImage}
        title={t("book_now")}
        pricing=""
      />
      <section className="w-full px-20 py-30">
        <div className="max-w-500 mx-auto flex flex-col gap-25">

          {/* Phone card */}
          <div className="bg-surface rounded-2xl p-25 shadow-md text-center border border-foreground/30">
            <div className="w-50 h-50 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-15">
              <FaPhone className="w-22 h-22 text-primary" />
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-text mb-12">
              {t("contact_for_rezervation")}
            </h2>
            <a
              href="tel:+40750490838"
              className="inline-flex items-center gap-8 bg-primary text-white rounded-full px-20 py-10 shadow-md transition-all duration-200 hover:brightness-110 hover:shadow-lg active:scale-95 cursor-pointer text-sm font-medium"
            >
              <FaPhone className="w-14 h-14" />
              +40 750 490 838
            </a>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-12">
            <div className="flex-1 h-px bg-primary/15" />
            <span className="text-primary/60 text-xs font-semibold uppercase tracking-wider">
              {t("or_separator")}
            </span>
            <div className="flex-1 h-px bg-primary/15" />
          </div>

          {/* WhatsApp card */}
          <div className="bg-surface rounded-2xl p-25 shadow-md text-center border border-foreground/30">
            <div className="w-50 h-50 rounded-full bg-[#25D366]/10 flex items-center justify-center mx-auto mb-15">
              <FaWhatsapp className="w-22 h-22 text-[#25D366]" />
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-text mb-12">
              {t("contact_whatsapp")}
            </h2>
            <a
              href="https://wa.me/+40750490838"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-8 bg-[#25D366] text-white rounded-full px-20 py-10 shadow-md transition-all duration-200 hover:brightness-110 hover:shadow-lg active:scale-95 cursor-pointer text-sm font-medium"
            >
              <FaWhatsapp className="w-14 h-14" />
              @PerlaBrazilor
            </a>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-12">
            <div className="flex-1 h-px bg-primary/15" />
            <span className="text-primary/60 text-xs font-semibold uppercase tracking-wider">
              {t("or_separator")}
            </span>
            <div className="flex-1 h-px bg-primary/15" />
          </div>

          {/* Check availability */}
          <div className="text-center">
            <Link
              href="/preturi-valabilitate"
              type="primary-button"
              className="inline-flex items-center gap-8 text-sm px-20 py-10 !rounded-full"
            >
              {t("verify_availability")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
