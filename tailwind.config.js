/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kumbh Sans", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage:{
        'hero-image': 'url("./assets/images/header.jpg")',
        'image-bookform': 'url("./assets/images/image-bookform.jpg")',
      },
    },
  },
  plugins: [],
}
