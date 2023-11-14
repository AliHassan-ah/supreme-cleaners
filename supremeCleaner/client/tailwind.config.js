/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {},
    colors: {
      primary: "#42af1e",
      secondary: "#444444",
      content: "#5c5c5c",
      white: "#fff",
    },
  },
  plugins: [require("preline/plugin"), require("@tailwindcss/forms"),],
};
