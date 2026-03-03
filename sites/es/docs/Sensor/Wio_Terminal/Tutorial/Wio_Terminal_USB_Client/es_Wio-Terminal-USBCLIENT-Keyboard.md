---
description: Teclado
title: Teclado
keywords:
- Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-USBCLIENT-Keyboard
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# Usando Wio Terminal como un Teclado

Este wiki presenta cómo usar el Wio Terminal como un teclado simple. Ha asignado las 3 teclas `s`, `e`, `d` a los 3 botones en el Wio Terminal. Esto puede implementarse fácilmente en tu diseño para tareas más desafiantes.

## Instalando Bibliotecas

Este ejemplo también requiere una biblioteca adicional de teclado de Arduino:

1. Visita el repositorio de [Arduino Keyboard Library](https://github.com/arduino-libraries/Keyboard) y descarga todo el repositorio a tu unidad local.

2. Ahora, la biblioteca puede instalarse en el IDE de Arduino. Abre el IDE de Arduino, y haz clic en `sketch` -> `Include Library` -> `Add .ZIP Library`, y elige el archivo `Keyboard-master` que acabas de descargar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## Código Completo

Para más funcionalidad, por favor consulta las [funciones de teclado](https://www.arduino.cc/reference/en/language/functions/usb/keyboard/) oficiales de Arduino.

```cpp
#include "Keyboard.h" //keyboard library 

void setup() { 
  //set button pins as inputs
  pinMode(WIO_KEY_A, INPUT);
  pinMode(WIO_KEY_B, INPUT);
  pinMode(WIO_KEY_C, INPUT);
  
  Keyboard.begin(); //start keyboard communication
}

void loop() {  
  if (digitalRead(WIO_KEY_A) == LOW) { //detect button press
    Keyboard.write('s'); //single key is pressed (character) 
  }
  if (digitalRead(WIO_KEY_B) == LOW) {   
    Keyboard.write('e'); 
  }  
  if (digitalRead(WIO_KEY_C) == LOW) {        
    Keyboard.write('d');  
  } 
  
  delay(200); //delay between keypresses
  
}
```