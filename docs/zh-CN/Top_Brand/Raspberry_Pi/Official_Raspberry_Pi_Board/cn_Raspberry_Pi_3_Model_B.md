---
description: Raspberry Pi 3 Model B
title: Raspberry Pi 3 Model B
keywords:
- Raspberry_Pi
- Official_Raspberry_Pi_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Raspberry_Pi_3_Model_B
last_update:
  date: 2/15/2023
  author: jianjing Huang
---
<!-- ---
name: Raspberry Pi getting started
category: MakerPro
bzurl: https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html
oldwikiname:  Raspberry Pi 3 Model B
prodimagename:  rpi4.png
surveyurl: https://www.research.net/r/Raspberry_Pi_3_Model_B
sku:     110061131
--- -->

**Raspberry Pi®** 是一款基于 **ARM** 架构的信用卡大小的 **SBC**（单板计算机），由 [Raspberry Pi Foundation](http://www.raspberrypi.org) 创建。Raspberry Pi 运行基于 Debian 的 **GNU/Linux** 操作系统 [Raspberry Pi OS](https://www.raspberrypi.org/downloads/raspberry-pi-os/)，并且存在许多其他操作系统的移植版本。

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_3_Model_B/img/rpi4.png)

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html)

## 入门指南

### 需求

- [Raspberry Pi 4](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html)/[3B+](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B--p-3037.html)/[3B](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)/[3](https://www.seeedstudio.com/Raspberry-Pi-Compute-Module-3-p-2848.html)/[3A+](https://www.seeedstudio.com/Raspberry-Pi-3-Model-p-3216.html)/[2B](https://www.seeedstudio.com/Raspberry-Pi-2-Model-B-w-ARMv7-Quad-Core-1GB-RAM-p-2289.html)/[B](https://www.seeedstudio.com/Raspberry-Pi-Model-B-p-1634.html)/[Zero](https://www.seeedstudio.com/Raspberry-Pi-Zero-p-4254.html)
- Wi-Fi 网络/移动热点
- 4GB（或更大）SD 卡和 SD 读卡器
- PC 或 Mac
- 5V 3A USB 适配器用于电源供应（可选）
- 一根 USB-C 数据线（我们以 Pi 4 为例）

:::note
请轻柔地插入 USB 线缆，否则可能会损坏接口。请使用内部有 4 根线的 USB 线缆。内部只有 2 根线的 USB 线缆无法传输数据。如果您不确定您的线缆规格，可以在[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买。
:::

### 从 SD 卡启动

#### 如何烧录 Raspberry Pi OS

**1. Raspberry Pi OS Stretch 下载**

从 Raspberry Pi 官方网站下载 [Raspberry Pi OS](https://www.raspberrypi.org/downloads/raspberry-pi-os/)，选择"with desktop and recommended software"版本。

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_3_Model_B/img/rspberrypios.png)

**2. Etcher**

点击这里下载 <a href="https://etcher.io/">Etcher</a>，使用 Etcher 直接将 ```*.img.xz``` 文件烧录到您的 SD 卡。或者将 ```*.img.xz``` 文件解压为 ```*.img``` 文件，然后使用其他镜像写入工具烧录到 SD 卡。
<br />

- 点击加号图标添加您刚下载的镜像，软件会自动选择您插入的 SD 卡。然后点击 Flash! 开始烧录。大约需要 10 分钟完成。
- 退出镜像写入工具并弹出 SD 卡。
- 将镜像写入 SD 卡后，将 SD 卡插入 Raspberry Pi。使用 USB 适配器和 USB-C 接口为其供电。在写入过程中不要移除 SD 卡。Raspberry Pi 将从 SD 卡启动。

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_3_Model_B/img/etcher.png)

#### 基本配置

**无线连接和 SSH**

**1.** 在 /boot 文件夹中创建一个名为"wpa_supplicant.conf"的文件，并复制以下代码。

```txt
country=CN
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
 
network={
ssid="WiFi-name"
psk="WiFi-password"
key_mgmt=WPA-PSK
priority=1
}
```

:::note
Wi-Fi 名称和密码应与您的 PC 连接的本地 Wi-Fi 相同（确保您的 PC 和 Raspberry Pi 在同一局域网中）。
:::

**2.** 在 /boot 文件夹中创建一个名为"ssh"的空白文件。

**3.** 将带有 Raspberry Pi OS 的 SD 卡插入 Raspberry Pi。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/sd_card.jpg)

**4.** 将 Raspberry Pi 连接到电源并开机。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/power.jpg)

**5.** 打开 putty 连接 PC 到 Raspberry Pi。

下载 putty：[https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss3.png)

**Raspberry Pi**
默认用户名：pi
默认密码：raspberry

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss4.jpg)

**VNC 配置**

**1.** 在终端中输入以下命令打开 raspi-config。

```bash
sudo raspi-config
```

向下箭头到 5 interfacing Options 并按"回车"选择。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss5.png)

向下箭头到 P3 VNC 并按"回车"选择。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss6.png)

选择"Yes"启用它。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss7.png)

选择"Ok"。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss8.png)

**2.** 安装 VNC Viewer

下载 [VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss9.png)

打开 VNC Viewer 并输入 Raspberry Pi 的 IP 地址。您可以在 Raspberry Pi 的终端中输入 `ifconfig` 命令找到 IP 地址（或者您可以输入 raspberrypi.local）。

:::note

如果您使用 raspberrypi.local 登录您的 Pi，您应该确保在您的局域网中只有一个 Raspberry Pi 在使用。
:::

输入默认用户名和密码，现在您可以进入 Raspberry Pi 的远程桌面了！

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss10.png)

成功！

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss11.PNG)

## UART 启用

- 启用 miniuart-bt

## 与 GrovePi 配合使用

请参考 [Grove Base Hat for Raspberry Pi wiki](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/)。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>