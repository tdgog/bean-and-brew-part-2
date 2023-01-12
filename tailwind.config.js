/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'homepage': 'url("./assets/images/coffee-cup-image.jpg")'
      }
    },
  },
  plugins: [],
}