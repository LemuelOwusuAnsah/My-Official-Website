import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import en from "../locales/en.json"
import fr from "../locales/fr.json"
import es from "../locales/es.json"
import de from "../locales/de.json"
import po from "../locales/po.json"

export const supportedLanguages = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "de", label: "Deutsch" },
  { code: "po", label: "Português" },
] as const

export type SupportedLanguage = (typeof supportedLanguages)[number]["code"]

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      es: { translation: es },
      de: { translation: de },
      po: { translation: po },
    },
    lng: "en",
    fallbackLng: "en",
    supportedLngs: supportedLanguages.map((l) => l.code),
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage"],
      caches: ["localStorage"],
      lookupLocalStorage: "lemy-lang",
    },
  })

export default i18n
