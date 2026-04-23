import { IoIosBed, IoMdWater } from "react-icons/io";
import { ImSpoonKnife } from "react-icons/im";
import { BiSolidOffer } from "react-icons/bi";
import { Link } from "@/components/ui/Link";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import { ImageSlideshow } from "@/components/ImageSlideshow";
import OfferHero from "@/components/OfferHero";
import CiubarHero from "~/images/spa/ciubar-1.webp";
import { generatePageMetadata } from "@/libs/metadata";
import { Props } from "@/libs/props";

export async function generateMetadata(props: Omit<Props, "children">) {
  return generatePageMetadata({
    params: await props.params,
    pageName: "half_board_offer",
    imageName: "rezerva.png",
    pathSegment: "oferta-demipensiune",
  });
}

export default function Page({ params }: Readonly<Props>) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("HalfBoardPage");
  const spa = useTranslations("Spa");
  const sala = useTranslations("Sala");

  return (
    <>
      <OfferHero
        image={CiubarHero}
        title={t("title")}
        pricing={t("spa_included")}
        ctaText={t("book_now")}
      />
      <section className="w-full px-20 py-30 flex flex-col items-center gap-30">
      <div className="grid w-full rounded-2xl max-w-1200 aspect-1/2 sm:aspect-2/1 sm:grid-cols-2">
        <ImageSlideshow
          className="rounded-t-2xl sm:rounded-none sm:rounded-l-2xl"
          images={[
            { src: "/images/spa/ciubar-1.webp", alt: spa("ciubar_1_alt") },
            { src: "/images/spa/jacuzzi-1.webp", alt: spa("jacuzzi_1_alt") },
            { src: "/images/spa/piscina-1.webp", alt: spa("piscina_1_alt") },
            { src: "/images/spa/salina-1.webp", alt: spa("salina_1_alt") },
            { src: "/images/spa/sauna-1.webp", alt: spa("sauna_1_alt") },
          ]}
        />
        <ImageSlideshow
          className="rounded-b-2xl sm:rounded-none sm:rounded-r-2xl"
          initialDelay={2000}
          images={[
            { src: "/images/sala/sala-1.webp", alt: sala("sala_1_alt") },
            { src: "/images/sala/sala-4.webp", alt: sala("sala_4_alt") },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 place-items-center gap-20 sm:grid-cols-[repeat(2,minmax(250px,350px))]">
        <div className="grid place-items-center">
          <div className="bg-primary p-40 max-w-350 flex flex-col justify-center items-center aspect-square w-full h-full rounded-t-2xl sm:rounded-none">
            <p className="font-light text-white">{t("food_included")}</p>
            <p className="font-light text-white">{t("food_traditional")}</p>
          </div>
          <Link
            href="/mancare"
            className="bg-surface rounded-b-2xl sm:rounded-b-2xl shadow-md overflow-hidden max-w-350 flex flex-col items-center gap-12 p-30 text-center cursor-pointer w-full"
          >
            <ImSpoonKnife size="24" />
            <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-text">
              {t("food_card_title")}
            </h3>
            <p className="text-desc">{t("food_card_desc")}</p>
          </Link>
        </div>

        <div className="grid place-items-center">
          <div className="bg-primary p-40 max-w-350 flex flex-col justify-center items-center aspect-square w-full h-full rounded-t-2xl sm:rounded-none">
            <p className="font-light text-white">{t("spa_included")}</p>
          </div>
          <Link
            href="/spa"
            className="bg-surface rounded-b-2xl sm:rounded-b-2xl shadow-md overflow-hidden max-w-350 flex flex-col items-center gap-12 p-30 text-center cursor-pointer w-full"
          >
            <IoMdWater size="24" />
            <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-text">
              {t("spa_card_title")}
            </h3>
            <p className="text-desc">{t("spa_card_desc")}</p>
          </Link>
        </div>

        <Link
          href="/camere"
          className="bg-surface rounded-2xl shadow-md overflow-hidden max-w-350 flex flex-col items-center gap-12 p-30 text-center cursor-pointer w-full"
        >
          <IoIosBed size="24" />
          <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-text">
            {t("rooms_card_title")}
          </h3>
          <p className="text-desc">{t("rooms_card_desc")}</p>
        </Link>

        <Link
          href="/oferte"
          className="bg-surface rounded-2xl shadow-md overflow-hidden max-w-350 flex flex-col items-center gap-12 p-30 text-center cursor-pointer w-full"
        >
          <BiSolidOffer size="24" />
          <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-text">
            {t("offers_card_title")}
          </h3>
          <p className="text-desc">{t("offers_card_desc")}</p>
        </Link>
      </div>
    </section>
    </>
  );
}
