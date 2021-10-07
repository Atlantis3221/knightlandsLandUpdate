const filters = require("tailwindcss-filters");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        mobile: "375px",
        "8xl": "1440px",
      },
      zIndex: {
        1: '1'
      }
    },
    screens: {
      ...defaultTheme.screens,
      xxl: "1440px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [filters],
};
