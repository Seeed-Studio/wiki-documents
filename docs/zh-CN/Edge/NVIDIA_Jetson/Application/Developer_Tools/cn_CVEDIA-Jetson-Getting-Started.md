---
description: 在 NVIDIA Jetson 设备上使用 CVEDIA-RT 部署 AI 模型
title: CVEDIA-RT 入门指南
tags:
  - AI model deploy
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/CVEDIA-Jetson-Getting-Started
last_update:
  date: 03/10/2023
  author: Lakshantha
---

# 在 NVIDIA® Jetson 设备上开始使用 CVEDIA-RT

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/CVEDIA/thumb.gif" style={{width:1000, height:'auto'}}/></div>

[CVEDIA-RT](https://www.cvedia.com/cvedia-rt) 是一个模块化、跨平台的 AI 推理引擎，为构建决策支持系统提供了坚实的基础。它从底层开始设计，充分考虑了开发者和集成商的需求，提供了高级和低级接口。

本教程将介绍如何在 NVIDIA Jetson 平台上轻松安装 CVEDIA-RT 并开始构建令人兴奋的应用程序。

## 支持的硬件

CVEDIA-RT 支持以下平台：

- Windows
- Linux 
- NVIDIA Jetson
- Ambarella

但是，在本教程中我们将只专注于如何在 NVIDIA Jetson 平台上部署 CVEDIA-RT。

## 前提条件

- 运行 NVIDIA JetPack 并安装了所有 SDK 组件且连接到互联网的 NVIDIA Jetson 设备

  - 我们已经使用运行 [JetPack 5.1](https://developer.nvidia.com/embedded/jetpack-sdk-51) 的 [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) 测试了本教程
- 运行 Windows、Linux 或 Mac 且连接到互联网的主机 PC
 
## 下载适用于 NVIDIA Jetson 的 CVEDIA-RT 安装程序

**步骤 1：** 访问[此页面](https://rt.cvedia.com/)并点击 **Sign in** 

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/CVEDIA/10.png" /></div>

**步骤 2：** 注册新的 CVEDIA 账户或使用您的 Google 账户登录

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/CVEDIA/14.png" /></div>

**步骤 3：** 点击 **NVIDIA Jetson** 下的 **Download**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/CVEDIA/12.jpg" /></div>

**步骤 4：** 点击 **Docker(Recommended)** 下载包含 CVEDIA-RT 安装程序的 tar.gz 文件

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/13.png" /></div>

## 在 NVIDIA Jetson 上安装 CVEDIA-RT

**步骤 1：** 将之前下载的文件移动到 Jetson 设备上的新文件夹中，并通过执行以下命令解压

```sh
tar -xzvf <filename.tar.gz>
```

**步骤 2:** 在 Jetson 设备上的解压文件夹内，运行安装脚本

```sh
sudo ./install.sh
```

根据您的需要响应安装脚本中的提示

## 在 NVIDIA Jetson 上运行 CVEDIA-RT

运行应用程序

```sh
./run.sh
```

现在您将看到 CVEDIA-RT 应用程序如下所示打开，它已经预装了许多不同的开箱即用应用程序，例如：

- 人群估计
- 无人机检测
- 跌倒检测
- 车道占用
- 车辆类型计数器
- 包裹检测等等！

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/15.png" /></div>

如果您想在没有互联网连接的情况下本地运行 CVEDIA-RT，请按如下方式运行

```sh
./run.sh -U
```

但是，您需要至少运行一次需要互联网连接的特定应用程序，以便下载必要的文件和模型

## 探索预加载的应用程序

现在我们将探索一些开箱即用的应用程序以及如何配置它们

**步骤 1：** 点击 **intelligent-transportation-systems**，然后点击 **lane-occupancy** 解决方案旁边的运行按钮

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/2.jpg" /></div>

现在它将下载必要的文件，如模型文件、配置文件、示例视频文件并启动演示。在这里您将看到根据车道绘制的区域，每个区域显示该特定区域内有多少辆车。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/lane-GIF.gif" /></div>

**步骤 2：** 在应用程序内根据您的偏好更改设置，如开启/关闭边界框和标签、更改区域、区域颜色等

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/CVEDIA/3.jpg" /></div>

**步骤 3：** 使用 **lane-occupancy** 旁边的两个图标来停止或暂停演示

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/CVEDIA/4.jpg" /></div>

**步骤 4：** 点击 **lane-occupancy** 旁边的齿轮图标，点击 **Edit Source** 来根据您的偏好更改视频流

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/CVEDIA/5.jpg" /></div>

这里您有多个选项可以选择

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/CVEDIA/6.jpg" /></div>

**步骤 5：** 一旦您选择了所需的视频源，您可以点击 **Save Instance** 来使用您选择的视频源运行应用程序

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/CVEDIA/7.jpg" /></div>

**注意：** 确保停止应用程序并重新运行以使更改生效

**步骤 6：** 同样，您可以导航到另一个解决方案，如 **crowd-estimation** 下的 **people_walking**，然后点击播放按钮来运行该解决方案

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/Crowd-GIF-small.gif" /></div>

在这里您可以配置进一步的设置并更改视频流，就像前面提到的解决方案一样

<div align="center"><img width={180} src="https://files.seeedstudio.com/wiki/CVEDIA/9.jpg" /></div>

## 了解更多

CVEDIA-RT 提供非常详细和全面的文档。因此强烈建议您在[这里](http://docs.cvedia.com)查看它们。

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