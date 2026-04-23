import { Locale as NextIntlLocale, useLocale } from "next-intl";
import React from "react";
import { DayPicker, PropsRangeRequired, DateRange } from "react-day-picker";
import { it, ro, enUS, Locale } from "date-fns/locale";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type CalendarProps = {
  selected: DateRange | undefined;
  onSelect: (range: DateRange | undefined) => void;
};

export function Calendar({
  selected,
  onSelect,
  ...props
}: CalendarProps &
  Omit<PropsRangeRequired, "selected" | "onSelect" | "classNames">) {
  const localeCode = useLocale();
  const localeMap: Record<NextIntlLocale, Locale> = {
    "en-us": enUS,
    ro: ro,
    it: it,
  };
  const dateFnsLocale = localeMap[localeCode] || enUS;

  return (
    <div className="relative bg-surface rounded-2xl shadow-md border border-foreground/30 p-25 md:p-30 w-fit mx-auto">
      <DayPicker
        locale={dateFnsLocale}
        selected={selected}
        onSelect={onSelect}
        components={{
          Chevron: ({ ...chevronProps }) => {
            if (chevronProps.orientation === "left") {
              return (
                <FaChevronLeft className="w-16 h-16" />
              );
            }
            return (
              <FaChevronRight className="w-16 h-16" />
            );
          },
        }}
        classNames={{
          outside: "!opacity-0",
          disabled: "!opacity-40 !cursor-not-allowed",
          week: "grid grid-cols-7 gap-3",
          weeks: "flex flex-col gap-3",
          weekdays: "grid grid-cols-7 mb-8",
          weekday: "text-center text-xs font-semibold text-primary/50 uppercase tracking-wider py-8",
          months: "flex gap-20 pt-50",
          month: "bg-transparent",
          month_caption: "text-center mb-15",
          caption_label: "font-[family-name:var(--font-heading)] text-lg font-semibold text-text capitalize",
          nav: "absolute top-25 left-25 right-25 md:top-30 md:left-30 md:right-30 flex justify-between items-center z-10 pointer-events-none [&>*]:pointer-events-auto",
          day: "rounded-xl transition-all",
          day_button:
            "cursor-pointer rounded-xl text-center transition-all duration-150 py-10 px-8 w-full h-full text-sm font-medium hover:bg-primary/10 hover:text-primary active:scale-95",
          today: "!bg-foreground/40 !text-primary !font-bold",
          range_start: "!bg-primary !text-white !rounded-r-none !rounded-l-xl",
          range_end: "!bg-primary !text-white !rounded-l-none !rounded-r-xl",
          range_middle: "!bg-primary/15 !text-primary",
          selected: "!bg-primary !text-white",
        }}
        showOutsideDays
        numberOfMonths={2}
        {...props}
      />
    </div>
  );
}
