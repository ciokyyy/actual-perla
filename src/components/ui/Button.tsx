import { cn } from "@/libs/utils";
import { ButtonProps, Button as Btn } from "@headlessui/react";

type Props = ButtonProps & {
  variant?: "primary" | "ghost" | "card" | "card-inverse";
};

export function Button({ className, variant = "primary", ...props }: Props) {
  // Dictionary of classNames for each type
  const classNames = {
    ghost: cn(
      "bg-primary text-white transition-all",
      "hover:text-white hover:scale-110",
      "active:text-white active:scale-90",
      "disabled:opacity-50 disabled:pointer-events-none"
    ),
    card: cn(
      "bg-primary text-white",
      "hover:text-white hover:bg-primary hover:scale-110",
      "active:text-white active:scale-90 active:bg-primary",
      "disabled:opacity-50 disabled:pointer-events-none"
    ),
    "card-inverse": cn(
      "bg-white text-primary",
      "hover:text-white hover:bg-foreground hover:scale-110",
      "active:text-white active:scale-90 active:bg-foreground",
      "disabled:opacity-50 disabled:pointer-events-none"
    ),
    primary: cn(
      "rounded-normal !text-white px-10 py-10 cursor-pointer bg-primary transition-all text-desc",
      "hover:bg-text hover:scale-110",
      "active:bg-text active:scale-90",
      "disabled:opacity-50 disabled:pointer-events-none"
    ),
  };

  const combinedClassName = cn(classNames[variant], className);

  return <Btn {...props} className={combinedClassName} />;
}
