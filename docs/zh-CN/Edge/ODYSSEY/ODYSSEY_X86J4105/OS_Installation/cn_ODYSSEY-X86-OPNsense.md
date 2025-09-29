---
description: ODYSSEY - X86J4105
title: OPNsense 安装
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ODYSSEY-X86-OPNsense
last_update:
  date: 01/03/2023
  author: w0x7ce

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/1.png" alt="pir" width={1000} height="auto" /></p>

本指南将向您解释如何通过安装 OPNsense 将 ODYSSEY-X86 转变为软件路由器和防火墙。让我们开始吧！

## 什么是 OPNsense？

[OPNsense](https://opnsense.org) 是一个基于 FreeBSD 操作系统的开源防火墙和路由软件，由 Deciso 开发。它是 pfSense 的一个分支，而 pfSense 又是从 m0n0wall 分支出来的。OPNsense 于 2015 年 1 月推出。它具有基于 Web 的 GUI，并支持 x86-64 平台。它不仅可以作为防火墙，还具有流量整形、负载均衡和虚拟专用网络功能。此外，还可以通过插件添加其他功能。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/25.png" alt="pir" width={300} height="auto" /></p>

## 前置条件

- [ODYSSEY-X86](https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html)
- 大于 1GB 的 USB 闪存驱动器
- 2 根以太网线和一个可以访问互联网的路由器
- 外部存储介质（如果您使用内置 eMMC 的 ODYSSEY-X86，也可以使用它）

  - NVMe SSD 或
  - SATA SSD 或
  - SATA HDD 或
  - Micro-SD 卡 或
  - 大于 1GB 的 USB 闪存驱动器

## 开始

现在让我们逐步完成在 ODYSSEY-X86 上安装 OPNsense 的过程。

### 将 OPNsense 镜像写入 USB 闪存驱动器

- **步骤 1.** 访问[此链接](https://opnsense.org/download)打开 OPNsense 的下载页面

- **步骤 2.** 选择 **amd64** 作为架构，**vga** 作为镜像类型，选择 **any** 镜像位置并点击 **Download**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/2.png" alt="pir" width={550} height="auto" /></p>

- **步骤 3.** 解压 **.bz2** 文件以获取 **.img** 文件

- **步骤 4.** 通过访问[此链接](https://www.balena.io/etcher)下载并安装适合您操作系统的 **BalenaEtcher**，然后打开它

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/3.jpg" alt="pir" width={1000} height="auto" /></p>

- **步骤 5.** 将 USB 闪存驱动器连接到您的电脑，点击 **Flash from file**，选择之前下载/解压的文件，点击 **Select target**，选择已连接的 USB 闪存驱动器并点击 **Flash**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/4.png" alt="pir" width={1000} height="auto" /></p>

### 从闪存驱动器启动 OPNsense 并安装到外部驱动器

- **步骤 1.** 将之前写入 OPNsense 镜像的 USB 闪存驱动器连接到 ODYSSEY-X86 的一个 USB 端口

- **步骤 2.** 连接一个外部存储驱动器以安装 OPNsense。ODYSSEY-X86 提供多种存储选项，例如：

  - NVMe SSD
  - SATA SSD
  - SATA HDD
  - Micro-SD 卡
  - 大于 1GB 的 USB 闪存驱动器

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/X86-external-storage.png" alt="pir" width={650} height="auto" /></p>

- **步骤 3.** 打开 ODYSSEY-X86 并连续按 **DELETE** 键进入 BIOS

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/5.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 4.** 转到 **Boot** 选项卡，选择 **Boot Option #1** 并选择 **UEFI: USB, Partition 1**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/6.jpg" alt="pir" width={1000} height="auto" /></p>

- **步骤 5.** 转到 **Save & Exit** 选项卡，选择 **Save Changes and Reset** 并在弹出窗口中选择 **Yes**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/8.jpg" alt="pir" width={1000} height="auto" /></p>

现在 ODYSSEY-X86 将从 USB 闪存驱动器启动到 OPNsense，如果启动成功，您将看到以下输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/9.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 6.** 在 **login:** 提示符下输入 **installer**，密码输入 **opnsense**，进入安装页面

- **步骤 7.** 选择 **Continue with default keymap**（默认选项）并按 **ENTER**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/10.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 8.** 选择 **Install (UFS)**（默认选项）并按 **ENTER**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/11.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 9.** 选择已连接的外部驱动器并按 **ENTER**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/12.png" alt="pir" width={1000} height="auto" /></p>

现在它将开始在连接的外部驱动器上安装 OPNsense

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/13.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 10.** 安装完成后，它会要求您更改 **root 密码**。这是 **推荐的**。在窗口中按 **ENTER** 并更改 root 密码

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/14.png" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/15.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 11.** 选择 **Complete Install** 并按 **ENTER** 重新启动

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/16.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 12.** 当系统再次启动时，移除 USB 闪存驱动器，进入 BIOS，选择连接的外部驱动器作为启动设备并再次启动

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/17.png" alt="pir" width={1000} height="auto" /></p>

现在，ODYSSEY-X86 将从外部驱动器启动进入 OPNsense，如果启动成功，您将看到以下输出：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/9.png" alt="pir" width={1000} height="auto" /></p>

### 设置 OPNsense

#### 更改 LAN 接口 IP 地址

默认情况下，OPNsense 会将 LAN 接口分配为 **192.168.1.1**，并启用 **DHCP 服务器**。如果您的路由器 IP 地址也是 192.168.1.1（大多数路由器使用此 IP），您可能需要更改 OPNsense 的 LAN IP。因此，我们需要先完成此操作。

但是，如果您的路由器的 IP 地址与 192.168.1.1 不同，您可以跳过此部分，直接进入下一部分 **硬件配置**。

- **步骤 1.** 在 **login:** 提示符下输入 **root** 登录 **root 账户**，然后输入您之前设置的密码。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/18.png" alt="pir" width={1000} height="auto" /></p>

- **步骤 2.** 按以下步骤设置配置：

  - 输入 **2** 设置接口 IP 地址
  - 输入 **1** 选择 LAN 作为要配置的接口
  - 输入 **N** 表示不通过 DHCP 配置 IPv4 地址的 LAN 接口
  - 输入 **192.168.2.1** 作为新的 LAN IPv4 地址（您可以在此输入任何您选择的 IP 地址）
  - 输入 **24** 作为新的 LAN IPv4 子网位数
  - 按 **ENTER** 配置 LAN，而不是 WAN
  - 按 **ENTER** 跳过通过 WAN 跟踪配置 IPv6 地址的 LAN 接口
  - 输入 **y** 启用 LAN 上的 DHCP 服务器
  - 输入 **192.168.2.1** 作为 IPv4 客户端地址范围的起始地址
  - 输入 **192.168.2.254** 作为 IPv4 客户端地址范围的结束地址
  - 输入 **N** 表示不将 Web GUI 协议从 HTTPS 更改为 HTTP
  - 输入 **N** 表示不生成新的自签名 Web GUI 证书
  - 输入 **N** 表示不恢复 Web GUI 访问默认设置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/20.png" alt="pir" width={1000} height="auto" /></p>

完成后，您将看到以下输出：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/21.png" alt="pir" width={1000} height="auto" /></p>

#### 硬件配置

通过两根以太网线将 ODYSSEY-X86 的两个以太网端口分别连接到 PC（客户端）和路由器，如下图所示：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/22.png" alt="pir" width={1000} height="auto" /></p>

完成后，您的 PC 将能够通过新设置的 OPNsense 路由器连接到互联网！

#### OPNsense 图形用户界面（GUI）

在网页浏览器中输入 **192.168.2.1**，并通过输入您之前指定的 root 账户详细信息登录到 OPNsense 的 Web GUI。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/24.png" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/1.png" alt="pir" width={1000} height="auto" /></p>

在这里，您可以根据需要配置许多设置，详情请访问 [OPNsense 官方文档](https://docs.docker.com)!

## 社区

<iframe width={560} height={315} src="https://www.youtube.com/embed/_IzyJTcnPu8" title="YouTube 视频播放器" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## 资源

- **[网页]** [OPNsense 官方文档](https://docs.docker.com)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>