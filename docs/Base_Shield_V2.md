---
name: Base Shield V2
category: Shield
bzurl: https://www.seeedstudio.com/base-shield-v13-p-1378.html
oldwikiname:
prodimagename: Base_Shield_v2-1.png
surveyurl: https://www.surveymonkey.com/r/base_shield_v2
sku: 103030000
---

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Base_Shield_V2/master/img/Base_Shield_v2-1.png)

Arduino Uno is the most popular Arduino board so far, however it is sometimes frustrating when your project requires a lot of sensors or Leds and your jumper wires are in a mess. The purpose of creating the Base Shield is to help you get rid of bread board and jumper wires. With the rich grove connectors on the base board, you can add all the grove modules to the Arduino Uno conveniently! The pinout of Base Shield V2 is the same as Arduino Uno R3.

[![](https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now.png)](https://www.seeedstudio.com/base-shield-v13-p-1378.html)  

## Version

| Product Version  | Changes                                                                                               | Released Date |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Base Shield V1.2 | Initial                                                                                               | Oct 2011      |
| Base Shield V1.3 | Change the Grove connector layout and quantity                                                        | Aug 2012      |
| Base Shield V2.0 | Change the Grove connector layout and quantity, as well as a power switch to enable both 3.3V and 5V. | Mar 2014      |

## Specification

| Parameter             | Value/Range  |
|-----------------------|--------------|
| Operating voltage     | 3.3/5V       |
| Operation Temperature | -25℃ to +85℃ |
| Analog Ports          | 4            |
| Digital Ports         | 7            |
| UART Ports            | 1            |
| I2C Ports             | 1            |
| Size                  | 69mm x53mm   |

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

!!!Note
    The boards are not listed above mean that it might have chance to work with the platform board however requires extra work such as jump wires or rewriting the code. If you are interested in digging more, welcome to contact techsupport@seeed.cc.


## Hardware Overview

![](https://github.com/SeeedDocument/Base_Shield_V2/raw/master/img/hardware_overview.jpg)

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

| Seeeduino V4.2 | Base Shield|  Grove - Buzzer |Grove - Button|
|--------------|-------------|-----------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Base_Shield_V2/raw/master/img/Buzzer.png)|![enter image description here](https://github.com/SeeedDocument/Base_Shield_V2/raw/master/img/button_s.jpg)|
|[Get ONE Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|[Get ONE Now](https://www.seeedstudio.com/category/Grove-Button-p-766.html)|

- Step 2. Connect Grove - Buzzer to port D3 of Base Shield.
- Step 3. Connect Grove - Button to port D2 of Base Shield.
- Step 4. Plug Base Shield into Seeeduino.
- Step 5. Connect Seeeduino to PC through a USB cable.

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Base_Shield_V2/master/img/Base_Shield_v2-3.png)

### Software

- Step 1. Copy below code to Arduino IDE and upload to Seeeduino.

```
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

## Resources

- **[PDF]** [Download Wiki PDF](https://github.com/SeeedDocument/Base_Shield_V2/raw/master/res/Base_Shield_V2_WiKi.pdf)
- **[Eagle]** [Base Shiled V2 SCH](https://github.com/SeeedDocument/Base_Shield_V2/raw/master/res/Base%20Shield%20v2_SCH.zip)
- **[Eagle]** [Base Shiled V2 PCB](https://github.com/SeeedDocument/Base_Shield_V2/raw/master/res/Base%20Shield%20v2_PCB.zip)
- **[PDF]** [Base Shiled V2 SCH](https://github.com/SeeedDocument/Base_Shield_V2/raw/master/res/Base%20Shield%20v2_SCH.pdf)
- **[PDF]** [Base Shiled V2 PCB](https://github.com/SeeedDocument/Base_Shield_V2/raw/master/res/Base%20Shield%20v2_PCB.pdf)

## Project

**Smart Plant IoT**: Auto watering the plant and tracking plant's health through Helium and Microsoft Azure IoT.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/Nyceane/smart-plant-iot-59cbc3/embed' width='350'></iframe>

**Solar Powered Environmental Monitoring Kit**: A solar-powered open source kit for monitoring air quality, sound level, humidity, and temperature.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/taifur/solar-powered-environmental-monitoring-kit-b1d03d/embed' width='350'></iframe>


## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>