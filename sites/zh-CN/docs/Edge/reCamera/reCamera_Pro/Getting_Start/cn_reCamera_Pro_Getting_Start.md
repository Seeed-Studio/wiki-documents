---
description: 本指南将帮助您完成硬件连接、登录设备 Web 界面、配置无线网络，以及排查常见连接故障。
title: reCamera Pro 快速入门指南
keywords:
  - reCamera
  - reCamera Pro
  - Edge AI
  - YOLO
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_getting_started
sku: 10003420
sidebar_position: 1
last_update:
  date: 06/01/2026
  author: Sizhao zhou
createdAt: '2026-06-01'
updatedAt: '2026-07-10'
url: https://wiki.seeedstudio.com/cn/recamera_pro_getting_started/
---

# reCamera Pro 快速入门指南

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png" /></div>

## 简介

欢迎使用 **reCamera Pro**。本指南将帮助您完成硬件连接、登录设备 Web 界面、配置无线网络，以及排查常见连接故障。

---

## 1. 硬件连接

在开始配置之前，请确保您已准备好以下硬件：

- **数据线**：一根具备数据传输功能的 USB Type-C 线缆（请勿使用仅支持充电的线缆）。
- **电源**：一根 DC 电源线（规格要求：**12V, 1A**，出厂标配电源为：12V, 2A）。

### 连接步骤

1. 如下图所示，将 12V DC 电源线插入设备电源接口，将 USB Type-C 线缆一端连接到 reCamera Pro，另一端连接到您的 Windows 主机（Host PC）。
2. 观察设备状态指示灯，当**绿灯常亮**时，表示设备已成功启动并进入工作状态。

![系统状态灯与线缆连接示意图](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/en_hardware_line.png)

### 状态指示灯说明

绿色 LED 表示系统状态，红色 LED 为电源指示灯。下表描述了绿色 LED 各种状态对应的设备状态。

1. ***呼吸灯***：此时表示设备正在开机过程中。
2. ***常亮***：设备运行正常。
3. ***熄灭***：异常状态，核心进程未运行。
4. ***100 ms 闪烁***：当前处于 OTA 升级过程。
5. ***短绿闪***：检测到文件系统不干净的 SD 卡。

---

## 2. 登录设备 Web 管理界面

reCamera Pro 内置直观的 Web 管理系统，您可以通过浏览器直接对其进行配置。

:::note 注意
在尝试登录 Web 界面之前，请确保 USB Type-C 线缆已正确连接到电脑，并且设备已完成启动初始化。
:::

### 操作步骤

1. 在主机上打开浏览器（推荐使用 Chrome 或 Edge 浏览器）。
2. 在地址栏中输入默认 IP 地址：`192.168.42.1` 并按回车。
3. 进入登录界面后，输入您的设备登录密码。
4. 勾选登录按钮下方的两个合规与记住选项，然后点击登录，进入 reCamera Pro 系统主界面（默认进入“实时预览”页面）。

![Web 登录与主界面示意图](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/web_login.png)

:::tip 常见故障排查
如果在 Windows 系统下输入 `192.168.42.1` 后页面无法加载，请直接跳转到本文档底部的 [5. 常见问题与故障排查（FAQ）](#4-常见问题与故障排查faq) 章节进行网卡检查。
:::

---

## 3. 无线网络（Wi-Fi）配置

为了使设备能够访问互联网，或在局域网内实现无线管理，请为其配置 Wi-Fi 连接。

### 操作步骤

1. 成功登录 Web 主界面后，点击左侧导航栏中的 **Device Info**。
2. 在二级菜单或右侧配置区域中，点击 **Network Settings**。
3. 打开 Wi-Fi 功能（如果默认处于关闭状态），系统会自动扫描附近的无线网络。
4. 在可用网络列表中选择您的 Wi-Fi SSID，输入正确的无线密码并点击连接。

![无线网络配置步骤示意图](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/en_wifi_setting.png)

### 无线远程连接（可选步骤）

成功连接 Wi-Fi 后，您可以点击已连接的 Wi-Fi 名称，查看其详细网络信息（如分配的 IP 地址、MAC 地址等）。

![查看 Wi-Fi 详情示意图](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/wifi_details.png)

:::tip 拔掉 Type-C 线缆实现无线管理
在获取到 Wi-Fi 分配的局域网 IP 后（例如：`192.168.4.200`），只要您的电脑与 reCamera Pro 处于同一局域网内，即可在浏览器中直接输入该 IP 地址（例如：`http://192.168.4.200`）登录设备。
此时，您可以放心地**拔掉 USB Type-C 线缆**，实现完全无线的操作与管理。
:::

---

## 4. 重置设备

有以下两种方法可以将设备恢复为出厂设置：

1. 按住侧边按钮约 15 秒，直到听到提示音，表示设备已进入重置模式。此时，只需等待绿色状态指示灯保持常亮，即可重新登录设备。
2. 通过 Web 管理界面，依次点击 **设备信息** -> **系统设置** -> **恢复出厂设置**，即可重置设备。
![恢复出厂设置示意图](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera-Pro_reset_Device.jpg)

## 5. 常见问题与故障排查（FAQ）

### Q1：在 Windows 系统下无法通过 192.168.42.1 进入登录界面怎么办？

如果连接 Type-C 线缆后仍无法打开 Web 界面，通常是因为 Windows 系统的虚拟网卡未正确获取 IP 地址。请按照以下步骤进行排查：

1. 在 Windows 主机上打开 **控制面板**。
2. 依次点击进入 **网络和 Internet** -> **网络和共享中心** -> **更改适配器设置**。
3. 在弹出的网络连接列表中，找到名称类似 `Remote NDIS based Internet Sharing Device` 或与 reCamera 相关的虚拟网卡（您可以尝试拔插设备，观察哪个网口消失又出现，该网口即为 reCamera Pro 的虚拟网卡接口）。
4. 右键点击该网络适配器，选择 **属性**。
5. 在列表中双击 **Internet 协议版本 4 (TCP/IPv4)**。
6. 确认配置中已勾选 **自动获得 IP 地址** 和 **自动获得 DNS 服务器地址**。
7. 点击确定保存设置，然后在浏览器中再次访问 `192.168.42.1`。

<video
  src="https://raw.githubusercontent.com/6zsz6/seeed_wiki_video/main/reCamera-Pro-network_config.mp4"
  controls
  width="100%"
  preload="metadata">
  您的浏览器不支持播放此视频。
</video>

### Q2：通过 USB 线缆将 reCamera 连接到电脑后，电脑无法上网

如果您的 MAC 电脑在通过 USB 线缆连接 reCamera 后无法上网，这是因为虚拟网卡会接管 MAC 的 WIFI，导致 MAC 无法连接互联网。请按照以下步骤解决问题：

1. 打开 ***MAC 的系统设置 -> 网络***。
2. 在右下角（或右下侧）找到一个图标，为***内部有三个点“...”的圆圈***（或向下箭头，具体取决于您的 MAC 版本）。
3. 点击 ***设置服务顺序...(Set Service Order...)***。
4. 在弹出的列表中，将 WIFI 拖动到最上方，确保其位于 USB 虚拟网卡（如 USB_Gadget）之前。
5. 点击“OK”保存。此后，在使用 MAC 上网时会优先使用 WIFI 连接，只有在访问 reCamera 时才会使用 USB 连接。

---

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用产品的过程中体验顺畅。我们提供多种交流渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
