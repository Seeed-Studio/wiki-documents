---
description: 本wiki提供了一个逐步指南，介绍如何使用Jetson串口检索reComputer J4012（或类似设备）的启动日志。
title: 如何获取reComputer J30/J40的系统日志？
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/get_the_system_log_of_recomputer_j30_and_j40
last_update:
  date: 1/22/2025
  author: Youjiang
---

本wiki将以[reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)为例，演示如何通过Jetson串口检索设备的启动日志。

## 前提条件

- reComputer J4012/ J4011/ J3010 或 J3011
- [USB转串口(TTL)模块](https://www.seeedstudio.com/CH340G-USB-to-Serial-TTL-Module-Adapter-p-2359.html)
- 安装了串口调试工具的计算机

:::info
您可以根据个人喜好下载并安装串口调试工具。我们推荐使用[PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)、[XShell](https://www.netsarang.com/en/xshell/)或[MobaXterm](https://mobaxterm.mobatek.net/)。

本教程使用MobaXterm。
:::

## 硬件连接

1. 将J15接口的相应引脚连接到USB2TTL模块。
2. 将USB2TTL模块连接到安装了串口调试工具的计算机。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/hardware_connection.png"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/pin.png"/>
</div>

## 获取系统日志

**步骤1.** 获取计算机识别的USB2TTL模块的标识号。

:::note
如果您的计算机运行Windows，您可以在设备管理器中找到识别的标识号。
:::

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/com.png"/>
</div>

**步骤2.** 打开串口调试工具，配置串口号，并将波特率设置为`115200`。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/config_serial.png"/>
</div>

**步骤3.** 给Jetson上电。如果一切正常工作，您应该能在串口调试工具窗口中看到系统启动日志。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/rwiKgF91mNE" title="Get Sys Log of reComputer J30/J40" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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