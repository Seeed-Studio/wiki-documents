---
description: Tutorial LinkIt ONE - Mundo Colorido
title: Tutorial LinkIt ONE - Mundo Colorido
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /LinkIt_ONE_Tutorial-Colorful_World
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/LinkIt_ONE_Tutorial-Colorful_World/
---
**O que estamos fazendo**

Agora que já sabemos como controlar o LED, vamos combinar isso com a ideia básica de combinação de cores. O R-Vermelho G-Verde B-Azul são as cores primárias; quando misturadas em diferentes proporções, produzem cores diferentes. Um LED RGB é composto por quatro pinos: o terminal mais longo é o terminal positivo e os outros três terminais são para controlar as cores RGB. Faça as conexões conforme mostrado na Fig5.2 e faça o upload do código.

**Coisas de que você precisa**

*   LinkIt One x 1

*   Placa de ensaio x 1

*   Resistores 330Ω,10kΩ,1kΩ x 3

*   LED RGB 8mm x 1
*   Transistor（2N3904） x 3
*   Botão x 3

**Esquemático**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Colorful_World/img//LinkItONE_Kit_5_1.jpg)

**Conexão**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Colorful_World/img//LinkItONE_Kit_5_2.jpg)

**Código**

Clique no botão abaixo para baixar o código do kit:

[![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Colorful_World/img//Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

Você pode descompactar o arquivo na pasta **Examples** da sua IDE Arduino.

Para acessar o código de demonstração, abra:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Basic -&gt; L5_Color_Pannel_
```
const int ledR = 2;
const int ledB = 3;
const int ledG = 4;

const int buttonR = 5;
const int buttonG = 6;
const int buttonB = 7;

void setup()
{
    pinMode(ledR, OUTPUT);                          // set all led pin OUTPUT
    pinMode(ledG, OUTPUT);
    pinMode(ledB, OUTPUT);

    pinMode(buttonR, INPUT);                        // set all button pin INPUT
    pinMode(buttonG, INPUT);
    pinMode(buttonB, INPUT);
}

void loop()
{
    int stateR = 1-digitalRead(buttonR);            // get state of button
    int stateG = 1-digitalRead(buttonG);
    int stateB = 1-digitalRead(buttonB);

    digitalWrite(ledR, stateR);                     // set led
    digitalWrite(ledG, stateG);
    digitalWrite(ledB, stateB);

    delay(10);
}
```
**Solução de problemas**

*   Exibição de cor incorreta

    *   Como há quatro pinos no LED, existe probabilidade de erro na conexão; verifique se todos os pinos de controle estão conectados aos terminais corretos

*   Aparência avermelhada？

    *   Em um LED RGB, a cor vermelha tem intensidade maior que as outras duas cores para uma dada tensão. Para deixar o tom geral da cor mais harmonioso, tente reduzir a intensidade do LED vermelho usando um valor de resistência maior.

**Deixando melhor**

Quer obter mais cores? Há dois botões para ajustar os valores RGB com aumentos sucessivos. Assim podemos encontrar mais cores. Tente montar o circuito ligando as duas interfaces de saída analógica (os valores RGB serão aumentados ou reduzidos). O código já foi definido para isso. (Saída analógica PWM, você obtém um valor de retorno da saída analógica de 0–1023 para usar.)

Para abrir o código de demonstração：

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Extend_Lesson –&gt; L5_Colourful_RGB_

**Mais ideias**

Como expandir o código para diminuir os valores RGB?

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

## Suporte Técnico & Discussão sobre Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
