/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Palanquin Dark', 'sans-serif'],
      },
      colors: {
        'uni-graytext': '#7C7C7C',
        'uni-graybox': '#ECECEC',
        'uni-red': '#FF5555',
        'uni-graytext2' : '#ACACAC',
      },
    },
  },
  plugins: [],
}