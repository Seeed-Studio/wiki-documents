---
description: 本指南将协助您完成硬件连接、登录设备 Web 界面、配置无线网络以及排查常见的连接故障
title: reCamera Pro 快速上手指南
keywords:
  - reCamera
  - reCamera Pro
  - 边缘 AI
  - YOLO
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_getting_started
sku: 
sidebar_position: 12
last_update:
  date: 06/01/2026
  author: Sizhao zhou
createdAt: '2026-06-01'
updatedAt: '2026-06-01'
url: https://wiki.seeedstudio.com/cn/recamera_pro_getting_started/
---

# reCamera Pro 快速上手指南

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png" /></div>

## 简介

欢迎使用 **reCamera Pro**。本指南将协助您完成硬件连接、登录设备 Web 界面、配置无线网络以及排查常见的连接故障。

---

## 1. 硬件连接

在开始配置之前，请确保已准备好以下硬件：
* **数据线缆**：一根具备数据传输能力的 USB Type-C 线缆（请勿使用仅具备充电功能的线缆）。
* **供电电源**：一个直流电源线（规格要求：**12V, 1A**,出厂电源线标配: 12V, 2A）。

### 连接步骤

1. 按照下图所示，将 12V DC 电源线接入设备的电源接口，并将 USB Type-C 线缆的一端连接至 reCamera Pro，另一端连接至您的 Windows 宿主机（Host PC）。
2. 观察设备状态指示灯，当**绿灯常亮**时，表明设备已正常启动并进入运行状态。

![系统状态灯与线缆连接示意图](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/hardware_line.png)

---

## 2. 登录设备 Web 管理界面

reCamera Pro 内置了直观的 Web 管理系统，您可以通过浏览器直接对其进行配置。

:::note 注意
在尝试登录 Web 界面前，请确保 USB Type-C 线缆已正确连接至电脑，并且设备已完成开机初始化。
:::

### 操作步骤

1. 在宿主机上打开浏览器（推荐使用 Chrome 或 Edge 浏览器）。
2. 在地址栏中输入默认的 IP 地址：`192.168.42.1` 并回车。
3. 进入登录界面后，输入您的设备登录密码。
4. 勾选登录按钮下方的两个合规与记住选项，点击登录即可进入 reCamera Pro 的系统主界面（默认进入"实时预览"页面）。

![Web 登录与主界面示意图](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/web_login.png)

:::tip 常见问题排查
如果您在 Windows 系统下通过输入 `192.168.42.1` 后页面无法加载，请直接跳转至本文档底部的 [4. 常见问题解答与故障排查（FAQ）](#4-常见问题解答与故障排查faq) 章节进行网络适配器检查。
:::

---

## 3. 无线网络（Wi-Fi）配置

为了使设备能够访问互联网或允许您在局域网内进行无线管理，请为其配置 Wi-Fi 连接。

### 操作步骤

1. 成功登录 Web 主界面后，点击左侧导航栏的 **设备信息**。
2. 在二级菜单或右侧配置区域中，点击 **网络设置**。
3. 开启 Wi-Fi 功能（若默认关闭），系统会自动扫描附近的无线网络。
4. 在可用网络列表中选择您的 Wi-Fi SSID，输入正确的无线密码并点击连接。

![无线网络配置步骤示意图](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/wifi_setting.png)

### 无线远程连接（可选步骤）

成功连接 Wi-Fi 后，您可以点击已连接的 Wi-Fi 名称以查看其详细网络信息（例如分配到的 IP 地址、MAC 地址等）。

![查看 Wi-Fi 详细信息示意图](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/wifi_details.png)

:::tip 拔掉 Type-C 线缆实现无线管理
获取到 Wi-Fi 分配的局域网 IP（例如 `192.168.4.200`）后，只要您的电脑与 reCamera Pro 处于同一个局域网内，您就可以直接在浏览器中输入该 IP 地址（如 `http://192.168.4.200`）来登录设备。
此时，您可以安全地**拔掉 USB Type-C 线缆**，实现完全的无线操控与管理。
:::

---

## 4. 常见问题解答与故障排查（FAQ）

### Q1: Windows 系统下通过 192.168.42.1 无法进入登录界面怎么办？

如果您在连接 Type-C 线缆后无法打开 Web 界面，通常是因为 Windows 系统的虚拟网卡未正确获取 IP 地址。请按照以下步骤排查：

1. 在 Windows 宿主机上打开 **控制面板**。
2. 依次点击进入 **网络和 Internet** -> **网络和共享中心** -> **更改适配器设置**。
3. 在弹出的网络连接列表中，找到名称形如 `Remote NDIS based Internet Sharing Device` 或与 reCamera 相关的虚拟网卡(可以尝试插拔设备,看哪个网口消失并且后又出现那么这个网口就是reCamera Pro的虚拟网卡接口)。
4. 右键点击该网络适配器，选择 **属性**。
5. 在列表中双击 **Internet 协议版本 4 (TCP/IPv4)**。
6. 确保配置已勾选 **自动获得 IP 地址** 和 **自动获得 DNS 服务器地址**。
7. 点击确定保存设置，重新在浏览器中访问 `192.168.42.1`。

<video 
  src="https://raw.githubusercontent.com/6zsz6/seeed_wiki_video/main/reCamera-Pro-network_config.mp4" 
  controls 
  width="100%" 
  preload="metadata">
  您的浏览器不支持播放该视频。
</video>


### Q2: MAC通过USB线缆连接reCamera后电脑无法上网

如果您使用MAC电脑通过USB线缆连接reCamera后电脑无法上网，这是因为虚拟网卡会把MAC的WIFI给挤掉，导致MAC无法无法连接到互联网。请按照以下步骤解决：

1. 打开MAC的 ***系统设置 -> 网络***。
2. 在右下角（或右侧底部），找到一个 ***圆圈里面有三个点 '...'的图标***（或者向下的箭头，取决于你的MAC版本）。
3. 点击它，选择 ***设定服务顺序...(Set Service Order...)***。
4. 在弹出的列表中，将WIFI拖拽到最前面，确保它在USB虚拟网卡（如USB_Gadget）之前。
5. 点击"好"保存。这样MAC上网就会优先走WIFI了，只有访问reCamera的时候才会走USB。

---

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>