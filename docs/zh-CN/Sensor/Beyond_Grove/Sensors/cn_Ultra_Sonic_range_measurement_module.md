---
title: 超声波距离测量模块
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Ultra_Sonic_range_measurement_module/
slug: /cn/Ultra_Sonic_range_measurement_module
last_update:
  date: 01/11/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Ultra_Sonic_range_measurement_module/img/front.jpg)

Seeed 超声波传感器是一种非接触式距离测量模块，同时兼容电子积木。它设计用于简单的模块化项目，并具有工业级性能。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/ultra-sonic-range-measurement-module-p-626.html?cPath=144_149)

## 特性

* 检测范围：3cm-4m
* 最佳检测角度：30度
* 电子积木兼容接口
* 5V直流电源供电
* 面包板友好设计
* 双换能器
* Arduino库支持

## 规格

<table>
<tr>
<td width="400px"> 供电电压</td>
<td width="200px"> 5V</td>
</tr>
<tr>
<td> 全局电流消耗</td>
<td> 15 mA</td>
</tr>
<tr>
<td> 超声波频率</td>
<td> 40k Hz</td>
</tr>
<tr>
<td> 最大范围</td>
<td> 400 cm</td>
</tr>
<tr>
<td> 最小范围</td>
<td> 3 cm</td>
</tr>
<tr>
<td> 分辨率</td>
<td> 1 cm</td>
</tr>
<tr>
<td> 触发脉冲宽度</td>
<td> 10 μs</td>
</tr>
<tr>
<td> 外形尺寸</td>
<td> 43x20x15 mm</td>
</tr>
</table>

## 入门指南

一个短的超声波脉冲在时间点0发射，被物体反射后传感器接收到该信号并将其转换为电信号。下一次脉冲可以在回声消失后发射。这个时间周期称为循环周期，推荐的循环周期不应少于50ms。如果向信号引脚发送一个10μs宽度的触发脉冲，超声波模块将输出8个40kHz的超声波信号并检测回声。测量的距离与回声脉冲宽度成正比，可以通过上述公式计算。如果未检测到障碍物，输出引脚将提供一个38ms的高电平信号。

### 使用 Arduino

#### 硬件

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | Base Shield | Ultra_Sonic_range_measurement_module |
|----------------|-------------|---------------------------------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Ultra_Sonic_range_measurement_module/img/45d_small.jpg)|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/ultra-sonic-range-measurement-module-p-626.html?cPath=144_149)|

- **步骤 2.** 将 Ultra_Sonic_range_measurement_module 连接到 Grove-Base Shield 的 **D2** 端口。
- **步骤 3.** 将 Grove-Base Shield 插入 Seeeduino。
- **步骤 4.** 使用 USB 数据线将 Seeeduino 连接到电脑。

:::note
如果没有 Grove Base Shield，我们也可以直接将该模块连接到 Seeeduino，如下所示。
:::

| Seeeduino       | ???                     |
|-----------------|-------------------------|
| 5V              | 红色                   |
| GND             | 黑色                   |
| 未连接          | 白色                   |
| D2              | 黄色                   |

#### 软件

**步骤 1.** 复制以下代码并将其烧录到控制板中。  
**步骤 2.** 上传代码并打开监视窗口。

```cpp
#include "Arduino.h"
class Ultrasonic
{
    public:
    Ultrasonic(int pin);
    void DistanceMeasure(void);
    double microsecondsToCentimeters(void);
    double microsecondsToInches(void);
    private:
    int this_pin;//与超声波测距模块的SIG引脚连接的Arduino引脚编号。
    long duration;//接收到的脉冲时间。
};
Ultrasonic::Ultrasonic(int pin)
{
    this_pin = pin;
}
/*开始检测并获取回波信号*/
void Ultrasonic::DistanceMeasure(void)
{
    pinMode(this_pin, OUTPUT);
    digitalWrite(this_pin, LOW);
    delayMicroseconds(2);
    digitalWrite(this_pin, HIGH);
    delayMicroseconds(5);
    digitalWrite(this_pin,LOW);
    pinMode(this_pin,INPUT);
    duration = pulseIn(this_pin,HIGH);
}
/*测量距离范围为0到400厘米*/
double Ultrasonic::microsecondsToCentimeters(void)
{
    return duration/29.0/2.0;
}
/*测量距离范围为0到157英寸*/
double Ultrasonic::microsecondsToInches(void)
{
    return duration/74.0/2.0;
}

Ultrasonic ultrasonic(2);
void setup()
{
    Serial.begin(9600);
}
void loop()
{
    double RangeInInches;
    double RangeInCentimeters;
    ultrasonic.DistanceMeasure();//获取当前信号时间。
    RangeInInches = ultrasonic.microsecondsToInches();//将时间转换为英寸。
    RangeInCentimeters = ultrasonic.microsecondsToCentimeters();//将时间转换为厘米。
    Serial.println("前方障碍物的距离是: ");
    Serial.print(RangeInInches);//0~157英寸
    Serial.println(" 英寸");
    Serial.print(RangeInCentimeters);//0~400厘米
    Serial.println(" 厘米");
    delay(1000);
}
```

## 技术支持与产品讨论

如果您遇到任何技术问题，请将问题提交到我们的 [论坛](http://forum.seeedstudio.com/)。  
感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供了多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>