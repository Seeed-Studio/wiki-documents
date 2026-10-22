---
description: "Capítulo 2 do curso para iniciantes em SO-ARM Physical AI — conheça o projeto de código aberto SO-ARM, a diferença entre SO-ARM100 e SO-ARM101, as edições Standard e Pro, e seu hardware e software de código aberto."
title: Capítulo 2 - Hardware e projeto de código aberto
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM100
  - SO-ARM101
  - braço robótico
  - código aberto
  - LeRobot
  - curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_2
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/pt-br/robotics/soarm_physical_ai_course_chapter_2/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Fase 1 · Capítulo 2 · Teoria e prática</span>
    <h2>2. Conhecendo o hardware do SO-ARM e o projeto de código aberto</h2>
    <p>
      Capítulo 2 do curso para iniciantes em SO-ARM Physical AI — conheça o projeto de código aberto SO-ARM, a diferença entre SO-ARM100 e SO-ARM101, as edições Standard e Pro, e seu hardware e software de código aberto.
    </p>
    <div className="hero-actions">
      <a href="#what-is-so-arm">O que é SO-ARM</a>
      <a href="#versions">Versões</a>
      <a href="#open-source">Código aberto</a>
    </div>
  </div>
</section>

## 2.1 O que é SO-ARM

<section id="what-is-so-arm" className="section-card">
  <div className="section-title">
    <span>Visão geral</span>
    <h2>2.1 O que é SO-ARM</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" alt="Kit SO-ARM100 / SO-ARM101" />
</div>

O SO-ARM é um braço robótico de baixo custo e 100% de código aberto projetado para aprendizado de IA e robótica. O SO-ARM100 original foi criado pela [TheRobotStudio](https://github.com/TheRobotStudio/SO-ARM100) como braço líder-seguidor de referência do projeto [LeRobot](https://github.com/huggingface/lerobot) da Hugging Face, e a Seeed Studio o transforma em kits completos — SO-ARM100 e o mais novo SO-ARM101 — com peças impressas em 3D verificadas, servos de barramento Feetech STS3215, placas de controle de servo e suporte completo de wiki.

Um kit SO-ARM sempre contém **dois braços**:

- Um **braço líder** (preto): o braço de ensino leve que você segura na mão. Seus servos apenas leem posições — é o "dispositivo de entrada" das demonstrações.
- Um **braço seguidor** (branco): o braço de execução. Seus servos são alimentados com tensão total e realmente agarram e movem objetos.

Cada braço é acionado por 6 servos de barramento serial STS3215 (5 juntas + 1 garras), encadeados em um barramento de 3 fios e conectados ao computador por uma placa USB de controle de servos. Deste projeto de código aberto você pode aprender do zero:

- Impressão 3D, montagem e configuração de servos de barramento;
- Atribuição de IDs de servo, calibração e depuração;
- Teleoperação mestre-escravo líder-seguidor;
- Coleta, visualização e gestão de datasets LeRobot;
- Treinamento e avaliação em robô real de ACT, SmolVLA e políticas de difusão;
- Treinamento cooperativo de dupla braço;
- Ajuste fino de VLA com NVIDIA Isaac GR00T e implantação em Jetson;
- VLA sem código na plataforma SenseCraft Robotics.

Seu objetivo principal é permitir aprender e validar algoritmos de inteligência incorporada com hardware realmente barato, aberto e reprodutível.

</section>

## 2.2 SO-ARM100 vs. SO-ARM101

<section id="versions" className="section-card">
  <div className="section-title">
    <span>Versões</span>
    <h2>2.2 SO-ARM100 vs. SO-ARM101</h2>
  </div>

Há duas gerações do braço:

- **SO-ARM100** — a versão original, que tornou o projeto famoso;
- **SO-ARM101** — a versão atual, com clipes de cabo para cabeamento mais organizado e um braço líder reprojetado.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/all_motos.png" alt="Servos e cabeamento do SO-ARM101" />
</div>

As duas versões são altamente compatíveis:

:::tip
A compra recomendada hoje é o kit SO-ARM101. Os códigos de SO100 e SO101 são compatíveis — usuários de SO100 podem usar diretamente os parâmetros e comandos do SO101 (`so101_follower` / `so101_leader` no LeRobot), e os arquivos de impressão do SO101 são totalmente compatíveis com a instalação do kit de motores do SO100.
:::

A diferença-chave a observar é a **relação de engrenagens dos servos do braço líder**: as três primeiras juntas (L1-L3) do líder do SO-ARM101 usam relações diferentes das do SO-ARM100, então a configuração de servos deve seguir a tabela da sua versão (ver Capítulo 6).

</section>

## 2.3 Edição Standard vs. Pro

<section id="standard-pro" className="section-card">
  <div className="section-title">
    <span>Edições</span>
    <h2>2.3 Edição Standard vs. Pro</h2>
  </div>

O kit SO-ARM101 vem em duas edições que compartilham a estrutura e diferem em torque de servo e alimentação:

| Edição | Servos do seguidor | Servos do líder | Alimentação |
| :--- | :--- | :--- | :--- |
| **SO101 Standard** | ST-3215-C001 7.4V (relação 1:345) ×6 | série ST-3215 7.4V | Ambos os braços a 5V |
| **SO101 Pro** | série ST-3215 12V (mais torque, p. ex. C018 / C047) | série ST-3215 7.4V | Líder 5V, seguidor 12V |

:::danger
As regras de alimentação importam. A edição Standard alimenta os dois braços a 5V. Na Pro, o líder deve usar sempre 5V e o seguidor sempre 12V — conectar a tensão errada pode queimar os servos. Confira o rótulo do adaptador antes de cada ligação.
:::

</section>

## 2.4 Parâmetros principais

<section id="parameters" className="section-card">
  <div className="section-title">
    <span>Especificações</span>
    <h2>2.4 Parâmetros principais</h2>
  </div>

| Produto | Kit SO-ARM100 | Kit SO-ARM101 |
| :--- | :--- | :--- |
| **Link de compra** | [Bazaar](https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html) | [Bazaar](https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html) |
| **Graus de liberdade** | 5 + garras | 5 + garras |
| **Atuadores** | Servo de barramento Feetech STS3215 ×6 por braço | Servo de barramento Feetech STS3215 ×6 por braço |
| **Comunicação** | Barramento serial (TTL) via placa USB | Barramento serial (TTL) via placa USB |
| **Alimentação** | 5V (Standard) / 5V+12V (Pro) | 5V (Standard) / 5V+12V (Pro) |
| **Estrutura** | Peças impressas em PLA+, STL aberto | Peças impressas com clipes de cabo, STL aberto |
| **Ecossistema** | LeRobot, GR00T, SenseCraft Robotics | LeRobot, GR00T, SenseCraft Robotics |

</section>

## 2.5 Hardware e software de código aberto

<section id="open-source" className="section-card">
  <div className="section-title">
    <span>Código aberto</span>
    <h2>2.5 Hardware e software de código aberto</h2>
  </div>

O SO-ARM é aberto da estrutura imprimível à pilha de software:

- **Projeto do braço e arquivos STL**: <a href="https://github.com/TheRobotStudio/SO-ARM100" target="_blank" rel="noopener noreferrer">TheRobotStudio/SO-ARM100</a>
- **Fork verificado do LeRobot usado neste curso**: <a href="https://github.com/Seeed-Projects/lerobot" target="_blank" rel="noopener noreferrer">Seeed-Projects/lerobot</a>
- **Framework original**: <a href="https://github.com/huggingface/lerobot" target="_blank" rel="noopener noreferrer">huggingface/lerobot</a>
- **Ferramenta de depuração de servos**: <a href="https://github.com/Seeed-Projects/Seeed_RoboController" target="_blank" rel="noopener noreferrer">Seeed-Projects/Seeed_RoboController</a>
- **Modelo de base VLA**: <a href="https://huggingface.co/nvidia/GR00T-N1.5-3B" target="_blank" rel="noopener noreferrer">NVIDIA Isaac GR00T no Hugging Face</a>

:::tip
Este curso instala o LeRobot a partir do fork Seeed-Projects, verificado com os kits SO-ARM. O repositório original muda rápido — argumentos de comandos, formatos de dataset e dependências podem diferir dos capítulos aqui.
:::

</section>

</div>
