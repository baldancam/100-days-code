// Declaração de variáveis e atribuição de valores iniciais

let slideIndex = 0; // Índice do slide atual

const slides = document.querySelectorAll(".mySlides"); // Seleciona todos os elementos com a classe 'mySlides' (as imagens)

let intervalId; // Variável para armazenar o intervalo do slideshow

let isPaused = false; // Variável para controlar o estado de pausa do slideshow

// Função para exibir os slides
function showSlides() {
  // Oculta todos os slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Atualiza o índice do slide e verifica se chegou ao final
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1; // Retorna ao primeiro slide
  }

  // Exibe o slide atual
  slides[slideIndex - 1].style.display = "block";

  // Inicia um novo intervalo para exibir o próximo slide, se não estiver pausado
  if (!isPaused) {
    intervalId = setTimeout(showSlides, 3000); // Muda a imagem a cada 3 segundos se não estiver pausado
  }
}

// Inicia a exibição dos slides
showSlides();

// Função para alternar entre pausar e reproduzir o slideshow
function toggleSlides() {
  isPaused = !isPaused; // Alterna o estado de pausa

  // Obtém o botão de pausa/play pelo ID
  const pauseButton = document.getElementById("pauseButton");

  // Altera o texto do botão para Pausar ou Play, dependendo do estado de pausa
  if (isPaused) {
    clearTimeout(intervalId); // Pausa o slideshow
    pauseButton.innerText = "Play"; // Altera o texto do botão para Play
  } else {
    showSlides(); // Reinicia o slideshow se estava pausado
    pauseButton.innerText = "Pause"; // Altera o texto do botão para Pausar
  }
}

// Função para navegar manualmente pelos slides (avançar ou retroceder)
function plusSlides(n) {
  clearTimeout(intervalId); // Pausa o slideshow durante a navegação manual
  showSlide((slideIndex += n)); // Exibe o slide seguinte ou anterior
}

// Função para exibir um slide específico
function showSlide(n) {
  // Verifica se o índice está dentro dos limites dos slides
  if (n > slides.length) {
    slideIndex = 1; // Retorna ao primeiro slide
  } else if (n < 1) {
    slideIndex = slides.length; // Vai para o último slide
  } else {
    slideIndex = n; // Define o índice do slide conforme a navegação manual
  }

  // Oculta todos os slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Exibe o slide escolhido
  slides[slideIndex - 1].style.display = "block";
}
