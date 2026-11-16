---
description: "Capítulo 4 do curso para iniciantes em SO-ARM Physical AI — como juntas, elos e graus de liberdade formam um braço, o que é um servo de barramento, e como o barramento serial STS3215, os IDs de servo e a placa de controle trabalham juntos."
title: Capítulo 4 - Fundamentos de braços robóticos e servos de barramento
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - braço robótico
  - servo
  - STS3215
  - servo de barramento
  - curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_4
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/pt-br/robotics/soarm_physical_ai_course_chapter_4/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Fase 2 · Capítulo 4 · Teoria</span>
    <h2>4. Fundamentos de braços robóticos e servos de barramento</h2>
    <p>
      Capítulo 4 do curso para iniciantes em SO-ARM Physical AI — como juntas, elos e graus de liberdade formam um braço, o que é um servo de barramento, e como o barramento serial STS3215, os IDs de servo e a placa de controle trabalham juntos.
    </p>
    <div className="hero-actions">
      <a href="#arm-anatomy">Anatomia do braço</a>
      <a href="#bus-servo">Servo de barramento</a>
      <a href="#wiring">Cabeamento e alimentação</a>
    </div>
  </div>
</section>

## 4.1 Revisão: juntas, elos e graus de liberdade

<section id="arm-anatomy" className="section-card">
  <div className="section-title">
    <span>Anatomia</span>
    <h2>4.1 Revisão: juntas, elos e graus de liberdade</h2>
  </div>

No Capítulo 1 definimos um braço robótico como "múltiplas juntas e elos trabalhando juntos". Agora mapeemos isso no SO-ARM. Cada braço tem cinco juntas rotacionais mais uma garras paralela:

| Junta | Nome | Função |
| :--- | :--- | :--- |
| 1 | Rotação do ombro (base) | Gira todo o braço para a esquerda / direita |
| 2 | Elevação do ombro | Sobe / desce o braço superior |
| 3 | Cotovelo | Sobe / desce o antebraço |
| 4 | Arfagem do punho | Inclina a garras para cima / baixo |
| 5 | Rotação do punho | Gira a garras no próprio eixo |
| 6 | Garras | Abre / fecha os dedos |

Cinco graus de liberdade de rotação posicionam e orientam a garras em qualquer ponto do espaço de trabalho, e a garras atua como **efetor final** — a parte que toca a peça.

Cada junta é acionada por um servo de barramento Feetech STS3215. No total, um par líder-seguidor de SO-ARM usa **12 servos** — esse é todo o sistema de atuação do robô.

</section>

## 4.2 O que é um atuador servo

<section id="servo" className="section-card">
  <div className="section-title">
    <span>Atuadores</span>
    <h2>4.2 O que é um atuador servo</h2>
  </div>

Um **atuador** converte comandos em movimento. Braços robóticos costumam usar motores elétricos com algum tipo de realimentação. Um **servo** (servomotor) empacota três coisas em uma carcaça:

1. Um **motor CC** que produz rotação;
2. Uma **caixa de redução** que troca velocidade por torque;
3. Um **sensor de posição** (potenciômetro ou encoder magnético) mais um circuito de controle que continuamente move o motor rumo ao ângulo comandado.

Envie a um servo uma posição-alvo e ele se move até lá e mantém — sem controlador externo. Esse comportamento de "ir ao ângulo e segurar" é exatamente o que uma junta precisa.

### Por que a relação de engrenagens importa

A relação da caixa de redução determina quanto a saída gira por rotação do motor — e quanto torque você ganha. O SO-ARM usa servos STS3215 com relações diferentes por junta:

| Modelo de servo | Relação | Usado em |
| :--- | :--- | :--- |
| ST-3215-C044 (7.4V) | 1:191 | Líder SO101 L1, L3 |
| ST-3215-C001 (7.4V) | 1:345 | Líder SO101 L2 |
| ST-3215-C046 (7.4V) | 1:147 | Líder SO101 L4–L6 |
| ST-3215-C001 (7.4V) / C018 (12V) / C047 (12V) | 1:345 | Seguidor F1–F6 |

- **Relação maior (1:345)** = mais torque, menos velocidade — necessária onde o braço levanta o próprio peso e a carga (juntas do seguidor, ombro L2 do líder).
- **Relação menor (1:147 / 1:191)** = mais rápido e leve — nas juntas do líder que a mão humana movimenta.

:::note
Como o líder do SO-ARM101 usa relações diferentes em L1-L3 em relação ao SO-ARM100, a configuração de servos do Capítulo 6 deve seguir exatamente a versão do seu kit. Um servo com relação inesperada produz calibração e seguimento errados.
:::

</section>

## 4.3 O barramento serial: um cabo, seis servos

<section id="bus-servo" className="section-card">
  <div className="section-title">
    <span>Comunicação</span>
    <h2>4.3 O barramento serial: um cabo, seis servos</h2>
  </div>

Servos de hobby tradicionais precisam cada um do próprio fio de sinal (PWM). O STS3215 é um **servo de barramento serial**: cada servo se conecta a um barramento compartilhado de 3 fios (GND, VCC, DATA) e se encadeia ao próximo.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/all_motos.png" alt="Cabeamento do barramento de servos do SO-ARM101" />
</div>

Dois conceitos fazem isso funcionar:

- **ID do servo**: cada servo em um barramento tem um ID (1-6 no SO-ARM, correspondendo à junta). Os comandos no barramento carregam o ID de destino, então os seis servos compartilham um fio sem confusão. Na configuração de fábrica (Capítulo 6), os IDs são gravados um servo por vez.
- **Baud rate (taxa de transmissão)**: servos e placa devem concordar na velocidade de comunicação; a ferramenta de configuração grava um baud rate consistente em cada servo.

O protocolo do barramento também permite **ler** de volta a posição, temperatura, tensão e carga de cada servo — é assim que o braço líder reporta o movimento humano durante a teleoperação e como o estado do seguidor é gravado nos datasets.

:::danger
Como todos os servos compartilham um barramento, gravar um ID afeta todos os servos com aquele ID. Se houver IDs duplicados (por exemplo, dois servos respondendo como ID 4), regravar o ID 4 muda **ambos**. Por isso os IDs são sempre programados com um único servo conectado por vez — e por isso a ferramenta de depuração do Capítulo 7 pede para desconectar os outros servos primeiro.
:::

</section>

## 4.4 A placa de controle, o cabeamento e a alimentação

<section id="wiring" className="section-card">
  <div className="section-title">
    <span>Cabeamento</span>
    <h2>4.4 A placa de controle, o cabeamento e a alimentação</h2>
  </div>

Cada braço tem uma pequena **placa de controle de servos LeRobot**: de um lado o soquete de 3 fios do barramento, do outro um conector USB-C para o computador e um jack DC para alimentação.

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/02-2-install-controller-board-soarm-en.webp" alt="Instalação da placa de controle" />
</div>

Regras que evitam as falhas de hardware mais comuns:

- **O USB-C carrega apenas dados.** O cabo USB não alimenta os servos — a fonte DC também precisa estar conectada para algo se mover.
- **A tensão deve corresponder ao tipo de servo**: 5V para as versões STS3215 de 7.4V, 12V para as de 12V. O braço líder sempre usa motores de 7.4V (fonte de 5V). No kit Pro, o seguidor usa fonte de 12V.
- **Desligue antes de conectar ou desconectar** cabos de servo, USB ou conectores de energia.
- O primeiro servo (ID 1, base) se conecta à placa; cada servo seguinte se conecta ao anterior. Se o LED de um servo está apagado, o cabo anterior pode estar frouxo.

</section>

## 4.5 Resumo

<section id="summary" className="section-card">
  <div className="section-title">
    <span>Resumo</span>
    <h2>4.5 Resumo</h2>
  </div>

- Um SO-ARM = 5 juntas rotacionais + garras, um servo de barramento STS3215 por junta.
- Um servo é motor + redução + realimentação de posição; a relação de engrenagens troca velocidade por torque.
- Os seis servos compartilham um barramento serial de 3 fios; os IDs os distinguem e as posições podem ser lidas de volta.
- A placa de controle faz a ponte entre USB (dados) e DC (energia) para o barramento — ambos devem estar conectados, com a tensão correta.

No próximo capítulo montamos o ambiente de software e depois configuramos os motores e montamos os braços.

</section>

</div>
