import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";
import ThemeSwitcher from "../components/ThemeSwitcher";
import AboutUs from "../sections/AboutUs";
import Vision from "../sections/VisionSlide";
import Mission from "../sections/MissionSlide";
import Program from "../sections/Program";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Structural from "../sections/Structural";
import Footer from "../components/Footer";
import Testimonial from "../sections/Testimonial";
import Gallery from "../sections/Gallery";
import ContactUs from "../sections/ContactUs";
import VisionMission from "../sections/VisionMission";
import VisionSlide from "../sections/VisionSlide";
import MissionSlide from "../sections/MissionSlide";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="relative bg-gradient-to-b dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <Hero />
      <AboutUs />
      <VisionMission />
      {/* <Structural /> */}
      <Program />
      <Testimonial />
      <Gallery />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
