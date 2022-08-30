/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aboreto: ["Aboreto"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        stone: "#4c4343",
        beige: "#f3e7e2",
        clay: "#f7f2f2",
        linen: "#fcfaf9",
      },
    },
  },
  plugins: [],
};
