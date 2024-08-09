---
description: Jetson Resource
title: Jetson Resource
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

所有NVIDIA® Jetson™模块和开发者套件都由相同的软件栈支持，使您能够一次开发并部署到任何地方。Jetson软件旨在为AI应用提供端到端的加速，并加快您的上市时间。我们将数据中心和云计算部署所使用的强大NVIDIA技术带到了边缘。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rewendang.png" alt="pir" width={800} height="auto" /></p>

### [NVIDIA JetPack SDK](https://developer.nvidia.com/embedded/jetpack)

Jetson软件栈以NVIDIA JetPack™ SDK开始，它提供了一个完整的开发环境，包括CUDA-X加速库和其他NVIDIA技术，以启动您的开发。JetPack包括Jetson Linux驱动程序包，为Jetson平台提供Linux内核、引导加载程序、NVIDIA驱动程序、闪存工具、示例文件系统和工具链。它还包含安全功能、空中更新等。JetPack包括NVIDIA容器运行时，以在边缘启用云原生技术和工作流。

了解更多信息：

- [JetPack SDK](https://developer.nvidia.com/embedded/jetpack)
- [Jetson Linux](https://developer.nvidia.com/embedded/linux-tegra)
- [Cloud-Native on Jetson](https://developer.nvidia.com/embedded/jetson-cloud-native)

### [NVIDIA TAO 和预训练AI模型](https://developer.nvidia.com/tao)

NVIDIA TAO简化了深度学习工作流程中耗时的部分，从数据准备到训练再到优化，缩短了价值实现时间。

了解更多信息：

- [TAO](https://developer.nvidia.com/tao)
- [Pretrained Models](https://developer.nvidia.com/tao-toolkit)

### [NVIDIA Triton 推理服务器](https://developer.nvidia.com/nvidia-triton-inference-server)

NVIDIA Triton™推理服务器简化了AI模型的大规模部署。Triton推理服务器是开源的，提供了一个标准化的推理平台，可以支持在不同部署环境中（如数据中心、云端、嵌入式设备和虚拟化环境）的多帧模型推理。它支持不同类型的推理查询，具有高级批处理和调度算法，并支持实时模型更新。

了解更多信息：

- [NVIDIA Triton Inference Server](https://developer.nvidia.com/nvidia-triton-inference-server)

### [NVIDIA Riva](https://developer.nvidia.com/riva)

NVIDIA Riva 是一个完全加速的软件开发包，用于使用端到端深度学习流水线构建多模态对话式AI应用程序。Riva SDK 包括预训练的对话式AI模型、NVIDIA TAO工具包以及针对语音、视觉和自然语言处理（NLP）任务的优化的端到端技能。

了解更多信息:

- [Riva](https://developer.nvidia.com/riva)

### [NVIDIA DeepStream SDK](https://developer.nvidia.com/deepstream-sdk)

NVIDIA DeepStream SDK 为基于AI的多传感器处理以及Jetson上的视频和图像理解提供完整的流分析工具包。DeepStream是NVIDIA Metropolis的核心部分，一个用于构建端到端服务和解决方案的平台，将像素和传感器数据转化为可操作的洞见。了解更多信息：DeepStream >

了解更多信息:

- [DeepStream >](https://developer.nvidia.com/deepstream-sdk)

### [NVIDIA Isaac](https://developer.nvidia.com/isaac-sdk)

NVIDIA Isaac ROS GEM 是一个硬件加速包，使ROS开发者更容易在NVIDIA硬件上构建高性能解决方案。NVIDIA Isaac Sim由Omniverse驱动，是一个可扩展的机器人模拟应用程序。它包括Replicator——一个生成各种合成数据集以训练感知模型的工具。Isaac Sim还是一个支持逼真、物理准确的虚拟环境的工具，用于开发、测试和管理基于AI的机器人。

了解更多信息:

- [Isaac ROS GEM](https://developer.nvidia.com/isaac-ros-gems)
- [Isaac Sim](https://developer.nvidia.com/isaac-sim)

---

## [Jetson 模块](https://developer.nvidia.com/embedded/jetson-modules)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rewendang2.png" alt="pir" width={500} height="auto" /></p>

NVIDIA® Jetson™ 将加速的AI性能带到边缘设备，采用节能且紧凑的外形尺寸。Jetson系列模块都使用相同的NVIDIA CUDA-X™软件，并支持云原生技术如容器化和编排，以构建、部署和管理边缘处的AI。

[了解所有Jetson模块>](https://developer.nvidia.com/embedded/jetson-modules)

**reComputer Jetson应用这些模块:**

### Jetson Xavier NX 系列

<table align="center">
  <tbody><tr>
      <th align="center" />
      <th align="center" />
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/recomputerzhongwen/rewendang3.jpg" alt="pir" width={300} height="auto" /></p></td>
      <td align="left">Jetson Xavier NX在一个小尺寸模块中为边缘带来高达21 TOPs的AI计算能力。它可以并行运行多个现代神经网络并处理来自多个高分辨率传感器的数据，这是完整AI系统的要求。Jetson Xavier NX系列可以用于生产应用，并支持所有流行的AI框架。<br /> Jetson Xavier NX - <a href="https://www.seeedstudio.com/Jetson-20-1-H1-p-5328.html">reComputer J2011</a><br /> Jetson Xavier NX 16GB - <a href="https://www.seeedstudio.com/Jetson-20-1-H2-p-5329.html">reComputer J2012</a></td>
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
      <td align="left">Jetson Nano是一款小型但功能强大的嵌入式AI系统和IoTs计算机，以低功耗平台提供现代AI的力量。通过NVIDIA Jetpack SDK和一个全桌面Linux环境，你可以快速上手并开始探索嵌入式产品的新世界。<br /> Jetson Nano - <a href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html">reComputer J1010</a>, <a href="https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html">reComputer J1020</a></td>
    </tr>
  </tbody>
</table>

## Brush guide

由于reComputer Jetson系列产品已配备16 GB eMMC，并且`ubuntu 18.04 LTS`和`NVIDIA JetPack 4.6`都已预装，您可以直接应用它来开发您的项目。如果您想重新刷新，请访问下面的适当文档：

- [J1010 载波版本](https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack/)
- [Jetson A206 载板](https://wiki.seeedstudio.com/reComputer_J1020_A206_Flash_JetPack/)

## 支持

在Jetson论坛上提出问题并接收回答。NVIDIA工程师、社区开发人员和Jetson合作伙伴都会在这里做出贡献。检查：

- [Jetson Nano 论坛](https://forums.developer.nvidia.com/c/agx-autonomous-machines/jetson-embedded-systems/jetson-nano) 适用于Jetson Nano开发套件和Jetson Nano生产模块。
- [Jetson Xavier NX 论坛](https://forums.developer.nvidia.com/c/agx-autonomous-machines/jetson-embedded-systems/jetson-xavier-nx)适用于Jetson Xavier NX开发套件和Jetson Xavier NX生产模块。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您在使用我们产品时的体验尽可能顺畅。我们提供几个沟通渠道以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

