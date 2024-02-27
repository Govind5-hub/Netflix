/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Arial', 'Helvetica', 'sans-serif'],
      'serif': ['Georgia', 'serif'],
      'mono': ['Courier', 'monospace'],
      // Add your custom font families here
      'custom': ['Custom Font', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}