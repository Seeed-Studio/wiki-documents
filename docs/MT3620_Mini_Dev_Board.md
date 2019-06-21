---
name: MT3620 Mini Dev Board
category: Azure
bzurl:
oldwikiname: 
prodimagename: 
surveyurl:  
sku: 
---

![enter image description here](https://github.com/SeeedDocument/MT3620_Mini_Dev_Board/raw/master/img/product.png)

MT3620 Mini Dev Board is a lite version of Seeed previous [Azure Sphere MT3620 Development Kit](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-US-Version-p-3052.html). For an introduction to Azure sphere, please refer to this link [Azure Sphere](https://azure.microsoft.com/en-us/services/azure-sphere/). 

We developed this board to meet the needs of developers who need smaller sizes, are more scalable, and have lower costs. This development board is based on the MT3620 module, which greatly simplifies the difficulty of hardware design. The [MT3620 module](https://www.seeedstudio.com/MT3620-Module-AI-Link-WF-M620-RSC1-p-2920.html) is developed by our partner [AI-Link](http://www.ilinkthings.com/microsoft). Developers can easily reuse this design into their own projects. The development board uses two single-row pin headers for easy plug-in on other motherboards or expansion boards. Unlike the full-featured Azure Sphere MT3620 Development Kit, this development board optimizes the design by reducing some system hardware peripheral resources, and only provides the necessary hardware resources to developers. In terms of hardware specifications, we only support 2.4G Wi-Fi and reduce I2S and some GPIO ports.  

**What’s new of the MT3620 Mini Dev Board?**

- Based on MT3620 module (WF-M620-RSA1)
- Reduce the board size from 50mm*80mm*16mm to 34mm*60mm*19mm
- Keep the necessary LED indicator and buttons
- The board form factor is more easier for add-on usage

The figure shows the full-feature dev board and new mini dev board size comparison: 

![](https://github.com/SeeedDocument/MT3620_Mini_Dev_Board/raw/master/img/compare.png)

The Azure Sphere operating system is pre-installed on the MT3620 and is designed to work with the Azure Sphere Security Service to create a secured IoT platform. Together the Azure Sphere OS and security service deliver: 

- certificate-based device authentication to any web service
- software attestation and secure boot
- threat detection via failure reporting
- ongoing security updates
- an integrated, secured end-to-end IoT solution
  
MT3620 software development is supported using the powerful Microsoft Visual Studio IDE: Install Visual Studio and the Azure Sphere extension, plug the development board into a PC over USB, and start developing IoT applications with unprecedented levels of security.



<p style=":center"><a href="https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

 
!!!Warning
    1. Return policy: This product can only be activated once. Seeed will not accept return once the package has been opened. Check Warranty & Returns here. If there are any quality issues after opening the package, please contact Seeed Tech Support Team techsupport@seeed.cc. 
    
    2. Open Source Licenses: The software included in this product contains copyrighted software that is licensed under the GPL, LGPL or other open source licenses, listed ataka.ms/AzureSphereSDK. You may obtain the source code for applicable software from aka.ms/AzureSphereSDK or by sending an email to order@seeed.cc.

## Features

- Azure Sphere: End-to-end security for IoT devices.
- Wi-Fi 802.11 b/g/n.
- Tri-core microcontroller with on-chip RAM & flash.
- Microsoft Visual Studio development environment.
- Online authentication & updates for device lifetime.
- Expand UART, I2C, SPI, ADC, GPIO resource on pin header.

## Specification

**Hardware**

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-c3ow{border-color:inherit;:center;vertical-align:top}
.tg .tg-0pky{border-color:inherit;:left;vertical-align:top}
.tg .tg-0lax{:left;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-0pky">Description</th>
    <th class="tg-0pky">Value</th>
  </tr>
  <tr>
    <td class="tg-c3ow" rowspan="2">MCU<br>(using MT3620 module)</td>
    <td class="tg-0pky">1 * ARM Cortex A7 core @500MHz , 4MB RAM</td>
  </tr>
  <tr>
    <td class="tg-0pky">2 * ARM Cortex M4 core @200MHz , 64KB RAM</td>
  </tr>
  <tr>
    <td class="tg-c3ow" rowspan="4">ISU</td>
    <td class="tg-0pky">ISU 0 configured as SPI0 or UART0 or I2C0, ISU 1 configured as SPI1 or UART1 or I2C1</td>
  </tr>
  <tr>
    <td class="tg-0pky">- I2C runs at up to 1MHz</td>
  </tr>
  <tr>
    <td class="tg-0pky">- SPI runs at up to 40MHz</td>
  </tr>
  <tr>
    <td class="tg-0pky">- UART runs at up to 3Mbps</td>
  </tr>
  <tr>
    <td class="tg-0pky">Connectivity</td>
    <td class="tg-0pky">802.11 b/g/n Wi-Fi</td>
  </tr>
  <tr>
    <td class="tg-0pky">ADC</td>
    <td class="tg-0pky">3 * 12-bit ADC input I/O</td>
  </tr>
  <tr>
    <td class="tg-0pky">RTC</td>
    <td class="tg-0pky">1 * RTC with CR1220 3V battery holder</td>
  </tr>
  <tr>
    <td class="tg-0pky">USB</td>
    <td class="tg-0pky">1 * Micro USB port for power supply and debugging, 5V/1A</td>
  </tr>
  <tr>
    <td class="tg-0pky" rowspan="3">LED</td>
    <td class="tg-0pky">1 * RED LED -&gt; Power</td>
  </tr>
  <tr>
    <td class="tg-0lax">1 * GREEN LED -&gt; FTDI status</td>
  </tr>
  <tr>
    <td class="tg-0lax">1 * GREEN LED -&gt; user controlled (can be configured as Wi-Fi status or other usage)</td>
  </tr>
  <tr>
    <td class="tg-0lax">Button</td>
    <td class="tg-0lax">1* Reset Button</td>
  </tr>
  <tr>
    <td class="tg-0pky">Operating Temperature</td>
    <td class="tg-0pky">-40~85°C</td>
  </tr>
  <tr>
    <td class="tg-0pky">Dimensions</td>
    <td class="tg-0pky">L:34mm*W:60mm*H:19mm<br></td>
  </tr>
  <tr>
    <td class="tg-0pky">Certification</td>
    <td class="tg-0pky">CE / FCC / MIC / RoHS<br></td>
  </tr>
</table>

**Software**

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-0pky{border-color:inherit;:left;vertical-align:top}
.tg .tg-0lax{:left;vertical-align:top}
</style>
<table class="tg">
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

<a href="https://github.com/SeeedDocument/MT3620_Mini_Dev_Board/raw/master/img/Sys.jpg" target="_blank"><img src="https://github.com/SeeedDocument/MT3620_Mini_Dev_Board/raw/master/img/Sys.jpg"/></a>



**Board Pinmap**

<a href="https://github.com/SeeedDocument/MT3620_Mini_Dev_Board/raw/master/img/pinout.jpg" target="_blank"><img src="https://github.com/SeeedDocument/MT3620_Mini_Dev_Board/raw/master/img/pinout.jpg"/></a>

## Applications

- Home/Building/Facilities
- Automation
- Security
- Equipment Management
- Utilities
- Public Safety

!!!Tip
    To understand how Azure Sphere works in a real-world setting, consider [Contoso, Ltds cenario](https://docs.microsoft.com/en-us/azure-sphere/product-overview/scenario).


## Install Azure Sphere

If you have MT3620 Mini Dev Board that has not yet been used, complete [these steps](https://docs.microsoft.com/en-us/azure-sphere/install/overview) first to get up and running.

## MT3620 Mini Dev Board Demos

We build there demoes which combine MT3620 Mini Dev Board and [Seeed Grove system](http://wiki.seeedstudio.com/Grove_System/). 

**Demo#1**: MT3620 Mini Dev Board performs as an MCU, which connects with Grove-Button and USB to TTL adapter. Then you connect MT3620 Mini Dev Board and the USB to TTL adapter to PC usb ports. After you downloading the code, press Grove-Button and enter "Hello World!" from USB to TTL adapter, you can receive "Hello World!" from Visual Studio Output window.  

**Demo#2**: MT3620 Mini Dev Board performs as an MCU, which connects with Grove-Light Sensor and USB to Grove-Rotary Sensor. Then you connect MT3620 Mini Dev Board to PC usb ports.  After you downloading the code, you move your hand on top of the Grove-Light Sensor or rotate the Grove-Rotary Sensor, you can see analog outputs for both sensors from Visual Studio Output window.  

**Demo#3**: MT3620 Mini Dev Board performs as an MCU, which connects with Grove - OLED Display 1.12". Then you connect MT3620 Mini Dev Board to PC usb ports.  After you downloading the code, you press Grove-Button and enter "Hello World!" from USB to TTL adapter, you can receive "Hello World!" from Visual Studio Output window. 

**MT3620 Grove Breakout**：MT3620 Mini Dev Board supports SPI, UART, I2C, Digital functions, but does not support the ADC function. So the MT3620 Grove Breakout includes [AD7992](https://github.com/SeeedDocument/MT3620_Mini_Dev_Board/raw/master/res/AD7992.pdf) chip, which is a 12-bit, low power, successive approximation ADC with an I2C-compatible interface. Then connect to I2C interface of MT3620 Mini Dev Board. 

![](https://raw.githubusercontent.com/SeeedDocument/MT3620_Mini_Dev_Board/master/img/adc_i2c.png)


### Demo#1 Digital and UART

**Part List**


| MT3620 Mini Dev Board | MT3620 Grove Breakout |  Grove - Button |USB To Uart 5V&3V3 |
|--------------|-------------|-----------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/MT3620_Mini_Dev_Board/raw/master/img/product_s.png)|![enter image description here](https://github.com/SeeedDocument/MT3620_Mini_Dev_Board/raw/master/img/breakout_s.jpg)|![enter image description here](https://github.com/SeeedDocument/MT3620_Mini_Dev_Board/raw/master/img/button_s.jpg)|![enter image description here](https://github.com/SeeedDocument/MT3620_Mini_Dev_Board/raw/master/img/usb_2_ttl_s.jpg)|
|[Get One Now](https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html)|[Get One Now](https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html)|[Get One Now](https://www.seeedstudio.com/Grove-Button-p-766.html)|[Get One Now](https://www.seeedstudio.com/USB-To-Uart-5V-3V3-p-1832.html)|

**Hardware Connection**

![](https://github.com/SeeedDocument/MT3620_Mini_Dev_Board/raw/master/img/demo1_connection.png)

- Step 1. Connect Grove-Button to D1 of MT3620 Grove Breakout.
- Step 2. Connect USB To Uart adapter to UART0 of MT3620 Grove Breakout through [Grove-Cable](https://www.seeedstudio.com/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-PAck.html). 
- Step 3. Plug MT3620 Grove Breakout to MT3620 Mini Dev Board.
- Step 4. Connect MT3620 Mini Dev Board and the USB to TTL adapter to PC usb ports.

!!!Warning
    Please make sure the voltage switch on USB to TTL adapter is turned to **5v**. You connect the RX of the USB to ttl adapter to TX of MT3620 Grove Breakout, the TX of the USB to ttl adapter to RX of MT3620 Grove Breakout and GND as well. Do not connect the 5V. 

**Software**

- Step 1. Download [Azure Sphere Demo](https://github.com/Seeed-Studio/Azure_Sphere_Demo)
- Step 2. Open the **Samples\UART0** under Azure_Sphere_Demo
- Step 3. Double click **UART0.sln** 
- Step 4. Right-Click the project name of your application, select __Properties > C/C++ > General > Additional Include Directories__
- Step 5. Click the __down arraw >  Edit... > New Line__ icons, modify the path of  __UART0__, click __Select Folder__ > __OK__ > __OK__
- Step 6. Go to the application project Right-Click __References__ > __Add References__, select __Projets__, click the check box of __UART0__, then click __OK__
- Step 7. Right-Click the project name of your application, select __General__ > __Target API Set__, click the check box and set as __1+Beta1902__ if you use the __Visual Studio Community version__ and please skip this step if you use the Enterprise version.
- Step 8. Click the __Remote GDB Debugger__.
- Step 9. Open the COM monitor tool and select USB to TTL adapter serial port
- Step 10, Press the Grove-Button and send "Hello World!" from COM monitor tool.
- Step 11, You can see the below message from Visual Studio output window.

```
UART received 12 bytes: 'Hello World!'.
UART received 2 bytes: '
'.
UART received 12 bytes: 'Hello World!'.
UART received 2 bytes: '
'.
UART received 12 bytes: 'Hello World!'.
UART received 2 bytes: '
```

### Demo#2 Analog

**Part List**


| MT3620 Mini Dev Board | MT3620 Grove Breakout |  Grove-Light Sensor |Grove - Rotary Angle Sensor|
|--------------|-------------|-----------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/MT3620_Mini_Dev_Board/raw/master/img/product_s.png)|![enter image description here](https://github.com/SeeedDocument/MT3620_Mini_Dev_Board/raw/master/img/breakout_s.jpg)|![enter image description here](https://github.com/SeeedDocument/MT3620_Mini_Dev_Board/raw/master/img/light_sensor_s.jpg)|![enter image description here](https://github.com/SeeedDocument/MT3620_Mini_Dev_Board/raw/master/img/Rotary_Angle_Sensor_s.jpg)|
|[Get One Now](https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html)|[Get One Now](https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html)|[Get One Now](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2.html)|[Get One Now](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html)|

**Hardware Connection**

![](https://github.com/SeeedDocument/MT3620_Mini_Dev_Board/raw/master/img/demo2_connection.png)

- Step 1. Connect Grove-Rotary Angle Sensor to A0 of MT3620 Grove Breakout.
- Step 2. Connect Grove-Light Sensor to A1 of MT3620 Grove Breakout. 
- Step 3. Plug MT3620 Grove Breakout to MT3620 Mini Dev Board.
- Step 4. Connect MT3620 Mini Dev Board to PC usb port.

**Software**

- Step 1. Download [Azure Sphere Demo](https://github.com/Seeed-Studio/Azure_Sphere_Demo)
- Step 2. Open the **Samples\AD7991_I2C** under Azure_Sphere_Demo
- Step 3. Double click **AD7991_I2C.sln** 
- Step 4. Right-Click the project name of your application, select __Properties > C/C++ > General > Additional Include Directories__
- Step 5. Click the __down arraw >  Edit... > New Line__ icons, modify the path of  __AD7991_I2C__, click __Select Folder__ > __OK__ > __OK__
- Step 6. Go to the application project Right-Click __References__ > __Add References__, select __Projets__, click the check box of __AD7991_I2C__, then click __OK__
- Step 7. Right-Click the project name of your application, select __General__ > __Target API Set__, click the check box and set as __1+Beta1902__ if you use the __Visual Studio Community version__ and please skip this step if you use the Enterprise version.
- Step 8. Click the __Remote GDB Debugger__, you move your hand on top of the Grove-Light Sensor or rotate the Grove-Rotary Angle Sensor, you can see analog outputs for both sensors from Visual Studio Output window.  

```

A0: 192 A1: 2646
A0: 162 A1: 2644
A0: 1489 A1: 2647
A0: 621 A1: 2644
A0: 227 A1: 2648
A0: 33 A1: 2644
A0: 0 A1: 2647
A0: 0 A1: 2647
A0: 0 A1: 2647
A0: 0 A1: 2644
A0: 373 A1: 2643
A0: 885 A1: 2646
A0: 1717 A1: 2647
A0: 2057 A1: 2647
```

### Demo#3 I2C

**Part List**


| MT3620 Mini Dev Board | MT3620 Grove Breakout |  Grove-OLED Display 1.12'' V2 |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/MT3620_Mini_Dev_Board/raw/master/img/product_s.png)|![enter image description here](https://github.com/SeeedDocument/MT3620_Mini_Dev_Board/raw/master/img/breakout_s.jpg)|![enter image description here](https://github.com/SeeedDocument/MT3620_Mini_Dev_Board/raw/master/img/oled_s.jpg)|
|[Get One Now](https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html)|[Get One Now](https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html)|[Get One Now](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2.html)|[Get One Now](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html)|

**Hardware Connection**

![](https://github.com/SeeedDocument/MT3620_Mini_Dev_Board/raw/master/img/demo3_connection.png)

- Step 1. Connect Grove-OLED Display 1.12'' V2 to I2C of MT3620 Grove Breakout.
- Step 2. Plug MT3620 Grove Breakout to MT3620 Mini Dev Board.
- Step 3. Connect MT3620 Mini Dev Board to PC usb port.

**Software**

- Step 1. Download [Azure Sphere Demo](https://github.com/Seeed-Studio/Azure_Sphere_Demo)
- Step 2. Open the **Samples\SeeedOLED_I2C** under Azure_Sphere_Demo
- Step 3. Double click **SeeedOLED_I2C.sln** 
- Step 4. Right-Click the project name of your application, select __Properties > C/C++ > General > Additional Include Directories__
- Step 5. Click the __down arraw >  Edit... > New Line__ icons, modify the path of  __SeeedOLED_I2C__, click __Select Folder__ > __OK__ > __OK__
- Step 6. Go to the application project Right-Click __References__ > __Add References__, select __Projets__, click the check box of __SeeedOLED_I2C__, then click __OK__
- Step 7. Right-Click the project name of your application, select __General__ > __Target API Set__, click the check box and set as __1+Beta1902__ if you use the __Visual Studio Community version__ and please skip this step if you use the Enterprise version.
- Step 8. Click the __Remote GDB Debugger__, you will see the info display on oled.

```
Remote debugging from host 192.168.35.1
Seeed oled 96*96 demo.
```

## Door Remote Control Project

This is the Azure Sphere Secure Lock Demo. We build this Box with the new MT3620 Mini Dev Board and its Grove Breakout board. The MT3620 works as a device micro-controller and provides secure access to the cloud. 

![](https://github.com/SeeedDocument/MT3620_Mini_Dev_Board/raw/master/img/Azure_Sphere_Demo_Secure_Lock.jpg)

<div align="center">Secure Lock Diagram<b></b><i></i></div>


**1. Let's find out how the hardware works:**

On top of the box , there is a warning light ,which will flash when the door is open. The MT3620 reads the micro switch status and knows the door is open or not. The door is locked by an electromagnet switch. There are two relays, they are both driven by MT3620‘s GPIOs. One relay controls the electromagnet power source, by opening the relay, the electromagnet will be opened. The other relay controls the warning light. 

![](https://github.com/SeeedDocument/MT3620_Mini_Dev_Board/raw/master/img/Azure%20Sphere%20Mini%20Dev%20Board%20Demo4.jpg)

<div align="center"><b>Front View</b><i></i></div>

![](https://github.com/SeeedDocument/MT3620_Mini_Dev_Board/raw/master/img/Azure%20Sphere%20Mini%20Dev%20Board%20Demo2.jpg)

<div align="center"><b>Top View</b><i></i></div>

![](https://github.com/SeeedDocument/MT3620_Mini_Dev_Board/raw/master/img/Azure%20Sphere%20Mini%20Dev%20Board%20Demo5.jpg)

<div align="center"><b>Side View</b><i></i></div>


**2. MT3620 Mini Dev Board**

- Step 1. Download [Azure Sphere Demo](https://github.com/Seeed-Studio/Azure_Sphere_Demo). 
- Step 2. Follow Quickstarts for Azure Sphere to open the **Azure_Sphere_Demo\Demostrations\RemoteControlDoor\RemoteControlDoor.sln** project.
- Step 3. Open the main.c under Source Files. 
- Step 4. Modify wifiSsid and wifiPsk @line28 and 29.
- Step 5. Connect the demo to Azure IoT.
- Step 6. Click Build -> Rebuild Solution directly to the device.
- Step 7. Use the Remote Debug Tool to access the device.  
- Step 8. Follow the video to operate the example in 3 different ways.

<iframe width="800" height="450" src="https://www.youtube.com/embed/NgH3Ot9pM1Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Resource

- **[Product]** [MT3620 Mini Dev Board Product Brief](https://github.com/SeeedDocument/MT3620-Mini-Dev-Board/blob/master/res/MT3620%20Mini%20Dev%20Board%20Product%20Brief-2019-06-18.pdf)
- **[Product]** [Welcome to Azure Sphere](https://docs.microsoft.com/en-us/azure-sphere/)
- **[Library]** [Azure Sphere Demo Library](https://github.com/Seeed-Studio/Azure_Sphere_Demo)
- **[PDF]** [MT3620 Mini Dev Board Schematic](https://github.com/SeeedDocument/MT3620_Mini_Dev_Board/raw/master/res/MT3620%20Dev%20Board%20V2.pdf)
- **[DataSheet]** [MediaTek MT3620 Product Brief](https://github.com/SeeedDocument/MT3620_Mini_Dev_Board/raw/master/res/MediaTek%20MT3620%20Product%20Brief.pdf)
- **[DataSheet]** [WF-M620 RSC1 datasheet](https://github.com/SeeedDocument/MT3620_Mini_Dev_Board/raw/master/res/WF-M620-RSC1_datasheet_20190314.pdf)
- **[FAQ Web]** [Azure Sphere Forum](https://social.msdn.microsoft.com/Forums/en-US/home?forum=azuresphere)
- **[FAQ Web]** [Azure Sphere Github issues](https://github.com/MicrosoftDocs/azure-sphere-issues/issues?utf8=%E2%9C%93&q=is%3Aissue)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>