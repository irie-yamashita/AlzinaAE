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
        light: '#f6f4ea'
      },
      fontFamily: {
        catallina: ['Catallina', 'sans-serif'],
        notosans: ['NotoSans', 'sans-serif'],
      },
      fontSize: {
        'heading-desktop-1': '50px;',
        'heading-desktop-2': '35px;',
        'heading-mobile-2': '30px;',
        'heading-desktop-3': '25px',
        'heading-desktop-4': '20px',
        'body-desktop': '16px',
        'small-desktop': '14px'
      },
    },
  },
  plugins: [],
}