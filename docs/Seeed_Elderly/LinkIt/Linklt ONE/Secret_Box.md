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

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
