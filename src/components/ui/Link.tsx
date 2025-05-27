import { cn } from "@/libs/utils";
import { Link as Lnk } from "@/i18n/navigation";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof Lnk> & {
  type?: "primary" | "ghost" | "card" | "card-inverse" | "primary-button";
};

export function Link({ className, type = "ghost", ...props }: Props) {
  // Dictionary of classNames for each type
  const classNames = {
    ghost: cn("transition-all", "hover:scale-110", "active:scale-90"),
    primary: cn(),
    card: cn(
      "bg-primary text-white",
      "hover:text-white hover:bg-primary hover:scale-110",
      "active:text-white active:scale-90 active:bg-primary"
    ),
    "card-inverse": cn(
      "bg-white text-primary",
      "hover:text-white hover:bg-foreground hover:scale-110",
      "active:text-white active:scale-90 active:bg-foreground"
    ),
    "primary-button": cn(
      "rounded-normal !text-white px-10 py-10 cursor-pointer bg-primary transition-all text-desc",
      "hover:bg-text hover:scale-110",
      "active:bg-text active:scale-90"
    ),
  };

  const combinedClassName = cn(classNames[type], className);

  return <Lnk {...props} className={combinedClassName} />;
}
