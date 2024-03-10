/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: { fontFamily: { nunitoSans: ["Nunito Sans", "sans-serif", "st"] } },
    colors: { "theme-color": "#f27d2c", "theme-light": "#ffd3bf" },
  },
  plugins: [],
};
