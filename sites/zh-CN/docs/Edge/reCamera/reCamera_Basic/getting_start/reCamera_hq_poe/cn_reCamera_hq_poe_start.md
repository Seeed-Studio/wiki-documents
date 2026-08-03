---
description: reCamera HQ POE 入门指南
title: reCamera HQ POE 快速入门指南
keywords:
  - Edge
  - reCamera
  - reCamera HQ POE
  - POE
  - HQ
  - M12
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /recamera_hq_poe_getting_started
sku: 100018917, 100041077, 100029708, 100074316
sidebar_position: 1
last_update:
  date: 09/25/2025
  author: Parker Hu
createdAt: '2023-02-16'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/cn/reCamera/reCamera_Basic/getting_start/recamera_hq_poe_getting_started/
---
# reCamera HQ POE 快速入门指南

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" /></div>

## 介绍

欢迎使用 reCamera HQ POE！reCamera 2002 HQ PoE 配备了先进的 CMOS 传感器，可获得更锐利、更清晰的图像。它采用 M12 镜头卡口——可以灵活地将默认镜头更换为任意兼容的 2MP M12 镜头。同时支持 PoE（以太网供电）：无需单独的 USB/DC 供电，只需一根以太网线连接到 PoE 交换机即可同时传输电源和数据。

本指南将帮助你快速完成设备的设置并开始使用，解锁强大的 AI 视觉功能。无论你是初学者还是有经验的用户，本分步教程都会引导你完成安装、配置和首次使用。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱</font></span></strong>
    </a>
</div>
## 开箱

首先打开你的 reCamera HQ POE 包装盒。盒子内应包含：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/6-100029708-reCamera-2002-HQ-PoE-8GB.jpg" /></div>

- reCamera HQ POE。
- 用户手册（在盒子内）
- USB Type C（[购买链接](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)）
- 以太网线

### 设备连接与登录

**步骤 1：** 使用 USB 线将 reCamera HQ POE 连接到你的电脑。在浏览器中访问 `192.168.42.1` 并修改默认密码。如果你使用的是 PoE 以太网，请通过路由器查询分配的 IP 地址进行访问。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_1.png" /></div>

:::note
请务必记住你的密码，否则在重置设备时所有日志都会被清除。如果你忘记密码，请对设备进行[出厂重置](https://wiki.seeedstudio.com/cn/recamera_getting_started/#factory-reset)。
:::

:::note
默认用户名和密码均为 `recamera`。如果你执行了出厂重置或正在使用一台新的（未配置的）设备，请使用该用户名和密码登录。
:::

**步骤 2：** 使用 USB 线将 reCamera 连接到你的电脑，然后你可以访问 **192.168.42.1** 查看 reCamera 的加载页面。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/usbmode.png" /></div>

如果你想使用以太网端口，可以将随附的数据线连接到你的路由器。设备可以仅通过 **PoE（以太网供电）** 供电。你可以拧开摄像头背部，通过端口进行连接。

连接完成后，你可以在路由器的管理页面中找到 **reCamera 的 IP 地址**，然后访问其 **Web 界面** 和 **Node-RED 平台**。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/ethernet_cable.png" /></div>

**步骤 3：** 你将进入 reCamera HQ POE 预览仪表盘，在这里你可以通过仪表盘上的控件体验 reCamera 的部分功能。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE-1.png" /></div>

## 基础 Web 访问

Web 地址：

- 预览页面：ip_address/#/dashboard
- 主页：ip_address/#/init
- 工作区：ip_address/#/workspace
- 网络配置：ip_address/#/network
- 安全：ip_address/#/security
- 终端：ip_address/#/terminal
- 系统：ip_address/#/system
- 电源：ip_address/#/power
- 原始 Node-RED：ip_address:1880

### 使用 reCamera HQ POE 仪表盘快速上手

**步骤 1：** 通过 **192.168.42.1** 访问网页，你将进入 **实时预览界面**。

**步骤 2：** 你可以调整 ``IoU`` 和 ``Confidence`` 的阈值，以获得更准确的结果。

- IoU=0，Confidence=0：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard2.png" /></div>

- IoU=25，Confidence=33：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard3.png" /></div>

#### AI 模型参数

**Confidence（置信度）**：在 YOLO 模型中，置信度表示预测的边界框中包含目标以及预测准确程度的概率。其取值范围为 0 到 100。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_confidence.png" /></div>

**交并比（Intersection over Union，IoU）**：IoU 是用于评估预测边界框与真实边界框重叠程度的指标。它通过两个框相交区域面积与并集区域面积的比值计算得到。IoU 的值通常在 0 到 1 之间。我们将其标准化为 0 - 100 的范围，IoU 值为 0 表示预测框与真实框完全不重叠，值为 100 表示完全匹配，即两个框完全重合。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_iou.png" /></div>

### 使用 reCamera HQ POE 仪表盘 Flow 快速上手

如果你想了解该仪表盘是如何通过 Node-RED 节点构建的，可以点击右下角，或访问 `ip_address/#/workspace` 进入 Gimbal 的 Node-RED 工作区。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE-2.png" /></div>

然后你将看到默认的 gimbal 仪表盘 flow，你可以双击每个节点查看节点的详细信息。仪表盘 flow 如下所示：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE-3.png" /></div>

**模型设置**：

- 滑块节点允许你调整 YOLO AI 模型的 IoU（交并比）和置信度阈值。

**仪表盘 UI 显示**：

- UI 模板节点会显示当前模型设置的文本信息。
- 它还会渲染来自摄像头的 base64 图像，包括 YOLO 识别到的目标检测框。

**基础 Web Iframe 子流程**：

- 一个 iframe 子流程用于显示基础网页，例如网络设置、系统信息和设备信息。
- 请注意，由于需要通过多个节点渲染页面，这些内容可能会占用 CPU 资源。如果不需要，可以将其删除。

## 应用云端管理与备份

如果你想创建新的应用或将应用保存到 SenseCraft 云服务，可以在左下角登录 sensecraft 账号，然后点击 + 图标添加一个新应用。接着你就可以开始编排你的 flow。

如果你想创建新的应用或将应用保存到 SenseCraft 云服务，可以在左下角登录 sensecraft 账号，然后点击 `+` 图标添加一个新应用。接着你就可以开始编排你的 flow。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_7.png" /></div>

你可以在 [reCamera - SenseCraft AI](https://sensecraft.seeed.cc/ai/#/recamera) 中查看和管理你的应用。

:::note

你需要先注册账号，才能通过该平台登录并同步你的应用。

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_14.png" /></div>

## 端口列表

以下是 reCamera Gimbal 使用的端口列表：

- **端口 22**：用于远程 SSH 登录，目前为关闭状态。
- **端口 53**：与 DNS 域名解析相关，是 Web 重定向所必需的。默认开启。
- **端口 80**：作为 Web 仪表盘接口，用于 HTTP 显示 Node-RED 应用。
- **端口 554**：用于 RTSP 视频流传输。
- **端口 9090**：用于 Web 终端访问，登录需要密码。
- **端口 1880**：用于 Node-RED 操作。

## OTA 系统升级

请参考 [OTA 升级说明](https://wiki.seeedstudio.com/cn/recamera_getting_started/#ota-upgrade-from-013-to-latest-version)。

## 恢复出厂设置

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE-4.jpg" /></div>

如果你想重置设备，例如忘记了设备的密码，可以长按 **User** 按钮，然后将设备接入电源。当设备的 `red light` **常亮** 而不是闪烁时，松开 User 按钮。

## 资源

- [Github](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

## 技术支持与产品讨论

感谢你选择我们的产品！我们为你提供多种支持方式，以确保你在使用产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
