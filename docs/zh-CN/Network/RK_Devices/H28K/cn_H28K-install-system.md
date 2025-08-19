---
description: H28K 启动教程
title: 安装操作系统
keywords:
- 网络
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/H28K-install-system
last_update:
  date: 2023/11/24
  author: Parker
---

<!-- ---
name: 带有 8GB eMMC 和 QWRT 支持的 H28K 路由器
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: *******
tags:
--- -->

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/H28K/Overview.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LinkStar-H28K-0208-p-5848.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 简介

LinkStar-H28K 配备两个千兆网络端口，采用 PCIE/RGMII 千兆技术和四核芯片。它拥有 4GB LPDDR4X 内存和 8GB eMMC 存储，可通过 TF 卡扩展至 512GB。此外，它还支持 5V-12V 的 Type-C PD（电力传输）连接。在本教程中，我们将向您展示如何通过 TF 卡或 eMMC 安装操作系统。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/30.png" /></div>

## 选择适用于 H28K 的系统

H28K 支持 QWRT 操作系统。在本节中，我们将为您介绍 QWRT 系统的安装方法。

### 注意事项与说明

H28K 有两种存储类型，一种是 TF 卡存储，另一种是 eMMC 存储。这两种存储都可以用于系统刷写。

在本章中，我们可以使用带有读卡器的 TF 卡将系统刷写到 TF 卡上。

- [将 QWRT 刷写到 TF 卡](#jump1)

我们也可以将系统刷写到 H28K 自带的 eMMC 上。

- [将 QWRT 刷写到 eMMC](#jump2)

当 H28K 插入 TF 卡时，系统启动时会优先从 TF 卡启动，因为 **TF 卡具有启动优先权**。

### <span id="jump1">将 QWRT 刷写到 TF 卡</span>

#### 准备工作

- Windows/MacOS 电脑
- USB-C 数据线
- 一张 TF 卡
- 一个读卡器
- [balenaEtcher](https://www.balena.io/etcher/) —— 请下载并安装 balenaEtcher，我们将使用此软件将系统刷写到 TF 卡。
- QWRT 包

请准备上述所需设备，固件更新包可通过点击下方的下载按钮获取。

| 版本             | 描述                                                     | 下载                                                         |
| ----------------- | -------------------------------------------------------- | ------------------------------------------------------------ |
| balenaEtcher      | ISO 刻录工具                                            | [下载](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/balenaEtcher-Portable-1.5.109.zip) |
| QWRT R24.01.23    | 基于 OpenWRT                                            | [下载](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/QWRT-R24.01.23-v2-rockchip-rk35xx-linkstar_h28k-squashfs-sysupgrade.zip) |

:::caution
在 H28K 上使用 TF 卡时，需要注意某些**高速卡**可能不兼容。如果您使用高速卡，可能会在系统加载数据、启动或通电加载时出现数据加载错误、启动错误或故障，这与卡的速度有关。

使用 TF 卡的优势在于可以为不同的网络配置不同的 TF 卡。此外，还可以通过更换不同的 TF 卡来使用多个系统。
:::

#### 操作步骤

**步骤 1.** 将 TF 卡连接到电脑

请将 TF 卡插入准备好的读卡器，并将其连接到电脑。

**步骤 2.** 将系统刷写到 TF 卡

打开已安装的 balenaEtcher 软件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/18.png" /></div>

选择您下载的 QWRT 固件，文件后缀应为 **.img**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/19.png" /></div>

选择您要刷写系统的驱动器。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/20.png" /></div>
<br />
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/21.png" /></div>

点击 **Flash** 按钮，软件会将系统刷写到您的 TF 卡中。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/22.png" /></div>

:::caution
某些电脑在刷写系统后可能会提示 USB 设备未被识别，或询问是否格式化设备，请**不要**重新格式化卡，否则系统将被清除。
:::

**步骤 3.** 从 TF 卡启动 QWRT

将 TF 卡从读卡器中取出，并插入 H28K 的 TF 卡插槽。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/H28K/23.png" /></div>

然后为 H28K 通电，您可以选择通过 **USB-C-5V** 为其供电。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/H28K/24.png" /></div>

**步骤 4.** 管理 QWRT 后台

使用网线连接到 H28K 的 ETH0 网络端口。然后在浏览器中输入地址：`192.168.1.1` 以访问管理后台。

:::caution
ETH0 是 LAN 端口，而 ETH1 是 WAN 端口。如果您想通过网线管理 H28K 的 QWRT，请将网线连接到 ETH0。
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/H28K/15.png" /></div>

系统的初始账号和密码如下：

```text
账号: root
密码: password
```

恭喜您，您已成功通过 TF 卡安装 QWRT。

### <span id="jump2">将 QWRT 刷写到 eMMC</span>

#### 准备工作

- Windows 电脑
- USB-C 数据线
- QWRT 包

请准备上述所需设备，固件更新包可通过点击下方的下载按钮获取。

| 版本                        | 描述                                                       | 下载链接                                                     |
| --------------------------- | --------------------------------------------------------- | ------------------------------------------------------------ |
| QWRT R24.01.23              | 基于 OpenWRT                                              | [下载](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/QWRT-R24.01.23-v2-rockchip-rk35xx-linkstar_h28k-squashfs-sysupgrade.zip) |
| 刷写至 eMMC 工具及驱动      | V5.12                                                     | [下载](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/H28K_Flash_Tools.zip) |

#### 操作步骤

**步骤 1.** 安装驱动

进入 **DriverAssitant_v5.12** 文件夹，双击打开 **DriverInstall.exe** 文件以安装驱动。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/2.png" /></div>

在启动的驱动安装软件中，点击“驱动安装”。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/3.png" /></div>

**步骤 2.** 将设备置于 Maskrom 模式

进入 **RKDevTool_Release_v2.84** 文件夹，双击打开 **RKDevTool.exe** 文件。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/4.png" /></div>

使用取卡针持续按住 **升级按键孔**（红框 1 所示），不要松开。

同时保持按住 H28K，并使用 USB-C 数据线将其连接到电脑（红框 2 所示）。随后可以松开 **升级按键孔**。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/H28K/5.png" /></div>

此时观察软件界面，会显示“Found One MASKROM Device”。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/6.png" /></div>

**步骤 3.** 擦除固件

点击“升级固件”，然后点击“固件”并在文件目录中选择 **rk3528_spl_loader_v1.05.104.bin** 文件。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/7.png" /></div>
<br />
<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/8.png" /></div>

导入文件后，点击“EraseFlash”。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/9.png" /></div>

等待操作完成后，点击“确定”。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/10.png" /></div>

**步骤 4.** 刷写 QWRT

:::note
如果按照上述步骤操作，您的 H28K 应该仍处于 MASKROM 模式。如果不是，请重复并按照 **步骤 2** 的操作重新进入 MASKROM 模式。
:::

点击软件左上角的“下载镜像”，然后在第一个 **Boot** 选项行中选择 **rk3528_spl_loader_v1.05.104.bin** 文件。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/11.png" /></div>

然后在第二行 **system** 选项中，选择 QWRT 的系统镜像文件。该文件应以 **.img** 结尾。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/12.png" /></div>

接着点击下方的“运行”按钮。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/13.png" /></div>

等待出现“Download image OK”提示后，系统已成功安装到 H28K 的 eMMC 中。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/14.png" /></div>

系统刷写完成后，H28K 会自动重启，重启后将进入 QWRT 系统。

**步骤 5.** 管理 QWRT 后台

使用网线连接到 H28K 的 ETH0 网络端口。然后在浏览器中输入地址：`192.168.1.1` 以访问管理后台。

:::caution
ETH1 是 WAN 端口，ETH0 是 LAN 端口。如果您想通过网线管理 H28K 的 QWRT，请将网线连接到 LAN 端口。
:::

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/15.png" /></div>

系统的初始账号和密码如下。

```text
账号: root
密码: password
```

恭喜您，您已成功将 QWRT 安装到 eMMC 中。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/H28K/30.png" /></div>

## 资源

H28K 是开源硬件。以下是相关材料的下载链接。

| 版本                         | 描述             | 下载                                                         |
| --------------------------- | ---------------- | ------------------------------------------------------------ |
| QWRT R24.01.23              | 基于 OpenWRT     | [下载](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/QWRT-R24.01.23-v2-rockchip-rk35xx-linkstar_h28k-squashfs-sysupgrade.zip) |
| eMMC 刷写工具及驱动         | V5.12            | [下载](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/H28K_Flash_Tools.zip) |
| balenaEtcher                | ISO 刻录工具     | [下载](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/balenaEtcher-Portable-1.5.109.zip) |
| H28K-SCH                    | H28K 原理图      | [下载](https://files.seeedstudio.com/wiki/H28K/Open_source/H28K-SCH.zip) |

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