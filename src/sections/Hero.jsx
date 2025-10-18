import React from "react";
import { Link } from "react-router-dom";
import IMGHero from "../assets/images/IMGHero.png";

export default function Hero() {
  return (
    <div className="flex xl:flex-row flex-col-reverse w-screen gap-6 items-center relative xl:py-40 py-30 xl:px-[60px] px-[20px]">
      <div className="flex flex-col xl:w-[700px] gap-4">
        {/* Headline */}
        <div className="text-center xl:text-start">
          <span className="xl:text-[54px] text-[28px] text-dark dark:text-white font-bold xl:leading-16 leading-8">
            Shaping <span className="bg-gradient-to-r from-[#1465B7] to-[#1465B7]/30 bg-clip-text text-transparent">Future Tech</span> Leaders with <span className="text-[#FFDA70]">Fun </span>&{" "}
            <span className="text-[#1465B7]">Professional </span>Learning
          </span>
        </div>
        {/* Tagline */}
        <div className="flex xl:flex-row flex-col gap-2 items-center text-center xl:text-start">
          <span className="text-dark dark:text-white xl:text-[16px] text-[12px] tracking-[0.35em]">Learn, Create, and Share</span>
          <div className="w-[40%] h-[1px] bg-[#02C402]"></div>
        </div>
        {/* Subheadline */}
        <div className="flex xl:w-[600px] w-screen text-center xl:text-start">
          <span className="text-dark dark:text-white xl:text-[14px] text-[12px] tracking-[0.25em] italic xl:px-[0px] px-[20px]">
            <b className="text-dark dark:text-white">Coding Academy </b>builds a fun and professional learning ecosystem to prepare the next generation for the digital era.
          </span>
        </div>
        {/* CTA Button */}
        <div className="flex justify-center xl:justify-start w-full">
          <span className=" flex justify-center items-center w-[110px] py-2 bg-gradient-to-r from-[#1465B7] to-[#2392F3] rounded-full shadow-xl font-medium tracking-wide text-[12px] text-white">Let's Join Us</span>
        </div>
      </div>
      <div>
        <img className="xl:w-[600px] w-full" src={IMGHero} alt="" />
      </div>
    </div>
  );
}
