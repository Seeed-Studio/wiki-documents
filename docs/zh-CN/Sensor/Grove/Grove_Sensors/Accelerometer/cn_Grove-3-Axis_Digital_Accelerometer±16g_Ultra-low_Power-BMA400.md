---
description: Grove - 三轴数字加速度计±16g超低功耗 (BMA400)
title: Grove - 三轴数字加速度计±16g超低功耗 (BMA400)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-3-Axis_Digital_Accelerometer±16g_Ultra-low_Power-BMA400
last_update:
  date: 1/5/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/main.jpg" alt="pir" width={600} height="auto" /></p>


Grove - 三轴数字加速度计 ±16g 超低功耗 (BMA400) 是一款 12 位数字三轴加速度传感器，具有智能芯片上的运动和位置触发中断功能。它可以检测您的运动姿态，例如步行、跑步、静止站立。


<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-%C2%B116g-Ultra-low-Power-(BMA400)-p-3201.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-%C2%B116g-Ultra-low-Power-(BMA400)-p-3201.html)


## 版本

| 产品版本  | 变更                                                                                               | 发布日期 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - 三轴数字加速度计 ±16g 超低功耗 (BMA400)  | 初始版本                                                                                               | 2018年11月      |



## 特性

- 超低功耗
- 可编程功能
- 芯片上的 FIFO
- 芯片上的中断功能
> 自动低功耗/自动唤醒  
> 活动/非活动  
> 步数计数器  
> 活动识别（步行、跑步、静止站立）  
> 方向检测  
> 单击/双击



## 规格

|项目|参数|
|---|---|
|工作电压|3.3V / 5V|
|功耗|18uA @5V / 14uA @3.3V|
|工作温度|-40℃ ~ +85℃|
|加速度范围|±2g, ±4g, ±8g, ±16g|
|灵敏度|1024LSB/g / @±2g 512LSB/g /  @±4g256LSB/g / @±8g128LSB/g / @±16g|
|接口|I^2^C|
|I^2^C 地址|0x15（默认） / 0x14（可选）|
|尺寸|长: 40mm 宽: 20mm 高: 10mm| 
|重量|3.2g|
|包装尺寸|长: 140mm 宽: 90mm 高: 10mm|
|毛重|10g|




## 典型应用

- 超低电流消耗的步数计数，延长电池寿命
- 健身应用 / 活动追踪
- 单击 / 双击感应
- 掉落检测，用于保修记录
- 窗户/门测量，用于气候控制和报警系统



## 硬件概述

### 引脚定义

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/pin_out.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/pin_out.jpg" alt="pir" width={600} height="auto" /></p>


<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/pin_out_back.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/pin_out_back.jpg" alt="pir" width={600} height="auto" /></p>




### 原理图

**电源**

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/shecmatic_2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/shecmatic_2.jpg" alt="pir" width={600} height="auto" /></p>

BMA400 的典型电压为 1.8V，因此我们使用 [XC6206P182MR](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf) 芯片来提供稳定的 1.8V。XC6206P33 的输入范围为 1.8V 至 6.0V，因此您可以在 3.3V 和 5V 的 Arduino 上使用此模块。

**双向电平转换电路**

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/shecmatic_1.jpg) -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/shecmatic_1.jpg" alt="pir" width={600} height="auto" /></p>

这是一个典型的双向电平转换电路，用于连接 I^2^C 总线的两个不同电压部分。该传感器的 I<sup>2</sup>C 总线使用 1.8V，如果 Arduino 的 I<sup>2</sup>C 总线使用 5V 或 3.3V，则需要此电路。在上面的原理图中，**Q1** 和 **Q2** 是 N 型 MOSFET [CJ2102](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/res/CJ2102.pdf)，它们充当双向开关。为了更好地理解这一部分，您可以参考 [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)。

## 支持的平台

| Arduino | 树莓派 |
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

## 入门指南

### 使用 Arduino

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield | Grove BMA400 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-%C2%B116g-Ultra-low-Power-(BMA400)-p-3201.html" target="_blank">立即购买</a>|

:::note
    **1** 请轻轻插入 USB 数据线，否则可能会损坏接口。请使用内部有 4 根线的 USB 数据线，只有 2 根线的 USB 数据线无法传输数据。如果您不确定手头的数据线是否符合要求，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买。

    **2** 每个 Grove 模块在购买时都会附带一根 Grove 数据线。如果您丢失了数据线，可以点击[这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)购买。
:::

- **步骤 1.** 将 Grove - 3 轴数字加速度计 ±16g 超低功耗 (BMA400) 连接到 Grove-Base Shield 的 **I^2^C** 接口。

- **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 3.** 使用 USB 数据线将 Seeeduino 连接到电脑。
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/connect.jpg" alt="pir" width={600} height="auto" /></p>

:::note
        如果没有 Grove Base Shield，我们也可以直接将模块连接到 Seeeduino，如下所示。
:::

| Seeeduino      |  Grove 数据线       | Grove BMA400 |
|--------------- |--------------------|-----|
| GND            | 黑色              | GND |
| 5V 或 3.3V     | 红色              | VCC |
| SDA            | 白色              | SDA |
| SCL            | 黄色              | SCL |

#### 软件

:::note
        如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从 Github 下载 [Seeed_BMA400](https://github.com/Seeed-Studio/Grove_3Axis_Digital_Accelerometer_BMA400) 库。

- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。

- **步骤 3.** 重启 Arduino IDE。打开示例代码，可以通过以下三种方式打开：
    1. 直接在 Arduino IDE 中通过路径打开：**文件 --> 示例 --> Grove 3 轴数字加速度计 ±16g 超低功耗 (BMA400) --> BMA400_Example**。
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/Path_1.jpg" alt="pir" width={600} height="auto" /></p>

    2. 在电脑中找到并点击 **BMA400_Example.ino** 文件，路径为 **XXXX\Arduino\libraries\Grove_3Axis_Digital_Accelerometer_BMA400-master\examples\BMA400_Example**，其中 **XXXX** 是您安装 Arduino IDE 的位置。
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/Path_2.jpg" alt="pir" width={600} height="auto" /></p>

3. 或者，您可以直接点击代码块右上角的图标 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p> 将以下代码复制到 Arduino IDE 的新草图中。

```cpp

#include "BMA400.h"

float x = 0, y = 0, z = 0;
int16_t temp = 0;

void setup(void)
{
    Wire.begin();
    
    Serial.begin(115200);
    while(!Serial);
    Serial.println("BMA400 原始数据");

    while(1)
    {
        if(bma400.isConnection())
        {
            bma400.initialize();
            Serial.println("BMA400 已连接");
            break;
        }
        else Serial.println("BMA400 未连接");
        
        delay(2000);
    }
}

void loop(void)
{
    bma400.getAcceleration(&x, &y, &z);
    temp = bma400.getTemperature();
    
    Serial.print(x);
    Serial.print(",");
    Serial.print(y);
    Serial.print(",");
    Serial.print(z);
    Serial.print(",");
    
    Serial.print(temp);
    
    Serial.println();
    
    delay(50);
}
```

:::warning
        库文件可能会更新。此代码可能不适用于更新后的库文件，因此我们建议您使用前两种方法。
:::

- **步骤 4.** 上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 5.** 打开 Arduino IDE 的 **串口监视器**，点击 **工具->串口监视器**。或者同时按下 ++ctrl+shift+m++ 键。将波特率设置为 **115200**。

:::success
     如果一切正常，可能会显示如下内容：
:::

```cpp
BMA400 原始数据
BMA400 已连接
85.94,357.42,916.02,23
-148.44,222.66,464.84,23
-626.95,320.31,1109.38,23
-500.00,-111.33,144.53,23
-398.44,-232.42,433.59,23
-783.20,-255.86,638.67,23
-1453.13,-552.73,822.27,23
```

原始数据格式：

X轴/单位 mg；Y轴/单位 mg；Z轴/单位 mg；温度/单位 ℃


## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/res/Grove%20-%203-Axis%20Digital%20Accelerometer%20_6g%20Ultra-low%20Power(BMA400).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## 资源

- **[Zip]** [Grove - 3轴数字加速度计 ±16g 超低功耗 (BMA400) Eagle 文件](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/res/Grove%20-%203-Axis%20Digital%20Accelerometer%20_6g%20Ultra-low%20Power(BMA400).zip)

- **[Zip]** [Seeed BMA400 库](https://github.com/Seeed-Studio/Grove_3Axis_Digital_Accelerometer_BMA400/archive/master.zip)

- **[PDF]** [BMA400 数据手册](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/res/BMA400_datasheet.pdf)

- **[PDF]** [XC6206 数据手册](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>