---
description: reCamera Gimbal 入门指南
title: reCamera Gimbal
keywords:
  - AI
  - reCamera
  - Gimbal
image: https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.webp
slug: /recamera_gimbal_getting_started
sku: 108990119,108990120,E20245041001
sidebar_position: 1
last_update:
  date: 04/09/2025
  author: Dawn Yao
createdAt: '2025-02-27'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/cn/reCamera/reCamera_Basic/getting_start/recamera_gimbal_getting_started
---

# reCamera Gimbal 入门指南

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" /></div>

## 介绍

欢迎使用 reCamera Gimbal！reCamera gimbal 2002 系列是首款开源相机控制系统，由一台微型 AI 相机 reCamera 2002w 8GB/64GB 和一套兼容的 2 轴云台底座（内置 2 个无刷电机）组成。其由 RISC-V SoC 提供算力，具备 1 TOPS AI 性能，并支持 5MP @ 30 FPS 的视频编码。它采用类似乐高的自组装套件形式，并集成 Sensecraft AI 平台和 Node-RED 平台，实现流畅的图形化编程与流程构建，从而快速完成自训练、模型转换以及 Yolo v5/v8/11 等 AI 模型的部署。

本指南将帮助你快速完成设备的设置并开始使用，解锁强大的 AI 视觉功能。无论你是初学者还是有经验的用户，本分步教程都会引导你完成安装、配置和首次使用。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱</font></span></strong>
    </a>
</div>

## 前置准备

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_prerequisites.png" /></div>

- reCamera Gimbal
- 用户手册（在包装盒内）
- 12V 直流电源适配器转 5521 直流插头（[购买链接](https://www.seeedstudio.com/Power-Adapter-12V-2A-US-p-5731.html))
- USB Type C（[购买链接](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html))
- Wi-Fi 连接
- 电动螺丝刀（可选，用于获得更好的组装体验）

## 开箱

首先打开你的 reCamera Gimbal 包装盒。盒子内应包含：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_Partlist.png" /></div>

请确认所有部件都已齐全。

### 硬件组装

请根据包装盒上的组装说明或[用户手册](#jump1)来组装 reCamea Gimbal。

<div style={{textAlign:'center'}}><iframe width={560} height={315} src="https://www.youtube.com/embed/VAkhDHct0p4" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>

:::note
请确保所有螺丝都已拧紧，否则会影响电机的运行。
:::

### 设备设置与登录

**步骤 1：** 组装完成后，将 USB 线从 reCamera Gimbal 连接到你的电脑。在浏览器中访问 `192.168.42.1` 并修改默认密码。如果你使用的是 WiFi AP 设置模式，请改为访问 `192.168.16.1`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_1.png" /></div>

:::note
请务必记住你的密码，否则在重置设备时所有日志都会被清除。如果你忘记了密码，请对设备进行[出厂重置](https://wiki.seeedstudio.com/cn/recamera_getting_started/#factory-reset)。
:::

:::note
默认用户名和密码均为 `recamera`。如果你执行了出厂重置，或正在使用一台新的（未配置的）设备，请使用该用户名和密码登录。
:::

**步骤 2：** 此时你会进入 Gimbal 预览仪表盘。在通过仪表盘上的控制体验电机运动之前，请先进入 `Network` 设置 Wi-Fi。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/dashboard_network.png" /></div>

**步骤 3：** 连接到你的 Wi-Fi。成功连接 Wi-Fi 后，点击 `lock icon` 查看设备 IP 地址。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/view_wifi_IP.png" /></div>

**步骤 4：** 打开一个新的浏览器标签页，并使用该 IP 地址访问设备。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_5.png" /></div>

**步骤 6：** 先将电源连接到底座，然后拔掉 USB Type C 线缆，以获得最佳电机运动效果。

:::note

应连接电压为 12V 的电源适配器。

:::

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/switch_power.png" /></div>

**步骤 7：** 返回你的 `ip address` 浏览器页面访问仪表盘，然后点击右侧的 `Calibrate button`，让 Gimbal 自动完成自校准。

:::note

在校准过程中，请避免干扰设备运行，否则可能导致校准失败。每次云台上电时都会自动执行校准。

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_calibrate.png" /></div>

### 校准行为

偏航轴的运动范围为 0–360°，但由于结构限制，实际机械范围约为 345°。不过，视觉覆盖范围仍为 360°。俯仰轴支持 0–180° 的运动范围。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/movement_range.png" /></div>

上电后，云台会开始自动校准流程：

- **偏航轴（Yaw Axis）**：云台会先顺时针旋转至机械极限位置（位于电源线正上方），然后逆时针旋转至另一侧极限位置。到达两端后，会回到中间位置。

- **俯仰轴（Pitch Axis）**：云台会先向上倾斜至 0° 位置，然后向下倾斜至 180° 极限位置，最后回到中间位置。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/calibrate.gif" /></div>

上述流程完成后，云台自校准即告完成。

你也可以在终端中输入以下命令进行校准

```bash
gimbal cali
```

### 校准问题排查

如果云台未能正确执行校准流程，可能存在以下几种原因：

- **检查机械限位**：手动检查云台，确保运动范围未被阻挡或错误限制。

- **检查 3D 打印部件的阻力**：在电机运动时感受是否存在阻力。如果阻力过大，你可能需要调整电机的 PID 参数以增大电机力矩。你可以查看[如何调整 PID](https://wiki.seeedstudio.com/cn/recamera_pid_adjustment)。或者，通过打磨零件或适当放松螺丝来减小摩擦、改善运动。

## 基础网页访问

网页地址：

- **预览页面**：`ip_address/#/dashboard`

- **主页**：`ip_address/#/init`
- **工作区**：`ip_address/#/workspace`
- **网络配置**：`ip_address/#/network`
- **安全**：`ip_address/#/security`
- **终端**：`ip_address/#/terminal`
- **系统**：`ip_address/#/system`
- **电源**：`ip_address/#/power`
- **原始 Node-RED**：`ip_address:1880`

### 使用 Gimbal 仪表盘快速上手

#### 电机控制

完成设置和校准后，你可以通过仪表盘中的各项功能来控制云台。访问 `ip_address/#/dashboard` 或 `ip_address` 打开基于 Node-RED 节点构建的 Gimbal 预览仪表盘：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_preview.png" /></div>

- **摇杆（Joystick）**：控制相机视角方向。例如，将摇杆向右拖动，画面就会相应向右移动。
- **滑块（Sliders）**：
  - 偏航和俯仰滑块：将云台移动到指定的绝对角度。

    偏航范围：0–360°

    俯仰范围：0–180°

:::note
由于结构限制，偏航范围被限制为 0–345°，俯仰范围被限制为 0–180°。任何超出该范围的输入值都会被调整为最近的边界值。例如，如果你输入 360° 的偏航角，系统会自动按 345° 来执行。
:::

- 速度滑块：同时调节两个电机的转动速度。

    速度范围：0–720°/s（度/秒）
- **自动跟踪（Auto-Tracking）**：从下拉菜单中选择目标物体（例如 person、car、cat、dog、bottle），然后点击 `Start Tracking` 开始自动目标跟踪。点击 `Stop Tracking` 结束跟踪。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_tarck.png" /></div>

- **Sleep 按钮**：将云台移动到绝对位置（偏航：180°，俯仰：180°）。

:::note

Sleep 按钮不会启用低功耗睡眠模式，它只是将相机重新定位为朝下。

:::

- **Standby 按钮**：将云台移动到绝对位置（偏航：180°，俯仰：90°）。
- **Calibrate 按钮**：启动云台校准流程。
- **Emergency Stop 按钮**：在运动过程中立即关闭两个电机。

    ⚠️ 注意：这不会中断校准过程。

#### AI 模型参数

**Confidence（置信度）**：YOLO 模型中的置信度表示预测框中包含目标物体的概率以及预测结果的准确程度，取值范围为 0 到 100。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_confidence.png" /></div>

**Intersection over Union（IoU，交并比）**：IoU 是用于评估预测框与真实框重叠程度的指标，其计算方式为两者相交区域面积与并集区域面积之比。IoU 的取值通常在 0 到 1 之间。我们将其标准化为 0 - 100 的刻度，IoU 值为 0 表示预测框与真实框完全不重叠，值为 100 表示完全匹配，即两个框完全重合。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_iou.png" /></div>

### 使用云台仪表盘流程快速上手

如果你想了解该仪表盘是如何通过 Node-RED 节点构建的，可点击右下角，或访问 `ip_address/#/workspace` 进入 Gimbal 的 Node-RED 工作区。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/dashboard_to_workspace.png" /></div>

然后你会看到默认的云台仪表盘流程，你可以双击每个节点来查看该节点的详细信息。仪表盘流程如下所示：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/workspace_flow.png" /></div>

**模型设置**：

- 滑块节点允许你调整 YOLO AI 模型的 IoU（Intersection over Union，交并比）和置信度阈值。

**仪表盘 UI 显示**：

- UI 模板节点会显示当前模型设置的文本。
- 它还会渲染来自相机的 base64 图像，包括 YOLO 识别到的目标检测框。

**目标自动跟踪**：

- Function 节点获取目标物体的信息（例如宽度、高度、坐标），并使用跟踪算法处理这些数据。

- 算法 function 节点计算目标框中心相对于视野中心的偏移量，并将该偏移量发送到设置电机角度节点，从而将云台移动到期望位置。

**手动电机控制**：

- 使用滑块节点手动设置电机角度，以特定角度移动云台。

- 或者，可以使用摇杆 UI 节点，通过小幅度（逐偏移量）调整云台位置进行手动控制。

**快捷按钮**：

- 按钮 UI 节点会向设置电机角度节点发送特定位置，从而触发诸如休眠或待机等行为。

- 这些按钮还可以触发 exec 节点运行 bash 脚本，例如用于校准的 `gimbal cali` 或用于紧急停止的 `gimbal stop 1; gimbal stop 2`。

**基础网页 Iframe 子流程**：

- 一个 iframe 子流程会显示诸如网络设置、系统信息和设备信息等基础网页。

- 请注意，由于需要通过多个节点渲染页面，这些内容可能会占用 CPU 资源。如果不需要，可以将其删除。

## 应用云端管理与备份

如果你想创建新的应用或将应用保存到 SenseCraft 云服务，可以在左下角登录 sensecraft 账号，然后点击 `+` 图标添加一个新应用。之后你就可以开始编写你的流程。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_7.png" /></div>

你可以在 [reCamera - SenseCraft AI](https://sensecraft.seeed.cc/ai/#/recamera) 中查看和管理你的应用。

:::note

你需要先注册账号，才能通过该平台登录并同步你的应用。

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_14.png" /></div>

## 端口列表

以下是 reCamera Gimbal 使用的端口列表：

- **端口 22**：用于远程 SSH 登录，且为开放状态。
- **端口 53**：与 DNS 域名解析相关，是网页重定向所必需的，默认开放。
- **端口 80**：作为 Web 仪表盘接口，用于 HTTP 显示 Node-RED 应用。
- **端口 554**：用于 RTSP 视频流。
- **端口 9090**：用于 Web 终端访问，登录需要密码。
- **端口 1880**：用于 Node-RED 运行。

## OTA 系统升级

请参考 [OTA 升级说明](https://wiki.seeedstudio.com/cn/recamera_getting_started/#ota-升级-from-013-to-latest-version)。

## 恢复出厂设置

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_usr_button.png" /></div>

如果你想重置设备，例如忘记了设备的密码，可以长按 **User** 按钮，然后将设备接通电源。当设备的 `red light` **常亮** 而不是闪烁时，松开 User 按钮。

## 资源

- <span id="jump1"><a href="https://files.seeedstudio.com/gimbal/GIMBAL_Manual0311.pdf">reCamera Gimbal 用户手册</a></span>

- [Github](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

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
