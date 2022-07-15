/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grisaceo-500': '#547071',
        'grisaceo-400': '#688391',
        'grisaceo-300': '#87a1ab',
        'grisaceo-200': '#a7bcf7',
        'grisaceo-100': '#c8dfe2'
      }
    },
  },
  plugins: [],
}
