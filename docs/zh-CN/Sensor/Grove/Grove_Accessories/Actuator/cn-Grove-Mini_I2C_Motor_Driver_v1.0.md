---
title: Grove - 迷你I2C电机驱动器v1.0
description: Grove - 迷你I2C电机驱动器v1.0
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Mini_I2C_Motor_Driver_v1.0/
slug: /cn/Grove-Mini_I2C_Motor_Driver_v1.0
last_update:
  date: 03/21/2024
  author: WuFeifei
---

![](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_I2C_motor_2.png)

这款 Grove - Mini I2C 电机驱动器内置了两个 DRV8830。DRV8830 为电池供电的玩具、打印机和其他低压或电池供电的运动控制应用提供了集成的电机驱动解决方案。该模块具有两个 H 桥驱动器，可以驱动两个直流电机或步进电机的两个绕组，以及其他负载，如螺线管。它需要一个板载 5V 电压调节器，可以为 I2C 总线供电。所有驱动器线路都通过二极管保护免受反向电动势的影响。它配备了两个故障指示灯 LED 和四个 LED，用于指示每个电机的运行方向。GROVE 系统插头和 I2C 接口使您能够将驱动器与其他多个设备串联起来。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove%C2%A0-%C2%A0I2C%C2%A0Mini%C2%A0Motor%C2%A0Driver-p-2508.html)

## 功能特性

- 无需外接电源
- 两个 LED 故障指示灯
- 默认最大驱动电流 200 mA
- 兼容 Grove
- I2C 接口
- 可控制电机的速度和方向
- 通道数：2
- 易于使用

:::提示
    更多关于 Grove 模块的信息，请参考 [Grove 系统](https://yiyan.baidu.com/翻译结果)
:::

## 应用建议

这款电机驱动器可用于驱动任何有刷电子电机，只要它在 5v 电压下不超过 1A 的功耗。
可以同时驱动两个电机，同时设置不同的速度和方向。
速度可以完全按比例设置，并由 I2C 命令控制。

- 电池供电：
  - 打印机
  - 玩具
  - 机器人
  - 相机
  - 手机

- 小型执行器、泵等


以下是一些可供参考的项目。

| **制作迷你玩具车**                                           | **制作蒸汽朋克风格的奖杯**                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_toy_car.jpg) | ![](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Seeed_award2015.jpg) |

规格
--------------

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
项目
</th>
<th scope="col">
最小值
</th>
<th scope="col">
典型值
</th>
<th scope="col">
最大值
</th>
<th scope="col">
单位
</th>
</tr>
<tr align="center">
<th scope="row">
工作电压
</th>
<td>
2.75
</td>
<td>
5
</td>
<td>
6.8
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
每通道最大输出电流
</th>
<td>
0.2(默认)
</td>
<td>
-
</td>
<td>
1
</td>
<td>
A
</td>
</tr>
<tr align="center">
<th scope="row">
I2C 总线输入输出电压
</th>
<td colspan="3">
3.3/5
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
通信协议
</th>
<td colspan="3">
I2C
</td>
<td>
/
</td>
</tr>
<tr align="center">
<th scope="row">
默认 I2C 地址
</th>
<td colspan="3">
0xC0, 0xC4
</td>
<td>
/
</td>
</tr>
</table>


支持的平台
-------------------

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::警告
    上述提到的支持平台表示该模块的软件或理论兼容性。在大多数情况下，我们只提供适用于 Arduino 平台的软件库或代码示例。由于无法为所有可能的 MCU 平台提供软件库/演示代码，因此用户需要编写自己的软件库。
:::

硬件概述
-----------------

![](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_motor_driver.jpg)

- **Grove Interface** - Grove 产品具有一个生态系统，它们都使用相同的连接器，可以插入到**Base Shield**上。将此模块连接到 Base Shield 的 I<sup>2</sup>C 端口，它就可以与 Arduino 很好地协同工作。但是，你也可以通过跳线将 Grove - Mini I2C 电机驱动器直接连接到 Arduino，而无需使用 Base Shield。

<table>
<tr>
<th width="150">
Arduino UNO
</th>
<th width="150">
Base Shield
</th>
<th width="150">
Grove - Mini I2C 电机驱动器
</th>
</tr>
<tr align="center">
<td>
5V
</td>
<td rowspan="4">
I2C port
</td>
<td>
VCC
</td>
</tr>
<tr align="center">
<td>
GND
</td>
<td>
GND
</td>
</tr>
<tr align="center">
<td>
SDA
</td>
<td>
SDA
</td>
</tr>
<tr align="center">
<td>
SCL
</td>
<td>
SCL
</td>
</tr>
</table>


- **CH1 故障指示灯** - 通道 1 故障指示灯。
- **CH2 故障指示灯** - 通道 2 故障指示灯。
- **方向指示灯** - 电机方向指示灯。
- **CH1 输出连接器** - 电机 1 连接器。
- **CH2 输出连接器** - 电机 2 连接器。

## 硬件功能

### 改变默认的最大驱动电流

每个通道的默认最大驱动电流为 200mA，请参见板子的前面图片

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/QQ20150817-3.png" alt="pir" width={600} height="auto" /></p>

每个通道（CH1，CH2）都增加了一个电阻，每个电阻（R5，R12）的阻值为 1 Ω。因此，根据以下方程，最大驱动电流为 200mA。

<center>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_I2C_motor_7.png" alt="pir" width={600} height="auto" /></p>

</center>

同时，每个通道都提供了一个预留的可焊接焊盘（CH1 对应 R6，CH2 对应 R13），因此您可以在板上焊接一个电阻来更改每个通道的电阻值。如果在板上增加电阻，以下是新的计算公式。

<center>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_I2C_motor_8.png" alt="pir" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_I2C_motor_9.png" alt="pir" width={600} height="auto" /></p>
</center>
:::警告
每个通道的最大工作电流必须小于 1A。因此，焊接到预留焊盘上的电阻的最小值不应小于 0.2 Ω。
:::

### 改变默认 I<sup>2</sup>C 地址

每个通道的 I<sup>2</sup>C 地址是可变的。请查看板子的背面，您会发现有 4 个跳线焊盘；A0_CH1 和 A1_CH1 用于通道 1，A0_CH2 和 A1_CH2 用于通道 2，如下所示：

<center>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Address_mini_i2c_motor_driver.png" alt="pir" width={600} height="auto" /></p>
</center>

您可以通过焊接或断开每个跳线来改变 I2C 地址：

- 1 - 您需要一个电烙铁，只需将跳线的两侧焊接在一起
- 0 - 您需要一个电烙铁，只需断开跳线的两侧连接

<center>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_I2C_motor_12.png" alt="pir" width={600} height="auto" /></p>
</center>
:::注意
Grove - Mini I2C 电机驱动器的库依赖于默认地址。
:::

## 入门指南

现在，让我们开始使用 Grove - Mini I2C 电机驱动器。

### 准备工作

现在我们将为 Grove - Mini I2C 电机驱动器 v1.0 做一个演示，这需要以下模块。

- 2 * 2V-6V 直流电机
- Seeeduino Lite

**Seeeduino Lite 与 Arduino 兼容**。

如果您使用的是 Arduino UNO 或其他没有 Grove 接口的 Arduino 兼容板，

您将需要一个 Grove Base Shield 来方便地连接 Grove 模块。

如果您是第一次使用 Arduino 或 Seeeduino，请先查阅“Getting_Started_with_Seeeduino”指南，开始您的 Arduino 学习之旅。

### 硬件安装

Grove - Mini I2C 电机驱动器有一个 Grove 插槽，用于连接上述两个模块。
它们分别是：

- 2 * 2V-6V 直流电机 - 连接到 CH1 和 CH2 输出连接器。
- Seeeduino Lite

将 Seeeduino 的 Grove I2C 接口连接到 Mini Motor Driver 的 Grove 接口，如下所示：

![](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_motor_driver_demo.jpg)

### 软件运行

[![](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Arduino_mini_i2c_motor_driver.jpg)](https://www.arduino.cc/)

Grove - Mini I2C 电机驱动器基于 DRV8830 芯片来控制电机。DRV8830 不仅仅是一个双电机驱动器，它还是一个双 H 桥电路。H 桥电路基本上是一种特定的晶体管设置，允许你切换电流的方向。你可以使用 Arduino 来控制它们以任何速度旋转。

由于该模块有两个 H 桥电路，你不仅可以使机器人前进和后退，还可以通过让每个车轮以不同的方向旋转来使机器人转弯。

使用微型 USB 数据线将 Seeeduino 连接到电脑。

现在，让我们使用 Grove - Mini I2C 电机驱动器来控制两个直流电机以正方向或反方向旋转。

下面是一个用于 Arduino 的示例程序。这段代码非常基础，但你也可以根据需要进行修改，以你自己的方式实现控制。

```
/****************************************************************
示例代码演示了用于 SparkFun MiniMoto 板的 Arduino 库的使用，该板使用 TI DRV8830 IC 通过 I2C 进行低压直流电机控制。

这段代码是“啤酒软件”，如果你使用了它，下次在本地遇到我（或任何其他 SparkFun 员工）时，请给我买一杯冷饮。

2013 年 9 月 17 日 - Mike Hord，SparkFun Electronics

代码在 Arduino 1.0.5 版本中开发，适用于 Fio 经典板。
 
**2015年5月针对Arduino 1.6.4版本更新**
****************************************************************/
 
#include <SparkFunMiniMoto.h>  // Include the MiniMoto library
 
// 创建两个具有不同地址设置的 MiniMoto 实例。
MiniMoto motor0(0xC4); // A1 = 1, A0 = clear
MiniMoto motor1(0xC0); // A1 = 1, A0 = 1 (默认)
 
#define FAULTn  16     // 用于故障检测的引脚。
 
// setup() 函数中没有什么特别复杂的操作 - 准备串行端口，打印一些欢迎信息，并将我们的故障引
//脚设置为输入。
void setup()
{
    Serial.begin(9600);
    Serial.println("Hello, world!");
    pinMode(FAULTn, INPUT);
}
 
// loop() 函数只是让电机向一个方向旋转，然后再向另一个方向旋转，同时不断监测是否有故障发
//生。如果发生故障，将通过串行端口报告，然后操作继续进行。
void loop()
{
    Serial.println("Forward!");
    motor0.drive(100);
    motor1.drive(100);
    delayUntil(1000);
    Serial.println("Stop!");
    motor0.stop();
    motor1.stop();
    delay(1000);
    Serial.println("Reverse!");
    motor0.drive(-100);
    motor1.drive(-100);
    delayUntil(1000);
    Serial.println("Brake!");
    motor0.brake();
    motor1.brake();
    delay(1000);
}
 
// delayUntil() 是一个小函数，用于让电机运行指定的时间或直到发生故障。请注意，这只是一个
//非常简单的演示；理想情况下，应该使用中断来处理故障，而不是在电机运行期间阻塞应用程序并
//轮询故障。
void delayUntil(unsigned long elapsedTime)
{
    // See the "BlinkWithoutDelay" example for more details on how
    //  and why this loop works the way it does.
    unsigned long startTime = millis();
    while (startTime + elapsedTime > millis())
    {
        // 请查看“BlinkWithoutDelay”示例以获取更多关于此循环如何工作及其原因的详细信息。
        if (digitalRead(FAULTn) == LOW)
        {
            // 我们将检查两个电机；每个电机的逻辑是相同的。
            byte result = motor0.getFault();
            // 如果结果与FAULT掩码运算后的结果非零，那么存在故障情况，我们应该报告它。
            if (result & FAULT)
            {
                Serial.print("Motor 0 fault: ");
                if (result & OCP) Serial.println("Chip overcurrent!");
                if (result & ILIMIT) Serial.println("Load current limit!");
                if (result & UVLO) Serial.println("Undervoltage!");
                if (result & OTS) Serial.println("Over temp!");
                break; // We want to break out of the motion immediately,
                //  因此我们可以响应故障来停止运动。
            }
            result = motor1.getFault();
            if (result & FAULT)
            {
                Serial.print("Motor 1 fault: ");
                if (result & OCP) Serial.println("Chip overcurrent!");
                if (result & ILIMIT) Serial.println("Load current limit!");
                if (result & UVLO) Serial.println("Undervoltage!");
                if (result & OTS) Serial.println("Over temp!");
                break;
            }
        }
    }
}
```

现在点击上传（CTRL+U）来烧录测试代码。请参考 Getting_Started_with_Seeeduino 以解决任何错误提示，你也可以在社区中添加评论。

### 检查结果

上传完成后，电机将以循环方式在正方向或反方向旋转。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/res/Grove-Mini_I2C_Motor_Driver_v1.0_SCH_PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

- [DRV8830 数据手册](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/res/DRV8830.pdf)
- [Grove - Mini I2C 电机驱动器\_Eagle\_文件](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/res/Grove-Mini_I2C_Motor_Driver_v1.0_SCH_PCB.zip)
- [Grove - Mini I2C 电机驱动器原理图文档](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/res/Grove-Mini_I2C_Motor_Driver_v1.0_SCH.pdf)
- [Grove - Mini I2C 电机驱动器源代码库](https://github.com/Seeed-Studio/Drv8830_Motor_Driver)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Mini_I2C_Motor_Driver_v1.0 -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持，以确保您在使用我们的产品时能够尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
