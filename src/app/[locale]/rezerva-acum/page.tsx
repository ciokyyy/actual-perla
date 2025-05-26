import C from "@/components/ComponentNames";
import { Link } from "@/components/ui/Link";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

export default function Page() {
  return (
    <C.Container className="max-w-3xl mx-auto py-20">
      <C.TitluRezerva className="text-5xl font-thin text-center mb-16 bg-primary text-white rounded-normal p-30">
        Rezervă acum
      </C.TitluRezerva>

      <C.ContainerText className="flex flex-col items-center gap-10 bg-foreground p-10 md:p-16 rounded-normal shadow-lg">
        <div className="space-y-10 w-full max-w-md">
          {/* Phone Section */}
          <div className="text-center">
            <C.TextRezerva className="text-logo mb-6 text-lg">
              Pentru a rezerva o cameră, vă rugăm să ne contactați la numărul de
              telefon
            </C.TextRezerva>
            <Link
              href="tel:+40750406594"
              className="inline-flex items-center gap-4 bg-primary hover:bg-primary/90 transition !text-white px-15 py-7 rounded-normal text-xl font-medium"
            >
              <FaPhone className="text-2xl" />
              +40 750 406 594
            </Link>
          </div>

          <div className="relative py-6">
            <hr className="border-gray-600" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-foreground px-6 text-text">
              sau
            </span>
          </div>

          {/* WhatsApp Section */}
          <div className="text-center">
            <C.TextRezerva className="text-logo mb-6 text-lg">
              Contactați-ne pe WhatsApp
            </C.TextRezerva>
            <Link
              href="https://wa.me/40750406594"
              className="inline-flex items-center gap-4 bg-[#25D366] hover:bg-[#25D366]/90 transition !text-white px-15 py-7 rounded-normal text-xl font-medium"
            >
              <FaWhatsapp className="text-2xl" />
              @PerlaBrazilor
            </Link>
          </div>
        </div>
      </C.ContainerText>
    </C.Container>
  );
}
