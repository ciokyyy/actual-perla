"use client";
import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import Input from "./ui/Input";
import { Button } from "./ui/Button";
import { useTranslations } from "next-intl";

export default function Calculate(props: Readonly<{ basePrice: number }>) {
  const t = useTranslations("Calculate");
  const [lastValue, setLastValue] = useState<string>("0 lei");
  const form = useForm({
    onSubmit: async ({ value }) => {
      const calcValue =
        props.basePrice *
        (Number(value.adulti) +
          Number(value.copii1) * 0.5 +
          Number(value.copii2) * 0.7);

      setLastValue(calcValue.toFixed(0).toString() + " lei");
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

      // Strip leading zeros for non-empty inputs
      if (value !== "" && value !== "0") {
        value = value.replace(/^0+/, "");
      }

      // Call the field's change handler
      field.handleChange(value === "" ? "0" : value);
    };

  return (
    <form
      className="sm:mx-50 shadow-lg bg-foreground rounded-normal m-20 grid place-items-center gap-20 p-40 sm:grid-cols-3 sm:grid-rows-3"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <form.Field name="adulti">
        {(field) => (
          <Input
            label={t("adults")}
            name={field.name}
            value={field.state.value}
            type="number" // Input type is number
            onChange={handleInputChange(field)}
          />
        )}
      </form.Field>

      <form.Field name="copii1">
        {(field) => (
          <Input
            label={t("children_6_12")}
            name={field.name}
            value={field.state.value}
            type="number"
            onChange={handleInputChange(field)}
          />
        )}
      </form.Field>

      <form.Field name="copii2">
        {(field) => (
          <Input
            label={t("children_4_6")}
            name={field.name}
            value={field.state.value}
            type="number"
            onChange={handleInputChange(field)}
          />
        )}
      </form.Field>

      <form.Subscribe>
        <Button
          className="pointer-events-auto !w-full sm:col-[2/3]"
          type="submit"
        >
          {t("calculate")}
        </Button>
      </form.Subscribe>

      <Input
        label={t("result")}
        parentClassName="sm:row-[3/4] sm:col-span-3"
        value={lastValue}
        disabled
      />
    </form>
  );
}
