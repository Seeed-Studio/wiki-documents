---
description: reTerminal DM 刷写操作系统
title: reTerminal DM 刷写操作系统
keywords:
  - Edge
  - reTerminal-DM
  - Flash OS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reterminal-dm-flash-OS
sku: 114070201,114070221,E23010420,114070262
last_update:
  date: 04/23/2023
  author: Peter Pan
createdAt: '2023-04-24'
updatedAt: '2026-05-29'
url: https://wiki.seeedstudio.com/cn/reterminal-dm-flash-OS/
---
# 将 Raspbian 操作系统刷写到 reTerminal DM 的 eMMC

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114070201-reterminal-dm-first_one_.jpg" alt="pir" width="600" height="auto"/></p>

reTerminal DM 是一款 10.1 英寸开源工业 HMI——一体化设备主控，用于统一数据流并管理现场设备。

基于 Raspberry Pi CM4，作为集面板电脑、HMI、PLC、IIoT 网关于一体的设备，reTerminal DM 是新一代交互式感知枢纽，配备 IP65 工业级大屏幕。

它具备丰富的可扩展性和混合连接能力，支持 CAN 总线、RS485、RS232、千兆以太网口等接口，以及 4G、LoRa®、WiFi 和 BLE 等强大的无线通信能力。

> \*4G 和 LoRa® 模块默认不随 reTerminal DM 一同提供，请根据需要单独购买相关模块，例如
> [4G bundle](https://www.seeedstudio.com/reTerminal-DM-LTE-Cat-4-EC25-Bundle-p-5675.html)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

:::note
Sensecraft Edge OS 可以从[**这里**](https://sourceforge.net/projects/reterminal-dm/files/Sensecraft-edge-OS-V0.3.10.tar.gz/download)下载，请注意当前 Sensecraft Edge OS 是基于 reTerminal DM 开发的，只能在量产版 reTerminal DM 上使用
:::

## 硬件需求

你需要准备以下硬件

- reTerminal DM x 1
- 主机电脑（Windows/Mac/Linux）x 1
- 以太网线 x 1
- 电源适配器（12V-24V）自备
- USB Type-C 线缆 x 1

## 软件需求

- [usbboot 工具](https://github.com/raspberrypi/usbboot)
- [Raspberry Pi Imager 应用](https://www.raspberrypi.com/software/)

## 刷写 Raspbian 操作系统的步骤

> **注意：** Seeed 打包的最新系统镜像，已包含适配的驱动程序：[pi-gen-expand](https://github.com/Seeed-Studio/pi-gen-expand)

- **步骤 1.** 切换位于 USB Type-C 接口旁边的 `boot mode switch`，根据下图确保开关被设置为 `disable eMMC boot mode`：

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/flash.png" alt="pir" width="800" height="auto"/></p>

- **步骤 2.** 请使用 USB Type-C 数据线连接到 reTerminal DM 上的 Type-C 接口，如上图所示，

- **步骤 3.** 请将电源线从电源连接到 reTerminal DM 的电源接口。

:::danger

请确保你连接的电源线极性正确。

:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/power.png" alt="pir" width="800" height="auto"/></p>

现在我们继续在主机电脑上进行软件设置。请根据你所使用的操作系统，按照对应步骤进行操作

### 适用于 Windows

- **步骤 1.** 通过点击 **[here](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)** 下载 **rpiboot 安装程序**，以安装必要的驱动和启动工具

- **步骤 2.** 通过 USB Type-C 线缆将 reTerminal DM 连接到电脑

Windows 现在会发现新硬件并安装必要的驱动程序

- **步骤 3.** 搜索之前安装的 **rpiboot** 工具并打开

- **步骤 4.** 打开 **文件资源管理器**，你会看到 Compute Module 4 的 eMMC 显示为一个 **USB 大容量存储设备**

- **步骤 5.** 从 **[here](https://www.raspberrypi.org/software/)** 下载 **Raspberry Pi Imager** 软件

- **步骤 6.** 打开 Raspberry Pi Imager 软件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **步骤 7.** 在键盘上按下 **CTRL + SHIFT + X** 打开 **Advanced options** 窗口

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

在这里你可以**设置主机名、启用 SSH、设置密码、配置 WiFi、设置本地化选项**等

- **步骤 8.** 点击 **CHOOSE OS** 并选择你偏好的操作系统

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意：** 你也可以通过进入 **Other general purpose OS** 来选择其他操作系统，例如 **64-bit Ubuntu**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **步骤 9.** 点击 **CHOOSE STORAGE** 并选择已连接的 eMMC 驱动器

- **步骤 10.** 最后，点击 **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

请等待几分钟，直到刷写过程完成。

- **步骤 11.** 将 **Boot Mode switch** 拨回原来的位置

现在你可以跳转到 **[here](#install-drivers)**

:::note

当完成以上步骤并重新给 reTerminal DM 上电后，你会看到电源指示灯变为黄色，ACT 指示灯闪烁绿色，但屏幕是黑的且没有背光。请不要慌张，你只需要按照 [install drivers](#install-drivers) 的步骤来让屏幕恢复显示。

:::

### 适用于 MAC

:::caution
**在进行以下步骤之前，你需要先安装 [homebrew](https://brew.sh/)。**
请打开终端并输入 ```brew -V``` 来检查是否已正确配置 homebrew 环境，你应该能看到已安装的 homebrew 版本信息。
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

- **步骤 4.** 使用 make 进行构建

```sh
make
```

- **步骤 5.** 运行生成的二进制文件

```sh
sudo ./rpiboot
```

- **步骤 6.** 通过 USB Type-C 线缆将 reTerminal 连接到你的 Mac 电脑

- **步骤 7.** 访问[此链接](https://www.raspberrypi.org/software/)下载并安装 **Raspberry Pi Imager** 应用

- **步骤 8.** 打开 **Raspberry Pi Imager** 应用

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **步骤 9.** 在键盘上按下 **CTRL + SHIFT + X** 打开 **Advanced options** 窗口

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

在这里你可以**设置主机名、启用 SSH、设置密码、配置 WiFi、设置本地化选项**等

- **步骤 10.** 点击 **CHOOSE OS** 并选择你偏好的操作系统

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意：** 你可以通过进入 **Other general purpose OS** 来选择操作系统，例如 **64-bit Ubuntu**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **步骤 11.** 点击 **CHOOSE STORAGE** 并选择已连接的 eMMC 驱动器

- **步骤 12.** 最后，点击 **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

请等待几分钟，直到刷写过程完成。

- **步骤 13.** 将 **Boot Mode switch** 拨回原来的位置

现在你可以跳转到 **[here](#install-drivers)**

:::note

当完成以上步骤并重新给 reTerminal DM 上电后，你会发现电源指示灯会变为黄色，ACT 指示灯闪烁绿色，但屏幕是黑的且没有背光。请不要慌张，你只需要按照 [install drivers](#install-drivers) 的步骤来让屏幕恢复显示。

:::

### 适用于 Linux

我们将使用 Git 获取 **rpiboot** 源码，因此请确保已安装 Git

- **步骤 1.** 打开一个 **终端** 窗口并输入以下命令来更新 **软件包列表**

```sh
sudo apt-get update
```

- **步骤 2.** 通过以下命令安装 **Git**

```sh
sudo apt install git libusb-1.0-0-dev pkg-config build-essential
```

- **步骤 3.** 如果日期设置不正确，Git 可能会报错。输入以下命令来修正

```sh
sudo date MMDDhhmm
```

**注意：** 其中 **MM** 表示月份，**DD** 表示日期，**hh** 和 **mm** 分别表示小时和分钟。

- **步骤 4.** 克隆 **usbboot** 工具仓库

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **步骤 5.** 构建并安装 usbboot 工具

```sh
make
```

- **步骤 6.** 运行 usbboot 工具，它会等待连接

```sh
sudo ./rpiboot
```

结果如下所示：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/result_of_command.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 7.** 通过 USB Type-C 线缆将 reTerminal 连接到电脑

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

结果如下所示：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="600" height="auto"/></p>

- **步骤 11.** 在键盘上按下 **CTRL + SHIFT + X** 打开 **Advanced options** 窗口

设置主机名、设置密码、配置 WiFi、设置区域设置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/cltaltx.png" alt="pir" width="600" height="auto"/></p>

启用 SSH

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/enable_ssh.png" alt="pir" width="600" height="auto"/></p>

在这里你可以**设置主机名、启用 SSH、设置密码、配置 WiFi、设置区域设置**等

- **步骤 11.** 点击 **CHOOSE OS** 并选择你偏好的 OS

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意：** 你可以通过进入 **Other general purpose OS** 来选择诸如 **64-bit Ubuntu** 等操作系统

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **步骤 12.** 点击 **CHOOSE STORAGE** 并选择已连接的 eMMC 驱动器

- **步骤 13.** 最后，点击 **NEXT** 和 **YES**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="600" height="auto"/></p>

请等待几分钟，直到烧录过程完成。
结果如下所示：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="600" height="auto"/></p>

- **步骤 14.** 将 **Boot Mode Switch** 拨回原来的位置

:::note

当上述步骤完成并且你重新给 reTerminal DM 上电后，你会发现电源指示灯会亮黄灯，ACT 指示灯会闪烁绿色，但屏幕是黑的且没有背光。请不要慌张，你只需要按照 [install drivers](#install-drivers) 步骤来让屏幕恢复。

:::

## 安装驱动

### 通过 SSH 访问 reTerminal DM

:::note

以下步骤需要一些基本的 Linux 命令行知识，请先给自己准备一杯咖啡并做好准备。

:::

按照上述烧录 OS 的步骤，reTerminal DM 应该已经启用了 SSH，主机名为 `raspberrypi.local`。

现在请将以太网线连接到 reTerminal DM 和与你的主机电脑处于同一网络的路由器上。

:::tip

要测试你的 reTerminal DM 是否与主机电脑在同一网络中，你可以使用 `ping raspberrypi.local`

如果在执行 ping 命令后看到如下输出，则表示两个设备在同一网络中：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ping.png" alt="pir" width="600" height="auto"/></p>

:::

##### 适用于 Windows

- **步骤 1.** 打开 **Command Prompt** 并输入以下内容

```sh
# ssh username@hostname
ssh pi@raspberrypi.local
```

- **步骤 2.** 在提示符中输入 **yes**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows-prompt.png" alt="pir" width="750" height="auto"/></p>

- **步骤 3.** 按如下方式输入密码

```sh
raspberry
```

- **步骤 4.** 如果你已经成功登录到 Raspberry Pi OS，你将看到如下输出

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows.png" alt="pir" width="1000" height="auto"/></p>

##### 适用于 Mac/Linux

- **步骤 1.** 在电脑上打开 **Terminal** 并输入以下内容

```sh
ssh pi@raspberrypi.local
```

- **步骤 2.** 对于以下信息输入 **yes**

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **步骤 3.** 当它询问密码时，输入以下内容

```sh
raspberry
```

- **步骤 4.** 如果你已经成功登录到 Raspberry Pi OS，你将看到如下输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

### 在烧录新的 Raspbian OS 后安装 reTerminal 驱动

reTerminal DM 出厂时已预装必要的驱动，因此你无需额外安装驱动。不过，如果你自己烧录了新的 OS，则需要单独安装必要的驱动。

:::tip

**要安装 32 位 OS 驱动，请严格按照以下步骤操作：**

预装在 reTerminal DM 上的操作系统是 64 位的，如果你希望安装 32 位 OS，请使用以下方法安装 DTS 驱动。

>⚠️注意：在你烧录 32 位 OS 之后，请重启你的 reTerminal DM。

请按照 [**通过 SSH 访问 reTerminal DM**](#access-reterminal-dm-via-ssh) 步骤操作，然后输入以下命令：

```sh
echo arm_64bit=0 | sudo tee -a /boot/config.txt
```

然后继续执行 [**在烧录新的 Raspbian OS 后安装驱动流程**](#install-reterminal-drivers-after-flashing-new-raspbian-os)

同时，如果你正在使用最新官方 32 位 Raspberry Pi OS，其新内核与本产品不兼容，这将导致驱动更新失败并出现黑屏。如果你确实需要用于开发的 32 位 OS 镜像，我们建议使用较旧版本的 32 位镜像。
:::

- **步骤 1.** 在你通过上述步骤连接到 reTerminal DM 的 ssh shell 中克隆以下仓库

```sh
sudo apt install git -y
git clone --depth 1 https://github.com/Seeed-Studio/seeed-linux-dtoverlays
```

- **步骤 2.** 进入该仓库

```sh
cd seeed-linux-dtoverlays
```

- **步骤 3.** 输入以下命令安装驱动

```sh
sudo ./scripts/reTerminal.sh --device reTerminal-DM
```

<!-- You will see the following output if you have successfully installed the drivers

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/driver-success.png" alt="pir" width="1000" height="auto"/></p> -->

- **步骤 4.** 重启 reTerminal DM

```sh
sudo reboot
```

现在你的屏幕应该会点亮并正常运行。

## 常见问题

### 触摸屏方向

**问：屏幕触摸面板的方向与屏幕显示的方向不一致？**

**答：请严格按照以下步骤操作：**

请按照 [access reTerminal DM via SSH](#access-reterminal-dm-via-ssh) 步骤操作，然后输入以下命令：

```sh
echo 'ATTRS{name}=="gt9271", ENV{LIBINPUT_CALIBRATION_MATRIX}="0  1.0  0 -1.0 0 1.0 0 0 1.0"' | sudo tee -a /etc/udev/rules.d/98-touchscreen-cal.rules
```

然后重启：

```sh
sudo reboot
```

如果屏幕方向仍然不正确，可以在[此处](https://wayland.freedesktop.org/libinput/doc/1.11.3/udev_config.html)找到 `ENV{LIBINPUT_CALIBRATION_MATRIX}` 的更多可选配置。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
