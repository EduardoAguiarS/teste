document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm();
  });

function validateForm() {
  // Começa por aqui; o nome disso aqui parenteses
  // Limpar mensagens de erro anteriores
  clearErrors(); // Chama a função que limpa os erros anteriores na hora de enviar o formulário

  // Pegar os valores dos campos
  var name = document.getElementById("name").value; // Pega o valor do campo Nome
  var email = document.getElementById("email").value; // Pega o valor do campo E-mail
  var message = document.getElementById("message").value; // Pega o valor do campo Mensagem
  var isValid = true; // Variável para validação do formulário, comecando como true pois não houve erros

  // Validação do campo Nome utilizar o exemplo do trim, para limpar os espacos em branco
  if (name === "") {
    showError("name-error", "O campo Nome é obrigatório.");
    isValid = false;
  }

  // Validação do campo E-mail
  if (email === "") {
    showError("email-error", "O campo E-mail é obrigatório.");
    isValid = false;
  } else if (!validateEmail(email)) {
    showError("email-error", "Por favor, insira um e-mail válido.");
    isValid = false;
  }

  // Validação do campo Mensagem
  if (message === "") {
    showError("message-error", "O campo Mensagem é obrigatório.");
    isValid = false;
  }

  // Se todos os campos forem válidos, enviar o formulário
  if (isValid) {
    // vem pra cá
    alert("Formulário enviado com sucesso!");
    // Aqui você pode adicionar código para realmente enviar o formulário
  }
}

function showError(id, message) {
  var element = document.getElementById(id);
  element.textContent = message;
  element.style.display = "block";
  document.getElementById(id.split("-")[0]).classList.add("error");
}

function clearErrors() {
  var errors = document.querySelectorAll(".error-message");
  errors.forEach(function (error) {
    error.style.display = "none";
  });

  var inputs = document.querySelectorAll(".form-input");
  inputs.forEach(function (input) {
    input.classList.remove("error");
  });
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
