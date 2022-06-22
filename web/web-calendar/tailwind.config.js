/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow': '#FFD369',
        'black': '#212932',
        'gray': '#393D45',
        'white': '#EFEFEF',
        'danger': '#FF5857',
        'warning': '#FDBA18',
        'success': '#48D74D', 
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
