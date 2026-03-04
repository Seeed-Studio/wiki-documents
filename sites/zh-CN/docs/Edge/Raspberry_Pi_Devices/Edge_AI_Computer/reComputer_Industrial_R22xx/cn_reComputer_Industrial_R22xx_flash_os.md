---
description: reComputer Industrial R22xx 是一款基于 Raspberry Pi CM5 的工业级 AI NVR，配备 Hailo-8 AI 加速器，可提供高达 26 TOPS 的算力。其具备 4 个支持 PoE PSE 的千兆以太网端口以及 1 个额外的千兆以太网端口，可实现高带宽视频流传输，并简化 IP 摄像机的 PoE 部署。提供丰富的工业 I/O、灵活的无线连接、无风扇散热设计，以及 -20 °C 至 50 °C 的宽工作温度范围，确保在严苛场景下实现可靠的 AI 视频分析和持续稳定运行。
title: reComputer Industrial R22xx 刷写操作系统
keywords:
- Edge Controller
- Raspberry pi
- Edge Controller
- reComputer Industrial R22xx
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrial-r2200_2.jpg
slug: /recomputer_industrial_r22xx_flash_os
sku: 100077451,100079040
last_update:
  date: 02/09/2026
  author: Nolan Chen
---


# reComputer Industrial R22xx 刷写系统

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrial-r2200_2.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2235-12-p-6654.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

reComputer Industrial R22xx 系列由 Raspberry Pi CM5 和 Hailo-8 AI 加速器驱动，这款紧凑型边缘 AI 系统可提供 26 TOPS 算力，用于实时多通道视觉处理。凭借四核 Cortex-A76 CPU、最高 16GB 内存、64GB eMMC 以及多样化接口，它可确保无缝集成到工业 AI 应用中。

## 硬件需求

你需要准备以下硬件

- reComputer Industrial R22xx x 1
- 主机电脑（Windows/Mac/Linux）x 1
- 以太网线 x 1
- 电源适配器（12V-24V）自备

## 软件需求

- [usbboot tool](https://github.com/raspberrypi/usbboot)
- [Raspberry Pi Imager APP](https://www.raspberrypi.com/software/)

## 刷写系统

### 适用于 Windows 主机电脑

- **步骤 1.** 点击下面的链接下载设备[镜像文件](https://github.com/Seeed-Studio/pi-gen-expand/tree/main?tab=readme-ov-file)
选择最后一个，并点击日期链接进行下载：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.1-1.png" style={{width:800, height:'auto'}}/></div>

- **步骤 2.** 从 **[这里](https://www.raspberrypi.org/software/)** 下载 **Raspberry Pi Imager** 软件

- **步骤 3.** 打开 Raspberry Pi Imager 软件

- a.点击此处下载 rpiboot 安装程序，以安装必要的驱动和启动工具。
- b.通过 USB Type-C 线将 reComputer R2200 连接到电脑。
- c.Windows 现在会发现新硬件并安装必要的驱动程序。
- d.搜索之前安装的 rpiboot 工具并打开它。
- e.打开文件资源管理器，你会看到 Compute Module 5 的 eMMC 显示为一个 USB 大容量存储设备。
- f.从 https://www.raspberrypi.org/software/ 下载 Raspberry Pi Imager 软件。
- g.打开 Raspberry Pi Imager 软件。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.1-2.png" alt="pir" width="800" height="auto"/></p>

- **步骤 4.** 选择已下载的镜像文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.1-3.png" alt="pir" width="800" height="auto"/></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.1-4.png" alt="pir" width="800" height="auto"/></p>

- **步骤 5.** 在 Storage 选项卡中，选择要写入镜像的存储设备。选择 Next。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.1-5.png" alt="pir" width="800" height="auto"/></p>

- **步骤 6.** Raspberry Pi OS 和部分第三方操作系统支持自定义。如果你正在安装其中一种操作系统，可以使用 Imager 中接下来的步骤进行自定义。这些步骤是可选的，可以通过选择 Skip customisation 跳过。更多配置说明请参考 **[这里](https://www.raspberrypi.com/documentation/computers/getting-started.html#advanced-options)**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.1-6.png" alt="pir" width="800" height="auto"/></p>

继续烧录镜像直到成功完成。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.1-7.png" alt="pir" width="800" height="auto"/></p>

拔掉 USB-C 接口，再次按下启动按钮，然后重新上电/断电。如果你可以正常登录系统，则说明镜像已经烧录成功，可以正常使用。

### 适用于 MAC 主机电脑

:::caution
**在进行以下步骤之前，你需要先安装 [homebrew](https://brew.sh/)。**
请打开终端并输入 ```brew -V``` 来检查是否已正确配置 homebrew 环境，你应该能看到已安装的 homebrew 环境版本。
:::

- **步骤 1.** 访问[此链接](https://github.com/Seeed-Studio/pi-gen-expand/tree/main?tab=readme-ov-file)下载并安装 **Raspberry Pi Imager** 应用

- **步骤 2.** 打开 **Raspberry Pi Imager** 应用

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="800" height="auto"/></p>

- **步骤 3.** 在键盘上按下 **CTRL + SHIFT + X** 打开 **Advanced options** 窗口

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="800" height="auto"/></p>

在这里你可以**设置主机名、启用 SSH、设置密码、配置 Wi-Fi、设置本地化选项**等

- **步骤 4.** 点击 **CHOOSE OS** 并选择你偏好的操作系统

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="800" height="auto"/></p>

**注意：** 你可以通过进入 **Other general purpose OS** 选择其他操作系统，例如 **64-bit Ubuntu**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

或者你也可以使用此链接下载镜像文件：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **步骤 5.** 点击 **CHOOSE STORAGE**

- **步骤 6.** 最后点击 **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="800" height="auto"/></p>

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
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="800" height="auto"/></p>

- **步骤 4.** 在键盘上按下 **CTRL + SHIFT + X** 打开 **Advanced options** 窗口

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="800" height="auto"/></p>

在这里你可以**设置主机名、启用 SSH、设置密码、配置 Wi-Fi、设置本地化选项**等

- **步骤 5.** 点击 **CHOOSE OS** 并选择你偏好的操作系统

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png" /></div>

**注意：** 你可以通过进入 **Other general purpose OS** 选择其他操作系统，例如 **64-bit Ubuntu**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

或者你也可以使用此链接下载镜像文件：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **步骤 6.** 点击 **CHOOSE STORAGE** 并选择已连接的 eMMC 驱动器

- **步骤 7.** 最后点击 **NEXT** 和 **YES**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="800" height="auto"/></p>

请等待几分钟，直到刷写过程完成。
结果如下所示：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="800" height="auto"/></p>

## 从 NVME 启动

### 更新 EEPROM

*如果你有 SSD，并且已经通过 eMMC 成功启动了设备，则此方法适用。请确保你的系统为最新的 Raspberry Pi 系统（Bookworm 或更高版本），并且 RPi 5 固件已更新到 2023-12-06（12 月 6 日）或更新版本，否则可能无法识别与 NVME 相关的配置。*

**步骤 1**：确保你的 Raspberry Pi 系统是最新的（Bookworm 或更高版本），输入以下命令来更新 RPi 5 固件：

```shell
  sudo apt update && sudo apt upgrade -y
  sudo rpi-eeprom-update  # If it is not post-December 2023 type the following into a terminal to start the configuration tool
  sudo raspi-config
```

向下滚动到 `Advanced Options` 并按 Enter：
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_1.png" alt="pir" width="800" height="auto" /></div>

向下滚动到 `Bootloader Version` 并按 Enter：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_2.png" alt="pir" width="800" height="auto" /></div>

最后选择 `Latest`，然后按 Enter：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_3.png" alt="pir" width="800" height="auto" /></div>

在这里选择 `No`——你需要的是 `latest` 引导加载程序。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="800" height="auto" /></div>

然后通过选择 `Finish` 退出该工具：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="800" height="auto" /></div>

如果提示重启，请选择 `Yes`。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="800" height="auto" /></div>

**步骤 2**：在主屏幕上点击 **Applications** =>**Accessories** =>**SD Card Copier**，运行 **SD Card Copier** 程序，并按照下图所示将操作系统复制到 NVME SSD。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/copy.gif" alt="pir" width="800" height="auto" /></div>

### 将 Raspberry Pi 设置为从 NVMe SSD 启动

如果你可以轻松访问 SD 卡槽，可以先关闭你的 Pi，取出 SD 卡（如果一切正常），那么下次启动时它应该会自动从 NVMe 硬盘启动。如果你想让 SD 卡保持插入状态但仍然从 NVMe 启动，则需要更改启动顺序。

**步骤 1**：输入以下命令：

```shell
  sudo raspi-config
```

向下滚动到 `Advanced Options` 并按 Enter：
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_1.png" alt="pir" width="800" height="auto" /></div>

**步骤 2**：向下滚动到 `Boot Order` 并按 Enter：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_2.png" alt="pir" width="800" height="auto" /></div>

**步骤 3**：选择 `NVMe/USB Boot` 并按 Enter：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_3.png" alt="pir" width="800" height="auto" /></div>

配置将会被确认。按 Enter：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_4.png" alt="pir" width="800" height="auto" /></div>

**步骤 4**：通过选择 `Back` 或按 Esc 键返回到第一个界面。然后使用右方向键移动到 Finish。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_5.png" alt="pir" width="800" height="auto" /></div>

系统会询问你是否要立即重启。点击 `Yes`：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_6.png" alt="pir" width="800" height="auto" /></div>


## 技术支持与产品讨论

感谢你选择我们的产品！我们为你提供多种支持方式，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
