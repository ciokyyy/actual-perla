
import AnimatedWidget from "@/components/AnimatedWidget";
import C from "@/components/ComponentNames";
import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import OfertePage from "./oferte/page";
type Props = {
  params: Promise<{locale: Locale}>;
};
export default function Home({params} : Readonly<Props>) {
  const { locale } = use(params);

  setRequestLocale(locale);

  return (
    <>
      <C.HomePageContainer className="gap-30 flex flex-col items-center">
        <AnimatedWidget />
      </C.HomePageContainer>
      <OfertePage />
    </>
  );
}
