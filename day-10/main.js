document.addEventListener("DOMContentLoaded", function () {
  const display = document.querySelector(".display"); // Seleciona o display

  // Função para adicionar o valor do botão ao display
  function adicionarValorAoDisplay(valor) {
    display.value += valor;
  }

  // Adiciona um event listener para cada botão numérico
  const botoesNumericos = document.querySelectorAll(".bt-num");
  botoesNumericos.forEach(function (botao) {
    botao.addEventListener("click", function () {
      adicionarValorAoDisplay(botao.textContent);
    });
  });

  // Função para limpar o display
  function limparDisplay() {
    display.value = "";
  }

  // Adiciona um event listener para o botão AC (limpar)
  const botaoLimpar = document.querySelector(".bt-clear");
  botaoLimpar.addEventListener("click", limparDisplay);

  // Adiciona uma função para calcular o resultado da expressão no display
  function calcularResultado() {
    const expressao = display.value;
    let resultado;

    try {
      resultado = Function('"use strict";return (' + expressao + ")")();
      display.value = resultado;
    } catch (error) {
      display.value = "Erro";
    }
  }

  // Adiciona um event listener para o botão de igual (=)
  const botaoIgual = document.querySelector(".bt-igual");
  botaoIgual.addEventListener("click", calcularResultado);
});
