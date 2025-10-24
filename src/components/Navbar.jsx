import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSun } from "react-icons/fi";
import { LuMoonStar } from "react-icons/lu";
import { GoChevronDown } from "react-icons/go";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import LightCodac from "../assets/LightCodac.png";
import DarkCodac from "../assets/DarkCodac.png";
import useDarkMode from "../hooks/useDarkMode";
import { useTranslation } from "react-i18next";
import "../Style/Navbar.css";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  // Disable body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  // Close dropdown when resize window
  useEffect(() => {
    const handleResize = () => setIsDropdownOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Detect dark mode changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Scroll to specific section
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
      setIsDropdownOpen(false);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed w-full px-5 xl:px-16 py-5 top-0 left-0 z-50 bg-white/50 dark:bg-dark/50 backdrop-blur-xl shadow-sm">
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto">

        {/* LOGO */}
        <Link onClick={() => handleScroll("home")}>
          <img className="w-32 h-auto" src={isDark ? DarkCodac : LightCodac} alt="Logo Codac" />
        </Link>

        {/* HAMBURGER ICON (mobile only) */}
        <button
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          className="md:hidden text-dark dark:text-white text-2xl focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
        </button>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex lg:gap-8 md:gap-4 text-sm font-medium relative">
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
                  <a onClick={() => handleScroll("program")} className={`uppercase tracking-wide transition-all duration-300 bg-transparent cursor-pointer ${activeSection === "program" ? "text-dark dark:text-white" : "text-dark dark:text-white"}`}>
                    {item.label}
                  </a>

                  {/* Klik icon -> buka dropdown */}
                  <button aria-label="Toggle program submenu" aria-expanded={isDropdownOpen} aria-controls="program-submenu" onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="cursor-pointer focus:outline-none">
                    <GoChevronDown size={16} color={activeSection === "program" ? "bg-dark dark:bg-dark" : "bg-white dark:bg-dark"} />
                  </button>

                  {/* Garis aktif */}
                  {activeSection === "program" && <span className="absolute -top-2 left-0 w-full h-[3px] bg-primary dark:bg-white rounded-full transition-all duration-300"></span>}

                  {/* Dropdown menu (klik icon panah aja yang munculin) */}
                  {isDropdownOpen && (
                    <ul id="program-submenu" className="absolute top-8 left-0 bg-white/40 dark:bg-dark/40 text-dark dark:text-white backdrop-blur-2xl shadow-lg rounded-md overflow-hidden w-[200px]">
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
                  <a onClick={() => handleScroll(item.id)} className={`uppercase tracking-wide transition-all duration-300 bg-transparent cursor-pointer ${activeSection === item.id ? "text-primary dark:text-white" : "text-dark dark:text-white"}`}>
                    {item.label}
                  </a>
                  {activeSection === item.id && <span className="absolute -top-2 left-0 w-full h-[3px] bg-primary rounded-full transition-all duration-300"></span>}
                </>
              )}
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex flex-row items-center gap-4">
          {/* Language Switcher Button */}
          <LanguageSwitcher />

          {/* DARK/LIGHT TOGGLE */}
          <ThemeSwitcher />
        </div>
      </div>

      {/* MENU MOBILE */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className={`md:hidden mt-4 bg-white/40 dark:bg-dark/40 backdrop-blur-xl rounded-xl p-4 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}>
          <ul className="flex flex-col gap-3 text-sm font-medium text-dark dark:text-white">
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
              <button aria-label="Toggle program submenu"
                aria-expanded={isDropdownOpen}
                aria-controls="program-submenu"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex justify-between items-center w-full py-1">
                <span>Program</span>
                <GoChevronDown size={16} />
              </button>
              {isDropdownOpen && (
                <ul id="program-submenu" className="ml-4 mt-2 bg-white/70 dark:bg-dark/20 backdrop-blur-md rounded-lg">
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
