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
            style={{
              width: "1.5em",
              height: "1.5em",
            }}
          />
        
      }
    >
      {routing.locales.map((cur) => (
        <ListboxOption
          key={cur}
          value={cur}
          className={cn(
            "text-label capitalize cursor-pointer",
            "hover:underline hover:scale-110 active:scale-90 transition"
          )}
        >
          <ReactCountryFlag
            countryCode={
              cur.includes("-")
                ? cur.split("-")[1].toUpperCase()
                : cur.toUpperCase()
            }
            svg
            style={{
              width: "1.5em",
              height: "1.5em",
              marginRight: "0.5em",
            }}
          />{" "}
          {getLanguageNameInOwnLanguage(cur.toString())}
        </ListboxOption>
      ))}
    </LocaleSwitcherSelect>
  );
}
