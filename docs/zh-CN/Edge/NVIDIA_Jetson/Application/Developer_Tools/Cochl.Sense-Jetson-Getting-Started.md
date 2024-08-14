---
description: 开始在NVIDIA® Jetson设备上使用Cochl.Sense
title: 开始在NVIDIA® Jetson设备上使用Cochl.Sense
tags:
  - AI model deploy
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Cochl.Sense-Jetson-Getting-Started
last_update:
  date: 03/27/2023
  author: Lakshantha
---

# 开始在NVIDIA® Jetson设备上使用Cochl.Sense

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Cochl.Sense/1.gif" style={{width:700, height:'auto'}}/></div>

在本教程中，您将构建一个在NVIDIA Jetson板上运行的声音识别系统，使用[Cochl.Sense](https://www.cochl.ai)。Cochl.Sense是一个机器聆听开发平台，用于在边缘设备如NVIDIA® Jetson设备上部署深度学习应用。

机器聆听，也被称为音频分析或声音识别，是一个快速发展的领域，它利用人工智能和机器学习来分析和理解音频数据。它旨在自动分析和理解来自音乐、动物、车辆、机器、城市噪音以及人类语音的声音。Cochl.Sense内置了一个预训练的机器聆听模型，包括37种不同的目标声音，如枪声、狗吠、警报器声或婴儿哭声。

用大量数据训练模型并从头开始开发机器聆听应用程序需要深入了解音频信号处理和深度学习。Cochl.Sense使开发者和公司能够轻松访问机器聆听，因此您可以用几行代码构建并实施一个性能强大的机器聆听应用程序。

## Cochl.Sense 关键特性

- 94% F-1评分，由IEEE官方测量
- 预训练模型在现实世界中经过测试和验证
- 支持多标签（同时检测多个声音）
- [30+可用的目标声音](https://docs.cochl.ai/sense/tags)

## 获取试用许可

由于Cochl.Sense SDK具有完整的产品功能，访问需经审核。为了访问SDK，您需要提交这个简短的[Google 表格](https://forms.gle/Pa2iYWirLJVNS7Pp6)，并告诉我们您打算如何使用SDK。Cochl将向您的电子邮件发送一个为期2周的试用许可证。

如果您想快速开始，您还可以通过云API免费开始，它具有相同的功能，但在云端运行。[点击这里](https://www.cochl.ai/product)探索！

## 硬件支持

- NVIDIA Jetson

    - [Seeed提供的带有NVIDIA SoMs的完整系统](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)
    - NVIDIA官方开发套件

- Raspberry Pi 3+或以上
- Google Coral Board

尽管Cochl.Sense支持多个硬件平台，但在这个维基中，我们只会关注使用Cochl.Sense与NVIDIA Jetson平台。

## 前提条件

本教程需要:

- [reComputer Jetson](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) 或任何其他运行JetPack 4.6或更高版本的NVIDIA Jetson设备
- 支持16位深度音频、采样率为22,050 Hz的USB麦克风

## 将JetPack刷入Jetson

现在您需要确保Jetson设备已刷入包含SDK组件（如CUDA、TensorRT、cuDNN等）的[JetPack](https://developer.nvidia.com/embedded/jetpack)系统。您可以使用NVIDIA SDK管理器或命令行将JetPack刷入设备。

对于Seeed Jetson驱动设备的刷新指南，请参考以下链接：
- [reComputer J1010 | J101](https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack)
- [reComputer J2021 | J202](https://wiki.seeedstudio.com/reComputer_J2021_J202_Flash_Jetpack)
- [reComputer J1020 | A206](https://wiki.seeedstudio.com/reComputer_J1020_A206_Flash_JetPack)
- [reComputer J4012 | J401](https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack)
- [A203 Carrier Board](https://wiki.seeedstudio.com/reComputer_A203_Flash_System)
- [A205 Carrier Board](https://wiki.seeedstudio.com/reComputer_A205_Flash_System)
- [Jetson Xavier AGX H01 Kit](https://wiki.seeedstudio.com/Jetson_Xavier_AGX_H01_Driver_Installation)
- [Jetson AGX Orin 32GB H01 Kit](https://wiki.seeedstudio.com/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack)

## 开始

部署您的第一个机器聆听项目只需几分钟！在本维基结束时，您将能够检测连接到Jetson设备的麦克风上的实时音频流中的声音。在本教程中，您将学习如何： 

1. 使用Cochl仪表板创建项目
2. 下载Cochl.Sense SDK和示例应用程序的源代码
3. 验证您的示例应用程序
4. 运行您的声音检测应用程序

### 1. 使用Cochl仪表板创建项目

**步骤 1:** 从您的Jetson打开网络浏览器。为了创建新项目，请[注册](https://dashboard.cochl.ai)一个免费的Cochl账户并登录到您的Dashboard账户。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/2.png" /></div>

**步骤 2:** 登录后，点击**+ New project** 按钮。为您的项目命名，从产品类型中选择 **Edge SDK**，并**select tags**以添加您想要检测的目标声音。


<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/3.png" /></div>

### 2. 下载SDK和示例应用程序的源代码

**步骤 1:** 点击您刚刚创建的项目，然后点击**Cochl.Sense SDK** 访问位于[Cochl Docs](https://docs.cochl.ai)的SDK文件下载外部链接。


<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/4.png" /></div>

**步骤 2:** 在 **Cochl Docs**  页面上，点击左侧的 **Resources**选项卡。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/5.png" /></div>

**步骤 3:**  向下滚动找到C++ SDK和Python SDK的**Download Link**。在本教程中，我们下载的是`AArch64`SDK，因为我们使用的是Jetson平台。


<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/6.png" /></div>

**步骤 4:** 打开一个新标签页，转到[此仓库](https://github.com/cochlearai/sense-sdk-cpp-tutorials)获取Sense-sdk C++教程，并下载源代码。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/7.png" /></div>

**步骤 5:** 解压缩您刚刚下载的内容。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/8.png" /></div>

**步骤 6:** 将sense文件夹移动到 `sense-sdk-cpp-tutorials-main` 文件夹中。以下是 `sense-sdk-cpp-tutorials-main` 文件夹的样子。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/9.png" /></div>

### 3. 验证您的示例应用程序

**步骤 1:** 转到 `example` 文件夹，找到 `sense-stream.cc` 文件，并用任何文本编辑器打开它。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/10.png" /></div>

**步骤 2:** 回到浏览器，打开项目页面，导航到  **Settings** 页面，复制 `Project key`。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/11.png" /></div>

**步骤 3:** 转到您用文本编辑器打开的`sense-stream.cc`文件。粘贴您刚刚复制的`Project Key`  以替换 `"Your project key"`  行并**save**文件。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/12.png" /></div>

### 4. 运行您的声音检测应用程序

**步骤 1:** 从您的Jetson打开终端。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/13.png" /></div>

**步骤 2:** 运行以下命令以安装依赖项

```sh
sudo apt update
sudo apt install libpulse-dev pulseaudio pulseaudio-utilss
```

**步骤 3:** 转到源代码文件夹并使用以下命令构建您的应用程序。

```sh
cd Downloads/sense-sdk-cpp-tutorials-main
g++ -fopenmp examples/sense-stream.cc -I./sense/include/ -lsense-core -L./sense/lib -o sense-stream -lm -std=c++11 -ldl -lstdc++ -lpulse -lpulse-simple -Wl,-rpath -Wl,./sense/lib
```

**步骤 4:**  运行应用程序，并尝试自己发出声音或从YouTube等其他来源播放声音。确保在运行应用程序之前将麦克风连接到Jetson设备。您可以实时看到声音检测结果。

```sh
./sense-stream 
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/14.png" /></div>

:::注意
请注意，当你通过扬声器播放时，枪声检测可能无法很好地工作，因为该模型经过训练，最适用于真实的枪声。
:::

**步骤 5:** 要停止应用程序，请按  **Ctrl+C**。

**步骤 6:** 如果您想从网络查看您的检测结果，请转到您的 **Dashboard**，点击 Analytics 标签，并在**Filter** 按钮旁边的时间范围进行设置。


<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/15.png" /></div>

恭喜！您已成功部署了一个实时的机器聆听应用程序。您可以进一步构建自定义的智能城市或智能家居应用程序或将它们与其他应用程序集成。如果您对其他机器聆听技术感兴趣，可以访问[此页面](https://labs.cochl.ai)并尝试其他Cochl解决方案，如音乐识别、音乐内容分析或说话人验证。

## 资源

- [Cochl Docs](https://docs.cochl.ai)
- [Cochl 网站](https://www.cochl.ai)
- [基于Web的演示](https://labs.cochl.ai)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供不同的支持渠道，以确保您在使用我们的产品时体验顺畅。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>