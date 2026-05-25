---
description: Sensor de Luz e Barra de LEDs
title: Sensor de Luz e Barra de LEDs
keywords:
  - Arduino
  - Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Light_Sensor_and_LED_Bar
last_update:
  date: 2/15/2023
  author: jianjing Huang
createdAt: '2023-02-15'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Light_Sensor_and_LED_Bar/
---

<!-- ---
name: Light Sensor and LED Bar
category: Tutorial
oldwikiname:  Light Sensor and LED Bar
prodimagename:
surveyurl: https://www.research.net/r/Light_Sensor_and_LED_Bar
--- -->
Esta demonstração mostrará como usar o sensor de luz. Para indicar a intensidade da luz, precisamos de uma barra de LEDs.

**Hardware Necessário:**

* Arduino

* Sensor de Luz

* Barra de LEDs

**Circuito:**

A saída do Sensor de Luz é um sinal analógico, então o conectamos ao A0 do Seeeduino.

A barra de LEDs precisa de 10 IOs; sobre a conexão, consulte [LED Bar](https://arduino.cc/en/Tutorial/BarGraph).

![](https://files.seeedstudio.com/wiki/Light_Sensor_and_LED_Bar/img/Sidekick_33_1.png)

**Código:**

Abra a IDE do Arduino, clique em File -&gt; Sketchbook -&gt; light_sensor.

Podemos usar `analogRead()` para ler o valor do sensor de luz; esse valor indicará a intensidade da luz. Quando a luz é mais forte, o valor é maior.

Para deixar os dados mais estáveis, precisamos de uma filtragem simples. Lemos o valor 32 vezes e calculamos o valor médio.

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
