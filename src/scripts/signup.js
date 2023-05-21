document.addEventListener('DOMContentLoaded', function() {
    // Função para realizar o signup
    function signup() {
      // Obtém os valores dos campos de entrada
      const username = document.getElementById('signupUsername').value;
      const email = document.getElementById('signupEmail').value;
      const password = document.getElementById('signupPassword').value;
      const confirmPassword = document.getElementById('signupConfirmPassword').value;
  
      // Realiza as validações necessárias
      if (username === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Por favor, preencha todos os campos.');
        return;
      }

      if (password !== confirmPassword) {
        alert('As senhas digitadas não coincidem. Por favor, tente novamente.');
        return;
      }
  
      // Limpa os campos de entrada
      document.getElementById('signupUsername').value = '';
      document.getElementById('signupEmail').value = '';
      document.getElementById('signupPassword').value = '';
  
      // Armazena o usuário no localStorage
      const user = {
        username: username,
        email: email,
        password: password
      };
      localStorage.setItem('user', JSON.stringify(user));
  
      // Cadastro bem-sucedido
      alert('Conta criada');
    }
  
    // Adiciona o evento de clique ao botão de signup
    document.getElementById('signupButton').addEventListener('click', function() {
      signup();
    });
  });
  