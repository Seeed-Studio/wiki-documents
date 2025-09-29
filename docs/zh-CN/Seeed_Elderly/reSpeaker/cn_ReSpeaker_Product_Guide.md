---
description: ReSpeaker 产品指南
title: ReSpeaker 产品指南
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ReSpeaker_Product_Guide
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

# **ReSpeaker 产品指南**

## 面向开发者的开放语音生态系统

[![All ReSpeaker Dev Boards](https://files.seeedstudio.com/wiki/ReSpeakerSolutions/img/FullReSpeakerLine.png)](https://www.seeedstudio.com/series/Respeaker-10.html)

## **选择您的 ReSpeaker**

您已经对 ReSpeaker 产品线的用途和目的有了一些了解——无论是通过我们的[解决方案页面](https://wiki.seeedstudio.com/cn/ReSpeaker_Solutions/)还是我们的[介绍页面](https://wiki.seeedstudio.com/cn/ReSpeaker/)，但哪些产品真正符合您的需求呢？别担心——这个自我感知的页面将为您提供帮助。

## **三大类别**

目前 ReSpeaker 产品线有 3 个主要的开发板类别。虽然这三个类别都旨在帮助实现语音接口，但它们各自设计用于以不同方式集成到项目中。

- SBC 解决方案
- 麦克风阵列解决方案
- 以及 Raspberry Pi 麦克风阵列解决方案

### **SBC 解决方案**

![SBC Solution](https://files.seeedstudio.com/wiki/ReSpeakerProductGuide/img/SBC_Solution.png)

对于完全围绕语音交互的项目，ReSpeaker Core 系列是理想选择。作为 SBC 运行，它们不仅能够监听语音、执行基于软件的 DSP 进行前端音频处理，还能控制项目的整体流程。从操控硬件到运行高级用户应用程序代码，ReSpeaker Core 系列被设计为其项目的中心。

建议用户：开发者、企业

**[ReSpeaker Core v2.0](https://wiki.seeedstudio.com/cn/ReSpeaker_Core_v2.0/)** 具有强大的处理能力以及集成的 6 麦克风圆形阵列。开发板中央是核心模块，包含 SoC、内存 (RAM) 和 PMU。开发板外边缘是外设，包括连接器、WiFi 模块、LED 和麦克风阵列。这使得定制变得容易，并使 ReSpeaker Core v2.0 成为项目的优秀一体化开发板解决方案，降低了项目规模化时的成本。

### **麦克风阵列解决方案**

![MicArraySolution](https://files.seeedstudio.com/wiki/ReSpeakerProductGuide/img/Mic_Array_Solution.png)

ReSpeaker 麦克风阵列系列使用硬件 DSP 进行前端加速，向集成的系统返回清晰的语音。这使其非常适合添加到现有项目中，为这些项目带来语音接口的好处。

建议用户：开发者、专业创客、企业

**[ReSpeaker 麦克风阵列 v2.0](https://wiki.seeedstudio.com/cn/ReSpeaker_Mic_Array_v2.0/)** 是由 XMOS XVF3000 驱动的圆形麦克风阵列。它具有硬件支持的前端音频处理功能，兼容大多数常见操作系统，包括 Windows、macOS 和许多 Linux 发行版。它也能够进行音频输出，使用时可以实现 AEC。麦克风配置也可以进行配置和定制。

### **Raspberry Pi 麦克风阵列解决方案**

![a](https://files.seeedstudio.com/wiki/ReSpeakerProductGuide/img/Raspberry_Pi_Mic_Array_Solutions.png)

我们为 Raspberry Pi 创建了几款 ReSpeaker 扩展板。对于想要尝试简单语音命令、创建自己的 Amazon Echo 或 Google Home，或在 Raspberry Pi 上进行开发的用户，Raspberry Pi 麦克风阵列是绝佳选择。与其他 ReSpeaker 产品类似，这些产品也可以进行定制。

建议用户：创客、专业创客、开发者

**[ReSpeaker 4-Mic 线性阵列套件](https://wiki.seeedstudio.com/cn/ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi/)** 非常适合靠墙放置的固定项目。能够进行 180° 语音检测，该套件可以检测相对位置，或专注于特定方向同时忽略其他语音输入。阵列具有柔性电缆，允许以多种方向放置，为外壳设计提供更多选择。与其他开发板不同，这款只包含一个蓝色 LED。

显著特性：

- 4-Mic 线性阵列
- 柔性放置的排线
- 1 x 蓝色 LED
- 2 x Grove 连接器（I2C 和数字）
- 1 x 3.5mm 音频插孔（立体声）
- 1 x JST 扬声器连接器（单声道）

**[ReSpeaker 6-Mic 圆形阵列套件](https://wiki.seeedstudio.com/cn/ReSpeaker_6-Mic_Circular_Array_kit_for_Raspberry_Pi/)** 非常适合可能放置在人群中央的项目。能够进行 360° 语音检测，该套件可以检测相对位置，或专注于特定方向同时忽略其他语音输入。阵列具有柔性电缆，允许以多种方向放置，为外壳设计提供更多选择。

显著特性：

- 6-Mic 圆形阵列
- 柔性放置的排线
- 12 x RGB LED
- 2 x Grove 连接器（I2C 和数字）
- 1 x 3.5mm 音频插孔（立体声）
- 1 x JST 扬声器连接器（单声道）

**[ReSpeaker 4-Mic 阵列](https://wiki.seeedstudio.com/cn/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/)**（圆形）能够进行 360° 语音检测。但是，与其他开发板不同，它没有音频输出功能，需要 Raspberry Pi 单独支持所有输出音频。该开发板具有 4 个麦克风、12 个 RGB LED 和 2 个 grove 连接器。

显著特性：

- 4-Mic 圆形阵列
- 12 RGB LED
- 2 x Grove 连接器（I2C 和 GPIO）

:::note
ReSpeaker 4-Mic Array for Raspberry Pi 上没有音频输出接口。它仅用于语音采集。您可以使用 Raspberry Pi 上的[耳机插孔](https://www.raspberrypi.org/documentation/configuration/audio-config.md)进行音频输出。如果您的项目需要更高质量的音频输出，请选择不同的产品。
:::

**[ReSpeaker 2-Mic Pi HAT](https://wiki.seeedstudio.com/cn/ReSpeaker_2_Mics_Pi_HAT/)** 是一个很好的入门级选择。需要注意的是，与此类别中的其他产品不同，2-Mic HAT 无法检测说话者的方向，它仅设计用于远场语音输入。

显著特性：

- 双麦克风
- 用于灵活放置的排线
- 3 x RGB LED
- 2 x Grove 连接器（I2C 和数字）
- 1 x 3.5mm 音频插孔（立体声）
- 1 x JST 扬声器连接器（单声道）

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
