import React from "react";
import { Link } from "react-router-dom";
import IMGHero from "../assets/images/IMGHero.png";

export default function Hero() {
  return (
    <section id="home" className="mt-20">
      <div className="container mx-auto flex lg:flex-row flex-col-reverse lg:gap-6 md:gap-12 gap-6 justify-center items-center relative lg:px-16 md:px-5 px-5 lg:py-24 md:py-16 py-8">
        <div className="flex flex-col lg:w-1/2 gap-4">
          {/* Headline */}
          <div className="text-center lg:text-start">
            <h1 className="lg:text-4xl md:text-3xl text-2xl text-dark dark:text-white font-bold leading-tight">
              Shaping <span className="bg-gradient-to-r from-primary to-primary/30 bg-clip-text text-transparent">Future Tech</span> Leaders with <span className="text-accent">Fun </span>&{" "}
              <span className="text-primary">Professional </span>Learning
            </h1>
          </div>
          {/* Tagline */}
          <div className="flex lg:flex-row flex-col gap-2 items-center text-center lg:text-start">
            <span className="text-dark dark:text-white text-sm md:text-base tracking-wider">Learn, Create, and Share</span>
            <div className="w-[40%] h-[1px] bg-success"></div>
          </div>
          {/* Subheadline */}
          <div className="text-center lg:text-start">
            <p className="text-dark dark:text-white text-sm md:text-base tracking-wide italic px-4 lg:px-0">
              <b className="text-dark dark:text-white">Coding Academy </b>builds a fun and professional learning ecosystem to prepare the next generation for the digital era.
            </p>
          </div>
          {/* CTA Button */}
          <div className="flex justify-center lg:justify-start">
            <button className="px-6 py-2 bg-gradient-to-r from-primary to-primary/30 rounded-full shadow-xl font-medium text-sm text-white hover:opacity-90 transition-opacity">
              Let's Join Us
            </button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            className="w-full h-auto max-w-[500px] mx-auto object-contain"
            src={IMGHero}
            alt="Hero"
          />
        </div>
      </div>
    </section>
  );
}
