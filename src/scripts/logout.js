document.addEventListener('DOMContentLoaded', function() {
   
    // Função para realizar o logout
    function logout() {
        localStorage.setItem('usuarioEstaLogado', false);
    }
  
    // Adiciona o evento de clique ao botão de logout
    document.getElementById('logout').addEventListener('click', function() {
      logout();
      alert('Você saiu da sessão')
    });
  });
  