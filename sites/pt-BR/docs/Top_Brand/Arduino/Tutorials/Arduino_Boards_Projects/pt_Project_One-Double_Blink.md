---
description: Projeto Um - Piscar Duplo
title: Projeto Um - Piscar Duplo
keywords:
  - Arduino
  - Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Project_One-Double_Blink
last_update:
  date: 2/15/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Project_One-Double_Blink/
---
<!-- ---
name: Project One - Double Blink
category: Tutorial
oldwikiname:  Project One - Double Blink
prodimagename:  
surveyurl: https://www.research.net/r/Project_One-Double_Blink
--- -->
O objetivo deste projeto é demonstrar uma simples exibição de saída digital usando o Grove de LED. Conecte seu equipamento conforme mostrado na imagem abaixo:
Conecte o Grove de LED ao conector de E/S Digital D1/D2 no Grove Shield.
O pino D1 do Arduino alimenta o LED vermelho no conector D1 do Grove, e o pino D2 do Arduino alimenta o LED verde no conector D2 do Grove.

![](https://files.seeedstudio.com/wiki/Project_One-Double_Blink/img/Conn-one.jpg)

_**Agora faça o upload do seguinte sketch Arduino:**_

```
// Project One - Double Blink
//

int del=500; // adjust for blink rate

void setup()
{
    pinMode(1, OUTPUT);
    pinMode(2, OUTPUT);
}

void loop()
{
    digitalWrite(1, HIGH);
    digitalWrite(2, LOW);
    delay(del);
    digitalWrite(1, LOW);
    digitalWrite(2, HIGH);
    delay(del);
}
```

Como você pode ver, é bastante simples. Os dois LEDs piscam alternadamente, com o atraso entre os dois definido pela variável del. No entanto, ao fazer isso você pode experimentar por si mesmo o quão simples é usar o sistema Grove.

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
