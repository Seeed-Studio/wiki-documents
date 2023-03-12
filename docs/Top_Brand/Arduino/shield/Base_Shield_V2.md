---
description: Base_Shield_V2
title: Base Shield V2
tags:
  - Shield
keywords:
  - Shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Base_Shield_V2
last_update:
  date: 01/11/2023  
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Base_Shield_v2-1.png" alt="pir" width={600} height="auto" /></p>

Arduino Uno is the most popular Arduino board so far, however it is sometimes frustrating when your project requires a lot of sensors or Leds and your jumper wires are in a mess. The purpose of creating the Base Shield is to help you get rid of bread board and jumper wires. With the rich grove connectors on the base board, you can add all the grove modules to the Arduino Uno conveniently! The pinout of Base Shield V2 is the same as Arduino Uno R3.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/base-shield-v13-p-1378.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Version

<table align="center">
  <tbody>
  <tr>
    <td><h3>Product Version</h3></td>
    <td><h3>Changes</h3></td>
    <td><h3>Released Date</h3></td>
  </tr>
  <tr>
    <td><h4>Base Shield V1.2</h4></td>
    <td><h4>Initial</h4></td>
    <td><h4>Oct 2011</h4></td>
  </tr>
  <tr>
    <td><h4>Base Shield V1.3</h4></td>
    <td><h4>Change the Grove connector layout and quantity</h4></td>
    <td><h4>Aug 2012</h4></td>
  </tr>  
  <tr>
    <td><h4>Base Shield V2.0</h4></td>
    <td><h4>Change the Grove connector layout and quantity, as well as a power switch to enable both 3.3V and 5V.</h4></td>
    <td><h4>Mar 2014</h4></td>
  </tr>
  </tbody></table>

## Specification

<table align="center">
  <tbody>
  <tr>
    <td><h3>Parameter</h3></td>
    <td><h3>Value/Range</h3></td>
  </tr>
  <tr>
    <td><h4>Operating voltage</h4></td>
    <td><h4>3.⅗V</h4></td>
  </tr>
  <tr>
    <td><h4>Operation Temperature</h4></td>
    <td><h4>-25℃ to +85℃</h4></td>
  </tr>
  <tr>
    <td><h4>Analog Ports</h4></td>
    <td><h4>4</h4></td>
  </tr>  
  <tr>
    <td><h4>Digital Ports</h4></td>
    <td><h4>7</h4></td>
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
    <td><h4>69mm x53mm</h4></td>
  </tr>
  </tbody></table>

## Compatible Boards

The Base Shield is tested and fully compatible with following boards:

- Arduino Uno(all revisions)/Seeeduino(V4&V4.2)
- Arduino Mega/Seeeduino Mega
- Arduino Zero(M0)/Seeeduino Lorawan
- Arduino Leonardo/Seeeduino Lite
- Arduino 101
- Arduino Due 3.3V
- Intel Edison 5V
- Linkit One

:::note
The boards are not listed above mean that it might have chance to work with the platform board however requires extra work such as jump wires or rewriting the code. If you are interested in digging more, welcome to contact us via [forum](https://forum.seeedstudio.com/).
:::

:::cautionAttention
The default I2C pins of Grove Base Shield are D70/D71, but the default I2C Wire of Arduino DUE is defined as D20/D21, so when using both together, you will not be able to use the I2C pins of the expansion board properly if you use the `Wire` definition, you need to use `Wire1`.
:::

## Hardware Overview

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/hardware_overview.jpg" alt="pir" width={600} height="auto" /></p>

- **1-Analog Ports**: include 4 anlog ports, A0, A1, A2 and A3.
- **2-Digital Ports**: include 7 digital ports, D2, D3, D4, D5, D6, D7 and D8.
- **3-UART Port**: 1 UART port.
- **4-I2C Ports**: 4 I2C ports.
- **5-Power Switch**: when using Arduino UNO with Base Shield v2, please turn the switch to 5v position; While using Seeeduino Arch with Base Shield v2, please turn the switch to 3.3v.
- **6-Reset Buton**: reset the arduino board.
- **7-PWR  LED**：The Green LED turns on when power on.
- **8-P1, P2**：please solder the pads P1 and P2， if use Base Shield v2 with Seeeduino V3.
- **Dimension**: 2.1 * 2.7 inch  

## Getting Started

### Hardware

- Step 1. Prepare the below stuffs:

<table align="center">
  <tbody>
  <tr>
    <td><h3>Seeeduino V4.2</h3></td>
    <td><h3>Base Shield</h3></td>
    <td><h3>Grove - Buzzer</h3></td>
    <td><h3>Grove - Button</h3></td>
  </tr>
  <tr>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Buzzer.png" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/button_s.jpg" alt="pir" width={200} height="auto" /></p></td>
  </tr>
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank"><span>Get ONE Now</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank"><span>Get ONE Now</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Grove-Buzzer-p-768.html" target="_blank"><span>Get ONE Now</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/category/Grove-Button-p-766.html" target="_blank"><span>Get ONE Now</span></a></h4></td>
  </tr>  
  </tbody></table>

- Step 2. Connect Grove - Buzzer to port D3 of Base Shield.
- Step 3. Connect Grove - Button to port D2 of Base Shield.
- Step 4. Plug Base Shield into Seeeduino.
- Step 5. Connect Seeeduino to PC through a USB cable.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Base_Shield_v2-3.png" alt="pir" width={600} height="auto" /></p>

### Software

- Step 1. Copy below code to Arduino IDE and upload to Seeeduino.

```cpp
const int button = 2;       // connect a button
const int buzzer = 3;       // connect a buzzer
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

Please click [here](http://support.seeedstudio.com/knowledgebase/articles/1826443-base-shield-v2-sku-103030000) to see all Base Shield V2 FAQs.

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2%20eagle%20file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[PDF]** [Download Wiki PDF](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base_Shield_V2_WiKi.pdf)
- **[Eagle]** [Base Shiled V2 SCH](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2_SCH.zip)
- **[Eagle]** [Base Shiled V2 PCB](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2_PCB.zip)
- **[PDF]** [Base Shiled V2 SCH](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2_SCH.pdf)
- **[PDF]** [Base Shiled V2 PCB](https://files.seeedstudio.com/wiki/Base_Shield_V2/res/Base%20Shield%20v2_PCB.pdf)

## Project

**Smart Plant IoT**: Auto watering the plant and tracking plant's health through Helium and Microsoft Azure IoT.

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://project.seeedstudio.com/Nyceane/smart-plant-iot-59cbc3/embed" width={350} />

**Solar Powered Environmental Monitoring Kit**: A solar-powered open source kit for monitoring air quality, sound level, humidity, and temperature.

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://project.seeedstudio.com/taifur/solar-powered-environmental-monitoring-kit-b1d03d/embed" width={350} />

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
