---
description: 在 NVIDIA Jetson 设备上使用 Allxon 进行远程管理
title: Allxon 入门指南
tags:
  - Remote Manage
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Allxon-Jetson-Getting-Started
last_update:
  date: 1/13/2023
  author: jianjing Huang
---

# 在 NVIDIA® Jetson 设备上使用 Allxon 入门指南

<p style={{textAlign: 'center'}}><img src="https://www.allxon.com/hs-fs/hubfs/Allxon_%E6%8F%92%E7%95%AB_20210512-+NVIDIA.png?width=1125&height=845&name=Allxon_%E6%8F%92%E7%95%AB_20210512-+NVIDIA.png" alt="pir" width="1000" height="auto"/></p>

[Allxon](https://www.allxon.com) 是一个重要的边缘设备管理解决方案，通过连接 AI/IoT 生态系统：硬件（IHV）、软件（ISV）和服务提供商（SI/MSP），简化和优化业务运营管理。作为生态系统连接器，Allxon 是点燃快速、无缝连接的火花，保持所有系统正常运行。

您可以安全地管理 NVIDIA® JetPack 4.6 及更高版本，通过边缘网络安全保护所有网络和硬件。Allxon 集成了趋势科技物联网安全™（TMIS）的独家威胁情报，确保您获得多层保护。

Allxon 为所有边缘设备提供带内和带外远程设备管理服务，帮助企业节省时间并削减指数级的人工成本。通过简单地在易于使用的单一云门户上导航，企业可以轻松优化和简化其服务。

## 支持的硬件

- [支持所有 nvidia jetson 设备](https://www.seeedstudio.com/tag/nvidia.html)

## 先决条件

- 上述任一 Jetson 设备
- 已在 Jetson 设备上安装最新的 Jetson OS
- 显示器、键盘、鼠标（可选）

## 入门指南

使用 Allxon 入门只需几分钟！

- 硬件接线介绍
- 注册 Allxon 账户
- 在 Jetson 设备上安装 Allxon DMS 代理
- 获取设备配对代码
- 将 Jetson 设备添加到 Allxon DMS 门户

### 硬件接线介绍

OOB Enabler 主板的引脚定义和电缆的相应颜色。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/writting-1.png" alt="pir" width="500" height="auto"/></p>
在这里，我们将使用 OBB 和 Jetson Orin Nano 的接线图作为示例。以下信息提供了 NVIDIA®
Jetson™ Orin Nano Dev Kit 的接线示例。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/wiring-2.png" alt="pir" width="700" height="auto"/></p>
我们还提供了接线的示意图。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/wiring-3.png" alt="pir" width="1000" height="auto"/></p>

### 注册 Allxon 账户

- **步骤 1.** 访问[此页面](https://dms.allxon.com/next/signup)注册 Allxon 账户

- **步骤 2.** 输入您的电子邮件地址并继续

- **步骤 3.** 从您收到的激活邮件中验证账户并创建密码

### 在 Jetson 设备上安装 Allxon DMS 代理

安装 Allxon DMS 代理是一个非常简单的过程。您只需要执行一个命令！

- **步骤 1.** 访问 Jetson 设备，打开终端并执行以下命令

```sh
sudo wget -qO - "https://get.allxon.net/linux/standard" | sudo bash -s
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/install-1.png" alt="pir" width="1000" height="auto"/></p>

**注意：** 上述命令将安装 Allxon DMS Agent 和相关软件包

- **步骤 2.** 在安装结束时，系统会询问您是否要安装 **Trend Micro IoT Security™** 作为附加边缘安全服务，并同意 TMIS EULA。您可以输入 **Y** 来继续此安装

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/install-2.jpg" alt="pir" width="1000" height="auto"/></p>

**注意：** Trend Micro IoT Security™ 将作为 3 个月免费试用版安装

安装完成后，Allxon DMS Agent 将自动启动。

**注意：** 如果您已将 Jetson 设备连接到显示器，您将看到 Allxon DMS Agent 窗口弹出。如果没有显示，请按 **Ctrl + Shift + B** 启动代理。

### 获取设备配对代码

首先，我们需要从 Jetson 设备获取设备配对代码。您可以通过 GUI 或命令行获取此代码

#### 使用 GUI

- **步骤 1.** 在 Jetson 设备上按 **Ctrl + Shift + B** 打开 Allxon DMS Agent

- **步骤 2.** 点击 **Get device pairing code** 获取代码

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/agent-2.png" alt="pir" width="700" height="auto"/></p>

#### 使用命令行

- **步骤 1.** 执行以下命令获取代码

```sh
dms-get-pairing-code
```

### 将 Jetson 设备添加到 Allxon DMS 门户

- **步骤 1.** 使用之前使用的凭据登录到 [Allxon DMS 门户](https://dms.allxon.com/next/signin)

- **步骤 2.** 从左侧导航面板点击 **Devices**，然后点击 **+ Add Device**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/portal-1.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 3.** 点击 **Next**，输入之前获得的设备配对代码，然后点击 **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/portal-2.png" alt="pir" width="450" height="auto"/></p>

- **步骤 4.** 如果配对成功，您将看到以下窗口

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/portal-3.png" alt="pir" width="450" height="auto"/></p>

**注意：** 如果您有促销代码，可以点击 **Next** 并兑换。否则，您可以按 **Skip** 完成设置。

### Allxon DMS 门户

在 Jetson 设备与 Allxon DMS 门户配对后，您将在 **Devices** 页面下看到已连接的设备

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/portal-4.png" alt="pir" width="1000" height="auto"/></p>

如果您点击设备，您将看到设备的更多信息。现在您可以通过 Allxon DMS 门户远程监控和管理您的设备！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/portal-5.png" alt="pir" width="1000" height="auto"/></p>

## 资源

- **[网页]** [Allxon 资源中心](https://www.allxon.com/knowledge)

- **[网页]** [NVIDIA Learn](https://developer.nvidia.com/embedded/learn)

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
