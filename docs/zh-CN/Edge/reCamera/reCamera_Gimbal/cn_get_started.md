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

## 介绍

欢迎使用 reCamera Gimbal！reCamera gimbal 2002 系列是首款开源相机控制系统，由一个微型 AI 相机 - reCamera 2002w 8GB/64GB 和一个兼容的 2 轴云台底座（配备 2 个无刷电机）组成。它由 RISC-V SoC 驱动，提供 1 TOPS AI 性能，支持 5MP @ 30 FPS 视频编码。它提供乐高式自组装包装，集成了 Sensecraft AI 平台和 Node-RED 平台，用于流畅的图形化编程和管道构建，能够快速自训练、模型转换和部署 AI 模型，如 Yolo v5/v8/11。

本指南将帮助您快速设置设备并开始使用它来解锁强大的 AI 视觉功能。无论您是初学者还是经验丰富的用户，这个分步演练都将指导您完成安装、配置和首次使用。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱</font></span></strong>
    </a>
</div>

## 先决条件

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_prerequisites.png" /></div>

- reCamera Gimbal
- 用户手册（包装盒内）
- 12V DC 电源适配器转 5521 DC 插头（[购买链接](https://www.seeedstudio.com/Power-Adapter-12V-2A-US-p-5731.html)）
- USB Type C（[购买链接](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)）
- Wi-Fi 连接
- 电动螺丝刀（可选，用于更好的组装体验）

## 开箱

首先拆开您的 reCamera Gimbal 包装。包装盒内应包含：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_Partlist.png" /></div>

确保所有部件都已包含。

### 硬件组装

根据包装盒上的组装说明或[用户手册](#jump1)组装 reCamera Gimbal。

<div style={{textAlign:'center'}}><iframe width={560} height={315} src="https://www.youtube.com/embed/VAkhDHct0p4" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>

:::note
请确保所有螺丝都已拧紧，否则会影响电机的运行。
:::

### 设置设备并登录

**步骤1：** 组装云台后，将 USB 线从 reCamera Gimbal 连接到您的 PC。在网站上导航到 `192.168.42.1` 并更改默认密码。如果您使用的是 WiFi AP 设置模式，请导航到 `192.168.16.1`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_1.png" /></div>

:::note
请记住您的密码，否则所有日志将被清除以重置您的设备。如果您忘记密码，请[恢复出厂设置](https://wiki.seeedstudio.com/cn/recamera_getting_started/#factory-reset)您的设备。
:::

:::note
默认用户名和密码都是 `recamera`。如果您执行恢复出厂设置或使用新的（未配置的）设备，这些是要使用的用户名和密码。
:::

**步骤2：** 您将被带到云台预览仪表板。在使用仪表板上的控件体验一些电机运动之前，请转到 `Network` 设置 Wi-Fi。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/dashboard_network.png" /></div>

**步骤3：** 连接到您的 Wi-Fi。成功连接到 Wi-Fi 后，点击`锁图标`查看设备 IP 地址。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/view_wifi_IP.png" /></div>

**步骤4：** 打开新的浏览器标签页，使用此 IP 地址访问设备。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_5.png" /></div>

**步骤6：** 首先将电源连接到底座，然后拔掉 USB Type C 线缆以获得最佳的电机运动效果。

:::note

应连接电压为 12V 的电源适配器。

:::

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/switch_power.png" /></div>

**步骤7：** 返回您的 `ip 地址` 浏览器访问仪表板，然后点击右侧的`校准按钮`让您的云台自行校准。

:::note

在校准过程中，避免干扰设备的操作，因为这可能导致校准失败。每次云台通电时都会自动执行校准。

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_calibrate.png" /></div>

### 校准行为

偏航轴的运动范围为 0–360°，尽管由于结构限制，实际机械范围限制在大约 345°。但是，视觉覆盖范围仍为 360°。俯仰轴支持 0–180° 的运动范围。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/movement_range.png" /></div>

通电后，云台将开始其自动校准序列：

- **偏航轴**：云台将首先顺时针旋转到其机械极限（位于电源线上方），然后逆时针旋转到相对极限。到达两端后，它将返回到中心位置。

- **俯仰轴**：云台将向上倾斜到 0° 位置，然后向下到达 180° 极限，最后返回到中心。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/calibrate.gif" /></div>

此序列完成云台的自校准过程。

您也可以通过在终端中输入此命令进行校准

```bash
gimbal cali
```

### 校准问题故障排除

如果云台没有正确执行校准序列，可能有几个潜在原因：

- **验证机械限制**：手动检查云台，确保运动范围没有被阻挡或错误限制。

- **检查3D打印部件的阻力**：感受电机移动时是否有阻力。如果阻力过大，您可能需要调整电机的PID设置以增加电机力量。您可以查看[如何调整PID](https://wiki.seeedstudio.com/cn/recamera_pid_adjustment)。或者，通过打磨任何部件或稍微松开螺丝来减少摩擦以改善运动。

## 基本Web访问

Web网址：

- **预览页面**：`ip_address/#/dashboard`

- **主页**：`ip_address/#/init`
- **工作区**：`ip_address/#/workspace`
- **网络配置**：`ip_address/#/network`
- **安全**：`ip_address/#/security`
- **终端**：`ip_address/#/terminal`
- **系统**：`ip_address/#/system`
- **电源**：`ip_address/#/power`
- **原始Node-RED**：`ip_address:1880`

### 云台仪表板快速入门

#### 电机控制

设置和校准完成后，您可以使用仪表板中的可用选项控制云台。访问`ip_address/#/dashboard`或`ip_address`来访问使用Node-RED节点制作的云台预览仪表板：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_preview.png" /></div>

- **摇杆**：控制相机视角的方向。例如，将摇杆向右拖动会使图像相应地向右移动。
- **滑块**：
  - 偏航和俯仰滑块：将云台移动到指定的绝对角度。

    偏航范围：0–360°

    俯仰范围：0–180°

:::note
由于结构限制，偏航范围限制为0–345°，俯仰范围限制为0–180°。任何输入超出这些范围的值都将调整到最接近的边界。例如，如果您为偏航输入360°，系统将自动执行345°的移动。
:::

- 速度滑块：同时调整两个电机的速度。

    速度范围：0–720°/s（度每秒）
- **自动跟踪**：从下拉菜单中选择目标对象（例如，人、汽车、猫、狗、瓶子），然后点击`开始跟踪`来启动自动对象跟踪。点击`停止跟踪`来结束跟踪。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_tarck.png" /></div>

- **睡眠按钮**：将云台移动到绝对位置（偏航：180°，俯仰：180°）。

:::note

睡眠按钮不会激活低功耗睡眠模式。它只是将相机重新定位为向下朝向。

:::

- **待机按钮**：将云台移动到绝对位置（偏航：180°，俯仰：90°）。
- **校准按钮**：启动云台校准过程。
- **紧急停止按钮**：在运动期间立即禁用两个电机。

    ⚠️ 注意：这不会中断校准过程。

#### AI模型参数

**置信度**：YOLO模型中的置信度表示预测边界框包含对象的概率以及预测的准确性。它是0到100之间的值。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_confidence.png" /></div>

**交并比（IoU）**：IoU是用于评估预测边界框与真实边界框之间重叠的指标。它计算为两个框的交集面积与两个框的并集面积的比率。IoU的值通常在0到1的范围内。我们将其标准化为0-100的比例，IoU值为0表示预测框与真实框之间没有重叠。值为100表示完美匹配，意味着两个框完全重叠。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_iou.png" /></div>

### 云台仪表板流程快速入门

如果您想了解仪表板是如何使用Node-RED节点制作的，请点击右下角或访问`ip_address/#/workspace`来访问云台的Node-RED工作区

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/dashboard_to_workspace.png" /></div>

然后您将看到默认的云台仪表板流程，您可以双击每个节点来查看节点的详细信息。仪表板流程将如下所示：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/workspace_flow.png" /></div>

**模型设置**：

- 滑块节点允许您调整YOLO AI模型的IoU（交并比）和置信度阈值。

**仪表板UI显示**：

- UI模板节点显示显示当前模型设置的文本。
- 它还渲染来自相机的base64图像，包括YOLO识别的对象的检测框。

**目标自动跟踪**：

- 功能节点检索目标对象的信息（例如，宽度、高度、坐标）并使用跟踪算法处理这些数据。

- 算法功能节点计算目标框中心相对于视觉中心的偏移，并将此偏移发送到设置电机角度节点以将云台移动到所需位置。

**手动电机控制**：

- 使用滑块节点手动设置电机角度，将云台移动特定度数。

- 或者，摇杆UI节点允许通过小增量（逐偏移）调整云台位置进行手动控制。

**快捷按钮**：

- 按钮UI节点向设置电机角度节点发送特定位置，触发睡眠或待机等行为。

- 这些按钮还可以触发运行bash脚本的exec节点，如用于校准的`gimbal cali`或用于紧急停止的`gimbal stop 1; gimbal stop 2`。

**基本Web Iframe子流程**：

- iframe 子流显示基本的网页，如网络设置、系统信息和设备信息。

- 请注意，这些可能会消耗 CPU 资源，因为它会渲染包含多个节点的页面。如果不需要，可以删除。

## 应用云管理和备份

如果您想创建新应用程序或将应用程序保存到 SenseCraft 云服务，您可以在左下角登录 sensecraft 账户，然后点击 `+` 图标来添加新应用程序。然后您就可以开始处理您的流程。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_7.png" /></div>

您可以在 [reCamera - SenseCraft AI](https://sensecraft.seeed.cc/ai/#/recamera) 查看和管理您的应用程序。

:::note

您需要先注册账户，然后才能通过平台登录来同步您的应用程序。

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_14.png" /></div>

## 端口列表

以下列出了 reCamera Gimbal 使用的端口：

- **端口 22**：用于远程 SSH 登录，处于开放状态。
- **端口 53**：与 DNS 域名解析相关，对于网页重定向至关重要。默认开放。
- **端口 80**：作为 Node-RED 应用程序 HTTP 显示的网页仪表板界面。
- **端口 554**：用于 RTSP 视频流传输。
- **端口 9090**：用于网页终端访问，需要密码登录。
- **端口 1880**：专用于 Node-RED 操作。

## OTA 系统升级

请参考 [OTA 升级说明](https://wiki.seeedstudio.com/cn/recamera_getting_started/#ota-upgrade-from-013-to-latest-version)。

## 恢复出厂设置

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_usr_button.png" /></div>

如果您想重置设备（例如忘记设备密码），您可以长按 **User** 按钮，然后连接设备电源。当设备的 `红灯` **常亮** 而不是闪烁时，松开 User 按钮。

## 资源

- <span id="jump1"><a href="https://files.seeedstudio.com/gimbal/GIMBAL_Manual0311.pdf">reCamera Gimbal 用户手册</a></span>

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
