---
name: Air602 WiFi Development Board
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 113990577
tags:
---

![](https://github.com/SeeedDocument/Air602_WiFi_Module/raw/master/img/main.jpg)


This wiki works for both Air602 WiFi Development Board and Air602 WiFi Module.

The Air602 is a 2.4G Wi-Fi module based on the embedded Wi-Fi SoC chip (W600) with a  12-pin Stamp Hole Expansion Interface. Miracly, it is even smaller than a stamp. It's only 12mm*10mm, small but complete, it offers a rich interface and complete functionality. This module support IEEE802.11b/g/n and AT command.

The Air602 WiFi Development Board is based on Air602 Wi-Fi module and integrated USB interface and Antenna. If you plug this board into your computer, it will be recognized as an Ports (COM & LPT), so that you can code it with Serial port tool. This module support IEEE802.11b/g/n and AT command.


<p style=":center"><a href="https://www.seeedstudio.com/Air602-WiFi-Module-p-3139.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

<p style=":center"><a href="https://www.seeedstudio.com/Air602-WiFi-Development-Board-p-3140.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>



## Features

**Interface**

• USB interface

• UART/SPI

• Integrated GPIO device controller

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



## Specification

|Category|Item|Parameter|
|--|---|---|
|Wireless|Support Wi‐Fi  Mode|IEEE802.11b/g/n|
||RF system impedance|50Ω|
||Frequency Range|2.4~2.4835 GHz|
||Receiving sensitivity|20MHz MCS7@‐71dBm;<br>40MHz MCS7@‐68dBm;<br>54Mbps@‐73dBm;<br>11Mbps@‐86dBm;<br>1Mbps@‐95dBm;|
||Physical layer data rate|802.11n MCS 0~7   150Mbps|
||Modulation|DSSS、OFDM、DBPSK、DQPSK、CCK、QAM16/64|
||Output Power|IEEE802.11b, DSSS 1Mbps, POUT = +17dBm;<br>IEEE802.11g, OFDM 54Mbps, POUT = +10dBm;<br>IEEE802.11n, OFDM MCS7, POUT = +10dBm|
|Hardware|Interface Type|UART/SPI/GPIO|
||Interface rate|2Mbps@UART (Max) <br>50Mbps@SPI (Max)|
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


## Typical Applications

- intelligent home appliances
- smart home
- wireless audio and video
- smart toys
- medical monitoring
- industrial control
- other Internet of Things applications


## Pin Out


![](https://github.com/SeeedDocument/Bazaar_file/raw/master/113990576/PIN_MAP.jpg)
![](https://github.com/SeeedDocument/Bazaar_file/raw/master/113990576/PIN_table.jpg)
![](https://github.com/SeeedDocument/Bazaar_file/raw/master/113990576/PIN_MAP_B.jpg)



## Getting Started

For the **Air602 WiFi Development Board**, you can just plug it into you computer, it will be recognized as an Ports (COM & LPT).
For the **Air602 WiFi Module**, you need to use USB-to-Serial Tools to connect the RX/TX pins to your computer.
 
!!!Note
        For mac, we found that some version of mac system can not recognize the on-board USB-to-Serial chip CH330N, please check here for solution [Mac os driver issue](https://forum.seeedstudio.com/viewtopic.php?f=106&t=8299&sid=aa548f2de0fb26380f50e0b328a49a80)


We use the serial port tool **sscom** to send the AT command. You can use your favorite serial port tool, in case you want to use **sscom**, you can download it [Here](https://github.com/SeeedDocument/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/raw/master/res/sscom51.zip). 

What ever, please make sure you have checked the option **AddCrLf**, and set the baud rate to **115200**

![](https://github.com/SeeedDocument/Air602_WiFi_Module/raw/master/img/AT_2.jpg)


Tap **AT+** then click **SEND** or press ++enter++ key to to check if the connection was successfully established.

```C
AT+
```

When it returns **+OK**, you can use the AT command to control this module.


### Create a SoftAP process


- 1- **WPRT** sets the wireless network card working mode to SoftAP: 

```C
AT+WPRT=2
```

- 2- **APSSID** Set the AP SSID for the STA, e.g.*MyAP*:

```C
AT+APSSID=MyAp
```

- 3- **APENCRY** Set the wireless network card security mode to WEP64: 

```C
AT+APENCRY=1
```

Parameter：

open：0，WEP64：1，WEP128：2

- 4- **APKEY** Set the wireless network card key to *12345* 

```C
AT+APKEY=1,1,12345
```

Parameter 1：Key format， 0 means HEX, 1 means ASCII  

Parameter 2：index:  Key index number, 1 to 4 are used for WEP encryption keys, and other encryption methods are fixed to 0.  

Parameter 3：wireless key, e.g.：12345  


- 5- **APNIP** Set the ip address and subnet mask

```C
AT+APNIP=1,192.168.1.1,255.255.255.0,192.168.1.1,192.168.1.1
```

Parameter 1：address type: 0 means dynamic allocation using DHCP, 1 means static address  
parameter 2：ip:192.168.1.1  
parameter 3：netmask：255.255.255.0  
parameter 4：gateway：192.168.1.1  
parameter 5：dns：192.168.1.1  

- 6- **PMTF** saves the above parameters to spi flash, just start from step 7 with the next boot.

```C
AT+PMTF
```

- 7- **WJOIN** Create wireless network *MyAp*

```C
AT+WJOIN
```

- 8- **SLIST**  Query the STA information which connected to your SoftAP.

```C
AT+SLIST
```


### Scan AP Process

Wireless network card scanning AP's AT command is ：

```C
AT+WSCAN
```

![](https://github.com/SeeedDocument/Air602_WiFi_Module/raw/master/img/AT_3.jpg)

The last paremeter is the signal strength,  unit db

### STA joins the AP process

- 1- **WPRT** Set the working mode to STA

```C
AT+WPRT=0
```

- 2- **SSID** Set the AP name to join. e.g. *TEST_AP* 

```C
AT+SSID=TEST_AP
```

- 3- **KEY** Set the wireless key of the AP you want to join. e.g. *12345678*

```C
AT+KEY=1,0,12345678
``` 

parameter 1：0 means HEX, 1 means ASCII

parameter 2：index: The key index number, 1 to 4 is used for the WEP encryption key. The other encryption methods are fixed to 0.

parameter 3： Wireless key  e.g.：12345678


- 4- **NIP** Enable DHCP

```C
AT+NIP=0
```

- 5- PMTF Save the above parameters to spi flash, Just start from step 6 with the next boot

```C
AT+PMTF
```

- 6- WJOIN Join the wireless network TEST_AP 

```C
AT+WJOIN
```

![](https://github.com/SeeedDocument/Air602_WiFi_Module/raw/master/img/AT_4.jpg)


### Create an APSTA process

- 1- **WPRT** Set the working mode to APSTA

```C
AT+WPRT=3
```

- 2- **SSID** Set the AP name to be joined, such as *TEST_AP*

```C
AT+SSID=TEST_AP
```

- 3- **KEY** Set the wireless key of the AP you want to join. e.g. *12345678*

```C
AT+KEY=1,0,12345678
``` 

parameter 1：0 means HEX, 1 means ASCII

parameter 2：index: The key index number, 1 to 4 is used for the WEP encryption key. The other encryption methods are fixed to 0.

parameter 3： Wireless key e.g.：12345678

- 4- **APSSID** Set the network name of the created SOFTAP

```C
AT+APSSID=”MYSoftAP”
```

- 5-  **APENCRY** Set the encryption type of SoftAP (such as WPA2-TKIP)

```C
AT+APENCRY=5
```

- 6- **APKEY**  Set the password for SoftAP (e.g. ASCII code 87654321) 

```C
AT+APKEY=1,0,87654321
```

- 7- **APNIP**  Set the IP address and subnet mask

```C
AT+APNIP=1,192.168.1.1,255.255.255.0,192.168.1.1,192.168.1.1
```

- 8- **PMTF** Save the above parameters to spi flash, just start from step 9

```C
AT+PMTF
```

- 9- **WJOIN** Join the wireless network TEST_AP

```C
AT+WJOIN
```

## Firmware Programming

For the firmware programming please check here：

[Air602 Firmware Programming Manual](http://wiki.seeedstudio.com/Air602_Firmware_Programming_Manual)


## FAQ

**Q1.How the STA disconnects the AP**

A: The wireless network card disconnects the AP's AT command:     

```C
AT+WLEAV
```

**Q2.SoftAP disconnected**

A: The AT command of SoftAP disconnected network is: 

```C
AT+WLEAV=2
```

**Q3.How STA view current status**

A: The AT command for the wireless network card to view the status of the current network card is:

```C
AT+LKSTT
```

**Q4. How to View current SoftAP status**

A: The AT command to view the current SoftAP status is: 

```C
AT+APLKSTT
```


## Resouce


- **[PDF]** [Air602 AT Command User Manual](https://github.com/SeeedDocument/Air602_WiFi_Module/raw/master/res/Air602%20AT%20Command%20User%20Manual.pdf)

- **[PDF]** [Air602 Hardware Design Manual](https://github.com/SeeedDocument/Air602_WiFi_Module/raw/master/res/Air602%20Hardware%20Design%20Manual.pdf)

- **[ZIP]** [AIR602_lbr for eagle](https://github.com/SeeedDocument/Air602_WiFi_Module/raw/master/res/AIR602_lbr.zip)

- **[ZIP]** [sscom](https://github.com/SeeedDocument/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/raw/master/res/sscom51.zip)


## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/)








<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>