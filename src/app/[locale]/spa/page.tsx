import C from "@/components/ComponentNames";
import { cn } from "@/libs/utils";
import { IoMdWater } from "react-icons/io";
import Instaplay from "player.style/instaplay/react";
import CiubarOne from "/videos/ciubar-video-3.mp4";
import Video from "next-video";
export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <C.Text className="oferta-title">Oaza de relaxare de la noi !</C.Text>
      <IoMdWater className="oferta-icon-title" />
      <div className="shadow-xl sm:mx-50 leading-40 bg-foreground rounded-normal max-w-450 m-20 p-40 text-center text-[20px]">
        <div>
          Fii pregătit pentru starea de bine din Bucovina la Pensiunea Perla
          Brazilor
          <br />
          <span className="font-bold"> Piscină, ciubăr cu apă sărată </span>
          te așteaptă să uiți de griji și să te relaxezi.
        </div>
      </div>
      <C.CiubarContainer className={cn()}>
        <C.VideoContainer className="w-400 relative mx-20 rounded-normal overflow-hidden">
          <C.CiubarText className="text-white font-light capitalize absolute top-20 left-0 flex w-full px-20 text-center items-center justify-center text-logo z-10">
            Ciubere cu apă sărată de la Cacica !
          </C.CiubarText>
          <Video theme={Instaplay} autoplay src={CiubarOne}></Video>
        </C.VideoContainer>
      </C.CiubarContainer>
      <C.CiubarContainer className={cn()}>
        <C.VideoContainer className="max-w-400 relative mx-20 rounded-normal overflow-hidden">
          <C.CiubarText className="text-white font-light capitalize absolute top-20 left-0 flex w-full px-20 text-center items-center justify-center text-logo z-10">
            Ciubere cu apă sărată de la Cacica !
          </C.CiubarText>
        </C.VideoContainer>
      </C.CiubarContainer>
    </div>
  );
}
