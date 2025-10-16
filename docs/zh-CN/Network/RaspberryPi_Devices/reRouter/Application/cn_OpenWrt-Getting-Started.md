---
description: OpenWrt 入门指南
title: OpenWRT 入门指南
keywords:
- 软件 OpenWrt
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/OpenWrt-Getting-Started
last_update:
  date: 2023/1/13
  author: jianjing Huang
---



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/openwrt-wiki-thumb.png" alt="pir" width="1000" height="auto"/></p>

OpenWrt 是一个开源的 Linux 操作系统，运行在嵌入式设备/路由器上。它比传统路由器提供了更多的功能、更高的性能和更强的安全性。它拥有一个完全可写的文件系统，并包含一个包管理系统。您可以利用这些包以多种方式适配您的应用程序。

使用 OpenWrt，您可以实现以下功能：

- 在多个设备连接时提高整体网络性能
- 通过直接连接到路由器的外部存储驱动器在设备之间共享文件
- 增强网络安全性
- 在路由器上运行 BitTorrent 客户端
- 将打印机直接连接到路由器以创建网络打印机
- 限制网络中某个设备的带宽使用
- 活跃队列管理
- 实时网络监控
- 创建动态 DNS
- 设置 VPN 客户端或服务器

现在让我们开始在 Raspberry Pi CM4 和 ODYSSEY - X86J4125 的双千兆以太网载板上使用 OpenWrt。

:::note
本指南同样适用于 ODYSSEY - X86J4105。
:::

## 所需硬件

在 Raspberry Pi CM4 和 ODYSSEY - X86J4125 的双千兆以太网载板上使用 OpenWrt 之前，您需要准备以下硬件：

- 1 x [Raspberry Pi CM4 双千兆以太网载板](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html)
- 1 x [带 USB Type-C 电缆的电源适配器 (5V/3A)](https://www.seeedstudio.com/Wall-Adapter-Power-Supply-5VDC-3A-Type-C-p-4103.html)
- 1 x [带电源适配器的 ODYSSEY - X86J4125](https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html)
- 2 x 以太网电缆

## 初始设置

### Raspberry Pi CM4 的双千兆以太网载板

首先，我们将解释如何在 Raspberry Pi CM4 的双千兆以太网载板上安装和设置 OpenWrt。

#### 刷写 OpenWrt 镜像

现在我们需要将 OpenWrt 镜像刷写到载板的 eMMC 存储中，以便它可以在 Raspberry Pi Compute Module 4 上运行。一旦安装了必要的驱动程序，您只需将 CM4 的 USB Type-C 端口连接到您的电脑，它将显示为一个外部驱动器。根据您的操作系统，按照以下步骤操作。

##### 对于 Windows

- **步骤 1.** 从 [这里](https://1drv.ms/u/s!AqG2uRmVUhlSh0NHMLMmQKLyASvi?e=mup3cd) 下载 Seeed 为此载板编译的 **最新 OpenWrt 镜像**

:::note
选择 **openwrt-bcm27xx-bcm2711-rpi-4-ext4-factory.img.gz** 文件
:::

- **步骤 2.** 下载并运行 [此安装程序](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe) 以安装必要的驱动程序和启动工具

- **步骤 3.** 搜索我们安装的 **rpiboot** 工具并打开它

- **步骤 4.** 将跳线连接到 **Boot** 和 **GND** 引脚之间，如下图所示，以启用 BOOT 模式

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/connection.png" alt="pir" width="600" height="auto"/></p>

- **步骤 5.** 通过 USB Type-C 电缆将载板连接到电脑

Windows 现在会找到硬件并安装必要的驱动程序

- **步骤 6.** 打开 **文件资源管理器**，您将看到 Compute Module 4 的 eMMC 显示为 **USB 大容量存储设备**

- **步骤 7.** 通过访问 [此链接](https://www.balena.io/etcher) 根据您的操作系统下载 **balenaEtcher** 软件

- **步骤 8.** 以 **管理员** 身份运行 **balenaEtcher**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/balena-home.jpg" alt="pir" width="650" height="auto"/></p>

- **步骤 9.** 点击 **Flash from file** 并指向您之前下载的 OpenWrt 镜像文件

- **步骤 10.** 点击 **Select target** 并选择连接的 eMMC 驱动器

- **步骤 11.** 最后，点击 **Flash!**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/OpenWrt/balena-finish.jpg" alt="pir" width="650" height="auto"/></p>

请等待几分钟，直到刷写过程完成。

##### 对于 Mac/Linux

- **步骤 1.** 从 [这里](https://1drv.ms/u/s!AqG2uRmVUhlSh0NHMLMmQKLyASvi?e=mup3cd) 下载 Seeed 为此载板编译的 **最新 OpenWrt 镜像**

:::note
选择 **openwrt-bcm27xx-bcm2711-rpi-4-ext4-factory.img.gz** 文件
:::

- **步骤 2.** 打开一个 **终端** 窗口并输入以下命令以更新 **软件包列表**

```sh
sudo apt update
```

- **步骤 3.** 通过以下命令安装 **Git**

```sh
sudo apt install git
```

- **步骤 4.** 如果日期未正确设置，Git 可能会产生错误。输入以下命令以纠正日期

```sh
sudo date MMDDhhmm
```

:::note
其中 **MM** 是月份，**DD** 是日期，**hh** 和 **mm** 分别是小时和分钟。
:::

- **步骤 5.** 克隆 **usbboot** 工具仓库

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **步骤 6.** 输入以下命令安装 **libusb**

```sh
sudo apt install libusb-1.0-0-dev
```

:::note
对于 macOS 用户，请参考以下内容：
```
brew install libusb pkg-config
```
:::

- **步骤 7.** 构建并安装 usbboot 工具

```sh
make
```

- **步骤 8.** 运行 usbboot 工具，它将等待连接

```sh
sudo ./rpiboot
```

- **步骤 9.** 将跳线连接到 **Boot** 和 **GND** 引脚之间，如下图所示，以启用编程模式

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/connection.png" alt="pir" width="600" height="auto"/></p>

- **步骤 10.** 通过 USB Type-C 电缆将载板连接到电脑

- **步骤 11.** 通过访问 [此链接](https://www.balena.io/etcher) 根据您的操作系统下载 **balenaEtcher** 软件

- **步骤 12.** 以 **管理员** 身份运行 **balenaEtcher**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/balena-home.jpg" alt="pir" width="650" height="auto"/></p>

- **步骤 13.** 点击 **Flash from file**，并指向之前下载的 OpenWrt 镜像文件

- **步骤 14.** 点击 **Select target** 并选择连接的 eMMC 驱动器

- **步骤 15.** 最后，点击 **Flash!**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/OpenWrt/balena-finish.jpg" alt="pir" width="650" height="auto"/></p>

请等待几分钟，直到烧录过程完成。

#### 双千兆以太网端口连接

当 OpenWrt 成功烧录到适用于 Raspberry Pi CM4 的双千兆以太网载板后，您可以按如下方式将以太网线连接到载板：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/cm4-ports-2.png" alt="pir" width="600" height="auto"/></p>

OpenWrt 镜像已经包含了双千兆端口所需的网络配置，开箱即用，无需手动配置。然而，这里是关于两个端口配置的说明。

一个端口被配置为 **LAN 接口**，另一个端口被配置为 **WAN 接口**。WAN 接口可以连接到互联网，并被配置为 **DHCP 客户端**。另一方面，LAN 接口可以连接到客户端设备，并被配置为 **DHCP 服务器**。

这里的 LAN 接口被配置为静态 IP 地址 **192.168.2.1**。但是，如果您将此 OpenWrt 路由器连接到另一个默认网关 IP 为 192.168.2.1 的路由器，您可能需要更改 LAN 接口上的 IP 地址，否则 OpenWrt 会发生 IP 冲突。请参阅以下 [FAQ](https://wiki.seeedstudio.com/cn/OpenWrt-Getting-Started/#q1-what-if-i-connect-the-openwrt-router-to-my-exisiting-router-which-has-a-default-gateway-ip-of-19216821) 了解更多信息！

### ODYSSEY - X86J4125

接下来我们将解释如何在 ODYSSEY - X86J4125 上安装和设置 OpenWrt。

#### 烧录 OpenWrt 镜像

现在我们需要将 OpenWrt 安装到 ODYSSEY - X86J4125 的 eMMC/HDD/SSD 上，以便它可以在板上运行。为此，我们首先需要使用 OpenWrt 镜像创建一个可启动的 USB。按照以下步骤操作：

- **步骤 1.** 从 [这里](https://1drv.ms/u/s!AqG2uRmVUhlSh0NHMLMmQKLyASvi?e=mup3cd) 下载 Seeed 为此板编译的 **最新 OpenWrt 镜像**

:::note
选择 **openwrt-x86-64-generic-ext4-combined-efi.img.gz** 文件
:::

- **步骤 2.** 将 USB 驱动器插入电脑

- **步骤 3.** 通过访问 [此链接](https://www.balena.io/etcher) 下载适合您操作系统的 **balenaEtcher** 软件

- **步骤 4.** 以 **管理员** 身份运行 **balenaEtcher**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/balena-home.jpg" alt="pir" width="650" height="auto"/></p>

- **步骤 5.** 点击 **Flash from file**，并指向之前下载的 OpenWrt 镜像文件

- **步骤 6.** 点击 **Select target** 并选择连接的 USB 驱动器

- **步骤 7.** 最后，点击 **Flash!**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/OpenWrt/balena-finish.jpg" alt="pir" width="650" height="auto"/></p>

请等待几分钟，直到烧录过程完成。

#### 双千兆以太网端口连接

当 OpenWrt 成功烧录到 USB 驱动器后，您可以按如下方式将以太网线连接到板子：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/odyssey-ports-2.png" alt="pir" width="700" height="auto"/></p>

OpenWrt 镜像已经包含了双千兆端口所需的网络配置，开箱即用，无需手动配置。然而，这里是关于两个端口配置的说明。

一个端口被配置为 **LAN 接口**，另一个端口被配置为 **WAN 接口**。WAN 接口可以连接到互联网，并被配置为 **DHCP 客户端**。另一方面，LAN 接口可以连接到客户端设备，并被配置为 **DHCP 服务器**。

这里的 LAN 接口被配置为静态 IP 地址 **192.168.2.1**。但是，如果您将此 OpenWrt 路由器连接到另一个默认网关 IP 为 192.168.2.1 的路由器，您可能需要更改 LAN 接口上的 IP 地址，否则 OpenWrt 会发生 IP 冲突。请参阅以下 **FAQ** 了解更多信息！

#### 安装 OpenWrt

现在我们已经创建了一个可启动的 USB 驱动器，接下来让我们在 ODYSSEY - X86J4125 上安装 OpenWrt。

- **步骤 1.** 将可启动的 USB 驱动器插入 ODYSSEY 板，并将板连接到显示器和键盘

- **步骤 2.** 打开板子并持续按 **F7** 键进入启动管理器界面

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetup.jpg" alt="pir" width="500" height="auto"/></p>

- **步骤 3.** 选择可启动的 USB 并按 ENTER 键

现在 OpenWrt 将从 USB 驱动器实时运行。

- **步骤 4.** 打开板子，打开一个网页浏览器，在搜索栏中输入 **192.168.2.1**

- **步骤 5.** 当 OpenWrt 门户打开后，导航到 **System > FileTransfer**

- **步骤 6.** 点击 **Choose File** 下的 **Upload**，并选择之前下载的 OpenWrt 镜像

:::note
确保 **.gz** 文件已解压为 **.img** 文件
:::

- **步骤 7.** 点击 **Upload**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/OpenWrt-image-upload.png" alt="pir" width="1000" height="auto"/></p>

现在镜像已保存到 **/tmp/upload/** 目录下。

- **步骤 8.** 导航到 **System > TTYD Terminal**，并使用 **root** 作为用户名登录

- **步骤 9.** 输入 **lsblk** 列出连接的存储设备

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/lsblk.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 10.** 输入以下命令，将 OpenWrt 镜像刷写到连接的存储设备（eMMC/HDD/SSD）

```sh
dd if=/tmp/upload/openwrt-x86-64-generic-ext4-combined-efi.img of=/dev/sda 
```

:::note
**/dev/sda** 对应连接的存储设备
:::
- **步骤 11.** 存储设备刷写完成后，重启开发板，移除 USB 驱动器，设备将从连接的存储设备启动 OpenWrt。

## 运行 OpenWrt

现在我们已经完成了 OpenWrt 软件和双千兆以太网端口的设置，接下来将运行 OpenWrt 于 Raspberry Pi CM4 和 ODYSSEY - X86J4125 的双千兆以太网载板上。本节不会根据两块板子进行划分，因为它们都具有相同的 OpenWrt 功能以及相同的 Web 界面。

当以太网线缆连接完成并刷写了 OpenWrt 镜像后，请按照以下步骤操作：

- **步骤 1.** 打开开发板电源

- **步骤 2.** 打开一个网页浏览器并输入 **192.168.2.1**

此时您将看到 OpenWrt Luci Web 界面。Seeed 编译的 OpenWrt 镜像包含了许多开箱即用的软件包，因此您可以使用这些软件包实现许多应用！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/OpenWrt-UI.png" alt="pir" width="1000" height="auto"/></p>

## 运行 R23.5 OpenWrt

我们为 Rerouter 更新了最新版本的 OpenWrt，即 R23.5 版本。如果您想使用最新版本的 OpenWrt，可以选择以下镜像。

[R23.5 OpenWrt 镜像](https://firmware-selector.openwrt.org/?version=23.05.2&target=bcm27xx%2Fbcm2711&id=rpi-4)

当以太网线缆连接完成并刷写了 OpenWrt 镜像后，请按照以下步骤操作：

- **步骤 1.** 打开开发板电源

- **步骤 2.** 打开一个网页浏览器并输入 **192.168.1.1**

```text
账号: root
密码: password
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/R24.7OP-UI.png" alt="pir" width="1000" height="auto"/></p>

## 网络速度测试

最后，我们将测试安装了 OpenWrt 的 Raspberry Pi CM4 和 ODYSSEY - X86J4125 双千兆以太网载板的网络速度。

### 双千兆载板作为服务器，ODYSSEY 作为客户端

我们首先将双千兆以太网载板用作服务器，ODYSSEY - X86J4125 用作客户端进行网络测试。

:::note
请确保通过[此链接](https://wiki.seeedstudio.com/cn/OpenWrt-Getting-Started/#q1-what-if-i-connect-the-openwrt-router-to-my-exisiting-router-which-has-a-default-gateway-ip-of-19216821)将 ODYSSEY 板的 LAN 接口 IP 地址更改为 **192.168.3.1**
:::

- **步骤 1.** 按如下方式连接开发板

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/speed-cm4-server.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 2.** 打开网页浏览器，登录到两块开发板，并按以下方式进入终端：

**双千兆以太网载板**

- 在网页浏览器搜索框中输入 **192.168.2.1**

- 导航到 **System > TTYD Terminal**，使用用户名 **root** 登录

**ODYSSEY - X86J4125/X86J4105**

- 在网页浏览器搜索框中输入 **192.168.3.1**

- 导航到 **System > TTYD Terminal**，使用用户名 **root** 登录

:::note
请确保两个设备的 LAN 接口不在同一 IP 范围内
:::
- **步骤 3.** 在两个设备上安装 **iperf3** 网络性能测试工具

```sh
opkg update
opkg install iperf3
```

- **步骤 4.** 在双千兆以太网载板的 **TTYD Terminal** 窗口中，输入以下命令以服务器模式启动 iperf3

```sh
iperf3 -s
```

- **步骤 5.** 在 ODYSSEY - X86J4125 的 **TTYD Terminal** 窗口中，输入以下命令以客户端模式启动 iperf3 并连接到之前创建的服务器

```sh
iperf3 -c 192.168.2.1
```

:::note
这里填写的是双千兆载板服务器的 IP 地址
:::

现在您将看到如下的网络速度测试结果

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/TTYD-CM4-server.png
" alt="pir" width="1000" height="auto"/></p>

:::note
您可以看到速度接近 1Gbps
:::

### ODYSSEY 作为服务器，双千兆载板作为客户端

现在我们将 ODYSSEY - X86J4125 用作服务器，双千兆以太网载板用作客户端进行网络测试。

- **步骤 1.** 按如下方式连接开发板

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/speed-odyssey-server.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 2.** 在 ODYSSEY - X86J4125 的 **TTYD Terminal** 窗口中，输入以下命令以服务器模式启动 iperf3

```sh
iperf3 -s
```

- **步骤 3.** 在双千兆以太网载板的 **TTYD Terminal** 窗口中，输入以下命令以客户端模式启动 iperf3 并连接到之前创建的服务器

```sh
iperf3 -c 192.168.3.1
```

:::note
这里填写的是 ODYSSEY-X86 服务器的 IP 地址
:::

现在您将看到如下的网络速度测试结果

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/TTYD-X86-server.png" alt="pir" width="1000" height="auto"/></p>

:::note
您可以看到速度接近 1Gbps
:::

## 常见问题解答
有关详细信息，请点击 [**这里**](/cn/FAQs_For_openWrt)

## 资源

- **[网页]** [OpenWrt 官方文档](https://openwrt.org)

- **[GitHub]** [Seeed OpenWrt](https://github.com/Seeed-Studio/seeed-linux-openwrt)

- **[OneDrive]** [Seeed OpenWrt 镜像](https://1drv.ms/u/s!AqG2uRmVUhlSh0NHMLMmQKLyASvi?e=mup3cd)

- **[下载]** [R23.5 OpenWrt 镜像](https://firmware-selector.openwrt.org/?version=23.05.2&target=bcm27xx%2Fbcm2711&id=rpi-4)


## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>