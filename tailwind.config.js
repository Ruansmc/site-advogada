// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adicionei html para cobrir todos os templates
  ],
  darkMode: "class", // Habilita o modo escuro via classe (para seu dark variant)
  theme: {
    extend: {
      // Sua extensão de tema está correta
      scrollBehavior: {
        smooth: "smooth",
      },
    },
  },
  plugins: [
    // Seu plugin de utilitários personalizados está correto
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
    // Adicionei o plugin de forms para melhor estilização de inputs
    require("@tailwindcss/forms"),
  ],
};
