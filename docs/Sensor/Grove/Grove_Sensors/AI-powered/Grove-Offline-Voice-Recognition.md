---
description: Getting started for the Grove Offline Voice Recognition sensor.
title: Grove Offline Voice Recognition sensor
keywords:
- gesture
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /Grove-Offline-Voice-Recognition
last_update:
  date: 06/28/2023
  author: Citric
---

# Grove Offline Voice Recognition

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/main.jpg" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Smart-IR-Gesture-Sensor-p-5721.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>


## Introduction

Grove Smart IR Gesture Sensor is an intelligent gesture recognition module equipped with an infrared camera sensor and applied AI algorithm. It can detect over 15 gestures with wide detection while supporting both IIC and SPI communication. This module also allows Grove, Type-C, and Seeed Studio XIAO direct connecting.

### Feature

- **Compact AI gesture sensor**: Equip with an infrared camera sensor and apply AI algorithm to achieve gesture detection, in a compact size board of 4.3cm x 2.1cm
- **Over 15 gestures with wide detection**: Support various gestures such as N-finger push, pinch, tap, grab, rotation, thumb up/down, static, etc, with a detection range of 5-40cm
- **High compatibility**: Compatible with the XIAO series interface and the Grove connector through I2C communication while supporting images displayed on PC through SPI communication
- **Flexible Voltage Selection**: Grove Interface Compatible with 3.3V and 5V Systems



## Getting started

First, we are going to connect XIAO RP2040(other type of XIAO is OK) to the computer. Connect XIAO to XIAO expension board and use Grove cable connect expension board to the Offline Speech Recognizer. At the same time, the other end of the Offline Speech Recognizer connect to a speaker. When we give instructions to the Offline Speech Recognizer, it will give us feedback via the speaker.

### Hardware setup

You need to prepare the following:

- 1 x [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html)
- 1 x Grove - XIAO expension board
- 1 x Grove - Offline Speech Recognizer
- 1 x Speaker
- 1 x Computer
- 1 x USB Type-C cable


:::tip

Some USB cables can only supply power and cannot transfer data. If you don't have a USB cable or don't know if your USB cable can transmit data, you can check [Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).

:::

- **Step 1.** Connect XIAO RP2040 to your computer via a USB Type-C cable.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png" style={{width:120, height:'auto'}}/></div>

- **Step 2.** Connect XIAO RP2040 to XIAO expension board.

- **Step 3.** Connect XIAO expension board to Offline Speech Recognizer on UART port via Grove cable.

- **Step 4.** Connect Offline Speech Recognizer to a speaker.

Here is the connecting picture for your reference.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Offline_Voice_Recognition/ConnectingPic.HEIC" style={{width:120, height:'auto'}}/></div>

### **Software Setup**

- **Step 1.** Download and Install the latest version of Arduino IDE according to your operating system

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/software"target="_blank"><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/Download_IDE.png" /></a></p>

**Step 2.** Launch the Arduino application.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**Step 3.** Select your development board model and add it to the Arduino IDE.

- If you want to use **Seeeduino V4.2** for the later routines, please refer to [this tutorial](https://wiki.seeedstudio.com/Seeed_Arduino_Boards/) to finish adding.

- If you want to use **Seeeduino XIAO** for the later routines, please refer to [this tutorial](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software) to finish adding.

- If you want to use **XIAO RP2040** for the later routines, please refer to [this tutorial](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup) to finish adding.

- If you want to use **XIAO BLE** for the later routines, please refer to [this tutorial](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup) to finish adding.

**Step 4.** Install the Arduino code library.

Start by getting the code base from [GitHub](https://github.com/addictCode/Offline-Voice-Recogniton-Sensor) and downloading it to your local computer.

Since you have downloaded the zip Library, open your Arduino IDE, click on **Sketch > Include Library > Add .ZIP Library**. Choose the zip file you just downloaded，and if the library install correct, you will see **Library added to your libraries** in the notice window. Which means the library is installed successfully.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png"/></div>


### Offline voice recognition demo

- **Step 1.** Open this file in your Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png" style={{width:120, height:'auto'}}/></div>

- **Step 2.** Click the **Upload** button to upload the code to the board

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" style={{width:500, height:'auto'}}/></div>

- **Step 3.** Say the wake word "hello pudding" to the sensor and then you will hear voice feedback from speaker and work feedback from serial monitor on Arduino IDE. For more instructions, your can find in **Resources** which located in bottom part of this article.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" style={{width:500, height:'auto'}}/></div>

Once uploaded, you will see the connected LED blinking with a 1-second delay between each blink. This means the connection is successful and now you can explore more projects with XIAO ESP32C3!

## Resources

- **[PDF]** [Offline Voice Instructions](https://files.seeedstudio.com/wiki/mmWave-radar/Human_Presence_User_Manual.pdf)

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
