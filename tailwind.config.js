module.exports = {
  content: ["./src/**/*.{jsx,js,ts,tsx}", "./public/index.html"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      "light-grey": "#fafafa",
      grey: "#f1f1f1",
      "dark-grey": "#999",
      "light-dark": "#101010",
      vanilla: "#fbaf85",
      "light-beige": "#d87d4a",
    },
    letterSpacing: {
      wide: "1rem",
      medium: "0.2rem",
    },
    extend: {
      height: {
        20: "20vh",
        40: "40vh",
        80: "80vh",
        50: "50vh",
        70: "70vh",
      },
      translate: {
        500: "-50%",
      },
    },
  },
  plugins: [],
};
