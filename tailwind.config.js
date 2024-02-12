/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        darkBlue:'#347dc1'
        // ... other default colors
      }
    },
    
  },
  plugins: [],
}
