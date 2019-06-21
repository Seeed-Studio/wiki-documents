---
name: RePhone Lumi Kit
category: RePhone
bzurl: https://www.seeedstudio.com/RePhone-Lumi-Kit-p-2623.html
oldwikiname:  RePhone Lumi Kit
prodimagename:  RAINBOW-Rainbowduino_LRG.jpg
surveyurl: https://www.research.net/r/RePhone_Lumi_Kit
sku:  113060002
---
![](https://github.com/SeeedDocument/RePhone_Lumi_Kit/raw/master/img/RePhone_Lumi_Kit_wiki_2.jpg)

RePhone Lumi Kit is specially designed for LED lovers - embedding the Xadow GSM+BLE module into your awesome lighting device and control the light via SMS or Bluetooth!

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/RePhone-Lumi-Kit-p-2623.html)

##   Specification
---
###   Xadow GSM+BLE

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

###   Xadow Duino

<table>
<tr>
<td> Microcontroller </td>
<td> ATmega32u4
</td></tr>
<tr>
<td> Power Supply </td>
<td> 5V via USB, current draw is 1.5A at Max

3.3 ~ 4.2V via battery socket, current draw is 1.5A at Max

3.3 ~ 6V via breakout pins, current draw is 500 mA at Max

3.3 ~ 4.2 V via Xadow GSM+BLE, current draw is 500 mA at Max

</td></tr>
<tr>
<td> Charging Current </td>
<td> 500 mA
</td></tr>
<tr>
<td> Flash Memory </td>
<td> 32 KB (ATmega32u4) of which 4 KB used by bootloader
</td></tr>
<tr>
<td> SRAM </td>
<td> 2.5 KB (ATmega32u4)
</td></tr>
<tr>
<td> EEPROM </td>
<td> 1 KB (ATmega32u4)
</td></tr>
<tr>
<td> Clock Speed </td>
<td> 16 MHz
</td></tr>
<tr>
<td> Connector </td>
<td> 2 × 11 PIN Xadow Connector

Bonding pads for RGB LED WS2812b

</td></tr>
<tr>
<td> Interfaces </td>
<td> Interface with Xadow GSM+BLE through

I2C (7-bit address 0x23)

</td></tr>
<tr>
<td> Dimensions </td>
<td> 25.37mm × 20.30mm / 1”× 0.8”
</td></tr></table>

###   Xadow GSM Breakout

<table>
<tr>
<td> Dimensions </td>
<td> 25.37mm × 20.30mm / 1” × 0.8”
</td></tr></table>

##  Module Connection
---
The Xadow GSM+BLE integrates a Xadow 36 Pin connector and a Xadow 11 Pin connector. As the image shows here, you can connect the Xadow GSM+BLE to Xadow GSM breakout with a Xadow 36 Pin cable, but do bear in mind that the cable has to be inserted **firmly** and **flat**, and most importantly, **keep the 'TOP' side upwards**. The Xadow 11 Pin connector have much more flexible design, you can connect the Xadow Duino and the mainboard with a Xadow 11 Pin ribbon cable in whatever way you want, again just make sure cable is firmly inserted.

![](https://github.com/SeeedDocument/RePhone_Lumi_Kit/raw/master/img/RePhone_Lumi_Kit_wiki_2.jpg)

##  Control the Light with SMS!
---
Here is an example of controlling you RGB LEDs by sending a message to your RePhone.

Firstly you need to follow the instructions in the **[Arduino IDE for RePhone Kit](/Arduino_IDE_for_RePhone_Kit "Arduino IDE for RePhone Kit")** to download the Arduino IDE for RePhone Kit as well as install the drivers.
Then copy the following code to your Arduino IDE for RePhone. Choose the **board as "RePhone"** and **download it with the "MTK USB Debug Port"**.
```
#include <LCheckSIM.h>
#include <LGSM.h>
#include <LWs2812.h>
#include <string.h>
#include <stdio.h>
#include <stdlib.h>

//SMS command 0 : "OFF" - off display.
//SMS command 1 : "R100G0B0" - red color is 100, green color is 0, blue coler is 0.
char num[20];
char buf_contex[200];


void setup()
{
    Serial.begin(115200);
    Serial.print("Ws2812 test.\r\n");
}

void loop()
{
    unsigned long rgb_color;

    if(LSMS.available())
    {
        LSMS.remoteNumber(num, 20);
        LSMS.remoteContent(buf_contex, 50);

        Serial.println("Get new sms: ");

        Serial.print("Number:");
        Serial.println(num);

        Serial.print("Content:");
        Serial.println(buf_contex);

        if(strcmp("OFF", buf_contex) == 0)
        {
            Serial.print("RGB off.\r\n");
            LWs2812.monochrome(5, 0, 1);
        }
        else
        {
            if(StingFind(buf_contex, "R", 1))
            {
                if(StingFind(buf_contex, "G", 1))
                {
                    if(StingFind(buf_contex, "B", 1))
                    {
                        Serial.print("RGB flag is find.\r\n");
                        char color_r[4] = {0};
                        char color_g[4] = {0};
                        char color_b[4] = {0};

                        sscanf(buf_contex + 1,"%[^G]", color_r);
                        sscanf(buf_contex,"%*[^G]G%[^B]", color_g);
                        sscanf(buf_contex,"%*[^B]B%[^\0]", color_b);

                        rgb_color = atol(color_r)*256*256 + atol(color_g)*256 + atol(color_b);

                        Serial.print("rgb color is ");
                        Serial.println(rgb_color);
                        delay(100);
                        LWs2812.monochrome(5, rgb_color, 0);
                        delay(100);
                        LWs2812.monochrome(5, rgb_color, 0);
                    }
                }
            }
        }
    }
}

int StingFind(char* string, char* find, int number)
{
    char* pos = string;
    char* p = string;
    int count = 0;

    while(number > 0)
    {
        pos = strstr(p, find);
        if(pos == 0)return -1;

        while(p <= pos)
        {
            if(*p > 0x80 || *p < 0)
            {
                p ++;
            }
            p ++;
            count ++;
        }
        number --;
    }
    return count;
}
```

In this code we set the SMS command as:
···
**"OFF"** - off display.
**"R100G0B0"** - red color is 100, green color is 0, blue coler is 0.
···

So if we send  **"R100G0B0"** to the RePhone, the LEDs will become red as showing below:

![](https://github.com/SeeedDocument/RePhone_Lumi_Kit/raw/master/img/TESTR100.jpg)

##  More Example Code
---
Playing with some example code would a good start if you are heading into some even more interesting project.

1. Simply setup your **sketchbook location** in the **preference** as where you install the Arduino IDE for RePhone, then you'll be able to see the example codes.

![](https://github.com/SeeedDocument/RePhone_Lumi_Kit/raw/master/img/Arduino_Sketchlocation.png)

2. You may find the Arduino example coded manually for all the RePhone modules in the following path:

_**Arduino_IDE_for_RePhone-master\hardware\arduino\mtk\libraries**_

![](https://github.com/SeeedDocument/RePhone_Lumi_Kit/raw/master/img/Example_code_Arduino_IDE.png)

##  RePhone Community
---
[![](https://github.com/SeeedDocument/RePhone_Lumi_Kit/raw/master/img/RePhone_Community-2.png)](http://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)

We’ve been looking for a better place where our backers (RePhone Users) can sit together, warmly and comfortably, have conversations about RePhone, discuss technical problems, share ideas/projects, and give feedback on the modules’ development in the future. And then here we go, the RePhone Community.

Now join us in the [RePhone Community](http://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)! Together we seek answers, make interesting stuff, care about each other, and share our experiences.

###   Frequently Asked Questions

Some frequently asked questions in RePhone Community are collected and answered to the topic **["Frequently Asked Questions of RePhone (FAQ)"](http://forum.seeedstudio.com/viewtopic.php?f=71&amp;t=6664&amp;p=23753#p23753)** , the topic will be kept updating whenever a new FAQ comes out.

##  Resources
---
Please go the Wiki page [Xadow Duino](/Xadow_Duino) for more info.

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>