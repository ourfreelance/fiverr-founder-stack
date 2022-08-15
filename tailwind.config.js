/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#0450E0',
        'primary-black': '#242424',
        secondary: '#EAF3FA',
        'light-blue': '#F4FEFF',
        gray: {
          DEFAULT: '#6F6F6F'
        } 
      }
    },
    fontFamily: {
      'inter': 'Inter, sans-serif',
      'quicksand': 'Quicksand, sans-serif'
    }
  },
  plugins: [],
}
