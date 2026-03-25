---
description: Controle de LED com RFID
title: Controle de LED com RFID
keywords:
  - Arduino
  - Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /RFID_Control_LED
last_update:
  date: 2/15/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/RFID_Control_LED/
---

<!-- ---
name: RFID Control LED
category: Tutorial
oldwikiname:  RFID Control LED
prodimagename:
surveyurl: https://www.research.net/r/RFID_Control_LED
--- -->

O Leitor RFID de 125KHz pode ler dados da tag RFID. Ele pode ser usado em alguns sistemas de IoT ou de Controle Inteligente.

Esta demonstração mostrará como ler dados da tag RFID e controlar um LED.

**Hardware Necessário：**

* Arduino

* Leitor RFID de 125KHz

* Tag RFID

**Circuito：**

Conecte o Leitor RFID aos pinos D2 e D3.

![](https://files.seeedstudio.com/wiki/RFID_Control_LED/img/Sidekick_39_1.png)

**Código:**

O módulo Leitor RFID possui um CI de controle interno que o torna fácil de controlar. Quando há uma tag RFID próxima ao Leitor, ele irá então enviar o ID da tag via UART.

Você pode fazer algum processamento no código para diferentes IDs.

O seguinte código não verifica o ID; qualquer tag próxima ao Leitor pode alterar o estado do LED.

Abra a IDE do Arduino, clique em File -&gt; Sketchbook -&gt; RFID Reader.

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
