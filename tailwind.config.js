/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        homepage: 'url("./assets/images/coffee-cup-image.jpg")',
        logo: 'url("./assets/images/beanandbrewlogo.png")',
        wavy: 'url("./assets/images/wavybg.png")',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        'title': ['Cinzel', 'serif'],
        'subtitle': ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}