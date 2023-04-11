---
description: Overview
title: Overview
keywords:
- Wio_terminal Infrared_Emitter
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-Infrared-Emitter
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# Getting Started with Infrared Emitter

This repo demonstrates how to use the built-in Infrared Emitter as component in Wio Terminal. The Infrared Emitter is a Digital Interface and can be used to send IR signal, just like what a remote control does!

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-IR.gif)

## Installing the Infrared Library For Wio Terminal

1. Visit the [Seeed_Arduino_IR](https://github.com/Seeed-Studio/Seeed_Arduino_IR) repositories and download the entire repo to your local drive.

2. Now, the Infrared library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `Seeed_Arduino_IR` file that you've have just downloaded.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## Example Code

Navigate to **Files** -> **Examples** -> **IRLib2** -> **Send**. The send example will appear and should look like below. To test the IR signal from Wio Terminal, you can use a [Grove - Infrared Receiver](https://wiki.seeedstudio.com/Grove-Infrared_Receiver/). This can be easily modified to use Wio Terminal as your TV remote control!

**Note:** **`WIO_IR`** is defined for the builtin Infrared Emitter(Already defined in the header file of this library so no need to defined in ino file)

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

**Note:** The Infrared Emitter is at the back of the Wio Terminal, to the left of the SD card slot.
