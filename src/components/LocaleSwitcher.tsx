"use client";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Listbox, ListboxButton, ListboxOptions } from "@headlessui/react";
import { useParams } from "next/navigation";
import { ReactNode, startTransition } from "react";
import { Button } from "./ui/Button";
import { cn } from "@/libs/utils";
type Props = {
  children: ReactNode;
  defaultValue: string;
  label: ReactNode;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Readonly<Props>) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(nextLocale: string) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }
  return (
    <Listbox
      onChange={onSelectChange}
      defaultValue={defaultValue}
      as={"div"}
      className="fixed top-20 left-20 z-20 drop-shadow-lg"
    >
      <ListboxButton as={Button} className="text-label">
        {label}
      </ListboxButton>
      <ListboxOptions
        transition
        anchor="bottom"
        className={cn(
          "origin-top transition duration-200 ease-out data-closed:scale-95 data-closed:opacity-0",
          "bg-primary text-white font-thin rounded-normal p-20 mt-10 flex flex-col gap-10 mx-20"
        )}
      >
        {children}
      </ListboxOptions>
    </Listbox>
  );
}
