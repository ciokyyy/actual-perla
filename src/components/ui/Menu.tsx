"use client";
import { CloseButton, Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "@/components/ui/Link";
import { usePathname } from "@/i18n/navigation";
import Logo from "@/components/ui/Logo";
import { useTranslations } from "next-intl";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FaHome, FaBed, FaSpa, FaCalendarCheck, FaConciergeBell } from "react-icons/fa";
import { TbChristmasTreeFilled } from "react-icons/tb";
import { BiSolidOffer } from "react-icons/bi";

export default function Menu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("Menu");

  const sections = [
    {
      label: null,
      links: [
        { href: "/", text: t("home"), icon: FaHome },
      ],
    },
    {
      label: t("book_now"),
      links: [
        { href: "/rezerva-acum", text: t("book_now"), icon: FaCalendarCheck },
        { href: "/preturi-valabilitate", text: t("verify_availability"), icon: FaConciergeBell },
      ],
    },
    {
      label: null,
      links: [
        { href: "/camere", text: t("rooms"), icon: FaBed },
        { href: "/spa", text: t("spa"), icon: FaSpa },
      ],
    },
    {
      label: null,
      links: [
        { href: "/oferta-demipensiune", text: t("offer_halfboard"), icon: BiSolidOffer },
        { href: "/oferta-craciun", text: t("offer_christmas"), icon: TbChristmasTreeFilled },
        { href: "/oferta-revelion", text: t("offer_newyear"), icon: TbChristmasTreeFilled },
      ],
    },
  ];

  return (
    <>
      {/* Fixed buttons container */}
      <div className="fixed top-20 right-20 z-30 flex items-center gap-8">
        {/* Menu trigger button */}
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-8 bg-surface/90 backdrop-blur-sm text-primary rounded-full px-16 py-10 shadow-lg transition-all duration-200 hover:bg-surface hover:shadow-xl active:scale-95 cursor-pointer"
          aria-label="Open menu"
        >
          <span className="text-sm font-medium hidden md:inline">{t("menu")}</span>
          <HiMenuAlt3 className="w-22 h-22" />
        </button>

        {/* Book Now trigger button */}
        <Link
          href="/rezerva-acum"
          className="flex items-center gap-8 bg-surface/90 backdrop-blur-sm text-primary rounded-full px-16 py-10 shadow-lg transition-all duration-200 hover:bg-surface hover:shadow-xl active:scale-95 cursor-pointer"
          aria-label="Book now"
        >
          <span className="text-sm font-medium hidden md:inline">{t("book_now")}</span>
          <FaCalendarCheck className="w-22 h-22" />
        </Link>
      </div>

      {/* Overlay + Panel */}
      <AnimatePresence>
        {open && (
          <Dialog open={open} onClose={() => setOpen(false)} className="z-50">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              aria-hidden="true"
            />

            {/* Slide-in panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed top-0 right-0 h-full w-300 max-w-[85vw] z-50"
            >
              <DialogPanel className="h-full bg-surface/95 backdrop-blur-md shadow-2xl flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-20 border-b border-primary/10">
                  <Logo className="w-45" />
                  <CloseButton className="w-36 h-36 rounded-full bg-primary/5 flex items-center justify-center text-primary cursor-pointer transition-all duration-200 hover:bg-primary/10 active:scale-90">
                    <IoClose className="w-20 h-20" />
                  </CloseButton>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto py-20">
                  {sections.map((section, sIdx) => (
                    <div key={sIdx} className="mb-10">
                      {section.label && (
                        <div className="px-25 py-8 text-xs font-semibold uppercase tracking-wider text-primary/50">
                          {section.label}
                        </div>
                      )}
                      {section.links.map((link) => {
                        const isActive = link.href === pathname;
                        const Icon = link.icon;
                        return (
                          <Link
                            key={link.href}
                            onClick={() => setOpen(false)}
                            href={link.href as "/"}
                            className={`flex items-center gap-12 px-25 py-12 text-sm font-medium transition-all duration-150 cursor-pointer ${
                              isActive
                                ? "bg-primary/8 text-primary border-l-3 border-primary"
                                : "text-text hover:bg-primary/5 hover:text-primary"
                            }`}
                          >
                            {Icon && <Icon className="w-18 h-18" />}
                            {link.text}
                          </Link>
                        );
                      })}
                      {sIdx < sections.length - 1 && (
                        <div className="mx-25 my-8 border-t border-foreground/30" />
                      )}
                    </div>
                  ))}
                </nav>

                {/* Footer */}
                <div className="p-20 border-t border-primary/10">
                  <Link
                    onClick={() => setOpen(false)}
                    href="/rezerva-acum"
                    className="flex items-center justify-center gap-8 bg-primary text-white rounded-full px-18 py-10 shadow-md transition-all duration-200 hover:brightness-110 hover:shadow-lg active:scale-95 cursor-pointer text-sm font-medium"
                  >
                    <FaCalendarCheck className="w-14 h-14" />
                    {t("book_now")}
                  </Link>
                </div>
              </DialogPanel>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}
