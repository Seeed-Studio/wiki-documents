---
description: "Capítulo 2 do curso Sim-to-Real VLA do SO-ARM101 — LeRobot: contexto e comunidade: por que LeRobot, o ecossistema do Hub e o ciclo coletar-treinar-implantar-avaliar."
title: "Capítulo 2 - LeRobot: contexto e comunidade"
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - LeRobot
  - Hugging Face
  - Curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_2
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/pt-br/robotics/soarm_sim2real_vla_chapter_2/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Módulo 1 · Capítulo 2 · Overview</span>
    <h2>2. LeRobot: contexto e comunidade</h2>
    <p>
      LeRobot é a base de software do curso: coleta de dados, treinamento
      de políticas, implantação e avaliação em um único framework — com
      uma comunidade enorme por trás.
    </p>
    <div className="hero-actions">
      <a href="#what">O que é LeRobot</a>
      <a href="#why">Por que LeRobot</a>
      <a href="#community">Comunidade</a>
      <a href="#ready">Preparação</a>
    </div>
  </div>
</section>

## O que é LeRobot?

<section id="what" className="section-card">
  <div className="section-title">
    <span>Hugging Face</span>
    <h2>O que é LeRobot?</h2>
  </div>

LeRobot é um framework de robótica open source desenvolvido pela Hugging
Face. Oferece um conjunto unificado de ferramentas para coleta de dados
de robôs, treinamento de políticas, implantação e avaliação.

</section>

## Por que LeRobot?

<section id="why" className="section-card">
  <div className="section-title">
    <span>Um pipeline só</span>
    <h2>Por que LeRobot?</h2>
  </div>

O curso usa LeRobot como framework principal porque ele fornece um
pipeline completo de aprendizado robótico.

LeRobot se integra de perto ao Hugging Face Hub, facilitando armazenar,
compartilhar e reutilizar datasets: datasets da comunidade podem ser
baixados direto para treino, e novas demonstrações podem ser enviadas e
compartilhadas com colaboradores.

O framework também suporta métodos modernos de aprendizado robótico,
incluindo NVIDIA Isaac GR00T e outros modelos Vision-Language-Action. As
mesmas ferramentas usadas na coleta servem depois para treinamento,
implantação e avaliação de políticas.

O resultado é um fluxo que segue um ciclo simples:

**Coletar → Treinar → Implantar → Avaliar → Iterar**

Desenvolvedores focam nos problemas de robótica, não na infraestrutura.

</section>

## Recursos da comunidade

<section id="community" className="section-card">
  <div className="section-title">
    <span>Ecossistema</span>
    <h2>Recursos da comunidade</h2>
  </div>

Uma das forças do LeRobot é seu ecossistema em crescimento.

O Hugging Face Hub hospeda uma grande coleção de datasets de robôs cobrindo
plataformas e tarefas de manipulação diversas. Eles seguem um formato
padronizado, o que facilita compartilhar e reutilizar entre projetos.

LeRobot também fornece ferramentas como o Dataset Visualizer, que permite
inspecionar demonstrações, reproduzir trajetórias e analisar observações
do robô antes de treinar.

Juntos, esses recursos reduzem a barreira de entrada e aceleram a
experimentação.

</section>

## Preparação para o curso

<section id="ready" className="section-card">
  <div className="section-title">
    <span>Base</span>
    <h2>Preparação para o curso</h2>
  </div>

Ao longo do curso, LeRobot será a base de software para coleta de dados,
treinamento e implantação real do SO-ARM101. O capítulo 7 instala passo a
passo o ambiente exato usado pelos demais capítulos, incluindo o fork da
Seeed com suporte a líder e seguidor SO-101.

Recomendamos revisar antes a documentação oficial do LeRobot. Com o
ambiente pronto, os capítulos seguintes constroem o fluxo completo de IA
encarnada.

</section>

## Mais recursos

<section className="section-card">
  <div className="section-title">
    <span>Links</span>
    <h2>Mais recursos</h2>
  </div>

- [Documentação do LeRobot](https://huggingface.co/docs/lerobot)
- [Primeiros passos com o SO-ARM101 no LeRobot | Seeed Studio Wiki](https://wiki.seeedstudio.com/pt-br/lerobot_so100m/)
- [Curso iniciante de SO-ARM101](https://wiki.seeedstudio.com/pt-br/robotics/soarm_physical_ai_course_introduction/)

</section>

</div>