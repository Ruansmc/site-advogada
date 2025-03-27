document.addEventListener("DOMContentLoaded", function () {
  const telefoneInput = document.getElementById("telefone");

  // Aplica a máscara customizada
  telefoneInput.addEventListener("input", function () {
    let value = this.value.replace(/\D/g, ""); // Remove tudo que não for número
    if (value.length <= 10) {
      value = value.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    } else {
      value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }
    this.value = value;
  });

  // Validação em tempo real
  telefoneInput.addEventListener("input", function () {
    const value = this.value.replace(/\D/g, "");
    const isValid = /^[0-9]{10,11}$/.test(value);
    this.classList.toggle("border-red-500", !isValid && value.length > 0);
    document
      .getElementById("telefone-error")
      .classList.toggle("hidden", isValid || value.length === 0);
  });
});
