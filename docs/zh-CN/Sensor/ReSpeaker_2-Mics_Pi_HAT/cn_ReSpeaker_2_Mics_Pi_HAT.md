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

ReSpeaker 2-Mics Pi HAT 是一款专为 Raspberry Pi 设计的双麦克风扩展板，适用于 AI 和语音应用。这意味着您可以构建更强大、更灵活的语音产品，集成 Amazon Alexa Voice Service、Google Assistant 等服务。

该板基于 WM8960 开发，这是一款低功耗立体声编解码器。板子两侧有 2 个麦克风用于收集声音，还提供 3 个 APA102 RGB LED、1 个用户按钮和 2 个板载 Grove 接口来扩展您的应用。此外，3.5mm 音频插孔或 JST 2.0 扬声器输出都可用于音频输出。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong></a>
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
* POWER：Micro USB 端口，用于为 ReSpeaker 2-Mics Pi HAT 供电，使用扬声器时请为板子供电以提供足够的电流
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

## 在边缘端使用 Picovoice 启用语音识别

<div align="center"><img width = "{700}" src="https://files.seeedstudio.com/wiki/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/banner.gif"/></div>

[**Picovoice**](https://picovoice.ai/) **使企业能够通过私有语音AI快速创新和差异化**。使用我们的语音识别和[**自然语言理解(NLU)技术**](https://searchenterpriseai.techtarget.com/definition/natural-language-understanding-NLU)，围绕您的品牌和产品构建统一的AI策略。

**Seeed已与Picovoice合作，使用[ReSpeaker 2-Mic Pi HAT](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html)为开发者带来边缘端语音识别解决方案。**

Picovoice是一个端到端平台，用于按照您的条件构建语音产品。它能够创建类似于Alexa和Google的语音体验。但它完全100%在设备上运行。Picovoice的优势包括：

* **私密性**：所有处理都在离线进行。本质上符合HIPAA和GDPR合规要求。
* **可靠性**：无需持续连接即可运行。
* **零延迟**：边缘优先架构消除了不可预测的网络延迟。
* **准确性**：对噪声和混响具有抗性。在准确性方面大幅超越基于云的替代方案。
* **跨平台**：一次设计，随处部署。使用熟悉的语言和框架进行构建。

## 使用 Mycroft Precise 进行开源关键词检测

除了Picovoice，我们还为Mycroft Precise提供有限支持 - 这是一个开源的实时关键词检测包。Mycroft Precise是完全开源的，可以训练识别从姓名到咳嗽的任何内容。Precise设计为在Linux上运行。已知它可以在各种Linux发行版上工作，包括Debian、Ubuntu和Raspbian。根据官方README文件，"它可能在其他*nx发行版上也能运行。"

Mycroft Precise是Apache-2.0许可证项目，这意味着您可以修改和分发它，包括用于商业目的 - 唯一的要求是您保留原始许可证。

**您可以在相应平台的入门文档中找到Picovoice产品和Mycroft Precise的示例。**

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/ReSpeaker 2-Mics Pi HAT.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

* **[Eagle]** [Respeaker_2_Mics_Pi_HAT_SCH](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_SCH.zip)
* **[Eagle]** [Respeaker_2_Mics_Pi_HAT_PCB](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_PCB.zip)
* **[PDF]** [Respeaker_2_Mics_Pi_HAT_SCH](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_SCH.pdf)
* **[PDF]** [Respeaker_2_Mics_Pi_HAT_PCB](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_PCB.pdf)
* **[3D]** [ReSpeaker 2 Mics Pi HAT 3D](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT.zip)
* **[驱动程序]** [Seeed-Voice Driver](https://github.com/respeaker/seeed-voicecard)
* **[算法]** [算法包括DOA、VAD、NS](https://github.com/respeaker/mic_array)
* **[语音引擎]** [语音引擎项目，提供创建语音启用对象的构建块](https://github.com/voice-engine/voice-engine)
* **[算法]** [AEC](https://github.com/voice-engine/ec)

## 项目

**使用 RPI 和 ReSpeaker HAT 构建您自己的 Amazon Echo**：如何使用 Raspberry Pi 和 ReSpeaker 2-Mics HAT 构建您自己的 Amazon Echo。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/idreams/build-your-own-amazon-echo-using-a-rpi-and-respeaker-hat-7f44a0/embed' width='350'></iframe>

**您的个人家庭咖啡师通过这台语音控制咖啡机变为现实**：一台开源、隐私设计的咖啡机，可以保护您最喜欢的咖啡和咖啡因摄入计划的隐私。

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