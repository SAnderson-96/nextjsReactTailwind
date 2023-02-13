/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,tsx,jsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/*.{js,jsx}",
    "./app/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        code: "code"
      },
      visibility: ["group-hover"],
    },
  },
  plugins: [
    require('tailwind-scrollbar')
    ],
};
