---
description: Tutorial LinkIt ONE - Botão de Pressão
title: Tutorial LinkIt ONE - Botão de Pressão
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /LinkIt_ONE_Tutorial-Push_Button
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/LinkIt_ONE_Tutorial-Push_Button/
---
**O que estamos fazendo**

Agora já temos uma visão de como o software e o hardware funcionam a partir do capítulo anterior. Neste capítulo vamos aprender como integrar o software e o hardware para o controle do LED. Faça as conexões na protoboard conforme mostrado na Fig 3.2 e faça o upload do código. Agora este circuito funciona como uma chave de duas vias: quando você pressiona o botão de pressão do lado esquerdo o LED acende e quando o botão de pressão do lado direito é pressionado o LED é desligado.

**Coisas de que você precisa**

*   LinkIt One x 1

*   Placa de ensaio x 1

*   Resistores 330Ω, 1kΩ x 1

*   Resistor 10kΩ x 2

*   LED de 5 mm x 1

*   Transistor (2N3904) x 1

*   Chaves de botão de pressão x 2

**Esquemático**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Push_Button/img/LinkItONE_Kit_3_1.jpg)

**Conexão**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Push_Button/img/LinkItONE_Kit_3_2.jpg)

**Código**

Clique no botão abaixo para baixar o código para o kit:

[![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Push_Button/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

Você pode descompactar o arquivo na pasta **Examples** da sua IDE Arduino.

Para acessar o código de demonstração, abra:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Basic -&gt; L3_Control_LED_Button_
```
const int pinLED = 3;                      // LED connect to D13

const int btnOn  = 5;                       // button on
const int btnOff = 6;                       // button off

void setup()
{
    pinMode(pinLED, OUTPUT);                // set direction of D13-OUTPUT
    pinMode(btnOff, INPUT);                 // set direction of D2-INPUT
    pinMode(btnOn, INPUT);
}

void loop()
{
    if(0 == digitalRead(btnOn))            // button on pressed
    {
        digitalWrite(pinLED, HIGH);
    }

    if(0 == digitalRead(btnOff))
    {
        digitalWrite(pinLED, LOW);
    }
}
```

**Tornando isso melhor**

Mantendo a mesma conexão de hardware, faça o upload do seguinte código. A luminosidade aumenta quando o botão de pressão esquerdo é pressionado e diminui quando o botão de pressão direito é pressionado.

Para acessar o código de demonstração, abra:：

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Extend_Lesson –&gt; L3_Brightness_

**Mais ideias**

Como você modificaria o código de forma que a frequência de piscagem do LED mudasse?

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
