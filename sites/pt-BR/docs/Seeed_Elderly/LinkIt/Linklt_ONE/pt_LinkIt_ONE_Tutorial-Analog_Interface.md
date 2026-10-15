---
description: Tutorial LinkIt ONE - Interface Analógica
title: Tutorial LinkIt ONE - Interface Analógica
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /LinkIt_ONE_Tutorial-Analog_Interface
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/LinkIt_ONE_Tutorial-Analog_Interface/
---
**O que estamos fazendo**

Nas seções anteriores, aprendemos como controlar a entrada e a saída do circuito usando a interface digital. Nesta seção, vamos aprender como variar a saída usando um dispositivo analógico chamado potenciômetro (também conhecido como resistor variável). Um potenciômetro é usado para variar a tensão na faixa de 0 ~ 5V. A MPU lê o valor de tensão na faixa de 0–1023. Isso pode ser usado para controlar o brilho do LED (interface de saída de simulação PWM). Se o potenciômetro for girado no sentido horário, o LED aumenta o brilho gradualmente. Se for girado no sentido anti-horário, a luminosidade diminui.

**Coisas de que você precisa**

*   LinkIt One x 1

*   Placa de ensaio x 1

*   Resistores 330Ω,10kΩ,1kΩ x 1

*   LED de 5 mm x 1

*   Potenciômetro deslizante 10kΩ x 1

*   Transistor（2N3904） x 1

**Esquemático**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Analog_Interface/img/LinkItONE_Kit_6_1.jpg)

**Conexão**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Analog_Interface/img/LinkItONE_Kit_6_2.jpg)

**Código**

Clique no botão abaixo para baixar o código para o kit:

[![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Analog_Interface/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

Você pode descompactar o arquivo na pasta **Examples** da sua IDE Arduino.

Para acessar o código de demonstração, abra:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Basic -&gt; L6_Analog_Ctrl_LED_
```
const int led = 3;
const int pot = A0;

void setup()
{
    // nothing to initialize
}

void loop()
{
    int val = analogRead(pot);              // get value from potentiometer
    val = map(val, 0, 1023, 0, 255);        // make the value to 0~255
    analogWrite(led, val);                  // set the pwm of led
    delay(10);
}
```
**Solução de problemas**

*   Problema de interface de pino?

    *   Se você tiver conectado a entrada ao pino digital em vez do pino analógico, o circuito pode não funcionar corretamente.

*   Não está funcionando?

    *   O potenciômetro tem três pinos. Verifique se você conectou o pino do meio à interface analógica, caso contrário o circuito pode não funcionar corretamente.

**Deixando melhor**

Para controlar a frequência de cintilação do LED com um potenciômetro, envie o seguinte código
Para abrir o código de demonstração:

Para abrir o código de demonstração：

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Extend_Lesson –&gt; L6_Flashing_LED_

**Mais ideias**

O que mais pode ser feito com o valor de retorno do potenciômetro?

**Referência**
<!-- 
*   [The Basics](/pt-br/LinkIt_ONE_Tutorial-The_Basics)

*   [Hello World](/pt-br/LinkIt_ONE_Tutorial-Hello_World)

*   [Push Button](/pt-br/LinkIt_ONE_Tutorial-Push_Button)

*   [Marquee](/pt-br/LinkIt_ONE_Tutorial-Marquee)

*   [Colorful World](/pt-br/LinkIt_ONE_Tutorial-Colorful_World)

*   [Analog Interface](/pt-br/LinkIt_ONE_Tutorial-Analog_Interface)

*   [Mini Servo](/pt-br/LinkIt-ONE-Tutorial---Mini-Servo)

*   [Light Sensor](/pt-br/LinkIt_ONE_Tutorial-Light-Sensor)

*   [SMS Control the LED](/pt-br/LinkIt_ONE_Tutorial-SMS_control_the_LED)

*   [Get Temperature with Webpage](/pt-br/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage) -->

## Suporte Técnico & Discussão sobre Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
