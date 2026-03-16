---
description: Projeto Cinco – Controle de Relé
title: Projeto Cinco – Controle de Relé
keywords:
  - Arduino
  - Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Project_Five-Relay_Control
last_update:
  date: 2/15/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Project_Five-Relay_Control/
---
<!-- ---
name: Projeto Cinco – Controle de Relé
category: Tutorial
oldwikiname:  Projeto Cinco – Controle de Relé
prodimagename:
surveyurl: https://www.research.net/r/Project_Five-Relay_Control
--- -->

Neste projeto demonstraremos o uso do relé. Usando o botão, o botão um ligará o relé, e o botão dois o desligará. Como observado anteriormente, o relé pode suportar uma tensão máxima de 250 V a 10 ampères.

Mesmo que você possa ter habilidade com baixas tensões e microeletrônica, se você não for qualificado para trabalhar com tensões de rede, consulte um eletricista licenciado para concluir o trabalho.

Conecte o Twin Button ao conector de entrada D1/D2.

O botão vermelho do Grove Twin Button usa o conector D1 para enviar um sinal para a entrada digital D1 do Arduino, e o botão verde usa o conector D2 para enviar um sinal para a entrada digital D2 do Arduino.

Conecte o Relay ao conector de entrada D6/D7.

O pino D6 do Arduino envia um sinal para o Relay no conector D1. A luz vermelha do Grove Relay indica se o relé está ligado ou desligado, e o relé emite um clique quando comuta.

![](https://files.seeedstudio.com/wiki/Project_Five-Relay_Control/img/Conn-five.jpg)

_**Agora envie o seguinte sketch Arduino:**_

```cpp
// Project Five - Relay Control
//

void setup()
{
  pinMode(1, INPUT);
  pinMode(2, INPUT);
  pinMode(6, OUTPUT);
}

void loop()
{
  if (digitalRead(1)==HIGH)
  {
    digitalWrite(6, HIGH);
    delay(100);
  }
  if (digitalRead(2)==HIGH)
  {
    digitalWrite(6, LOW);
  }
}
```

<font color="magenta">
Ao usar isto com um XBee Carrier, esteja ciente de que você deve definir a saída 16 como baixa para garantir que o mosfet no XBee Carrier forneça energia suficiente para acionar o relé de forma confiável
</font>

A razão para a função de atraso depois de definir o relé como alto ou baixo é permitir que o sketch faça uma pausa – ignorando assim os botões por um décimo de segundo. Isso é mais comumente conhecido como “desbouncing por software”. Embora isso possa não parecer necessário neste exemplo específico, fazê-lo é um bom hábito a se adquirir.

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
