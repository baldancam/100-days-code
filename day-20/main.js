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
document.querySelector(".bt-peso").addEventListener("click", function () {
  // Obtém o texto do parágrafo com a classe "pesoUser"
  let novoTexto = prompt("Informe o novo peso:");
  if (novoTexto !== null) {
    // Atualiza o conteúdo do parágrafo com a classe "pesoUser"
    let pesoUser = document.querySelector(".pesoUser");
    pesoUser.textContent = `Peso atual ${novoTexto} kg`;

    // Atualiza o conteúdo do parágrafo com a classe "pesoAtualUser"
    let pesoAtualUser = document.querySelector(".pesoAtualUser");
    pesoAtualUser.textContent = `Peso atual ${novoTexto} kg`;

    // Converte os valores das classes "pesoInicial" e "meta" para números
    let pesoInicial = parseFloat(
      document.querySelector(".pesoInicial").textContent
    );
    let meta = parseFloat(document.querySelector(".meta").textContent);
    let novoPeso = parseFloat(novoTexto);

    // Calcula a proporção
    let proporcao = (pesoInicial - novoPeso) / (pesoInicial - meta);

    // Atualiza a largura da barra de progresso com a nova proporção
    let progressBarra = document.querySelector(".progressBarra");
    progressBarra.style.width = `calc(${proporcao} * (100%)`;
  }
});

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("btnTopo").style.display = "block";
  } else {
    document.getElementById("btnTopo").style.display = "none";
  }
}

// Scroll suave ao topo da página
document.getElementById("btnTopo").onclick = function () {
  scrollToTop();
};

function scrollToTop() {
  document.body.scrollTop = 0; // Para navegadores Safari
  document.documentElement.scrollTop = 0; // Para outros navegadores
}
