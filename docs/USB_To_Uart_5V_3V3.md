---
name: USB To Uart 5V/3V3
category: Essentials
bzurl: https://www.seeedstudio.com/USB-To-Uart-5V%263V3-p-1832.html
oldwikiname:  USB To Uart 5V/3V3
prodimagename:  Photo_USB_To_Uart_5V_3V3.JPG
surveyurl: https://www.research.net/r/USB_To_Uart_5V_3V3
sku:  103990049
---
![](https://github.com/SeeedDocument/USB_To_Uart_5V_3V3/raw/master/img/Photo_USB_To_Uart_5V_3V3.JPG)

USB To Uart 5V/3V3  is a USB to serial adapter,Which is base on CH340,CH340 is a USB bus convert chip and it can realize USB convert to serial interface, USB convert to
IrDA infrared or USB convert to printer interface. this module is compatible with 5V and 3v3.and it can used for upload code or communicating with MCUs.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/USB-To-Uart-5V%263V3-p-1832.html)

##  Features
---
*   Full speed USB device interface, conforms to USB Specification Version 2.0

*   3.3V and 5V compatible I/Os.

*   Supports baud rate varies from 2400bps to 115200bps.

*   Hardware full duplex serial interface, set transceiver buffer

*   LED Indicator

##  Specification
---
*   Working Voltage ：DC 5V

*   Working Current &lt;10mA

*   Operation System： Windows、Linux、Mac

##  Interface Function
---
![](https://github.com/SeeedDocument/USB_To_Uart_5V_3V3/raw/master/img/USB_To_Uart_5V_3V3.jpg)

*   ①：Power Indicator
*   ②：Micro USB

*   ③：TX Indicator

*   ④：RX Indicator
*   ⑤：Uart Breakout

*   ⑥：VCC Switch:Choice 5V or 3V3

##  Usage
---
**Driver Install**

USB To Uart 5V/3V3 is used as USB To Serial Port interface.It need to install driver.

**Windows/Linux**

Totally compatible with serial application program in computer endpoint Windows operation system

*   1)You plug it to computer by USB Port.

*   2)Wait a  minute,you can find it in Device Manager.

![](https://github.com/SeeedDocument/USB_To_Uart_5V_3V3/raw/master/img/CH340_Driver.jpg)

*   3)If you can not find the port,please download Driver from [Here](http://www.wch.cn/download/CH341SER_ZIP.html)

**Mac OS**

Driver download:  [http://www.wch.cn/download/CH341SER_MAC_ZIP.html](http://www.wch.cn/download/CH341SER_MAC_ZIP.html)

On Mac OS Yosemite:

*   1) Install the CH340 driver

*   2) Open Terminal program (located in /Applications/Utilities/)

*   3) Type command: sudo nvram boot-args="debug=0x146 kext-dev-mode=1"

*   4）Type password;

*   5）Restart your computer;

If you want restore your Mac’s setting,You can exit developer mode by redefining the boot-arg to your previous settings, or clear your boot-args as follows:  sudo nvram -d boot-args

<big>Hardware</big>

![](https://github.com/SeeedDocument/USB_To_Uart_5V_3V3/raw/master/img/USB_To_Uart_Download.jpg)

You should like this connect your circuit.

<big>Example</big>

We can download code to Seeeduino Ethernet by USB To Uart 5V/3V3.

![](https://github.com/SeeedDocument/USB_To_Uart_5V_3V3/raw/master/img/USB_To_Uart_5V_3v3_Usage.jpg)

Note that you should select the correct board type and COM port.

##  Resource
---
- [USB To Uart 5V/3V3 v1.0 Eagle File](https://github.com/SeeedDocument/USB_To_Uart_5V_3V3/raw/master/res/USB_To_Uart_5V_3V3_Eagle.zip)

- [Schematic in pdf](https://github.com/SeeedDocument/USB_To_Uart_5V_3V3/raw/master/res/USB_To_Uart_5V_3V3_v1.pdf)

- [Datasheet of CH340](https://github.com/SeeedDocument/USB_To_Uart_5V_3V3/raw/master/res/CH340DS1_EN.PDF)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>