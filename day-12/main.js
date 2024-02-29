function adicionarConteudo(idConteudo) {
  // Obtém o texto digitado no input
  let texto = document.getElementById("input" + idConteudo.slice(8)).value;

  // Cria um novo botão para edição do conteúdo
  let botaoEditar = document.createElement("button");
  botaoEditar.textContent = "editar";
  botaoEditar.className = "bt-edit";

  // Cria um novo botão para excluir o conteúdo
  let botaoExcluir = document.createElement("button");
  botaoExcluir.textContent = "excluir";
  botaoExcluir.className = "bt-delete";

  // Cria um novo parágrafo para armazenar o conteúdo e os botões
  let novoParagrafo = document.createElement("p");
  novoParagrafo.innerHTML = texto;
  novoParagrafo.className = "paragrafo";

  // Função para editar o conteúdo do parágrafo
  function editarConteudo(paragrafo) {
    let novoTexto = prompt("Editar tarefa:");
    if (novoTexto !== null) {
      paragrafo.innerHTML = novoTexto;
      // Recria os botões de editar e excluir
      paragrafo.appendChild(botaoEditar);
      paragrafo.appendChild(botaoExcluir);
      // Adiciona os eventos de clique aos botões
      botaoEditar.addEventListener("click", function () {
        editarConteudo(novoParagrafo);
      });
      botaoExcluir.addEventListener("click", function () {
        excluirConteudo(novoParagrafo);
      });
    }
  }

  // Função para excluir o parágrafo
  function excluirConteudo(paragrafo) {
    paragrafo.remove();
  }

  // Adiciona um evento de clique ao botão de edição para chamar a função editarConteudo
  botaoEditar.addEventListener("click", function () {
    editarConteudo(novoParagrafo);
  });

  // Adiciona um evento de clique ao botão de exclusão para chamar a função excluirConteudo
  botaoExcluir.addEventListener("click", function () {
    excluirConteudo(novoParagrafo);
  });

  // Adiciona os botões ao novo parágrafo
  novoParagrafo.appendChild(botaoEditar);
  novoParagrafo.appendChild(botaoExcluir);

  // Adiciona o novo parágrafo ao elemento pai correspondente ao idConteudo
  document.getElementById(idConteudo).appendChild(novoParagrafo);

  // Limpa o input
  document.getElementById("input" + idConteudo.slice(8)).value = "";
}
