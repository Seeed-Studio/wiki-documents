---
description: reComputer AI R2000 是一款基于 Raspberry Pi 5 的强大边缘 AI 计算机。配备四核 Arm Cortex-A76 处理器、8GB RAM、M.2 SSD 支持，以及提供高达 26 TOPS 的 Hailo-8 AI 加速模块，实现实时、低延迟和高效的 AI 推理。它是广泛 AI 应用的完美选择，包括 AI 驱动的视频分析、机器视觉和智能边缘计算。
title: reComputer AI R2000 系列快速入门
keywords:
- Raspberry Pi
- 边缘 AI 计算机
- reComputer R2000
image: https://files.seeedstudio.com/wiki/recomputer-r2000-getting-start/1_24_1.webp
slug: /cn/r2000_series_getting_start
last_update:
  date: 1/09/2025
  author: Jiahao Li
---

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

reComputer AI R2000 系列是一款基于 Raspberry Pi 5 的强大边缘 AI 计算机。配备四核 Arm Cortex-A76 处理器、8GB RAM、M.2 SSD 支持，以及提供高达 26 TOPS 的 Hailo-8 AI 加速模块，实现实时、低延迟和高效的 AI 推理。它是广泛 AI 应用的完美选择，包括 AI 驱动的视频分析、机器视觉和智能边缘计算。

## 特性

- **强大的散热能力**：紧凑的设计和优化的热架构使其非常适合在资源受限的环境中部署，提供卓越的散热性能。

- **强大的性能**：由 Raspberry Pi 5 提供支持，配备四核 Cortex-A76 CPU 和高达 8GB 的 RAM。

- **26 万亿次操作每秒**：由 Hailo AI 加速器提供支持，集成计算能力高达 26 TOPS。
  丰富的接口：2 个 HDMI 4Kp60、1 个以太网端口、2 个 USB 3.0、2 个 USB 2.0。

- **无线连接**：双频 Wi-Fi 和 Bluetooth 5.0/BLE。
  灵活的存储选项：PCIe2.0 双 M.2 插槽支持 AI 加速器和 SSD 存储。

## 规格参数

| **参数**              | **描述**                                                                 |
|-----------------------|--------------------------------------------------------------------------|
| **硬件规格**           |                                                                          |
| **CPU**               | Raspberry Pi 5，2.4GHz 四核 64 位 Arm Cortex-A76                         |
| **GPU**               | Raspberry Pi 5，VideoCore VII                                            |
| **AI 处理器**          | Hailo-8 M.2 加速模块，26 万亿次操作每秒                                  |
| **RAM**               | 8GB SDRAM                                                               |
| **操作系统**           | Raspberry Pi OS，Ubuntu                                                 |
| **系统规格**           |                                                                          |
| **电源**               | 通过 USB-C 提供 5V/5A DC 电源，支持电源传输                              |
| **视频解码器**         | 4Kp60 HEVC 解码器                                                       |
| **Wi-Fi**             | 双频 802.11ac Wi-Fi®                                                    |
| **蓝牙**              | Bluetooth 5.0/BLE                                                      |
| **电源按钮**           | 包含开/关按钮                                                           |
| **接口**              |                                                                          |
| **存储**              | 1 个 microSD 卡插槽，支持高速 SDR104 模式                                |
| **M.2 插槽**           | 2 个 M.2 插槽，支持 M.2 NVMe SSD/Hailo M.2 加速模块                     |
| **USB 端口**           | 2 × USB 3.0 端口                                                        |
|                       | 2 × USB 2.0 端口                                                        |
| **以太网**             | 1 × 10/100/1000 Mbps                                                    |
| **摄像头/显示**        | 2 × 4 通道 MIPI 摄像头/显示收发器                                        |
| **显示输出**           | 2 个 micro HDMI 端口（4Kp60）                                           |
| **环境条件**           |                                                                          |
| **防护等级**           | IP40                                                                    |
| **工作温度**           | 0-45°C                                                                  |
| **其他**              |                                                                          |
| **保修**              | 1 年                                                                    |
| **产品生命周期**       | 至少到 2036 年 1 月                                                     |
| **认证**              | CE、FCC、Telec、RoHS、REACH                                             |

## Hailo 介绍

### 硬件介绍

[Hailo](https://hailo.ai/) 提供了专为边缘设备上的高性能深度学习应用量身定制的尖端 AI 处理器。该公司的解决方案专注于推动边缘生成式 AI 的新时代，同时支持感知和视频增强，这些都由先进的 AI 加速器和视觉处理器提供支持。搭载 Hailo-8 NPU 加速器的 reComputer_R2000 提供 26 TOPs 的 AI 性能，能够以 YOLOv8s 实现超过 200 FPS 的性能。

### 软件介绍

![](https://seeed-projects.github.io/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero/assets/images/architecture-2bfc6ed440e1add56388738e87558050.png)

Hailo AI 软件套件提供了强大的工具，可以高效地在硬件加速器上运行 AI 模型。它旨在与现有的深度学习框架无缝集成，为开发者提供流畅的工作流程。该过程包括在模型构建环境中从 ONNX 文件生成 HEF（Hailo 可执行二进制文件）。生成后，HEF 文件会被传输到推理机器（运行时环境），并通过 HailoRT API 执行推理。提供的脚本可以在模型构建环境中将 ONNX 文件转换为 HEF 文件。

> **注意：**
> **如果您想了解更多关于使用 Hailo NPU 的示例，请点击此 [链接](https://github.com/Seeed-Projects/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero)。**

## 硬件概览

![image1](https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image3_1.jpeg)
![image2](https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image4_1.jpeg)

## 刷写操作系统

*您需要一张 SD 卡和一个读卡器。将 SD 卡插入读卡器，然后将读卡器的 USB 接口插入主机的 USB 端口。*

### 对于 Windows 主机电脑

- **步骤 1.** 从 **[这里](https://www.raspberrypi.org/software/)** 下载 **Raspberry Pi Imager** 软件

- **步骤 2.** 打开 Raspberry Pi Imager 软件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **步骤 3.** 按下键盘上的 **CTRL + SHIFT + X** 打开 **高级选项** 窗口

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

- **步骤 4.** 点击 **CHOOSE OS** 并选择您偏好的操作系统

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意：** 您可以通过进入 **Other general purpose OS** 选择其他操作系统，例如 **64-bit Ubuntu**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

或者您可以使用以下链接下载镜像文件：

[适用于 Raspberry Pi 的 Ubuntu](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **步骤 5.** 点击 **CHOOSE STORAGE**

- **步骤 6.** 最后，点击 **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

请等待几分钟，直到刷写过程完成。

### 对于 MAC 主机电脑

:::caution
**在进行以下步骤之前，您需要安装 [homebrew](https://brew.sh/)。**
请打开终端并输入 ```brew -V``` 检查是否已正确设置 homebrew 环境，您应该能看到已安装的 homebrew 环境版本。
:::

- **步骤 1.** 通过访问 [此链接](https://www.raspberrypi.org/software/) 下载并安装 **Raspberry Pi Imager** 应用程序

- **步骤 2.** 打开 **Raspberry Pi Imager** 应用程序

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **步骤 3.** 按下键盘上的 **CTRL + SHIFT + X** 打开 **高级选项** 窗口

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

在这里，您可以 **设置主机名、启用 SSH、设置密码、配置 WiFi、设置本地设置** 等。

- **步骤 4.** 点击 **CHOOSE OS** 并选择您偏好的操作系统

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意：** 您可以通过进入 **Other general purpose OS** 选择其他操作系统，例如 **64-bit Ubuntu**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

或者您可以使用以下链接下载镜像文件：

[适用于 Raspberry Pi 的 Ubuntu](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **步骤 5.** 点击 **CHOOSE STORAGE**

- **步骤 6.** 最后，点击 **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

### 对于 Linux 主机电脑

- **步骤 1.** 下载 snap

```sh
sudo apt install snap
```

- **步骤 2.** 下载 **rpi-imager**

```sh
snap install rpi-imager
```

- **步骤 3.** 打开 Raspberry Pi Imager 软件

```sh
rpi-imager
```

结果如下所示：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 4.** 按下键盘上的 **CTRL + SHIFT + X** 打开 **高级选项** 窗口

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

在这里，您可以 **设置主机名、启用 SSH、设置密码、配置 WiFi、设置本地设置** 等。

- **步骤 5.** 点击 **CHOOSE OS** 并选择您偏好的操作系统

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png" /></div>

<!-- <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p> -->

**注意：** 您可以通过进入 **Other general purpose OS** 选择其他操作系统，例如 **64-bit Ubuntu**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

或者您可以使用以下链接下载镜像文件：

[适用于树莓派的 Ubuntu](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **步骤 6.** 点击 **CHOOSE STORAGE** 并选择连接的 eMMC 驱动器

- **步骤 7.** 最后，点击 **NEXT** 和 **YES**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="600" height="auto"/></p>

请等待几分钟，直到刷写过程完成。
结果如下所示：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="600" height="auto"/></p>

## 从 NVME 启动

### 更新 EEPROM

*此方法适用于您拥有 SD 卡并已成功启动设备的情况。请确保您的系统是最新的树莓派系统（Bookworm 或更高版本），并且您的 RPi 5 固件已更新至 2023-12-06（12 月 6 日）或更新版本，否则可能无法识别与 NVME 相关的配置。*

**步骤 1**：确保您的树莓派系统是最新的（Bookworm 或更高版本），输入以下命令以更新 RPi 5 固件：

```shell
  sudo apt update && sudo apt upgrade -y
  sudo rpi-eeprom-update  # 如果固件不是 2023 年 12 月之后的版本，请在终端中输入以下命令以启动配置工具
  sudo raspi-config
```

向下滚动到 `Advanced Options` 并按 Enter：
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_1.png" alt="pir" width="700" height="auto" /></div>

向下滚动到 `Bootloader Version` 并按 Enter：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_2.png" alt="pir" width="700" height="auto" /></div>

最后选择 `Latest`，并按 Enter：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_3.png" alt="pir" width="700" height="auto" /></div>

在这里选择 `No` - 您需要选择 `最新` 的引导加载程序。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="700" height="auto" /></div>

通过选择 `Finish` 退出工具：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="700" height="auto" /></div>

如果系统要求重启，请选择 `Yes`。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="700" height="auto" /></div>

**步骤 2**：点击 **Applications** => **Accessories** => **SD Card Copier**，在主屏幕上运行 **SD Card Copier** 程序，并将操作系统复制到 NVME SSD，如下图所示。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/copy.gif" alt="pir" width="700" height="auto" /></div>

### 设置树莓派从 NVMe SSD 启动

如果您可以轻松访问 SD 卡插槽，可以关闭树莓派，取出 SD 卡，并且（如果一切正常工作）它将在下次启动时自动从 NVMe 驱动器启动。如果您希望保留 SD 卡并仍然从 NVMe 启动，则需要更改启动顺序。

**步骤 1**：输入以下命令：

```shell
  sudo raspi-config
```

向下滚动到 `Advanced Options` 并按 Enter：
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_1.png" alt="pir" width="700" height="auto" /></div>

**步骤 2**：向下滚动到 `Boot Order` 并按 Enter：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_2.png" alt="pir" width="700" height="auto" /></div>

**步骤 3**：选择 `NVMe/USB Boot` 并按 Enter：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_3.png" alt="pir" width="700" height="auto" /></div>

配置将被确认。按 Enter：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_4.png" alt="pir" width="700" height="auto" /></div>

**步骤 4**：通过选择 `Back` 或按 Esc 键返回到第一个屏幕。然后使用右光标键导航到 Finish。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_5.png" alt="pir" width="700" height="auto" /></div>

系统会询问您是否要立即重启。点击 `Yes`：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_6.png" alt="pir" width="700" height="auto" /></div>

## 将 Ubuntu 刷写到 NVME

### 第一步：使用 SD 卡更新 EEPROM

请参考此 [链接](https://wiki.seeedstudio.com/cn/r2000_series_getting_start/#update-eeprom)。

要将 NVMe 的启动顺序设置为最高优先级，请使用以下命令：

```
sudo rpi-eeprom-config --edit
```

然后将 rpi-eeprom-config 修改为如下所示：

```
BOOT_UART=1
BOOT_ORDER=0xf461
NET_INSTALL_AT_POWER_ON=1
PCIE_PROBE=1
```

使用 `Ctrl+X` 并输入 `y` 保存结果。结果如下所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/chang_eeprom.png" alt="pir" width="700" height="auto" /></div>

### 第二步：将 Ubuntu 烧录到 NVMe

打开 Raspberry Pi Imager：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos1.png" alt="pir" width="700" height="auto" /></div>

选择 Ubuntu 操作系统：
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos2.png" alt="pir" width="700" height="auto" /></div>

最后，点击 `Next` 并等待烧录过程完成。

### 第三步：替换操作系统文件

通过此 [链接](https://files.seeedstudio.com/wiki/reComputer-R2000/pcie-fix.dtbo) 安装 `pcie-fix.dtbo`

将 pcie-fix.dtbo 复制到 /overlays 文件夹，如下所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/replace_file1.png" alt="pir" width="700" height="auto" /></div>

修改 `config.txt` 文件，在文件末尾添加 `dtoverlay=pcie-fix`，如下所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/replace_file2.png" alt="pir" width="700" height="auto" /></div>

然后使用 `Ctrl+X` 并输入 `y` 保存此文件。

## 功耗和温度

:warning: **注意：** 待机状态是在以下条件下测试的：禁用图形界面、关闭蓝牙以及禁用 Wi-Fi。命令如下所示：

```
sudo ifconfig wlan0 down
sudo systemctl stop bluetooth
sudo systemctl stop lightdm
```

| **条件**              | **功耗**             | **温度**             |
|----------------------|----------------------|----------------------|
|**待机**              |5.9w                 |cpu:46°C             |
|**正常运行**          |6.3w                 |cpu:53°C             |
|**最大负载**          |16.2w                |cpu:75°C hailo8:81°C |

## 应用

### Frigate

Frigate 是一个开源的 NVR（网络视频录像机），专为使用 AI 进行实时目标检测而设计。它可以与现有摄像头集成，并使用机器学习模型（如 TensorFlow 和 Coral）对视频流进行目标检测。Frigate 优化了低延迟和高性能的视频处理，提供了运动检测、实时视频流和自动警报等功能。

<iframe width="800" height="500" src="https://www.youtube.com/embed/thmI3dz9Ugs" title="低成本 AI 监控：Frigate 在 Raspberry Pi 5 上运行，配合 PCIe3.0 和 Dual M.2 扩展板" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

> **注意：**
> **如果您想了解更多关于此项目的信息，请参考此 [链接](https://wiki.seeedstudio.com/cn/frigate_nvr_with_raspberrypi_5/)。**

### YOLO

YOLO（You Only Look Once）系列模型是一组实时目标检测模型，专为速度和准确性而设计。与传统目标检测方法需要分别执行区域提议和分类不同，YOLO 在神经网络的单次前向传递中同时完成这两项任务，因此速度更快。YOLO 模型将图像划分为网格，并为每个网格单元预测边界框和类别概率。多年来，YOLO 已通过多个版本不断发展，改进了准确性、速度以及检测小目标的能力。YOLOv4、YOLOv5，以及最近的 YOLOv7 和 YOLOv8 模型广泛应用于监控、自动驾驶和机器人领域。

<iframe width="800" height="500" src="https://www.youtube.com/embed/olaSVKmt9YI" title="Raspberry Pi AI：YOLOv8 目标检测 - 240fps 视频输入，Pi 5 PCIe Gen2 与 Gen3 基准测试" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

> **注意：**
> **如果您想了解更多关于此项目的信息，请参考此 [链接](https://wiki.seeedstudio.com/cn/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l/)。**

### Clip

CLIP（Contrastive Language-Image Pretraining）是由 OpenAI 开发的机器学习模型，可以同时理解图像和文本。它通过训练将图像与对应的文本描述关联起来，从而能够执行涉及两种模态的任务。CLIP 具备零样本学习能力，这意味着它可以识别图像中的对象和概念，而无需专门针对这些类别进行训练。它在多种任务中表现出色，例如图像分类、目标检测，甚至生成图像的文本描述。

<iframe width="800" height="500" src="https://www.youtube.com/embed/JMHtqSmAGCA" title="CLIP 零样本分类在 Raspberry Pi 5 上运行，配合 Hailo AI 加速器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

> **注意：**
> **如果您想了解更多关于此项目的信息，请参考此 [链接](https://wiki.seeedstudio.com/cn/clip_application_on_rpi5_with_ai_kit/)。**

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>