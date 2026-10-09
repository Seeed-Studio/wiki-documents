---
description: "Curso para Iniciantes em IA Física da Seeed — um guia prático e gratuito para construir e aprender com o braço robótico reBot 100% open-source. Seis estágios e 30 capítulos foram publicados, cobrindo configuração e controle básico, aprendizado por imitação com LeRobot, VLA com Isaac GR00T, matemática e controle de movimento de braços robóticos e visão robótica com apreensão autônoma."
title: Curso para Iniciantes em IA Física da Seeed
hide_title: true
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - Robotic Arm
  - Physical AI
  - Course
  - Tutorial
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_introduction
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-08
  author: ZhuYaoHui
createdAt: '2026-09-17'
updatedAt: '2026-10-08'
url: https://wiki.seeedstudio.com/pt-br/rebot_physical_ai_course_introduction/
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">reBot × IA Física · 6 estágios publicados</span>
    <h2>6 estágios, 30 capítulos — gratuito e prático</h2>
    <p>
      Um guia gratuito e prático para construir e aprender com o braço robótico reBot 100% open-source.
      Os capítulos publicados levam você desde conceitos básicos, montagem e controle de motores, passando por
      aprendizado por imitação com LeRobot e VLA com Isaac GR00T, até a matemática de braços robóticos e
      o controle de movimento por trás de tudo — e depois para visão robótica e apreensão autônoma.
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
    <span>Compatível com o braço robótico reBot 100% open-source e reproduzível.</span>
    <span><strong>Estágios 1–6 publicados</strong> (Capítulos 1–30): fundamentos e hardware, montagem e controle, aprendizado por imitação, VLA, matemática e controle de movimento, e visão robótica e apreensão.</span>
    <span>Os estágios 7–8 (integração com ROS2 e simulação) estão a caminho.</span>
  </div>
</section>

<GitHubStarButton owner="Seeed-Projects" repo="reBot-DevArm" />

:::tip
Este curso foi criado e compartilhado gratuitamente pela equipe de IA em Robótica da Seeed Studio, para oferecer a estudantes de robótica, alunos, candidatos a emprego e makers um caminho de aprendizado claro e sistemático. Você é bem-vindo para aprender com ele e compartilhá-lo com outras pessoas, mas é proibida a cópia não autorizada, redistribuição comercial ou uso indevido do conteúdo — os direitos autorais pertencem à Seeed Studio (Shenzhen) Co., Ltd.

Ele é construído em torno do <strong>reBot</strong>, um braço robótico 100% open-source, comercialmente utilizável e reproduzível, e combina teoria com prática para cobrir controle de braços robóticos, algoritmos tradicionais de robótica e IA incorporada moderna baseada em VLA. O curso é totalmente gratuito — se você achar útil, apoie o projeto dando uma estrela para o <a href="https://github.com/Seeed-Projects/reBot-DevArm" target="_blank" rel="noopener noreferrer">reBot-DevArm no GitHub</a> ⭐, onde também estão disponíveis os desenhos de hardware, arquivos de BOM e outros recursos open-source. Usuários experientes podem ir direto para a nossa <a href="https://wiki.seeedstudio.com/pt-br/robotics_page/" target="_blank" rel="noopener noreferrer">Robotics Wiki</a> para tutoriais e exemplos. O foco é a compreensão prática em vez de derivações matemáticas profundas, para que você possa construir uma base sólida rapidamente e se preparar para estudos mais avançados. O Estágio 5 apresenta os fundamentos matemáticos — referenciais de coordenadas, cinemática, Jacobiano e planejamento de trajetória — mas é escrito como material de referência que você pode ler uma vez e depois consultar enquanto trabalha no capítulo prático. O Estágio 6 segue o mesmo padrão: os Capítulos 27 e 28 tratam da teoria de visão, e o Capítulo 29 é a prática de apreensão visual.
:::

<section id="community" className="section-card">
  <div className="section-title">
    <span>Comunidade</span>
    <h2>Grupos da Comunidade</h2>
  </div>

<div style={{display: 'flex', gap: '2.5rem', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap'}}>
  <div className="image-frame" style={{margin: '0.5rem 0'}}>
    <img width={110} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/intro/intro-01.png" alt="Facebook group QR code" />
    <p style={{margin: '0.35rem 0 0', fontWeight: 700}}>Facebook</p>
  </div>
  <div className="image-frame" style={{margin: '0.5rem 0'}}>
    <img width={110} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/intro/intro-02.png" alt="Discord reBot group logo" />
    <p style={{margin: '0.35rem 0 0', fontWeight: 700}}>Discord</p>
  </div>
</div>

</section>

<section id="principles" className="section-card">
  <div className="section-title">
    <span>Design</span>
    <h2>Princípios de Design do Curso</h2>
  </div>

Este curso usa o reBot Arm B601-DM e B601-RS como plataformas práticas, combinando teoria de braços robóticos, teoria de aprendizado em robótica e prática com hardware real. O plano do curso é o seguinte:

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/intro/intro-03.png" alt="Course outline" />
</div>

</section>

<section id="structure" className="section-card">
  <div className="section-title">
    <span>Estrutura</span>
    <h2>Estrutura do Curso</h2>
  </div>

### Estágio 1: Conceitos Básicos e Preparação de Equipamentos

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_1">
    <span className="course-index">1</span>
    <div className="course-path-copy">
      <strong>Conhecendo Robôs e IA Física</strong>
      <span>Capítulo 1</span>
    </div>
    <span className="course-tag">Teoria</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_2">
    <span className="course-index">2</span>
    <div className="course-path-copy">
      <strong>Conhecendo o Hardware do reBot Arm e o Projeto Open-Source</strong>
      <span>Capítulo 2</span>
    </div>
    <span className="course-tag">Teoria &amp; Prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_3">
    <span className="course-index">3</span>
    <div className="course-path-copy">
      <strong>Seleção de Hardware para os Próximos Cursos</strong>
      <span>Capítulo 3</span>
    </div>
    <span className="course-tag">Teoria &amp; Prática</span>
  </a>
</div>

### Estágio 2: Montagem do Braço Robótico e Controle Básico

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_4">
    <span className="course-index">4</span>
    <div className="course-path-copy">
      <strong>Fundamentos de Braços Robóticos e Atuadores de Junta</strong>
      <span>Capítulo 4</span>
    </div>
    <span className="course-tag">Teoria</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_5">
    <span className="course-index">5</span>
    <div className="course-path-copy">
      <strong>Barramento CAN e Comunicação com Motores</strong>
      <span>Capítulo 5</span>
    </div>
    <span className="course-tag">Teoria</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_6">
    <span className="course-index">6</span>
    <div className="course-path-copy">
      <strong>Montagem, Fonte de Alimentação e Primeiro Ligar</strong>
      <span>Capítulo 6</span>
    </div>
    <span className="course-tag">Prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_7">
    <span className="course-index">7</span>
    <div className="course-path-copy">
      <strong>Biblioteca de Controle de Motores MotorBridge</strong>
      <span>Capítulo 7</span>
    </div>
    <span className="course-tag">Prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_8">
    <span className="course-index">8</span>
    <div className="course-path-copy">
      <strong>Controlando o reBot Arm Usando o SDK em Python</strong>
      <span>Capítulo 8</span>
    </div>
    <span className="course-tag">Teoria &amp; Prática</span>
  </a>
</div>

### Estágio 3: Aprendizado por Imitação e LeRobot

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_9">
    <span className="course-index">9</span>
    <div className="course-path-copy">
      <strong>Fundamentos de Aprendizado em Robótica e Aprendizado por Imitação</strong>
      <span>Capítulo 9</span>
    </div>
    <span className="course-tag">Teoria &amp; Prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_10">
    <span className="course-index">10</span>
    <div className="course-path-copy">
      <strong>Arquitetura de Sistema do LeRobot e do reBot Arm</strong>
      <span>Capítulo 10</span>
    </div>
    <span className="course-tag">Teoria</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_11">
    <span className="course-index">11</span>
    <div className="course-path-copy">
      <strong>Calibração de Líder e Seguidor e Teleoperação</strong>
      <span>Capítulo 11</span>
    </div>
    <span className="course-tag">Prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_12">
    <span className="course-index">12</span>
    <div className="course-path-copy">
      <strong>Conjuntos de Dados Robóticos e Design de Tarefas</strong>
      <span>Capítulo 12</span>
    </div>
    <span className="course-tag">Teoria</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_13">
    <span className="course-index">13</span>
    <div className="course-path-copy">
      <strong>Configuração de Câmera e Coleta de Dados com LeRobot</strong>
      <span>Capítulo 13</span>
    </div>
    <span className="course-tag">Prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_14">
    <span className="course-index">14</span>
    <div className="course-path-copy">
      <strong>Estrutura de Conjuntos de Dados e Inspeção de Qualidade</strong>
      <span>Capítulo 14</span>
    </div>
    <span className="course-tag">Teoria &amp; Prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_15">
    <span className="course-index">15</span>
    <div className="course-path-copy">
      <strong>Modelo ACT e segmentação de ações</strong>
      <span>Capítulo 15</span>
    </div>
    <span className="course-tag">Teoria</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_16">
    <span className="course-index">16</span>
    <div className="course-path-copy">
      <strong>Treinando sua primeira política ACT</strong>
      <span>Capítulo 16</span>
    </div>
    <span className="course-tag">Prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_17">
    <span className="course-index">17</span>
    <div className="course-path-copy">
      <strong>Inferência em robô real, avaliação e iteração de dados</strong>
      <span>Capítulo 17</span>
    </div>
    <span className="course-tag">Teoria &amp; prática</span>
  </a>
</div>

### Estágio 4: VLA e Isaac GR00T

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_18">
    <span className="course-index">18</span>
    <div className="course-path-copy">
      <strong>Aprendizado multimodal e noções básicas de VLA</strong>
      <span>Capítulo 18</span>
    </div>
    <span className="course-tag">Teoria</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_19">
    <span className="course-index">19</span>
    <div className="course-path-copy">
      <strong>Incorporação robótica e arquitetura do sistema GR00T</strong>
      <span>Capítulo 19</span>
    </div>
    <span className="course-tag">Teoria</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_20">
    <span className="course-index">20</span>
    <div className="course-path-copy">
      <strong>Preparando o conjunto de dados VLA do reBot</strong>
      <span>Capítulo 20</span>
    </div>
    <span className="course-tag">Prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_21">
    <span className="course-index">21</span>
    <div className="course-path-copy">
      <strong>Ajuste fino do braço reBot com Isaac GR00T</strong>
      <span>Capítulo 21</span>
    </div>
    <span className="course-tag">Prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_22">
    <span className="course-index">22</span>
    <div className="course-path-copy">
      <strong>Inferência GR00T e implantação em robô real</strong>
      <span>Capítulo 22</span>
    </div>
    <span className="course-tag">Teoria &amp; prática</span>
  </a>
</div>

### Estágio 5: Matemática de braço robótico e controle de movimento

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginBottom: '1.5rem'}}>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_23">
    <span className="course-index">23</span>
    <div className="course-path-copy">
      <strong>Fundamentos matemáticos de braço robótico e sistemas de coordenadas</strong>
      <span>Capítulo 23</span>
    </div>
    <span className="course-tag">Teoria</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_24">
    <span className="course-index">24</span>
    <div className="course-path-copy">
      <strong>Cinemática direta, cinemática inversa e o Jacobiano</strong>
      <span>Capítulo 24</span>
    </div>
    <span className="course-tag">Teoria</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_25">
    <span className="course-index">25</span>
    <div className="course-path-copy">
      <strong>Planejamento de trajetória e controle de braço robótico</strong>
      <span>Capítulo 25</span>
    </div>
    <span className="course-tag">Teoria</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_26">
    <span className="course-index">26</span>
    <div className="course-path-copy">
      <strong>Pinocchio e MeshCat</strong>
      <span>Capítulo 26</span>
    </div>
    <span className="course-tag">Prática</span>
  </a>
</div>

### Estágio 6: Visão robótica e preensão autônoma

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginBottom: '1.5rem'}}>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_27">
    <span className="course-index">27</span>
    <div className="course-path-copy">
      <strong>Visão robótica e percepção 3D</strong>
      <span>Capítulo 27</span>
    </div>
    <span className="course-tag">Teoria</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_28">
    <span className="course-index">28</span>
    <div className="course-path-copy">
      <strong>Detecção de objetos e calibração mão-olho</strong>
      <span>Capítulo 28</span>
    </div>
    <span className="course-tag">Teoria</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_29">
    <span className="course-index">29</span>
    <div className="course-path-copy">
      <strong>Preensão visual autônoma com o braço reBot</strong>
      <span>Capítulo 29</span>
    </div>
    <span className="course-tag">Prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_30">
    <span className="course-index">30</span>
    <div className="course-path-copy">
      <strong>Interação por voz e multimodal</strong>
      <span>Capítulo 30</span>
    </div>
    <span className="course-tag">Eletiva</span>
  </a>
</div>

### Estágio 7–8

:::note
Em breve — ROS2 e integração de sistemas robóticos (Estágio 7) e simulação MuJoCo / Isaac Sim (Estágio 8) serão adicionados progressivamente ao wiki.
:::

</section>

</div>
