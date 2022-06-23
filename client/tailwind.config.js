/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{tsx, ts, jsx, js}"],
  theme: {
    extend: {
      colors: {
        pink: "#FF83CE",
        "soft-pink": "#FF8AAF",
        orange: "#FF9D8F",
        "soft-orange": "#FFBA74",
        yellow: "#FFD967",
        "soft-yellow": "#F9F871",
        white: "#FFFFFF",
        black: "#000000",
        "dark-gray": "#0F172A",
        gray: "#34334D",
        "pinky-dark-gray": "#BE91B7",
        "pinky-gray": "#f3B4D7",
      },
    },
  },
  plugins: [],
};
