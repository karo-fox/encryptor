import { createI18n } from "vue-i18n";
import * as pl from "./i18n_languages/pl.json";
import * as en from "./i18n_languages/en.json";

export const i18n = createI18n({
  legacy: false,
  locale: "pl",
  fallbackLocale: "en",
  messages: {
    pl: pl,
    en: en,
  },
});
