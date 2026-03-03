---
description: Guía de Usuario Serial para Placas Arduino
title: Guía de Usuario Serial para Placas Arduino
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Software-Serial
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# Guía de Usuario de Arduino Software Serial

El hardware de Arduino tiene soporte integrado para **comunicaciones Serial** en los pines 0 y 1 (Hardware Serial) pero en algunas circunstancias como cuando estos pines ya están en uso o necesitas más puertos Serial para depuración, [**Software Serial**](https://www.arduino.cc/en/Reference/softwareSerial) puede parecer ser la solución.

¡Aquí también usaremos un ejemplo para demostrar cómo usar Software Serial con tu Arduino!

## Ejemplo de Software Serial

```cpp
/*
RX is digital pin 2 (connect to TX of other device)
TX is digital pin 3 (connect to RX of other device)
*/

#include <SoftwareSerial.h>
SoftwareSerial mySerial(2, 3); // RX, TX

void setup()
{
  Serial.begin(115200);
  while (!Serial) {
  }

  Serial.println("Goodnight moon!");

  mySerial.begin(9600);
  mySerial.println("Hello, world?");
}

void loop()
{
  if (mySerial.available())
    Serial.write(mySerial.read());
  if (Serial.available())
    mySerial.write(Serial.read());
}
```

En la práctica, también puedes usar otros dispositivos seriales, como módulos inalámbricos de paso serial, sensores seriales, etc., siempre que sea estándar. Los dispositivos seriales se programan todos de manera muy similar.

## Usando Múltiples Software Serial

Cuando necesitas que múltiples dispositivos seriales estén conectados, es posible crear múltiples puertos software serial. Pero debido a limitaciones de hardware, Arduino UNO solo puede escuchar a un software serial a la vez. Aquí se proporciona un ejemplo para múltiples software serial:

```cpp
#include <SoftwareSerial.h>
SoftwareSerial serialOne(2, 3); // Software Serial ONE
SoftwareSerial serialTwo(8, 9); // Software Serial TWO

void setup() {
  Serial.begin(9600);
  while (!Serial) { // wait till Serial
  }

  serialOne.begin(9600);
  serialTwo.begin(9600);
}

void loop() {
  serialOne.listen(); // listening on Serial One

  Serial.println("Data from port one:");
  while (serialOne.available() > 0) {
    char inByte = serialOne.read();
    Serial.write(inByte);
  }

  Serial.println();

  serialTwo.listen(); // listening on Serial Two

  Serial.println("Data from port two:");
  while (serialTwo.available() > 0) {
    char inByte = serialTwo.read();
    Serial.write(inByte);
  }

  Serial.println();
}
```

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>