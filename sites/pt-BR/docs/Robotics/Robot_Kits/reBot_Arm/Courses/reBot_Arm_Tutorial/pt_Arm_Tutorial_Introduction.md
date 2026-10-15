---
description: "Curso para Iniciantes em IA Física da Seeed — um guia gratuito e prático para construir e aprender com o braço robótico reBot 100% open-source. Todos os oito estágios e 39 capítulos foram publicados, cobrindo configuração e controle básico, aprendizado por imitação com LeRobot, VLA com Isaac GR00T, matemática e controle de movimento de braço robótico, visão de robôs com preensão autônoma, integração de sistemas de robôs com ROS2 e simulação de braço robótico em MuJoCo e Isaac Sim."
title: Curso para Iniciantes em IA Física da Seeed
hide_title: true
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - Braço Robótico
  - IA Física
  - Curso
  - Tutorial
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_introduction
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: ZhuYaoHui
createdAt: '2026-09-17'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/pt-br/rebot_physical_ai_course_introduction/
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">reBot × IA Física · Todos os 8 estágios publicados</span>
    <h2>8 estágios, 39 capítulos — gratuito e prático</h2>
    <p>
      Um guia gratuito e prático para construir e aprender com o braço robótico reBot 100% open-source.
      Os capítulos publicados levam você dos conceitos básicos, montagem e controle de motores, passando por
      aprendizado por imitação com LeRobot e VLA com Isaac GR00T, até a matemática de braço robótico e
      o controle de movimento por trás de tudo — e em seguida para visão de robôs, preensão autônoma, integração de sistemas de robôs com ROS2
      e simulação.
    </p>
    <div className="hero-actions">
      <a href="#structure">Estrutura do curso</a>
      <a href="#principles">Projeto do curso</a>
      <a href="#community">Comunidade</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Visão geral do curso</strong>
    <span>Escrito e compartilhado gratuitamente pela equipe de robótica da Seeed.</span>
    <span>Emparelha com o braço robótico reBot 100% open-source e reproduzível.</span>
    <span><strong>Todos os 8 estágios publicados</strong> (Capítulos 1–39): fundamentos e hardware, montagem e controle, aprendizado por imitação, VLA, matemática e controle de movimento, visão de robôs e preensão, integração de sistemas com ROS2 e simulação em MuJoCo / Isaac Sim.</span>
    <span>O curso está completo — todos os 39 capítulos estão na wiki.</span>
  </div>
</section>

<GitHubStarButton owner="Seeed-Projects" repo="reBot-DevArm" />

:::tip
Este curso foi criado e compartilhado gratuitamente pela equipe de Robótica em IA da Seeed Studio, para oferecer a estudantes de robótica, alunos, candidatos a emprego e makers um caminho de aprendizado claro e sistemático. Você é bem-vindo para aprender com ele e compartilhá-lo com outras pessoas, mas é proibida a cópia não autorizada, redistribuição comercial ou uso indevido do conteúdo — os direitos autorais pertencem à Seeed Studio (Shenzhen) Co., Ltd.

Ele é construído em torno do <strong>reBot</strong>, um braço robótico 100% open-source, comercialmente utilizável e reproduzível, e combina teoria com prática para cobrir controle de braço robótico, algoritmos tradicionais de robótica e IA incorporada moderna baseada em VLA. O curso é totalmente gratuito — se você achar útil, apoie o projeto dando uma estrela para <a href="https://github.com/Seeed-Projects/reBot-DevArm" target="_blank" rel="noopener noreferrer">reBot-DevArm no GitHub</a> ⭐, onde também estão disponíveis os desenhos de hardware, arquivos de BOM e outros recursos open-source. Usuários experientes podem ir direto para a nossa <a href="https://wiki.seeedstudio.com/pt-br/robotics_page/" target="_blank" rel="noopener noreferrer">Robotics Wiki</a> para tutoriais e exemplos. O foco é a compreensão prática em vez de derivações matemáticas profundas, para que você possa construir uma base sólida rapidamente e se preparar para estudos mais avançados. O Estágio 5 apresenta as bases matemáticas — referenciais de coordenadas, cinemática, Jacobiano e planejamento de trajetória — mas é escrito como material de referência que você pode ler uma vez e depois consultar enquanto trabalha no capítulo prático. O Estágio 6 segue o mesmo padrão: os Capítulos 27 e 28 são teoria de visão, e o Capítulo 29 é a prática de preensão visual. O Estágio 7 faz o mesmo novamente — os Capítulos 31 e 32 tratam dos conceitos de ROS2, e os Capítulos 33 e 34 colocam o braço em um sistema ROS2 real. O Estágio 8 encerra o curso colocando o braço dentro de um computador: o Capítulo 35 é teoria de simulação, os Capítulos 36 e 37 executam o braço no MuJoCo, o Capítulo 38 o constrói no Isaac Sim, e o Capítulo 39 sincroniza o braço real com a simulação.
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
    <h2>Princípios de Projeto do Curso</h2>
  </div>

Este curso usa o reBot Arm B601-DM e B601-RS como plataformas práticas, combinando teoria de braço robótico, teoria de aprendizado em robótica e prática com hardware real. O plano do curso é o seguinte:

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
      <strong>Biblioteca de Controle de Motor MotorBridge</strong>
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
      <strong>Fundamentos de Aprendizado de Robôs e Aprendizado por Imitação</strong>
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
      <strong>Conjuntos de Dados de Robôs e Projeto de Tarefas</strong>
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
      <strong>Estrutura do Conjunto de Dados e Inspeção de Qualidade</strong>
      <span>Capítulo 14</span>
    </div>
    <span className="course-tag">Teoria &amp; Prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_15">
    <span className="course-index">15</span>
    <div className="course-path-copy">
      <strong>Modelo ACT e Segmentação de Ações</strong>
      <span>Capítulo 15</span>
    </div>
    <span className="course-tag">Teoria</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_16">
    <span className="course-index">16</span>
    <div className="course-path-copy">
      <strong>Treinando Sua Primeira Política ACT</strong>
      <span>Capítulo 16</span>
    </div>
    <span className="course-tag">Prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_17">
    <span className="course-index">17</span>
    <div className="course-path-copy">
      <strong>Inferência em Robô Real, Avaliação e Iteração de Dados</strong>
      <span>Capítulo 17</span>
    </div>
    <span className="course-tag">Teoria &amp; Prática</span>
  </a>
</div>

### Estágio 4: VLA e Isaac GR00T

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_18">
    <span className="course-index">18</span>
    <div className="course-path-copy">
      <strong>Aprendizado Multimodal e Noções Básicas de VLA</strong>
      <span>Capítulo 18</span>
    </div>
    <span className="course-tag">Teoria</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_19">
    <span className="course-index">19</span>
    <div className="course-path-copy">
      <strong>Incorporação Robótica e Arquitetura do Sistema GR00T</strong>
      <span>Capítulo 19</span>
    </div>
    <span className="course-tag">Teoria</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_20">
    <span className="course-index">20</span>
    <div className="course-path-copy">
      <strong>Preparando o Conjunto de Dados VLA do reBot</strong>
      <span>Capítulo 20</span>
    </div>
    <span className="course-tag">Prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_21">
    <span className="course-index">21</span>
    <div className="course-path-copy">
      <strong>Ajuste Fino do Braço reBot com Isaac GR00T</strong>
      <span>Capítulo 21</span>
    </div>
    <span className="course-tag">Prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_22">
    <span className="course-index">22</span>
    <div className="course-path-copy">
      <strong>Inferência GR00T e Implantação em Robô Real</strong>
      <span>Capítulo 22</span>
    </div>
    <span className="course-tag">Teoria &amp; Prática</span>
  </a>
</div>

### Estágio 5: Matemática de Braços Robóticos e Controle de Movimento

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginBottom: '1.5rem'}}>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_23">
    <span className="course-index">23</span>
    <div className="course-path-copy">
      <strong>Fundamentos Matemáticos de Braços Robóticos e Sistemas de Coordenadas</strong>
      <span>Capítulo 23</span>
    </div>
    <span className="course-tag">Teoria</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_24">
    <span className="course-index">24</span>
    <div className="course-path-copy">
      <strong>Cinemática Direta, Cinemática Inversa e o Jacobiano</strong>
      <span>Capítulo 24</span>
    </div>
    <span className="course-tag">Teoria</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_25">
    <span className="course-index">25</span>
    <div className="course-path-copy">
      <strong>Planejamento de Trajetória e Controle de Braços Robóticos</strong>
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

### Estágio 6: Visão Robótica e Pega Autônoma

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginBottom: '1.5rem'}}>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_27">
    <span className="course-index">27</span>
    <div className="course-path-copy">
      <strong>Visão Robótica e Percepção 3D</strong>
      <span>Capítulo 27</span>
    </div>
    <span className="course-tag">Teoria</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_28">
    <span className="course-index">28</span>
    <div className="course-path-copy">
      <strong>Detecção de Objetos e Calibração Mão-Olho</strong>
      <span>Capítulo 28</span>
    </div>
    <span className="course-tag">Teoria</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_29">
    <span className="course-index">29</span>
    <div className="course-path-copy">
      <strong>Pega Visual Autônoma com o Braço reBot</strong>
      <span>Capítulo 29</span>
    </div>
    <span className="course-tag">Prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_30">
    <span className="course-index">30</span>
    <div className="course-path-copy">
      <strong>Voz e Interação Multimodal</strong>
      <span>Capítulo 30</span>
    </div>
    <span className="course-tag">Eletiva</span>
  </a>
</div>

### Estágio 7: ROS2 e Integração de Sistemas Robóticos

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginBottom: '1.5rem'}}>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_31">
    <span className="course-index">31</span>
    <div className="course-path-copy">
      <strong>Comunicação ROS2 e Arquitetura de Software Robótico</strong>
      <span>Capítulo 31</span>
    </div>
    <span className="course-tag">Teoria</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_32">
    <span className="course-index">32</span>
    <div className="course-path-copy">
      <strong>URDF, TF e Modelos de Robôs</strong>
      <span>Capítulo 32</span>
    </div>
    <span className="course-tag">Teoria</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_33">
    <span className="course-index">33</span>
    <div className="course-path-copy">
      <strong>Integração ROS2 com o Braço reBot</strong>
      <span>Capítulo 33</span>
    </div>
    <span className="course-tag">Prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_34">
    <span className="course-index">34</span>
    <div className="course-path-copy">
      <strong>Planejamento de Movimento com MoveIt2</strong>
      <span>Capítulo 34</span>
    </div>
    <span className="course-tag">Teoria &amp; Prática</span>
  </a>
</div>

### Estágio 8: Simulação de Braços Robóticos com MuJoCo e Isaac Sim

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginBottom: '1.5rem'}}>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_35">
    <span className="course-index">35</span>
    <div className="course-path-copy">
      <strong>Noções Básicas de Simulação Robótica e Introdução à Plataforma</strong>
      <span>Capítulo 35</span>
    </div>
    <span className="course-tag">Teoria</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_36">
    <span className="course-index">36</span>
    <div className="course-path-copy">
      <strong>Executando o Braço reBot no MuJoCo</strong>
      <span>Capítulo 36</span>
    </div>
    <span className="course-tag">Prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_37">
    <span className="course-index">37</span>
    <div className="course-path-copy">
      <strong>Cinemática e Controle de Trajetória no MuJoCo</strong>
      <span>Capítulo 37</span>
    </div>
    <span className="course-tag">Teoria &amp; Prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_38">
    <span className="course-index">38</span>
    <div className="course-path-copy">
      <strong>Executando o Braço reBot no Isaac Sim</strong>
      <span>Capítulo 38</span>
    </div>
    <span className="course-tag">Prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_physical_ai_course_chapter_39">
    <span className="course-index">39</span>
    <div className="course-path-copy">
      <strong>Sincronizando os Braços Real e Simulado</strong>
      <span>Capítulo 39</span>
    </div>
    <span className="course-tag">Prática</span>
  </a>
</div>

</section>

</div>
