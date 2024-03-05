// Aguarda o evento de carregamento completo do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona todas as imagens dentro das divs com a classe "cars"
  const cars = document.querySelectorAll(".cars img");
  // Seleciona todas as divs com a classe "info-car"
  const infoCars = document.querySelectorAll(".info-car");

  cars.forEach((car, index) => {
    car.addEventListener("click", function () {
      // Oculta todas as divs com a classe "info-car"
      infoCars.forEach((infoCar) => {
        infoCar.style.display = "none";
      });

      // Adiciona a classe "selected" à imagem clicada
      cars.forEach((car) => {
        car.classList.remove("selected");
        car.style.borderColor = ""; // Restaura a cor da borda para o padrão
      });
      this.classList.add("selected");

      // Exibe a div com a classe "info-car" correspondente ao índice da imagem clicada
      infoCars[index].style.display = "block";

      // Muda o estilo do body com base na imagem selecionada
      document.body.style.backgroundColor = this.dataset.color;

      // Define a cor da borda da imagem selecionada
      this.style.borderColor = this.dataset.color;
    });
  });
});
