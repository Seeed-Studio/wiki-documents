---
name: Grove - 0.54" Red Quad Alphanumeric Display
category: 
bzurl: 
oldwikiname: 
prodimagename: 
surveyurl: 
sku: 104020133
---


![](https://github.com/SeeedDocument/Grove-0.54-Red-Quad-Alphanumeric-Display/raw/master/img/104020133-front.png)


This module is a 4 digit alphanumeric display with high brightness and red backlight, each digit is consists of a 14-segment digital tube. The commonly used 7-segment display, such as our [Grove - 4-Digit Display](https://www.seeedstudio.com/Grove-4-Digit-Display.html) can only display the numbers 0-9 and a limited number of letters. In contrast, the 14-segment digital display does not have this limitation, it can display all the characters, that's why we call it alphanumeric display.
 
![](https://github.com/SeeedDocument/Grove-0.54-Red-Dual-Alphanumeric-Display/raw/master/img/seve-seg-compare-14-seg.png)

<div align="center"><b>7-segment display vs 14-segment display</b><i> </i></div>


The digit height is 0.54 inch and the red LED used in this module has super high brightness, so you can see it a few meters away. 
 
![](https://github.com/SeeedDocument/Grove-0.54-Red-Dual-Alphanumeric-Display/raw/master/img/digit-height.jpg)

<div align="center"><b>0.54 inch Alphanumeric Display Height</b><i> </i></div>


 
Usually, the 14-segment display needs to use 17 or more wires to control the display, which means that a large amount of IO of your main control board (such as Arduino) will be occupied. With the help of on-board HT16K33 chip and Grove connector, we made it an i2c display, only four wires are enough. No troublesome soldering and no complicated wiring, if you are using [seeeduino](https://www.seeedstudio.com/seeeduino-boards-c-987.html), it is really plug and play, easy peasy.

![](https://github.com/SeeedDocument/Grove-0.54-Red-Dual-Alphanumeric-Display/raw/master/img/pins-compare.jpg)


<div align="center"><b>18 pins vs 4 pins</b><i> </i></div>
 
We have released a lot of [displays](https://www.seeedstudio.com/displays-c-929.html) for Arduino, raspberry pi, Beaglebone and other SBC(Single Board Computer), now we bring you the Grove - 0.54'' Red Quad Alphanumeric Display, you can use it to show a four letter word, such as 'Love', or you can make it a clock. All in all, the 14-segment display means more possibility and creativity. We hope it will help you create more interesting projects. 
 
In case you just need a dual digit alphanumeric display, you can check the
[Grove - 0.54" Red Dual Alphanumeric Display](http://seeedstudio.com/Grove-0-54-Red-Dual-Alphanumeric-Display-p-4031.html).


<p style=":center"><a href="https://www.seeedstudio.com/Grove-0-54-Red-Quad-Alphanumeric-Display-p-4032.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>



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
| LED Display                   | JM-S05442ASR-001|
| LED Controller Driver         | HT16K33         |
| LED Color                     | Red             |
| Ultra-high brightness         | 30mcd           |
| LED height                    | 0.54inch        |
| LED segment                   | 14              |
| Size                          | 40 * 60mm       |
| Output interface              | I2C             |
| I2C Address(Selectable)       | 0x71(Default)   |

## Applications

- Industrial control indicators
- Digital clocks, thermometers, counters, multimeters
- Instrumentation readouts
- Other consumer applications
- LED Displays


## Pinout

![](https://github.com/SeeedDocument/Grove-0.54-Red-Quad-Alphanumeric-Display/raw/master/img/pinout.jpg)

Here is the table about the I2C addresses. 

| A2 | A1 | A0 | I2C Address |
|----|----|----|-------------|
| 0  | 0  | 0  | 0x70        |
| 0  | 0  | 1  | 0x71(Default)        |
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


| Seeeduino V4.2 | Base Shield |Grove - 0.54" Red Quad Alphanumeric Display|
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/base_shield.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-0.54-Red-Quad-Alphanumeric-Display/raw/master/img/104020133-front-s.png)
|[Get ONE Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-0-54-Red-Quad-Alphanumeric-Display-p-4032.html)|



>In addition, you can consider our new [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), which is equivalent to the combination of Seeeduino V4.2 and Baseshield.


!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy 
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.


#### Hardware Connection


- **Step 1.** Connect the Grove - 0.54" Red Quad Alphanumeric Display the **I2C** port of the Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.


![](https://github.com/SeeedDocument/Grove-0.54-Red-Quad-Alphanumeric-Display/raw/master/img/wiki_connect.png)


!!!Note
	If we don't have Grove Base Shield, We also can directly connect Grove - 0.54" Red Quad Alphanumeric Display to Seeeduino as below.

| Seeeduino       | Grove - 0.54" Red Quad Alphanumeric Display |
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| SDA           | White                   |
| SCL           | Yellow                  |


#### Software

!!!Attention
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.

**1. Getting Started with display_basic**

- **Step 1.** Download the  [Grove - 0.54" Red Quad Alphanumeric Display Library](https://github.com/Seeed-Studio/Seeed_Alphanumeric_Display_HT16K33)  from Github.
- **Step 2.** Refer [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.
- **Step 3.** Open **Arduino IDE -> File -> Examples -> Seeed_Alphanumeric_Display_HT16K33 -> display_basic**
- **Step 4.** Uncomment the **tube.setTubeType(TYPE_4,TYPE_4_DEFAULT_I2C_ADDR)** as below, you have to uncomment it for all other examples as well.

```
    // If using four digital tubes, use this configuration.
       tube.setTubeType(TYPE_4,TYPE_4_DEFAULT_I2C_ADDR);

    // If using two digital tubes, use this configuration.
    // tube.setTubeType(TYPE_2,TYPE_2_DEFAULT_I2C_ADDR);
```

- **Step 5.** Upload the example to Arduino. If you do not know how to upload the code, please check [how to upload code](http://wiki.seeedstudio.com/Upload_Code/).
- **Step 4.** You can see the led is running 12 -> 4567 -> AB -> abcd repeatly.

**2. Other Examples**

- **display_custom:** Display single characters and dots.
- **display_scroll_string:** Display scrolling string which longer than 4. 
- **display_scroll_number:** Display scrolling number which bigger than 9999. 
- **number_increment:** Display increase number(Right 2 tubes).
- **combine_two_displays:** You can connect 2 Grove - 0.54" Red Quad Alphanumeric Displays or Grove - 0.54" Red Dual Alphanumeric Display or both Grove - 0.54" Red Dual Alphanumeric Display and Grove - 0.54" Red Quad Alphanumeric Display. 

If you use 2 Grove - 0.54" Red Qual Alphanumeric Displays, please modify the code as below. 

```
#define I2C_ADDR_AFTER_CHANGE_FOUR  0x75     //Grove - 0.54" Red Qual Alphanumeric Displays Changed I2C address
#define I2C_ADDR_DEFAULT_FOUR       0x71     //Grove - 0.54" Red Qual Alphanumeric Displays Default I2C address


tube1.setTubeType(TYPE_4,I2C_ADDR_AFTER_CHANGE_FOUR);
tube2.setTubeType(TYPE_4,I2C_ADDR_DEFAULT_FOUR);
```

If you use both Grove - 0.54" Red Dual Alphanumeric Display and Grove - 0.54" Red Qual Alphanumeric Display, please modify the code as below. 

```
#define I2C_ADDR_AFTER_CHANGE_FOUR  0x70     //Grove - 0.54" Red Dual Alphanumeric Displays Changed I2C address
#define I2C_ADDR_DEFAULT_FOUR       0x71     //Grove - 0.54" Red Qual Alphanumeric Displays Default I2C address


tube1.setTubeType(TYPE_2,I2C_ADDR_AFTER_CHANGE_FOUR);
tube2.setTubeType(TYPE_4,I2C_ADDR_DEFAULT_FOUR);
```

!!!warninging
    If you plug 2 modules, the red tube will be a little dark due to arduino limited power supply.   


**3. API**

- **Init(NUMERIC_I2C_ADDR):** initialize the device with I2C address, Grove - 0.54" Red Quad Alphanumeric Display I2C default address is 0x71.
- **setBrightness(15):** set the brightness, the range is 0-15, the more brightness, the more power consumption. 
- **setBlinkRate(BLINK_OFF):** set the interval of blinking, you can set as BLINK_OFF/BLINK_2HZ/BLINK_1HZ.
- **displayNum(1234567,500):** display the number, there are 2 parameters. The first parameter is number and the second one is the scrolling interval(ms). If the num <10000, The tubes display static number. Otherwise,it displays scrolling number. The scrolling interval(ms) only works on scrolling mode and you can set the interval as 0.
- **displayString("ABCDEFGHJIYZ",500):** display the character, there are 2 parameters. The first parameter is character and the second one is the scrolling interval(ms). If the character less than 4 characters, The tubes display static character. Otherwise,it displays scrolling characters. The scrolling interval(ms) only works on scrolling mode and you can set the interval as 0. The function does not support lower case letters and displays the same as upper case letters. 
- **setTubeSingleChar(FIRST_TUBE,'t'):** set the single character @ specific tube. 
- **tube.setPoint(true,false):** set the 2 dots on and off. This example sets the first dot on and the second as off.




## Schematic Online Viewer


<div class="altium-ecad-viewer" data-project-src="https://github.com/SeeedDocument/Grove-0.54-Red-Quad-Alphanumeric-Display/raw/master/res/Grove-0.54-Red-Quad-Alphanumeric-Display.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>





## Resources

- **[ZIP]** [Grove - 0.54" Quad Dual Alphanumeric Display Schematic file](https://github.com/SeeedDocument/Grove-0.54-Red-Quad-Alphanumeric-Display/raw/master/res/Grove-0.54-Red-Quad-Alphanumeric-Display.zip)
- **[PDF]** [LED Module Datasheet](https://github.com/SeeedDocument/Grove-0.54-Red-Quad-Alphanumeric-Display/raw/master/res/DIP-LED-4.pdf)
- **[PDF]** [HT16K33 Datasheet](https://github.com/SeeedDocument/Grove-0.54-Red-Dual-Alphanumeric-Display/raw/master/res/HT16K33.pdf)
- **[PDF]** [MPS MP2155 Datasheet](https://github.com/SeeedDocument/Grove-0.54-Red-Dual-Alphanumeric-Display/raw/master/res/MPS_MP2155%20datasheetpdf.pdf)
- **[Library]** [Grove - 0.54" Qual Dual Alphanumeric Display Library](https://github.com/Seeed-Studio/Seeed_Alphanumeric_Display_HT16K33)


## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/)<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>