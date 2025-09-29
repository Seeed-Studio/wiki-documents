---
description: Grove - 12位磁性旋转位置传感器/编码器 (AS5600)
title: Grove - 12位磁性旋转位置传感器/编码器 (AS5600)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600
last_update:
  date: 1/31/2023
  author: jianjing Huang
---



![](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/Grove-12-bit-Magnetic-Rotary-Sensor-AS5600-preview.jpg)

Grove - AS5600 是一款可编程的12位高分辨率非接触式磁性旋转位置传感器。Grove - AS5600 可以作为磁性电位器或磁性编码器工作，具有出色的可靠性和耐用性。

与传统的电位器/编码器相比，Grove - AS5600 具有显著优势：高精度、非接触式、无旋转角度限制。所有这些优势使其适用于非接触式角度测量应用，如机器人手臂、三脚架云台、电机闭环控制、机床轴定位。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600-p-4192.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

- 非接触式，无旋转角度限制
- 12位高分辨率，每圈4096个位置
- Grove I2C、PWM/模拟输出
- 角度范围灵活性强：最大角度可编程范围从18°到360°

## 规格参数

|参数|值|
|---|---|
|供电电压|3.3V / 5V|
|工作环境温度| -40 – 125℃|
|输入电流|-100-100mA|
|灵活性|最大角度可编程范围从18°-360°|
|接口|I2C(默认I2C地址: 0x36) & 不可更改|
|输出|模拟/PWM输出|
|输出分辨率|12位DAC|

## 工作原理

Grove - AS5600 基于霍尔效应，内置霍尔传感器可以检测磁场方向的变化，因此也没有旋转角度限制。磁场方向信息通过放大器放大，借助内置的12位A/D转换器，AS5600模块可以每圈输出4096个位置。输出是可选择的，您可以使用I2C接口输出原始数据，或通过OUT引脚输出PWM波/模拟波。同时，最大角度也是可编程的，您可以将最大角度设置为18°到360°，这意味着测量角度精度可达18/4096。

![](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/Grove-12-bit-Magnetic-Rotary-Sensor-AS5600-show-NS.jpg)

:::note
AS5600对要测量的磁场有一定要求。请使用与芯片尺寸相似的磁铁。模块应尽可能靠近磁场进行测量，AS5600传感器中心应与磁场中心对齐。垂直距离最好在0.5毫米到3毫米之间。
:::

![](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/Grove-12-bit-Magnetic-Rotary-Sensor-AS5600-2.jpg)

## 硬件概述

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/Grove-12-bit-Magnetic-Rotary-Sensor-AS5600-pin.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/Grove-12-bit-Magnetic-Rotary-Sensor-AS5600-pin.jpg" /></a></p>
</figure>
</div>

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## 入门指南

### 与Arduino一起使用

**所需材料**

| Seeeduino V4.2 | Base Shield | Grove - 12位磁性旋转位置传感器/编码器 (AS5600)|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/Grove-12-bit-Magnetic-Rotary-Sensor-AS5600-thumbnail.jpg)
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600-p-4192.html)|

>此外，您可以考虑我们的新产品[Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)，它相当于Seeeduino V4.2和Baseshield的组合。

#### 硬件连接

- **步骤1.** 将Grove - 12位磁性旋转位置传感器/编码器 (AS5600)连接到Base Shield的**I2C**端口。

- **步骤2.** 将Grove - Base Shield插入Seeeduino。

- **步骤3** 通过USB线将Seeeduino连接到PC。

![](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/HardwarePic.jpg)

#### 软件

:::caution
如果这是您第一次使用Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤1.** 从Github下载[AS5600](https://github.com/Seeed-Studio/Seeed_Arduino_AS5600)库。

:::note
参考如何安装库来为Arduino[安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/)。
:::

- **步骤2.** 重启Arduino IDE。通过路径打开**readAngle**示例：**File** → **Examples** → **Seeed_AS5600-master** → **readAngle**。通过这个演示，我们可以从传感器下方的磁铁读取角度。

readAngle示例代码如下：

```cpp
#include <Wire.h>
#include <AS5600.h>
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define SERIAL SerialUSB
  #define SYS_VOL   3.3
#else
  #define SERIAL Serial
  #define SYS_VOL   5
#endif

AMS_5600 ams5600;

int ang, lang = 0;

void setup()
{
  SERIAL.begin(115200);
  Wire.begin();
  SERIAL.println(">>>>>>>>>>>>>>>>>>>>>>>>>>> ");
  if(ams5600.detectMagnet() == 0 ){
    while(1){
        if(ams5600.detectMagnet() == 1 ){
            SERIAL.print("Current Magnitude: ");
            SERIAL.println(ams5600.getMagnitude());
            break;
        }
        else{
            SERIAL.println("Can not detect magnet");
        }
        delay(1000);
    }
  }
}
/*******************************************************
/* Function: convertRawAngleToDegrees
/* In: angle data from AMS_5600::getRawAngle
/* Out: human readable degrees as float
/* Description: takes the raw angle and calculates
/* float value in degrees.
/*******************************************************/
float convertRawAngleToDegrees(word newAngle)
{
  /* Raw data reports 0 - 4095 segments, which is 0.087 of a degree */
  float retVal = newAngle * 0.087;
  ang = retVal;
  return ang;
}
void loop()
{
    SERIAL.println(String(convertRawAngleToDegrees(ams5600.getRawAngle()),DEC));
}
```

- **步骤3.** 上传演示代码。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤4.** 通过点击**Tool-> Serial Monitor**打开Arduino IDE的**串口监视器**。或者同时按下`ctrl`+`shift`+`m`键。将波特率设置为**115200**。

- **步骤5.** 当检测到传感器下方的磁铁时，结果应该如下所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/AS5600%20with%20Calibrators.gif"/></div>

:::note
这里使用了一个校准器。校准器2D文件在资源中列出，所以请随意下载并自己激光切割！
:::

## 常见问题

**Q1#** 如何实现最大精度？

**A1:** 确保Grove - 12位磁性旋转位置传感器/编码器（AS5600）传感器与磁铁保持固定的距离/位置。首次使用时，旋转磁铁从角度0一直到角度360，以确保定位正确。

[AS5600](https://github.com/Seeed-Studio/Seeed_Arduino_AS5600)库还提供了完整的测试功能来操作传感器。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/res/Grove%20-%2012-bit%20Magnetic%20Rotary%20Position%20Sensor%20(AS5600).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[ZIP]** [Grove - 12位磁性旋转位置传感器/编码器（AS5600）原理图文件](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/res/Grove%20-%2012-bit%20Magnetic%20Rotary%20Position%20Sensor%20(AS5600).zip)
- **[PDF]** [AS5600数据手册](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/res/Magnetic%20Rotary%20Position%20Sensor%20AS5600%20Datasheet.pdf)
- **[DWG]** [Grove - 12位磁性旋转位置传感器（AS5600）校准器](https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/res/Grove%20-%2012%20bit%20Magnetic%20Rotary%20Position%20Sensor(AS5600)%20Calibrator.dwg)

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