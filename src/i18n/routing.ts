import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["br", "en"],
  defaultLocale: "br",
});

export type Locale = (typeof routing.locales)[number];
