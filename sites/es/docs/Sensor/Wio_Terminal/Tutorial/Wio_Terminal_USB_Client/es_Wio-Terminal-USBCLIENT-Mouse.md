---
description: Ratón
title: Ratón
keywords:
- Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-USBCLIENT-Mouse
last_update:
  date: 1/17/2023
  author: jianjing Huang
---


# Usando Wio Terminal como un Ratón

Este wiki presenta cómo usar el Wio Terminal como un ratón simple. Esto se puede usar para simular movimientos del ratón como arriba, abajo, izquierda y derecha. Además, también se pueden implementar clics de botón izquierdo/derecho del ratón y desplazamientos hacia arriba/abajo.

## Instalando Bibliotecas

Este ejemplo también requiere una biblioteca adicional de ratón de Arduino:

1. Visita el repositorio de la [Biblioteca Mouse de Arduino](https://github.com/arduino-libraries/Mouse) y descarga todo el repositorio a tu unidad local.

2. Ahora, la biblioteca se puede instalar en el IDE de Arduino. Abre el IDE de Arduino, y haz clic en `sketch` -> `Include Library` -> `Add .ZIP Library`, y elige el archivo `Mouse-master` que acabas de descargar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## Código Completo

Por favor revisa el siguiente código o desde github [aquí](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/blob/master/examples/WioTerminal_ButtonMouseControl/WioTerminal_ButtonMouseControl.ino). Además, para más funcionalidad, por favor consulta las [funciones de ratón](https://www.arduino.cc/reference/en/language/functions/usb/mouse/) oficiales de Arduino.

```cpp
/*    
 * A demo for Wio Terminal to simulate mouse by buttons.
 * Such as Mouse Up, Mouse Down, Mouse Left, Mouse Right,
 * Click the left mouse button, Click the right mouse button, 
 * Up roll, Down roll and etc.
 *   
 * Copyright (c) 2020 seeed technology co., ltd.  
 * Author      : weihong.cai (weihong.cai@seeed.cc)  
 * Create Time : July 2020
 * Change Log  : 
 *
 * The MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software istm
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS INcommInterface
 * THE SOFTWARE.
 * 
 * Usage(in Wio Terminal):
 *    Press the WIO_5S_UP    --------------------> Mouse Up
 *    Press the WIO_5S_DOWN  --------------------> Mouse Down
 *    Press the WIO_5S_LEFT  --------------------> Mouse Left
 *    Press the WIO_5S_RIGHT --------------------> Mouse Right
 *    Press the BUTTON_3 ------------------------> Click the left mouse button
 *    Press the BUTTON_2 ------------------------> Click the right mouse button    
 *    Press the WIO_5S_PRESS and WIO_5S_UP   ----> Up roll
 *    Press the WIO_5S_PRESS and WIO_5S_DOWN ----> Down roll
 * 
 * Some tips:
 * 1. If your PC unables to recognize USB device leading the Wio Terminal can’t work. 
 *    You can solve this problem through updating your ArduinoCore.
 *    Please follow this: https://forum.seeedstudio.com/t/seeeduino-xiao-cant-simulate-keys-pressed/252819/6?u=weihong.cai
 * 
 * You can know more about the Wio Terminal from: https://wiki.seeedstudio.com/es/Wio-Terminal-Getting-Started/
 * If you have any questions, you can leave a message on the forum: https://forum.seeedstudio.com
 */

#include "Mouse.h"

/*----------------define the button pins---------------------------*/ 
const int upButton        = WIO_5S_UP;
const int downButton      = WIO_5S_DOWN;
const int leftButton      = WIO_5S_LEFT;
const int rightButton     = WIO_5S_RIGHT;
const int mouseWheel      = WIO_5S_PRESS;
const int mouseBttonLeft  = BUTTON_3;
const int mouseBttonRight = BUTTON_2;

  // output range of X or Y movement; affects movement speed          
int range = 2;

  // response delay of the mouse, in ms
int responseDelay = 5;

  // the time record paramas
unsigned long _currentMillis;
unsigned long _previousMillis;

void setup() {
  // initialize the buttons' inputs:
  pinMode(upButton,         INPUT);
  pinMode(downButton,       INPUT);
  pinMode(leftButton,       INPUT);
  pinMode(rightButton,      INPUT);
  pinMode(mouseWheel,       INPUT);
  pinMode(mouseBttonLeft,   INPUT);
  pinMode(mouseBttonRight,  INPUT);
  
  // initialize mouse control:
  Mouse.begin();
}

void loop() {
  // read the button state:
  int upState                     = digitalRead(upButton);
  int downState                   = digitalRead(downButton);
  int rightState                  = digitalRead(rightButton);
  int leftState                   = digitalRead(leftButton);
  int clickState_mouseWheel       = digitalRead(mouseWheel);
  int clickState_mouseButtonLeft  = digitalRead(mouseBttonLeft);
  int clickState_mouseButtonRight = digitalRead(mouseBttonRight);

  // calculate the movement distance based on the button states:
  int  xDistance = (leftState - rightState) * range;
  int  yDistance = (upState   - downState)  * range;

/*------------------Mouse Move--------------------------------------*/
  // if X or Y is non-zero, move:
  if ((xDistance != 0) || (yDistance != 0)) {
    Mouse.move(xDistance, yDistance, 0);
  }
  
/*-------------Mouse Button Left Click------------------------------*/
  // if the mouse button left is pressed:
  if (clickState_mouseButtonLeft == LOW) {
    // if the mouse is not pressed, press it:
    if (!Mouse.isPressed(MOUSE_LEFT)) {
      Mouse.press(MOUSE_LEFT);
      //Mouse.click(MOUSE_LEFT);
    }
  }
  // else the mouse button left is not pressed:
  else {
    // if the mouse is pressed, release it:
    if (Mouse.isPressed(MOUSE_LEFT)) {
      Mouse.release(MOUSE_LEFT);
    }
  }
  
/*-------------Mouse Button Right Click-----------------------------*/
    // if the mouse button right is pressed:
  if (clickState_mouseButtonRight == LOW) {
    // if the mouse is not pressed, press it:
    if (!Mouse.isPressed(MOUSE_RIGHT)) {
      Mouse.press(MOUSE_RIGHT);
      //Mouse.click(MOUSE_RIGHT);
    }
  }
  // else the mouse button right is not pressed:
  else {
    // if the mouse is pressed, release it:
    if (Mouse.isPressed(MOUSE_RIGHT)) {
      Mouse.release(MOUSE_RIGHT);
    }
  }

/*------------------Up roll----------------------------------------*/
  if ((upState == LOW) && (clickState_mouseWheel == LOW)) {
    Mouse.move(0, 0, 1);
    My_delay(200);
  }

/*------------------Down roll--------------------------------------*/
  if ((downState == LOW) && (clickState_mouseWheel == LOW)) {
    Mouse.move(0, 0, -1);
    My_delay(200);
  }
    
/*-----------------------------------------------------------------*/ 
  // a delay so the mouse doesn't move too fast:
  My_delay(responseDelay);
}

// a delay function uses millis()
void My_delay(int Time)
{
  while((_currentMillis - _previousMillis) <= Time)
  {
      _currentMillis = millis();
  }
  _previousMillis = _currentMillis; 
}
```
