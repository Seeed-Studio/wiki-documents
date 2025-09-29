---
description: 学习如何使用 S7 协议配置西门子 PLC，并将其与运行在基于树莓派的 reComputer 上的 Node-RED 集成，实现高效的边缘计算。了解设置 S7 节点、创建流程和监控 PLC 变量的分步指导。
title: 使用 S7 协议连接西门子 PLC 与 reComputer R1000

keywords:
  - Edge Controller
  - reComputer R1000
  - Node-Red
  - Siemens
  - S7
  - PLC
  
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/recomputer_r1000_nodered_s7
last_update:
  date: 08/30/2024
  author: Kasun Thushara
---

## 介绍

**S7 协议**是西门子为其可编程逻辑控制器（PLC）系列开发的通信标准。它对于实现西门子 PLC 之间平滑可靠的数据交换至关重要。该协议通过以太网运行，使用一种称为 ISO TCP 的方法，该方法围绕称为协议数据单元（PDU）的数据块进行结构化。每个 PDU 都是一个信息段，其大小和结构在首次建立连接时确定。

在本文中，我们将探讨如何在基于树莓派的 reComputer 上使用 Node-RED（一个流行的基于流程的开发工具）来通过 S7 协议与西门子 PLC 进行接口通信。这种设置允许工业自动化系统与现代物联网平台进行高效灵活的集成。

## 为 S7 协议配置您的 PLC

在设计完梯形图或功能块图后，下一步是配置您的西门子 PLC 以启用 S7 协议。具体步骤可能因您使用的 PLC 型号而异。例如，如果您使用的是[西门子 LOGO PLC](https://www.siemens.com/global/en/products/automation/systems/industrial/plc/logo.html)，您需要在 LOGO Soft 编程软件中进行配置。

**网络配置**：在以太网设置下，您需要输入 PLC 的 IP 地址、子网掩码和默认网关。

**启用 S7 协议**：有一个允许 S7 通信的选项——确保勾选此框。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/logo1.PNG" /></center>

**设置 S7 通信**：添加一个配置为 S7 服务器的以太网连接。您还需要设置客户端和服务器 TSAP（传输服务访问点）。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/logo2.PNG" /></center>

:::note
如果您使用的是不同的西门子 PLC 型号，请务必查阅相关文档以了解具体的配置步骤。
:::

## 在 Node-RED 中配置 S7 节点

要将西门子 PLC 与 Node-RED 集成，您需要使用 `node-red-contrib-s7` 节点。按照以下步骤进行设置：

### 安装 S7 节点

- 转到 Node-RED 中的**管理调色板**选项。
- 导航到**安装**选项卡并搜索 `node-red-contrib-s7`。
- 安装该节点以向您的 Node-RED 环境添加 S7 功能。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/nodered_s7.PNG" /></center>

### 创建流程

- 将 **S7 out** 节点拖放到您的工作区，同时添加两个 **inject** 节点。
- 将 inject 节点连接到 S7 out 节点以启动与 PLC 的通信。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/s7_out.PNG" /></center>

### 配置 S7 Out 节点

- 首先，通过点击 `+（加号）`图标配置端点。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/editS7.PNG" /></center>

- 输入您的 PLC 的 `IP 地址`。
- 将模式设置为 `TSAP`。
- 输入在您的 PLC 服务器设置中配置的 `本地 TSAP` 和 `远程 TSAP`。
- 为您的 PLC 提供一个易于识别的名称。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/LOGO_endpoint.PNG" /></center>

### 添加变量

- 为每个变量定义**名称**和**地址**。
- 使用与不同块类型（例如线圈、输入）对应的适当地址空间。您可以参考[西门子 S7 地址文档](https://www.winccoa.com/documentation/WinCCOA/3.18/en_US/S7_Driver/topics/s7_address.html)了解更多详细信息。
- 确保每个变量名称准确对应其块类型。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/logo_variables.PNG" /></center>

### 配置 Inject 节点

- 编辑 inject 节点的有效载荷以设置布尔值。使用一个 inject 节点设置为 `true`，另一个设置为 `false`。

<center><img width={500} height={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/true.PNG" /></center>
<center><img width={500} height={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/false.PNG" /></center>

### 添加 S7 In 节点进行监控

- 拖放 **S7 in** 节点以监控变量值。
- 您可以配置此节点以查看单个变量或所有变量。
- 选择您希望监控的相应 `PLC、模式` 和 `变量`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/s7_in.PNG" /></center>

### 部署您的流程

- 配置完所有内容后，部署您的流程以开始与您的西门子 PLC 通信。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/final.PNG" /></center>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
