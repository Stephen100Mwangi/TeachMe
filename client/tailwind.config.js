/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        headColor: '#FF8343',
        success: '#399918',
        card: '#FF8A8A',
        backColor: '#FEFDED',
      },
    },
  },
  plugins: [],
};
