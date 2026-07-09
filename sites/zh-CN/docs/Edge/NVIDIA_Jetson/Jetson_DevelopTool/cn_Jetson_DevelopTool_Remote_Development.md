---
description: 使用 Seeed Jetson DevelopTool 在 Jetson 设备上访问 VS Code Server、Jupyter Lab、VNC 远程桌面、SSH 终端和 AI agent 工具，并支持 PC 网络共享和首次启动 Jetson Init。
title: 远程开发
keywords:
  - reComputer
  - Jetson
  - DevelopTool
  - 远程开发
  - VS Code Server
  - Jupyter Lab
  - VNC
  - 网络共享
  - Jetson Init
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/Reference-UI.png
slug: /jetson_developtool_remote_development
last_update:
  date: 05/26/2026
  author: Lorraine
createdAt: '2026-05-26'
updatedAt: '2026-05-26'
url: https://wiki.seeedstudio.com/cn/jetson_developtool_remote_development/
---

**Remote Dev** 模块为你提供基于浏览器的完整开发环境，直接运行在 Jetson 上——无需为设备连接显示器或键盘。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-remote-dev.png" style={{width:800, height:'auto'}}/></div>

## 可用工具

| 工具 | 访问方式 | 描述 |
|------|--------------|-------------|
| VS Code Server | 浏览器 | 运行在 Jetson 上、通过浏览器访问的完整 VS Code IDE |
| Jupyter Lab | 浏览器 | 交互式 Python Notebook 环境 |
| VNC 远程桌面 | 浏览器（noVNC）或 VNC 客户端 | Jetson 的完整图形桌面 |
| SSH 终端 | 内嵌终端 | 在 DevelopTool 内快速访问终端 |
| AI Agent 安装 | 一键 | 在 Jetson 上安装 Claude Code、Codex 或 OpenClaw CLI |

## VS Code Server

1. 连接到你的 Jetson 设备。
2. 在 **Remote Dev** 选项卡中，点击 **Launch VS Code Server**。
3. 工具会在 Jetson 上安装 `code-server`（仅首次）并启动它。
4. 点击 **Open in Browser** 按钮——VS Code 将在你的默认浏览器中打开，并连接到 Jetson。

你可以像在本地 VS Code 中一样，打开 Jetson 文件系统上的任意文件夹、安装扩展、运行终端以及调试代码。

## Jupyter Lab

1. 在 Remote Dev 选项卡中点击 **Launch Jupyter Lab**。
2. Jupyter Lab 会在 Jetson 上启动，并显示带有 token 的访问 URL。
3. 点击 **Open in Browser** 进行连接。

## VNC 远程桌面

1. 在 Remote Dev 选项卡中点击 **Launch VNC**。
2. 工具会在 Jetson 上配置 VNC 服务器（仅首次）。
3. 通过内置的 **noVNC** 浏览器查看器访问，或使用任意 VNC 客户端，按显示的地址和端口进行连接。

:::tip
在本地网络中，为获得最佳 VNC 性能，使用专用 VNC 客户端（例如 TigerVNC）会比基于浏览器的 noVNC 查看器更快。
:::

## AI Agent 安装

**AI Agent** 部分允许你在 Jetson 上直接安装 AI 编码助手：

| Agent | 描述 |
|-------|-------------|
| Claude Code | Anthropic 的 CLI 编码 Agent |
| OpenClaw | Seeed 的开源 Agent 框架 |

点击目标 Agent 旁边的 **Install**。工具会为 Jetson ARM 环境处理所有依赖配置。

---

## PC 网络共享

**PC Network Sharing** 模块允许你通过一根直连以太网线，将主机 PC 的互联网连接共享给 Jetson 设备——当 Jetson 未安装 Wi-Fi 网卡，或在没有本地路由器的实验室环境中工作时非常有用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-network-share.png" style={{width:800, height:'auto'}}/></div>

### 工作原理

PC 充当路由器：它将自身的活动互联网接口（Wi-Fi 或另一网口）桥接到连接 Jetson 的以太网接口。该工具还会自动检测你的代理设置并转发到 Jetson，使 `apt`、`pip` 和 `docker pull` 等工具可以透明工作。

### 配置

**你需要准备：**

- 一根连接主机 PC 和 Jetson 的以太网线
- 主机 PC 必须具备活动的互联网连接（Wi-Fi 或第二个以太网口）

**步骤：**

1. 将以太网线连接在 PC 和 Jetson 之间。
2. 在 DevelopTool 中打开 **PC Network Sharing** 选项卡。
3. 选择 **outbound interface**（PC 面向互联网的连接，例如 `wlan0` 或 `eth0`）。
4. 选择 **inbound interface**（连接 Jetson 的以太网口，例如 `eth1`）。
5. 点击 **Enable Sharing**。
6. 工具会配置 NAT，通过 DHCP 为 Jetson 分配 IP，并显示 Jetson 的 IP 地址。

启用后，Jetson 将通过 PC 获得完整的互联网访问能力。

:::tip
如果你处于企业代理环境，请启用 **Auto Proxy Forward** 开关。工具会检测你 PC 的代理设置，并在 Jetson 会话上自动设置 `http_proxy` / `https_proxy` 环境变量。
:::

### 禁用网络共享

点击 **Disable Sharing** 以停止桥接，并恢复 PC 上原有的网络配置。

---

## Jetson Init

**Jetson Init** 模块提供一个引导式串口终端向导，在无需为 Jetson 连接显示器或键盘的情况下，引导你完成 NVIDIA 首次启动设置（OEM 配置）。这是初始化新刷写 Jetson 设备的推荐方式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-jetson-init.png" style={{width:800, height:'auto'}}/></div>

### 何时使用 Jetson Init

- 在向 Jetson 设备刷入全新的 JetPack 镜像之后
- 当 Jetson 未连接显示器，但你需要完成初始 OOBE（开箱体验）时
- 在首次启动时配置系统主机名、用户名、密码、时区和 Wi-Fi 网络

### 配置

**你需要准备：**

- 一根 USB 转串口（UART）线，连接到 Jetson 的调试串口（通常是载板上的 3 针或 4 针排针）
- 运行在主机 PC 上的 DevelopTool

**步骤：**

1. 将串口线连接在主机 PC 和 Jetson 的 UART 调试口之间。
2. 给 Jetson 上电。
3. 在 DevelopTool 中打开 **Jetson Init** 选项卡。
4. 选择正确的 **serial port**（例如 Windows 上的 `COM3`，Linux 上的 `/dev/ttyUSB0`），并将波特率设置为 **115200**。
5. 点击 **Connect**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/connect-jetson-init.png" style={{width:800, height:'auto'}}/></div>

6. 向导会检测首次启动提示，并引导你完成以下步骤：
   - 接受 NVIDIA 许可协议
   - 设置系统语言和区域
   - 创建默认用户名和密码
   - 配置网络（以太网 DHCP 或 Wi-Fi）
   - 设置主机名和时区
7. 设置完成后，Jetson 将重启，并显示分配的 IP 地址。

:::tip
在 Jetson Init 完成后，你可以立即切换到 [Device Management](/cn/jetson_developtool_device_management)，或使用上文的 **Remote Dev** 工具配合显示的 IP 地址进行访问。
:::

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
