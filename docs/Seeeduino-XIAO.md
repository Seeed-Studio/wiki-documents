---
name: Seeeduino XIAO - Arduino Microcontroller - SAMD21 Cortex M0+
category: Development Board
bzurl: 
prodimagename:
surveyurl: 
sku: 102010328
tags:
---

![](https://raw.githubusercontent.com/SeeedDocument/Seeeduino-XIAO/master/img/Seeeduino-XIAO-preview-1.jpg)

The Seeeduino XIAO is the smallest member of the Seeeduino family. It carries the powerful ATSAMD21G18A-MU which is a low-power microcontrollers. On the other hand, this little board has good performance in processing but needs less power. As a matter of fact, it is designed in a tiny size and can be used for wearable devices and small projects.

Seeeduino XIAO has 14 GPIO PINs, which can be used for 11 digital interfaces, 11 mock interfaces, 10 PWM interfaces (d1-d10), 1 DAC output pin D0, 1 SWD pad interface, 1 I2C interface, 1 SPI interface, 1 UART interface, Serial communication indicator (T/R), Blink light (L). The colors of LEDs(Power,L,RX,TX) are green, yellow, blue and blue. Moreover, Seeeduino XIAO has a Type-C interface which can supply power and download code. There are two reset button, you can short connect them to reset the board.


<p style=":center"><a href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>


## Features

- Powerful CPU: ARM® Cortex®-M0+ 32bit 48MHz microcontroller(SAMD21G18) with 256KB Flash,32KB SRAM.
- Flexible compatibility: Compatible with Arduino IDE.
- Easy project operation: Breadboard-friendly.
- Small size: As small as a thumb(23.5x17.5mm) for wearable devices and small projects.
- Multiple development interfaces: 11 digital/analog pins, 10 PWM Pins, 1 DAC output, 1 SWD Bonding pad interface, 1 I2C interface, 1 UART interface, 1 SPI interface.

## Specification

|Item|Value|
|---|---|
|CPU|ARM Cortex-M0+ CPU(SAMD21G18) running at up to 48MHz|
|Flash Memory|256KB|
|SRAM|32KB|
|Digital I/O Pins|11|
|Analog I/O Pins|11|
|I2C interface|1|
|SPI interface|1|
|UART interface|1|
|Power supply and downloading interface| Type-C|
|Power|3.3V/5V DC|
|Dimensions|23.5×17.5×3.5mm|


!!!note:

    1.The MCU of this design is powered by 3.3v, please pay attention not to introduce the IO level of 5V into the IO interface of the system, otherwise the chip may be damaged;
    2.Please pay attention to use, do not lift the shield cover.




## Hardware Overview


![](https://github.com/SeeedDocument/Seeeduino-XIAO/raw/master/img/Seeeduino-XIAO-pinout.jpg)


![](https://github.com/SeeedDocument/Seeeduino-XIAO/raw/master/img/Seeeduino%20XIAO%20pinout2.jpg)




## Getting Started


### Hardware


**Materials required**

- Seeeduino XIAO x1 
- Computer x1
- USB typc cable x1

!!!Tip

    Some USB cables can only supply power and cannot transfer data. If you don't have a usb cable or don't know if your usb cable can transmit data, you can check [seeed USB type C support USB 3.1 ](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html).


- Step 1. Prepare a Seeeduino XIAO and a Type-C cable.

- Step 2. Connect the Seeeduino XIAO to your computer.Then the yellow power LED should go on.


### Software


!!!Note


    If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](http://wiki.seeed.cc/Getting_Started_with_Arduino)



- **Step 1. You need to Install an Arduino Software.**


[![](https://raw.githubusercontent.com/SeeedDocument/Seeeduino_Stalker_V3_1/master/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)


**Launch the Arduino application**

Double-click the Arduino application (arduino.exe) you have previously downloaded.


!!!Note
 
    If the Arduino Software loads in a different language, you can change it in the preferences dialog. See the [Arduino Software (IDE) page](https://www.arduino.cc/en/Guide/Environment#languages) for details.


- **Step 2. Open the Blink example**  

Open the LED blink example sketch: **File > Examples >01.Basics > Blink**.


![](https://raw.githubusercontent.com/SeeedDocument/Seeeduino_GPRS/master/img/select_blink.png)


- **Step 3. Add Seeeduino to your Arduino IDE**

Click on **File > Preference**, and fill Additional Boards Manager URLs with below url:
    *https://raw.githubusercontent.com/Seeed-Studio/Seeeduino-Boards/master/package_seeeduino_index.json*


![](https://github.com/SeeedDocument/Seeeduino-Femto/raw/master/.img/wiki2.png)


Click **Tools-> Board-> Boards Manager...**, print  keyword "**Seeeduino XIAO**" in the searching blank. Here comes the "Seeed SAMD Boards". Install it.


![](https://raw.githubusercontent.com/SeeedDocument/Seeeduino-XIAO/master/img/Seeeduino-XIAO-board.png)


- **Step 4. Select your board and port** 

After installing the board, click **Tools-> Board**, find "**Seeeduino XIAO M0**" and select it. Now you have already set up the board of Seeeduino XIAO for Arduino IDE.


![](https://raw.githubusercontent.com/SeeedDocument/Seeeduino-XIAO/master/img/board.png)




Select the serial device of the Arduino board from the Tools | Serial Port menu. This is likely to be COM3 or higher (**COM1** and **COM2** are usually reserved for hardware serial ports). To find out, you can disconnect your Arduino board and re-open the menu; the entry that disappears should be the Arduino board. Reconnect the board and select that serial port.


![](https://raw.githubusercontent.com/SeeedDocument/Seeeduino-XIAO/master/img/port.png)


- **Step 5.Upload the program**  


Now, simply click the "Upload" button in the environment. Wait a few seconds and if the upload is successful, the message "Done uploading." will appear in the status bar.


![](https://raw.githubusercontent.com/SeeedDocument/Seeeduino_GPRS/master/img/upload_image.png)

 
 A few seconds after the upload finishes, you should see the pin 13 (L) LED on the board start to blink (in orange). If it does, congratulations! You've gotten Arduino up-and-running. If you have problems, please see the troubleshooting suggestions.

## The sample application


 - [USB to Serial Port](https://github.com/SeeedDocument/Seeeduino-XIAO/blob/master/USB-to-Serial-Port.md)



- [SPI Communication Interface](https://github.com/SeeedDocument/Seeeduino-XIAO/blob/master/SPI-Communication-Interface.md)




## Resourses

- **[ZIP]** [Seeeduino XIAO](https://github.com/SeeedDocument/Seeeduino-XIAO/raw/master/res/Seeeduino-XIAO-v1.0.zip)

- **[PDF]** [ATSAMD218A-MU datasheet](https://github.com/SeeedDocument/Seeeduino-XIAO/raw/master/res/ATSAMD21G18A-MU-Datasheet.pdf)


## Schematic Online Viewer


<div class="altium-ecad-viewer" data-project-src="https://github.com/SeeedDocument/Seeeduino-XIAO/raw/master/res/Seeeduino-XIAO-v1.0.zip" style="border-radius: 0px 0px 4px 4px; height:500px; border-style: solid; border-width: 1px; border-color: rgb(241,241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" /></div>
 
 
## Tech Support
Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
