import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["ro", "en-us", "it"],

  // Used when no locale matches
  defaultLocale: "ro",
  pathnames: {
    "/": "/",
    "/rezerva-acum": {
      ro: "/rezerva-acum",
      "en-us": "/book-now",
      it: "/prenota-ora",
    },
    "/oferta-craciun": {
      ro: "/oferta-craciun",
      "en-us": "/christmas-offer",
      it: "/offerta-natale",
    },
    "/oferta-revelion": {
      ro: "/oferta-revelion",
      "en-us": "/new-years-offer",
      it: "/offerta-capodanno",
    },
    "/oferta-demipensiune": {
      ro: "/oferta-demipensiune",
      "en-us": "/half-board-offer",
      it: "/offerta-mezza-pensione",
    },
    "/camere": {
      ro: "/camere",
      "en-us": "/rooms",
      it: "/camere",
    },
    "/spa": {
      ro: "/spa",
      "en-us": "/spa",
      it: "/spa",
    },
    "/preturi-valabilitate": {
      ro: "/preturi-valabilitate",
      "en-us": "/prices-availability",
      it: "/prezzi-disponibilita",
    },
  },
});
