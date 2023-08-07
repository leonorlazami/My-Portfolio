/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': '#171717',
        'custom-blue': '#FFBA08',
      },
    },
    fontFamily: {
      signature: ['Great Vibes'],
    }
  },
  plugins: [],
}

