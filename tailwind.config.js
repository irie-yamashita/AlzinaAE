/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#183753',
        secondary: '#e6c707',
        background: '#FEFCF0',
        greyAE: '#f6f4ea'
      },
      fontFamily: {
        catallina: ['Catallina', 'sans-serif'],
        notosans: ['NotoSans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}