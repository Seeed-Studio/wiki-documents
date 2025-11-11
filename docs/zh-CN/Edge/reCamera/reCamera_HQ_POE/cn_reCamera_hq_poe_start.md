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
slug: /cn/recamera_hd_poe_getting_started
sidebar_position: 1
last_update:
  date: 09/25/2025
  author: Parker Hu
---

# reCamera HQ POE 入门指南

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" /></div>

## 简介

欢迎使用 reCamera HQ POE！reCamera 2002 HQ PoE 配备了先进的 CMOS 传感器，可提供更清晰、更锐利的图像。它具有 M12 镜头接口——可以灵活地将默认镜头替换为任何兼容的 2MP M12 镜头。还支持 PoE（以太网供电）：无需单独的 USB/DC 电源，只需一根以太网线连接到 PoE 交换机即可实现供电和数据传输。

本指南将帮助您快速设置设备并开始使用它来解锁强大的 AI 视觉功能。无论您是初学者还是经验丰富的用户，这个分步指南都将引导您完成安装、配置和首次使用。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱</font></span></strong>
    </a>
</div>

## 开箱

### 设置设备并登录

**步骤 1：** 将 USB 线从 reCamera HQ POE 连接到您的 PC。在网站上导航到 `192.168.42.1` 并更改默认密码。如果您使用 POE 以太网，请通过查询路由器分配的 IP 地址来访问。

## 基本网页访问

网页 URL：

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


### reCamera HQ POE 仪表板流程快速入门

## 应用云管理和备份

如果您想创建新应用程序或将应用程序保存到 SenseCraft 云服务，您可以在左下角登录 sensecraft 账户，然后点击 + 图标来添加新应用程序。然后您就可以开始处理您的流程。


如果您想创建新应用程序或将应用程序保存到 SenseCraft 云服务，您可以在左下角登录 sensecraft 账户，然后点击 `+` 图标来添加新应用程序。然后您就可以开始处理您的流程。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_7.png" /></div>

您可以在 [reCamera - SenseCraft AI](https://sensecraft.seeed.cc/ai/#/recamera) 查看和管理您的应用程序。

:::note

您需要先注册账户，然后才能通过平台登录来同步您的应用程序。

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_14.png" /></div>

## 端口列表

以下列出了 reCamera Gimbal 使用的端口：

- **端口 22**：用于远程 SSH 登录，已关闭。
- **端口 53**：与 DNS 域名解析相关，对网页重定向至关重要。默认开启。
- **端口 80**：作为网页仪表板界面，用于 HTTP 显示 Node-RED 应用程序。
- **端口 554**：用于 RTSP 视频流。
- **端口 9090**：用于网页终端访问，需要密码登录。
- **端口 1880**：专用于 Node-RED 操作。

## OTA 系统升级

请参考 [OTA 升级说明](https://wiki.seeedstudio.com/cn/recamera_getting_started/#ota-upgrade-from-013-to-latest-version)。

## 恢复出厂设置



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
