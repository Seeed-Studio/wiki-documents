---
description: Grove-6轴加速度计和陀螺仪(BMI088)
title: Grove - 6轴加速度计和陀螺仪(BMI088)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-6-Axis_Accelerometer&Gyroscope_BMI088
last_update:
  date: 1/6/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/main.jpg) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/main.jpg" alt="pir" width={600} height="auto" /></p>

Grove - 6轴加速度计和陀螺仪(BMI088)是一款6自由度（DoF）高性能惯性测量单元（IMU）。该传感器基于博世BMI088，是一款具有高振动抑制能力的高性能IMU。该6轴传感器结合了16位三轴陀螺仪和16位三轴加速度计。特别是，您可以在要求苛刻的环境中将此传感器用于无人机和机器人应用。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-6-Axis-Accelerometer%26Gyroscope-(BMI088)-p-3188.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer%26Gyroscope-(BMI088)-p-3188.html)

## 特性

- BM1088专为无人机、机器人和具有挑战性性能要求的工业应用设计。
- 宽加速度测量范围（最高可达24g）
- 加速度计具有低温度系数（TCO）0.2 mg/K和低光谱噪声，仅为230 pg/sqrt(Hz)，在±24 g的最宽测量范围内表现出色

## 规格

|项目|参数|
|---|---|
|工作电压|3.3V / 5V|
|测量范围和灵敏度|**加速度计** : ±3g @10920 LSB/g / ±6g @5460 LSB/g / ±12g @2730 LSB/g / ±24g @1365 LSB/g / **陀螺仪** : ±125°/s @262.1 LSB/°/s / ±250°/s @131.1 LSB/°/s / ±500°/s @65.5 LSB/°/s / ±1000°/s @32.8 LSB/°/s / ±2000°/s @16.4 LSB/°/s|
|工作温度范围|-40℃ ~ +85℃|
|零偏移|**加速度计** : ±30 mg **陀螺仪**: ±1°/s|
|温度系数（TCO）|**加速度计** :±0.2 mg/K **陀螺仪**: ±0.015°/s/K|
|外部接口| I^2^C|
|I^2^C地址|              **加速度计**: 0x19        (默认) \\   0x18(可选)   **陀螺仪**:  ±1°/s0x69(默认) \\  0x68(可选)|

## 典型应用

- 无人机和飞行玩具
- 工业机器人、平衡车
- 家用应用（例如：吸尘器、社交机器人等）

## 硬件概述

### 引脚定义

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/pin_out.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/pin_out.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/pin_out_back.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/pin_out_back.jpg" alt="pir" width={600} height="auto" /></p>

### 原理图

**电源**

<!-- ![](https://files.seeedstudio.com/wiki//Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/schematic_1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki//Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/schematic_1.jpg" alt="pir" width={600} height="auto" /></p>

BMI088的工作电压范围为2.4-3.6V，因此我们使用[XC6206P30](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf)芯片提供稳定的3.0V电压。XC6206P30的输入电压范围为1.8V至6.0V，因此您可以在3.3V和5V的Arduino模块中使用此模块。

**双向电平转换电路**
<!-- ![](https://files.seeedstudio.com/wiki//Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/schematic_2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki//Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/schematic_2.jpg" alt="pir" width={600} height="auto" /></p>

这是一个典型的双向电平转换电路，用于连接I^2^C总线的两个不同电压部分。该传感器的I<sup>2</sup>C总线使用3.3V，如果Arduino的I<sup>2</sup>C总线使用5V，则需要此电路。在上述原理图中，**Q1**和**Q2**是N沟道MOSFET [CJ2102](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/CJ2102.pdf)，它们充当双向开关。为了更好地理解这一部分，您可以参考[AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)。

## 支持的平台

| Arduino | 树莓派 |
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

## 入门指南

### 使用 Arduino

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield | Grove (BMI088) |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-6-Axis-Accelerometer%26Gyroscope-(BMI088)-p-3188.html" target="_blank">立即购买</a>|

:::note
    **1** 请轻轻插入 USB 数据线，否则可能会损坏接口。请使用内部有 4 根线的 USB 数据线，只有 2 根线的 USB 数据线无法传输数据。如果您不确定手头的数据线是否符合要求，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买。

    **2** 每个 Grove 模块在购买时都会附带一根 Grove 数据线。如果您丢失了 Grove 数据线，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。
:::

- **步骤 1.** 将 Grove - 6-Axis Accelerometer&Gyroscope(BMI088) 连接到 Grove-Base Shield 的 **I^2^C** 端口。

- **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 3.** 使用 USB 数据线将 Seeeduino 连接到 PC。

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/connect.jpg" alt="pir" width={600} height="auto" /></p>

:::note
        如果没有 Grove Base Shield，我们也可以直接将模块连接到 Seeeduino，如下所示。
:::

| Seeeduino      |  Grove 数据线       | Grove (BMI088) |
|--------------- |--------------------|-----|
| GND            | 黑色              | GND |
| 5V 或 3.3V     | 红色              | VCC |
| SDA            | 白色              | SDA |
| SCL            | 黄色              | SCL |

#### 软件

:::note
        如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从 Github 下载 [Seeed_BMI088](https://github.com/Seeed-Studio/Grove_6Axis_Accelerometer_And_Gyroscope_BMI088) 库。

- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。

- **步骤 3.** 重启 Arduino IDE。打开示例代码，可以通过以下三种方式打开：
    1. 在 Arduino IDE 中直接通过路径打开：**File --> Examples --> Grove 6-Axis Accelerometer&Gyroscope --> BM1088_Example**。
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/path_1.jpg" alt="pir" width={600} height="auto" /></p>
    2. 在您的电脑中打开，点击 **BM1088_Example.ino**，您可以在文件夹 **XXXX\Arduino\libraries\Grove_6Axis_Accelerometer_And_Gyroscope_BMI088-master\examples\BMI088_Example** 中找到它，其中 **XXXX** 是您安装 Arduino IDE 的位置。
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/img/path_2.jpg" alt="pir" width={600} height="auto" /></p>

3. 或者，您可以直接点击代码块右上角的图标  
    <!-- ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg)   -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>
将以下代码复制到 Arduino IDE 的新草图中。

```cpp

#include "BMI088.h"

float ax = 0, ay = 0, az = 0;
float gx = 0, gy = 0, gz = 0;
int16_t temp = 0;

void setup(void)
{
    Wire.begin();
    Serial.begin(115200);
    
    while(!Serial);
    Serial.println("BMI088 原始数据");
    
    while(1)
    {
        if(bmi088.isConnection())
        {
            bmi088.initialize();
            Serial.println("BMI088 已连接");
            break;
        }
        else Serial.println("BMI088 未连接");
        
        delay(2000);
    }
}

void loop(void)
{    
    bmi088.getAcceleration(&ax, &ay, &az);
    bmi088.getGyroscope(&gx, &gy, &gz);
    temp = bmi088.getTemperature();
    
    Serial.print(ax);
    Serial.print(",");
    Serial.print(ay);
    Serial.print(",");
    Serial.print(az);
    Serial.print(",");
    
    Serial.print(gx);
    Serial.print(",");
    Serial.print(gy);
    Serial.print(",");
    Serial.print(gz);
    Serial.print(",");
    
    Serial.print(temp);
    
    Serial.println();
    
    delay(50);
}
```

:::note
        库文件可能已更新。此代码可能不适用于更新后的库文件，因此我们建议您使用前两种方法。
:::

- **步骤 4.** 上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 5.** 打开 Arduino IDE 的 **串口监视器**，点击 **工具->串口监视器**，或者同时按下 ++ctrl+shift+m++ 键。将波特率设置为 **115200**。

:::success
     如果一切正常，当您打开串口监视器时，可能会显示如下内容：
:::

```cpp
BMI088 原始数据
BMI088 已连接
394.41,-383.06,818.66,1.71,-4.88,-2.93,27
390.20,-385.25,830.38,5.49,0.24,1.83,27
388.37,-380.31,826.54,0.73,2.93,7.57,27
395.51,-384.16,823.79,-0.85,-5.74,5.98,27
385.80,-386.72,824.52,3.78,-5.00,1.59,27
395.51,-384.52,824.71,1.46,3.17,10.86,27
```

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/Grove%20-%206-Axis%20Accelerometer%26Gyroscope(BMI088).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove - 6轴加速度计&陀螺仪(BMI088) Eagle 文件](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/Grove%20-%206-Axis%20Accelerometer%26Gyroscope(BMI088).zip)

- **[Zip]** [Seeed BMI088 库](https://github.com/Seeed-Studio/Grove_6Axis_Accelerometer_And_Gyroscope_BMI088/archive/master.zip)

- **[PDF]** [BMI088 数据手册](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/BMI088.pdf)

- **[PDF]** [XC6206 数据手册](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf)

## 项目

这是该产品的介绍视频，包含简单的演示，您可以尝试一下。

<iframe width={560} height={315} src="https://www.youtube.com/embed/gPi4EWuAGtg?rel=0" frameBorder={0} allow="autoplay; encrypted-media" allowFullScreen />

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