---
description: 在 NVIDIA Jetson 设备上使用 Lumeo 部署 AI 模型
title: Lumeo 入门指南
tags:
  - AI model deploy
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Lumeo-Jetson-Getting-Started
last_update:
  date: 03/10/2023
  author: Lakshantha
---

# 在 NVIDIA® Jetson 设备上开始使用 Lumeo

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/thumb.gif" /></div>

[Lumeo](https://lumeo.com) 是一个无代码视频分析平台，让您能够快速设计、部署和监控自定义视频分析和其他视觉AI应用程序。

本教程将介绍如何在 NVIDIA Jetson 平台上轻松安装 Lumeo 并将其设置为网关，以便您能够执行管道并处理来自流媒体、同一网络上的 IP 摄像头或连接的 USB 摄像头的视频。

## 支持的硬件

Lumeo 支持以下平台：

- NVIDIA Jetson
- 配备 Nvidia GPU 的 x86 服务器
- AWS、GCP、Azure 等云平台上的 GPU 实例

但是，在本教程中我们将只专注于如何在 NVIDIA Jetson 平台上部署 Lumeo

## 先决条件

- 运行 NVIDIA JetPack（安装了所有 SDK 组件）并连接到互联网的 NVIDIA Jetson 设备

  - 我们已经使用运行 [JetPack 5.1](https://developer.nvidia.com/embedded/jetpack-sdk-51) 的 [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) 测试了本教程
- 运行 Windows、Linux 或 Mac 并连接到互联网的主机 PC

## 创建 Lumeo 账户

**步骤 1：** 访问[此页面](https://console.lumeo.com/register)，输入邮箱、密码，勾选复选框同意条款，然后点击 **Sign up**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/9.jpg" /></div>

**步骤 2：** 注册新账户后，您可以通过访问[此页面](https://console.lumeo.com/login)使用之前创建的邮箱和密码登录您的账户

**步骤 3：** 输入**组织名称**和**工作区名称**，然后点击 **Start using Lumeo**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Lumeo/10.png" /></div>

现在您将看到 Lumeo 控制台如下所示

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/11.jpg" /></div>

## 在 NVIDIA Jetson 上安装 Lumeo Gateway

**步骤 1：** 在 Jetson 设备内运行安装脚本

```sh
bash <(wget -qO- https://link.lumeo.com/setup)
```

根据您的需求在安装脚本中响应提示。您可以在这里保持所有默认设置

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/1.png" /></div>

如果您看到以下输出，这意味着安装程序已成功完成

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/2.png" /></div>

**步骤 2：** 在提示 **Enter the command:** 旁边输入 **Install** 来安装一个包含网关的新容器

```
Enter the command: 
install
```

**注意：** 免费的 Lumeo 账户只允许部署一个网关。因此，在 Jetson 设备上部署您自己的网关之前，您首先需要删除 Lumeo 自带的默认云网关。只需进入预加载的云网关并点击 **Delete** 来删除该网关。

**步骤 3：** 在提示时为容器输入名称，并在提示时使用您的 Lumeo 账户凭据登录

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/4.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/12.jpg" /></div>

**步骤 4：** 容器安装完成后，输入 **list** 来列出您刚刚安装的容器

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/5.png" /></div>

**步骤 5：** 输入 **exit** 退出正在运行的脚本

现在您已经成功在 NVIDIA Jetson 上安装了 Lumeo Gateway。如果您进入 Lumeo 控制台并导航到 **Gateways**，您将看到新部署的 Jetson 驱动的网关。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/13.png" /></div>

**步骤 3：** 点击网关以查看有关网关的其他信息

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/14.jpg" /></div>

## 向网关添加摄像头

现在我们将向已经在 Jetson 设备上设置的网关添加摄像头

**步骤 1：** 将 USB 摄像头连接到 Jetson 设备上的一个 USB 端口，或将 ONVIF 摄像头连接到与 Jetson 设备相同的网络

**步骤 2：** 在我们之前设置的网关下，点击 **Add Camera**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/15.jpg" /></div>

**步骤 3：** 它将尝试自动发现所有连接的 USB 摄像头和同一网络上的 ONVIF 摄像头。点击摄像头旁边的 **Link** 将摄像头添加到网关

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/16.png" /></div>

如果没有检测到连接的摄像头，点击 Discover 重新开始自动检测过程。如果仍然失败，点击 **+ Manually add cameras** 并配置所有摄像头

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/17.png" /></div>

**步骤 4：** 输入 **Camera name**，如果摄像头需要，提供摄像头凭据，最后点击 **Connect camera**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Lumeo/18.png" /></div>

现在您将看到摄像头成功链接

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/19.png" /></div>

**步骤 5：** 点击链接的摄像头以输出预览快照，如下所示

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/20.png" /></div>

**步骤 6：** 如果您想添加 RTSP 或 HTTP 流，您可以导航到 **Deploy > Streams**，点击 **Add input stream** 并配置流

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/21.jpg" /></div>

## 构建人员检测管道

Lumeo 提供许多不同的开箱即用解决方案，配备预配置的管道和预加载的模型。我们将尝试使用 Lumeo 创建一个简单的人员检测应用程序。

**步骤 1：** 在 **Design > Solutions** 部分选择 **Basics - Detect Objects**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/22.jpg" /></div>

现在您将看到以块状样式为您创建的模板，这允许您向解决方案添加更多自定义和功能。在这里您可以根据自己的偏好添加、修改或删除块

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/23.jpg" /></div>

**步骤 2：** 此模板默认加载一个 **人员检测** 模型，跟踪对象，编码视频并通过 WebRTC 流式传输。我们将保持所有配置的块为默认设置，然后点击 **Deploy**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Lumeo/24.jpg" /></div>

**步骤 3：** 在 **Select Gateway** 下，选择您在 Jetson 上部署的网关，选择您之前配置的摄像头，然后点击 **Deploy** 开始将应用程序部署到 Jetson 设备

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/25.png" /></div>

如果部署成功，您将看到一个名为 **running** 的绿色图标，如下所示

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/26.png" /></div>

**步骤 4：** 点击 **播放按钮** 通过 WebRTC 查看输出流

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Lumeo/27.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/28.png" /></div>

## 了解更多

Lumeo 提供非常详细和全面的文档。因此强烈建议在[这里](https://docs.lumeo.com)查看它们。

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
