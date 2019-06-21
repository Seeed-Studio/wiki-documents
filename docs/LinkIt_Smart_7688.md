---
name: LinkIt Smart 7688
category: LinkIt
bzurl: https://www.seeedstudio.com/LinkIt-Smart-7688-p-2573.html
oldwikiname:
prodimagename: cover.png
surveyurl: https://www.research.net/r/LinkIt_Smart_7688
sku: 102110018
---

![enter image description here](https://github.com/SeeedDocument/LinkIt_Smart_7688/raw/master/img/Linkit_Smart_product.jpg)

LinkIt Smart 7688 (a compact controller board) is an open development board, based on the OpenWrt Linux distribution and MT7688 ([datasheet](https://github.com/SeeedDocument/LinkIt_Smart_7688/raw/master/res/MT7688_datasheet.pdf)). The board is designed especially for the prototyping of Rich Application IoT devices for Smart-Home. The board offers sufficient memory and storage to enable robust video processing. The platform also offers options to create device applications in Python, Node.js and C programming languages.
This board is only a part of MediaTek LinkIt Smart 7688 platform which includes other development boards.

!!!Note
    * This page only guides you to get started with this development board. For a complete guide, please refer to [Resources](http://labs.mediatek.com/en/platform/linkit-smart-7688#HDK).

[![](https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now.png)](https://www.seeedstudio.com/LinkIt-Smart-7688-p-2573.html)  

## Features
---
*   Single input single output (1T1R) Wi-Fi 802.11 b/g/n.
*   Pin-out for GPIO, I<sup>2</sup>C, I<sup>2</sup>S, SPI, UART, PWM and Ethernet Port.
*   580 MHz MIPS CPU.
*   32MB Flash and 128MB DDR2 RAM.
*   USB host.
*   Micro SD slot.

## Application ideas
---
*   Rich application IoT Devices for Smart-Home
*   Robotics

## Specification
---
<table>
<tr>
<th>Category
</th>
<th> Feature
</th>
<th>Specification
</th></tr>
<tr>
<td rowspan="4"> MPU </td>
<td> Chipset </td>
<td> MT7688AN
</td></tr>
<tr>
<td> Core </td>
<td> MIPS24KEc
</td></tr>
<tr>
<td> Clock speed</td>
<td> 580MHz
</td></tr>
<tr>
<td> Working voltage </td>
<td> 3.3V
</td></tr>
<tr>
<td> PCB Size </td>
<td> Dimensions </td>
<td> 55.7 x 26 mm
</td></tr>
<tr>
<td rowspan="2"> Memory   </td>
<td> Flash </td>
<td> 32MB
</td></tr>
<tr>
<td>  RAM</td>
<td> 128MB DDR2
</td></tr>
<tr>
<td rowspan="2"> Power Source  </td>
<td> USB Power </td>
<td> 5V (USB micro-B)
</td></tr>
<tr>
<td>  VCC </td>
<td> 3.3V (Pin Breakout)
</td></tr>
<tr>
<td rowspan="2"> GPIO  </td>
<td> Pin Count </td>
<td> 22 (MT7688AN)
</td></tr>
<tr>
<td>  Voltage </td>
<td> 3.3V
</td></tr>
<tr>
<td rowspan="5"> PWM  </td>
<td> Pin Count</td>
<td> 4 (MT7688AN)
</td></tr>
<tr>
<td>  Voltage </td>
<td> 3.3V
</td></tr>
<tr>
<td>  Max. Resolution </td>
<td> 7 bits (customizable)
</td></tr>
<tr>
<td rowspan="2">Maximum Frequency@Resolution </td>
<td>

100kHz@1-bit,
50kHz@2-bit,
25kHz@3-bit,
12.5kHz@4-bit,
6.25kHz@5-bit,
3.125kHz@6-bit,
1.5625kHz@7-bit (Standard mode)

</td></tr>
<tr>
<td>

40MHz@1-bit,
20MHz@2-bit,
10MHz@3-bit,
5MHz@4-bit,
2.5MHz@5-bit,
1.25Mhz@6-bit,
625kHz@7-bit
(Fast mode)

</td></tr>
<tr>
<td> External Interrupts </td>
<td> Pin Count </td>
<td> 22 (MT7688AN)
</td></tr>
<tr>
<td rowspan="3"> SPI </td>
<td> Set count </td>
<td> 1 (MT7688AN)
</td></tr>
<tr>
<td>  Pin numbers </td>
<td> P22, P23, P24 (Shared with on-board flash), P25
</td></tr>
<tr>
<td>  Max. Speed </td>
<td> 25 MHz
</td></tr>
<tr>
<td rowspan="3"> SPI Slave </td>
<td> Set count </td>
<td> 1 (MT7688AN)
</td></tr>
<tr>
<td>  Pin numbers </td>
<td> P28, P29, P30, P31
</td></tr>
<tr>
<td>  Max. Speed </td>
<td> 25 MHz
</td></tr>
<tr>
<td rowspan="2"> I<sup>2</sup>S </td>
<td> Set count </td>
<td> 1 (MT7688AN)
</td></tr>
<tr>
<td>  Pin numbers </td>
<td> P10, P11, P12, P13
</td></tr>
<tr>
<td rowspan="3"> I<sup>2</sup>C </td>
<td> Set count </td>
<td> 1
</td></tr>
<tr>
<td>  Pin numbers </td>
<td> P20, P21
</td></tr>
<tr>
<td>  Speed </td>
<td> 120K/400K
</td></tr>
<tr>
<td rowspan="3"> UART Lite </td>
<td> Set count </td>
<td> 3 (MT7688AN)
</td></tr>
<tr>
<td>  Pin numbers </td>
<td> P8, P9, P16, P17, P18, P19
</td></tr>
<tr>
<td>  Max. Speed </td>
<td> 0.5Mbps
</td></tr>
<tr>
<td rowspan="3"> USB Host </td>
<td> Set count </td>
<td> 1 (MT7688AN)
</td></tr>
<tr>
<td>  Pin numbers </td>
<td> P6, P7
</td></tr>
<tr>
<td>  Speed </td>
<td> Micro-AB
</td></tr>
<tr>
<td rowspan="3"> ICommunication </td>
<td> Wi-Fi </td>
<td> 1T1R 802.11 b/g/n (2.4G)
</td></tr>
<tr>
<td>  Ethernet </td>
<td> 1-port 10/100 FE PHY
</td></tr>
<tr>
<td> Pin numbers </td>
<td> P2, P3, P4, P5
</td></tr>
<tr>
<td> User Storage </td>
<td> SD Card </td>
<td> Micro SD
SDXC

</td></tr></table>

## Hardware Overview
----
![enter image description here](https://github.com/SeeedDocument/LinkIt_Smart_7688/raw/master/img/Component_intro_with_text_1200.jpg)

![enter image description here](https://github.com/SeeedDocument/LinkIt_Smart_7688/raw/master/img/Back_hardware_view_with_text_1200_s.jpg)


!!!Note
    * In order to protect the product from improper operation, please pay attention to below notes.Choose more reliable power adapter with stable output.Recommended conditions of power input source for 7688:
      * - Overshoot voltage of power input should not over 5.5.
      * - Voltage wave should be within ±100mV of rated voltage.


###  Parts list

<table>
<tr>
<th>Parts name   </th>
<th> Quantity
</th></tr>
<tr>
<td> LinkIt<sup>TM</sup> Smart 7688  </td>
<td> 1PC
</td></tr>
<tr>
<td> Manual </td>
<td> 1PC
</td></tr></table>

## Getting started
----
###  Connect to the embedded operating system

!!!Note
    There are two ways described in the manual. Here, we only show the advanced way (using a USB to Serial adapter) which seems a little harder. But, you will benefit a lot from it in the long run.

####  Materials required

*   LinkIt Smart 7688 × 1
*   USB cable (type A to micro type-B) × 2
*   USB to Serial adapter× 1
*   Jumper wires × 3


### On Windows

**1.** Install [PuTTy](http://www.putty.org/). PuTTY provides a system console environment using SSH (Secure Socket Shell) to access development board's operating system.

**2.** Install [Bonjour](https://support.apple.com/kb/DL999?viewlocale=en_US&locale=en_US) Print Service (For Windows 7, Windows 8, Windows 10).

**3.** Install driver. If you are using a USB cable based on FTDI chip please download and install its driver from [here](http://www.ftdichip.com/Drivers/VCP.htm). If you are having problems with the latest driver, try installing an [older version](http://www.ftdichip.com/Support/Documents/InstallGuides.htm).

**4.** Next, you need to connect the Serial-to-USB cable to LinkIt Smart 7688's UART pins as shown in the following table:

| Pin on USB adapter |	Corresponding Pin to be connected on LinkIt Smart 7688 |
|-----------------------------------|--------------------------------------------------------|
| Pin RX	| Pin 8 |
| Pin TX	| Pin 9 |
| Pin GND |	Pin GND |

![enter image description here](https://github.com/SeeedDocument/LinkIt_Smart_7688/raw/master/img/LinkIt_Smart_7688_demo_connection_1200_s.jpg)

**5.** After connecting the Serial to USB cable, open the device manager and notice the COM port number as shown below. This number may vary on different computers.

![enter image description here](https://github.com/SeeedDocument/LinkIt_Smart_7688/raw/master/img/COM_port.jpg)

**6.** Launch the PuTTY terminal and enter the COM port number of the USB device found in the device manager, click on the Serial radio button, type 57600 in Speed box and click Open, as shown below.
![enter image description here](https://github.com/SeeedDocument/LinkIt_Smart_7688/raw/master/img/Putty_configuration.jpg)

**7.** Now you will see printing text as those in a Linux console.

### On Mac

**1.** Install the driver if needed. Check the cable manufacturer's website for driver requirements on Mac and installation instructions.

**2.** Plug-in the cable to PC/Laptop and connect the cable to LinkIt Smart 7688.

**3.** Open a Terminal session.

**4.** Type **ls /dev/cu*** in the Terminal. You should see a list of devices. Look for something like cu.usbserial-XXXXXXXX where XXXXXXXX is usually a random identifier. This is the serial device used to access the system console. For example:

```
$ls /dev/cu*

/dev/cu.Bluetooth-Incoming-Port

/dev/cu.Bluetooth-Modem

/dev/cu.pablop-WirelessiAP

/dev/cu.usbserial-A6YMCQBR

```

**5.** Use the screen utility to connect to the serial port and set the baudrate to 57600. This is because the baudrate of the system console is 57600 by default. For example:
```
$screen /dev/cu.usbserial-XXXXXXXX 57600
```

**6.** Now you should be connected to the system console. Press ENTER in the Terminal to bring up the prompt. You will notice that the prompt has become different from your OS X Terminal application, it is the LinkIt Smart 7688 prompt and it looks like the following:
```
  root@myLinkIt:/#
```

**7.** You are ready to make changes to the LinkIt Smart 7688 system through this console.

### On Linux

**1.** Install the driver if needed. Check the cable manufacturer's website for driver requirements on Linux and installation instructions.

**2.** Plug-in the cable and connect the cable to LinkIt Smart 7688.

**3.** Open a Terminal session.

**4.** Type **ls /dev/ttyUSB*** in the Terminal. You should see a list of devices. Look for something like cu.usbserial-XXXXXXXX where XXXXXXXX is usually a random identifier. This is the serial device used to access the system console. For example:
```
$ls /dev/ttyUSB*
/dev/ttyUSB0
```
**5.** Use the **screen** utility to connect to the serial port and set the baudrate to **57600**. This is because the baudrate of the system console is 57600 by default. For example:
```
$sudo screen /dev/ttyUSB0 57600
```
**6.** Now you should be connected to the system console. Press ENTER in the Terminal to bring up the prompt. You will notice that the prompt has become a different regular application, it is the LinkIt Smart 7688 prompt and it looks like the following:
```
  root@myLinkIt:/#
```
**7.** You are ready to make changes to the LinkIt Smart 7688 system through this console.

### Running the Blink example

#### Materials Required

* LinkIt Smart 7688 x 1
* USB cable (type A to micro type-B) x 1
* USB to Serial adapter x 1
* Jumper wires x 3

#### Get Blink RUN

**1.** Power up your board with a micro-USB cable (only connect the USB Power interface, rather than the USB Host interface).
![enter image description here](https://github.com/SeeedDocument/LinkIt_Smart_7688/raw/master/img/Power_up.jpg)

**2.** Launch PuTTy and connect to system with USB to Serial adapter as shown in previous sections.

**3.** Type **python /IoT/examples/blink-gpio44.py** and press **Enter** to run the Blink example.

!!!note
    Please note that there is 1 blank space after the first word "python", otherwise the example won't be found.

**4.** After around 2 seconds, you will notice that the Wi-Fi LED blinks steadily.

**5.** In the system console, type **CTRL + C**, this will terminate the example.

### Connect to the Internet (Switch to Station mode)

There are two kind of Wi-Fi modes: AP mode and Station mode. Refer [this](https://answers.yahoo.com/question/index?qid=20061207225409AANCN17) for the differences between them.

**1.** Power up the board with a micro-USB cable.

**2.** Open the Wi-Fi connection utility on your computer and connect to the access point named LinkIt_Smart_7688_XXXXXX. XXXXXX is a kind of hardware identifier which varies from board to board.

![enter image description here](https://github.com/SeeedDocument/LinkIt_Smart_7688/raw/master/img/Connect_wifi.jpg)

**3.** Open a browser with URL mylinkit.local/ or 192.168.100.1, set the password for root and sign in. Click Network on the upper right.

![enter image description here](https://github.com/SeeedDocument/LinkIt_Smart_7688/raw/master/img/Network_conf.jpg)

**4.** Select the Station mode and click Refresh or downward arrow on the right to find the AP to connect to. After you have selected the AP, enter password if required. Click Configure & Restart to finish as shown below. Then wait for around 30 seconds to switch mode.

![enter image description here](https://github.com/SeeedDocument/LinkIt_Smart_7688/raw/master/img/Station_mode.jpg)

**5.** Launch PuTTy and connect to the system with USB to Serial adapter as shown in the previous section.

**6.** Type ifconfig and find the IP address of inet addr as shown below:

![enter image description here](https://github.com/SeeedDocument/LinkIt_Smart_7688/raw/master/img/IFCONFIG.jpg)

!!!Note
    It will still enter the Station mode after rebooting the system. Press wi-fi button at least 5 seconds to switch back to AP mode. Note: It will be needed to reboot the embeded OS by using reboot command.

**7.** Type the IP in a new Tab of browser and you can login to Web user interface to configure the system.

**8.** Now both the host computer and LinkIt Smart 7688 are connected to internet. Type ping **www.mediatek.com** in console and you will get:

![enter image description here](https://github.com/SeeedDocument/LinkIt_Smart_7688/raw/master/img/Ping_result.jpg)

**9.** Now you can use internet to configure your system on development board.


## Demo: A Hello world example
---

!!!Note
    To avoid running out of memory during native application developments, you should setup the native application development environment in a more powerful host environment that enables you to cross-compile the executable format of the LinkIt Smart 7688 target instead. The following table shows an overview of the LinkIt Smart 7688 programming languages and the related development environments on host computer.


| Programming language | Tools and libraries                  | Applications                              | Host platforms supported |
|----------------------|--------------------------------------|-------------------------------------------|--------------------------|
| C/C++                | Cross compilation toolchain          | System programming                        | OS X Linux               |
| Python               | Python runtime on LinkIt Smart 7688  | Prototyping Network Arduino bridge library | OS X Linux Windows       |
| Node.js              | Node.js runtime on LinkIt Smart 7688 | Prototyping Network                       | OS X Linux  Windows      |

###  A Hello world example in Python

**1.** Use FileZilla and refer to this [tutorial](https://wiki.filezilla-project.org/FileZilla_Client_Tutorial_%28en%29), the server IP(replace **host name**) address is the inet addr found in previous [Switch to Station mode](https://seeeddoc.github.io/LinkIt_Smart_7688_Duo#Switch_to_Station_mode) section, the username is root and password is password you set in that section.

**2.** Open a text editor, copy and paste the below example code and save it as **helloworld.py**.
```
print "Hello World!"
```

**3.** Copy the file **helloworld.py** into system on target development environment (LinkIt Smart 7688) with FileZilla, place it under the folder **root**.

**4.** Launch PuTTy and connect to system with USB to Serial adapter.

**5.** Set working directory to **/root** and enter **python helloworld.py** to execute.

**6.** Now you can see **Hello World**! printed in console.


## FAQs

[Here](https://docs.labs.mediatek.com/resource/linkit-smart-7688/en/faq) is the FAQ from Mediatek. 

## Resources
----
* **[Eagle]** [LinkIt_Smart_7688](https://github.com/SeeedDocument/LinkIt_Smart_7688/raw/master/res/Hardware_Schematics.zip)
* **[PDF]** [LinkIt_Smart_7688 PCB](https://github.com/SeeedDocument/LinkIt_Smart_7688/raw/master/res/LinkIt%20Smart%207688%20Layout.pdf)
* **[PDF]** [LinkIt_Smart_7688 Schematic](https://github.com/SeeedDocument/LinkIt_Smart_7688/raw/master/res/LinkIt%20Smart%207688.pdf)
* **[Document]** [Manual](https://github.com/SeeedDocument/LinkIt_Smart_7688/raw/master/res/Manual.zip)
* **[Document]** [OpenWrt](http://wiki.openwrt.org/doc/howto/user.beginner)
* **[Document]** [MediaTek LinkIt? Smart 7688 Resources:](http://labs.mediatek.com/site/global/developer_tools/mediatek_linkit_smart_7688/hdk_intro/index.gsp)
* **[Document]** [Firmware_upgrade_Instruction](https://github.com/SeeedDocument/LinkIt_Smart_7688/raw/master/res/LinkIt_Smart_7688_Firmware_upgrade.zip)
* **[Document]** [Certificates](https://github.com/SeeedDocument/LinkIt_Smart_7688/raw/master/res/LinkIt_Smart_7688-Certificate.zip)
* **[Document]** [Mediatek](https://labs.mediatek.com/en/platform/linkit-smart-7688)

## Projects

**myva-Home (Voice controlled home automation)**: My Voice Activated/Controlled Home, Using the Linkit Smart and an Android with easy to use examples and libraries

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/smerkousdavid/myva-home-voice-controlled-home-automation-f4cfe3/embed' width='350'></iframe>

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>