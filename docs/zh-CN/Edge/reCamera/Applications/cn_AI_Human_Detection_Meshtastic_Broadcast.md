---
title: AI 人体检测与 Meshtastic 通知演示
description: 本 wiki 演示了一个 AI 驱动的人体检测系统，使用 AI 摄像头和 XIAO ESP32S3 & Wio SX1262 Meshtastic 网络来广播实时警报。
keywords:
    - AI Human Detection
    - XIAO ESP32S3
    - ESP-Mesh
    - Edge AI
    - GPIO Trigger
slug: /cn/ai_human_detection_meshtastic_broadcast
sku: 100029708,102010611,114993649
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
sidebar_position: 1
last_update:
    date: 2026-01-28
    author: John Xiang
---

## 简介
本演示展示了一个强大的边缘 AI 解决方案，将 reCamera 与 Meshtastic LoRa 网状网络集成。通过运行本地 YOLO11n 模型，reCamera 实时识别人体并触发 GPIO 信号。这个物理信号促使 XIAO ESP32S3 节点在去中心化网络中广播"检测到人体"警报。此设置允许自主的离网监控和安全，无需依赖互联网基础设施。本指南涵盖了 PoE 底板的硬件组装、C++ 部署和网状节点配置，以连接 AI 视觉与长距离通信。

## 硬件准备
<table align="center">
<tbody><tr>
<th>Seeed Studio reCamera HQ PoE 8GB/64GB</th>
<th>XIAO ESP32S3 & Wio-SX1262 Kit for Meshtastic & LoRa</th>
<th>Wio Tracker L1 Pro</th>
</tr>
<tr>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:210, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t2.jpg" style={{width:300, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t3.jpg" style={{width:210, height:'auto'}}/></div></td>
</tr>
<tr>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 查看更多🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-L1-Pro-p-6454.html" target="_blank" rel="noopener noreferrer">
<strong><span><font color={'FFFFFF'} size={"4"}> 查看更多🖱️</font></span></strong>
</a>
</div></td>
</tr>
</tbody></table>

## 设置演示
为了实现这个演示，我们需要对 reCamera 和两个网状节点进行不同的配置。首先，在 reCamera 上运行一个 C++ 程序，当检测到人体时会触发 GPIO 信号。随后，我们需要将 Meshtastic 固件刷入第一个网状节点，使该网状节点能够监控 GPIO 信号，并在信号被触发时向 Meshtastic 网络发送消息。广播的消息将被第二个网状节点接收；最后，通过蓝牙将手机连接到第二个网状节点，可以在手机上查看发送的消息。

### reCamera 配置
:::warning
请确保您拥有的 reCamera 底板是 PoE 版本，因为只有 PoE 版本的 reCamera 具有 GPIO 接口。关于 reCamera 标准版本和 PoE 版本之间的差异，请参考[reCamera 2002(w) 8GB/64GB Hardware Specification](https://wiki.seeedstudio.com/cn/recamera_hardware_and_specs/)和[reCamera HQ PoE 8GB/64GB Hardware Specification](https://wiki.seeedstudio.com/cn/recamera_hq_poe_hardware/)。

如果您购买了 PoE 版本的 reCamera[reCamera HQ PoE 8GB/64GB](https://www.seeedstudio.com/reCamera-2002-HQ-PoE-8GB-p-6558.html)，您可以直接使用它来重现此演示。

如果您购买了标准版本的 reCamera[reCamera 2002(w) 8GB/64GB](https://www.seeedstudio.com/reCamera-2002-8GB-p-6251.html)，您需要额外购买一个 PoE 底板[reCamera Base Board PoE](https://www.seeedstudio.com/reCamera-2002-Base-Board-PoE-p-6559.html)并将其安装在 reCamera 上，替换标准底板。
:::

以下配置的目的是在 **reCamera** 上部署一个**目标检测**应用程序。通过停止默认的 Node-RED 服务，我们释放必要的硬件资源来运行一个名为 `model_detector` 的专用 C++ 可执行文件。

此设置利用 YOLO11n 模型（在 COCO 数据集上训练）执行实时边缘计算。最终目标是使 reCamera 能够自主检测特定对象（在本例中为人体）。一旦发生检测，系统将通过将 **GPIO 490** 拉至**高**电平来触发硬件信号。此硬件触发器作为与 **XIAO ESP32S3 + Wio SX1262** Meshtastic 节点通信的桥梁。

#### 暴露 GPIO 引脚
要暴露 reCamera PoE 底板上的 GPIO 引脚，我们需要拧下底板的螺丝并取下盖子。然后，使用六角扳手取下盖子。您会在底板上找到一个连接器，它有 6 个引脚。我们将使用此连接器的 GPIO 490。有关底板接口的更多信息，请参考[reCamera Base Board with PoE Hardware Specification](https://wiki.seeedstudio.com/cn/recamera_hq_poe_hardware/#b3_poe)。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_1_1.jpg" /></div>

接下来，从 reCamera PoE 包装或 reCamera Base Board with PoE 包装中取出 MX1.25-Dupont,6P,6Color:Red-Black-Yellow-Green-Blue-White 线缆。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_1_2.jpg" /></div>

将线缆连接到底板上的 GPIO 490 接口。最终连接应如下图所示。GPIO 490 连接到绿色线缆。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_1_3.jpg" /></div>

#### 登录 reCamera
首先，按照此教程将您的 reCamera 升级到最新版本 0.2.2。如果您的版本已经是 0.2.2，可以跳过此步骤。[reCamera OS UPgrade Tutorial](https://wiki.seeedstudio.com/cn/recamera_os_version_control/)

:::note
由于 reCamera 的摄像头资源是独占的，默认运行的 Node-RED 和相关 AI 服务会长时间占用底层图像驱动程序。如果在这些服务运行时直接启动 C++ 目标检测程序，会导致多个进程之间的冲突，使 C++ 程序因无法正常访问摄像头而启动失败。因此，我们需要通过 SSH 访问 reCamera，以确保在关闭 Web 服务后设备仍可远程控制；随后通过 SSH 在 reCamera 终端中执行命令来停止 Node-RED 等后台进程，从而释放对摄像头的锁定并为 model_detector 程序清除必要的硬件访问路径。
:::

#### 建立 SSH 连接
使用 **MobaXTerm** 等工具通过 SSH 登录 **reCamera**。默认 IP：通常为 `192.168.42.1`
* 登录后，建议切换到 `/userdata/` 目录，因为它通常用于存储用户数据和模型。

#### 停止 Node-RED 相关服务
由于 reCamera 上默认运行的 Node-RED 服务消耗大量系统资源，您必须在运行 C++ 演示之前执行以下三个命令来停止它：

```bash
sudo /etc/init.d/S03node-red stop
sudo /etc/init.d/S91sscma-node stop
sudo /etc/init.d/S93sscma-supervisor stop
```
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_2_1.jpg" /></div>

#### 上传模型和固件

使用 **MobaXTerm 的文件传输功能**（左侧文件面板中的上传图标）将以下文件上传到 `/userdata/` 目录。

**编译的固件**：例如 `model_detector`
**量化模型**：例如 `yolo11n_cv181x_int8.cvimodel`

这里的 `model_detector` 是一个可执行文件。它是通过配置 **reCamera SDK** 和**交叉编译** C++ 源代码生成的。该程序的逻辑如下：它使用上传的 `yolo.cvimodel` 来检测帧中是否存在人体。如果检测到人体，reCamera PoE 底板上的 **GPIO 490** 将被设置为**高电平**；否则，它将保持**低电平**。

由于设置交叉编译环境可能很复杂，我们为您提供了预编译的可执行文件。您可以直接下载并上传到您的 reCamera。[Compiled C++ Model Detector Code](https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/model_detector)

关于模型文件，它是基于 **COCO 数据集**训练的 YOLO11n 检测模型。它包含 80 个类别，可以识别常见的日常物体，如人体和车辆。同样，我们提供下载链接，因此您无需自己训练或转换模型。下载后，您可以直接上传到您的 reCamera。[reCamera Yolo Models](https://wiki.seeedstudio.com/cn/recamera_on_device_models/)

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_2_2.jpg" /></div>

:::note
建议有嵌入式系统经验的人员修改源代码并执行交叉编译。如果您有兴趣进一步探索，请参考文档。
:::

#### 授予权限并运行
在终端中，首先访问您上传编译固件和量化模型的文件夹。然后为固件添加执行权限并启动检测程序。
```bash
chmod +x model_detector
```
执行以下命令（使用 `0.5`(50%) 作为置信度阈值示例）：

```bash
sudo ./model_detector yolo11n_cv181x_int8.cvimodel 0.5
```

成功执行后，您将在终端中看到实时检测到的类别信息（例如 `Class 0`）及其坐标。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_3_1.jpg" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_3_2.jpg" /></div>

### XIAO ESP32S3 + Wio-SX1262（Meshtastic 节点）配置
现在，我们将配置**第一个 Mesh 节点**。该节点负责接收来自 reCamera 的 IO 输出并广播文本消息：**"Human detected"**。

#### 固件烧录
必须向设备烧录特定的 Mesh 固件。由于 Mesh 网络独特的通道管理机制，标准固件中 **DetectionSensor** 模块输出到 **Channel 0** 的信息通常会被丢弃。这种设计是有意为之，以防止高频检测数据阻塞 Mesh 网络通道。请按照以下步骤操作：

:::note
烧录前，请暂时从 XIAO 上移除 **Wio SX1262 扩展板**。虽然扩展板本身不会干扰烧录过程，但它会物理阻挡 XIAO ESP32S3 上的 **BOOT** 按钮。
:::

1.  首先，下载预编译的 Mesh 固件 [Custom Meshtastic Firmware](https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/firmware-seeed-xiao-s3-2.7.17.63aadba52.factory.bin)。
2.  通过 USB 线将 XIAO ESP32S3 连接到计算机并**进入 Bootloader 模式**。您可以参考此指南 [XIAO S3 bootloader guide](https://wiki.seeedstudio.com/cn/xiao_esp32s3_getting_started/#bootloader-mode)
3.  使用基于网页的烧录工具 [Meshtastic Web Flasher](https://flasher.meshtastic.org/) 选择 **Seeed XIAO esp32s3** 设备，然后选择您刚下载的固件，最后点击 **Flash** 按钮将固件烧录到 XIAO ESP32S3。
有视频教程可供参考，但请记住烧录下载的固件而不是 Meshtastic 官方固件 [Flash Firmware Video](https://wiki.seeedstudio.com/cn/xiao_esp32s3_&_wio_SX1262_kit_for_meshtastic/#flash-firmware)。
4.  烧录完成且无错误报告后，拔掉 XIAO ESP32S3 以关闭电源。重新安装 Wio SX1262 扩展板，然后重新连接 USB 线到计算机。设备现在将使用新固件启动。

#### 配置 Mesh 节点
有两种方式配置 Mesh 节点。首先，用 USB 线将设备连接到计算机，然后您可以：1：使用另一个 Mesh 网页工具：[Meshtastic Web Client](https://client.meshtastic.org/messages/broadcast/0) 通过串口访问 mesh 节点；2：下载 Meshtastic 移动应用程序，通过手机上的蓝牙访问 Mesh 节点。这里我们演示使用 PC 上的 [Meshtastic Web Client](https://client.meshtastic.org/messages/broadcast/0) 来配置 esp32s3 和 Wio Tracker。

:::note
iOS 和 Android 上的 Mesh 应用程序的 UI，以及 meshtastic web client 工具的 UI 可能有所不同，但特定配置（如配置 LoRa 频段）都可以在其相应的配置选项中找到。因此，如果您没有 iOS，无需担心；其他平台上的应用程序肯定会有相应的配置选项。
:::

:::note
[Meshtastic Web Flasher](https://flasher.meshtastic.org/) 和 [Meshtastic Web Client](https://client.meshtastic.org/messages/broadcast/0) 是 Meshtastic 提供的两个官方网页工具。它们分别用于配置 Mesh 节点和烧录 Mesh 固件。请不要将它们混淆。
:::

1.确保您的 XIAO esp32s3 Mesh 节点通过 USB 线连接到计算机。打开 [Meshtastic Web Client](https://client.meshtastic.org/messages/broadcast/0)，您将看到初始页面。现在点击 "+ New Connection"。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_1.png" /></div>

2.点击 "Serial"，然后点击 "New Device"，并选择您的 Mesh 节点的端口。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_2.png" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_3.png" /></div>

3.进入设备配置页面；这里，我的设备名称是 "Meshtastic ff28"。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_4.png" /></div>

4.点击 'Config' -> 'Radio config' -> 'LoRa'

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_5.png" /></div>

5.将 'Region' 和 'Modem Preset' 分别设置为 'US' 和 'Short Turbo'：
:::note
实际上，Region 和 Modem Preset 配置没有严格限制，但您必须确保您拥有的两个 Mesh 节点设备的 Region 和 Modem Preset 设置一致。在本文档中，我们以 'US' 和 'Short Turbo' 为例。
:::

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_6.png" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_7.png" /></div>

6.现在，让我们转到 'Module Config' 并选择 'DetectionSensor'。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_11.png" /></div>

7.启用此模块，然后将传输间隔设置为 15 秒。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_12.png" /></div>

8.Friendly Name 设置为 'Human'，Monitor Pin 设置为 '3'，Detection Triggered Type 设置为 'LOGIC_HIGH'。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_13.png" /></div>

9.现在，让我们转到 'Channel Config' 并选择 'Ch1'。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_8.png" /></div>

10.将 'Role' 设置为 'SECONDARY'，并为 Pre-Shared Key format 选择 '128 bit'。然后点击 'Generate' 生成随机的 128 位 Pre-Shared Key。**记住这个密钥，并将其保存到文本文件中以备后用。** 同时，将 Name 设置为 'reCamera'。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_9.png" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_10.png" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_15.png" /></div>

11.最后，点击 'Save' 保存配置。等待设备保存配置然后重启。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_14.png" /></div>

SjVzNWwzNTEwQWZUWlo0Yg==

### Wio Tracker L1（Meshtastic 节点）配置
Wio Tracker 的配置类似，我们仍然使用 [Meshtastic Web Flasher](https://flasher.meshtastic.org/) 选择 'Wio Tracker L1' 并烧录 **官方 Meshtastic 固件** 而不是您之前下载的自定义固件。请参考 [Wio Tracker L1 Firmware Flashing Tutorial](https://wiki.seeedstudio.com/cn/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing)

与上述相同，我们将 Wio Tracker L1 的 Region 和 Modem Preset 设置为 'US' 和 'Short Turbo'。然后，启用其 Channel1 并将 Pre-Shared Key 设置为您上面生成的 128 位密钥。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/3_1_1.png" /></div>

### 组装
与上述相同，我们将 reCamera 上的 GPIO490（绿线）连接到 XIAO esp32s3 上的 D2。然后，系统将运行。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/4_1_1.jpg" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/4_1_2.jpg" /></div>

当连接建立时，您将听到来自 Wio Tracker L1 的声音，Wio Tracker L1 上的显示屏将显示 'Human detected' 文本。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/4_1_3.jpg" /></div>

## 技术支持与产品讨论

感谢您选择我们的产品！如果您需要特定定制目标的指导或想要进一步扩展工作流程，请随时联系我们。我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>