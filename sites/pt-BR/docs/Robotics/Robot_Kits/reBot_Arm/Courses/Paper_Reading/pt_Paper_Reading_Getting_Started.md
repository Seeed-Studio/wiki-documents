---
description: "Explore cutting-edge Physical AI research, break down key models and algorithms with Seeed robotic arms"
title: "Physical AI Paper Deep-Dive & Hands-on Deployment"
hide_title: true
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - SO101
  - Robotic Arm
  - Physical AI
  - Course
  - Tutorial
  - SO-ARM101
  - LeRobot
  - Hugging Face
  - Arm
  - Robotics
  - Paper Deep-Dive
  - Hands-on Deployment
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/paper_reading_getting_started
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-16'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/pt-br/robotics/paper_reading_getting_started/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page">

  <aside className="paper-reading-support" aria-label="Support the open-source project">
    <div>
      <strong>Cursos gratuitos, juntos em código aberto</strong>
      <p>Este curso é totalmente gratuito. Para apoiar nosso trabalho, dê uma estrela para o nosso braço robótico open source!</p>
    </div>
    <a href="https://github.com/Seeed-Projects/reBot-DevArm/" target="_blank" rel="noopener noreferrer">⭐ Star on GitHub</a>
  </aside>

  <section className="paper-reading-intro" aria-labelledby="paper-reading-title">
    <span className="paper-reading-eyebrow">SEEED STUDIO · AI ROBOTICS</span>
    <h1 id="paper-reading-title">Physical AI Paper Deep-Dive &amp; Hands-on Deployment</h1>
    <p className="paper-reading-lead">Explore pesquisas de ponta em Physical AI, destrinche modelos e algoritmos-chave com braços robóticos da Seeed</p>
    <p>Um <strong>curso que será sempre gratuito</strong>, cuidadosamente desenvolvido pela equipe de AI Robotics da SeeedStudio, combinado com o <strong>braço robótico reBot 100% open source, disponível para uso comercial e reprodução</strong>. Conclua o curso e torne-se o próximo especialista em robótica!</p>
    <ul className="paper-reading-badges" aria-label="Course features">
      <li>Sempre gratuito</li>
      <li>100% open source · Uso comercial</li>
      <li>Mão na massa · Reproduzível</li>
    </ul>
  </section>

  <div className="paper-reading-directory">
    <section className="paper-reading-directory-panel" aria-labelledby="paper-reading-hands-on-title">
      <h2 id="paper-reading-hands-on-title">Hands-on Deployment</h2>
      <p>Comece com a preparação da plataforma e a coleta de dados, siga os passos para treinar e implantar o ACT, depois aprenda a alternar do ACT para outras políticas e domine gradualmente o fluxo de reprodução para diferentes algoritmos.</p>
      <ol className="paper-reading-directory-list">
        <li><a href="/pt-br/robotics/paper_reading_hardware_and_teleoperation/">Configuração de Hardware &amp; Software</a></li>
        <li><a href="/pt-br/robotics/hands_on_task_design/">Design de Tarefas &amp; Planejamento de Demonstrações</a></li>
        <li><a href="/pt-br/robotics/hands_on_camera_recording/">Coleta de Dados Multi-View</a></li>
        <li><a href="/pt-br/robotics/hands_on_dataset_quality/">Qualidade dos Dados: Estrutura, Sincronização &amp; Validação</a></li>
        <li><a href="/pt-br/robotics/hands_on_act_training/">Treinamento do Modelo ACT</a></li>
        <li><a href="/pt-br/robotics/hands_on_act_deployment/">Implantação no Robô &amp; Avaliação de Desempenho</a></li>
        <li><a href="/pt-br/robotics/hands_on_algorithm_switching/">Troca de Políticas &amp; Execução de Tarefas</a></li>
      </ol>
    </section>

    <section className="paper-reading-directory-panel" aria-labelledby="paper-reading-papers-title">
      <h2 id="paper-reading-papers-title">Paper Deep-Dives</h2>
      <p>Leia artigos por tópico, desde políticas básicas de aprendizado por imitação até modelos de visão-linguagem-ação.</p>
      <h3>Parte 1 · Action Chunking &amp; Políticas Multi-Tarefa</h3>
      <ul className="paper-reading-directory-list">
        <li><a href="/pt-br/robotics/paper_reading_act/">ACT — Manipulação Bimanual de Baixo Custo</a></li>
      </ul>
      <h3>Parte 2 · Modelos VLA Leves &amp; Implantação Eficiente</h3>
      <ul className="paper-reading-directory-list">
        <li><a href="/pt-br/robotics/paper_reading_smolvla/">SmolVLA — Modelos de Visão-Linguagem-Ação Acessíveis</a></li>
        <li><a href="/pt-br/robotics/paper_reading_evo1/">Evo-1 — VLA Leve</a></li>
      </ul>
      <h3>Parte 3 · Modelos Fundamentais de Robótica π</h3>
      <ul className="paper-reading-directory-list">
        <li><a href="/pt-br/robotics/paper_reading_pi0/">π₀ — Controle Robótico de Uso Geral</a></li>
        <li><a href="/pt-br/robotics/paper_reading_pi0_fast/">π₀-FAST — Tokenização de Ações Eficiente</a></li>
        <li><a href="/pt-br/robotics/paper_reading_pi05/">π₀.₅ — Generalização em Mundo Aberto</a></li>
      </ul>
      <h3>Parte 4 · VLA Generalista &amp; Adaptação Entre Corpos</h3>
      <ul className="paper-reading-directory-list">
        <li><a href="/pt-br/robotics/paper_reading_gr00t_n1/">NVIDIA GR00T — Adaptação &amp; Fine-Tuning</a></li>
        <li><a href="/pt-br/robotics/paper_reading_eo1/">EO-1 — Pré-Treinamento Multimodal Intercalado</a></li>
        <li><a href="/pt-br/robotics/paper_reading_wall_oss/">WALL-OSS — Raciocínio Incorporado &amp; Controle de Robôs</a></li>
      </ul>
      <h3>Parte 5 · Modelos de Mundo &amp; Aprendizado Vídeo-Ação</h3>
      <span className="paper-reading-update-badge">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
          <path d="M3 12a9 9 0 0 1 15.36-6.36L21 8M21 3v5h-5M21 12a9 9 0 0 1-15.36 6.36L3 16M8 16H3v5" />
        </svg>
        Atualizações em andamento
      </span>
      <h3>Parte 6 · Avaliação Unificada &amp; Resumo da Pesquisa</h3>
      <span className="paper-reading-update-badge">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
          <path d="M3 12a9 9 0 0 1 15.36-6.36L21 8M21 3v5h-5M21 12a9 9 0 0 1-15.36 6.36L3 16M8 16H3v5" />
        </svg>
        Atualizações em andamento
      </span>
    </section>
  </div>

</div>
