function converter() {
  // captura o valor de gastos
  let gastos = document.getElementById("gastos");

  // captura o valor de percentualGorjeta
  let percentualGorjeta = document.getElementById("percentual");

  // armazena o valor de gastos e converte para float
  let valorGastos = parseFloat(gastos.value);

  // armazena o valor de percentualGorjeta e converte para float
  let percentual = parseFloat(percentualGorjeta.value);

  // formula para calcular o valor a ser pago de gorjeta
  let valorGorjeta = (percentual / 100) * valorGastos;

  // armazena o total da conta(valor da gorjeta + valor da conta inicial)
  let total = valorGorjeta + valorGastos;

  console.log(total);

  // adiciona valor ao input com id valorGorjeta e define apena 2 casa decimais
  document.getElementById("valorGorjeta").value = valorGorjeta.toFixed(2);

  // adiciona valor ao input com id totalConta e define apena 2 casa decimais
  document.getElementById("totalConta").value = total.toFixed(2);
}
