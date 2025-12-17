---
description: reComputer Industrial R21xx 刷写操作系统
title: reComputer Industrial R21xx 刷写操作系统
keywords:
- Raspberry pi
- Edge Controller
- reComputer Industrial R21xx
- Flash OS
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg
slug: /cn/recomputer_industrial_r21xx_flash_os
last_update:
  date: 09/28/2025
  author: Nolan Chen
---
# reComputer Industrial R21xx 刷写操作系统

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

reComputer Industrial R21xx 系列由 Raspberry Pi CM5 和 Hailo-8 AI 加速器驱动，这款紧凑的边缘 AI 系统提供 26 TOPS 算力，用于实时多通道视觉处理。配备四核 Cortex-A76 CPU、高达 16GB RAM、64GB eMMC 和多功能接口，确保无缝集成到工业 AI 应用中。

## 硬件要求

您需要准备以下硬件

- reComputer Industrial R21xx x 1
- 主机电脑（Windows/Mac/Linux）x 1
- 网线 x 1
- 电源适配器（12V-24V）自备

## 软件要求

- [usbboot 工具](https://github.com/raspberrypi/usbboot)
- [Raspberry Pi Imager 应用](https://www.raspberrypi.com/software/)

## 刷写操作系统

### Windows 主机电脑

- **步骤 1.** 点击下方链接下载设备[镜像文件](https://github.com/Seeed-Studio/pi-gen-expand/tree/main?tab=readme-ov-file)
选择最后一个并点击日期链接下载：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.1_flashing_image_1.png" style={{width:800, height:'auto'}}/></div>

- **步骤 2.** 从**[这里](https://www.raspberrypi.org/software/)**下载 **Raspberry Pi Imager** 软件

- **步骤 3.** 打开 Raspberry Pi Imager 软件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="800" height="auto"/></p>

- **步骤 4.** 按键盘上的 **CTRL + SHIFT + X** 打开**高级选项**窗口

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="800" height="auto"/></p>

- **步骤 5.** 点击 **CHOOSE OS** 并选择下载的镜像文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.1_flashing_image_5.png" alt="pir" width="800" height="auto"/></p>

继续烧录镜像直到成功。

拔掉 USB-C 端口，再次按下启动按钮，然后开关机。如果能正常登录系统，说明镜像已成功烧录并可正常使用。

### MAC 主机电脑

:::caution
**在执行以下步骤之前，您需要安装 [homebrew](https://brew.sh/)。**
请打开终端并输入 ```brew -V``` 检查是否已正确设置 homebrew 环境，您应该看到已安装的 homebrew 环境版本。
:::

- **步骤 1.** 访问[此链接](https://github.com/Seeed-Studio/pi-gen-expand/tree/main?tab=readme-ov-file)下载并安装 **Raspberry Pi Imager** 应用程序

- **步骤 2.** 打开 **Raspberry Pi Imager** 应用程序

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="800" height="auto"/></p>

- **步骤 3.** 按键盘上的 **CTRL + SHIFT + X** 打开**高级选项**窗口

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="800" height="auto"/></p>

在这里您可以**设置主机名、启用 SSH、设置密码、配置 wifi、设置本地设置**等

- **步骤 4.** 点击 **CHOOSE OS** 并选择您首选的操作系统

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="800" height="auto"/></p>

**注意：** 您可以通过导航到 **Other general purpose OS** 选择其他操作系统，如 **64-bit Ubuntu**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

或者您可以使用此链接下载镜像文件：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **步骤 5.** 点击 **CHOOSE STORAGE**

- **步骤 6.** 最后，点击 **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="800" height="auto"/></p>

### Linux 主机电脑

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

- **步骤 4.** 按键盘上的 **CTRL + SHIFT + X** 打开**高级选项**窗口

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="800" height="auto"/></p>

在这里您可以**设置主机名、启用 SSH、设置密码、配置 wifi、设置本地设置**等

- **步骤 5.** 点击 **CHOOSE OS** 并选择您首选的操作系统

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png" /></div>

**注意：** 您可以通过导航到 **Other general purpose OS** 选择其他操作系统，如 **64-bit Ubuntu**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

或者您可以使用此链接下载镜像文件：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **步骤 6.** 点击 **CHOOSE STORAGE** 并选择连接的 eMMC 驱动器

- **步骤 7.** 最后，点击 **NEXT** 和 **YES**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="800" height="auto"/></p>

请等待几分钟直到刷写过程完成。
结果如下所示：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="800" height="auto"/></p>

## 从 NVME 启动

### 更新 EEPROM

*此方法适用于您有 SSD 并且已通过 emmc 成功启动设备的情况。请确保您的系统是最新的 Raspberry Pi 系统（Bookworm 或更高版本），并且您的 RPi 5 固件已更新到 2023-12-06（12 月 6 日）或更新版本，否则可能无法识别 NVME 相关配置。*

**步骤 1**：确保您的 Raspberry Pi 系统是最新的（Bookworm 或更高版本），输入以下命令更新 RPi 5 固件：

```shell
  sudo apt update && sudo apt upgrade -y
  sudo rpi-eeprom-update  # If it is not post-December 2023 type the following into a terminal to start the configuration tool
  sudo raspi-config
```

向下滚动到 `Advanced Options` 并按 Enter：
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_1.png" alt="pir" width="800" height="auto" /></div>

向下滚动到 `Bootloader Version` 并按 Enter：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_2.png" alt="pir" width="800" height="auto" /></div>

最后选择 `Latest`，并按 Enter：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_3.png" alt="pir" width="800" height="auto" /></div>

在这里选择 `No` - 您需要 `latest` 引导加载程序。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="800" height="auto" /></div>

通过选择 `Finish` 退出工具：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="800" height="auto" /></div>

如果询问是否重启，选择 `Yes`。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="800" height="auto" /></div>

**步骤 2**：在主屏幕上点击 **Applications** =>**Accessories** =>**SD Card Copier**，运行 **SD Card Copier** 程序，将操作系统复制到 NVME SSD，如下图所示。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/copy.gif" alt="pir" width="800" height="auto" /></div>

### 设置 Raspberry Pi 从 NVMe SSD 启动

如果您可以轻松访问 SD 卡插槽，您可以关闭 Pi，取出 SD 卡，（如果一切按预期工作）下次启动时它应该会自动从 NVMe 驱动器启动。但是，如果您想将 SD 卡留在原位并仍然从 NVMe 启动，您需要更改启动顺序。

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

配置将被确认。按 Enter：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_4.png" alt="pir" width="800" height="auto" /></div>

**步骤 4**：通过选择 `Back` 或按 Esc 键返回第一个屏幕。然后使用右光标键导航到 Finish。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_5.png" alt="pir" width="800" height="auto" /></div>

系统会询问您是否要立即重启。点击 `Yes`：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_6.png" alt="pir" width="800" height="auto" /></div>

## 将 Ubuntu 刷写到 NVME

### 第一步：使用 SD 卡更新 EEPROM

请参考此[链接](https://wiki.seeedstudio.com/cn/r2000_series_getting_start/#update-eeprom)。

要将 NVMe 启动顺序设置为最高优先级，请使用以下命令：

```
sudo rpi-eeprom-config --edit
```

然后按如下方式更改 rpi-eeprom-config：

```
BOOT_UART=1
BOOT_ORDER=0xf461
NET_INSTALL_AT_POWER_ON=1
PCIE_PROBE=1
```

使用 `Ctrl+X` 并输入 `y` 来保存结果。结果如下所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/chang_eeprom.png" alt="pir" width="800" height="auto" /></div>

### 第二步：将 Ubuntu 烧录到 NVMe

打开 Raspberry Pi Imager：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos1.png" alt="pir" width="800" height="auto" /></div>

选择 Ubuntu 操作系统：
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos2.png" alt="pir" width="800" height="auto" /></div>

最后，点击 `Next` 并等待刷写过程完成。

### 第三步：替换操作系统文件

通过此[链接](https://files.seeedstudio.com/wiki/reComputer-R2000/pcie-fix.dtbo)安装 `pcie-fix.dtbo`

将 pcie-fix.dtbo 复制到 /overlays 文件夹，如下所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/replace_file1.png" alt="pir" width="800" height="auto" /></div>

修改 `config.txt`，在文件末尾添加 `dtoverlay=pcie-fix`，如下所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/replace_file2.png" alt="pir" width="800" height="auto" /></div>

然后使用 `Ctrl+X` 并输入 `y` 来保存此文件。

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
