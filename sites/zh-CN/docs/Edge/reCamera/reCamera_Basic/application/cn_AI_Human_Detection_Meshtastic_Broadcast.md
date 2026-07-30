---
title: AI 人体检测与 Meshtastic 通知
description: 本文演示一个由 AI 驱动的人体检测系统，使用 AI 相机与 XIAO ESP32S3 & Wio SX1262 Meshtastic 网络，实现实时告警广播。
keywords:
  - AI 人体检测
  - XIAO ESP32S3
  - ESP-Mesh
  - 边缘 AI
  - GPIO 触发
slug: /ai_human_detection_meshtastic_broadcast_bak
sku: 100029708,102010611,114993649
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
sidebar_position: 1
last_update:
  date: 2026-01-28
  author: John Xiang
createdAt: '2026-01-28'
updatedAt: '2026-02-11'
url: https://wiki.seeedstudio.com/cn/reCamera/reCamera_Basic/application/ai_human_detection_meshtastic_broadcast_bak/
---

## 介绍
本演示展示了一个边缘 AI 远程监控解决方案，将 reCamera 与 Meshtastic LoRa Mesh 网络集成。通过利用 reCamera 的端侧推理能力，本地 YOLO11n 模型用于识别人，并直接触发 GPIO 信号。该物理信号会促使一个 XIAO ESP32S3 节点在 Meshtastic 网络中广播“Human detected”告警。该架构支持集成多台 reCamera 和多个 Meshtastic 节点，以实现大范围覆盖。 

## 硬件准备
<table align="center">
<tbody><tr>
<th>Seeed Studio reCamera HQ PoE 8GB/64GB</th>
<th>XIAO ESP32S3 & Wio-SX1262 Kit for Meshtastic & LoRa</th>
<th>Wio Tracker L1(Pro)</th>
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
<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-L1-Pro-p-6454.html" target="_blank" rel="noopener noreferrer">
<strong><span><font color={'FFFFFF'} size={"4"}> 查看更多🖱️</font></span></strong>
</a>
</div></td>
</tr>
</tbody></table>

## 演示搭建
要实现本演示，我们需要分别配置 reCamera 和两个 Mesh 节点。首先，在 reCamera 上运行一个 C++ 程序，当检测到有人时，该程序会触发 GPIO 信号。随后，我们需要将 Meshtastic 固件烧录到第一个 Mesh 节点上，使其能够监控该 GPIO 信号，并在信号被触发时向 Meshtastic 网络发送消息。广播的消息将被第二个 Mesh 节点接收；最后，将手机通过蓝牙连接到第二个 Mesh 节点，即可在手机上查看发送的消息。

### reCamera 配置
:::warning
请确保你所拥有的 reCamera 底板是 PoE 版本，因为只有 PoE 版本的 reCamera 才具备 GPIO 接口。关于 reCamera 标准版与 PoE 版之间的差异，请参考 [reCamera 2002(w) 8GB/64GB Hardware Specification](https://wiki.seeedstudio.com/cn/recamera_2002_series_hardware_and_specs/) 和 [reCamera HQ PoE 8GB/64GB Hardware Specification](https://wiki.seeedstudio.com/cn/reCamera_hq_poe_hardware_and_specs/)。

如果你购买的是 reCamera 的 PoE 版本 - [reCamera HQ PoE 8GB/64GB](https://www.seeedstudio.com/reCamera-2002-HQ-PoE-8GB-p-6558.html)，可以直接使用它来复现本演示。

如果你购买的是 reCamera 的标准版本 - [reCamera 2002(w) 8GB/64GB](https://www.seeedstudio.com/reCamera-2002-8GB-p-6251.html)，则需要额外购买一块 PoE 底板 - [reCamera Base Board PoE](https://www.seeedstudio.com/reCamera-2002-Base-Board-PoE-p-6559.html)，并将其安装到 reCamera 上，以替换原有的标准底板。
:::

以下配置的目的是在 **reCamera** 上部署一个**目标检测**应用。通过停止默认的 Node-RED 服务，使 reCamera 能够运行一个名为 `model_detector` 的专用 C++ 可执行程序。 

该配置使用一个基于 COCO 数据集训练的 **YOLO11n** 模型来执行实时边缘计算。 

最终目标是让 reCamera 能够自主检测特定目标（本例中为人）。一旦检测到目标，系统将通过将 **GPIO 490** 拉高到**高电平**来触发硬件信号。该硬件触发信号作为与 **XIAO ESP32S3 + Wio SX1262** Meshtastic 节点通信的桥梁。

#### 暴露 GPIO 引脚
要暴露 reCamera PoE 底板上的 GPIO 引脚，我们需要拧下底板的螺丝并取下盖板。然后，你会在底板上看到一个 6 针连接器。我们将使用该连接器上的 GPIO 490 和 GND。关于底板上此类 6 针连接器等接口的更多信息，请参考 [reCamera Base Board with PoE Hardware Specification](https://wiki.seeedstudio.com/cn/recamera_hq_poe_hardware/#b3_poe)。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_1_1.jpg" /></div>

接下来，从 reCamera 包装中取出下图所示的延长线。这根线为 **MX1.25-Dupont,6P,6Color:Red-Black-Yellow-Green-Blue-White 线材**。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_1_2.jpg" /></div>

将该线连接到底板上。最终连接效果应如图所示。GPIO 490 连接到绿色线，而 GND 连接到黑色线。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_1_3.jpg" /></div>

#### 登录 reCamera
首先，按照本教程将你的 reCamera 升级到最新的 0.2.2 版本：[reCamera OS UPgrade Tutorial](https://wiki.seeedstudio.com/cn/recamera_os_version_control/)。如果你的版本已经是 0.2.2，则可以跳过此步骤。

:::note
由于 reCamera 的摄像头资源是独占的，默认运行的 Node-RED 及相关 AI 服务会长时间占用底层图像驱动。如果在这些服务运行时直接启动 C++ 目标检测程序，会导致多个进程之间发生冲突，从而因无法正常访问摄像头而导致 C++ 程序启动失败。 

因此，我们需要通过 SSH 访问 reCamera，以确保在关闭 Web 服务后仍能远程控制设备；随后，通过 SSH 在 reCamera 终端中执行命令，停止 Node-RED 等后台进程，从而释放摄像头的占用，并为 model_detector 程序清理必要的硬件访问路径。
:::

#### 建立 SSH 连接
使用 **MobaXTerm** 等工具通过 SSH 登录 **reCamera**。默认 IP：通常为 `192.168.42.1`
* 登录后，建议切换到 `/userdata/` 目录，因为该目录通常用于存放用户数据和模型。

#### 停止 Node-RED 相关服务
由于 reCamera 上默认运行的 Node-RED 服务会占用大量系统资源，在运行 C++ 演示程序之前，必须先执行以下三条命令来停止它：

```bash
sudo /etc/init.d/S03node-red stop
sudo /etc/init.d/S91sscma-node stop
sudo /etc/init.d/S93sscma-supervisor stop
```
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_2_1n.jpg" /></div>

#### 上传模型与固件

使用 **MobaXTerm 的文件传输功能**（左侧文件面板中的上传图标），将以下文件上传到 `/home/recamera/` 目录。

**已编译固件**：例如 `model_detector`
**量化模型**：例如 `yolo11n_cv181x_int8.cvimodel`

这里的 `model_detector` 是一个可执行文件。它是通过配置 **reCamera SDK** 并对 C++ 源码进行**交叉编译**生成的。该程序的逻辑如下：使用上传的 `yolo.cvimodel` 检测画面中是否存在人。如果检测到人，reCamera PoE 底板上的 **GPIO 490** 将被设置为**高电平**；否则将保持**低电平**。

由于搭建交叉编译环境可能较为复杂，我们已为你提供预编译好的可执行文件，方便直接使用。你只需下载并上传到 reCamera 即可。[Compiled C++ Model Detector Code](https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/model_detector)

关于模型文件，它是一个基于 **COCO 数据集**训练的 YOLO11n 检测模型，包含 80 个类别，可识别诸如人、车辆等常见日常物体。同样地，我们提供了下载链接，你无需自行训练或转换模型。下载后可直接上传到 reCamera。[reCamera Yolo Models](https://wiki.seeedstudio.com/cn/recamera_on_device_models/)

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_2_2n.jpg" /></div>

:::note
建议具备嵌入式系统经验的用户尝试修改源码并进行交叉编译。如果你有兴趣进一步探索，请参考相关文档。
:::

#### 授权并运行
在终端中，首先进入你上传已编译固件和量化模型的文件夹。然后为固件添加执行权限并启动检测程序。
```bash
chmod +x model_detector
```

为了便于可视化演示，model_detector 程序集成了 UDP 视频流功能。只要 reCamera 与电脑处于同一局域网（LAN）中，你就可以在 reCamera 上运行该程序的同时，在电脑上执行 udp_receiver.py 脚本，实现实时预览。

:::note
该 UDP 流仅用于本地监控和演示（一个“额外”功能）。由于 LoRa 技术在物理带宽上的限制，Meshtastic 网络不支持、也无法进行视频流传输。实际在 Mesh 网络中传输的数据仅限于诸如“Human detected”之类的轻量级文本告警。
:::

执行以下命令，以 `0.5`（50%）作为置信度阈值示例来运行 model_detector 程序：

```bash
sudo ./model_detector [model_name] [confidence_threshold] [PC_IP_address] [udp_port]
```
其中：
* `[model_name]`: 量化模型文件的名称。本示例中为 `yolo11n_cv181x_int8.cvimodel`。
* `[confidence_threshold]`: 用于目标检测的置信度阈值，范围为 0.0 到 1.0。值越高，检测结果越少但准确率越高。本示例中为 `0.5`。
* `[PC_IP_address]`: 运行 `udp_receiver.py` 脚本的电脑的 IP 地址。本示例中为 `10.0.0.228`。**请务必记住要使用你自己电脑的 IP 地址，而不是我的。**
* `[udp_port]`: 用于视频流传输的 UDP 端口号。本示例中为 `5000`。

下面是完整的示例命令：
```bash
sudo ./model_detector yolo11n_cv181x_int8.cvimodel 0.5 10.0.0.228 5000
```
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_3_1n.jpg" /></div>

现在，我们将在你的电脑上配置 `udp_receiver.py` 脚本。请确保你的电脑已安装 Python、**OpenCV** 和 **NumPy** 库。然后，从链接 [udp_receiver.py](https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/udp_receiver.py) 下载 `udp_receiver.py` 脚本，并在你的电脑上运行它。本示例中是在 Windows Powershell 上运行：

```bash
python .\udp_receiver.py --port [udp_port] --scale [scale_factor]
```
其中：
* `[udp_port]`: 从 reCamera 传输视频流所使用的 UDP 端口号。本示例中为 `5000`。
* `[scale_factor]`: 用于调整视频帧大小的缩放系数。本示例中为 `1.5`。

下面是完整的示例命令：
```bash
python .\udp_receiver.py --port 5000 --scale 1.5
```
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_3_3n.jpg" /></div>

最后，你将在终端中看到实时检测到的类别信息（例如 `Class 0`）及其坐标。
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_3_2n.jpg" /></div>

同时，你的电脑上会显示实时视频流：
<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_3_4n.jpg" /></div>

### XIAO ESP32S3 + Wio-SX1262（Meshtastic 节点）配置
现在，我们将配置**第一个 Mesh 节点**。该节点负责接收来自 reCamera 的 IO 输出，并广播一条文本消息：**"Human detected"**。

#### 固件烧录
设备必须烧录特定的 Mesh 固件。由于 Mesh 网络独特的信道管理机制，在标准固件中，**DetectionSensor** 模块输出到 **Channel 0** 的信息通常会被丢弃。这样设计是为了防止高频检测数据堵塞 Mesh 网络信道。请按照以下步骤操作：

:::note
在烧录之前，请暂时将 **Wio SX1262 扩展板** 从 XIAO 上取下。虽然扩展板本身不会影响烧录过程，但它会在物理上挡住 XIAO ESP32S3 上的 **BOOT** 按钮。
:::

1.  首先，下载预编译的 Mesh 固件 [Custom Meshtastic Firmware](https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/firmware-seeed-xiao-s3-2.7.17.63aadba52.factory.bin)。
2.  通过 USB 线将 XIAO ESP32S3 连接到电脑，并**进入 Bootloader 模式**。你可以参考此指南 [XIAO S3 bootloader guide](https://wiki.seeedstudio.com/cn/xiao_esp32s3_getting_started/#bootloader-mode)
3.  使用基于网页的烧录工具 [Meshtastic Web Flasher](https://flasher.meshtastic.org/)，选择 **Seeed XIAO esp32s3** 设备，然后选择你刚刚下载的固件，最后点击 **Flash** 按钮将固件烧录到 XIAO ESP32S3 上。
有一个视频教程可供参考，但请记得烧录你下载的固件，而不是 Meshtastic 官方固件 [Flash Firmware Video](https://wiki.seeedstudio.com/cn/xiao_esp32s3_&_wio_SX1262_kit_for_meshtastic/#flash-firmware)。
4.  烧录完成且未报告错误后，拔下 XIAO ESP32S3 以关闭电源。重新安装 Wio SX1262 扩展板，然后重新将 USB 线连接到电脑。设备现在将使用新固件启动。

#### 配置 Mesh 节点
配置 Mesh 节点有两种方式。首先，用 USB 线将设备连接到电脑，然后你可以：1）使用另一个 Mesh 网页工具 [Meshtastic Web Client](https://client.meshtastic.org/messages/broadcast/0) 通过串口访问 Mesh 节点；2）下载 Meshtastic 手机应用，在手机上通过蓝牙访问 Mesh 节点。这里我们演示在电脑上使用 [Meshtastic Web Client](https://client.meshtastic.org/messages/broadcast/0) 来配置 esp32s3 和 Wio Tracker。

:::note
iOS 和 Android 上 Mesh 应用的界面，以及 meshtastic 网页客户端工具的界面可能有所不同，但具体配置（例如配置 LoRa 频段）都可以在各自对应的配置选项中找到。因此，如果你没有 iOS 设备，也不必担心；其他平台上的应用肯定也会有相应的配置选项。
:::

:::note
[Meshtastic Web Flasher](https://flasher.meshtastic.org/) 和 [Meshtastic Web Client](https://client.meshtastic.org/messages/broadcast/0) 是 Meshtastic 提供的两个官方网页工具，分别用于配置 Mesh 节点和烧录 Mesh 固件。请不要将它们混淆。
:::

1.确保你的 XIAO esp32s3 Mesh 节点已通过 USB 线连接到电脑。打开 [Meshtastic Web Client](https://client.meshtastic.org/messages/broadcast/0)，你会看到初始页面。现在点击 “+ New Connection”。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_1.png" /></div>

2.点击 “Serial”，然后点击 “New Device”，并选择你的 Mesh 节点所对应的端口。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_2.png" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_3.png" /></div>

3.进入设备配置页面；这里，我的设备名称是 “Meshtastic ff28”。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_4.png" /></div>

4.点击 'Config' -> 'Radio config' -> 'LoRa'

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_5.png" /></div>

5.将 'Region' 和 'Modem Preset' 分别设置为 'US' 和 'Short Turbo'：
:::note
实际上，对 Region 和 Modem Preset 的配置并没有严格限制，但你必须确保你所拥有的两个 Mesh 节点设备的 Region 和 Modem Preset 设置保持一致。在本文档中，我们以 'US' 和 'Short Turbo' 为示例。
:::

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_6.png" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_7.png" /></div>

6.现在，让我们进入 'Module Config' 并选择 'DetectionSensor'。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_11.png" /></div>

7.启用此模块，然后将发送间隔设置为 15 秒。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_12.png" /></div>

8.将 Friendly Name 设置为 'Human'，Monitor Pin 设置为 '3'，Detection Triggered Type 设置为 'LOGIC_HIGH'。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_13.png" /></div>

9.现在，让我们进入 'Channel Config' 并选择 'Ch1'。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_8.png" /></div>

10.将 'Role' 设置为 'SECONDARY'，并将 Pre-Shared Key format 选择为 '128 bit'。然后点击 'Generate' 生成一个随机的 128 位预共享密钥（Pre-Shared Key）。**记住这个密钥，并将其保存到一个文本文件中以备后用。** 同时，将 Name 设置为 'reCamera'。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_9.png" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_10.png" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_15.png" /></div>

11.最后，点击 'Save' 保存配置。等待设备保存配置并重新启动。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_14.png" /></div>

SjVzNWwzNTEwQWZUWlo0Yg==

### Wio Tracker L1（Meshtastic 节点）配置
Wio Tracker 的配置与上面类似，我们仍然使用 [Meshtastic Web Flasher](https://flasher.meshtastic.org/) 选择 “Wio Tracker L1”，并烧录**官方 Meshtastic 固件**，而不是你上面下载的自定义固件。请参考 [Wio Tracker L1 Firmware Flashing Tutorial](https://wiki.seeedstudio.com/cn/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing)

与上面相同，我们将 Wio Tracker L1 的 Region 和 Modem Preset 设置为 'US' 和 'Short Turbo'。然后，启用其 Channel1，并将 Pre-Shared Key 设置为你上面生成的 128 位密钥。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/3_1_1.png" /></div>

### 组装
与上面相同，我们将 reCamera 上的 GPIO490（绿色线）连接到 XIAO esp32s3 的 D2 引脚，并将 GND 连接到 GND 引脚。然后，系统就会开始运行。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/4_1_1.jpg" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/4_1_2.jpg" /></div>

当连接建立后，你会听到 Wio Tracker L1 发出声音，并且 Wio Tracker L1 的显示屏上会显示“Human detected”文本。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/4_1_3.jpg" /></div>

## 技术支持与产品讨论

感谢你选择我们的产品！如果你在特定定制目标方面需要指导，或希望进一步扩展工作流程，欢迎随时联系我们。我们将为你提供多种支持，以确保你在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>