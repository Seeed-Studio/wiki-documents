---
description: 学习如何使用 Edge Box RPi 200 和 Node-RED 设置和配置 Modbus RTU 通信。本指南涵盖安装 Modbus 节点、配置 Modbus 获取器和服务器，以及使用功能块提取温度和湿度数据。按照分步说明，将 Modbus RTU 设备无缝集成到您的工业物联网设置中。轻松实现高效的过程监控和控制。

title: 使用 Edge Box RPi 200、Node-RED 和 Modbus RS485
keywords:
  - 边缘控制器
  - Edge-Box
  - Node-Red
  - Modbus RTU
  - RS 485
image: https://files.seeedstudio.com/wiki/Edge_Box/nodered/EdgeBox-RPi-200-font.jpg
slug: /cn/edge_box_rpi_200_node_red_modbus_rs485
last_update:
  date: 06/07/2024
  author: Kasun Thushara
---

## 简介

Modbus RTU（远程终端单元）是一种在工业自动化中广泛使用的协议，用于通过串行通信线路连接传感器和控制器等设备。由于其简单性和可靠性，它被广泛应用于工业过程的监控和控制。Edge Box RPi 200 是基于 Raspberry Pi 的工业物联网网关，能够将 Modbus RTU 设备集成到现代网络中。使用 Node-RED（一种基于流程的开发工具），本指南将指导用户如何在 Edge Box RPi 200 上设置 Modbus RTU 通信。它重点介绍了能源管理、环境监测和过程控制等应用场景。本资源提供了一种快速实用的方法，帮助用户在各种工业场景中利用 Modbus RTU。

## 开始准备

在开始这个项目之前，您需要按照以下说明提前准备好硬件和软件。

### 硬件准备

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Edge Box RPi 200</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### 软件准备

Edge Box 随附预装的 Raspberry Pi OS。如果您是第一次启动此设备，请阅读我们的 [入门指南 Wiki](https://wiki.seeedstudio.com/cn/Edge_Box_introduction/)。我们还准备了 [Node-RED 入门指南](https://wiki.seeedstudio.com/cn/Edge-Box-Getting-Started-with-Node-Red/)。建议您在继续阅读本指南之前先查看这些资源。在本教程中，我们将连接运行 YABE 室温模拟器的主机 PC与运行在 Edge Box 上的 Node-RED。

### RS485
在 Edge Box RPi 200 中，有一个 RS-485 端口。您可以在[这里](https://wiki.seeedstudio.com/cn/Edge_Box_introduction/#serial-ports--rs232-and-rs485)找到更多详细信息。在使用 Node-RED 之前，请正确连接设备。

## 安装 Modbus 节点

要安装 Modbus 节点，请在您的 Edge Box 上启动 Node-RED。通常可以通过打开浏览器并导航到 `http://<your-edgebox-ip>:1880` 来访问它。然后按照以下步骤操作：

**步骤 1.** 点击右上角的 **三条横线** 图标（设置按钮），然后选择 **Manage palette（管理调色板）**。

**步骤 2.** 在调色板选项卡中，导航到 **Install（安装）** 选项卡。

**步骤 3.** 使用节点搜索栏查找所需的 [Modbus 节点](https://flows.nodered.org/node/node-red-contrib-modbus)。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/pallet.PNG" /></center>

**步骤 4.** 点击节点旁边的 **Install（安装）** 按钮。

**步骤 5.** 如果出现提示，请在下拉警告窗口中点击 **Install（安装）** 按钮以确认安装。

**步骤 6.** 等待安装过程完成。完成后，**Install（安装）** 按钮应变为 **Installed（已安装）**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/nodered-edgebox1.gif" style={{width:800, height:'auto'}}/></div>

## 确定 Modbus 地址

确定正确的 Modbus 地址是一个关键步骤。建议查阅 PLC、设备或传感器制造商的技术手册，以获取有关 Modbus 地址的详细信息，包括输入、输出和保持寄存器。

这里我们将使用 SHT20 RS485 温度传感器。该传感器使用 RS485 硬件接口（带有防雷设计），协议层兼容标准工业 Modbus-Rtu 协议。当我们查看数据手册时，可以找到提供温度和湿度数据的输入寄存器。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/datasheet.PNG" style={{width:600, 
height:'auto'}}/></div>

## 从设备获取数据

所需节点：`Modbus Getter`，2 个 `Function` 节点，2 个 `Debug` 节点，`Modbus Response`。

拖放这些节点并按照以下方式/顺序连接它们。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/flow-rtu.PNG" style={{width:600, 
height:'auto'}}/></div>

### 配置 Modbus Getter 节点

1. 双击 **Modbus Getter** 节点。
2. 将 **Unit ID** 设置为 `1`。
3. 将 **FC** 设置为 `FC4: Read Input Registers`。
4. 将 **Address** 设置为 `1`（根据模拟设备数据手册提供）。
5. 将 **Quantity** 设置为 `2`（读取两个块）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus_getter.PNG" style={{width:600, 
height:'auto'}}/></div>

### 配置 Modbus Server

1. 在 **Server** 部分，点击铅笔按钮以创建新的服务器配置。
2. 给服务器命名。
3. 将 **Type** 设置为 `Serial Expert`。
4. 将 **Serial Port** 设置为 `/dev/ttyACM0`。
5. 将 **Serial Type** 设置为 `RTU`。
6. 保持其他设置不变。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus_server_rtu.PNG" style={{width:600, 
height:'auto'}}/></div>

### 配置 Function 块

我们使用 Function 块提取相关的温度和湿度值。Getter 节点的输出是一个包含整数和浮点部分的十进制数，因此我们需要使用基本数学运算进行调整。

#### 温度
```javascript
var tempMsg = { payload: msg.payload[0] / 100.0 };
return tempMsg;
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/temp_javascript.PNG" style={{width:600, 
height:'auto'}}/></div>

#### 湿度
```javascript
var humidMsg = { payload: msg.payload[1] / 100.0 };
return humidMsg;
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/hum_javascript.PNG" style={{width:600, 
height:'auto'}}/></div>

### 部署

按下 **Deploy（部署）** 按钮。您将在调试窗口中看到湿度和温度的值。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/rtu2.gif" style={{width:800, 
height:'auto'}}/></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>