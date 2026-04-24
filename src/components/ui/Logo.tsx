import Image from "next/image";
import LogoWhite from "~/images/ui/logo-white.webp";
import LogoGreen from "~/images/ui/logo.webp";
export default function Logo(props: Readonly<{ className?: string; white?: boolean }>) {
  return (
    <Image
        src={props.white ? LogoWhite : LogoGreen}
        alt="Logo"
      className={props.className}
    />
  );
}
