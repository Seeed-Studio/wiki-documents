---
name: Grove - Red LED Matrix w/Driver
category: Grove/LED
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 105020074
tags:
---




![](https://github.com/SeeedDocument/Grove-LED_Matrix_Driver-HT16K33/raw/master/img/main2.jpg)


LED Matrix is low cost and usually used to display simple numbers and images. Grove - Red LED Matrix w/Driver is the combination of the 20mm  8*8 square LED Matrix - Red and the Grove - LED Matrix Driver. The HT16K33 is a memory mapping and multi-function LED controller driver which allows you to control the LED matrix with our prepared and easy-to-use libraries, or you can create your own library to control it to satisfy your need. 

<iframe width="800" height="450" src="https://www.youtube.com/embed/i9hnRPuCx-Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p style=":center"><a href="https://www.seeedstudio.com/Grove-Red-LED-Matrix-w/Driver.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Version

| Product Version  | Changes                                                                                               | Released Date |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - Red LED Matrix w/Driver | Initial                                                                                               | Sep 2018      |

## Feature 

- Integrated RC oscillator
- R/W address auto increment
- Max. 8 x 8 patterns
- I^2^C-bus interface


##Specification

|Item|Value|
|---|---|
|Supply Voltage|3.3V / 5V|
|LED Matrix Dot NO.|8 * 8|
|Operating temperature|-40～85℃|
|Storage temperature|-50～125℃|
|Interface|I2C|
|I2C address|0x70(defult)<br>0x71~0x77(configurable)|
|Size|L: 40mm W: 40mm H: 21mm| 
|Weight|17.4g|
|Package size|L: 140mm W: 90mm H: 20mm|
|Gross Weight|24g|


!!! Note
There are 8 possible I2C address of this grove, from 0x70 to 0x77. The defult I^2^C address is 0x77. You can change the I2C address by do some soldering as instructed in the below table. 

|I^2^C address|Connection|
|---|---|
|0x70|Disconnect: A0 A1 A2|
|0x71|Disconnect: A1 A2, Connect: A0|
|0x72|Disconnect: A0 A2, Connect: A1|
|0x73|Disconnect: A2, Connect: A1 A0|
|0x74|Disconnect: A0 A1, Connect: A2|
|0x75|Disconnect: A1, Connect: A0 A2|
|0x76|Disconnect: A0, Connect: A1 A2|
|0x77|Connect: A0 A1 A2|

For example, if I want to change the address to 0x73, I need to connect pad A1,A0 and disconnect pad A2. Then I will get address 0b01110011, that is 0x73.

![](https://github.com/SeeedDocument/Grove-LED_Matrix_Driver-HT16K33/raw/master/img/0x73.png)


## Typical applications

- Industrial control indicators
- Digital clocks, thermometers, counters, multimeters 
- Combo sets
- VCR sets
- Instrumentation readouts
- Other consumer applications
- LED Displays


## Hardware Overview

### Pin Out

![](https://github.com/SeeedDocument/Grove-LED_Matrix_Driver-HT16K33/raw/master/img/pinout.jpg)



### Hardware Detail




## Working Principle

## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |



## Getting Started


### Play With Arduino


#### Hardware

**Materials required**


| Seeeduino V4.2 | Base Shield|Grove - Red LED Matrix w/Driver| 
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/base_shield.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-LED_Matrix_Driver-HT16K33/raw/master/img/thumbnail2.jpg)|
|[Get ONE Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Red-LED-Matrix-w/Driver.html)|


!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy 
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.


- **Step 1.** Connect the Grove - Red LED Matrix w/Driver to port **I^2^C** of Grove-Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.

![](https://github.com/SeeedDocument/Grove-LED_Matrix_Driver-HT16K33/raw/master/img/with_ard.jpeg)


#### Software

!!!Attention
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.


- **Step 1.** Download the [Grove_LED_Matrix_Driver_HT16K33](https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver_HT16K33.git) Library from Github.

- **Step 2.** Refer to [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** Restart the Arduino IDE. Open the example, you can open it in the following three ways：
    1. Open it directly in the Arduino IDE via the path: **File --> Examples -->Grove - LED Matrix Driver(HT16K33 with 8*8 LED Matrix) --> display_bars**. 
    ![](https://github.com/SeeedDocument/Grove-LED_Matrix_Driver-HT16K33/raw/master/img/ard1.jpg)
    
    2. Open it in your computer by click the **basic_demo.ino** which you can find in the folder **XXXX\Arduino\libraries\Grove_LED_Matrix_Driver_HT16K33⁩\examples\display_bars⁩\display_bars⁩.ino**, **XXXX** is the location you installed the Arduino IDE.
    ![](https://github.com/SeeedDocument/Grove-LED_Matrix_Driver-HT16K33/raw/master/img/ard2.png)
    
    3. Or, you can just click the icon ![](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/copy.jpg) in upper right corner of the code block to copy the following code into a new sketch in the Arduino IDE.



```C++


#include <Wire.h>
#include "Grove_LED_Matrix_Driver_HT16K33.h"


Matrix_8x8 matrix;

void setup()
{
    Wire.begin();
    matrix.init();
    matrix.setBrightness(0);
    matrix.setBlinkRate(BLINK_OFF);
}

void loop()
{
    for (int i=0;i<33;i++)
    {
        // The input range of writeBar is [0-32]
        matrix.writeBar(i);
        matrix.display();
        delay(150);
    }
}


```

!!!Attention
        The library file may be updated. This code may not be applicable to the updated library file, so we recommend that you use the first two methods.


!!!Success
		If everything goes well, you will be able to see various bars display on the LED matrix.

If you would like to run other examples, you may do similar processes and be able to see different displays.



**DIY**

Are you willing to let the LED matrix to display the emoji? Now, it is your turn to design your own. Prepare yourself with the above-listed Hardware and Software requirements.

- **Step 1.** Use the online [LED Matrix Editor](http://xantorohara.github.io/led-matrix-editor/#) to edit and create animations for 8*8 LED matrices.

- **Step 2.** Select the LEDs color on the top right corner. In my case, I choose 'red' as I am using the Red LED Matrix.

- **Step 3.** Create your own design by simply click on the blank dot.

- **Step 4.** Copy the hex file generated according to your design. There are two ways you can do this:
    - copy the hex value in the hex box at the bottom left corner.
    - copy the corresponding code in the Arduino/C code section.

![](https://github.com/SeeedDocument/Grove-LED_Matrix_Driver-HT16K33/raw/master/img/emoji.png)


- **Step 5.** Create the new '.ino' file under the same folder with other LED Matrix examples and copy below code.


```C++

#include "Grove_LED_Matrix_Driver_HT16K33.h"
#include <Wire.h>

//put your own design hex group here.
const uint64_t Emoji[] = 
{
  0x3c4299a581a5423c,
  0x3c4281bd81a5423c,
  0x3c42a59981a5423c,
};

Matrix_8x8 matrix;


void setup() {
    Wire.begin();
    matrix.init();
    matrix.setBrightness(0);
    matrix.setBlinkRate(BLINK_OFF);
    /*************************************************************
    * Description
    *    Setting the blink rate of matrix
    * Parameter
    *    blink_type: BLINK_OFF, BLINK_2HZ, BLINK_1HZ
    * Return
    *    Null.
    *************************************************************/
}

void loop() {
  for (int i = 0;i < 3;i++)
    {
        matrix.writeOnePicture(Emoji[i]);
        /*************************************************************
        * Description
        *    Write a picture in display buffer.
        *    Call display() to show display buffer.
        * Parameter
        *    pic: A uint64_t type 8x8 matrix picture, you can make it at
        *         https://xantorohara.github.io/led-matrix-editor/#
        * Return
        *    Null.
        *************************************************************/
        matrix.display();
        /*************************************************************
        * Description
        *    Clear the display buffer.
        *    This function will display nothing on 8x8 Matrix after call display().
        * Parameter
        *    Null.
        * Return
        *    Null.
        *************************************************************/
        delay(500);
    }
}

```


- **Step 6.** Upload your project to your seeeduino.


!!!Success

If everything goes well, your LED Matrix will display as below.

![](https://github.com/SeeedDocument/Grove-LED_Matrix_Driver-HT16K33/raw/master/img/display.gif)


## Schematic Online Viewer


<div class="altium-ecad-viewer" data-project-src="https://github.com/SeeedDocument/Grove-LED_Matrix_Driver-HT16K33/raw/master/res/202002241_PCBA%3BGrove%20-%20LED%20Matrix%20Driver%20(HT16K33)_原理图.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>


## Resources

- **[Zip]** [Grove - LED Matrix Driver(HT16K33) Eagle Files](https://github.com/SeeedDocument/Grove-LED_Matrix_Driver-HT16K33/raw/master/res/202002241_PCBA%3BGrove%20-%20LED%20Matrix%20Driver%20(HT16K33)_原理图.zip)

- **[Zip]** [Grove_LED_Matrix_Driver_HT16K33 Software Library](https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver_HT16K33/archive/master.zip)

- **[PDF]** [Datasheet HT16K33](https://github.com/SeeedDocument/Grove-LED_Matrix_Driver-HT16K33/raw/master/res/310040349%2C%20SMD%20IC%20Driver%3BSOP-28-物料规格书-1.pdf)




## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/) or drop mail to [techsupport@seeed.cc](techsupport@seeed.cc).


<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>