---
title: Grove - MP3 v2.0
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-MP3_v2.0/
slug: /cn/Grove-MP3_v2.0
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/Grove-MP3_v2.0_Product_View_700_S.jpg)

Grove - MP3 v2.0 是一个小型且紧凑的音频模块。它支持对 MP3、WAV 和 WMV 格式的音频文件进行各种操作，例如随机播放音乐、播放特定文件中的音乐等。通过串行通信，您可以使用所有预定义的命令或命令组合来操作音乐文件。该模块还支持 FAT16 和 FAT32 等通用文件系统。它配备了 Grove UART 接口、3.5 mm 音频插孔和 micro-SD 卡槽。使用该模块，您可以为您的静音应用程序增添一些声音。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/3FMlt_aqhOc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{}}><a href="https://www.seeedstudio.com/Grove-MP3-v2-0-p-2597.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width={210} height={41} border={0} /></a></p>

## 版本

| 产品版本           | 变更内容          | 发布日期       |
|-------------------|------------------|---------------|
|  Grove - MP3 v1.0 | 初始版本          | 2013年4月28日  |
|  Grove - MP3 v2.0 | 更换为 KT403A     | 2015年12月15日 |

## 特性

- 对音频文件的通用操作
- 板载 micro-SD 卡槽和 3.5 mm 音频插孔
- 支持采样率：8 / 11.025 / 12 / 16 / 22.05 / 24 / 32 / 44.1 / 48(KHz)
- 24 位 DAC 输出，最大动态输出范围为 90 dB，信噪比为 85 dB
- 支持 MP3、WMV 和 WAV 音频格式以及 FAT16、FAT32 文件系统
- 内嵌 10 级均衡器

:::tip
    更多关于 Grove 模块的详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 应用场景

- 用于任何应用的中级音频模块。

## 规格参数

| 参数                                       | 值                                                                                                               |
|--------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| 输入电压                                   | 5 V (DC)                                                                                                          |
| 工作电流（无信号输出状态）                 | 小于 15 mA                                                                                                        |
| 工作电流                                   | 小于 40 mA                                                                                                        |
| 芯片                                       | KT403A [(数据手册)](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/res/Grove-MP3_v2.0_KT403A_datasheet_V1.3_EN-Recompiled_by_Seeed-.pdf) |
| 芯片 LDO 输出电压                          | 3.3 V                                                                                                             |
| 芯片输出电流                               | 最大 100mA                                                                                                        |
| 支持的文件格式                             | MP3、WAV、WMA                                                                                                     |
| SD 卡支持的最大内存                        | 8 GB                                                                                                              |
| 采样率                                     | 8 / 11.025 / 12 / 16 / 22.05 / 24 / 32 / 44.1 / 48(KHz)                                                           |

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

## 硬件概览

![](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/Grove-MP3_v2.0_Component_view-front-1200_S.jpg)

![](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/Grove-MP3_v2.0_Component_View-Back-1200_S.jpg)

## 入门指南

:::note
    如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 使用 Arduino 播放

#### 硬件

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | Base Shield|  Grove - MP3 v2.0 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/Grove-MP3_v2.0_s.jpg)|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/depot/Grove-MP3-v20-p-2597.html?cPath=98_106_57)|

:::note
    我们还需要一个存有音乐的 SD 卡，以及带有 3.5 mm 音频插孔的耳机或立体声设备。
:::

- **步骤 2.** 将 Grove-MP3 v2.0 连接到 Grove-Base Shield 的 D2 端口。
- **步骤 3.** 将 Grove - Base Shield 插入 Seeeduino。
- **步骤 4.** 使用 USB 数据线将 Seeeduino 连接到 PC。

![](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/seeeduino_mp3.jpg)

:::note
 如果没有 Grove Base Shield，我们也可以直接将 Grove-MP3 v2.0 连接到 Seeeduino，如下所示。
:::
| Seeeduino       | Grove-MP3 v2.0 |
|---------------|-------------------------|
| 5V            | 红线                     |
| GND           | 黑线                     |
| D3            | 白线                     |
| D2            | 黄线                     |

#### 软件

- **步骤 1.** 从 Github 下载 [Grove-MP3 v2.0](https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player)。
- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。
- **步骤 3.** 您可以选择 **Seeed_Serial_MP3_Player/examples/KT403A_Terminal_player** 示例并上传到 Arduino。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。
- **步骤 4.** 我们将在 COM 终端看到如下信息。

![](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/COM.png)

:::note
    对于高级编程，您可以 [下载](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/res/Grove-MP3_v2.0_KT403A_datasheet_V1.3_EN-Recompiled_by_Seeed-.pdf) KT403A 芯片的数据手册。
:::

- **步骤 5.** 请输入相关命令以播放音乐。

:::tip
    该库支持 AVR/SAMD/STM32F4 设备，同时支持硬件和软件串口。
:::
串口分为两种。一种是 COMSerial，表示与 Grove-MP3 模块连接的通信端口。另一种是 ShowSerial，表示与 PC 连接的串口信息显示端口。

大多数 Arduino 板至少有一个串口，有些有多个串口（例如 Arduino Mega 有 4 个串口）。它通过数字引脚 0 (RX) 和 1 (TX) 与计算机通过 USB 通信。因此，如果您在引脚 D0 和 D1 上连接 UART 设备，则在通过 USB 下载程序之前必须移除它们。否则会导致上传失败。有时您需要的串口比硬件串口可用数量更多。如果是这种情况，您可以使用软件串口，它通过软件模拟串口硬件。软件串口需要 Arduino 控制器的大量帮助来发送和接收数据，因此它不如硬件串口快速或高效。有关串口的更多信息，请参考 [Seeed Arduino Serial](https://wiki.seeedstudio.com/cn/Seeed_Arduino_Serial/)。

- **AVR:** 在以下示例中，我们将软件串口定义为 COMSerial（连接到 Grove-MP3 模块）。并非所有数字引脚都可以用于软件串口。您可以参考 [Software Serial](https://www.arduino.cc/en/Reference/SoftwareSerial) 了解详细的引脚信息。我们将硬件串口定义为 ShowSerial（连接到 PC）。如果您使用 Arduino Mega，可以将硬件串口连接到 ShowSerial，并将其他 Serial1/Serial2/Serial3 连接到 COMSerial。因此，您可以参考 AVR Mega 的设置。

- **SAMD:** 在以下示例中，SAMD 不支持软件串口。我们使用硬件串口 **Serial1** 与 Grove-MP3 模块通信，并使用 **SerialUSB** 在 PC 上打印消息。

- **STM32F4:** 在以下示例中，我们使用硬件串口 **Serial** 与 Grove-MP3 模块通信，并使用 **SerialUSB** 在 PC 上打印消息。

:::note
    有关串口的更多信息，请参考 [Seeed Arduino Serial](https://wiki.seeedstudio.com/cn/Seeed_Arduino_Serial/)。
:::

```cpp
#ifdef __AVR__
#include <SoftwareSerial.h>
SoftwareSerial SSerial(2, 3); // RX, TX
#define COMSerial SSerial
#define ShowSerial Serial 

KT403A<SoftwareSerial> Mp3Player;
#endif

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
#define COMSerial Serial1
#define ShowSerial SerialUSB 

KT403A<Uart> Mp3Player;
#endif

#ifdef ARDUINO_ARCH_STM32F4
#define COMSerial Serial
#define ShowSerial SerialUSB 

KT403A<HardwareSerial> Mp3Player;
#endif
```

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/res/Grove-MP3_v2.0_Schematic_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Eagle&PDF]** [Grove-MP3_v2.0 原理图文件](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/res/Grove-MP3_v2.0_Schematic_files.zip)
- **[库文件]** [Grove-Serial MP3 Player V2.0 库文件](https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player)
- **[数据手册]** [KT403A 数据手册](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/res/Grove-MP3_v2.0_KT403A_datasheet_V1.3_EN-Recompiled_by_Seeed-.pdf)

## 项目

**基于 Arduino 的安全项目使用 Cayenne**：基于 Arduino 的家庭安全项目。当检测到入侵者时发送短信/电子邮件警报。为授权人员提供个性化消息。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ArduinoBasics/arduino-based-security-project-using-cayenne-eb379b/embed' width='350'></iframe>

**叶子钢琴**：我们使用触摸传感器制作了一架钢琴，并使用树叶作为琴键。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/SeeedStudio/leaf-piano-5261a6/embed' width='350'></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>