---
title: Grove - MP3 v2.0
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-MP3_v2.0/
slug: /cn/Grove-MP3_v2.0
last_update:
  date: 03/21/2024
  author: WuFeifei
---

![](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/Grove-MP3_v2.0_Product_View_700_S.jpg)

Grove - MP3 v2.0 是一款小巧紧凑的音频模块。它支持对 MP3、WAV 和 WMV 格式音频文件的各种操作，如随机播放音乐、播放特定文件中的音乐等。通过串行通信，您可以使用所有预定义的命令或命令组合对音乐文件执行所有操作。该模块还支持诸如 FAT16 和 FAT32 等常见的文件系统。它配有一个 Grove UART 接口、一个 3.5 毫米音频插孔和一个 micro-SD 卡槽。使用这个模块，您可以为您的静默应用程序增添一些声音。

<iframe width="800" height="450" src="https://www.youtube.com/embed/3FMlt_aqhOc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p style={{}}><a href="https://www.seeedstudio.com/Grove-MP3-v2-0-p-2597.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width={210} height={41} border={0} /></a></p>

## 版本

| 产品版本         | 变更内容         | 发布日期       |
| ---------------- | ---------------- | -------------- |
| Grove - MP3 v1.0 | 初始版本         | 2013年4月28日  |
| Grove - MP3 v2.0 | 更换为KT403A芯片 | 2015年12月15日 |

## 特点

- 支持音频文件的一般操作
- 内置 micro-SD 卡槽和 3.5 毫米音频插孔
- 支持 8 / 11.025 / 12 / 16 / 22.05 / 24 / 32 / 44.1 / 48 (KHz) 的采样率
- 24 位 DAC 输出，90 dB（最大）动态输出范围，信噪比为 85 dB
- 支持 MP3、WMV 和 WAV 音频格式以及 FAT16、FAT32 文件系统
- 内置总共 10 级均衡器

:::提示
    更多关于 Grove 模块的信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/Grove_System/)
:::

## 应用场景

- 中级音频模块，适用于任何应用。

## 规格

| 参数                     | 值                                                           |
| ------------------------ | ------------------------------------------------------------ |
| 输入电压                 | 5 V (DC)                                                     |
| 无信号输出状态的工作电流 | 小于 15 mA                                                   |
| 工作电流                 | 小于 40 mA                                                   |
| 芯片                     | KT403A [(数据手册)](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/res/Grove-MP3_v2.0_KT403A_datasheet_V1.3_EN-Recompiled_by_Seeed-.pdf) |
| 芯片 LDO 输出电压        | 3.3 V                                                        |
| 芯片输出电流             | 100mA(最大)                                                  |
| 支持的文件格式           | MP3, WAV, WMA                                                |
| SD 卡支持的最大内存      | 8 GB                                                         |
| 采样率                   | 8 / 11.025 / 12 / 16 / 22.05 / 24 / 32 / 44.1 / 48(KHz)      |

## 支持的平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::警告
    上述所提及的支持平台是模块软件或理论兼容性的一个指标。在大多数情况下，我们仅针对Arduino平台提供软件库或代码示例。由于无法为所有可能的MCU平台提供软件库/演示代码，因此用户需要编写自己的软件库。
:::

## 硬件概述

![](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/Grove-MP3_v2.0_Component_view-front-1200_S.jpg)

![](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/Grove-MP3_v2.0_Component_View-Back-1200_S.jpg)

## 入门指南

:::注意
    如果您是第一次使用Arduino，我们强烈建议您在开始之前先阅读[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

### 玩转 Arduino

#### 硬件

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | 基础底板 |  Grove - MP3 v2.0 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/Grove-MP3_v2.0_s.jpg)|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/depot/Grove-Mp3-v20-p-2597.html)|

:::注意
    我们还需要一张存有音乐的SD卡，以及一个带有3.5毫米音频插孔的头戴式耳机/耳塞或立体声扬声器。
:::

- **步骤 2.** 将Grove-MP3 v2.0连接到Grove基础底板的D2端口。
- **步骤 3.** 将Grove基础底板插入Seeeduino。
- **步骤 4.** 通过USB线将Seeeduino连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/seeeduino_mp3.jpg)

:::注意
如果我们没有Grove基础底板，我们也可以直接将Grove-MP3 v2.0连接到Seeeduino，如下所示。
:::

| Seeeduino       | Grove-MP3 v2.0 |
|---------------|-------------------------|
| 5V            | 红色                   |
| GND           | 黑色                 |
| D3            | 白色                 |
| D2            | 黄色                |

#### 软件

- **步骤 1.** 从Github下载[Grove-MP3 v2.0](https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player)库。
- **步骤 2.** 参考[如何安装库](https://wiki.seeedstudio.com/How_to_install_Arduino_Library)为Arduino安装库。
- **步骤 3.** 你可以选择**Seeed_Serial_MP3_Player/examples/KT403A_Terminal_player**示例，并将其上传到arduino。如果你不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。
- **步骤 4.** 我们将在COM终端看到以下信息。

![](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/COM.png)

:::注意
    对于高级编程，你可以[下载](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/res/Grove-MP3_v2.0_KT403A_datasheet_V1.3_EN-Recompiled_by_Seeed-.pdf)芯片KT403A的数据手册。
:::

- **步骤 5.** 请输入相关命令来播放音乐。

:::提示
    该库支持AVR/SAMD/STM32F4设备，同时支持硬件串行和软件串行。
:::
有两种串行端口。一种是COMSerial，代表通信端口（与Grove-MP3模块连接）。另一种是ShowSerial，代表串行信息显示端口（与电脑连接）。

大多数arduino板至少有一个串行端口，有些有多个串行端口（Arduino Mega有4个串行端口）。它通过数字引脚0（RX）和1（TX）与计算机通过USB进行通信。因此，如果你在引脚D0和D1上连接了UART设备，你必须在通过USB下载程序之前将它们移除。否则，这会导致上传失败。有时，你需要比可用的硬件串行端口更多的串行端口。如果是这种情况，你可以使用软件串行端口，它使用软件来模拟串行硬件。软件串行需要Arduino控制器提供大量帮助来发送和接收数据，因此它不如硬件串行速度快或效率高。有关串行端口的更多信息，请参考[Seeed Arduino串行端口](https://wiki.seeedstudio.com/Seeed_Arduino_Serial/)。

- **AVR:** 在以下示例中，我们将软件串行定义为COMSerial（与Grove-MP3模块连接）。并非所有数字引脚都可以用于软件串行。您可以参考[软件串行](https://www.arduino.cc/en/Reference/SoftwareSerial)以获取详细的引脚信息。我们将硬件串行定义为ShowSerial（与电脑连接）。如果您使用Arduino Mega，您可以将硬件串行连接到ShowSerial，并将其他Serial1/Serial2/Serial3连接到COMSerial。因此，您可以参考AVR Mega的设置。

- **SAMD:** 在以下示例中，SAMD不支持软件串行。我们使用硬件串行**Serial1**与Grove-MP3模块通信，并使用**SerialUSB**在PC上打印消息。

- **STM32F4:** 在以下示例中，我们使用硬件串行**Serial**与Grove-MP3模块通信，并使用**SerialUSB**在PC上打印消息。

:::注意
    有关串行的更多信息，请参考[Seeed Arduino串行](https://wiki.seeedstudio.com/Seeed_Arduino_Serial/)。
:::

```c++
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

- **[Eagle&PDF]** [Grove-MP3_v2.0_原理图文件](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/res/Grove-MP3_v2.0_Schematic_files.zip)
- **[库]**  [Grove-Serial MP3 Player V2.0 库](https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player)
- **[数据手册]** [KT403A 数据手册](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/res/Grove-MP3_v2.0_KT403A_datasheet_V1.3_EN-Recompiled_by_Seeed-.pdf)

## 项目

**使用Cayenne的基于Arduino的安全项目**：基于Arduino的家庭安全项目。当检测到入侵者时，发送短信/电子邮件警报。为授权人员提供个性化消息。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ArduinoBasics/arduino-based-security-project-using-cayenne-eb379b/embed' width='350'></iframe>

**Leaf Piano**（**树叶钢琴**）: 我们使用触摸传感器和树叶作为钢琴琴键，制作了一台钢琴。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/SeeedStudio/leaf-piano-5261a6/embed' width='350'></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供各种支持，以确保您在使用我们的产品时能够尽可能顺畅。我们提供多种沟通渠道，以满足不同的喜好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
