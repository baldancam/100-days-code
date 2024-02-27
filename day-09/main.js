document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que o formulário seja enviado

  // Captura os valores dos campos do formulário
  var nome = document.getElementById("nome").value;
  var sobrenome = document.getElementById("sobrenome").value;
  var dataNascimento = document.getElementById("dataNascimento").value;
  var email = document.getElementById("email").value;
  var sexo = document.querySelector('input[name="sexo"]:checked');
  var age = document.getElementById("age").value;

  // Verifique se todos os campos foram preenchidos
  if (
    nome.trim() === "" ||
    sobrenome.trim() === "" ||
    dataNascimento === "" ||
    email.trim() === "" ||
    !sexo ||
    age.trim() === ""
  ) {
    alert("Por favor, preencha todos os campos do formulário.");
    return false; // Impede o envio do formulário se algum campo estiver vazio
  }

  // Se todos os campos estiverem preenchidos, o formulário pode ser enviado
  alert("Formulário enviado com sucesso!");
  // Aqui pode enviar os dados do formulário para o servidor caso tenha um
});
