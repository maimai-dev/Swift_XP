document.addEventListener('DOMContentLoaded', function () {
  const promoInput = document.getElementById('promo-code-input');
  const applyButton = document.getElementById('apply-promo-button');

  if (applyButton && promoInput) {
    applyButton.addEventListener('click', function () {
      const code = promoInput.value.trim().toUpperCase();

      if (code === 'SWIFTXP2025') {

        const currentPoints = parseInt(localStorage.getItem('userPoints') || '0');
        const pointsToAdd = 500; 

        const newTotalPoints = currentPoints + pointsToAdd;

        localStorage.setItem('userPoints', newTotalPoints);

        showToast(`Código aplicado! Você ganhou ${pointsToAdd} pontos!`);
        promoInput.value = ''; 

        if (typeof updateUserDataDisplay === 'function') {
          updateUserDataDisplay();
        }

      } else if (code === '') {
        showToast('Por favor, insira um código.');
      } else {
        showToast('Código promocional inválido ou expirado.');
      }
    });
  }
});