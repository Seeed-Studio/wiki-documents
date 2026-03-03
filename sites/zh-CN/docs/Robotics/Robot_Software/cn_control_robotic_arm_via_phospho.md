---
description: --
title: Phospho教程
keywords:
- NVIDIA Jetson
- Phospho
- Robotic Arm
- SOARM100
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/lerobot/so_arm_100.webp
slug: /cn/control_robotic_arm_via_phospho
last_update:
  date: 8/4/2025
  author: LiShanghang
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 简介
Phospho 是机器学习工程师让真实机器人变得智能的方式。我们提供硬件、库和远程控制功能，使开发者能够收集数据、训练 AI 模型，并将应用程序部署到真实机器人上，这个过程只需几分钟而不是几个月。

在这个wiki中，我们将演示如何使用 Phospho 控制 SO Arm 100 机械臂的运动。

<div align="center">
    <img width={900} 
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/phospho/phospho_1.png" />
</div>

## 准备工作
- SO Arm 100/101
- 装有 Mac/Windows/Linux 操作系统的电脑

:::note
你可以从 [phospho](https://robots.phospho.ai/starter-pack) 购买一个即开即用的机械臂，或者从 [SeeedStudio](https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html) 获取组装套件。
:::

## 入门指南

### 组装机械臂
1. 如果您是从 Seeedstudio 购买的机械臂套件，您需要参考[此链接](https://wiki.seeedstudio.com/cn/lerobot_so100m/#assembly)来组装您的机械臂。
2. 如果您是从[Phospho](https://robots.phospho.ai/)购买的，您将获得一个即开即用的设备，可以完全跳过组装过程。

<div align="center">
    <img width={900} 
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/lerobot/so_arm_100.jpg" />
</div>

组装完成后，请使用USB数据线将机械臂连接到您的计算机。

### 安装Phospho

<div style={{ textAlign: 'justify' }}>

Phospho 软件的安装非常用户友好，不需要复杂的环境配置，下载时间也很短。您只需根据您的计算机操作系统选择相应的安装命令即可。

</div>

<Tabs>
<TabItem value="MacOS" label="MacOS">

```bash
curl -fsSL https://raw.githubusercontent.com/phospho-app/phosphobot/main/install.sh | bash
```
</TabItem>
<TabItem value="Linux" label="Linux">

```bash
curl -fsSL https://raw.githubusercontent.com/phospho-app/phosphobot/main/install.sh | sudo bash
```

</TabItem>
<TabItem value="Windows" label="Windows">

```bash
powershell -ExecutionPolicy ByPass -Command "irm https://raw.githubusercontent.com/phospho-app/phosphobot/main/install.ps1 | iex"
```

</TabItem>
</Tabs>

然后，启动服务器：

```bash
phosphobot run
```

:::info
服务器最多可能需要 15 秒才能启动。
:::

服务完全启动后，您可以在 http://0.0.0.0:8020/ 访问浏览器中的 UI 界面。
<div align="center">
    <img width={900} 
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/phospho/webui.png" />
</div>

### 连接机械臂

浏览器UI启动后，它将自动发现并识别机械臂。如果识别失败，您可以手动发起连接。

<div align="center">
    <img width={900} 
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/phospho/connection.png" />
</div>

在操作机械臂之前，我们需要进行第二次校准。您可以参考以下视频教程了解校准过程。

<div align="center">
    <img width={900} 
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/phospho/calibration.png" />
</div>

<div class="video-container">
  <iframe width="900" height="540" src="https://www.youtube.com/embed/65DW8yLcRmM" title="How to calibrate the SO-100 or SO-101 robot arm? Step by step guide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::info
LeRobot SO Arm 100/101 通常需要两个校准阶段：
1. 在组装期间：必须对每个伺服电机进行零点标定。
2. 在软件操作期间：需要重新校准以补偿组装误差。
:::

### 使用 Phospho 控制机械臂

与 Lerobot 仓库不同，Phospho 不仅支持通过领导臂（Leader）进行远程操作，还提供了多种控制方法：键盘/鼠标控制、手动拖放控制以及基于虚拟现实（VR）的控制。这种设计将显著丰富我们的数据收集方法。

<div align="center">
    <img width={900} 
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/phospho/control.png" />
</div>

`Control Robot` --> `Keyboard control` --> `Start Moving Robot`

如果一切正常，您现在应该可以使用计算机键盘来控制机械臂的动作了。

:::note
除了远程控制机械臂之外，Phospho 还提供了许多其他令人兴奋的功能等待您去探索！现在就尝试一下吧！
:::

## 效果演示

在这里，我们尝试使用基于虚拟现实（VR）的机械臂控制。在VR设备中安装Phospho远程操作应用程序后，系统可以通过本地网络发现机械臂。如视频中所示，VR界面能够实现机械臂动作的非常流畅的远程操作。

<div class="video-container">
<iframe width="900" height="540" src="https://www.youtube.com/embed/dvkHfyivQjI" title="AI-Powered Control of the Robotic Arm via Phospho" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 参考文档

- [https://phospho.ai/](https://phospho.ai/) 
- [https://docs.phospho.ai/welcome](https://docs.phospho.ai/welcome)
- [https://github.com/phospho-app/phosphobot](https://github.com/phospho-app/phosphobot)
- [https://wiki.seeedstudio.com/cn/lerobot_so100m](https://wiki.seeedstudio.com/cn/lerobot_so100m/)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持服务，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

