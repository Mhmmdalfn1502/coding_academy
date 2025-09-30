import React from "react";
import useDarkMode from "../hooks/useDarkMode";

const ThemeSwitcher = () => {
    const [isDark, setIsDark] = useDarkMode();

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className="w-10 h-10 flex items-center justify-center 
                 rounded-full bg-gray-200 dark:bg-gray-700 
                 text-yellow-500 dark:text-yellow-300 
                 shadow-md transition-colors duration-300"
        >
            {isDark ? "🌙" : "☀️"}
        </button>
    );
};

export default ThemeSwitcher;

