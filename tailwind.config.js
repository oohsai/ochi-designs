/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        founders: ["test-founders-grotesk-x-condensed-regular", "sans-serif"],
        neuemontreal: ["NeueMontreal-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
