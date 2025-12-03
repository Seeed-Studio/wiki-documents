---
description: reComputer R1000 刷写操作系统
title: reComputer R1000 刷写操作系统
keywords:
  - Edge
  - reComputer R1000
  - Flash OS
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01_1.webp
slug: /cn/recomputer_r1000_flash_OS
last_update:
  date: 10/25/2024
  author: Parker Hu
---
# reComputer R1000 Raspbian 操作系统刷写到 eMMC

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

<br />

reComputer R1000 边缘物联网控制器基于高性能 Raspberry Pi CM4 平台构建，配备四核 A72 处理器，最大支持 8GB RAM 和 32GB eMMC。配备可灵活配置的双以太网接口，还包括 3 个隔离的 RS485 通道，支持 BACnet、Modbus RTU、Modbus TCP/IP 和 KNX 协议。
凭借强大的物联网网络通信能力，R1000 系列支持多种无线通信选项，包括 4G、LoRa®、Wi-Fi/BLE，允许灵活配置以用作相应的无线网关。该控制器非常适合远程设备管理、能源管理以及智能建筑领域的各种其他场景。

## 硬件要求

您需要准备以下硬件

- reComputer R1000 x 1
- 主机电脑（Windows/Mac/Linux）x 1
- 以太网线 x 1
- 电源适配器（12V-24V）自备
- USB Type-C 线缆 x 1

## 软件要求

- [usbboot 工具](https://github.com/raspberrypi/usbboot)
- [Raspberry Pi Imager 应用程序](https://www.raspberrypi.com/software/)

## 从 NVME 启动

### 将操作系统刷写到 NVME

请参考此[链接](https://wiki.seeedstudio.com/cn/recomputer_r1000_flash_OS/#刷写-raspbian-操作系统的步骤)，然后将其插入 M.2 插槽。

### 从 emmc 启动并更新 eeprom

使用如下命令打开文件

```
sudo nano /etc/default/rpi-eeprom-update
```

按如下所示修改：

```
FIRMWARE_RELEASE_STATUS="latest"
RPI_EEPROM_USE_FLASHROM=1
CM4_ENABLE_RPI_EEPROM_UPDATE=1
```

使用 `Ctrl`+`x` 保存文件。

使用如下命令打开文件

```
sudo nano /boot/firmware/config.txt
```

按如下所示修改 `[cm4]` 部分：

```
[cm4]
dtparam=spi=on
dtoverlay=audremap
dtoverlay=spi-gpio40-45
```

使用 `Ctrl`+`x` 保存文件，并使用命令重启机器：

```
sudo reboot
```

然后使用如下命令更新 eeprom：

```
sudo rpi-eeprom-update -a
```

输出如下所示：

```
recomputer@reComputer-R100x:~ $ sudo rpi-eeprom-update -a
BOOTLOADER: up to date
   CURRENT: Tue Feb 11 05:00:13 PM UTC 2025 (1739293213)
    LATEST: Tue Feb 11 05:00:13 PM UTC 2025 (1739293213)
   RELEASE: latest (/usr/lib/firmware/raspberrypi/bootloader-2711/latest)
            Use raspi-config to change the release.

  VL805_FW: Using bootloader EEPROM
     VL805: up to date
   CURRENT: 
    LATEST: 
```

### 刷写最新的 eeprom 并修改启动顺序

使用如下命令打开 raspi-config：

```
sudo raspi-config 
```

向下滚动到 `Advanced Options` 并按 Enter：
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_1.png" alt="pir" width="700" height="auto" /></div>

向下滚动到 `Bootloader Version` 并按 Enter：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_2.png" alt="pir" width="700" height="auto" /></div>

最后选择 `Latest`，并按 Enter：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_3.png" alt="pir" width="700" height="auto" /></div>

在这里选择 `No` - 您需要 `latest` 引导加载程序。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="700" height="auto" /></div>

通过选择 `Finish` 退出工具：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="700" height="auto" /></div>

如果询问是否重启，选择 `Yes`。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="700" height="auto" /></div>

然后使用如下命令修改启动顺序：

```
sudo -E rpi-eeprom-config --edit
```

按如下所示修改文件：

```
[all]
BOOT_UART=0
WAKE_ON_GPIO=1
POWER_OFF_ON_HALT=0
BOOT_ORDER=0xf416
```

使用 `Ctrl`+`x` 保存文件，然后重启您的机器。

## 刷写 Raspbian 操作系统的步骤

> **注意：** Seeed 打包的最新系统镜像，包含适当的驱动程序：[pi-gen-expand](https://github.com/Seeed-Studio/pi-gen-expand)

- **步骤 1.** 确保开关设置为 `Flash mode`，如下图所示：

<div class="table-center">

| 开关位置                                              | 模式        | 描述    | nRPI-BOOT |
| ------------------------------------------------------------ | ----------- | -------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | 正常模式 | 从 eMMC 启动 | Low       |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | 刷写模式  | 从 USB 启动  | High      |

</div>

- **步骤 2.** 请使用 USB Type-C 数据线连接到 reComputer R1000 上的 Type-C 端口，如下图所示，

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/33.png" /></div>

- **步骤 3.** 请将电源线从电源适配器连接到 reComputer R1000 电源端口。

<div style={{ textAlign: 'left', marginLeft: '40px' }}>
    <img
        width="100"
        src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png"
        style={{ transform: 'rotate(90deg)' }}
    />
</div>

<br></br>

:::note
电源解决方案采用桥式整流二极管进行反极性保护，兼容交流和直流输入。这确保无论电源的正负极如何连接，电路都不会损坏。通过使用桥式整流器，无论输入直流极性如何，输出电压极性都保持固定，提供有效的反极性保护。
:::

现在让我们继续在您的主机电脑上进行软件设置。请根据您所需的操作系统按照步骤操作

### Windows 系统

- **步骤 1.** 点击**[这里](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)**下载 **rpiboot 安装程序**以安装必要的驱动程序和启动工具

- **步骤 2.** 通过 USB Type-C 线缆将 reComputer R1000 连接到 PC

Windows 现在将找到硬件并安装必要的驱动程序

- **步骤 3.** 搜索我们之前安装的 **rpiboot** 工具并打开它

- **步骤 4.** 打开**文件资源管理器**，您将看到 Computer Module 4 的 eMMC 显示为 **USB 大容量存储设备**

- **步骤 5.** 从**[这里](https://www.raspberrypi.org/software/)**下载 **Raspberry Pi Imager** 软件

- **步骤 6.** 打开 Raspberry Pi Imager 软件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **步骤 7.** 在键盘上按 **CTRL + SHIFT + X** 打开**高级选项**窗口

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

在这里您可以**设置主机名、启用 SSH、设置密码、配置 WiFi、设置区域设置**等

:::note
系统已预设用户名和密码。登录时请将默认用户名设置为"**recomputer**"，默认密码设置为"**12345678**"。如果您设置了不同的凭据并遇到问题，如果您购买的是第一批 reComputer R1000，请重新刷写操作系统。
:::

- **步骤 8.** 点击 **CHOOSE OS** 并选择您首选的操作系统

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意：** 您可以通过导航到 **Other general purpose OS** 选择其他操作系统，如 **64-bit Ubuntu**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

或者您可以使用此链接下载镜像文件：

[Ubuntu for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **步骤 9.** 点击 **CHOOSE STORAGE** 并选择连接的 eMMC 驱动器

- **步骤 10.** 最后，点击 **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

请等待几分钟直到刷写过程完成。

- **步骤 11.** 将**启动模式开关**切换回**正常模式**位置

现在您可以跳转到**[这里](#安装驱动程序)**

### Mac 系统

:::caution
**在执行以下步骤之前，您需要安装 [homebrew](https://brew.sh/)。**
请打开终端并输入 ```brew -v``` 检查您是否已设置正确的 homebrew 环境，您应该看到已安装的 homebrew 环境版本。
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

- **步骤 6.** 通过 USB Type-C 线缆将 reComputer R1000 连接到您的 Mac 电脑

- **步骤 7.** 访问[此链接](https://www.raspberrypi.org/software/)下载并安装 **Raspberry Pi Imager** 应用程序

- **步骤 8.** 打开 **Raspberry Pi Imager** 应用程序

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **步骤 9.** 按键盘上的 **CTRL + SHIFT + X** 打开 **Advanced options** 窗口

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

在这里您可以**设置主机名、启用 SSH、设置密码、配置 wifi、设置区域设置**等
:::note
系统已预设用户名和密码。登录时请将默认用户名设置为 "**recomputer**"，默认密码设置为 "**12345678**"。如果您设置了不同的凭据并遇到问题，如果您购买的是第一批 reComputer R1000，请重新刷写操作系统。
:::

- **步骤 10.** 点击 **CHOOSE OS** 并选择您首选的操作系统

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**注意：** 您可以通过导航到 **Other general purpose OS** 来选择其他操作系统，如 **64-bit Ubuntu**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

或者您可以使用此链接下载镜像文件：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **步骤 11.** 点击 **CHOOSE STORAGE** 并选择连接的 eMMC 驱动器

- **步骤 12.** 最后，点击 **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

请等待几分钟，直到刷写过程完成。

- **步骤 13.** 将 **Boot Mode switch** 切换回 **Normal mode** 位置

现在您可以跳转到**[这里](#install-drivers)**

### Linux 系统

我们将使用 Git 获取 **rpiboot** 源代码，因此请确保已安装 Git

- **步骤 1.** 打开 **Terminal** 窗口并输入以下命令来更新**软件包列表**

```sh
sudo apt-get update
```

- **步骤 2.** 通过以下命令安装 **Git**

```sh
sudo apt install git pkg-config make gcc libusb-1.0-0-dev
```

- **步骤 3.** 如果日期设置不正确，Git 可能会产生错误。输入以下命令来纠正此问题

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

- **步骤 6.** 通过 USB Type-C 线缆将 reComputer R1000 连接到 PC

- **步骤 7.** 运行 usbboot 工具，它将等待连接

```sh
sudo ./rpiboot
```

结果如下所示：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/result_of_command.png" alt="pir" width="1000" height="auto"/></p>

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
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 11.** 按键盘上的 **CTRL + SHIFT + X** 打开 **Advanced options** 窗口

设置主机名、设置密码、配置 wifi、设置区域设置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/cltaltx.png" alt="pir" width="600" height="auto"/></p>

启用 SSH

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/enable_ssh.png" alt="pir" width="600" height="auto"/></p>

在这里您可以**设置主机名、启用 SSH、设置密码、配置 wifi、设置区域设置**等
:::note
系统已预设用户名和密码。登录时请将默认用户名设置为 "**recomputer**"，默认密码设置为 "**12345678**"。如果您设置了不同的凭据并遇到问题，如果您购买的是第一批 reComputer R1000，请重新刷写操作系统。
:::

- **步骤 11.** 点击 **CHOOSE OS** 并选择您首选的操作系统

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png" /></div>

<!-- <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p> -->

**注意：** 您可以通过导航到 **Other general purpose OS** 来选择其他操作系统，如 **64-bit Ubuntu**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

或者您可以使用此链接下载镜像文件：

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **步骤 12.** 点击 **CHOOSE STORAGE** 并选择连接的 eMMC 驱动器

- **步骤 13.** 最后，点击 **NEXT** 和 **YES**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="600" height="auto"/></p>

请等待几分钟，直到刷写过程完成。
结果如下所示：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="600" height="auto"/></p>

- **步骤 14.** 将 **Boot Mode switch** 切换回 **Normal mode** 位置

## 安装驱动程序

### 通过 SSH 访问 reComputer R1000

:::note

以下步骤需要一些基本的 Linux 命令行知识，请为自己准备一杯咖啡并做好准备。

:::

按照上述刷写操作系统的步骤，reComputer R1000 应该已启用 SSH，主机名为 `raspberrypi.local`。

现在请将以太网线缆连接到 reComputer R1000 和与您的主机计算机在同一网络上的路由器。

:::tip

要测试您的 reComputer R1000 是否与主机计算机在同一网络上，您可以使用 `ping raspberrypi.local`

如果您在 ping 命令后看到以下输出，这意味着两个设备在同一网络上：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ping.png" alt="pir" width="600" height="auto"/></p>

:::

##### Windows 系统

- **步骤 1.** 打开 **Command Prompt** 并输入以下内容

```sh
ssh pi@raspberrypi.local
```

- **步骤 2.** 对于提示输入 **yes**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows-prompt.png" alt="pir" width="750" height="auto"/></p>

- **步骤 3.** 输入密码如下

```sh
raspberry
```

- **步骤 4.** 如果您已成功登录到 Raspberry Pi OS，您将看到以下输出

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows.png" alt="pir" width="1000" height="auto"/></p>

##### Mac/Linux 系统

- **步骤 1.** 在计算机上打开 **Terminal** 并输入以下内容

```sh
# ssh username@hostname
ssh pi@raspberrypi.local
```

- **步骤 2.** 对于以下消息输入 **yes**

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **步骤 3.** 当要求输入密码时，输入以下内容

```sh
# password for user
raspberry
```

- **步骤 4.** 如果您已成功登录到 Raspberry Pi OS，您将看到以下输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

### 刷写新 Raspbian OS 后安装 reComputer R1000 驱动程序

reComputer R1000 开箱即用地预装了必要的驱动程序，因此您无需安装任何额外的驱动程序。但是，如果您自己刷写新的操作系统，则需要单独安装必要的驱动程序。

:::tip

**对于安装 32 位操作系统驱动程序，请仔细按照以下步骤操作：**

reComputer R1000 上预装的操作系统是 64 位的，如果您希望安装 32 位操作系统，请使用以下方法安装 DTS 驱动程序。

请按照[**通过 SSH 访问 reComputer R1000**](#access-recomputer-r1000-via-ssh)步骤，然后输入以下命令：

```sh
echo arm_64bit=0 | sudo tee -a /boot/config.txt
```

然后继续[**刷写新 Raspbian OS 后安装驱动程序过程**](#install-recomputer-r1000-drivers-after-flashing-new-raspbian-os)

:::

- **步骤 1.** 在您从上述步骤连接到 reComputer R1000 的 ssh shell 中克隆以下仓库

```sh
sudo apt install git -y
git clone --depth 1 https://github.com/Seeed-Studio/seeed-linux-dtoverlays
```

- **步骤 2.** 进入仓库

```sh
cd seeed-linux-dtoverlays
```

- **步骤 3.** 输入以下命令来安装驱动程序

```sh
sudo ./scripts/reTerminal.sh --device reComputer-R100x
```

<!-- You will see the following output if you have successfully installed the drivers

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/driver-success.png" alt="pir" width="1000" height="auto"/></p> -->

- **步骤 4.** 重启 reComputer R1000

```sh
sudo reboot
```

此过程将确保您的驱动程序在更新固件之前是最新的。
:::tip
<div style={{ color: 'red', fontWeight: 'bold' }}>
  注意：对于 reComputer R1000 V1.0，重启后需要更改 /boot/firmware/config.txt 文件并输入以下命令：
</div>
:::

```shell
 sudo nano /boot/firmware/config.txt
```

将文件的最终内容修改为：

```shell
  enable_uart=1
  dtoverlay=dwc2,dr_mode=host
  dtoverlay=vc4-kms-v3d
  dtoverlay=reComputer-R100x,uart2
```

然后重启：

```shell
  sudo reboot
```

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您在使用我们的产品时能够拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
