---
description: Projeto Quatro – Noise Maker
title: Projeto Quatro – Noise Maker
keywords:
  - Arduino
  - Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Project_Four-Noise_Maker
last_update:
  date: 2/15/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Project_Four-Noise_Maker/
---
<!-- ---
name: Projeto Quatro – Noise Maker
category: Tutorial
oldwikiname:  Projeto Quatro – Noise Maker
prodimagename:
surveyurl: https://www.research.net/r/Project_Four-Noise_Maker
--- -->

O objetivo deste sketch é usar o buzzer piezo para fazer um ruído de bip.
O potenciômetro é usado novamente como uma entrada analógica para variar o tempo de atraso. À medida que você ajusta o potenciômetro, a velocidade dos bipes mudará.
A figura está incorreta - você precisa conectar o potenciômetro ao conector de entrada analógica A0/A1, como no Projeto 3.
O potenciômetro produz uma tensão analógica na sua saída D1, que é conectada à entrada analógica A0 do Arduino no conector de entrada A0/A1.
Conecte o buzzer ao conector D6/D7 de E/S digital. O sketch usa o pino D6 do Arduino para enviar energia ao buzzer na sua entrada D1.

![](https://files.seeedstudio.com/wiki/Project_Four-Noise_Maker/img/Conn-four.jpg)

_**Agora faça o upload do seguinte sketch do Arduino:**_

```cpp
// Project Four - Noise maker
//

void setup()
{
  pinMode(6, OUTPUT);
}

void loop()
{
  digitalWrite(6, HIGH);
  delay(analogRead(0));
  digitalWrite(6, LOW);
  delay(analogRead(0));
}
```

Como você pode ver, o piezo pode ser usado como outra forma de saída digital. Ao usar esta unidade Grove, não se esqueça de definir o pino de saída conectado ao Grove de volta para LOW quando quiser que o som seja desligado.

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
