---
description: reRouter 指南
title: reRouter 指南
keywords:
- reRouter
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reRouter_Intro
last_update:
  date: 2023/10/16
  author: Kasun Thushara
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/mini_router_overview.png" style={{width:500, height:'auto'}}/></div>

这款迷你路由器配备了双千兆以太网端口和双 USB 3.0 端口，非常适合软路由应用，同时将硬件配置保持在最低限度。我们预装了一块带有 4GB RAM 和 32GB eMMC 的树莓派计算模块 4，以实现快速启动和流畅的整体体验。

## 开始使用 reRouter

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">在您的路由器上开始使用 OpenWrt</th>
      <th class="table-trnobg">reRouter 承载板 - 硬件概览</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/mini_router.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/thumb.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>在本 Wiki 中，探索 OpenWrt——一种用于路由器和嵌入式设备的开源 Linux 操作系统。它提供了增强的功能、性能和安全性，并具有可定制的文件系统和包管理功能。访问路由器时，您将看到一个美观且交互性强的仪表板。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>在本 Wiki 中，探索小型路由器的硬件概览——由树莓派计算模块 4 驱动的双千兆承载板。它配备了双千兆以太网端口、USB 3.0 端口以及各种 I/O 外设，非常适合软路由应用，同时保持紧凑的外形尺寸。适合 HTPC 制作者、Linux 开发者和树莓派用户。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Raspberry-OpenWrt-Getting-Started/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Dual-Gigabit-Ethernet-Carrier-Board-for-Raspberry-Pi-CM4/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

## 应用

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">OpenWRT 入门指南</th>
      <th class="table-trnobg">Plex 媒体服务器</th>
      <th class="table-trnobg">Mender 使用</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/openwrt-wiki-thumb.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/rpi-tv.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/mender.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>在本 Wiki 中，我们深入介绍了 OpenWrt，讨论了其 GUI 界面的功能。探索如何将 OpenWrt 用作软路由器和 WiFi 接入点。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本指南介绍了如何在 Seeed OpenWrt 固件上将 Plex 媒体服务器设置为 Docker 容器。通过 Plex，您可以在全球范围内流式播放本地媒体文件。OpenWrt 可运行在 ODYSSEY – X86 主板或树莓派计算模块 4 的双千兆以太网载板上。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>在本 Wiki 中，设置树莓派计算模块 4 的双千兆以太网载板上的 Mender 客户端，并从托管或自托管的 Mender 服务器接收 OTA 更新。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/OpenWrt-Getting-Started/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/OpenWrt-Plex-Media-Server-on-Docker/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Mender-Client-dual-GbE-CM4/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

## ✨ 贡献者项目

- 我们为更新此页面制定了任务列表，该任务列表归类于我们的[贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)，因为我们致力于通过改进 Wiki 平台来提升用户体验并提供更好的支持。
- [您对本页面的贡献](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33962991)对我们来说至关重要！我们非常重视您的意见，并非常感谢您为我们提供创意支持。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>