/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondBackgroundColor: "#F5F5FA",
        primaryColor: "#E5252A",
        secondaryColor: "#C5252A",
        textColor: "#FDFFFC",
        miniBlack: "#2A2B2A",
        blackHover: "#706C61",
        yellowColor: "#F2CD5D",
        softPink: "#D7A6B3",
         textGradient:"bg-gradient-to-r from-red-400 to-red-600"
      },
    },
    screens: {
      'sm': '640px',
      
      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',
  },
  },
  plugins: [],
};
