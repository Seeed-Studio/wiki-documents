---
description: reComputer AI Industrial R2000 刷写操作系统
title: reComputer AI Industrial R2000 刷写操作系统
keywords:
  - Edge
  - reComputer AI Industrial R2000
  - 刷写操作系统
image: https://files.seeedstudio.com/wiki/reComputer-R2000/reComputer_AI_Industrial_R2135-12.webp
slug: /cn/recomputer_ai_industrial_r2000_flash_os
last_update:
  date: 05/06/2025
  author: Jiahao Li
---
#  reComputer AI Industrial R2000 刷写操作系统

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/7/-/7-114993595-recomputer-ai-industrial-r2135-12.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

reComputer AI Industrial R2000 系列由 Raspberry Pi CM5 和 Hailo-8 AI 加速器提供支持，这款紧凑型边缘 AI 系统可提供 26 TOPS 的实时多通道视觉处理能力。配备四核 Cortex-A76 CPU、最高 16GB RAM、64GB eMMC 和多功能接口，可确保无缝集成到工业 AI 应用中。

## 硬件需求

您需要准备以下硬件：

- reComputer AI Industrial R2000 x 1
- 主机电脑（Windows/Mac/Linux）x 1
- 以太网线 x 1
- 电源适配器（12V-24V）自备
- USB Type-C 数据线 x 1 

## 软件需求

- [usbboot 工具](https://github.com/raspberrypi/usbboot)
- [Raspberry Pi Imager 应用](https://www.raspberrypi.com/software/)

## 刷写操作系统

### 针对 Windows 主机电脑

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

### 针对 MAC 主机电脑

:::caution
**在进行以下步骤之前，您需要安装 [homebrew](https://brew.sh/)。**
请打开终端并输入 ```brew -V``` 检查是否已正确设置 homebrew 环境，您应该能看到已安装的 homebrew 版本。
:::

- **步骤 1.** 通过访问 [此链接](https://www.raspberrypi.org/software/) 下载并安装 **Raspberry Pi Imager** 应用

- **步骤 2.** 打开 **Raspberry Pi Imager** 应用

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

### 针对 Linux 主机电脑

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

**注意：** 您可以通过进入 **Other general purpose OS** 选择其他操作系统，例如 **64-bit Ubuntu**。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

或者，您可以使用以下链接下载镜像文件：

[适用于 Raspberry Pi 的 Ubuntu](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **步骤 6.** 点击 **CHOOSE STORAGE** 并选择已连接的 eMMC 驱动器。

- **步骤 7.** 最后，点击 **NEXT** 和 **YES**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="600" height="auto"/></p>

请等待几分钟，直到刷写过程完成。结果如下所示：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="600" height="auto"/></p>

## 从 NVME 启动

### 更新 EEPROM

*此方法适用于您拥有 SSD 并已通过 eMMC 成功启动设备的情况。请确保您的系统是最新的 Raspberry Pi 系统（Bookworm 或更高版本），并且您的 RPi 5 固件已更新至 2023-12-06（12 月 6 日）或更新版本，否则可能无法识别与 NVME 相关的配置。*

**步骤 1**：确保您的 Raspberry Pi 系统是最新的（Bookworm 或更高版本），输入以下命令以更新 RPi 5 固件：

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

在这里选择 `No` - 您需要的是 `latest` 引导程序。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="700" height="auto" /></div>

通过选择 `Finish` 退出工具：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="700" height="auto" /></div>

如果被要求重启，请选择 `Yes`。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="700" height="auto" /></div>

**步骤 2**：点击 **Applications** => **Accessories** => **SD Card Copier**，在主屏幕上运行 **SD Card Copier** 程序，并将操作系统复制到 NVME SSD，如下图所示。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/copy.gif" alt="pir" width="700" height="auto" /></div>

### 设置 Raspberry Pi 从 NVMe SSD 启动

如果您可以轻松访问 SD 卡插槽，可以关闭您的 Pi，取出 SD 卡，并在下一次启动时（如果一切正常）它应该会自动从 NVMe 驱动器启动。如果您希望保留 SD 卡并仍然从 NVMe 启动，则需要更改启动顺序。

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

**步骤 4**：通过选择 `Back` 或按 Esc 键返回到第一个屏幕。然后使用右方向键导航到 Finish。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_5.png" alt="pir" width="700" height="auto" /></div>

系统会询问您是否要立即重启。点击 `Yes`：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_6.png" alt="pir" width="700" height="auto" /></div>

## 将 Ubuntu 刷写到 NVMe

### 第一步：使用 SD 卡更新 EEPROM

请参考此[链接](https://wiki.seeedstudio.com/cn/r2000_series_getting_start/#update-eeprom)。

要将 NVMe 的启动顺序设置为最高优先级，请使用以下命令：

```
sudo rpi-eeprom-config --edit
```

然后将 rpi-eeprom-config 修改为如下内容：

```
BOOT_UART=1
BOOT_ORDER=0xf461
NET_INSTALL_AT_POWER_ON=1
PCIE_PROBE=1
```

使用 `Ctrl+X` 并输入 `y` 保存结果。结果如下所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/chang_eeprom.png" alt="pir" width="700" height="auto" /></div>

### 第二步：将 Ubuntu 刷写到 NVMe

打开 Raspberry Pi Imager：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos1.png" alt="pir" width="700" height="auto" /></div>

选择 Ubuntu 操作系统：
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos2.png" alt="pir" width="700" height="auto" /></div>

最后，点击 `Next` 并等待刷写过程完成。

### 第三步：替换操作系统文件

通过此[链接](https://files.seeedstudio.com/wiki/reComputer-R2000/pcie-fix.dtbo)安装 `pcie-fix.dtbo`。

将 pcie-fix.dtbo 复制到 /overlays 文件夹，如下所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/replace_file1.png" alt="pir" width="700" height="auto" /></div>

修改 `config.txt` 文件，在文件末尾添加 `dtoverlay=pcie-fix`，如下所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/replace_file2.png" alt="pir" width="700" height="auto" /></div>

然后使用 `Ctrl+X` 并输入 `y` 保存此文件。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时获得最佳体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>