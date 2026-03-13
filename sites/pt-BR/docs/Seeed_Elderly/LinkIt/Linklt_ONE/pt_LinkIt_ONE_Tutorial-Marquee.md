---
description: Tutorial LinkIt ONE - Marquee
title: Tutorial LinkIt ONE - Marquee
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /LinkIt_ONE_Tutorial-Marquee
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/LinkIt_ONE_Tutorial-Marquee/
---
**O que estamos fazendo**

Os experimentos nas seções anteriores usaram apenas um LED, mas para mostrar efeitos de luz deslumbrantes vamos usar três LEDs. Faça as conexões como mostrado na Fig 4.2, envie o código fornecido abaixo e observe as mudanças que acontecem.

**Coisas de que você precisa**

*   LinkIt One x 1
*   Placa de ensaio x 1

*   Resistores 330Ω,1kΩ x 3

*   LED de 5 mm x 3

*   Transistor (2N3904) x 3

**Esquemático**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Marquee/img/LinkItONE_Kit_4_1.jpg)

**Conexão**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Marquee/img/LinkItONE_Kit_4_2.jpg)

**Código**

Clique no botão abaixo para baixar o código para o kit:

[![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Marquee/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

Você pode descompactar o arquivo na pasta **Examples** da sua IDE Arduino.

Para acessar o código de demonstração, abra:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Basic -&gt; L4_Control_LEDs_
```
const int pinLed1    = 2;                       // pin of led1
const int pinLed2    = 3;                       // pin of led2
const int pinLed3    = 4;                       // pin of led3

void setup()
{
    pinMode(pinLed1, OUTPUT);                   // set all pin OUTPUT
    pinMode(pinLed2, OUTPUT);
    pinMode(pinLed3, OUTPUT);
}


void loop()
{
    digitalWrite(pinLed4, LOW);                 // led4 off
    digitalWrite(pinLed1, HIGH);                // led1 on
    delay(100);

    digitalWrite(pinLed1, LOW);                 // led1 off
    digitalWrite(pinLed2, HIGH);                // led2 on

    delay(100);

    digitalWrite(pinLed2, LOW);                 // led2 off
    digitalWrite(pinLed3, HIGH);                // led3 on

    delay(100);

    digitalWrite(pinLed3, LOW);                 // led3 off
    digitalWrite(pinLed4, HIGH);                // led4 on

    delay(100);
}
```

**Solução de problemas**

*   Verifique a polaridade dos LEDs.

*   Certifique-se de que você conectou os LEDs aos pinos de porta corretos.

**Melhorando**

Envie o seguinte código com a mesma conexão na protoboard para obter diferentes efeitos de piscagem.

Para acessar o código de demonstração, abra:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Extend_Lesson –&gt; L4_Control_LEDs_Speed_

**Mais ideias**

Modifique o código existente de modo que a frequência de piscar do LED aumente.

**Referência**

<!-- *   [The Basics](/pt-br/LinkIt_ONE_Tutorial-The_Basics)

*   [Hello World](/pt-br/LinkIt_ONE_Tutorial-Hello_World)

*   [Push Button](/pt-br/LinkIt_ONE_Tutorial-Push_Button)

*   [Marquee](/pt-br/LinkIt_ONE_Tutorial-Marquee)

*   [Colorful World](/pt-br/LinkIt_ONE_Tutorial-Colorful_World)

*   [Analog Interface](/pt-br/LinkIt_ONE_Tutorial-Analog_Interface)

*   [Mini Servo](/pt-br/LinkIt-ONE-Tutorial---Mini-Servo)

*   [Light Sensor](/pt-br/LinkIt_ONE_Tutorial-Light-Sensor)

*   [SMS Control the LED](/pt-br/LinkIt_ONE_Tutorial-SMS_control_the_LED)

*   [Get Temperature with Webpage](/pt-br/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage) -->

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
