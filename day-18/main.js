function converter() {
  // captura o valor de celsius
  let celsius = document.getElementById("celsius");

  // armazena o valor de celsius
  let temperatura = celsius.value;

  // formula para converter celsius para fahrenheit
  let fahrenheit = (temperatura * 9) / 5 + 32;

  // define p com id="fahrenheit" com o valor convertido de celsius
  document.getElementById("fahrenheit").value = fahrenheit;
}
