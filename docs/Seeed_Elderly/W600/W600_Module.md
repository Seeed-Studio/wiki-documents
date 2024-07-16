---
description: W600 Module
title: W600 Module
keywords:
- Air602_WiFi_Development_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /W600_Module
last_update:
  date: 01/20/2023
  author: Matthew
---

![](https://files.seeedstudio.com/wiki/W600_Module/img/113020031-preview.png)

The W600 Module is a cost-effective 2.4GHz WiFi module support 802.11b/g/n. Seeed W600 Module is based on the W600 chip which features ARM Cortex-M3 with 1MB on-chip flash and freeRTOS kernel.

We take the pins of the W600 chip out and put them on the back of the board, including I2S/I2C/SPI/GPIO/PWM/UART/SDIO. In addition, this module has an on-board PCB Antenna, no need to design the antenna separately, so you can quickly deploy the module to your own board. We also have made CE/FCC certification for this module and you can use it directly for business projects.

<a href="https://www.seeedstudio.com/W600-Module-p-4020.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a>

## Features

• Integrated 32bit Embedded Cortex-M3 CPU, operating frequency 80MHz

• Integrated 288KB RAM

• Integrated 1MB FLASH

**Interface**

• Integrated GPIO device controller

• Integrated 2 UART interface, support RTS/CTS, baud rate: 1200bps~2Mbps

• Integrated one high speed SPI controller, operating frequency: 0~50MHz;

**Wireless**

• Support IEEE802.11 b/g/e/i/d/k/r/s/w/n

• Support 2.4~2.4835 GHz

• Support Wi-Fi WMM/WMM-PS/WPA/WPA2/WPS

• Support Wi-Fi Direct

• STBC、GreenField、Short-GI

• Support multiple network protocols: TCP/UDP/ICMP/DHCP/DNS/HTTP

**Others**

• Supports AT+ instruction protocol based on ASCII encoding (UART interface)

• Support for user‐programmable GPIO control

• On-board Antenna

## Specification

|Category|Item|Parameter|
|--|---|---|
|Wireless|Support Wi‐Fi  Mode|IEEE802.11b/g/n|
||RF system impedance|50Ω|
||Frequency Range|2.4~2.4835 GHz|
||Receiving sensitivity|20MHz MCS7@‐71dBm;<br />40MHz MCS7@‐68dBm;<br />54Mbps@‐73dBm;<br />11Mbps@‐86dBm;<br />1Mbps@‐95dBm;|
||Physical layer data rate|802.11n MCS 0~7   150Mbps|
||Modulation|DSSS、OFDM、DBPSK、DQPSK、CCK、QAM16/64|
||Output Power|IEEE802.11b, DSSS 1Mbps, POUT = +17dBm;<br />IEEE802.11g, OFDM 54Mbps, POUT = +10dBm;<br />IEEE802.11n, OFDM MCS7, POUT = +10dBm|
|Hardware|Interface Type|UART/SPI/GPIO|
||Interface rate|2Mbps@UART (Max) <br />50Mbps@SPI (Max)|
||Operating Voltage|3.3V(Module)/5V(Development Board)|
||Operating humidity|5%~90% (No condensation)|
||storage temperature|‐40~+125 ℃|
||Operating temperature|‐40~+85℃|
|Software|Network Type|STA/AP/AP+STA/Wi‐Fi Direct|
||Verification|WEP/WPA‐PSK/WPA2‐PSK|
||Encryption|WEP64/WEP128/TKIP/CCMP(AES)|
||WPS  Function|WPS|
||Energy saving|PS‐POLL/Standby|
||Network protocol|TCP/UDP/ARP/ICMP/DHCP/DNS/HTTP|
||Interface Protocol| AT+ instruction set|

:::note
For more detail about specifications, please check the W600 [Specification V1.0.0_EN.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/W600%20Specification%20V1.0.0_EN.pdf) and [W600 HardwareDesignGuide_v1.0.1.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/W600%20HardwareDesignGuide_v1.0.1.pdf)
:::

## Typical Applications

- intelligent home appliances
- smart home
- wireless audio and video
- smart toys
- medical monitoring
- industrial control
- other Internet of Things applications

## Hardware Overview

### Block Diagram

<div align="center">
  <figure>
    <a href="https://files.seeedstudio.com/wiki/W600_Module/img/block.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/W600_Module/img/block.png" alt="block diagram of W600 Module" title="block diagram of W600 Module" />
      <figcaption><i>click to see the clearer original file</i></figcaption></a>
  </figure>
</div>

### Pinout

<div align="center">
  <figure>
    <a href="https://files.seeedstudio.com/wiki/W600_Module/img/pinout_w600_module.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/W600_Module/img/pinout_w600_module.jpg" alt="pinout of W600 Module" title="pinout of W600 Module" />
      <figcaption><i>click to see the clearer original file</i></figcaption></a>
  </figure>
</div>

## Getting Started

To use the **W600 Module**, you need to use [USB-to-Serial Tools](https://www.seeedstudio.com/PL2303-USB-to-Serial-TTL-Module-Adapter-p-2358.html) to connect the RX/TX pins to your computer, also you need to power this module with the **3.3v** and **GND** pins.

:::note
For mac, we found that some version of mac system can not recognize the on-board USB-to-Serial chip CH330N, please check here for solution [Mac os driver issue](https://forum.seeedstudio.com/viewtopic.php?f=106&t=8299&sid=aa548f2de0fb26380f50e0b328a49a80)
:::

We use the serial port tool **sscom** to send the AT command. You can use your favorite serial port tool, in case you want to use **sscom**, you can download it [Here](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/sscom51.zip).

What ever, please make sure you have checked the option **AddCrLf**, and set the baud rate to **115200**

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/AT_2.jpg)

Tap **AT+** then click **SEND** or press ++enter++ key to to check if the connection was successfully established.

```cpp
AT+
```

When it returns **+OK**, you can use the AT command to control this module.

### Create a SoftAP process

- 1- **WPRT** sets the wireless network card working mode to SoftAP:

```cpp
AT+WPRT=2
```

- 2- **APSSID** Set the AP SSID for the STA, e.g.*MyAP*:

```cpp
AT+APSSID=MyAp
```

- 3- **APENCRY** Set the wireless network card security mode to WEP64:

```cpp
AT+APENCRY=1
```

Parameter：

open：0，WEP64：1，WEP128：2

- 4- **APKEY** Set the wireless network card key to *12345*

```cpp
AT+APKEY=1,1,12345
```

Parameter 1：Key format， 0 means HEX, 1 means ASCII  

Parameter 2：index:  Key index number, 1 to 4 are used for WEP encryption keys, and other encryption methods are fixed to 0.  

Parameter 3：wireless key, e.g.：12345  

- 5- **APNIP** Set the ip address and subnet mask

```cpp
AT+APNIP=1,192.168.1.1,255.255.255.0,192.168.1.1,192.168.1.1
```

Parameter 1：address type: 0 means dynamic allocation using DHCP, 1 means static address  
parameter 2：ip:192.168.1.1  
parameter 3：netmask：255.255.255.0  
parameter 4：gateway：192.168.1.1  
parameter 5：dns：192.168.1.1  

- 6- **PMTF** saves the above parameters to spi flash, just start from step 7 with the next boot.

```cpp
AT+PMTF
```

- 7- **WJOIN** Create wireless network *MyAp*

```cpp
AT+WJOIN
```

- 8- **SLIST**  Query the STA information which connected to your SoftAP.

```cpp
AT+SLIST
```

### Scan AP Process

Wireless network card scanning AP's AT command is ：

```cpp
AT+WSCAN
```

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/AT_3.jpg)

The last paremeter is the signal strength,  unit db

### STA joins the AP process

- 1- **WPRT** Set the working mode to STA

```cpp
AT+WPRT=0
```

- 2- **SSID** Set the AP name to join. e.g. *TEST_AP*

```cpp
AT+SSID=TEST_AP
```

- 3- **KEY** Set the wireless key of the AP you want to join. e.g. *12345678*

```cpp
AT+KEY=1,0,12345678
```

parameter 1：0 means HEX, 1 means ASCII

parameter 2：index: The key index number, 1 to 4 is used for the WEP encryption key. The other encryption methods are fixed to 0.

parameter 3： Wireless key  e.g.：12345678

- 4- **NIP** Enable DHCP

```cpp
AT+NIP=0
```

- 5- PMTF Save the above parameters to spi flash, Just start from step 6 with the next boot

```cpp
AT+PMTF
```

- 6- WJOIN Join the wireless network TEST_AP

```cpp
AT+WJOIN
```

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/AT_4.jpg)

### Create an APSTA process

- 1- **WPRT** Set the working mode to APSTA

```cpp
AT+WPRT=3
```

- 2- **SSID** Set the AP name to be joined, such as *TEST_AP*

```cpp
AT+SSID=TEST_AP
```

- 3- **KEY** Set the wireless key of the AP you want to join. e.g. *12345678*

```cpp
AT+KEY=1,0,12345678
```

parameter 1：0 means HEX, 1 means ASCII

parameter 2：index: The key index number, 1 to 4 is used for the WEP encryption key. The other encryption methods are fixed to 0.

parameter 3： Wireless key e.g.：12345678

- 4- **APSSID** Set the network name of the created SOFTAP

```cpp
AT+APSSID=”MYSoftAP”
```

- 5-  **APENCRY** Set the encryption type of SoftAP (such as WPA2-TKIP)

```cpp
AT+APENCRY=5
```

- 6- **APKEY**  Set the password for SoftAP (e.g. ASCII code 87654321)

```cpp
AT+APKEY=1,0,87654321
```

- 7- **APNIP**  Set the IP address and subnet mask

```cpp
AT+APNIP=1,192.168.1.1,255.255.255.0,192.168.1.1,192.168.1.1
```

- 8- **PMTF** Save the above parameters to spi flash, just start from step 9

```cpp
AT+PMTF
```

- 9- **WJOIN** Join the wireless network TEST_AP

```cpp
AT+WJOIN
```

:::note
For more detail about AT command, please check the [WM_W60X_SDK_AT Command_V1.0.2.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_SDK_AT%20Command_V1.0.2.pdf)
:::

## Firmware Programming

For the firmware programming please check here：

[WM_W60X_SDK_User Manual_V1.0.0.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_SDK_User%20Manual_V1.0.0.pdf) and [WM_W60X_Firmware Generation Guide_V1.1.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_Firmware%20Generation%20Guide_V1.1.pdf)

## FAQ

**Q1.How the STA disconnects the AP**

A: The wireless network card disconnects the AP's AT command:

```cpp
AT+WLEAV
```

**Q2.SoftAP disconnected**

A: The AT command of SoftAP disconnected network is:

```cpp
AT+WLEAV=2
```

**Q3.How STA view current status**

A: The AT command for the wireless network card to view the status of the current network card is:

```cpp
AT+LKSTT
```

**Q4. How to View current SoftAP status**

A: The AT command to view the current SoftAP status is:

```cpp
AT+APLKSTT
```

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/W600_Module/res/W600%20Module%20schemaic.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resouce

- **[PDF]** [WM_W60X_SDK_AT Command_V1.0.2.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_SDK_AT%20Command_V1.0.2.pdf)

- **[PDF]** [W600 HardwareDesignGuide_v1.0.1.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/W600%20HardwareDesignGuide_v1.0.1.pdf)

- **[PDF]** [W60X_SDK_User Manual_V1.0.0.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_SDK_User%20Manual_V1.0.0.pdf)

- **[PDF]** [WM_W60X_Firmware Generation Guide_V1.1.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_Firmware%20Generation%20Guide_V1.1.pdf)

- **[ZIP]** [W600 Module schematic files](https://files.seeedstudio.com/wiki/W600_Module/res/W600%20Module%20schemaic.zip)

- **[ZIP]** [sscom](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/sscom51.zip)

## Tech Support & Product Discussion



<br />
Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
