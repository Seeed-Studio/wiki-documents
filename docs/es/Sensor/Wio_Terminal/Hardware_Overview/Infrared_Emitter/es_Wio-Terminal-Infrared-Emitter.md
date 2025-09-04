---
description: Descripción general
title: Primeros pasos con el Emisor de Infrarrojos
keywords:
- Wio_terminal Infrared_Emitter
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Infrared-Emitter
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# Primeros pasos con el Emisor de Infrarrojos

Este repositorio demuestra cómo usar el Emisor de Infrarrojos integrado como componente en Wio Terminal. El Emisor de Infrarrojos es una Interfaz Digital y puede usarse para enviar señales IR, ¡igual que lo que hace un control remoto!

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-IR.gif)

## Instalación de la Biblioteca de Infrarrojos para Wio Terminal

1. Visita el repositorio [Seeed_Arduino_IR](https://github.com/Seeed-Studio/Seeed_Arduino_IR) y descarga todo el repositorio a tu unidad local.

2. Ahora, la biblioteca de Infrarrojos puede instalarse en el IDE de Arduino. Abre el IDE de Arduino, y haz clic en `sketch` -> `Include Library` -> `Add .ZIP Library`, y elige el archivo `Seeed_Arduino_IR` que acabas de descargar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## Código de Ejemplo

Navega a **Files** -> **Examples** -> **IRLib2** -> **Send**. El ejemplo de envío aparecerá y debería verse como se muestra a continuación. Para probar la señal IR desde Wio Terminal, puedes usar un [Grove - Infrared Receiver](https://wiki.seeedstudio.com/es/Grove-Infrared_Receiver/). ¡Esto puede modificarse fácilmente para usar Wio Terminal como tu control remoto de TV!

**Nota:** **`WIO_IR`** está definido para el Emisor de Infrarrojos integrado (Ya definido en el archivo de cabecera de esta biblioteca, por lo que no es necesario definirlo en el archivo ino)

```cpp
/* send.ino Example sketch for IRLib2
 *  Illustrates how to send a code.
 */
#include <IRLibSendBase.h>    // First include the send base
//Now include only the protocols you wish to actually use.
//The lowest numbered protocol should be first but remainder 
//can be any order.
#include <IRLib_P01_NEC.h>
#include <IRLib_P02_Sony.h>
#include <IRLibCombo.h>     // After all protocols, include this
// All of the above automatically creates a universal sending
// class called "IRsend" containing only the protocols you want.
// Now declare an instance of that sender.

IRsend mySender;

void setup() {
  Serial.begin(9600);
  delay(2000); while (!Serial); //delay for Leonardo
  Serial.println(F("Every time you press a key is a serial monitor we will send."));
}

void loop() {
  if (Serial.read() != -1) {
  //   send a code every time a character is received from the 
  //   serial port. You could modify this sketch to send when you
  //   push a button connected to an digital input pin.
  //   Substitute values and protocols in the following statement
  //   for device you have available.
  //  mySender.send(SONY,0xa8bca, 20);//Sony DVD power A8BCA, 20 bits
    mySender.send(NEC,0x61a0f00f,0);//NEC TV power button=0x61a0f00f
    Serial.println(F("Sent signal."));
  }
}
```

**Nota:** El Emisor de Infrarrojos está en la parte posterior del Wio Terminal, a la izquierda de la ranura para tarjeta SD.