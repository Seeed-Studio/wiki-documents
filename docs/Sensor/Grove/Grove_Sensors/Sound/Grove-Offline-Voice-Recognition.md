---
description: Getting started for the Grove Offline Voice Recognition sensor.
title: Grove Offline Voice Recognition sensor
keywords:
- gesture
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /Grove-Offline-Voice-Recognition
last_update:
  date: 01/02/2024
  author: Allen
---

# Grove Offline Voice Recognition

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/headPic.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/Grove-Offline-Voice-Recognition">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>


## Introduction

Grove - Offline Voice recognition Module is apt for low power pure-offline voice recognition, based on VC-02 module. It has up to 150 pre-programmed commands that can be used to control your smart appliances. It features an identification time less than 100ms, in a compact form factor of 18mm * 17mm. The module can communicate through the UART peripheral and provide unique Hex Code to each recognised command. All this module needs is 5V and it's ready to recognise the commands!

### Feature

- **Supports 150 voice commands** 
- **Low power consumption**
- **ESD protected power rails**
- **LED indicators for commands**
- **Grove UART interface**

### Specifications

<table align="center">
  <tbody>
    <tr>
    <td><h4>Parameter</h4></td>
    <td><h4>Range/Value</h4></td>
    </tr>
    <tr>
    <td>Input Voltage</td>
    <td>5V/3.3V</td>
    </tr>
    <tr>
    <td>Default BaudRate</td>
    <td>115200</td>
    </tr>
    <tr>
    <td>Default Output</td>
    <td>Hex values of detected command</td>
    </tr>
  </tbody></table>


## Getting started

### Hardware setup

You need to prepare the following:

- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html)
- [Grove Base for XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)
- [Grove - Offline Speech Recognizer](/Grove-Offline-Voice-Recognition)
- [Speaker](https://www.seeedstudio.com/Mono-Enclosed-Speaker-2W-6-Ohm-p-2832.html)


:::tip

Some USB cables can only supply power and cannot transfer data. If you don't have a USB cable or don't know if your USB cable can transmit data, you can check [Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).

:::

**Step 1.** Connect XIAO RP2040 to your computer via a USB Type-C cable.

**Step 2.** Connect XIAO RP2040 to XIAO expension board.

**Step 3.** Connect XIAO expension board to Offline Speech Recognizer on UART port via Grove cable.

**Step 4.** Connect Offline Speech Recognizer to a speaker.

Here is the connecting picture for your reference.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/connection.png" style={{width:1000, height:'auto'}}/></div>

### **Software Setup**

**Step 1.** Download and Install the latest version of Arduino IDE according to your operating system

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/software"target="_blank"><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/Download_IDE.png" /></a></p>

**Step 2.** Select your development board model and add it to the Arduino IDE. If you want to use **XIAO RP2040** for the later routines, please refer to [this tutorial](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup) to finish adding.

:::tip
If you want to use other types of XIAO, you can refer [here](https://wiki.seeedstudio.com/xiao_topic_page/).
:::

**Step 3.** Install the Arduino code library.

Start by getting the code base from [GitHub](https://github.com/Seeed-Projects/SeeedStudio-Grove_offline_voice_recognition_sensor) and downloading it to your local computer.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/1.png" style={{width:1000, height:'auto'}}/></div>

Since you have downloaded the zip Library, open your Arduino IDE, click on **Sketch > Include Library > Add .ZIP Library**. Choose the zip file you just downloaded，and if the library install correct, you will see **Library added to your libraries** in the notice window. Which means the library is installed successfully.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/2.png" style={{width:1000, height:'auto'}}/></div>


### Offline voice recognition demo

**Step 1.** Open this file in your Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/3.png" style={{width:1000, height:'auto'}}/></div>

You will see the code like below.

```cpp
#include "GroveOfflineSensor.h"
#include <SoftwareSerial.h>
#define RX_VC02 D7
#define TX_VC02 D6

SoftwareSerial groveSerial(RX_VC02, TX_VC02); // RX, TX

void setup() {
  Serial.begin(115200);
  // wait for serial port to connect. Needed for native USB port only , This port is for displaying data Grove Sensor sends
  while (!Serial); 
  // Make sure to set the baud rate to match your communication
  groveSerial.begin(115200); 
}

void loop() {
  // detect voice from voice recognition sensor
   uint8_t *voiceData = detectVoiceFromGroveSensor(&groveSerial);

  //transfer the voice to command string
  if(voiceData != NULL){
    String response = getCommandInString(voiceData);
    Serial.println(response);
  }
  delay(1000);
}

```

**Step 2.** Click the **Upload** button to upload the code to the board

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/5.png" style={{width:1000, height:'auto'}}/></div>

**Step 3.** Say the wake word "hello pudding" to the sensor and then you will hear voice feedback from speaker and words feedback from serial monitor on Arduino IDE. For more instructions, your can find in **Resources** which located in bottom part of this article.

<iframe width="100%" height="460" src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/offlineVoiceRecognition.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

## Resources

- **[PDF]** [Offline Voice Commends](https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/VoiceCommends.pdf)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
