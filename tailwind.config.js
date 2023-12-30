/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      'xs': '300px',
      'xs2': '355px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
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

