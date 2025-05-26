"use client";
import Logo from "@/components/ui/Logo";
import C from "@/components/ComponentNames";
import Image from "next/image";
import HeaderImage from "~/images/ui/header.jpg";
import LogoWhiteText from "~/images/ui/logo-white-text.png";
export default function Header() {
  return (
    <header className="w-full place-items-center grid">
      <C.GradientFill className="absolute top-0 left-0 h-[70dvh] w-full header-gradient -z-10"></C.GradientFill>
      <C.Container className="h-300 md:h-500 md:max-w-1200 relative w-full md:shadow-wcolor">
        <Image
          className="rounded-b-normal h-full w-full object-cover object-center"
            src={HeaderImage}
            alt="Header Image"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(29,91,23)] to-transparent rounded-b-normal"></div>
        <div className="absolute left-0 top-0 grid grid-rows-2  h-full p-1/10 aspect-auto gap-10">
          <Logo white className="h-full w-full object-contain"></Logo>
          <Image
            className="rounded-b-normal h-full w-full object-contain"
            src={LogoWhiteText}
            alt="Logo White Text"
          />
        </div>
      </C.Container>
    </header>
  );
}
