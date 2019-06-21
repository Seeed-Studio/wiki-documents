---
name: Xadow - Edison Kit
category: RePhone
bzurl: https://www.seeedstudio.com/Xadow-Edison-Kit-p-2444.html
oldwikiname: Xadow - Edison Kit
prodimagename: 110040001%201.jpg
surveyurl: https://www.research.net/r/xaodw_edison_kit
sku: 110040001
---
![](https://github.com/SeeedDocument/Xadow_Edison_Kit/raw/master/img/110040001%201.jpg)

The Xadow - Edison Kit is based on the Intel® Edison which is designed to lower the barriers to entry for anyone prototyping and producing IoT and wearable computing products. It features high performance and low power consumption, which makes your project small and portable, especially suitable for wearable projects. Xadow - Edison Kit includes a Xadow - Edison main board which contains two Xadow-compatible interfaces, one SD interface, one Programmer interface and one Battery interface, a Xadow - Edison Programmer, Xadow - Edison SD. With Xadow - Edison you will be able to use many Xadow modules via standard Xadow interface.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Edison-Kit-p-2444.html)

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

![](https://github.com/SeeedDocument/Xadow_Edison_Kit/raw/master/img/Xadow-Edison_Connection.png)

!!!Note
    When connecting other Xadow modules to Xadow - Edison, you should concern about the connection direction. The connection method is that the unfilled corner of one xadow module need to connect to the right angle of another module(see four corners of each xadow module).

## Installing Edison Arduino IDE
---

Refer to Intel Edison offical site: Edison [Getting Started Guide](https://software.intel.com/en-us/get-started-edison-windows)

1. Download the Edison Arduino IDE.(Note: Select your OS.)

2. Navigate to the folder where you downloaded the .zip Edison Arduino IDE

3. Right click on the .7z file,highlight “7-zip”, and select “Extract to “arduino-…”

![](https://github.com/SeeedDocument/Xadow_Edison_Kit/raw/master/img/IndoorKit_Extract_7z.png)

4. Click through the folder that was created until you see the IDE “arduino.exe” file.Double-click this file and this window should open.

![](https://github.com/SeeedDocument/Xadow_Edison_Kit/raw/master/img/IndoorKit_ArduinoIDE.png)

## Install required drivers
---
1. Download [FTDI drivers](https://github.com/SeeedDocument/Xadow_Edison_Kit/raw/master/res/CDM%20v2.10.00%20WHQL%20Certified.exe).
2. Right-click the .exe file you downloaded, which should be called “CDM…” and select “Run as administrator”.

![](https://github.com/SeeedDocument/Xadow_Edison_Kit/raw/master/img/Edison_FTDI_Driver.jpg)

3. Click “Extract”.

![](https://github.com/SeeedDocument/Xadow_Edison_Kit/raw/master/img/Edison_FTDI_Driver_Install.jpg)

4. Click “Next”.
5. Click “Finish” when you see this screen.

![](https://github.com/SeeedDocument/Xadow_Edison_Kit/raw/master/img/Edison_FTDI_Driver_Install_ok.jpg)

6. Download [Intel Edison Drivers](https://downloadcenter.intel.com/product/83267) to install the required RNDIS, CDC, and DFU drivers.
7. Double-click the .exe file to begin the install.

![](https://github.com/SeeedDocument/Xadow_Edison_Kit/raw/master/img/Intel_Edison_Driver.jpg)

## Example
---
1. Open the web site: [Xadow_Edison_Demos](https://github.com/Seeed-Studio/Xadow_Edison_Demos) to download the whole project.

![](https://github.com/SeeedDocument/Xadow_Edison_Kit/raw/master/img/Github_Xadow_Edison_Demos.png)

2. Click Tools > Serial Port and select the Com # that the Intel Edison is connected to

![](https://github.com/SeeedDocument/Xadow_Edison_Kit/raw/master/img/Import_Indoor_Kit_Demo.png)

3. Click Sketch>Import Library…>Add Library and import the library downloaded at step 1

![](https://github.com/SeeedDocument/Xadow_Edison_Kit/raw/master/img/Xadow-Edison_Add_Library.png)

4. Click File > Examples > Xadow_Edison_Demos > Edison_Pedometer_with_OLED and select the demo

![](https://github.com/SeeedDocument/Xadow_Edison_Kit/raw/master/img/Xadow-Edison_Select_Pedometer_Demo.png)

5. Using FFC Cables making the following connections:

![](https://github.com/SeeedDocument/Xadow_Edison_Kit/raw/master/img/Xadow-Edison_Pedometer.jpg)

6. Click upload icon.

![](https://github.com/SeeedDocument/Xadow_Edison_Kit/raw/master/img/Xadow-Edison_upload.png)

## Resource
---
- [Edison Getting Started Guide](https://software.intel.com/en-us/get-started-edison-windows)
- [Xadow_Edison_Demos](https://github.com/Seeed-Studio/Xadow_Edison_Demos)
- [Xadow-Edison_sch_v1.0.pdf](https://github.com/SeeedDocument/Xadow_Edison_Kit/raw/master/res/Xadow-Edison_sch_v1.0.pdf)
- [Xadow - Edison Design Files v1.0](https://github.com/SeeedDocument/Xadow_Edison_Kit/raw/master/res/Xadow-Edison_v1.0_sch%26pcb.zip)
- [Xadow - Edision Programmer sch v1.0.pdf](https://github.com/SeeedDocument/Xadow_Edison_Kit/raw/master/res/Xadow_-_Edision_Programmer_sch_v1.0.pdf)
- [Xadow - Edision Programmer Design Files v1.0](https://github.com/SeeedDocument/Xadow_Edison_Kit/raw/master/res/Xadow_-_Edision_Programmer_v1.0_sch%26pcb.zip)
- [Xadow - Edison_SD_sch_v1.0.pdf](https://github.com/SeeedDocument/Xadow_Edison_Kit/raw/master/res/Xadow_-_Edison_SD_sch_v1.0.pdf)
- [Xadow - Edison_SD Design Files v1.0](https://github.com/SeeedDocument/Xadow_Edison_Kit/raw/master/res/Xadow_-_Edison_SD_v1.0_sch%26pcb.zip)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>