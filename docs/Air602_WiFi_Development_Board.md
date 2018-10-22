---
title: Air602 WiFi Development Board
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 113990577
tags:
---

This wiki works for both Air602 WiFi Development Board and Air602 WiFi Module.


<p style="text-align:center"><a href="https://www.seeedstudio.com/Air602-WiFi-Module-p-3139.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

<p style="text-align:center"><a href="https://www.seeedstudio.com/Air602-WiFi-Development-Board-p-3140.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>


## Getting Started

We use the serial port tool **sscom** to send the AT command. You can use your favorite serial port tool, in case you want to use **sscom**

You can download it [Here](https://github.com/SeeedDocument/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/raw/master/res/sscom51.zip). 

What ever, please make sure you have checked the option **AddCrLf**, and set the baud rate to **115200**

[](https://github.com/SeeedDocument/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/raw/master/img/AT_2.jpg)


You can use the following commad to check if the connection was successfully established. 

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

- **[ZIP]** [sscom](https://github.com/SeeedDocument/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/raw/master/res/sscom51.zip)








