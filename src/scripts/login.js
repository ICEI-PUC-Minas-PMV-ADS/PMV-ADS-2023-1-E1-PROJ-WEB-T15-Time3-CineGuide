document.addEventListener('DOMContentLoaded', function() {
    // Função para realizar o login
    function login() {
      // Obtém os valores dos campos de entrada
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Lógica de verificação do login
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const user = JSON.parse(storedUser);
        if (username === user.username && password === user.password) {
          // Login bem-sucedido
          alert('Login successful!');

        // Remove o modal da página
        const modal = document.getElementById('loginModal');
        modal.remove();

        } else {
          // Login falhou
          alert('Invalid username or password!');
        }
      } else {
        // Login falhou
        alert('Invalid username or password!');
      }
    }
  
    // Adiciona o evento de clique ao botão de login
    document.getElementById('loginButton').addEventListener('click', function() {
      login();
    });
  });
  