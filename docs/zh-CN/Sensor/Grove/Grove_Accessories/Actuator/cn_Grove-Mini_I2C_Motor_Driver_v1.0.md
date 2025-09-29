---
title: Grove - Mini I2C 电机驱动器 v1.0
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-Mini_I2C_Motor_Driver_v1.0/
slug: /cn/Grove-Mini_I2C_Motor_Driver_v1.0
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_I2C_motor_2.png)

Grove - Mini I2C 电机驱动器包含两个 DRV8830。DRV8830 为电池供电的玩具、打印机以及其他低电压或电池供电的运动控制应用提供了集成的电机驱动解决方案。该模块具有两个 H 桥驱动器，可以驱动两个直流电机或步进电机的两个绕组，以及其他负载如电磁阀。它需要一个板载 5V 电压调节器，可以为 I2C 总线供电。所有驱动线路都通过二极管保护以防止反向电动势。它配备两个 LED 用于故障指示，以及四个 LED 用于指示每个电机的运行方向。GROVE 系统插头和 I2C 接口使您可以将驱动器与许多其他设备进行串联。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove%C2%A0-%C2%A0I2C%C2%A0Mini%C2%A0Motor%C2%A0Driver-p-2508.html)

特点
--------

- 无需外部电源
- 两个 LED 用于故障指示
- 默认最大驱动电流 200 mA
- Grove 兼容
- I2C 接口
- 可控制电机的速度和方向
- 通道数量：2
- 易于使用

:::tip
    更多关于 Grove 模块的详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

应用场景
-----------------

此电机驱动器可以驱动任何刷式电子电机，只要其在 5V 下的电流消耗不超过 1A。两个电机可以同时驱动，并设置为不同的速度和方向。速度可以完全按比例设置，并通过 I2C 命令控制。

- 电池供电设备：
  - 打印机
  - 玩具
  - 机器人
  - 摄像机
  - 手机

- 小型执行器、泵等

以下是一些项目供您参考。

| **制作迷你玩具车**                                              | **制作蒸汽朋克风格奖杯**                                       |
|----------------------------------------------------------------------|------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_toy_car.jpg)   | ![](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Seeed_award2015.jpg)  |

规格参数
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
0.2（默认）
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
I2C 总线输入/输出电压
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

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

硬件概览
-----------------

![](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_motor_driver.jpg)

- **Grove 接口** - Grove 产品具有一个生态系统，所有产品都使用相同的连接器，可以插入 **Base Shield**。将此模块连接到 Base Shield 的 I<sup>2</sup>C 端口，然后它可以很好地与 Arduino 配合使用。不过，您也可以通过跳线将 Grove - Mini I2C 电机驱动器直接连接到 Arduino，而无需 Base Shield。

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
I2C 端口
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

硬件功能
-----------------

### 更改默认最大驱动电流

每个通道的默认最大驱动电流为 200mA，请参见电路板的正面图片。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/QQ20150817-3.png" alt="pir" width={600} height="auto" /></p>

每个通道（CH1、CH2）都添加了一个电阻，每个电阻（R5、R12）的值为 1 Ω，因此根据以下公式，最大驱动电流为 200mA。

<center>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_I2C_motor_7.png" alt="pir" width={600} height="auto" /></p>
</center>

同时，每个通道提供了一个预留的可焊接焊盘（CH1 的 R6，CH2 的 R13），因此您可以在电路板上焊接一个电阻来改变每个通道的电阻值。以下是添加电阻后的新公式：

<center>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_I2C_motor_8.png" alt="pir" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_I2C_motor_9.png" alt="pir" width={600} height="auto" /></p>
</center>

:::caution
每个通道的最大工作电流必须小于 1A。因此，焊接到预留焊盘上的电阻值不得小于 0.2 Ω。
:::

### 更改默认 I<sup>2</sup>C 地址

每个通道的 I<sup>2</sup>C 地址是可更改的。请查看电路板的背面，您会发现有 4 个跳线焊盘；A0_CH1 和 A1_CH1 用于通道 1，A0_CH2 和 A1_CH2 用于通道 2，如下图所示：

<center>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Address_mini_i2c_motor_driver.png" alt="pir" width={600} height="auto" /></p>
</center>

您可以通过焊接或去焊接每个跳线来更改 I2C 地址：

- 1 - 您需要一个电烙铁，只需将跳线的两侧焊接在一起。
- 0 - 您需要一个电烙铁，只需去焊接跳线的两侧。

<center>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_I2C_motor_12.png" alt="pir" width={600} height="auto" /></p>
</center>

:::note
Grove - Mini I2C Motor Driver 的库依赖于默认地址。
:::

入门指南
---------------

现在，让我们开始使用 Grove - Mini I2C Motor Driver。

### 准备工作

我们正在为 Grove - Mini I2C Motor Driver v1.0 制作一个演示，需要以下模块：

- 2 * DC 电机 2V-6V
- Seeeduino Lite

**Seeeduino Lite 兼容 Arduino。**

如果您使用的是 Arduino UNO 或其他没有 Grove 接口的 Arduino 兼容板，

您将需要一个 Grove 基础扩展板以便轻松连接 Grove。

如果这是您第一次使用 Arduino 或 Seeeduino，请参考《Getting_Started_with_Seeeduino》开始您的 Arduino 之旅。

### 硬件安装

Grove - Mini I2C Motor Driver 配备一个 Grove 插座，用于连接上述两个模块。
它们是：

- 2 * DC 电机 2V-6V - 连接到 CH1 和 CH2 输出连接器。
- Seeeduino Lite

将 Seeeduino 的 Grove I2C 接口连接到 Mini Motor Driver 的 Grove 接口，如下图所示：

![](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_motor_driver_demo.jpg)

### 软件操作

[![](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Arduino_mini_i2c_motor_driver.jpg)](https://www.arduino.cc/)

Grove - Mini I2C Motor Driver 可以基于 DRV8830 芯片控制电机。DRV8830 不仅是一个双电机驱动器，它还是一个双 H 桥。H 桥基本上是一种特定的晶体管设置，允许您切换电流方向。您可以使用 Arduino 使电机以任何速度旋转。

由于该模块具有两个 H 桥，您不仅可以让机器人前进和后退，还可以通过让每个轮子以不同方向旋转来实现转向。

使用微型 USB 数据线将 Seeeduino 连接到计算机。

现在，让我们使用 Grove - Mini I2C Motor Driver 控制两个直流电机正向或反向旋转。

以下是一个与 Arduino 配合使用的示例程序。代码非常基础，但您也可以根据自己的需求进行修改。

```
/****************************************************************
示例代码演示如何使用 Arduino 库控制 SparkFun MiniMoto 板，
该板使用 TI DRV8830 IC 进行 I2C 低电压直流电机控制。
 
此代码为啤酒软件；如果您使用它，请在下次遇到我们时
为我（或任何其他 SparkFun 员工）买一杯冷饮。
 
2013年9月17日 - Mike Hord, SparkFun Electronics
 
代码开发于 Arduino 1.0.5，使用 Fio classic 板。
 
**更新至 Arduino 1.6.4 版本 2015年5月**
****************************************************************/
 
#include <SparkFunMiniMoto.h>  // 引入 MiniMoto 库
 
// 创建两个 MiniMoto 实例，使用不同的地址设置。
MiniMoto motor0(0xC4); // A1 = 1, A0 = 清除
MiniMoto motor1(0xC0); // A1 = 1, A0 = 1（默认）
 
#define FAULTn  16     // 用于故障检测的引脚。
 
// setup() 函数中没有特别复杂的内容 - 准备串口，打印问候语，
// 并将故障引脚设置为输入。
void setup()
{
    Serial.begin(9600);
    Serial.println("Hello, world!");
    pinMode(FAULTn, INPUT);
}
 
// loop() 函数让电机先向一个方向旋转，然后向另一个方向旋转，
// 同时不断监控是否发生故障。如果发生故障，将通过串口报告，
// 然后继续操作。
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
 
// delayUntil() 是一个小函数，用于让电机运行指定时间或直到发生故障。
// 注意，这只是一个非常简单的演示；理想情况下，应该使用中断来处理故障，
// 而不是在运动期间阻塞应用程序并轮询故障。
void delayUntil(unsigned long elapsedTime)
{
    // 请参阅 "BlinkWithoutDelay" 示例，了解此循环为何以及如何工作。
    unsigned long startTime = millis();
    while (startTime + elapsedTime > millis())
    {
        // 如果 FAULTn 变低，可能存在故障情况。为了确认，我们需要检查 FAULT 位。
        if (digitalRead(FAULTn) == LOW)
        {
            // 我们将检查两个电机；逻辑对每个电机都是一样的...
            byte result = motor0.getFault();
            // 如果结果与 FAULT 掩码后非零，则存在故障情况，
            // 我们应该报告它。
            if (result & FAULT)
            {
                Serial.print("Motor 0 fault: ");
                if (result & OCP) Serial.println("芯片过流！");
                if (result & ILIMIT) Serial.println("负载电流限制！");
                if (result & UVLO) Serial.println("欠压！");
                if (result & OTS) Serial.println("过温！");
                break; // 我们希望立即停止运动，以响应故障。
            }
            result = motor1.getFault();
            if (result & FAULT)
            {
                Serial.print("Motor 1 fault: ");
                if (result & OCP) Serial.println("芯片过流！");
                if (result & ILIMIT) Serial.println("负载电流限制！");
                if (result & UVLO) Serial.println("欠压！");
                if (result & OTS) Serial.println("过温！");
                break;
            }
        }
    }
}
```

现在点击上传（CTRL+U）以烧录测试代码。如遇到任何错误提示，请参考《Seeeduino 入门指南》，您也可以在社区中添加评论。

### 检查结果

上传完成后，电机将以循环方式正向或反向旋转。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/res/Grove-Mini_I2C_Motor_Driver_v1.0_SCH_PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

- [DRV8830 数据手册](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/res/DRV8830.pdf)
- [Grove - Mini I2C Motor Driver_Eagle_文件](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/res/Grove-Mini_I2C_Motor_Driver_v1.0_SCH_PCB.zip)
- [Grove - Mini I2C Motor Driver 原理图文档](https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/res/Grove-Mini_I2C_Motor_Driver_v1.0_SCH.pdf)
- [Grove - Mini I2C Motor Driver 源代码库](https://github.com/Seeed-Studio/Drv8830_Motor_Driver)

<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Grove_-_Mini_I2C_Motor_Driver_v1.0 -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>