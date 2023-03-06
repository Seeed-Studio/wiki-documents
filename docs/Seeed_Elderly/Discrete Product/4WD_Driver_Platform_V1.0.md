---
description: 4WD Driver Platform V1.0
title: 4WD Driver Platform V1.0
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /4WD_Driver_Platform_V1.0
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/4WD_Driver_Platform_V1.0/img/4WD_Driver_Platform_V1.0_1200.jpg)

4WD Driver Platform V1.0 (No Intel Edison chip included) is a motor driver board which support 4-wheel driving with bidirectional and full control to each motor. The most important features of this drive board is it expandability achieved by grove interfaces which can enable your project more versatile. It also get detailed and simple SDK (software development kit) which will make you development process quicker and easier. With Edison installed, you can build a powerful system to satisfy your different needs.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/4WD-Driver-Platform-V1.0-p-2536.html)

##  Features
---
*   Support USB to device UART bridge
*   Support OTG(On The Go)
*   Support SPI program port
*   Support Grove Interface: UART port* 1, I2C port *3
*   Support 4 wheel encoder motor driving with bidirectional(Peak Current: 3A)
*   Support overcurrent, over loading and short circuit protection function.
*   Detailed and simple SDK
*   Designed for Intel Edison platform.


##  Specification
---

<table>
  <tbody><tr>
      <td> Basic parameters
      </td></tr>
    <tr>
      <td> Input voltage </td>
      <td> 6-16V
      </td></tr>
    <tr>
      <td> Output voltage </td>
      <td> 5V/4V/3.3V/1.8V
      </td></tr>
    <tr>
      <td> Idle Current </td>
      <td> Less than150mA
      </td></tr>
    <tr>
      <td> Dimensions </td>
      <td> 130*110mm
      </td></tr>
    <tr>
      <td> Motor Driver
      </td></tr>
    <tr>
      <td> Driver chip </td>
      <td> MC33931(Freescale) * 4, independent
      </td></tr>
    <tr>
      <td> Input voltage </td>
      <td> 5-30V
      </td></tr>
    <tr>
      <td> Output current</td>
      <td> 3A(MAX)
      </td></tr>
    <tr>
      <td> Protection</td>
      <td> Auto-cutting output for over temperature, low-voltage and short circuit occurrences
      </td></tr>
    <tr>
      <td> Expandability
      </td></tr>
    <tr>
      <td>I2C interface </td>
      <td> 3
      </td></tr>
    <tr>
      <td>SPI interface </td>
      <td> 1
      </td></tr>
    <tr>
      <td> UART interface </td>
      <td> 2
      </td></tr>
    <tr>
      <td> USB OTG interface </td>
      <td> 1
      </td></tr></tbody></table>


##  Application ideas
---

*   Various kinds of robots

*   Motor driver

*   Toy car

*   Industrial Control

##  Hardware Overview
---

![](https://files.seeedstudio.com/wiki/4WD_Driver_Platform_V1.0/img/4WD_Driver_Platform_V1.0_3400_Modules.jpg)

**Note that only 3.3 V voltage is valid to apply on ALL motor interfaces and grove modules.**

##  Get started
---


:::note
    This section only shows you how to build basic development environment.
You can build a development environment for your project with following guides:
:::
###  Assemble Edison on 4WD Driver board

**Material required**
- 4WD Driver Platform V1.0 *1

- Intel Edison *1

- 2 Micro B to Type A USB cables

**Software work ***


*   [Download Intel integrated tool pack(installed together with Driver)](http://downloadmirror.intel.com/25028/eng/iotdk_win_installer.exe)

*   [Download Arduino IDE if you develop your projects on Arduino board](http://downloads.arduino.cc/arduino-1.6.5-r5-windows.exe)

Rule of thumb: We recommend you only select drivers and flash tool to be installed for the first if you connection speed to Intel server is not fast enough. Downloading other tools separately will be much quicker.

:::note
    4WD Driver Platform V1.0 is not supported for Windows 10 at the moment.
:::
**Check your IDE **

[Download a putty for serical communication](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html)


1.Open device manager.

2.Find USB serial port. Under Ports(COM &amp; LPT), find _USB Serial Port(COMx)_(Example: USB Serial Port(COM3))

3.Startup putty to and configure it as follow figure shows(marked with red rectangle)

![](https://files.seeedstudio.com/wiki/4WD_Driver_Platform_V1.0/img/Putty_config.jpg)putty configurations

4.Click Open to enter serial terminal

![](https://files.seeedstudio.com/wiki/4WD_Driver_Platform_V1.0/img/Putty_login.png)

putty login


5.Press Enter key to input user name and password to login to system in Edison.


:::note
    - No password exist if it is the first time you use you Edison chip.
    -  You can flash the latest firmware image to Edison with Intel Flash Tool.
:::
6.Now your IDE is well installed.


##  Demo
---
:::note
    - This section will show you a demo which implemented some simple functions.
    - make sure you have built a development environment successful by former sections and we assume you have got basic knowledge for Arduino platform.
:::
You can refer to [Edison 4WD Auto Robotic Platform 2.0](https://wiki.seeedstudio.com/Edison_4WD_Auto_Robotic_Platform_2.0/) for a practical application with 4WD Driver Platform V1.0.

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/4WD_Driver_Platform_V1.0/res/4WD_Auto_Robotic_Platform_V1.0_SCHAndPCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



##  Resources
---
*   [Schematic files](https://files.seeedstudio.com/wiki/4WD_Driver_Platform_V1.0/res/4WD_Auto_Robotic_Platform_V1.0_SCHAndPCB.zip)

*   [Git library(SDK) files](https://github.com/Pillar1989/webrobot/blob/master/motor.py)

## Tech Support
<div>
  Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>

