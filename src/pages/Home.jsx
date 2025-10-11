import React from "react";
import AboutUs from "../sections/AboutUs";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();
    return (
        <div className="relative bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
            <AboutUs />
        </div>
    );
};

export default Home;
