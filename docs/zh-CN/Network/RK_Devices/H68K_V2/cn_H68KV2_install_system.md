---
description: LinkStar-V2 安装操作系统
title: 安装操作系统
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/H68KV2_install_system
last_update:
  date: 04/18/2024
  author: Parker
---

<!-- ---
name: LinkStar-H68K-1432-V2 路由器，配备 Wi-Fi 6、4GB RAM 和 32GB eMMC、双 2.5G 和双 1G 以太网、4K 输出，预装 OpenWRT 支持 Armbian
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: 102110958
tags:
--- -->

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/01.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LinkStar-H68K-1432-V2-p-5886.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 简介

LinkStar-H68K-V2 路由器配备四核 Cortex-A55 RK3568 芯片，具有双 2.5G 和双 1G 的 4 个以太网接口，并支持 Wi-Fi 6 技术，同时提供大容量存储和媒体播放器功能。在本教程中，我们将向您展示如何通过 TF 卡或 eMMC 安装操作系统。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/LinkStar_V2/24.png" /></div>

## 为 LinkStar-V2 选择所需的系统

强大的 LinkStar-V2 支持多种操作系统，例如 OpenWRT、Armbian 等。在本节中，我们将为您介绍每种系统的安装方法。同时，它兼容旧版 LinkStar H68K 的所有[固件](https://wiki.seeedstudio.com/cn/linkstar-install-system/#flash-android--ubuntu-to-emmc)。

### 注意事项与说明

LinkStar-V2 有两种存储类型，一种是 **TF 卡** 存储，另一种是 **eMMC** 存储。这两种存储都可以用于刷写系统。

在本章中，我们可以使用带读卡器的 TF 卡将系统刷写到 TF 卡中。由于读写速度和稳定性，此方法仅支持刷写 **OpenWRT** 系统。

- [将 OpenWRT 刷写到 TF 卡](#jump1)

我们还可以将系统刷写到 LinkStar-V2 自带的 eMMC 中。此方法目前支持 LinkStar-V2 的所有支持操作系统。

- [将 OpenWRT 刷写到 eMMC](#jump2)

当 LinkStar-V2 插入 TF 卡时，系统启动时会优先从 TF 卡启动，因为 **TF 卡具有启动优先级**。

### <span id="jump1">将 OpenWRT 刷写到 TF 卡</span>

#### 准备工作

- Windows/MacOS 电脑
- USB-C 数据线
- 一张 TF 卡
- 一个读卡器
- [balenaEtcher](https://www.balena.io/etcher/) —— 请下载并安装 balenaEtcher，我们将使用此软件将系统刷写到 TF 卡。
- OpenWRT 包

请准备上述所需设备，固件更新包可通过点击下方的下载按钮获取。

| 版本 | 描述 | 下载 |
|---------|----------|----------|
|  balenaEtcher  | ISO 刻录工具  | [下载](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/balenaEtcher-Portable-1.5.109.zip) |
|  OpenWRT R22.11.18  | 添加 Docker 支持。 | [下载](https://files.seeedstudio.com/wiki/LinkStar_V2/download/openwrt-rockchip-R22.11.18.zip) |

:::caution
在 LinkStar-V2 上使用 TF 卡时，需要注意它可能与某些**高速卡**不兼容。如果您使用高速卡，可能会在系统加载数据、启动或通电加载系统时出现数据加载错误、启动错误或故障，这可能是由于卡的速度问题导致的。

使用 TF 卡的优势在于可以为不同的网络配置不同的 TF 卡。还可以通过更换不同的 TF 卡来使用多个系统。
:::

#### 操作步骤

**步骤 1.** 将 TF 卡连接到电脑

请将 TF 卡插入准备好的读卡器，并将其连接到您的电脑。

**步骤 2.** 将系统刷写到 TF 卡

打开已安装的 balenaEtcher 软件。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/25.png" /></div>

选择您下载的 OpenWRT 固件，文件后缀应为 **.img**。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/26.png" /></div>

选择您要刷写系统的驱动器。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/27.png" /></div>

点击 **Flash** 按钮，软件将系统刷写到您的 TF 卡中。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/28.png" /></div>
<br />
<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/29.png" /></div>

:::caution
某些电脑在刷写系统后可能会提示 USB 设备未被识别，或者询问是否格式化，请**不要**重新格式化卡，否则系统将被清除。
:::

**步骤 3.** 从 TF 卡启动 OpenWRT

将 TF 卡从读卡器中取出，并插入 LinkStar-V2 的 TF 卡插槽。

然后为 LinkStar 通电，您可以选择通过 **Type-C 电源** 为其供电。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/30.png" /></div>

**步骤 4.** 管理 OpenWRT 后台

使用网线连接到 LinkStar-V2 的 ETH1/ETH2/ETH3 网络端口。然后在浏览器中输入地址：`192.168.100.1` 以访问管理后台。

:::caution
ETH0 是 WAN 端口，其他网络端口是 LAN 端口。如果您想通过网线管理 LinkStar-V2 的 OpenWRT，请将网线连接到除 ETH0 以外的 LAN 端口。
:::

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/31.png" /></div>

系统的初始账号和密码如下。

```
账号: root
密码: password
```

恭喜，您已成功通过 TF 卡安装 OpenWRT。

### <span id="jump2">将 OpenWRT 刷写到 eMMC</span>

#### 准备工作

- Windows 电脑
- USB-C 数据线
- OpenWRT 包
- Armbian 包（可选）

请准备上述所需设备，固件更新包可通过点击下方的下载按钮获取。

| 版本 | 描述 | 下载 |
|---------|----------|----------|
| OpenWRT R22.11.18  | 添加 Docker 支持。 | [下载](https://files.seeedstudio.com/wiki/LinkStar_V2/download/openwrt-rockchip-R22.11.18.zip) |
| 刷写至 eMMC 工具及驱动 | - | [下载](https://files.seeedstudio.com/wiki/LinkStar_V2/download/H68K_Flash_Tools.zip) |
| Armbian 24.5.0 桌面版（可选） | - | [下载](https://files.seeedstudio.com/wiki/LinkStar_V2/download/Armbian_community_24.5.0_trunk.389_h68k_desktop.zip) |

#### 操作步骤

**步骤 1.** 安装驱动

您下载的 [文件](https://files.seeedstudio.com/wiki/LinkStar_V2/download/H68K_Flash_Tools.zip) 包含以下三个文件。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/07.png" /></div>

进入 **Rockchip_DriverAssitant_v5.1.2** 文件夹，双击打开 **DriverInstall.exe** 文件以安装驱动。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/08.png" /></div>

在启动的驱动安装软件中，点击“驱动安装”。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar_V2/09.png" /></div>

**步骤 2.** 将设备置于 Maskrom 模式

进入 **RKDevTool_Release_v2.84** 文件夹，双击打开 **RKDevTool.exe** 文件。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/10.png" /></div>

此时软件底部应显示“未发现设备”。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/11.png" /></div>

使用卡针持续按住 **升级按键孔**，不要松开。然后保持按住 LinkStar-V2，同时使用 USB-C 数据线将其连接到电脑。之后即可松开按键。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/12.png" /></div>

此时再次查看软件界面，它将从“未发现设备”变为“发现一个 MASKROM 设备”。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/13.png" /></div>

**步骤 3.** 擦除固件

点击“升级固件”，然后点击“固件”并选择文件目录中的 **H6XK-Boot-Loader.bin** 文件。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/14.png" /></div>
<br />
<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/15.png" /></div>

导入文件后，点击“擦除闪存”。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/16.png" /></div>

等待操作完成后，点击“确定”。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/17.png" /></div>

**步骤 4.** 刷写 OpenWRT

:::note
如果您按照上述步骤操作，您的 LinkStar H68K-V2 应仍处于 MASKROM 模式。如果不是，请重复并按照 **步骤 2** 的操作。
:::

点击软件左上角的“下载镜像”，然后在第一个 **Boot** 选项行中选择 **H6XK-Boot-Loader.bin** 文件。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/18.png" /></div>
<br />
<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/19.png" /></div>

然后在第二行 **system** 选项中，选择 OpenWRT 的系统镜像文件。该文件应以 **.img** 结尾。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/20.png" /></div>

接着点击下方的“运行”按钮。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/21.png" /></div>

等待出现“下载镜像成功”的提示，此时系统已成功安装到 LinkStar-V2 的 eMMC 中。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/22.png" /></div>

系统刷写完成后，LinkStar H68K-V2 将自动重启，重启后会进入 OpenWRT 系统。

**步骤 5.** 管理 OpenWRT 后台

使用网线连接 LinkStar-V2 的 ETH1/ETH2/ETH3 网络端口。然后在浏览器中输入地址：`192.168.100.1` 以访问管理后台。

:::caution
ETH0 是 WAN 端口，其余网络端口为 LAN 端口。如果您想通过网线管理 LinkStar-V2 的 OpenWRT，请将网线连接到除 ETH0 以外的 LAN 端口。
:::

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/23.png" /></div>

系统的初始账号和密码如下：

```
账号: root
密码: password
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/24.png" /></div>

恭喜您，您已成功将 OpenWRT 安装到 eMMC 中。

## 资源

LinkStar H68K-V2 是开源硬件。以下是相关资料的下载链接。

| 版本                         | 描述              | 下载                                                         |
| --------------------------- | ---------------- | ------------------------------------------------------------ |
| OpenWRT R22.11.18           | 添加 Docker 支持 | [下载](https://files.seeedstudio.com/wiki/LinkStar_V2/download/openwrt-rockchip-R22.11.18.zip) |
| Armbian 24.5.0 桌面版（可选）| -                | [下载](https://files.seeedstudio.com/wiki/LinkStar_V2/download/Armbian_community_24.5.0_trunk.389_h68k_desktop.zip) |
| eMMC 刷写工具及驱动          | -                | [下载](https://files.seeedstudio.com/wiki/LinkStar_V2/download/H68K_Flash_Tools.zip) |
| balenaEtcher                | ISO 刻录工具      | [下载](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/balenaEtcher-Portable-1.5.109.zip) |
| H68K-V2-SCH                 | H68K 原理图       | [下载](https://files.seeedstudio.com/wiki/LinkStar_V2/H68K_V2_Schematic.pdf) |
| RK3568 数据手册              | -                | [下载](https://files.seeedstudio.com/wiki/LinkStar/RK3568_Brief_Datasheet.pdf) |
| M7921E Wi-Fi 模块            | -                | [下载](https://files.seeedstudio.com/wiki/LinkStar/M7921E_Wi-Fi_Module.pdf) |

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，确保您在使用我们的产品时获得最佳体验。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>