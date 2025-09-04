---
description: Renbotics_ServoShield_Rev
title: Renbotics Servo Shield Rev

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Renbotics_ServoShield_Rev
last_update:
  date: 02/02/2023  
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/h/t/httpsstatics3.seeedstudio.comimagesproductservoshieldkitlarge.jpg" alt="pir" width={600} height="auto" /></p>

El Renbotics ServoShield es un shield compatible con Arduino que utiliza dos contadores de década 4017 para controlar hasta 16 servos usando solo 4 pines (pines digitales 6 a 9) y tan poco como un temporizador de 8 bits (Timer 2) en modo estándar o dos temporizadores de 16/8 bits (Timer 1 y Timer 2 para Duemilanove o Timer 3 para Mega) en modo de alta precisión. También incluye un área de prototipado estilo breadboard de 196 puntos.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Renbotics-ServoShield-V2.0-p-1299.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

* 16 Canales de Servo

* Terminal de tornillo conveniente para la fuente de alimentación del servo

* Área de prototipado estilo breadboard de 196 puntos

* Compatible con Arduino Duemilanove y Arduino Mega

* API fácil de usar

## Ideas de Aplicación

* Robótica

* Animatrónica

* Arte Mecatrónico

## Uso

### Instalación de Hardware

Vista Ensamblada:

<p style={{textAlign: 'center'}}><img src="http://bz.seeedstudio.com/depot/images/product/StackedLarge.jpg" alt="pir" width={600} height="auto" /></p>

### Programación

**Ejemplo 1: Barrido simple de servo**

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

## Lista de Materiales (BOM) / lista de partes

* 2 x Contador de Década 4017 DIP16

* 2 x Capacitores de 10nf

* 2 x Conectores Hembra de Apilamiento de Shield de 6 pines

* 2 x Conectores Hembra de Apilamiento de Shield de 8 pines

* 1 x Terminal de Tornillo de 2 pines

* 3 x Conectores Macho Separables de 16 pines

## Seguimiento de Versiones

| Revisión | Descripciones | Lanzamiento |
|----------|-------------|-------------|
| v1.1 | Lanzamiento público inicial | 23 de agosto, 2009 |

## Recursos

* [Manual Rev 1.5](https://www.seeedstudio.com/depot/datasheet/RenboticsServoShield1.5.pdf)

* [Librería Arduino Rev 1.3 (Actualizada 07-09-2009)](https://www.seeedstudio.com/depot/images/product/ServoShield.zip)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>