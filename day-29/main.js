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
    const celulaQuantidade = novaLinha.insertCell(1); // Célula para o texto do item
    const celulaCheckbox = novaLinha.insertCell(2); // Célula para a checkbox
    const celulaAcao = novaLinha.insertCell(3); // Célula para o botão de remoção

    // Define o texto da primeira célula como o texto inserido pelo usuário
    celulaItem.textContent = itemText;

    // cria um elemento select
    const selectElement = document.createElement('select');

    // cria opções para o select
    const option1 = document.createElement('option');
    option1.text = "1";
    option1.value = "1"
    const option2 = document.createElement('option');
    option2.text = "2";
    option2.value = "2"
    const option3 = document.createElement('option');
    option3.text = "3";
    option3.value = "3"
    const option4 = document.createElement('option');
    option4.text = "4";
    option4.value = "4"
    const option5 = document.createElement('option');
    option5.text = "5";
    option5.value = "5"
    const option6 = document.createElement('option');
    option6.text = "6";
    option6.value = "6"
    const option7 = document.createElement('option');
    option7.text = "7";
    option7.value = "7"
    const option8 = document.createElement('option');
    option8.text = "8";
    option8.value = "8"
    const option9 = document.createElement('option');
    option9.text = "9";
    option9.value = "9"
    const option10 = document.createElement('option');
    option10.text = "10";
    option10.value = "10"

    // adiciona as opções ao select
    selectElement.add(option1);
    selectElement.add(option2);
    selectElement.add(option3);
    selectElement.add(option4);
    selectElement.add(option5);
    selectElement.add(option6);
    selectElement.add(option7);
    selectElement.add(option8);
    selectElement.add(option9);
    selectElement.add(option10);

    // Adiciona o select à segunda célula da linha
    celulaQuantidade.appendChild(selectElement);

    // Cria um novo elemento de entrada (input) do tipo checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    // Adiciona a checkbox à terceira célula da linha
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
    // Adiciona o botão de remover à quarta célula da linha
    celulaAcao.appendChild(botaoRemover);

    // Limpa o campo de entrada de texto para que o usuário possa inserir um novo item
    itemInput.value = '';
}