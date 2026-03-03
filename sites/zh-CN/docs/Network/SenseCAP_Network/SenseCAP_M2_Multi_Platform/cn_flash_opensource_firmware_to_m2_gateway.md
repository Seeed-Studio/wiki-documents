---
description: 本 wiki 将指导您如何为 M2 网关刷写开源 LoRaWAN® 固件。基于开源 LoRaWAN® 固件，您可以深度定制您的 M2 网关。
title: 为 M2 网关刷写开源固件
image: https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/m2-white.webp
slug: /cn/flash_opensource_firmware_to_m2_gateway
last_update:
  date: 4/22/2025
  author: Leo
---

SenseCAP M2 网关代表了 LoRa 网关的经济高效解决方案，采用成熟的硬件解决方案 MT7628 和 Semtech SX1302 基带长距离芯片。具体型号通过出厂设置的频段（EU868/US915/AS923/AU915）、可选模块（4G/GPS）和支持的 LoRa 网络（LoRaWAN®/Helium 网络）来区分

本 wiki 将指导您如何为 M2 网关刷写开源固件。基于开源固件，您可以深度定制您的 M2 网关，例如添加额外功能或更改工作频段（天线需要适配频段）

:::danger 警告
刷写开源固件后，您**无法**恢复到**出厂固件**。

Seeed studio **不承担**用户**使用开源固件或第三方固件**对设备造成的任何损坏责任。
:::

## 支持产品列表

- <a  href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html" target="_blank"><span> <b>M2 多平台 LoRaWAN 室内网关（SX1302）</b></span></a>
- <a  href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-4G-EU868-p-5599.html" target="_blank"><span> <b>M2 多平台 LoRaWAN 室内网关（SX1302-4G）</b></span></a>
- <a  href="https://www.seeedstudio.com/SenseCAP-M2-Data-Only-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5339.html" target="_blank"><span> <b>M2 纯数据 LoRaWAN 室内网关（SX1302）</b></span></a>

:::note
由于硬件差异，为 Helium M2 网关（型号：`114992751`、`114992752`、`114992755`、`114992808`、`114992826`、`114992828`）刷写开源固件不仅需要固件镜像，还需要相应的 U-Boot 引导程序。详细说明请参考**刷写 U-Boot** 部分。
:::

## 准备固件

### 下载预编译固件

如果您想方便地体验开源固件，我们提供了一些编译好的固件。您可以从 <a  href="https://github.com/Seeed-Solution/LoRa_Gateway_OpenWRT/releases" target="_blank"><span> Seeed-Solution/LoRa_Gateway_OpenWRT/Release</span></a> 下载

:::tip 注意
检查 .bin 文件的后缀以验证固件是否与您的 M2 网关兼容

例如，**openwrt-...-EU868-4G.bin** 固件是为**在 EU868 频段工作且带有 4G 模块**的 M2 网关编译的
:::

### 构建您的固件

如果您的网关与我们的预编译固件不兼容，或者您想进一步开发，可以按以下方式构建自己的固件

要构建自己的固件，您需要一个 **GNU/Linux、BSD 或 MacOSX 系统**（需要区分大小写的文件系统）。不支持 Cygwin，因为缺乏区分大小写的文件系统

**步骤 1：** 从 <a  href="https://github.com/Seeed-Solution/LoRa_Gateway_OpenWRT" target="_blank"><span> Seeed-Solution/LoRa_Gateway_OpenWRT</span></a> 克隆源代码

```git
git clone https://github.com/Seeed-Solution/LoRa_Gateway_OpenWRT.git
```

**步骤 2：** 安装必备软件包，请参考 <a  href="https://openwrt.org/docs/guide-developer/toolchain/install-buildsystem" target="_blank"><span> 构建系统设置</span></a>

:::caution 注意
请使用**非 root** 用户执行以下步骤。
:::

**步骤 3：** 进入源代码文件夹，运行 `./scripts/feeds update -a` 获取 feeds.conf / feeds.conf.default 中定义的所有最新软件包定义

**步骤 4：** 运行 `./scripts/feeds install -a` 为所有获取的软件包安装符号链接到 package/feeds/

**步骤 5：** 运行 `cp diffconfig-sensecap-general .config` 使用 SenseCAP 差异文件，然后运行 `make defconfig` 展开完整配置

**步骤 6：** 运行 `make menuconfig` 选择您的 SenseCAP 硬件信息

- SenseCAP Hardware->Have 4G（是否包含 4G 硬件）

- SenseCAP Hardware->Have GPS（是否包含 GPS 硬件）

- SenseCAP Hardware->REGION（选择您的默认区域）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource2.png" alt="pir" width={800} height="auto" /></p>

**步骤 7：** 运行 `make` 构建您的固件

这将下载所有源代码，构建交叉编译工具链，然后为您的目标系统交叉编译 GNU/Linux 内核和所有选择的应用程序

编译完成后，您可以在 `<prj>/bin/targets/ramips/mt76x8/` 目录中找到名为 `openwrt-21.02.0-ramips-mt76x8-sensecap_wm7628n-squashfs-sysupgrade.bin` 的固件

## 刷写固件

您可以通过三种方式之一将固件刷写到网关中

### 通过 Luci 刷写固件

登录 Luci 并导航到 **System** > **Backup/Flash Firmware**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource5.png" alt="pir" width={800} height="auto" /></p>

向下滚动并导航到 **Local upgrade**，点击 **Flash image...**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource6.png" alt="pir" width={800} height="auto" /></p>

浏览文件夹并上传固件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource7.png" alt="pir" width={800} height="auto" /></p>

上传完成后，确认上传的固件信息正确，然后点击 **Continue**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource8.png" alt="pir" width={800} height="auto" /></p>

之后，网关将开始安装固件，LED 将进入橙色慢闪状态，直到安装完成。

### 通过 TFTP 刷写固件

开始之前，您需要在计算机上安装 TFTP 服务器工具，并将固件放在适当的目录中。

**步骤 1：** 使用 Type-C 线缆将设备连接到计算机，并使用网线将设备和计算机置于同一局域网中。

**步骤 2：** 使用名为 `USB-SERIAL CH340` 的串口连接设备，**波特率为 57600**。

**步骤 3：** 重启设备。当设备进入 uboot 时，**选择命令 2** 进入系统更新。

**步骤 4：** 输入**设备 IP**，设备 IP 网段必须是您自己网络的网段；输入**服务器 IP**，即您计算机的 IP，并输入**要刷写的固件名称**（必须包含文件后缀）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource3.png" alt="pir" width={800} height="auto" /></p>

**步骤 5：** 等待固件更新完成。网关将开始安装固件，LED 将进入橙色慢闪状态，直到安装完成。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource4.png" alt="pir" width={800} height="auto" /></p>

### 通过串口刷写固件

:::tip
在开始以下步骤之前，我们建议下载最新版本的 [TeraTerm](https://github.com/TeraTermProject/teraterm/releases)，因为本 wiki 中的以下操作都基于 TeraTerm。
:::

**步骤 1：** 使用 Type-C 线缆将设备连接到计算机。

**步骤 2：** 使用名为 `USB-SERIAL CH340` 的串口连接设备，**波特率为 57600**。

**步骤 3：** 重启设备。当设备进入 uboot 时，**选择命令 0** 进入系统更新。

**步骤 4：** 将波特率切换到 230400，然后按 ENTER。设备将提示 `Ready for binary (kermit) download to 0x80100000 at 230400 bps...`

**步骤 5：** 使用 kermit 协议上传固件。Teraterm 提供了 kermit 传输工具。您可以参考下图上传固件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource12.png" alt="pir" width={800} height="auto" /></p>

**步骤 6：** 等待固件上传完成，之后设备将提示 `Switch baudrate to 57600 bps and press ESC...`。按照设备提示操作。然后设备将自动安装固件并重启。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource11.png" alt="pir" width={800} height="auto" /></p>

## 刷写 U-Boot

:::note
当为 Helium M2 LoRaWAN 室内网关刷写开源固件时，请确保您也[下载](https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/uboot_v1.1.3-8-general.bin)并刷写相应的 U-Boot 镜像到设备。此步骤是网关正常工作所必需的。
:::

### 通过串口刷写固件

**步骤 1：** 使用 Type-C 线缆将设备连接到计算机。

**步骤 2：** 使用名为 `USB-SERIAL CH340` 的串口连接设备，**波特率为 57600**。

**步骤 3：** 重启设备。当设备进入 U-Boot 时，选择 `Command 7` 进入系统更新。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/flash_uboot_1.png" alt="pir" width={800} height="auto" /></p>

**步骤 4：** 使用 kermit 协议上传固件。Teraterm 提供了 kermit 传输工具。您可以参考下图上传 U-Boot。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource12.png" alt="pir" width={800} height="auto" /></p>

**步骤 5：** 等待刷写完成并重启设备。当设备进入 U-Boot 时，选择 `Command 4` 进入 U-Boot 命令。然后输入 `spi erase 0x50000 0x1FB0000` 来擦除后续的块。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/flash_uboot_2.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/flash_uboot_3.png" alt="pir" width={800} height="auto" /></p>

然后您可以重启设备并按照**刷写固件**部分的说明刷写固件镜像。

## 登录控制台

固件安装完成后，设备将自动开启一个 AP 热点，名称为 **SenseCAP_XXXX**

使用您的手机或电脑连接到热点，无需密码

在浏览器中输入 **192.168.168.1** 进入 LuCI 界面

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource9.png" alt="pir" width={800} height="auto" /></p>

使用用户名 **root** 和**无密码**登录控制台

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource10.png" alt="pir" width={800} height="auto" /></p>

## 资源

- \[**网站**\] <a  href="https://koen.vervloesem.eu/blog/how-to-install-alternative-firmware-to-the-sensecap-m2-data-only-lorawan-indoor-gateway/" target="_blank"><span> 如何为 SenseCAP M2 Data Only LoRaWAN 室内网关安装替代固件 - By Koen Vervloesem</span></a>
- \[**网站**\] <a  href="https://github.com/Seeed-Solution/LoRa_Gateway_OpenWRT" target="_blank"><span> GitHub-Seeed-Solution/Lora_Gateway_OpenWRT</span></a>
- \[**网站**\] <a  href="https://openwrt.org/" target="_blank"><span> OpenWrt 官方网站</span></a>
- \[**PDF**\] <a  href="https://files.seeedstudio.com/products/SenseCAP/M2OpensourceHarewareDescription.pdf" target="_blank"><span> M2 网关硬件描述</span></a>

## 技术支持

**在开源固件方面遇到问题？欢迎通过下方的 Discord 链接与社区成员讨论。**

<div class="button_tech_support_container">
<a href="https://discord.gg/nFByJZnC5H" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
