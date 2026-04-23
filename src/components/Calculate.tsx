"use client";
import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { useTranslations } from "next-intl";
import { FaCalculator } from "react-icons/fa";

export default function Calculate(props: Readonly<{ basePrice: number }>) {
  const t = useTranslations("Calculate");
  const [result, setResult] = useState<string | null>(null);

  const form = useForm({
    onSubmit: async ({ value }) => {
      const calcValue =
        props.basePrice *
        (Number(value.adulti) +
          Number(value.copii1) * 0.5 +
          Number(value.copii2) * 0.7);
      setResult(calcValue.toFixed(0).toString() + " lei");
    },
    defaultValues: {
      adulti: "0",
      copii1: "0",
      copii2: "0",
    },
  });

  const handleInputChange =
    (field: { handleChange: (value: string) => void }) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let value = e.target.value;
      if (value !== "" && value !== "0") {
        value = value.replace(/^0+/, "");
      }
      field.handleChange(value === "" ? "0" : value);
    };

  return (
    <form
      className="w-full max-w-500 mx-auto bg-surface rounded-2xl shadow-md border border-foreground/30 overflow-hidden"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      {/* Header */}
      <div className="bg-primary px-25 py-15 flex items-center gap-10">
        <FaCalculator className="w-18 h-18 text-white/80" />
        <span className="text-white font-medium text-sm">{t("calculate")}</span>
      </div>

      {/* Inputs */}
      <div className="p-25 flex flex-col gap-20">
        <form.Field name="adulti">
          {(field) => (
            <div className="flex flex-col gap-6">
              <label className="text-sm font-medium text-text/70">{t("adults")}</label>
              <input
                name={field.name}
                value={field.state.value}
                type="number"
                min="0"
                onChange={handleInputChange(field)}
                className="w-full px-16 py-10 rounded-xl bg-white border border-foreground/20 text-center text-text font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all duration-200"
              />
            </div>
          )}
        </form.Field>

        <form.Field name="copii1">
          {(field) => (
            <div className="flex flex-col gap-6">
              <label className="text-sm font-medium text-text/70">{t("children_6_12")}</label>
              <input
                name={field.name}
                value={field.state.value}
                type="number"
                min="0"
                onChange={handleInputChange(field)}
                className="w-full px-16 py-10 rounded-xl bg-white border border-foreground/20 text-center text-text font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all duration-200"
              />
            </div>
          )}
        </form.Field>

        <form.Field name="copii2">
          {(field) => (
            <div className="flex flex-col gap-6">
              <label className="text-sm font-medium text-text/70">{t("children_4_6")}</label>
              <input
                name={field.name}
                value={field.state.value}
                type="number"
                min="0"
                onChange={handleInputChange(field)}
                className="w-full px-16 py-10 rounded-xl bg-white border border-foreground/20 text-center text-text font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all duration-200"
              />
            </div>
          )}
        </form.Field>

        <form.Subscribe>
          <button
            type="submit"
            className="w-full bg-primary text-white rounded-full px-20 py-12 shadow-md transition-all duration-200 hover:brightness-110 hover:shadow-lg active:scale-95 cursor-pointer text-sm font-medium flex items-center justify-center gap-8 mt-5"
          >
            <FaCalculator className="w-14 h-14" />
            {t("calculate")}
          </button>
        </form.Subscribe>

        {/* Result */}
        {result && (
          <div className="bg-primary/8 rounded-xl p-20 text-center border border-primary/15">
            <span className="text-sm font-medium text-primary/70 block mb-5">{t("result")}</span>
            <span className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary">{result}</span>
          </div>
        )}
      </div>
    </form>
  );
}
