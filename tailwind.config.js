/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['IBM Plex Sans Thai', 'Inter', 'system-ui', 'sans-serif'],
        'heading': ['Inter', 'IBM Plex Sans Thai', 'system-ui', 'sans-serif'],
      },
      colors: {
        'kb-orange': '#F97316',
        'kb-orange-dark': '#EA580C',
        'kb-dark': '#1F2937',
        'kb-gray': '#6B7280',
        'kb-light': '#F9FAFB',
      },
    },
  },
  plugins: [],
}
