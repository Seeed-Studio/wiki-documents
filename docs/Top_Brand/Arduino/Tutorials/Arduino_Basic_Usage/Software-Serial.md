---
description: Serial User Guide for Arduino Boards
title: Serial User Guide for Arduino Boards
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Software-Serial
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# Arduino Software Serial User Guide

The Arduino hardware has the built-in support for **Serial communications** on pins 0 and 1 (Hardware Serial) but in some circumstances such as when these pins are already in-use or you need more Serial ports for debugging, [**Software Serial**](https://www.arduino.cc/en/Reference/softwareSerial) may seem to be the solution.

Here will also use an example to demonstrate how to use Software Serial with you Arduino!

## Software Serial Example

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

In practice, you may also use other serial devices, such as serial wireless pass-through modules, serial sensors, etc., as long as it is standard. The serial devices are all programmed in much the same way.

## Using Multiple Software Serial

When you need multiple serial devices to be connected, it is possible to create multiple software serial ports. But due to hardware limitation, Arduino UNO can only listen to one software serial at a time. Here provides an example for multiple software serial:

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

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
