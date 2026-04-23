import { cn } from "@/libs/utils";
import { ButtonProps, Button as Btn } from "@headlessui/react";

type Props = ButtonProps & {
  variant?: "primary" | "ghost" | "card" | "card-inverse";
};

export function Button({ className, variant = "primary", ...props }: Props) {
  // Dictionary of classNames for each type
  const classNames = {
    ghost: cn(
      "bg-primary text-white rounded-normal",
      "transition-all duration-200 ease-out",
      "hover:brightness-110 hover:shadow-lg",
      "active:brightness-90 active:shadow-md",
      "disabled:opacity-50 disabled:pointer-events-none",
      "cursor-pointer"
    ),
    card: cn(
      "bg-primary text-white rounded-normal",
      "transition-all duration-200 ease-out",
      "hover:brightness-110 hover:shadow-lg",
      "active:brightness-90 active:shadow-md",
      "disabled:opacity-50 disabled:pointer-events-none",
      "cursor-pointer"
    ),
    "card-inverse": cn(
      "bg-surface text-primary rounded-normal",
      "transition-all duration-200 ease-out",
      "hover:bg-foreground hover:text-white hover:shadow-lg",
      "active:brightness-90 active:shadow-md",
      "disabled:opacity-50 disabled:pointer-events-none",
      "cursor-pointer"
    ),
    primary: cn(
      "rounded-normal !text-white px-10 py-10 cursor-pointer bg-primary",
      "transition-all duration-200 ease-out text-desc font-medium",
      "hover:bg-text hover:shadow-lg hover:brightness-105",
      "active:bg-text active:brightness-95 active:shadow-md",
      "disabled:opacity-50 disabled:pointer-events-none",
      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    ),
  };

  const combinedClassName = cn(classNames[variant], className);

  return <Btn {...props} className={combinedClassName} />;
}
