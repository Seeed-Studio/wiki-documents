---
description: 电机扩展板 V1.0
title: 电机扩展板 V1.0
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Motor_Shield_V1.0
last_update:
  date: 2/16/2023
  author: jianjing Huang
---
<!-- ---
name: 电机扩展板 V1.0
category: Discontinued
bzurl:
oldwikiname: Motor_Shield_V1.0
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Motor-Shield_V1-0
sku: 103030012
tags:

--- -->

电机扩展板是机器人和机械应用的完美平台。它使Arduino能够驱动两个有刷直流电机或一个4线两相步进电机。基于H桥驱动芯片L298N电机驱动集成电路，它需要6V至15V电源来为电机供电，还包括一个板载5V电压调节器来为主Arduino板供电。额外的即插即用Grove传感器可以连接到13个板载Grove连接器上。

型号：[SLD80256P](https://www.seeedstudio.com/depot/grove-base-shield-p-754.html?cPath=132_134)

![](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/img/Smotoshield2.jpg)

## 特性

- 标准Arduino兼容

- 脉宽调制速度控制模式

- 4个方向指示灯

- 兼容Grove即插即用传感器

- 超大散热器有助于处理大负载

- 支持多达14个舵机

**注意：**

当工作电流超过1000mA时，驱动IC和散热器可能会变得非常热。

## 规格参数

| 项目 | 最小值 | 典型值 | 最大值 | 单位 |
|------|-----|---------|-----|------|
| 逻辑控制电压 | 4.5 | 5 | 5.5 | V |
| 电机供电电压 | 6 | / | 15 | V |
| 输出电压 | 0 | / | Vinput - 1 | V |
| 输出电流（每个通道） | / | / | 2000 | mA |
| 输出占空比范围 | 0% - 100% | | | / |
| 尺寸 | 68.5×54.5×29.5 | | | mm |
| 净重 | 37 | | | g |

- 建议满载时最大占空比&lt;50%

## 接口功能

![](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/img/Motor_shield-hard3.jpg)

**外部电源插孔：** 电机扩展板的外部电源供应。

**电机接口：** Out 1和Out 2（Out 3和Out 4）可以连接电机A（B）用于直流电机。

**使能电机A连接器：** 驱动直流电机A时，用跳线帽连接上述两个接口。

**使能电机B连接器：** 驱动直流电机B时，用跳线帽连接下述两个接口。

**供电选择连接器：** USB/外部电源可以为驱动电机供电。当使用跳线帽连接连接器时，USB为电机扩展板供电。

下表描述了电机A/B指示LED。

| 指示灯|描述 |
|---|---|
| IN1_红色|电机A顺时针转动时点亮，out1引脚输出高电平 |
| IN2_绿色|电机A逆时针转动时点亮，out2引脚输出高电平 |
| IN3_红色|电机B顺时针转动时点亮，out3引脚输出高电平 |
| IN4_绿色|电机B逆时针转动时点亮，out4引脚输出高电平 |

| 引脚名称|方向|连接到Arduino|描述
|---|---|---|---|
|VCC|/|VCC|电源选择器 |
| VS, GND|/|/|电机电源供应，6V - 15V |
| EA|输入|D9|桥A的TTL兼容使能输入 |
| EB|输入|D10|桥B的TTL兼容使能输入 |
| IN1|输入|D8|桥A的TTL兼容输入 |
| IN2|输入|D11|桥A的TTL兼容输入 |
| IN3|输入|D12|桥B的TTL兼容输入 |
| IN4|输入|D13|桥B的TTL兼容输入 |
| M1-, M1+|输出|/|桥A的输出 |
| M2-, M2+|输出|/|桥B的输出 |

## 使用方法

### 硬件安装

将直流电机连接到电机扩展板输出引脚 M1+ 和 M1-（M2+ 和 M2-），如果使用 4 线步进电机，请确保 4 个引脚正确连接。将驱动电压（所需电压取决于所使用的电机。请参考电机数据手册）连接到电源供电端子。

![](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/img/Motor-basic.jpg)

插入跳线 J4 后，Arduino 可以通过板载电压调节器由驱动电压供电，该调节器将驱动电压调节至 5v。

### 软件

下载 [电机扩展板演示代码](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/res/Grobe-Motor_Shield_Demo_Code.zip) 并打开 **Motor_shield_demo_code** 示例。在 **tools-boards** 中选择相应的 Arduino 开发板，在 **tools-serial port** 中选择串口。

![](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/img/Motor_shield.png)

将示例上传到您的 arduino 开发板，然后您会发现 2 个电机开始工作。如果您通过电源端子为电机扩展板供电并且电源跳线 J4 已插入，您现在可以移除 USB 电缆。

速度控制通过传统的 PWM 实现，可以从 Arduino 的 PWM 输出 D9(EA) 和 D10(EB) 获得。使用函数 **analogWrite()** 生成驱动 PWM：

```cpp
int speedpinA=9;//enable motor A
int speedpinB=10;//enable motor B
int speed =127;//define the speed of motor
    ......
analogWrite(speedpinA,speed);//AnalogWrite to Generate PWM to control the motor speed
analogWrite(speedpinB,speed);
```

设置数字引脚 D8(IN1) 和 D11(IN2) 来控制连接到 OUT1/2 的电机，而数字引脚 D12(IN3) 和 D13(IN4) 控制连接到 OUT3/4 的电机。

```cpp
int pinI1=8;//define I1 interface
int pinI2=11;//define I2 interface
    ......
digitalWrite(pinI2,HIGH);//turn DC Motor A move clockwise
digitalWrite(pinI1,LOW);
```

遵循 EA(B) 和 INx 与电机运动之间的逻辑：

| EA(B)|IN1(IN3)|IN2(IN4)|电机A(B)的运动  |
|---|---|---|---|
|   0|x|x|停止  |
|   1|0|0|停止 |
|   1|0|1|顺时针 |
|  1|1|0|逆时针 |  
| 1|1|1|停止  |

```cpp
/*
 SEEED Studio 步进电机控制 - 一圈旋转

 将步进电机示例适配用于 SEEED STUDIO 电机扩展板。
 该程序通过使用 Arduino 包含的步进电机库来驱动单极或双极步进电机。
 电机连接到 Seeed Studio 电机扩展板和 Arduino。

 数字引脚 8,11,12,13 驱动 L298N 并在创建步进电机对象时使用
 数字引脚 9 和 10 必须为高电平以启用芯片。

 电机应该在一个方向旋转一圈，然后
 在另一个方向旋转一圈。


 创建于 2007年3月11日
 修改于 2009年11月30日
 作者 Tom Igoe
 修改于 2012年7月4日
 作者 R. Dumouchelle

 */

#include <Stepper.h>

const int stepsPerRevolution = 200;  // 更改此值以适合您的电机每转的步数

// 在引脚 8 到 11 上初始化步进电机库：
Stepper myStepper(stepsPerRevolution, 8,11,12,13);           

void setup() {
  // 设置速度为 60 rpm：
  myStepper.setSpeed(60);
  // 初始化串口：
  Serial.begin(9600);
  pinMode(9,OUTPUT);
  pinMode(10,OUTPUT);
  digitalWrite(9,HIGH);
  digitalWrite(10,HIGH);
}

void loop() {
  // 在一个方向步进一圈：
  Serial.println("clockwise");
  myStepper.step(stepsPerRevolution);
  delay(500);

  // 在另一个方向步进一圈：
  Serial.println("counterclockwise");
  myStepper.step(-stepsPerRevolution);
  delay(500);
}
```

## 版本跟踪

|  修订版本|描述| 发布日期  |  
|---|---|---|
| v1.0|V1.0 发布|2012/3/29  |

## 相关项目

### 电机扩展板 V2.0 演示

![](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/img/Seeed-Recipe-Motor_Shield_V2.0_.png)

这是一个关于如何使用 Seeedstudio 2.0 电机扩展板单独控制电机的教程。

[我想制作它](https://www.seeedstudio.com/recipe/171-seeed-2-0-motor-shield-individual-control.html)。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/res/Motorshield09gerber.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[数据手册]** [L298数据手册](https://wiki.seeedstudio.com/cn/images/5/5e/L298datasheet.pdf)
- **[EAGLE]**  [电机扩展板 eagle 文件](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/res/Motorshield09gerber.zip)
- **[PDF]**[电机驱动器 pcb](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/res/Motor%20Driver.pdf)
- **[PDF]**[电机驱动器原理图](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/res/Motor%20Driver%20SCH.pdf)
- **[代码]**  [电机扩展板演示代码](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/res/Grobe-Motor_Shield_Demo_Code.zip)

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