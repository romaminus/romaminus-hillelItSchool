// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {}, // можна розширювати тему Tailwind (кольори, шрифти, відступи тощо)
  },
  plugins: [
    require('@tailwindcss/forms'),
  ], //  додавання плагінів Tailwind CSS
}