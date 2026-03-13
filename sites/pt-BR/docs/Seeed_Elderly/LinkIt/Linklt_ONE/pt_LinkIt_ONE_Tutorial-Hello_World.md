---
description: Tutorial LinkIt ONE - Hello World
title: Tutorial LinkIt ONE - Hello World
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /LinkIt_ONE_Tutorial-Hello_World
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/LinkIt_ONE_Tutorial-Hello_World/
---

**O que estamos fazendo**

Na seção anterior, tivemos uma visão de como controlar um LED com componentes eletrônicos, mas vamos fazer alguns truques com software para controle automático do LED. Você só precisa enviar o código que está disponível nesta seção. O código escrito inicialmente liga o LED, após um atraso de 3 s ele o desliga. Vamos começar a usar a placa LinkIt.

**Itens necessários**

*   LinkIt One x 1

*   Placa de ensaio x 1

*   Resistores 330Ω,1kΩ x 1

*   LED de 5 mm x 1

*   Transistor（2N3904) x 1

**Esquema**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Hello_World/img/LinkItONE_Kit_1_1.jpg)

**Conexão**

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Hello_World/img/LinkItONE_Kit_1_2.png)

**Código**

Clique no botão abaixo para baixar o código para o kit:

[![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Hello_World/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

Você pode descompactar o arquivo na pasta **Examples** da sua IDE Arduino.

Para acessar o código de demonstração, abra:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Basic -&gt; L2_Control_LED_
```
const int pinLED = 3;                      // LED connect to D13

void setup()
{
    pinMode(pinLED, OUTPUT);                // set direction of D13-OUTPUT
}

void loop()
{
    digitalWrite(pinLED, HIGH);             // LED on
    delay(3000);
    digitalWrite(pinLED, LOW);              // LED off
    delay(100);
}
```

**Solução de problemas**

*   Problema ao enviar o código?

    *   Nesse caso, o possível problema deve ser a seleção incorreta da porta de transferência. Você provavelmente deve modificá-la em "Tools&gt; Serial port&gt;".

*   Não consegue parar o processo?

    *   Isso ocorre quando o seu código está sendo executado em um loop infinito, então, para encerrar o processo, desconecte a fonte de alimentação da placa.

![](https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Hello_World/img/LinkItONE_Kit_2_3.jpg)

**Deixando melhor**

Na seção anterior usamos um capacitor para aumentar lentamente o brilho do LED e diminuir lentamente sua luminosidade. Vamos fazer a mesma coisa sem o capacitor, apenas alterando o código.

Para abrir o código de demonstração：

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Extend_Lesson –&gt; L2_Breath_LED_

**Mais ideias**

Como você altera a frequência do LED modificando o código?

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
