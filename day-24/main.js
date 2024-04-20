// Este evento garante que o código JavaScript só será executado após o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona todos os botões com a classe .button-extended e todas as divs com a classe .resolution
  const buttons = document.querySelectorAll(".button-extended");
  const resolutions = document.querySelectorAll(".resolution");

  // Itera sobre cada botão
  buttons.forEach((button, index) => {
    // Adiciona um event listener para o evento de clique em cada botão
    button.addEventListener("click", function () {
      // Obtém a resolução correspondente ao botão clicado
      const resolution = resolutions[index];
      
      // Verifica se a resolução está expandida ou não com base no atributo aria-expanded
      const isExpanded = button.getAttribute("aria-expanded") === "true";

      // Se a resolução estiver expandida, oculta-a e marca o botão como não expandido
      if (isExpanded) {
        resolution.style.display = "none"; // Oculta a resolução
        button.setAttribute("aria-expanded", "false"); // Marca o botão como não expandido
      } else { // Se a resolução não estiver expandida, exibe-a e marca o botão como expandido
        resolution.style.display = "block"; // Exibe a resolução
        button.setAttribute("aria-expanded", "true"); // Marca o botão como expandido
      }

      // Obtém a seta dentro do botão
      const arrow = button.querySelector(".arrow");

      // Alterna a classe .arrow-down na seta para mudar sua direção
      arrow.classList.toggle("arrow-down");
    });
  });
});
