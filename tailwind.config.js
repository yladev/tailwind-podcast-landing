/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    backgroundImage: {
      'cta-img': "url(./images/mic.png)",
    },
    extend: {
      colors: {
        primary: "#ED7F39"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}

