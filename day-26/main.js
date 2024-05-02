const url = 'https://economia.awesomeapi.com.br/json/last/';
const coins = 'USD-BRL,EUR-BRL';

// Função para buscar os dados das moedas na API
function dadosMoedas(dolareuro) {
    fetch(url + coins)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let dolarReal = data.USDBRL.bid;
            let euroReal = data.EURBRL.bid;
            dolareuro(dolarReal, euroReal);
            console.log(dolarReal)
        });
}

// Função para converter o valor em reais para a dolar e euro
function converterMoeda(valorEmReais, taxaMoeda) {
    return valorEmReais / taxaMoeda;
}

// Função para lidar com a conversão e atualizar os inputs
function converter() {
    let valorEmReais = parseFloat(document.getElementById("valorEmReal").value);
    
    dadosMoedas(function(dolarReal, euroReal) {
        let valorEmDolar = converterMoeda(valorEmReais, dolarReal);
        let valorEmEuro = converterMoeda(valorEmReais, euroReal);
        
        document.getElementById("valorEmDolar").value = valorEmDolar.toFixed(2);
        document.getElementById("valorEmEuro").value = valorEmEuro.toFixed(2);

        
    });
}
