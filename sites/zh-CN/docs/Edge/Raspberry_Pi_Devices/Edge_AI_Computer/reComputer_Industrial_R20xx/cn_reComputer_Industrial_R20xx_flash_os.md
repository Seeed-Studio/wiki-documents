---
description: reComputer Industrial R20xx 刷写操作系统
title: reComputer Industrial R20xx 刷写操作系统
keywords:
  - Raspberry pi
  - 边缘控制器
  - reComputer Industrial R20xx
  - 刷写操作系统
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg
slug: /recomputer_industrial_r2000_flash_os
last_update:
  date: 09/28/2025
  author: Nolan Chen
createdAt: '2025-01-09'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/recomputer_industrial_r2000_flash_os/
---
# reComputer Industrial R20xx 刷写操作系统

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2045-12-p-6544.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

reComputer Industrial R20xx 系列由 Raspberry Pi CM5 和 Hailo-8 AI 加速器驱动，这款紧凑型边缘 AI 系统可提供 26 TOPS 的算力，用于实时多通道视觉处理。凭借四核 Cortex-A76 CPU、最高 16GB 内存、64GB eMMC 和多功能接口，它能够无缝集成到工业 AI 应用中。

## 硬件需求

你需要准备以下硬件

- reComputer Industrial R20xx x 1
- 主机电脑（Windows/Mac/Linux）x 1
- 以太网线 x 1
- 电源适配器（12V-24V）自备

## 软件需求

- [usbboot 工具](https://github.com/raspberrypi/usbboot)
- [Raspberry Pi Imager 应用](https://www.raspberrypi.com/software/)

## 刷写操作系统

:::note

设备出厂时已预装并预烧录系统镜像。
首次上电后，你可以使用以下默认账号登录：
- 用户名: recomputer
- 密码: 12345678

出于安全考虑，建议你在登录后立即修改密码。
:::

### 适用于 Windows 主机电脑

- **步骤 1.** 点击下面的链接下载设备[镜像文件](https://github.com/Seeed-Studio/pi-gen-expand/tree/main?tab=readme-ov-file)
选择最后一个并点击日期链接进行下载：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.1_flashing_image_1.png" style={{width:800, height:'auto'}}/></div>

- **步骤 2.** 从**[这里](https://www.raspberrypi.org/software/)**下载 **Raspberry Pi Imager** 软件

- **步骤 3.** 打开 Raspberry Pi Imager 软件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="800" height="auto"/></p>

- **步骤 4.** 在键盘上按下 **CTRL + SHIFT + X** 打开 **Advanced options** 窗口

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="800" height="auto"/></p>

- **步骤 5.** 点击 **CHOOSE OS** 并选择下载好的镜像文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.1_flashing_image_5.png" alt="pir" width="800" height="auto"/></p>

继续烧录镜像直到成功完成。

拔下 USB-C 接口，再次按下启动按钮，然后开关电源。如果你可以正常登录系统，则说明镜像已成功烧录并可以正常使用。

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

在这里你可以**设置主机名、启用 SSH、设置密码、配置 WiFi、设置本地化选项**等

- **步骤 4.** 点击 **CHOOSE OS** 并选择你偏好的操作系统

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="800" height="auto"/></p>

**注意：**你可以通过进入 **Other general purpose OS** 来选择其他操作系统，例如 **64-bit Ubuntu**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

或者你可以使用此链接下载镜像文件：

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

在这里你可以**设置主机名、启用 SSH、设置密码、配置 WiFi、设置本地化选项**等

- **步骤 5.** 点击 **CHOOSE OS** 并选择你偏好的操作系统

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png" /></div>

**注意：**你可以通过进入 **Other general purpose OS** 来选择其他操作系统，例如 **64-bit Ubuntu**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

或者你可以使用此链接下载镜像文件：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **步骤 6.** 点击 **CHOOSE STORAGE** 并选择已连接的 eMMC 驱动器

- **步骤 7.** 最后点击 **NEXT** 和 **YES**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="800" height="auto"/></p>

请等待几分钟，直到刷写过程完成。
结果如下所示：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="800" height="auto"/></p>

## 从 NVME 启动

### 更新 EEPROM

*如果你有一块 SSD，并且已经通过 eMMC 成功启动了设备，则此方法适用。请确保你的系统为最新的 Raspberry Pi 系统（Bookworm 或更高版本），并且你的 RPi 5 固件已更新到 2023-12-06（12 月 6 日）或更新版本，否则可能无法识别与 NVME 相关的配置。*

**步骤 1**：确保你的 Raspberry Pi 系统是最新的（Bookworm 或更高版本），输入以下命令来更新 RPi 5 固件：

```shell
  sudo apt update && sudo apt upgrade -y
  sudo rpi-eeprom-update  # If it is not post-December 2023 type the following into a terminal to start the configuration tool
  sudo raspi-config
```

向下滚动到 `Advanced Options` 并按回车：
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_1.png" alt="pir" width="800" height="auto" /></div>

向下滚动到 `Bootloader Version` 并按回车：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_2.png" alt="pir" width="800" height="auto" /></div>

最后选择 `Latest`，然后按回车：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_3.png" alt="pir" width="800" height="auto" /></div>

此处选择 `No`——你需要的是 `latest` 引导加载程序。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="800" height="auto" /></div>

然后通过选择 `Finish` 退出该工具：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="800" height="auto" /></div>

如果提示重启，请选择 `Yes`。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="800" height="auto" /></div>

**步骤 2**：在主屏幕上点击 **Applications** =>**Accessories** =>**SD Card Copier**，运行 **SD Card Copier** 程序，并按照下图所示将操作系统复制到 NVME SSD。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/copy.gif" alt="pir" width="800" height="auto" /></div>

### 将 Raspberry Pi 设置为从 NVMe SSD 启动

如果你可以方便地访问 SD 卡槽，可以先关闭你的 Pi，弹出 SD 卡，然后（如果一切正常工作）下次启动时它应该会自动从 NVMe 硬盘启动。如果你想让 SD 卡保持原位但仍然从 NVMe 启动，则需要更改启动顺序。

**步骤 1**：输入以下命令：

```shell
  sudo raspi-config
```

向下滚动到 `Advanced Options` 并按回车：
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_1.png" alt="pir" width="800" height="auto" /></div>

**步骤 2**：向下滚动到 `Boot Order` 并按回车：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_2.png" alt="pir" width="800" height="auto" /></div>

**步骤 3**：选择 `NVMe/USB Boot` 并按回车：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_3.png" alt="pir" width="800" height="auto" /></div>

配置将被确认。按 Enter：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_4.png" alt="pir" width="800" height="auto" /></div>

**步骤 4**：通过选择 `Back` 或按 Esc 键返回第一个界面。然后使用右方向键移动到 Finish。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_5.png" alt="pir" width="800" height="auto" /></div>

系统会询问你是否要立即重启。点击 `Yes`：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_6.png" alt="pir" width="800" height="auto" /></div>

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
