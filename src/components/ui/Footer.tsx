import Logo from "@/components/ui/Logo";
import C from "@/components/ComponentNames";
import { Link } from "./Link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="mt-20 relative">
      <C.GradientFill className="absolute bottom-0 w-full h-[50dvh] footer-gradient -z-10"></C.GradientFill>

      <div className="rounded-t-normal bg-primary md:max-w-1200 mx-auto h-full w-full place-items-center p-20 shadow-wcolor">
        <div className="h-120 flex flex-col">
          <Logo white className="m-auto w-60"></Logo>
        </div>
        <div className="grid h-full w-full gap-20 sm:grid-cols-2 xl:grid-cols-3">
          <div className="text-desc flex flex-col place-items-center gap-10 text-center text-white">
            <p className="font-bold">{t("pages")}</p>
            <div className="rounded-normal w-100 h-1 bg-white" />
            <C.LinkDemi
              href="/oferta-demipensiune"
              as={Link}
              className="underline cursor-pointer transition-all"
            >
              {t("offer_halfboard")}
            </C.LinkDemi>
            <C.LinkCraciun
              as={Link}
              className="underline cursor-pointer transition-all"
              href="/oferta-craciun"
            >
              {t("offer_christmas")}
            </C.LinkCraciun>
            <C.LinkRev
              as={Link}
              className="underline cursor-pointer transition-all"
              href="/oferta-revelion"
            >
              {t("offer_newyear")}
            </C.LinkRev>
            <div className="rounded-normal w-100 h-1 bg-white" />

            <C.RezervaDemi
              as={Link}
              className="underline cursor-pointer transition-all"
              href="/rezerva-oferta-demipensiune"
            >
              {t("book_halfboard")}
            </C.RezervaDemi>
          </div>
          <div className="text-desc flex flex-col place-items-center gap-10 text-center text-white">
            <p className="font-bold" id="contact">
              {t("contact")}
            </p>
            <div className="rounded-normal w-100 h-1 bg-white" />
            <span>
              {t("phone_label")} :{" "}
              <C.NrTel
                href="tel:+40750406594"
                target="_blank"
                as={Link}
                className="font-bold cursor-pointer transition-all hover:underline"
              >
                +40 750 406 594
              </C.NrTel>
            </span>{" "}
            <span>
              {t("whatsapp_label")} :{" "}
              <C.Wapp
                as={Link}
                className="font-bold cursor-pointer transition-all hover:underline"
                href="https://wa.me/+4050406594"
                target="_blank"
              >
                +40 750 406 594
              </C.Wapp>
            </span>{" "}
            <span>
              {t("email_label")} :{" "}
              <C.Mail
                href="mailto:perlabrazilor@gmail.com"
                target="_blank"
                as={Link}
                className="font-bold cursor-pointer transition-all hover:underline"
              >
                perlabrazilor@gmail.com
              </C.Mail>
            </span>
            <span>
              {t("address_label")} :{" "}
              <C.Adresa
                href="https://maps.app.goo.gl/J6AStxsiHV5M2soQ7"
                target="_blank"
                as={Link}
                className="font-bold cursor-pointer transition-all"
              >
                {t("company_address")}
              </C.Adresa>
            </span>
          </div>
          <div className="text-desc flex flex-col place-items-center gap-10 text-center text-white sm:col-span-2 xl:col-span-1">
            <p className="font-bold" id="datele-firmei">
              {t("company_data")}
            </p>
            <div className="rounded-normal w-100 h-1 bg-white" />
            <p>{t("company_name")}</p>
            <p>{t("company_cui")}</p>
            <p>{t("company_reg")}</p>
            <p>{t("company_address")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
