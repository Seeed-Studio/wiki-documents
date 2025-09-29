---
description: 秘密盒子
title: 秘密盒子
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Secret_Box
last_update:
  date: 1/13/2023
  author: shuxu hu
---

**功能**

使用 LinkIt ONE 和 Grove - 光传感器，将其放入一个盒子中。当盒子被打开时，会向您的手机发送一条消息。

**连接**

<!-- *   [Grove - Light_Sensor](/cn/Grove-Light_Sensor "Grove - Light Sensor") connect to A0. -->

*   GSM 天线

*   SIM 卡

*   锂电池

**代码**
```
// Grove Starter kit for LinkIt ONE 的演示
// 秘密盒子

#include <LGSM.h>

char num[20] = "13425171053";           // 在这里填写您的电话号码
char text[100] = "警告：您的盒子已被打开！！";    // 您想发送的消息内容


const int pinLight = A0;                // 光传感器连接到 A0

bool isLightInBox()
{
    return (analogRead(pinLight)<50);   // 当读取的数据小于 50 时，表示光传感器在盒子中
}

void setup()
{
    Serial.begin(115200);

    while(!isLightInBox());             // 直到放入盒子中
    delay(2000);
}


void loop()
{
    if(!isLightInBox())                 // 盒子被打开
    {
        Serial.println("盒子已被打开");

        while(!LSMS.ready())
        {
            delay(1000);
        }

        Serial.println("SIM 准备工作！");
        LSMS.beginSMS(num);
        LSMS.print(text);

        if(LSMS.endSMS())
        {
            Serial.println("短信已发送");
        }
        else
        {
            Serial.println("短信发送失败");
        }

        while(!isLightInBox());             // 直到放入盒子中
        delay(2000);
    }

    delay(10);
}
```

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>