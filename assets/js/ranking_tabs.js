document.addEventListener('DOMContentLoaded', function() {
  const tabPrata = document.getElementById('tab-prata');
  const tabOuro = document.getElementById('tab-ouro');
  const tabPlatina = document.getElementById('tab-platina');
  const benefitsTitle = document.getElementById('benefits-title');
  const benefitsGrid = document.getElementById('benefits-grid');

  const tabs = [tabPrata, tabOuro, tabPlatina];

  const rankingData = {
    prata: {
      title: 'Benefícios do ranking Prata',
      benefits: [
        {
          title: 'Reconhecimento Oficial',
          description: 'O seu nome aparecerá nos destaques mensais da intranet da Swift.'
        },
        {
          title: 'Acesso a Recompensas',
          description: 'Desbloqueie a capacidade de resgatar cupons de desconto e produtos exclusivos.'
        }
      ]
    },
    ouro: {
      title: 'Benefícios do ranking Ouro',
      benefits: [
        {
          title: 'Certificado Digital Swift XP Ouro',
          description: 'Para reforçar a conquista, válido para o currículo interno da empresa.'
        },
        {
          title: 'Vale-Folga Flexível',
          description: 'Banco de horas com 1 folga extra a cada 2 meses (com aprovação do gestor).'
        },
        {
          title: 'Sorteio Exclusivo',
          description: 'Participação em sorteios de prémios mensais só para quem está no nível Ouro ou superior.'
        }
      ]
    },
    platina: {
      title: 'Benefícios do ranking Platina',
      benefits: [
        {
          title: 'Mentoria com Liderança',
          description: 'Sessões de mentoria exclusivas com um líder da sua área de interesse na Swift.'
        },
        {
          title: 'Vale-Cultura',
          description: 'Um vale-presente para usar em livros, cinema, teatro ou outras atividades culturais.'
        },
        {
          title: 'Dia de Inovação',
          description: 'Participe num workshop de inovação para desenvolver novas ideias para a Swift.'
        }
      ]
    }
  };

  function displayBenefits(rank) {
    const data = rankingData[rank];
    benefitsTitle.textContent = data.title;
    benefitsGrid.innerHTML = ''; 

    data.benefits.forEach(benefit => {
      const benefitElement = `
        <article class="benefit-item">
          <div class="benefit-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L14 6H18L15 9L16 13L12 11L8 13L9 9L6 6H10L12 2Z" fill="#D6A53D" /></svg>
          </div>
          <div class="benefit-content">
            <h4 class="benefit-title">${benefit.title}</h4>
            <p class="benefit-description">${benefit.description}</p>
          </div>
        </article>
      `;
      benefitsGrid.innerHTML += benefitElement;
    });
  }

  function handleTabClick(selectedTab, rank) {
    tabs.forEach(tab => tab.classList.remove('active'));
    selectedTab.classList.add('active');
    displayBenefits(rank);
  }

  tabPrata.addEventListener('click', () => handleTabClick(tabPrata, 'prata'));
  tabOuro.addEventListener('click', () => handleTabClick(tabOuro, 'ouro'));
  tabPlatina.addEventListener('click', () => handleTabClick(tabPlatina, 'platina'));

  displayBenefits('ouro');
});