/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-cyan': '#DC2F02',
        'custom-blue': '#FFBA08',
      },
    },
    fontFamily: {
      signature: ['Great Vibes'],
    }
  },
  plugins: [],
}

