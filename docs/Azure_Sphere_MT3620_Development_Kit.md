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

- Certificate-based device authentication to any web service
- Software attestation and secure boot
- Threat detection via failure reporting
- Ongoing security updates
- An integrated, secured end-to-end IoT solution

MT3620 software development is supported using the powerful Microsoft Visual Studio IDE: Install Visual Studio and the Azure Sphere extension, plug the development board into a PC over USB, and start developing IoT applications with unprecedented levels of security.

<iframe width="800" height="450" src="https://www.youtube.com/embed/iiDF26HNh-Y" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


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

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
.tg .tg-0lax{text-align:left;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-0pky">Description</th>
    <th class="tg-0pky">Value</th>
  </tr>
  <tr>
    <td class="tg-0pky">IDE</td>
    <td class="tg-0pky">Visual Studio</td>
  </tr>
  <tr>
    <td class="tg-0lax">System</td>
    <td class="tg-0lax">Windows10</td>
  </tr>
  <tr>
    <td class="tg-0lax">Programming Language</td>
    <td class="tg-0lax">C</td>
  </tr>
</table>


## Hardware Overview

**Board Diagram**

<a href="https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/Diagram.png" target="_blank"><img src="https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/Diagram.png"/></a>

Please refer to resource session for the [MT3620](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/datasheet/MediaTek%20MT3620%20Product%20Brief.pdf) and [FT4232HQ](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/datasheet/DS_FT4232H.pdf)(Backside) datasheet.

- **J1**: ADC Reference Voltage, On: using internal 2.5v; Off: Connect External 1.8v to Pin 1. Off by default. 
- **J2**: 3.3V Isolation, On: Enable system 3.3v power; Off: Cut off the system 3.3v power. On by default.
- **J3**: RTC Power Selection: Left 2 pins: Using RTC Battery(Model:CR2032) at backside.
- **4 User RGB LED**: LED model is LTST-C19HE1WT.
- **USB Port**: Power supply(5V/2A) and debug, connected to FT4232HQ chip at backside. 
- **4 System LED**: Led1(Near USB port): Green, FTDI Activity LED. Led2: RED, Power Indicator. Led3: RGB, Wifi Status. Led4: RGB, App Status.
- **DC Power**: 5V/2A
- **3 System Button**: Button A&B(White) are user botton. Button Reset(Blue) is System Reset.

**Board Pinmap**

<a href="https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/PinMap.png" target="_blank"><img src="https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/PinMap.png"/></a>

![](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/H1_2.png)

![](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/H3_4.png)

**Dimensions**

<a href="https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/dimension.png" target="_blank"><img src="https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/dimension.png"/></a>

**Power**


**Hardware Design and Manufacture**

The current Azure Sphere software release does not support all features of the [MT3620](https://www.mediatek.com/products/azureSphere/mt3620) hardware. For example, the following are not yet supported in software:

- 2 x ARM Cortex-M4 with FPU
- ADC, I2C, I2S, PWM and SPI peripheral interfaces (GPIO and UART are supported)
- Wi-Fi 802.11a (b/g/n are supported)
- RTC with clock selection and battery backup

!!!Tip
    For more info, please refer to [Information and tools for hardware design and manufacture](https://docs.microsoft.com/en-us/azure-sphere/manufacturers/hardware-manufacturing).

## Product Handling

**Packaging**

The Azure Sphere MT3620 Development Kit packaging contains Azure Sphere MT3620 Development Kit and Micro B USB cable.

![](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/box.JPG)

**ESD Precautions**

The Azure Sphere MT3620 Development Kit contains highly sensitive electronic circuitry and is an Electrostatic Sensitive Device (ESD). Handling The Azure Sphere MT3620 Development Kit without proper ESD protection may destroy or damage it permanently. Proper ESD handling and packaging procedures must be applied throughout the processing, handling and operation of any application that incorporates Azure Sphere MT3620 Development Kit.

## Applications

- Agriculture
- Building
- Public safety

!!!Tip
    To understand how Azure Sphere works in a real-world setting, consider [Contoso, Ltds cenario](https://docs.microsoft.com/en-us/azure-sphere/product-overview/scenario).

## Qualification and approvals

| US FCC | Europe CE | Japan MIC |ROHS |
|--------|-----------|-----------|-----------|
| [![](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/fcc.png)](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/certification/Azure%20Sphere%20MT3620%20Development%20Kit-FCC-FCC.zip)       |   [![](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/ce.png)](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/certification/Azure%20Sphere%20MT3620%20Development%20Kit-CE.zip)        |  [![](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/mic.jpg)](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/certification/Azure%20Sphere%20MT3620%20Development%20Kit-MIC.zip)         |![](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/raw/master/img/rohs-logo.jpg)|s


CE ID: 18/0331/SZ
FCC ID: Z4T-MT3620DEVB 
MIC ID: CSRT18207

## Quickstarts for Azure Sphere

To use MT3620 Dev Board for Azure Sphere, you’ll need a Windows 10 PC with the latest Windows Updates, alongwith the Visual Studio Tools for Azure Sphere (which will be available for download from Microsoft). These tools will include application templates, development tools and the Azure Sphere software development kit (SDK).

The quickstarts guide you through:

- [Setting up an account](https://docs.microsoft.com/en-us/azure-sphere/quickstart/qs-azure-directory-account) for Azure Sphere
- [Installing Azure Sphere](https://docs.microsoft.com/en-us/azure-sphere/quickstart/qs-install) and setting up your development board
- [Claiming your device](https://docs.microsoft.com/en-us/azure-sphere/quickstart/claim-device)
- [Configuring Wi-Fi](https://docs.microsoft.com/en-us/azure-sphere/quickstart/qs-configure-wifi) and updating your device OS
- [Building your first application](https://docs.microsoft.com/en-us/azure-sphere/quickstart/qs-blink-application) by using the Visual Studio Tools Preview for Azure Sphere
- [Deploying the application](https://docs.microsoft.com/en-us/azure-sphere/quickstart/qs-first-deployment) over Wi-Fi
- [Setting up an Azure IoT Hub to work with Azure Sphere](https://docs.microsoft.com/en-us/azure-sphere/quickstart/qs-setup-iot-hub)

## 

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/).
