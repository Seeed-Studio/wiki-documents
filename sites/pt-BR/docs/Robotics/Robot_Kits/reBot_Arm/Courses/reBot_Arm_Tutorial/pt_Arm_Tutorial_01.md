---
description: "Capítulo 1 do Curso para Iniciantes em Inteligência Incorporada da Seeed — entenda o que são robôs e braços robóticos, graus de liberdade e a diferença entre controle tradicional, aprendizado por imitação e VLA."
title: Capítulo 1 - Robôs e Inteligência Incorporada
keywords:
  - reBot
  - Robotic Arm
  - Robot
  - Embodied Intelligence
  - DOF
  - Imitation Learning
  - VLA
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_embodied_ai_course_chapter_1
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-17
  author: LiuJunjie
createdAt: '2026-09-17'
updatedAt: '2026-09-17'
url: https://wiki.seeedstudio.com/pt-br/rebot_embodied_ai_course_chapter_1/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Estágio 1 · Capítulo 1 · Teoria</span>
    <h2>1. Conhecendo Robôs e Inteligência Incorporada</h2>
    <p>
      Capítulo 1 do Curso para Iniciantes em Inteligência Incorporada da Seeed — entenda o que são robôs e
      braços robóticos, graus de liberdade e a diferença entre controle tradicional, aprendizado por imitação
      e VLA.
    </p>
    <div className="hero-actions">
      <a href="#objectives">Objetivos de aprendizagem</a>
      <a href="#paradigms">Paradigmas de controle</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Neste capítulo</strong>
    <span>1.1 Objetivos de Aprendizagem</span>
    <span>1.2 O que é um Robô?</span>
    <span>1.3 O que é um Braço Robótico?</span>
    <span>1.4 Controle Tradicional, Aprendizado por Imitação e VLA</span>
    <span>1.5 O Papel do reBot Arm no Curso</span>
  </div>
</section>

<RebotCourseNav />

## 1.1 Objetivos de Aprendizagem

<section id="objectives" className="section-card">
  <div className="section-title">
    <span>Objetivos</span>
    <h2>1.1 Objetivos de Aprendizagem</h2>
  </div>

Após concluir este capítulo, você deverá ser capaz de:

1. Explicar os conceitos básicos de robôs e braços robóticos.
2. Identificar juntas, elos, graus de liberdade e efetuadores finais em um braço robótico.
3. Entender percepção, tomada de decisão e controle em um sistema robótico.
4. Distinguir entre braços robóticos industriais e braços robóticos de inteligência incorporada.
5. Distinguir entre controle tradicional por programa, aprendizado por imitação e VLA.
6. Descrever a composição de um sistema completo de braço robótico com inteligência incorporada.
7. Entender o papel do reBot Arm em todo o sistema de inteligência incorporada.

</section>

## 1.2 O que é um Robô?

<section id="robot" className="section-card">
  <div className="section-title">
    <span>Fundamentos</span>
    <h2>1.2 O que é um Robô?</h2>
  </div>

Um robô não é apenas uma máquina que se parece com um humano. Do ponto de vista funcional, um robô é um sistema que pode:

- Adquirir informações sobre si mesmo ou sobre o ambiente;
- Realizar computação ou tomada de decisão com base em objetivos;
- Mudar seu próprio estado ou o ambiente ao redor por meio de atuadores.

Um sistema robótico geralmente pode ser abstraído como:

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={500} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-01.png" alt="Abstração de sistema robótico" />
</div>

Por exemplo, um robô de mesa para preensão precisa completar o seguinte processo:

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={560} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-02.png" alt="Processo de robô de mesa para preensão" />
</div>

Portanto, um robô não precisa apenas “ser capaz de se mover”, mas também deve ser capaz de formar um laço fechado em execução contínua.

### A Diferença entre Robôs e Máquinas Comuns

Máquinas comuns geralmente trabalham de forma fixa. Por exemplo:

- Um ventilador elétrico continua girando após ser ligado;
- Uma esteira transportadora funciona a uma velocidade fixa;
- Um motor comum gira após receber tensão.

Robôs, por outro lado, normalmente têm capacidades mais fortes de percepção de estado, controle por programa e execução de tarefas. Por exemplo, um braço robótico pode controlar múltiplas juntas para se mover para diferentes posturas com base em diferentes posições-alvo.

</section>

## 1.3 O que é um Braço Robótico?

<section id="arm" className="section-card">
  <div className="section-title">
    <span>Fundamentos</span>
    <h2>1.3 O que é um Braço Robótico?</h2>
  </div>

Um braço robótico é um mecanismo robótico composto por múltiplas juntas e elos. Por meio do movimento coordenado de várias juntas, ele leva o efetuador final a uma posição e postura especificadas e conclui tarefas como preensão, manuseio, montagem, polimento e soldagem.

Um braço robótico pode ser entendido de forma simples como:

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={560} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-03.png" alt="Braço robótico" />
</div>

Braços robóticos compartilham algumas semelhanças com braços humanos. No entanto, um braço robótico não precisa necessariamente imitar a anatomia humana. Seu número de juntas, arranjo e espaço de trabalho são projetados de acordo com os requisitos da tarefa.

### O que são Graus de Liberdade

Graus de liberdade são comumente indicados como DOF (Degree of Freedom). DOF descreve o número de direções independentes nas quais um sistema mecânico pode se mover.

No espaço tridimensional, a pose completa de um corpo rígido inclui:

- Translação ao longo dos eixos X, Y e Z;
- Rotação em torno dos eixos X, Y e Z.

Portanto, um objeto no espaço 3D tem no máximo 6 graus de liberdade.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={560} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-04.png" alt="6 graus de liberdade" />
</div>

Um braço robótico de seis graus de liberdade geralmente pode controlar a posição e a postura do efetuador final no espaço 3D.

Deve-se notar que:

:::note
Seis graus de liberdade não significam que o braço robótico tenha apenas seis motores, nem que todas as posições e posturas possam necessariamente ser alcançadas.
:::

Um braço robótico também é afetado por fatores como comprimentos dos elos, limites das juntas, singularidades e colisões.

</section>

## 1.4 Controle Tradicional, Aprendizado por Imitação e VLA

<section id="paradigms" className="section-card">
  <div className="section-title">
    <span>Paradigmas</span>
    <h2>1.4 Controle Tradicional, Aprendizado por Imitação e VLA</h2>
  </div>

Um braço robótico pode obter ações por meio de diferentes métodos.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1.5rem', margin: '1.25rem 0 1.5rem'}}>
  <div>
    <h4 style={{margin: '0 0 0.25rem'}}>Controle Tradicional por Programa</h4>
    <div className="image-frame" style={{margin: '0.5rem 0'}}>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-05.png" alt="Controle tradicional por programa" />
    </div>
    <p>Indicado para posições fixas, fluxos de trabalho fixos e tarefas repetitivas.</p>
  </div>

  <div>
    <h4 style={{margin: '0 0 0.25rem'}}>Aprendizado por Imitação</h4>
    <div className="image-frame" style={{margin: '0.5rem 0'}}>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-06.png" alt="Aprendizado por imitação" />
    </div>
    <p>Uma pessoa primeiro teleopera o braço robótico para completar uma tarefa, e então um modelo aprende a partir dos dados de demonstração. Indicado para tarefas de preensão, organização e operação contínua.</p>
  </div>

  <div>
    <h4 style={{margin: '0 0 0.25rem'}}>VLA</h4>
    <div className="image-frame" style={{margin: '0.5rem 0'}}>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-07.png" alt="VLA" />
    </div>
    <p>VLA usa informações de visão, linguagem e ação para permitir que o braço robótico conclua tarefas com base em linguagem natural.</p>
  </div>
</div>

Por exemplo:

:::note
Coloque o bloco vermelho da esquerda dentro da caixa.
:::

</section>

## 1.5 O Papel do reBot Arm no Curso

<section id="role" className="section-card">
  <div className="section-title">
    <span>Plataforma prática</span>
    <h2>1.5 O Papel do reBot Arm no Curso</h2>
  </div>

reBot Arm é a plataforma prática unificada para todo o curso. Mais adiante, iremos usá-lo para concluir:

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={560} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-08.png" alt="O papel do reBot Arm" />
</div>

</section>

</div>
