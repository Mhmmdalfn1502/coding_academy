import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";
import ThemeSwitcher from "../components/ThemeSwitcher";
import AboutUs from "../sections/AboutUs";
import Vision from "../sections/Vision";
import Mission from "../sections/Mission";
import Program from "../sections/Program";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Structural from "../sections/Structural";
import Footer from "../components/Footer";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="relative bg-gradient-to-b dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section></section>
      <section id="program"></section>
      <section id="about">
        <Structural />
      </section>
      <AboutUs />
      <Vision />
      <Mission />
      <Program />
      <Footer />
      <LanguageSwitcher />
      <ThemeSwitcher />
    </div>
  );
};

export default Home;
