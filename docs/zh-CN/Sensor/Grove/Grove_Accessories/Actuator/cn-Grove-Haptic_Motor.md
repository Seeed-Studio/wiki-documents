---
title: Grove - 触觉马达
description: Grove - 触觉马达
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Haptic_Motor/
slug: /cn/Grove-Haptic_Motor
last_update:
  date: 03/20/2024
  author: WuFeifei
---

![](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/img/bazaar884534_1.jpg)

Grove - 触觉马达是一个集成了[DRV2605L](http://www.ti.com/product/DRV2605L)的Grove模块，它将为您的项目增添更多触感。该马达专为各种效果而设计，例如使振动水平逐渐上升和下降，适用于可穿戴设备和其他物联网设备。目前，我们已经开发了一个易于使用的库，该库总共模拟了123种振动模式，这将使您的原型制作更加迅速。此外，您还可以使用驱动程序DRV2605L开发更多高级功能，该驱动程序将提高执行器在加速度一致性、启动时间和制动时间方面的性能，并且可以通过共享的I2C兼容总线或PWM输入信号进行访问。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Haptic-Motor-p-2546.html"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 特点

- 更多振动效果。
- 加快您的项目原型制作进程。
- 提供包含123种振动模式的易用库。
- 功能强大的驱动，可实现更多高级功能。

:::提示
    更多关于Grove模块的详细信息，请查阅 [Grove 系统](https://wiki.seeedstudio.com/Grove_System/)
:::

## 规格

| 参数                     | 值             |
| ------------------------ | -------------- |
| 工作电压                 | 3.3~5.0 V      |
| 最大功率下的纹波         | 50~100 mV      |
| 最大功率                 | 750 mW         |
| I2C速度                  | 100 kHz        |
| 振动效果                 | 123 types      |
| 驱动器                   | DRV2605L       |
| 端口                     | I<sup>2</sup>C |
| 默认 I<sup>2</sup>C 地址 | 0x5A           |

# 支持的平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::警告
    上述提到的支持平台是对模块的软件或理论兼容性的一个指示。在大多数情况下，我们只提供Arduino平台的软件库或代码示例。由于不可能为所有可能的MCU平台提供软件库/演示代码，因此用户需要自行编写软件库。
:::

## 应用创意

- 手机、平板电脑。
- 可穿戴设备。
- 遥控器、触摸屏设备。
- 工业人机界面。

## 硬件概览

**正面视图：**
![](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/img/bazaar884534_1.jpg)

**背面视图：**
![](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/img/Grove_Haptic_Motor_back.jpg)

## 入门指南

:::注意
    如果您是第一次使用Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

### 玩转 Arduino

#### 硬件

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | 基础盾板 | Grove - 触觉马达 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/img/bazaar884534_1s.jpg)|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/depot/Grove%C2%A0%C2%A0Haptic%C2%A0Motor-p-2546.html)|

- **步骤 2.** 将Grove - 触觉马达连接到Grove基础扩展板的I2C端口。
- **步骤 3.** 将Grove - 基础扩展板插入Seeeduino。
- **步骤 4.** 通过USB电缆将Seeeduino连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/img/Grove_haptic_motor_connection.jpg)

:::注意
如果没有Grove基础扩展板，我们也可以直接将Grove - 触觉马达连接到Seeeduino，如下所示。
:::

| Seeeduino       | Grove - 触觉马达 |
|---------------|-------------------------|
| 5V           | 红色                   |
| GND           | 黑色                 |
|SDA  | 白色                 |
|SCL             | 黄色                |

#### 软件

- **步骤 1.** 从Github下载[Grove_Haptic Motor](https://github.com/Seeed-Studio/Grove_Haptic_Motor/archive/master.zip)。
- **步骤 2.** 参考[如何安装库](https://wiki.seeedstudio.com/How_to_install_Arduino_Library)为Arduino安装库。
- **步骤 3.** 将代码复制到Arduino IDE并上传。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。

```c++
#include <drv2605.h>

DRV2605 haptic;

void setup()
{
    Serial.begin(9600);
    /* Software I2C = false, Verbose = true */
    if (haptic.init(false, true) != 0) Serial.println("init failed!");
    if (haptic.drv2605_AutoCal() != 0) Serial.println("auto calibration failed!");
    delay(2000);
}

void loop()
{
/*
    unsigned char i;
    for(i=1;i<124;i++)
    {
        Serial.print("Effect No: ");
        Serial.println(i);
        
        haptic.drv2605_Play_Waveform(i);
        delay(2000);
    }
*/
    haptic.drv2605_Play_Waveform(118);
    delay(2000);
}
```

- **步骤 4.** 我们将看到振动效果。

:::警告
    切勿在电源开启时触摸驱动器DRV2605L，这可能会损坏它。
:::

![](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/img/Grove_Haptic_Motor_cautions.png)

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/res/Grove_Haptic_Motor_v0.9_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[库文件]** [Grove-触觉马达库](https://github.com/Seeed-Studio/Grove_Haptic_Motor)
- **[Eagle]** [Grove-触觉马达原理图](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/res/Grove_Haptic_Motor_v0.9_Eagle.zip)
- **[PDF]** [Grove-触觉马达原理图](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/res/Grove_Haptic_Motor_v0.9_SCH.pdf).
- **[数据手册]** [关于驱动电路 DRV2605L的更多信息](http://www.ti.com/product/DRV2605L).

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供各种支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
