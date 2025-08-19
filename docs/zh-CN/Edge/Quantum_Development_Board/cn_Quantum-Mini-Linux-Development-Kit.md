---
description: Quantum Mini Linux 开发套件
title: Quantum Mini Linux 开发套件
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Quantum-Mini-Linux-Development-Kit
last_update:
  date: 2/1/2023
  author: jianjing Huang
---

# Quantum Mini Linux 开发套件

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/Quantum-Mini-Linux-Dev-Kit.png"/></div>

**Quantum Mini Linux 开发套件**可能是市场上最小的 Linux 开发板，这是一款高度集成的套件，配备四核 CPU，能够在仅 **40mm x 35mm** 的尺寸下运行 Linux，同时还包括网络连接功能。它适用于个人服务器、智能语音助手以及机器人开发等场景。

该 SoM 被称为 **Quark-N，基于 Allwinner H3，四核 Cortex-A7 和 ARM Mali400 MP2 GPU**。采用 6 层高密度金 PCB 设计，将完整的 ARM-Linux 系统（CPU、DDR、eMMC）集成在 2x3cm 的空间内。此外，大部分 GPIO 通过 M.2 Key-A 金手指接口由板子引出，以最大限度地降低底板设计难度。您可以轻松使用两层板设计自己的底板，实现您的创意。

<div align="center"><img src="https://files.seeedstudio.com/products/114992462/connection.png"/></div>

载板被称为 **Atom-N，Quark-N 通过 M.2 接口连接到 Atom-N**。Atom-N 引出一排金手指引脚以实现 I/O 扩展，**扩展 SPI、I2C、UART、GPIO 和其他接口，方便完成您自己的设计**。此外，它配备了 **麦克风、MPU6050 运动传感器（加速度计和陀螺仪）、板载 4 个按钮（GPIO-KEY、Uboot、Recovery、Reset）、IPS 显示屏、Wi-Fi/蓝牙连接，大大扩展了该产品的可能性**。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Quantum-Mini-Linux-Development-Kit-p-4749.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 特性

- 超小型（**31mmx22mm**）且高度集成的四核 Cortex-A7 Linux SoM（模块化系统）。

- 载板（**40mmx35mm**）配备丰富的外设和接口：麦克风、陀螺仪、加速度计、4 个按钮（GPIO-KEY、Uboot、Recovery、Reset）以及 TFT 显示屏。

- 集成完整的 ARM-Linux 系统，用于高级开发。

- **无线连接功能（Wi-Fi + 蓝牙）。**

- 通过 M.2 接口设计您自己的底板。

- 广泛的应用场景，例如个人服务器、智能语音助手和机器人开发。

- 预装 **xrdp 远程桌面服务器**，无需 HDMI 线即可轻松监控控制。

## 规格



<table style={{borderCollapse: 'collapse', borderSpacing: 0}} className="tg"><thead><tr><th style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'normal', overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>规格</th><th style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'normal', overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>详情</span></th></tr></thead><tbody><tr><td style={{backgroundColor: '#c0c0c0', borderColor: 'black', borderStyle: 'solid', borderWidth: 1, color: '#ffffff', fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}} colSpan={2}><span style={{fontWeight: 700, fontStyle: 'normal'}}>Quark-N SoM</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>CPU</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>全志 H3，四核 Cortex-A7 @ 1GHz</td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>GPU</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 'inherit', fontStyle: 'inherit'}}>ARM Mali400 MP2 GPU</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>内存</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>512MB LPDDR3 RAM</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>存储</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>16GB eMMC</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>接口</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>以太网，SPI，I2C，UART，可复用 GPIO，MIC，LINEOUT</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>GPIO</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 'inherit', fontStyle: 'inherit'}}>2.0mm 间距 26 针插针，USB-串口，I2C，UART，SPI，I2S，GPIO</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>PCB</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>6 层高密度沉金设计</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>工作温度</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>0-80°C</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>尺寸</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>31mmx22mm</span></td></tr><tr><td style={{backgroundColor: '#c0c0c0', borderColor: 'black', borderStyle: 'solid', borderWidth: 1, color: '#ffffff', fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}} colSpan={2}><span style={{fontWeight: 'bold'}}>Atom-N 承载板</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>插槽</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>m.2 接口用于 Quark-N</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>USB</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>USB 2.0×2 USB Type-C×1</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>无线连接</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>RTL8723BU:</span><br /><br /><span style={{fontWeight: 400, fontStyle: 'normal'}}>Wi-Fi: IEEE 802.11 b/g/n @2.4GHz</span><br /><br /><span style={{fontWeight: 400, fontStyle: 'normal'}}>蓝牙: BT V2.1/ BT V3.0/ BT V4.0</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>板载外设</span></td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>1 x 麦克风</span><br /><br /><span style={{fontWeight: 400, fontStyle: 'normal'}}>1 x MPU6050 运动传感器（陀螺仪 + 加速度计）</span><br /><br /><span style={{fontWeight: 400, fontStyle: 'normal'}}>4 x 按钮（GPIO-KEY，Uboot，Recovery，Reset）</span><br /><br /><span style={{fontWeight: 400, fontStyle: 'normal'}}>1 x TFT 显示屏</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>外部存储</span></td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>Micro-SD 卡槽</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>尺寸</span></td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>40mm*35mm</span></td></tr></tbody></table>

## 硬件概览

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/hardwareoverview1.png"/></div>

:::tip
Quantum 现已更新至新版本，与旧版本相比，调整了天线类型以提升无线性能。此外，还通过将风扇焊点移至顶部优化了 PCB 布局。同时，Uboot 和 Recovery 按钮已被移除。
:::

## 入门指南

### 硬件需求

- 一台可用的电脑

- [一张 MicroSD 卡](https://www.seeedstudio.com/micro-SD-Card-with-Card-Reader-32GB-Class-10-p-4082.html)（建议至少 16GB）

- 键盘和鼠标

### 下载最新系统镜像

- 在此处下载 **[最新系统镜像](https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/quark-n-21-1-11.zip)**。

> **最新版本**: 2021-1-11
>
> **sha256**: 8f466adf56468b05d622eba27eb7b1a11ef6d4b943272984730a73ddff7cf59a  

:::note
Quantum Mini Linux 开发板的系统镜像是基于 Nano Pi 的镜像修改而来。
:::

### 第一步 - 准备可启动的 MicroSD 卡

格式化 MicroSD 卡。如果您是 Windows 用户，可以通过右键点击 USB 驱动器并选择格式化来完成。

**注意：** 文件系统请选择 `FAT32`。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/formatUSB.png"/></div>

### 第二步 - 下载烧录工具

下载开源烧录工具 [balenaEtcher](https://www.balena.io/etcher/)。根据您的操作系统（Windows/macOS/Linux）下载相应版本。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcher.jpg"/></div>

### 第三步 - 将操作系统镜像写入 USB

选择下载的系统镜像，选择已格式化的 MicroSD 卡，然后点击 Flash！现在，可启动的 MicroSD 卡已经准备就绪。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/flash-img.png"/></div>

### 启动系统

现在，将 MicroSD 卡插入 Atom-N 的 MicroSD 插槽，并**插入 USB Type-C 供电（USB 串口方向）**。

然后，您可以使用 PC 上的任何串口软件打开 USB 串口！您应该能看到系统状态 LED 开始在 **Quark-N**（SoM）上闪烁，并且消息会打印到串口。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/bootup-n.png"/></div>

### 系统默认用户和密码

- **普通用户**：

```sh
用户: pi
密码: quark
```

- **Root 用户**：

```sh
用户: pi
密码: quark
```

## 系统配置

您可以使用 `npi-config` 配置系统镜像的设置，例如用户、系统语言、时区、SSH 等。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/npi-config.png"/></div>

:::note
默认设置已配置完成，如果您不清楚自己在配置什么，请保持默认设置。
:::

## Wi-Fi

### 脚本连接
最新镜像附带了一个 Python 脚本，可以更轻松地连接 Wi-Fi，将 `SSID` 和 `PASSWORD` 替换为您的信息：

```sh
cd ~/WorkSpace/System/net
sudo python connect_wifi.py SSID PASSWORD
```

### 手动连接
这里我们使用 NetworkManager 管理网络，请按照以下步骤连接 Wi-Fi：

- 切换到 root 用户：

```sh
su root
```

- 打开 Wi-Fi：

```sh
nmcli r wifi on
```

- 扫描附近的 Wi-Fi：

```sh
nmcli dev wifi
```

- 连接到指定 Wi-Fi：

```sh
nmcli dev wifi connect "SSID" password "PASSWORD" ifname wlan0
```

其中，`SSID` 和 `PASSWORD` 替换为您的 Wi-Fi 凭据。一旦连接成功，下次会自动连接。

更多关于 NetworkManager 的参考，请阅读 [这里](http://wiki.friendlyarm.com/wiki/index.php/Use_NetworkManager_to_configure_network_settings)。

### 软件更新（可选）

连接网络后，建议更新软件：

```sh
sudo apt-get update
```

## 远程桌面连接

如前所述，系统镜像默认运行 [`xrdp`](https://github.com/neutrinolabs/xrdp) 服务器，因此您可以使用 **[Microsoft Remote Desktop](https://www.microsoft.com/en-us/p/microsoft-remote-desktop/9wzdncrfj3ps?activetab=pivot:overviewtab)**（支持 Windows/macOS）在同一网络内建立远程桌面连接。

- 使用 `ifconfig` 找到开发板的 IP 地址。

- **在同一网络中，输入开发板的 IP 地址并登录**。现在，您可以通过远程桌面控制开发板的桌面了！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/remote-desk.png"/></div>

## 蓝牙

系统镜像内置了蓝牙驱动，您可以按照以下步骤启动蓝牙：

```sh
bluetoothctl
```

进入 `bluetoothctl` 界面后，运行 `scan on` 命令以列出所有附近的蓝牙设备：

```sh
scan on
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/ble-scan.png"/></div>

复制设备的 MAC 地址，然后使用以下命令连接到设备：

```sh
pair A4:xx:xx:xx:xx:30
trust A4:xx:xx:xx:xx:30
connect A4:xx:xx:xx:xx:30
```

现在，您的开发板已连接到蓝牙设备。输入 `quit` 返回终端。在开发板上播放音乐，您将听到蓝牙音箱播放的音乐！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/ble-connect.png"/></div>

## LCD 屏幕

LCD 屏幕的驱动使用 **SPI** 与 CPU 通信，其驱动已内置在系统镜像中，因此在系统启动时，您应该能够看到系统的消息日志：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/LCD.png"/></div>

- 如果将 USB 键盘和鼠标连接到开发板，这将成为最小型的 PC！

- 系统中有一个简单的 pygame 示例，展示了如何通过 Python 使用 LCD。

- 导航到项目所在位置：

```sh
cd WorkSpace/PyGame
```

- 运行示例：

```sh
sudo python hello_world.py
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/pygame.png"/></div>

<!-- ## IMU

TMP -->

## 麦克风

Atom-N（载板）上还内置了一个麦克风，这使得它具备机器学习能力！对于简单测试，可以使用系统镜像中预装的 **Audacity** 软件。

- 使用远程桌面登录开发板。

- 打开 **Audacity** 软件。

- 开始录音并对麦克风讲话，您应该能看到声波！

:::note
    您还可以在终端中使用 `arecord -l` 查看麦克风信息。
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/mic.png"/></div>

如果需要基于麦克风进行进一步开发，请查看路径 `WorkSpace/WuKong`，其中包含使用 **[WuKong Robot](https://github.com/wzpan/wukong-robot)** 和 [**snowboy**](https://github.com/Kitt-AI/snowboy) 的示例。

## GPIO

对于 GPIO 的访问，由于基于 Linux 的系统，这非常方便，可以轻松使用 Python 进行控制。

- 导航到项目位置：

```sh
cd WorkSpace/GPIO
```

- 运行 GPIO 示例：

```sh
sudo python gpio_key_led.py
```

现在，您可以按下用户按钮，应该能够在串口中看到输出，并且 Quark-N (SoM) 上的 LED 会变暗！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/gpio.png"/></div>

:::note
    LED 位于 Quark-N (SoM) 上，并未引出到 Atom-N (载板) 上。
:::

## OpenCV

系统镜像中还集成了 **OpenCV**，并准备了一个使用 USB 摄像头的面部检测演示。

- 您需要一个 USB 摄像头。将 USB 摄像头连接到开发板的 USB A 端口。

- 导航到项目位置：

```sh
cd WorkSpace/OpenCV
```

- 运行演示：

```sh
python FaceDetectOnTft.py
```

您应该能在开发板的 LCD 屏幕上看到视频流！

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/facedetect.png"/></div>

## 其他

在 `WorkSpace` 中还有更多开发板的示例用法，例如 **TensorFlow Lite**、**[WuKong Robot](https://github.com/wzpan/wukong-robot)**、[**snowboy**](https://github.com/Kitt-AI/snowboy) 等。请导航到相应路径，了解更多内容！

## 常见问题

### Q1: 如何安装风扇为开发板降温？

我们计划在不久的将来为该产品发布风扇和风扇支架。然而，目前我们已经发布了 [风扇支架 DXF 文件](#files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/cooling-case-202006-fan.zip) 供您参考。您可以将一个 20x20x6mm 的风扇安装到该风扇支架上。
<!-- 上述zip文件缺失 -->

风扇支架的安装方式如下：

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/connection-diagram.jpg" alt="pir" width="500" height="auto"/></p>

## 资源

- **[ZIP]** [**Atom Shield N AD**](https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/Atom-Shield-N-AD-files.zip)
- **[ZIP]** [**散热片和支架 3D 文件**](https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/3D%20Files.zip)
- **[ZIP]** [**风扇支架**](#files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/cooling-case-202006-fan.zip)
<!-- 上述zip链接有误 -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>