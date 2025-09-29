---
description: Motor_Shield_V2.0
title: Motor Shield V2.0
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Motor_Shield_V2.0
last_update:
  date: 01/30/2023  
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/500px-Motorshield_01.jpg" alt="pir" width={600} height="auto" /></p>

:::note
本文档适用于 Motor Shield V2.0/2.1/2.2。
:::

Motor Shield 是一个电机驱动模块，允许您使用 Arduino 控制电机的工作速度和方向。基于双全桥驱动芯片 L298，它能够驱动两个直流电机或一个步进电机。Motor Shield 可以直接由 Arduino 供电，也可以通过端子输入由外部 6V~15V 电源供电。该模块可用于开发微型机器人和智能车辆等。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Motor-Shield-V2-0.html?queryID=4a07292b83eeca2fc091c32620ff0c76&objectID=1498&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

<table align="center">
 <caption> <h2>版本</h2> </caption>
  <tbody>
  <tr>
    <td><h3>修订版本</h3></td>
    <td><h3>描述</h3></td>
    <td><h3>发布时间</h3></td>
  </tr>
  <tr>
    <td><h4>v1.0</h4></td>
    <td><h4>初始公开发布</h4></td>
    <td><h4>NA</h4></td>
  </tr>
  <tr>
    <td><h4>v2.0</h4></td>
    <td><h4>启用 Arduino/Seeeduino 的 +5V 引脚为电机供电</h4></td>
    <td><h4>2013-2</h4></td>
  </tr>  
  </tbody></table>

## 特性

-------------------

- 标准 Arduino UNO Shield 引脚布局
- 基于 L298 全桥 IC
- 驱动 2 个直流电机或 1 个步进电机
- 可外部电源输入
- LED 指示灯
- 散热片以获得更好的性能
- Arduino 库

## 规格参数

-------------------

<table align="center">
  <tbody>
  <tr>
    <td><h3>规格</h3></td>
    <td><h3>数值</h3></td>
  </tr>
  <tr>
    <td><h4>工作电压</h4></td>
    <td><h4>5V</h4></td>
  </tr>
  <tr>
    <td><h4>外部电源</h4></td>
    <td><h4>6-15V</h4></td>
  </tr>  
  <tr>
    <td><h4>输出电流</h4></td>
    <td><h4>每通道最大 2.0A</h4></td>
  </tr>
    <tr>
    <td><h4>PWM 范围</h4></td>
    <td><h4>0-100%</h4></td>
  </tr>
    <tr>
    <td><h4>输出</h4></td>
    <td><h4>2 个通道，4 个端口</h4></td>
  </tr>
  </tbody></table>

## 硬件概述

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/700px-MotorShieldHardware.png" alt="pir" width={600} height="auto" /></p>

**1**.通道 1 指示灯，包含 3 个 LED

- EB - 通道 1 使能，高电平有效
- IN3 - OUT3 的状态
- IN4 - OUT4 的状态

**2**.通道 1 检测 - 正常使用时请将左侧 2 个引脚连接在一起。

**注意** 这是用于检测电流的高级应用，更多信息请参考数据手册和原理图。

**3**.输出 - 有 2 个通道，每个通道有 2 个输出

- 通道 0 - OUT1, OUT2
- 通道 1 - OUT3, OUT4

**4**.通道 0 检测

**5**.通道 0 指示灯，包含 3 个 LED

- EB - 通道 0 使能，高电平有效
- IN1 - OUT1 的状态
- IN2 - OUT2 的状态

**6**.外部电源输入，范围 6-15V

**7**.复位指示灯 - 按下复位按钮时变红

**8**.复位按钮 - 按下以复位扩展板和 Arduino

**9**.电源指示灯 - 有电源时变绿，无论是内部还是外部电源

**A.** 电源开关

- Connect - 从 Arduino 获取电源
- Disconnect - 从外部电源获取电源

**B.** 标准 Arduino 扩展板引脚布局

### 使用的数字引脚

<table align="center">
  <tbody>
  <tr>
    <td><h3>Arduino 引脚</h3></td>
    <td><h3>功能</h3></td>
  </tr>
  <tr>
    <td><h4>D0</h4></td>
    <td><h4>未使用</h4></td>
  </tr>
  <tr>
    <td><h4>D1</h4></td>
    <td><h4>未使用</h4></td>
  </tr>
  <tr>
    <td><h4>D2</h4></td>
    <td><h4>未使用</h4></td>
  </tr>
  <tr>
    <td><h4>D3</h4></td>
    <td><h4>未使用</h4></td>
  </tr>
  <tr>
    <td><h4>D4</h4></td>
    <td><h4>未使用</h4></td>
  </tr>
  <tr>
    <td><h4>D5</h4></td>
    <td><h4>未使用</h4></td>
  </tr>
  <tr>
    <td><h4>D6</h4></td>
    <td><h4>未使用</h4></td>
  </tr>
  <tr>
    <td><h4>D7</h4></td>
    <td><h4>未使用</h4></td>
  </tr>
  <tr>
    <td><h4>D8</h4></td>
    <td><h4>OUT1</h4></td>
  </tr>  
  <tr>
    <td><h4>D9</h4></td>
    <td><h4>通道 0 使能</h4></td>
  </tr>
  <tr>
    <td><h4>D10</h4></td>
    <td><h4>通道 1 使能</h4></td>
  </tr>  
  <tr>
    <td><h4>D11</h4></td>
    <td><h4>OUT2</h4></td>
  </tr>
  <tr>
    <td><h4>D12</h4></td>
    <td><h4>OUT3</h4></td>
  </tr>
  <tr>
    <td><h4>D13</h4></td>
    <td><h4>OUT4</h4></td>
  </tr>
  </tbody></table>

:::note
D8~D13 被 Motor Shield 使用。请不要使用这些引脚以避免冲突。
:::

### 使用的模拟引脚

<table align="center">
  <tbody>
  <tr>
    <td><h3>Arduino 引脚</h3></td>
    <td><h3>功能</h3></td>
  </tr>
  <tr>
    <td><h4>D0</h4></td>
    <td><h4>未使用</h4></td>
  </tr>
  <tr>
    <td><h4>D1</h4></td>
    <td><h4>未使用</h4></td>
  </tr>
  <tr>
    <td><h4>D2</h4></td>
    <td><h4>未使用</h4></td>
  </tr>
  <tr>
    <td><h4>D3</h4></td>
    <td><h4>未使用</h4></td>
  </tr>
  <tr>
    <td><h4>D4</h4></td>
    <td><h4>未使用</h4></td>
  </tr>
  <tr>
    <td><h4>D5</h4></td>
    <td><h4>未使用</h4></td>
  </tr>
  </tbody></table>

:::note
未使用意味着您可以自由使用这些引脚。
:::

## 开始使用

-------------------

### 驱动直流电机

#### 连接

这里我们将通过一个简单的演示向您展示这个电机扩展板是如何工作的。首先，您需要准备以下物品：

<table align="center">
  <tbody>
  <tr>
    <td><h3>Seeeduino V4</h3></td>
    <td><h3>直流电机</h3></td>
    <td><h3>电机扩展板</h3></td>
  </tr>
  <tr>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/130%20DC%20Motor_s.jpg" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/motor%20shield_s.jpg" alt="pir" width={200} height="auto" /></p></td>
  </tr>
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank"><span>立即购买</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/130-DC-Motor-p-2023.html" target="_blank"><span>立即购买</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Motor-Shield-V2.0-p-1377.html" target="_blank"><span>立即购买</span></a></h4></td>
  </tr>  
  </tbody></table>

- 设置 **SEN_A** 和 **SEN_B**，用跳线将左侧的2个引脚连接在一起。
- 用跳线将 **MB_EN** 连接在一起，因为我们不会使用外部电源。
- 将直流电机连接到通道0（OUT1和OUT2）。
- 将电机扩展板插入Arduino。
- 通过USB线将Arduino连接到PC。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/DC%20connection.jpg" alt="pir" width={600} height="auto" /></p>

#### 软件

- 点击下面的按钮下载电机扩展板库。
- 请按照[如何安装Arduino库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/)的步骤来安装库。

<p style={{textAlign: 'center'}}><a href="https://github.com/Seeed-Studio/SeeedMotorShieldV2/archive/master.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/400px-Motor_shield_v2_library.png" /></a></p>

- 将代码上传到Seeeduino V4。

```cpp
//  演示功能：驱动直流电机的应用方法。
//  作者：Loovee (luweicong@seeed.cc)
//  2016-3-11

#include "MotorDriver.h"

MotorDriver motor;

void setup()
{
    // 初始化
    motor.begin();
}

void loop()
{
    motor.speed(0, 100);            // 将电机0设置为速度100
    delay(1000);
    motor.brake(0);                 // 刹车
    delay(1000);
    motor.speed(0, -100);           // 将电机0设置为速度-100
    delay(1000);
    motor.stop(0);                  // 停止
    delay(1000);
}
// 文件结束
```

- 然后您会发现您的电机运动（1秒），停止（1秒），反向运动（1秒），停止（1秒），并循环。

如果没有任何反应，请确保：

- 我们已经成功上传了代码
- 电机连接正确
- LED指示灯正确闪烁

### 驱动步进电机

#### 连接

这里我们将通过一个简单的演示向您展示这个电机扩展板是如何工作的。首先，您需要准备以下物品：

<table align="center">
  <tbody>
  <tr>
    <td><h3>Seeeduino V4</h3></td>
    <td><h3>步进电机</h3></td>
    <td><h3>电机扩展板</h3></td>
  </tr>
  <tr>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/Motor%2024BYJ48_s.jpg" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/motor%20shield_s.jpg" alt="pir" width={200} height="auto" /></p></td>
  </tr>
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank"><span>立即购买</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Small-Size-and-High-Torque-Stepper-Motor-24BYJ48-p-1922.html" target="_blank"><span>立即购买</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Motor-Shield-V2.0-p-1377.html" target="_blank"><span>立即购买</span></a></h4></td>
  </tr>  
  </tbody></table>

- 设置 **SEN_A** 和 **SEN_B**，用跳线将左侧的2个引脚连接在一起。
- 用跳线将 **MB_EN** 连接在一起，因为我们不会使用外部电源。
- 找到您的步进电机的引脚定义，并将其连接到扩展板的OUTPUT。如下所示：

<table align="center">
  <tbody>
  <tr>
    <td><h3>步进电机</h3></td>
    <td><h3>OUT1</h3></td>
  </tr>
  <tr>
    <td><h4>A+</h4></td>
    <td><h4>OUT2</h4></td>
  </tr>
  <tr>
    <td><h4>A-</h4></td>
    <td><h4>OUT3</h4></td>
  </tr>
  <tr>
    <td><h4>B+</h4></td>
    <td><h4>OUT4</h4></td>
  </tr>
  <tr>
    <td><h4>B-</h4></td>
    <td><h4>未使用</h4></td>
  </tr>
  </tbody></table>

- 将电机扩展板插入Arduino。
- 通过USB线将Arduino连接到PC。

#### 软件

将下面的代码复制到Arduino IDE并上传到Seeeduino V4，然后您会发现您的步进电机开始运动。

```cpp
/*
 * Seeed电机扩展板V2的步进电机测试
 * loovee @ 2016年3月15日
 */

#include <Stepper.h>

// 将此更改为您的电机的步数
#define STEPS 200

// 创建步进电机类的实例，指定
// 电机的步数和连接的引脚
Stepper stepper(STEPS, 8, 11, 12, 13);

// 模拟输入的前一个读数
int previous = 0;

void step(int steps)
{
    digitalWrite(9, HIGH);
    digitalWrite(10, HIGH);
    stepper.step(steps);
    digitalWrite(9, LOW);
    digitalWrite(10, LOW);
}

void setup()
{
    // 将电机速度设置为30 RPM
    pinMode(9, OUTPUT);
    pinMode(10, OUTPUT);
    digitalWrite(9, LOW);
    digitalWrite(10, LOW);
    stepper.setSpeed(30);
}

void loop()
{
    step(1000);
    step(-1000);
}

// 文件结束
```

如果没有任何反应，请仔细检查您是否正确连接了线路。

## 库 APIs

---------

### 直流电机 APIs

#### begin

**描述**

```Javascript
void begin();
```

#### speed

**描述**

```Javascript
void move(int motor_id, int speed);
```

- motor_id
  - 0 - 通道 0
  - 1 - 通道 1
- speed: -100~100，数值越大速度越快，0 为停止

**stop**

```Javascript
void stop(unsigned char motor_id);
```

**brake**

```Javascript
void brake(unsigned char motor_id);
```

#### 步进电机

**注意** 我们使用 Arduino IDE 提供的库来驱动步进电机。

有一些地方需要修改，请参考示例。

## 常见问题

**Q1: 跳线 MB_EN 的作用**

A1: 您可以在电机扩展板上看到一个电源跳线(MB_EN)。如果您移除它，Arduino 可以为扩展板提供电源，但扩展板（如果扩展板连接了外部电源）不能为 Arduino 提供电源。

如果跳线存在，在两种情况下一个可以为另一个提供电源：

- USB 连接到 Arduino：如果扩展板没有单独连接外部电源，Arduino 将通过 VCC 引脚为扩展板提供电源。

- 外部电源连接到扩展板：如果扩展板有单独的电源，电压会先通过整流器(78M05)，然后为 Arduino 提供电源。在这种情况下，Arduino 的电流不会通过 78M05 从 Arduino 流向扩展板。

所以这个跳线的作用是选择是否要使用扩展板为 Arduino 提供电源。

**Q2: SD 卡扩展板 (103030005) 和电机扩展板 (105030001) 在 Arduino UNO 上是否存在引脚冲突？如何同时使用它们？**

A2: 电机扩展板和 SD 卡扩展板在 Arduino Uno 的数字引脚 D11、D12、D13 上存在引脚冲突。所以您不能将它们与 Arduino Uno 板一起堆叠。以下是同时使用它们的解决方案。

- 步骤 1. 将 SD 卡扩展板堆叠到 Arduino 上。
- 步骤 2. 修改 Motordriver.h 库如下。

```cpp
/******Pins definitions*************/
#define MOTORSHIELD_IN1    8
#define MOTORSHIELD_IN2    7
#define MOTORSHIELD_IN3    6
#define MOTORSHIELD_IN4    5
#define SPEEDPIN_A        9
#define SPEEDPIN_B        10
```

**Q3. 不要堆叠电机扩展板，而是使用跳线从 Arduino 单独进行以下连接。**

A3: 连接方式如下。

<table align="center">
  <tbody>
  <tr>
    <td><h3>Arduino</h3></td>
    <td><h3>电机扩展板</h3></td>
  </tr>
  <tr>
    <td><h4>5V</h4></td>
    <td><h4>5V</h4></td>
  </tr>
  <tr>
    <td><h4>GND</h4></td>
    <td><h4>GND</h4></td>
  </tr>
  <tr>
    <td><h4>D5</h4></td>
    <td><h4>D13</h4></td>
  </tr>
  <tr>
    <td><h4>D6</h4></td>
    <td><h4>D12</h4></td>
  </tr>
  <tr>
    <td><h4>D7</h4></td>
    <td><h4>D11</h4></td>
  </tr>
  <tr>
    <td><h4>D8</h4></td>
    <td><h4>D8</h4></td>
  </tr>
  <tr>
    <td><h4>D9</h4></td>
    <td><h4>D9</h4></td>
  </tr>
  <tr>
    <td><h4>D10</h4></td>
    <td><h4>D10</h4></td>
  </tr>
  </tbody></table>

## 电机扩展板 V2.0 Eagle 文件原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor_Shield_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Motor shield V2.1 Eagle File 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor_shield_2.1.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

-------------------

- **[Eagle]** [Motor Shield V2.0 Eagle 文件](https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor_Shield_Eagle_File.zip)
- **[Eagle]** [Motor shield V2.1 Eagle 文件](https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor_shield_2.1.rar)
- **[PDF]** [Motor Shield 2.0 原理图](https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor_shield_2.0.pdf)
- **[PDF]** [Motor Shield 2.1 原理图](https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor_shield_2.1.pdf)
- **[PDF]** [Motor Shield 2.2 原理图](https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor%20Shield%20v2.2.pdf)
- **[Library]** [Motor Shield 库文件](https://github.com/Seeed-Studio/SeeedMotorShieldV2/archive/master.zip)
- **[Datasheet]** [L298 数据手册](https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/L298.pdf)
- **[Datasheet]** [78M05 数据手册](https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/78M05_datasheet.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>