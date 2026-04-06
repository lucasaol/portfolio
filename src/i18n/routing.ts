import { defineRouting } from "next-intl/routing";

export const locales = ["br", "en"];
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales: locales,
  defaultLocale: "br",
});