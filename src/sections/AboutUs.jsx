import React from "react";
import about1 from "../assets/images/about1.png";
import about2 from "../assets/images/about2.png";
import about3 from "../assets/images/about3.png";
import about4 from "../assets/images/about4.png";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { Trans, useTranslation } from "react-i18next";

const AboutUs = () => {
    const { t } = useTranslation();
    return (
        <section
            id="about"
            className="relative py-10">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
                <LanguageSwitcher />
                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4 font-montserrat">
                    {t("about.title")}
                </h1>

                {/* Subtitle */}
                <p className="text-gray dark:text-gray-400 max-w-2xl mx-auto mb-12">
                    {t("about.subtitle")}
                </p>

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left : Image Grid */}
                    <div className="grid grid-cols-3 gap-4 w-full lg:w-1/3">
                        <img
                            src={about1}
                            alt="About 1"
                            className="col-span-2 row-span-1 w-full h-full rounded-2xl object-cover shadow-md"
                        />
                        <img
                            src={about2}
                            alt="About 2"
                            className="col-span-1 row-span-1 w-full h-full rounded-2xl object-cover shadow-md"
                        />
                        <img
                            src={about3}
                            alt="About 3"
                            className="col-span-1 row-span-1 w-full h-full rounded-2xl object-cover shadow-md"
                        />
                        <img
                            src={about4}
                            alt="About 4"
                            className="col-span-2 row-span-1 w-full h-full rounded-2xl object-cover shadow-md"
                        />
                    </div>

                    {/* Right: Text Content */}
                    <div className="text-justify w-full lg:w-2/3">
                        <p className="text-dark dark:text-gray-300 leading-relaxed mb-4 indent-8">
                            <Trans
                                i18nKey="about.paragraph1"
                                components={{
                                    1: <span className="text-primary dark:text-blue-400 font-semibold" />
                                }}
                            />
                        </p>

                        <p className="text-dark dark:text-gray-300 leading-relaxed indent-8">
                            <Trans
                                i18nKey="about.paragraph2"
                                components={{
                                    1: <span className="font-semibold text-primary dark:text-blue-400" />
                                }}
                            />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
