---
description: Projeto Três – Entrada Analógica v1.0b
title: Projeto Três – Entrada Analógica v1.0b
keywords:
  - Arduino
  - Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Project_Three-Analog_Input_v1b
last_update:
  date: 2/15/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Project_Three-Analog_Input_v1b/
---
<!-- ---
name: Project Three – Analog Input v1.0b
category: Tutorial
oldwikiname:  Project Three – Analog Input v1.0b
prodimagename:
surveyurl: https://www.research.net/r/Project_Three-Analog_Input_v1b
--- -->

O objetivo deste sketch é demonstrar uma forma de entrada analógica usando o potenciômetro Grove. Vamos usá-lo para definir o atraso para nossos LEDs piscando do projeto um.

Conecte o módulo LED ao conector Digital I/O D1/D2, como estava nos Projetos 1 e 2.
O pino D1 do Arduino alimenta o conector SIG do Grove de LED, e o pino D2 do Arduino é conectado ao conector NC do Grove de LED.

Conecte o módulo Potentiometer ao conector de entrada analógica A0/A1.

O módulo Potentiometer produz uma tensão analógica em sua saída SIG, que é conectada à entrada analógica A0 do Arduino no conector de entrada A0/A1.

![](https://files.seeedstudio.com/wiki/Project_Three-Analog_Input_v1b/img/Analog_Input_v1.0b.jpg)

_**Agora faça o upload do seguinte sketch Arduino:**_

```cpp
// Project Three - Analog Input
//

void setup()
{
  pinMode(1, OUTPUT);
}

void loop()
{
  digitalWrite(1, HIGH);
  delay(analogRead(0));
  digitalWrite(1, LOW);
  delay(analogRead(0));
}
```

O valor máximo de atraso é 1023, pois esse é o limite superior do valor retornado pela função analogRead(). Você pode usar funções matemáticas para aumentar ou reduzir a faixa do atraso.

## Suporte Técnico & Discussão sobre Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
