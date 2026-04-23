import C from "@/components/ComponentNames";
import { cn } from "@/libs/utils";
import SalinaOne from "~/images/spa/salina-1.webp";
import Video from "@/components/ui/Video";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import {
  FaBed,
  FaBrain,
  FaFire,
  FaHeartbeat,
  FaHotTub,
  FaLeaf,
  FaLungs,
  FaMoon,
  FaMountain,
  FaSeedling,
  FaSmile,
  FaSpa,
  FaSwimmer,
  FaSwimmingPool,
  FaTint,
  FaWater,
  FaWind,
} from "react-icons/fa";
import { ImageSlideshow } from "@/components/ImageSlideshow";
import Image from "next/image";
import { generatePageMetadata } from "@/libs/metadata";
import { Props } from "@/libs/props";
import PageHero from "@/components/PageHero";

export async function generateMetadata(props: Omit<Props, "children">) {
  return generatePageMetadata({
    params: await props.params,
    pageName: "spa",
    imageName: "spa.png",
  });
}

export default function Page({ params }: Readonly<Props>) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("SpaPage");
  return (
    <section className="w-full px-20 py-30 flex flex-col items-center gap-30">
      <PageHero icon={<FaSpa />} title={t("header_title")} />

      <div className="flex flex-col items-center justify-center gap-20">
        <div className="shadow-xl sm:mx-50 leading-40 bg-foreground rounded-normal max-w-450 m-20 p-40 text-center text-[20px]">
          <div>
            {t("title")}
            <br />
            <span className="font-bold"> {t("desc_1")} </span>
            {` `}
            {t("desc_2")}
          </div>
        </div>
      </div>

      <C.CiubarContainer
        className={cn(
          "grid place-items-center",
          "lg:grid-cols-2 mx-20 md:max-w-600 md:mx-none lg:max-w-1200 gap-20"
        )}
      >
        <C.VideoContainer className="w-full grow relative rounded-normal overflow-hidden aspect-9/16 cursor-pointer">
          <C.CiubarText className="text-white font-light capitalize absolute top-20 left-0 flex w-full px-20 text-center items-center justify-center text-logo z-10">
            {t("ciubar.title_video")}
          </C.CiubarText>
          <Video className="w-full h-full" src="/videos/ciubar-video-3.mp4" />
        </C.VideoContainer>
        <C.ContainerDescription className="shadow-xl bg-foreground rounded-normal p-40 text-[20px]">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            {t("ciubar.title")}
          </h2>
          <p className="my-20">{t("ciubar.description")}</p>
          <ul className="space-y-3 pl-4">
            <li className="flex flex-col items-center gap-3">
              <FaWater className="text-blue-500 mt-1 text-5xl" />
              <span>
                <strong>{t("ciubar.benefits.detox.title")}:</strong>{" "}
                {t("ciubar.benefits.detox.desc")}
              </span>
            </li>
            <li className="flex gap-3 flex-col items-center">
              <FaHeartbeat className="text-red-500 mt-1 text-5xl" />
              <span>
                <strong>{t("ciubar.benefits.muscleRelax.title")}:</strong>{" "}
                {t("ciubar.benefits.muscleRelax.desc")}
              </span>
            </li>
            <li className="flex flex-col items-center gap-3">
              <FaLeaf className="text-green-500 mt-1 text-5xl" />
              <span>
                <strong>{t("ciubar.benefits.healthySkin.title")}:</strong>{" "}
                {t("ciubar.benefits.healthySkin.desc")}
              </span>
            </li>
            <li className="flex flex-col items-center gap-3">
              <FaMoon className="text-purple-500 mt-1 text-5xl" />
              <span>
                <strong>{t("ciubar.benefits.betterSleep.title")}:</strong>{" "}
                {t("ciubar.benefits.betterSleep.desc")}
              </span>
            </li>
            <li className="flex flex-col items-center gap-3">
              <FaHotTub className="text-orange-500 mt-1 text-5xl" />
              <span>
                <strong>
                  {t("ciubar.benefits.authenticExperience.title")}:
                </strong>{" "}
                {t("ciubar.benefits.authenticExperience.desc")}
              </span>
            </li>
          </ul>
          <p className="pt-4 italic mt-20">
            <FaWater className="inline text-cyan-500 mr-2" />
            {t("ciubar.note")}
          </p>
        </C.ContainerDescription>
      </C.CiubarContainer>

      <C.JacuzziContainer
        className={cn(
          "grid place-items-center",
          "lg:grid-cols-2 mx-20 md:max-w-600 md:mx-none lg:max-w-1200 gap-20 l"
        )}
      >
        <C.VideoContainer className="w-full grow relative rounded-normal overflow-hidden aspect-9/16 lg:order-2 cursor-pointer">
          <C.JacuzziText className="text-white font-light capitalize absolute top-20 left-0 flex w-full px-20 text-center items-center justify-center text-logo z-10">
            {t("jacuzzi.subtitle")}
          </C.JacuzziText>
          <Video className="w-full h-full" src="/videos/jacuzzi-video-1.mp4" />
        </C.VideoContainer>
        <C.ContainerDescription className="shadow-xl bg-foreground rounded-normal p-40 text-[20px]">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            {t("jacuzzi.title")}
          </h2>
          <p className="my-20">{t("jacuzzi.intro")}</p>
          <ul className="space-y-3 pl-4">
            <li className="flex flex-col items-center gap-3">
              <FaWater className="text-blue-400 mt-1 text-5xl" />
              <span>
                <strong>{t("jacuzzi.benefits.hydrotherapy.title")}:</strong>{" "}
                {t("jacuzzi.benefits.hydrotherapy.description")}
              </span>
            </li>
            <li className="flex flex-col items-center gap-3">
              <FaSwimmingPool className="text-teal-500 mt-1 text-5xl" />
              <span>
                <strong>{t("jacuzzi.benefits.stressRelief.title")}:</strong>{" "}
                {t("jacuzzi.benefits.stressRelief.description")}
              </span>
            </li>
            <li className="flex flex-col items-center gap-3">
              <FaHeartbeat className="text-red-400 mt-1 text-5xl" />
              <span>
                <strong>{t("jacuzzi.benefits.cardioHealth.title")}:</strong>{" "}
                {t("jacuzzi.benefits.cardioHealth.description")}
              </span>
            </li>
            <li className="flex flex-col items-center gap-3">
              <FaBed className="text-purple-500 mt-1 text-5xl" />
              <span>
                <strong>{t("jacuzzi.benefits.betterSleep.title")}:</strong>{" "}
                {t("jacuzzi.benefits.betterSleep.description")}
              </span>
            </li>
            <li className="flex flex-col items-center gap-3">
              <FaSmile className="text-yellow-500 mt-1 text-5xl" />
              <span>
                <strong>
                  {t("jacuzzi.benefits.generalWellbeing.title")}:
                </strong>{" "}
                {t("jacuzzi.benefits.generalWellbeing.description")}
              </span>
            </li>
          </ul>
        </C.ContainerDescription>
      </C.JacuzziContainer>

      <C.PiscinaContainer
        className={cn(
          "grid place-items-center",
          "lg:grid-cols-2 mx-20 md:max-w-600 md:mx-none lg:max-w-1200 gap-20"
        )}
      >
        <C.VideoContainer className="w-full grow relative rounded-normal overflow-hidden aspect-9/16 cursor-pointer">
          <C.CiubarText className="text-white font-light capitalize absolute top-20 left-0 flex w-full px-20 text-center items-center justify-center text-logo z-10">
            {t("piscina.title_video")}
          </C.CiubarText>
          <Video className="w-full h-full" src="/videos/piscina-video-1.mp4" />
        </C.VideoContainer>

        <C.PiscinaDescription className="shadow-xl bg-foreground rounded-normal p-40 text-[20px] max-w-600">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            {t("piscina.title")}
          </h2>
          <p className="my-20">{t("piscina.description")}</p>
          <ul className="space-y-3 pl-4">
            <li className="flex flex-col items-center gap-3">
              <FaSwimmer className="text-blue-600 mt-1 text-5xl" />
              <span>
                <strong>{t("piscina.benefits.swimming_title")}:</strong>{" "}
                {t("piscina.benefits.swimming_desc")}
              </span>
            </li>
            <li className="flex flex-col items-center gap-3">
              <FaTint className="text-cyan-500 mt-1 text-5xl" />
              <span>
                <strong>{t("piscina.benefits.waterQuality_title")}:</strong>{" "}
                {t("piscina.benefits.waterQuality_desc")}
              </span>
            </li>
            <li className="flex flex-col items-center gap-3">
              <FaSpa className="text-purple-600 mt-1 text-5xl" />
              <span>
                <strong>{t("piscina.benefits.relaxation_title")}:</strong>{" "}
                {t("piscina.benefits.relaxation_desc")}
              </span>
            </li>
            <li className="flex flex-col items-center gap-3">
              <FaSeedling className="text-green-500 mt-1 text-5xl" />
              <span>
                <strong>{t("piscina.benefits.health_title")}:</strong>{" "}
                {t("piscina.benefits.health_desc")}
              </span>
            </li>
          </ul>
        </C.PiscinaDescription>
      </C.PiscinaContainer>

      <C.SaunaContainer
        className={cn(
          "grid place-items-center",
          "lg:grid-cols-2 mx-20 md:max-w-600 md:mx-none lg:max-w-1200 gap-20"
        )}
      >
        <C.VideoContainer className="w-full grow relative rounded-normal overflow-hidden aspect-9/16 lg:order-2 cursor-pointer">
          <C.SaunaText className="text-white font-light capitalize absolute top-20 left-0 flex w-full px-20 text-center items-center justify-center text-logo z-10">
            {t("sauna.title_video")}
          </C.SaunaText>
          <ImageSlideshow
            images={[
              {
                src: "/images/spa/sauna-1.webp",
                alt: "",
              },
              {
                src: "/images/spa/sauna-2.webp",
                alt: "",
              },
            ]}
          />
        </C.VideoContainer>
        <C.SaunaDescription className="shadow-xl bg-foreground rounded-normal p-40 text-[20px] max-w-600 mx-auto">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            {t("sauna.title")}
          </h2>
          <p className="my-20">{t("sauna.description")}</p>
          <ul className="space-y-3 pl-4">
            <li className="flex flex-col items-center gap-3">
              <FaFire className="text-red-600 mt-1 text-5xl" />
              <span>
                <strong>{t("sauna.benefits.detox.title")}:</strong>{" "}
                {t("sauna.benefits.detox.desc")}
              </span>
            </li>
            <li className="flex flex-col items-center gap-3">
              <FaTint className="text-blue-500 mt-1 text-5xl" />
              <span>
                <strong>{t("sauna.benefits.hydration.title")}:</strong>{" "}
                {t("sauna.benefits.hydration.desc")}
              </span>
            </li>
            <li className="flex flex-col items-center gap-3">
              <FaHeartbeat className="text-pink-600 mt-1 text-5xl" />
              <span>
                <strong>{t("sauna.benefits.circulation.title")}:</strong>{" "}
                {t("sauna.benefits.circulation.desc")}
              </span>
            </li>
            <li className="flex flex-col items-center gap-3">
              <FaBrain className="text-purple-600 mt-1 text-5xl" />
              <span>
                <strong>{t("sauna.benefits.relaxation.title")}:</strong>{" "}
                {t("sauna.benefits.relaxation.desc")}
              </span>
            </li>
            <li className="flex flex-col items-center gap-3">
              <FaSpa className="text-green-600 mt-1 text-5xl" />
              <span>
                <strong>{t("sauna.benefits.skinCare.title")}:</strong>{" "}
                {t("sauna.benefits.skinCare.desc")}
              </span>
            </li>
          </ul>
        </C.SaunaDescription>
      </C.SaunaContainer>

      <C.SalinaContainer
        className={cn(
          "grid place-items-center",
          "lg:grid-cols-2 mx-20 md:max-w-600 md:mx-none lg:max-w-1200 gap-20"
        )}
      >
        <C.VideoContainer className="w-full grow relative rounded-normal overflow-hidden aspect-9/16 cursor-pointer">
          <C.SaunaText className="text-white font-light capitalize absolute top-20 left-0 flex w-full px-20 text-center items-center justify-center text-logo z-10">
            {t("salina.title_video")}
          </C.SaunaText>
          <Image
            src={SalinaOne}
            alt=""
            fill
            className="object-cover object-center"
          />
        </C.VideoContainer>

        <C.SalinaDescription className="shadow-xl bg-foreground rounded-normal p-40 text-[20px] max-w-600">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            {t("salina.title")}
          </h2>
          <p className="my-20">{t("salina.description")}</p>
          <ul className="space-y-3 pl-4">
            <li className="flex flex-col items-center gap-3">
              <FaMountain className="text-gray-700 mt-1 text-5xl" />
              <span>
                <strong>
                  {t("salina.benefits.naturalEnvironment.title")}:
                </strong>{" "}
                {t("salina.benefits.naturalEnvironment.desc")}
              </span>
            </li>
            <li className="flex flex-col items-center gap-3">
              <FaLungs className="text-teal-600 mt-1 text-5xl" />
              <span>
                <strong>
                  {t("salina.benefits.respiratoryHealth.title")}:
                </strong>{" "}
                {t("salina.benefits.respiratoryHealth.desc")}
              </span>
            </li>
            <li className="flex flex-col items-center gap-3">
              <FaHeartbeat className="text-red-600 mt-1 text-5xl" />
              <span>
                <strong>{t("salina.benefits.circulation.title")}:</strong>{" "}
                {t("salina.benefits.circulation.desc")}
              </span>
            </li>
            <li className="flex flex-col items-center gap-3">
              <FaLeaf className="text-green-600 mt-1 text-5xl" />
              <span>
                <strong>{t("salina.benefits.immunity.title")}:</strong>{" "}
                {t("salina.benefits.immunity.desc")}
              </span>
            </li>
            <li className="flex flex-col items-center gap-3">
              <FaWind className="text-blue-400 mt-1 text-5xl" />
              <span>
                <strong>{t("salina.benefits.stressRelief.title")}:</strong>{" "}
                {t("salina.benefits.stressRelief.desc")}
              </span>
            </li>
          </ul>
        </C.SalinaDescription>
      </C.SalinaContainer>
    </section>
  );
}
