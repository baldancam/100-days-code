let intervalo;

function start() {
  // captura e armazena o valor de uDays e converte para Int
  let uDays = parseInt(document.getElementById("uDays").value);

  // captura e armazena o valor de uHours e converte para Int
  let uHours = parseInt(document.getElementById("uHours").value);

  // captura e armazena o valor de uMinutes e converte para Int
  let uMinutes = parseInt(document.getElementById("uMinutes").value);

  // captura e armazena o valor de uSeconds e converte para Int
  let uSeconds = parseInt(document.getElementById("uSeconds").value);

  // converte os dias, horas e minutos em segundos
  const totalSegundos =
    uDays * 24 * 60 * 60 + uHours * 60 * 60 + uMinutes * 60 + uSeconds;

  // armazena o total de segundos que ainda faltam
  let tempoRestante = totalSegundos;

  const atualizarContagem = () => {
    // faz a contagem regrassiva
    const days = Math.floor(tempoRestante / (24 * 60 * 60));
    const hours = Math.floor((tempoRestante % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((tempoRestante % (60 * 60)) / 60);
    const seconds = tempoRestante % 60;

    // atualiza o tempo no contador a cada 1 segundo
    document.getElementById("dias").value = days;
    document.getElementById("horas").value = hours;
    document.getElementById("minutos").value = minutes;
    document.getElementById("segundos").value = seconds;

    if (tempoRestante <= 0) {
      clearInterval(intervalo);
      alert("Acabou o tempo");
    } else {
      tempoRestante--;
    }
  };

  // Limpa o intervalo anterior se existir
  clearInterval(intervalo);

  atualizarContagem();
  // Define o intervalo novamente para a contagem recomeçar
  intervalo = setInterval(atualizarContagem, 1000);
}
