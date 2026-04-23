import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import LocaleSwitcherSelect from "./LocaleSwitcher";
import { ListboxOption } from "@headlessui/react";
import ReactCountryFlag from "react-country-flag";
import { getLanguageNameInOwnLanguage } from "@/libs/locale";
import { cn } from "@/libs/utils";

export default function LocaleSwitcher() {
  const locale = useLocale();
  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      label={
        <ReactCountryFlag
          countryCode={
            locale.includes("-")
              ? locale.split("-")[1].toUpperCase()
              : locale.toUpperCase()
          }
          svg
          style={{ width: "1.2em", height: "1.2em" }}
        />
      }
    >
      {routing.locales.map((cur) => (
        <ListboxOption
          key={cur}
          value={cur}
          className={cn(
            "flex items-center gap-8 px-12 py-8 rounded-xl text-sm cursor-pointer",
            "transition-all duration-150",
            "hover:bg-primary/8 hover:text-primary",
            "data-[selected]:bg-primary/10 data-[selected]:text-primary data-[selected]:font-medium"
          )}
        >
          <ReactCountryFlag
            countryCode={
              cur.includes("-")
                ? cur.split("-")[1].toUpperCase()
                : cur.toUpperCase()
            }
            svg
            style={{ width: "1.2em", height: "1.2em" }}
          />
          <span>{getLanguageNameInOwnLanguage(cur.toString())}</span>
        </ListboxOption>
      ))}
    </LocaleSwitcherSelect>
  );
}
