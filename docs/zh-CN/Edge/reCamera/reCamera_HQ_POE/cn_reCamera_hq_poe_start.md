---
description: reCamera HQ POE 入门指南
title: 快速入门指南
keywords:
  - Edge
  - reCamera
  - reCamera HQ POE
  - POE
  - HQ
  - M12
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /cn/recamera_hq_poe_getting_started
sidebar_position: 1
last_update:
  date: 09/25/2025
  author: Parker Hu
---
# reCamera HQ POE 入门指南

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" /></div>

## 简介

欢迎使用 reCamera HQ POE！reCamera 2002 HQ PoE 配备了先进的 CMOS 传感器，可提供更清晰、更锐利的图像。它具有 M12 镜头接口——可以灵活地将默认镜头替换为任何兼容的 2MP M12 镜头。还支持 PoE（以太网供电）：无需单独的 USB/DC 电源，只需一根以太网电缆连接到 PoE 交换机即可实现供电和数据传输。

本指南将帮助您快速设置设备并开始使用它来解锁强大的 AI 视觉功能。无论您是初学者还是经验丰富的用户，这个分步指南都将引导您完成安装、配置和首次使用。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱</font></span></strong>
    </a>
</div>
## 开箱

首先拆开您的 reCamera HQ POE 包装。包装盒内应包含：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/6-100029708-reCamera-2002-HQ-PoE-8GB.jpg" /></div>

- reCamera HQ POE。
- 用户手册（包装盒内）
- USB Type C（[购买链接](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)）
- 以太网电缆

### 设置设备并登录

**步骤 1：** 将 USB 电缆从 reCamera HQ POE 连接到您的 PC。在网站上导航到 `192.168.42.1` 并更改默认密码。如果您使用 POE 以太网，请通过查询路由器分配的 IP 地址来访问。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_1.png" /></div>

:::note
请记住您的密码，否则所有日志将被清除以重置您的设备。如果您忘记密码，请[恢复出厂设置](https://wiki.seeedstudio.com/cn/recamera_getting_started/#factory-reset)您的设备。
:::

:::note
默认用户名和密码都是 `recamera`。如果您执行恢复出厂设置或使用新的（未配置的）设备，这些是要使用的用户名和密码。
:::

**步骤 2：** 将 USB 电缆从 reCamera 连接到您的 PC，然后您可以访问 **192.168.42.1** 查看 reCamera 加载页面。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/usbmode.png" /></div>

如果您想使用以太网端口，可以将随附的数据线连接到路由器。设备只能使用 **PoE（以太网供电）** 供电。您可以拧开相机背面并通过端口连接。

连接后，您可以在路由器的管理面板中找到 **reCamera 的 IP 地址**，然后访问 **Web 界面** 和 **Node-RED 平台**。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/ethernet_cable.png" /></div>

**步骤 3：** 您将进入 reCamera HQ POE 预览仪表板，在这里您可以使用仪表板上的控件来体验 reCamera 的一些功能。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE-1.png" /></div>

## 基本 Web 访问

Web 网址：

- 预览页面：ip_address/#/dashboard
- 主页：ip_address/#/init
- 工作区：ip_address/#/workspace
- 网络配置：ip_address/#/network
- 安全：ip_address/#/security
- 终端：ip_address/#/terminal
- 系统：ip_address/#/system
- 电源：ip_address/#/power
- 原始 Node-RED：ip_address:1880

### reCamera HQ POE 仪表板快速入门

**步骤 1：** 通过 **192.168.42.1** 访问网页，您将进入 **实时预览界面**。

**步骤 2：** 您可以调整 ``IoU`` 和 ``Confidence`` 的阈值以获得更准确的结果。

- IoU=0，Confidence=0：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard2.png" /></div>

- IoU=25，Confidence=33：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard3.png" /></div>

#### AI 模型参数

**置信度**：YOLO 模型中的置信度表示预测边界框包含对象的概率以及预测的准确性。它是一个介于 0 和 100 之间的值。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_confidence.png" /></div>

**交并比（IoU）**：IoU 是用于评估预测边界框与真实边界框之间重叠程度的指标。它计算为两个框交集面积与两个框并集面积的比值。IoU 的值通常在 0 到 1 的范围内。我们将其标准化为 0-100 的比例，IoU 值为 0 表示预测框与真实框之间没有重叠。值为 100 表示完美匹配，意味着两个框完全重叠。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_iou.png" /></div>

### reCamera HQ POE 仪表板流程快速入门

如果您想了解仪表板是如何使用 Node-RED 节点制作的，请点击右下角或访问 `ip_address/#/workspace` 来访问 Gimbal 的 Node-RED 工作区

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE-2.png" /></div>

然后您将看到默认的云台仪表板流程，您可以双击每个节点来查看节点的详细信息。仪表板流程将如下所示：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE-3.png" /></div>

**模型设置**：

- 滑块节点允许您调整 YOLO AI 模型的 IoU（交并比）和置信度阈值。

**仪表板 UI 显示**：

- UI 模板节点显示当前模型设置的文本。
- 它还渲染来自相机的 base64 图像，包括 YOLO 识别的对象的检测框。

**基本 Web Iframe 子流程**：

- iframe 子流程显示基本网页，如网络设置、系统信息和设备信息。
- 请注意，这些可能会消耗 CPU 资源，因为它使用多个节点渲染页面。如果不需要，可以删除。

## 应用云管理和备份

如果您想创建新应用程序或将应用程序保存到 SenseCraft 云服务，您可以在左下角登录 sensecraft 账户，然后点击 + 图标标志添加新应用程序。然后您可以开始处理您的流程。

如果您想创建新应用程序或将应用程序保存到 SenseCraft 云服务，您可以在左下角登录 sensecraft 账户，然后点击 `+` 图标标志添加新应用程序。然后您可以开始处理您的流程。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_7.png" /></div>

您可以在 [reCamera - SenseCraft AI](https://sensecraft.seeed.cc/ai/#/recamera) 查看和管理您的应用程序。

:::note

您需要先注册账户，然后才能通过平台登录来同步您的应用程序。

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_14.png" /></div>

## 端口列表

以下列出了 reCamera Gimbal 使用的端口：

- **端口 22**：用于远程 SSH 登录，已关闭。
- **端口 53**：与 DNS 域名解析相关，对于 Web 重定向至关重要。默认开放。
- **端口 80**：作为 Web 仪表板界面，用于 Node-RED 应用程序的 HTTP 显示。
- **端口 554**：用于 RTSP 视频流。
- **端口 9090**：用于 Web 终端访问，需要密码登录。
- **端口 1880**：专用于 Node-RED 操作。

## OTA 系统升级

请参考 [OTA 升级说明](https://wiki.seeedstudio.com/cn/recamera_getting_started/#ota-upgrade-from-013-to-latest-version)。

## 恢复出厂设置

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE-4.jpg" /></div>

如果您想重置设备（例如忘记设备密码），您可以长按 **User** 按钮，然后将设备连接到电源。当设备的 `红灯` **常亮** 而不是闪烁时，松开 User 按钮。

## 资源

- [Github](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

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
