---
description: reComputer R1000 边缘物联网控制器，由 Raspberry Pi CM4 提供支持，配备四核 A72 处理器、双以太网和多个 RS485 通道，支持 BACnet、Modbus RTU 和 Modbus TCP/IP。通过包括 4G、LoRa® 和 Wi-Fi/BLE 在内的多种无线选项，非常适合智能建筑应用中的远程设备和能源管理。
title: reComputer R1000 使用指南
keywords:
- Raspberry pi
- 边缘控制器
- reComputer R1000
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/recomputer_r1000_intro
last_update:
  date: 10/08/2024
  author: Kasun Thushara
---

reComputer R1000 边缘物联网控制器，由 Raspberry Pi CM4 提供支持，配备四核 A72 处理器、双以太网和多个 RS485 通道，支持 BACnet、Modbus RTU 和 Modbus TCP/IP。通过包括 4G、LoRa® 和 Wi-Fi/BLE 在内的多种无线选项，确保强大的物联网网络通信。R1000 非常适合远程设备和能源管理，是智能建筑应用的理想选择。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:800, height:'auto'}}/></div>

## reComputer R1000 应用

### 初步指南

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 入门指南</font></th>
      <th class="table-trnobg"><font size={"4"}>将 Raspbian OS 安装到 eMMC</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg"> 
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/rpi.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  本文旨在提供 reComputer R1000 的概述，详细介绍其硬件接口和可选硬件组件。它突出了 R1000 在各种物联网应用中的功能和能力。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> reComputer R1000 自带预装的 Raspbian 系统镜像。如果需要重新安装，本指南将向您展示如何重新安装 Raspbian。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/recomputer_r/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/recomputer_r1000_flash_OS/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 装配指南</font></th>
      <th class="table-trnobg"><font size={"4"}>如何使用 reComputer R1000 的 RS485 和 Modbus RTU</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 使用 BACnet MS/TP</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg"> 
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass01.jpg" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  本 Wiki 将向您展示如何组装和拆卸设备以安装外围组件，以及安装选项。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本文主要介绍如何使用 reComputer R1000 的 RS485 通信功能，并测试 RS485 和 Modbus 通信功能。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本文主要介绍如何在 reComputer R1000 上进行 BACnet MS/TP 协议的功能测试。我们在 reComputer R1000 上模拟了一个 BACnet MS/TP 服务器，然后使用 W10 PC 上的 YABE 检查设备是否存在。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/recomputer_r1000_assembly_guide/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reComputer_r1000_use_rs485_modbus_rtu/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reComputer_r1000_use_bacnet_mstp/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

### 工业边缘 

<strong><span><font color={'4ec354'} size={"5"}> Node-RED</font></span></strong>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 入门指南 Node-Red</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 使用 Node-RED 和 MQTT</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 使用 Node-RED 和 Modbus TCP</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg"> 
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered.svg" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/recomputer-mqtt.png" style={{width:300, height:'auto'}}/></div></td>
            <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/modbus-recomp.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  了解如何在 reComputer R1000 上安装和配置 Node-RED，将其转变为连接硬件、API 和在线服务的多功能工具。使用直观的基于浏览器的流程编辑器，通过丰富的节点库无缝集成各种组件。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 在本 Wiki 中探索 Mosquitto broker 的安装，并学习如何使用 Node-RED 订阅和发布 MQTT 主题。MQTT 非常适合物联网应用，能够在不可靠的网络上以低带宽实现高效的实时数据交换。</font></td>
    <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  在本 Wiki 中学习如何在 reComputer R1000 上使用 Node-RED 处理 Modbus TCP。了解 Modbus TCP 如何将协议扩展到以太网网络，实现更快的通信速度，并与现代 IT 基础设施无缝集成。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/recomputer_r1000_getting_started_node_red/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/recomputer_r1000_nodered_mqtt/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/recomputer_r1000_node_red_modbus_tcp/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 使用 Node-RED 和 BACnet TCP</font></th>
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 使用 Node-RED 和 InfluxDB</font></th>
        <th class="table-trnobg"><font size={"4"}>reComputer R1000 使用 Grafana</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/bacnet-recomp.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/influxdbicoon.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/grafana2.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 在本 Wiki 中探索 BACnet IP 在楼宇管理系统 (BMS) 中的优势，重点介绍 Node-RED 集成。学习如何通过 Node-RED 和 BACnet IP 实现更好的可扩展性、更简单的安装和维护，并利用现有的网络基础设施。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>在 Raspberry Pi 驱动的边缘控制器 reComputer R1000 上部署 InfluxDB，用于强大的时间序列数据收集和分析。本指南详细介绍了安装、配置和使用 InfluxDB 的步骤，帮助实现高效管理和物联网应用的实时洞察。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>在本 Wiki 中学习如何在 Raspberry Pi 驱动的 reComputer R1000 上安装 Grafana，将数据转化为有洞察力的可视化内容。将 Grafana 连接到现有的 InfluxDB 数据库，并创建一个直观的仪表板，以提升系统性能、简化故障排除，并通过强大的监控工具做出明智决策。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reComputer_r1000_node_red_bacnet_ip/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/recomputer_r1000_node_red_influxdb/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/recomputer_r1000_grafana/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>搭载 Node-RED 和 OPC UA 服务器的 reComputer R1000</font></th>
      <th class="table-trnobg"><font size={"4"}>使用 S7 协议连接西门子 PLC 的 reComputer R1000</font></th>
        <th class="table-trnobg"><font size={"4"}>搭载 FlowFuse 的 reComputer R1000</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/opcua.jpg" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/recomputer-S7.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/flowfuse.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本文将指导您如何在 Node-RED 环境中创建一个 OPC UA 服务器，集成多种协议以提升自动化层级间的互操作性。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本文介绍了如何在基于树莓派的 reComputer 上使用 Node-RED（一种基于流程的开发工具）通过 S7 协议与西门子 PLC 通信。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>FlowFuse 为 Node-RED 提供了协作开发、远程部署和 DevOps 流水线工具，使管理和交付 Node-RED 应用变得更加容易。本文将探讨 FlowFuse 如何简化开发团队的这些流程。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/recomputer_r1000_nodered_opcua_server/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/recomputer_r1000_nodered_s7/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/recomputer_r1000_flow_fuse/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<strong><span><font color={'4ec354'} size={"5"}>N3uron</font></span></strong>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>搭载 N3uron 的 reComputer R1000</font></th>
      <th class="table-trnobg"><font size={"4"}>使用 N3uron 连接 AWS IoT Core 的 reComputer R1000</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg"> 
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/n3uron/n3uron1.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_AWS/AWS_recomputer_n3uron.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 使用 N3uron 轻松创建 OT 和 IT 系统之间的双向数据管道，将操作数据整合并可视化为单一来源。学习如何使用 reComputer R1000 安装和访问 N3uron。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本教程将深入探讨 N3uron 边缘工业物联网平台与 AWS IoT Core 之间的接口细节。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/recomputer_r1000_n3uron/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/recomputer_r1000_n3uron_aws/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>


<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>在 reComputer R1000 上连接 N3uron 和 BACnet</font></th>
      <th class="table-trnobg"><font size={"4"}>使用 N3uron、MQTT 和 Modbus 将工业数据发布到 AWS 云</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg"> 
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/modbus-bacnet-n3uron.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/recomputer-n3uron-aws.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 了解 BACnet 在楼宇管理系统中的强大功能，利用 N3uron 提升数据采集和管理，实现无缝互操作性。使用 BACnet TCP 和 YABE 房间模拟器可视化和测试 BACnet 设备，确保楼宇管理系统的稳健性和灵活性。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 使用 reComputer R1000 和 N3uron Duo 提升工厂管理，利用强大的连接性和数据处理能力。本 Wiki 将指导您通过 Modbus TCP 和 MQTT 实现无缝工业集成。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/recomputer_r1000_n3uron_bacnet/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/recomputer_r1000_n3uron_modbus_mqtt_aws/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<strong><span><font color={'4ec354'} size={"5"}>FUXA</font></span></strong>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>使用 FUXA 在 reComputer R1000 上实现 Modbus RTU/TCP</font></th>
      <th class="table-trnobg"><font size={"4"}>使用 FUXA 在 reComputer R1000 上实现 MQTT 客户端</font></th>
      <th class="table-trnobg"><font size={"4"}>使用 FUXA 在 reComputer R1000 上实现 OPC-UA</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg"> 
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusTcp_master.gif" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/mqtt_global.png" style={{width:300, height:'auto'}}/></div></td>
            <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/read_opcua_data.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本文主要讲解如何使用 FUXA 实现 Modbus RTU/TCP 通信。内容涵盖了 Modbus 的基础知识，并展示了其在各种场景中的应用。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本文主要介绍如何在 reComputer R1000 上使用 FUXA 实现 mqtt 通信。本文使用 mosquitto 作为 MQTT 服务器代理，FUXA 和 node-red 作为 MQTT 客户端，并引入 ModbusTCP 从机作为 FUXA 发布数据的来源。</font></td>
    <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本文主要介绍如何使用 FUXA 实现 OPC-UA 通信。我们在 W10 PC 上运行 Prosys OPC UA 模拟服务器，然后在 reComputer R1000 上读取模拟器的数据。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reComputer_r1000_fuxa_modbus_rtu_and_tcp/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reComputer_r1000_fuxa_mqtt_client/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
            <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reComputer_r1000_fuxa_opc_ua/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>使用 FUXA 在 reComputer R1000 上实现 WebAPI</font></th>
      <th class="table-trnobg"><font size={"4"}>使用 FUXA 在 reComputer R1000 上实现 SCADA</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg"> 
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/display_webapi_get_data.gif" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/final_demo.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本文主要介绍如何使用 FUXA 实现 WebAPI 通信。目前阶段，FUXA 仅支持 GET 功能，数据包为 Json 格式。我们将使用 FUXA 的 GET 功能获取 postman 的数据报文。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本文主要介绍如何使用 FUXA 实现 SCADA。在文章中，FUXA 从 node-red 和 OPC UA 模拟器接收数据，并通过图表和圆形仪表显示；同时绘制一系列图形以模拟工业流程。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reComputer_r1000_fuxa_web_api/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reComputer_r1000_fuxa_achieve_scada/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<strong><span><font color={'4ec354'} size={"5"}>CODESYS</font></span></strong>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>如何为 reComputer R1000 安装 CODESYS</font></th>
      <th class="table-trnobg"><font size={"4"}>如何使用 CODESYS 配置 R1000 的 Modbus RTU 功能</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg"> 
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/4.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/hardware.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> CODESYS 是由 3S-Smart Software Solutions 开发的一款广泛应用于工业控制系统的自动化软件平台。本文重点介绍如何下载、安装 CODESYS，并将项目部署到 reComputer R1000。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本文主要介绍如何基于 CODESYS 使用 reComputer R1000 的 modbus rtu 功能。我们将使用 reComputer R1000 的两个 rs485 接口，一个接口用于 Modbus 主机，另一个接口用于 Modbus 从机。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reComputer_r1000_install_codesys/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/recomputer_r1000_use_modbus_rtu_with_codesys/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<strong><span><font color={'4ec354'} size={"5"}>FIN</font></span></strong>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>在 reComputer R1000 上安装 FIN</font></th>
      <th class="table-trnobg"><font size={"4"}>在 reComputer R1000 上使用 FIN 的 Modbus TCP/RTU</font></th>
      <th class="table-trnobg"><font size={"4"}>在 reComputer R1000 上使用 FIN Logic Builder</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/FIN_framework.png" style={{width:300, height:'auto'}}/></div></td>
     <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_9.gif" style={{width:300, height:'auto'}}/></div></td>
     <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_9.gif" style={{width:300, height:'auto'}}/></div></td>
				</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> FIN Framework（FIN）是一个带有应用套件的软件框架，可用于集成、控制、管理、分析、可视化和连接。其功能可以被 OEM 集成到各种产品和服务中。本文主要介绍如何在 reComputer R1000 上安装 FIN。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本文介绍了如何使用 FIN Framework 的 Modbus 连接器，并详细说明了在 FIN Framework 中使用 Modbus TCP/RTU 的方法。</font></td>
     <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本文将向您展示如何使用 FIN Framework 的 Logic Builder，并通过 Logic Builder 实现报警功能。我们监控 Modbus 设备的值，当值超过临界值时，FIN 将发出报警。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reComputer_r1000_install_fin/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reComputer_r1000_fin_modbus_tcp_and_rtu/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reComputer_r1000_fin_logic_builder/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
    </tr>
	</table>
</div>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>在 reComputer R1000 上使用 FIN 创建顶层图形</font></th>
      <th class="table-trnobg"><font size={"4"}>在 reComputer R1000 上使用 FIN 创建站点图形</font></th>
      <th class="table-trnobg"><font size={"4"}>在 reComputer R1000 上使用 FIN 创建楼层图形</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_9.gif" style={{width:300, height:'auto'}}/></div></td>
     <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_7.gif" style={{width:300, height:'auto'}}/></div></td>
     <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_7.gif" style={{width:300, height:'auto'}}/></div></td>
				</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本文将向您展示如何使用 FIN Framework 的 Graphics Builder，并通过 Graphics Builder 创建一个顶层图形。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本文将向您展示如何使用 FIN Framework 的 Graphics Builder，并通过 Graphics Builder 创建一个站点图形。</font></td>
     <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本文将向您展示如何使用 FIN Framework 的 Graphics Builder，并通过 Graphics Builder 创建一个楼层图形。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reComputer_r1000_fin_top_level_gaphic/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reComputer_r1000_fin_site_gaphic/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reComputer_r1000_fin_floor_gaphic/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
    </tr>
	</table>
</div>

<strong><span><font color={'4ec354'} size={"5"}>ThingsBoard</font></span></strong>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>使用 reComputer R1000 快速入门 ThingsBoard</font></th>
      <th class="table-trnobg"><font size={"4"}>使用 ThingsBoard 和 reComputer R1000 创建动态 IoT 仪表板</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg"> 
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/thingsboard_blue.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/thingsboard.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本指南涵盖了在 reComputer 上安装 ThingsBoard 社区版以进行边缘部署的过程。它提供了逐步设置强大 IoT 基础设施的方法，支持设备配置、数据收集、可视化和遥测分析。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本教程解释了如何将一个 MQTT 设备添加到 ThingsBoard 社区版并在交互式仪表板上可视化其数据。内容包括连接设备、发送遥测数据以及使用 ThingsBoard 的图形工具进行实时监控和分析的步骤。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/recomputer_r1000_thingsboard_ce/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/recomputer_r1000_thingsboard_dashboard/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>


### 车队管理  

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reComputer R1000 balena OS 设置</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena.png" style={{width:300, height:'auto'}}/></div></td>
				</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  Balena：一个面向开发者的 IoT 平台，用于在设备车队中部署和管理应用程序。支持多种架构，便于更新并确保设备在现场的安全可靠运行。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reComputer_r1000_balena/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
    </tr>
	</table>
</div>

### 云解决方案 

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>AWS IoT Core 与 reComputer R1000 集成</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/AWS/AWSrecomputer.png" style={{width:300, height:'auto'}}/></div></td>
				</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  在本综合指南中，学习如何将您的 reComputer R1000 连接到 AWS IoT 云。利用 AWS IoT Core 实现安全的设备管理和无缝通信，从而在 AWS 生态系统中开发智能互联应用。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/recomputer_r1000_aws/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
    </tr>
	</table>
</div>

### 计算机视觉 

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>在 reComputer R1000 上使用 Hailo-8L 进行 YOLOv8 目标检测</font></th>
      <th class="table-trnobg"><font size={"4"}>在 reComputer R1000 上使用 Hailo-8L 进行 YOLOv8 姿态估计</font></th>
      <th class="table-trnobg"><font size={"4"}>在 RPi5 和 CM4 上运行 YOLOv8s 的基准测试，使用 RPi AI 套件</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg"> 
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/object_detection_with_AIkit.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/YOLOv8-pose-estimation-with-AIkit.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/object-detection-benchmark.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  本维基展示了在 reComputer R1000 上使用和不使用 Raspberry Pi AI 套件加速的情况下运行 YOLOv8 进行目标检测。Raspberry Pi AI 套件增强了 Raspberry Pi 的性能，并释放其在人工智能和机器学习应用中的潜力。</font></td>
       <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  本维基展示了在 reComputer R1000 上使用和不使用 Raspberry Pi AI 套件加速的情况下运行 YOLOv8 进行姿态估计。Raspberry Pi AI 套件增强了 Raspberry Pi 的性能，并释放其在人工智能和机器学习应用中的潜力。</font></td>
       <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  本维基展示了在 Raspberry Pi 5 和 Raspberry Pi Compute Module 4 上运行 YOLOv8s 进行姿态估计和目标检测的基准测试。所有测试均使用相同的模型（YOLOv8s），量化为 int8，输入分辨率为 640x640，批量大小为 1，输入为 240 FPS 的同一视频。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/yolov8_pose_estimation_on_recomputer_r1000_with_hailo_8l/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/benchmark_on_rpi5_and_cm4_running_yolov8s_with_rpi_ai_kit/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>
<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>基于姿态的灯光控制，使用 Node-Red 和 Raspberry Pi AI 套件</font></th>
      <th class="table-trnobg"><font size={"4"}>在 reComputer 上运行 CLIP 应用</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg"> 
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/pose_control_light/pose_control.jpeg" style={{width:300, height:'auto'}}/></div></td>
            <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI-Box/CLIP.PNG" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>  本维基将指导您如何使用 AI 套件运行 YOLOv8，利用 YOLOv8 监控您的姿态，并最终根据您的姿态控制灯光。</font></td>
       <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>本教程将指导您在 reComputer 上安装 CLIP。CLIP 通过将图像与文本匹配，而无需传统标签，实现零样本图像识别。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/pose_based_light_control_with_nodered_and_rpi_with_aikit/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
            <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/clip_application_on_rpi5_with_ai_kit/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时能够获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>