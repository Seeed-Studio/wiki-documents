---
description: 基于 reComputer Classic J3010 + Sony IMX219 的架构分析和真实设备实验，解释 Jetson Camera 如何沿完整数据链 Sensor → MIPI CSI-2 → NVCSI → VI → ISP 工作，并比较 V4L2 RAW 与 Argus ISP 两种采集路径。
title: Jetson Camera
keywords:
  - jetson
  - camera
  - sensor
  - csi
  - nvcsi
  - vi
  - isp
  - imx219
  - v4l2
  - argus
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /jetson_camera_data_chain
last_update:
  date: 11/02/2026
  author: youjiang
---

**基于 reComputer Classic J3010 + Sony IMX219 的架构分析与真实设备实验**

## 引言

Camera 是 Jetson 平台上最常见的外设之一。从机器人视觉、工业检测到自动驾驶和具身智能，Camera 是系统感知真实世界的重要入口。然而，在 Jetson 开发过程中，我们经常会遇到一些看似矛盾的问题：

- Camera 已经被系统识别——为什么还是无法采集图像？
- `/dev/video0` 已经存在——为什么运行 `v4l2-ctl` 仍然会报 Timeout？
- NVCSI、VI 和 ISP 各自负责什么工作？
- Sensor 的 RAW10 数据是如何变成可视的彩色图像的？

要理解这些问题，仅仅了解 V4L2 或 GStreamer 还不够。我们需要从硬件入手，弄清楚一帧图像在 Jetson 内部要经过哪些模块，以及这些模块是如何协同工作的。本文将介绍如下数据链：

**Sensor → MIPI CSI-2 → NVCSI → VI → ISP → Application**

同时，我们将使用一台实际运行 JetPack 6.2.1 的 [reComputer Classic J3010](https://www.seeedstudio.com/reComputer-J3010-p-5589.html)，配合一颗 [Sony IMX219 CSI Camera](https://www.seeedstudio.com/IMX219-130-Camera-130-FOV-Applicable-for-Jetson-Nano-p-4606.html)，一步步验证这条数据链。读完本文，你将了解以下内容，希望能对你有所帮助：

1. Jetson Camera 的硬件架构与完整数据流。
2. Sensor、NVCSI、VI 和 ISP 各自的具体职责。
3. V4L2 RAW 与 Argus ISP 两种采集路径的差异。
4. 如何使用 Linux 工具观察真实的 Camera 拓扑结构。
5. 如何采集 RAW 图像和经过 ISP 处理的彩色图像。
6. 如何利用 VI Timeout、RTCPU Trace 等信息定位 Camera 问题。

---

## 1. 真实设备测试平台

本文使用的测试设备是 Seeed Studio reComputer Classic J3010，搭配 Sony IMX219 Camera。IMX219 是一颗常见的 8MP CMOS Image Sensor，也被用于 Raspberry Pi Camera Module v2。

| 项目 | 配置 |
|---|---|
| 设备 | reComputer Classic J3010 |
| SoC | NVIDIA Jetson Orin Nano |
| JetPack | 6.2.1 |
| Jetson Linux | R36.4.3 |
| Ubuntu | 22.04.5 LTS |
| Linux Kernel | 5.15.148-tegra |
| Camera Sensor | Sony IMX219 |
| Camera 接口 | MIPI CSI-2 |
| 最大 Sensor 分辨率 | 3280 × 2464 |
| Camera 数据格式 | RAW Bayer |
| Camera 驱动 | imx219 |

需要注意的是，IMX219 的 Sensor 规格可能与当前驱动实际暴露的模式并不完全一致。后续实验都是基于设备枚举结果展开的。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/test_platform.jpg"/></div>

本文后续实验中使用的文件，统一保存在 Jetson 上的 `~/jetson-camera-test` 目录中。

---

## 2. Jetson Camera 的整体架构

首先，我们需要建立一个基本认识：**图像数据进入 Jetson 之后，并不是直接交给 CPU 处理的。**

对于典型的 MIPI CSI Bayer Camera，数据需要经过多个硬件模块。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/camera_data_path.png"/></div>

需要注意的是，上图展示的是逻辑关系；这并不意味着 ISP 在物理上一定连接在 VI 的 DMA 输出之后。实际的数据传输和内存访问由 SoC 内部硬件以及 NVIDIA Camera Framework 共同管理。

**每个模块分别做什么工作？**

| 模块 | 全称 | 主要功能 |
|---|---|---|
| Sensor | Image Sensor | 将光信号转换为数字像素数据 |
| CSI-2 | Camera Serial Interface 2 | 通过高速串行接口传输图像数据 |
| NVCSI | NVIDIA Camera Serial Interface | 接收、解析并路由 CSI 数据 |
| VI | Video Input | 采集图像帧并写入内存 |
| ISP | Image Signal Processor | 对 RAW 图像进行颜色与画质处理 |

这条链路可以进一步划分为三个阶段。

**第一阶段：图像生成**

Sensor 负责光电转换、曝光以及模数转换。

**第二阶段：图像传输与采集**

MIPI CSI-2、NVCSI 和 VI 负责将图像数据传输到 Jetson，并完成帧采集。

**第三阶段：图像处理与应用**

ISP 可以对 RAW 数据进行处理，最终将图像交给 Argus、GStreamer、OpenCV 或其他应用程序。

需要注意的是，在 Jetson 上，RAW Bayer **图像可以绕过 ISP**：可以直接通过 V4L2 获取原始图像数据，也可以使用 NVIDIA Camera Core 和 Argus 通过 ISP 处理图像。这是两条不同的软件使用路径。

---

## 3. Sensor：图像数据从哪里来？

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/image_sensor.png"/></div>

Camera 数据链的起点是 Image Sensor，其主要作用是将镜头成像的光学图像转换为数字图像数据。以 Sony IMX219 为例，Sensor 内部主要包含感光像素阵列、模拟信号处理电路、模数转换器（ADC）以及 MIPI CSI-2 数据输出接口。

当光线通过镜头投射到 Sensor 表面时，整个图像采集过程可以分为以下几个步骤：

1. **光电转换**：感光像素阵列接收光线，每个像素根据接收到的光子数量产生相应的电荷，从而将光信号转换为电信号。
2. **模拟信号处理**：Sensor 读取每个像素累积的电荷，将其转换为电压信号，并进行必要的放大和噪声抑制。
3. **模数转换**：ADC 将模拟电压转换为数字像素值。例如，在 RAW10 模式下，每个像素使用 10 位来表示其采样结果。
4. **数据传输**：Sensor 按照 MIPI CSI-2 协议对数字像素数据进行打包，并通过 MIPI D-PHY 物理接口传输到 Jetson 的 NVCSI 模块。

### 3.1 理解 RAW Bayer

我们日常看到的彩色图像通常包含三个颜色通道：红、绿和蓝。但对于典型的 Bayer Sensor，一颗像素通常只记录一种颜色的采样值。例如，RGGB 排列如下图所示。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/bayer_rggb.png"/></div>

因此，Sensor 输出的 RAW Bayer 数据并不等同于一幅完整的 RGB 彩色图像。要得到完整的彩色图像，需要通过 Demosaicing 等算法重建颜色信息。

### 3.2 RAW10 是什么意思？

IMX219 的常见输出模式使用 10 位 Bayer RAW。RAW10 表示每个像素包含 10 位有效的原始采样信息。

例如，一幅 1920 × 1080 的图像，总像素数为：

1920 × 1080 = 2,073,600 像素

只计算有效像素数据时，RAW10 所需的数据量为：

2,073,600 × 10 / 8 = 2,592,000 Bytes

约为 2.47 MiB。

然而，这只是理论上的有效像素数据量，并不意味着保存在 Jetson 内存中的 RAW 文件一定就是这个大小。CSI-2 数据的打包方式、VI 输出的内存布局以及行对齐等因素，都可能影响最终实际的 Buffer 大小。这一点将在后续 RAW 采集实验中进一步验证。

### 3.3 Sensor 的控制接口与数据接口

IMX219 具有两个用途不同的接口：

- **控制接口：** I2C，用于配置曝光时间、模拟增益、帧率和工作模式等寄存器。
- **数据接口：** MIPI CSI-2，用于持续输出图像像素数据。

两者彼此独立。

例如，Jetson 能够通过 I2C 成功访问 IMX219，只能说明 Sensor 的控制通信可能已经建立。

这并不能证明 Sensor 已经开始正常输出图像，也不能证明 CSI 和 VI 已经成功采集到数据。

### 3.4 真实设备实验 1：识别 Sony IMX219

首先，安装 v4l2 工具：

```bash
sudo apt update
sudo apt install v4l-utils -y
v4l2-ctl --version
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/install_v4l2.png"/></div>

然后运行：

```text
ls -l /dev/video*
v4l2-ctl --list-devices
```

一个正确注册的 CSI Camera 通常会显示对应的 Video Device。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/video_devices.png"/></div>

在这里可以看到，Jetson 识别到了一颗 IMX219 Camera，并创建了两个 video 设备节点。接下来，我们查看详细的设备信息：

```text
v4l2-ctl -d /dev/video0 --all
```

<details>

<summary> v4l2-ctl 输出日志 </summary>

```yaml
seeed@ubuntu:~$ v4l2-ctl -d /dev/video0 --all
Driver Info:
        Driver name      : tegra-video
        Card type        : vi-output, imx219 9-0010
        Bus info         : platform:tegra-capture-vi:2
        Driver version   : 5.15.148
        Capabilities     : 0x84a00001
                Video Capture
                Metadata Capture
                Streaming
                Extended Pix Format
                Device Capabilities
        Device Caps      : 0x04200001
                Video Capture
                Streaming
                Extended Pix Format
Media Driver Info:
        Driver name      : tegra-camrtc-ca
        Model            : NVIDIA Tegra Video Input Device
        Serial           :
        Bus info         :
        Media version    : 5.15.148
        Hardware revision: 0x00000003 (3)
        Driver version   : 5.15.148
Interface Info:
        ID               : 0x0300000b
        Type             : V4L Video
Entity Info:
        ID               : 0x00000009 (9)
        Name             : vi-output, imx219 9-0010
        Function         : V4L2 I/O
        Pad 0x0100000a   : 0: Sink
          Link 0x0200000f: from remote pad 0x1000006 of entity '13e00000.host1x:nvcsi@15a00000-' (Unknown sub-device (0002000a)): Data, Enabled
Priority: 2
Video input : 0 (Camera 2: ok)
Format Video Capture:
        Width/Height      : 3280/2464
        Pixel Format      : 'RG10' (10-bit Bayer RGRG/GBGB)
        Field             : None
        Bytes per Line    : 6592
        Size Image        : 16242688
        Colorspace        : sRGB
        Transfer Function : Default (maps to sRGB)
        YCbCr/HSV Encoding: Default (maps to ITU-R 601)
        Quantization      : Default (maps to Full Range)
        Flags             :
Streaming Parameters Video Capture:
        Capabilities     : timeperframe
        Frames per second: 21.000 (21/1)
        Read buffers     : 0

Camera Controls

                     group_hold 0x009a2003 (bool)   : default=0 value=0 flags=execute-on-write
                    sensor_mode 0x009a2008 (int64)  : min=0 max=5 step=1 default=0 value=0 flags=slider
                           gain 0x009a2009 (int64)  : min=16 max=171 step=1 default=16 value=16 flags=slider
                       exposure 0x009a200a (int64)  : min=13 max=683710 step=1 default=2495 value=13 flags=slider
                     frame_rate 0x009a200b (int64)  : min=2000000 max=21000000 step=1 default=21000000 value=2000000 flags=slider
           sensor_configuration 0x009a2032 (u32)    : min=0 max=4294967295 step=1 default=0 dims=[22] flags=read-only, volatile, has-payload
         sensor_mode_i2c_packet 0x009a2033 (u32)    : min=0 max=4294967295 step=1 default=0 dims=[1026] flags=read-only, volatile, has-payload
      sensor_control_i2c_packet 0x009a2034 (u32)    : min=0 max=4294967295 step=1 default=0 dims=[1026] flags=read-only, volatile, has-payload
                    bypass_mode 0x009a2064 (intmenu): min=0 max=1 default=0 value=0 (0 0x0)
                                0: 0 (0x0)
                                1: 1 (0x1)
                override_enable 0x009a2065 (intmenu): min=0 max=1 default=0 value=0 (0 0x0)
                                0: 0 (0x0)
                                1: 1 (0x1)
                   height_align 0x009a2066 (int)    : min=1 max=16 step=1 default=1 value=1
                     size_align 0x009a2067 (intmenu): min=0 max=2 default=0 value=0 (1 0x1)
                                0: 1 (0x1)
                                1: 65536 (0x10000)
                                2: 131072 (0x20000)
               write_isp_format 0x009a2068 (int)    : min=1 max=1 step=1 default=1 value=1
       sensor_signal_properties 0x009a2069 (u32)    : min=0 max=4294967295 step=1 default=0 dims=[30][18] flags=read-only, has-payload
        sensor_image_properties 0x009a206a (u32)    : min=0 max=4294967295 step=1 default=0 dims=[30][16] flags=read-only, has-payload
      sensor_control_properties 0x009a206b (u32)    : min=0 max=4294967295 step=1 default=0 dims=[30][36] flags=read-only, has-payload
              sensor_dv_timings 0x009a206c (u32)    : min=0 max=4294967295 step=1 default=0 dims=[30][16] flags=read-only, has-payload
               low_latency_mode 0x009a206d (bool)   : default=0 value=0
               preferred_stride 0x009a206e (int)    : min=0 max=65535 step=1 default=0 value=0
    override_capture_timeout_ms 0x009a206f (int)    : min=-1 max=2147483647 step=1 default=2500 value=2500
                   sensor_modes 0x009a2082 (int)    : min=0 max=30 step=1 default=30 value=5 flags=read-only
seeed@ubuntu:~$ v4l2-ctl -d /dev/video1 --all
Driver Info:
        Driver name      : tegra-embedded
        Card type        : tegra-capture-vi-metadata-2
        Bus info         : platform:tegra-capture-vi:2
        Driver version   : 5.15.148
        Capabilities     : 0x84a00001
                Video Capture
                Metadata Capture
                Streaming
                Extended Pix Format
                Device Capabilities
        Device Caps      : 0x04a00000
                Metadata Capture
                Streaming
                Extended Pix Format
Media Driver Info:
        Driver name      : tegra-camrtc-ca
        Model            : NVIDIA Tegra Video Input Device
        Serial           :
        Bus info         :
        Media version    : 5.15.148
        Hardware revision: 0x00000003 (3)
        Driver version   : 5.15.148
Interface Info:
        ID               : 0x03000013
        Type             : V4L Video
Entity Info:
        ID               : 0x00000011 (17)
        Name             : tegra-capture-vi-metadata-2
        Function         : V4L2 I/O
        Pad 0x01000012   : 0: Sink
Priority: 2
Format Metadata Capture:
        Sample Format   : 'G2XX' (Orbbec G2xx UVC Metadata)
        Buffer Size     : 96
```

</details>

此命令可以提供当前设备的驱动信息、采集能力、图像格式以及一些工作参数。

如果 Sensor 驱动加载失败，你可以在系统日志中寻找线索。日志中可能包含 I2C 访问失败、电源或 Probe 相关错误。关于日志抓取命令，请参考下面的命令：

```text
sudo dmesg | grep -i imx219
```

---

## 4. MIPI CSI-2：图像如何从 Sensor 传输到 Jetson？

Sensor 生成图像后，需要通过物理接口将数据发送到 Jetson。IMX219 通过 MIPI CSI-2 接口输出图像。CSI-2 是一种用于相机数据传输的高速串行协议，广泛应用于嵌入式系统。

### 4.1 CSI-2 与 D-PHY

CSI-2 定义了相机数据的传输协议，而 D-PHY 是常见的物理层实现。对于典型的 D-PHY 连接，相机通过差分数据通道和时钟通道传输信息。CSI-2 发送的不仅仅是像素数据，还包括用于区分帧、数据类型和通道的包信息，例如：帧开始、帧结束、数据类型、虚拟通道、像素负载等。接收端需要正确识别这些信息，才能将连续的数据流还原为对应的图像帧。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/mipi_csi2_dphy.png"/></div>

*图片来源：* *https://blog.zhaw.ch/high-performance/2017/02/28/mipi-csidsi-interface-for-general-purpose-data-acquisition/*

### 4.2 CSI 通道数量如何影响带宽？

以 1920 × 1080、30 FPS、RAW10 为例。

每秒理论有效像素数据率为：

1920 × 1080 × 30 × 10 = 622.08 Mbps

reComputer Classic J3010 使用两个 Data Lane，因此在均匀分配后，每条通道上的有效像素数据率约为：

311.04 Mbps/Lane

这意味着在上述采集条件下，每条 Data Lane 平均每秒需要承载约 **311 Mbps 的有效像素数据**。但这并不是实际的通道速率需求，实际计算还需要考虑 CSI-2 包开销、Sensor 时序以及相应的带宽裕量。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/csi2_circuit.png"/></div>

*图片来源：* *https://files.seeedstudio.com/wiki/J401/reComputer_J401_SCH_V1.0.pdf*

---

## 5. NVCSI：Jetson 如何接收相机数据？

当 IMX219 通过 MIPI CSI-2 向 Jetson 发送数据时，数据会进入 NVCSI。它是 Jetson SoC 内部的相机接收模块。这里需要区分两个概念：**CSI-2 是数据传输协议，而 NVCSI 是 Jetson 内部实现相应数据接收功能的硬件模块。**NVCSI 从外部 Sensor 接收 CSI-2 数据，并根据配置进行接收、解析和路由。

### 5.1 NVCSI 与 Virtual Channel

对于单个相机，数据流通常比较简单。但在多个相机共享 CSI 数据链路的场景中，可能会使用 Virtual Channel。Virtual Channel 允许在同一条 CSI-2 链路上传输不同的逻辑数据流。例如：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/virtual_channel.png"/></div>

在 GMSL2 相机系统中，多个 Sensor 可以通过 Serializer 和 Deserializer 将数据送入 Jetson，然后通过 Virtual Channel 区分不同的视频流。因此，在多相机调试中，CSI Port、Virtual Channel 和 VI Channel 的映射关系非常重要。

### 5.2 实机实验 2：查看相机 Media Graph

Linux Media Controller Framework 可以将多媒体设备之间的连接关系表示为拓扑图。

在 J3010 上，查询系统中注册的 Media Devices：

```bash
ls /dev/media*
# If a media0 device exists, view its details
media-ctl -d /dev/media0 -p
# Where:
# -d /dev/media0: specifies the Media Device to view.
# -p: prints the Media Controller topology information.
```

*返回日志*

```bash
seeed@ubuntu:~$ ls /dev/media*
/dev/media0
seeed@ubuntu:~$ media-ctl -d /dev/media0 -p
Media controller API version 5.15.148

Media device information
------------------------
driver          tegra-camrtc-ca
model           NVIDIA Tegra Video Input Device
serial
bus info
hw revision     0x3
driver version  5.15.148

Device topology
- entity 1: 13e00000.host1x:nvcsi@15a00000- (2 pads, 0 link)
            type V4L2 subdev subtype Unknown flags 0
            device node name /dev/v4l-subdev0
        pad0: Sink
        pad1: Source

- entity 4: 13e00000.host1x:nvcsi@15a00000- (2 pads, 2 links)
            type V4L2 subdev subtype Unknown flags 0
            device node name /dev/v4l-subdev1
        pad0: Sink
                <- "imx219 9-0010":0 [ENABLED]
        pad1: Source
                -> "vi-output, imx219 9-0010":0 [ENABLED]

- entity 7: imx219 9-0010 (1 pad, 1 link)
            type V4L2 subdev subtype Sensor flags 0
            device node name /dev/v4l-subdev2
        pad0: Source
                [fmt:SRGGB10_1X10/3280x2464@1/21 field:none colorspace:srgb]
                -> "13e00000.host1x:nvcsi@15a00000-":0 [ENABLED]

- entity 9: vi-output, imx219 9-0010 (1 pad, 1 link)
            type Node subtype V4L flags 0
            device node name /dev/video0
        pad0: Sink
                <- "13e00000.host1x:nvcsi@15a00000-":1 [ENABLED]

- entity 17: tegra-capture-vi-metadata-2 (1 pad, 0 link)
             type Node subtype V4L flags 0
             device node name /dev/video1
        pad0: Sink

seeed@ubuntu:~$
```

结合实际日志，可以将当前 IMX219 的 Media Controller 拓扑简化为下图。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/media_topology.png"/></div>

**需要注意的是，Media Graph 描述的是内核中注册的拓扑本身；它本身不能证明高速 CSI 数据已经正常传输。**

除了完整的数据链路外，当前日志中还包含两个额外的 Media Entity。

**未连接的 NVCSI 子设备**

```text
entity 1: 13e00000.host1x:nvcsi@15a00000-
    (2 pads, 0 link)

    device node name /dev/v4l-subdev0
```

这个 NVCSI 子设备当前没有建立 Media Link，因此不属于上面已连接的 IMX219 采集路径。

**Metadata 采集节点**

```text
entity 17: tegra-capture-vi-metadata-2
    (1 pad, 0 link)

    device node name /dev/video1
```

结合 `v4l2-ctl -d /dev/video1 --all` 的结果，可以确认 `/dev/video1` 是一个 Metadata Capture 设备，而不是第二个相机的普通图像采集节点。

这表明，**在 Linux 中，`/dev/video*` 节点的数量并不一定等于实际连接的相机数量。**开发者应结合 V4L2 设备能力和 Media Graph 来判断设备的实际功能。

---

## 6. VI：CSI 数据如何变成图像帧？

NVCSI 负责接收 CSI 数据，而 VI（Video Input）的主要职责是根据配置完成帧采集，并将图像数据写入内存。在典型的 V4L2 RAW 采集路径中：

`IMX219` -> `MIPI CSI-2` -> `NVCSI` -> `VI` -> `Memory Buffer` -> `V4L2` -> `Application`

VI 通过 DMA 等机制传输图像数据，避免由 CPU 逐像素搬运相机数据。

### 6.1 Frame 与 Buffer

对于视频采集，应用程序通常不会直接读取 CSI 串行信号，而是通过 V4L2 申请图像 Buffer，启动 Streaming，并在采集完成后读取对应的 Buffer。

简化后的采集流程如下：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/v4l2_frame_capture.png"/></div>

这也是 V4L2 使用 MMAP 等 Buffer 机制的原因。

### 6.2 实机实验 3：采集 RAW 数据

首先，查看 IMX219 当前的图像格式：

```text
v4l2-ctl -d /dev/video0 --get-fmt-video
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/get_fmt_video.png"/></div>

运行一次 100 帧的 RAW 采集测试：

```text
v4l2-ctl -d /dev/video0 \
  --stream-mmap \
  --stream-count=100 \
  --verbose
```

如果可以连续采集到帧，说明在当前模式下，Sensor、NVCSI、VI 和 V4L2 Buffer 路径已经具备基本的数据采集能力。

然后保存一帧 RAW：

```text
v4l2-ctl -d /dev/video0 \
  --stream-mmap \
  --stream-count=1 \
  --stream-to=imx219.raw
```

查看文件大小：

```text
ls -lh imx219.raw
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/raw_file.png"/></div>

### 6.3 为什么 RAW10 不一定只占用 10 位？

在 Jetson 相机数据链路中，我们需要区分 **MIPI CSI-2 传输格式** 和 **VI 写入内存的数据格式**。IMX219 在 MIPI CSI-2 上传输 RAW10 数据，每个有效像素包含 10 位信息。但在当前 V4L2 采集格式下，VI 将每个像素存储在一个 **16 位（2 字节）的容器** 中，并进行了行对齐。

因此，实际 Buffer 大小不能简单按 10 bit/Pixel 来计算。

我们基于上面的日志截图来分析。当前分辨率为 3280 × 2464：

- **按紧凑 RAW10 打包计算：**3280 × 2464 × 10 / 8 = 10,102,400 字节，约 **9.63 MiB**。
- **按 16 位容器计算：**3280 × 2464 × 2 = 16,163,840 字节，约 **15.42 MiB**。
- **按实际 Bytes Per Line 计算：**6592 × 2464 = 16,242,688 字节，约 **15.49 MiB**。

当成功捕获 100 帧时，实际帧率约为 **21.19 FPS**，每帧 Buffer 使用 16,242,688 字节。

之后保存的单帧 RAW 图像约为 16 MB，与采集 Buffer 大小一致。

**结论：RAW10 中的 10 bit 描述的是每个像素的有效数据位深，并不意味着图像在内存中只占用 10 bit/Pixel。** 在当前 Jetson VI 采集配置下，RAW10 被存储在 16 位容器中，并受到 Bytes Per Line 对齐的影响，因此实际内存占用会高于紧凑打包的 RAW10 数据量。

### 6.4 如何显示 RAW 数据？

通过 V4L2 成功捕获 RAW 图像后，我们得到了 `imx219.raw` 文件。但 RAW Bayer 数据并不是普通的 RGB 彩色图像，无法被常规图片查看器正确显示。要将其转换为彩色图像，首先需要根据实际内存布局读取像素数据，然后通过 **Demosaicing** 算法还原 RGB 图像。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/bayer_demosaic.png"/></div>

*图片来源：* *https://jetsonhacks.com/2022/01/13/in-depth-cameras/*

基于上图截图，我们可以确定当前 RAW 图像具有以下特征：

- 图像分辨率为 3280 × 2464。
- Bayer 排列为 RGGB，每个像素 10 位有效数据。
- V4L2 将每个像素存储在 16 位容器中。
- 每行实际占用 6592 字节，而有效像素数据只占用 6560 字节。

可以确定每行多出 32 字节的 Padding。在读取 RAW 文件时，必须考虑行 Padding，不能简单地将所有数据 reshape 为 3280 × 2464 的二维数组。

下面使用 Python + OpenCV 进行转换：

```python
import cv2
import numpy as np

# IMX219 V4L2 capture configuration
WIDTH = 3280
HEIGHT = 2464
BYTES_PER_LINE = 6592

# 1. Read RAW data as 16-bit little-endian
raw = np.fromfile("imx219.raw", dtype="<u2")

expected = HEIGHT * BYTES_PER_LINE // 2
assert raw.size == expected, "RAW file size mismatch"

# 2. Restore row layout and remove padding
raw = raw.reshape(HEIGHT, BYTES_PER_LINE // 2)
raw = raw[:, :WIDTH]

# 3. Extract 10-bit values for preview
# Experimental decoding based on observed image structure
raw10 = raw >> 6

# 4. Normalize brightness for visualization
low, high = np.percentile(raw10, [1, 99.5])

if high <= low:
    raise ValueError("Invalid RAW intensity range")

normalized = np.clip(
    (raw10.astype(np.float32) - low) / (high - low),
    0, 1
)

# 5. Apply gamma correction
gamma = 0.65
raw8 = (np.power(normalized, gamma) * 255).astype(np.uint8)

# 6. Save grayscale preview
cv2.imwrite("imx219-gray.png", raw8)

# 7. Bayer demosaicing
# RGGB Bayer pattern
bgr = cv2.cvtColor(raw8, cv2.COLOR_BayerRG2BGR)

# 8. Save color image
cv2.imwrite("imx219-demosaic.png", bgr)

print("RAW conversion completed")
print("Output: imx219-gray.png")
print("Output: imx219-demosaic.png")
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/imx219_demosaic.png"/></div>

:::info
**OpenCV 转换得到的图像并不等同于经过 NVIDIA ISP 处理后的图像。** 由于缺少完整的白平衡、色彩校正、降噪等处理，最终图像在亮度上可能偏暗、色彩也可能不够准确。
:::

---

## 7. ISP：RAW 数据如何变成彩色图像？

ISP（Image Signal Processor，图像信号处理器）负责将 Sensor 的原始图像转换为适合显示、编码或后续算法使用的图像。对于 Bayer RAW，典型的图像处理功能包括：

| Function | Role |
|---|---|
| Black Level Correction | 黑电平校正 |
| Demosaicing | Bayer 颜色重建 |
| White Balance | 白平衡 |
| Color Correction | 色彩校正 |
| Noise Reduction | 图像降噪 |
| Tone Mapping | 亮度与动态范围处理 |
| Sharpening | 图像锐化 |

同时，Jetson Camera Framework 还可以协同进行 3A 控制：

- AE: Automatic Exposure（自动曝光）
- AWB: Automatic White Balance（自动白平衡）
- AF: Automatic Focus（自动对焦）

需要注意的是，3A 并不全部属于 ISP 像素处理本身。例如，AE 需要通过 Sensor Control 调整曝光和增益，而 AF 则依赖于传感器模组具备可控对焦机构。

### 7.1 为什么 ISP 需要调优？

即使两款 Camera 使用同一颗 Sensor，也并不意味着经过 ISP 处理后会输出完全相同的图像。这是因为图像质量不仅取决于 Sensor，还与镜头、IR 滤光片、Sensor 标定参数以及实际光照条件等因素有关。这些差异会导致图像在亮度、色彩、白平衡和噪声表现上存在不同。

因此，需要通过 **ISP Tuning** 针对特定 Camera 模组调整相关图像处理参数，例如白平衡、色彩校正、降噪和锐化，以获得更准确、稳定的成像效果。简而言之，**ISP 负责处理图像，而 ISP Tuning 决定如何针对不同相机优化处理效果。**

### 7.2 真机实验 4：通过 Argus 捕获 ISP 图像

在前面的实验中，我们通过 V4L2 获取了 IMX219 的 RAW10 数据，并使用 OpenCV 完成了基础 Demosaicing。接下来，我们使用 **NVIDIA Argus Camera Framework** 让图像走 Jetson 的 ISP 流程，并观察两种方式在图像质量上的差异。

本实验使用 reComputer Classic J3010 + IMX219，通过 SSH 远程连接 Jetson 完成图像采集。

**step1. 检查 GStreamer 插件：**

```text
gst-inspect-1.0 nvarguscamerasrc
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/gst_inspect.png"/></div>

如果插件信息能够正常显示，说明 GStreamer 可以找到该插件。

**step2. 通过 Argus 测试图像采集**

在 SSH 环境下，尤其是启用了 X11 Forwarding 时，`DISPLAY` 等环境变量可能会影响 NVIDIA Argus 的 EGLStream 初始化。如果你是远程访问 Jetson 设备，请使用 `env -u` 临时移除相关环境变量：

```text
env -u DISPLAY -u WAYLAND_DISPLAY -u LD_LIBRARY_PATH \
gst-launch-1.0 -e \
  nvarguscamerasrc sensor-id=0 num-buffers=100 ! \
  'video/x-raw(memory:NVMM),width=1920,height=1080,framerate=30/1,format=NV12' ! \
  fakesink
```

其中：

- `nvarguscamerasrc`：通过 NVIDIA Argus 获取 Camera 图像。
- `sensor-id=0`：选择第一个可用的 Argus Sensor。
- `num-buffers=100`：采集 100 帧。
- `memory:NVMM`：使用 NVIDIA 多媒体缓冲区。
- `format=NV12`：指定输出图像格式。
- `fakesink`：接收并丢弃图像，不进行显示或保存。

这里使用 `env -u` 只会影响当前命令，不会永久修改系统环境变量。

如果程序能够正常采集并在日志中无错误结束，说明当前 Camera 可以通过 Argus 输出基础图像。

**step3. 保存经过 ISP 处理的彩色图像**

在确认 Argus 采集正常后，运行以下命令保存一张 JPEG 图像：

```text
env -u DISPLAY -u WAYLAND_DISPLAY -u LD_LIBRARY_PATH \
gst-launch-1.0 -e \
  nvarguscamerasrc sensor-id=0 num-buffers=1 ! \
  'video/x-raw(memory:NVMM),width=1920,height=1080,framerate=30/1,format=NV12' ! \
  nvvidconv ! \
  'video/x-raw,format=I420' ! \
  jpegenc ! \
  filesink location=imx219-isp.jpg
```

在这个 Pipeline 中：

- **nvarguscamerasrc**：通过 Argus 调用 Camera 采集与 ISP 处理路径。
- **nvvidconv**：将 NVMM 图像转换为后续编码器支持的内存与像素格式。
- **jpegenc**：将图像编码为 JPEG。
- **filesink**：将 JPEG 数据保存到文件。

保存完成后，进行查看：

```text
ls -lh imx219-isp.jpg
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/isp_ls.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/imx219_isp.jpg"/></div>

与上文 OpenCV Demosaic 图像相比，经过 ISP 处理的图像在色彩、亮度和噪声优化方面更加完整。这里的结论是：**V4L2 主要用于获取 Sensor 的 RAW 图像，而 Argus 则可以调用 NVIDIA ISP 生成经过更完整图像处理的彩色图像。**

> 需要注意的是，保存的图像仍然存在虚焦和紫边问题，这是因为镜头对焦和 ISP 参数尚未进行调校。

---

## 8. V4L2 与 Argus：两种不同的 Camera 数据路径

通过前面的实验，我们使用了两种不同的方式进行图像采集。一种是 V4L2，另一种是 Argus。它们都可以使用 Jetson 底层的 Camera 硬件，但使用路径和适用场景不同。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/v4l2_vs_argus.png"/></div>

### 8.1 V4L2 RAW 采集

V4L2 可以直接获取 Bayer Sensor 输出的 RAW 数据，而不经过 Jetson ISP。

这种方式适用于 **Sensor 驱动开发、CSI Camera 调试、RAW 数据分析以及自定义图像处理算法开发**。

### 8.2 Argus ISP 采集

Argus 是 NVIDIA 提供的 Camera Framework。它可以结合 Sensor Control 和 ISP，对 RAW 图像进行 demosaicing、白平衡、色彩校正、降噪等处理，并输出 NV12 等图像格式。

这种方式更适合用于**实时相机预览、视频采集以及对图像质量有较高要求的视觉应用**。

### 8.3 对比

| 项目 | V4L2 RAW | Argus ISP |
|---|---|---|
| 典型输出 | RAW Bayer | NV12 / YUV |
| 是否使用 ISP | 不需要 | 可以使用 |
| Sensor 控制 | V4L2 控制 | Argus Camera Core |
| 适用场景 | 驱动调试、RAW 分析 | 彩色图像、视频应用 |
| 常用工具 | v4l2-ctl | nvarguscamerasrc |
| 是否需要 ISP Tuning | 采集 RAW 不需要 | 图像质量可能依赖 Tuning |

需要注意的是，**V4L2 并不限于输出 RAW 数据**。这里的 “V4L2 RAW” 特指通过 Jetson VI 直接采集 Bayer Sensor 原始数据的场景。

### 8.4 为什么 Argus 会失败而 V4L2 却能正常工作？

即使 V4L2 能够正常采集 RAW 图像，也并不意味着 Argus 一定能正常工作。

这是因为 Argus 不仅依赖底层的 Sensor、NVCSI 和 VI，还涉及 Camera Core、Sensor 控制、ISP 配置、NVIDIA Buffer 管理等多个方面。

因此，当 V4L2 正常而 Argus 失败时，你可以优先检查：

- **Camera Core 配置**：Sensor 模式及相关参数是否正确。
- **Sensor 控制**：曝光、增益等控制是否正常工作。
- **Argus 服务**：`nvargus-daemon` 是否存在异常。
- **运行环境**：SSH X11 转发、EGL 和动态库环境是否存在冲突。

---

## 9. Device Tree：Jetson 如何知道相机连接在什么位置？

从硬件角度看，Sensor 通过 CSI 接口连接到 Jetson。但仅仅接好线缆并不足以让 Camera 自动工作，Jetson 还需要知道连接关系以及 Sensor 的具体工作模式。这些信息通常由 Device Tree 和对应的 Sensor Driver 提供。

### 9.1 相机 Device Tree

以搭载 IMX219 的 reComputer Classic J401 为例，Seeed Studio 在 [Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra) 仓库中提供了对应的 Device Tree 配置，主要涉及两个文件：

**① J401 载板配置文件**
[recomputer-orin-j401.conf](https://github.com/Seeed-Studio/Linux_for_Tegra/blob/r36.4.3/recomputer-orin-j401.conf)

该文件指定了 J401 所使用的基础 Device Tree，并引用了 IMX219 Camera Overlay：

**② IMX219 Camera Overlay**
[tegra234-p3767-camera-p3768-imx219-dual-seeed.dts](https://github.com/Seeed-Studio/Linux_for_Tegra/blob/r36.4.3/source/hardware/nvidia/t23x/nv-public/overlay/tegra234-p3767-camera-p3768-imx219-dual-seeed.dts)

该文件为 J401 配置了两个 IMX219 Camera，定义了 I2C MUX、GPIO、CSI 接口等硬件连接信息，并引用了基础的 IMX219 Sensor 配置。

需要注意的是，这只是 Overlay 中配置的一部分。完整的 Sensor Mode 还包括分辨率、CSI 通道数、像素位宽、时钟等参数。

### 9.2 Sensor Mode：IMX219 是如何传输图像的？

Device Tree 中的 Sensor Mode 用于描述相机的具体工作方式。在本次 J401 实机实验中，我们从运行时 Device Tree 中读取了 IMX219 `mode0` 的如下参数：

```text
mode0 {
    num_lanes = "2";
    tegra_sinterface = "serial_a";
    phy_mode = "DPHY";

    mode_type = "bayer";
    pixel_phase = "rggb";

    active_w = "3280";
    active_h = "2464";

    csi_pixel_bit_depth = "10";
    pix_clk_hz = "182400000";
};
```

*以上为从 J401 运行时 Device Tree 中提取并整理出的关键字段，并非完整的 Sensor Mode 配置。*

### 9.3 实机实验 5：查看正在使用的 Device Tree

GitHub 中保存的是 Device Tree 源码，而 Jetson 实际使用的是在启动过程中加载并应用 Overlay 之后的 Device Tree。我们可以通过 SSH 直接查看当前生效的配置。

这里我们直接在运行时 Device Tree 中搜索包含 `imx219` 的属性：

```text
sudo grep -rla 'imx219' /proc/device-tree 2>/dev/null
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/grep_imx219.png"/></div>

读取实际的 Sensor Mode 参数：

```text
CAM=/proc/device-tree/bus@0/cam_i2cmux/i2c@0/rbpcv2_imx219_a@10
ls "$CAM"

for key in \
  num_lanes \
  tegra_sinterface \
  phy_mode \
  mode_type \
  pixel_phase \
  active_w \
  active_h \
  csi_pixel_bit_depth \
  pix_clk_hz
do
  printf "%-25s : " "$key"
  tr -d '\0' < "$CAM/mode0/$key" 2>/dev/null || echo "Not found"
  echo
done
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/sensor_mode.png"/></div>

---

## 总结

通过对 Jetson Camera 数据链路的分析，我们可以将整个图像采集过程理解为如下环节：**Sensor 负责生成图像数据，MIPI CSI-2 负责传输，NVCSI 负责接收，VI 负责采集，ISP 负责图像处理。**

在软件层面，Jetson 也提供了不同的相机访问方式。对于驱动调试和原始数据分析，可以通过 V4L2 采集 RAW 数据；对于需要色彩处理、自动曝光和实时预览的应用，则可以通过 Argus 和 ISP 获取处理后的图像。

**理解这条数据链真正的价值在于能够更精准地定位问题。**

当然，Jetson Camera 所涉及的知识远不止于此。本文重点讨论的是图像数据如何进入 Jetson，而关于 RAW 数据本身的格式以及图像处理原理，还有很多内容值得深入探讨。

---

## 参考资料

- https://docs.nvidia.com/jetson/archives/r36.4/DeveloperGuide/SD/CameraDevelopment.html
- https://docs.nvidia.com/jetson/archives/r36.4.4/DeveloperGuide/SD/Multimedia/AcceleratedGstreamer.html
- https://docs.nvidia.com/jetson/archives/r36.4/ApiReference/l4t_mm_10_argus_camera_recording.html
- https://github.com/Seeed-Studio/Linux_for_Tegra
- https://wiki.seeedstudio.com/cn/J401_carrierboard_Hardware_Interfaces_Usage/
- https://wiki.seeedstudio.com/cn/how_to_use_camera_imx219/

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
