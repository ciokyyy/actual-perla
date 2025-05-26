"use client";
import { CloseButton, Dialog, DialogPanel } from "@headlessui/react";
import { CiMenuKebab } from "react-icons/ci";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from "@/components/ui/Link";
import { usePathname } from "next/navigation";
import Logo from "@/components/ui/Logo";
import { Button } from "./Button";
import { useTranslations } from "next-intl";

export default function Menu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("Menu");
  const links = [
    {
      href: "/",
      text: t("home"),
    },
    {
      separator: true,
    },
    {
      href: "/rezerva-acum-demipensiune",
      text: t("book_halfboard"),
    },
    {
      href: "/camere",
      text: t("rooms"),
    },
    {
      href: "/mancare",
      text: t("food"),
    },
    {
      href: "/spa",
      text: t("spa"),
    },
    {
      separator: true,
    },
    {
      href: "/oferta-demipensiune",
      text: t("offer_halfboard"),
    },
    {
      href: "/oferta-craciun",
      text: t("offer_christmas"),
    },
    {
      href: "/oferta-revelion",
      text: t("offer_newyear"),
    },
    {
      separator: true,
    },
    {
      href: "#contact",
      text: t("contact"),
    },
    {
      href: "#datele-firmei",
      text: t("about"),
    },
  ];

  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
        className="rounded-normal md:text-desc fixed right-20 top-20 z-30 flex items-center p-10 px-10 text-xs font-light shadow-xl"
      >
        {t("menu")} <CiMenuKebab className="md:h-30 md:w-30 h-20 w-20" />
      </Button>
      <AnimatePresence>
        {open && (
          <Dialog open={open} onClose={() => setOpen(false)} className="z-50">
            <div className="overflow-x-hidden">
              <motion.div
                key="modal"
                initial={{ x: "100vw" }}
                animate={{ x: "0" }}
                exit={{ x: "100vw" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-primary py-50 fixed left-0 top-0 z-40 grid h-full min-h-dvh place-items-center overflow-y-auto"
              >
                <DialogPanel className="w-screen relative">
                  <motion.div
                    initial={{ x: "25%", opacity: 0 }}
                    animate={{
                      x: "0",
                      opacity: 1,
                    }}
                    transition={{ duration: 0.2, ease: "easeOut", delay: 0.2 }}
                    className="fixed z-50 right-20 top-20"
                  >
                    <CloseButton className="rounded-normal text-primary bg-white p-7 hover:cursor-pointer z-50">
                      <IoCloseCircleOutline size="25" />
                    </CloseButton>
                  </motion.div>

                  <div className="relative flex flex-col items-center justify-around gap-20">
                    <motion.div
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        ease: "easeOut",
                        delay: 1.2,
                      }}
                      className="mb-20"
                    >
                      <Logo white className="w-70" />
                    </motion.div>

                    {links.map((el, index) => {
                      const isSeparator = el.separator !== undefined;

                      return (
                        <motion.div
                          key={isSeparator ? `separator-${index}` : el.href}
                          initial={{ x: "25%", opacity: 0 }}
                          animate={{
                            x: "0",
                            opacity: 1,
                            scale:
                              !isSeparator && el.href === pathname ? 1.2 : 1,
                          }}
                          transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                            delay: index * 0.2 + 0.5,
                          }}
                        >
                          {isSeparator ? (
                            <div className="rounded-normal w-100 my-4 border-t-2 border-white" />
                          ) : (
                            <Link onClick={() => setOpen(false)} href={el.href}>
                              <Button
                                className={`${
                                  el.href === pathname &&
                                  "bg-secondary !text-text"
                                }`}
                              >
                                {el.text}
                              </Button>
                            </Link>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </DialogPanel>
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}
