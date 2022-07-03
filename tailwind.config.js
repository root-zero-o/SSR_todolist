/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      "mobile" : {"min" : "320px", "max" : "480px"},
      "tablet" : {"min" : "768px", "max" : "1024px"},
      "desktop" : {"min" : "1024px"}
    },
    colors: {
      ivory: "#FCF8E8",
      green: "#94B49F",
      orange: "#ECB390",
      red: "#DF7861",
      white: "#FFFFFF",
      black:"#000000",
      dark:"#413F42",
      grey: "#7F8487"
    },
    extend: {},
  },
  plugins: [],
};