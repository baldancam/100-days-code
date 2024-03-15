function adicionarConteudo(idConteudo) {
  // Obtém o texto digitado no input
  let texto = document.getElementById("input" + idConteudo.slice(8)).value;

  // Cria um novo botão para excluir o conteúdo
  let botaoExcluir = document.createElement("button");
  botaoExcluir.textContent = "excluir";
  botaoExcluir.className = "bt-delete";

  let separaConteudo = document.createElement("hr");
  separaConteudo.className = "hrSeparaConteudo";

  // Cria um novo parágrafo para armazenar o conteúdo e os botões
  let novoParagrafo = document.createElement("p");
  novoParagrafo.innerHTML = texto;
  novoParagrafo.className = "paragrafo publicacao";

  // Função para excluir o parágrafo
  function excluirConteudo(paragrafo) {
    paragrafo.remove();
  }

  // Adiciona um evento de clique ao botão de exclusão para chamar a função excluirConteudo
  botaoExcluir.addEventListener("click", function () {
    excluirConteudo(novoParagrafo);
  });

  // Adiciona os botões ao novo parágrafo
  novoParagrafo.appendChild(botaoExcluir);
  novoParagrafo.appendChild(separaConteudo);

  // Obtém o primeiro elemento filho do elemento pai correspondente ao idConteudo
  let primeiroElementoFilho =
    document.getElementById(idConteudo).firstElementChild;

  // Insere o novo parágrafo antes do primeiro elemento filho
  document
    .getElementById(idConteudo)
    .insertBefore(novoParagrafo, primeiroElementoFilho);

  // Limpa o input
  document.getElementById("input" + idConteudo.slice(8)).value = "";
}
