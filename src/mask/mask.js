document.addEventListener("DOMContentLoaded", function () {
  const telefoneInput = document.getElementById("telefone");

  // Aplica a máscara customizada no input de telefone
  telefoneInput.addEventListener("input", function () {
    let value = this.value.replace(/\D/g, ""); // Remove tudo que não for número
    if (value.length <= 10) {
      value = value.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    } else {
      value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }
    this.value = value;
  });

  // Validação das teclas pressionadas (permitir apenas números e teclas especiais)
  telefoneInput.addEventListener("keydown", function (event) {
    // Teclas permitidas: números (0-9), parênteses, espaço, hífen, Backspace, Delete, Arrow keys
    const allowedKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "(",
      ")",
      "-",
      " ",
    ];
    if (!allowedKeys.includes(event.key)) {
      event.preventDefault(); // Bloqueia a tecla caso não esteja na lista
    }
  });

  // Validação em tempo real para garantir que o número seja válido
  telefoneInput.addEventListener("input", function () {
    const value = this.value.replace(/\D/g, "");
    const isValid = /^[0-9]{10,11}$/.test(value); // Valida se tem 10 ou 11 dígitos
    this.classList.toggle("border-red-500", !isValid && value.length > 0); // Exibe erro se não for válido
    document
      .getElementById("telefone-error")
      .classList.toggle("hidden", isValid || value.length === 0); // Mostra/oculta mensagem de erro
  });
});
