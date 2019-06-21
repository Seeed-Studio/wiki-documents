---
name: 4WD Driver Platform V1.0
category: Arduino
bzurl: https://www.seeedstudio.com/4WD-Driver-Platform-V1.0-p-2536.html
oldwikiname:  4WD Driver Platform V1.0
prodimagename: 4WD_Driver_Platform_V1.0_1200.jpg
surveyurl: https://www.research.net/r/4WD_Driver_Platform_V1
sku:  105090001
---

![](https://github.com/SeeedDocument/4WD_Driver_Platform_V1.0/raw/master/img/4WD_Driver_Platform_V1.0_1200.jpg)

4WD Driver Platform V1.0 (No Intel Edison chip included) is a motor driver board which support 4-wheel driving with bidirectional and full control to each motor. The most important features of this drive board is it expandability achieved by grove interfaces which can enable your project more versatile. It also get detailed and simple SDK (software development kit) which will make you development process quicker and easier. With Edison installed, you can build a powerful system to satisfy your different needs.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/4WD-Driver-Platform-V1.0-p-2536.html)

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
<tr>
<td colspan="2"> Basic parameters
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
<td colspan="2"> Motor Driver
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
<td colspan="2"> Expandability
</td></tr>
<tr>
<td>I<sup style="font-size:0.8em">2</sup>C interface </td>
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
</td></tr></table>

##  Application ideas
---

*   Various kinds of robots

*   Motor driver

*   Toy car

*   Industrial Control

##  Hardware Overview
---

![](https://github.com/SeeedDocument/4WD_Driver_Platform_V1.0/raw/master/img/4WD_Driver_Platform_V1.0_3400_Modules.jpg)

**<span style="font-size:1em; color:#FF0000;">Note that only 3.3 V voltage is valid to apply on ALL motor interfaces and grove modules.</span>**

##  Get started
---


!!!Note
    This section only shows you how to build basic development environment.
You can build a development environment for your project with following guides:

###  Assemble Edison on 4WD Driver board

**Material required**
- 4WD Driver Platform V1.0 *1

- Intel Edison *1

- 2 Micro B to Type A USB cables

**Software work ***


*   [Download Intel integrated tool pack(installed together with Driver)](http://downloadmirror.intel.com/25028/eng/iotdk_win_installer.exe)

*   [Download Arduino IDE if you develop your projects on Arduino board](http://downloads.arduino.cc/arduino-1.6.5-r5-windows.exe)

Rule of thumb: We recommend you only select drivers and flash tool to be installed for the first if you connection speed to Intel server is not fast enough. Downloading other tools separately will be much quicker.

!!!Note
    4WD Driver Platform V1.0 is not supported for Windows 10 at the moment.

**Check your IDE **

[Download a putty for serical communication](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html)


1.Open device manager.

2.Find USB serial port. Under Ports(COM &amp; LPT), find _USB Serial Port(COMx)_(Example: USB Serial Port(COM3))

3.Startup putty to and configure it as follow figure shows(marked with red rectangle)

![](https://github.com/SeeedDocument/4WD_Driver_Platform_V1.0/raw/master/img/Putty_config.jpg)putty configurations

4.Click Open to enter serial terminal

![](https://github.com/SeeedDocument/4WD_Driver_Platform_V1.0/raw/master/img/Putty_login.png)

putty login


5.Press Enter key to input user name and password to login to system in Edison.


!!!Note
    - No password exist if it is the first time you use you Edison chip.
    -  You can flash the latest firmware image to Edison with Intel Flash Tool.

6.Now your IDE is well installed.


##  Demo
---
!!!Note
    - This section will show you a demo which implemented some simple functions.
    - make sure you have built a development environment successful by former sections and we assume you have got basic knowledge for Arduino platform.

You can refer to [Edison 4WD Auto Robotic Platform 2.0](http://wiki.seeedstudio.com/Edison_4WD_Auto_Robotic_Platform_2.0/) for a practical application with 4WD Driver Platform V1.0.

##  Resources
---
*   [Schematic files](https://github.com/SeeedDocument/4WD_Driver_Platform_V1.0/raw/master/res/4WD_Auto_Robotic_Platform_V1.0_SCHAndPCB.zip)

*   [Git library(SDK) files](https://github.com/Pillar1989/webrobot/blob/master/motor.py)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>