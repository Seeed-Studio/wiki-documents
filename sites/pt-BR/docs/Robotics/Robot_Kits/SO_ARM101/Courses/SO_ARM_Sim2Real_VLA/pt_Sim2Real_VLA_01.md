---
description: "Capítulo 1 do curso Sim-to-Real VLA do SO-ARM101 — visão geral do curso: o currículo prático da Seeed × NVIDIA, de demonstrações robóticas e simulação ao pós-treinamento VLA e implantação real."
title: Capítulo 1 - Visão geral do curso
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - Physical AI
  - Sim-to-Real
  - Curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_1
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/pt-br/robotics/soarm_sim2real_vla_chapter_1/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Módulo 1 · Capítulo 1 · Overview</span>
    <h2>1. Visão geral do curso</h2>
    <p>
      A Seeed Studio colabora com a NVIDIA em um currículo prático para
      desenvolvedores: de demonstrações robóticas e simulação ao
      pós-treinamento VLA e implantação no mundo real — construído aqui
      sobre o SO-ARM101.
    </p>
    <div className="hero-actions">
      <a href="#workflow">Fluxo de trabalho</a>
      <a href="#task">A tarefa</a>
      <a href="#platform">Plataforma</a>
    </div>
  </div>
</section>

## O fluxo de trabalho do curso

<section id="workflow" className="section-card">
  <div className="section-title">
    <span>Ponta a ponta</span>
    <h2>O fluxo de trabalho do curso</h2>
  </div>

Este curso foca o fluxo completo de desenvolvimento do braço SO-ARM101:
passa pela configuração de hardware, coleta de dados, treinamento de
modelo, validação em simulação e, por fim, implantação e inferência no
braço real e em dispositivos Jetson. Combinando LeRobot, NVIDIA Isaac Sim,
Isaac GR00T N1.7 e Jetson, o curso monta um ambiente experimental completo
para aprendizado robótico e IA encarnada.

Ao final você entenderá como:

- coletar dados do braço por teleoperação líder-seguidor;
- treinar uma política Vision-Language-Action com Isaac GR00T N1.7 nesses
  dados;
- escalar com episódios simulados e aumento de dados;
- avaliar o modelo treinado no mundo real;
- implantá-lo em um Jetson e executar a tarefa na borda.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" alt="Kit SO-ARM101" />
</div>

</section>

## A tarefa de demonstração

<section id="task" className="section-card">
  <div className="section-title">
    <span>Frasco no rack</span>
    <h2>A tarefa de demonstração</h2>
  </div>

Como demonstração, o curso usa uma tarefa simples de pegar e colocar:
**colocar os três frascos no rack de frascos**. O SO-101 Workshop da
NVIDIA usa a mesma tarefa, então seu dataset permanece compatível com os
datasets e checkpoints de referência da NVIDIA.

Você pode ajustar a tarefa ao seu ambiente — o pipeline (coletar →
treinar → implantar → avaliar) não muda.

</section>

## O que o curso enfatiza

<section id="platform" className="section-card">
  <div className="section-title">
    <span>Plataforma reproduzível</span>
    <h2>O que o curso enfatiza</h2>
  </div>

O curso não foca apenas em treinar e rodar um modelo: enfatiza construir
uma plataforma experimental robótica **reproduzível e extensível**:

- um esquema fixo de dataset (seis dimensões de juntas, duas câmeras, uma
  frase de tarefa) que funciona igual no robô real, no Isaac Sim e no
  Jetson;
- comandos verificados ponta a ponta no SO-ARM101;
- as mesmas ferramentas do curso DLI do reBot, para migrar entre os braços
  sem reaprender o pipeline.

Próximo: [Capítulo 2 — LeRobot: contexto e comunidade](pt_Sim2Real_VLA_02.md).

</section>

</div>