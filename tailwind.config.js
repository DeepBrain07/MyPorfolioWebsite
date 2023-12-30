/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        'akronim': ['Akronim', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'robotoCondensed': ['Roboto Condensed', 'sans-serif'],
        'slabo' : ['Slabo', 'akronim']
      }
    },
  },
  plugins: [],
}

