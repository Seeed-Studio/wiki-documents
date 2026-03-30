---
description: Sensor de Temperatura
title: Sensor de Temperatura
keywords:
  - Arduino
  - Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /temperature_sensor
last_update:
  date: 2/15/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/temperature_sensor/
---

<!-- ---
name: Sensor de Temperatura
category: Tutorial
oldwikiname:  Sensor de Temperatura
prodimagename:
surveyurl: https://www.research.net/r/Temperature_Sensor
--- -->
Você pode usar o Temp &amp; Humi Sensor para obter a temperatura e a umidade da sua casa.

Esta demonstração mostrará como obter o valor e exibi‑lo no LCD.

**Hardware Necessário:**

* Arduino

* Temp &amp; Humi Sensor

* LCD

**Circuito:**

Temp &amp; Humi Sensor conectado ao A0.

Sobre a conexão do LCD, consulte [LCD](https://arduino.cc/en/Tutorial/LiquidCrystal)

![](https://github.com/Jeremyym/Temperature_Sensor/raw/master/img/Sidekick_34_1.png)

**Código:**

Abra o Arduino IDE, clique em File -&gt; Shetchbook -&gt; TempHumiSensor.

Você pode obter a umidade com readHumidity() e a temperatura com readTemperature(). Essas 2 funções retornarão um valor float.

Sobre o LCD, consulte [LCD](https://arduino.cc/en/Tutorial/LiquidCrystal).

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
