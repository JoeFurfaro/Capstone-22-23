/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mac-maroon": "#86113E",
        "mac-maroon-darker": "#700d33",
        "mac-purple": "#861165",
        "mac-purple-darker": "#6e0c52",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      width: {
        '1000': '1000px',
      }
    },
  },
  plugins: [],
}
