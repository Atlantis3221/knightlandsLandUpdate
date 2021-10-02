const filters = require("tailwindcss-filters");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        mobile: "375px",
        "8xl": "1440px",
      },
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
