---
description: 快速入门 Wi-Fi HaLow Mini PCIe 模块
title: 快速入门 Wi-Fi HaLow Mini PCIe 模块
image: https://files.seeedstudio.com/wiki/wifi_halow/pic/0.webp
slug: /cn/getting_started_with_wifi_halow_mini_pcie_module
last_update:
  date: 02/12/2025
  author: Citric
---

# 快速入门 Wi-Fi HaLow Mini PCIe 模块

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/0.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM6180-Wi-Fi-Halow-mini-PCIe-Module-p-6394.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div><br />

本指南将引导您设置和使用 Wi-Fi HaLow Mini PCIe 模块来构建 Wi-Fi HaLow 网关。Mini PCIe 形式因其易于集成 Wi-Fi HaLow 连接到现有系统中，使您能够创建 IoT 网关，连接众多低功耗设备并实现远距离通信。

## 概述

Wi-Fi HaLow Mini PCIe 模块旨在为 IoT 应用提供远距离无线连接。它具备以下特点：

- 标准 Mini PCIe 接口，便于集成
- 支持 IEEE 802.11ah Wi-Fi HaLow 协议
- 最远可达 1 公里视距范围
- 低功耗
- 能够连接数千个 IoT 设备

## 什么是 Wi-Fi HaLow？

Wi-Fi HaLow（IEEE 802.11ah）是一种专为物联网（IoT）应用设计的无线网络技术。它工作在低于 1 GHz 的频段，具有以下关键优势：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/Wi-Fi_HaLow_frequency_band_graphic.png" style={{width:800, height:'auto'}}/></div>

### 关键优势

- **扩展范围**：在视距条件下可达 1 公里，远超传统 Wi-Fi
- **更好的穿透力**：低频信号可以更有效地穿透墙壁和障碍物
- **节能高效**：针对电池供电的 IoT 设备进行了优化
- **高扩展性**：每个接入点支持数千个连接设备
- **原生 IP 支持**：与现有 IP 网络无缝集成

### 应用场景

Wi-Fi HaLow 非常适合以下领域：

- 智慧农业
- 工业物联网
- 智慧城市
- 楼宇自动化
- 环境监测
- 资产追踪

### 为什么重要

Wi-Fi HaLow 解决了 IoT 部署中的关键问题：

1. **覆盖范围差距**：弥补短距离 Wi-Fi 和蜂窝网络之间的空白
2. **电池寿命**：支持设备多年电池供电运行
3. **部署成本**：相比蜂窝解决方案降低基础设施成本
4. **标准化**：基于熟悉的 Wi-Fi 标准，便于采用
5. **安全性**：集成企业级 WPA3 安全协议

通过结合远距离、低功耗和高设备密度的能力，Wi-Fi HaLow 有望成为各行业大规模 IoT 部署的关键技术。

## OpenWrt 概述

Wi-Fi HaLow Mini PCIe 模块运行在 OpenWrt 上，这是一种高度可扩展的 Linux 操作系统，主要为嵌入式设备（如路由器）设计。以下是 OpenWrt 成为 Wi-Fi HaLow 网关优秀平台的原因：

### 什么是 OpenWrt？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/openwrt-wiki-thumb.png" style={{width:800, height:'auto'}}/></div>

OpenWrt 是一个基于 Linux 的操作系统，提供以下功能：

- 完全可写的文件系统，支持包管理
- 高度模块化，允许您自定义功能
- 支持广泛的嵌入式设备
- 活跃的开发社区和定期更新
- 广泛的网络功能

### Wi-Fi HaLow 部署的优势

OpenWrt 为 Wi-Fi HaLow 网关提供了理想的平台，因为：

- **稳定性**：基于坚如磐石的 Linux 基础，支持全天候运行
- **灵活性**：易于根据特定的物联网需求进行定制
- **性能**：优化的网络堆栈，支持高效的数据处理
- **安全性**：内置企业级安全功能
- **社区支持**：庞大的开发者和用户生态系统

OpenWrt 与 Wi-Fi HaLow 的结合，为构建从小型部署到大型工业安装的强大物联网网络奠定了坚实的基础。

## 所需材料

以下是运行本教程所需的材料。

<div class="table-center">
    <table align="center">
        <tr>
            <th>Raspberry Pi 4 Model B</th>
            <th>WiFi HaLow Mini PCIe 模块</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/raspberrypi4b.png" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/0.jpg" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM6180-Wi-Fi-Halow-mini-PCIe-Module-p-6394.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

此外，您还需要以下物品：

- **[Mini PCIe 转 PCIe 适配器](https://www.seeedstudio.com/WM1302-Pi-Hat-p-4897.html)** - 用于将 Wi-Fi HaLow Mini PCIe 模块连接到 Raspberry Pi。
- **Raspberry Pi 散热片** - 推荐用于连续运行时的热管理。
- **MicroSD 卡（8GB 或更大）** - 用于存储 OpenWrt 固件。
- **MicroSD 卡读卡器** - 用于读取 MicroSD 卡。
- **以太网线** - 用于连接主机电脑并配置 Raspberry Pi 的 WiFi-HaLow。
- **Raspberry Pi 电源** 
- **电脑** - 用于刷写固件和配置 Raspberry Pi 的 WiFi-HaLow。
- **天线** - 用于扩展 Wi-Fi HaLow Mini PCIe 模块的范围。以下是经过验证的推荐天线型号。

<div class="table-center">
    <table align="center">
        <tr>
            <th>室内长距离天线套件</th>
            <th>2.6dBi 长距离天线</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/long_range_indoor_antenna.png" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/2.6dBi_long_range_antenna.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/LoRa-Indoor-Antenna-Kit-860-930MHz-3dBi-295mm-p-5434.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/External-Antenna-915MHZ-2-6dBi-SMA-L195mm-p-5047.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

要将天线连接到 WiFi-HaLow 模块，您可能还需要购买 **SMA 转 I-PEX 天线线缆**。

<div class="table-center">
    <table align="center">
        <tr>
            <th>SMA 转 I-PEX 天线线缆</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/antenna_cable.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/UF-L-SMA-K-1-13-120mm-p-5046.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

如果您是首次使用，可以参考以下视频进行天线安装。

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/wifi_halow/pic/install_pcie_wifi_halow_module.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## 在 OpenWrt 上安装 WiFi HaLow 到树莓派

本节将指导您如何使用预构建的 OpenWrt 固件镜像，将树莓派 4 设置为 Wi-Fi HaLow 网关。

### 下载固件

从以下链接下载支持 Wi-Fi HaLow 的预构建 OpenWrt 镜像：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Wvirgil123/openwrt/releases" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载镜像</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 将固件烧录到 MicroSD 卡

1. 下载并安装 **[balenaEtcher](https://www.balena.io/etcher/)**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/balenaEtcher.png" style={{width:1000, height:'auto'}}/></div>

2. 将 MicroSD 卡插入您的电脑。
3. 启动 balenaEtcher。
4. 点击“Flash from file”，选择下载的 OpenWrt 固件。
5. 选择您的 MicroSD 卡作为目标。
6. 点击“Flash!”并等待烧录完成。

### 设置与首次启动

1. 将烧录好的 MicroSD 卡插入树莓派 4。
2. 使用网线将您的电脑与树莓派连接。
3. 给树莓派通电。
4. 等待大约 2-3 分钟，系统启动完成。

### 访问网关界面

1. 将您的电脑的以太网接口配置为使用 DHCP，或设置一个静态 IP 地址（范围为 10.42.0.x）。
2. 打开网页浏览器。
3. 访问：http://10.42.0.1/
4. 您应该会看到 Morse Micro 登录页面。

:::note
默认登录凭据为：
- 用户名：root
- 无需输入密码
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/1.png" style={{width:1000, height:'auto'}}/></div>

:::tip
如果无法访问界面：
- 检查您的以太网连接
- 确认您的电脑是否获得了 IP 地址
- 尝试 ping 10.42.0.1 以验证连接
:::

## 将树莓派配置为接入点

登录 Morse Micro 界面。在欢迎页面中，请按照下图示例配置您的国家。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/2.png" style={{width:1000, height:'auto'}}/></div>

:::caution
目前该设备仅支持美国，不支持其他国家或地区。
:::

配置国家后，您可以根据实际情况设置 **主机名** 和 **密码**。请妥善保存这些信息，因为您稍后需要使用此密码访问设备（通过 ssh）。然后点击右下角的 **Next** 按钮。

在新页面中，请选择 **Access Point** 选项。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/3.png" style={{width:1000, height:'auto'}}/></div>

然后点击 **Next** 按钮，在新页面中设置 Wi-Fi HaLow 网络凭据。请记住这些信息，因为您的客户端设备需要使用它们进行连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/4.png" style={{width:1000, height:'auto'}}/></div>

点击 **Next** 按钮，然后在新页面中选择 **Ethernet** 并选择 **Bridge**。以这种方式配置网络可以实现以太网设备与 Wi-Fi 网络设备之间的无缝通信，为连接的设备提供统一的网络体验。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/5.png" style={{width:1000, height:'auto'}}/></div>

然后等待网络配置生效。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/6.png" style={{width:1000, height:'auto'}}/></div>

当出现以下界面时，您可以断开树莓派与电脑的连接，并将网线连接到路由器与树莓派之间。然后通过路由器的管理页面检查树莓派的 IP 地址。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/7.png" style={{width:1000, height:'auto'}}/></div>

对于我的设备，IP 地址为：<strong>192.168.1.168</strong>。在浏览器中输入此地址即可访问 Wi-Fi HaLow 网关的后台页面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/8.png" style={{width:1000, height:'auto'}}/></div>

## 资源

- **[PDF]** [UG MM6108 Eval Kit 用户指南 2.6 - v18](https://files.seeedstudio.com/wiki/wifi_halow/res/UG_MM6108_Eval_Kit_User_Guide_2.6-v18.pdf)
- **[PDF]** [Quectel_FGH100M-H 短距离模块规格书 V1.0.0](https://files.seeedstudio.com/wiki/wifi_halow/res/Quectel_FGH100M-H_Short-Range_Module_Specification_V1.0.0_Preliminary_20241018.pdf)
- **[PDF]** [WiFi-Halow Mini PCIe 模块原理图 PDF](https://files.seeedstudio.com/wiki/wifi_halow/res/Wio-WM6108_V30_SCH_20241107.pdf)
- **[KiCAD]** [WiFi-Halow Mini PCIe 模块 KiCAD PCB 文件](https://files.seeedstudio.com/wiki/wifi_halow/res/Wio-WM6108_V30.kicad_pcb)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时拥有流畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>