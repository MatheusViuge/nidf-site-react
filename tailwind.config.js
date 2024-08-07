/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/**/*.{html,js}', 'index.html'],
  theme: {
    extend: {
      colors:{
        'next-prev-color': 'rgba(0,0,0,0.8)',
      },
    },
    screen: {
      'desktop': '1280px'
      // => @media (min-width: 1280px) { ... }
    }
  },
  plugins: [],
}

