// Função para adicionar um novo item à tabela
function adicionarItem() {
    // Obtém o campo de entrada de texto pelo seu ID
    const itemInput = document.getElementById('itemInput');
    // Obtém e remove espaços em branco do início e fim do valor inserido pelo usuário
    const itemText = itemInput.value.trim();

    // Verifica se o campo de entrada está vazio
    if (itemText === '') {
        // Alerta o usuário para inserir um texto caso o campo esteja vazio
        alert('Por favor, digite um item.');
        return;
    }

    // Obtém a referência ao corpo da tabela (tbody) onde as novas linhas serão adicionadas
    const tabela = document.getElementById('listaDeCompras').getElementsByTagName('tbody')[0];
    // Insere uma nova linha no corpo da tabela
    const novaLinha = tabela.insertRow();

    // Insere três novas células na linha recém-criada
    const celulaItem = novaLinha.insertCell(0); // Célula para o texto do item
    const celulaCheckbox = novaLinha.insertCell(1); // Célula para a checkbox
    const celulaAcao = novaLinha.insertCell(2); // Célula para o botão de remoção

    // Define o texto da primeira célula como o texto inserido pelo usuário
    celulaItem.textContent = itemText;

    // Cria um novo elemento de entrada (input) do tipo checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    // Adiciona a checkbox à segunda célula da linha
    celulaCheckbox.appendChild(checkbox);

    // Cria um novo botão para remover a linha
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover'; // Define o texto do botão
    botaoRemover.className = 'remover'; // Define a classe do botão para estilização
    // Adiciona um evento de clique ao botão de remover
    botaoRemover.onclick = function() {
        // Remove a linha da tabela quando o botão é clicado
        tabela.deleteRow(novaLinha.rowIndex - 1);
    };
    // Adiciona o botão de remover à terceira célula da linha
    celulaAcao.appendChild(botaoRemover);

    // Limpa o campo de entrada de texto para que o usuário possa inserir um novo item
    itemInput.value = '';
}