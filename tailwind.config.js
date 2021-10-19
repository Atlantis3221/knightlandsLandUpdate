const filters = require("tailwindcss-filters");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    options: {
      safelist: {
        standard: [
          /^[\w:]*col-start-/,
          /^[\w:]*row-start-/
        ]
      }
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        mobile: "375px",
        "8xl": "1440px",
      },
      zIndex: {
        1: '1'
      },
      keyframes: {
        levitate: {
          '0%': {
            transform: 'translate3d(0, 0, 0)'
          },
          '100%': {
            transform: 'translate3d(0, 5px, 0)'
          },
        }
      },
      animation: {
        levitate: 'levitate 1s linear alternate infinite',
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
