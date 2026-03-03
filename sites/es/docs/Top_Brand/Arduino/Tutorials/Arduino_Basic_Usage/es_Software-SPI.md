---
description: Guía de Usuario de SPI para Placas Arduino
title: Guía de Usuario de SPI para Placas Arduino
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Software-SPI
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# Guía de Usuario de SPI por Software para Arduino

De manera similar a las comunicaciones I2C y Serie, [**SPI**](https://www.arduino.cc/en/reference/SPI) puede ser virtualizado usando software para superar las limitaciones físicas. Aquí se proporciona un ejemplo de uso de SPI por software con Arduino.

**¿Qué es SPI?**

La Interfaz Periférica Serie (SPI) es un protocolo de datos serie síncrono utilizado por microcontroladores para comunicarse con uno o más dispositivos periféricos rápidamente a cortas distancias. También puede ser utilizado para comunicación entre dos microcontroladores.

## Ejemplo de SPI por Software

1. Visita los repositorios de [SoftSPI](https://github.com/MajenkoLibraries/SoftSPI) y descarga todo el repositorio a tu unidad local.

2. Ahora, la librería SoftSPI puede ser instalada en el IDE de Arduino. Abre el IDE de Arduino, y haz clic en `sketch` -> `Include Library` -> `Add .ZIP Library`, y elige el archivo `SoftSPI` que acabas de descargar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

```cpp
#include <SPI.h>
#include <SoftSPI.h>

// Create a new SPI port with:
// Pin 2 = MOSI,
// Pin 3 = MISO,
// Pin 4 = SCK
SoftSPI mySPI(2, 3, 4);

void setup() {
  mySPI.begin();
  Serial.begin(9600);
  }

void loop() {
  static uint8_t v = 0;

  Serial.print("Sending value: ");
  Serial.print(v, HEX);
  uint8_t in = mySPI.transfer(v);
  Serial.print(" Got value: ");
  Serial.print(in, HEX);
  Serial.println(v == in ? " PASS" : " FAIL");
  delay(1000);
  v++;
}
```

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>