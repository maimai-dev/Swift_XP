document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('confirmation-modal');
    if (!modal) return;

    const cancelButton = document.getElementById('cancel-button');
    const confirmButton = document.getElementById('confirm-button');
    const redeemButtons = document.querySelectorAll('.redeem-button');

    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');

    let currentReward = null;

    function openModal(rewardCard) {
        currentReward = rewardCard;
        const rewardName = currentReward.querySelector('.reward-name').textContent;
        const rewardPointsText = currentReward.querySelector('.reward-points').textContent;

        const currentUserPoints = parseInt(localStorage.getItem('userPoints') || '0');
        const rewardCost = parseInt(rewardPointsText.replace(/\./g, '').replace(' Pontos', ''));

        if (currentUserPoints >= rewardCost) {
            modalTitle.textContent = `Confirmar Resgate`;
            modalText.innerHTML = `Deseja resgatar o prêmio <strong>${rewardName}</strong> por <strong>${rewardPointsText}</strong>?`;
            confirmButton.disabled = false;
            confirmButton.style.display = 'block';
            cancelButton.textContent = 'Cancelar';
        } else {
            modalTitle.textContent = `Pontos Insuficientes`;
            modalText.innerHTML = `Você precisa de mais <strong>${(rewardCost - currentUserPoints).toLocaleString('pt-BR')}</strong> pontos para resgatar este item.`;
            confirmButton.disabled = true;
            confirmButton.style.display = 'none';
            cancelButton.textContent = 'Fechar';
        }
        modal.style.display = 'flex';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    redeemButtons.forEach(button => {
        button.addEventListener('click', function () {
            const rewardCard = this.closest('.reward-card');
            openModal(rewardCard);
        });
    });

    cancelButton.addEventListener('click', closeModal);


confirmButton.addEventListener('click', function () {
    const currentPoints = parseInt(localStorage.getItem('userPoints') || '0');
    const rewardCost = parseInt(currentReward.querySelector('.reward-points').textContent.replace(/\./g, '').replace(' Pontos', ''));
    const newTotalPoints = currentPoints - rewardCost;

    localStorage.setItem('userPoints', newTotalPoints);

    if (typeof updateUserDataDisplay === 'function') {
        updateUserDataDisplay();
    }

    currentReward.classList.add('redeemed');

    setTimeout(() => {
        currentReward.style.display = 'none';
    }, 500); 

    closeModal();
    showToast('Prêmio resgatado com sucesso!');
});

    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});