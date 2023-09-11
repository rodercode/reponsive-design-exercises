/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    sm: "640px",

    md: "768px",

    lg: "1024px",

    xl: "1280px",

    "2xl": "1536px",

    extend: {
      colors: {
        // PRIMARY
        "primary-color": "#e64980",
        "primary-shade-color": "#CF4273",
        "primary-tint-color": "#E95B8D",

        // GRAY
        "gray-color": "#343a40",
        "gray-shade-color": "#2F343A",
        "gray-tint-color": "#5D6166",
      },
    },
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
