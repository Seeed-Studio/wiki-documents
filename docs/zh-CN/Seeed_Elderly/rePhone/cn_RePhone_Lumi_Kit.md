---
description: RePhone Lumi Kit
title: RePhone Lumi Kit
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/RePhone_Lumi_Kit
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/RePhone_Lumi_Kit/img/RePhone_Lumi_Kit_wiki_2.jpg)

RePhone Lumi Kit 专为 LED 爱好者设计——将 Xadow GSM+BLE 模块嵌入到您的炫酷照明设备中，并通过短信或蓝牙控制灯光！

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/RePhone-Lumi-Kit-p-2623.html)

##   规格
---
###   Xadow GSM+BLE

<table>
<tr>
<td> 微控制器 </td>
<td> MT2502 </td>
</tr>
<tr>
<td> MCU 核心 </td>
<td> 32位 ARM7EJ-STM RISC 处理器 </td>
</tr>
<tr>
<td> RAM </td>
<td> 4 MB </td>
</tr>
<tr>
<td> 闪存 </td>
<td> 16 MB </td>
</tr>
<tr>
<td> 电源供应 </td>
<td> 3.3 ~ 4.2V（无 SIM）/3.5 ~ 4.2V（有 SIM） </td>
</tr>
<tr>
<td> 功耗 </td>
<td> 20mW/30mW/52mW @ 待机（无无线电）/待机（GSM）/待机（BT） </td>
</tr>
<tr>
<td> 四频段 </td>
<td> 850/900/1800/1900 MHz </td>
</tr>
<tr>
<td> GPRS </td>
<td> Class 12 调制解调器 </td>
</tr>
<tr>
<td> 时钟速度 </td>
<td> 260 MHz </td>
</tr>
<tr>
<td> 连接器 </td>
<td> 35 PIN 连接器 &amp; 11 PIN 连接器用于 Xadow 模块；JST 1.0 连接器用于电池 </td>
</tr>
<tr>
<td> 接口 </td>
<td> LCD、音频、I2C、SPI、UART 和 GPIO 等 </td>
</tr>
<tr>
<td> 尺寸 </td>
<td> 25.37mm × 20.30mm / 1" × 0.8" </td>
</tr>
</table>

###   Xadow Duino

<table>
<tr>
<td> 微控制器 </td>
<td> ATmega32u4 </td>
</tr>
<tr>
<td> 电源供应 </td>
<td> 通过 USB 提供 5V，最大电流为 1.5A；通过电池插座提供 3.3 ~ 4.2V，最大电流为 1.5A；通过分线针脚提供 3.3 ~ 6V，最大电流为 500mA；通过 Xadow GSM+BLE 提供 3.3 ~ 4.2V，最大电流为 500mA </td>
</tr>
<tr>
<td> 充电电流 </td>
<td> 500 mA </td>
</tr>
<tr>
<td> 闪存 </td>
<td> 32 KB（ATmega32u4），其中 4 KB 用于引导加载程序 </td>
</tr>
<tr>
<td> SRAM </td>
<td> 2.5 KB（ATmega32u4） </td>
</tr>
<tr>
<td> EEPROM </td>
<td> 1 KB（ATmega32u4） </td>
</tr>
<tr>
<td> 时钟速度 </td>
<td> 16 MHz </td>
</tr>
<tr>
<td> 连接器 </td>
<td> 2 × 11 PIN Xadow 连接器；用于 RGB LED WS2812b 的焊盘 </td>
</tr>
<tr>
<td> 接口 </td>
<td> 通过 I2C（7位地址 0x23）与 Xadow GSM+BLE 接口 </td>
</tr>
<tr>
<td> 尺寸 </td>
<td> 25.37mm × 20.30mm / 1" × 0.8" </td>
</tr>
</table>

###   Xadow GSM Breakout

<table>
<tr>
<td> 尺寸 </td>
<td> 25.37mm × 20.30mm / 1" × 0.8" </td>
</tr>
</table>

##  模块连接
---
Xadow GSM+BLE 集成了一个 Xadow 36 Pin 连接器和一个 Xadow 11 Pin 连接器。如图所示，您可以使用 Xadow 36 Pin 电缆将 Xadow GSM+BLE 连接到 Xadow GSM Breakout，但请务必确保电缆插入**牢固**且**平整**，最重要的是，**保持“TOP”侧朝上**。Xadow 11 Pin 连接器设计更加灵活，您可以使用 Xadow 11 Pin 扁平电缆以任何方式连接 Xadow Duino 和主板，同样需要确保电缆插入牢固。

![](https://files.seeedstudio.com/wiki/RePhone_Lumi_Kit/img/RePhone_Lumi_Kit_wiki_2.jpg)

## 使用短信控制灯光！
---
以下是一个通过向您的 RePhone 发送消息来控制 RGB LED 的示例。

<!-- 首先，您需要按照 **[Arduino IDE for RePhone Kit](/cn/Arduino_IDE_for_RePhone_Kit "Arduino IDE for RePhone Kit")** 中的说明下载适用于 RePhone Kit 的 Arduino IDE，并安装驱动程序。 -->
然后将以下代码复制到适用于 RePhone 的 Arduino IDE 中。选择 **板类型为 "RePhone"** 并通过 **"MTK USB Debug Port"** 下载代码。
```
#include <LCheckSIM.h>
#include <LGSM.h>
#include <LWs2812.h>
#include <string.h>
#include <stdio.h>
#include <stdlib.h>

//短信指令 0 : "OFF" - 关闭显示。
//短信指令 1 : "R100G0B0" - 红色值为 100，绿色值为 0，蓝色值为 0。
char num[20];
char buf_contex[200];


void setup()
{
    Serial.begin(115200);
    Serial.print("Ws2812 测试。\r\n");
}

void loop()
{
    unsigned long rgb_color;

    if(LSMS.available())
    {
        LSMS.remoteNumber(num, 20);
        LSMS.remoteContent(buf_contex, 50);

        Serial.println("收到新短信：");

        Serial.print("号码：");
        Serial.println(num);

        Serial.print("内容：");
        Serial.println(buf_contex);

        if(strcmp("OFF", buf_contex) == 0)
        {
            Serial.print("RGB 关闭。\r\n");
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
                        Serial.print("找到 RGB 标志。\r\n");
                        char color_r[4] = {0};
                        char color_g[4] = {0};
                        char color_b[4] = {0};

                        sscanf(buf_contex + 1,"%[^G]", color_r);
                        sscanf(buf_contex,"%*[^G]G%[^B]", color_g);
                        sscanf(buf_contex,"%*[^B]B%[^\0]", color_b);

                        rgb_color = atol(color_r)*256*256 + atol(color_g)*256 + atol(color_b);

                        Serial.print("RGB 颜色值为 ");
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

在此代码中，我们设置了短信指令为：
···
**"OFF"** - 关闭显示。
**"R100G0B0"** - 红色值为 100，绿色值为 0，蓝色值为 0。
···

因此，如果我们向 RePhone 发送 **"R100G0B0"**，LED 将变为红色，如下图所示：

![](https://files.seeedstudio.com/wiki/RePhone_Lumi_Kit/img/TESTR100.jpg)

## 更多示例代码
---
如果您正准备开始一个更有趣的项目，尝试一些示例代码将是一个不错的起点。

1. 在 **偏好设置** 中简单地将您的 **草图文件夹位置** 设置为您安装 Arduino IDE for RePhone 的位置，然后您就可以看到示例代码。

![](https://files.seeedstudio.com/wiki/RePhone_Lumi_Kit/img/Arduino_Sketchlocation.png)

2. 您可以在以下路径中找到为所有 RePhone 模块手动编写的 Arduino 示例代码：

_**Arduino_IDE_for_RePhone-master\hardware\arduino\mtk\libraries**_

![](https://files.seeedstudio.com/wiki/RePhone_Lumi_Kit/img/Example_code_Arduino_IDE.png)

## RePhone 社区
---
[![](https://files.seeedstudio.com/wiki/RePhone_Lumi_Kit/img/RePhone_Community-2.png)](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)

我们一直在寻找一个更好的地方，让我们的支持者（RePhone 用户）可以聚在一起，温暖舒适地交流关于 RePhone 的话题，讨论技术问题，分享创意和项目，并对模块的未来开发提出反馈。于是，我们创建了 RePhone 社区。

现在加入我们 [RePhone 社区](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)！我们一起寻找答案，制作有趣的东西，关心彼此，并分享我们的经验。

### 常见问题解答

一些在 RePhone 社区中经常被问到的问题已被收集并回答在主题 **["RePhone 常见问题解答 (FAQ)"](https://forum.seeedstudio.com/viewtopic.php?f=71&amp;t=6664&amp;p=23753#p23753)** 中，该主题会在有新的常见问题出现时持续更新。

## 资源
---
<!-- 请访问 Wiki 页面 [Xadow Duino](/cn/Xadow_Duino) 了解更多信息。 -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供了多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>