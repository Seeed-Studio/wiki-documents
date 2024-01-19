---
title: L76K GNSS Module
description: Get Started with L76K GNSS Module for SeeedStudio XIAO
keywords:
  - XIAO
  - L76K GNSS Module
image: https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg
slug: /get_start_l76k_gnss
sidebar_position: 0
last_update:
  date: 2024-01-16T11:25:12.268Z
  author: Spencer
---

# Getting Started with L76K GNSS Module for SeeedStudio XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

<!-- TODO Add bazzar link -->

## Introduction

L76K GNSS Module for SeeedStudio XIAO is a Multi-GNSS (Global Navigation Satellite System) module compatible with all XIAO development boards, supports GPS, BeiDou (BDS), GLONASS and QZSS systems, allows multi-system combined or single-system independent positioning. It also supports AGNSS function, built-in low-noise amplifier and sound surface filter, and provides a good positioning experience of fast, accurate, high-performance.

The module comes with a high-performance active GNSS antenna intended to cover GPS L1 C/A, BeiDou B1 and GLONASS L1 bands. The design also has a tiny bright green LED for indicating the 1PPS output on fix.

### Features

- **Support Multi-GNSS Systems**: Built around Quectel L76K, supporting GPS, BeiDou (BDS), GLONASS and QZSS
- **High Compatibility**: Highly compatible with all XIAO series products, easily integrated into your current projects
- **Support external active antenna**: Comes with a U.FL receptacle for high-performance active GNSS antenna
- **Thumb-sized Design**: 18 x 21mm, Seeed Studio XIAO series classic form-factor, suitable for small devices
- **Perfect for Production**: Breadboard-friendly & SMD design, no components on the back

### Specification
<div class="table-center">
<table align="center">
	<tr>
	    <th>Item</th>
	    <th>Detail</th>
	</tr>
	<tr>
	    <th>GNSS bands</th>
	    <td>GPS L1 C/A: 1575.42MHz<br></br> GLONASS L1: 1602MHz<br></br> BeiDou B1: 1561.098MHz</td>
	</tr>
	<tr>
	    <th>Channels</th>
	    <td>32 tracking ch/72 acquisition ch</td>
	</tr>
  <tr>
	    <th>TTFF (Time To First Fix)</th>
	    <td>Cold Starts: 30s(w/o AGNSS), 5.5s(w/ GNSS)<br></br> Hot Starts: 5.5s(w/o AGNSS), 2s(w/ AGNSS)</td>
	</tr>
  <tr>
	    <th>Sensitivity</th>
	    <td>Auto-aquisition: -148dBm<br></br> Tracking: -162dBm<br></br> Re-acquisition: -160dBm</td>
	</tr>
  <tr>
	    <th>Accuracy</th>
	    <td>Position: 2.0m CEP<br></br> Velocity: 0.1m/s<br></br> Acceleration: 0.1m/s²<br></br> Timing: 30ns</td>
	</tr>
  <tr>
	    <th>UART Interface</th>
	    <td>Baud Rate: 9600~115200bps(9600bps default)<br></br> Update Rate: 1Hz(default), 5Hz(Max.)<br></br> Protocol: NMEA 0183, CASIC proprietary protocol </td>
	</tr>
  <tr>
	    <th>Antenna</th>
	    <td>Type: Active Antenna<br></br> Operating Frequency: 1559–1606MHz<br></br> Coaxial Cable: RF1.13 Length=10cm<br></br> Cable Connector: U.FL Plug RA </td>
	</tr>
  <tr>
	    <th>Current consumption(w/ active antenna)</th>
	    <td>Auto-aquisition: 41mA<br></br> Tracking: 41mA<br></br> Standby: 360uA </td>
	</tr>
  <tr>
	    <th>Dimension</th>
	    <td>18mm x 21mm</td>
	</tr>
</table>
</div>

## Hardware Overview

Before we start, we can refer to the following pictures to understand the pin design of the L76K GNSS Module for SeeedStudio XIAO to facilitate our understanding of the function of the module.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/gnss-xiao-pinout.png" style={{width:800, height:'auto'}}/></div>

## Getting Started

### Hardware Preparation

If you want to take advantage of the full capabilities of the L76K GNSS Module and have a great experience, we highly recommend that you purchase our XIAO series as the motherboard for the L76K GNSS Module.

<table align="center">
	<tr>
		<th>Seeed Studio XIAO SAMD21</th>
		<th>Seeed Studio XIAO RP2040</th>
		<th>Seeed Studio XIAO nRF52840 (Sense)</th>
		<th>Seeed Studio XIAO ESP32C3</th>
	    <th>Seeed Studio XIAO ESP32S3 (Sense)</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" style={{width:400, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoblesense.jpg" style={{width:500, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:450, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

Before using this module on a XIAO motherboard, you need to install the header sockets on the module and plug the active GNSS antenna onto the module. When connecting to the XIAO, please pay special attention to the installation direction of the module, please do not plug it in backwards, otherwise it is likely to burn the module or the XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/gnss-xiao-assembled.png" style={{width:500, height:'auto'}}/></div>

:::caution
Please pay special attention to the installation direction of the module, please do not plug it in backwards, otherwise it is likely to burn the module or the XIAO.
:::

### Software Preparation

To use the L76K GNSS Module for SeeedStudio XIAO, we need to program the XIAO series. The recommended programming tool is the Arduino IDE, and you need to configure the Arduino environment for the XIAO and add the on-board package.

:::tip
If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::

#### Step 1. Download and Install the stable version of Arduino IDE according to your operating system.

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div>

#### Step 2. Launch the Arduino application.

#### Step 3. Configure the Arduino IDE for the XIAO you are using.

- If you want to use **Seeed Studio XIAO SAMD21** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software)** to finish adding.

- If you want to use **Seeed Studio XIAO RP2040** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup)** to finish adding.

- If you want to use **Seeed Studio XIAO nRF52840** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup)** to finish adding.

- If you want to use **Seeed Studio XIAO ESP32C3** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started#software-setup)** to finish adding.

- If you want to use **Seeed Studio XIAO ESP32S3** for the later routines, please refer to **[this tutorial](http://wiki.seeedstudio.com/xiao_esp32s3_getting_started#software-preparation)** to finish adding.

#### Step 4. Add the TinyGPSPlus library to Arduino.

First, you need to search and download the latest version **TinyGPSPlus** library in the Arduino IDE.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/installing-tinygpsplus.png" style={{width:800, height:'auto'}}/></div>


## L76K GNSS Module Example

Once the hardware and software are ready, we start uploading our first example program. The L76K GNSS Module prints the GNSS information via the serial port every 1 second after powering up. In this example, we will use **TinyGPSPlus** library to parse the NMEA sentences received from the module and print the results including atitude, longitude and time to the Arduino IDE's Serial Monitor.

Here is the source code:

```cpp
#include <TinyGPSPlus.h>
#include <SoftwareSerial.h>
/*
   This sample sketch demonstrates how to use L76K GNSS Module on SeeedStudio XIAO.
*/
static const int RXPin = D7, TXPin = D6;
static const uint32_t GPSBaud = 9600;

// The TinyGPSPlus object
TinyGPSPlus gps;

// The serial connection to the GNSS module
SoftwareSerial ss(RXPin, TXPin);

void setup()
{
  Serial.begin(115200);
  ss.begin(GPSBaud);

  Serial.println(F("DeviceExample.ino"));
  Serial.println(F("A simple demonstration of TinyGPSPlus with L76K GNSS Module"));
  Serial.print(F("Testing TinyGPSPlus library v. ")); Serial.println(TinyGPSPlus::libraryVersion());
  Serial.println(F("by Mikal Hart"));
  Serial.println();
}

void loop()
{
  // This sketch displays information every time a new sentence is correctly encoded.
  while (ss.available() > 0)
    if (gps.encode(ss.read()))
      displayInfo();

  if (millis() > 5000 && gps.charsProcessed() < 10)
  {
    Serial.println(F("No GPS detected: check wiring."));
    while(true);
  }
}

void displayInfo()
{
  Serial.print(F("Location: ")); 
  if (gps.location.isValid())
  {
    Serial.print(gps.location.lat(), 6);
    Serial.print(F(","));
    Serial.print(gps.location.lng(), 6);
  }
  else
  {
    Serial.print(F("INVALID"));
  }

  Serial.print(F("  Date/Time: "));
  if (gps.date.isValid())
  {
    Serial.print(gps.date.month());
    Serial.print(F("/"));
    Serial.print(gps.date.day());
    Serial.print(F("/"));
    Serial.print(gps.date.year());
  }
  else
  {
    Serial.print(F("INVALID"));
  }

  Serial.print(F(" "));
  if (gps.time.isValid())
  {
    if (gps.time.hour() < 10) Serial.print(F("0"));
    Serial.print(gps.time.hour());
    Serial.print(F(":"));
    if (gps.time.minute() < 10) Serial.print(F("0"));
    Serial.print(gps.time.minute());
    Serial.print(F(":"));
    if (gps.time.second() < 10) Serial.print(F("0"));
    Serial.print(gps.time.second());
    Serial.print(F("."));
    if (gps.time.centisecond() < 10) Serial.print(F("0"));
    Serial.print(gps.time.centisecond());
  }
  else
  {
    Serial.print(F("INVALID"));
  }

  Serial.println();
}
```

Just select the XIAO you are using and the port number where the XIAO is located, compile and upload it.

Make sure that the L76K GNSS Module is placed outdoor where good GNSS signals can be received. Upload the code to your XIAO and wait a few minutes, you should see the information displayed on the serial monitor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/gnss-output.png" style={{width:800, height:'auto'}}/></div>

## Troubleshooting

### Q1: Why doesn't the GNSS information display on the serial monitor?

A: Make sure that the L76K GNSS Module is placed outdoor where good GNSS signals can be received.

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
