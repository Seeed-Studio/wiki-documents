---
description: Keyboard
title: Keyboard
keywords:
- Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-USBCLIENT-Keyboard
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# Using Wio Terminal as a Keyboard

This wiki introduces how to use the Wio Terminal as a simple keyboard. It has assigned the 3 keys `s`, `e`, `d` to the 3 buttons on the Wio Terminal. This can be easily implemented into your design for more challenging tasks.

## Installing Libraries

This example also requires an additional Arduino keyboard library:

1. Visit the [Arduino Keyboard Library](https://github.com/arduino-libraries/Keyboard) repository and download the entire repo to your local drive.

2. Now, the  library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `Keyboard-master` file that you have just downloaded.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## Complete Code

For more functionality, please refer the official [keyboard functions](https://www.arduino.cc/reference/en/language/functions/usb/keyboard/) from Arduino.

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
