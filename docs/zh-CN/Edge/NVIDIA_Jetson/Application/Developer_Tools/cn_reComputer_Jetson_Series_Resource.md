---
description: Jetson 资源
title: Jetson 资源
keywords:
  - Edge
  - reComputer Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_Jetson_Series_Resource
last_update:
  date: 01/04/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# Jetson 资源

## [Jetson 软件](https://developer.nvidia.com/embedded/develop/software)

所有 NVIDIA® Jetson™ 模块和开发套件都由相同的软件堆栈支持，使您能够一次开发，随处部署。Jetson 软件旨在为 AI 应用程序提供端到端加速，并加快您的产品上市时间。我们将为数据中心和云部署提供动力的强大 NVIDIA 技术带到边缘。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rewendang.png" alt="pir" width={800} height="auto" /></p>

### [NVIDIA JetPack SDK](https://developer.nvidia.com/embedded/jetpack)

Jetson 软件堆栈从 NVIDIA JetPack™ SDK 开始，它提供了一个完整的开发环境，包括 CUDA-X 加速库和其他 NVIDIA 技术，以启动您的开发。JetPack 包括 Jetson Linux 驱动程序包，它为 Jetson 平台提供 Linux 内核、引导加载程序、NVIDIA 驱动程序、刷写实用程序、示例文件系统和工具链。它还包括安全功能、空中更新等。JetPack 包括 NVIDIA 容器运行时，以在边缘启用云原生技术和工作流程。

了解更多：

- [JetPack SDK](https://developer.nvidia.com/embedded/jetpack)
- [Jetson Linux](https://developer.nvidia.com/embedded/linux-tegra)
- [Jetson 上的云原生](https://developer.nvidia.com/embedded/jetson-cloud-native)

### [NVIDIA TAO 和预训练 AI 模型](https://developer.nvidia.com/tao)

NVIDIA TAO 简化了深度学习工作流程中耗时的部分，从数据准备到训练再到优化，减少了价值实现时间。

了解更多：

- [TAO](https://developer.nvidia.com/tao)
- [预训练模型](https://developer.nvidia.com/tao-toolkit)

### [NVIDIA Triton 推理服务器](https://developer.nvidia.com/nvidia-triton-inference-server)

NVIDIA Triton™ 推理服务器简化了大规模 AI 模型的部署。Triton 推理服务器是开源的，提供了一个单一的标准化推理平台，可以在数据中心、云、嵌入式设备和虚拟化环境等不同部署中支持多框架模型推理。它支持具有高级批处理和调度算法的不同类型的推理查询，并支持实时模型更新。

了解更多：

- [NVIDIA Triton 推理服务器](https://developer.nvidia.com/nvidia-triton-inference-server)

### [NVIDIA Riva](https://developer.nvidia.com/riva)

NVIDIA Riva 是一个完全加速的 SDK，用于使用端到端深度学习管道构建多模态对话式 AI 应用程序。Riva SDK 包括预训练的对话式 AI 模型、NVIDIA TAO 工具包，以及针对语音、视觉和自然语言处理 (NLP) 任务的优化端到端技能。

了解更多：

- [Riva](https://developer.nvidia.com/riva)

### [NVIDIA DeepStream SDK](https://developer.nvidia.com/deepstream-sdk)

NVIDIA DeepStream SDK 为 Jetson 上基于 AI 的多传感器处理以及视频和图像理解提供了完整的流分析工具包。DeepStream 是 NVIDIA Metropolis 的组成部分，Metropolis 是一个用于构建端到端服务和解决方案的平台，可将像素和传感器数据转换为可操作的洞察。了解更多：DeepStream >

了解更多：

- [DeepStream >](https://developer.nvidia.com/deepstream-sdk)

### [NVIDIA Isaac](https://developer.nvidia.com/isaac-sdk)

NVIDIA Isaac ROS GEM 是一个硬件加速包，使 ROS 开发人员更容易在 NVIDIA 硬件上构建高性能解决方案。NVIDIA Isaac Sim 由 Omniverse 提供支持，是一个可扩展的机器人仿真应用程序。它包括 Replicator - 一个生成各种合成数据集用于训练感知模型的工具。Isaac Sim 也是一个支持逼真、物理精确虚拟环境的工具，用于开发、测试和管理基于 AI 的机器人。

了解更多：

- [Isaac ROS GEM](https://developer.nvidia.com/isaac-ros-gems)
- [Isaac Sim](https://developer.nvidia.com/isaac-sim)

---

## [Jetson 模块](https://developer.nvidia.com/embedded/jetson-modules)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rewendang2.png" alt="pir" width={500} height="auto" /></p>

NVIDIA ® Jetson™ 以节能紧凑的外形为边缘设备带来加速的 AI 性能。Jetson 模块系列都使用相同的 NVIDIA CUDA-X™ 软件，并支持云原生技术（如容器化和编排）来构建、部署和管理边缘 AI。

[了解所有 Jetson 模块 >](https://developer.nvidia.com/embedded/jetson-modules)

**reComputer Jetson 应用这些模块：**

### Jetson Xavier NX 系列

<table align="center">
  <tbody><tr>
      <th align="center" />
      <th align="center" />
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rewendang3.jpg" alt="pir" width={300} height="auto" /></p></td>
      <td align="left">Jetson Xavier NX 以小型模块形式为边缘带来高达 21 TOPs 的 AI 计算能力。它可以并行运行多个现代神经网络，并处理来自多个高分辨率传感器的数据，这是完整 AI 系统的要求。Jetson Xavier NX 系列可用于生产应用，并支持所有流行的 AI 框架。<br /> Jetson Xavier NX - <a href="https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html">reComputer J2011</a><br /> Jetson Xavier NX 16GB - <a href="https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html">reComputer J2012</a></td>
    </tr>
  </tbody>
</table>

### Jetson Nano

<table align="center">
  <tbody><tr>
      <th align="center" />
      <th align="center" />
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rewendang4.jpg" alt="pir" width={300} height="auto" /></p></td>
      <td align="left">Jetson Nano 是一款小巧而强大的计算机，专为嵌入式 AI 系统和物联网设计，在低功耗平台上提供现代 AI 的强大功能。您可以通过 NVIDIA Jetpack SDK 和完整的桌面 Linux 环境快速上手，开始探索嵌入式产品的新世界。<br /> Jetson Nano - <a href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html">reComputer J1010</a>, <a href="https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html">reComputer J1020</a></td>
    </tr>
  </tbody>
</table>

## 刷机指南

由于 reComputer Jetson 系列产品已配备 16 GB eMMC，并预装了 `ubuntu 18.04 LTS` 和 `NVIDIA JetPack 4.6`，您可以直接将其应用于开发项目。如果您想要重新刷机，请访问下面相应的文档：

- [J1010 载板版本](https://wiki.seeedstudio.com/cn/reComputer_J1010_J101_Flash_Jetpack/)
- [Jetson A206 载板](https://wiki.seeedstudio.com/cn/reComputer_J1020_A206_Flash_JetPack/)

## 支持

在 Jetson 论坛上提问和接收问题答案。NVIDIA 工程师、社区开发者和 Jetson 合作伙伴都在这里贡献。查看：

- [Jetson Nano 论坛](https://forums.developer.nvidia.com/c/agx-autonomous-machines/jetson-embedded-systems/jetson-nano) 用于 Jetson Nano 开发套件和 Jetson Nano 生产模块。
- [Jetson Xavier NX 论坛](https://forums.developer.nvidia.com/c/agx-autonomous-machines/jetson-embedded-systems/jetson-xavier-nx) 用于 Jetson Xavier NX 开发套件和 Jetson Xavier NX 生产模块。

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

