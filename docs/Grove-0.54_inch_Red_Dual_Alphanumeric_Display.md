---
name: Grove - 0.54" Red Dual Alphanumeric Display
category: 
bzurl: 
oldwikiname: 
prodimagename: 
surveyurl: 
sku: 104020132
---


![](https://github.com/SeeedDocument/Grove-0.54-Red-Dual-Alphanumeric-Display/raw/master/img/front.png)


This module is a 2 digit alphanumeric display with high brightness and red backlight, each digit is consists of a 14-segment digital tube. The commonly used 7-segment display can only display the numbers 0-9 and a limited number of letters. In contrast, the 14-segment digital display does not have this limitation, it can display all the characters, that's why we call it alphanumeric display. The digit height is 0.54 inch and the red LED used in this module has super high brightness, so you can see it a few meters away.
 
Usually, the 14-segment display needs to use 17 or more wires to control the display, which means that a large amount of IO of your main control board (such as Arduino) will be occupied. With the help of on-board HT16K33 chip and Grove connector, we made it an i2c display, only four wires are enough. No troublesome soldering and no complicated wiring, if you are using [seeeduino](https://www.seeedstudio.com/seeeduino-boards-c-987.html), it is really plug and play, easy peasy.
 
We have released a lot of [displays](https://www.seeedstudio.com/displays-c-929.html) for Arduino, raspberry pi, Beaglebone and other SBC(Single Board Computer), now we bring you the Grove - 0.54" Red Dual Alphanumeric Display, the 14-segment display means more possibility and creativity. We hope it will help you create more interesting projects. 
 
In case you just need a quad digit alphanumeric display, you can check the [Grove - 0.54" Red Quad Alphanumeric Display](https://www.seeedstudio.com/Grove-0-54-Red-Quad-Alphanumeric-Display-p-4032.html). 
 


<p style=":center"><a href="https://www.seeedstudio.com/Grove-0-54-Red-Dual-Alphanumeric-Display-p-4031.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>



## Features

- Can display all letters and numbers
- Ultra-high brightness:30mcd
- Grove I2C, only takes two IO pins
- Onboard drivers, easy to use
- Cathode display


## Specification

| Parameter                     | Value           |
|-------------------------------|-----------------|
| Supply voltage                | 3.3V / 5V       |
| Operating ambient temperature | -30°C to 85°C   |
| LED Display                   | JM-S05422AH-001 |
| LED Controller Driver         | HT16K33         |
| LED Color                     | Red             |
| Ultra-high brightness         | 30mcd           |
| LED height                    | 0.54inch        |
| LED segment                   | 14              |
| Size                          | 40 * 40mm       |
| Output interface              | I2C             |
| I2C Address(Selectable)       | 0x70(Default)   |

## Applications

- Industrial control indicators
- Digital clocks, thermometers, counters, multimeters
- Instrumentation readouts
- Other consumer applications
- LED Displays


## Pinout

![](https://github.com/SeeedDocument/Grove-0.54-Red-Dual-Alphanumeric-Display/raw/master/img/pinout.jpg)

Here is the table about the I2C addresses. 

| A2 | A1 | A0 | I2C Address |
|----|----|----|-------------|
| 0  | 0  | 0  | 0x70        |
| 0  | 0  | 1  | 0x71        |
| 0  | 1  | 0  | 0x72        |
| 0  | 1  | 1  | 0x73        |
| 1  | 0  | 0  | 0x74        |
| 1  | 0  | 1  | 0x75        |
| 1  | 1  | 0  | 0x76        |
| 1  | 1  | 1  | 0x77        |


!!!warning
    If you connect multiple displays, you have to provide the external VCC and GND to display seperately and connect the SDA, SCL and GND to Seeeduino board.  

## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |



## Getting Started

### Play With Arduino


**Materials required**


| Seeeduino V4.2 | Base Shield |Grove - 0.54" Red Dual Alphanumeric Display|
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/base_shield.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-0.54-Red-Dual-Alphanumeric-Display/raw/master/img/front-s.png)
|[Get ONE Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-0-54-Red-Dual-Alphanumeric-Display-p-4031.html)|



>In addition, you can consider our new [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), which is equivalent to the combination of Seeeduino V4.2 and Baseshield.


!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy 
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.


#### Hardware Connection


- **Step 1.** Connect the Grove - 0.54" Red Dual Alphanumeric Display the **I2C** port of the Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.


![](https://github.com/SeeedDocument/Grove-0.54-Red-Dual-Alphanumeric-Display/raw/master/img/wiki_connect.png)


!!!Note
	If we don't have Grove Base Shield, We also can directly connect Grove - 0.54" Red Dual Alphanumeric Display to Seeeduino as below.

| Seeeduino       | Grove - 0.54" Red Dual Alphanumeric Display |
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| SDA           | White                   |
| SCL           | Yellow                  |


#### Software

!!!Attention
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.


- **Step 1.** Download the  [Grove - 0.54" Red Dual Alphanumeric Display Library](https://github.com/Seeed-Studio/Seeed_Alphanumeric_Display_HT16K33)  from Github.
- **Step 2.** Refer [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.
- **Step 3.** Open **Arduino IDE -> File -> Examples -> Grove-Alphanumeric Display -> number_increment**, then upload the example to Arduino. If you do not know how to upload the code, please check [how to upload code](http://wiki.seeedstudio.com/Upload_Code/).

![](https://github.com/SeeedDocument/Grove-0.54-Red-Dual-Alphanumeric-Display/raw/master/img/example.png)

- **Step 4.** You can see the led is running from 00 to FF repeatly.

**API**

- Init(): initialization 
- setBrightness(): set the brightness, the range is 0-15, the more brightness, the more power consumption 
- setBlinkRate(): set the interval of blinking, you can set as BLINK_OFF to turn off the flashing
- displayNum(): display the number, only two numbers can be displayed
- dsplayString(): display the character, only two characters can be displayed
  

## Resources

- **[ZIP]** [Grove - 0.54" Red Dual Alphanumeric Display Schematic file](https://github.com/SeeedDocument/Grove-0.54-Red-Dual-Alphanumeric-Display/raw/master/res/Grove-0.54-Red-Dual-Alphanumeric-Display.zip)
- **[PDF]** [LED Module Datasheet](https://github.com/SeeedDocument/Grove-0.54-Red-Dual-Alphanumeric-Display/raw/master/res/DIP-LED-2-BETY-14-SEG.pdf)
- **[PDF]** [HT16K33 Datasheet](https://github.com/SeeedDocument/Grove-0.54-Red-Dual-Alphanumeric-Display/raw/master/res/HT16K33.pdf)
- **[PDF]** [MPS MP2155 Datasheet](https://github.com/SeeedDocument/Grove-0.54-Red-Dual-Alphanumeric-Display/raw/master/res/MPS_MP2155%20datasheetpdf.pdf)
- **[Library]** [Grove - 0.54" Red Dual Alphanumeric Display Library](https://github.com/Seeed-Studio/Seeed_Alphanumeric_Display_HT16K33)


## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/)<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>