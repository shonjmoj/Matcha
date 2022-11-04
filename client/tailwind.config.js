/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}",
  "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
      extend: {
        colors : {
            primary : "#FF578E",
            secondary : "#B30051",
            outlined : "#FFF3F8"
        }
    },
  },
  plugins: [],
}
