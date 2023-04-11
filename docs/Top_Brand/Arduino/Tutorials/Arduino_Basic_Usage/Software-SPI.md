---
description:  SPI User Guide for Arduino Boards
title:  SPI User Guide for Arduino Boards
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Software-SPI
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# Arduino Software SPI User Guide

Similarly to I2C and Serial communications, [**SPI**](https://www.arduino.cc/en/reference/SPI) can be virtualized using software to overcome the physical limitations. Here provides an example of using software SPI with Arduino.

**What is SPI**

Serial Peripheral Interface (SPI) is a synchronous serial data protocol used by microcontrollers for communicating with one or more peripheral devices quickly over short distances. It can also be used for communication between two microcontrollers.

## Software SPI Example

1. Visit the [SoftSPI](https://github.com/MajenkoLibraries/SoftSPI) repositories and download the entire repo to your local drive.

2. Now, the SoftSPI library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `SoftSPI` file that you've have just downloaded.

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

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
