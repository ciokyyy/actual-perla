"use client";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Listbox, ListboxButton, ListboxOptions } from "@headlessui/react";
import { useParams } from "next/navigation";
import { ReactNode, startTransition } from "react";
import { cn } from "@/libs/utils";
import { HiOutlineGlobeAlt } from "react-icons/hi";

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
      as="div"
      className="fixed top-20 left-20 z-20"
    >
      <ListboxButton
        className="flex items-center gap-6 bg-surface/90 backdrop-blur-sm text-primary rounded-full px-14 py-10 shadow-lg transition-all duration-200 hover:bg-surface hover:shadow-xl active:scale-95 cursor-pointer text-sm font-medium"
      >
        {label}
        <HiOutlineGlobeAlt className="w-16 h-16" />
      </ListboxButton>
      <ListboxOptions
        transition
        anchor="bottom"
        className={cn(
          "origin-top transition duration-200 ease-out data-closed:scale-95 data-closed:opacity-0",
          "bg-surface/95 backdrop-blur-md text-text rounded-2xl shadow-xl p-8 mt-8 flex flex-col gap-2 min-w-140"
        )}
      >
        {children}
      </ListboxOptions>
    </Listbox>
  );
}
