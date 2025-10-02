const missoes = {
  'seguranca-lugar': {
    title: '🛡️ Missão: Segurança em Primeiro Lugar',
    description: [
      'A segurança é um valor fundamental na Swift. Esta missão consiste em completar o novo módulo de treino sobre segurança no trabalho.',
      'Assista aos vídeos, responda ao questionário e garanta que o nosso ambiente de trabalho seja seguro para todos.',
      '🎯 Objetivo: Atingir uma pontuação de 80% ou mais no questionário final.<br>🎁 Recompensa: 500 pontos e um emblema de segurança no seu perfil.'
    ]
  },
  'conhecimento-swift': {
    title: '🧠 Missão: Desafio do Conhecimento Swift',
    description: [
      'Mostre que você conhece os nossos produtos! A cada semana, lançaremos um quiz sobre uma categoria diferente de produtos Swift.',
      'Esta semana o tema é "Carnes Bovinas". Estude o material de apoio e prepare-se!',
      '🎯 Objetivo: Acertar 7 das 10 perguntas do quiz.<br>🎁 Recompensa: 250 pontos.'
    ]
  },
  'cortes-nobres': {
    title: '🥩 Missão: Cortes Nobres Swift',
    description: [
      'Aprofunde o seu conhecimento sobre os cortes nobres da Swift. O seu desafio é assistir aos vídeos de treino sobre Picanha, Chorizo e Ancho.',
      'Saber mais sobre os produtos ajuda a oferecer a melhor experiência ao cliente!',
      '🎯 Objetivo: Concluir os 3 módulos de treino sobre cortes nobres.<br>🎁 Recompensa: 200 pontos.'
    ]
  },
  'seguranca-alimentar': {
    title: '🧊 Missão: Segurança Alimentar',
    description: [
      'A qualidade dos nossos produtos é inegociável. Participe no treino relâmpago sobre as melhores práticas de manuseamento e armazenamento de alimentos.',
      'Garanta que os nossos clientes levam para casa produtos com a máxima qualidade e segurança.',
      '🎯 Objetivo: Completar o módulo de segurança alimentar.<br>🎁 Recompensa: 150 pontos.'
    ]
  },
  'organizacao-estoque': {
      title: '📦 Missão: Organização do Estoque',
      description: [
          'Um estoque organizado é um estoque eficiente. Ajude a sua equipa a manter tudo em ordem.',
          '🎯 Objetivo: Participar na organização semanal do estoque.<br>🎁 Recompensa: 300 pontos.'
      ]
  },
  'feedback-construtivo': {
      title: '💬 Missão: Feedback Construtivo',
      description: [
          'O seu feedback ajuda-nos a crescer. Partilhe uma sugestão construtiva para melhorar um processo na sua loja.',
          '🎯 Objetivo: Enviar uma sugestão através do canal de feedback interno.<br>🎁 Recompensa: 100 pontos.'
      ]
  },

  'boas-vindas': {
      title: '🎉 Missão: Boas-vindas ao Swift XP',
      description: [
          'Parabéns por se juntar ao Swift XP! A sua jornada de reconhecimento começa agora.',
          'Esta missão de introdução foi concluída automaticamente ao entrar na aplicação pela primeira vez.',
          '🎯 Objetivo: Concluído!<br>🎁 Recompensa: 50 pontos.'
      ]
  },
  'tour-loja': {
      title: '🗺️ Missão: Tour pela Loja',
      description: [
          'Conhecer bem o nosso ambiente de trabalho é o primeiro passo para o sucesso.',
          'Esta missão foi concluída após participar no tour de integração da sua loja.',
          '🎯 Objetivo: Concluído!<br>🎁 Recompensa: 100 pontos.'
      ]
  },

  'desafio-dia-d': {
    title: '🏆 Missão Especial: Desafio do Dia D',
    description: [
      'Hoje é o Dia D — o momento de mostrar sua garra, sua atitude e sua paixão pelo que faz!',
      'Nesta missão especial, você terá um desafio relâmpago, válido por apenas 24 horas, com foco em superar metas, atender com excelência ou mostrar seu conhecimento Swift.',
      '🕒 Validade: Somente hoje!<br>🎯 Objetivo: Concluir o desafio proposto antes do final do expediente.<br>🎁 Recompensa: Pontos bônus, reconhecimento e avanço no seu ranking de loja!',
      'Este é o tipo de missão que pode virar o jogo — e ainda garantir aquela vantagem extra rumo ao ranking Ouro ou Platina.'
    ]
  },
  'juntos-fortes': {
    title: '🤝 Missão: Juntos Somos Mais Fortes',
    description: [
      'O trabalho em equipa faz a diferença! Esta missão de grupo desafia a sua loja a atingir uma meta de vendas coletiva durante a semana.',
      'Colaborem, partilhem estratégias e celebrem juntos a vitória!',
      '🎯 Objetivo: Atingir a meta de vendas semanal da loja.<br>🎁 Recompensa: 350 pontos para cada membro da equipa.'
    ]
  },
  'meta-venda': {
    title: '💰 Missão: Meta de Venda Individual',
    description: [
      'Mostre o seu talento em vendas! O desafio é atingir a sua meta de venda individual para este mês.',
      'Cada venda conta para o seu progresso e para o sucesso da loja.',
      '🎯 Objetivo: Atingir 100% da sua meta de vendas mensal.<br>🎁 Recompensa: 600 pontos e reconhecimento especial.'
    ]
  },
  'treinamento-relampago': {
    title: '⚡ Missão: Treinamento Relâmpago',
    description: [
      'O conhecimento é a chave para o sucesso. Participe num treino rápido e focado sobre as novas promoções do mês.',
      'Esteja preparado para responder a todas as perguntas dos clientes e impulsionar as vendas!',
      '🎯 Objetivo: Concluir o treino sobre as promoções atuais.<br>🎁 Recompensa: 200 pontos.'
    ]
  },
   'ticket-medio': {
    title: '🛒 Missão: Desafio do Ticket Médio',
    description: [
      'Aumente o valor de cada venda! O seu desafio é aumentar o seu ticket médio em 15% durante a próxima semana.',
      'Ofereça produtos complementares e mostre aos clientes o valor das nossas soluções completas.',
      '🎯 Objetivo: Aumentar o ticket médio em 15%.<br>🎁 Recompensa: 700 pontos.'
    ]
  },
  'domine-produto': {
    title: '📚 Missão: Domine o Produto',
    description: [
      'Torne-se um especialista! Escolha uma categoria de produtos que você gostaria de dominar e complete todos os módulos de treino associados a ela.',
      'O conhecimento aprofundado gera confiança e melhores resultados.',
      '🎯 Objetivo: Completar todos os treinos de uma categoria de produto.<br>🎁 Recompensa: 400 pontos.'
    ]
  }
};