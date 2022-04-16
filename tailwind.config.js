const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      basePara: "15px",
      ...defaultTheme.fontSize,
    },
    fontFamily: {
      baseFont: ["Overpass", "sans-serif"],
    },
    screens: {
      mobile: "375px",
      ...defaultTheme.screens,
      desktop: "1440px",
    },
    extend: {
      colors: {
        primaryOrange: "hsl(25, 97%, 53%)",
        neutralWhite: "hsl(0, 0%, 100%)",
        neutralLightGrey: "hsl(217, 12%, 63%)",
        neutralMediumGrey: "hsl(216, 12%, 54%)",
        neutralDarkBlue: "hsl(213, 19%, 18%)",
        neutralVeryDarkBlue: "hsl(216, 12%, 8%)",
      },
    },
  },
  plugins: [],
};
