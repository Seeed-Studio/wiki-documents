---
description: 深入了解 reCamera 操作系统 (OS) 结构
title: reCamera OS 结构
keywords:
  - Edge
  - reCamera
  - opereating system
  - OS
image: https://files.seeedstudio.com/wiki/reCamera/recam_OS_structure.webp
slug: /cn/recamera_os_structure
sidebar_position: 2
last_update:
  date: 02/15/2025
  author: Dawn Yao
---

# reCamera 软件结构

该软件配备了稳定的 reCamera OS，支持固件 OTA 更新。此外，设备中还集成了 Node-RED 和 Sensecraft AI 平台，以提供更简便的部署体验。这种集成为新手开发者提供了基于 Node-RED 节点的模块化编程体验。对于高级开发者，还提供了深度的基于 Linux 的开发和 Python 支持，供其调整和使用。

我们热烈欢迎精通 JavaScript、C/C++、Python、Linux OS、buildroot 的开发者，以及极客、学生和初学者，参与进一步的开发并探索应用。

## reCamera OS

这是一个基于 Buildroot 构建的嵌入式操作系统，集成了 `supervisor`、`sscma`（Seeed SenseCraft Model Assistant）和 `Node-RED` 服务。架构图如下所示：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/recam_OS_structure.png" /></div>

该操作系统的[源代码](https://github.com/Seeed-Studio/reCamera-OS)可在 GitHub 上获取。我们的团队也在努力使操作系统更加用户友好和多功能，每次更新都会在[这里](https://github.com/Seeed-Studio/reCamera-OS/releases)发布。新版本可以通过 Web 界面进行 OTA 更新或[手动更新](https://wiki.seeedstudio.com/cn/recamera_os_version_control)。

### 🧩 Supervisor

Supervisor 是一个轻量级进程管理器，用于监控和管理其他服务。它负责启动和停止服务，以及处理系统事件，并为其他服务或 UI 提供接口。它提供以下服务：

#### 系统服务

- ***设备管理***：识别和配置连接的设备、存储设备等。
- ***用户管理***：管理用户账户、凭据和 SSH 密钥。
- ***网络配置***：配置有线和无线网络连接。
- ***文件系统操作***：管理设备文件。
- ***设备发现***：
  - 使用 mDNS 广播设备信息。设备主机名为 recamera.local。
  - 当 Web 界面发送请求时，reCamera 设备通过 mDNS 扫描本地网络中的其他 reCamera 设备，生成发现的设备列表，格式化数据，并将其返回给 Web 界面。（注意：目前只返回一个设备的信息。）

#### 更新服务

- 包/固件下载管理
- 安全验证
- 安装自动化

#### 守护进程服务

- 系统健康监控
- 应用程序自动恢复

#### 日志服务

- 运行时状态跟踪
- 错误诊断

#### 应用服务

- 应用程序部署
- 应用程序打包

### 🧩 基础 Web 界面

基础 Web 界面为用户提供了一个用户友好的界面来管理设备。它将从 Supervisor 获取数据，并在开机时形成 reCamera 的基础 Web 界面。界面如下所示：

- 启动页面：`ip_address/#/init`
- 工作区：`ip_address/#/workspace`（适用于 OS 版本 0.1.4 及以上）
- 网络配置：`ip_address/#/network`
- 安全：`ip_address/#/security`
- 终端：`ip_address/#/terminal`
- 系统：`ip_address/#/system`
- 电源：`ip_address/#/power`

这些基础 Web 界面允许用户在开机时安全地访问设备核心配置功能。如果您想修改基础 Web 界面的前端，[源代码](https://github.com/Seeed-Studio/sscma-example-sg200x/tree/main/solutions/supervisor/www)也可在 Github 上获取。

### 🧩 Node-RED 模块

#### sscma-node

这是 Node-RED 的服务器端模块，用于实现 Node-RED 客户端与 sscma 服务之间的通信。[源代码](https://github.com/Seeed-Studio/sscma-example-sg200x/tree/main/solutions/sscma-node)在 Github 上，供任何 C/C++ 开发者进行扩展开发。它提供以下功能：

- 图像处理服务
- AI 模型管理
- 媒体流服务
- 数据存储服务

#### node-red-sscma

`node-red-contrib-sscma` 是 Node-RED 节点组件，旨在通过基于流的编程促进 AI 模型的快速部署。[源代码](https://github.com/Seeed-Studio/node-red-contrib-sscma)也在 Github 上，供任何开发者按照[协议](https://wiki.seeedstudio.com/cn/node_red_protocol)进行扩展开发。这允许 AI 模型输出与其他设备无缝集成，实现智能自动化和智能工作流。

下面显示了 `camera node` 和 `model node` 如何通信的示例：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/vision_inference.png" /></div>

### 🧩 SenseCraft 集成

还有一个连接到 SenseCraft 平台的接口，用于模型和应用流程。Node-Red 流程可以存储在 SenseCraft 云服务上。您还可以训练自己的模型并发布到超级简单的一键式部署不同应用程序到设备上。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/sensecraft_applications.png" /></div>

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
