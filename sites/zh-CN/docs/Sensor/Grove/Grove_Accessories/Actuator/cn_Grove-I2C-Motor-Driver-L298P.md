---
title: Grove - I2C 电机驱动器 (L298P)
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-I2C-Motor-Driver-L298P/
slug: /Grove-I2C-Motor-Driver-L298P
sku: 105020093
last_update:
  date: 01/09/2022
  author: gunengyu
createdAt: '2024-03-24'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/Grove-I2C-Motor-Driver-L298P/
---

![](https://files.seeedstudio.com/products/105020093/img/105020093_wiki.png)

Grove - I2C 电机驱动器 (L298P) 是一款通用的步进电机和伺服电机驱动器。它内嵌 STM32 芯片，用于烧录代码以控制电机驱动器。这是一款双通道电机驱动器，每个通道支持最高 1A 电流。您还可以使用 I2C 接口从外围微控制器传输数据。默认的 I2C 地址为 0x0f，您可以通过连接 I2C 线帽来更改电机驱动器的地址。I2C 地址可在 0x00 到 0x0f 之间选择。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-L298P-p-4534.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
  </a>
</div>

## 特性

- MCU：STM32f030f4P6 微控制器，用于烧录代码并控制电机驱动器。
- L298P 电机驱动芯片：常用于电机驱动，可驱动步进电机和伺服电机。
- 可选 I2C 地址：通过更改线帽连接，可将 I2C 地址设置为 0x00 到 0x0f，默认 I2C 地址为 0x0f。
- 双通道输出：每个通道支持 1A 电流，最大支持 2A 电流；需要 6V-12V DC 电压输入。
- 用户 LED：每个通道的绿色 LED 表示顺时针方向，红色 LED 表示逆时针方向。

## 规格

|项目|参数|
|---|---|
|MCU|STM32f030f4P6|
|电源|6-12V DC|
|接口|Grove I2C|
|I2C 地址|默认 0x0f，可通过连接线帽更改|
|通道|2|
|输出电流|最大 2A，每通道 1A|
|输出电压|5V|

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## 入门指南

### 使用 Arduino 平台

#### 所需材料

| Seeeduino V4.2 | Base Shield | Grove - I2C Motor Driver (L298P) |
|----------------|-------------|--------------------------------------|
|![图片描述](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![图片描述](https://files.seeedstudio.com/products/105020093/img/105020093_thumbnail.jpg)|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-I2C-Motor-Driver-L298P-p-4534.html)|

#### 硬件连接

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver-4.jpg" style={{width:'auto', height:400}}/>
</div>

- **步骤 1** 将 Grove - I2C Motor Driver (L298P) 连接到 Grove-Base Shield 的 I2C 端口。

- **步骤 2** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 3** 使用 USB 数据线将 Seeeduino 连接到电脑。

#### 软件代码 1 - 直流电机

```cpp
#include "Grove_I2C_Motor_Driver.h"

#define I2C_ADDRESS 0x0f /* 默认 I2C 地址为 0x0f */

void setup() {
    Serial.begin(9600);
    Motor.begin(I2C_ADDRESS);
}

void loop() {
    // 设置 MOTOR1 的速度，顺时针，速度范围：-100~100
    Motor.speed(MOTOR1, 50);
    // 设置 MOTOR2 的速度，逆时针
    Motor.speed(MOTOR2, -70);
    delay(2000);
    // 改变 MOTOR1 的速度和方向
    Motor.speed(MOTOR1, -100);
    // 改变 MOTOR2 的速度和方向
    Motor.speed(MOTOR2, 100);
    delay(2000);
    // 停止 MOTOR1 和 MOTOR2
    Motor.stop(MOTOR1);
    Motor.stop(MOTOR2);
    delay(2000);
}
```

- **步骤 1** 从 Github 下载 [Grove_I2C_Motor_Driver_v1_3 库](https://github.com/Seeed-Studio/Grove_I2C_Motor_Driver_v1_3/archive/master.zip)。

- **步骤 2** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 来为 Arduino 安装库。

- **步骤 3** 将代码复制到 Arduino IDE 并上传。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

通过 `speed()` 函数，您可以以所需速度驱动一个电机。

- **motor_id** 表示使用哪个电机。可以填写 MOTOR1 或 MOTOR2。

- **_speed** 表示设置给电机的速度。可以填写 -100~100。当 _speed > 0 时，直流电机顺时针运行；当 _speed < 0 时，直流电机逆时针运行。绝对值越大，直流电机的速度越快。

通过 `stop()` 函数，您可以停止正在运行的直流电机。

- **motor_id** 表示使用哪个电机。可以填写 MOTOR1 或 MOTOR2。

#### 软件代码 2 - 步进电机

```cpp
#include <Grove_I2C_Motor_Driver.h>

#define I2C_ADDRESS 0x0f // 默认 I2C 地址为 0x0f

void setup() {
    Serial.begin(9600);
    Motor.begin(I2C_ADDRESS);
    // 驱动步进电机
    // _step: -1024~1024，当 _step > 0 时，步进电机顺时针运行；当 _step < 0 时，步进电机逆时针运行；
    // 当 _step 为 512 时，步进电机将完成一次完整转动；如果 _step 为 1024，步进电机将完成两次转动。
    Motor.StepperRun(-1024);
    Motor.StepperRun(512);
}

void loop() {
    // 在此处编写您的代码
}
```

以 [24BYJ48 步进电机](https://www.seeedstudio.com/Small-Size-and-High-Torque-Stepper-Motor-24BYJ48-p-1922.html) 为例，硬件安装如下图所示：

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2C_Motor_Driver_control_a_Stepper_Motor.jpg" style={{width:600, height:'auto'}}/>
</div>

**24BYJ48 步进电机**与 I2C Motor Driver 的连接如下图所示：

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2C_Motor_Driver_Connector.jpg" style={{width:'auto', height:'auto'}}/>
</div>

- **_step** 表示设置给步进电机运行的步数。可以填写 -1024~1024。当 _step > 0 时，步进电机顺时针运行；当 _step < 0 时，步进电机逆时针运行。当 _step 为 512/-512 时，步进电机将完成一次完整转动；如果 _step 为 1024/-1024，步进电机将完成两次转动。步进电机在完成设定步数后会自动停止。

:::note

如果遇到 PWM 频率无法更改且固定为 24Hz 的情况，需要使用 Jlink 或 ST-link 更新固件。您可以在以下链接找到新固件：

[https://github.com/Seeed-Studio/grove_stm32f030/blob/master/firmware/grove_i2c_motor_driver_stm32f030.ino.bin](https://github.com/Seeed-Studio/grove_stm32f030/blob/master/firmware/grove_i2c_motor_driver_stm32f030.ino.bin)

要更改 PWM 频率，请使用 `Motor.frequence(50)`，其中值为频率，最大可达 255Hz。

:::

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/105020093/doc/Grove-I2C-Motor-Driver-L298P.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[PDF]** [STM32f030f4P6 数据手册](https://files.seeedstudio.com/products/105020093/doc/STM32F030F4;TSSOP-20_%E8%A7%84%E6%A0%BC%E4%B9%A6.pdf)

- **[PDF]** [L298P 数据手册](https://files.seeedstudio.com/products/105020093/doc/L298P;PowerSO-20_%E7%89%A9%E6%96%99%E8%A7%84%E6%A0%BC%E4%B9%A6.pdf)

- **[PDF]** [硬件原理图](https://files.seeedstudio.com/products/105020093/doc/Grove%20-%20I2C%20Motor%20Driver%20(L298P)_v1.0_SCH_191210.pdf)

- **[Zip]** [电机驱动库](https://github.com/Seeed-Studio/Grove_I2C_Motor_Driver_v1_3/archive/master.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得流畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>