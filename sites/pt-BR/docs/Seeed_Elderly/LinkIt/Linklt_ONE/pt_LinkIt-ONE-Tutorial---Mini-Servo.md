---
description: Tutorial LinkIt ONE - Mini Servo
title: Tutorial LinkIt ONE - Mini Servo
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /LinkIt-ONE-Tutorial---Mini-Servo
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/LinkIt-ONE-Tutorial---Mini-Servo/
---
**O que estamos fazendo**

O motor de passo (servo) é comumente usado em pequenos robôs e outras máquinas para controlar a posição angular. Ele é envolto por uma pequena caixa de engrenagens e posicionado pelos pulsos de controle em tempo. Nesta seção controlamos a posição angular do mini servo com a ajuda de um potenciômetro.

**Itens necessários**

*   LinkIt One x 1

*   Placa de conexão x 1
*   Potenciômetro deslizante 10kΩ x 1

*   Servo x 1

**Esquemático**

![](https://files.seeedstudio.com/wiki/LinkIt-ONE-Tutorial---Mini-Servo/img/LinkItONE_Kit_7_1.jpg)

**Conexão**

![](https://files.seeedstudio.com/wiki/LinkIt-ONE-Tutorial---Mini-Servo/img/LinkItONE_Kit_7_2.jpg)

**Código**

Clique no botão abaixo para baixar o código para o kit:

[![](https://files.seeedstudio.com/wiki/LinkIt-ONE-Tutorial---Mini-Servo/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

Você pode descompactar o arquivo na pasta **Examples** da sua IDE do Arduino.

Para acessar o código de demonstração, abra:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Basic -&gt; L7_Servo_
```
#include <Servo.h>

Servo myservo;              // create servo object to control a servo
int potpin = A0;             // analog pin used to connect the potentiometer
int val;                    // variable to read the value from the analog pin

void setup()
{
    myservo.attach(9);                  // attaches the servo on pin 9 to the servo object
}

void loop() {
    val = analogRead(potpin);          // reads the value of the potentiometer (value between 0 and 1023)
    val = map(val, 0, 1023, 0, 179);   // scale it to use it with the servo (value between 0 and 180)
    myservo.write(val);                // sets the servo position according to the scaled value
    delay(15);                         // waits for the servo to get there
}
```

**Solução de problemas**

*   Existem três pinos nos servos e eles são codificados por cores de acordo com sua funcionalidade: amarelo – porta analógica, vermelho – positivo, marrom escuro – terra. Portanto, faça as conexões de acordo com sua funcionalidade.

*   Verifique se a fonte de alimentação de 5V está conectada à placa.

**Deixando melhor**

Se a mini direção funcionou, podemos ajustar a velocidade de rotação usando um potenciômetro. Faça o upload do código a seguir para produzir diferentes funcionalidades.

Para acessar o código de demonstração, abra:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Extend_Lesson –&gt; L7_Servo_Speed_

**Mais ideias**

Como você controla dois servomotores simultaneamente para que possa fazer um robô?

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

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
