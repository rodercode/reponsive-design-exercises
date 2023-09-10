/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-color": "#868e96",
        "secondary-color": "#004E71",
        "gray-color": "#495057",
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
