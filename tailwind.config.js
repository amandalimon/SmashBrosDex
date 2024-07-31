/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      skew: {
        '-10': '-10deg',
        '10': '10deg',
      },
    },
  },
  plugins: [],
}