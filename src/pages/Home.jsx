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
        <div className="relative bg-gradient-to-b dark:from-gray-900 dark:to-gray-800">
            <LanguageSwitcher />
            <div className="size-[80vw] rounded-full bg-radial absolute opacity-50 from-primary from-5% via-white to-white to-30% translate-x-1/2 mask-radial-at-right mask-radial-from-100%"></div>
            <ThemeSwitcher />
            <AboutUs />
            <Vision />
            <Mission />
            <Program />
        </div>
    );
};

export default Home;
