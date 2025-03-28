export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      scrollBehavior: {
        smooth: "smooth",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
