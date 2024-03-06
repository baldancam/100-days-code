function adicionarConteudo(idConteudo) {
  // Obtém o texto digitado no input
  let texto = document.getElementById("input" + idConteudo.slice(8)).value;

  // Adiciona o texto ao conteúdo da coluna correspondente
  document.getElementById(idConteudo).innerHTML += "<p>" + texto + "</p>";

  // Limpa o input
  document.getElementById("input" + idConteudo.slice(8)).value = "";
}
