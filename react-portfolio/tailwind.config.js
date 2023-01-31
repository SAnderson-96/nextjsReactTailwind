/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        code: "code"
      }
    },
  },
  plugins: [],
};
