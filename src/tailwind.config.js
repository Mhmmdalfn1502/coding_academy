/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",   // 👈 ini WAJIB
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
