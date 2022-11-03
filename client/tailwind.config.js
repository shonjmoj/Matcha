/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}",
  "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
      extend: {
        colors : {
            main : "#FF71BD"
        }
    },
  },
  plugins: [],
}
