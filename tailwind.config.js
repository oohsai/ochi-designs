/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        founders: ["FoundersGrotesk-Semibold", "sans-serif"],
        neuemontreal: ["NeueMontreal-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
