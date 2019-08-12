---
name: Grove - 16 x 2 LCD
category: Display
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 104020111,104020112,104020113
tags:
---

![](https://github.com/SeeedDocument/Grove-16x2_LCD_Series/raw/master/img/main.jpg)


The [Grove - LCD RGB Backlight](http://wiki.seeedstudio.com/Grove-LCD_RGB_Backlight/) has been well received since its inception. Based on customer feedback, now, we bring more cost-effective monochrome backlight derivative for you, i.e., 

The Grove - 16 x 2 LCD (Black on Yellow)  
The Grove - 16 x 2 LCD (Black on Red)  
The Grove - 16 x 2 LCD (White on Blue)  
  
Except for RGB backlights, these three products are almost identical to the the Grove - LCD RGB Backlight, they are all 16 characters wide, 2 rows with high brightness backlight.



<p style=":center"><a href="https://www.seeedstudio.com/Grove-16-x-2-LCD-%28Black-on-Yellow%29-p-3198.html" target="_blank"><img src="https://github.com/SeeedDocument/Grove-16x2_LCD_Series/raw/master/img/Y1.png" height="48" width="300" /></a></p>

<p style=":center"><a href="https://www.seeedstudio.com/Grove-16-x-2-LCD-%28Black-on-Red%29-p-3197.html" target="_blank"><img src="https://github.com/SeeedDocument/Grove-16x2_LCD_Series/raw/master/img/R1.png" height="48" width="300" /></a></p>

<p style=":center"><a href="https://www.seeedstudio.com/Grove-16-x-2-LCD-%28White-on-Blue%29-p-3196.html" target="_blank"><img src="https://github.com/SeeedDocument/Grove-16x2_LCD_Series/raw/master/img/B1.png"  height="48" width="300" /></a></p>


## Features

- Display construction: 16 Characters * 2 Lines
- Display mode: STN(Yellow Green )
- On board MCU
- I2C-bus interface
- Support English and Japanese fonts


## Specification

|Item|Value|
|---|---|
|Operating Voltage|3.3V / 5V|
|Operating temperature|0 to 50℃|
|Storage temperature|-10 to 60℃|
|Driving method|1/16 duty, 1/5 bias|
|Interface|I^2^C|
|I^2^C Address|0X3E|


## Typical Applications

- Temperature display
- Time display
- Any project that requires a simple display



## Hardware Overview

### I2C Pull-Up Resistor

The first version of Grove - 16 x 2 LCD series does not have a built-in pull-up resistor, nor does it provide a pad to solder the optional pull-up resistor. We have redesigned the module, and the new version has built-in pull-up resistors.  
 
 If you have an older version on your hand, you can solder a 10kΩ DIP resistor yourself on the back pad of the Grove connector. Please follow the picture below, solder a 10kΩ DIP resistor between **VCC** and **SCL** pins and a 10kΩ DIP resistor between **VCC** and **SDA** pins.


![](https://github.com/SeeedDocument/Grove-16x2_LCD_Series/raw/master/img/I2C-R.jpg) 



### Outline

![](https://github.com/SeeedDocument/Grove-16x2_LCD_Series/raw/master/img/outline.jpg)


## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |


!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.




## Getting Started


### Play With Arduino


#### Hardware

**Materials required**

| Seeeduino V4.2 | Base Shield|  Grove - 16 x 2 LCD |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/base_shield.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-16x2_LCD_Series/raw/master/img/perspective.jpg)|
|[Get One Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-16-x-2-LCD-%28Black-on-Yellow%29-p-3198.html)|


!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.


- **Step 1.** Connect the Grove - 16 x 2 LCD to port **I^2^C** of Grove-Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.


![](https://github.com/SeeedDocument/Grove-16x2_LCD_Series/raw/master/img/connect.jpg)


!!!Note
        If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.


| Seeeduino      |  Grove Cable       | Grove - 16 x 2 LCD |
|--------------- |--------------------|-----|
| GND            | Black              | GND |
| 5V or 3.3V     | Red                | VCC |
| SDA            | White              | SDA |
| SCL            | Yellow             | SCL |


#### Software

!!!Attention
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.


- **Step 1.** Download the [Grove-LCD RGB Backlight](https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip) Library from Github.


!!!Tips
        The Grove - 16 x 2 LCD shares the same library with the [Grove-LCD RGB Backlight](http://wiki.seeedstudio.com/Grove-LCD_RGB_Backlight/). Their usage is almost the same, except that the Grove - 16 x 2 LCD does not support the RGB color API, such as **setRGB()**.


- **Step 2.** Refer to [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** Restart the Arduino IDE. Open the example, you can open it in the following three ways：
    1. Open it directly in the Arduino IDE via the path: **File --> Examples --> Grove - LCD RGB Backlight --> HelloWorld**. 
    ![](https://github.com/SeeedDocument/Grove-16x2_LCD_Series/raw/master/img/path_1.jpg)
    
    2. Open it in your computer by click the **HelloWorld.ino** which you can find in the folder **XXXX\Arduino\libraries\Grove_LCD_RGB_Backlight-master\examples\HelloWorld**, **XXXX** is the location you installed the Arduino IDE.
    ![](https://github.com/SeeedDocument/Grove-16x2_LCD_Series/raw/master/img/path_2.jpg)
    
    3. Or, you can just click the icon ![](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/copy.jpg) in upper right corner of the code block to copy the following code into a new sketch in the Arduino IDE.


```C++
#include <Wire.h>
#include "rgb_lcd.h"

rgb_lcd lcd;

/*
const int colorR = 255;
const int colorG = 0;
const int colorB = 0;
*/

void setup() 
{
    // set up the LCD's number of columns and rows:
    lcd.begin(16, 2);
    
    //lcd.setRGB(colorR, colorG, colorB);
    
    // Print a message to the LCD.
    lcd.print("hello, world!");

    delay(1000);
}

void loop() 
{
    // set the cursor to column 0, line 1
    // (note: line 1 is the second row, since counting begins with 0):
    lcd.setCursor(0, 1);
    // print the number of seconds since reset:
    lcd.print(millis()/1000);

    delay(100);
}

/*********************************************************************************************************
  END FILE
*********************************************************************************************************/
```

!!!Attention
        1** The library file may be updated. This code may not be applicable to the updated library file, so we recommend that you use the first two methods.  
        2** Since the **Grove - 16 x 2 LCD** series are all monochrome backlight, you need to comment out the RGB color related code. In the demo code above, i.e., line 6 and line 17.


- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).


!!!Success
        If every thing goes well, you will see the LCD shows the classic sentence: hello world.



## Resources

- **[Zip]** [Grove-LCD RGB Backlight Library](https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip)

- **[PDF]** [JDH_1804_Datasheet](https://github.com/SeeedDocument/Grove-16x2_LCD_Series/raw/master/res/JDH_1804_Datasheet.pdf)



## Project

This is the introduction Video of this product, simple demos, you can have a try.

<iframe width="560" height="315" src="https://www.youtube.com/embed/3slfeHKSSCw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


**Transportation data visualization with Google Map**：We use the Wio LTE cat.1 to monitor transportation GPS and other info. For cold chain, we can monitor the GPS location together with temperature and humidity. For the bicycling,  we can monitor the GPS location together with the hear rate. 

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/SeeedStudio/transportation-data-visualization-with-google-map-517ce4/embed' width='350'></iframe>


**Atmospheric Pollution Visualization**：The air pollution problem attracts more and more attention. This time we tried to monitoring PM2.5 with Wio LTE and new Laser PM2.5 Sensor.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/SeeedStudio/atmospheric-pollution-visualization-1940f4/embed' width='350'></iframe>


## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/)



<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>