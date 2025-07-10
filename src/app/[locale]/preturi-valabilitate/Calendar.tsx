import { Locale as NextIntlLocale, useLocale } from "next-intl";
import React from "react";
import { DayPicker, PropsRangeRequired, DateRange } from "react-day-picker";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { it, ro, enUS, Locale } from "date-fns/locale";

type CalendarProps = {
  selected: DateRange | undefined;
  onSelect: (range: DateRange | undefined) => void;
  // Add any other DayPicker props you want to expose
};

export function Calendar({
  selected,
  onSelect,
  ...props
}: CalendarProps &
  Omit<PropsRangeRequired, "selected" | "onSelect" | "classNames">) {
  const localeCode = useLocale();
  // Map your supported locale codes to date-fns locale objects
  const localeMap: Record<NextIntlLocale, Locale> = {
    "en-us": enUS,
    ro: ro,
    it: it,
  };
  const dateFnsLocale = localeMap[localeCode] || enUS;
  return (
    <DayPicker
      locale={dateFnsLocale}
      selected={selected}
      onSelect={onSelect}
      components={{
        Chevron: ({ ...props }) => {
          return props.orientation == "left" ? (
            <FaArrowAltCircleLeft className="h-25 w-25 left-30 absolute top-20 transition-all hover:cursor-pointer hover:text-white" />
          ) : (
            <FaArrowAltCircleRight className="h-25 w-25 right-30 absolute top-20 transition-all hover:cursor-pointer hover:text-white" />
          );
        },
      }}
      classNames={{
        outside: "!opacity-0",
        disabled: "!opacity-60",
        week: "grid grid-cols-7 gap-5",
        weeks: "flex flex-col gap-5",
        weekdays: "grid grid-cols-7",
        months: "flex-col md:flex-row flex gap-5 relative",
        month_caption: "text-center mb-20 capitalize",
        nav: "w-full absolute",
        day: "rounded-lg transition-all",
        day_button:
          "cursor-pointer rounded-lg text-center transition-all p-10 w-full h-full hover:bg-primary hover:text-white active:bg-primary active:text-white active:scale-95",
        month: "bg-foreground rounded-normal p-20 border-primary border-1",
        today: "!bg-secondary text-text",
        range_start: "!bg-primary text-white",
        range_end: "!bg-primary text-white",
        range_middle: "!bg-background text-text opacity-70",
      }}
      showOutsideDays
      numberOfMonths={2}
      {...props}
    />
  );
}
