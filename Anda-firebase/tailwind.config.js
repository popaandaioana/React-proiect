/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'themeOrange-10': '#FF9900',
      'themeOrange-40': '#995c00',
      'themeOrange-70': '#4C2E00',
      'themeBlue-light': '#95A0A7',
      'themeBlue-10': '#2a414f',
      'themeBlue-40': '#1c2b35',
      'themeBlue-70': '#0e161a',
      'themeWhite': '#fff',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}