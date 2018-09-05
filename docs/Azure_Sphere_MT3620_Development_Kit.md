---
title: Azure Sphere MT3620 Development Kit
category: Azure
bzurl:
oldwikiname: 
prodimagename: 
surveyurl:  
sku: 
---

![enter image description here](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/azure.jpg)

Azure Sphere MT3620 Development Kit is specially designed for rapid prototyping and help developer experience Azure Sphere technology. MT3620 is the first Azure Sphere certified MCU. Azure Sphere certified MCUs are a new class of secured, connected crossover microcontrollers. MT3620 features three user-accessible microcontroller cores, one application processor subsystem based on an ARM Cortex-A7 core which runs at up to 500MHz, two general purpose ARM Cortex-M4F I/O subsystems, each of which runs at up to 200MHz. MT3620 were designed to support real-time requirements when interfacing with a variety of on-chip peripherals including UART, I2C, SPI, I2S, and ADC. It has built-in security subsystem with its own dedicated CM4F core for secure boot and secure system operation, dual-band 802.11a/b/g/n Wi-Fi.

The MT3620 Development Kit has expanded most MT3620 hardware resources on the expansion pin headers, by wiring to breadboard or adding a shield board , user can easily connect to other hardware accessories.

The Azure Sphere operating system is pre-installed on the MT3620 and is designed to work with the Azure Sphere Security Service to create a secured IoT platform. Together the Azure Sphere OS and security service deliver:  

- certificate-based device authentication to any web service
- software attestation and secure boot
- threat detection via failure reporting
- ongoing security updates
- an integrated, secured end-to-end IoT solution

MT3620 software development is supported using the powerful Microsoft Visual Studio IDE: Install Visual Studio and the Azure Sphere extension, plug the development board into a PC over USB, and start developing IoT applications with unprecedented levels of security.

|Product Name | How to Buy|
|----------------|-----------|
|Azure Sphere MT3620 Development Kit US Version|[![](https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-p-3052.html)|
|Azure Sphere MT3620 Development Kit JP Version|[![](https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit_JP-Version-p-3135.html)|
|Azure Sphere MT3620 Development Kit EU Version|[![](https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit_EU-Version-p-3134.html)|



## Features

- Azure Sphere: End-to-end security for IoT devices.
- Dual-band 802.11 a/b/g/n with antenna diversity.
- Tri-core microcontroller with on-chip RAM & flash.
- Microsoft Visual Studio development environment.
- Online authentication & updates for device lifetime.
- Expand UART, I2C, I2S, SPI, ADC, GPIO resource on pin header.

## Specification

**Hardware**

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-baqh{text-align:center;vertical-align:top}
.tg .tg-amwm{font-weight:bold;text-align:center;vertical-align:top}
.tg .tg-0lax{text-align:left;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-baqh"><span style="font-weight:bold">Description</span></th>
    <th class="tg-baqh"><span style="font-weight:bold">Value</span></th>
  </tr>
  <tr>
    <td class="tg-amwm" rowspan="2"><br>MCU</td>
    <td class="tg-0lax">1 * ARM Cortex A7 core @500MHz , 4MB RAM</td>
  </tr>
  <tr>
    <td class="tg-0lax">2 * ARM Cortex M4 core @200MHz, 64KB RAM</td>
  </tr>
  <tr>
    <td class="tg-amwm" rowspan="5"><br><br><br><br>ISU</td>
    <td class="tg-0lax">4 * “ISU” serial interface which can be configured as:</td>
  </tr>
  <tr>
    <td class="tg-0lax">&nbsp;&nbsp;- I2C runs at up to 1MHz</td>
  </tr>
  <tr>
    <td class="tg-0lax">&nbsp;&nbsp;- SPI runs at up to 40MHz</td>
  </tr>
  <tr>
    <td class="tg-0lax">&nbsp;&nbsp;- UART runs at up to 3Mbps</td>
  </tr>
  <tr>
    <td class="tg-0lax">ISU is Serial Communication Interface</td>
  </tr>
  <tr>
    <td class="tg-amwm" rowspan="2"><br>Connectivity</td>
    <td class="tg-0lax">2.4/5GHz dual-band 802.11a/b/g/n Wi-Fi</td>
  </tr>
  <tr>
    <td class="tg-0lax"><span style="font-style:italic">SDK only support 802.11b/g/n currently</span></td>
  </tr>
  <tr>
    <td class="tg-amwm">I2S</td>
    <td class="tg-0lax">1 * I2S support slave and TDM slave mode</td>
  </tr>
  <tr>
    <td class="tg-amwm">ADC</td>
    <td class="tg-0lax">4 * 12-bit ADC input I/O</td>
  </tr>
  <tr>
    <td class="tg-amwm">RTC</td>
    <td class="tg-0lax">1 * RTC with CR2032 3V battery holder</td>
  </tr>
  <tr>
    <td class="tg-amwm">USB</td>
    <td class="tg-0lax">1 * Micro USB port for power supply and debugging, 5V/2A</td>
  </tr>
  <tr>
    <td class="tg-amwm">DC Jack</td>
    <td class="tg-0lax">1* 5V/2A DC power jack</td>
  </tr>
  <tr>
    <td class="tg-amwm">Operating Temperature</td>
    <td class="tg-0lax">-40~85°C</td>
  </tr>
  <tr>
    <td class="tg-amwm">Dimensions</td>
    <td class="tg-0lax">L:85mm*W:50mm*H:16mm</td>
  </tr>
  <tr>
    <td class="tg-amwm">Certification</td>
    <td class="tg-0lax">CE / FCC / MIC / RoHS</td>
  </tr>
</table>

**Software**

| IDE                  | Visual Studio |
|----------------------|---------------|
| System               | Windows10     |
| Programming Language | C             |


## Hardware Overview

**Board Diagram**

<a href="https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/Diagram.png" target="_blank"><img src="https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/Diagram.png"/></a>

Please refer to resource session for the MT3620 and FT4232HQ(Backside) datasheet.

!!!Note
    You can click it to view the original image.

**Board Pinmap**

<a href="https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/PinMap.png" target="_blank"><img src="https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/PinMap.png"/></a>

!!!Note
    You can click it to view the original image.

**Dimensions**

<a href="https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/dimension.png" target="_blank"><img src="https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/dimension.png"/></a>

!!!Note
    You can click it to view the original image.



## Applications

- Smart speaker
- Intelligent voice assistant systems

## Certification

| US FCC | Europe CE | Japan MIC |
|--------|-----------|-----------|
| [![](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/fcc.png)](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/certification/Azure%20Sphere%20MT3620%20Development%20Kit-FCC-FCC.zip)       |   [![](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/ce.png)](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/certification/Azure%20Sphere%20MT3620%20Development%20Kit-CE.zip)        |  [![](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/mic.jpg)](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/certification/Azure%20Sphere%20MT3620%20Development%20Kit-MIC.zip)         |

## Getting Started

### Prerequisite

You need following prerequisite to run demo on the Azure Sphere development board: 

- Installed [Visual Studio 2017 version 15.3 or later](https://visualstudio.microsoft.com/)


- Installed Azure Sphere SDK and Tools version 4.0.1
- Configured all drivers and network settings per description in SDK/Tool documentation 
- Updated Azure Sphere development board with firmware 4.0.1
- Claimed and assigned Azure Sphere development board under your AAD (cutil.exe)
- Configured WiFi(dutil.exe)
- Connected Azure Sphere development board via USB to Computer
- Connected Azure Sphere development via WiFi


### Visual Studio 2017

- Step 1. Start Visual Studio 2017, create new project: File  ->  New  ->  Project


- Step 2. Select: Visual C++  ->  Cross Platform  ->  Azure Sphere

- Step 3. In Solution Explorer, add a new connected service with right mouse click on References





## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/).
