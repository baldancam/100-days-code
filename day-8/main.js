function validaNumber(a) {
  let resultado;
  if (a.trim() === "") {
    alert("Favor, digite um número válido!");
    resultado = "inválido";
  } else if (isNaN(a)) {
    alert("Favor, digite um número válido!");
    resultado = "inválido";
  } else if (a % 2 === 0) {
    resultado = "par";
  } else {
    resultado = "impar";
  }
  return resultado;
}

function adicionarConteudo(idConteudo) {
  // Obtém o texto digitado no input
  let numero = document.getElementById("input" + idConteudo.slice(8)).value;

  let consultaNumber = validaNumber(numero);

  // Adiciona o texto ao conteúdo da coluna correspondente
  document.getElementById(
    idConteudo
  ).innerHTML += `<p> Número ${numero} é ${consultaNumber} </p>`;

  // Limpa o input
  document.getElementById("input" + idConteudo.slice(8)).value = "";
}
