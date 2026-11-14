---
description: "Capítulo 4 do curso Sim-to-Real VLA do SO-ARM101 — introdução do SO-ARM101: um par de braços open source e de baixo custo construído em torno de servos de barramento Feetech STS3215."
title: Capítulo 4 - Introdução do SO-ARM101
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - STS3215
  - Hardware
  - Curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_4
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/pt-br/robotics/soarm_sim2real_vla_chapter_4/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Módulo 1 · Capítulo 4 · Overview</span>
    <h2>4. Introdução do SO-ARM101</h2>
    <p>
      Um par de braços robóticos de baixo custo e open source — líder e
      seguidor — construído sobre servos de barrimento Feetech STS3215,
      pensado para reduzir a barreira do aprendizado Sim-to-Real de IA
      encarnada.
    </p>
    <div className="hero-actions">
      <a href="#intro">Introdução</a>
      <a href="#specs">Especificações</a>
      <a href="#overview">Kit ou montado</a>
      <a href="#apps">Aplicações</a>
      <a href="#resources">Recursos</a>
    </div>
  </div>
</section>

## Introdução

<section id="intro" className="section-card">
  <div className="section-title">
    <span>Aberto de verdade</span>
    <h2>Introdução</h2>
  </div>

O SO-ARM101 é um braço robótico de baixo custo construído em torno do
conceito de «verdadeiramente open source». Sua aparência e todos os
arquivos abertos — peças imprimíveis em 3D, uma BOM detalhada e software
compatível com LeRobot e NVIDIA Isaac — estão disponíveis gratuitamente
para desenvolvedores individuais, estudantes e instituições de ensino.

O curso usa **um par** de braços:

- o **líder** é o que você move com a mão; ele apenas lê os ângulos das
  juntas e os envia ao software;
- o **seguidor** é o que executa; espelha o líder durante a teleoperação
  e depois executa a política VLA treinada.

Como o seguidor é exatamente a plataforma visada pelo SO-101 Workshop da
NVIDIA, todo dataset gravado neste curso é diretamente compatível com os
datasets, checkpoints e ferramentas de avaliação da NVIDIA.

</section>

## Especificações de hardware

<section id="specs" className="section-card">
  <div className="section-title">
    <span>12 servos</span>
    <h2>Especificações de hardware</h2>
  </div>

| Parâmetro | SO-ARM101 |
|---|---|
| Graus de liberdade | **6** por braço (5 juntas do braço + garra) |
| Servos | Feetech STS3215 de barramento, 6 por braço (12 no total) |
| Alimentação do líder | servos de classe 7,4 V com fonte de 5 V |
| Alimentação do seguidor (kit Pro) | fonte de 12 V |
| Controle | barramento serial, uma placa USB por braço |
| Calibração | `lerobot-calibrate` do LeRobot, convenção de ponto médio |
| Ecossistemas | LeRobot, NVIDIA Isaac Sim / Isaac GR00T, ferramentas Feetech |

Cada junta é acionada por um servo serial STS3215; os seis de um braço
compartilham um barramento de três fios (GND, VCC, DATA) encadeado entre
as juntas. A razão de redução varia por junta — o seguidor e o ombro do
líder usam a razão alta 1:345 onde o torque importa. A tabela completa
está no [capítulo 4 do curso iniciante](https://wiki.seeedstudio.com/pt-br/robotics/soarm_physical_ai_course_chapter_4/).

:::caution Regras de alimentação
A tensão deve corresponder ao tipo de servo: 5 V para as versões STS3215
de 7,4 V, 12 V para as de 12 V. O líder sempre usa motores de 7,4 V com
fonte de 5 V; no kit Pro o seguidor usa 12 V. Misturar as fontes queima os
servos. O cabo USB carrega apenas dados — conecte sempre alimentação e
USB.
:::

</section>

## Kit ou pré-montado

<section id="overview" className="section-card">
  <div className="section-title">
    <span>Duas formas de comprar</span>
    <h2>Kit ou pré-montado</h2>
  </div>

- **Versão kit**: traz conjuntos de servos, placas de controle e cabos;
  você imprime as peças estruturais (ou compra impressas) e monta. Os IDs
  de servos são gravados com `lerobot-setup-motors` — coberto no capítulo
  7;
- **Versão pré-montada**: vem montada e com IDs configurados de fábrica.
  Você pula montagem e gravação de IDs por completo e começa na
  calibração.

Links:

- [Kit Pro SO-ARM101](https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html)
- [Kit SO-ARM100](https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html)

</section>

## Aplicações

<section id="apps" className="section-card">
  <div className="section-title">
    <span>Onde encaixa</span>
    <h2>Aplicações</h2>
  </div>

### Ensino e desenvolvimento de IA encarnada

O SO-ARM101 foi desenhado para aulas e experimentos de IA encarnada: o par
líder-seguidor grava demonstrações humanas, o LeRobot as converte em
datasets e o Isaac GR00T ajusta uma política VLA por cima. O baixo custo
torna viável equipar uma sala de aula ou laboratório inteiro.

### Teleoperação e coleta de dados

Com o ecossistema LeRobot, o par permite controle remoto, gravação de
demonstrações e gestão de datasets — a base de todo pipeline de
aprendizado por imitação e VLA do curso.

### Pesquisa e prototipagem

As interfaces abertas de hardware e software permitem personalizar tarefas,
trocar o efetuador final e validar ideias Sim-to-Real rapidamente antes
de migrar para plataformas maiores.

</section>

## Recursos

<section id="resources" className="section-card">
  <div className="section-title">
    <span>Links</span>
    <h2>Recursos</h2>
  </div>

- [Curso iniciante de SO-ARM101](https://wiki.seeedstudio.com/pt-br/robotics/soarm_physical_ai_course_introduction/)
- [Primeiros passos com o SO-ARM101 no LeRobot](https://wiki.seeedstudio.com/pt-br/lerobot_so100m/)
- [NVIDIA Sim-to-Real SO-101 Workshop](https://docs.nvidia.com/learning/physical-ai/sim-to-real-so-101/latest/index.html)

Próximo: [Capítulo 5 — Resumo](pt_Sim2Real_VLA_05.md).

</section>

</div>