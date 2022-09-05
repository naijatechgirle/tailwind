/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html'
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '5rem'
      },
      colors: {
        deepBlue: {
          950: '#2B2B42',
        }
      }
    },
  },
  plugins: [],
}
