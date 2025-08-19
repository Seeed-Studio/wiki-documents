---
description: 本维基提供了关于使用基于 Raspberry Pi 4 的工业物联网边缘控制器 reComputer R1000 的全面指南。内容包括设置 Node-RED、使用 YABE 模拟房间温度，以及发现和读取 BACnet IP 设备参数以实现高效的楼宇管理系统 (BMS) 集成。

title: 使用 Node-Red 和 BACnet IP 的 reComputer R1000
keywords:
  - 边缘控制器
  - reComputer R1000
  - Node-Red
  - Bacnet
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/reComputer_r1000_node_red_bacnet_ip
last_update:
  date: 2024/06/20
  author: ShuishengPeng
---

## 简介
BACnet IP（基于 IP 的楼宇自动化和控制网络）是一种用于管理和自动化楼宇系统的通信协议。它使来自不同制造商的设备能够在标准 IP 网络上无缝互操作，从而增强系统集成性和灵活性。在楼宇管理系统 (BMS) 中，BACnet IP 的主要优势包括改进的可扩展性、更简单的安装和维护，以及利用现有网络基础设施的能力。BACnet IP 还支持实时数据交换，从而实现对楼宇系统的更好监控和控制。这带来了更高的能源效率、更低的运营成本，以及更好的居住舒适性和安全性。

本教程展示了如何使用 Node-RED 在 reComputer R1000 上读取 BACnet 设备数据并进行实时可视化显示。我们在一台运行 Windows 10 的 PC 上使用了 BACnet 设备模拟器来模拟真实的 BACnet 设备。reComputer R1000 和 Windows 10 PC 连接到同一台路由器，以确保它们处于同一网络段，然后读取并显示数据。

## 开始

在开始本项目之前，您需要按照以下描述提前准备好硬件和软件。

### 硬件准备

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### 软件准备

reComputer R1000 随附预装的 Raspberry Pi OS。如果您是第一次启动此设备，请阅读我们的 [入门指南](https://wiki.seeedstudio.com/cn/reComputer_r/)。有关 Node-RED 的信息，您可以参考[以下文章](https://wiki.seeedstudio.com/cn/Edge-Box-Getting-Started-with-Node-Red/)。建议您在继续阅读本维基之前先查看该指南。在本教程中，我们将连接运行 YABE 房间温度模拟器的主机 PC 和运行 Node-RED 的 reComputer R1000。

### 节点下载
本教程使用了 **"node-bacnet-contrib-extended"** 节点、**"node-red-contrib-loop"** 节点和 **"node-red-dashboard"** 节点。请在开始之前下载这些节点。有关如何下载节点的信息，您可以参考[教程](https://wiki.seeedstudio.com/cn/Edge-Box-Getting-Started-with-Node-Red/)。

### YABE

请访问此[链接](https://sourceforge.net/projects/yetanotherbacnetexplorer/)下载 YABE（Yet Another BACnet Explorer）。YABE 是一个多功能工具，可用于模拟和探索 BACnet 设备，非常适合测试和开发用途。下载并安装到您的主机 PC 后，YABE 将用于模拟房间温度数据，我们随后将在 reComputer R1000 上使用 Node-RED 读取和处理这些数据。

## 启动室温控制器模拟器

安装 YABE 后，导航到 `add-on` 文件夹并双击 `bacnet.Room.Simulator` 以启动它。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/room-simulator.PNG" /></center>

完成后，需要启动 YABE。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/Yabe-app.png" /></center>

然后，点击 `+` 号以添加设备，并输入您电脑以太网端口的 IP 地址。点击“Start”。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/YABE-config.PNG" /></center>

:::note
您可能需要配置以太网端口的 IP 地址，以确保它与 reComputer 和您的电脑处于同一网络域中。
:::

之后，您应该能够看到与室温模拟器相同设备 ID 的设备。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/simulator&YABE.PNG" /></center>

## Node-red 读取 BACnet 设备的过程

打开 RoomSimulator 后，您将拥有一个 BACnet 设备。以下步骤将通过 Node-red 读取设备数据并显示。

### 第 1 步：搜索设备

首先，您需要获取 BACnet 设备的位置。您可以使用 `"discover-devices"` 节点来实现。这可以搜索所有连接到您的 BACnet 设备，并显示其 IP 地址和设备编号。

<center><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Node_red_pic/1Search_device.gif" /></center>

### 第 2 步：读取数据

获取设备地址后，您可以与相应设备通信。本示例使用 `"read-single-device"` 来读取设备中的所有数据。该节点需要设备的地址和设备编号。这两条信息可以从第一步中获得。我们可以使用 `"function"` 节点获取这两条信息，并将其输入到 `"read-single-device"` 节点以读取设备数据。您可以在右侧调试窗口中复制 deviceID 和 Address 属性的路径，然后将其分配给 `"function"` 中的变量，以准确获取设备的地址和设备编号。

<center><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Node_red_pic/2ReadSingleDevice.gif" /></center>

### 第 3 步：过滤数据

在第二步中读取了大量数据项。我们需要处理这些数据以获取所需的数据项。这里我们提取了三个温度数据，分别是“室内温度”、“室外温度”和“水温”。与第二步相同，我们在调试窗口中复制相应数据项的路径，然后在 `"function"` 节点中提取它们。之后，我们就可以使用这三项数据了。

<center><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Node_red_pic/3Filter_data.gif" /></center>

- 以下是过滤数据的代码：
```javascript
var Temperature_Indoor = Number(msg.payload["OBJECT_LIST(76)"][1]["PRESENT_VALUE(85)"]); 
var Temperature_Waterm = Number(msg.payload["OBJECT_LIST(76)"][2]["PRESENT_VALUE(85)"]); 
var Temperature_Outdoor = Number(msg.payload["OBJECT_LIST(76)"][3]["PRESENT_VALUE(85)"]); 
var msg0 = { payload: Temperature_Indoor };
var msg1 = { payload: Temperature_Waterm };
var msg2 = { payload: Temperature_Outdoor };
return [msg0, msg1, msg2];
```

### 第 4 步：循环读取

我们需要持续从 BACnet 设备获取数据，这需要使用 `"loop"` 节点。如图所示，我们在第三步的基础上引入 `"loop"` 节点以加入循环。`"loop"` 节点有三种循环模式。我们使用 `"condition"` 模式，在循环条件中输入 `"1 == 1"` 以实现无限循环。同时，添加一个 `"delay"` 节点，在循环中引入 2 秒的延迟，以便每 2 秒读取一次数据。

<center><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Node_red_pic/4Loop_reading.gif" /></center>

### 第 5 步：数据展示

通过以上 4 步，我们可以持续从 BACnet 设备获取数据。为了使数据变化更加直观，我们可以引入 UI 功能并绘制一个 UI 交互界面来显示数据变化。这可以通过 **"node-red-dashboard"** 节点实现。在本示例中，使用 `"chart"` 和 `"gauge"` 绘制了三组折线图和仪表盘。第 4 步的输出作为 `"chart"` 和 `"gauge"` 的输入，从而实现对 BACnet 数据的实时可视化监控。

<center><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Node_red_pic/5show.gif" /></center>

本节主要介绍了如何使用 **"node-bacnet-contrib-extended"** 和 **"node-red-dashboard"** 节点实现对 BACnet 设备数据的可视化读取。有关 **"node-bacnet-contrib-extended"** 节点的更多使用说明，您可以参考[本教程](https://wiki.seeedstudio.com/cn/edge_box_rpi_200_node_red_bacnet_tcp/)。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>