"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { FaCalculator } from "react-icons/fa";

export default function Calculate(props: Readonly<{ basePrice: number }>) {
  const t = useTranslations("Calculate");
  const [values, setValues] = useState({
    adulti: "0",
    copii1: "0",
    copii2: "0",
  });

  const sanitizeValue = (input: string) => {
    let value = input;
    if (value !== "" && value !== "0") {
      value = value.replace(/^0+/, "");
    }
    return value === "" ? "0" : value;
  };

  const handleInputChange =
    (key: "adulti" | "copii1" | "copii2") =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues((prev) => ({
        ...prev,
        [key]: sanitizeValue(e.target.value),
      }));
    };

  const calcValue =
    props.basePrice *
    (Number(values.adulti) +
      Number(values.copii1) * 0.5 +
      Number(values.copii2) * 0.7);
  const result = `${calcValue.toFixed(0)} lei`;

  return (
    <div className="w-full max-w-500 mx-auto bg-surface rounded-2xl shadow-md border border-foreground/30 overflow-hidden">
      {/* Header */}
      <div className="bg-primary px-25 py-15 flex items-center gap-10">
        <FaCalculator className="w-18 h-18 text-white/80" />
        <span className="text-white font-medium text-sm">{t("calculate")}</span>
      </div>

      {/* Inputs */}
      <div className="p-25 flex flex-col gap-20">
        <div className="flex flex-col gap-6">
          <label className="text-sm font-medium text-text/70">{t("adults")}</label>
          <input
            name="adulti"
            value={values.adulti}
            type="number"
            min="0"
            onChange={handleInputChange("adulti")}
            className="w-full px-16 py-10 rounded-xl bg-white border border-foreground/20 text-center text-text font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all duration-200"
          />
        </div>

        <div className="flex flex-col gap-6">
          <label className="text-sm font-medium text-text/70">{t("children_6_12")}</label>
          <input
            name="copii1"
            value={values.copii1}
            type="number"
            min="0"
            onChange={handleInputChange("copii1")}
            className="w-full px-16 py-10 rounded-xl bg-white border border-foreground/20 text-center text-text font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all duration-200"
          />
        </div>

        <div className="flex flex-col gap-6">
          <label className="text-sm font-medium text-text/70">{t("children_4_6")}</label>
          <input
            name="copii2"
            value={values.copii2}
            type="number"
            min="0"
            onChange={handleInputChange("copii2")}
            className="w-full px-16 py-10 rounded-xl bg-white border border-foreground/20 text-center text-text font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all duration-200"
          />
        </div>

        {/* Result */}
        <div className="bg-primary/8 rounded-xl p-20 text-center border border-primary/15">
          <span className="text-sm font-medium text-primary/70 block mb-5">{t("result")}</span>
          <span className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary">{result}</span>
        </div>
      </div>
    </div>
  );
}
