/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    animation: {
      slideShow: 'slideShow 9s infinite',
    },
    keyframes: {
      slideShow: {
        '0%, 33.33%': { opacity: 1 },
        '33.34%, 100%': { opacity: 0 },
      },
    },
  },
},
  plugins: [],
}
