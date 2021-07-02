const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#f1f8f6",
          200: "#d4e9e2",
          300: "#008248",
          400: "#1e3932",
        },
        secondary: "#f3f1e7",
        gray: colors.gray,
        white: colors.white,
        black: colors.black,
      },
      fontFamily: {
        default: "'Helvetica Neue', Helvetica, Arial, 'sans-serif'",
      },
      backgroundImage: (theme) => ({
        "star-pattern-small":
          "url('https://www.starbucks.com/weblx/images/rewards/hero/hero-mobile_2021.jpg')",
        "star-pattern-big":
          "url('https://www.starbucks.com/weblx/images/rewards/hero/xl-hero-desktop_2021.png')",
      }),
      minHeight: {
        small: "78vh",
        bgSmall: "50%",
        imgS: "56px",
      },
      width: {
        bgSmall: "50%",
        verySm: "2px",
      },
      maxWidth: {
        small: "50px",
        medium: "110px",
      },
      screens: {
        smMd: "375px",
        mdLg: "782px",
        full: "1025px",
      },
      backgroundPosition: {
        half: "50%",
      },
      backgroundSize: {
        full: "100%",
      },
      spacing: {
        18: "4.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
