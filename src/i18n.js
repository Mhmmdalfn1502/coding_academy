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
    lng: localStorage.getItem("lang") || "id", // default: Indonesia
    fallbackLng: "id",
    interpolation: {
      escapeValue: false, // dont escape HTML/JSX
    },
    react: {
      transSupportBasicHtmlNodes: true, // active parsing HTML/JSX
      transKeepBasicHtmlNodesFor: ["br", "strong", "i", "b", "p", "span"], // pertahankan tag ini
    },
  });

export default i18n;
