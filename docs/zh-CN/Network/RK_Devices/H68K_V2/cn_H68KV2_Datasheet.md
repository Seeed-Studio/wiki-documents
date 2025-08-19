---
description: LinkStar-V2 使用手册
title: LinkStar-V2 简介
keywords:
- 网络
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/h68kv2_datasheet
last_update:
  date: 04/18/2024
  author: Parker
---

<!-- ---
name: 
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

LinkStar-H68K-V2 路由器配备四核 Cortex-A55 RK3568 芯片，具有 4 个以太网接口，包括双 2.5G 和双 1G 接口，并支持 Wi-Fi 6 技术，同时提供大容量存储和媒体播放器功能，推荐用于室内环境。与第一代 H68K 相比，它不仅具有更好的通信和散热效果，接口布局也更加合理和方便。在本手册中，我们将向您展示 LinkStar-V2 的硬件概览以及如何快速上手。

## 硬件概览

以下是 LinkStar-H68K-V2 的硬件概览，我们将在此展示每个组件的详细信息。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/02.jpg" /></div>

### 电源

<table className="tg">
  <thead>
    <tr>
      <th className="tg-y6fn">工作电压</th>
      <th className="tg-0lax">支持 5V-20V 宽电压直流输入，功率需求 >10W</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-y6fn">直流电源适配器</td>
      <td className="tg-0lax">取消 12V 直流接口供电</td>
    </tr>
    <tr>
      <td className="tg-y6fn"><span style={{fontWeight: 400, fontStyle: 'normal'}}>Type-C 电源供电</span></td>
      <td className="tg-0lax">支持 CC 线 PD 快充</td>
    </tr>
  </tbody>
</table>

### 以太网网络

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/03.jpg" /></div>

### 芯片性能

RK3568 是由 SWICK 拥有的一款高性价比 4K 旗舰 SoC 芯片。它采用 ARM 架构，集成了四核 Cortex-A55 和独立的 NEON 协处理器，支持 4K 视频解码和 3K 视频编码。许多强大的嵌入式硬件引擎为高端应用提供了优化的性能。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/04.png" /></div>
<br/>
<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/05.png" /></div>

### 接口

<table class="tg">
<tbody>
  <tr>
    <td class="tg-0pky">ETH0</td>
    <td class="tg-0pky">支持 1G 以太网，采用 RTL8211F PHY 芯片</td>
  </tr>
  <tr>
    <td class="tg-0pky">ETH1</td>
    <td class="tg-0pky">支持 1G 以太网，采用 RTL8211F PHY 芯片</td>
  </tr>
  <tr>
    <td class="tg-0pky">ETH2</td>
    <td class="tg-0pky">支持 2.5G/1G 以太网，采用 RTL8211F PHY 芯片</td>
  </tr>
  <tr>
    <td class="tg-0pky">ETH3</td>
    <td class="tg-0pky">支持 2.5G/1G 以太网，采用 RTL8211F PHY 芯片</td>
  </tr>
    <tr>
    <td class="tg-0pky">USB3.0 Type-C</td>
    <td class="tg-0pky">支持 CC 线 PD 快充和 5V-20V 宽电压直流输入</td>
  </tr>
    <tr>
    <td class="tg-0pky">USB 3.0 Type-A</td>
    <td class="tg-0pky">x1</td>
  </tr>
    <tr>
    <td class="tg-0pky">USB 2.0 Type-A</td>
    <td class="tg-0pky">x1</td>
  </tr>
  <tr>
    <td class="tg-0pky">M2 WIFI</td>
    <td class="tg-0pky">MT7921 模块，采用 PCIE2.0 接口</td>
  </tr>
    <tr>
    <td class="tg-0pky">HDMI</td>
    <td class="tg-0pky">HDMI 2.0，支持 4K 输出，音视频同步</td>
  </tr>
  <tr>
    <td class="tg-0pky">红外接收器</td>
    <td class="tg-0pky">IRM-3638 型号</td>
  </tr>
  <tr>
    <td class="tg-0pky">TF 卡槽</td>
    <td class="tg-0pky">SDIO 信号 SDMMC0</td>
  </tr>
</tbody>
</table>

### 指示灯

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar_V2/06.png" /></div>

<!-- <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-y698{background-color:#efefef;border-color:inherit;text-align:left;vertical-align:top}\n.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}\n" }} /> -->

<table class="tg">
<thead>
  <tr>
    <th class="tg-y698">电源</th>
    <th class="tg-y698">硬盘指示灯</th>
    <th class="tg-y698">ETH 指示灯</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">运行/活动指示灯</td>
    <td class="tg-0pky">硬盘连接说明</td>
    <td class="tg-0pky">网络连接指示</td>
  </tr>
</tbody>
</table>

## 快速开始

LinkStar 预装了 OpenWRT 系统，收到设备后即可直接使用。

### 准备工作

- LinkStar-H68K-V2
- 网线 x2
- 支持 CC 线 PD 快充的电源适配器

### 安装步骤

- **步骤 1**. ETH0 是 WAN 端口，其他网络端口是 LAN 端口。如果您希望通过网线管理 LinkStar-V2 的 OpenWRT，请将网线连接到除 ETH0 以外的 LAN 端口。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar_V2/33.png" /></div>

- **步骤 2**. 使用 CC 线 PD 快充电源适配器为设备供电。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar_V2/32.png" /></div>

**步骤 3.** 管理 OpenWRT 后台

使用网线连接到 LinkStar-V2 的 ETH1/ETH2/ETH3 网络端口。然后在浏览器中输入地址：`192.168.100.1`，以访问管理后台。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/31.png" /></div>

系统的初始账号和密码如下：

```text
账号: root
密码: password
```

## 资源

LinkStar H68K-V2 是开源硬件。以下是相关资料的下载链接。

| 版本                        | 描述              | 下载链接                                                     |
| --------------------------- | ----------------- | ------------------------------------------------------------ |
| OpenWRT R22.11.18           | 增加 Docker 支持 | [下载](https://files.seeedstudio.com/wiki/LinkStar_V2/download/openwrt-rockchip-R22.11.18.zip) |
| Armbian 24.5.0 桌面版（可选）| -                 | [下载](https://files.seeedstudio.com/wiki/LinkStar_V2/download/Armbian_community_24.5.0_trunk.389_h68k_desktop.zip) |
| eMMC 刷写工具及驱动         | -                 | [下载](https://files.seeedstudio.com/wiki/LinkStar_V2/download/H68K_Flash_Tools.zip) |
| balenaEtcher                | ISO 刻录工具      | [下载](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/balenaEtcher-Portable-1.5.109.zip) |
| H68K-V2-SCH                 | H68K 原理图       | [下载](https://files.seeedstudio.com/wiki/LinkStar_V2/H68K_V2_Schematic.pdf) |
| RK3568 数据手册             | -                 | [下载](https://files.seeedstudio.com/wiki/LinkStar/RK3568_Brief_Datasheet.pdf) |
| M7921E Wi-Fi 模块           | -                 | [下载](https://files.seeedstudio.com/wiki/LinkStar/M7921E_Wi-Fi_Module.pdf) |

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