document.addEventListener('DOMContentLoaded', (event) => {
  const botaoResgatar = document.getElementById('botao-resgatar-pontos');
  if (botaoResgatar) {
    botaoResgatar.addEventListener('click', function() {
      window.location.href = '../pontos/index.html';
    });
  }
});