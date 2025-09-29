---
description: Xadow - RTC（实时时钟）
title: Xadow - RTC（实时时钟）
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Xadow_RTC
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Xadow_RTC/img/Xadow_RTC_01.jpg)

有时候，你总是想知道现在几点了。我是否错过了约会，或者是否到了给我三个月大的孩子喂饭的时间。RTC模块可以为你提供一个实时时钟。你可以让控制器询问模块：“嗨，伙计，现在几点了？”同时，别忘了安装一个小型纽扣电池，它可以为你服务超过六个月。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-RTC-p-1523.html)

##  规格
---
*   实时时钟（RTC）计数秒、分钟、小时、年份日期、月份、星期几以及带有闰年补偿的年份
*   可设置为12小时格式或24小时格式
*   有效期至2100年
*   尺寸：25.43mm x 20.35mm

:::caution
    为了获得稳定的性能，你必须在电池座中放置一个3伏的CR1220锂电池。如果仅使用主电源，模块可能无法正常工作，因为晶体可能无法振荡。
:::

##  演示
---
以下示例展示了一个简单的应用程序，用于设置时间并读取时间。

**硬件安装：**

![](https://files.seeedstudio.com/wiki/Xadow_RTC/img/XadwoRTC.jpg)

注意：当将Xadow RTC连接到Xadow主板时，你需要注意连接方向。连接方法是一个Xadow模块的未填角需要连接到另一个模块的直角（参见每个Xadow模块的四个角）。

**示例代码如下所示：**

```
#include <Wire.h>
#define DS1337_CTRL_ID 0x68

unsigned char  second,minute,hour;
unsigned char  week,day,month;
unsigned int year;

void setup()
{
    Wire.begin();
    Serial.begin(38400);
    while (!Serial) {
        ; // 等待串口连接，仅适用于Leonardo
    }

    fillByYMD(2013,6,17);//2013年6月17日
    fillByHMS(23,15,43);//23:15 43"
    fillWeek(1);//星期一
    setTime();
}

void loop()
{
    readTime();
    Serial.print(year+2000, DEC);
    Serial.print("/");
    Serial.print(month, DEC);
    Serial.print("/");
    Serial.print(day, DEC);
    Serial.print("  ");
    Serial.print(hour, DEC);
    Serial.print(":");
    Serial.print(minute, DEC);
    Serial.print(":");
    Serial.print(second, DEC);
    Serial.print("    ");
    switch (week)// 友好的星期打印输出
    {
        case 1:
        Serial.print("MON");
        break;
        case 2:
        Serial.print("TUE");
        break;
        case 3:
        Serial.print("WED");
        break;
        case 4:
        Serial.print("THU");
        break;
        case 5:
        Serial.print("FRI");
        break;
        case 6:
        Serial.print("SAT");
        break;
        case 7:
        Serial.print("SUN");
        break;
    }
    Serial.println("  ");
    delay(1000);
}
/*函数：从RTC读取时间和日期*/
void readTime(void)
{
    // 使用Wire库连接到RTC
    // 将寄存器指针重置为零
    Wire.beginTransmission(DS1337_CTRL_ID);
    Wire.write(0x00);
    Wire.endTransmission();

    // 请求7字节数据（秒、分钟、小时、星期、日期、月份、年份）
    Wire.requestFrom(DS1337_CTRL_ID, 7);
    // 其中一些需要掩码，因为某些位是控制位
    second       = bcdToDec(Wire.read() & 0x7f);
    minute       = bcdToDec(Wire.read());
    hour       = bcdToDec(Wire.read() & 0x3f);// 如果是12小时制需要更改
    week  = bcdToDec(Wire.read());
    day = bcdToDec(Wire.read());
    month      = bcdToDec(Wire.read());
    year       = bcdToDec(Wire.read());
}
/*函数：将包括日期的时间写入RTC芯片*/
void  setTime(void)
{
    Wire.beginTransmission(DS1337_CTRL_ID);
    Wire.write(0x00);
    Wire.write(decToBcd(second));// 位7开始时钟
    Wire.write(decToBcd(minute));
    Wire.write(decToBcd(hour));  // 如果需要12小时制需要设置位6
    Wire.write(decToBcd(week));
    Wire.write(decToBcd(day));
    Wire.write(decToBcd(month));
    Wire.write(decToBcd(year));
    Wire.endTransmission();
}

unsigned char decToBcd(unsigned char val)
{
    return ( (val/10*16) + (val%10) );
}

//将二进制编码的十进制转换为普通十进制数字
unsigned char  bcdToDec(unsigned char val)
{
    return ( (val/16*10) + (val%16) );
}
void fillByYMD(unsigned int _year, unsigned char _month, unsigned char _day)
{
    year = _year-2000;
    month = _month;
    day = _day;
}
void fillWeek(unsigned char _dow)
{
    week = _dow;
}
void  fillByHMS(unsigned char _hour, unsigned char _minute, unsigned char _second)
{
    // 分配变量
    hour = _hour;
    minute = _minute;
    second = _second;
}
```

*   设置时间。将函数参数更改为当前日期/时间。需要注意参数格式。
```
fillByYMD(2013,6,17);//2013年6月17日
fillByHMS(23,15,43);//23:15 43"
fillWeek(1);//星期一
```
*   输出结果：

![](https://files.seeedstudio.com/wiki/Xadow_RTC/img/Xadow-RTC_Result.jpg)

输出时间像时钟一样变化。一旦设置了时间，RTC将不断更新时钟时间数据。然后你需要注释掉如下代码并重新上传。一个实时时钟就出现了。
```
//setTime();
```

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_RTC/res/Xadow_RTC.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## 资源
---
*   [Xadow RTC Eagle 文件](https://files.seeedstudio.com/wiki/Xadow_RTC/res/Xadow_RTC.zip)

*   [RTC DS1307 数据手册](https://files.seeedstudio.com/wiki/Xadow_RTC/res/DS1307.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时拥有流畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>