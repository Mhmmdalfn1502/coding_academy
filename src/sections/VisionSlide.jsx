import React from "react";
import team1 from "../assets/images/team1.png";
import { useTranslation } from "react-i18next";

export default function VisionSlide() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-6 md:gap-10 container mx-auto lg:px-16 md:px-5 px-5 lg:py-16 md:py-16 py-8">
            {/* Text Section */}
            <div className="-full lg:w-2/3 text-justify max-w-[250]">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-dark dark:text-white mb-4">
                    {t("vision_mission.vision_title")}
                </h1>
                <p className="text-sm md:text-base lg:text-lg text-dark dark:text-white leading-relaxed">
                    {t("vision_mission.vision_text")}
                </p>
            </div>

            {/* Image Section */}
            <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 flex justify-center">
                <img
                    src={team1}
                    alt="Team Discussion"
                    className="w-full max-w-[250px] md:max-w-[300px] h-auto object-cover rounded-2xl shadow-lg"
                />
            </div>
        </div>
    );
}