import { Link } from "@/components/ui/Link";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("ErrorNotFound");
  return (
    <div className="w-full h-full grid place-items-center">
      <div className="text-desc mx-50 text-center">{t("title")} </div>
      <Link type="ghost" className="hover:underline text-logo" href="/">
        {t("go_home")}
      </Link>
    </div>
  );
}
