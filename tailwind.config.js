/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      xl: "1440px",
    },
    colors: {
      "dark-cyan": "hsl(158, 36%, 37%)",
      "dark-cyan-active": "#2a5340",
      cream: "hsl(30, 38%, 92%)",
      "dark-blue": "hsl(212, 21%, 14%)",
      "grayish-blue": "hsl(228, 12%, 48%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      montserrat: "Montserrat",
      fraunces: "Fraunces",
    },
    extend: {},
  },
  plugins: [],
};
