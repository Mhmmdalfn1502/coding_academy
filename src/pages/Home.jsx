import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Structural from "../sections/Structural";
import Footer from "../components/Footer";

export default function Home() {
  const { t } = useTranslation();
  return (
    <body className="bg-white dark:bg-dark relative">
      {/* <img src="BG" alt="" /> */}
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section></section>
      <section id="program"></section>
      <section id="about">
        <Structural />
      </section>
      <section id="contact"></section>
      <section id="faq"></section>
      <Footer />
    </body>
  );
}
