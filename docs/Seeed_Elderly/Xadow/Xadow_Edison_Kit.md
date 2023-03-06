---
description: Xadow - Edison Kit
title: Xadow - Edison Kit
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_Edison_Kit
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/110040001%201.jpg)

The Xadow - Edison Kit is based on the Intel® Edison which is designed to lower the barriers to entry for anyone prototyping and producing IoT and wearable computing products. It features high performance and low power consumption, which makes your project small and portable, especially suitable for wearable projects. Xadow - Edison Kit includes a Xadow - Edison main board which contains two Xadow-compatible interfaces, one SD interface, one Programmer interface and one Battery interface, a Xadow - Edison Programmer, Xadow - Edison SD. With Xadow - Edison you will be able to use many Xadow modules via standard Xadow interface.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Edison-Kit-p-2444.html)

## Feature
---
- Design for Intel® Edison.
- USB power supply(4.75~5.25V).
- Xadow-compatible interfaces.
- SD card connector.
- USB to device UART bridge with USB micro Type-B connector.
- USB OTG with USB Micro Type-AB connector.
- Battery charger.
- Power/sleep/Firmware recovery button input

## Specification
---
- USB Power supply: 4.75V ~ 5.25V
- 2 standard Xadow interface
- 1 SD card connector.
- 1 USB micro Type-B connector
- 1 USB Micro Type-AB connector
- 1 Battery interface
- 1 button for Power/sleep; 1 button for Firmware recovery
- Dimensions 30.0 × 40.0 × 7.0 mm
- Operating temperature 32 to 104°F (0 to 40°C)


## Block Diagram
---
Using FFC Cables making the following connections:

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Xadow-Edison_Connection.png)

:::note
    When connecting other Xadow modules to Xadow - Edison, you should concern about the connection direction. The connection method is that the unfilled corner of one xadow module need to connect to the right angle of another module(see four corners of each xadow module).
:::
## Installing Edison Arduino IDE
---

Refer to Intel Edison offical site: Edison [Getting Started Guide](https://software.intel.com/en-us/get-started-edison-windows)

1. Download the Edison Arduino IDE.(Note: Select your OS.)

2. Navigate to the folder where you downloaded the .zip Edison Arduino IDE

3. Right click on the .7z file,highlight “7-zip”, and select “Extract to “arduino-…”

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/IndoorKit_Extract_7z.png)

4. Click through the folder that was created until you see the IDE “arduino.exe” file.Double-click this file and this window should open.

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/IndoorKit_ArduinoIDE.png)

## Install required drivers
---
1. Download [FTDI drivers](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/CDM%20v2.10.00%20WHQL%20Certified.exe).
2. Right-click the .exe file you downloaded, which should be called “CDM…” and select “Run as administrator”.

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Edison_FTDI_Driver.jpg)

3. Click “Extract”.

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Edison_FTDI_Driver_Install.jpg)

4. Click “Next”.
5. Click “Finish” when you see this screen.

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Edison_FTDI_Driver_Install_ok.jpg)

6. Download [Intel Edison Drivers](https://downloadcenter.intel.com/product/83267) to install the required RNDIS, CDC, and DFU drivers.
7. Double-click the .exe file to begin the install.

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Intel_Edison_Driver.jpg)

## Example
---
1. Open the web site: [Xadow_Edison_Demos](https://github.com/Seeed-Studio/Xadow_Edison_Demos) to download the whole project.

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Github_Xadow_Edison_Demos.png)

2. Click Tools > Serial Port and select the Com # that the Intel Edison is connected to

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Import_Indoor_Kit_Demo.png)

3. Click Sketch>Import Library…>Add Library and import the library downloaded at step 1

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Xadow-Edison_Add_Library.png)

4. Click File > Examples > Xadow_Edison_Demos > Edison_Pedometer_with_OLED and select the demo

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Xadow-Edison_Select_Pedometer_Demo.png)

5. Using FFC Cables making the following connections:

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Xadow-Edison_Pedometer.jpg)

6. Click upload icon.

![](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Xadow-Edison_upload.png)


## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow_-_Edision_Programmer_v1.0_sch%26pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Resource
---
- [Edison Getting Started Guide](https://software.intel.com/en-us/get-started-edison-windows)
- [Xadow_Edison_Demos](https://github.com/Seeed-Studio/Xadow_Edison_Demos)
- [Xadow-Edison_sch_v1.0.pdf](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow-Edison_sch_v1.0.pdf)
- [Xadow - Edison Design Files v1.0](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow-Edison_v1.0_sch%26pcb.zip)
- [Xadow - Edision Programmer sch v1.0.pdf](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow_-_Edision_Programmer_sch_v1.0.pdf)
- [Xadow - Edision Programmer Design Files v1.0](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow_-_Edision_Programmer_v1.0_sch%26pcb.zip)
- [Xadow - Edison_SD_sch_v1.0.pdf](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow_-_Edison_SD_sch_v1.0.pdf)
- [Xadow - Edison_SD Design Files v1.0](https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow_-_Edison_SD_v1.0_sch%26pcb.zip)

## Tech Support
<div>
  Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
