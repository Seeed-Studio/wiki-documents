---
description: Projeto Dois – Entrada Digital
title: Projeto Dois – Entrada Digital
keywords:
  - Arduino
  - Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Project_Two-Digital_Input
last_update:
  date: 2/15/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Project_Two-Digital_Input/
---
<!-- ---
name: Project Two – Digital Input
category: Tutorial
oldwikiname:  Project Two – Digital Input
prodimagename:
surveyurl: https://www.research.net/r/LinkIt_ONE_Tutorial-The_Basics
--- -->

O objetivo deste projeto é demonstrar duas formas de entrada digital – usando o botão e o interruptor de inclinação. Pressionar qualquer um dos botões acenderá o respectivo LED, e ativar o interruptor de inclinação acenderá ambos os LEDs.

1. Conecte o LED ao conector de E/S Digital D1/D2, como foi feito nos Projetos 1 e

2. O pino D1 do Arduino alimenta o LED vermelho no conector D1 do Grove, e o pino D2 do Arduino alimenta o LED verde no conector D2 do Grove.

3. Conecte o interruptor de inclinação ao conector de E/S Digital D5/D6.

4. O conector D1 do Grove do interruptor de inclinação envia um sinal alto ou baixo para a entrada digital D5 do Arduino.
5. Conecte o Grove Twin Button ao conector de entrada D7/D8 (na segunda linha.)

6. O botão vermelho do Grove Twin Button usa o conector D1 para enviar um sinal para a entrada digital D7 do Arduino, e o botão verde usa o conector D2 para enviar um sinal para a entrada digital D8 do Arduino.
7.

![](https://files.seeedstudio.com/wiki/Project_Two-Digital_Input/img/Conn-two.jpg)

_**Agora envie o seguinte sketch Arduino:**_

```cpp
// Project Two - Digital Inputs
//

void setup()
{
    pinMode(1, OUTPUT);
    pinMode(2, OUTPUT);
    pinMode(5, INPUT);
    pinMode(7, INPUT);
    pinMode(8, INPUT);
}

void loop()
{

    if (digitalRead(5)==HIGH)
    {
        digitalWrite(1, HIGH);
        digitalWrite(2, HIGH);
        delay(100);
        digitalWrite(1, LOW);
        digitalWrite(2, LOW);
    }

    if (digitalRead(7)==HIGH)
    {
        digitalWrite(1, HIGH);
        delay(200);
        digitalWrite(1, LOW);
    }
    if (digitalRead(8)==HIGH)
    {
        digitalWrite(2, HIGH);
        delay(200);
        digitalWrite(2, LOW);
    }
}
```

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
