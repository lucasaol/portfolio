import type { Locale } from "@/i18n/routing";
import type { Messages } from "./types";
import br from "./br";
import en from "./en";

export const messages: Record<Locale, Messages> = {
  br,
  en,
};
