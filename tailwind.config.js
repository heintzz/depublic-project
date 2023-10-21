/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      "m-sm": "400px",
      "m-md": "430px",
      "m-lg": "450px",
    },
  },
  plugins: [],
};
