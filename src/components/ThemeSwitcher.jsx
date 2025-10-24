import React from "react";
import { FiSun } from "react-icons/fi";
import { LuMoonStar } from "react-icons/lu";
import useDarkMode from "../hooks/useDarkMode";
import "../Style/Navbar.css";


const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  const handleToggle = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={darkMode}
      onClick={handleToggle}
      className={`relative flex justify-between items-center w-[72px] h-[40px] 
                  border-blue-800 border rounded-full px-[4px] inner_shadow cursor-pointer 
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
                    ${darkMode ? "left-[4px] bg-gradient-to-br from-white to-gray-200" : "left-[36px] bg-gradient-to-br from-primary to-blue-950"}`}
      ></div>
    </button>
  );
};

export default ThemeSwitcher;
