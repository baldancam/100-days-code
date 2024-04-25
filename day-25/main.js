// Seleciona o input e o botão no HTML
const input = document.querySelector("input");
const button = document.querySelector("button");

// Seleciona os elementos onde os dados serão exibidos
const place = document.querySelector("#place");
const degrees = document.querySelector("#degrees");
const img = document.querySelector("img");
const wind = document.querySelector("#wind");
const content = document.querySelector(".content");

// Adiciona um evento de clique ao botão
button.addEventListener("click", () => {
  // Verifica se o campo de input não está vazio
  if (!input.value) return;

  // Chama a função para obter dados da API
  getDataApi();
});

// Função assíncrona para obter dados da API
async function getDataApi() {
  // Constrói a URL da API com base no valor do input
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
    input.value
  )}&units=metric&appid=9acbde45b56b41f4b1d61d11dbe69efd`;

  try {
    // Faz a requisição à API e obtém os dados em formato JSON
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // Verifica se a cidade foi encontrada
        if (data?.cod && data.cod === "404") {
          // Exibe um alerta se a cidade não foi encontrada
          return alert("Local não encontrado!");
        }

        // Chama a função para carregar os dados na página
        loadData(data);
      });
  } catch (error) {
    // Exibe um alerta em caso de erro na requisição
    alert(error);
  }
}

// Função para carregar os dados na página
function loadData(data) {
  // Atualiza os elementos HTML com os dados recebidos da API
  place.innerHTML = `${data.name}, ${data.sys.country}`;
  degrees.innerHTML = `Temperatura: ${Math.floor(data.main.temp)}° C`;
  // Define a imagem do clima com base no ícone retornado pela API
  img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  wind.innerHTML = `Vento: ${data.wind.speed} km/h`;
  // Exibe a div com os dados na página
  content.style.display = "flex";
}
