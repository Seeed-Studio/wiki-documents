---
description: Grove - LED Matrix Driver (HT16K33)
title: Grove - LED Matrix Driver (HT16K33)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-LED_Matrix_Driver-HT16K33
last_update:
  date: 1/7/2023
  author: shuxu hu
---



<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/main.jpg" alt="pir" width={600} height="auto" /></p>

LED Matrix is low cost and usually used to display simple numbers and images. The Grove - LED Matrix Driver is the I^2^C based product which allows you to control the LED matrix with our prepared and easy-to-use libraries, or you can create your own library to control it to satisfy your need. The 8*8 LED Matrix can be assembled and unassembled from the driver board easily, so it is convenient to change different color LED matrix display based on your need.



<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-LED-Matrix-Driver-HT16K33.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-LED-Matrix-Driver-HT16K33.html)
## Version

| Product Version  | Changes                                                                                               | Released Date |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - LED Matrix Driver (HT16K33) | Initial                                                                                               | Sep 2018      |

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
|I2C address|0x70(defult) 0x71~0x77(configurable)|
|size|L: 40mm W: 40mm H: 17mm| 
|Weight|8.8g|
|Package size|L: 140mm W: 90mm H: 18mm|
|Gross Weight|15g|


:::note
         There are 8 possible I2C address of this grove, from 0x70 to 0x77. The defult I^2^C address is 0x77. You can change the I2C address by do some soldering as instructed in the below table. 
:::
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

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/0x73.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/0x73.png" alt="pir" width={600} height="auto" /></p>


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

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/pinout.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/pinout.jpg" alt="pir" width={600} height="auto" /></p>

## Platforms Supported

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|


## Getting Started


### Play With Arduino

**Materials required**


| Seeeduino V4.2 | Base Shield|Grove-LED Matrix Driver| matrix LED - Red|
|--------------|-------------|-----------------|---------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/LED_matrix.jpg" alt="pir" width={600} height="auto" /></p>
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-LED-Matrix-Driver-HT16K33.html)|[Get ONE Now](https://www.seeedstudio.com/20mm-8-8-square-matrix-LED-Red-p-36.html)


:::note
      **1.** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy 
    
      **2.** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.
:::

- **Step 1.** Connect red square matrix LED to the Grove-LED Matrix Driver.

- **Step 2.** Connect the Grove - LED Matrix Driver to port **I^2^C** of Grove-Base Shield.

- **Step 3.** Plug Grove - Base Shield into Seeeduino.

- **Step 4.** Connect Seeeduino to PC via a USB cable.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/with_ard.jpeg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/with_ard.jpeg" alt="pir" width={600} height="auto" /></p>


#### Software

:::note
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

- **Step 1.** Download the [Grove_LED_Matrix_Driver_HT16K33](https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver_HT16K33.git) Library from Github.

- **Step 2.** Refer to [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.


- **Step 3.** Restart the Arduino IDE. Open the example, you can open it in the following three ways：
    1. Open it directly in the Arduino IDE via the path: **File --> Examples -->Grove - LED Matrix Driver(HT16K33 with 8*8 LED Matrix) --> display_bars**. 
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/ard1.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/ard1.jpg" alt="pir" width={600} height="auto" /></p>

    2. Open it in your computer by click the **basic_demo.ino** which you can find in the folder **XXXX\Arduino\libraries\Grove_LED_Matrix_Driver_HT16K33⁩\examples\display_bars⁩\display_bars⁩.ino**, **XXXX** is the location you installed the Arduino IDE.
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/ard2.png) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/ard2.png" alt="pir" width={600} height="auto" /></p>

    3. Or, you can just click the icon 
    <!-- ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>

     in upper right corner of the code block to copy the following code into a new sketch in the Arduino IDE.



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

:::note
        The library file may be updated. This code may not be applicable to the updated library file, so we recommend that you use the first two methods.
:::

:::success
		If everything goes well, you will be able to see various bars display on the LED matrix.
:::
If you would like to run other examples, you may do similar processes and be able to see different displays.



### DIY

Are you willing to let the LED matrix to display the emoji? Now, it is your turn to design your own. Prepare yourself with the above-listed Hardware and Software requirements.

- **Step 1.** Use the online [LED Matrix Editor](http://xantorohara.github.io/led-matrix-editor/#) to edit and create animations for 8*8 LED matrices.

- **Step 2.** Select the LEDs color on the top right corner. In my case, I choose 'red' as I am using the Red LED Matrix.

- **Step 3.** Create your own design by simply click on the blank dot.

- **Step 4.** Copy the hex file generated according to your design. There are two ways you can do this:
    - copy the hex value in the hex box at the bottom left corner.
    - copy the corresponding code in the Arduino/C code section.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/emoji.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/emoji.png" alt="pir" width={600} height="auto" /></p>


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


:::success

         If everything goes well, your LED Matrix will display as below.
:::
<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/display.gif) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/display.gif" alt="pir" width={600} height="auto" /></p>


## Schematic Online Viewer


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/res/202002241_PCBA;Grove-LED-Matrix-Driver(HT16K33).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Resources

- **[Zip]** [Grove - LED Matrix Driver(HT16K33) Eagle Files](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/res/202002241_PCBA;Grove-LED-Matrix-Driver(HT16K33).zip)

- **[Zip]** [Grove_LED_Matrix_Driver_HT16K33 Software Library](https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver_HT16K33/archive/master.zip)

- **[PDF]** [Datasheet HT16K33](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/res/310040349,SMD-IC-Driver;SOP-28-1.pdf)




## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
