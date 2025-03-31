module.exports = {
  content: [
    "./index.html", // Certifique-se de que o caminho está correto
    "./src/**/*.{html,js}", // Caso você tenha outros arquivos .html ou .js
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          800: "#075985",
          950: "#083344",
        },
      },
    },
  },
  plugins: [],
};
