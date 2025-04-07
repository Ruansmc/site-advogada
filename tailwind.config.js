module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}", // Mantém os arquivos dentro de src/
    "./dist/**/*.html", // Inclui os arquivos gerados no build
    "./components/**/*.{html,js}", // Caso tenha uma pasta de componentes
  ],
  safelist: ["hidden", "border-red-500", "fade-in", "text-xl", "container"],
  theme: {
    extend: {
      colors: {
        cyan: {
          800: "#075985",
          950: "#083344",
        },
        green: {
          800: "#00693C",
          600: "#03B166",
        },
      },
    },
  },
  plugins: [],
};
