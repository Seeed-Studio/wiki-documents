---
description: Proyecto Seis – Demostración de LCD
title: Proyecto Seis – Demostración de LCD
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Project_Six-LCD_Demonstration
last_update:
  date: 2/15/2023
  author: jianjing Huang
---
<!-- ---
name: Proyecto Seis – Demostración de LCD
category: Tutorial
oldwikiname:  Project Six – LCD Demonstration
prodimagename:  
surveyurl: https://www.research.net/r/Project_Six-LCD_Demonstration
--- -->
Ahora es momento de demostrar el módulo LCD y las unidades Grove correspondientes. Con el LCD puedes mostrar datos o mensajes dentro de la pantalla de dos líneas y ocho caracteres. Para este ejemplo, conecta los cables desde los siguientes conectores LCD al Grove Base Shield:

* inferior-derecho a D1/2;

* inferior-izquierdo a D3/4;

* inferior-derecho a D5/6;

![](https://files.seeedstudio.com/wiki/Project_Six-LCD_Demonstration/img/Conn-six.jpg)

_**Ahora sube el siguiente sketch de Arduino:**_

```cpp
// Project Six - LCD demonstration
//

#include <LiquidCrystal.h>

LiquidCrystal lcd(1,2,3,4,5,6);

void setup()
{
  lcd.begin(8,2);
}

void loop()
{
  lcd.clear();
  lcd.setCursor(0,0);
  lcd.print("01234567");
  lcd.setCursor(0,1);
  lcd.print("ABCDEFGH");
  delay(65000);
}
```

La función lcd.clear() borra la pantalla LCD; lcd.setCursor() mueve el cursor a (columna, fila); y lcd.print(""); escribe texto en la posición del cursor en el LCD.

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>