---
description: reComputer AI R2000 是一款基于 Raspberry Pi 5 的高性能边缘 AI 计算机。其搭载四核 Arm Cortex-A76 处理器、8GB 内存，支持 M.2 SSD，并配备最高可达 26 TOPS 算力的 Hailo-8 AI 加速模块，可实现实时、低延迟且高效的 AI 推理，是广泛 AI 应用（包括 AI 视频分析、机器视觉和智能边缘计算）的理想选择。
title: reComputer AI R2000 系列快速上手
keywords:
  - Raspberry pi
  - 边缘 AI 计算机
  - reComputer R2000
image: https://files.seeedstudio.com/wiki/recomputer-r2000-getting-start/1_24_1.webp
slug: /r2000_series_getting_start
sku: 114993560, 114993627
last_update:
  date: 1/09/2025
  author: Jiahao Li
createdAt: '2025-01-09'
updatedAt: '2026-04-16'
url: https://wiki.seeedstudio.com/cn/r2000_series_getting_start/
---

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

reComputer AI R2000 系列是一款基于 Raspberry Pi 5 的高性能边缘 AI 计算机。其搭载四核 Arm Cortex-A76 处理器、8GB 内存，支持 M.2 SSD，并配备最高可达 26 TOPS 算力的 Hailo-8 AI 加速模块，可实现实时、低延迟且高效的 AI 推理，是广泛 AI 应用（包括 AI 视频分析、机器视觉和智能边缘计算）的理想选择。

## 特性

- **强大的散热能力**：紧凑的设计和优化的热结构使其非常适合在资源受限的环境中部署，并提供出色的散热性能。

- **强劲性能**：由 Raspberry Pi 5 提供算力，搭载四核 Cortex-A76 CPU，最高 8GB 内存。

- **26 万亿次运算每秒**：由 Hailo AI 加速器提供支持，集成算力最高可达 26 TOPS。
丰富的接口：2 路 HDMI 4Kp60、1 个以太网口、2 个 USB 3.0、2 个 USB 2.0。

- **无线连接**：双频 Wi-Fi 和 Bluetooth 5.0/BLE。
灵活的存储选项：PCIe2.0 双 M.2 插槽同时支持 AI 加速器和 SSD 存储。

## 规格参数

| **参数**        | **描述**                                                          |
|-----------------------|--------------------------------------------------------------------------|
| **硬件规格**      |                                                                          |
| **CPU**                | Raspberry Pi 5，2.4GHz 四核 64 位 Arm Cortex-A76                    |
| **GPU**                | Raspberry Pi 5，VideoCore VII                                             |
| **AI 处理器**       | Hailo-8 M.2 加速模块，26 万亿次运算每秒           |
| **RAM**                | 8GB SDRAM                                                                |
| **操作系统**   | Raspberry Pi OS，Ubuntu                                                  |
| **系统规格**        |                                                                          |
| **电源**       | 通过 USB-C 提供 5V/5A 直流电源，支持 Power Delivery                       |
| **视频解码器**      | 4Kp60 HEVC 解码器                                                       |
| **Wi-Fi**              | 双频 802.11ac Wi-Fi®                                                |
| **Bluetooth**          | Bluetooth 5.0/ BLE                                                       |
| **电源按钮**       | 支持开/关                                                          |
| **接口**          |                                                                          |
| **存储**            | 1 个 microSD 卡槽，支持高速 SDR104 模式           |
| **M.2 插槽**           | 2 个 M.2 插槽，支持 M.2 NVMe SSD/Hailo M.2 加速模块        |
| **USB 接口**          | 2 × USB 3.0 接口                                                        |
|                       | 2 × USB 2.0 接口                                                        |
| **以太网**           | 1 个 10/100/1000 Mbps                                                     |
| **摄像头/显示**     | 2 × 4 通道 MIPI 摄像头/显示收发器                               |
| **显示输出**     | 2 个 micro HDMI 接口（4Kp60）                                             |
| **环境条件** |                                                                          |
| **防护等级** | IP40                                                                     |
| **工作温度** | 0-45°C                                                                  |
| **其他**             |                                                                          |
| **质保**           | 1 年                                                                   |
| **产品生命周期**| 至少持续到 2036 年 1 月                                              |
| **认证**      | CE、FCC、Telec、RoHS、REACH                                              |

## Hailo 介绍

### 硬件介绍

[Hailo](https://hailo.ai/) 提供前沿的 AI 处理器，专为边缘设备上的高性能深度学习应用量身打造。该公司的解决方案专注于在边缘侧实现新一代生成式 AI，同时结合感知与视频增强能力，由先进的 AI 加速器和视觉处理器提供算力支持。而搭载 Hailo-8 NPU 加速器、具备 26 TOPS AI 性能的 reComputer_R2000，使用 YOLOv8s 时可实现超过 200 FPS 的推理速度。

### 软件介绍

![](https://seeed-projects.github.io/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero/assets/images/architecture-2bfc6ed440e1add56388738e87558050.png)

Hailo AI 软件套件提供了强大的工具，可在硬件加速器上高效运行 AI 模型。它被设计为可与现有深度学习框架无缝集成，为开发者提供顺畅的工作流。该流程包括在模型构建环境中从 ONNX 文件生成 HEF（Hailo 可执行二进制文件）。生成 HEF 文件后，将其传输到推理机器（运行环境），并通过 HailoRT API 执行推理。提供的脚本可在模型构建环境中将 ONNX 文件转换为 HEF 文件。

> **注意：**
> **如果你想了解更多关于使用 Hailo NPU 的示例，请点击此[链接](https://github.com/Seeed-Projects/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero)。**

## 硬件总览

![image1](https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image3_1.jpeg)
![image2](https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image4_1.jpeg)

## 烧录操作系统

*你需要一张 SD 卡和一个读卡器。将 SD 卡插入读卡器，然后将读卡器的 USB 接口插入主机的 USB 端口。*

### 适用于 Windows 主机电脑

- **步骤 1.** 点击 **[here](https://downloads.raspberrypi.com/imager/imager_2.0.7.exe)** 直接下载 Windows 版本的 Raspberry Pi Imager 2.0.7（在以下步骤中使用），或者访问 **[官方网站](https://www.raspberrypi.com/software/)** 为你的系统选择合适的版本。


- **步骤 2.** 打开 Raspberry Pi Imager 软件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/piimager_show_1.png" alt="pir" width="600" height="auto"/></p>


- **步骤 3.** 点击 **CHOOSE OS** 并选择你偏好的操作系统

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/piimager_show_2.png" alt="pir" width="600" height="auto"/></p>      

**注意 1：** 我们目前建议烧录 [64-bit Raspberry Pi OS Debian 12 Bookworm](https://downloads.raspberrypi.com/raspios_oldstable_full_arm64/images/raspios_oldstable_full_arm64-2025-10-02/2025-10-01-raspios-bookworm-arm64-full.img.xz) 镜像。最新发布的基于 Debian 13 “Trixie” 的 Raspberry Pi OS 还没有更新 `hailo-all` 软件包，因此使用 Bookworm 可以开箱即用地获得完整的 Hailo 支持。
下载[链接](https://www.raspberrypi.com/software/operating-systems/)。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/reComputer-Industrial/homepage/OS.png" alt="pir" width="600" height="auto"/></p>

然后在 imager 中选择 Use custom 选项，将该镜像写入你的 SD 卡。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/piimager_show_3.png" alt="pir" width="600" height="auto"/></p>

如果你仍然想尝试最新的镜像，**则需要手动安装 Hailo 软件，而不是使用一键式的 `hailo-all` 方式；** 请参考此[链接](https://wiki.seeedstudio.com/cn/tutorial_of_ai_kit_with_raspberrypi5_about_yolov8n_object_detection/#install-hailo-software)。

**注意 2：** 你也可以通过进入 **Other general purpose OS** 选择其他操作系统，例如 **64-bit Ubuntu**。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

或者你可以使用此链接下载镜像文件：

[Ubuntu for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **步骤 4.** 点击 **STORAGE** 并选择为烧录操作系统准备好的目标存储设备。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/piimager_show_4.png" alt="pir" width="600" height="auto"/></p>

- **步骤 5.** 最后点击 **WRITE**

请等待几分钟，直到烧录过程完成。

- **步骤 6.** 修复 M.2 Dual Hat 驱动

将已烧录的 SD 卡插入你的 reComputer 并启动。然后按照 [Fix M.2 Dual Hat Driver](https://wiki.seeedstudio.com/cn/r2000_series_getting_start/#fix-m2-dual-hat-driver) 中的说明进行操作。

### 适用于 MAC 主机电脑

:::caution
**在进行以下步骤之前，你需要先安装 [homebrew](https://brew.sh/)。**
请打开终端并输入 ```brew -V``` 来检查是否已正确配置 homebrew 环境，你应该能看到已安装的 homebrew 环境的版本信息。
:::

- **步骤 1.** 访问[此链接](https://www.raspberrypi.org/software/)下载并安装 **Raspberry Pi Imager** 应用程序

- **步骤 2.** 打开 **Raspberry Pi Imager** 应用程序

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **步骤 3.** 在键盘上按下 **CTRL + SHIFT + X** 打开 **Advanced options** 窗口

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

在这里你可以**设置主机名、启用 SSH、设置密码、配置 WiFi、设置本地参数**等

- **步骤 4.** 点击 **CHOOSE OS** 并选择你偏好的操作系统

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意：** 你可以通过进入 **Other general purpose OS** 来选择其他操作系统，例如 **64-bit Ubuntu**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

或者你可以使用此链接下载镜像文件：

[Ubuntu for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **步骤 5.** 点击 **CHOOSE STORAGE**

- **步骤 6.** 最后，点击 **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

- **步骤 7.** 修复 M.2 Dual Hat 驱动

将已烧录的 SD 卡插入你的 reComputer 并启动。然后按照 [Fix M.2 Dual Hat Driver](https://wiki.seeedstudio.com/cn/r2000_series_getting_start/#fix-m2-dual-hat-driver) 中的说明进行操作。

### 适用于 Linux 主机电脑

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

- **步骤 4.** 在键盘上按下 **CTRL + SHIFT + X** 打开 **Advanced options** 窗口

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

在这里你可以**设置主机名、启用 SSH、设置密码、配置 WiFi、设置本地参数**等

- **步骤 5.** 点击 **CHOOSE OS** 并选择你偏好的操作系统

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png" /></div>

<!-- <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p> -->

**注意：** 你可以通过进入 **Other general purpose OS** 来选择其他操作系统，例如 **64-bit Ubuntu**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

或者你可以使用手动下载链接：[Ubuntu24.04 for Raspberry-Pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **步骤 6.** 点击 **CHOOSE STORAGE** 并选择已连接的 eMMC 驱动器

- **步骤 7.** 最后，点击 **NEXT** 和 **YES**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="600" height="auto"/></p>

请等待几分钟，直到烧录过程完成。
结果如下所示：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="600" height="auto"/></p>

- **步骤 8.** 修复 M.2 Dual Hat 驱动

将已烧录的 SD 卡插入你的 reComputer 并启动。然后按照 [Fix M.2 Dual Hat Driver](https://wiki.seeedstudio.com/cn/r2000_series_getting_start/#fix-m2-dual-hat-driver) 中的说明进行操作。


## 从 NVME 启动

### 更新 EEPROM

*如果你有一张 SD 卡并已成功启动设备，则此方法适用。请确保你的系统是最新的 Raspberry Pi 系统（Bookworm 或更高版本），并且你的 RPi 5 固件已更新到 2023-12-06（12 月 6 日）或更新的版本，否则可能无法识别与 NVME 相关的配置。*

**步骤 1**：确保你的 Raspberry Pi 系统是最新的（Bookworm 或更高版本），输入以下命令来更新 RPi 5 固件：

```shell
  sudo apt update && sudo apt upgrade -y
  sudo rpi-eeprom-update  # If it is not post-December 2023 type the following into a terminal to start the configuration tool
  sudo raspi-config
```

向下滚动到 `Advanced Options` 并按 Enter：
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_1.png" alt="pir" width="700" height="auto" /></div>

向下滚动到 `Bootloader Version` 并按 Enter：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_2.png" alt="pir" width="700" height="auto" /></div>

最后选择 `Latest`，然后按 Enter：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_3.png" alt="pir" width="700" height="auto" /></div>

在这里选择 `No`——你需要的是 `latest` 引导加载程序。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="700" height="auto" /></div>

然后通过选择 `Finish` 退出该工具：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="700" height="auto" /></div>

如果提示是否重启，选择 `Yes`。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="700" height="auto" /></div>

**步骤 2**：在主屏幕上点击 **Applications** =>**Accessories** =>**SD Card Copier**，运行 **SD Card Copier** 程序，并按照下图所示将操作系统复制到 NVME SSD。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/copy.gif" alt="pir" width="700" height="auto" /></div>

### 将 Raspberry Pi 设置为从 NVMe SSD 启动

如果你可以轻松访问 SD 卡槽，可以先关闭你的 Pi，弹出 SD 卡，然后（如果一切正常）下次启动时它应该会自动从 NVMe 驱动器启动。如果你想让 SD 卡保留在原位但仍然从 NVMe 启动，则需要更改启动顺序。

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

配置将会被确认。按 Enter：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_4.png" alt="pir" width="700" height="auto" /></div>

**步骤 4**：通过选择 `Back` 或按 Esc 键返回到第一个界面。然后使用右方向键导航到 Finish。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_5.png" alt="pir" width="700" height="auto" /></div>

系统会询问你是否现在重启。点击 `Yes`：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_6.png" alt="pir" width="700" height="auto" /></div>

**步骤 5**：重启后，Raspberry Pi 将从 NVMe SSD 启动。你需要按照 [Fix M.2 Dual Hat Driver](https://wiki.seeedstudio.com/cn/r2000_series_getting_start/#fix-m2-dual-hat-driver) 中的说明安装 `pcie-fix.dtbo` 覆盖文件以修复 M.2 Dual Hat 驱动。

## 将 Ubuntu 烧录到 NVME

### 第一部分：使用 SD 卡更新 EEPROM

请参考此[链接](https://wiki.seeedstudio.com/cn/r2000_series_getting_start/#update-eeprom)。

要将 NVMe 启动顺序设置为最高优先级，请使用以下命令：

```
sudo rpi-eeprom-config --edit
```

然后按如下所示修改 rpi-eeprom-config：

```
BOOT_UART=1
BOOT_ORDER=0xf461
NET_INSTALL_AT_POWER_ON=1
PCIE_PROBE=1
```

使用 `Ctrl+X` 并输入 `y` 来保存结果。结果如下所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/chang_eeprom.png" alt="pir" width="700" height="auto" /></div>

### 第二部分：将 Ubuntu 烧录到 NVMe 上

打开 Raspberry Pi Imager：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos1.png" alt="pir" width="700" height="auto" /></div>

选择 Ubuntu 操作系统：
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos2.png" alt="pir" width="700" height="auto" /></div>

最后，点击 `Next` 并等待烧录过程完成。

Ubuntu 启动后，你需要按照 [Fix M.2 Dual Hat Driver](https://wiki.seeedstudio.com/cn/r2000_series_getting_start/#fix-m2-dual-hat-driver) 中的说明安装 `pcie-fix.dtbo` 覆盖文件以修复 M.2 Dual Hat 驱动。

## 修复 M.2 Dual Hat 驱动

在烧录全新的操作系统镜像后，安装 `pcie-fix.dtbo` 覆盖文件以修复 M.2 Dual Hat 驱动。

进入已烧录的操作系统，并在终端中运行以下命令：

```shell
cd /tmp
wget https://files.seeedstudio.com/wiki/reComputer-R2000/pcie-fix.dtbo
sudo cp pcie-fix.dtbo /boot/firmware/overlays/
echo "dtoverlay=pcie-fix" | sudo tee -a /boot/firmware/config.txt
sudo reboot
```

## 功耗和温度

:warning: **注意：** 待机状态是在以下条件下测试的：图形界面被禁用、蓝牙关闭以及 Wi-Fi 被禁用。命令如下所示：

```
sudo ifconfig wlan0 down
sudo systemctl stop bluetooth
sudo systemctl stop lightdm
```

| **状态**        | **功耗** | **温度** |
|----------------------|----------------------|----------------------|
|**待机**|5.9w   |   cpu:46°C|
|**正常运行**|6.3w|cpu:53°C|
|**满载**|16.2w|cpu:75°C hailo8:81°C|

## 应用

### Frigate

Frigate 是一个开源的 NVR（网络视频录像机），专为使用 AI 进行实时目标检测而设计。它可以与现有摄像头集成，并使用诸如 TensorFlow 和 Coral 等机器学习模型，对视频流进行目标检测。Frigate 针对低延迟和高性能视频处理进行了优化，提供运动检测、实时视频流和自动告警等功能。

<div class="video-container">
<iframe width="800" height="500" src="https://www.youtube.com/embed/thmI3dz9Ugs" title="Cost-Effective AI Surveillance: Frigate on Raspberry Pi 5 with Hailo8 on PCIe3.0 to Dual M.2 hat" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

> **注意：**
> **如果你想进一步了解该项目，请参考此[链接](https://wiki.seeedstudio.com/cn/frigate_nvr_with_raspberrypi_5/)。**

### YOLO

YOLO（You Only Look Once）系列模型是一类为实时目标检测而设计的模型家族，兼顾速度和精度。与传统需要分别执行候选区域生成和分类的目标检测方法不同，YOLO 在神经网络的一次前向传播中同时完成这两项任务，因此速度更快。YOLO 模型将图像划分为网格，并为每个网格单元预测边界框和类别概率。多年来，YOLO 经过多个版本的演进，在精度、速度以及检测小目标的能力方面不断提升。YOLOv4、YOLOv5 以及近期的 YOLOv7 和 YOLOv8 被广泛应用于监控、自动驾驶和机器人等场景。

<div class="video-container">
<iframe width="800" height="500" src="https://www.youtube.com/embed/olaSVKmt9YI" title="Raspberry Pi AI: YOLOv8 Object Detection - 240fps Video Input, Pi 5 PCIe Gen2 vs Gen3 Benchmark" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

> **注意：**
> **如果你想进一步了解该项目，请参考此[链接](https://wiki.seeedstudio.com/cn/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l/)**。

### Clip

CLIP（对比语言-图像预训练，Contrastive Language-Image Pretraining）是由 OpenAI 开发的一种机器学习模型，能够同时理解图像和文本。它通过训练来将图像与对应的文本描述关联起来，从而可以执行涉及这两种模态的任务。CLIP 具备零样本学习能力，这意味着它无需针对特定类别进行专门训练，也能识别图像中的物体和概念。它在多种任务中表现出色，例如图像分类、目标检测，甚至为图像生成文本描述。

<div class="video-container">
<iframe width="800" height="500" src="https://www.youtube.com/embed/JMHtqSmAGCA" title="CLIP Zero Shot Classification on Raspberry Pi 5 with Hailo AI Accelerator" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

> **注意：**
> **如果你想进一步了解该项目，请参考此[链接](https://wiki.seeedstudio.com/cn/clip_application_on_rpi5_with_ai_kit/)。**

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
