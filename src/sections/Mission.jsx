import React from "react";
import team1 from "../assets/images/team1.png";
import team2 from "../assets/images/team2.png";
import { Trans, useTranslation } from "react-i18next";

const Mission = () => {
    const { t } = useTranslation();
    const missions = t("vision_mission.mission_list", { returnObjects: true });
    return (
        <section id="mission" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12">

                    {/* Left: Text Content */}
                    <div className="text-justify w-full lg:w-2/3 ">
                        <h1 className="text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4">
                            {t("vision_mission.mission_title")}
                        </h1>
                        <ol className="space-y-3 list-decimal list-inside text-dark dark:text-gray-300 leading-relaxed">
                            {missions.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ol>
                    </div>

                    {/* Right: Image Grid */}
                    <div className="relative flex items-center w-full lg:w-1/3 ">
                        <div className="relative flex justify-center">
                            {/* Gambar kiri */}
                            <img
                                src={team1}
                                alt="Team Discussion"
                                className="w-full h-36 object-cover rounded-2xl shadow-lg z-10 mb-24 bg-blue-500"
                            />

                            {/* Gambar kanan (sedikit overlap) */}
                            <img
                                src={team2}
                                alt="Meeting"
                                className="w-full h-36 object-cover rounded-2xl shadow-lg absolute translate-x-32 translate-y-24"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
