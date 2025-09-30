import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import file JSON untuk bahasa
import en from "./locales/en/translation.json";
import id from "./locales/id/translation.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      id: { translation: id },
    },
    lng: localStorage.getItem("lang") || "id", // default Indonesia
    fallbackLng: "id", // fallback juga Indonesia
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
