function converter() {
  // captura o valor de gastos
  let gastos = document.getElementById("gastos");

  // captura o valor de percentualGorgeta
  let percentualGorgeta = document.getElementById("percentual");

  // armazena o valor de gastos e converte para float
  let valorGastos = parseFloat(gastos.value);

  // armazena o valor de percentualGorgeta e converte para float
  let percentual = parseFloat(percentualGorgeta.value);

  // formula para calcular o valor a ser pago de gorgeta
  let valorGorgeta = (percentual / 100) * valorGastos;

  // armazena o total da conta(valor da gorgeta + valor da conta inicial)
  let total = valorGorgeta + valorGastos;

  console.log(total);

  // adiciona valor ao input com id valorGorgeta e define apena 2 casa decimais
  document.getElementById("valorGorgeta").value = valorGorgeta.toFixed(2);

  // adiciona valor ao input com id totalConta e define apena 2 casa decimais
  document.getElementById("totalConta").value = total.toFixed(2);
}
