---
description: Grove - RS485
title: Grove - RS485
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-RS485
last_update:
  date: 2/22/2023
  author: jianjing Huang
---
<!-- ---
name: Grove - RS485
category: 
bzurl: 
oldwikiname: 
prodimagename: 
surveyurl: 
sku: 103020193
--- -->

![](https://files.seeedstudio.com/wiki/Grove-RS485/img/preview.png)

The Grove RS-485 allows your Arduino connect with RS-485 device easily, you just need to plug and play. This module is highly stable and supports error-free transmission of 500k bps.  

RS485 is cost-effective solution in serial communication, it can be used to data rate at 10Mbit/s or distance up to 1200m at lower speed.  

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-RS485-p-2924.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Version

| Product Version  | Changes                                                                                               | Released Date |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - RS485 | Initial                                                                                               | Nov 2018      |

## Features

- Supply voltage: 3.3V/5V
- Interface: UART
- 500k bps error-free transmission

## Specification

|Parameter|Value|
|---|---|
|Size|L: 40mm W: 20mm H: 12mm|
|Weight|4.9g|
|Package Size|L: 135mm W: 85mm H: 13mm|
|Gross Weight|11g|

## Hardware Overview

### Pinout

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-RS485/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-RS485/img/pinout.jpg" /></a></p>
  <figcaption><b>Figure 1</b>. <i>Pinout</i></figcaption>
</figure>
</div>

## Getting Started

:::note
If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

The Grove - NFC supports I2C and UART, [Seeed Arduino NFC Library](https://github.com/Seeed-Studio/Seeed_Arduino_NFC) supports Arduino Uno/Seeeduino v4.2, Arduino Mega/Seeeduino Mega, Arduino Zero/Seeeduino Lorawan and Arduino Leonardo/Seeeduino Lite.

### Play with Arduino

#### Hardware

**Materials required**

- [Seeeduino V4.2(ATMega328P)](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html) x1
- [Seeeduino Lotus V1.1](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html) x1
- [Grove - RS485](https://www.seeedstudio.com/Grove-RS485-p-2924.html) x1
- [Grove Base Shield V2.0](https://www.seeedstudio.com/Base-Shield-V2.html) x1

**Materials Connected**

![](https://files.seeedstudio.com/wiki/Grove-RS485/img/connect.png)

- **Step 1.** Connect both Seeeduino Lotus and Seeeduino V4.2 to the PC.

- **Step 2.** Plug Grove - Base Shield into Seeeduino Lite.

- **Step 3.** Using port 6 and port 7 as soft port RX and TX connect two boards with two Grove Rs485.

#### Software

- **Step 1.**  Open two Arduino IDE windows and copy these codes as below separately. One of the device is using as master device and the other one is using as slave device.

```c++
/*      Slave     */
#include <SoftwareSerial.h>
SoftwareSerial Slave(6, 7);  
char val;

void setup() {
  Serial.begin(38400);   
  Serial.println("Slave is ready!");
  Slave.begin(38400);
}

void loop() {
  while (Serial.available()) {
    val = Serial.read();
    Slave.write(val);
  }

  while(Slave.available()) {
    val = Slave.read();
    Serial.write(val);
  }
}
```

```c++
/*      Master      */
#include <SoftwareSerial.h>
SoftwareSerial Master(6, 7);
char val;

void setup() {
  Serial.begin(38400);   
  Serial.println("Master is ready!");
  Master.begin(38400);
}

void loop() {
  while (Serial.available()) {
    val = Serial.read();
    Master.write(val);
  }

  while(Master.available()) {
    val = Master.read();
    Serial.write(val);
  }
}
```

- **Step 2.**  Chose different ports for different devices while you using the Grove RS485.

- **Step 3.** Send the message and check the results.

![](https://files.seeedstudio.com/wiki/Grove-RS485/img/image.png)

## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-RS485/res/Grove%20-%20RS485.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[ZIP]** [Grove - RS485 Schematic file](https://files.seeedstudio.com/wiki/Grove-RS485/res/Grove%20-%20RS485.zip)
- **[PDF]** [Max13478E Datasheet](https://files.seeedstudio.com/wiki/Grove-RS485/res/Max13478.pdf)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/)<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
