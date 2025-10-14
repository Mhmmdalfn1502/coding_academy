import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";
import ThemeSwitcher from "../components/ThemeSwitcher";
import AboutUs from "../sections/AboutUs";
import Vision from "../sections/Vision";
import Mission from "../sections/Mission";
import Program from "../sections/Program";

const Home = () => {
    const { t } = useTranslation();
    return (
        <div className="relative bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
            <LanguageSwitcher />
            <ThemeSwitcher />
            <AboutUs />
            <Vision />
            <Mission />
            <Program />
        </div>
    );
};

export default Home;
