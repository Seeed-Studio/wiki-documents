---
description: ReSpeaker 产品指南
title: reSpeaker 产品指南
keywords:
  - reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ReSpeaker_Product_Guide
last_update:
  date: 1/11/2023
  author: jianjing Huang
createdAt: '2025-08-07'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/ReSpeaker_Product_Guide/
---

# **ReSpeaker 产品指南**

## 面向开发者的开放语音生态系统

[![All ReSpeaker Dev Boards](https://files.seeedstudio.com/wiki/ReSpeakerSolutions/img/FullReSpeakerLine.png)](https://www.seeedstudio.com/series/Respeaker-10.html)

## **选择适合你的 ReSpeaker**

你已经通过我们的[解决方案页面](https://wiki.seeedstudio.com/cn/ReSpeaker_Solutions/)或[介绍页面](https://wiki.seeedstudio.com/cn/ReSpeaker/)对 ReSpeaker 产品线的用途和使用有了一些了解，但究竟哪款产品真正适合你的需求呢？别担心——这个自我认知的页面就是为此而生。

## **三大类别**

目前 ReSpeaker 产品线有 3 个主要的板卡类别。虽然这三类产品都是为了实现语音交互接口而设计，但它们在项目中的集成方式各不相同。

- SBC 解决方案
- Mic Array 解决方案
- 以及 Raspberry Pi Mic Array 解决方案

### **SBC 解决方案**

![SBC Solution](https://files.seeedstudio.com/wiki/ReSpeakerProductGuide/img/SBC_Solution.png)

对于完全围绕语音交互展开的项目，ReSpeaker Core 产品线是理想选择。作为 SBC，它们不仅能够进行语音监听、执行基于软件的 DSP 前端音频处理，还可以控制整个项目的整体流程。从操控硬件到运行高级用户应用代码，ReSpeaker Core 产品线被设计为项目的核心。

建议适用人群：开发者、企业用户

**[ReSpeaker Core v2.0](https://wiki.seeedstudio.com/cn/ReSpeaker_Core_v2.0/)** 具备强大的处理能力以及集成的 6 麦克风环形阵列。板卡中央是核心模块，包含 SoC、内存（RAM）和 PMU。板卡外缘是各类外设，包括连接器、WiFi 模块、LED 和麦克风阵列。这样的设计便于定制，使 ReSpeaker Core v2.0 成为项目的一体化优秀板卡解决方案，并在项目量产时降低成本。

### **Mic Array 解决方案**

![MicArraySolution](https://files.seeedstudio.com/wiki/ReSpeakerProductGuide/img/Mic_Array_Solution.png)

ReSpeaker Mic Array 产品线使用硬件 DSP 进行前端加速，为其集成的系统返回干净的语音信号。这使其非常适合添加到那些能从语音交互中获益的现有项目中。

建议适用人群：开发者、专业创客、企业用户

**[ReSpeaker Mic Array v2.0](https://wiki.seeedstudio.com/cn/ReSpeaker_Mic_Array_v2.0/)** 是一款由 XMOS XVF3000 驱动的环形麦克风阵列。它具备硬件加速的前端音频处理能力，并兼容大多数常见操作系统，包括 Windows、macOS 和许多 Linux 发行版。它同样支持音频输出，在启用时可以实现 AEC。麦克风配置也可以进行设置和自定义。

### **Raspberry Pi Mic Array 解决方案**

![a](https://files.seeedstudio.com/wiki/ReSpeakerProductGuide/img/Raspberry_Pi_Mic_Array_Solutions.png)

我们为 Raspberry Pi 设计了多款 ReSpeaker Shield。对于想要尝试简单语音指令、打造自己的 Amazon Echo 或 Google Home，或在 Raspberry Pi 上进行开发的用户来说，这些适用于 Raspberry Pi 的麦克风阵列是极佳选择。与其他 ReSpeaker 产品类似，它们也可以进行定制。

建议适用人群：创客、专业创客、开发者

**[ReSpeaker 4-Mic Linear Array Kit](https://wiki.seeedstudio.com/cn/ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi/)** 非常适合固定在墙边的项目。该套件具备 180° 语音检测能力，可以检测相对位置，或专注于特定方向并忽略其他语音输入。阵列配有柔性排线，可放置在多种方向，为外壳设计提供更多选择。与其他板卡不同，它仅包含一个蓝色 LED。

主要特性：

- 4 麦克风线性阵列
- 柔性排线，便于灵活放置
- 1 x 蓝色 LED
- 2 x Grove 连接器（I2C & Digital）
- 1 x 3.5mm 音频插孔（立体声）
- 1 x JST 扬声器连接器（单声道）

**[ReSpeaker 6-Mic Circular Array Kit](https://wiki.seeedstudio.com/cn/ReSpeaker_6-Mic_Circular_Array_kit_for_Raspberry_Pi/)** 非常适合放置在人群中央的项目。该套件具备 360° 语音检测能力，可以检测相对位置，或专注于特定方向并忽略其他语音输入。阵列配有柔性排线，可放置在多种方向，为外壳设计提供更多选择。

主要特性：

- 6 麦克风环形阵列
- 柔性排线，便于灵活放置
- 12 x RGB LED
- 2 x Grove 连接器（I2C & Digital）
- 1 x 3.5mm 音频插孔（立体声）
- 1 x JST 扬声器连接器（单声道）

**[ReSpeaker 4-Mic Array](https://wiki.seeedstudio.com/cn/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/)**（环形）具备 360° 语音检测能力。然而，与其他板卡不同的是，它不具备音频输出能力，需要由 Raspberry Pi 独立完成所有音频输出。该板卡配备 4 个麦克风、12 个 RGB LED 和 2 个 grove 连接器。

主要特性：

- 4 麦克风环形阵列
- 12 个 RGB LED
- 2 x Grove 连接器（I2C & GPIO）

:::note
ReSpeaker 4-Mic Array for Raspberry Pi 上没有音频输出接口。它仅用于语音采集。你可以使用 Raspberry Pi 上的[耳机插孔](https://www.raspberrypi.org/documentation/configuration/audio-config.md)进行音频输出。如果你的项目需要更高质量的音频输出，请选择其他产品。
:::

**[ReSpeaker 2-Mic Pi HAT](https://wiki.seeedstudio.com/cn/ReSpeaker_2_Mics_Pi_HAT/)** 是一个非常适合入门的选择。需要特别注意的是，与本类别中的其他产品不同，2-Mic HAT 无法检测说话者的方向，它仅为远场语音输入而设计。

主要特性：

- 双麦克风
- 柔性排线，便于灵活放置
- 3 x RGB LED
- 2 x Grove 连接器（I2C & Digital）
- 1 x 3.5mm 音频插孔（立体声）
- 1 x JST 扬声器连接器（单声道）

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
