---
description: Secret Box
title: Secret Box
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Secret_Box
last_update:
  date: 1/13/2023
  author: shuxu hu
---
**Function**

LinkIt ONE with Grove - Light Sensor, put into a box. when the box is opened, a message will be sent to your phone.

**Connection**

<!-- *   [Grove - Light_Sensor](/Grove-Light_Sensor "Grove - Light Sensor") connect to A0. -->

*   GSM antenna

*   SIM Card

*   Li Battery

**Code**
```
// demo of Grove Starter kit for LinkIt ONE
// Secret box

#include <LGSM.h>

char num[20] = "13425171053";           // your number write here
char text[100] = "Warning: Your box had been opened!!";    // what do you want to send


const int pinLight = A0;                // light sensor connect to A0

bool isLightInBox()
{
    return (analogRead(pinLight)<50);   // when get data less than 50, means light sensor was in box
}

void setup()
{
    Serial.begin(115200);

    while(!isLightInBox());             // until put in box
    delay(2000);
}


void loop()
{
    if(!isLightInBox())                 // box is open
    {
        Serial.println("box had been opened");

        while(!LSMS.ready())
        {
            delay(1000);
        }

        Serial.println("SIM ready for work!");
        LSMS.beginSMS(num);
        LSMS.print(text);

        if(LSMS.endSMS())
        {
            Serial.println("SMS is sent");
        }
        else
        {
            Serial.println("SMS send fail");
        }

        while(!isLightInBox());             // until put in box
        delay(2000);
    }

    delay(10);
}
```

## Tech Support
<div>
  Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
