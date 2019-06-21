---
name: Grove - MP3 v2.0
category: Actuator
bzurl: https://seeedstudio.com/Grove-MP3-v2.0-p-2597.html
oldwikiname: Grove_-_MP3_v2.0
prodimagename: Grove-MP3_v2.0_Product_View_700_S.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/product/107020008 2.jpg
surveyurl: https://www.research.net/r/Grove-MP3_v2_0
sku: 107020008
tags: plat_duino, plat_pi, plat_bbg, plat_linkit
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-MP3_v2.0/master/img/Grove-MP3_v2.0_Product_View_700_S.jpg)

Grove - MP3 v2.0 is a tiny-sized and compact audio module. It supports various audio file operations for an audio file of MP3, WAV and WMV format, such as random music playing, play music in specific files, and so on. With serial communication, you can use all predefined command or command combinations to do all operations on music files. This module also supports general file systems such as FAT16 and FAT32. It gets a Grove UART interface, a 3.5 mm audio jack and a micro-SD slot. With this module, you can add some noise to your silent applications.

<iframe width="800" height="450" src="https://www.youtube.com/embed/3FMlt_aqhOc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p style=":center"><a href="http://www.seeedstudio.com/depot/Grove-MP3-v20-p-2597.html?cPath=98_106_57" target="_blank"><img src="https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p>


## Version

| Product Version   | Changes          | Released Date |
|-------------------|------------------|---------------|
|  Grove - MP3 v1.0 | Initial          | April 28 2013 |
|  Grove - MP3 v2.0 | Change to KT403A | Dec 15 2015   |

## Features

-   General operations on audio files
-   On-board micro-SD slot and 3.5 mm audio jack
-   Support sample rate of 8 / 11.025 / 12 / 16 / 22.05 / 24 / 32 / 44.1 / 48(KHz)
-   24-bit DAC output, 90 dB (at Max.) dynamic output range, signal-noise ratio at 85 dB
-   MP3, WMV and WAV audio format and FAT16, FAT32 files system supported
-   Embed 10 levels of equalization in total

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)

## Application ideas

-   Middle-level audio module for any applications.

## Specifications

| Parameter                                  | Value                                                                                                             |
|--------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| Input                                      | 5 V (DC)                                                                                                          |
| Operating current (no signal output state) | less than 15 mA                                                                                                   |
| Operating current                          | less than 40 mA                                                                                                   |
| Chip                                       | KT403A [(datasheet)](https://raw.githubusercontent.com/SeeedDocument/Grove-MP3_v2.0/master/res/Grove-MP3_v2.0_KT403A_datasheet_V1.3_EN-Recompiled_by_Seeed-.pdf) |
| Chip LDO output voltage                    | 3.3 V                                                                                                             |
| Chip output current                        | 100mA(at Max.)                                                                                                    |
| File formats supported                     | MP3, WAV, WMA                                                                                                     |
| Maximum memory supported for SD card       | 8 GB                                                                                                             |
| Sampling rate                              | 8 / 11.025 / 12 / 16 / 22.05 / 24 / 32 / 44.1 / 48(KHz)                                                           |


## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.


## Hardware Overview

![](https://raw.githubusercontent.com/SeeedDocument/Grove-MP3_v2.0/master/img/Grove-MP3_v2.0_Component_view-front-1200_S.jpg)

![](https://raw.githubusercontent.com/SeeedDocument/Grove-MP3_v2.0/master/img/Grove-MP3_v2.0_Component_View-Back-1200_S.jpg)


## Getting Started

!!!Note
    If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.

### Play With Arduino

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield|  Grove - MP3 v2.0 |
|--------------|-------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-MP3_v2.0/raw/master/img/Grove-MP3_v2.0_s.jpg)|
|[Get One Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](http://www.seeedstudio.com/depot/Grove-MP3-v20-p-2597.html?cPath=98_106_57)|

!!!Note
    We need SD card with music inside and Headset/earphone or stereo with 3.5 mm audio jack as well.

- **Step 2.** Connect Grove-MP3 v2.0 to port D2 of Grove-Base Shield.
- **Step 3.** Plug Grove - Base Shield into Seeeduino.
- **Step 4.** Connect Seeeduino to PC via a USB cable.

![](https://github.com/SeeedDocument/Grove-MP3_v2.0/raw/master/img/seeeduino_mp3.jpg)

!!!Note
	If we don't have Grove Base Shield, We also can directly connect Grove-MP3 v2.0 to Seeeduino as below.

| Seeeduino       | Grove-MP3 v2.0 |
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| D3            | White                   |
| D2            | Yellow                  |

#### Software

- **Step 1.** Download the  [ Grove-MP3 v2.0](https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player)  from Github.
- **Step 2.** Refer [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.
- **Step 3.** You can select **Seeed_Serial_MP3_Player/examples/KT403A_Terminal_player** example and upload to arduino. If you do not know how to upload the code, please check [how to upload code](http://wiki.seeedstudio.com/Upload_Code/).
- **Step 4.** We will see the info at COM terminal as below.

![](https://github.com/SeeedDocument/Grove-MP3_v2.0/raw/master/img/COM.png)

!!!Note
    For advanced programming, you can [download](https://raw.githubusercontent.com/SeeedDocument/Grove-MP3_v2.0/master/res/Grove-MP3_v2.0_KT403A_datasheet_V1.3_EN-Recompiled_by_Seeed-.pdf) datasheet of chip KT403A.

- **Step 5.** Please key in the related command to play the music.

!!!Tips
    The library supports AVR/SAMD/STM32F4 devices, both hardware and software serial as well.

There are 2 kinds of serial ports. One is COMSerial, stands for communication port(connecting with Grove-MP3 module). The other is ShowSerial, stands for serial info display port(connectiong with PC). 

Most of arduino boards have at least one Serial, some have multiple serials(Arduino Mega has 4 Serials). It communicates on digital pins 0 (RX) and 1 (TX) as well as with the computer via USB. So if you connect UART device on pin D0 and pin D1, you have to remove them before downloading program through USB. Or else it will cause upload fails. Sometimes you need more serial ports than the number of hardware serial ports available. If this is the case, you can use an Software Serial that uses software to emulate serial hardware. Software serial requires a lot of help from the Arduino controller to send and receive data, so it’s not as fast or efficient as hardware serial. For more info about the Serial, please refer to [Seeed Arduino Serial](http://wiki.seeedstudio.com/Seeed_Arduino_Serial/). 

- **AVR:** For the below example, We define Software Serial as COMSerial(connectiong with Grove-MP3 module). NOT all the digital pins can be used for software serial. You can refer to [Software Serial](https://www.arduino.cc/en/Reference/SoftwareSerial) for detail pins. We define hardware Serial as ShowSerial(connecting with PC). If you use Arduino Mega, you can connect the hardware Serial to ShowSerial and the other Serial1/Serial2/Serial3 to COMSerial. So you can refer to AVR Mega setting. 

- **SAMD:** For the below example, The SAMD does not support software serial. We use the hardware serial **Serial1** to commuincate with Grove-MP3 Module and **SerialUSB** to print message on PC. 

- **STM32F4:** For the below example, We use the hardware serial **Serial** to commuincate with Grove-MP3 Module and **SerialUSB** to print message on PC. 

!!!Note
    For more info about the Serial, please refer to [Seeed Arduino Serial](http://wiki.seeedstudio.com/Seeed_Arduino_Serial/). 



```c++
#ifdef __AVR__
#include <SoftwareSerial.h>
SoftwareSerial SSerial(2, 3); // RX, TX
#define COMSerial SSerial
#define ShowSerial Serial 

KT403A<SoftwareSerial> Mp3Player;
#endif

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
#define COMSerial Serial1
#define ShowSerial SerialUSB 

KT403A<Uart> Mp3Player;
#endif

#ifdef ARDUINO_ARCH_STM32F4
#define COMSerial Serial
#define ShowSerial SerialUSB 

KT403A<HardwareSerial> Mp3Player;
#endif
```



## Resources

-   **[Eagle&PDF]** [Grove-MP3_v2.0_Schematic files](https://raw.githubusercontent.com/SeeedDocument/Grove-MP3_v2.0/master/res/Grove-MP3_v2.0_Schematic_files.zip)
-   **[Librarie]**  [Grove-Serial MP3 Player V2.0 Libraries](https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player)
-   **[Datasheet]** [KT403A Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-MP3_v2.0/master/res/Grove-MP3_v2.0_KT403A_datasheet_V1.3_EN-Recompiled_by_Seeed-.pdf)

## Projects

**Arduino Based Security Project Using Cayenne**: Arduino based Home Security Project. SMS/email alerts when intruder detected. Personalized messages for authorized personnel.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ArduinoBasics/arduino-based-security-project-using-cayenne-eb379b/embed' width='350'></iframe>

**Leaf Piano**: We made a piano using a touch sensor, as well as leaves for piano keys.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/SeeedStudio/leaf-piano-5261a6/embed' width='350'></iframe>

## Tech Support

Please submit any technical issue into our [forum](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>