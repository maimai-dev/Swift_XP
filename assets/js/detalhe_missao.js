document.addEventListener('DOMContentLoaded', function() {
  const missionTitleElement = document.getElementById('mission-title');
  const missionDescriptionElement = document.getElementById('mission-description');

  const urlParams = new URLSearchParams(window.location.search);
  const missionId = urlParams.get('id');

  const missionData = missoes[missionId];

  if (missionData) {
    missionTitleElement.textContent = missionData.title;

    missionDescriptionElement.innerHTML = '';
    missionData.description.forEach(paragraph => {
      missionDescriptionElement.innerHTML += `<p>${paragraph}</p>`;
    });
  } else {
    missionTitleElement.textContent = 'Missão Não Encontrada';
    missionDescriptionElement.innerHTML = '<p>A missão que você está a procurar não foi encontrada. Por favor, volte e tente novamente.</p>';
  }
});