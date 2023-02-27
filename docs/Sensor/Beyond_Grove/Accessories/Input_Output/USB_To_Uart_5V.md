---
title: USB To Uart 5V
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Scream_out_loud-110dBA_fixed_tone_Siren/
slug: /USB_To_Uart_5V
last_update:
  date: 02/03/2022
  author: jianjing Huang
---
<!-- ---
name: USB To Uart 5V
category: Essentials
bzurl: https://www.seeedstudio.com/USB-To-Uart-5V-p-1833.html
oldwikiname:  USB To Uart 5V
prodimagename:  USB_To_Uart_5V_photo.jpg
surveyurl: https://www.research.net/r/USB_To_Uart_5V
sku:  103990051
--- -->
![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V/img/USB_To_Uart_5V_photo.jpg)

USB To Uart 5V  is a USB to serial adapter,Which is base on CH340,CH340 is a USB bus convert chip and it can realize USB convert to serial interface, USB convert to
IrDA infrared or USB convert to printer interface. this module can used for upload code or communicating with MCUs.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/USB-To-Uart-5V-p-1833.html)

## Features

---

* Full speed USB device interface, conforms to USB Specification Version 2.0

* Supports baud rate varies from 2400bps to 115200bps.

* Hardware full duplex serial interface, set transceiver buffer

* LED Indicator

## Specification

---

* Working Voltage ：DC 5V

* Working Current &lt;10mA

* Operation System： Windows、Linux、Mac

## Interface Function

---
![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V/img/USB_To_Uart_5v_interface.jpg)

* ①：Power Indicator
* ②：Micro USB

* ③：TX Indicator

* ④：RX Indicator
* ⑤：Uart Breakout

## Usage

---
**Driver Install**

USB To Uart 5V/3V3 is used as USB To Serial Port interface.It need to install driver.

**Windows/Linux**

Totally compatible with serial application program in computer endpoint Windows operation system

* 1)You plug it to computer by USB Port.

* 2)Wait a  minute,you can find it in Device Manager.

* 3)If you can not find the port,please download Driver from [Here](http://wch-ic.com/download/list.asp?id=127)

![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V/img/CH340_Driver.jpg)

**Mac OS**

Driver download:  [http://www.wch.cn/download/CH341SER_MAC_ZIP.html](http://www.wch.cn/download/CH341SER_MAC_ZIP.html)

On Mac OS Yosemite:

* 1) Install the CH340 driver

* 2) Open Terminal program (located in /Applications/Utilities/)

* 3) Type command: sudo nvram boot-args="debug=0x146 kext-dev-mode=1"

* 4）Type password;

* 5）Restart your computer;

If you want restore your Mac’s setting,You can exit developer mode by redefining the boot-arg to your previous settings, or clear your boot-args as follows:  sudo nvram -d boot-args

**Hardware**

![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V/img/USB_To_Uart_Download.jpg)

You should like this connect your circuit.

### Example

We can download code to Seeeduino Ethernet by USB To Uart 5V.

![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V/img/USB_To_Uart_5V_Usage.jpg)

Note that you should select the correct board type and COM port.

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="res/USB_To_Uart_5V_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resource

---

* [USB To Uart 5V v1.0 Eagle File](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/USB_To_Uart_5V_Eagle.zip)

* [Schematic in pdf](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/USB_To_Uart_5V_v1.0_SCH.pdf)

* [Datasheet of CH340](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/CH340DS1_EN.PDF)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
