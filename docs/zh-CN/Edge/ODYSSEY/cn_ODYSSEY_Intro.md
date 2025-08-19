---
description: ODYSSEY 指南
title: ODYSSEY 指南
keywords:
- ODYSSEY
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ODYSSEY_Intro
last_update:
  date: 08/09/2024
  author: Frank
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-platform/collection_page/ODYSSEY_Intro.png" style={{width:1000, height:'auto'}}/></div>

## ODYSSEY - X86

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/ODYSSEY-X86J4105-side.png" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>ODYSSEY - X86J41x5 SBC 系列包括 ODYSSEY - X86J4105、ODYSSEY - X86J4125 和 ODYSSEY - X86J4125 V2。它们基于 Intel Celeron J4105/J4125，具备标准计算机所需的所有强大功能，包括 8GB LPDDR4 内存、64GB eMMC 存储（仅限 eMMC 版本）、板载 Wi-Fi/BLE、双 1GbE/2.5GbE 接口、音频输入输出、USB 接口、HDMI、SATA 连接器、PCIe 等。</font>
    </div>
</div>


<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ODYSSEY-X86J4125800-v2-p-5531.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 立即购买</font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/ODYSSEY-X86J4105/"  target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 了解更多</font></span></strong></a>
</div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">ODYSSEY - X86J41x5 入门指南</th>
      <th class="table-trnobg">访问 40 针 GPIO</th>
      <th class="table-trnobg">添加配件</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/USB.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/ubuntu2004.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/HDD.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本 Wiki 包括硬件规格、操作系统安装、连接外部组件以及使用 Arduino Core 的信息。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本 Wiki 演示了如何在 Linux（Ubuntu）下访问和控制 ODYSSEY - X86J41x5 的 40 针 GPIO。通过这些内容，您可以轻松开始使用 ODYSSEY - X86J41x5 构建物联网项目！</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本 Wiki 介绍了如何为 ODYSSEY - X86J41x5 添加不同的配件，以提升性能以满足您的需求。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/ODYSSEY-X86J4105/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/ODYSSEY-X86J4105-GPIO/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/ODYSSEY-X86J4105-Accessories/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>ODYSSEY 的 Coral Mini PCIe 加速器</font></th>
      <th class="table-trnobg"><font size={"4"}>ODYSSEY 的 LTE 模块</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Coral_M.2_Accelerator_B_M_key/img/M.2.jpg" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/c/a/cat_6_1.1.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本 Wiki 解释了如何将 Coral Mini PCIe 加速器与 ODYSSEY-X86J41x5 集成，以增强机器学习性能。内容包括硬件设置、驱动程序和运行时安装，以及运行 TensorFlow Lite 模型进行图像分类。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本 Wiki 将指导您如何在 Windows 和 Linux 操作系统上使用 ODYSSEY-X86 的 LTE 模块。在此示例中，LTE 模块为 Quectel EM06-E LTE Cat 6 M.2 模块，采用 M.2 形式。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Coral-Mini-PCIe-Accelerator-x86/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/ODYSSEY-X86J4105-LTE-Module/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<br />

### 应用

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Intel OpenVINO 工具包</font></th>
      <th class="table-trnobg"><font size={"4"}>Intel 神经计算棒 2</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-demo-2.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/NCS-bird.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本维基指南介绍了如何在 ODYSSEY - X86J4105 上的 Ubuntu 18.04.4 LTS 系统中安装 Intel® OpenVINO™ 工具包，包括先决条件、安装步骤、依赖项设置、环境配置以及安装验证。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本维基解释了如何在 ODYSSEY - X86J41x5 上设置和使用 Intel 神经计算棒 2 (NCS2)，包括软件配置、运行推理示例以及从 ncappzoo 仓库中获取更多示例。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/ODYSSEY-X86J4105-Intel-OpenVINO/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/ODYSSEY-X86J4105-NCS2/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>使用 Seeed Odyssey 的 FRIGATE NVR 项目</font></th>
      <th class="table-trnobg"><font size={"4"}>Azure 物联网</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Projects/Frigate/home_page.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/visulizeData.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本指南将向您展示如何配置 Frigate Docker 环境，在 Seeed Studio Odyssey Blue 上使用 Coral USB 加速器对 RTSP 摄像头流进行本地 AI 检测。有关家庭助手插件设置，请继续关注！</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本维基演示了如何读取连接到 ODYSSEY - X86J41x5 的传感器值，并将数据发送到 Microsoft Azure IoT Hub，在那里可以显示这些数据或用于进一步的物联网应用。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/ODYSSEY-X86J4105-Frigate/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/ODYSSEY-X86J4105-AzureIOT/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<br />

### 软件

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">开始使用 Home Assistant</th>
      <th class="table-trnobg">如何自定义 Home Assistant</th>
      <th class="table-trnobg">使用 ESPHome 将 Grove 模块连接到 Home Assistant</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home-Assistant-X86/thumb.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home-Assistant/105.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ESPHome/106.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>通过本维基，您可以在 PC、平板电脑、智能手机、reTerminal 上查看一个美观的仪表板，并能够控制家用电器以及查看其他信息，例如传感器数据，触手可及。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本维基将逐步指导您如何通过必要的配置构建仪表板，以及如何使用 Home Assistant 附带的一些重要插件。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本维基将逐步指导您如何将 Seeed Studio XIAO ESP32C3 与运行在 Home Assistant 上的 ESPHome 连接，并在连接 Grove 模块到 XIAO ESP32C3 后发送传感器数据/控制设备。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/ODYSSEY-X86-Home-Assistant/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/ODYSSEY-Home-Assistant-Customize/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Connect-Grove-to-Home-Assistant-ESPHome/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>ODYSSEY - X86 上的 Mender 客户端</font></th>
      <th class="table-trnobg"><font size={"4"}>ODYSSEY - X86 上的 Mender 服务器</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Mender/client/UEFI.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/odyssey-ports-2.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本指南重点介绍如何使用运行 Yocto Project 编译的自定义 Linux 系统的 ODYSSEY - X86 开发板。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本指南重点介绍如何使用运行 Seeed 提供的 OpenWrt 系统的 ODYSSEY - X86 开发板。然后我们在 OpenWrt 上以 Docker 容器的形式运行自托管的 Mender 服务器。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Mender-Client-ODYSSEY-X86/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Mender-Server-ODYSSEY-X86/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<br />

### 操作系统安装

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>原始操作系统</font></th>
      <th class="table-trnobg"><font size={"4"}>固件升级</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/result.jpg" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-OS/SD-BS-CJ41G-300-101-H.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本教程演示如何创建可启动的 USB 驱动器并将 Linux 操作系统（Ubuntu Desktop 18.04）安装到 ODYSSEY - X86J41x5 上。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本教程演示如何更新 ODYSSEY - X86 的 BIOS 和 EC（嵌入式控制器）固件。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/ODYSSEY-X86J4105-Installing-OS/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/ODYSSEY-X86J4105-Updating-Firmware/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Jellyfin 媒体服务器安装</th>
      <th class="table-trnobg">OpenWRT 安装</th>
      <th class="table-trnobg">OPNsense 安装</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Jellyfin/23.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/Openwrt.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/25.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本指南解释了如何在运行 Ubuntu 系统的 ODYSSEY-X86 上以 Docker 容器的形式安装 Jellyfin 媒体服务器。通过使用 Jellyfin，您可以从世界任何地方流式播放所有本地媒体文件！</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本教程演示了如何安装用于路由器网络的开源操作系统。借助 OpenWrt，您的 ODYSSEY - X86J41x5 可以变成一台路由器，管理您的家庭网络！</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本指南解释了如何通过安装 OPNsense 将您的 ODYSSEY-X86 转变为软件路由器和防火墙。让我们开始吧！</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Jellyfin-on-Docker-Ubuntu-X86/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/ODYSSEY-X86J4105-Installing-openwrt/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/ODYSSEY-X86-OPNsense/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">pfSense 安装</th>
      <th class="table-trnobg">TrueNAS 安装</th>
      <th class="table-trnobg">Android-x86 安装</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/X86-04-n.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/1.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-Android/BBC.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本教程演示了如何在 ODYSSEY-X86J41x5 上安装 pfSense。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本指南解释了如何通过安装 TrueNAS 将您的 ODYSSEY-X86 转变为网络附加存储 (NAS)。让我们开始吧！</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本教程演示了如何在 ODYSSEY-X86J41x5 上安装 Android-x86，并将其用作智能电视盒，通过 Kodi 观看直播电视或从本地存储（如 NAS）播放媒体。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/ODYSSEY-X86J4105-pfSense/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/ODYSSEY-X86-TrueNAS/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/ODYSSEY-X86J4105-Installing-Android/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>FreeNAS 安装</font></th>
      <th class="table-trnobg"><font size={"4"}>BalenaOS 安装</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/FreeNAS/FreeNAS-download.jpg" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/balenaOS/thumb.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本教程演示了如何安装开源存储操作系统。FreeNAS 是一种操作系统，可以安装在几乎任何硬件平台上，通过网络共享数据。在 ODYSSEY - X86J41x5 上安装 FreeNAS，您就拥有了一个个人云盘！</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本 Wiki 提供了在 ODYSSEY - X86 板上安装 balenaOS 的分步指南，包括在 balenaCloud 上设置设备群组、将 balenaOS 镜像写入 USB 驱动器，以及通过 balenaCloud 仪表板管理设备。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/ODYSSEY-X86J4105-Installing-FreeNAS/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/BalenaOS-X86-Getting-Started/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<br />

### 常见问题解答

- [ODYSSEY - X86 使用常见问题解答](https://wiki.seeedstudio.com/cn/ODYSSEY_FAQ/)


<br />

## ODYSSEY - STM32

### ODYSSEY – STM32MP135D

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110701--odyssey-mp135d-45font.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>ODYSSEY STM32MP135D 是一款基于 STM32 MPU 的紧凑型单板计算机，提供强大的硬件性能，体积小巧，适用于从智能家居到自动售货机、IP 摄像头等多种用途。它提供了多种连接选项，旨在简化原型开发过程。</font>
    </div>
</div>


<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Odyssey-MP135D-p-5727.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 立即购买</font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/ODYSSEY-STM32MP135D/"  target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 了解更多</font></span></strong></a>
</div>

<br />

### ODYSSEY – STM32MP157C

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/perspective-19.png" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>ODYSSEY – STM32MP157C 是一款基于 STM32MP157C 的单板计算机，采用双核 Arm-Cortex-A7 核心处理器，运行频率为 650MHz。该处理器还集成了 Arm Cortex-M4 协处理器，非常适合实时任务。</font>
    </div>
</div>


<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ODYSSEY-STM32MP157C-p-4464.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 立即购买</font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/ODYSSEY-STM32MP157C/"  target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 了解更多</font></span></strong></a>
</div>

<br />

### Seeed Studio SOM STM32MP157C

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/STM32_SoM.png/SoM_thumb.png" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>SOM - STM32MP157C 是基于 STM32MP157C 的 SOM 模块。STM32MP157C 是一款双核 Arm-Cortex-A7 核心处理器，运行频率为 650MHz。该处理器还集成了 Arm Cortex-M4 协处理器，Arm Cortex-M4 集成了 FPU 和 MPU。</font>
    </div>
</div>


<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-SoM-STM32MP157C-p-4500.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 立即购买</font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/SEEED-SOM-STM32MP157C/"  target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 了解更多</font></span></strong></a>
</div>

## ✨ 贡献者项目

- 我们为更新此页面制定了一份任务清单，该任务清单归类于我们的[贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)，因为我们致力于通过改进我们的 Wiki 平台来提升用户体验并提供更好的支持。
- [您对本页面的贡献](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33963414)对我们来说至关重要！我们非常重视您的意见，并非常感谢您为我们提供创意和帮助。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时拥有尽可能顺畅的体验。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>