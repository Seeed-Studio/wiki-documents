---
description: reTerminal-常见问题解答
title: 如何将 Raspberry Pi OS/64 位 Ubuntu OS 或其他操作系统刷入 eMMC
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/flash_different_os_to_emmc
last_update:
  date: 2023/6/21
  author: Seraphina
---

<!-- ### 将 Raspberry Pi OS/64 位 Ubuntu OS 或其他操作系统刷入 eMMC -->

我们可以将 **Raspberry Pi OS/64 位 Ubuntu OS 或其他操作系统** 刷入 reTerminal 上 CM4 的 **eMMC 存储**。安装必要的驱动程序后，只需将 reTerminal 的 USB Type-C 接口连接到您的电脑，它将显示为外部驱动器。首先，移除 reTerminal 的后壳。

## 硬件拆解步骤

- **步骤 1.** 移除 4 个橡胶盖，并拧下下面的 4 个螺丝，打开 reTerminal 的后壳

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-1.png" alt="pir" width="450" height="auto"/></p>

- **步骤 2.** 拆下 2 个螺丝以卸下散热片

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/remove-screw-heatsink-2.jpg" alt="pir" width="600" height="auto"/></p>

- **步骤 3.** 根据下图将 **启动模式开关** 翻转到下方

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/boot-switch-2.jpg" alt="pir" width="600" height="auto"/></p>

现在让我们进入软件设置部分。根据您想要的操作系统，按照以下步骤操作。

## 软件设置

### 对于 Windows

- **步骤 1.** 点击 **[此链接](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)** 下载 **rpiboot 安装程序**，以安装必要的驱动程序和启动工具

- **步骤 2.** 使用 USB Type-C 数据线将 reTerminal 连接到电脑

Windows 将自动检测硬件并安装必要的驱动程序

- **步骤 3.** 搜索并打开我们之前安装的 **rpiboot** 工具

- **步骤 4.** 打开 **文件资源管理器**，您将看到 CM4 的 eMMC 显示为 **USB 大容量存储设备**

:::caution
如果您要刷入 **reTerminal 原装的 Raspberry Pi OS**，请返回此 [Wiki](/cn/reterminal_black_screen/#flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal)。  
否则，请继续以下步骤。
:::

- **步骤 5.** 访问 **[此链接](https://www.raspberrypi.org/software/)** 下载 **Raspberry Pi Imager** 软件

- **步骤 6.** 打开 Raspberry Pi Imager 软件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **步骤 7.** 按下键盘上的 **CTRL + SHIFT + X** 打开 **高级选项** 窗口

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

在这里，您可以 **设置主机名、启用 SSH、设置密码、配置 WiFi、设置区域设置** 等。

- **步骤 8.** 点击 **CHOOSE OS** 并选择您偏好的操作系统

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意：** 您可以通过进入 **Other general purpose OS** 选择其他操作系统，例如 **64 位 Ubuntu**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **步骤 9.** 点击 **CHOOSE STORAGE** 并选择连接的 eMMC 驱动器

- **步骤 10.** 最后，点击 **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

请等待几分钟，直到刷写过程完成。

- **步骤 11.** 将 **启动模式开关** 翻回原始位置，并重新组装 reTerminal 的外壳

现在您可以跳转到 **[这里](/cn/log_rpios_use_ssh_over_wifi_ethernet)**

### 对于 MAC

:::caution
**在进行以下步骤之前，您需要安装 [homebrew](https://brew.sh/)。**  
请打开终端并输入 ```brew -V``` 检查是否已正确设置 homebrew 环境，您应该能看到已安装的 homebrew 版本。
:::

- **步骤 1.** 克隆 **usbboot** 仓库

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **步骤 2.** 安装 **libusb**

```sh
brew install libusb
```

- **步骤 3.** 安装 **pkg-config**

```sh
brew install pkg-config
```

- **步骤 4.** 使用 make 构建

```sh
make
```

- **步骤 5.** 运行二进制文件

```sh
sudo ./rpiboot
```

- **步骤 6.** 使用 USB Type-C 数据线将 reTerminal 连接到您的 Mac 电脑

:::caution
如果您要刷入 **reTerminal 原装的 Raspberry Pi OS**，请返回此 [Wiki](/cn/reterminal_black_screen/#flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal)。  
否则，请继续以下步骤。
:::

- **步骤 7.** 访问 [此链接](https://www.raspberrypi.org/software/) 下载并安装 **Raspberry Pi Imager** 应用程序

- **步骤 8.** 打开 **Raspberry Pi Imager** 应用程序

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **步骤 9.** 按下键盘上的 **CTRL + SHIFT + X** 打开 **高级选项** 窗口

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

在这里，您可以 **设置主机名、启用 SSH、设置密码、配置 WiFi、设置区域设置** 等。

- **步骤 10.** 点击 **CHOOSE OS** 并选择您偏好的操作系统

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意：** 您可以通过进入 **Other general purpose OS** 选择操作系统，例如 **64 位 Ubuntu**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **步骤 11.** 点击 **CHOOSE STORAGE** 并选择已连接的 eMMC 驱动器

- **步骤 12.** 最后，点击 **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

请等待几分钟，直到刷写过程完成。

- **步骤 13.** 将 **Boot Mode 开关** 翻回原来的位置，并组装 reTerminal 外壳

现在你可以跳到 **[这里](#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet)**

### 对于 Linux

我们将使用 Git 获取 **rpiboot** 源代码，因此请确保已安装 Git。

- **步骤 1.** 打开一个 **终端** 窗口并输入以下命令以更新 **软件包列表**

```sh
sudo apt-get update
```

- **步骤 2.** 使用以下命令安装 **Git**

```sh
sudo apt install git pkg-config make gcc libusb-1.0-0-dev
```

- **步骤 3.** 如果日期未正确设置，Git 可能会产生错误。输入以下命令以纠正日期

```sh
sudo date MMDDhhmm
```

**注意：** 其中 **MM** 是月份，**DD** 是日期，**hh** 和 **mm** 分别是小时和分钟。

- **步骤 4.** 克隆 **usbboot** 工具仓库

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **步骤 5.** 构建并安装 usbboot 工具

```sh
make
```

- **步骤 6.** 运行 usbboot 工具，它将等待连接

```sh
sudo ./rpiboot
```

- **步骤 7.** 通过 USB Type-C 数据线将 reTerminal 连接到 PC

:::caution
如果你刷写的是 **reTerminal 原装的 Raspberry Pi OS**，请返回此 [Wiki](/cn/reterminal_black_screen/#flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal)。<br/>
否则，请继续以下步骤。
:::

- **步骤 8.** 通过访问[此链接](https://www.raspberrypi.org/software/)下载 **Raspberry Pi Imager** 软件

- **步骤 9.** 打开 Raspberry Pi Imager 软件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **步骤 10.** 按下键盘上的 **CTRL + SHIFT + X** 打开 **高级选项** 窗口

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

在这里你可以 **设置主机名、启用 SSH、设置密码、配置 WiFi、设置区域设置** 等。

- **步骤 11.** 点击 **CHOOSE OS** 并选择你偏好的操作系统

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意：** 你可以通过导航到 **Other general purpose OS** 选择诸如 **64-bit Ubuntu** 的操作系统。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **步骤 12.** 点击 **CHOOSE STORAGE** 并选择已连接的 eMMC 驱动器

- **步骤 13.** 最后，点击 **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

请等待几分钟，直到刷写过程完成。

- **步骤 14.** 将 **Boot Mode 开关** 翻回原来的位置，并组装 reTerminal 外壳