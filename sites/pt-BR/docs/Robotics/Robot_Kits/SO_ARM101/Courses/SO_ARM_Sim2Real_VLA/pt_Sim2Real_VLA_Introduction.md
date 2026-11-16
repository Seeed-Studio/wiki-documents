---
description: "Curso Sim-to-Real VLA do SO-ARM101 — o currículo prático estilo DLI da Seeed × NVIDIA, migrado para o SO-ARM101: monte o laboratório real, colete dados por teleoperação, faça fine-tuning do Isaac GR00T N1.7 e implante no braço real e no Jetson, com Isaac Sim e Cosmos como opcionais."
title: Curso Sim-to-Real VLA do SO-ARM101
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - Sim-to-Real
  - Isaac Sim
  - LeRobot
  - Isaac GR00T
  - VLA
  - Teleoperação
  - Physical AI
  - Jetson
  - Curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_course
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/pt-br/robotics/soarm_sim2real_vla_course/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">SO-ARM × LeRobot × GR00T × Jetson · Curso avançado</span>
    <h2>SO-ARM101 Sim-to-Real VLA</h2>
    <p>
      O currículo completo de Sim-to-Real da Seeed × NVIDIA, migrado para o
      SO-ARM101: monte o laboratório real, colete seus próp dados por
      teleoperação, faça fine-tuning de uma política VLA Isaac GR00T N1.7
      e implante no braço físico e no Jetson — com episódios de Isaac Sim
      e aumento de dados como opções.
    </p>
    <div className="hero-actions">
      <a href="#pipeline">Pipeline de aprendizado</a>
      <a href="#modules">Estrutura</a>
      <a href="#prerequisites">Pré-requisitos</a>
      <a href="#build">O que você construirá</a>
    </div>
  </div>
</section>

## Visão geral do curso

<section id="pipeline" className="section-card">
  <div className="section-title">
    <span>Overview</span>
    <h2>De uma mesa vazia a uma política no Jetson</h2>
  </div>

Este curso espelha artigo por artigo o currículo DLI do reBot e o adapta
para o **SO-ARM101 branco** — a mesma plataforma visada pelo SO-101
Workshop da NVIDIA:

1. **Overview e ambiente** — por que Sim-to-Real, o que LeRobot e GR00T
   oferecem, e instalação e verificação da pilha de software;
2. **Build Your Robot Lab** — monte o par SO-101 (braços pré-montados
   pulam a gravação de IDs), calibre os dois braços e monte o estúdio:
   lightbox, suportes, posição do rack e objetos;
3. **Get Your Own VLA Model** — teleopere o par real, grave episódios
   LeRobot v3 com duas câmeras, faça fine-tuning do Isaac GR00T N1.7 e
   execute no seguidor físico;
4. **Escalar (opcional)** — colete episódios extras do gêmeo digital do
   SO-ARM101 branco no Isaac Sim, randomize a cena e misture com os dados
   reais para co-treinamento;
5. **Implantar no Jetson** — exporte engines TensorRT específicas do
   alvo em um Jetson AGX Orin ou Thor e sirva a política na borda.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" alt="Kit SO-ARM101" />
</div>

</section>

## Estrutura do curso

<section id="modules" className="section-card">
  <div class="section-title">
    <span>Módulos DLI</span>
    <h2>Overview → Build Your Robot Lab → Get Your Own VLA Model → Jetson</h2>
  </div>

| Módulo | Capítulos | Foco |
| --- | --- | --- |
| 1 · Overview | 1–5 | Visão geral, LeRobot, Sim-to-Real, SO-ARM101, resumo |
| 2 · Build Your Robot Lab | 6–8 | Introdução, preparação dos braços (IDs + calibração), ambiente |
| 3 · Get Your Own VLA Model | 9–11 | Coleta de dados reais, treino GR00T N1.7, avaliação real |
| 3+ · Opcional | 12–13 | Dados do Isaac Sim, aumento de dados com Cosmos |
| 4 · Deploy on Jetson | 14–18 | Setup do Jetson, hardware, ambiente GR00T, ativos, TensorRT |
| 5 · Reference | 19 | Repositórios, produtos e documentação |

A rota do robô real é a linha principal do curso. Isaac Sim aparece só
como acelerador opcional, exatamente como no
[artigo Sim-to-Real da Seeed × NVIDIA](https://www.seeedstudio.com/sim-to-real-with-seeed-rebot-and-nvidia-isaac).

</section>

## Pré-requisitos

<section id="prerequisites" className="section-card">
  <div class="section-title">
    <span>Antes de começar</span>
    <h2>O que você precisa</h2>
  </div>

| Requisito | Detalhe |
| --- | --- |
| GPU de estação | RTX com ≥ 8 GB para os capítulos 9–12; 24 GB+ (classe RTX 5090 / RTX 6000) para o fine-tuning do GR00T |
| SO | Ubuntu 22.04 ou superior |
| Software | Isaac Sim 6.1 (só capítulo 12), ambiente LeRobot (capítulo 7) |
| Robô | Líder e seguidor SO-ARM101 — kit ou pré-montado; estritamente, só o seguidor é obrigatório |
| Câmeras | Duas câmeras USB (punho + externa) |
| Dispositivo de borda (módulo 4) | Jetson AGX Orin ou AGX Thor com JetPack 7.2 |
| Disco | ~100 GB livres no total |

Se planeja deixar um assistente de IA instalar o ambiente, copie o
arquivo de skill de instalação do repositório do projeto — o capítulo 6
aponta para ele.

</section>

## O que você construirá

<section id="build" className="section-card">
  <div class="section-title">
    <span>Resultado</span>
    <h2>Entregáveis após os dezenove capítulos</h2>
  </div>

- Um par líder/seguidor SO-ARM101 calibrado — montado ou de fábrica, com
  IDs de servos gravados quando necessário;
- Um estúdio de gravação: lightbox, suportes rígidos e um rack fixado com
  fita com as posições dos objetos marcadas;
- Um dataset LeRobot v3 do mundo real com streams de vídeo de duas
  câmeras;
- Uma política Isaac GR00T N1.7 ajustada com seus dados, com conjuntos
  opcionais de co-treinamento ampliados com simulação e Cosmos;
- Uma política rodando em malha fechada no seguidor físico com a pilha de
  avaliação de robôs reais da NVIDIA;
- Um pacote de engines TensorRT específico do alvo e um servidor de
  políticas no Jetson AGX Orin ou Thor.

</section>

## Capítulos do curso

<section id="chapters" className="section-card">
  <div class="section-title">
    <span>Índice</span>
    <h2>Dezenove capítulos em cinco módulos</h2>
  </div>

| # | Capítulo | Módulo |
| --- | --- | --- |
| 1 | Visão geral do curso | 1 · Overview |
| 2 | LeRobot: contexto e comunidade | 1 · Overview |
| 3 | O que é Sim-to-Real? | 1 · Overview |
| 4 | Introdução do SO-ARM101 | 1 · Overview |
| 5 | Resumo | 1 · Overview |
| 6 | Build Your Robot Lab (intro) | 2 · Build Your Robot Lab |
| 7 | Preparar o braço robótico | 2 · Build Your Robot Lab |
| 8 | Montando o ambiente de trabalho | 2 · Build Your Robot Lab |
| 9 | Coletar dados do ambiente real | 3 · Get Your Own VLA Model |
| 10 | Treinar a política GR00T N1.7 | 3 · Get Your Own VLA Model |
| 11 | Avaliar no ambiente real | 3 · Get Your Own VLA Model |
| 12 | Coletar dados do Isaac Sim (opcional) | 3 · Opcional |
| 13 | Aumento de datasets (opcional) | 3 · Opcional |
| 14 | Preparar seu Jetson | 4 · Deploy on Jetson |
| 15 | Conectar o hardware do robô | 4 · Deploy on Jetson |
| 16 | Configurar o ambiente GR00T | 4 · Deploy on Jetson |
| 17 | Preparar dataset e ativos do modelo | 4 · Deploy on Jetson |
| 18 | Rodar inferência TensorRT do GR00T N1.7 | 4 · Deploy on Jetson |
| 19 | Referências | 5 · Reference |

Comece pelo capítulo 1, ou pule direto para o 7 se o software já estiver
instalado. Se você só precisa da parte opcional de simulação, vá direto
ao [capítulo 12](pt_Sim2Real_VLA_12.md).

</section>

</div>