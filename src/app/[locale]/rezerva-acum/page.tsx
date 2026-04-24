import { generatePageMetadata } from "@/libs/metadata";
import { Props } from "@/libs/props";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import OfferHero from "@/components/OfferHero";
import { BookNowBenefits } from "@/components/BookNowBenefits";
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
      />
      <section className="w-full px-5 py-10 md:py-20">
        <div className="max-w-7xl mx-auto grid gap-30 md:gap-40">
          <BookNowBenefits locale={locale} />
        </div>
      </section>
    </>
  );
}