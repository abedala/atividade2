$(document).ready(function() {
    // Usuário e senha fictícios para autenticação
    const validUsername = "usuario";
    const validPassword = "senha123";

    $("#loginForm").on("submit", function(event) {
        event.preventDefault(); // Evita o envio do formulário

        const username = $("#username").val();
        const password = $("#password").val();
        const message = $("#message");

        // Verifica se as credenciais são válidas
        if (username === validUsername && password === validPassword) {
            message.text("Login bem-sucedido!").css("color", "green");
            
            window.location.href = "inicial.html";
        } else {
            message.text("Usuário ou senha incorretos.").css("color", "red");
        }
    });
});