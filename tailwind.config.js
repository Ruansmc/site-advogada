// tailwind.config.js
module.exports = {
  // ...
  theme: {
    extend: {
      scrollBehavior: {
        smooth: "smooth",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scroll-smooth": {
          scrollBehavior: "smooth",
        },
        ".scroll-auto": {
          scrollBehavior: "auto",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
