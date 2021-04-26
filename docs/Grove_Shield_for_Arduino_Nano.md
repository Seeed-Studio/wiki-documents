---
name: Grove Shield for Arduino Nano
category: Shield
bzurl: https://www.seeedstudio.com/base-shield-v13-p-1378.html
oldwikiname:
prodimagename: Grove Shield for Arduino Nano.png
surveyurl: https://www.seeedstudio.com/Grove-Shield-for-Arduino-Nano-p-4112.html
sku: 103100124
---

![enter image description here](https://files.seeedstudio.com/wiki/Grove-shield-for-Arduino-Nano/img/Grove-Shoeld-for-Arduino-Nano-front.png)

Grove Shield for Arduino Nano provides you a simple way to connect with Arduino Nano and also Seeeduino Nano. This shield helps you get rid of breadboard and jumper wires by pulling out the pins of the motherboard and expands to 8 Grove connectors. This shield pulls out the pins of the motherboard and expands to 8 Grove connectors, including 3 Grove digital connectors, 3 Grove analog connectors, 1 Grove I2C connector, and 1 Grove UART connector.


[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Grove-Shield-for-Arduino-Nano-p-4112.html)  


## Specification

| Parameter             | Value/Range  |
|-----------------------|--------------|
| Operating voltage     | 5V       |
| Operation Temperature | -25℃ to +85℃ |
| Analog Ports          | 3           |
| Digital Ports         | 3          |
| UART Ports            | 1            |
| I2C Ports             | 1            |
| Size                  | 45mm x40mm   |

## Compatible Boards

The Base Shield is tested and fully compatible with following boards:

- [Seeeduino nano](https://www.seeedstudio.com/Seeeduino-Nano-p-4111.html)
- Arduino nano


## Hardware Overview

![](https://files.seeedstudio.com/wiki/Grove-shield-for-Arduino-Nano/img/Grove-Shoeld-for-Arduino-Nano-back-rr.jpg)

- **1-Analog Ports**: include 3 anlog ports, A0, A2, A6.
- **2-Digital Ports**: include 3 digital ports, D2, D4, D6.
- **3-UART Port**: 1 UART port.
- **4-I2C Ports**: 1 I2C ports.





## Getting Started

### Hardware

- Step 1. Prepare the below stuffs:

| Seeeduino Nano | Grove Shield for Arduino Nano|Grove - Buzzer |Grove - Button|
|--------------|-------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/seeeduino-Nano-front.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-shield-for-Arduino-Nano/img/Grove-Shoeld-for-Arduino-Nano-wiki.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Buzzer.png)|![enter image description here](https://files.seeedstudio.com/wiki/Base_Shield_V2/img/button_s.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|[Get ONE Now](https://www.seeedstudio.com/category/Grove-Button-p-766.html)|

- Step 2. Connect Grove - Buzzer to port D4 of Grove Shield
- Step 3. Connect Grove - Button to port D2 of Grove Shield
- Step 4. Plug Grove Shield for Arduino Nano into Seeeduino nano
- Step 5. Connect Seeeduino to PC through a USB cable

![enter image description here](https://files.seeedstudio.com/wiki/Grove-shield-for-Arduino-Nano/img/hardwareconnect.jpg)

### Software

- Step 1. Copy below code to Arduino IDE and upload to Seeeduino.

```
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

<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/103100124/res/Grove Shield for Arduino Nano v1.0PCB&SCH.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>


## Resources

- **[Eagle]** [Grove shield for Arduino Nano PCB&SCH](https://files.seeedstudio.com/products/103100124/res/Grove Shield for Arduino Nano v1.0PCB&SCH.zip)
- **[PDF]** [Grove shield for Arduino Nano PCB&SCH](https://files.seeedstudio.com/products/103100124/res/Grove Shield for Arduino Nano v1.0PCB&SCH.pdf)
- **[SCH]** [Grove shield for Arduino Nano SCH](https://files.seeedstudio.com/products/103100124/res/Grove Shield for Arduino Nano.sch)
- **[BRD]** [Grove shield for Arduino Nano BRD](https://files.seeedstudio.com/products/103100124/res/Grove Shield for Arduino Nano.brd)


## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>