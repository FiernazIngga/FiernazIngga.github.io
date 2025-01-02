// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",          // Pastikan file HTML Anda tercakup
    "./css/**/*.css",        // Menambahkan file CSS yang menggunakan Tailwind
  ],
  theme: {
    extend: {
      colors: {
        background: '#effeeb',
        paragraph: '#045103',
        headline: '#094067',
        buttonText: '#fffffe',
        button: '#3da9fc',
        stroke: '#094067',
        main: '#fffffe',
        highlight: '#3da9fc',
        secondary: '#90b4ce',
        tertiary: '#ef4565'
      },
      height: {
        'custom-small': '53.5rem'
      },
      width: {
        'custom-small': '30rem',
        'custom-medium': '50%',
      }
    },
  },
  plugins: [],
}
