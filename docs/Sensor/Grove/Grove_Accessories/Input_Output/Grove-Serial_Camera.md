---
title: Grove - Serial Camera
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Serial_Camera/
slug: /Grove-Serial_Camera
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/img/Serial_camera.jpg)

The Serial Camera is a JPEG color camera module easy for MCU use.It has integrated image processing DSP to generate 320*240 or 640*480 JPEG image without thumbnail information, Captured picture will be stored in internal buffer and transferred via UART port.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Serial-Camera-p-945.html)

Features
--------

- Grove Interface
- JPEG compressed image without Thumbnail Information
- 5V power supply
- Small and compact
- Protocol control

:::tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::

Specifications
--------------

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Item
</th>
<th scope="col">
Min
</th>
<th scope="col">
Typical
</th>
<th scope="col">
Max
</th>
<th scope="col">
Unit
</th>
</tr>
<tr align="center">
<th scope="row">
Operating Voltage
</th>
<td>
4,8
</td>
<td>
5.0
</td>
<td>
5.3
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
Resolution (default)
</th>
<td colspan="3">
640x480 / 320x240
</td>
<td>
/
</td>
</tr>
<tr align="center">
<th scope="row">
Default Baud rate of serial port
</th>
<td colspan="3">
115200
</td>
<td>
Baud
</td>
</tr>
</table>

Platforms Supported
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

Application Ideas
-----------------

- Digital Cameras with the [SD card shield](https://www.seeedstudio.com/depot/sd-card-shield-p-492.html?cPath=109)
- Video monitoring system

Usage
-----

### Use Camera on PC

**Step 1**:Download dedicated serial port debugging tool [VC0703COMTOOL.rar](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/res/VC0703COMTOOL.rar) and install it.

**Step 2**: Connect Serial camera to PC with USB to use serial converter tool UartSBee

| Serial camera | Uart\_SB v3.1 |
|---------------|---------------|
| GND (black)   | GND           |
| VCC (red)     | VCC           |
| RX (white)    | TX            |
| TX (Yellow)   | RX            |

**Step 3:** Connect the Uart\_SB v3.1 with Computer and Open the vc0703CommTool software. Choose the correct COM number of the port you link to the camera, default baudrate 115200 ,and then open the port.

**Step 4:** Click the button "Get Version" and it will reset the camera.

**Step 5:** Click the button "Fbuf" to get ready to take a picture.

1. Click "stop CFbuf" to take a picture.

2. Click "Sel File" to select the file name to store the picture.

3. Click "Read" to read the data from the buffer to store in the file selected as shown below:

    ![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/img/Serial_Camera_Picture.jpg)

4. Click "Resume" to resume frame update so you can continue to take another picture.

### Use Camera with Arduino and SD card

**Step 1**: Connected Grove - Serial Camera to Arduino board, Hardware parts include Seeeduino V3.0, SD Card Shield, SanDisk microSD™ Card 2GB, Grove - Button.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/img/Serial_Camera.jpg) -->

**Step 2**: Change the serial receive buffer(default 64 bytes) to 128 bytes. Open up hardware/arduino/cores directory, and edit the file named wiring_serial.c or HardwareSerial.cpp near the top is a #define SERIAL_BUFFER_SIZE 64, which means 64 bytes are used for the buffer. You need to change this to 128 .More details, please refer to [Arduino Hacks](http://learn.adafruit.com/arduino-tips-tricks-and-techniques/arduino-hacks).

**Step 3**: Download the [Grove - Serial Camera Library](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/res/SerialCameral_DemoCode.zip), upload it to Seeeduino. If it can't be complied, please confirm if the [SD Library](https://arduino.cc/en/Reference/SD) is in your Arduino IDE folder.

**Step 4**: Open the Serial Monitor , press the button to take picture after SD card and Camera initialization.

Resources
---------

- [VC0703 debug tool](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/res/VC0703COMTOOL.rar)
- [Manual for serial camera.pdf](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/res/Manual_for_serial_camera.pdf)
- [Grove - Serial Camera Library](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/res/SerialCameral_DemoCode.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Serial_Camera -->

## Tech Support

 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/).

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
