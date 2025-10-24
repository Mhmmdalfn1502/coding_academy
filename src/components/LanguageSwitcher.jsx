import React from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react"; // icon opsional

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "id" ? "en" : "id";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      aria-label={`Switch language to ${i18n.language === "id" ? "English" : "Indonesian"}`}
      className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 dark:border-gray-600 
                 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100 
                 hover:scale-105 hover:shadow-md transition-all duration-300"
    >
      {/* Versi teks (bisa ganti jadi icon bendera atau globe) */}
      <span className="text-sm font-semibold">
        {i18n.language === "id" ? "EN" : "ID"}
      </span>

      {/* Atau pakai ikon Globe (hapus teks di atas kalau pakai ini) */}
      {/* <Globe className="w-5 h-5" /> */}
    </button>
  );
};

export default LanguageSwitcher;
