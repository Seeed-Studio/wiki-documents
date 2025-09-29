---
description: ODYSSEY - X86J41x5
title: ODYSSEY 的 LTE 模块
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ODYSSEY-X86J4105-LTE-Module
last_update:
  date: 01/03/2023
  author: w0x7ce

---

本指南将引导您在 Windows 和 Linux 操作系统上使用 ODYSSEY-X86 的 LTE 模块。在本示例中，LTE 模块为 [Quectel EM06-E LTE Cat 6 M.2 模块](https://www.seeedstudio.com/Quectel-EM06-E-LTE-Cat6-Module-p-4567.html)，其采用 M.2 形式。

在两个操作系统上，我们将演示如何使用 **热点** 功能，将 4G LTE 转换为 Wi-Fi 信号，从而轻松将 ODYSSEY-X86 变成一个简单的 **4G Wi-Fi 路由器**！

## 硬件连接

- 将 LTE 模块连接到 ODYSSEY-X86 的 M.2 接口：

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/connection.png" /></div>

- 将 4G SIM 卡插入卡槽。

- 将天线连接到 LTE 模块。

## 配置

Quectel EM06-E LTE Cat 6 M.2 模块支持 Windows 7/8/8.1/10、Linux 和 Android 的 USB 驱动程序，以及 DFOTA 等功能。这使得它非常方便上手，无需安装驱动程序。

### Windows

连接 LTE 模块并启动 Windows 后，系统会自动安装 USB 驱动程序并准备就绪：

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/Windows.png" /></div>

### Windows 下的 Wi-Fi 热点

连接 LTE 模块并接入互联网后，您可以使用 Windows 的热点功能创建 Wi-Fi：

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/WindowsHS.png" /></div>

:::note
确保 Intel 网络卡也连接了天线。
:::

### Linux

对于 Linux，操作也非常简单。运行宽带配置：

:::note
        本文以 Ubuntu 18.04 为参考。
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/1.png" /></div>

选择国家/地区并选择您的网络提供商：
<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/2.png" /></div>

选择您的套餐（默认）：

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/3.png" /></div>

确认详细信息并点击应用：

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/4.png" /></div>

现在，LTE 模块已完成配置，可以用来浏览互联网了！

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/5.png" /></div>

### Linux 下的 Wi-Fi 热点

在 Linux 下，您也可以使用 4G 网络创建 Wi-Fi 热点。以下操作基于 Ubuntu。

- 打开 Ubuntu 的网络设置，在终端中运行以下命令：

```sh
nm-connection-editor
```

将出现以下窗口：

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/HS-1.png" /></div>

- 选择 `Wi-Fi` 作为连接类型：

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/HS-2.png" /></div>

- 按如下配置 Wi-Fi 设置，确保 **模式** 为 `Hotspot`：

<div>
  <div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/HS-3.png" /></div>
  <br />
  <div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/HS-4.png" /></div>
  <br />
  <div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/HS-5.png" /></div>
</div>

- 为了让其他设备识别 Wi-Fi，您必须自行连接该 Wi-Fi。在 Wi-Fi 设置中，选择 `Connect To Hidden Network`。选择我们刚刚创建的网络并连接。

<div>
  <div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/HS-6.png" /></div>
  <br />
  <div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/HS-7.png" /></div>
</div>

- 现在，Wi-Fi 已可供连接！

## 参考

- [ODYSSEY – X86J41x5 的 5G 有多快 | 5G 速度测试](https://blog.seeedstudio.com/blog/2020/06/15/how-fast-is-5g-on-the-odyssey-x86j4105-5g-speed-test-m/)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>