document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target); // Remove a observação após a animação ocorrer
        }
      });
    },
    { threshold: 0.1 } // Define quando o elemento deve ser considerado visível (10% visível já ativa)
  );

  // Seleciona os elementos para aplicar a animação
  document.querySelectorAll(".area, .area-item").forEach((item) => {
    observer.observe(item);
  });
});
