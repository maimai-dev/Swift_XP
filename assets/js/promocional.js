document.addEventListener('DOMContentLoaded', function () {
  const promoInput = document.getElementById('promo-code-input');
  const applyButton = document.getElementById('apply-promo-button');

  if (applyButton && promoInput) {
    applyButton.addEventListener('click', function () {
      const code = promoInput.value.trim().toUpperCase();

      if (code === 'SWIFTXP2025') {
        showToast('Código aplicado! Você ganhou 500 pontos!');
        promoInput.value = ''; 
      } else if (code === '') {
        showToast('Por favor, insira um código.');
      } else {
        showToast('Código promocional inválido ou expirado.');
      }
    });
  }
});