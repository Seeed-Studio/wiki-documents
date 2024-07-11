---
title: Grove - I2C电机驱动器（L298P）
description: Grove - I2C电机驱动器（L298P）
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-I2C-Motor-Driver-L298P/
slug: /cn/Grove-I2C-Motor-Driver-L298P
last_update:
  date: 03/20/2024
  author: WuFeifei
---

![](https://files.seeedstudio.com/products/105020093/img/105020093_wiki.png)

Grove - I2C电机驱动器(L298P)是一种常用的步进电机和伺服电机驱动器。它嵌入了一个STM32芯片，用于烧录控制电机驱动器的代码。这是一个双通道电机驱动器，每个通道可以支持高达1A的电流。你也可以使用I2C接口从外围微控制器传输数据。默认的I2C地址是0x0f，你可以通过连接I2C线帽来改变电机驱动器的地址。I2C地址可从0x00选择至0X0f。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-L298P-p-4534.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width={200} height={38} border={0} /></a></p>

## 特点

- MCU: STM32f030f4P6微控制器，用于烧录代码并控制电机驱动器。
- L298P电机驱动芯片：通常用作电机驱动器，可驱动步进电机和伺服电机。
- 可选的I2C地址：改变线帽的连接，即可获取从0x00到0x0f的I2C地址，默认I2C地址为0x0f。
- 双通道输出：每个通道能够支持1A的电流，最大2A电流；需要6V-12V直流电压输入。
- 用户LED：每个通道的绿色LED亮表示顺时针方向，红色LED亮表示逆时针方向。

## 规格

|项目|值|
|---|---|
|MCU|STM32f030f4P6|
|电源供应|6-12V DC|
|接口|Grove I2C|
|I2C地址|默认为0x0f，可通过连接线帽进行更改|
|通道数|2|
|输出电流|最大2A，每个通道1A|
|输出电压|5V|

## 支持的平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## 入门指南

### 使用Arduino平台

#### 所需材料

| Seeeduino V4.2 | 基础扩展板 | Grove - I2C 电机驱动器 (L298P) |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/products/105020093/img/105020093_thumbnail.jpg)|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-I2C-Motor-Driver-L298P-p-4534.html)|

#### **硬件连接**

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver-4.jpg)

- **步骤 1** 将Grove - I2C电机驱动器（L298P）连接到Grove基础扩展板的I2C端口。

- **步骤 2** 将Grove基础扩展板插入到Seeeduino上。

- **步骤 3** 通过USB电缆将Seeeduino连接到PC。

#### **软件代码 1 - 直流电机**

```C++
#include "Grove_I2C_Motor_Driver.h"

// default I2C address is 0x0f
#define I2C_ADDRESS 0x0f

void setup() {
    Serial.begin(9600);
    Motor.begin(I2C_ADDRESS);
}

void loop() {
    // Set speed of MOTOR1, Clockwise, speed: -100~100
    Motor.speed(MOTOR1, 50);
    // Set speed of MOTOR2, Anticlockwise
    Motor.speed(MOTOR2, -70);
    delay(2000);
    // Change speed and direction of MOTOR1
    Motor.speed(MOTOR1, -100);
    // Change speed and direction of MOTOR2
    Motor.speed(MOTOR2, 100);
    delay(2000);
    // Stop MOTOR1 and MOTOR2
    Motor.stop(MOTOR1);
    Motor.stop(MOTOR2);
    delay(2000);
}
```

- **步骤 1** 从Github下载 [Grove_I2C_Motor_Driver_v1_3 库](https://github.com/Seeed-Studio/Grove_I2C_Motor_Driver_v1_3/archive/master.zip)。

- **步骤 2** 参考 [如何安装库](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) 来为Arduino安装库。

- **步骤 3** 将代码复制到Arduino IDE并上传。如果你不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。

使用 speed() 函数，你可以以你想要的速度驱动一个电机。

- **motor_id** 表示使用哪个电机。你可以填写 MOTOR1 或 MOTOR2。

- **_speed** 表示你为电机设定的速度。你可以在这里填写 -100~100。当 _speed>0 时，直流电机顺时针运行，而当 _speed<0 时，直流电机逆时针运行。_speed 的绝对值越大，直流电机的速度就越快。


使用 stop() 函数，你可以停止正在运行的直流电机。

- **motor_id** 表示使用哪个电机。你可以填写 MOTOR1 或 MOTOR2。

#### **软件代码 2 - 步进电机**

```C++
#include <Grove_I2C_Motor_Driver.h>

// default I2C address is 0x0f
#define I2C_ADDRESS 0x0f


void setup() {
    Serial.begin(9600);
    Motor.begin(I2C_ADDRESS);
    // Drive a stepper motor
    // _step: -1024~1024, when _step>0, stepper motor runs clockwise; _step<0, stepper
    // motor runs anticlockwise; when _step is 512, the stepper motor will run a complete
    // turn; if step is 1024, the stepper motor will run 2 turns.
    Motor.StepperRun(-1024);
    Motor.StepperRun(512);
}

void loop() {

}
```

以[24BYJ48步进电机](https://www.seeedstudio.com/depot/high-quality-stepper-motor-12v-p-335.html?cPath=170_171)为例，硬件安装如下图所示：![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2C_Motor_Driver_control_a_Stepper_Motor.jpg)

[24BYJ48](https://www.seeedstudio.com/depot/high-quality-stepper-motor-12v-p-335.html?cPath=170_171)步进电机与I2C电机驱动器之间的连接如下所示：

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2C_Motor_Driver_Connector.jpg)

- **_step** 代表你为步进电机设置的运行步数。你可以填写-1024到1024。当 _step>0 时，步进电机顺时针运行；而当 _step<0 时，步进电机逆时针运行。当 _step 是512/-512时，步进电机会转一整圈；而当 _step 是1024/-1024时，步进电机会转两圈。步进电机会在完成所有步数后自动停止。

## **原理图在线查看器**

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/105020093/doc/Grove-I2C-Motor-Driver-L298P.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[PDF]** [STM32f030f4P6 数据手册](https://files.seeedstudio.com/products/105020093/doc/STM32F030F4;TSSOP-20_%E8%A7%84%E6%A0%BC%E4%B9%A6.pdf)

- **[PDF]** [L298P 数据手册](https://files.seeedstudio.com/products/105020093/doc/L298P;PowerSO-20_%E7%89%A9%E6%96%99%E8%A7%84%E6%A0%BC%E4%B9%A6.pdf)

- **[PDF]** [硬件原理图](https://files.seeedstudio.com/products/105020093/doc/Grove%20-%20I2C%20Motor%20Driver%20(L298P)_v1.0_SCH_191210.pdf)

- **[Zip]** [电机驱动车](https://github.com/Seeed-Studio/Grove_I2C_Motor_Driver_v1_3/archive/master.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们的产品时尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
