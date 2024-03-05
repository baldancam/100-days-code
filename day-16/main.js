const getHours = () => {
  // Pega o primeiro elemento da class clock.
  const clock = document.getElementsByClassName("clock")[0];

  // Instancia da data para utilizar diversos metodos como: horas, minutos, dia, ano...
  const date = new Date();

  // Pegamos as horas, minutos e segundos presentes na intancia de date.
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // Compara se as horas, minutos e segundos são menores que 10, caso sejam menores acrescentesse um 0 a frente.
  const hour = hours < 10 ? `0${hours}` : hours;
  const minute = minutes < 10 ? `0${minutes}` : minutes;
  const second = seconds < 10 ? `0${seconds}` : seconds;

  // Pega as horas, minutos e segundos e joga novamente para o HTML la na classe clock.
  clock.innerHTML = `${hour}:${minute}:${second}`;
};

const getYear = () => {
  // Pega o primeiro elemento da class age.
  const year = document.getElementsByClassName("year")[0];

  // Instancia da data para utilizar diversos metodos como: horas, minutos, dia, ano...
  const date = new Date();

  // Pega os dias, meses e anos presentes na intancia de date.
  const days = date.getDate();
  const months = date.getMonth();
  const years = date.getFullYear();

  // Compara se os dias e os meses são menores que 10, caso sejam menores acrescentesse um 0 a frente.
  const day = days < 10 ? `0${days}` : days;
  const month = months < 10 ? `0${months}` : months;

  year.innerHTML = `${day}/${month}/${years}`;
};

// Essa função pega as hora exata do navegador a cada 1 segundo, dessa forma atualiza o relogio.
setInterval(() => {
  getHours();
  getYear();
}, 1000);
