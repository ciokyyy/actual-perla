import { useTranslations } from "next-intl";
import C from "../ComponentNames";
import { Link } from "./Link";

export function BookNow() {
  const t = useTranslations("BookNow");
  return (
    <C.BookNow
      className="fixed bottom-20 right-20"
      as={Link}
      type="primary-button"
      href="/rezerva-acum"
    >
      {t("book_now")}{" "}
    </C.BookNow>
  );
}
