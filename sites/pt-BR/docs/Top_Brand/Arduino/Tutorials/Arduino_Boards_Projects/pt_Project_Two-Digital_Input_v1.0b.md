---
description: Projeto Dois - Entrada Digital v1.0b
title: Projeto Dois - Entrada Digital v1.0b
keywords:
  - Arduino
  - Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Project_Two-Digital_Input_v1.0b
last_update:
  date: 2/15/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Project_Two-Digital_Input_v1.0b/
---

<!-- ---
name: Project Two - Digital Input v1.0b
category: Tutorial
oldwikiname:  Project Two - Digital Input v1.0b
prodimagename:
surveyurl: https://www.research.net/r/Project_Two-Digital_Input_v1b
--- -->

O objetivo deste projeto é demonstrar duas formas de entrada digital – usando o botão Grove e o tilt switch Grove. Pressionar o botão acenderá o LED e ativar o tilt switch acenderá o LED.

**Conexões:**

1. Conecte o Módulo LED ao conector de E/S Digital D1/D2, como foi feito nos Projetos 1.

2. O pino D1 do Arduino alimenta o LED no conector SIG do Grove, e o pino D2 do Arduino conecta ao conector NC do LED Grove.

3. Conecte o Tilt Switch Grove ao conector de E/S Digital D5/D6.

4. O conector SIG do Tilt Switch Grove envia um sinal alto ou baixo para a entrada digital D5 do Arduino.

5. Conecte o Módulo de Botão ao conector de entrada D7/D8 (na segunda linha).

6. O Button Grove usa o conector SIG para enviar um sinal para a entrada digital D7 do Arduino.
![](https://files.seeedstudio.com/wiki/Project_Two-Digital_Input_v1.0b/img/Digitalv1.0b.jpg)

_**Agora faça o upload do seguinte sketch Arduino:**_

```cpp
// Project Two - Digital Inputs
//

void setup()
{
  pinMode(1, OUTPUT);
  pinMode(5, INPUT);
  pinMode(7, INPUT);
}

void loop()
{

if (digitalRead(5)==HIGH)
  {
    digitalWrite(1, HIGH);
    delay(100);
    digitalWrite(1, LOW);
  }

  if (digitalRead(7)==HIGH)
  {
    digitalWrite(1, HIGH);
    delay(200);
    digitalWrite(1, LOW);
  }

}
```

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
