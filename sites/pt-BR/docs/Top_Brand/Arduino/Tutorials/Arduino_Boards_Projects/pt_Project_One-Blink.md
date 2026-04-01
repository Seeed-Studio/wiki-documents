---
description: Projeto Um - Piscar
title: Projeto Um - Piscar
keywords:
  - Arduino
  - Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Project_One-Blink
last_update:
  date: 2/15/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Project_One-Blink/
---
<!-- ---
name: Project One - Blink
category: Tutorial
oldwikiname:  Project One - Blink
prodimagename:
surveyurl: https://www.research.net/r/Project_One-Blink
--- -->

O objetivo deste projeto é demonstrar uma exibição simples de saída digital usando o twig de LED. Conecte seu equipamento como mostrado na imagem abaixo:
Conecte o LED Twig ao conector de E/S Digital D1/D2 no Grove Shield.
O pino D1 do Arduino alimenta o LED verde no conector SIG do Twig.

![](https://files.seeedstudio.com/wiki/Project_One-Blink/img/Blinkv1.0.jpg)

_**Agora faça o upload do seguinte sketch Arduino:**_

```
// Project One - Double Blink
//

int del=500; // adjust for blink rate

void setup()
{
  pinMode(1, OUTPUT);
}

void loop()
{
  digitalWrite(1, HIGH);

  delay(del);
  digitalWrite(1, LOW);

  delay(del);
}
```

É simples. O LED pisca alternadamente, com o atraso entre os dois definido pela variável del. No entanto, ao fazer isso, você pode experimentar por si mesmo como o sistema Grove é simples de usar.

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
