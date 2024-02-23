// Função simples
function somar(a, b) {
    return a + b;
  }
  
  document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado (entender melhor como funciona)
    
    // Captura os valores dos campos de entrada
    var numero11 = parseFloat(document.getElementById("numero1").value);
    var numero22 = parseFloat(document.getElementById("numero2").value);
    
    // Chama a função somar com os números capturados e atribui o resultado à variável calcular
    var resultado = somar(numero11, numero22);
    
    // Exibe o resultado
    console.log("Resultado da soma:", resultado)
    alert(`Resultado da soma: ${resultado}`);
  });


