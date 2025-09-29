---
title: Grove - 触觉马达
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-Haptic_Motor/
slug: /cn/Grove-Haptic_Motor
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/img/bazaar884534_1.jpg)

Grove - 触觉马达是一款集成了 [DRV2605L](http://www.ti.com/product/DRV2605L) 的 Grove 模块，它可以为您的项目带来更多的触觉体验。这款马达专为各种效果设计，例如提升和降低振动级别，适用于可穿戴设备和其他物联网设备。目前，我们已经开发了一款易于使用的库，总共模拟了123种振动模式，这将使您的原型开发更加快速。此外，您还可以使用 DRV2605L 驱动开发更高级的功能，从而在加速度一致性、启动时间和停止时间方面提升执行器性能，并且可以通过共享的 I2C 兼容总线或 PWM 输入信号进行访问。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Haptic-Motor-p-2546.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 特性

- 更多振动效果。
- 加快您的项目原型开发过程。
- 易于使用的库，包含123种振动模式。
- 强大的驱动器，可实现更高级的功能。

:::tip
    有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 规格

| 参数                          | 值             |
|-------------------------------|----------------|
| 工作电压                      | 3.3~5.0 V      |
| 波纹（最大功率时）            | 50~100 mV      |
| 最大功率                      | 750 mW         |
| I2C 速度                      | 100 kHz        |
| 振动效果                      | 123 种         |
| 驱动器                        | DRV2605L       |
| 接口                          | I<sup>2</sup>C |
| 默认 I<sup>2</sup>C 地址       | 0x5A           |

# 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码，因此用户需要自行编写软件库。
:::

## 应用场景

- 手机、平板电脑。
- 可穿戴设备。
- 遥控器、触控设备。
- 工业人机界面。

## 硬件概览

**正面视图：**
![](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/img/bazaar884534_1.jpg)

**背面视图：**
![](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/img/Grove_Haptic_Motor_back.jpg)

## 入门指南

:::note
    如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 使用 Arduino

#### 硬件

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | Base Shield | Grove - Haptic motor |
|----------------|-------------|--------------------------|
|![图片描述](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/img/bazaar884534_1s.jpg)|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/depot/Grove%C2%A0%C2%A0Haptic%C2%A0Motor-p-2546.html)|

- **步骤 2.** 将 Grove - Haptic motor 连接到 Grove-Base Shield 的 I2C 端口。
- **步骤 3.** 将 Grove - Base Shield 插入 Seeeduino。
- **步骤 4.** 使用 USB 数据线将 Seeeduino 连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/img/Grove_haptic_motor_connection.jpg)

:::note
 如果没有 Grove Base Shield，我们也可以直接将 Grove - Haptic motor 连接到 Seeeduino，如下所示。
:::

| Seeeduino       | Grove - Haptic motor |
|-----------------|--------------------------|
| 5V              | 红色                    |
| GND             | 黑色                    |
| SDA             | 白色                    |
| SCL             | 黄色                    |

#### 软件

- **步骤 1.** 从 Github 下载 [Grove_Haptic Motor](https://github.com/Seeed-Studio/Grove_Haptic_Motor/archive/master.zip)。
- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。
- **步骤 3.** 将以下代码复制到 Arduino IDE 并上传。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

```cpp
#include <drv2605.h>

DRV2605 haptic;

void setup()
{
    Serial.begin(9600);
    /* 软件 I2C = false，详细信息 = true */
    if (haptic.init(false, true) != 0) Serial.println("初始化失败！");
    if (haptic.drv2605_AutoCal() != 0) Serial.println("自动校准失败！");
    delay(2000);
}

void loop()
{
/*
    unsigned char i;
    for(i=1;i<124;i++)
    {
        Serial.print("效果编号: ");
        Serial.println(i);
        
        haptic.drv2605_Play_Waveform(i);
        delay(2000);
    }
*/
    haptic.drv2605_Play_Waveform(118);
    delay(2000);
}
```

- **步骤 4.** 您将会感受到振动效果。

:::warning
    切勿触摸驱动器 DRV2605L，否则可能会造成损坏。
:::

![](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/img/Grove_Haptic_Motor_cautions.png)

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/res/Grove_Haptic_Motor_v0.9_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[库文件]** [Grove-Haptic Motor 库](https://github.com/Seeed-Studio/Grove_Haptic_Motor)
- **[Eagle]** [Grove-Haptic Motor 原理图](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/res/Grove_Haptic_Motor_v0.9_Eagle.zip)
- **[PDF]** [Grove-Haptic Motor 原理图](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/res/Grove_Haptic_Motor_v0.9_SCH.pdf)
- **[数据手册]** [关于驱动电路 DRV2605L 的更多信息](http://www.ti.com/product/DRV2605L)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时拥有顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>