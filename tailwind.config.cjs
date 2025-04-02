/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"], // Arquivos monitorados
  darkMode: "class", // Ativar dark mode com a classe 'dark'
  theme: {
    extend: {
      scrollBehavior: ["smooth"], // Corrigindo a sintaxe
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Plugin para estilização de formulários
    require("autoprefixer"), // Adiciona prefixos para compatibilidade com navegadores
  ],
};
