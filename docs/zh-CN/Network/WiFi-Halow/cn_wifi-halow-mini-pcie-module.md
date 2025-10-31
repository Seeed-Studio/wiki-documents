---
description: Wi-Fi HaLow Mini PCIe 模块入门指南
title: Wi-Fi HaLow Mini PCIe 模块入门指南
image: https://files.seeedstudio.com/wiki/wifi_halow/pic/0.webp
slug: /cn/getting_started_with_wifi_halow_mini_pcie_module
last_update:
  date: 02/12/2025
  author: Citric
---

# Wi-Fi HaLow Mini PCIe 模块入门指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/0.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM6180-Wi-Fi-HaLow-mini-PCIe-Module-p-6394.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div><br />

本指南将引导您设置和使用 Wi-Fi HaLow Mini PCIe 模块来构建 Wi-Fi HaLow 网关。Mini PCIe 外形规格使其易于集成到现有系统中，并创建能够在长距离范围内连接众多低功耗设备的物联网网关。

## 概述

Wi-Fi HaLow Mini PCIe 模块专为物联网应用提供长距离无线连接而设计。它提供：

- 标准 Mini PCIe 接口，便于集成
- 支持 IEEE 802.11ah Wi-Fi HaLow 协议
- 视距范围可达 1 公里
- 低功耗
- 能够连接数千个物联网设备

## 什么是 Wi-Fi HaLow？

Wi-Fi HaLow（IEEE 802.11ah）是专为物联网（IoT）应用设计的无线网络技术。它工作在 1 GHz 以下频段，具有以下几个关键优势：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/Wi-Fi_HaLow_frequency_band_graphic.png" style={{width:800, height:'auto'}}/></div>

### 主要优势

- **扩展范围**：在视距条件下可达 1 公里，远超传统 Wi-Fi
- **更好的穿透性**：较低频率信号能更有效地穿透墙壁和障碍物
- **能效**：针对电池供电的物联网设备进行优化
- **高可扩展性**：每个接入点支持数千个连接设备
- **原生 IP 支持**：与现有 IP 网络无缝集成

### 应用场景

Wi-Fi HaLow 非常适合：

- 智慧农业
- 工业物联网
- 智慧城市
- 楼宇自动化
- 环境监测
- 资产跟踪

### 重要意义

Wi-Fi HaLow 解决了物联网部署中的关键挑战：

1. **覆盖缺口**：弥合短距离 Wi-Fi 和蜂窝网络之间的差距
2. **电池寿命**：使设备能够依靠电池供电运行数年
3. **部署成本**：与蜂窝解决方案相比降低基础设施成本
4. **标准化**：基于熟悉的 Wi-Fi 标准，更易于采用
5. **安全性**：集成企业级 WPA3 安全性

通过结合长距离、低功耗和高设备密度能力，Wi-Fi HaLow 有望成为各行业大规模物联网部署的关键技术。

## OpenWrt 概述

Wi-Fi HaLow Mini PCIe 模块运行在 OpenWrt 上，这是一个高度可扩展的 Linux 操作系统，主要为路由器等嵌入式设备设计。以下是 OpenWrt 成为 Wi-Fi HaLow 网关优秀平台的原因：

### 什么是 OpenWrt？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/openwrt-wiki-thumb.png" style={{width:800, height:'auto'}}/></div>

OpenWrt 是一个基于 Linux 的操作系统，提供：

- 具有包管理功能的完全可写文件系统
- 高模块化，允许您自定义功能
- 支持广泛的嵌入式设备
- 活跃的开发社区和定期更新
- 广泛的网络功能

### Wi-Fi HaLow 部署的优势

OpenWrt 为 Wi-Fi HaLow 网关提供了理想的平台，因为：

- **稳定性**：坚如磐石的 Linux 基础，支持 24/7 运行
- **灵活性**：易于针对特定 IoT 需求进行定制
- **性能**：优化的网络协议栈，实现高效数据处理
- **安全性**：内置企业级安全功能
- **社区**：庞大的开发者和用户生态系统

OpenWrt 和 Wi-Fi HaLow 的结合为构建强大的 IoT 网络创造了强大的基础，可以从小型部署扩展到大型工业安装。

## 所需材料

以下是运行本教程所需的材料。

<div class="table-center">
    <table align="center">
        <tr>
            <th>Raspberry Pi 4 Model B</th>
            <th>WiFi HaLow Mini PCIe Module</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/raspberrypi4b.png" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/0.jpg" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM6180-Wi-Fi-HaLow-mini-PCIe-Module-p-6394.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

此外，您还需要以下物品：

- **[Mini PCIe 转 PCIe 适配器](https://www.seeedstudio.com/WM1302-Pi-Hat-p-4897.html)** - 用于将 Wi-Fi HaLow Mini PCIe 模块连接到 Raspberry Pi。
- **Raspberry Pi 散热器** - 建议在连续运行期间进行热管理。
- **MicroSD 卡（8GB 或更大）** - 用于存储 OpenWrt 固件。
- **MicroSD 读卡器** - 用于读取 MicroSD 卡。
- **以太网线** - 用于连接到主机并配置 Raspberry Pi 的 WiFi-Halow。
- **Raspberry Pi 电源**
- **计算机** - 用于刷写固件和配置 Raspberry Pi 的 WiFi-Halow。
- **天线** - 用于扩展 Wi-Fi HaLow Mini PCIe 模块的范围。以下是经过验证的推荐天线型号。

<div class="table-center">
    <table align="center">
        <tr>
            <th>长距离室内天线套件</th>
            <th>2.6dBi 长距离天线</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/long_range_indoor_antenna.png" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/2.6dBi_long_range_antenna.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/LoRa-Indoor-Antenna-Kit-860-930MHz-3dBi-295mm-p-5434.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/External-Antenna-915MHZ-2-6dBi-SMA-L195mm-p-5047.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

要将天线连接到WiFi-Halow模块，您可能还需要购买**SMA转I-PEX天线电缆**。

<div class="table-center">
    <table align="center">
        <tr>
            <th>SMA转I-PEX天线电缆</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/antenna_cable.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/UF-L-SMA-K-1-13-120mm-p-5046.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

如果您是第一次使用，可以参考以下视频进行天线安装。

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/wifi_halow/pic/install_pcie_wifi_halow_module.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## 为树莓派安装 WiFi Halow OpenWrt 系统

本节将指导您使用预构建的 OpenWrt 固件镜像将树莓派 4 设置为 Wi-Fi HaLow 网关。

### 下载固件

从以下地址下载支持 Wi-Fi HaLow 的预构建 OpenWrt 镜像：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Wvirgil123/openwrt/releases" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载镜像</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 将固件刷写到 MicroSD 卡

1. 下载并安装 **[balenaEtcher](https://www.balena.io/etcher/)**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/balenaEtcher.png" style={{width:1000, height:'auto'}}/></div>

2. 将您的 MicroSD 卡插入计算机。
3. 启动 balenaEtcher。
4. 点击"Flash from file"并选择下载的 OpenWrt 固件。
5. 选择您的 MicroSD 卡作为目标。
6. 点击"Flash!"并等待过程完成。

### 设置和首次启动

1. 将刷写好的 MicroSD 卡插入您的树莓派 4
2. 用网线连接您的计算机和树莓派
3. 给树莓派通电
4. 等待大约 2-3 分钟让系统启动

### 访问网关界面

1. 配置您计算机的以太网接口使用 DHCP，或设置静态 IP 在 10.42.0.x 范围内
2. 打开网页浏览器
3. 导航到：http://10.42.0.1/
4. 您应该看到 Morse Micro 登录页面

:::note
默认登录凭据为：

- 用户名：root
- 无需输入密码

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/1.png" style={{width:1000, height:'auto'}}/></div>

:::tip
如果您无法访问界面：

- 验证您的以太网连接
- 检查您的计算机是否接收到 IP 地址
- 尝试 ping 10.42.0.1 来验证连接性

:::

## 将树莓派配置为接入点

登录到 Morse Micro 界面。在欢迎页面上，请按照下图示例配置您的国家。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/2.png" style={{width:1000, height:'auto'}}/></div>

:::caution
目前，此设备仅支持美国，不支持其他国家或地区。
:::

配置完国家后，您可以根据实际情况设置**主机名**和**密码**。请妥善保管此信息，因为您稍后需要使用此密码访问设备（ssh）。然后点击右下角的**下一步**按钮。

请在新页面中选择**接入点**选项。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/3.png" style={{width:1000, height:'auto'}}/></div>

然后点击**下一步**按钮，在新页面上设置 Wi-Fi HaLow 网络凭据。请记住它们，因为您的客户端设备需要这些信息来连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/4.png" style={{width:1000, height:'auto'}}/></div>

点击**下一步**按钮，然后在新页面上选择**以太网**并选择**桥接**。以这种方式配置网络可以实现以太网和 Wi-Fi 网络上设备之间的无缝通信，为连接的设备提供统一的网络体验。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/5.png" style={{width:1000, height:'auto'}}/></div>

然后等待网络配置生效。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/6.png" style={{width:1000, height:'auto'}}/></div>

当出现以下界面时，您可以断开树莓派与计算机的连接，并在路由器和树莓派之间连接以太网电缆。然后，通过路由器的管理页面查看树莓派的 IP 地址。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/7.png" style={{width:1000, height:'auto'}}/></div>

对于我的设备，IP 地址是：<strong>192.168.1.168</strong>。在浏览器中输入此地址将允许您访问 Wi-Fi HaLow 网关的后台页面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/8.png" style={{width:1000, height:'auto'}}/></div>

## 资源

- **[PDF]** [UG MM6108 评估套件用户指南 2.6 - v18](https://files.seeedstudio.com/wiki/wifi_halow/res/UG_MM6108_Eval_Kit_User_Guide_2.6-v18.pdf)
- **[PDF]** [Quectel_FGH100M-H_简要-Range_Module_Specification_V1.0.0](https://files.seeedstudio.com/wiki/wifi_halow/res/Quectel_FGH100M-H_Short-Range_Module_Specification_V1.0.0_Preliminary_20241018.pdf)
- **[PDF]** [WiFi-Halow Mini PCIe 模块 SCH PDF](https://files.seeedstudio.com/wiki/wifi_halow/res/Wio-WM6108_V30_SCH_20241107.pdf)
- **[KiCAD]** [WiFi-Halow Mini PCIe 模块 KiCAD PCB 文件](https://files.seeedstudio.com/wiki/wifi_halow/res/Wio-WM6108_V30.kicad_pcb)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
