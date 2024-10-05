---
description: 在NVIDIA® Jetson设备上开始使用CVEDIA-RT
title: 在NVIDIA® Jetson设备上开始使用CVEDIA-RT
tags:
  - AI model deploy
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/CVEDIA-Jetson-Getting-Started
last_update:
  date: 03/10/2023
  author: Lakshantha
---

# 在NVIDIA® Jetson设备上开始使用CVEDIA-RT

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/CVEDIA/thumb.gif" style={{width:1000, height:'auto'}}/></div>

[CVEDIA-RT](https://www.cvedia.com/cvedia-rt) 是一个模块化的、跨平台的AI推理引擎，为构建决策支持系统提供了坚实的基础。它从一开始就是为开发者和集成商设计的，提供了高级和低级接口。

本维基将指导您如何在NVIDIA Jetson平台上轻松安装CVEDIA-RT并开始构建激动人心的应用程序。

## 硬件支持

CVEDIA-RT支持以下平台：

- Windows
- Linux 
- NVIDIA Jetson
- Ambarella

然而，在本维基中，我们将只关注如何在NVIDIA Jetson平台上部署CVEDIA-RT。

## 前提条件

- 运行NVIDIA JetPack并安装了所有SDK组件的NVIDIA Jetson设备，且已连接到互联网

  - 我们已用[reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)测试了本维基，该设备运行[JetPack 5.1](https://developer.nvidia.com/embedded/jetpack-sdk-51)
- 装有Windows、Linux或Mac的主机PC，且已连接到互联网
 
## 下载适用于NVIDIA Jetson的CVEDIA-RT安装程序

**步骤 1:** 访问[此页面](https://rt.cvedia.com/)并点击 **Sign in** 

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/CVEDIA/10.png" /></div>

**步骤 2:** 注册新的CVEDIA账户或使用您的Google账户登录

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/CVEDIA/14.png" /></div>

**步骤 3:** 在**NVIDIA Jetson**下点击**Download**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/CVEDIA/12.jpg" /></div>

**步骤 4:** 点击  **Docker(Recommended)** 下载包含CVEDIA-RT安装程序的tar.gz文件

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/13.png" /></div>

## 在NVIDIA Jetson上安装CVEDIA-RT

**步骤 1:** 将之前下载的文件移动到Jetson设备上的新文件夹中，并通过执行以下命令解压

```sh
tar -xzvf <filename.tar.gz>
```

**步骤 2:** 在Jetson设备上解压缩后的文件夹内，运行安装脚本

```sh
sudo ./install.sh
```

根据需要响应安装脚本中的提示

## 在NVIDIA Jetson上运行CVEDIA-RT

运行应用程序

```sh
./run.sh
```

现在，您将看到如下打开的CVEDIA-RT应用程序，并且已经预加载了许多不同的应用，例如：

- 人群估算
- 无人机检测
- 跌倒检测
- 车道占用率
- 车辆类型计数器
- 包裹检测等等！

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/15.png" /></div>

如果您想在没有互联网连接的情况下本地运行CVEDIA-RT，请按如下方式运行

```sh
./run.sh -U
```

但是，您需要至少一次通过互联网运行特定应用程序，以便下载必要的文件和模型

## 探索预装的应用程序

现在我们将探索一些开箱即用的应用程序，以及如何配置它们

**步骤 1:**  点击**intelligent-transportation-systems**，然后点击**lane-occupancy**解决方案旁边的运行按钮 

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/2.jpg" /></div>

现在它将下载必要的文件，如模型文件、配置文件、示例视频文件，并开始演示。在这里，您会看到根据车道划分的区域，每个区域都指示着该特定区域内有多少辆车。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/lane-GIF.gif" /></div>

**步骤 2:** 在应用程序内部根据您的偏好更改设置，如开启/关闭边界框和标签，更改区域，区域颜色等

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/CVEDIA/3.jpg" /></div>

**步骤 3:** 使用**lane-occupancy** 旁边的两个图标停止或暂停演示

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/CVEDIA/4.jpg" /></div>

**步骤 4:** 点击**lane-occupancy**旁边的齿轮图标，点击 **Edit Source** 以根据您偏好更改视频流

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/CVEDIA/5.jpg" /></div>

这里您有多个选项可供选择

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/CVEDIA/6.jpg" /></div>

**步骤 5:** 一旦选择了所需的视频源，您可以点击**Save Instance**以使用所选视频源运行应用程序

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/CVEDIA/7.jpg" /></div>

**注意:** 确保停止应用程序并重新运行以使更改生效

**步骤 6:** 类似地，您可以导航到另一个解决方案，如**people_walking**下的 **crowd-estimation**，并点击播放按钮运行解决方案

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/CVEDIA/Crowd-GIF-small.gif" /></div>

在这里，您可以进一步配置设置并像前面提到的解决方案一样更改视频流

<div align="center"><img width={180} src="https://files.seeedstudio.com/wiki/CVEDIA/9.jpg" /></div>

## 了解更多信息

CVEDIA-RT提供了非常详细和全面的文档。因此，强烈建议查看[此处](http://docs.cvedia.com)。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供几个沟通渠道以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>