---
description: reTerminal DM 刷写操作系统
title: reTerminal DM 刷写操作系统
keywords:
  - Edge
  - reTerminal-DM
  - 刷写操作系统
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reterminal-dm-flash-OS
last_update:
  date: 04/23/2023
  author: Peter Pan
---
#  将 Raspbian OS 刷写到 reTerminal DM 的 eMMC

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114070201-reterminal-dm-first_one_.jpg" alt="pir" width="600" height="auto"/></p>

reTerminal DM 是一款 10.1 英寸的开源工业人机界面（HMI）——一个集成设备主控器，用于统一数据流并管理现场设备。

基于 Raspberry Pi CM4，作为一体化设备的面板电脑、HMI、PLC、工业物联网网关，reTerminal DM 是新一代的交互式感应中心，配备 IP65 工业级大屏幕。

它具有丰富的扩展性和混合连接能力，支持 CAN 总线、RS485、RS232、千兆以太网端口等接口，以及强大的无线通信能力，如 4G、LoRa®、WiFi 和 BLE。

> \*4G 和 LoRa® 模块默认不随 reTerminal DM 提供，请根据需要购买相关模块，详情请见 
> [4G 套装](https://www.seeedstudio.com/reTerminal-DM-LTE-Cat-4-EC25-Bundle-p-5675.html)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

:::note
Sensecraft Edge OS 可从 [**这里**](https://sourceforge.net/projects/reterminal-dm/files/Sensecraft-edge-OS-V0.3.10.tar.gz/download) 下载，请注意，此 Sensecraft Edge OS 当前基于 reTerminal DM 开发，仅适用于生产版本的 reTerminal DM。
:::

## 硬件需求

您需要准备以下硬件：

- reTerminal DM x 1
- 主机电脑（Windows/Mac/Linux）x 1
- 以太网线 x 1
- 电源适配器（12V-24V）自备
- USB Type-C 数据线 x 1 

## 软件需求

- [usbboot 工具](https://github.com/raspberrypi/usbboot)
- [Raspberry Pi Imager 应用](https://www.raspberrypi.com/software/)

## 刷写 Raspbian OS 的步骤

> **注意：** Seeed 提供的最新系统镜像已包含适配的驱动程序：[pi-gen-expand](https://github.com/Seeed-Studio/pi-gen-expand)

- **步骤 1.** 翻转位于 USB Type-C 接口旁的 `启动模式开关`，确保开关设置为 `禁用 eMMC 启动模式`，如下图所示：

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/flash.png" alt="pir" width="800" height="auto"/></p>

- **步骤 2.** 使用 USB Type-C 数据线连接到 reTerminal DM 的 Type-C 接口，如上图所示。

- **步骤 3.** 将电源线从电源适配器连接到 reTerminal DM 的电源接口。
  
:::danger

请确保电源线连接的极性正确。

:::
  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/power.png" alt="pir" width="800" height="auto"/></p>

现在让我们在主机电脑上进行软件设置。请根据您的操作系统按照以下步骤操作。

### 对于 Windows 系统

- **步骤 1.** 点击 **[这里](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)** 下载 **rpiboot 安装程序**，以安装必要的驱动程序和启动工具。

- **步骤 2.** 通过 USB Type-C 数据线将 reTerminal DM 连接到电脑。

Windows 将自动检测硬件并安装必要的驱动程序。

- **步骤 3.** 搜索并打开之前安装的 **rpiboot** 工具。

- **步骤 4.** 打开 **文件资源管理器**，您将看到计算模块 4 的 eMMC 显示为 **USB 大容量存储设备**。

- **步骤 5.** 从 **[这里](https://www.raspberrypi.org/software/)** 下载 **Raspberry Pi Imager** 软件。

- **步骤 6.** 打开 Raspberry Pi Imager 软件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **步骤 7.** 按下键盘上的 **CTRL + SHIFT + X** 打开 **高级选项** 窗口。

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

在这里，您可以 **设置主机名、启用 SSH、设置密码、配置 WiFi、设置区域设置** 等。

- **步骤 8.** 点击 **CHOOSE OS** 并选择您偏好的操作系统。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意：** 您可以通过进入 **Other general purpose OS** 选择其他操作系统，例如 **64 位 Ubuntu**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **步骤 9.** 点击 **CHOOSE STORAGE** 并选择连接的 eMMC 驱动器。

- **步骤 10.** 最后，点击 **WRITE**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

请等待几分钟，直到刷写过程完成。

- **步骤 11.** 将 **启动模式开关** 翻转回原始位置。

现在您可以跳转到 **[这里](#install-drivers)**。

:::note

完成上述步骤并重新为 reTerminal DM 供电后，电源 LED 应变为黄色，ACT LED 应闪烁绿色，但屏幕为空白且无背光。请不要惊慌，您只需按照 [安装驱动程序](#install-drivers) 的步骤操作即可恢复屏幕。

:::

### 对于 MAC 系统

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

- **步骤 6.** 使用 USB Type-C 数据线将 reTerminal 连接到你的 Mac 电脑

- **步骤 7.** 通过访问[此链接](https://www.raspberrypi.org/software/)下载并安装 **Raspberry Pi Imager** 应用程序

- **步骤 8.** 打开 **Raspberry Pi Imager** 应用程序

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **步骤 9.** 按下键盘上的 **CTRL + SHIFT + X** 打开 **高级选项** 窗口

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

在这里你可以**设置主机名、启用 SSH、设置密码、配置 WiFi、设置区域设置**等。

- **步骤 10.** 点击 **CHOOSE OS** 并选择你偏好的操作系统

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意：** 你可以通过进入 **Other general purpose OS** 选择诸如 **64-bit Ubuntu** 的操作系统。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **步骤 11.** 点击 **CHOOSE STORAGE** 并选择已连接的 eMMC 驱动器

- **步骤 12.** 最后，点击 **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

请等待几分钟，直到刷写过程完成。

- **步骤 13.** 将 **启动模式开关** 翻回原始位置

现在你可以跳转到 **[这里](#install-drivers)**

:::note

完成上述步骤并重新为 reTerminal DM 供电后，你应该会看到电源 LED 变为黄色，ACT LED 闪烁绿色，但屏幕是空白且没有背光。请不要惊慌，你只需按照 [安装驱动程序](#install-drivers) 的步骤操作即可恢复屏幕。

:::

### 对于 Linux

我们将使用 Git 获取 **rpiboot** 源代码，因此请确保已安装 Git。

- **步骤 1.** 打开一个 **终端** 窗口并输入以下命令更新 **软件包列表**

```sh
sudo apt-get update
```

- **步骤 2.** 通过以下命令安装 **Git**

```sh
sudo apt install git libusb-1.0-0-dev pkg-config build-essential
```

- **步骤 3.** 如果日期未正确设置，Git 可能会产生错误。输入以下命令进行修正

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

运行结果如下所示：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/result_of_command.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 7.** 使用 USB Type-C 数据线将 reTerminal 连接到 PC

- **步骤 8.** 下载 snap

```sh
sudo apt install snap
```

- **步骤 9.** 下载 **rpi-imager**

```sh
snap install rpi-imager
```

- **步骤 10.** 打开 Raspberry Pi Imager 软件

```sh
rpi-imager
```

运行结果如下所示：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="600" height="auto"/></p>

- **步骤 11.** 按下键盘上的 **CTRL + SHIFT + X** 打开 **高级选项** 窗口

设置主机名、设置密码、配置 WiFi、设置区域设置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/cltaltx.png" alt="pir" width="600" height="auto"/></p>

启用 SSH

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/enable_ssh.png" alt="pir" width="600" height="auto"/></p>

在这里你可以**设置主机名、启用 SSH、设置密码、配置 WiFi、设置区域设置**等。

- **步骤 11.** 点击 **CHOOSE OS** 并选择你偏好的操作系统

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意：** 你可以通过进入 **Other general purpose OS** 选择诸如 **64-bit Ubuntu** 的操作系统。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **步骤 12.** 点击 **CHOOSE STORAGE** 并选择已连接的 eMMC 驱动器

- **步骤 13.** 最后，点击 **NEXT** 和 **YES**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="600" height="auto"/></p>

请等待几分钟，直到刷写过程完成。
运行结果如下所示：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="600" height="auto"/></p>

- **步骤 14.** 将 **启动模式开关** 翻回原始位置

:::note

完成上述步骤并重新为 reTerminal DM 供电后，你应该会看到电源 LED 变为黄色，ACT LED 闪烁绿色，但屏幕是空白且没有背光。请不要惊慌，你只需按照 [安装驱动程序](#install-drivers) 的步骤操作即可恢复屏幕。

:::

## 安装驱动程序

### 通过 SSH 访问 reTerminal DM

:::note

以下步骤需要一些基本的 Linux 命令行知识，请准备好一杯咖啡，做好准备。

:::

按照上述刷写操作系统的步骤，reTerminal DM 应该已启用 SSH，主机名为 `raspberrypi.local`。

现在请将以太网线连接到 reTerminal DM 和与主机电脑在同一网络的路由器上。

:::tip

要测试您的 reTerminal DM 是否与主机电脑在同一网络中，可以使用以下命令：

```sh
ping raspberrypi.local
```

如果在执行 ping 命令后看到以下输出，则表示两个设备在同一网络中：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ping.png" alt="pir" width="600" height="auto"/></p>

:::

##### 对于 Windows

- **步骤 1.** 打开 **命令提示符** 并输入以下内容

```sh
# ssh 用户名@主机名
ssh pi@raspberrypi.local
```

- **步骤 2.** 对提示输入 **yes**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows-prompt.png" alt="pir" width="750" height="auto"/></p>

- **步骤 3.** 输入以下密码

```sh
raspberry
```

- **步骤 4.** 如果成功登录到 Raspberry Pi OS，您将看到以下输出

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows.png" alt="pir" width="1000" height="auto"/></p>

##### 对于 Mac/Linux

- **步骤 1.** 在电脑上打开 **终端** 并输入以下内容

```sh
ssh pi@raspberrypi.local
```

- **步骤 2.** 对以下消息输入 **yes**

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **步骤 3.** 当提示输入密码时，输入以下内容

```sh
raspberry
```

- **步骤 4.** 如果成功登录到 Raspberry Pi OS，您将看到以下输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

### 在刷写新 Raspbian OS 后安装 reTerminal 驱动程序

reTerminal DM 自带必要的驱动程序，开箱即用，因此您无需安装任何额外的驱动程序。然而，如果您自行刷写了新的操作系统，则需要单独安装必要的驱动程序。

:::tip

**安装 32 位操作系统驱动程序时，请仔细按照以下步骤操作：**

reTerminal DM 上预装的操作系统是 64 位的，如果您希望安装 32 位操作系统，请使用以下方法安装 DTS 驱动程序。

>⚠️注意：在刷写 32 位操作系统后，请重新启动您的 reTerminal DM。

请按照 [**通过 SSH 访问 reTerminal DM**](#access-reterminal-dm-via-ssh) 的步骤操作，然后输入以下命令：

```sh
echo arm_64bit=0 | sudo tee -a /boot/config.txt
```

然后继续执行 [**在刷写新 Raspbian OS 后安装驱动程序的过程**](#install-reterminal-drivers-after-flashing-new-raspbian-os)。

:::

- **步骤 1.** 在通过上述步骤连接到 reTerminal DM 的 SSH shell 中克隆以下仓库

```sh
sudo apt install git -y
git clone --depth 1 https://github.com/Seeed-Studio/seeed-linux-dtoverlays
```

- **步骤 2.** 进入仓库目录

```sh
cd seeed-linux-dtoverlays
```

- **步骤 3.** 输入以下命令安装驱动程序

```sh
sudo ./scripts/reTerminal.sh --device reTerminal-DM
```

<!-- 如果成功安装驱动程序，您将看到以下输出

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/driver-success.png" alt="pir" width="1000" height="auto"/></p> -->

- **步骤 4.** 重启 reTerminal DM

```sh
sudo reboot
```

现在您的屏幕应该会亮起并正常运行。

## 常见问题解答

### 触摸屏方向

**问：屏幕触摸面板的方向与屏幕显示方向不同？**

**答：请仔细按照以下步骤操作：**

请按照[通过 SSH 访问 reTerminal DM](#access-reterminal-dm-via-ssh)的步骤操作，然后输入以下命令：

```sh
echo 'ATTRS{name}=="gt9271", ENV{LIBINPUT_CALIBRATION_MATRIX}="0  1.0  0 -1.0 0 1.0 0 0 1.0"' | sudo tee -a /etc/udev/rules.d/98-touchscreen-cal.rules
```
然后重启：

```sh
sudo reboot
```

如果屏幕方向仍然不正确，可以在[此处](https://wayland.freedesktop.org/libinput/doc/1.11.3/udev_config.html)找到 `ENV{LIBINPUT_CALIBRATION_MATRIX}` 的其他选项。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得最佳体验。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>