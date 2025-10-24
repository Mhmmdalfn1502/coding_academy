import React from "react";
import about1 from "../assets/images/about1.png";
import about2 from "../assets/images/about2.png";
import about3 from "../assets/images/about3.png";
import about4 from "../assets/images/about4.png";
import { Trans, useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <section id="about">
      <div className="relative flex items-center justify-center">
        <div className="container mx-auto lg:px-16 md:px-5 px-5 lg:py-16 md:py-16 py-8 text-center">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark dark:text-white mb-4">
            {t("about.title")}
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-gray dark:text-gray-400 max-w-2xl mx-auto mb-8 md:mb-12">
            {t("about.subtitle")}
          </p>

          <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12">
            {/* Left : Image Grid */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 w-full lg:w-1/3">
              <img
                src={about1}
                alt="About 1"
                className="col-span-2 row-span-1 w-full h-[100px] md:h-[150px] rounded-lg md:rounded-2xl object-cover shadow-md"
              />
              <img
                src={about2}
                alt="About 2"
                className="col-span-1 row-span-1 w-full h-[100px] md:h-[150px] rounded-lg md:rounded-2xl object-cover shadow-md"
              />
              <img
                src={about3}
                alt="About 3"
                className="col-span-1 row-span-1 w-full h-[100px] md:h-[150px] rounded-lg md:rounded-2xl object-cover shadow-md"
              />
              <img
                src={about4}
                alt="About 4"
                className="col-span-2 row-span-1 w-full h-[100px] md:h-[150px] rounded-lg md:rounded-2xl object-cover shadow-md"
              />
            </div>

            {/* Right: Text Content */}
            <div className="text-justify w-full lg:w-2/3">
              <p className="text-sm md:text-base text-dark dark:text-gray-300 leading-relaxed mb-4 indent-8">
                <Trans
                  i18nKey="about.paragraph1"
                  components={{
                    1: <span className="text-primary dark:text-blue-400 font-semibold" />
                  }}
                />
              </p>

              <p className="text-sm md:text-base text-dark dark:text-gray-300 leading-relaxed indent-8">
                <Trans
                  i18nKey="about.paragraph2"
                  components={{
                    1: <span className="text-primary dark:text-blue-400 font-semibold" />
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
