---
name: RePhone Geo Kit
category: RePhone
bzurl: https://www.seeedstudio.com/RePhone-Geo-Kit-p-2624.html
oldwikiname:  RePhone Geo Kit
prodimagename:  RePhone_Geo_Kit_wiki_2.jpg
surveyurl: https://www.research.net/r/RePhone_Geo_Kit
sku:  113060003
---
![](https://github.com/SeeedDocument/RePhone_Geo_Kit/raw/master/img/RePhone_Geo_Kit_wiki_2.jpg)

The combination of GSM module and GPS module is what makes RePhone Geo Kit brilliant. The kit allows you to obtain the real-time geographic position, altitude, travelling speed and time information at any time, and all-weather conditions, through GSM network (SMS). Also as a bonus, the Xadow GSM Breakout can provides you more possibilities hacking electronics.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/RePhone-Geo-Kit-p-2624.html)

##  Specification
---
###   Xadow GSM+BLE

For more info about this module please check on [**Xadow GSM+BLE Wiki Page**](/Xadow_GSMPlusBLE).

<table>
<tr>
<td> Microcontroller </td>
<td> MT2502
</td></tr>
<tr>
<td> MCU Core </td>
<td> 32-bit ARM7EJ-STM RISC processor
</td></tr>
<tr>
<td> RAM </td>
<td> 4 MB
</td></tr>
<tr>
<td> Flash Memory </td>
<td> 16 MB
</td></tr>
<tr>
<td> Power Supply </td>
<td> 3.3 ~ 4.2V(no SIM)/3.5 ~ 4.2V(with SIM)
</td></tr>
<tr>
<td> Power Consumption </td>
<td> 20mW/30mW/52mW @ standby(no radio)/standby(GSM)/standby(BT)
</td></tr>
<tr>
<td> Quad-band </td>
<td> 850/900/1800/1900 MHz
</td></tr>
<tr>
<td> GPRS </td>
<td> Class 12 modem
</td></tr>
<tr>
<td> Clock Speed </td>
<td> 260 MHz
</td></tr>
<tr>
<td> Connectors </td>
<td> 35 PIN Connector &amp; 11 PIN Connector for Xadow Modules; JST 1.0 Connector for the battery
</td></tr>
<tr>
<td> Interfaces </td>
<td> LCD, Audio, I2C, SPI, UART, and GPIOs etc
</td></tr>
<tr>
<td> Dimensions </td>
<td> 25.37mm × 20.30mm / 1” × 0.8”
</td></tr></table>

###   Xadow GPS v2

For more info about this module please check on [**Xadow GPS V2 Wiki Page**](/Xadow_GPS_V2).

<table>
<tr>
<td> Microcontroller </td>
<td> Kinetis KL02
</td></tr>
<tr>
<td> Core </td>
<td> ARM® 32-bit Cortex® -M0+CPU
</td></tr>
<tr>
<td> Power Supply </td>
<td> 3.3 ~ 6 V (via breakout pins)
</td></tr>
<tr>
<td> Flash </td>
<td> 32 KB
</td></tr>
<tr>
<td> SRAM </td>
<td> 4 KB
</td></tr>
<tr>
<td> Clock Speed </td>
<td> 48 MHz
</td></tr>
<tr>
<td> Power Consumption </td>
<td> 18mA@Tracking, 21mA@Acquisition
</td></tr>
<tr>
<td> Power Saving </td>
<td> Typ. 3mA@AlwaysLocateTM, 7uA@Backup

Mode, 180uA@Standby Mode

</td></tr>
<tr>
<td> Channel </td>
<td> 22(Tracking) / 66 (Acquisition)
</td></tr>
<tr>
<td> Update Rate </td>
<td> 1Hz(Default), up to 10Hz
</td></tr>
<tr>
<td> Horizontal Position Accuracy </td>
<td> &lt;2.5m CEP
</td></tr>
<tr>
<td> Velocity Accuracy </td>
<td> &lt;0.1m/s
</td></tr>
<tr>
<td> Maximum Velocity </td>
<td> Max.515m/s
</td></tr>
<tr>
<td> Cold/warm start with EASYTM </td>
<td> 215s/5s
</td></tr>
<tr>
<td> Acquisition Sensitivity </td>
<td> -145dBm
</td></tr>
<tr>
<td> Tracking Sensitivity </td>
<td>-163dBm
</td></tr>
<tr>
<td> Operating Temperature </td>
<td> -40℃ to 85℃
</td></tr>
<tr>
<td> Protocols </td>
<td> NMEA 0183/PMTK
</td></tr>
<tr>
<td> Antenna Type </td>
<td> Chip antenna
</td></tr>
<tr>
<td> Interface </td>
<td> Interface with Xadow GSM+BLE through

I2C (7-bit address 0x05)

</td></tr>
<tr>
<td> Dimensions </td>
<td> 25.37mm X 20.30mm / 1” × 0.8”
</td></tr></table>

###   Xadow GSM Breakout

For more info about this module please check on [**Xadow GSM Breakout Wiki Page**](/Xadow_GSM_Breakout).

<table>
<tr>
<td> Dimensions </td>
<td> 25.37mm × 20.30mm / 1” × 0.8”
</td></tr></table>

##  Module Connection
---
The Xadow GSM+BLE integrates a Xadow 36 Pin connector and a Xadow 11 Pin connector. As the image shows here, if needed, you can connect the Xadow GSM+BLE to Xadow GSM breakout with a Xadow 36 Pin cable, but do bear in mind that the cable has to be inserted **firmly** and **flat**, and most importantly, **keep the 'TOP' side upwards**. The Xadow 11 Pin connector have much more flexible design, you can connect the Xadow GPS v2 and the mainboard with a Xadow 11 Pin ribbon cable in whatever way you want, again just make sure cable is firmly inserted.

![](https://github.com/SeeedDocument/RePhone_Geo_Kit/raw/master/img/RePhone_Geo_Kit_wiki_2.jpg)

##  Run a GPS Testing Code
---
Firstly you need to follow the instructions in the **[Arduino IDE for RePhone Kit](/Arduino_IDE_for_RePhone_Kit "Arduino IDE for RePhone Kit")** to download the Arduino IDE for RePhone Kit as well as install the drivers.
Then copy the following GPS testing code to your Arduino IDE for RePhone. Choose the **board as "RePhone"** and **download it with the "MTK USB Debug Port"**.
```
#include <LGPS.h>
#include <stdio.h>

void setup()
{
    Serial.begin(115200);
    Serial.print("GPS test.\r\n");
}

void loop()
{
    unsigned char *utc_date_time = 0;
    char buffer[50] = {0,};

    if(LGPS.check_online())
    {
        utc_date_time = LGPS.get_utc_date_time();
        sprintf(buffer, "GPS UTC:%d-%d-%d  %d:%d:%d\r\n", utc_date_time[0], utc_date_time[1], utc_date_time[2], utc_date_time[3], utc_date_time[4],utc_date_time[5]);
        Serial.print(buffer);

        sprintf(buffer, "GPS status is %c\r\n", LGPS.get_status());
        Serial.print(buffer);

        sprintf(buffer, "GPS latitude is %c:%f\r\n", LGPS.get_ns(), LGPS.get_latitude());
        Serial.print(buffer);

        sprintf(buffer, "GPS longitude is %c:%f\r\n", LGPS.get_ew(), LGPS.get_longitude());
        Serial.print(buffer);

        sprintf(buffer, "GPS speed is %f\r\n", LGPS.get_speed());
        Serial.print(buffer);

        sprintf(buffer, "GPS course is %f\r\n", LGPS.get_course());
        Serial.print(buffer);

        sprintf(buffer, "GPS position fix is %c\r\n", LGPS.get_position_fix());
        Serial.print(buffer);

        sprintf(buffer, "GPS sate used is %d\r\n", LGPS.get_sate_used());
        Serial.print(buffer);

        sprintf(buffer, "GPS altitude is %f\r\n", LGPS.get_altitude());
        Serial.print(buffer);

        sprintf(buffer, "GPS mode is %c\r\n", LGPS.get_mode());
        Serial.print(buffer);

        sprintf(buffer, "GPS mode2 is %c\r\n", LGPS.get_mode2());
        Serial.print(buffer);
    }
    delay(1000);
}
```

**Please be noted that: To obtain a better signal strength, you should put the GPS module outside the window/house in a open space. Also, after initiated the first time, it might take a while before it tracks down the satellites.**

Now **change the Port to MTK USB Modern Port(it's very important to so)**, you should be able to see the GPS info on the Serial monitor.

![](https://github.com/SeeedDocument/RePhone_Geo_Kit/raw/master/img/GPS_detected.png)
![](https://github.com/SeeedDocument/RePhone_Geo_Kit/raw/master/img/GPS_undetected.png.png)

##  More Example Code
---
Playing with some example code would a good start if you are heading into some even more interesting project.

1. Simply setup your **sketchbook location** in the **preference** as where you install the Arduino IDE for RePhone, then you'll be able to see the example codes.

![](https://github.com/SeeedDocument/RePhone_Geo_Kit/raw/master/img/Arduino_Sketchlocation.png)

2. You may find the Arduino example coded manually for all the RePhone modules in the following path:

_**Arduino_IDE_for_RePhone-master\hardware\arduino\mtk\libraries**_

![](https://github.com/SeeedDocument/RePhone_Geo_Kit/raw/master/img/Example_code_Arduino_IDE.png)

##  RePhone Community
---
[![](https://github.com/SeeedDocument/RePhone_Geo_Kit/raw/master/img/RePhone_Community-2.png)](http://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)

We’ve been looking for a better place where our backers (RePhone Users) can sit together, warmly and comfortably, have conversations about RePhone, discuss technical problems, share ideas/projects, and give feedback on the modules’ development in the future. And then here we go, the RePhone Community.

Now join us in the [RePhone Community](http://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)! Together we seek answers, make interesting stuff, care about each other, and share our experiences.

###   Frequently Asked Questions

Some frequently asked questions in RePhone Community are collected and answered to the topic **["Frequently Asked Questions of RePhone (FAQ)"](http://forum.seeedstudio.com/viewtopic.php?f=71&amp;t=6664&amp;p=23753#p23753)** , the topic will be kept updating whenever a new FAQ comes out.

##  Resources

Please go the Wiki page [Xadow GPS V2](/Xadow_GPS_V2) for more info.

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>