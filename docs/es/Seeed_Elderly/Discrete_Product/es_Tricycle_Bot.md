---
description: Robot Triciclo
title: Robot Triciclo
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Tricycle_Bot
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/3.jpg)

El Robot Triciclo es una plataforma robótica DIY fácil de ensamblar y compatible con Grove para educación. Incluye los materiales electrónicos y materiales estructurales que pueden ensamblarse fácilmente siguiendo la guía. El Robot Triciclo tiene tres pisos y cinco soportes entre el 2do y 3er piso, el 3er piso puede fijar muchos módulos mediante tornillos y tuercas.

Además, puedes fijar la placa Arduino y la protoboard como el corazón del robot en el 2do piso y cada soporte puede fijar 1-2 módulos Grove plug-n-play como las alas del robot para fortalecer las funciones en consecuencia, como LED RGB y módulo Grove ultrasónico. El voltaje de alimentación del Robot Triciclo es proporcionado por un portabaterías de 12V.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/master/docs/images/get_one_now.png)](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html)

:::warning
    Este kit **NO** incluye un controlador y driver de motor.
:::
## Características

- Soporte multiplataforma
- Soportes compatibles con Grove
- Fácil de ensamblar
- Opciones de control RF/BLE/Wi-Fi

## Lista de Partes

![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/4.jpg)

|Nombre de partes|Especificación|Cantidad|
|:---------|:-----------:|:------:|
|Rueda     |Ф64mm*W30mm  |2       |
|Motor DC de Reducción|/ |2       |
|Rueda Universal|49\*32\*22mm|1   |
|Portabaterías|62\*58\*30mm|1    |
|Bridas de Amarre|20.5\*31.8mm|1      |
|Placa Inferior (1er piso)|220\*155\*3.8mm|1|
|Placa Media (2do piso)|220\*155\*3.8mm|1|
|Placa Superior (3er piso)|160\*158\*3.8mm|1|
|Soporte Frontal|62\*56\*3.8mm|1      |
|Soporte Lateral|62\*31\*3.8mm|4       |
|Remache_1  |R3090        |4       |
|Separadores_2|M3\*22     |6       |
|Separadores_3|M3\*55+6   |4       |
|Tornillo_4  |PM3\*8       |14      |
|Tornillo_5  |PM3\*25      |4       |
|Tuerca_6    |M3\*2.3      |6       |
|Remache_7  |R2064        |15      |
|Tornillo_8  |KM2\*10      |15      |
|Tuerca_9    |M2\*1.5      |15      |
|Llave    |/            |2       |
|Destornillador|/           |1       |

**Este kit no incluye el Arduino/Genuino 101 y la protoboard.**

## Introducciones de Ensamblaje

![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/1.png)

![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/2.png)

Puedes fijar cualquier placa que te guste en el Tricycle Bot para manejar esta Plataforma Robótica, como Arduino, Raspberry Pi y BeagleBone. Y para manejar los motores DC y los módulos Grove, la capa de motor y la capa Grove son buenos ayudantes para ti.

Como hay tantas placas para elegir, aquí haremos una introducción de cómo elegir la placa adecuada para ti entre Arduino, Raspberry y BeagleBone.

## Trabajar con Arduino

Arduino es la plataforma de prototipado de código abierto más famosa por su hardware y software fácil de usar. Creemos que podrías hacer un carro robot divertido y creativo con Arduino fácilmente. Y como tenemos tantos módulos Grove para Arduino, es conveniente expandir la función de tu carro robot, como efecto LED, detección de obstáculos o control remoto (RF/Bluetooth/Wi-Fi).

### [Seeeduino V4.2](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)
Seeeduino v4 es una placa de desarrollo MCU ATmega328 de código abierto, compatible con Arduino. Creemos que Seeeduino v4 es uno de los mejores derivados/compatibles de Arduino disponibles. Seeeduino v4 es rico en características, mucho más estable, fácil de usar e incluso de buena apariencia.

<div className="text-center">
  <img src="https://files.seeedstudio.com/wiki/SeeeduinoV4/master/images/cover.JPG" width="50%" height="50%" />
</div>

### [Motor Shield V2.0](https://www.seeedstudio.com/Motor-Shield-V2.0-p-1377.html)
El Motor Shield es un módulo controlador para motores que te permite usar Arduino para controlar la velocidad de trabajo y dirección del motor.

<div className="text-center">
  <img src="https://github.com/SeeedDocument/Motor_Shield_V2.0/image/500px-Motorshield_01.jpg" width="50%" height="50%" />
</div>

### [Base Shield V2](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)

Como una placa de expansión, Base Shield v2 tiene muchos conectores Grove, haciéndolo conveniente para que uses el módulo Grove en conjunto. Y es compatible con una serie de productos Arduino.

<div className="text-center">
  <img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Base_Shield_v2-1.png" width="50%" height="50%" />
</div>

### Módulos Grove Recomendados

|Tira LED W2812B|Sensor Ultrasónico|Buscador de Línea|
|----------------|-----------------|-----------|
|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_arduino/1.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_arduino/2.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_arduino/3.jpg)|
|[¡CONSIGUE UNO AHORA!](https://www.seeedstudio.com/Digital-RGB-LED-Flexi-Strip-60-LED-1-Meter-p-1666.html)|[¡CONSIGUE UNO AHORA!](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)|[¡CONSIGUE UNO AHORA!](https://www.seeedstudio.com/Grove-Line-Finder-p-825.html)|

|Zumbador|RF Serial|Bluetooth Serial|
|----------------|-----------------|-----------|
|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_arduino/4.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_arduino/5.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_arduino/6.jpg)|
|[¡CONSIGUE UNO AHORA!](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|[¡CONSIGUE UNO AHORA!](https://www.seeedstudio.com/Grove-Serial-RF-Pro-p-794.html)|[¡CONSIGUE UNO AHORA!](https://www.seeedstudio.com/Grove-Serial-Bluetooth-v3.0-p-2475.html)|

:::tip
    Haz clic en [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/) para obtener más módulos disponibles.
:::
## Trabajar con Raspberry Pi

La Raspberry Pi es una de las computadoras de placa única más populares actualmente, tiene un rendimiento de cómputo mucho más potente que Arduino. Como Raspberry Pi es tan popular, puedes encontrar fácilmente muchos tutoriales de proyectos divertidos.

### [Raspberry Pi 3](https://www.seeedstudio.com/Raspberry-Pi-Motor-Board-v1.0-p-2411.html)

La Raspberry Pi 3 ha incluido LAN inalámbrica 802.11 b/g/n integrada, Bluetooth Clásico y LE. No necesitas periféricos adicionales para hacerla inalámbrica. Tiene 10 veces el rendimiento de Raspberry Pi 1.

<div className="text-center">
  <img src="https://statics3.seeedstudio.com/seeed/img/2016-08/xuZp3Msf6xeHp96wPFjInzco.jpg" width="50%" height="50%" />
</div>

### [Raspberry Pi Motor Board v1.0](https://www.seeedstudio.com/Raspberry-Pi-Motor-Board-v1.0-p-2411.html)

Raspberry Pi Motor Board te permite controlar dos motores DC con tu Raspberry Pi, controlando la velocidad y dirección de cada uno independientemente.

<div className="text-center">
  <img src="https://statics3.seeedstudio.com/images/product/103030031%201.jpg" width="50%" height="50%" />
</div>

### [GrovePi+](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)

GrovePi+ es un sistema que lleva los Módulos Grove a la Raspberry Pi. Añade soporte para los nuevos RaspberryPi Model B+ y Model A+.

<div className="text-center">
  <img src="https://statics3.seeedstudio.com/product/110060049%2010_03.jpg" width="50%" height="50%" />
</div>

### Módulos Recomendados

|Cámara Web USB|Pantalla OLED|Módulo GPS|
|----------------|-----------------|-----------|
|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_pi/1.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_pi/2.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_pi/3.jpg)|
|[¡CONSIGUE UNO AHORA!](https://www.seeedstudio.com/300K-Pixel-USB-2.0-Mini-Webcam-p-1499.html)|[¡CONSIGUE UNO AHORA!](https://www.seeedstudio.com/Grove-OLED-Display-1.12%22-p-824.html)|[¡CONSIGUE UNO AHORA!](https://www.seeedstudio.com/depot/grove-gps-p-959.html)|

:::tip
    Haz clic en [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/) para obtener más módulos disponibles.
:::

## Trabajar con Placa BeagleBone

BeagleBone es también una de las computadoras de placa única Linux más populares. Comparado con Raspberry, BeagleBone tiene una ventaja en la programación de módulos Grove, gracias a su biblioteca Mraa y UPM.

### [BeagleBone Green Wireless](https://www.seeedstudio.com/SeeedStudio-BeagleBone-Green-Wireless-p-2650.html)
SeeedStudio BeagleBone Green Wireless está basado en el diseño de hardware de código abierto de BeagleBone Black, pero tiene una interfaz WiFi/Bluetooth flexible de alto rendimiento, lo que facilita el desarrollo de control remoto, como el [Coche Wi-Fi BBGW](https://www.instructables.com/id/Super-Quickly-DIY-Web-RC-Car-With-Python-and-Beagl/).

<div className="text-center">
  <img src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Wireless/images/BBGW_cover.png" width="50%" height="50%" />
</div>

### [Motor Bridge Cape v1.0](https://www.seeedstudio.com/Motor-Bridge-Cape-p-2569.html)
El Motor Bridge Cape puede controlar dos motores paso a paso o cuatro motores DC con escobillas con alimentación DC de 6~15V y aproximadamente 1A de consumo de corriente por motor. También tiene seis interfaces de control de servo y seis E/S de expansión, lo que significa que podrías expandir un brazo robótico adicional en tu coche robot.

<div className="text-center">
  <img src="https://files.seeedstudio.com/wiki/Motor_Bridge_Cape_v1.0/master/img/Motor_bridge_driver.jpg" width="50%" height="50%" />
</div>

### [Cape Base Grove para BeagleBone v2](https://www.seeedstudio.com/Grove-Base-Cape-for-Beaglebone-v2.0-p-2644.html)
El Cape Base Grove para BeagleBone v2 es una placa de expansión del sistema Grove para la plataforma BeagleBone. Este cape hace conveniente conectar muchos transductores (sensores y actuadores) disponibles como módulos Grove con la plataforma BeagleBone.

<div className="text-center">
  <img src="https://files.seeedstudio.com/wiki/Grove_Base_Cape_for_BeagleBone_v2/img/Grove_Base_Cape_for_BeagleBone_v2_product_view_1200.jpg" width="50%" height="50%" />
</div>

### Módulos Grove Recomendados

|CÁMARA WEB USB|TIRA LED W2812B|IMU 9DOF|
|----------------|-----------------|-----------|
|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_bb/1.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_bb/2.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_bb/3.JPG)|
|[¡CONSIGUE UNO AHORA!](https://www.seeedstudio.com/300K-Pixel-USB-2.0-Mini-Webcam-p-1499.html)|[¡CONSIGUE UNO AHORA!](https://www.seeedstudio.com/Digital-RGB-LED-Flexi-Strip-60-LED-1-Meter-p-1666.html)|[¡CONSIGUE UNO AHORA!](https://www.seeedstudio.com/Grove-IMU-9DOF-v2.0-p-2400.html)|

|PANTALLA OLED|SENSOR DE LUZ DIGITAL|MÓDULO GPS|
|----------------|-----------------|-----------|
|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_bb/4.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_bb/5.jpg)|![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/grove_bb/6.jpg)|
|[¡CONSIGUE UNO AHORA!](https://www.seeedstudio.com/Grove-OLED-Display-1.12%22-p-824.html)|[¡CONSIGUE UNO AHORA!](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html)|[¡CONSIGUE UNO AHORA!](https://www.seeedstudio.com/depot/grove-gps-p-959.html)|

:::tip
    Haz clic en [Grove System](https://wiki.seeedstudio.com/es/Grove_System/) para obtener más módulos disponibles.
:::
## Ejemplo Simple

Aquí tienes un ejemplo simple de cómo hacer un Tricycle Bot con Arduino UNO.

### Cosas que necesitamos

![](https://files.seeedstudio.com/wiki/Tricycle_Bot/img/7.png)

- [Arduino UNO](https://www.arduino.cc/en/Main/ArduinoBoardUno) *1
- [Motor Shield V2.0](https://www.seeedstudio.com/Motor-Shield-V2.0-p-1377.html) *1
- [Base Shield V2](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html) *1
<!-- - [Tricycle Bot]() *1 -->
- [Digital RGB LED Flexi-Strip](https://www.seeedstudio.com/Digital-RGB-LED-Flexi-Strip-60-LED-1-Meter-p-1666.html) *1
- [Grove - Ultrasonic Ranger](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html) *1
- [Grove - Buzzer](https://www.seeedstudio.com/Grove-Buzzer-p-768.html) *1

### Ensamblaje

<div className="text-center">
  <img src="https://files.seeedstudio.com/wiki/Tricycle_Bot/img/5.jpg" width="50%" height="50%" />
</div>

1. [Ensambla el Tricycle Bot.](https://files.seeedstudio.com/wiki/Tricycle_Bot/Tricycle_Bot.md#assembly-introdutions)
2. Fija los módulos Grove en las orillas y la placa superior.
3. Conecta el Grove Buzzer a **D4**, el Grove Ultrasonic Ranger a **D5** y la tira LED a **D6** del Base Shield.
4. ¡Termínalo!

<div className="text-center">
  <img src="https://files.seeedstudio.com/wiki/Tricycle_Bot/img/6.jpg" width="50%" height="50%" />
</div>

### Demostración

Este es el [video](http://ohpam657y.bkt.clouddn.com/IMG_1346%202.MOV) de este ejemplo simple.

<div className="img-wrapper ng-scope" ng-if="fileType === 'video'">
  <video ng-src="http://ohpam657y.bkt.clouddn.com/IMG_1346%202.MOV" width={700} controls src="http://ohpam657y.bkt.clouddn.com/IMG_1346%202.MOV" />
</div>

- Este coche Tricycle Bot de demostración es capaz de detectar el obstáculo frente a él, y hacer un giro cuando sus distancias son menores a 35CM.
- Cuando el coche va recto, la tira LED parpadeará en azul, mientras que cuando el coche está haciendo un giro, la tira LED parpadeará en rojo y el Grove Buzzer hará un ruido para advertir.

### Codificación

- Descarga la Librería de Arduino de [Motor Shield V2](https://github.com/Seeed-Studio/SeeedMotorShieldV2), [Grove - Ultrasonic Ranger](https://github.com/Seeed-Studio/Seeed_Arduino_UltrasonicRanger) y [LED Strip](https://github.com/adafruit/Adafruit_NeoPixel).

```
 /*
 * TricycleBotDemo.ino
 *
 * Simple code for Tricycle Bot
 *
 * Copyright (c) 2016 Seeed Technology Limited.
 * MIT license
 *
 */

#include "MotorDriver.h"
#include "Adafruit_NeoPixel.h"
#include "Ultrasonic.h"

#define BEE           4
#define LEDPIN        6
#define LEDNUM        10
#define PIXELS_SPACE  128
#define BRIGHTNESS    150
#define DistanceCM    35

Adafruit_NeoPixel strip = Adafruit_NeoPixel(LEDNUM, LEDPIN, NEO_GRB + NEO_KHZ800);
MotorDriver motor;
Ultrasonic ultrasonic(5);

void setup() {
    // put your setup code here, to run once:
    pinMode(BEE, OUTPUT);
    strip.setBrightness(BRIGHTNESS);
    strip.begin();
    strip.show();
    motor.begin();
    pixelStart();
}

void loop() {

    // put your main code here, to run repeatedly:
    long RangeInCentimeters;
    RangeInCentimeters = ultrasonic.MeasureInCentimeters();

    if (RangeInCentimeters < DistanceCM) {
        turnRight();
        beep();
        pixelState2();
    }
    else {
        goStraight();
        pixelState1();
    }
    delay(100);
}

void goStraight() {
    motor.speed(0, 100);
    motor.speed(1, 100);
}

void turnRight() {
    motor.speed(0, -100);
    motor.speed(1, 100);
}

//go straight
void pixelState1() {
    for (uint32_t t = 0; t < (PIXELS_SPACE * LEDNUM); ++t) {
        for (int i = 0; i < (LEDNUM / 2); i++) {
            strip.setPixelColor(((LEDNUM / 2) - i -1) , triangular_color((t + i * PIXELS_SPACE) % (PIXELS_SPACE * LEDNUM)));
            strip.setPixelColor(i + 5, triangular_color((t + i * PIXELS_SPACE) % (PIXELS_SPACE * LEDNUM)));
        }
        strip.show();
    }
}

//turn right
void pixelState2() {
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < LEDNUM; j++) {
            strip.setPixelColor(j, 250, 0, 0);
            strip.show();
        }
        delay(50);
        for (int j = 0; j < LEDNUM; j++) {
            strip.setPixelColor(j, 0, 0, 0);
            strip.show();
        }
        delay(50);
    }
}

void pixelStart() {
    for (int i = 0; i < LEDNUM; i++) {
        for (int j = 0; j< 255; j++) {
            strip.setPixelColor(i, 0, j, 0);
            strip.show();
        }
        delay(50);
    }
}

uint32_t triangular_color(uint32_t t) {
    uint32_t c = 0;

    if (t < 256) {
        c = strip.Color(0, 0, t);
    } else if (t < 512) {
        c = strip.Color(0, 0, 511 - t);
    }

    return c;
}

void beep() {
    digitalWrite(BEE, HIGH);
    delay(100);
    digitalWrite(BEE, LOW);
}
```

## Adjuntos

- [Instrucciones de Ensamblaje del Tricycle Bot(pdf)](https://files.seeedstudio.com/wiki/Tricycle_Bot/res/Tricycle%20Bot%20Assembly%20Instructions.pdf)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
