---
description: 概述
title: 概述
keywords:
- ReSpeaker_2-Mics_Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ReSpeaker_2_Mics_Pi_HAT
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/products/107100001/01.png)

ReSpeaker 2-Mics Pi HAT 是一款专为 Raspberry Pi 设计的双麦克风扩展板，适用于 AI 和语音应用。这意味着您可以构建一个更强大、更灵活的语音产品，集成 Amazon Alexa Voice Service、Google Assistant 等。

该板基于 WM8960 开发，这是一款低功耗立体声编解码器。板子两侧有 2 个麦克风用于收集声音，还提供 3 个 APA102 RGB LED、1 个用户按钮和 2 个板载 Grove 接口来扩展您的应用。此外，3.5mm 音频插孔或 JST 2.0 扬声器输出都可用于音频输出。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong></a>
</div>

## 特性

* Raspberry Pi 兼容（支持 Raspberry Pi Zero 和 Zero W、Raspberry Pi B+、Raspberry Pi 2 B、Raspberry Pi 3 B、Raspberry Pi 3 B+、Raspberry Pi 3 A+ 和 Raspberry Pi 4）
* 2 个麦克风
* 2 个 Grove 接口
* 1 个用户按钮
* 3.5mm 音频插孔
* JST2.0 扬声器输出
* 最大采样率：48Khz

## 应用创意

* 语音交互应用
* AI 助手

## 硬件概述

![](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/mic_hatv1.0.png)

* BUTTON：用户按钮，连接到 GPIO17
* MIC_L 和 MIC_R：板子两侧的 2 个麦克风
* RGB LED：3 个 APA102 RGB LED，连接到 SPI 接口
* WM8960：低功耗立体声编解码器
* Raspberry Pi 40 针排针：支持 Raspberry Pi Zero、Raspberry Pi 1 B+、Raspberry Pi 2 B、Raspberry Pi 3 B 和 Raspberry Pi 3 B+
* POWER：Micro USB 端口，用于为 ReSpeaker 2-Mics Pi HAT 供电，使用扬声器时请为板子供电以提供足够的电流。
* I2C：Grove I2C 端口，连接到 I2C-1
* GPIO12：Grove 数字端口，连接到 GPIO12 和 GPIO13
* JST 2.0 SPEAKER OUT：用于连接带有 JST 2.0 连接器的扬声器
* 3.5mm AUDIO JACK：用于连接带有 3.5mm 音频插头的耳机或扬声器

## 支持的平台

<div align="center"><img src="https://files.seeedstudio.com/products/107100001/01.png"/></div>

* **[Raspberry Pi 入门指南](https://wiki.seeedstudio.com/cn/ReSpeaker_2_Mics_Pi_HAT_Raspberry)**

<div align="center"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/JetsonNano-2MICS.png"/></div>

* **[Nvidia Jetson Nano 系列入门指南](https://wiki.seeedstudio.com/cn/ReSpeaker_2_Mics_Pi_HAT_Jetson)**

<div align="center"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/IMX6-2MIC-removebg-preview.png"/></div>

* **[NPi i.MX6ULL Dev Board Linux SBC 入门指南](https://wiki.seeedstudio.com/cn/NPi-i.MX6ULL-Dev-Board-Linux-SBC/#iis)**

<div align="center"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/STM32-2MIC-removebg-preview.png"/></div>

* **[ODYSSEY – STM32MP157C 入门指南](https://wiki.seeedstudio.com/cn/ODYSSEY-STM32MP157C/#i2s-on-odyssey-stm32mp157c)**

## 使用 Picovoice 在边缘启用语音识别

<div align="center"><img width = "{700}" src="https://files.seeedstudio.com/wiki/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/banner.gif"/></div>

[**Picovoice**](https://picovoice.ai/) **使企业能够通过私有语音 AI 快速创新和差异化**。使用我们的语音识别和[**自然语言理解 (NLU) 技术**](https://searchenterpriseai.techtarget.com/definition/natural-language-understanding-NLU)，围绕您的品牌和产品构建统一的 AI 策略。

**Seeed 已与 Picovoice 合作，为开发者提供使用 [ReSpeaker 2-Mic Pi HAT](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html) 在边缘进行语音识别的解决方案。**

Picovoice 是一个端到端平台，用于按您的条件构建语音产品。它能够创建类似于 Alexa 和 Google 的语音体验。但它完全在设备上运行 100%。Picovoice 的优势包括：

* **私密性**：所有内容都在离线处理。本质上符合 HIPAA 和 GDPR 标准。
* **可靠性**：无需持续连接即可运行。
* **零延迟**：边缘优先架构消除了不可预测的网络延迟。
* **准确性**：对噪音和混响具有抗性。在很大程度上优于基于云的替代方案。
* **跨平台**：一次设计，随处部署。使用熟悉的语言和框架构建。

## 使用 Mycroft Precise 进行开源关键词检测

除了 Picovoice，我们还为 Mycroft Precise 提供有限支持 - 这是一个开源实时关键词检测包。Mycroft Precise 完全开源，可以训练识别从姓名到咳嗽的任何内容。Precise 设计为在 Linux 上运行。已知它可以在各种 Linux 发行版上工作，包括 Debian、Ubuntu 和 Raspbian。根据官方 README 文件，"它可能在其他 *nx 发行版上也能运行。"

Mycroft Precise 是 Apache-2.0 许可证项目，这意味着您可以修改和分发它，包括用于商业目的 - 唯一的要求是您保留原始许可证。

**您可以在相应平台的入门文档中找到 Picovoice 产品和 Mycroft Precise 的示例。**

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/ReSpeaker 2-Mics Pi HAT.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

* **[Eagle]** [Respeaker_2_Mics_Pi_HAT_SCH](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_SCH.zip)
* **[Eagle]** [Respeaker_2_Mics_Pi_HAT_PCB](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_PCB.zip)
* **[PDF]** [Respeaker_2_Mics_Pi_HAT_SCH](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_SCH.pdf)
* **[PDF]** [Respeaker_2_Mics_Pi_HAT_PCB](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_PCB.pdf)
* **[3D]** [ReSpeaker 2 Mics Pi HAT 3D](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT.zip)
* **[Driver]** [Seeed-Voice Driver](https://github.com/respeaker/seeed-voicecard)
* **[Algorithms]** [Algorithms includes DOA, VAD, NS](https://github.com/respeaker/mic_array)
* **[Voice Engine]** [Voice Engine project, provides building blocks to create voice enabled objects](https://github.com/voice-engine/voice-engine)
* **[Algorithms]** [AEC](https://github.com/voice-engine/ec)

* **[Eagle]** [Respeaker_2_Mics_Pi_HAT_SCH_v2](https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/202004059_ReSpeaker-2-Mics-Pi-HAT-V2.0_SCH_PDF_241121.pdf)


## 项目

**使用 RPI 和 ReSpeaker HAT 构建您自己的 Amazon Echo**：如何使用 Raspberry Pi 和 ReSpeaker 2-Mics HAT 构建您自己的 Amazon Echo。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/idreams/build-your-own-amazon-echo-using-a-rpi-and-respeaker-hat-7f44a0/embed' width='350'></iframe>

**您的个人家庭咖啡师通过这台语音控制咖啡机变为现实**：一台开源、隐私设计的咖啡机，保持您最喜欢的咖啡和咖啡因摄入计划的私密性。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/4gN1bvl24ZM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

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
