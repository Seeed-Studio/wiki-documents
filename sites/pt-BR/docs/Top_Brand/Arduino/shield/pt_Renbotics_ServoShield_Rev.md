---
description: Renbotics_ServoShield_Rev
title: Renbotics Servo Shield Rev
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Renbotics_ServoShield_Rev
last_update:
  date: 02/02/2023
  author: Eico
no_comments: false
createdAt: '2023-02-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Renbotics_ServoShield_Rev/
---

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/h/t/httpsstatics3.seeedstudio.comimagesproductservoshieldkitlarge.jpg" alt="pir" width={600} height="auto" /></p>

O Renbotics ServoShield é um shield compatível com Arduino que usa dois contadores década 4017 para acionar até 16 servos utilizando apenas 4 pinos (pinos digitais 6 a 9) e apenas um timer de 8 bits (Timer 2) no modo padrão ou dois timers de 16/8 bits (Timer 1 e Timer 2 para Duemilanove ou Timer 3 para Mega) no modo de alta precisão. Ele também inclui uma área de prototipagem estilo breadboard de 196 pontos.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Renbotics-ServoShield-V2.0-p-1299.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Recursos

* 16 canais de servo

* Conectores tipo borne para alimentação dos servos

* Área de prototipagem estilo breadboard com 196 pontos

* Compatível com Arduino Duemilanove e Arduino Mega

* API fácil de usar

## Ideias de Aplicação

* Robótica

* Animatrônica

* Arte Mecatrônica

## Uso

### Instalação de Hardware

Vista montada:

<p style={{textAlign: 'center'}}><img src="http://bz.seeedstudio.com/depot/images/product/StackedLarge.jpg" alt="pir" width={600} height="auto" /></p>

### Programação

**Exemplo 1: Varredor de servo simples**

```cpp
#include <ServoShield.h>
ServoShield servos; //Create a ServoShield object
void setup()
{
    for (int servo = 0; servo < 16; servo++)//Initialize all 16 servos
    {
        servos.setbounds(servo, 1000, 2000); //Set the minimum and maximum pulse duration
        servos.setposition(servo, 1500); //Set the initial position of the servo
    }
    servos.start(); //Start the servo shield
}
void loop()
{
    for(int pos = 1000; pos < 2000; pos++) //Move the servos from 0 degrees to 180 degrees
    { //in steps of 1 degree
        for (int i = 0; i < 16; i++) //for all 16 servos
        servos.setposition(i, pos); //Tell servo to go to position in variable 'pos'
        delay(1);
    }
    for(int pos = 2000; pos >= 1000; pos--)//Move the servos from 180 degrees to 0 degrees
    {
        for (int i = 0; i < 16; i++) //all 16 servos
        servos.setposition(i, pos); //Tell servo to go to position in variable 'pos'
        delay(1);
    }
}
```

## Lista de Materiais (BOM) / lista de peças

* 2 x 4017 Decade Counter DIP16

* 2 x Capacitores de 10 nF

* 2 x Headers fêmea de empilhamento para shield de 6 pinos

* 2 x Headers fêmea de empilhamento para shield de 8 pinos

* 1 x Borne de 2 pinos

* 3 x Headers macho separáveis de 16 pinos

## Rastreador de Versão

| Revisão | Descrições | Lançamento |
|----------|-------------|---------|
| v1.1 | Lançamento público inicial | 23 de ago de 2009 |

## Recursos

* [Manual Rev 1.5](https://www.seeedstudio.com/depot/datasheet/RenboticsServoShield1.5.pdf)

* [Arduino Library Rev 1.3 (Atualizada em 07-09-2009)](https://www.seeedstudio.com/depot/images/product/ServoShield.zip)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
