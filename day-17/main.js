// Obtem o primeiro elemento da class="nextPlayer"
const nextPlayer = document.querySelector(".nextPlayer");

let selected;
let player = "X";

// Arrays com possições possiveis de se ganhar o jogo
let positions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

// Função inicial, zera o array selected.
function init() {
  selected = [];

  // nextPlayer irá armazenar o playes da vez.
  nextPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;

  // seleciona todos os botões e deixa o innerHTML vazio, sem informação nenhum dentro de cada botão.
  document.querySelectorAll(".game button").forEach((item) => {
    item.innerHTML = "";

    // adiciona o evento de click nos botões e executa a função newMove, caso o botão seja clicado.
    item.addEventListener("click", newMove);
  });
}

// inicia a função init.
init();

// função que recebe o evento referente ao click do botão.
function newMove(e) {
  // Retorna o valor do atributo do botão clicado, atributo: data-i="valor do atributo".
  const index = e.target.getAttribute("data-i");

  // adiciona ao botão clicado o player que fez o click.
  e.target.innerHTML = player;

  // remove do botão clickado função newMove, evitando que o mesmo botão seja clicado 2 vezes.
  e.target.removeEventListener("click", newMove);

  // armazena no index do botão o player que fez o click.
  selected[index] = player;

  // Após cada click setTimeout é executada e faz a verificação se alguem ganhou
  setTimeout(() => {
    check();
  }, [100]);

  // faz a troca o player que deve jogar, após cada click.
  player = player === "X" ? "O" : "X";

  // faz a troca do player que deve jogar no nextPlayer;
  nextPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;
}

// Função responsável por verificar se alguém ganhou ou se ocorreu um empate.
function check() {
  // Verifica qual foi o último jogador a fazer uma jogada (clique).
  let playerLastMove = player === "X" ? "O" : "X";

  // Cria um array com as posições clicadas por cada jogador.
  const selectedPositions = selected
    // Mapeia os itens selecionados para incluir o índice de cada posição.
    .map((item, i) => [item, i])
    // Filtra apenas as posições clicadas pelo último jogador.
    .filter((item) => item[0] === playerLastMove)
    // Mapeia novamente para extrair apenas os índices das posições.
    .map((item) => item[1]);

  // Percorre todas as combinações possíveis de vitória.
  for (const pos of positions) {
    // Verifica se todas as posições da combinação atual foram clicadas pelo último jogador.
    if (pos.every((item) => selectedPositions.includes(item))) {
      // Se todas as posições da combinação atual foram clicadas pelo último jogador,
      // exibe um alerta indicando que o jogador correspondente ganhou o jogo e reinicia o jogo.
      alert("O JOGADOR '" + playerLastMove + "' GANHOU");
      init(); // Reinicia o jogo.
      return; // Sai da função, pois o jogo terminou.
    }
  }

  // Verifica se o número total de jogadas é igual a 9, o que indica que o jogo terminou em empate.
  if (selected.filter((item) => item).length === 9) {
    // Se todas as posições do tabuleiro foram preenchidas e não houve vencedor,
    // exibe um alerta indicando que o jogo terminou em empate e reinicia o jogo.
    alert("EMPATE!");
    init(); // Reinicia o jogo.
    return; // Sai da função, pois o jogo terminou.
  }
}
