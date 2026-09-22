---
description: "Curso para Iniciantes em Inteligência Incorporada da Seeed — um guia gratuito e prático para construir e aprender com o braço robótico reBot 100% open-source. A Fase 1 aborda conceitos básicos, hardware e preparação de equipamentos."
title: Curso para Iniciantes em Inteligência Incorporada da Seeed
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - Braço Robótico
  - Inteligência Incorporada
  - Curso
  - Tutorial
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_embodied_ai_course_introduction
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-17
  author: LiuJunjie
createdAt: '2026-09-17'
updatedAt: '2026-09-17'
url: https://wiki.seeedstudio.com/pt-br/rebot_embodied_ai_course_introduction/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">reBot × Inteligência Incorporada</span>
    <h2>8 Fases, 40 Capítulos — gratuito e prático</h2>
    <p>
      Um guia gratuito e prático para construir e aprender com o braço robótico reBot 100% open-source.
      A Fase 1 aborda conceitos básicos, hardware e preparação de equipamentos.
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
  </div>
</section>

<RebotCourseNav />

<GitHubStarButton owner="Seeed-Projects" repo="reBot-DevArm" />

:::tip
Este curso foi criado e compartilhado gratuitamente pela equipe de Robótica de IA da Seeed Studio, para oferecer a aprendizes de robótica, estudantes, candidatos a emprego e makers um caminho de aprendizagem claro e sistemático. Você é bem-vindo para aprender com ele e compartilhá-lo com outras pessoas, mas é proibida a cópia não autorizada, redistribuição comercial ou uso indevido do conteúdo — os direitos autorais pertencem à Seeed Studio (Shenzhen) Co., Ltd.

Ele é construído em torno do <strong>reBot</strong>, um braço robótico 100% open-source, comercialmente utilizável e reproduzível, e combina teoria com prática para abranger controle de braço robótico, algoritmos tradicionais de robótica e IA incorporada moderna baseada em VLA. O curso é totalmente gratuito — se você achar útil, apoie o projeto dando uma estrela para <a href="https://github.com/Seeed-Projects/reBot-DevArm" target="_blank" rel="noopener noreferrer">reBot-DevArm no GitHub</a> ⭐, onde também estão disponíveis os desenhos de hardware, arquivos de BOM e outros recursos open-source. Usuários experientes podem ir diretamente para a nossa <a href="https://wiki.seeedstudio.com/pt-br/robotics_page/" target="_blank" rel="noopener noreferrer">Robotics Wiki</a> para tutoriais e exemplos. O foco é a compreensão prática em vez de derivações matemáticas profundas, para que você possa construir uma base sólida rapidamente e se preparar para estudos mais avançados.
:::

<section id="community" className="section-card">
  <div className="section-title">
    <span>Comunidade</span>
    <h2>Grupos da Comunidade</h2>
  </div>

<div style={{display: 'flex', gap: '2.5rem', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap'}}>
  <div className="image-frame" style={{margin: '0.5rem 0'}}>
    <img width={110} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/intro/intro-01.png" alt="QR code do grupo do Facebook" />
    <p style={{margin: '0.35rem 0 0', fontWeight: 700}}>Facebook</p>
  </div>
  <div className="image-frame" style={{margin: '0.5rem 0'}}>
    <img width={110} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/intro/intro-02.png" alt="Logo do grupo reBot no Discord" />
    <p style={{margin: '0.35rem 0 0', fontWeight: 700}}>Discord</p>
  </div>
</div>

</section>

<section id="principles" className="section-card">
  <div className="section-title">
    <span>Design</span>
    <h2>Princípios de Design do Curso</h2>
  </div>

Este curso usa o reBot Arm B601-DM e B601-RS como plataformas práticas, combinando teoria de braços robóticos, teoria de aprendizagem em robótica e prática com hardware real. O plano do curso é o seguinte:

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/intro/intro-03.png" alt="Plano do curso" />
</div>

</section>

<section id="structure" className="section-card">
  <div className="section-title">
    <span>Estrutura</span>
    <h2>Estrutura do Curso</h2>
  </div>

### Fase 1: Conceitos Básicos e Preparação de Equipamentos

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
  <a className="course-path-item" href="/pt-br/rebot_embodied_ai_course_chapter_1">
    <span className="course-index">1</span>
    <div className="course-path-copy">
      <strong>Conhecendo Robôs e Inteligência Incorporada</strong>
      <span>Capítulo 1</span>
    </div>
    <span className="course-tag">Teoria</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_embodied_ai_course_chapter_2">
    <span className="course-index">2</span>
    <div className="course-path-copy">
      <strong>Conhecendo o Hardware do reBot Arm e o Projeto Open-Source</strong>
      <span>Capítulo 2</span>
    </div>
    <span className="course-tag">Teoria &amp; Prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_embodied_ai_course_chapter_3">
    <span className="course-index">3</span>
    <div className="course-path-copy">
      <strong>Seleção de Hardware para os Próximos Cursos</strong>
      <span>Capítulo 3</span>
    </div>
    <span className="course-tag">Teoria &amp; Prática</span>
  </a>
</div>

### Fase 2: Montagem do Braço Robótico e Controle Básico

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
  <a className="course-path-item" href="/pt-br/rebot_embodied_ai_course_chapter_4">
    <span className="course-index">4</span>
    <div className="course-path-copy">
      <strong>Fundamentos de Braços Robóticos e Atuadores de Junta</strong>
      <span>Capítulo 4</span>
    </div>
    <span className="course-tag">Teoria</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_embodied_ai_course_chapter_5">
    <span className="course-index">5</span>
    <div className="course-path-copy">
      <strong>Barramento CAN e Comunicação com o Motor</strong>
      <span>Capítulo 5</span>
    </div>
    <span className="course-tag">Teoria</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_embodied_ai_course_chapter_6">
    <span className="course-index">6</span>
    <div className="course-path-copy">
      <strong>Montagem, Fonte de Alimentação e Primeiro Ligar</strong>
      <span>Capítulo 6</span>
    </div>
    <span className="course-tag">Prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_embodied_ai_course_chapter_7">
    <span className="course-index">7</span>
    <div className="course-path-copy">
      <strong>Biblioteca de Controle de Motor MotorBridge</strong>
      <span>Capítulo 7</span>
    </div>
    <span className="course-tag">Prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_embodied_ai_course_chapter_8">
    <span className="course-index">8</span>
    <div className="course-path-copy">
      <strong>Controlando o reBot Arm Usando o Python SDK</strong>
      <span>Capítulo 8</span>
    </div>
    <span className="course-tag">Teoria &amp; Prática</span>
  </a>
</div>

### Fase 3: Aprendizado por Imitação e LeRobot

<div className="course-path-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
  <a className="course-path-item" href="/pt-br/rebot_embodied_ai_course_chapter_9">
    <span className="course-index">9</span>
    <div className="course-path-copy">
      <strong>Fundamentos de Aprendizado de Robôs e Aprendizado por Imitação</strong>
      <span>Capítulo 9</span>
    </div>
    <span className="course-tag">Teoria &amp; Prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_embodied_ai_course_chapter_10">
    <span className="course-index">10</span>
    <div className="course-path-copy">
      <strong>Arquitetura de Sistema do LeRobot e do reBot Arm</strong>
      <span>Capítulo 10</span>
    </div>
    <span className="course-tag">Teoria</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_embodied_ai_course_chapter_11">
    <span className="course-index">11</span>
    <div className="course-path-copy">
      <strong>Calibração de Líder e Seguidor e Teleoperação</strong>
      <span>Capítulo 11</span>
    </div>
    <span className="course-tag">Prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_embodied_ai_course_chapter_12">
    <span className="course-index">12</span>
    <div className="course-path-copy">
      <strong>Conjuntos de Dados de Robôs e Design de Tarefas</strong>
      <span>Capítulo 12</span>
    </div>
    <span className="course-tag">Teoria</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_embodied_ai_course_chapter_13">
    <span className="course-index">13</span>
    <div className="course-path-copy">
      <strong>Configuração de Câmera e Coleta de Dados com LeRobot</strong>
      <span>Capítulo 13</span>
    </div>
    <span className="course-tag">Prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_embodied_ai_course_chapter_14">
    <span className="course-index">14</span>
    <div className="course-path-copy">
      <strong>Estrutura de Conjunto de Dados e Inspeção de Qualidade</strong>
      <span>Capítulo 14</span>
    </div>
    <span className="course-tag">Teoria &amp; Prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_embodied_ai_course_chapter_15">
    <span className="course-index">15</span>
    <div className="course-path-copy">
      <strong>Modelo ACT e Segmentação de Ações</strong>
      <span>Capítulo 15</span>
    </div>
    <span className="course-tag">Teoria</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_embodied_ai_course_chapter_16">
    <span className="course-index">16</span>
    <div className="course-path-copy">
      <strong>Treinando Sua Primeira Política ACT</strong>
      <span>Capítulo 16</span>
    </div>
    <span className="course-tag">Prática</span>
  </a>
  <a className="course-path-item" href="/pt-br/rebot_embodied_ai_course_chapter_17">
    <span className="course-index">17</span>
    <div className="course-path-copy">
      <strong>Inferência em Robô Real, Avaliação e Iteração de Dados</strong>
      <span>Capítulo 17</span>
    </div>
    <span className="course-tag">Teoria &amp; Prática</span>
  </a>
</div>

### Estágio 4–8

:::note
Em breve — os estágios restantes serão adicionados ao wiki progressivamente.
:::

</section>

</div>
