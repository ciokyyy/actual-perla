import { Field, Input as Inpt, Label } from "@headlessui/react";
import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"input"> & {
  label?: string;
  labelClassName?: string;
  parentClassName?: string;
};

export default function Input({
  label,
  labelClassName,
  parentClassName,
  ...inputProps
}: Props) {
  return (
    <Field className={`${parentClassName}  flex flex-col text-text`}>
      {label && (
        <Label className={labelClassName + " text-label"}>{label}</Label>
      )}
      <Inpt
        {...inputProps} // Spread only valid input props
        className={`px-20 py-10 border-primary border-2 rounded-normal bg-surface w-full max-w-150 placeholder:text-center text-center ${
          inputProps.className ?? ""
        }`}
      />
    </Field>
  );
}
