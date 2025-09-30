import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === "id" ? "en" : "id";
        i18n.changeLanguage(newLang);
        localStorage.setItem("lang", newLang);
    };

    return (
        <label className="relative inline-flex items-center cursor-pointer select-none">
            <input
                type="checkbox"
                className="sr-only peer"
                checked={i18n.language === "en"}
                onChange={toggleLanguage}
            />

            {/* Background */}
            <div className="w-20 h-10 bg-white border border-gray-400 rounded-full flex items-center justify-between px-3.5 text-s font-bold text-gray-700">
                <span>ID</span>
                <span>EN</span>
            </div>

            {/* Knob */}
            <span className="absolute top-1 left-1 w-8 h-8 bg-blue-500 rounded-full shadow-md transition-transform peer-checked:translate-x-10"></span>
        </label>
    );
};

export default LanguageSwitcher;
