// Função para cadastrar um novo usuário
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validação básica
    if (password !== confirmPassword) {
        alert('As senhas não coincidem!');
        return;
    }

    // Verificar se o usuário já está cadastrado
    const existingUser  = localStorage.getItem(username);
    if (existingUser ) {
        alert('Usuário já cadastrado!');
        return;
    }

    // Armazenar o novo usuário no localStorage
    const userData = {
        name: name,
        email: email,
        username: username,
        password: password
    };
    localStorage.setItem(username, JSON.stringify(userData));

    alert('Usuário cadastrado');
});