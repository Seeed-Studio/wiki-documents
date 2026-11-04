---
description: "Curso para iniciantes em SO-ARM Physical AI — um guia gratuito e prático para construir e aprender com o braço robótico de código aberto SO-ARM100 / SO-ARM101. As 4 fases e 22 capítulos estão publicados: preparação e montagem, aprendizado por imitação com LeRobot, treinamento de dupla braço, VLA com Isaac GR00T e VLA sem código com SenseCraft Robotics."
title: Curso para Iniciantes em SO-ARM Physical AI
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM100
  - SO-ARM101
  - LeRobot
  - braço robótico
  - Physical AI
  - curso
  - tutorial
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_introduction
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/pt-br/robotics/soarm_physical_ai_course_introduction/
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">SO-ARM × Physical AI · As 4 fases publicadas</span>
    <h2>4 fases, 22 capítulos — gratuito e prático</h2>
    <p>
      Um guia gratuito e prático para construir e aprender com o braço robótico de código aberto
      SO-ARM100 / SO-ARM101. Os capítulos publicados vão de conceitos básicos, montagem e controle
      de servos, passando pelo aprendizado por imitação com LeRobot e treinamento de dupla braço,
      até o ajuste fino de VLA com Isaac GR00T — e terminam com a rota VLA sem código na
      plataforma SenseCraft Robotics.
    </p>
    <div className="hero-actions">
      <a href="#structure">Estrutura do curso</a>
      <a href="#principles">Design do curso</a>
      <a href="#community">Comunidade</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Visão geral do curso</strong>
    <span>Escrito e compartilhado gratuitamente pela equipe de robótica da Seeed.</span>
    <span>Acompanha os kits de braços líder-seguidor SO-ARM100 / SO-ARM101 de código aberto.</span>
    <span><strong>As 4 fases publicadas</strong> (capítulos 1–22): fundamentos e hardware, montagem e controle de servos, aprendizado por imitação e dupla braço, GR00T VLA e SenseCraft VLA sem código.</span>
    <span>O curso está completo — os 22 capítulos estão no wiki.</span>
  </div>
</section>

<GitHubStarButton owner="TheRobotStudio" repo="SO-ARM100" />

:::tip
Este curso foi criado e compartilhado gratuitamente pela equipe de AI Robotics da Seeed Studio para oferecer a estudantes de robótica, universitários, quem busca emprego e makers um caminho de aprendizado claro e sistemático. Você é bem-vindo para aprender e compartilhar, mas é proibida a cópia não autorizada, a redistribuição comercial ou o mau uso do conteúdo — os direitos autorais pertencem à Seeed Studio (Shenzhen) Co., Ltd.

Ele gira em torno do <strong>SO-ARM100 / SO-ARM101</strong>, o braço robótico líder-seguidor de código aberto originalmente projetado pela <a href="https://github.com/TheRobotStudio/SO-ARM100" target="_blank" rel="noopener noreferrer">TheRobotStudio</a> e transformado em kits completos pela Seeed Studio, e combina teoria com prática para cobrir controle de braços robóticos, o ecossistema de aprendizado por imitação do LeRobot e a IA incorporada moderna baseada em VLA. O curso é totalmente gratuito — se ele te ajudar, apoie o projeto deixando uma Star no <a href="https://github.com/TheRobotStudio/SO-ARM100" target="_blank" rel="noopener noreferrer">SO-ARM100 no GitHub</a> ⭐, onde também estão os arquivos STL e outros recursos abertos. Usuários experientes podem ir direto ao nosso <a href="https://wiki.seeedstudio.com/pt-br/robotics_page/" target="_blank" rel="noopener noreferrer">Wiki de Robótica</a>. O foco é a compreensão prática em vez de derivações matemáticas profundas. A Fase 2 monta e configura os braços passo a passo; a Fase 3 percorre o ciclo completo do LeRobot — calibração, teleoperação, datasets, treinamento ACT, inferência real — e fecha com um capítulo eletivo de dupla braço; a Fase 4 explica a teoria VLA e a arquitetura do GR00T, ajusta o GR00T com um dataset do SO-ARM e termina com a rota sem código do SenseCraft Robotics para leitores sem GPU de treinamento.
:::

<section id="community" className="section-card">
  <div className="section-title">
    <span>Comunidade</span>
    <h2>Grupos da comunidade</h2>
  </div>

<div style={{display: 'flex', gap: '2.5rem', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap'}}>
  <div className="image-frame" style={{margin: '0.5rem 0'}}>
    <img width={110} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/intro/intro-01.png" alt="QR code do grupo do Facebook" />
    <p style={{margin: '0.35rem 0 0', fontWeight: 700}}>Facebook</p>
  </div>
  <div className="image-frame" style={{margin: '0.5rem 0'}}>
    <img width={110} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/intro/intro-02.png" alt="Logotipo do grupo do Discord" />
    <p style={{margin: '0.35rem 0 0', fontWeight: 700}}>Discord</p>
  </div>
</div>

</section>

<section id="principles" className="section-card">
  <div className="section-title">
    <span>Design</span>
    <h2>Princípios de design do curso</h2>
  </div>

Este curso usa os kits líder-seguidor SO-ARM100 / SO-ARM101 como plataformas práticas, combinando teoria de braços robóticos, teoria de aprendizado em robótica e prática com hardware real. O esboço do curso é o seguinte:

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/Intro_en.png" alt="Esboço do curso" />
</div>

</section>

<section id="structure" className="section-card">
  <div className="section-title">
    <span>Estrutura</span>
    <h2>Estrutura do curso</h2>
  </div>

### Fase 1: Conceitos Básicos e Preparação de Equipamentos

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
  <a className="course-path-item" href="/pt-br/robotics/soarm_physical_ai_course_chapter_1">
    <span className="course-index">1</span>
    <div className="course-path-copy">
      <strong>Conhecendo Robôs e Physical AI</strong>
      <span>Capítulo 1</span>
    </div>
    <span className="course-tag">Teoria</span>
  </a>
  <a className="course-path-item" href="/pt-br/robotics/soarm_physical_ai_course_chapter_2">
    <span className="course-index">2</span>
    <div className="course-path-copy">
      <strong>Conhecendo o hardware do SO-ARM e o projeto de código aberto</strong>
      <span>Capítulo 2</span>
    </div>
    <span className="course-tag">Teoria e prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/robotics/soarm_physical_ai_course_chapter_3">
    <span className="course-index">3</span>
    <div className="course-path-copy">
      <strong>Seleção de hardware para os próximos capítulos</strong>
      <span>Capítulo 3</span>
    </div>
    <span className="course-tag">Teoria e prática</span>
  </a>
</div>

### Fase 2: Montagem do SO-ARM e Controle Básico

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
  <a className="course-path-item" href="/pt-br/robotics/soarm_physical_ai_course_chapter_4">
    <span className="course-index">4</span>
    <div className="course-path-copy">
      <strong>Fundamentos de braços robóticos e servos de barramento</strong>
      <span>Capítulo 4</span>
    </div>
    <span className="course-tag">Teoria</span>
  </a>
  <a className="course-path-item" href="/pt-br/robotics/soarm_physical_ai_course_chapter_5">
    <span className="course-index">5</span>
    <div className="course-path-copy">
      <strong>Configuração do ambiente de software</strong>
      <span>Capítulo 5</span>
    </div>
    <span className="course-tag">Prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/robotics/soarm_physical_ai_course_chapter_6">
    <span className="course-index">6</span>
    <div className="course-path-copy">
      <strong>Configurar motores e montar os braços</strong>
      <span>Capítulo 6</span>
    </div>
    <span className="course-tag">Prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/robotics/soarm_physical_ai_course_chapter_7">
    <span className="course-index">7</span>
    <div className="course-path-copy">
      <strong>Depuração de servos com a ferramenta de ajuste</strong>
      <span>Capítulo 7</span>
    </div>
    <span className="course-tag">Prática</span>
  </a>
</div>

### Fase 3: Aprendizado por Imitação e LeRobot

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
  <a className="course-path-item" href="/pt-br/robotics/soarm_physical_ai_course_chapter_8">
    <span className="course-index">8</span>
    <div className="course-path-copy">
      <strong>Fundamentos de aprendizado em robótica e imitação</strong>
      <span>Capítulo 8</span>
    </div>
    <span className="course-tag">Teoria e prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/robotics/soarm_physical_ai_course_chapter_9">
    <span className="course-index">9</span>
    <div className="course-path-copy">
      <strong>Arquitetura do sistema LeRobot e SO-ARM</strong>
      <span>Capítulo 9</span>
    </div>
    <span className="course-tag">Teoria</span>
  </a>
  <a className="course-path-item" href="/pt-br/robotics/soarm_physical_ai_course_chapter_10">
    <span className="course-index">10</span>
    <div className="course-path-copy">
      <strong>Calibração e teleoperação de líder e seguidor</strong>
      <span>Capítulo 10</span>
    </div>
    <span className="course-tag">Prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/robotics/soarm_physical_ai_course_chapter_11">
    <span className="course-index">11</span>
    <div className="course-path-copy">
      <strong>Datasets de robótica e design de tarefas</strong>
      <span>Capítulo 11</span>
    </div>
    <span className="course-tag">Teoria</span>
  </a>
  <a className="course-path-item" href="/pt-br/robotics/soarm_physical_ai_course_chapter_12">
    <span className="course-index">12</span>
    <div className="course-path-copy">
      <strong>Configuração de câmeras e coleta de dados LeRobot</strong>
      <span>Capítulo 12</span>
    </div>
    <span className="course-tag">Prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/robotics/soarm_physical_ai_course_chapter_13">
    <span className="course-index">13</span>
    <div className="course-path-copy">
      <strong>Estrutura do dataset e inspeção de qualidade</strong>
      <span>Capítulo 13</span>
    </div>
    <span className="course-tag">Teoria e prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/robotics/soarm_physical_ai_course_chapter_14">
    <span className="course-index">14</span>
    <div className="course-path-copy">
      <strong>Modelo ACT e blocos de ação</strong>
      <span>Capítulo 14</span>
    </div>
    <span className="course-tag">Teoria</span>
  </a>
  <a className="course-path-item" href="/pt-br/robotics/soarm_physical_ai_course_chapter_15">
    <span className="course-index">15</span>
    <div className="course-path-copy">
      <strong>Treinando sua primeira política ACT</strong>
      <span>Capítulo 15</span>
    </div>
    <span className="course-tag">Prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/robotics/soarm_physical_ai_course_chapter_16">
    <span className="course-index">16</span>
    <div className="course-path-copy">
      <strong>Inferência real, avaliação e iteração de dados</strong>
      <span>Capítulo 16</span>
    </div>
    <span className="course-tag">Teoria e prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/robotics/soarm_physical_ai_course_chapter_17">
    <span className="course-index">17</span>
    <div className="course-path-copy">
      <strong>Treinamento de dupla braço SO-ARM</strong>
      <span>Capítulo 17</span>
    </div>
    <span className="course-tag">Eletivo</span>
  </a>
</div>

### Fase 4: VLA — Isaac GR00T e SenseCraft sem código

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginBottom: '1.5rem'}}>
  <a className="course-path-item" href="/pt-br/robotics/soarm_physical_ai_course_chapter_18">
    <span className="course-index">18</span>
    <div className="course-path-copy">
      <strong>Aprendizado multimodal e fundamentos de VLA</strong>
      <span>Capítulo 18</span>
    </div>
    <span className="course-tag">Teoria</span>
  </a>
  <a className="course-path-item" href="/pt-br/robotics/soarm_physical_ai_course_chapter_19">
    <span className="course-index">19</span>
    <div className="course-path-copy">
      <strong>Embodiment do robô e arquitetura do GR00T</strong>
      <span>Capítulo 19</span>
    </div>
    <span className="course-tag">Teoria</span>
  </a>
  <a className="course-path-item" href="/pt-br/robotics/soarm_physical_ai_course_chapter_20">
    <span className="course-index">20</span>
    <div className="course-path-copy">
      <strong>Preparando o dataset VLA do SO-ARM</strong>
      <span>Capítulo 20</span>
    </div>
    <span className="course-tag">Prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/robotics/soarm_physical_ai_course_chapter_21">
    <span className="course-index">21</span>
    <div className="course-path-copy">
      <strong>Ajuste fino do SO-ARM com Isaac GR00T</strong>
      <span>Capítulo 21</span>
    </div>
    <span className="course-tag">Prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/robotics/soarm_physical_ai_course_chapter_22">
    <span className="course-index">22</span>
    <div className="course-path-copy">
      <strong>VLA sem código com SenseCraft Robotics</strong>
      <span>Capítulo 22</span>
    </div>
    <span className="course-tag">Prática</span>
  </a>
</div>

</section>

</div>
