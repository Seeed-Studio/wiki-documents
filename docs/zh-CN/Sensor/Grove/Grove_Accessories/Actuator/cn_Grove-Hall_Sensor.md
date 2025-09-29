---
description: Grove - 霍尔传感器
title: Grove - 霍尔传感器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Hall_Sensor
last_update:
  date: 2/22/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/img/Grove-Hall_Sensor_New.jpg)

霍尔传感器基于霍尔效应工作。霍尔效应是指在电导体中，当电流通过导体且磁场垂直于电流时，会在导体横向产生电压差。此Grove模块上有一个连续时间开关。当垂直于霍尔传感器的磁场（南极性）超过工作点阈值 BOP 时，设备的输出会切换为低电平（开启）；当磁场消失时，输出会切换为高电平（关闭）。该模块可用于测量转速（RPM）。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/grove-hall-sensor-p-965.html)

## 版本追踪

| 修订版                  | 描述                     | 发布日期       |
|-------------------------|--------------------------|----------------|
| Grove - 霍尔传感器 v0.9b | 初始公开发布              | 2011年10月3日  |

## 特性

- Grove 兼容接口
- 400ns 上升和下降的转换时间
- 连续时间霍尔效应传感器
- 反向电池保护

:::tip
有关Grove模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 规格

| 项目                   | 最小值 | 典型值 | 最大值 | 单位 |
|------------------------|--------|--------|--------|------|
| 电源电压               | 3.8    | 5.0    | 24     | V    |
| 电源电流               | 4.1    | -      | 24     | mA   |
| 工作温度               | -40    | -      | 85     | ºC   |

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。无法为所有可能的 MCU 平台提供软件库或演示代码，因此用户需要自行编写软件库。
:::

## 应用创意

- 转速计。
- 简单的直流电机。

## 入门指南

:::note
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 使用 Arduino

#### 演示

霍尔传感器通过利用 Arduino/Seeeduino 上的外部中断来使用。在此示例中，我们使用数字引脚 2 上的中断 0。有关其他中断，请参阅 [attachInterrupt()](https://arduino.cc/en/Reference/AttachInterrupt)。

#### 硬件

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | Base Shield | Grove - 霍尔传感器 |
|----------------|-------------|-------------------------|
|![图片描述](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/img/Grove-Hall_Sensor_New%20_small.jpg)|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/grove-hall-sensor-p-965.html)|

- **步骤 2.** 将 Grove - 霍尔传感器连接到 Grove-Base Shield 的 D2 端口。
- **步骤 3.** 将 Grove - Base Shield 插入 Seeeduino。
- **步骤 4.** 使用 USB 数据线将 Seeeduino 连接到电脑。

:::note
如果没有 Grove Base Shield，我们也可以直接将 Grove - 霍尔传感器连接到 Seeeduino，如下所示。
:::

| Seeeduino       | Grove - 霍尔传感器 |
|-----------------|-------------------------|
| 5V             | 红色                   |
| GND            | 黑色                   |
| 未连接         | 白色                   |
| D2             | 黄色                   |

#### 软件

- **步骤 1.** 下载 [霍尔传感器代码](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/Grove-Hall_Sensor_Demo_Code.zip)。

- **步骤 2.** 打开两个代码中的一个。例如 Demo **MagnetControlLED**。

- **步骤 3.** 将代码复制到 Arduino IDE 并上传。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

```c
/****************************************************************************/ 
// 功能：当一个南极朝上的磁铁靠近传感器时，LED 将会亮起。否则，LED 将会熄灭。
// 硬件：Grove - 霍尔传感器, Grove - LED
// Arduino IDE: Arduino-1.0
// 作者:  FrankieChu  
// 日期:   2013年1月20日
// 版本: v1.0
// 来自 www.seeedstudio.com
//
//  此库是免费软件；您可以根据 GNU 较小通用公共许可证的条款重新分发和/或修改它；
//  或者根据自由软件基金会发布的版本 2.1 或更高版本。
//
//  此库分发的目的是希望它能有用，但没有任何保证；甚至没有隐含的
//  适销性或特定用途的适用性保证。有关详细信息，请参阅 GNU 较小通用公共许可证。
//
//  您应该已经收到此库随附的 GNU 较小通用公共许可证副本；如果没有，请联系
//  自由软件基金会，地址：51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA。
//
/*磁性引脚和 LED 引脚的宏定义*/
#define HALL_SENSOR 2
#define LED 4//Grove - LED 连接到 Arduino 的 D4

void setup()
{
  pinsInit();
}
 
void loop() 
{
 if(isNearMagnet())//霍尔传感器是否靠近磁铁？
 {
  turnOnLED();
 }
 else
 {
  turnOffLED();
 }
}
void pinsInit()
{
 pinMode(HALL_SENSOR, INPUT);
 pinMode(LED,OUTPUT);
}

/*如果霍尔传感器靠近南极朝上的磁铁，*/
/*它将返回 true，否则返回 false。*/
boolean isNearMagnet()
{
 int sensorValue = digitalRead(HALL_SENSOR);
 if(sensorValue == LOW)//如果传感器值为 LOW？
 {
  return true;//是的，返回 true
 }
 else
 {
  return false;//不是，返回 false
 }
}
void turnOnLED()
{
 digitalWrite(LED,HIGH);
}
void turnOffLED()
{
 digitalWrite(LED,LOW);
}
```

- **步骤 4.** 当一个南极朝上的磁铁靠近传感器时，LED 将会亮起。否则，LED 将会熄灭。

### 使用 Codecraft

#### 硬件

**步骤 1.** 将一个 Grove - 霍尔传感器连接到 D2 端口，并将一个 Grove - 红色 LED 连接到 Base Shield 的 D4 端口。

**步骤 2.** 将 Base Shield 插入您的 Seeeduino/Arduino。

**步骤 3.** 使用 USB 数据线将 Seeeduino/Arduino 连接到电脑。

#### 软件

**步骤 1.** 打开 [Codecraft](https://ide.chmakered.com/)，添加 Arduino 支持，并将主程序拖到工作区域。

:::note
如果这是您第一次使用 Codecraft，请参阅 [Codecraft 使用 Arduino 指南](https://wiki.seeedstudio.com/cn/Guide_for_Codecraft_using_Arduino/)。
:::

**步骤 2.** 按下图拖动模块或打开页面底部提供的 cdc 文件。

![cc](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/img/cc_Hall_Sensor.png)

将程序上传到您的 Arduino/Seeeduino。

:::tip
代码上传完成后，当霍尔传感器检测到磁场变化时，LED 将会亮起。
:::

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/Twig_Hall_Sensor_v0.9b.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Eagle]** [Grove-霍尔传感器原理图](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/Twig_Hall_Sensor_v0.9b.zip)

- **[演示]** [霍尔传感器演示代码](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/Grove-Hall_Sensor_Demo_Code.zip)

- **[数据手册]** [A1101 数据手册](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/datasheet.pdf)

- **[Codecraft]** [CDC 文件](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/Grove_Hall_Sensor_CDC_File.zip)

<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Grove_-_Hall_Sensor -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得最佳体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>