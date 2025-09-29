---
description: ODYSSEY - X86J4105
title: 安装操作系统
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/linkstar-install-system
last_update:
  date: 01/03/2023
  author: w0x7ce
---

<!-- ---
name: LinkStar-H68K-1432 路由器，支持 Wi-Fi 6 & 32GB eMMC，双 2.5G 和双 1G 以太网，4K 输出，预装 Android 11，支持 Ubuntu 和 OpenWRT
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: 102110777
tags:
--- -->

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/OVerview.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LinkStar-H68K-1432-p-5501.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 简介

LinkStar-H68K 路由器配备四核 Cortex-A55 RK3568 芯片，具有 4 个以太网接口（双 2.5G 和双 1G），并支持可选的 Wi-Fi 6 技术，同时提供高存储容量和媒体播放器功能。在本教程中，我们将向您展示如何通过 TF 卡或 eMMC 安装操作系统。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/LinkStar/25.png" /></div>

## 为 LinkStar 选择所需的系统

强大的 LinkStar 支持多种操作系统，例如 Android、Ubuntu、OpenWRT、Debian 等。在本节中，我们将为您介绍每种系统的安装方法。

### 注意事项与说明

LinkStar 有两种存储类型，一种是 **TF 卡** 存储，另一种是 **eMMC** 存储。这两种存储都可以用于刷写系统。

在本章中，我们可以使用带读卡器的 TF 卡将系统刷写到 TF 卡中。由于读写速度和稳定性，此方法仅适用于刷写 **OpenWRT** 系统。

- [将 OpenWRT 刷写到 TF 卡](#jump1)

我们还可以将系统刷写到 LinkStar 自带的 eMMC 中。此方法目前支持 LinkStar 所支持的所有操作系统。

- [将 OpenWRT 刷写到 eMMC](#jump2)
- [将 Android / Ubuntu 刷写到 eMMC](#jump3)

当 LinkStar 中插入 TF 卡时，系统启动时会优先从 TF 卡启动，因为 **TF 卡具有启动优先权**。

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
|  balenaEtcher  | - | [下载](https://sourceforge.net/projects/linkstar-h68k-os/files/Flash-to-TF-card-tool/) |
|  OpenWRT R22.11.18  | 添加 Docker 支持。 | [下载](https://sourceforge.net/projects/linkstar-h68k-os/files/Openwrt/) |

:::caution
在 LinkStar 中使用 TF 卡时，请注意某些 **高速卡** 可能不兼容。如果您使用高速卡，可能会在系统加载数据、启动或上电加载系统时由于卡的速度问题而出现数据加载错误、启动错误或故障。

使用 TF 卡的优点是可以为不同的网络配置不同的 TF 卡。还可以拥有多个系统——通过更换不同的 TF 卡即可使用不同的系统。
:::

#### 操作步骤

**步骤 1.** 将 TF 卡连接到电脑

请将 TF 卡插入您准备好的读卡器，并将其连接到您的电脑。

**步骤 2.** 将系统刷写到 TF 卡

打开已提前安装的 balenaEtcher 软件。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LinkStar/11.png" /></div>

选择您下载的 OpenWRT 固件，文件后缀应为 **.img**。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/12.png" /></div>

选择您要刷写系统的驱动器。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LinkStar/13.png" /></div>

点击 **Flash** 按钮，软件将开始将系统刷写到您的 TF 卡中。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LinkStar/14.png" /></div>

:::caution
某些电脑在刷写系统后可能会提示 USB 设备未被识别，并询问是否格式化，请 **不要** 重新格式化卡，否则系统将被擦除。
:::

**步骤 3.** 从 TF 卡启动 OpenWRT

从读卡器中取出 TF 卡，并将其插入 LinkStar 的 TF 卡插槽。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar/15.png" /></div>

然后为 LinkStar 供电，您可以选择通过 **USB-C-5V** 或 **DC-12V** 供电。

上电后，LinkStar 的电源按钮将亮起白色。按下电源按钮，设备将启动并进入系统。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LinkStar/16.png" /></div>

**步骤 4.** 管理 OpenWRT 后台

使用网线连接到 LinkStar 的 ETH1/ETH2/ETH3 网络端口。然后在浏览器中输入地址：`192.168.100.1` 以访问管理后台。

:::caution
ETH0 是 WAN 端口，其他网络端口是 LAN 端口。如果您想通过网线管理 LinkStar 的 OpenWRT，请将网线连接到除 ETH0 以外的 LAN 端口。
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/LinkStar/17.png" /></div>

系统的初始账号和密码如下。

```
账号: root
密码: password
```

恭喜您，您已成功通过 TF 卡安装 OpenWRT。

### <span id="jump2">将 OpenWRT 刷写到 eMMC</span>

#### 准备工作

- Windows 电脑
- USB-C 数据线
- OpenWRT 包
- Android 包（可选）

请准备上述所需设备，固件更新包可通过点击下方的下载按钮获取。

| 版本 | 描述 | 下载 |
|---------|----------|----------|
| OpenWRT R22.11.18  | 添加 Docker 支持。 | [下载](https://sourceforge.net/projects/linkstar-h68k-os/files/Openwrt/) |
| 擦除固件工具 | - | [下载](https://sourceforge.net/projects/linkstar-h68k-os/files/Erase-tool/) |
| 写入 eMMC 工具及驱动 | - | [下载](https://sourceforge.net/projects/linkstar-h68k-os/files/Flash-to-eMMC-tool/) |
| Android TV R22.11.17（可选） | 支持遥控器（目前未销售） | [下载](https://sourceforge.net/projects/linkstar-h68k-os/files/Android/) |

:::caution
如果您从其他系统安装 OpenWRT，则需要先将 Android 系统刷入 eMMC，才能完成 OpenWRT 的安装，此时您可能需要下载 Android 包。
:::

#### 操作步骤

**步骤 1.** 安装驱动

进入 **Rockchip_DriverAssitant_v5.1.1** 文件夹，双击打开 **DriverInstall.exe** 文件以安装驱动。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/1.png" /></div>

在启动的驱动安装软件中，点击“驱动安装”。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar/2.png" /></div>

**步骤 2.** 将设备置于 Maskrom 模式

进入 **RKDevTool_Release_v2.84** 文件夹，双击打开 **RKDevTool.exe** 文件。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/3.png" /></div>

此时软件底部应显示“未发现设备”。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/4.png" /></div>

使用卡针持续按住 **升级按键孔**，不要松开。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LinkStar/5.png" /></div>

保持按住 LinkStar 的同时，用 USB-C 数据线将其连接到电脑。随后可以松开按键。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LinkStar/6.png" /></div>

此时再次查看软件界面，状态将从“未发现设备”变为“发现一个 MASKROM 设备”。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/7.png" /></div>

**步骤 3.** 擦除固件

点击“升级固件”，然后点击“固件”并选择文件目录中的 **LinkStar-H68K-EraseFlash.img** 文件。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/8.png" /></div>

导入文件后，点击“EraseFlash”。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/9.png" /></div>

等待操作完成后，点击“确定”。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/10.png" /></div>

**步骤 4.** 刷入 OpenWRT

:::note
如果您按照上述步骤操作，您的 LinkStar H68K 应仍处于 MASKROM 模式。如果不是，请重复 **步骤 2** 的操作。
:::

点击软件左上角的“下载镜像”按钮，然后在第一个 **Boot** 选项行中选择 **H68K-Boot-Loader_xxx.bin** 文件。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/18.png" /></div>

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/19.png" /></div>

然后在第二行 **system** 选项中，选择 OpenWRT 的系统镜像文件。该文件应以 **.img** 结尾。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/20.png" /></div>

接着点击下方的“运行”按钮。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/21.png" /></div>

等待提示“下载镜像成功”，此时系统已成功安装到 LinkStar 的 eMMC 中。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/22.png" /></div>

系统刷写完成后，LinkStar H68K 将自动重启，重启后会进入 OpenWRT 系统。

**步骤 5.** 管理 OpenWRT 后台

使用网线连接 LinkStar 的 ETH1/ETH2/ETH3 网络端口。然后在浏览器中输入地址：`192.168.100.1` 以访问管理后台。

:::caution
ETH0 是 WAN 端口，其他网络端口是 LAN 端口。如果您想通过网线管理 LinkStar 的 OpenWRT，请将网线连接到除 ETH0 以外的 LAN 端口。
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/LinkStar/17.png" /></div>

系统的初始账号和密码如下：

```
账号: root
密码: password
```

恭喜您，您已成功将 OpenWRT 安装到 eMMC 中。

### <span id="jump3">将 Android / Ubuntu 刷写到 eMMC</span>

#### 准备工作

- Windows 电脑
- USB-C 数据线
- 系统包

请准备好上述设备和软件，固件更新包可以通过点击下方的下载按钮获取。

| 版本 | 描述 | 下载 |
|---------|----------|----------|
| 刷写到 eMMC 工具和驱动 | - | [下载](https://sourceforge.net/projects/linkstar-h68k-os/files/Flash-to-eMMC-tool/) |
| Android Pad R22.11.17  | 修复工作指示灯；修复 HDMI 无声音问题；将右键改为返回键；将密度改为 240 | [下载](https://sourceforge.net/projects/linkstar-h68k-os/files/Android/)  |
| Android TV R22.11.17  | 支持遥控器（目前不对外销售） | [下载](https://sourceforge.net/projects/linkstar-h68k-os/files/Android/)  |
| Ubuntu 20.04 R22.01.15 | 增加对 WiFi AP256 的支持，`默认用户名: linkstar, 密码: linkstar, Root 用户名: root, Root 密码: root` | [下载](https://sourceforge.net/projects/linkstar-h68k-os/files/Ubuntu%2020.04/) |

:::note
由于 LinkStar 的 ARM 架构 CPU 核心资源有限，Ubuntu 20.04 基于 [Lubuntu](https://lubuntu.me/)，这是一个轻量级的 Ubuntu 发行版，使用 LXDM 或 LXQt 桌面环境。
:::

:::caution
此处提供的镜像不支持卡刷。
:::

#### 操作步骤

本教程以安装 **Android TV** 为例，其他系统的安装步骤大同小异，只需选择不同的系统镜像文件。

**步骤 1.** 安装驱动

进入 **Rockchip_DriverAssitant_v5.1.1** 文件夹，双击打开 **DriverInstall.exe** 文件以安装驱动。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/1.png" /></div>

在启动的驱动安装软件中，点击“驱动安装”。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar/2.png" /></div>

**步骤 2.** 将设备置于 Maskrom 模式

进入 **RKDevTool_Release_v2.84** 文件夹，双击打开 **RKDevTool.exe** 文件。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/3.png" /></div>

此时软件底部应显示“未发现设备”。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/4.png" /></div>

使用取卡针持续按住 **升级孔** 按钮，不要松开。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LinkStar/5.png" /></div>

保持按住 LinkStar 的同时，用 USB-C 数据线将其连接到电脑。随后可以松开按钮。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LinkStar/6.png" /></div>

此时再次查看软件界面，状态会从“未发现设备”变为“发现一个 MASKROM 设备”。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/7.png" /></div>

**步骤 3.** 刷写固件

点击“升级固件”，然后点击“固件”并选择要安装的系统镜像文件，该文件以 **.img** 结尾。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/8.png" /></div>

导入文件后，点击“升级”。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/23.png" /></div>

等待提示“设备重置成功”出现，此时系统已刷写完成。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/24.png" /></div>

系统刷写完成后，LinkStar 将自动重启，重启后会进入系统。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时能够获得尽可能顺畅的体验。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>