---
name: SeeedStudio GD32 RISC-V kit with LCD
category: Development Board
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 102060105
tags:
---


![](https://github.com/SeeedDocument/GD32VF103/raw/master/img/GD32VF-103VBT6-all.jpg)




SeeedStudio GD32 RISC-V Dev Board is based on GD32VF103VBT6 MCU which can run at up to 108MHz. GD32VF103 device is a 32-bit general-purpose microcontroller based on the RISC-V core, it provides128 KB on-chip Flash memory and 32 KB SRAM memory. Meanwhile, it provides a wealth of interface resources: 5x U(S)ART, 2 x I2C, 3 x SPI, 2 x I2S, 2 x CAN2.0, 1 x USBFS. 

We break out all the I/O Pins(80 GPIOs in total) of GD32VF103, which will meet your diverse development needs. With the onboard 8MB flash and 256Byte EEPROM, you can implement more complex applications. Moreover, we provide a wealth of peripheral resources on the development board, including an LCD, a type c USB port, a TF card slot, two user buttons, and three user LEDs. 


<p style="text-align:center"><a href="https://www.seeedstudio.com/SeeedStudio-GD32-RISC-V-Dev-Board-p-4302.html" target="_blank"><img src="https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p>



## Features

+ GD32VF103VBT6 RISC-V MCU @108MHz
+ 128KB on-chip Flash + 8MB on-board Flash
+ LCD Interface: 16-bit 8080 interface and SPI touch screen control interface
+ USB Type C
+ GUI support
+ LCD Display

## Hardware Overview

![](https://raw.githubusercontent.com/SeeedDocument/GD32VF103/master/img/GD32VF-103VBT6-pin.jpg)

### Pinout

![](https://raw.githubusercontent.com/SeeedDocument/GD32VF103/master/img/GD32VF-103VBT6-c.jpg)


## Platforms Supported
| PlatformIO IDE                                                                                            |
|-----------------------------------------------------------------------------------------------------|
| ![](https://github.com/SeeedDocument/Bazaar_Document/raw/master/platformio-logo.17fdc3bc.png)  |


## Getting Started


### Use PlatformIO for a Test Demo


#### Hardware


**Materials required**


SeeedStudio GD32 RISC-V Dev Board, 2.8 inch 240x320 pixel resistive LCD screen, and an FPC cable you can purchase them together with the product [SeeedStudio GD32 RISC-V kit with LCD](https://www.seeedstudio.com/SeeedStudio-GD32-RISC-V-kit-with-LCD-p-4303.html).

![](https://www.seeedstudio.site/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/g/d/gd32vf-103vbt6-connect-2.jpg)

[USB 3.1 Type C to A Cable](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html)

- **Step1**
Connect the FPC cable with the LCD display and SeeedStudio GD32 RISC-V Dev Board. When you connect the FPC cable, please let the "blue" side stay on the top like the picture showed above.

- **Step2**
Plug the USB Type C cable in the PC and your GD32 board.

Now you finish the hardware config.


#### Software
!!!Note
    According to that GD32 board can support the Arduino framework, but not be perfectly compatible with the Arduino IDE, here we use platformIO IDE to create a easy demo. The Arduino IDE version will be updated soon after. 

- **Step1**
Set up the platformIO IDE, platformIO IDE is based on Visual Studio Code.
Download the [Visual Studio Code](https://code.visualstudio.com/).
Click the "Extensions" icon, you can find it on the left side of the Visual Studio Code.


![](https://github.com/SeeedDocument/GD32VF103/raw/master/img/wiki1.png)


Type "platformIO" in the search engine to install it. 


![](https://github.com/SeeedDocument/GD32VF103/raw/master/img/wiki2.png)

- **Step2**
Click the "Open Project" and find your project file. 

Download the **TFT_GD32 Project** here



<div align="center">
<figure>
  <a href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD/archive/TFT_GD32.zip" target="_blank"><img src="https://github.com/SeeedDocument/GD32VF103/raw/master/img/TFT_GD32-Project.png" />
  </a>
</figure>
</div>




![](https://github.com/SeeedDocument/GD32VF103/raw/master/img/wiki3.png)


Choose the Arduino frame work and GD32 board.
- **Step3**
Add the ["LCD" library](https://github.com/Seeed-Studio/Seeed_Arduino_LCD/archive/master.zip) in the platformIO IDE. Usually the library file is at /C:/user/admin/.platformio/lib/, compress the "LCD" library and add it to the target path.
- **Step4**
You can see that the working column is placed on the left side.


![](https://github.com/SeeedDocument/GD32VF103/raw/master/img/wiki4.png)

 
Click the "main.cpp" and compile the code. The compile button is at the bottom of the Visual Studio  Code.


![](https://github.com/SeeedDocument/GD32VF103/raw/master/img/wiki5.png)


- **Step5**
The code is compiled to a binary file. You can use [DFU tool](https://github.com/SeeedDocument/GD32VF103/raw/master/res/GD32_MCU_Dfu_Tool_V3.8.1.5784_1.rar) to download the binary file to the board. Besides you need to install the DFU firmware to let the board download the code in the way of DFU. The DFU firmware is in the same document of the [DFU tool](https://github.com/SeeedDocument/GD32VF103/raw/master/res/GD32_MCU_Dfu_Tool_V3.8.1.5784_1.rar).
- **Step6**
Check your board and connect it to the PC through USB type-C interface. Make sure the board boot method is correct which is boot0 connect to the high level and boot1 connect to the ground. Both of them are on the left side of the GD32 board, you can adjust them by a couple of wires.
- **Step7**
Open the DFU tool, after you set up the board by the steps above, the DFU tool will recognise your board automatically as showed in the picture.


![](https://github.com/SeeedDocument/GD32VF103/raw/master/img/wiki6.png)


Then you should add your binary file to the colum of APP program file. The binary  file is at the path \TFT_GD32\.pio\build\gd32vf103v-eval. 
Choose the Index 4 and click "ok" to download the code to the board, after downloading, click "Leave DFU" to let the board disconnect the DFU tool. Then you will see a demo of counting the time of graphic processing on your LCD. It almost contain all the API in the "TFT_eSPI" library.


![](https://github.com/SeeedDocument/GD32VF103/raw/master/img/gd32.gif)


!!!Note
    If you want to download another code, just press the reset button on the board, open the [DFU tool](https://github.com/SeeedDocument/GD32VF103/raw/master/res/GD32_MCU_Dfu_Tool_V3.8.1.5784_1.rar), and the DFU tool will recognise the board again. You can also connect the boot0 to the ground in case you press the reset button and delete the code in your board.

##Resources


- **[PDF]** [SeeedStudio GD32 RISC-V Board Shecmatic File](https://github.com/SeeedDocument/GD32VF103/raw/master/res/GD32VF103VBT6-dev-board.pdf)
- **[PDF]** [GD32VF103_Datasheet_Rev1.0](https://github.com/SeeedDocument/Bazaar_Document/raw/master/GD32VF103_Datasheet_Rev1.0.pdf)
- **[PDF]** [GD32VF103_User_Manual_EN_V1.0](https://github.com/SeeedDocument/Bazaar_Document/raw/master/GD32VF103_User_Manual_EN_V1.0.pdf)
- **[Zip]** ["LCD" library](https://github.com/Seeed-Studio/Seeed_Arduino_LCD/archive/master.zip)
- **[Zip]** [Project file "TFT_GD32"](https://github.com/Seeed-Studio/Seeed_Arduino_LCD/archive/TFT_GD32.zip)
- **[Zip]** [DFU Tool](https://github.com/SeeedDocument/GD32VF103/raw/master/res/GD32_MCU_Dfu_Tool_V3.8.1.5784_1.rar)



## Tech Support
Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).