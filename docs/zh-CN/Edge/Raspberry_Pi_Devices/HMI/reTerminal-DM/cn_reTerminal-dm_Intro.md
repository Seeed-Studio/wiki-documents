---
description: 介绍 reTerminal DM，这是一款 10.1 英寸的开源工业人机界面 (HMI)，同时也是一体化设备主控器。基于 Raspberry Pi CM4，这款多功能设备可用作面板电脑、HMI、PLC 和工业物联网网关。reTerminal DM 配备 IP65 工业级大屏幕，是下一代交互式感应中心，简化数据流和现场设备管理。
title: reTerminal DM 指南
keywords:
- reTerminal DM
- 入门指南
image: https://wdcdn.qpic.cn/MTY4ODg1NjEyODQyNTE2Nw_928147_NLYXC-4cRuQd5Tra_1681284617?w=1200&h=713
slug: /cn/reTerminal-dm_Intro
last_update:
  date: 07/05/2024
  author: Kasun Thushara
---

<div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NjEyODQyNTE2Nw_928147_NLYXC-4cRuQd5Tra_1681284617?w=1200&h=713" style={{width:800, height:'auto'}}/></div>

## reTerminal 入门指南

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reTerminal DM 入门指南</font></th>
      <th class="table-trnobg"><font size={"4"}>硬件和接口使用</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/reterminaldmtools.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本文档将涵盖硬件规格，包括 LoRaWAN®、WiFi、BLE、RS485/RS232、CAN 总线、1000M 以太网、USB、HDMI，以及其他功能。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本文档涵盖了附加硬件的安装，例如 SSD、摄像头、PEO 模块，以及 WiFi/BLE 天线、LoRaWAN 天线的组装等。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reterminal-dm/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reterminal-dm-hardware-guide/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>



## 操作系统安装

<br />

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Raspbian 操作系统</font></th>
      <th class="table-trnobg"><font size={"4"}>SenseCraft Edge</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/rpi.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/overview.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本文档将指导您完成 Raspberry Pi 操作系统及驱动程序的安装过程。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 在本文档中，您将探索专为 reTerminal DM 的 10.1 英寸 HMI 设备设计的 SenseCraft Edge 操作系统。它提供直观的界面和集成功能，实现设备配置和管理的无缝体验。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reterminal-dm-flash-OS/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reterminal-dm-sensecraft-edge-os-intro/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

## 应用场景

### 数据可视化

**在这个令人兴奋的部分中，准备好在几分钟内制作工业级的交互式仪表板吧！**

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>开始使用 FUXA - 基于 Web 的 SCADA 工具</font></th>
      <th class="table-trnobg"><font size={"4"}>reTerminal DM 和 Machinechat JEDI：您的工业物联网强力工具</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/demo-fuxa.gif" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/screenshot1.PNG" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 在本节中，我们将探索 FUXA，这是一款强大的基于 Web 的工具，可快速创建和部署 SCADA、HMI、仪表板或工业物联网系统。使用 FUXA，您可以轻松设计自定义流程可视化，显示实时数据，并在工业环境中控制设备。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Machinechat JEDI 简化了物联网数据管理，使得轻松收集、可视化、监控和响应实时数据成为可能。结合 Seeed 的 reTerminal DM，定制仪表板的制作时间不到 30 分钟。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal-DM_intro_FUXA/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminalDM_Introduction_Jedi_MachineChat/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

### 边缘 AI

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>使用 Edge Impulse 和 reTerminal DM 进行目标检测</font></th>
      <th class="table-trnobg"><font size={"4"}>使用 YOLOv5 训练自定义数据集并部署到 reTerminal DM</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
    		<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/edgeimpulse.gif" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/ppeyolo.gif" style={{width:300, height:'auto'}}/></div></td>
	</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 在本 Wiki 中，我们将探索使用 Edge Impulse 和 reTerminal DM 进行目标检测。Edge Impulse 使开发者能够利用真实世界数据创建和优化嵌入式机器学习解决方案。让我们深入了解细节。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 在本 Wiki 中，学习如何使用 YOLOv5 训练自己的数据集并将其部署到基于 Raspberry Pi 的 reTerminal DM 上。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal-DM-edgeimpulse/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal-DM-Yolo5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

### Home Assistant

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Frigate 与 reTerminal DM 的集成</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/HA/reterminalDM.gif" style={{width:300, height:'auto'}}/></div></td>
				</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Frigate 是一个开源的 NVR，专为实时 AI 目标检测设计。所有处理均在本地硬件上完成，确保您的摄像头视频流保持在家中。本 Wiki 将指导您安装 NVR 并展示目标检测功能。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reterminal-DM-Frigate/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
    </tr>
	</table>
</div>

### 云解决方案

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>AWS IoT Core 与 reTerminal DM 的集成</font></th>
      <th class="table-trnobg"><font size={"4"}>Azure IoT Edge 与 reTerminal DM 的集成</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/aws/tutorial1/awslogo.png" style={{width:300, height:'auto'}}/></div></td>
     <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/azure.jpg" style={{width:300, height:'auto'}}/></div></td>
				</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> AWS IoT Core 安全地连接和管理物联网设备，使其能够与云端通信以实现智能应用。我们的 Wiki 将指导您设置 reTerminal DM 设备以实现无缝的云通信。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 本 Wiki 描述了如何将运行 Debian 11 (ARM32v7) 的 reTerminal DM 设备与预装的 Azure IoT Edge Runtime 和设备管理功能连接。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal-DM_AWS_first/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/reTerminalDM/azure.jpg" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
    </tr>
	</table>
</div>

### 工业边缘 

<strong><span><font color={'4ec354'} size={"5"}> Node-red</font></span></strong>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reTerminal DM 使用 Node-Red 入门指南</font></th>
      <th class="table-trnobg"><font size={"4"}>reTerminal DM RS485 端口与 Node-RED</font></th>
      <th class="table-trnobg"><font size={"4"}>reTerminal DM MQTT 与 Node-RED</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered.svg" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/rs485.png" style={{width:300, height:'auto'}}/></div></td>
      	<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/MQTT.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 在本 Wiki 中，我们将在 reTerminal DM 上安装 Node-RED——一种直观的编程工具，通过基于浏览器的编辑器连接硬件设备、API 和在线服务，轻松创建流程并通过单击即可部署。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 在本 Wiki 中，探索如何使用内置的 Modbus 节点将 Modbus 设备集成到 Node-RED 工作流中。了解 RS485 协议，理解 Modbus，并发现如何将它们与 reTerminal DM 无缝集成。</font></td>
       <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 在本 Wiki 中，探索如何将 MQTT 集成到 Node-RED 中，利用其对该协议的支持构建强大的物联网应用。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal-DM-Getting-Started-with-Node-Red/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal-DM-Node-Red-RS485/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal-DM-Node-Red-mqtt/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reTerminal DM CAN BUS 与 Node-RED</font></th>
      <th class="table-trnobg"><font size={"4"}>reTerminal DM 与 Node-RED 和 Modbus TCP</font></th>
      <th class="table-trnobg"><font size={"4"}>reTerminal DM 与 Node-RED 和 BACnet TCP</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/canbus-connection.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/modbus-reterminal.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/bacnet-reterminaldm.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 在本 Wiki 中，将 CAN 总线模块与 Node-RED 集成，实现 ECU 之间的高效高速数据交换，广泛应用于汽车、工业自动化、医疗设备和航空航天领域。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 在本 Wiki 中，学习如何使用 Node-RED 在 reTerminal DM 上处理 Modbus TCP。了解 Modbus TCP 如何将协议扩展到以太网网络，实现更快的通信速度，并与现代 IT 基础设施无缝集成。</font></td>
       <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 在本 Wiki 中，探索 BACnet IP 在楼宇管理系统 (BMS) 中的优势，重点介绍 Node-RED 集成。了解如何通过 Node-RED 和 BACnet IP 实现更好的可扩展性、更简单的安装和维护，并利用现有网络基础设施。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal-DM-Node-Red-canbus/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reterminal_dm_node_red_modbus_tcp/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reterminal_dm_rpi_200_node_red_bacnet_tcp/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>使用 Node Red 和 InfluxDB 的 reTerminal DM</font></th>
      <th class="table-trnobg"><font size={"4"}>使用 Grafana 创建物联网仪表板的 reTerminal DM</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/influxdbicoon.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/grafana/reterminal-grafana-dash.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 在基于 Raspberry Pi 的 HMI 设备 reTerminal DM 上部署 InfluxDB，实现强大的时间序列数据收集和网络边缘分析。本指南详细介绍了安装、配置和使用 InfluxDB 的步骤，从而为物联网应用提供高效管理和实时洞察。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 在本 Wiki 中，学习如何在基于 Raspberry Pi 的 reTerminal DM 上安装 Grafana，将数据转化为有洞察力的可视化内容。将 Grafana 连接到现有的 InfluxDB 数据库，并创建一个直观的仪表板，以提升系统性能、简化故障排除，并通过强大的监控工具做出明智决策。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reterminal_dm_200_node_red_influxdb/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reterminal_dm_grafana/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<br/>
<strong><span><font color={'4ec354'} size={"5"}> Ignition Edge</font></span></strong>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reTerminal DM 入门指南 Ignition Edge</font></th>
      <th class="table-trnobg"><font size={"4"}>reTerminal DM Ignition Edge 面板构建器 Hello World</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/reTerminal_DM_Ignition_Edge.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-panel-view-helloworld.gif" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 通过在网络边缘的现场和 OEM 设备中嵌入 Ignition Edge，可以将 Ignition 的功能扩展到网络的边缘。通过本指南了解如何设置 reTerminal 设备。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 在本 Wiki 中，我们将演示如何创建一个基本页面并在固定 URL 上显示。我们将通过创建一个“Hello World”透视项目，并使用 Web 浏览器在网关上查看它。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal-DM-Getting-Started-with-Ignition-Edge/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminal-DM-Ignition-Edge-Panel-Builder/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<br/>
<strong><span><font color={'4ec354'} size={"5"}> N3uron</font></span></strong>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>reTerminal DM 入门指南 N3uron</font></th>
      <th class="table-trnobg"><font size={"4"}>连接 AWS IoT Core 与 N3uron</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_1.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://n3uron.com/wp-content/uploads/2021/09/How-to-Connect-Industrial-Assets-to-AWS-IoT.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> N3uron 是您工业边缘平台的首选，专为 IIoT 和 DataOps 设计，确保您的工厂车间与第三方应用程序之间的无缝集成，无论是在本地还是云端。在本教程中，我们将带您开启 N3uron 的探索之旅。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 在本教程中，我们将深入探讨 N3uron 边缘 IIoT 平台与 AWS IoT Core 之间的接口细节。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminalDM_N3uron_Get_Start/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminalDM_N3uron_AWS/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>连接支持 MQTT 和 Modbus 的设备到 N3uron</font></th>
        <th class="table-trnobg"><font size={"4"}>集成 Historian 模块以在 reTerminal DM 上可视化</font></th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/n3uron_mqtt_modbus_aws.png" style={{width:300, height:'auto'}}/></div></td>
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_Historian/graph.gif" style={{width:300, height:'auto'}}/></div></td>  
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 发现 reTerminal DM 和 N3uron Duo 的强大组合，为高效的工厂管理提供支持。我们的 Wiki 突出了 Modbus TCP 在工业环境中的重要性，并展示了无缝的 MQTT 设备集成，以增强连接性和数据操作能力。</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> 借助 Neuron Historian，轻松存储通过 N3uron Links 本地或远程收集的标签值。它还提供了一个方便的存储与转发功能，在通信中断期间保留数据。在本教程中，您将学习如何创建图表并轻松将数据保存为 CSV 文件。</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminalDM_N3uron_modbus_mqtt/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/reTerminalDM_N3uron_Historian/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a></div></td>
		</tr>
	</table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/banner.png" style={{width:1000, height:'auto'}}/></div> 
<table>
	<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/raspberry-pi" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>🔍 探索更多</font></span></strong></a></div></td>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/raspberry-pi-devices/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>🔙 返回 Pi 设备</font></span></strong></a></div></td>
		</tr>
	</table>

## ✨ 贡献者项目

- 我们为更新此页面制定了一份任务清单，该任务清单归类于我们的[贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)，因为我们致力于通过改进我们的 Wiki 平台来提升用户体验并提供更好的支持。
- [您对本页面的贡献](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33963038)对我们来说至关重要！我们非常重视您的意见，并非常感谢您为我们提供创意和帮助。



## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>