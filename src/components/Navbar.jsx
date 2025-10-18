import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiSun } from "react-icons/fi";
import { LuMoonStar } from "react-icons/lu";
import { GoChevronDown } from "react-icons/go";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import LogoCodac from "../assets/images/LogoCodac.png";
import "../Style/Navbar.css";
import useDarkMode from "../hooks/useDarkMode";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useDarkMode();

  // Scroll ke section tertentu
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
      setIsDropdownOpen(false);
      setIsMobileMenuOpen(false);
    }
  };

  const handleToggle = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="xl:px-[60px] px-[20px] py-[20px] bg-white/20 dark:bg-dark/20 backdrop-blur-xl fixed w-full top-0 z-50 shadow-sm">
      <div className="flex justify-between items-center">
        {/* LOGO */}
        <Link onClick={() => handleScroll("home")}>
          <img className="w-[120px] h-auto" src={LogoCodac} alt="Logo Codac" />
        </Link>

        {/* HAMBURGER ICON (mobile only) */}
        <button className="md:hidden text-dark dark:text-white text-2xl focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
        </button>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex gap-8 text-[12px] font-medium relative">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About Us" },
            { id: "contact", label: "Contact Us" },
            { id: "program", label: "Program" },
            { id: "faq", label: "FAQ" },
          ].map((item) => (
            <li key={item.id} className="relative flex items-center gap-1">
              {item.id === "program" ? (
                <>
                  {/* Klik teks -> scroll ke section program */}
                  <a onClick={() => handleScroll("program")} className={`uppercase tracking-wide transition-all duration-300 bg-transparent cursor-pointer ${activeSection === "program" ? "text-blue-900 dark:text-white" : "text-dark dark:text-white"}`}>
                    {item.label}
                  </a>

                  {/* Klik icon -> buka dropdown */}
                  <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="cursor-pointer focus:outline-none">
                    <GoChevronDown size={16} color={activeSection === "program" ? "#1E3A8A" : "#1E1F39"} />
                  </button>

                  {/* Garis aktif */}
                  {activeSection === "program" && <span className="absolute -top-2 left-0 w-full h-[3px] bg-blue-900 dark:bg-white rounded-full transition-all duration-300"></span>}

                  {/* Dropdown menu (klik icon panah aja yang munculin) */}
                  {isDropdownOpen && (
                    <ul className="absolute top-[30px] left-0 bg-white/40 dark:bg-dark/40 text-dark dark:text-white backdrop-blur-2xl shadow-lg rounded-md overflow-hidden w-[200px]">
                      <li>
                        <a onClick={() => handleScroll("web-dev")} className="block cursor-pointer w-full text-left px-4 py-2 bg-transparent">
                          Web Development Learning
                        </a>
                      </li>
                      <li>
                        <a onClick={() => handleScroll("web-consult")} className="block cursor-pointer w-full text-left px-4 py-2 bg-transparent">
                          Web Consultant
                        </a>
                      </li>
                    </ul>
                  )}
                </>
              ) : (
                <>
                  <a onClick={() => handleScroll(item.id)} className={`uppercase tracking-wide transition-all duration-300 bg-transparent cursor-pointer ${activeSection === item.id ? "text-blue-900 dark:text-white" : "text-dark"}`}>
                    {item.label}
                  </a>
                  {activeSection === item.id && <span className="absolute -top-2 left-0 w-full h-[3px] bg-blue-900 rounded-full transition-all duration-300"></span>}
                </>
              )}
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex flex-row items-center gap-4">
          {/* EN Button */}
          <div className="hidden md:flex justify-center items-center w-[40px] h-[40px] shadow-xl rounded-full border-blue-800 border-1">
            <span className="text-dark text-[12px] font-medium">EN</span>
          </div>

          {/* DARK/LIGHT TOGGLE */}
          <div
            onClick={handleToggle}
            className={`relative flex justify-between items-center w-[72px] h-[40px] 
              border-blue-800 border-1 rounded-full px-[4px] inner_shadow cursor-pointer 
              transition-all duration-1200 ease-in-out 
              ${darkMode ? "bg-[#1E1F39]" : "bg-transparent"}`}
          >
            <div className="flex justify-center items-center w-[32px] h-[32px] bg-transparent rounded-full z-20">
              <FiSun size={20} color="#1E1F39" className={`transition-all duration-300 ${darkMode ? "opacity-0" : "opacity-100"}`} />
            </div>

            <div className="flex justify-center items-center w-[32px] h-[32px] bg-transparent rounded-full z-20">
              <LuMoonStar size={20} color="white" className={`transition-all duration-300 ${darkMode ? "opacity-100" : "opacity-0"}`} />
            </div>

            <div
              className={`absolute top-[4px] w-[32px] h-[32px] rounded-full 
                transition-all duration-500 ease-in-out shadow-inner z-10
                ${darkMode ? "left-[4px] bg-gradient-to-br from-white to-gray-200" : "left-[36px] bg-gradient-to-br from-blue-900 to-blue-950"}`}
            ></div>
          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-white/40 dark:bg-dark/40 backdrop-blur-xl rounded-xl p-4">
          <ul className="flex flex-col gap-3 text-sm font-medium text-white dark:text-white">
            <li>
              <a onClick={() => handleScroll("home")} className="block py-1 cursor-pointer">
                Home
              </a>
            </li>
            <li>
              <a onClick={() => handleScroll("about")} className="block py-1 cursor-pointer">
                About Us
              </a>
            </li>
            <li>
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex justify-between items-center w-full py-1">
                <span>Program</span>
                <GoChevronDown size={16} />
              </button>
              {isDropdownOpen && (
                <ul className="ml-4 mt-2 bg-white/70 dark:bg-dark/20 backdrop-blur-md rounded-lg">
                  <li>
                    <a onClick={() => handleScroll("web-dev")} className="block px-3 py-2 text-sm hover:bg-blue-50 rounded-md">
                      Web Development Learning
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleScroll("web-consult")} className="block px-3 py-2 text-sm hover:bg-blue-50 rounded-md">
                      Web Consultant
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a onClick={() => handleScroll("contact")} className="block py-1 cursor-pointer">
                Contact Us
              </a>
            </li>
            <li>
              <a onClick={() => handleScroll("faq")} className="block py-1 cursor-pointer">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
