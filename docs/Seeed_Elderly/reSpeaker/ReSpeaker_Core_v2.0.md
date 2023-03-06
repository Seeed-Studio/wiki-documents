---
description: ReSpeaker Core v2.0
title: ReSpeaker Core v2.0
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ReSpeaker_Core_v2.0
last_update:
  date: 1/11/2023
  author: jianjing Huang
---
![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ReSpeaker_V2_front.JPG)

Seeed’s ReSpeaker Core v2.0 is designed for voice interface applications. It is based on the Rockchip RK3229, a quad-core ARM Cortex A7, running up to 1.5GHz, with 1GB RAM. The board features a six microphone array with speech algorithms including DoA (Direction of Arrival), BF (Beam-Forming), AEC (Acoustic Echo Cancellation), etc.

ReSpeaker Core v2.0 runs a GNU/Linux operating system. It benefits from a powerful and active community allowing for the use of existing software and tools for development, testing, and deployment, enabling rapid product development.

ReSpeaker Core v2.0 is designed as a feature rich development board for businesses to evaluate. To this end the board consists of two main sections, the first being the center core module containing the CPU, Memory (RAM), and PMU. The second section is the outer carrier board which contains the peripherals such as the eMMC, connectors, and wireless connectivity components. Either section or both can be customized through Seeed’s customization services.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/ReSpeaker-Core-V2.0-p-3039.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

<p style={{textAlign: 'center'}}><a href="https://www.amazon.com/dp/B07DN43Q7L" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/amaon.png"  width="300" height="48"  border="0"/></a></p>

## Features

- All-in-One Solution with High Performance SoC
- 1GB RAM & 4GB eMMC
- 6 Microphone Array  
- USB OTG, USB device
- WiFi b/g/n and BLE 4.0
- Detect range: ~5 meters
- Grove socket for other sensor
- 3.5mm audio jack & JST2.0 connector
- 8 channel ADCs for 6 microphone array and 2 loopback (hardware loopback)

- Debian-based Linux system
- C++ SDK and Python wrapper
- SDK for speech algorithm with Full documents
- Speech algorithms and features:

  - Keyword wake-up
  - BF(Beam-Forming)
  - DoA (Direction of arrival)
  - NS(Noise suppression)
  - AEC (Acoustic echo cancellation) and AGC (Automatic gain control)

## Specification

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#ccc;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#fff;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#f0f0f0;}
.tg .tg-dc35{background-color:#f9f9f9;border-color:inherit;vertical-align:top}
.tg .tg-l711{border-color:inherit}
.tg .tg-us36{border-color:inherit;vertical-align:top}
.tg .tg-4646{background-color:#f9f9f9;border-color:inherit}
.tg .tg-gcw3{border-color:#000000}
</style> -->

<table className="tg">
  <tbody><tr>
      <th className="tg-gcw3" colSpan={3}>Features</th>
    </tr>
    <tr>
      <td className="tg-4646" rowSpan={6}>Soc(Rockchip RK3229)</td>
      <td className="tg-4646">CPU</td>
      <td className="tg-4646">Quad-Core Cortex-A7,up to 1.5GHz</td>
    </tr>
    <tr>
      <td className="tg-l711">GPU</td>
      <td className="tg-l711">Mali400MP, Support OpenGL ES1.1/2.0</td>
    </tr>
    <tr>
      <td className="tg-dc35">Memory</td>
      <td className="tg-dc35">1GB RAM(Core Module includes RAM and PMU)</td>
    </tr>
    <tr>
      <td className="tg-us36" rowSpan={3}>System</td>
      <td className="tg-us36">Operating Voltage:3.6-5V</td>
    </tr>
    <tr>
      <td className="tg-dc35">80 pins on-module</td>
    </tr>
    <tr>
      <td className="tg-us36">PMU on-module</td>
    </tr>
    <tr>
      <td className="tg-dc35" rowSpan={7}>Peripheral</td>
      <td className="tg-dc35">Networks</td>
      <td className="tg-dc35">WiFi b/g/n;<br />BLE 4.0;<br />Ethernet</td>
    </tr>
    <tr>
      <td className="tg-us36">USB</td>
      <td className="tg-us36">2 x USB Host;   1 x USB OTG;    1 x USB power</td>
    </tr>
    <tr>
      <td className="tg-dc35">Grove</td>
      <td className="tg-dc35">1 x Grove socket (I2C and Digital)</td>
    </tr>
    <tr>
      <td className="tg-us36">Video</td>
      <td className="tg-us36">4K VP9 and 4K 10bits H265/H264 video decode, up to 60fps</td>
    </tr>
    <tr>
      <td className="tg-dc35">Audio</td>
      <td className="tg-dc35">Max Sample Rate: 96Khz;<br />6 Microphone Array;<br />3.5mm Audio Jack;<br />JST2.0 Audio output connector</td>
    </tr>
    <tr>
      <td className="tg-us36">Storage</td>
      <td className="tg-us36">4GB eMMC on-board;<br />SD slot</td>
    </tr>
    <tr>
      <td className="tg-dc35">Others</td>
      <td className="tg-dc35">12 x RGB LEDs;<br />8 GPIO pins</td>
    </tr>
    <tr>
      <td className="tg-us36" rowSpan={2}>Power Consumption</td>
      <td className="tg-us36">Standby Mode</td>
      <td className="tg-us36">200mA /5V</td>
    </tr>
    <tr>
      <td className="tg-dc35">Work with Algorithm Mode</td>
      <td className="tg-dc35">330mA /5V</td>
    </tr>
  </tbody></table>

:::note
​    This table only lists the basic specification of ReSpeakser Core v2.0, for more professional parameters please refer to [Acoustic & Electrical Specification of ReSpeaker Core v2.0](https://files.seeedstudio.com/wiki/Respeaker_V2/res/Acoustic%26Electrical_Specification_of_ReSpeaker_Core_v2.0.pdf).
:::

## Hardware Overview

**Interface and storage**

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/hardware_overview.png)

- **<font face="" size="3" font color="ff0000">①</font> 3.5mm Headphone jack:**
Output audio. You can plug active speakers or Headphones into this port.

- **<font face="" size="3" font color="ff0000">②</font> USB OTG:**
This USB Port is used to connect to your computer via serial mode of putty (or other serial tools).

- **<font face="" size="3" font color="ff0000">③</font> USB Power Input:**
This port is used to provide power for Respeaker Core v2.0.

- **<font face="" size="3" font color="ff0000">④</font>**Speaker Jack:**
Output audio for passive speakers. Jst 2.0 Socket.

- **<font face="" size="3" font color="ff0000">⑤</font> UART:**
You also can connect the ReSpeaker Core v2.0 with your computer via this UART port.

- **<font face="" size="3" font color="ff0000">⑥</font> 8 Pins GPIO:**
General Purpose Input Output interface for extended applications.

- **<font face="" size="3" font color="ff0000">⑦</font> SD Card Slot:**
To plug in micro-SD card.

- **<font face="" size="3" font color="ff0000">⑧</font> eMMC:**
Embedded Multi Media Card. You can burn the image into eMMC, so that the ReSpeaker Core v2.0 can boot from the eMMC.

- **<font face="" size="3" font color="ff0000">⑨</font> USB Host:**
You can plug USB device, such as USB mouse,USB keyboard and USB flash disk into ReSpeaker Core v2.0 via those two USB hosts.

- **<font face="" size="4" font color="ff0000">Ⓐ</font> Ethernet:**
Access to the Internet.

- **<font face="" size="4" font color="ff0000">Ⓑ</font> HDMI:**
Output video.

- **<font face="" size="4" font color="ff0000">Ⓒ</font> Bluetooth and WIFI Antenna:**
The onboard Antenna is for WIFI and Bluetooth. Also we provide a interface for 2.4G Antenna or PCB Antenna.

- **<font face="" size="4" font color="ff0000">Ⓓ</font> Grove Socket:**
Grove Socket for digital or I2C.

**System Diagram**

You can click it to view the original image

<a href="https://files.seeedstudio.com/wiki/Respeaker_V2/img/SYS.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Respeaker_V2/img/SYS.png"/></a>

**Pin Out**

**Pin index definition for headers**

| 8 pins header | Grove Socket |
|--------------|-------------|
| ![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/GPIO.png)|![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/socketBLACK.png)|

**GPIO Pins**

MRAA| HEADER PIN INDEX | SYSFS PIN |RK3229 PIN
--|--|--|--
0 |0| 1091| GPIO2_D3
1 |1|   --| VCC
2 |2| 1043| GPIO1_B3
3 |3| 1127| GPIO3_D7
4 |4| 1017| GPIO0_C1
5 |5| 1067| GPIO2_A3
6 |6|   --| GND
7 |7| 1013| GPIO0_B5
8 |8| 1085| GPIO2_C5
9 |9| 1084| GPIO2_C4
10|10| --| VCC
11|11| --| GND

**I2C Pins**

|MRAA |HEADER PIN INDEX |SYSFS PIN| RK3229 PIN|
|--|--|--|--|
|0 |8 |-- |I2C2_SCL|
|0 |9 |-- |I2C2_SDA|

**Dimensions**

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Dimension_2.png)

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Dimension_1.png)

<iframe src="https://3dwarehouse.sketchup.com/embed.html?mid=10325e7b-718b-477f-80d1-c85f5c2289c7" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="800" height="450" allowfullscreen></iframe>

## Applications

- Smart speaker
- Intelligent voice assistant systems
- Voice recorders
- Voice conferencing system
- Meeting communicating equipment
- Voice interacting robot
- Car voice assistant
- Other scenarios need voice command

## Getting Started

### Preparation

This part will tell you :

- How to install image
- How to access the serial console
- How to set up WiFi
- How to connect to SSH & VNC
- How to set up Bluetooth
- Audio record and play test

**Prerequisites**

- ReSpeaker Core V2.0
- Wi-Fi Network
- 4GB (or more) SD card and SD card reader
- PC or Mac
- [USB To Uart Adapter](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html) (Optional)
- 5V 1A Micro USB adapter for power (Optional)
- two Micro-USB cables

:::caution
Please plug the USB cable gently, otherwise you may damage the interface.Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click <a href="https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"><b>here</b></a>to buy
:::

**Image Installation**

Similar to the Raspberry Pi, you need to install the ReSpeaker Core v2.0 image from an SD card to get up and running. We offer two ways to boot the Respeaker core v2.0. You can either boot from the SD card or boot from the eMMC.

**A. Boot from the SD card**

- **Step 1.** Click the [mirror-azure](http://respeaker.seeed.io/images/) to download our latest image zip files: ```respeaker-debian-9-lxqt-sd-********-4gb.img.xz``` or ```respeaker-debian-9-iot-sd-********-4gb.img.xz```.

|Section|Description|
|---|----|
|**iot** / **lxqt**|The **lxqt** version comes with a desktop GUI while the **iot** version does not. If you are new to ReSpeaker Core v2.0, **lxqt** version is recommended.|
|**flasher** / **sd**|The **flasher** version is used to flash the onboard eMMC, after flashing you can remove the SD card. The **sd** version will require the SD card to stay inserted all the time.|

  For development, we recommend the **lxqt + sd** version. So please download the **respeaker-debian-9-lxqt-sd-[date]-4gb.img.xz** file.

:::caution
This wiki is based on the **respeaker-debian-9-lxqt-sd-20180610-4gb.img.xz** image version.
:::

- **Step 2.** Plug the SD card into your PC or MAC with an SD card reader. You need an SD card with a capacity of more than 4G.

- **Step 3.** Click to download [Etcher](https://etcher.io/)here, and burn the ```*.img.xz``` file directly to your SD card with Etcher. Or unzip the ```*.img.xz``` file to a ```*.img``` file, then burn it to SD card with other image writing tools.
<br />
<br />Click the Plus icon to add the image you just download, the software will automatically select the SD card you plug.Then click Flash! to start burning. It will take about 10 minutes to finish.

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/v2-flash-sd.png)

- **Step 4.** After writing the image to the SD card, insert the SD card in your ReSpeaker Core v2.0. Power the board using the PWR_IN micro usb port and DO NOT remove the SD card after powering on. ReSpeaker Core v2.0 will boot from the SD card, and you can see USER1 and USER2 LEDs light up. USER1 is typically configured at boot to blink in a heartbeat pattern and USER2 is typically configured at boot to light during SD card accesses. Now, you should go to the next part: Serial Console.

**B. Boot from the eMMC**

There is no firmware in the EMMC when leaving the factory, you can flash the ReSpeaker image files to the ReSpeaker's eMMC (onboard flash memory) by using your PC or Mac. Then the ReSpeaker will boot from it's eMMC (onboard flash memory) and not from the SD card.

- **Step 1.** Download our latest image zip file ```respeaker-debian-9-iot-flasher-********-4gb.img.xz``` or ```respeaker-debian-9-lxqt-flasher-********-4gb.img.xz``` at mirror-azure. The lxqt version comes with Debian desktop and the iot version does not. And the flasher version is for flashing eMMC, and the sd version is for booting from SD card.

- **Step 2.** Burn the ```*.img.xz``` file directly to SD card with Etcher, or unzip the ```*.img.xz``` file to a ```*.img``` file, then burn it to SD card with other image writing tools.

- **Step 3.** After burning SD card, insert the SD card in the ReSpeaker Core v2.0. Power the board using the PWR_IN micro usb port and do not remove the SD card while it's flashing.

During the flashing process, you'll see the USER1 and USER2 LEDs blink alternately. It will take about 10 minutes to complete. When the LEDs turn off, you can power off the board, pull out the SD card and power again. If the LEDs light up, that means the image was flashed to the eMMC correctly.

You can also check the image version with this command: cat /etc/issue.net.

**Serial Console**

Now your ReSpeaker Core v2.0 can boot, you might want to get access to the Linux system via a console, to setup the WiFi, etc. You have two ways to get the console:

- A. The OTG USB port - This requires a running Linux system on the board

- B. The UART port - This is the hard way to access the console, it can be used for debugging low level issues

**A. Connection via OTG**

- **Step 1.** Find a micro USB cable, and please make sure it's a data cable (not just a power cable), plug the micro USB end to the ReSpeaker's **OTG** micro USB port (There're two micro USB ports on the ReSpeaker board, which are labeled with different silk-screen, one is **PWR_IN** and another is **OTG**), then plug another end of this cable into your computer.

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/lianjiediannan.jpg)

- **Step 2.** Check at your computer if the serial port has risen:

  - Windows: check the device manager, there should be new serial deviced named ```COMx``` which x is an increasing number. If you use windows XP/7/8, maybe you need install [windows CDC drivers](https://github.com/respeaker/get_started_with_respeaker/blob/master/files/ReSpeaker_Gadget_CDC_driver.7z).
  - Linux: `ls /dev/ttyACM*`, you should get ```/dev/ttyACMx``` where x will vary depending on which USB port you used.
  - Mac: `ls /dev/cu.usb*`, you should get ```/dev/cu.usbmodem14xx``` where xx will vary depending on which USB port you used.

- **Step 3.** Use your favorite serial debugging tool to connect the serial port, the serial has: 115200 baud rate, 8Bits, Parity None, Stop Bits 1, Flow Control None. For examples:

  - Windows: use [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), select ```Serial``` protocol, fill in the correct COM port of ReSpeaker Core v2.0, ```115200``` baud, 8Bits, Parity None, Stop Bits 1, Flow Control None.
  - Linux: Depend on your USB To TTL Adapter, it could be ```screen /dev/ttyACM0(,1, and so on)``` 115200 or ```screen /dev/ttyUSB0(,1, and so on) 115200```
  - Mac: Depend on your USB To TTL Adapter, it could be ```screen /dev/cu.usbserial1412(,1422, and so on) 115200``` or ```screen /dev/cu.usbmodem1412(,1422, and so on) 115200```

- **Step 4.** The default user name is ```respeaker```, and password is ```respeaker``` too.

**B. Connection via The UART port**

In this section we will guide you how to establish a connection from your computer to your ReSpeaker using your USB to TTL adapter which will be connected to the ReSpeaker's Uart port (Uart port located just to the left of the ReSpeaker speaker plug).

- **Step 1.** Connect Uart port and your PC/Mac with an USB To TTL Adapter. Note that the voltage of RX/TX are 3.3V. If you don't have an USB To TTL Adapter, you can click [here](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html) to get one.

- **Step 2.** Use the following Serial debugging tools with 115200 baud:
  - Windows: use [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), select ```Serial``` protocol, fill in the correct COM port of ReSpeaker Core v2.0, 115200 baud, 8Bits, Parity None, Stop Bits 1, Flow Control None.
  - Linux: Depend on your USB To TTL Adapter, it could be ```screen /dev/ttyACM0(,1, and so on) 115200``` or ```screen /dev/ttyUSB0(,1, and so on) 115200```.
  - Mac: Depend on your USB To TTL Adapter, it could be ```screen /dev/cu.usbserial1412(,1422, and so on) 115200``` or ```screen /dev/cu.usbmodem1412(,1422, and so on) 115200```.

- **Step 3.** The login user name is respeaker, and password is respeaker too.

- **Step 4.** If you do not have a USB to TTL Adapter, you may also use an Arduino. If using an Arduino, connect one end of a jumper wire to the RESET pin on the Arduino and the other end to the GND pin on the Arduino. This will bypass your Arduino's ATMEGA MCU and turn your Arduino into a USB to TTL adapter, see video tutorial [here](https://www.youtube.com/watch?v=qqSLwK1DP8Q). Now connect the GND pin on the Arduino to the GND pin on the Uart port of the Respeaker. Connect the Rx pin on the Arduino to the Rx pin on the Uart port of the Respeaker. Connect the Tx pin on the Arduino to the Tx pin on the Uart port of the Respeaker. And lastly, connect the Arduino to your PC/Mac via the Arduino's USB cable. Now check that your Mac or Linux PC finds your Arduino by typing this command:

```
ls /dev/cu.usb* (Mac)
ls /dev/ttyACM* (Linux)
```

You should get back something like:

```
/dev/cu.usbmodem14XX where XX will vary depending on which USB port you used (on Mac)
/dev/ttyACMX where X will vary depending on which USB port you used  (on Linux)
```

Now follow step 2 above to connect to your Respeaker over this serial connection. And note this is a one time procedure as you'll next setup your Respeaker for Wi-Fi connectivity and then connect via ssh or VNC going forward.

**Network Setting Up**

**A. Wi-Fi Setting Up**

Configure your ReSpeaker's network with the Network Manager tool, nmtui. nmtui will already be installed on the ReSpeaker image.

```
sudo nmtui              # respeaker user needs sudo
```

Then you will see a config page like this, select ```Activate a connection``` and press ```Enter``` key.

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/nmtui1-1.png)

Select your Wi-Fi for ReSpeaker v2.0, press ```Enter``` key and type your Wi-Fi password and press ```Enter``` key again. When you see a ```*``` mark, it means that your ReSpeaker has successfully connected to your Wi-Fi network. Tap ```Esc``` key twice to leave the network manager config tool.

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/nmtui1-2.png)

Now find the IP address of your ReSpeaker by using the command below.

```
ip address
```

In the example below, we can see that this ReSpeaker's IP address is ```192.168.7.108```

```
root@v2:/home/respeaker# ip address

1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: sit0@NONE: <NOARP> mtu 1480 qdisc noop state DOWN group default qlen 1
    link/sit 0.0.0.0 brd 0.0.0.0
3: wlan0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether e0:76:d0:37:38:6d brd ff:ff:ff:ff:ff:ff
    inet **192.168.7.108**/24 brd 192.168.7.255 scope global dynamic wlan0
       valid_lft 604332sec preferred_lft 604332sec
    inet6 2601:647:4680:ebf0:ec0a:5965:e710:f329/64 scope global noprefixroute dynamic
       valid_lft 345598sec preferred_lft 345598sec
    inet6 fe80::64de:cac8:65ef:aac8/64 scope link
       valid_lft forever preferred_lft forever
```

In addition to the Networ Manager GUI interface, Network Manager also has a command line tool. If you are connecting to a hidden Wi-Fi network, you'll need to use this command line tool:

```
nmcli c add type wifi con-name mywifi ifname wlan0 ssid your_wifi_ssid
nmcli con modify mywifi wifi-sec.key-mgmt wpa-psk
nmcli con modify mywifi wifi-sec.psk your_wifi_password
nmcli con up mywifi
```

**B. Ethernet Connectivity**

You can connect to a network using an Ethernet cable. Just plug the Ethernet cable which has connected to the Internet will be OK.

**Connect to SSH & VNC**

**A. SSH**

SSH server starts automatically in ReSpeaker v2.0. For Windows Users, third-party SSH clients are available. For Linux/Mac Users, SSH client is built in.

- Windows: Use PUTTY, select SSH protocol, fill in correct IP address and click open. Login as respeaker user and password is respeaker too.

- Linux/Mac:

```
ssh respeaker@192.168.***.***
// password: respeaker
```

:::note
Note that if experience slow performance using SSH, please switch to a less crowded WiFi network.
:::

**B. VNC**

In order to acquire the authorization from Alexa, you need to use VNC Viewer. The system has VNC server built-in. The VNC server will launch the **lxqt** desktop GUI which is a lightweight Qt desktop environment.
The VNC service also starts automatically. Use [VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/) or [VNC Viewer for Google Chrome](https://chrome.google.com/webstore/detail/vnc%C2%AE-viewer-for-google-ch/iabmpiboiopbgfabjmgeedhcmjenhbla?hl=en) to connect to the desktop of ReSpeaker Core v2.0.

To use VNC, connect your PC/Mac and ReSpeaker v2.0 to the same Wi-Fi network. Then open VNC Viewer, type ```192.168.xxx.xxx``` at the address bar. ```192.168.xxx.xxx``` is IP address of the board，you can use the command **ifconfig** to check. If you meet ```Unencrypted connection```, click Continue to go on. The password is ```respeaker```.

![](https://user-images.githubusercontent.com/5130185/34665797-93b222d6-f49c-11e7-8112-704f91163038.png)

:::note
Please note that the VNC connection relies on good quality of the network, please have a mental preparation that you will probably get very low refresh rate of the VNC display.
:::

**Connect to Speaker or Headset**

The board uses the built-in codec of the SOC to render playback. Both the JST speaker port and the headset port are driven by their own amplifier, and both amplifiers are connected to the same codec of the SOC. The sound card driver that SEEED implemented drives both the capture device and the playback device. So there's no discrete capture or playback sound card in ALSA device list. They're all named seeed-8mic-voicecard.

The simplest way to heard sound from the board is to plugin a headset. If you prefer loud speaker, the board can output up to 8W of drive capability.

**Bluetooth Setting Up**

**Activate the bluetooth**

Please tap the commands below to update and activate the Bluetooth of ReSpeaker Core v2.0:

```
sudo apt update
sudo apt-mark hold firefox 
sudo apt upgrade
```

:::note
If update fails, please change to another WiFi with good network condition and do the update again.
:::

Then activate the bluetooth by the command:

```
sudo systemctl enable bt-auto-connect.service
sudo reboot -f
```

**Using the ReSpeaker Core v2.0 as a Bluetooth Speaker-Slave Device**

When the ReSpeaker Core v2.0 restart, open the bluetooth of your phone or computer, you will find a bluetooth device called **ReSpeaker-xxxx**.
Choose and connect to it. Plug a speaker or headset into the ReSpeaker Core v2.0 then play music and enjoy your bluetooth speaker.

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Bluetooth_connect.png)

**Using the ReSpeaker Core v2.0 as a Bluetooth Player-Master Device**

In addition to just working as a bluetooth speaker, it can also serve as a bluetooth player to hack your bluetooth headset or bluetooth speaker.
OK, let's hacking.

- **Step 1.** Tap `bluetoothctl` to open the bluetooth shell.

- **Step 2.** Tap `scan on` to scan your bluetooth device.

- **Step 3.** When the ReSpeaker Core v2.0 find your target device, tap `scan off`.
For this wiki, say, MDR-1000X headset is our target, mark the device ID Device `04:5D:4B:81:35:84`.

```
respeaker@v2:~$ bluetoothctl
[NEW] Controller 43:43:A0:12:1F:AC ReSpeaker-1FAC [default]
Agent registered
[bluetooth]# scan on
Discovery started
[CHG] Controller 43:43:A0:12:1F:AC Discovering: yes
[NEW] Device C8:69:CD:BB:9B:B3 C8-69-CD-BB-9B-B3
[NEW] Device E1:D9:68:0E:51:C0 MTKBTDEVICE
[NEW] Device 62:15:9C:3F:40:AA 62-15-9C-3F-40-AA
[NEW] Device 56:AF:DE:C0:34:25 56-AF-DE-C0-34-25
[NEW] Device B8:86:87:99:FB:10 SOLARRAIN
[CHG] Device B8:86:87:99:FB:10 Trusted: yes
[NEW] Device 04:5D:4B:81:35:84 MDR-1000X
[CHG] Device 04:5D:4B:81:35:84 Trusted: yes
[CHG] Device 4C:04:59:38:D3:25 ManufacturerData Key: 0x004c
[CHG] Device 4C:04:59:38:D3:25 ManufacturerData Value:
  10 05 0b 10 99 18 0a                             .......
[bluetooth]# scan off
[CHG] Device 04:5D:4B:81:35:84 RSSI is nil
[CHG] Device B8:86:87:99:FB:10 TxPower is nil
[CHG] Device B8:86:87:99:FB:10 RSSI is nil
[CHG] Device 4C:04:59:38:D3:25 RSSI is nil
[CHG] Device 58:44:98:93:35:24 RSSI is nil
Discovery stopped
[bluetooth]#

```

- **Step 4.** Now using the command `pair + device ID` to match bluetooth device with the ReSpeaker Core v2.0.

- **Step 5.** When you see the messega `Pairing successful`, tap `connect + device ID`.

```
[bluetooth]# pair 04:5D:4B:81:35:84
Attempting to pair with 04:5D:4B:81:35:84
[CHG] Device 04:5D:4B:81:35:84 Connected: yes
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 00001108-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000110b-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000110c-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000110e-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000111e-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 ServicesResolved: yes
[CHG] Device 04:5D:4B:81:35:84 Paired: yes
Pairing successful
[CHG] Controller 43:43:A0:12:1F:AC Discoverable: no
[CHG] Device 04:5D:4B:81:35:84 ServicesResolved: no
[CHG] Device 04:5D:4B:81:35:84 Connected: no
[CHG] Controller 43:43:A0:12:1F:AC Discoverable: yes
[bluetooth]# connect 04:5D:4B:81:35:84
Attempting to connect to 04:5D:4B:81:35:84
[CHG] Device 04:5D:4B:81:35:84 Connected: yes
Connection successful
[CHG] Device 04:5D:4B:81:35:84 ServicesResolved: yes
[CHG] Controller 43:43:A0:12:1F:AC Discoverable: no
[MDR-1000X]#
```

If `Connection successful` pops up, configuration!

You can tap `exit` or `quit` to exit the shell, then use the commands below to test your bluetooth device.

```
arecord bluetoothtest.wav
aplay bluetoothtest.wav

```

**Record and Play**

**1.Test via ALSA**

As this is a technical documentation of development phase, the index of the sound device may change along versions. So check out the correct device index first with the following commands:

```
respeaker@v2:~$ arecord -l
**** List of CAPTURE Hardware Devices ****
card 0: seeed8micvoicec [seeed-8mic-voicecard], device 0: 100b0000.i2s1-ac108-pcm0 ac108-pcm0-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0

respeaker@v2:~$ aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: seeed8micvoicec [seeed-8mic-voicecard], device 1: 100b0000.i2s1-rk3228-hifi rk3228-hifi-1 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0

```

Find the sound card whose name has **seeed** prefix. For the example above, the capture device is **hw:0,0**, which means card **0**/device **0**.
The playback device is **hw:0,1**, which means card **0**/device **1**.. Then test recording and playing sound with the following commands:

```
# record & playback 2 channels audio
arecord -Dhw:0,0 -f S16_LE -r 16000 -c 2 hello.wav
aplay -Dhw:0,1 -r 16000 -c 2 hello.wav

# If you want to output the sound by the bluetooth device, you need to use the command below to play
aplay -r 16000 -c 2 hello.wav

# record 8 channels audio
# there are 6 microphones on board, and ac108 compose the 2 remaining channels.
arecord -Dhw:0,0 -f S16_LE -r 16000 -c 8 hello_8ch.wav
```

Besides you can record and play at the same time.

```
arecord | aplay
```

**2. Test via PulseAudio**

First check whether the PulseAudio is running:

```
respeaker@v2:~$ ps aux|grep pulse|grep -v grep
respeak+  1109  0.0  0.7 363272  7932 ?        S<l  01:01   0:00 /usr/bin/pulseaudio --start --log-target=syslog
```

If it's not, please refer to PulseAudio's documentation to enable the auto-spawn of PulseAudio. Then test via:

```
parecord --channels=8 --rate=16000 --format=s16le hello2.wav
paplay hello2.wav
```

Further more, the default ALSA device now hooks to PulseAudio, so using the following commands also plays/records sound via PulseAudio:

```
arecord -v -f cd hello3.wav
aplay hello3.wav
```

So far we learned the basic operations of the ReSpeaker Core v2.0 board, let's move forward. We can use ReSpeaker Core v2.0 to build our own AVS(Alexa Voice Service) device or Dueros(Voice assistance of Baidu) device.

## Play with Wio Link

Please follow [ReSpeaker Core V2 & Wio Link Tutorial](https://wiki.seeedstudio.com/ReSpeaker_Core_V2_&_Wio_Link/) to use the ReSpeaker Core V2 to control Wio Link through IFTTT.

<iframe width="800" height="450" src="https://www.youtube.com/embed/OJ0i6QrZCSM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Play with GPIO

This part will introduce how to use **MRAA** and **UPM** to control GPIO and Grove Socket on Respeaker Core v2.0.

- **Step 1. Update MRAA and UPM libraries to latest version**

At first, we need to install the latest MRAA and UPM packages.

```
sudo apt install  python-mraa python-upm libmraa1 libupm1 mraa-tools
```

- **Step 2. Check your platform information**

```
#only have bus 0 and id=03(/dev/i2c-3), 0 is the i2c number for mraa and upm
respeaker@v2:~$ mraa-i2c list
Bus   0: id=03 type=linux

#mraa gpio numbers and system gpio numbers and it's pinmux
respeaker@v2:~$ mraa-gpio list
00      GPIO91: GPIO
01         VCC:
02      GPIO43: GPIO
03     GPIO127: GPIO
04      GPIO17: GPIO
05      GPIO67: GPIO
06         GND:
07      GPIO13: GPIO
08    I2C2_SCL: I2C  
09    I2C2_SDA: I2C  
10         VCC:
11         GND:
12      GPIO66: GPIO
```

The description of the PIN defines for the ReSpeaker Core v2.0 board please refer to [Pin Out](#)

- **Step 3. Demos with MRAA or UPM**

**A. Use MRAA Library**

**Control GPIO Directly**

Materials

| ReSpeaker Core v2.0 |  Grove - Buzzer |
|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ReSpeaker_V2_back_little.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Buzzer.png)|
|[Get ONE Now](https://www.seeedstudio.com/ReSpeaker-Core-V2.0-p-3039.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|

Connect the Grove PIR sensor's **SIG** pin to the ReSpeaker Core v2.0's header pin **0** with jumper. Don't forget to wire the VCC and GND at the same time. Then tap the code below into your console

``` python
respeaker@v2:~$ python
Python 2.7.13 (default, Jan 19 2017, 14:48:08)
[GCC 6.3.0 20170118] on linux2
Type "help", "copyright", "credits" or "license" for more information.
>>> import mraa
>>> x = mraa.Gpio(0)
>>> x.dir(mraa.DIR_OUT)
0
>>> x.write(0)
0
>>> x.write(1)
0
>>>
```

When you tap **x.write(1)**,you will heard a scream from the buzzer.

**PIR Motion Sensor example**

Materials

| ReSpeaker Core v2.0 |  Grove -  PIR Motion Sensor |
|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ReSpeaker_V2_back_little.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Grove%20-%20PIR%20Motion%20Sensor.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/ReSpeaker-Core-V2.0-p-3039.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html)|

In this example, we're gonna to listen on the trigger of the Grove PIR sensor, in Python code.
Connect the Grove PIR sensor's **D1** pin to the ReSpeaker Core v2.0's header pin **0** with jumper. Don't forget to wire the VCC and GND at the same time.
Then copy the code below into a new file and save it as a python file, name as **mraa_pir.py**. Copy this file into your ReSpeaker Core v2.0.

``` python
import mraa

def on_trigger(gpio):
    print("pin " + repr(gpio.getPin(True)) + " = " + repr(gpio.read()))

pin = 0

try:
    x = mraa.Gpio(pin)
    print("Starting ISR for pin " + repr(pin))
    x.dir(mraa.DIR_IN)
    # respeaker v2 only support EDGE_BOTH
    x.isr(mraa.EDGE_BOTH, on_trigger, x)
    var = raw_input("Press ENTER to stop")
    x.isrExit()
except ValueError as e:
    print(e)

```

Then run the code with the command below.(make sure you have located in the folder which contains the mraa_pir.py you've just saved)

``` python
sudo python mraa_pir.py
```

The result will be like

```
$ sudo python mraa_pir.py
Starting ISR for pin 0
Press ENTER to stoppin 1091 = 0
pin 1091 = 0
pin 1091 = 1
...
```

**B. Use UPM Library**

The UPM project implements sensors' driver based on the MRAA library, so we no longer need to care about the GPIO programming or what the I2C address of a sensor, all the default informations and logics for a particular sensor has been wrapped into a UPM library. UPM has supported bunch of sensors. <https://iotdk.intel.com/docs/master/upm/modules.html>. But please note that we didnt confirm every sensor works on the ReSpeaker Core v2.0.

**Example for Grove Digital Light Sensor**

Materials

| ReSpeaker Core v2 |  Grove - Digital Light Sensor |
|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ReSpeaker_V2_back_little.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Digital_Light_Sensor.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/ReSpeaker-Core-V2.0-p-3039.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html)|

This is an example for the Grove Digital Light Sensor, which is copied from the UPM github repo.

Please plug the PIR Motion Sensor into your Respeaker Core v2.0 via the Grove socket.
Then copy the code below into a new file and save it as a python file, name as **tsl2561.py**. Copy this file into your ReSpeaker Core v2.0.

``` python
#!/usr/bin/env python
# Author: Zion Orent <zorent@ics.com>
# Copyright (c) 2015 Intel Corporation.
#
# Permission is hereby granted, free of charge, to any person obtaining
# a copy of this software and associated documentation files (the
# "Software"), to deal in the Software without restriction, including
# without limitation the rights to use, copy, modify, merge, publish,
# distribute, sublicense, and/or sell copies of the Software, and to
# permit persons to whom the Software is furnished to do so, subject to
# the following conditions:
#
# The above copyright notice and this permission notice shall be
# included in all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
# EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
# MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
# NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
# LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
# OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
# WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

from __future__ import print_function
import time, sys, signal, atexit
from upm import pyupm_tsl2561 as upmTsl2561

def main():
    # Instantiate a digital light sensor TSL2561 on I2C
    myDigitalLightSensor = upmTsl2561.TSL2561()

    ## Exit handlers ##
    # This function stops python from printing a stacktrace when you hit control-C
    def SIGINTHandler(signum, frame):
        raise SystemExit

    # This function lets you run code on exit, including functions from myDigitalLightSensor
    def exitHandler():
        print("Exiting")
        sys.exit(0)

    # Register exit handlers
    atexit.register(exitHandler)
    signal.signal(signal.SIGINT, SIGINTHandler)

    while(1):
        print("Light value is " + str(myDigitalLightSensor.getLux()))
        time.sleep(1)
if __name__ == '__main__':
    main()
```

The result should be something like:

``` python
respeaker@v2:~$ python tsl2561.py       
Light value is 0
Light value is 38
Light value is 20
Light value is 54
Light value is 13
Light value is 44
Light value is 31  
```

## FAQs

**Q1: How to record and play with Audacity?**

  **A1:** The **lxqt** version has pre-installed Audacity, Please click the **Bird button** at the lower left corner, and you will find it at the **Sound & Video -> Audacity**.

  When you opened the Audacity, please click the little black arrow to choose the record and play device and set as the picture below.

  ![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/audacity.png)

  You should choose Seeed-8mic-voicecard for both record and play device. And you can choose 1/2/4/6/8 channels to record and play. As you can see,
  there are 8 channels in the picture, however there are no data in channel 7 and 8. That is because this two channels are the playback channel.
  The channel 7 is for 3.5mm Headphone and the channel 8 for the JST2.0 Speaker (If you do not have a JST cable, you can use jumpers as well). Say, we use JST Speaker:

- Step 1. Set as the picture above, click the **Record** button, record a period audio.
- Step 2. Click the **Stop** button, then you will see channel 7 and 8 are empty.
- Step 3. Click **Record** button again, this time you will find Channel 8 changed.

  ![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/audacity_playback.png)

**Q2: How to access the AP of ReSpeaker Core v2.0?**

**A2:** You can use two wires cable to power the ReSpeaker Core v2.0. When the system is running, the Respeaker Core v2.0 can act as an AP. You can use your computer to
access this AP. As the picture show. You can follow the steps to configure the WiFi of ReSpeaker Core v2.0.

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Ap.png)

- **Step 1.** Tap the command below to activate the Ap of ReSpeaker Core v2.0.

```
sudo systemctl enable re-wifi.service
sudo reboot -f

```

- **Step 2.** Access the AP of ReSpeaker Core v2.0. After the ReSpeaker Core v2.0 restarts, use your phone or computer to search the WiFi. You will find the AP name is something like
   **ReSpeaker_xxxx**, the user is **respeaker**, the password is **respeaker** too.

- **Step 3.** Now you can use Putty, SSH mode to get into the Serial Console. The ip of the Wlan1 is **192.168.42.1**, you need to use this ip to setup connection.
And the user name of ReSpeaker Core v2.0 is **respeaker**, the password is **respeaker**.

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/AP2.png)

- **Step 3.** When you get into the Serial Console， you can [setup the WiFi](https://wiki.seeedstudio.com/ReSpeaker_Core_v2.0/#a-wi-fi-setting-up)

**Q3: How to adjust the volume?**

**A3:** You can use Alsamixer to adjust the playback volume and capture sensitivity.

- **Step 1.** Tap the following code to open Alsamixer:

```
alsamixer
```

- **Step 2.** Press **F6** on your keyboard to choose **Seeed-8mic-voicec** card.
- **Step 3.** You will find the interface as the picture below. You can choose the playback voice or record channel by pressing **Right** or **Left** key.
And you can adjust the value by pressing the **Up** or **Down** key.

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/Alexamixer.png)

**Q4: How to use the user button?**
**A4:** As you can see, there is an user button at the back of ReSpeaker Core v2.0. Here we provide a python demo to show how to use it.

- **Step 1.** Tap the command below:

```
sudo pip install evdev
```

- **Step 2.** Copy the code below and save it as a python file, let's name it **usrer_button.py**.

```
from evdev import InputDevice,categorize,ecodes

key = InputDevice("/dev/input/event0")
for event in key.read_loop():
    if event.type == ecodes.EV_KEY:
        print(categorize(event))
```

- **Step 3.** Tap the following command to run this demo.

```
sudo python usrer_button.py
```

Then you will see the result is something like that:

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/userbutton.png)

**Q5: The computer can not recognize the ReSpeaker Core v2.0, driver problem?**

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/CDC_Driver.png)

**A5:** This may happen when you connect the ReSpeaker Core v2.0 with you computer via OTG or UART.
This is because the CDC Serial driver has a conflict with other OTG driver. Please uninstall the conflicted driver
 and connect the ReSpeaker Core v2.0 again.

**Q6: What if I want to use the external antenna?**

**A6:** The ReSpeaker Core v2.0 use **AP6212** to provide both WiFi and Bluetooth, they share the same antenna.
Instead of the on-board antenna, you can use an external antenna. To do so, you need to remove one resistance and solder it
on the new pads, as shown below：

- First you need to remove the resistance in the orange box.
- Then please solder it on the green box.

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/ant.png)

**Q7: How to build my owner flasher firmware? So I can burn my owner firmware to rest of ReSpeaker Core v2.0.**

**A7:** please run the image builder on RAM>2G ARM debian system.

Here are the detail instructions.

- Step 1. git clone <https://github.com/respeaker/image_builder>
- Step 2. modify the upload path @ /publish/respeaker.io_stable.sh
- Step 3. sudo ./publish/respeaker.io_stable.sh

**Q8: When plug the burned SD card to ReSpeaker Core v2.0, there is no COM port in device manager and no display on HDMI interface.**

**A8:** Please use the USb to TTL adaptor to connect to UART directly, you will see the below errors.

```
[    2.119560] mmcblk0: timed out sending SET_BLOCK_COUNT command, card status 0x400900
[    2.128134] mmcblk0: command error, retrying timeout
```

The root cause is that the old SD cards do not work with linux system. Please change to recent SD cards, which supports all the eMMC commands, such as ScanDisk Ultra.

## Resources

- **[Algorithms]** [Audio front-end processing algorithms including AEC, Beamforming, NS and KWS](https://github.com/respeaker/respeakerd)
- **[Google Assistant]** [Google Assistant Demo](https://github.com/respeaker/googleassistant_respeakerd)
- **[Microsoft]** [Microsoft Speech Translation Demo](https://github.com/respeaker/Python-Speech-Translate)
- **[Pixel]** [RGB LEDs library](https://github.com/respeaker/pixel_ring)
- **[PDF]** [Download PDF of This Wiki](https://files.seeedstudio.com/wiki/Respeaker_V2/res/ReSpeaker_Core_v2.pdf)
- **[PDF]** [Rockchip RK3229 Datasheet V1.1](https://files.seeedstudio.com/wiki/Respeaker_V2/res/Rockchip%20RK3229%20Datasheet%20V1.1%2020151209.pdf)
- **[PDF]** [Dimensions for Board](https://files.seeedstudio.com/wiki/Respeaker_V2/res/ReSpeaker_Core_v2_Demensions.pdf)
- **[ZIP]** [3d Models For ReSpeaker Core v2.0](https://files.seeedstudio.com/wiki/Respeaker_V2/res/Respeaker_Core_v2_3D_SKP.zip)
- **[ZIP]** [ReSpeaker Core v2.0 Case](https://files.seeedstudio.com/wiki/Respeaker_V2/res/RESPEAKER_CORE_V2_Box.zip)
- **[DXF]** [ReSpeaker Core v2.0 Stand](https://github.com/respeaker/get_started_with_respeaker/raw/8111196e821fec10c65b00d96cf011dc90111546/files/RESPEAKER_CORE_V2_CASE.dxf)
- **[PDF]** [ReSpeaker Core v2.0 Stand Assembly drawing](https://files.seeedstudio.com/wiki/Respeaker_V2/res/ReSpeaker_Core_v2.0_case_Assembly.pdf)
- **[PDF]** [Acoustic & Electrical Specification of ReSpeaker Core v2.0](https://files.seeedstudio.com/wiki/Respeaker_V2/res/Acoustic%26Electrical_Specification_of_ReSpeaker_Core_v2.0.pdf)
- **[MoreReading]** [Mraa Python documents page](http://iotdk.intel.com/docs/master/mraa/python/)
- **[MoreReading]** [Intel Mraa SDK](https://software.intel.com/en-us/mraa-sdk/documentation )
- **[MoreReading]** [Snips SDK](https://snips.gitbook.io/documentation/installing-snips/respeaker-core-2.0)
- **[Source Code]** [ReSpeaker Core v2.0 source code](https://github.com/respeaker/rk-linux-develop)

## Projects

**ReSpeaker Core v2.0 - Alexa Demo**

In this demo, we use ReSpeaker Core v2.0 to talk with Alexa. You can ask any question and talk with ReSpeaker Core v2.0 just like a friend. Moreover, this product can work with google Assistant and Bing as well. The hotword is Snowboy, and of cause you can make your own  wake up word.

<iframe width="800" height="450" src="https://www.youtube.com/embed/q7b8iLqRiPY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<br />

**ReSpeaker Core v2.0 - Wake Up Distance Test**

In this demo, we've tested the wake-up distance of ReSpeaker Core v2.0. We use the Alexa with the hot word Snowboy. As you can see in the screen, the ''Alexa:status  code 204" means wake up the Alexa successfully.

With advanced algorithms and six high-quality microphones, the result is amazing! We can wake the ReSpeaker Core v2.0 up 16 meters(52Ft) away!

<iframe width="800" height="450" src="https://www.youtube.com/embed/PpcwvOLlpEw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

**ReSpeaker Core v2.0 - Voice Reception System**

This smart system consists of a voice assistant (ReSpeaker Core v2.0) and a phone assistant (Linklt One). As you can see, when a visitor tells the voice assistant the name of the person he is looking for, the little smart assistant will recognize and search the person in its database. If there is a matched name, our assistant will call him. And when the person confirms the visitor's ID, he just need to send the message "Open" to open the door so that the visitor can walk in.

How about having such a voice reception system in front of your house or work space? Isn’t it cool?

<iframe width="800" height="450" src="https://www.youtube.com/embed/tdIsCRXKoVI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
<br />

**ReSpeaker Core v2.0 - Simple Voice Reception System**

The basic function of the reception service is to greet visitors, make them feel welcome and prevent unauthorized access to the office. We leverage the ReSpeaker Core v2.0 functions to design a Voice Reception Service. The system can interact with visitor and drop message to the person to be visited. In future, we can design a small office employee phone list database, the employee can drop a message to the system, the system uses the GPIO functions of the ReSpeaker Core v2.0 to open the doors for the visitor. We use the Microsoft Bing Speech to text services and Twilio/Tencent message APIs to come out the python scripts. For more info, please refer to [ReSpeaker Voice Reception System](https://project.seeedstudio.com/SeeedStudio/respeaker-voice-reception-system-209a6c).

<iframe width="800" height="450" src="https://www.youtube.com/embed/-nTOa3LLpVo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
