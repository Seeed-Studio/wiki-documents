---
description: Seeeduino v4.2
title: Seeeduino v4.2
keywords:
- Seeeduino_Series
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino_v4.2
last_update:
  date: 1/12/2022
  author: jianjing Huang
---


![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/cover.JPG)

Seeeduino v4.2 is an Open Source, Arduino-compatible ATmega328 MCU development board. We think Seeeduino v4.2 is one of the best Arduino derivatives/compatibles available. Seeeduino v4.2 is feature rich, much more stable, easy-to-use and even good looking.

Seeeduino v4.2 is based the Arduino UNO bootloader, an ATmega16U2 as a UART-to-USB converter (basically work like an FTDI USB2UART chip). The board comes with an additional set of through-hole pads for all pins. These pads are aligned to 0.1" grid. This makes it easy to solder additional pin-headers to plug into breadboard or create your own attachment/shield with 0.1" dot-matrix general purpose PCBs.

You can program the board via a micro-USB cable. Also, you can power the board via a DC Jack input (7 to 15V DC) is acceptable. There is a switch to choose the system's supply voltage either 3.3V or 5V, which is very useful if you want to set the system to 3.3V to interact with low voltage sensors.

Finally, the three on-board Grove interfaces can make your board connect to Grove modules easily. Want to make something awesome, maybe just a Seeeduino v4.2 and some Groves is enough.

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" /></a></p>

## Version

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#ccc;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#fff;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#6ab0de;}
.tg .tg-yw4l{vertical-align:top;width:20%}
.tg .tg-yw42{vertical-align:top;width:50%}
.tg .tg-4eph{background-color:#f9f9f9;}
.tg .tg-b7b8{background-color:#f9f9f9;vertical-align:top}
</style> -->

<table className="tg" align={"center"} width = {"100%"}>
  <tbody><tr>
      <th className="tg-yw4l">Product Version</th>
      <th className="tg-yw42">Changes</th>
      <th className="tg-yw4l">Released Date</th>
    </tr>
    <tr>
      <td className="tg-4eph">Seeeduino V4.0</td>
      <td className="tg-4eph">Initial</td>
      <td className="tg-b7b8">Aug 15, 2014</td>
    </tr>
    <tr>
      <td className="tg-031e">Seeeduino V4.2</td>
      <td className="tg-031e">
        1.Cancel some pad on the top left corner.<br />
        <br />
        2.Change the usb location to middle<br />
        <br />
        3.Improve DCDC circuit to get a better performance<br />
        <br />
        4.Add an I2C Grove connector<br />
        <br />
        5.Change some silkscreen and part location</td>
      <td className="tg-yw4l">Aug 24, 2015</td>
    </tr>
      <tr>
    <td>Seeeduino V4.3</td>
    <td>Change from <strong>ATMEGA328P-MU</strong> to ATMEGA328P-AU in V4.2<br />Replace the serial chip to <strong>cp2102</strong></td>
    <td>Nov. 2022</td>
  </tr>
  </tbody></table>

## Features

- Fully compatible with Arduino UNO
- ATmega328 microcontroller
- 14 Digital I/O Pins (6 PWM outputs)
- 6 Analog Inputs
- ISP Header
- Arduino UNO-R3 Shield Compatible
- Micro USB programming and power supply
- On-board Grove connectors
- 3.3/5V system operation power switch
- Additional pads aligned to 0.1" grid

## Specification

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#999;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#6ab0de;}
.tg .tg-vn4c{background-color:#D2E4FC}
.tg .tg-yw4l{vertical-align:top}
.tg .tg-6k2t{background-color:#D2E4FC;vertical-align:top}
</style> -->

<table class="tg" align={"center"} width = {"100%"}>
  <tr>
    <th class="tg-yw4l">  Parameter</th>
    <th class="tg-yw4l">  Value/Range</th>
  </tr>
  <tr>
    <td class="tg-vn4c">  DC Jack Input </td>
    <td class="tg-vn4c">  7-12V</td>
  </tr>
  <tr>
    <td class="tg-031e" rowspan="2">  DC Output Current-5V Pin </td>
    <td class="tg-031e">  With Micro USB 500mA Max</td>
  </tr>
  <tr>
    <td class="tg-vn4c">  With DC Jack Power 2000mA Max  </td>
  </tr>
  <tr>
    <td class="tg-031e">  DC Output Current-3V3 Pin  </td>
    <td class="tg-031e">  500mA Max</td>
  </tr>
  <tr>
    <td class="tg-vn4c">  DC Current per I/O Pin</td>
    <td class="tg-vn4c">  40mA</td>
  </tr>
  <tr>
    <td class="tg-031e">  Flash Memory</td>
    <td class="tg-031e">  32 KB</td>
  </tr>
  <tr>
    <td class="tg-vn4c">  RAM</td>
    <td class="tg-vn4c">  2 KB</td>
  </tr>
  <tr>
    <td class="tg-yw4l">  EEPROM</td>
    <td class="tg-yw4l">  1 KB</td>
  </tr>
  <tr>
    <td class="tg-6k2t">  Clock Speed</td>
    <td class="tg-6k2t">  16 MHz</td>
  </tr>
  <tr>
    <td class="tg-yw4l">  Dimension</td>
    <td class="tg-yw4l">  68.6mm x 53.4mm</td>
  </tr>
  <tr>
    <td class="tg-6k2t">  Weight</td>
    <td class="tg-6k2t">  26g</td>
  </tr>
</table>

## Hardware Overview

The images below show an overview of Seeeduino v4.2 hardware features. The pin-out and alternate functions of various pins of Seeeduino v4.2 are shown in the pin-out diagram. This could be used as a quick reference.

![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/hardware_seeed.png)

- **<font face="" size="5" font color="00b0f0">❶</font> USB Input:**
USB Port is used to connect the board to your PC for programming and for powering up.

- **<font face="" size="5" font color="00b0f0">❷</font> DC Input:**
The DC power jack allows your Seeeduino board to be powered from a wall adapter so that you can supply more power to your project if needed. For example, when using DC motors or other high power devices. The DC input can be 7V-15V.

- **<font face="" size="5" font color="00b0f0">❸</font> Grove Connectors:**
SeeedStudio has a variety of sensors/devices that can make use of this I2C or UART connection. In addition, we sell independent Grove connectors to help you make our own sensor connections. The I2C Grove connector is also connected to analog pin A4 and A5 for SDA and SCL respectively if you would like to use those pins instead. The UART Grove connector is connected to digital pins 0 and 1 for RX and TX respectively.

- **<font face="" size="5" font color="00b0f0">❹</font> ICSP:**
This is the ICSP connection for the ATmega328P, it is located in the standard ICSP/SPI position for Arduino Uno, Due, Mega, and Leonardo compatible hardware (e.g. shields) that may use this connector. The SPI pins in this port: MISO, SCK, and MOSI, are also connected to digital pins 12, 13, and 11 respectively just like those of the Arduino Uno.

- **<font face="" size="5" font color="00b0f0">❺</font> USB 2 Uart:**
Pinout of USB-2-Uart. These pads can be used to interact with other UART devices by putting the on-board ATmega328 in reset mode. This makes Seeeduino V4.2 to be used a USB2UART utility board.

- **<font face="" size="5" font color="00b0f0">❻</font> System Power Switch:**
Slide switch is used to change the logic level and operating voltage of the board to either 5V or 3.3V.

- **<font face="" size="5" font color="00b0f0">❼</font> Reset:**
This button is conveniently placed on the side to allow you to reset the Seeeduino board even when a shield is placed on top. This is not the case in other Arduino boards where the button is placed on top making it hard to access.

- **<font face="" size="5" font color="00b0f0">❽</font> LED-D13:**
The LED is connected to D13 pin of the board. This can be used as an on-board LED indicator for programs/sketches.

- **<font face="" size="5" font color="00b0f0">❾</font> RX/TX Indicator:**
The TX and RX LED indicators are connected to TX and RX of USB-to-UART chip. They work automatically, they let you know when the board is sending or receiving data respectively.

## Getting Started

### Hardware

- Step 1. Prepare a Seeeduino V4.2 and a Micro-USB cable.
- Step 2. Connect the Seeeduino V4.2 to your computer with the Micro-USB Cable.
Then the green power LED (labeled PWR) should go on.

![](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/connect.jpg)

:::caution

Please plug the USB cable gently, otherwise you may damage the interface.Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy.
:::

### Software

:::note
If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino)
:::

**Step 1. Install the Driver**

- **For Seeeduino V4.2**

For Windows

This drive is available for Windows XP, Windows Vista, Windows 7, Windows 8/8.1.

:::note
The driver will install automatically when we install arduino IDE at windows 10.
:::

[![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/download_driver.png)](https://github.com/Seeed-Studio/Signed_USB_Serial_Driver/archive/master.zip)

- Plug in your board and wait for Windows to begin its driver installation process. After a few moments, the process will fail, despite best efforts.
- Click on the Start Menu, and open up the Control Panel.
- While in the Control Panel, navigate to System and Security. Next, click on System. Once the System window is up, open the **Device Manager**.
- Look under Ports (COM & LPT). You should find an open port named "Seeeduino v4.2". If there is no COM & LPT section, look under "Other Devices" for "Unknown Device".
- Right click on the "Seeeduino v4.2" port and choose the "Update Driver Software" option.
- Next, choose the "Browse my computer for Driver software" option.
- Finally, navigate to and select the driver file named "seeed_usb_serial.inf"
- Windows will finish up the driver installation from there.

For Mac OSX and Linux, You don't need to install any drivers.

- **For Seeeduino v4.3**

You need to install the cp2102 driver to use the serial port of Seeeduino V4.3.

You can click [here](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/CP210x_Universal_Windows_Driver.zip) to download and unzip the Windows driver for cp2102.

If you are using another operating system, you can get the driver on the [official website](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads).

**Step 2. Launch the Arduino application.**

Double-click the Arduino application (arduino.exe) you have previously installed.

:::note
If the Arduino Software loads in a different language, you can change it in the preferences dialog. See the [Arduino Software (IDE) page](https://www.arduino.cc/en/Guide/Environment#languages) for details.
:::

**Step 3. Open the Blink example.**

Find the LED blink example sketch: **File > Examples >01.Basics > Blink**.

![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/blink.png)

**Step 4. Select your board.**

You'll need to select the entry in the **Tools > Board** menu that corresponds to your Arduino.Select the **Seeeduino v4.2**.

![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/select_board.png)

If you can not find the Seeeduino v4.2, please check [How to Add Seeed boards to Arduino IDE](https://wiki.seeedstudio.com/Seeed_Arduino_Boards/)

**Step 5. Select your serial port.**

Select the serial device of the Arduino board from the Tools | Serial Port menu. This is likely to be COM3 or higher (**COM1** and **COM2** are usually reserved for hardware serial ports). To find out, you can disconnect your Arduino board and re-open the menu; the entry that disappears should be the Arduino board. Reconnect the board and select that serial port.

![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/select_port.png)

:::note
On the Mac or Linux, this should be something with **/dev/tty.USBmodem**.
:::

**Step 6. Upload the program.**

Now, simply click the "Upload" button in the environment. Wait a few seconds - you should see the RX and TX LED indicators on the board flashing. If the upload is successful, the message "Done uploading."

A few seconds after the upload finishes, you should see the pin 13 (L) LED on the board start to blink (in orange). If it does, congratulations! You've gotten Arduino up-and-running. If you have problems, please see the troubleshooting suggestions.

![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/Seeeduino_v4_2_L.jpg)

## Application Ideas

- DIY
- IoT and Smart Home
- Robot
- Learning

Here is some funny project for your reference.

|Paper Man|Fingerprint Lock|Monitor Stand|
|-------|-------|-------|
|![](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/project1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/project2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/project3.jpg)|
| [Make it Now](https://www.instructables.com/id/Paper-Man-a-machine-created-by-Arduino-and-NFC/) | [Make it Now](https://www.instructables.com/id/Door-to-Open-Source-Hardware-A-fingerprint-lock-so/) | [Make it Now](https://www.instructables.com/id/DIY-a-Programmable-Acrylic-Monitor-Stand/)|

|Desk Promo|Tiger Machine|Colorful Pyramid|
|-------|-------|-------|
|![](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/project4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/project5.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/project6.jpg)|
| [Make it Now](https://www.instructables.com/id/Desk-promo/) | [Make it Now](https://www.instructables.com/id/How-to-Make-Your-Tiny-Tiger-Machine/) | [Make it Now](https://www.instructables.com/id/DIY-a-colorful-pyramid/)|

## FAQs

**Q1：In Ubuntu, I get the error 'avrdue: ser_open(): can't open device "dev/tty/ACM0": Permission denied'. How do I connect Seeeduino V4 to a Linux PC?**

A1： Please read the instuction [here](http://playground.arduino.cc/Linux/Debian) to make Arduino IDE work without root permission in Ubuntu. Please find below the relevant part.

**Q2: What's the difference between Arduino UNO and Seeeduino v4.2?**

A2: Seeeduino v4.2 is fully compatible with Arduino UNO. The mainly difference list below:

- Use a micro USB to power and program the board
- 3 on-board Grove connector
- 3.3/5V system power switch
- DCDC circuit instead of LDO, more efficiency
- Others circuit improve

**Q3: Error downloading <http://downloads.arduino.cc/packages/package_index.json>**

A3: Please follow below steps to solve the issue.

- Click File -> Preferences
- Click  in the url C:\Users\...\AppData\Local\Arduino15\preferences.txt at the bottom of the Preferences window.
- Delete all the files except preferences.txt, staging and packages.
- Close and reopen an IDE window and it shall work.

## Seeeduino V4.2 Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/SeeeduinoV4.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[PDF]** [Download Wiki PDF](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/Seeeduino_v4.2.pdf)
- **[Eagle]** [Seeeduino V4.2 in EAGLE file](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/SeeeduinoV4.2.zip)
- **[PDF]** [Seeeduino V4.2 in PDF](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/Seeeduino_v4.2_sch.pdf)
- **[Eagle]** [Seeeduino V4.0 in EAGLE file](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/Seeeduino_v4.0_sch.pdf)
- **[PDF]** [Seeeduino V4.0 in PDF](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/Seeeduino_v4.0_sch.pdf)
- **[Datasheet]** [ATmega328P](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/ATmega328.pdf)
- **[Datasheet]** [ATmega16U2](https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/ATmega16u2.pdf)
- **[MoreReading]** [Getting Started with Arduino](https://www.arduino.cc/en/Guide/HomePage)
- **[MoreReading]** [Arduino Language Reference](https://www.arduino.cc/en/Reference/HomePage)
- **[MoreReading]** [Download the Arduino Software(IDE)](https://www.arduino.cc/en/Main/Software)
- **[MoreReading]** [Arduino FAQ](https://www.arduino.cc/en/Main/FAQ)
- **[MoreReading]** [Arduino Introduction](https://www.arduino.cc/en/guide/introduction)
- **[MoreReading]** [Wikipedia page for Arduino](https://en.wikipedia.org/wiki/Arduino)
- **[MoreReading]** [How to fit RF Explorer 3G+ IoT modules on Seeeduino](http://j3.rf-explorer.com/60-rfe/specifications/184-rf-explorer-3g-iot-for-seeeduino)
- **[Firmware]** [How to burn the bootloader](https://files.seeedstudio.com/wiki/forum_doc/reg/seeeduino_boot.zip)

## Project

**Hacking the Stairs at Seeed's New Office**: Turn the stairs at the office into an interactive installation, and even a cool way to convey the message "STAFF ONLY" to visitors.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/stairs-hackers/hacking-the-stairs-at-seeed-s-new-office-9ef30b/embed' width='350'></iframe>

**Make an Interactive Color Matrix with Seeeduino/Arduino**: This is an interactive art project made by a Seeeduino 4.2 boards, looking good and easy to do!

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/78141/make-an-interactive-color-matrix-with-seeeduino-arduino-f9f3c0/embed' width='350'></iframe>

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<div>
  <p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
