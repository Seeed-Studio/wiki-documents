---
description: Controle Remoto IR
title: Controle Remoto IR
keywords:
  - Arduino
  - Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /IR_Remote
last_update:
  date: 2/15/2023
  author: jianjing Huang
createdAt: '2023-02-15'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/IR_Remote/
---
<!-- ---
name: IR Remote
category: Tutorial
oldwikiname:  IR Remote
prodimagename:  
surveyurl: https://www.research.net/r/IR_Remote
--- -->
IR é um meio de comunicação muito comum. Esta demonstração mostrará como usar o módulo de envio e recebimento IR.

Grande parte dos eletrodomésticos é controlada por controle remoto IR, como TV, ar-condicionado e assim por diante.

Também podemos usar o módulo IR para controlar esses aparelhos.

**Hardware Necessário：**

* Arduino

* Emissor IR

* Receptor IR

* Botão

**Circuito：**

O Emissor IR conecta ao D3 e o Receptor IR conecta ao A4.

![](https://files.seeedstudio.com/wiki/IR_Remote/img/Sidekick_36_1.png)

**Código:**

Há duas partes de código: obter o valor do controle remoto e enviar comando.

Obter valor do controle remoto：

Abra `revTest` da biblioteca `IRSendRev`, abra o Serial Monitor. Pegue seu controle remoto, pressione um botão e então você verá que uma série de números foi impressa.

![](https://files.seeedstudio.com/wiki/IR_Remote/img/Sidekick_36_2.png)

Essa série de números é o que precisamos, anote-a, usaremos depois.

Enviar comando

Abra o Arduino IDE, clique em File-&gt;Sketchbook-&gt;infrared.

Se você já obteve o valor da tecla liga-desliga da sua TV, aponte o emissor infravermelho para a sua TV e pressione o botão.

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
