---
description: "Capítulo 6 do curso Sim-to-Real VLA do SO-ARM101 — Build Your Robot Lab (intro): da teoria à execução física, com consistência cinemática e visual estrita entre o gêmeo digital e o mundo."
title: Capítulo 6 - Build Your Robot Lab (intro)
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - Laboratório de robótica
  - Curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_6
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/pt-br/robotics/soarm_sim2real_vla_chapter_6/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Módulo 2 · Capítulo 6 · Build Your Robot Lab</span>
    <h2>6. Build Your Robot Lab</h2>
    <p>
      Monte o hardware, padronize o ambiente de tarefas e estabeleça seus
      loops de controle — mantendo consistência estrita entre o gêmeo
      digital e o mundo físico.
    </p>
    <div className="hero-actions">
      <a href="#scope">Escopo</a>
      <a href="#env">Ambiente de software</a>
      <a href="#chapters">Capítulos</a>
    </div>
  </div>
</section>

## Escopo do módulo

<section id="scope" className="section-card">
  <div className="section-title">
    <span>Da teoria à prática</span>
    <h2>Escopo do módulo</h2>
  </div>

Neste módulo você aprende a sair da teoria para a execução física: montar
o hardware, padronizar o ambiente de tarefas e estabelecer os loops de
controle. Construir um pipeline de IA encarnada exige consistência
cinemática e visual estrita entre o gêmeo digital (simulação) e o mundo
físico.

Na prática: desembalar ou montar o **par SO-ARM101**, gravar os IDs de
servos (somente kit — pré-montados pulam), executar a **calibração de
juntas** crítica para um rastreamento preciso e construir um espaço de
trabalho padronizado com luz controlada — o estúdio — com suportes de
câmera e posições fixas de objetos que casam com os assets visuais do
Isaac Sim. Por fim, dominar a teleoperação direta de hardware, o modo de
operação de que depende a coleta de dados reais.

</section>

## O ambiente de software

<section id="env" className="section-card">
  <div className="section-title">
    <span>Instalar uma vez</span>
    <h2>O ambiente de software</h2>
  </div>

O módulo assume que o ambiente LeRobot está pronto. O capítulo 7 o percorre
passo a passo (uv, Python 3.12, o fork da Seeed com suporte SO-101 e o SDK
Feetech) e todos os capítulos seguintes o reutilizam.

Se preferir deixar um assistente de IA instalar tudo, o repositório do
projeto traz uma skill de instalação legível por máquina:

**`skills/install-soarm-env.md`** em
[github.com/yuyoujiang/rebot-arm-dli-isaacsim](https://github.com/yuyoujiang/rebot-arm-dli-isaacsim)

Copie o arquivo inteiro para o seu assistente (Claude, ChatGPT etc.) e
peça que execute os passos. Ele contém todos os comandos em ordem
executável, a saída esperada de cada verificação e uma tabela de solução
de problemas (`scservo_sdk` ausente, permissões de serial, travamentos de
GPU, colisões de porta UDP).

</section>

## Capítulos do módulo

<section id="chapters" className="section-card">
  <div className="section-title">
    <span>Dois capítulos</span>
    <h2>Capítulos do módulo</h2>
  </div>

1. [Capítulo 7 — Preparar o braço robótico](pt_Sim2Real_VLA_07.md): IDs de
   servos, calibração e primeira teleoperação;
2. [Capítulo 8 — Montando o ambiente de trabalho](pt_Sim2Real_VLA_08.md):
   lightbox, suportes de câmera, posições de objetos e câmeras.

</section>

</div>