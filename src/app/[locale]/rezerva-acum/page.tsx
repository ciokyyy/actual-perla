import C from "@/components/ComponentNames";
import { Link } from "@/components/ui/Link";
import { useTranslations } from "next-intl";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

export default function Page() {
  const t = useTranslations("BookNow");
  return (
    <C.Container className="p-20 bg-foreground shadow-lg m-20 rounded-normal border-y-1 border-primary">
      <C.TitluRezerva className="text-white bg-primary mx-20 text-center rounded-normal text-logo p-20">
        {t("book_now")}
      </C.TitluRezerva>

      <C.ContainerText className="flex flex-col items-center gap-10 p-10 md:p-16 rounded-normal ">
        <div className="space-y-10 w-full max-w-md">
          <div className="text-center">
            <C.TextRezerva className="text-desc mb-6 text-lg">
              {t("contact_for_rezervation")}
            </C.TextRezerva>
            <Link
              href="tel:++40750490838"
              type="primary-button"
              className="inline-flex items-center gap-4 hover:bg-primary/90 transition px-15 py-7 text-md font-medium"
            >
              <FaPhone />
              +40 750 490 838
            </Link>
          </div>

          <div className="relative py-6">
            <hr className="border-gray-600" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-foreground px-6 text-text">
              {t("or_separator")}
            </span>
          </div>

          {/* WhatsApp Section */}
          <div className="text-center">
            <C.TextRezerva className="text-desc mb-6 text-lg">
              {t("contact_whatsapp")}
            </C.TextRezerva>
            <Link
              href="https://wa.me/40750406594"
              type="primary-button"
              className="inline-flex items-center gap-4 bg-[#25D366] hover:bg-[#25D366]/90 transition text-md px-15 py-7 rounded-normal font-medium text-shadow-2xs"
            >
              <FaWhatsapp />
              @PerlaBrazilor
            </Link>
          </div>

          <div className="relative py-6">
            <hr className="border-gray-600" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-foreground px-6 text-text">
              {t("or_separator")}
            </span>
          </div>
        </div>
        <Link
          href="/preturi-valabilitate"
          type="primary-button"
          className="inline-flex items-center gap-4 transition text-md px-15 py-7 rounded-normal font-medium text-shadow-2xs"
        >
          {t("verify_availability")}
        </Link>
      </C.ContainerText>
    </C.Container>
  );
}
