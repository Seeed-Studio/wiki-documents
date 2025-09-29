---
description: Xadow - LED 5x7 v1.0
title: Xadow - LED 5x7 v1.0
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_LED_5_multiply_7_v1.0
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Xadow_LED_5_multiply_7_v1.0/img/Xadow_LED_01.jpg)

Xadow LED 5x7 包含两个部分：一个 LED 面板和一个 LED 控制器。LED 面板是一个 5x7 单色矩阵。LED 控制器是一个控制模块，用于通过 Atmega168PV 的 12 个 I/O 引脚控制 LED 面板。您可以通过 I2C 接口向 LED 控制器发送命令，然后让 LED 控制器控制 LED 显示。例如，显示字母和数字，或者进入睡眠模式以减少功耗。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/depot/xadow-led-p-1518.html)

##  规格
---
*   工作电压：3.3V
*   内置微控制器
*   控制模式：I2C（地址 0x04）
*   尺寸：25.43mm x 20.35mm

##  演示
---
如介绍中所述，LED 可以显示字母和数字。接下来我们将展示一个有趣的演示。

硬件安装如下图所示：

![](https://files.seeedstudio.com/wiki/Xadow_LED_5_multiply_7_v1.0/img/XadowLED5X7.jpg)

注意：将 Xadow LED 5X7 连接到 Xadow 主板时，应注意连接方向。连接方法是一个 Xadow 模块的未填角需要连接到另一个模块的直角（参见每个 Xadow 模块的四个角）。

用于显示字符串或字符的测试代码：

```
#include "Wire.h"
#define XADOW_DEBUG 1
#define LEDAddress 0x04

#define DISP_CHAR_5X7    0x80
#define DISP_STRING        0x81
#define SET_DISP_ORIENTATION 0x82
/*LED 矩阵显示方向的宏定义*/
#define RIGHT_TO_LEFT 0
#define LEFT_TO_RIGHT 1
#define POWER_DOWN  0x83
uint8_t buffer[24];
int error;
int n;
char *str = "SeeedStudio123";
void setup(void)
{
    Wire.begin();
    delay(100);
#if 0
    TESTIO();
    if(error==0)
    {
        DDRB|=0x80;
        PORTB&=~0x80;
    }
#endif

}
void loop(void)
{
    for(n=0;n<100;n++)
    {
        dispString(str,strlen(str),150);
        delay(300);
    }
    //在 Xadow LED 上显示 "seeed0728"（9 个字符），字符移动一步耗时 150ms

}

/**********************************************************************/
/*函数：通过 I2C 向 Xadow LED 发送命令以显示字符串。*/
/*参数：-char* data_，存储要在 Xadow LED 上显示的字符串。*/
/*      -uint8_t len，data_ 的长度。*/
/*      -uint16_t time，字符移动一步的时间。*/
/*返回：void                                                        */
void dispString(char* data_,uint8_t len,uint16_t time)
{
    Wire.beginTransmission(LEDAddress);
    Wire.write(DISP_STRING);
    Wire.write(len);
    Wire.write((uint8_t*)data_,len);
    Wire.write(time>>8); //时间的高字节
    Wire.write(time);//时间的低字节
    Wire.endTransmission();
}
void dispChar(uint8_t data_,uint16_t time)
{
    Wire.beginTransmission(LEDAddress);
    Wire.write(DISP_CHAR_5X7);
    Wire.write(data_);
    Wire.write(time>>8); //时间的高字节
    Wire.write(time);//时间的低字节
    Wire.endTransmission();
}
void setDispOrientation(uint8_t orientation)
{
    Wire.beginTransmission(LEDAddress);
    Wire.write(SET_DISP_ORIENTATION);
    Wire.write(orientation);
    Wire.endTransmission();
}
void powerDown()
{
    Wire.beginTransmission(LEDAddress);
    Wire.write(POWER_DOWN);
    Wire.endTransmission();
    digitalWrite(3,HIGH);
}
void wakeUp()
{
    Wire.beginTransmission(LEDAddress);
    Wire.endTransmission();
}

void TESTIO(void)
{

    DDRB|=0x0e;
    PORTB&=~0x0e;
    DDRF|=0x01;
    PORTF&=~0x01;
    DDRD&=~0x0f;

    PORTB|=0x04;
    PORTF|=0x01;
    delay(30);
    if(!(PIND&0x01))
    {
        error=1;
    }
    if(PIND&0x02)
    {
        error=1;
    }
    if(!(PIND&0x04))
    {
        error=1;
    }
    if(PIND&0x08)
    {
        error=1;
    }
    PORTB&=~0x04;
    PORTB|=0x0a;
    PORTF&=~0x01;
    delay(30);
    if(PIND&0x01)
    {
        error=1;
    }
    if(!(PIND&0x02))
    {
        error=1;
    }
    if(PIND&0x04)
    {
        error=1;
    }
    if(!(PIND&0x08))
    {
        error=1;
    }
    Serial.println(error);
}
```

上传代码到 Xadow 主板后，您可以看到以下场景：

![](https://files.seeedstudio.com/wiki/Xadow_LED_5_multiply_7_v1.0/img/LED_Effect_Diagram_.JPG)

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_LED_5_multiply_7_v1.0/res/Xadow_LED_5X7_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## 资源
---
*   [Xadow LED 5X7 Eagle 文件](https://files.seeedstudio.com/wiki/Xadow_LED_5_multiply_7_v1.0/res/Xadow_LED_5X7_eagle_file.zip)

*   [Xadow LED 固件](https://files.seeedstudio.com/wiki/Xadow_LED_5_multiply_7_v1.0/res/Xadow_LED_Firmware.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时拥有顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>