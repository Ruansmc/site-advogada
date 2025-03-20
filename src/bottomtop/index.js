document.addEventListener("DOMContentLoaded", () => {
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        scrollTopBtn.classList.remove("hidden");
      } else {
        scrollTopBtn.classList.add("hidden");
      }
    });

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  } else {
    console.error("Elemento com id 'scrollTopBtn' não foi encontrado.");
  }
});
