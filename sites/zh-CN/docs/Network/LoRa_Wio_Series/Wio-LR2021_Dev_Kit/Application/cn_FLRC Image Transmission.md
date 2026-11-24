---
description: 通过 913.76 MHz 的 FLRC 在两块 Wio-LR2021 开发套件之间发送相机图像，在发射端运行人脸、手势和水表模型，并在浏览器中查看结果。
title: Wio-LR2021 Dev Kit FLRC 图像传输演示
keywords:
  - Wio-LR2021
  - LR2021
  - FLRC
  - 图像传输
  - 相机
  - 人脸检测
  - 手势识别
  - 水表
  - ESP32-S3
image: https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/1-100038329-Wio-LR2021-Dev-Kit.webp
slug: /wio_lr2021_dev_kit_flrc_image_transmission_demo
sku: 100038329
type: project
sidebar_position: 1
last_update:
  date: 11/19/2026
  author: David Du
createdAt: '2026-11-19'
updatedAt: '2026-11-19'
url: https://wiki.seeedstudio.com/cn/wio_lr2021_dev_kit_flrc_image_transmission_demo/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Wio-LR2021 Dev Kit FLRC 图像传输演示

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/1-100038329-Wio-LR2021-Dev-Kit.webp" style={{width:600, height:'auto'}}/>
</div>

<div className="table-center">
  <table align="center">
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Wio-LR2021-Dev-Kit-p-7040.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  立即获取 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>

## 介绍

两块 Wio-LR2021 开发套件就足以搭建一条完整的无线相机链路。一块套件捕获一帧 `320 × 240` 图像，在 **ESP32-S3** 上运行一个小型检测器，绘制结果，并将该帧压缩为 JPEG。它通过 **FLRC** 以 2.6 Mbps 发送 JPEG。第二块套件在 PSRAM 中重组图像，并通过网页提供服务。手机或笔记本连接到接收端的接入点，在浏览器中查看链路，无需安装任何应用。结果是一系列静态图像，而不是视频流。

该演示有四个发射端固件构建。其中三个运行模型：**人脸检测**、**手势识别** 和 **水表读数**。第四个在不做推理的情况下发送相机图像，用于建立链路基线。你一次烧录一个构建，因此同一套发射端硬件可以展示四种模式中的任意一种。

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/video/flrc_demo_summary.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::note
人脸构建是一个**人脸检测器**，而不是人脸识别系统。它会找到人脸并在其周围画一个框。它不会识别这个人是谁，也不适合用于身份验证。
:::

### 你将构建什么

- 一个**发射端**：捕获图像，运行 Swift-YOLO 模型，绘制框和标签，并通过 FLRC 发送带标注的 JPEG。
- 一个**接收端**：重组图像，进行检查，并通过 Wi-Fi 发布最新的完整帧。
- 一个位于 `192.168.4.1` 的**浏览器视图**：显示图像、已完成图像计数以及当前帧率。

## 工作原理

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/flrc_demo_architecture.png" style={{width:1000, height:'auto'}} alt="Block diagram of the FLRC camera link: camera, ESP32-S3 inference and JPEG, LR2021 transmitter, FLRC burst, LR2021 receiver, PSRAM reassembly, SoftAP and browser"/>
</div>

### 发射端链路

发射端在一块板子上运行整个流水线：

1. Media HAT 上的 **GC2145** 相机捕获一帧 `320 × 240 RGB565` 图像。
2. **ESP32-S3** 将该帧缩放到模型输入大小并运行推理。
3. 固件在帧上绘制每个检测结果，包括类别标签和置信度百分比。水表构建还会绘制每位数字的得分以及一行 `READING:`。
4. 带标注的帧被压缩为 JPEG。
5. LR2021 将 JPEG 拆分为若干片段，添加图像 ID 和 CRC32，并以一次 FLRC 突发发送整幅图像。

在此固件构建中，相机和 JPEG 编码器是固定的。

### 接收端链路

接收端不运行模型。它在同一 FLRC 频率上监听，并通过 SPI DMA 将接收到的数据包搬运到 PSRAM 中。ESP32-S3 重组这些片段，检查大小和 CRC32，并发布最新的完整图像。不完整的图像会被丢弃，而不会以残缺形式显示。

ESP32-S3 还运行一个 `SoftAP` 和一个小型 HTTP 服务器。网页大约每 200 ms 请求一次最新 JPEG 和计数器，因此浏览器始终显示最新的完整帧。所有推理和绘制都在传输前完成；浏览器接收到的是一张已完成的 JPEG。

### 为什么选择 FLRC

LoRa 以速率换取距离。FLRC 则相反：它以高数据速率发送短突发，并接受较短的距离。在 2.6 Mbps 下，一张 320 × 240 JPEG 只占用极短的空中时间。这正是能在 LoRa 级别的射频上实现相机演示的关键。

2.6 Mbps 是 FLRC 的空中速率，而不是帧率。采集、推理、JPEG 编码、传输和重组都会增加时间。[Performance](#performance) 章节展示了在演示片段中测得的接收端速率。

## 硬件准备

### 所需物品

| 项目 | 数量 | 说明 |
| --- | --- | --- |
| Wio-LR2021 Dev Kit | 2 | 一个发射端，一个接收端 |
| 带 GC2145 相机的 Media HAT | 1 | 只适用于发射端 |
| Sub-GHz 天线 | 2 | 每块板上一根，标有 `SUB-1G` |
| 2.4 GHz 天线 | 1 | 仅接收端；连接到 ESP32-S3 2.4 GHz U.FL 焊盘，而不是 `LR-2.4G` SMA |
| USB-C 线缆 | 2 | 需支持数据传输，而非仅充电 |
| USB 供电源 | 2 | 5 V；电脑 USB 口即可 |
| 手机或笔记本电脑 | 1 | 支持 2.4 GHz Wi-Fi |

### 步骤 1 — 安装天线

将 sub-GHz 天线拧到每块板上的 `SUB-1G` 接头上，仅用手拧紧。在接收端，将 2.4 GHz 天线连接到标有 `2.4G` 的 ESP32-S3 U.FL 焊盘。保持 `LR-2.4G` SMA 端口空置。

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/install_antenna.jpg" style={{width:600, height:'auto'}}/>
</div>

:::caution
在天线口空载的情况下发射会给功率放大器带来压力。请在给任一块板上电之前先安装好天线。
:::

### 步骤 2 — 将相机 HAT 安装到发射端

将 Media HAT 上的两个 16 针插座与发射端上的排针对齐，1 脚对 1 脚。双手均匀按压两端。相机是 HAT 的一部分，因此不需要单独的 FPC 线缆。

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/video/connect_media_hat.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::caution
请勿在板子上电时连接或拆卸相机 HAT。先关闭电源并拔下 USB-C。
:::

保持接收端不安装相机 HAT。它只使用 sub-GHz 天线、2.4 GHz 天线和电源，不需要相机。

### 步骤 3 — 标记角色

在烧录之前给两块板贴上标签：

- **发射端：** 相机 HAT、sub-GHz 天线、用于供电和烧录的 USB-C。
- **接收端：** sub-GHz 天线、连接到 ESP32-S3 U.FL 焊盘的 2.4 GHz 天线、连接到电脑或充电器的 USB-C。

两块板外观相同，而固件不同。在背面贴一个标签可以避免之后重新烧录。

### 步骤 4 — 给两块板供电

将 USB-C 连接到两块板。接收端需要电源来运行接入点和 Web 服务器；发射端需要电源来驱动相机和射频。录制的演示中使用的是 USB 供电。

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/power_dev_kit.jpg" style={{width:600, height:'auto'}}/>
</div>

## 软件准备

下载 **接收端** 固件： 
 - [Receiver Firmware](https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/res/demo_firmware/flrc-rx-260914-1522.bin)

下载 **发射端** 固件：
  - [Face Detection Firmware](https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/res/demo_firmware/flrc-tx-face-detection-260914-1520.bin)
  - [Gesture Detection Firmware](https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/res/demo_firmware/flrc-tx-gesture-detection-260914-1525.bin)
  - [Meter Reading Firmware](https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/res/demo_firmware/flrc-tx-digital-meter-water-260914-1523.bin)

### 烧录接收端

<Tabs groupId="flash-tool">
<TabItem value="esptool" label="esptool">

关闭任何正在占用该串口的串口终端，然后运行：

```bash
python -m esptool -p <PORT> -b 115200 --before default-reset --after hard-reset write-flash 0x0 flrc-rx-260914-1522.bin
```

将 `<PORT>` 替换为该板子的端口：

| 系统 | 端口 |
| --- | --- |
| Windows | `COM5` 或设备管理器中的编号 |
| macOS | `/dev/cu.usbmodem*` |
| Linux | `/dev/ttyACM0` |

</TabItem>
<TabItem value="gui" label="ESP Flash Download Tool">

1. 打开 **ESP Flash Download Tool** 并选择 **ESP32-S3**。
2. 添加 `flrc-rx-260914-1522.bin`。
3. 将下载地址设置为 `0x0`。
4. 选择端口并开始下载。
5. 工具完成后按下板子上的 **RESET**。

</TabItem>
</Tabs>

### 烧录发射端

使用其中一个发射端构建重复相同的步骤。先从人脸构建开始：

```bash
python -m esptool -p <PORT> -b 115200 --before default-reset --after hard-reset write-flash 0x0 flrc-tx-face-detection-260914-1520.bin
```

要更改模式，只需烧录不同的发射端构建。接收端保持不变。

:::caution
在 `0x0` 地址写入合并后的镜像。不要使用拆分构建中的 bootloader 或应用偏移地址。写入过程中不要拔掉板子。烧录会替换出厂固件。
:::

### 打开串口日志

两种构建都会以 `115200` 波特率、`8 数据位`、`无校验`、`1 停止位` 打印启动和状态信息。端口为 USB CDC，因此波特率只是名义值。

- AI 发射端会打印模型名称、相机模式和 FLRC 设置。
- 接收端会打印接入点信息、图像计数器以及任何被丢弃的图像。

## 运行演示

### 步骤 1 — 启动接收端

将接收端连接到 USB-C，并按一次 **RESET**。等待接入点出现。SSID 以 `Wio-LR2021-FLRC-RX-` 开头，以从接收端 Wi-Fi MAC 地址派生的四个十六进制字符结尾。密码为 `12345678`。

如果网络没有出现，打开串口日志并查找接入点相关信息。检查是否已烧录接收端构建，以及 2.4 GHz 天线是否已连接到 ESP32-S3 U.FL 焊盘。确认板子有稳定的 5 V 供电。

### 步骤 2 — 连接你的浏览设备

使用手机或笔记本电脑连接到 `Wio-LR2021-FLRC-RX-xxxx` 网络。让设备保持在此网络上；它不需要访问互联网。

在某些手机上，当接入点没有互联网时，移动数据会接管网络连接。请在测试时关闭移动数据，或选择保持 Wi-Fi 连接的选项。

### 步骤 3 — 打开页面

打开浏览器并访问：

```
http://192.168.4.1
```

页面显示黑色背景、两行白色文字以及最新的图像。没有登录界面，也没有控制面板。

### 步骤 4 — 指向发射端

给发射端供电，并将摄像头对准拍摄对象。第一张图像可能需要几秒钟。为了获得最佳效果：

- 让拍摄对象保持在画面内，并保持合适的距离。
- 使用均匀的光照。强烈的逆光或眩光会遮挡拍摄对象。

## 你将看到什么

### 页面页眉

页面在图像上方显示两个计数器和一个速率：

```
Received frames: 174 (image 23)
FPS: 2.22
```

- **Received frames** 统计接收端已完成的 JPEG 图像数量。
- **image** 是发射端分配的图像 ID。
- **FPS** 是接收端测得的端到端速率。

帧计数和图像 ID 是独立的，不需要相同。复位后它们可能会不同。

### 人脸检测

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/video/face_detect.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

人脸构建会在检测到的人脸周围绘制一个洋红色方框，并在方框上方绘制带有 `face` 和置信度百分比的标签条。该标签条位于方框的左上角。页面不会旋转帧；请按你希望看到的方向安装摄像头。

检测器不会识别具体的人。两位不同的人都会产生相同的 `face` 标签。

### 手势识别

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/video/gesture_meter_recognition.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

手势构建会在手部周围绘制一个方框，并将其标记为 `paper`、`rock` 或 `scissors`。在这一帧中，模型针对同一个拳头返回了两个重叠的候选结果，因此发射端绘制了两个方框和两个标签。固件不会合并重复的候选结果。得分更高的是更好的候选。

一次只展示一只手，并让手指保持在画面内。避免复杂的背景。模型只针对这三种手势进行训练，而不是任意的手部姿势。

### 水表读数

水表构建会在每个数字周围绘制一个方框，并在方框上方打印一个得分。它会在图像底部添加一行黄色的 `READING:`。读数由检测到的数字组合而成。当水表倾斜或数字部分被遮挡时，读数可能会在不同帧之间变化。

这是一个读数辅助工具，而不是经过认证的水表读数设备。在将其用于任何计费或报表流程之前，请将读数与水表进行核对。

### 原始摄像头基线

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/video/raw_camera.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

原始构建会在不进行推理的情况下发送摄像头图像。它是演示中最快的模式，也是你在添加模型之前检查链路的最佳方式。视频片段显示的是倒置图像；接收端按接收到的方式显示 JPEG，不会旋转图像。请将摄像头竖直安装以获得竖直视图。

## 性能

这些速率是从演示视频中的接收端页面读取的。它们是端到端速率：包括采集、推理、绘制、JPEG 编码、FLRC 传输和重组的全部过程。

| 发射端构建 | 设备端工作内容 | 观测到的速率 |
| --- | --- | --- |
| 原始摄像头 | 采集、JPEG、FLRC | 7.6–9.9 fps，峰值 `11.27` fps |
| 人脸检测 | 96 × 96 模型、绘制、JPEG、FLRC | 约 `2.2` fps |
| 手势识别 | 192 × 192 模型、绘制、JPEG、FLRC | 约 `0.9` fps |
| 水表读数 | 192 × 192 模型、绘制、JPEG、FLRC | 约 `0.8` fps |

在本演示中，原始构建是整个流水线的上限，而不是保证的速率。AI 构建更慢，因为模型在每一帧上都要运行。192 × 192 模型也比 96 × 96 的人脸模型耗时更长。2.6 Mbps 的 FLRC 速率并不是帧率；图像大小和每帧处理开销才是主导因素。

## 资源

### 固件

- 🗃️ [**Wio-LR2021 Dev Kit FLRC Image Demo Firmware Set**](https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/res/demo_firmware/FLRC_Image_Demo_Firmware_Set.zip)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
