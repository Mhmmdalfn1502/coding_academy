import React from "react";
import LogoCodac from "../assets/images/LogoCodac_White.png";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaTiktok } from "react-icons/fa";
import { Link } from "react-scroll";

// import { FaI } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="border-t border-gray-500 w-full px-[20px] py-[20px] overflow-x-hidden">
      <div className="flex xl:flex-row md:flex-row flex-col gap-6 justify-between bg-[#1E1F39] dark:bg-white/10 rounded-2xl p-[40px]">
        <div className="flex flex-col gap-6 xl:w-[500px] text-white">
          <img src={LogoCodac} alt="" className="w-[170px]" />
          <span className="text-[16px] text-white">
            <b>CODAC</b> was founded with a simple belief: learning is better when we share, grow, and succeed as a community
          </span>
        </div>
        <div className="flex flex-col gap-6">
          <span className="font-bold text-white">Pages</span>
          <ul className="flex flex-col gap-4 text-white">
            <li>
              <Link to="home" smooth={true} duration={500}>Home</Link>
            </li>
            <li >
              <Link to="about" smooth={true} duration={500}>About</Link>
            </li>
            <li >
              <Link to="program" smooth={true} duration={500}>Program</Link>
            </li>
            <li >
              <Link to="contact" smooth={true} duration={500}>About</Link>
            </li>
            <li>
              <Link to="faq" smooth={true} duration={500}>FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <span className="font-bold text-white">Legal</span>
          <ul className="flex flex-col gap-4 text-white">
            <li>
              <a href="">Privacy Police</a>
            </li>
            <li>
              <a href="">Terms of Service</a>
            </li>
            <li>
              <a href="">Cookies</a>
            </li>
          </ul>
        </div>
        {/* <div className="flex flex-col gap-6">
                    <div className="flex justify-center items-center bg-white rounded-2xl w-[220px] h-[160px]">
                        <h1 className="text-[#1E1F39] font-bold ">MAPS</h1>
                    </div>
                    <span className="text-white">Location!!</span>
                </div> */}
      </div>
      <div className="flex xl:flex-row flex-col justify-between items-center py-[20px] px-[40px] gap-4">
        <span className="text-[12px] text-center font-medium text-dark dark:text-white">COPYRIGHT © 2025 CODAC. ALL RIGHTS RESERVED.</span>

        <div className="flex flex-row gap-4 text-[#1E1F39] dark:text-white">
          <FaTiktok size={30} className="hover:text-[#010101]" />
          <FaWhatsapp size={30} className="hover:text-[#25D366]" />
          <FaLinkedin size={30} className="hover:text-[#0077B5]" />
          <FaInstagram size={30} className="hover:text-[#E4405F]" />
        </div>
      </div>
    </div>
  );
}
