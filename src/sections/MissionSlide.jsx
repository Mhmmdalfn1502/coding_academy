import React from "react";
import team2 from "../assets/images/team2.png";
import { useTranslation } from "react-i18next";

export default function MissionSlide() {
    const { t } = useTranslation();
    const missions = t("vision_mission.mission_list", { returnObjects: true });

    return (
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-6 md:gap-10 container mx-auto lg:px-16 md:px-5 px-5 lg:py-16 md:py-16 py-8">
            {/* Text Section */}
            <div className="w-full lg:w-2/3 text-justify max-w-[250]">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-dark dark:text-white mb-4">
                    {t("vision_mission.mission_title")}
                </h1>
                <ol className="list-decimal list-inside space-y-2 text-sm md:text-base lg:text-lg text-dark dark:text-gray-300 leading-relaxed">
                    {missions.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>
            </div>

            {/* Image Section */}
            <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 flex justify-center">
                <img
                    src={team2}
                    alt="Meeting"
                    className="w-full max-w-[250px] md:max-w-[300px] h-auto object-cover rounded-2xl shadow-lg"
                />
            </div>
        </div>

    );
}
