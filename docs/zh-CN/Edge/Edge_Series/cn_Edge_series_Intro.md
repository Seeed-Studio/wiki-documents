---
description: Edge 系列指南
title: Edge 系列指南
keywords:
- Edge 系列
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Edge_series_Intro
last_update:
  date: 10/24/2023
  author: Kasun Thushara
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-platform/collection_page/Edge_Series_wiki_front.png" style={{width:1000, height:'auto'}}/></div>

## Edge 系列简介

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">EdgeBox ESP 100</th>
      <th class="table-trnobg">EdgeBox RPI 200</th>
      <th class="table-trnobg">EdgeLogix RPI 1000</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/e/d/edgebox-esp100_1.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Logix/edgelogix.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr> 
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>EdgeBox-ESP-100 是一款多功能、轻量级的控制器，具有无线功能和多种现场总线选项。它既可以作为现场自动化的独立 PLC，也可以作为工业网关，与原始 PLC 通信，实现网络和云连接。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>基于树莓派的全能工业边缘计算控制器。高扩展性、坚固设计、丰富的 IO 资源以及与树莓派工业软件生态系统的兼容性，使其成为智能自动化和工业物联网解决方案的理想选择。</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>强大的树莓派工业控制器，具有广泛的 IO 接口、模块化设计、工业总线支持和无线功能。非常适合一体化自动化，在管理复杂系统和无缝云集成方面表现出色。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/edge_box_esp/EdgeBox-ESP-100-User_Manual.pdf" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/Edge_Box/EdgeBox-RPi-200_Edge_Computing_Controller_User_Manual.pdf" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/Edge_Logix/EdgeLogix-RPI-1000-Datasheet-V1.0.pdf" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

## EdgeBox RPI 200 应用

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Edge Box RPi 200 的 Codesys</font></th>
      <th class="table-trnobg"><font size={"4"}>EdgeBox RPi 200 的 balena OS 设置</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg"> 
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesysicon.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Wiki 使用 Codesys Development System V3 来为基于 Raspberry Pi 的 PLC EdgeBox-RPI-200 编程。它安装了 CODESYS Control for Raspberry Pi MC 运行时。Codesys 是一种用于工业控制器编程的 IEC 61131-3 软件。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Balena：一个面向开发者的 IoT 平台，用于在设备群组中部署和管理应用程序。支持多种架构，能够轻松更新并确保设备在现场的安全可靠运行。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Edgebox-rpi-200-codesys/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Edgebox-rpi-200-balena-OS-setup/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>EdgeBox RPi 200 与 N3uron</font></th>
      <th class="table-trnobg"><font size={"4"}>EdgeBox RPi 200 与 LoRaWAN® 模块</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg"> 
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron1.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114992991-wio-wm1302-lorawan-gateway-module-_spi_---us915-m---first.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 工业边缘平台，专为 IIoT 和 DataOps 设计，促进车间与第三方应用之间的无缝集成。支持双向数据管道，将设备与应用解耦，并在单一数据源中整合、建模、处理和可视化操作数据。提升组织内的数据可用性。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> WM1302：下一代 LoRaWAN® 网关模块，采用 mini-PCIe 形式。由 Semtech® SX1302 基带 LoRaWAN® 芯片驱动，增强了远程无线传输能力，具有更高的灵敏度、更低的功耗和更低的工作温度。Wiki 提供了安装和使用的详细信息。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Edgebox-rpi-200-n3uron/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/EdgeBox-rpi-200-with-LoRaWAN-module/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

### Ignition Edge

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Edgebox RPI 200 入门指南：Ignition Edge</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/EdgeBox-200-Ignition/EdgeBox-200_Ignition_Edge.png" style={{width:300, height:'auto'}}/></div></td>
				</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Ignition Edge 是由 Inductive Automation® 提供的轻量级 Ignition® 软件解决方案，专为网络边缘的现场设备和 OEM 设备设计。简化并降低了边缘计算的成本，使数据收集、可视化和系统管理能够无缝扩展到网络边缘。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Edgebox-rpi-200-ignition-edge/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
    </tr>
	</table>
</div>

## EdgeBox ESP 100 应用

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>EdgeBox-ESP-100 Arduino 入门指南</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/e/d/edgebox-esp100_1.jpg" style={{width:300, height:'auto'}}/></div></td>
				</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> EdgeBox-ESP-100：基于 ESP32 的轻量级自动化控制器。具有模拟输入功能，可用于远程监控和控制，适用于 PID 控制回路、逻辑序列或作为网关使用，支持无线和现场传感器扩展。Wiki 包括硬件概述和 Arduino 编程说明。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Edgebox-ESP-100-Arduino/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
    </tr>
	</table>
</div>

## ✨ 贡献者项目

- 我们为更新此页面制定了一份任务清单，该任务清单归类于我们的 [贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)，我们致力于通过开发 Wiki 平台来提升用户体验并提供更好的支持。
- [您对本页面的贡献](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33963241)对我们来说至关重要！我们非常重视您的意见，并非常感谢您协助我们提出创意。

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>