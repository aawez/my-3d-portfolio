/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        navbar: "#000000",
        experiencetext: '#141414',
        about: "#FF920B",
        worksbg: "#FF920B",
        works: "#0A0A0A",
        primary: "#0a0a0a",
        secondary: "#bcbcbc",
        tertiary: "#ff7b00",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 10px 20px -5px rgba(73, 38, 11, 0.5)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};