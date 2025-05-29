import { Locale } from "next-intl";

export type Props = {
  params: Promise<{ locale: Locale }>;
};
