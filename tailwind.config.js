/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      color: {
        ...colors,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

// "./pages/**/*.{js,ts,jsx,tsx}",
// "./components/**/*.{js,ts,jsx,tsx}"