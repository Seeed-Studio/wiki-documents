---
title: Grove - MP3 v2.0
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

<p style="text-align:center"><a href="http://www.seeedstudio.com/depot/Grove-MP3-v20-p-2597.html?cPath=98_106_57" target="_blank"><img src="https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p>


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

- **Step 1.** Download the  [ Grove-MP3 v2.0](https://github.com/Seeed-Studio/Grove_Serial_MP3_Player_V2.0/archive/master.zip)  from Github.
- **Step 2.** Refer [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.
- **Step 3.** Copy the code into Arduino IDE and upload. If you do not know how to upload the code, please check [how to upload code](http://wiki.seeedstudio.com/Upload_Code/).

Here is the code.

```C++
/*
 * MP3_Play_Test.ino
 * A quick start example for Grove-Serial MP3 Player V2.0
 * Note: The MP3 chip of Grove-Serial MP3 Player V2.0 is different from Grove-Serial MP3 Player V1.0
 * Description: This demo let you can send instruction 1-8 to control the Grove-Serial MP3 Player, via the serial port.
 *
 * Copyright (c) 2015 seeed technology inc.
 * Author     : Wuruibin
 * Created Time: Dec 2015
 * Modified Time:
 * 
 * The MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


#include <SoftwareSerial.h>
#include <MP3Player_KT403A.h>

static uint8_t recv_cmd[8] = {};


// Note: You must define a SoftwareSerial class object that the name must be mp3, 
//       but you can change the pin number according to the actual situation.
SoftwareSerial mp3(2, 3);

void setup()
{
    mp3.begin(9600);
    Serial.begin(9600); 
    
    while(!Serial);

    Serial.println("Grove - Serial MP3 Demo");
    Serial.println(
        "Input command:\r\n\r\n"
        "P[ ] play music by default index\r\n"
        "Pm[ ] play music in MP3 folder by index\r\n"
        "Pf[ ][ ] play music by specify folder and index\r\n"        
        "p Pause\r\n"
        "R Resume\r\n"
        "N Next\r\n"
        "L Previous\r\n"
        "l Loop\r\n"
        "I Increase volume\r\n"
        "D Decrease volumern\r\n");
    
    delay(100);
    
    SelectPlayerDevice(0x02);       // Select SD card as the player device.
    SetVolume(0x0E);                // Set the volume, the range is 0x00 to 0x1E.
}

void loop()
{
    uint8_t len = 0;
    uint8_t i;

    if(Serial.available())
    {
        char chr = '\0';
        while(chr != '\n')  // Blockly read data from serial monitor
        {
            chr = Serial.read();
            // Serial.print(chr);
            recv_cmd[len++] = chr;        
        }
    }

    if(len > 0)
    {
        // Print reveiced data    
        // Serial.print("Received cmd: ");   
        // for(i = 0; i < len; i++) {
        //     Serial.print(recv_cmd[i]);
        //     Serial.print(" ");
        // }
        // Serial.println();
            
        switch (recv_cmd[0])
        {
            case 'P':
                if(recv_cmd[1] == 'm') 
                {
                    /** 
                      * Play music in "MP3" folder by index 
                      * example:
                      * "Pm1" -> ./MP3/0001.mp3
                    */
                    PlayMP3folder(recv_cmd[2] - '0');
                    Serial.print("Play ");
                    Serial.write(recv_cmd[2]);
                    Serial.println(".mp3 in MP3 folder");
                } 
                else if(recv_cmd[1] == 'f')
                {
                    /** 
                      * Play specify folder and music
                      * example:
                      * "Pf11" -> ./01/001***.mp3
                    */
                    SpecifyfolderPlay(recv_cmd[2] - '0',recv_cmd[3] - '0');
                    Serial.print("Play ");
                    Serial.write(recv_cmd[3]);
                    Serial.print("xxx.mp3");
                    Serial.print(" in folder ");
                    Serial.write(recv_cmd[2]);
                    Serial.println();
                    
                } 
                else
                {
                    /** 
                      * Play music by default index
                      * example:
                      * "P1" -> ./***.mp3
                    */                
                    SpecifyMusicPlay(recv_cmd[1] - '0');
                    Serial.print("Play xxx.MP3 by index ");
                    Serial.write(recv_cmd[1]);
                    Serial.println();
                }            
                // Serial.println("Specify the music index to play");
                break;
            case 'p':
                PlayPause();            
                Serial.println("Pause the MP3 player");
                break;
            case 'R':            
                PlayResume();
                Serial.println("Resume the MP3 player");
                break;
            case 'N':            
                PlayNext();
                Serial.println("Play the next song");
                break;
            case 'L':
                PlayPrevious();
                Serial.println("Play the previous song");
                break;
            case 'l':
                PlayLoop();
                Serial.println("Play loop for all the songs");
                break;
            case 'I':
                IncreaseVolume();
                Serial.println("Increase volume");
                break;
            case 'D':
                DecreaseVolume();
                Serial.println("Decrease volume");
                break;
            default:
                break;
        }

        // clean data buffer
        for(i = 0; i < sizeof(recv_cmd); i++) {
            recv_cmd[i] = '\0';
        }
    }    
    delay(100);
    
//    printReturnedData();
}
```

- **Step 4.** We will see the info at COM terminal as below.

![](https://github.com/SeeedDocument/Grove-MP3_v2.0/raw/master/img/COM.png)

!!!Note
    For advanced programming, you can [download](https://raw.githubusercontent.com/SeeedDocument/Grove-MP3_v2.0/master/res/Grove-MP3_v2.0_KT403A_datasheet_V1.3_EN-Recompiled_by_Seeed-.pdf) datasheet of chip KT403A.

- **Step 5.** Please key in the related command to play the music.

## Resources

-   **[Eagle&PDF]** [Grove-MP3_v2.0_Schematic files](https://raw.githubusercontent.com/SeeedDocument/Grove-MP3_v2.0/master/res/Grove-MP3_v2.0_Schematic_files.zip)
- **[Librarie]**  [Grove-Serial MP3 Player V2.0 Libraries](https://github.com/Seeed-Studio/Grove_Serial_MP3_Player_V2.0)

-   **[Datasheet]** [KT403A Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-MP3_v2.0/master/res/Grove-MP3_v2.0_KT403A_datasheet_V1.3_EN-Recompiled_by_Seeed-.pdf)

## Projects

**Arduino Based Security Project Using Cayenne**: Arduino based Home Security Project. SMS/email alerts when intruder detected. Personalized messages for authorized personnel.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ArduinoBasics/arduino-based-security-project-using-cayenne-eb379b/embed' width='350'></iframe>

**Leaf Piano**: We made a piano using a touch sensor, as well as leaves for piano keys.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/SeeedStudio/leaf-piano-5261a6/embed' width='350'></iframe>

## Tech Support

Please submit any technical issue into our [forum](http://forum.seeedstudio.com/) or drop mail to techsupport@seeed.cc.
