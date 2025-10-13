---
description: 本文介绍如何将现有的 Jetson Orin Nano Developer Kit 升级到 Jetson Orin Nano Super Developer Kit。通过软件更新，用户可以提升系统的 AI 性能，体验更强大的计算能力。
title: 如何将 Jetson Orin Nano Developer Kit 更新到 Super Kit
keywords:
  - Edge reComputer
  - Jetson Orin Nano Super Developer Kit
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-Nano-Developer-Kit/jetson-orin-nano-dev-kit.webp
slug: /cn/update_orin_nano_developer_kit_to_super_kit
last_update:
  date: 12/19/2024
  author: Youjiang
---

## 什么是 Jetson Orin Nano Super Developer Kit

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-Nano-Developer-Kit/jetson-orin-nano-dev-kit.png"/>
</div>

NVIDIA Jetson Orin Nano™ Super Developer Kit 是一款紧凑而强大的计算机，重新定义了小型边缘设备的生成式 AI。它提供高达 67 TOPS 的 AI 性能——比其前代产品提升了 1.7 倍——可以无缝运行最流行的生成式 AI 模型，如视觉变换器、大语言模型、视觉-语言模型等。仅售 249 美元，它为开发者、学生和创客提供了最实惠且易于使用的平台，并支持 NVIDIA AI 软件和广泛的 AI 软件生态系统。现有的 Jetson Orin Nano Developer Kit 用户只需进行软件升级即可体验这种性能提升，因此每个人现在都可以通过生成式 AI 解锁新的可能性。

:::info
令人惊讶的是，Jetson Orin Nano Developer Kit 只需通过软件更新即可升级到 Jetson Orin Nano Super Developer Kit。
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/NVIDIAr-Jetson-Orintm-Nano-Developer-Kit-p-5617.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
  </a>
</div>


## 如何更新到 Super Developer Kit
只要您手头有一个 Nvidia Jetson Orin Nano 8GB，您就可以按照以下步骤进行升级：
- 步骤 1：连接硬件设备。
- 步骤 2：打开 SDKManager。
- 步骤 3：配置并刷写系统。
观看视频，沉浸式体验每个步骤。

<div class="video-container">
  <iframe width="800" height="480" src="https://www.youtube.com/embed/VhuSCMM7iN0" title="Update Orin Nano Developer Kit to Super Kit" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Orin Nano Super Developer Kit 的实际性能

### 全性能释放

<div class="video-container">
  <iframe width="800" height="480" src="https://www.youtube.com/embed/Xlr3gO7tRfM" title="Power Consumption of Orin Nano Super Developer Kit" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

使用烤机程序让 CPU 和 GPU 满载运行，在此情况下模块的最大功耗达到 21W，接近 Jetson Orin NX 的功耗水平。

:::note
Jetson Orin cpu 和 gpu 烤机程序[下载链接](https://github.com/anseeto/jetson-gpu-burn)。
:::

### 推理速度提升

<div class="video-container">
  <iframe width="800" height="480" src="https://www.youtube.com/embed/gyHM9xJCPxw" title="Ollama on Jetson Orin Nano Super Developer Kit" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

在这里，我们使用 Ollama 加载 Llama3.2-3B 模型，并比较模型在不同功耗模式下的推理速度。很明显，在启用最大功耗时，模型的推理速度明显更快，与其前代产品相比显示出 1.28 倍的改进。

:::note
参考[此教程](https://www.jetson-ai-lab.com/tutorial_ollama.html)了解如何在 Nvidia Jetson 上快速部署 Ollama。
:::

## 结论
Jetson Orin Nano Super Developer Kit 是您在边缘计算生成式 AI 开发领域引领潮流的终极平台。现在是开始并加入充满活力和多样化的高级开发者和研究人员社区的完美时机，与 NVIDIA 一起合作，用物理 AI 解决现实世界的挑战。
对于现有的 Jetson Orin Nano Developer Kit 用户，请升级您的 JetPack SDK 以立即解锁增强的性能。

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