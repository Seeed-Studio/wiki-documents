---
description: Tutorial LinkIt ONE - Sensor de Luz
title: Tutorial LinkIt ONE - Sensor de Luz
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /LinkIt_ONE_Tutorial-Light-Sensor
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/LinkIt_ONE_Tutorial-Light-Sensor/
---

**O que estamos fazendo**

É hora de conhecer novos sensores que podem tornar nossos projetos ainda mais interessantes. Um fotorresistor (resistor dependente de luz ou fotocélula) é um sensor de luz que varia seu valor de resistência com base na intensidade da luz ambiente. Um buzzer é um dispositivo eletroacústico usado para gerar um tom padrão quando está conectado à fonte de alimentação. Vamos usar ambos os componentes em nossos experimentos.

**Coisas de que você precisa**

*   LinkIt One x 1

*   Placa de ensaio x 1

*   Resistores 10kΩ, 1kΩ, 330Ω x 1

*   Buzzer x 1

*   Fotorresistor x 1

*   Transistor（2N3904）x 1

**Esquemático**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Light-Sensor/img/LinkItONE_Kit_8_1.jpg)

**Conexão**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Light-Sensor/img/LinkItONE_Kit_8_2.jpg)

**Código**

Clique no botão abaixo para baixar o código para o kit:

[![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Light-Sensor/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

Você pode descompactar o arquivo na pasta **Examples** da sua IDE Arduino.

Para acessar o código de demonstração, abra:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Basic -&gt; L8_Light_Control_Buzzer_
```
const int pinBuz   = 3;                        // pin define of LED
const int pinLight = A0;                        // pin define of Light Sensor

void setup()
{
    pinMode(pinBuz, OUTPUT);
    pinMode(pinLight, INPUT);
}

void loop()
{
    int value = analogRead(pinLight);
    value = map(value, 0, 1023, 255, 0);
    analogWrite(pinBuz, value);
    delay(100);
}
```
**Solução de problemas**

*   Sensor foto sensível não funciona?

    *   O espaçamento dos fios dos terminais do fotorresistor não é padronizado. É fácil que os terminais entrem em curto. Verifique com cuidado.

*   Sem som?

    *   Os terminais do buzzer são muito curtos. Verifique cuidadosamente se eles estão inseridos corretamente na protoboard.

**Deixando melhor**

Vamos controlar ainda mais o tom do buzzer usando o fotorresistor. Tons diferentes podem ser gerados se você variar a intensidade de luz que incide sobre o fotorresistor. Envie o seguinte código e observe a diferença.

Para acessar o código de demonstração, abra:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Extend_Lesson –&gt; L8_Buzzer_Music_

**Mais ideias**

Podemos fazer aplicações mais interessantes usando a fotocélula. Tente fazer um presente de Natal sensível à luz.

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
