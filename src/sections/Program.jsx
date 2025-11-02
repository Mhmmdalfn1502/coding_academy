import React, { useEffect } from "react";
import program1 from "../assets/images/program1.png";
import program2 from "../assets/images/program2.png";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

const Program = () => {
    const { t } = useTranslation();
    return (
        <section data-aos="fade-up" id="program"
            className="relative flex items-center justify-center py-20 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                <div className="flex lg:flex-row md:flex-col-reverse flex-col items-center gap-12">

                    {/* Left Text Content */}
                    <div className="w-full lg:w-1/2 text-justify">
                        <div className="inline-block bg-white/70 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 rounded-full px-5 py-2 mb-4 shadow-sm">
                            <span className="text-dark dark:text-white font-medium">{t("program.title")}</span>
                        </div>

                        <p className="text-dark dark:text-gray-300 leading-relaxed mb-8">
                            {t("program.subtitle")}
                        </p>

                        {/* <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-md transition-all">
                            {t("program.button")}
                            <ArrowUpRight size={18} />
                        </button> */}
                    </div>

                    {/* Right Image Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2">
                        {/* Card 1 */}
                        <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                            <img
                                src={program1}
                                alt="Web Development Learning"
                                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-80 group-hover:opacity-100 transition-all" />
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-lg font-semibold">{t("program.web_dev_title")}</h3>
                            </div>
                            {/* <div className="absolute bottom-4 right-4 bg-blue-600 p-2 rounded-full">
                                <ArrowUpRight size={18} className="text-white" />
                            </div> */}
                        </div>

                        {/* Card 2 */}
                        <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                            <img
                                src={program2}
                                alt="Web Consultant"
                                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-80 group-hover:opacity-100 transition-all" />
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-lg font-semibold">{t("program.web_consulting_title")}</h3>
                            </div>
                            {/* <div className="absolute bottom-4 right-4 bg-blue-600 p-2 rounded-full">
                                <ArrowUpRight size={18} className="text-white" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Program;
