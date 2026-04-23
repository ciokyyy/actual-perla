import { cn } from "@/libs/utils";
import { Link as Lnk } from "@/i18n/navigation";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof Lnk> & {
  type?: "primary" | "ghost" | "card" | "card-inverse" | "primary-button";
};

export function Link({ className, type = "ghost", ...props }: Props) {
  // Dictionary of classNames for each type
  const classNames = {
    ghost: cn(
      "transition-all duration-200 ease-out",
      "hover:brightness-110 hover:underline",
      "active:brightness-90"
    ),
    primary: cn(
      "transition-all duration-200 ease-out",
      "hover:brightness-110",
      "active:brightness-90"
    ),
    card: cn(
      "bg-primary text-white rounded-normal",
      "transition-all duration-200 ease-out",
      "hover:shadow-lg hover:brightness-110",
      "active:brightness-90 active:shadow-md"
    ),
    "card-inverse": cn(
      "bg-surface text-primary rounded-normal",
      "transition-all duration-200 ease-out",
      "hover:shadow-lg hover:bg-foreground hover:text-white",
      "active:brightness-90 active:shadow-md"
    ),
    "primary-button": cn(
      "rounded-normal !text-white px-10 py-10 cursor-pointer bg-primary",
      "transition-all duration-200 ease-out text-desc font-medium",
      "hover:bg-text hover:shadow-lg hover:brightness-105",
      "active:bg-text active:brightness-95 active:shadow-md",
      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    ),
  };

  const combinedClassName = cn(classNames[type], className);

  return <Lnk {...props} className={combinedClassName} />;
}
