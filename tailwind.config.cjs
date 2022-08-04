/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      zen : "'Zen Dots', cursive",
      zenMaru : "'Zen Maru Gothic', sans-serif",
      zenLoop : "'Zen Loop', cursive"
      },
      colors: {
          nsgreen : '#00FFC3'
      }
    },
  },
  plugins: [],
}
