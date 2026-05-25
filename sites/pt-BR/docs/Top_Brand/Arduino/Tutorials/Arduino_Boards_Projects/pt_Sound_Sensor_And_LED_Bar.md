---
description: Sensor de Som e Barra de LED
title: Sensor de Som e Barra de LED
keywords:
  - Arduino
  - Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Sound_Sensor_And_LED_Bar
last_update:
  date: 2/15/2023
  author: jianjing Huang
createdAt: '2023-02-15'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Sound_Sensor_And_LED_Bar/
---

<!-- ---
name: Sound Sensor And LED Bar
category: Tutorial
oldwikiname:  Sound Sensor And LED Bar
prodimagename:
surveyurl: https://www.research.net/r/Relay_Control_LED
--- -->
Esta demonstração mostrará como usar o Sensor de Som e, para indicar a intensidade do som, precisamos de uma Barra de LED.

**Hardware Necessário：**

* Arduino

* Sensor de Som

* BARRA DE LED

**Circuito：**

A saída do sensor de som é um sinal analógico, nós o conectamos ao A0 do Seeeduino.

A Barra de LED precisa de 10 IOs, sobre a conexão, consulte por favor [LED Bar](https://arduino.cc/en/Tutorial/BarGraph).

![](https://files.seeedstudio.com/wiki/Sound_Sensor_And_LED_Bar/img/Sidekick_35_1.png)

**Código:**

Abra a IDE do Arduino, clique em File -&gt; Sketchbook -&gt; sound_sensor.

Podemos usar `analogRead()` para ler o valor do sensor de luz, esse valor indicará a intensidade da luz. Quanto mais forte a luz, maior o valor.

Para tornar os dados mais suaves, precisamos de alguma filtragem simples. Lemos o valor 32 vezes e tiramos o valor médio.

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
