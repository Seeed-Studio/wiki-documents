---
title: Get Started with Wio Terminal
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/
slug: /Wio-Terminal-Getting-Started
last_update:
  date: 01/11/2022
  author: gunengyu
---

# Get Started with Wio Terminal

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Wiki.jpg)

The **Wio Terminal** is a SAMD51-based microcontroller with Wireless Connectivity powered by **Realtek RTL8720DN** that’s compatible with Arduino and MicroPython. Currently, wireless connectivity is only supported by Arduino. It runs at **120MHz** (Boost up to 200MHz), **4MB** External Flash and **192KB** RAM. It supports both Bluetooth and Wi-Fi providing backbone for IoT projects. The Wio Terminal itself is equipped with **a 2.4” LCD Screen, onboard IMU(LIS3DHTR), Microphone, Buzzer, microSD card slot, Light sensor, and Infrared Emitter(IR 940nm).** On top of that, it also has two multifunctional Grove ports for [Grove Ecosystem](https://www.seeedstudio.com/grove.html) and 40 Raspberry pi compatible pin GPIO for more add-ons.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Terminal-p-4509.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

<div>
  <p style={{textAlign: 'center'}}><a href="https://www.youtube.com/playlist?list=PLpH_4mf13-A0MzOdPNITVfoVBMvf7Rg9g" target="_blank" /></p><div align="center"><a href="https://www.youtube.com/playlist?list=PLpH_4mf13-A0MzOdPNITVfoVBMvf7Rg9g" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-classroom.png" /></a></div><p />
</div>

## Feature

- **Highly Integrated Design**
  - MCU, LCD, WIFI, BT, IMU, Microphone, Speaker, microSD Card, Light Sensor, 5-Way Switch, Infrared Emitter (IR 940nm), Crypto-authentication Ready
- Powered by **Microchip ATSAMD51P19**
  - ARM Cortex-M4F core running at **120MHz**(Boost up to 200MHz)
  - **4 MB** External Flash, **192 KB** RAM
- Comprehensive Protocol Support
  - SPI, I2C, I2S, ADC, DAC, PWM, UART(Serial)
- Powerful **Wireless Connectivity** (supported only by Arduino)
  - Powered by **Realtek RTL8720DN**
  - Dual Band 2.4Ghz / 5Ghz Wi-Fi (802.11 a/b/g/n)
  - BLE / BLE 5.0
- **USB OTG Support**
  - USB Host
  - USB Client
- [**Grove Ecosystem**](https://www.seeedstudio.com/grove.html)
- **Software Support**
  - Arduino
  - MicroPython
  - ArduPy
  - AT Firmware

## Specification

<table style={{borderCollapse: 'collapse', borderSpacing: 0}} className="tg"><tbody><tr><th style={{fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'bold', padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', backgroundColor: '#c0c0c0', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}} rowSpan={7}>Main Chip</th><th style={{fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'normal', padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Manufacturer Part Number</th><th style={{fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'normal', padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>ATSAMD51P19</th></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Core Processor</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>ARM® Cortex®-M4F</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>CPU Speed</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>120MHz(Boost up to 200MHz)</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Program Memory Size</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>512KB</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>External Flash</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>4MB</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>RAM Size</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>192KB</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Operating Temperature</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>-40°C ~ 85°C (TA)</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', fontWeight: 'bold', backgroundColor: '#c0c0c0', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}} rowSpan={3}>LCD Screen</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Resolution</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>320 x 240</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Display Size</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>2.4 inch</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Driver IC</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>ILI9341</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', fontWeight: 'bold', backgroundColor: '#c0c0c0', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}} rowSpan={6}>Wireless connectivity</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Manufacturer Part Number</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>RTL8720DN</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>KM4 CPU</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>ARM® Cortex®-M4F</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>KM0 CPU</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>ARM® Cortex®-M0</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Wi-Fi</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>802.11 a/b/g/n 1x1, 2.4GHz &amp; 5GHz</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Bluetooth</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Support BLE5.0</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Hardware Engine</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>AES/DES/SHA</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', fontWeight: 'bold', backgroundColor: '#c0c0c0', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}} rowSpan={5}>Built-in Modules</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Accelerometer</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>LIS3DHTR</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Microphone</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>1.0V-10V -42dB</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Speaker</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>≥78dB @10cm 4000Hz</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Light Sensor</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>400-1050nm</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Infrared Emitter</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>940nm</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', fontWeight: 'bold', backgroundColor: '#c0c0c0', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}} rowSpan={5}>Interface</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>microSD Card Slot</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Maximum 16GB</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>GPIO</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>40-PIN (Raspberry Pi Compatible)</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Grove</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>2 (Multifunction)</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>FPC</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>20-PIN</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>USB Type-C</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Power &amp; USB-OTG</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', fontWeight: 'bold', backgroundColor: '#c0c0c0', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}} rowSpan={3}>Operation interface</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>5-Way Switch</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>/</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Power/Reset Switch</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>/</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>User Defined Button *3</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>/</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', fontWeight: 'bold', backgroundColor: '#c0c0c0', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}} rowSpan={2}>Enclosure</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Dimension</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>72mm*57mm*12mm</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Materials</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>ABS+PC</td></tr></tbody></table>

## Hardware Overview

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Hardware-Overview.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Hardware-OverviewNew.png" /></a></p>
  </figure>
</div>

## Pinout Diagram

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Pinout.jpg" /></div>

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-GROVE.jpeg)

## Getting Started

### Hardware

**Materials required**

- Wio Terminal x 1
- Computer x 1
- USB Type-C Cable x 1

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Powerup.png" /></div>

Connect the Wio Terminal to your computer via USB cable. The blue LED on the back should light up.

### Software

- **Step 1. You need to Install an Arduino Software.**

[![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**Launch the Arduino application**

Double-click the Arduino IDE application you have previously downloaded.

:::note
    If the Arduino Software loads in a different language, you can change it in the preferences dialog. See the [Arduino Software (IDE) page](https://www.arduino.cc/en/Guide/Environment#languages) for details.
:::

- **Step 2. Open the Blink example**  

Open the LED blink example sketch: **File > Examples >01.Basics > Blink**.

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/select_blink.jpg"/>
  <figcaption><i>Blink Path</i></figcaption>
</figure>
</div>

- **Step 3. Add the Wio Terminal Board Library**

1.Open your Arduino IDE, click on **File** > **Preferences**, and copy below url to **Additional Boards Manager URLs**:

```sh
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png)

2.Click on **Tools** > **Board** > **Board Manager** and Search **Wio Terminal** in the Boards Manager.

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/addBoard.png"/>
  <figcaption><i>The keyword is Wio Terminal</i></figcaption>
</figure>
</div>

- **Step 4. Select your board and port**  
You'll need to select the entry in the **Tools > Board** menu that corresponds to your Arduino.
Selecting the **Wio Terminal**.

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png"/>
  <figcaption> <i>Choose the right board</i></figcaption>
</figure>
</div>

Select the serial device of the Wio Terminal board from the **Tools -> Port** menu. This is likely to be COM3 or higher (**COM1** and **COM2** are usually reserved for hardware serial ports). To find out, you can disconnect your Wio Terminal board and re-open the menu; the entry that disappears should be the Arduino board. Reconnect the board and select that serial port.

:::note
    For Mac User, it will be something like `/dev/cu.usbmodem141401`
:::
<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/port.png"/>
  <figcaption><i>Choose the right port</i></figcaption>
</figure>
</div>

- **Step 5. Upload the program**  

Now, simply click the **Upload** button in the environment. Wait a few seconds and if the upload is successful, the message "Done uploading." will appear in the status bar.

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/upload.png"/>
  <figcaption><i>Upload the code</i></figcaption>
</figure>
</div>

A few seconds after the upload finishes, you should see the LED at the bottom of the Wio Terminal start to blink. If it does, congratulations! You've gotten Wio Terminal up-and-running. If you have problems, please see the FAQ suggestions.

If you are not able to upload the sketch, mostly it's because Arduino IDE was not able to put Wio Terminal to **bootloader mode**. (Because MCU was halted or your program handling USB,) Workaround is putting your Wio Terminal to bootloader mode manually, as shown in FAQ.

Please feel free to go though other tutorials of Wio Terminal and start building your IoT projects!

## FAQ

### **Reset Wio Terminal:**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Reset.png" /></div>

### **Enter Bootloader:**

This is very useful when Wio Terminal crashes or somehow USB serial is not showing up in Arduino IDE. Slide the switch **twice very quickly**, as followed:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

Once Wio Terminal is in the Bootloader mode, **the blue LED will start to breath** in a way that is different to blinking. Check the port again and it should appeared.

### **Test with SWD**

There are two ways to use SWD to test and debug with Wio Terminal:

From the back of the PCB testing ports.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/SWD-1.png" /></div>

On the left is the testing ports for ATSAMD51:

- SWCLK
- SWDIO
- SWO
- RST
- GND
- 3V3

On the right is the testing ports for RTL8720DN:

- CHIP
- RXD
- TXD
- GND
- 3V3

If you have very frequent debugging needs, you can add SWD debugging to one of the Grove interfaces in the following ways:

<div>
  <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/SWD-2.png" /></div><br />
</div>

The picture shows the two unmounted resistor positions. You can connect these two pads by soldering a 0 ohm resistor or shorting it. This will connect the SWD interface (SWDIO / SWCLK) of ATSMAD51 to Grove in parallel on the interface.

After our test, the SWD interface is connected in parallel in this way. When powering on and resetting, you need to make sure that the Grove interface is not connected to any Grove module (the module may have pull-up / pull-down resistors, which will affect it), otherwise it will Enter SWD mode directly and cannot run in normal mode (that is, SWDCLK cannot be pulled low during power-on or reset)

In addition to power-on and reset, when using SWD, Digital, Analog, Serial, I2C, there will be no interference, you can switch at any time, but in order to avoid possible problems, we still recommend removing this after completing the program debugging Connection of two pads.

### Library File Name Conflicts

After you install seeed-arduinocore-samd, the core will download some library files to drive different devices at the same time, such as **TFT_eSPI.h**, etc. When you upload the program, an error will occur and the compiler will prompt you that multiple library files are found. E.g:

```c
Multiple libraries were found for "TFT_eSPI.h"

Used: C:\Users\Dave\Documents\Arduino\libraries\TFT_eSPI-master

Not used: C:\Users\Dave\AppData\Local\Arduino15\packages\Seeeduino\hardware\samd\1.8.2\libraries\Seeed_Arduino_LCD
```

If you use a seeed-SAMD device, please select and use the library file in the seeed folder and move the conflicting library file out of the arduino library.

When you use other devices, please remove the library files in the seeed folder and keep the compiler calling only one library file. This can solve the incompatibility problem caused by different versions of library files with the same name.

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/wiolibrary.png)

You may refer to the specific library lists here: <https://github.com/Seeed-Studio/ArduinoCore-samd/tree/master/libraries>

## Wio Terminal Classroom

### Lesson 1 - Hello World

<iframe width="560" height="315" src="https://www.youtube.com/embed/af_I0n5iyzk" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Lesson 2 - Drawing Shapes

<iframe width="560" height="315" src="https://www.youtube.com/embed/IFRiGpK4HK8" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Lesson 3 - Displaying Fonts

<iframe width="560" height="315" src="https://www.youtube.com/embed/aZ9LYoS8w24" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Lesson 4 - Displaying Images and Simple UI

<iframe width="560" height="315" src="https://www.youtube.com/embed/P8CQtByWfS4" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Lesson 5 - Line Charts and Histograms

<iframe width="560" height="315" src="https://www.youtube.com/embed/OnYLy7k-4T4" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Lesson 6 -  Using Grove Modules

<iframe width="560" height="315" src="https://www.youtube.com/embed/NeFotsklchc" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Lesson 7 -  Communication Protocols

<iframe width="560" height="315" src="https://www.youtube.com/embed/kn9WJn2FRkI" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Lesson 8 -  Built-In Hardware/Sensors Part 1 | 3 Buttons & 5-Way Switch

<iframe width="560" height="315" src="https://www.youtube.com/embed/tVd4L7Hzj7M" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Lesson 9 -  Built-In Hardware/ Sensors Part 2 | Microphone & Buzzer

<iframe width="560" height="315" src="https://www.youtube.com/embed/aYEI9UGIBvo" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Lesson 10 -  Built-In Hardware/ Sensors Part 3 | Accelerometer & Light Sensor

<iframe width="560" height="315" src="https://www.youtube.com/embed/3dw-Ony6CIE" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Lesson 11 -  Build a TV Remote using the built-in IR Emitter

<iframe width="560" height="315" src="https://www.youtube.com/embed/C9AlljLst2o" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Lesson 12 -  Smart Garden Project using Wio Terminal

<iframe width="560" height="315" src="https://www.youtube.com/embed/NQt-XLcSIwA" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Lesson 13 -  Use Wio Terminal as a Mouse for PC

<iframe width="560" height="315" src="https://www.youtube.com/embed/QIR_yqQnYPY" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Lesson 14 -  Use Wio Terminal as a Keyboard for PC

<iframe width="560" height="315" src="https://www.youtube.com/embed/JLrP058LDr8" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Wio Terminal in Deep Learning supproted by CAVEDU Education

**[Chinese]** [Here](https://www.youtube.com/watch?v=sGpRnlGPapY&list=PLZkpEAYL25ABrMJJ3cod4PfQJ1Hviuk5B) is a series of videos on how do you apply deep learning in Wio Terminal.

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/jietu.png)

## Resources

- **[PDF]** [ATSAMD51N19A Datasheet](https://files.seeedstudio.com/wiki/Wio-Terminal/res/ATSAMD51.pdf)
- **[PDF]** [Wio Terminal Schematics](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-SCH-v1.2.pdf)
- **[ZIP]** [Wio Terminal Schematics](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal_SCH&PCB.zip)
- **[PDF]** [Wio Terminal Enclosure Dimensions - Front](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-Main-V3.0-White-72x57x10.4mm.pdf)
- **[PDF]** [Wio Terminal Enclosure Dimensions - Back](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-Main-Back-V3.0-White-72x57x7.1mm.pdf)
- **[AI]** [Wio-Terminal-Screen-Sticker-Design-File(Wio-Terminal-ちゃん)](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-Screen-Sticker-Design-File(Wio-Terminal-ちゃん).ai)
- **[AI]** [Wio-Terminal-chan-Desgin-File-blue&white](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-chan-Desgin-File-blue&white.ai)
- **[DXF]** [Wio Terminal Enclosure Dimensions - Front](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-Main-V3.0-White-72x57x10.4mm.dxf)
- **[DXF]** [Wio Terminal Enclosure Dimensions - Back](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-Main-Back-V3.0-White-72x57x7.1mm.dxf)
- **[DXF]** [Wio Terminal Battery Chassis Dimensions](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-Chassis-Battery.dxf)
- **[DXF]** [Wio Terminal PCB Dimensions](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-PCB-V3.0.dxf)


<a href="https://github.com/Seeed-Studio/OSHW-WioTerminal">
  <div className="custom-layout">
    <div className="custom-image">
      <img src="https://files.seeedstudio.com/wiki/wiki-platform/opensource.jpg" alt="your-image-description" />
    </div>
    <div className="custom-text">
      <h2>Open Source hardware</h2>
      <p>This product is fully open-sourced. Access the related open-source documents through this link.</p>
    </div>
  </div>
</a>


## Tech Support

 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
