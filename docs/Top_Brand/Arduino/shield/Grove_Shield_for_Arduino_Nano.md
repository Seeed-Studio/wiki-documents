---
description: Grove_Shield_for_Arduino_Nano
title: Grove Shield for Arduino Nano
tags:
  - Shield
keywords:
  - Shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_Shield_for_Arduino_Nano
last_update:
  date: 02/02/2023  
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-shield-for-Arduino-Nano/img/Grove-Shoeld-for-Arduino-Nano-front.png" alt="pir" width={600} height="auto" /></p>
Grove Shield for Arduino Nano provides you a simple way to connect with Arduino Nano and also Seeeduino Nano. This shield helps you get rid of breadboard and jumper wires by pulling out the pins of the motherboard and expands to 8 Grove connectors. This shield pulls out the pins of the motherboard and expands to 8 Grove connectors, including 3 Grove digital connectors, 3 Grove analog connectors, 1 Grove I2C connector, and 1 Grove UART connector.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Shield-for-Arduino-Nano-p-4112.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Specification

<table align="center">
  <tbody>
  <tr>
    <td><h3>Parameter</h3></td>
    <td><h3>Value/Range</h3></td>
  </tr>
  <tr>
    <td><h4>Operation Temperature</h4></td>
    <td><h4>-25℃ to +85℃</h4></td>
  </tr>
  <tr>
    <td><h4>Analog Ports</h4></td>
    <td><h4>3</h4></td>
  </tr>  
  <tr>
    <td><h4>Digital Ports</h4></td>
    <td><h4>3</h4></td>
  </tr>
  <tr>
    <td><h4>UART Ports</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>I2C Ports</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Size</h4></td>
    <td><h4>45mm x40mm</h4></td>
  </tr>
  </tbody></table>

We have updated Grove Shield to V1.1, supports the Arduino Nano 33 series development board.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-shield-for-Arduino-Nano/img/change.png" alt="pir" width={600} height="auto" /></p>

V1.1 Change Note:

Add VCC 3.3V/5V Switch

## Compatible Boards

V1.0 Support List:

- [Seeeduino nano](https://www.seeedstudio.com/Seeeduino-Nano-p-4111.html)
- Arduino nano

V1.1 Support List:

- Arduino Nano
- Seeeduino Nano
- Arduino Nano Every
- Arduino Nano 33 IoT*
- Arduino Nano 33 BLE*
- Arduino Nano 33 BLE Sense*

:::caution
To work with Arduino 33 serial boards, please switch the VCC power to 3.3V. If the VCC power supply is switched to 5V, the development board may be damaged!
:::

## Hardware Overview

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-shield-for-Arduino-Nano/img/Grove-Shoeld-for-Arduino-Nano-back-rr.jpg" alt="pir" width={600} height="auto" /></p>

- **1-Analog Ports**: include 3 anlog ports, A0, A2, A6.
- **2-Digital Ports**: include 3 digital ports, D2, D4, D6.
- **3-UART Port**: 1 UART port.
- **4-I2C Ports**: 1 I2C ports.

## Getting Started

### Hardware

- Step 1. Prepare the below stuffs:

<table align="center">
  <tbody>
  <tr>
    <td><h3>Seeeduino Nano</h3></td>
    <td><h3>Grove Shield for Arduino Nano</h3></td>
    <td><h3>Grove - Buzzer</h3></td>
    <td><h3>Grove - Button</h3></td>
  </tr>
  <tr>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/seeeduino-Nano-front.png" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-shield-for-Arduino-Nano/img/Grove-Shoeld-for-Arduino-Nano-wiki.jpg" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Buzzer.png" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/button_s.jpg" alt="pir" width={200} height="auto" /></p></td>
  </tr>
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/Seeeduino-Nano-p-4111.html" target="_blank"><span>Get ONE Now</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Grove-Shield-for-Arduino-Nano-p-4112.html" target="_blank"><span>Get ONE Now</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Grove-Buzzer-p-768.html" target="_blank"><span>Get ONE Now</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/category/Grove-Button-p-766.html" target="_blank"><span>Get ONE Now</span></a></h4></td>
  </tr>  
  </tbody></table>

- Step 2. Connect Grove - Buzzer to port D4 of Grove Shield
- Step 3. Connect Grove - Button to port D2 of Grove Shield
- Step 4. Plug Grove Shield for Arduino Nano into Seeeduino nano
- Step 5. Connect Seeeduino to PC through a USB cable

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-shield-for-Arduino-Nano/img/hardwareconnect.jpg" alt="pir" width={600} height="auto" /></p>

### Software

- Step 1. Copy below code to Arduino IDE and upload to Seeeduino.

```cpp
const int button = 2;       // connect a button
const int buzzer = 4;       // connect a buzzer
void setup()
{
    pinMode(button, INPUT); //set button as an INPUT device
    pinMode(buzzer, OUTPUT);   //set LED as an OUTPUT device
}
void loop()
{
    int btn = digitalRead(button); //read the status of the button
    digitalWrite(buzzer, btn);
    delay(10);
}
```

- Step 2. Press the button and we will hear the buzzer.

## FAQ

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/103100124/res/Grove Shield for Arduino Nano v1.0PCB&SCH.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[Eagle]** [Grove shield for Arduino Nano PCB&SCH](https://files.seeedstudio.com/products/103100124/res/Grove Shield for Arduino Nano v1.0PCB&SCH.zip)
- **[PDF]** [Grove shield for Arduino Nano PCB&SCH](https://files.seeedstudio.com/products/103100124/res/Grove Shield for Arduino Nano v1.0PCB&SCH.pdf)
- **[SCH]** [Grove shield for Arduino Nano SCH](https://files.seeedstudio.com/products/103100124/res/Grove Shield for Arduino Nano.sch)
- **[BRD]** [Grove shield for Arduino Nano BRD](https://files.seeedstudio.com/products/103100124/res/Grove Shield for Arduino Nano.brd)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
