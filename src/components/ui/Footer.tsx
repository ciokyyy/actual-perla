import Logo from "@/components/ui/Logo";
import { Link } from "./Link";
import { useTranslations } from "next-intl";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="mt-30 relative">
      {/* Top accent line */}
      <div className="h-3 bg-primary/60" />

      <div className="bg-primary/95 w-full">
        <div className="max-w-1200 mx-auto px-25 py-40">
          {/* Logo */}
          <div className="flex flex-col items-center gap-10 mb-35">
            <Logo white className="w-55" />
            <span className="text-white/60 text-xs tracking-wider uppercase">
              {t("guesthouse_name")}
            </span>
          </div>

          {/* Three columns */}
          <div className="grid gap-30 sm:grid-cols-2 xl:grid-cols-3 mb-35">
            {/* Pages */}
            <div className="flex flex-col items-center gap-12 text-center">
              <p className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
                {t("pages")}
              </p>
              <Link
                href="/oferta-demipensiune"
                className="text-white/70 text-sm cursor-pointer transition-all duration-200 hover:text-white"
              >
                {t("offer_halfboard")}
              </Link>
              <Link
                href="/oferta-craciun"
                className="text-white/70 text-sm cursor-pointer transition-all duration-200 hover:text-white"
              >
                {t("offer_christmas")}
              </Link>
              <Link
                href="/oferta-revelion"
                className="text-white/70 text-sm cursor-pointer transition-all duration-200 hover:text-white"
              >
                {t("offer_newyear")}
              </Link>
              <div className="w-40 h-px bg-white/15 my-5" />
              <Link
                href="/rezerva-acum"
                className="text-white/70 text-sm cursor-pointer transition-all duration-200 hover:text-white"
              >
                {t("book_halfboard")}
              </Link>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center gap-12 text-center">
              <p className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
                {t("contact")}
              </p>
              <a
                href="tel:+40750490838"
                className="flex items-center gap-8 text-white/70 text-sm cursor-pointer transition-all duration-200 hover:text-white"
              >
                <FaPhone className="w-12 h-12" />
                +40 750 490 838
              </a>
              <a
                href="https://wa.me/+40750490838"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-8 text-white/70 text-sm cursor-pointer transition-all duration-200 hover:text-white"
              >
                <FaWhatsapp className="w-12 h-12" />
                WhatsApp
              </a>
              <a
                href="mailto:perlabrazilor@gmail.com"
                className="flex items-center gap-8 text-white/70 text-sm cursor-pointer transition-all duration-200 hover:text-white"
              >
                <FaEnvelope className="w-12 h-12" />
                perlabrazilor@gmail.com
              </a>
              <a
                href="https://maps.app.goo.gl/J6AStxsiHV5M2soQ7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-8 text-white/70 text-sm cursor-pointer transition-all duration-200 hover:text-white"
              >
                <FaMapMarkerAlt className="w-12 h-12 flex-shrink-0" />
                {t("company_address")}
              </a>
            </div>

            {/* Company data */}
            <div className="flex flex-col items-center gap-10 text-center sm:col-span-2 xl:col-span-1">
              <p className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
                {t("company_data")}
              </p>
              <p className="text-white/70 text-sm">{t("company_name")}</p>
              <p className="text-white/70 text-sm">{t("company_cui")}</p>
              <p className="text-white/70 text-sm">{t("company_reg")}</p>
              <p className="text-white/70 text-sm">{t("company_address")}</p>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 pt-20 text-center">
            <p className="text-white/40 text-xs">
              &copy; {new Date().getFullYear()} {t("guesthouse_name")}. {t("rights_reserved")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
