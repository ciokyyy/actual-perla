import { PreturiClient } from "./PreturiClient";
import { useTranslations } from "next-intl";

export default function PreturiValabilitate() {
  const t = useTranslations("Rooms");

  return (
    <>
      <h1 className="title mb-40 flex items-center gap-6 ">
        {t("pricesAndAvailability")}
      </h1>
      <p className="text-center mb-20 text-lg drop-shadow-md font-bold max-w-sm p-20">
        {t("choosePeriodToSeePrices")}
      </p>
      <PreturiClient />
    </>
  );
}
