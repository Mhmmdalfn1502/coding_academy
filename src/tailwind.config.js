/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // 👈 ini WAJIB
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      colors: {
        "black": "#1E1F39",
        "blue": "#2392F3",
        "green": "#02C402",
      },
    },
  },
  plugins: [],
};
