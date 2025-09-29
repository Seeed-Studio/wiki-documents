---
description: ODYSSEY - X86J4105
title: LinkStar 简介
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Linkstar_Datasheet
last_update:
  date: 01/03/2023
  author: w0x7ce
---

<!-- ---
name: 
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: 
tags:
--- -->

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/OVerview.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LinkStar-H68K-1432-p-5501.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 简介

LinkStar-H68K 路由器配备四核 Cortex-A55 RK3568 芯片，具有 4 个以太网接口，包括双 2.5G 和双 1G，同时支持 Wi-Fi 6 技术（可选），并提供高存储容量和媒体播放器功能。在本 Wiki 中，我们将向您展示硬件概览以及如何快速上手 LinkStar。

## 硬件概览

以下是 LinkStar - H68K 的硬件概览，我们将在此展示每个组件的详细信息。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/hardware_overview1.jpg" /></div>

### 电源

<!-- <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-y6fn{background-color:#c0c0c0;text-align:left;vertical-align:top}\n.tg .tg-0lax{text-align:left;vertical-align:top}\n" }} /> -->

<table className="tg">
  <thead>
    <tr>
      <th className="tg-y6fn">工作电压</th>
      <th className="tg-0lax">5V~24V DC（推荐 12V-1A DC）</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-y6fn">DC 电源适配器</td>
      <td className="tg-0lax">12V-1A DC（推荐）</td>
    </tr>
    <tr>
      <td className="tg-y6fn">DC 电源适配器</td>
      <td className="tg-0lax">12-2A DC（用于额外硬件驱动，推荐）</td>
    </tr>
    <tr>
      <td className="tg-y6fn"><span style={{fontWeight: 400, fontStyle: 'normal'}}>Type-C 电源供电</span></td>
      <td className="tg-0lax">低于 5V（不支持快充）</td>
    </tr>
  </tbody>
</table>

### 以太网网络

<div align="center"><img width={700} src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEyMg_968748_fi2e0dpZ5__TlzPp_1668582262?w=960&h=500" /></div>

### 芯片性能

RK3568 是 SWICK 公司推出的一款高性价比 4K 旗舰 SoC 芯片。它采用 ARM 架构，集成了四核 Cortex-A55 和独立的 NEON 协处理器，支持 4K 视频解码和 3K 视频编码。许多强大的嵌入式硬件引擎为高端应用提供了优化的性能。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/chip_performance.png" /></div>

### 接口

<!-- <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}\n.tg .tg-w2ai{background-color:#FFF;border-color:inherit;color:#3D3D3D;text-align:left;vertical-align:top}\n.tg .tg-2e9t{background-color:#FFF;color:#3D3D3D;text-align:left;vertical-align:top}\n" }} /> -->

<table class="tg">
<tbody>
  <tr>
    <td class="tg-0pky">ETH0</td>
    <td class="tg-0pky">支持 1G 以太网，使用 RTL8211F PHY 芯片</td>
  </tr>
  <tr>
    <td class="tg-0pky">ETH1</td>
    <td class="tg-0pky">支持 1G 以太网，使用 RTL8211F PHY 芯片</td>
  </tr>
  <tr>
    <td class="tg-0pky">ETH2</td>
    <td class="tg-0pky">支持 2.5G/1G 以太网，使用 RTL8211F PHY 芯片</td>
  </tr>
  <tr>
    <td class="tg-0pky">ETH3</td>
    <td class="tg-0pky">支持 2.5G/1G 以太网，使用 RTL8211F PHY 芯片</td>
  </tr>
    <tr>
    <td class="tg-0pky">USB3.0 Type-C</td>
    <td class="tg-0pky">直通 IO，支持 5V 电源供电（不支持快充）</td>
  </tr>
    <tr>
    <td class="tg-0pky">USB 3.0 Type-A</td>
    <td class="tg-0pky">x1</td>
  </tr>
    <tr>
    <td class="tg-0pky">USB 2.0 Type-A</td>
    <td class="tg-0pky">x2</td>
  </tr>
  <tr>
    <td class="tg-0pky">M2 WIFI（可选）</td>
    <td class="tg-0pky">MT7921 模块，带 PCIE2.0 接口</td>
  </tr>
    <tr>
    <td class="tg-0pky">HDMI</td>
    <td class="tg-0pky">HDMI 2.0，支持 4K 输出，音视频同步</td>
  </tr>
  <tr>
    <td class="tg-0pky">3.5mm 音频输入/输出</td>
    <td class="tg-0pky">由 RK809-5 电源芯片实现</td>
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

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar/indicator.png" /></div>

<!-- <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-y698{background-color:#efefef;border-color:inherit;text-align:left;vertical-align:top}\n.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}\n" }} /> -->

<table class="tg">
<thead>
  <tr>
    <th class="tg-y698">状态指示灯</th>
    <th class="tg-y698">硬盘指示灯</th>
    <th class="tg-y698">以太网指示灯</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">运行/活动指示灯</td>
    <td class="tg-0pky">硬盘连接指示</td>
    <td class="tg-0pky">网络连接指示</td>
  </tr>
</tbody>
</table>

## 快速开始

LinkStar 预装了 Android 11 系统，收到设备后即可直接使用。

### 准备工作

- LinkStar
- HDMI 连接线
- 显示器
- 鼠标
- 12V1A 电源适配器

### 安装步骤

- **步骤 1**. 将 LinkStar 连接到显示器和鼠标。

- **步骤 2**. 插入 12V1A 电源适配器并按下电源按钮启动设备。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar/power.png" /></div>

- **步骤 3**. 显示器将显示如下画面：

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/display.png" /></div>

:::note
请注意，鼠标右键表示“返回”，点击右键页面将返回上一层。
:::

现在您可以开始使用了！

## 资源

- [RK3568 数据手册](https://files.seeedstudio.com/wiki/LinkStar/RK3568_Brief_Datasheet.pdf)
- [M7921E Wi-Fi 模块](https://files.seeedstudio.com/wiki/LinkStar/M7921E_Wi-Fi_Module.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，确保您在使用我们的产品时获得顺畅的体验。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>