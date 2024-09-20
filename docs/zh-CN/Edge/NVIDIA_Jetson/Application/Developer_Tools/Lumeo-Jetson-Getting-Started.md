---
description: 开始在NVIDIA® Jetson设备上使用Lumeo
title: 开始在NVIDIA® Jetson设备上使用Lumeo
tags:
  - AI model deploy
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Lumeo-Jetson-Getting-Started
last_update:
  date: 03/10/2023
  author: Lakshantha
---

# 开始在NVIDIA® Jetson设备上使用Lumeo

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/thumb.gif" /></div>

[Lumeo](https://lumeo.com) 是一个无需编码的视频分析平台，它使您能够快速设计、部署和监控自定义视频分析和启用其他视觉AI应用。

本维基将引导您如何轻松地在NVIDIA Jetson平台上安装Lumeo，并将其设置为网关，以便您能够执行流水线并处理来自同一网络上的流媒体、IP摄像头或连接的USB摄像头的视频。

## 支持的硬件

Lumeo支持以下平台：

- NVIDIA Jetson
- 带有Nvidia GPU的x86服务器
- AWS、GCP、Azure等中的GPU实例

然而，在本维基中，我们将仅关注如何在NVIDIA Jetson平台上部署Lumeo

## 前提条件

- 运行NVIDIA JetPack且已安装所有SDK组件并连接到互联网的NVIDIA Jetson设备

  - 我们已在运行JetPack 5.1的[reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)上测试过本维基
- 具有Windows、Linux或Mac操作系统且连接到互联网的主机PC

## 创建Lumeo账户

**步骤 1:** 访问[这个页面](https://console.lumeo.com/register) ，输入电子邮件、密码，点击复选框同意条款并点击 **Sign up**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/9.jpg" /></div>

**步骤 2:** 注册新账户后，您可以通过访问[这个页面](https://console.lumeo.com/login)  使用之前创建的电子邮件和密码登录您的账户

**步骤 3:**  输入 **organization name** 和 **workspace name** 并点击 **Start using Lumeo** 

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Lumeo/10.png" /></div>

现在您将看到如下的 Lumeo 控制台



<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/11.jpg" /></div>

## 在NVIDIA Jetson上安装Lumeo网关

**步骤 1:**  在Jetson设备内运行安装脚本

```sh
bash <(wget -qO- https://link.lumeo.com/setup)
```

根据需要响应安装脚本中的提示。这里可以保持所有默认设置



<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/1.png" /></div>

如果您看到以下输出，那意味着安装程序已成功完成

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/2.png" /></div>


**步骤 2:** 在提示 **Enter the command:** 旁边键入 **Install** 来安装包含网关的新容器

```
Enter the command: 
install
```

**注意:** 免费的 Lumeo 账户只允许部署一个网关。因此，在将您自己的网关部署到Jetson设备上之前，您需要先删除随 Lumeo 附带的默认云网关。只需进入预先加载的云网关并点击 **Delete** 以删除该网关。

**步骤 3:** 当有提示时为容器输入一个名称，并在有提示时用您的 Lumeo 账户凭证登录



<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/4.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/12.jpg" /></div>

**步骤 4:** 容器安装完成后，输入 **list** 列出您刚刚安装的容器

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/5.png" /></div>

**步骤 5:** 输入 **exit** 退出运行的脚本

现在您已经成功地在NVIDIA Jetson上安装了 Lumeo 网关。如果您转到 Lumeo 控制台并导航到 **Gateways**，您将看到新部署的由Jetson驱动的网关。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/13.png" /></div>

**步骤 6:** 点击网关查看有关网关的附加信息

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/14.jpg" /></div>

## 向网关添加摄像头

现在我们将把摄像头添加到我们已经在Jetson设备上设置好的网关中

**步骤 1:** 将USB摄像头连接到Jetson设备的一个USB端口上，或将ONVIF摄像头连接到与Jetson设备相同的网络上

**步骤 2:** 在我们之前设置的网关下，点击 **Add Camera**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/15.jpg" /></div>

**步骤 3:** It 它将尝试自动发现所有已连接的USB摄像头以及同一网络上的ONVIF摄像头。点击摄像头旁边的 **Link** 将摄像头添加到网关

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/16.png" /></div>

如果没有检测到任何已连接的摄像头，请点击发现以重新开始自动检测过程。如果仍然失败，点击 **+ Manually add cameras** 并配置所有的摄像头

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/17.png" /></div>

**步骤 4:** 输入 **Camera name**，如果摄像头需要提供摄像头凭据，请提供，最后点击 **Connect camera**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Lumeo/18.png" /></div>

现在您将看到摄像头成功链接

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/19.png" /></div>

**步骤 5:** 点击已链接的摄像头输出如下预览快照

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/20.png" /></div>

**步骤 6:** 如果您想添加RTSP或HTTP流，可以导航至 **Deploy > Streams**，点击 **Add input stream** 并配置流

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/21.jpg" /></div>

## 构建人员检测流水线

Lumeo提供了许多不同的现成解决方案，带有预配置的流水线和预加载的模型。我们将尝试使用Lumeo创建一个简单的人员检测应用。

**步骤 1:** 在 **Design > Solutions** 部分内选择 **Basics - Detect Objects**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/22.jpg" /></div>

现在您将看到为您创建的模板，采用基于块的风格，允许您根据个人喜好添加更多自定义和功能。在这里，您可以根据偏好添加、修改或移除块

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/23.jpg" /></div>

**步骤 2:** 此模板默认加载 **people detection** 模型，跟踪对象，编码视频并通过WebRTC流式传输。我们将保留所有配置块为默认设置，然后点击 **Deploy**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Lumeo/24.jpg" /></div>

**步骤 3:** 在 **Select Gateway** 下，选择您在Jetson上部署的网关，选择之前配置的摄像头，然后点击 **Deploy** 开始将应用部署到Jetson设备

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Lumeo/25.png" /></div>

如果部署成功，您将看到如下所示的绿色图标 **running**


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/26.png" /></div>

**步骤 4:** 点击 **play button** 通过WebRTC查看输出流

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Lumeo/27.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Lumeo/28.png" /></div>

## 了解更多 

Lumeo提供了非常详细和全面的文档。因此，强烈建议您在[这里](https://docs.lumeo.com)查看它们。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多个沟通渠道以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>