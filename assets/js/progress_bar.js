document.addEventListener('DOMContentLoaded', function() {
  const missionCards = document.querySelectorAll('.mission-card-progress');

  missionCards.forEach(card => {
    const progressTextElement = card.querySelector('.progress-text-values');
    const progressBarElement = card.querySelector('.progress-bar-dynamic');

    if (progressTextElement && progressBarElement) {
      const text = progressTextElement.textContent; 
      const parts = text.split(' de '); 

      if (parts.length === 2) {
        const current = parseFloat(parts[0]);
        const total = parseFloat(parts[1]);

        if (!isNaN(current) && !isNaN(total) && total > 0) {
          const percentage = (current / total) * 100;
          progressBarElement.style.width = percentage + '%'; 
        }
      }
    }
  });
});