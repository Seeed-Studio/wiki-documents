---
description: "Capítulo 6 do Curso para Iniciantes em Inteligência Incorporada da Seeed — monte o reBot Arm, monte a fonte de alimentação, faça a fiação do braço e ligue-o pela primeira vez."
title: Capítulo 6 - Montagem, Fonte de Alimentação e Primeira Ligação
keywords:
  - reBot
  - Braço Robótico
  - Montagem
  - Fonte de Alimentação
  - Fiação
  - Curso
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_embodied_ai_course_chapter_6
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-17
  author: LiuJunjie
createdAt: '2026-09-17'
updatedAt: '2026-09-17'
url: https://wiki.seeedstudio.com/pt-br/rebot_embodied_ai_course_chapter_6/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Estágio 2 · Capítulo 6 · Prática</span>
    <h2>6. Montagem, Fonte de Alimentação e Primeira Ligação</h2>
    <p>
      Capítulo 6 do Curso para Iniciantes em Inteligência Incorporada da Seeed — monte o reBot Arm,
      monte a fonte de alimentação, faça a fiação do braço e ligue-o pela primeira vez.
    </p>
    <div className="hero-actions">
      <a href="#assembly">Montagem</a>
      <a href="#wiring">Fiação</a>
      <a href="#power">Ligar</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Neste capítulo</strong>
    <span>6.1 Montagem do Braço Robótico</span>
    <span>6.2 Montagem da Fonte de Alimentação</span>
    <span>6.3 Fiação do Braço Robótico</span>
    <span>6.4 Requisitos de Fonte de Alimentação do Braço Robótico</span>
    <span>6.5 Ligação do Braço Robótico</span>
  </div>
</section>

<RebotCourseNav />

## 6.1 Montagem do Braço Robótico

<section id="assembly" className="section-card">
  <div className="section-title">
    <span>Passo 1</span>
    <h2>6.1 Montagem do Braço Robótico</h2>
  </div>

- [Montagem do Braço Robótico reBot DM](https://www.youtube.com/watch?v=rfTQoFCfnMc&list=PLpH_4mf13-A0UsztzM_yWQUsxXbYMVydM&index=15)
- [Montagem do Braço Robótico reBot RS](https://www.youtube.com/watch?v=Bv60NPO0TRo&list=PLpH_4mf13-A38iXew5DxqswGLjPQ0BflR&index=6)

</section>

## 6.2 Montagem da Fonte de Alimentação

<section id="power-supply-assembly" className="section-card">
  <div className="section-title">
    <span>Passo 2</span>
    <h2>6.2 Montagem da Fonte de Alimentação</h2>
  </div>

- [Montagem da Fonte de Alimentação reBot DM](https://www.youtube.com/watch?v=DHFA2UfQzUo&list=PLpH_4mf13-A0UsztzM_yWQUsxXbYMVydM&index=3)
- [Montagem da Fonte de Alimentação reBot RS](https://www.youtube.com/watch?v=5GitUWT9gx0)

</section>

## 6.3 Fiação do Braço Robótico

<section id="wiring" className="section-card">
  <div className="section-title">
    <span>Passo 3</span>
    <h2>6.3 Fiação do Braço Robótico</h2>
  </div>

### Fiação do reBot DM

Vídeo: [Fiação do Braço Robótico reBot DM](https://www.youtube.com/watch?v=vVxCOfu5ZCE)

<div className="rebot-step-flow">
<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">
<h4>Conecte o braço robótico à placa adaptadora.</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-01.jpg" alt="Connect the robotic arm to the adapter board" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">
<h4>Conexão da fonte de alimentação: cabo XT60 para XT30.</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-02.jpg" alt="Power supply connection: XT60 to XT30 cable" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">
<h4>Conecte o cabo XT60 para XT30 à placa adaptadora.</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-03.jpg" alt="Connect the XT60 to XT30 cable to the adapter board" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">
<h4>Conecte o USB2CAN ao conector GH1.25 de 2 pinos.</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-04.jpg" alt="Connect USB2CAN to GH1.25 2-pin" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">5</span>
<div className="rebot-step-content">
<h4>Conecte a outra extremidade do cabo GH1.25 de 2 pinos à placa adaptadora.</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-05.jpg" alt="Connect the other end of the GH1.25 2-pin cable to the adapter board" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">6</span>
<div className="rebot-step-content">
<h4>Conecte o USB2CAN ao computador por meio de um cabo de dados Type-C.</h4>

:::warning
O motor 1 e o motor 2 devem estar conectados entre si.
:::

</div>
</section>
</div>

### Fiação do reBot RS

Vídeo: [Fiação do Braço Robótico reBot RS](https://www.youtube.com/watch?v=llSa6qn3yrY&list=PLpH_4mf13-A38iXew5DxqswGLjPQ0BflR&index=8)

<div className="rebot-step-flow">
<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">
<h4>Conecte o braço robótico à placa adaptadora.</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-06.jpg" alt="Connect the robotic arm to the adapter board" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">
<h4>Conexão da fonte de alimentação: cabo XT60 para XT30.</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-07.jpg" alt="Power supply connection: XT60 to XT30 cable" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">
<h4>Conecte o cabo XT60 para XT30 à placa adaptadora.</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-08.jpg" alt="Connect the XT60 to XT30 cable to the adapter board" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">
<h4>Conecte o CANable ao cabo GH1.25 de 2 pinos.</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-09.jpg" alt="Connect CANable to GH1.25 2-pin cable" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">5</span>
<div className="rebot-step-content">
<h4>Conecte a outra extremidade do cabo GH1.25 de 2 pinos à placa adaptadora.</h4>

<div className="image-frame">
  <img width={700} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-10.jpg" alt="Connect the other end of the GH1.25 2-pin cable to the adapter board" />
</div>

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">6</span>
<div className="rebot-step-content">
<h4>Conecte o CANable ao computador.</h4>

:::warning
O motor 1 e o motor 2 devem estar conectados entre si.
:::

</div>
</section>
</div>

</section>

## 6.4 Requisitos de Fonte de Alimentação do Braço Robótico

<section id="power-requirements" className="section-card">
  <div className="section-title">
    <span>Alimentação</span>
    <h2>6.4 Requisitos de Fonte de Alimentação do Braço Robótico</h2>
  </div>

O requisito de fonte de alimentação para o reBot DM é 24V, e o requisito de fonte de alimentação para o reBot RS é 48V.

Abaixo estão nossas instruções recomendadas de uso da fonte de alimentação:

:::danger Ajuste corretamente o seletor de tensão!
Se a tensão da sua residência for 220V, ajuste a chave DIP na lateral da fonte de alimentação para 230V. Se a tensão da sua residência for 110V, ajuste a chave DIP da sua fonte de alimentação para 115V.
:::

| 220V → 230V | 110V → 115V |
| :---: | :---: |
| ![Power supply DIP switch 220V](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-11.png) | ![Power supply DIP switch 110V](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-6/ch6-12.png) |

</section>

## 6.5 Ligação do Braço Robótico

<section id="power" className="section-card">
  <div className="section-title">
    <span>Ligar</span>
    <h2>6.5 Ligação do Braço Robótico</h2>
  </div>

Para o braço robótico reBot DM, as luzes de todas as juntas acenderão e ficarão vermelhas; nesse momento, o braço robótico está em estado desativado.

O braço robótico reBot RS não apresenta diferença em relação ao estado desligado, e só pode ser identificado por meio da comunicação com o motor.

</section>

</div>
