document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio do formulário

  // Captura o valor do e-mail digitado pelo usuário
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

  // Verifica se email está correto
  if (!validarEmail(email)) {
    alert("Por favor, insira um endereço de e-mail válido.");
    return false;
  }

  // função para validar o email
  function validarEmail(email) {
    // Expressão regular para validar e-mails
    const expressaoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expressaoEmail.test(email);
  }

  // Expressão regular para validar a senha
  const expressaoSenha =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  // Verifica se a senha corresponde à expressão regular
  if (!expressaoSenha.test(senha)) {
    alert(
      "A senha deve conter pelo menos 6 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais."
    );
    return; // Impede o envio do formulário se a senha for inválida
  }

  alert("Login realizado com sucesso!");
});
