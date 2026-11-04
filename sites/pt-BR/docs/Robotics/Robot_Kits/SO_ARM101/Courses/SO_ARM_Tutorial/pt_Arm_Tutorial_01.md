---
description: "Capítulo 1 do curso para iniciantes em SO-ARM Physical AI — entenda o que são robôs e braços robóticos, graus de liberdade, e a diferença entre controle tradicional, aprendizado por imitação e VLA."
title: Capítulo 1 - Robôs e Physical AI
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - braço robótico
  - robô
  - Physical AI
  - DOF
  - aprendizado por imitação
  - VLA
  - curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_1
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/pt-br/robotics/soarm_physical_ai_course_chapter_1/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Fase 1 · Capítulo 1 · Teoria</span>
    <h2>1. Conhecendo Robôs e Physical AI</h2>
    <p>
      Capítulo 1 do curso para iniciantes em SO-ARM Physical AI — entenda o que são robôs e braços robóticos, graus de liberdade, e a diferença entre controle tradicional, aprendizado por imitação e VLA.
    </p>
    <div className="hero-actions">
      <a href="#objectives">Objetivos de aprendizado</a>
      <a href="#paradigms">Paradigmas de controle</a>
    </div>
  </div>
</section>

## 1.1 Objetivos de aprendizado

<section id="objectives" className="section-card">
  <div className="section-title">
    <span>Objetivos</span>
    <h2>1.1 Objetivos de aprendizado</h2>
  </div>

Ao completar este capítulo, você deverá ser capaz de:

1. Explicar os conceitos básicos de robôs e braços robóticos.
2. Identificar juntas, elos, graus de liberdade e efetuadores finais em um braço robótico.
3. Entender percepção, tomada de decisão e controle em um sistema robótico.
4. Distinguir braços robóticos industriais de braços de inteligência incorporada.
5. Distinguir controle programado tradicional, aprendizado por imitação e VLA.
6. Descrever a composição de um sistema completo de braço robótico com inteligência incorporada.
7. Entender o papel do SO-ARM em todo o sistema de inteligência incorporada.

</section>

## 1.2 O que é um robô?

<section id="robot" className="section-card">
  <div className="section-title">
    <span>Fundamentos</span>
    <h2>1.2 O que é um robô?</h2>
  </div>

Um robô não é apenas uma máquina com forma humana. De uma perspectiva funcional, um robô é um sistema capaz de:

- Adquirir informações sobre si mesmo ou sobre o ambiente;
- Realizar computação ou tomada de decisão com base em objetivos;
- Mudar o próprio estado ou o ambiente por meio de atuadores.

Um sistema robótico normalmente pode ser abstraído como:

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={500} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-01.png" alt="Abstração de um sistema robótico" />
</div>

Por exemplo, um robô de mesa para preensão precisa completar o seguinte processo:

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={560} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-02.png" alt="Processo de um robô de preensão de mesa" />
</div>

Portanto, um robô não precisa apenas "conseguir se mover" — precisa formar um ciclo fechado que opere continuamente.

### A diferença entre robôs e máquinas comuns

Máquinas comuns costumam operar de forma fixa. Por exemplo:

- Um ventilador continua girando após ser ligado;
- Uma esteira corre a velocidade fixa;
- Um motor comum gira ao receber tensão.

Robôs, em contraste, normalmente têm percepção de estado, controle programático e capacidade de execução de tarefas mais fortes. Por exemplo, um braço robótico pode controlar várias juntas para assumir posturas diferentes conforme posições-alvo distintas.

</section>

## 1.3 O que é um braço robótico?

<section id="arm" className="section-card">
  <div className="section-title">
    <span>Fundamentos</span>
    <h2>1.3 O que é um braço robótico?</h2>
  </div>

Um braço robótico é um mecanismo composto por várias juntas e elos. Pelo movimento coordenado das juntas, ele leva o efetor final a uma posição e orientação específicas, completando tarefas de preensão, manuseio, montagem, polimento e solda.

Um braço robótico pode ser entendido simplesmente como:

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={560} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-03.png" alt="Braço robótico" />
</div>

Braços robóticos têm semelhanças com braços humanos, mas não precisam imitar a anatomia — o número de juntas, o arranjo e o espaço de trabalho são projetados conforme a tarefa.

### O que são graus de liberdade

Graus de liberdade costumam ser abreviados como DOF (Degree of Freedom). O DOF descreve o número de direções independentes em que um sistema mecânico pode se mover.

No espaço tridimensional, a pose completa de um corpo rígido inclui:

- Translação ao longo dos eixos X, Y e Z;
- Rotação em torno dos eixos X, Y e Z.

Portanto, um objeto no espaço 3D tem no máximo 6 graus de liberdade.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={560} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-04.png" alt="6 graus de liberdade" />
</div>

Um braço de seis graus de liberdade normalmente consegue controlar simultaneamente posição e orientação do efetor final no espaço 3D. O SO-ARM100 / SO-ARM101 deste curso aciona 5 juntas do braço mais uma garras com 6 servos de barramento — 5 graus de liberdade de rotação bastam para alcançar qualquer ponto de preensão em uma mesa, e a garras adiciona o grau de liberdade de "agarrar / soltar".

:::note
Cinco graus de liberdade não significam que o braço alcança qualquer posição com qualquer orientação. Um braço robótico também é limitado por comprimentos de elos, limites de junta, singularidades e colisões.
:::

</section>

## 1.4 Controle tradicional, aprendizado por imitação e VLA

<section id="paradigms" className="section-card">
  <div className="section-title">
    <span>Paradigmas</span>
    <h2>1.4 Controle tradicional, aprendizado por imitação e VLA</h2>
  </div>

Um braço robótico pode obter ações por métodos diferentes.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1.5rem', margin: '1.25rem 0 1.5rem'}}>
  <div>
    <h4 style={{margin: '0 0 0.25rem'}}>Controle programado tradicional</h4>
    <div className="image-frame" style={{margin: '0.5rem 0'}}>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-05.png" alt="Controle programado tradicional" />
    </div>
    <p>Adequado para posições fixas, fluxos fixos e tarefas repetitivas.</p>
  </div>

  <div>
    <h4 style={{margin: '0 0 0.25rem'}}>Aprendizado por imitação</h4>
    <div className="image-frame" style={{margin: '0.5rem 0'}}>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-06.png" alt="Aprendizado por imitação" />
    </div>
    <p>Uma pessoa primeiro teleopera o braço para concluir a tarefa e depois um modelo aprende com os dados de demonstração. Adequado para tarefas de preensão, organização e operação contínua.</p>
  </div>

  <div>
    <h4 style={{margin: '0 0 0.25rem'}}>VLA</h4>
    <div className="image-frame" style={{margin: '0.5rem 0'}}>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-1/ch1-07.png" alt="VLA" />
    </div>
    <p>VLA usa informações visuais, de linguagem e de ação para o braço concluir tarefas a partir de linguagem natural.</p>
  </div>
</div>

Por exemplo:

:::note
Coloque o bloco vermelho da esquerda dentro da caixa.
:::

</section>

## 1.5 O papel do SO-ARM no curso

<section id="role" className="section-card">
  <div className="section-title">
    <span>Plataforma prática</span>
    <h2>1.5 O papel do SO-ARM no curso</h2>
  </div>

O SO-ARM é a plataforma prática unificada de todo o curso. Mais adiante o usaremos para:

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" alt="Kit SO-ARM100 / SO-ARM101" />
</div>

- Montagem, cabeamento e configuração de servos de barramento (Fase 2);
- Calibração e teleoperação de líder e seguidor (Fase 3);
- Coleta de dados de demonstração com câmeras (Fase 3);
- Treinamento e implantação de aprendizado por imitação ACT (Fase 3);
- Treinamento cooperativo de dupla braço (Fase 3, eletivo);
- Ajuste fino e inferência de VLA com Isaac GR00T (Fase 4);
- VLA sem código na plataforma SenseCraft Robotics (Fase 4).

</section>

</div>
