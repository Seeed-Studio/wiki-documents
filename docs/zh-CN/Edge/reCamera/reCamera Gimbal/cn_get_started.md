---
description: reCamera Gimbal 入门指南
title: 快速入门指南
keywords:
  - AI
  - reCamera
  - Gimbal
image: https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.webp
slug: /cn/recamera_gimbal_getting_started
sidebar_position: 1
last_update:
  date: 04/09/2025
  author: Dawn Yao
---

# reCamera Gimbal 入门指南

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" /></div>

## 简介

欢迎使用 reCamera Gimbal！reCamera Gimbal 2002 系列是首个开源的摄像头控制系统，由一个小型 AI 摄像头（reCamera 2002w 8GB/64GB）和一个兼容的 2 轴云台底座（配备 2 个无刷电机）组成。它由 RISC-V SoC 提供支持，具备 1 TOPS 的 AI 性能，并支持 5MP @ 30 FPS 的视频编码。它提供类似乐高的自组装套件，并集成了 Sensecraft AI 平台和 Node-RED 平台，支持流畅的图形化编程和管道构建，能够快速进行自训练、模型转换以及 Yolo v5/v8/v11 等 AI 模型的部署。

本指南将帮助您快速设置设备并开始使用，解锁强大的 AI 视觉功能。无论您是初学者还是经验丰富的用户，这份分步指南都将引导您完成安装、配置和首次使用。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱</font></span></strong>
    </a>
</div>

## 准备工作

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_prerequisites.png" /></div>

- reCamera Gimbal
- 用户手册（包装盒内）
- 12V DC 电源适配器至 5521 DC 插头（[购买链接](https://www.seeedstudio.com/Power-Adapter-12V-2A-US-p-5731.html)）
- USB Type C 数据线（[购买链接](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)）
- Wi-Fi 连接
- 电动螺丝刀（可选，用于更好的组装体验）

## 开箱

首先，打开 reCamera Gimbal 的包装盒。盒内应包含以下物品：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_Partlist.png" /></div>

请确保所有部件齐全。

### 硬件组装

根据包装盒或[用户手册](#jump1)中的组装说明组装 reCamera Gimbal。

<div style={{textAlign:'center'}}><iframe width={560} height={315} src="https://www.youtube.com/embed/VAkhDHct0p4" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>

:::note
请确保所有螺丝都已拧紧，否则会影响电机的运行。
:::

### 设置设备并登录

**步骤 1：** 组装完成后，将 USB 数据线从 reCamera Gimbal 连接到您的电脑。在浏览器中访问 `192.168.42.1` 并更改默认密码。如果您使用的是 WiFi AP 设置模式，请改为访问 `192.168.16.1`。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_1.png" /></div>

:::note
请记住您的密码，否则需要清除所有日志以重置设备。如果忘记密码，请[恢复出厂设置](https://wiki.seeedstudio.com/cn/recamera_getting_started/#factory-reset)设备。
:::

:::note
默认用户名和密码均为 `recamera`。如果您执行了出厂重置或使用的是新设备（未配置），请使用此用户名和密码。
:::

**步骤 2：** 您将进入 Gimbal 预览仪表板。在使用仪表板上的控制体验电机运动之前，请先进入 `Network` 设置 Wi-Fi。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/dashboard_network.png" /></div>

**步骤 3：** 连接到您的 Wi-Fi。成功连接后，点击 `锁图标` 查看设备的 IP 地址。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/view_wifi_IP.png" /></div>

**步骤 4：** 打开一个新的浏览器标签页，使用此 IP 地址访问设备。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_5.png" /></div>

**步骤 5：** 首先将电源连接到底座，然后移除 USB Type C 数据线以获得最佳的电机运动效果。

:::note
请确保使用电压为 12V 的电源适配器。
:::

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/switch_power.png" /></div>

**步骤 6：** 返回到您的 `IP 地址` 浏览器页面访问仪表板，然后点击右侧的 `Calibrate 按钮` 让 Gimbal 自行校准。

:::note
校准期间，请避免干扰设备的操作，否则可能导致校准失败。每次开机时，云台都会自动执行校准。
:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_calibrate.png" /></div>

### 校准行为

云台的偏航轴运动范围为 0–360°，但由于结构限制，实际机械范围约为 345°。然而，视觉覆盖范围仍为 360°。俯仰轴支持 0–180° 的运动范围。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/movement_range.png" /></div>

开机后，云台将开始自动校准序列：

- **偏航轴**：云台将首先顺时针旋转至机械极限（位于电源线正上方），然后逆时针旋转至另一极限。到达两端后，它将返回中心位置。

- **俯仰轴**：云台将向上倾斜至 0° 位置，然后向下倾斜至 180° 限制位置，最后返回到中心位置。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/calibrate.gif" /></div>

此序列完成了云台的自校准过程。

您还可以通过在终端中输入以下命令进行校准：
```bash
gimbal cali
```

### 校准问题排查

如果云台未正确执行校准序列，可能有以下几个潜在原因：

- **检查机械限制**：手动检查云台，确保运动范围未被阻挡或错误限制。

- **检查3D打印部件的阻力**：感受电机移动时是否有阻力。如果阻力过大，您可能需要调整电机的PID设置以增加电机的力矩。您可以查看[如何调整PID](https://wiki.seeedstudio.com/cn/recamera_pid_adjustment)。或者，通过打磨部件或稍微松开螺丝来减少摩擦以改善运动。

## 基本网页访问

网页地址：

- **预览页面**：`ip_address/#/dashboard`

- **主页**：`ip_address/#/init`
- **工作区**：`ip_address/#/workspace`
- **网络配置**：`ip_address/#/network`
- **安全性**：`ip_address/#/security`
- **终端**：`ip_address/#/terminal`
- **系统**：`ip_address/#/system`
- **电源**：`ip_address/#/power`
- **原始 Node-RED**：`ip_address:1880`

### 快速开始使用云台仪表板：
#### 电机控制
完成设置和校准后，您可以使用仪表板中的选项控制云台。访问 `ip_address/#/dashboard` 或 `ip_address` 进入基于 Node-RED 节点构建的云台预览仪表板：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_preview.png" /></div>

- **摇杆**：控制摄像头视角的方向。例如，将摇杆向右拖动会使图像相应地向右移动。
- **滑块**：
  - 偏航和俯仰滑块：将云台移动到指定的绝对角度。

    偏航范围：0–360°

    俯仰范围：0–180°

:::note
由于结构限制，偏航范围限制为 0–345°，俯仰范围限制为 0–180°。输入超出这些范围的值将被调整到最近的边界。例如，如果输入偏航 360°，系统将自动执行为 345°。
:::

  - 速度滑块：同时调整两个电机的速度。

    速度范围：0–720°/秒（每秒度数）
- **自动跟踪**：从下拉菜单中选择一个目标对象（例如，人、车、猫、狗、瓶子），然后点击 `Start Tracking` 开始自动目标跟踪。点击 `Stop Tracking` 停止跟踪。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_tarck.png" /></div>

- **休眠按钮**：将云台移动到绝对位置 (偏航：180°，俯仰：180°)。

:::note

休眠按钮不会激活低功耗休眠模式。它只是将摄像头重新定位为向下。

:::

- **待机按钮**：将云台移动到绝对位置 (偏航：180°，俯仰：90°)。
- **校准按钮**：启动云台校准过程。
- **紧急停止按钮**：在运动过程中立即禁用两个电机。

    ⚠️ 注意：这不会中断校准过程。

#### AI 模型参数
**置信度**：YOLO 模型中的置信度表示预测的边界框包含目标对象的概率以及预测的准确性。其值在 0 到 100 之间。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_confidence.png" /></div>


**交并比 (IoU)**：IoU 是一种用于评估预测边界框与真实边界框重叠程度的指标。它通过两个框的交集面积与并集面积的比值计算得出。IoU 的值通常在 0 到 1 的范围内。我们将其标准化为 0 - 100 的范围，IoU 值为 0 表示预测框与真实框没有重叠。值为 100 表示完全匹配，即两个框完全重叠。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_iou.png" /></div>


### 使用云台仪表板流程快速开始：

如果您想了解如何使用 Node-RED 节点构建仪表板，请点击右下角或访问 `ip_address/#/workspace` 进入云台的 Node-RED 工作区。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/dashboard_to_workspace.png" /></div>

然后您将看到默认的云台仪表板流程，您可以双击每个节点查看节点的详细信息。仪表板流程如下所示：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/workspace_flow.png" /></div>

**模型设置**：
  - 滑块节点允许您调整 YOLO AI 模型的 IoU（交并比）和置信度阈值。

**仪表板 UI 显示**：
  - UI 模板节点显示当前模型设置的文本。
  - 它还渲染来自摄像头的 base64 图像，包括 YOLO 识别的目标检测框。

**目标自动跟踪**：

  - 功能节点检索目标对象的信息（例如，宽度、高度、坐标），并使用跟踪算法处理这些数据。

  - 算法功能节点计算目标框中心相对于视觉中心的偏移量，并将此偏移量发送到设置电机角度节点，以将云台移动到所需位置。

**手动电机控制**：

  - 使用滑块节点手动设置电机角度，以特定角度移动云台。

  - 或者，使用摇杆 UI 节点可以通过小幅调整云台的位置（逐步偏移）进行手动控制。

**快捷按钮**：

  - 按钮 UI 节点将特定位置发送到设置电机角度节点，触发诸如休眠或待机等行为。

  - 这些按钮还可以触发执行节点运行 bash 脚本，例如用于校准的 `gimbal cali` 或紧急停止的 `gimbal stop 1; gimbal stop 2`。

**基本网页 iframe 子流程**：

  - iframe 子流程显示基本网页，例如网络设置、系统信息和设备信息。

  - 请注意，由于页面渲染涉及多个节点，这可能会消耗 CPU 资源。如果不需要，可以删除。

## 应用云管理和备份

如果您希望创建新的应用程序或将应用程序保存到 SenseCraft 云服务，可以在左下角登录 SenseCraft 账户，然后点击 `+` 图标添加新应用程序。之后即可开始设计您的流程。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_7.png" /></div>

您可以在 [reCamera - SenseCraft AI](https://sensecraft.seeed.cc/ai/#/recamera) 查看和管理您的应用程序。

:::note

您需要先注册账户，才能通过平台登录并同步您的应用程序。

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_14.png" /></div> 


## 端口列表

以下是 reCamera 云台使用的端口列表：

- **端口 22**：用于远程 SSH 登录，默认开启。
- **端口 53**：与 DNS 域名解析相关，必需用于网页重定向，默认开启。
- **端口 80**：作为网页仪表板接口，用于显示 Node-RED 应用的 HTTP 页面。
- **端口 554**：用于 RTSP 视频流。
- **端口 9090**：用于网页终端访问，登录需要密码。
- **端口 1880**：专用于 Node-RED 操作。

## OTA 系统升级
请参考 [OTA 升级说明](https://wiki.seeedstudio.com/cn/recamera_getting_started/#ota-upgrade-from-013-to-latest-version)。

## 恢复出厂设置

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_usr_button.png" /></div> 

如果您需要重置设备，例如忘记设备的密码，可以长按 **User** 按钮，然后连接设备电源。当设备的 `红灯` **常亮**而不是闪烁时，松开 User 按钮。

## 资源

- <span id="jump1"><a href="https://files.seeedstudio.com/gimbal/GIMBAL_Manual0311.pdf">reCamera 云台用户手册</a></span>

- [Github](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多种沟通方式以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>