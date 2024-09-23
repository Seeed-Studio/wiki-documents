---
description: Grove - 适用于Arduino的DS1307实时时钟模块
title: Grove - 适用于Arduino的DS1307实时时钟模块
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-RTC
last_update:
  date: 03/23/2024
  author: WuFeifei
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-RTC/img/45d.jpg" /></div>

RTC模块基于DS1307时钟芯片，支持I2C协议。它使用锂电池（CR1225）供电。该时钟/日历可以提供秒、分、时、日、日期、月份和年份。对于天数少于31天的月份，月末日期会自动调整，包括闰年的校正。时钟可以设置为24小时制或12小时制，并带有上午/下午指示器。它的有效期至2100年。为了获得稳健的性能，您必须在电池座中放置一个3伏特的CR1225锂电池。如果只使用主电源，模块可能无法正常工作，因为晶体可能不会振荡。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-RTC-p-758.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

:::注意
       电池未包含在内。
:::

## 预习

如果您对Arduino的RTC不熟悉，强烈建议您提前阅读有关Arduino的RTC的介绍：

<p style={{textAlign: 'center'}}><a href="https://blog.seeedstudio.com/blog/2019/11/19/arduino-tutorial-using-ds1307-rtc-with-arduino/" target="_blank"><img src="https://blog.seeedstudio.com/wp-content/uploads/2019/11/image-88.png" border="0" /></a></p>

## 规格参数

- PCB 尺寸：2.0cm*4.0cm
- 接口：2.0mm间距的针脚式接头
- IO 结构：SCL,SDA,VCC,GND
- ROHS：符合
- VCC：3.3~5.5V
- 逻辑高电平输入：2.2~VCC+0.3 V
- 逻辑低电平输入：-0.3~+0.8 V
- 电池电压：2.0~3.5 V

:::提示
更多关于Grove模块的详细信息，请参考[Grove系统](https://wiki.seeedstudio.com/Grove_System/)
:::

## 支持的平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div> |

:::警告
上面提到的支持平台是模块软件或理论兼容性的指示。在大多数情况下，我们只针对Arduino平台提供软件库或代码示例。我们无法为所有可能的MCU平台提供软件库/示例代码。因此，用户必须自己编写软件库。
:::

## 入门指南

### 玩转 Arduino

#### 硬件

- **第一步**。 准备以下物品：

| Seeeduino V4.2 | Base Shield| Grove-RTC |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-RTC/img/45d_small.jpg" /></div>|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-RTC-p-758.html)|

- **步骤 2.**  将Grove-RTC连接到Grove-Base Shield的**I2C**端口。
- **步骤 3.** 将Grove-Base Shield插入Seeeduino。
- **步骤 4.**  通过USB线将Seeeduino连接到电脑。

:::注意
为了获得稳健的性能，您必须在电池座中放置一个3伏特的CR1225锂电池。如果只使用主电源，模块可能无法正常工作，因为晶体可能不会振荡。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-RTC/img/arduino_connection.jpg" /></div>

:::注意
如果我们没有Base Shield，也可以直接将Grove-RTC连接到Arduino板上。请按照以下连接方式进行连接。
:::

| Seeeduino_v4 | Grove-RTC  |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |

#### 软件

**步骤 1.**  下载[RTC库](https://github.com/Seeed-Studio/RTC_DS1307/archive/master.zip)。

**步骤 2.**参考[如何安装Arduino库](https://wiki.seeedstudio.com/How_to_install_Arduino_Library)来安装Arduino的库。

**步骤 3.** 创建一个新的Arduino草图，并将以下代码粘贴到其中，或者通过路径直接打开代码：**文件 -> 示例 -> RTC -> SetTimeAndDisplay**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-RTC/img/library%20example.jpg" /></div>

```cpp
#include <Wire.h>
#include "DS1307.h"

DS1307 clock;//define a object of DS1307 class
void setup()
{
    Serial.begin(9600);
    clock.begin();
    clock.fillByYMD(2013,1,19);//Jan 19,2013
    clock.fillByHMS(15,28,30);//15:28 30"
    clock.fillDayOfWeek(SAT);//Saturday
    clock.setTime();//write time to the RTC chip
}
void loop()
{
    printTime();
}
    /*Function: Display time on the serial monitor*/
void printTime()
{
    clock.getTime();
    Serial.print(clock.hour, DEC);
    Serial.print(":");
    Serial.print(clock.minute, DEC);
    Serial.print(":");
    Serial.print(clock.second, DEC);
    Serial.print("  ");
    Serial.print(clock.month, DEC);
    Serial.print("/");
    Serial.print(clock.dayOfMonth, DEC);
    Serial.print("/");
    Serial.print(clock.year+2000, DEC);
    Serial.print(" ");
    Serial.print(clock.dayOfMonth);
    Serial.print("*");
    switch (clock.dayOfWeek)// Friendly printout the weekday
    {
        case MON:
        Serial.print("MON");
        break;
        case TUE:
        Serial.print("TUE");
        break;
        case WED:
        Serial.print("WED");
        break;
        case THU:
        Serial.print("THU");
        break;
        case FRI:
        Serial.print("FRI");
        break;
        case SAT:
        Serial.print("SAT");
        break;
        case SUN:
        Serial.print("SUN");
        break;
    }
    Serial.println(" ");
}
```

**步骤 4.**   设置时间。将函数参数更改为当前日期/时间。请注意参数的格式。

```c
clock.fillByYMD(2013,1,19);//Jan 19,2013
clock.fillByHMS(15,28,30);//15:28 30"
clock.fillDayOfWeek(SAT);//Saturday
```

**步骤 5.** 上传代码并打开串行监视器以接收传感器的数据。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-RTC/img/arduino%20result.png" /></div>

### 玩转 Raspberry Pi

#### 硬件

- **步骤 1.** 准备以下物品：

| Raspberry pi | GrovePi_Plus | Grove-RTC |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-RTC/img/45d_small.jpg" /></div>|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[立即获取](https://www.seeedstudio.com/Grove-RTC-p-758.html)|

- **步骤 2.**  将GrovePi_Plus插入Raspberry Pi。
- **步骤 3.** 将Grove-RTC连接到GrovePi_Plus的**I2C**端口。
- **步骤 4.** 通过USB线将Raspberry Pi连接到电脑。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-RTC/img/rasp_connection.jpg" /></div>

#### 软件

- **步骤 1.** 按照[设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)的指引来配置开发环境。
- **步骤 2.** 使用Git克隆Github仓库。

```bash
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **步骤 3.** 执行以下命令来使用此传感器。

```bash
cd ~/GrovePi/Software/Python
python grove_i2c_rtc.py
```

以下是代码：

```python
#!/usr/bin/env python
#
# GrovePi Example for using the Grove I2C RTC (https://www.seeedstudio.com/wiki/Grove_-_RTC)
#
# The GrovePi connects the Raspberry Pi and Grove sensors.  You can learn more about GrovePi here:  http://www.dexterindustries.com/GrovePi
#
# Have a question about this example?  Ask on the forums here:  http://forum.dexterindustries.com/c/grovepi
#
'''
## License
The MIT License (MIT)
GrovePi for the Raspberry Pi: an open source platform for connecting Grove Sensors to the Raspberry Pi.
Copyright (C) 2017  Dexter Industries
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
'''

import time
import grovepi

# Connect the Grove Real Time Clock to any I2C port eg. I2C-1
# Can be found at I2C address 0x68
# SCL,SDA,VCC,GND

while True:
    try:
        print(grovepi.rtc_getTime())
        time.sleep(.5)

    except IOError:
        print ("Error")
```

- **步骤 4.** 这就是结果。

  ![](https://files.seeedstudio.com/wiki/Grove-RTC/img/rpi_display.jpg)

**示例 2：Grove_rtc**

您还可以使用此示例来展示常见的时间。请创建名为 grove_rtc.py 的文件，并将以下代码复制到其中。

```python
    '''
     * Grove-RTC.py
     * Demo for Raspberry Pi
     *
     * Copyright (c) 2014 seeed technology inc.
     * Website    : community.seeedstudio.com/
     * Author     : Lambor
     * Create Time: Nov 2014
     * Change Log :
     *
     * The MIT License (MIT)
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     '''

    #!/usr/bin/python
import time
import smbus


    bus = smbus.SMBus(1)    # 0 = /dev/i2c-0 (port I2C0), 1 = /dev/i2c-1 (port I2C1)   

class DS1307():     
        def __init__(self):
            self.MON = 1
            self.TUE = 2
            self.WED = 3
            self.THU = 4
            self.FRI = 5
            self.SAT = 6
            self.SUN = 7
            self.DS1307_I2C_ADDRESS = 0x68

            print 'begin'

        def decToBcd(self, val):
            return ( (val/10*16) + (val%10) )

        def bcdToDec(self,  val):
            return ( (val/16*10) + (val%16) )

        def begin(self, news):
            print news

        def startClock(self):   
            bus.write_byte(self.DS1307_I2C_ADDRESS, 0x00)
            self.second = bus.read_byte(self.DS1307_I2C_ADDRESS) & 0x7f
            bus.write_byte_data(self.DS1307_I2C_ADDRESS, 0x00, self.second)

            print 'startClock..'

        def stopClock(self):                        
            bus.write_byte(self.DS1307_I2C_ADDRESS, 0x00)
            self.second = bus.read_byte(self.DS1307_I2C_ADDRESS) | 0x80
            bus.write_byte_data(self.DS1307_I2C_ADDRESS, 0x00, self.second)         

            print 'stopClock..'

        def setTime(self):
            data = [self.decToBcd(self.second), self.decToBcd(self.minute), \
                    self.decToBcd(self.hour), self.decToBcd(self.dayOfWeek), \
                    self.decToBcd(self.dayOfMonth), self.decToBcd(self.month), \
                    self.decToBcd(self.year)]

            bus.write_byte(self.DS1307_I2C_ADDRESS, 0x00)
            bus.write_i2c_block_data(self.DS1307_I2C_ADDRESS,0x00,data)

            print 'setTime..'

        def getTime(self):
            bus.write_byte(self.DS1307_I2C_ADDRESS, 0x00)
            data = bus.read_i2c_block_data(self.DS1307_I2C_ADDRESS,0x00)
            #A few of these need masks because certain bits are control bits
            self.second = self.bcdToDec(data[0] & 0x7f)
            self.minute = self.bcdToDec(data[1])
            self.hour = self.bcdToDec(data[2] & 0x3f)  #Need to change this if 12 hour am/pm
            self.dayOfWeek = self.bcdToDec(data[3])
            self.dayOfMonth = self.bcdToDec(data[4])
            self.month = self.bcdToDec(data[5])
            self.year = self.bcdToDec(data[6])

            print 'getTime..'

        def fillByHMS(self, _hour,  _minute,  _second):
            self.hour = _hour
            self.minute = _minute
            self.second = _second

            print 'fillByHMS..'

        def fillByYMD(self, _year,  _month,  _day):     
            self.year = _year - 2000
            self.month = _month;
            self.dayOfMonth = _day

            print 'fillByYMD..'

        def fillDayOfWeek(self,  _dow):     
            self.dayOfWeek = _dow

            print 'fillDayOfWeek..'

    if __name__ == "__main__":
        clock = DS1307()
        clock.fillByYMD(2015,3,5)
        clock.fillByHMS(12,42,30)
        clock.fillDayOfWeek(clock.THU)  
        clock.setTime()
        while True:     
            clock.getTime()
            print clock.hour, ":", clock.minute, ":", \
                    clock.second, " ", clock.dayOfMonth, "/", \
                    clock.month, "/", clock.year,"  ", "weekday", \
                    ":", clock.dayOfWeek            
            time.sleep(1)
```

执行以下命令来使用此传感器。

```bash
    sudo python grove_rtc.py
```

这是结果。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-RTC/img/rpi_display2.jpg" /></div>

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-RTC/res/Real_Time_Clock.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>
## 资源

- **[Eagle]** [Grove-RTC Eagle 格式文件](https://files.seeedstudio.com/wiki/Grove-RTC/res/Real_Time_Clock.zip)
- **[PDF]** [Grove-RTC 原理图 PDF 格式文件](https://files.seeedstudio.com/wiki/Grove-RTC/res/Grove - RTC v1.1 Sch.pdf)
- **[PDF]** [Grove-RTC PCB PDF 格式文件](https://files.seeedstudio.com/wiki/Grove-RTC/res/Grove - RTC v1.1 PCB.pdf)
- **[库文件]** [RTC 的 Github 仓库](https://github.com/Seeed-Studio/RTC_DS1307/archive/master.zip)
- **[数据手册]** [DS1307 数据手册](https://files.seeedstudio.com/wiki/Grove-RTC/res/DS1307.pdf)

## 项目

**使用Arduino和实时时钟**：是否曾经想要制作一个能够按照计划激活的项目？使用实时时钟（RTC）是一个很好的方法！

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/robotgeek-projects-team/using-a-real-time-clock-with-arduino-6b3896/embed' width='350'></iframe>

**彩色时钟**：一款能显示你的能量水平，并在你靠近时向你打招呼的时钟。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/zou-wei/colorful-clock-4cea6b/embed' width='350'></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供全方位的支持，以确保您在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
