---
title: I2C
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Wio-Terminal-IO-I2C/
slug: /es/Wio-Terminal-IO-I2C
last_update:
  date: 01/11/2022
  author: gunengyu
---
# Usando el Puerto I2C Grove en Wio Terminal

Este repositorio demuestra cómo usar el Puerto I2C Grove en Wio Terminal, ¡puedes simplemente usar esta funcionalidad plug and play con el Ecosistema Grove!

## Configuraciones del Puerto

Para usar el puerto I2C Grove en Wio Terminal, simplemente conecta tu sensor Grove que usa I2C al puerto I2C físico en Wio Terminal.

**Nota:** Recuerda incluir las librerías del sensor en Arduino IDE. Consulta este [Cómo instalar librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/) para más información.

## Código de Ejemplo

En este ejemplo, se usa un LCD Grove para demostrar. Este es el ejemplo `HelloWorld` de la librería RGB LCD.

```cpp
#include <Wire.h>
#include "rgb_lcd.h"

rgb_lcd lcd;

const int colorR = 255;
const int colorG = 0;
const int colorB = 0;

void setup()
{
    // set up the LCD's number of columns and rows:
    lcd.begin(16, 2);
    
    lcd.setRGB(colorR, colorG, colorB);
    
    // Print a message to the LCD.
    lcd.print("hello, world!");

    delay(1000);
}

void loop() 
{
    // set the cursor to column 0, line 1
    // (note: line 1 is the second row, since counting begins with 0):
    lcd.setCursor(0, 1);
    // print the number of seconds since reset:
    lcd.print(millis()/1000);

    delay(100);
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