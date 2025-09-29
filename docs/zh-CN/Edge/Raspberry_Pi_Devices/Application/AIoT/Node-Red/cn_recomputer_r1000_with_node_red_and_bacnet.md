---
description: 本wiki提供了使用reComputer R1000的全面指南，这是一款基于Raspberry Pi 4的工业物联网边缘控制器。它包括设置Node-RED、使用YABE模拟房间温度以及发现和读取BACnet IP设备参数的说明，以实现高效的楼宇管理系统(BMS)集成。

title: reComputer R1000与Node-Red和BACnet IP
keywords:
  - Edge Controller
  - reComputer R1000
  - Node-Red
  - Bacnet
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/reComputer_r1000_node_red_bacnet_ip
last_update:
  date: 06/20/2024
  author: ShuishengPeng
---

## 介绍
BACnet IP（基于IP的楼宇自动化和控制网络）是一种专为管理和自动化楼宇系统而设计的通信协议。它使来自不同制造商的设备能够在标准IP网络上无缝互操作，增强了系统集成和灵活性。BACnet IP在楼宇管理系统(BMS)中的主要优势包括改善的可扩展性、更容易的安装和维护，以及利用现有网络基础设施的能力。BACnet IP还支持实时数据交换，促进了对楼宇系统更好的监控和控制。这导致了能源效率的提高、运营成本的降低，以及居住者舒适度和安全性的增强。

本教程展示了在reComputer R1000上使用node-red读取BACnet设备数据并进行实时可视化显示的过程。我们在W10 PC上使用了一个BACnet设备模拟器来模拟真实的BACnet设备。reComputer R1000和W10 PC连接到同一个路由器，以确保它们在同一网段内，然后读取和显示数据。

## 开始使用

在开始这个项目之前，您可能需要按照这里描述的提前准备您的硬件和软件。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### 软件准备

reComputer R1000 出厂时预装了 Raspberry Pi OS。如果您是第一次启动此设备，请阅读我们的[入门指南 Wiki](https://wiki.seeedstudio.com/cn/reComputer_r/)。有关 node-red 的信息，您可以参考[以下文章](https://wiki.seeedstudio.com/cn/Edge-Box-Getting-Started-with-Node-Red/)。建议您在继续阅读本 wiki 之前先查看此指南。在本教程中，我们将连接运行 YABE 室温模拟器的主机 PC 与运行在 reComputer R1000 上的 Node-RED。

### 节点下载
本教程使用 **"node-bacnet-contrib-extended"** 节点、**"node-red-contrib-loop"** 节点和 **"node-red-dashboard"** 节点。请在开始前下载它们。有关如何下载节点，您可以参考[教程](https://wiki.seeedstudio.com/cn/Edge-Box-Getting-Started-with-Node-Red/)。
### YABE

请访问此[链接](https://sourceforge.net/projects/yetanotherbacnetexplorer/)并下载 YABE（Yet Another BACnet Explorer）。YABE 是一个多功能工具，允许您模拟和探索 BACnet 设备，非常适合测试和开发目的。在您的主机 PC 上下载并安装后，YABE 将用于模拟室温数据，然后我们将使用 reComputer R1000 上的 Node-RED 读取和处理这些数据。


## 启动室温控制器模拟器

安装 YABE 后，导航到 `add-on` 文件夹并双击 `bacnet.Room.Simulator` 启动它。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/room-simulator.PNG" /></center>

完成后，您需要启动 YABE。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/Yabe-app.png" /></center>

然后，点击 `+` 标记添加设备并输入您 PC 以太网端口的 IP 地址。点击"Start"。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/YABE-config.PNG" /></center>

:::note
您可能需要配置以太网端口 IP 地址，以确保它与 reComputer 和您的 PC 在同一网络域中。
:::


之后，您应该能够看到与室温模拟器具有相同设备 ID 的设备。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/simulator&YABE.PNG" /></center>

## Node-red 读取 BACnet 设备的过程
打开 RoomSimulator 后，您就有了一个 BACnet 设备。以下步骤可以通过 Node-red 读取设备数据并显示它。
### 步骤 1：搜索设备
首先，您需要获取 BACnet 设备的位置。您可以使用 `"discover-devices"` 节点来实现这一点。它可以搜索连接到您的所有 BACnet 设备并显示 IP 地址和设备号。

<center><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Node_red_pic/1Search_device.gif" /></center>

### 步骤 2：读取数据
获取设备地址后，您可以与相应的设备通信。此示例使用 `"read-single-device"` 读取设备中的所有数据。该节点需要设备的地址和设备号。这两个信息可以从第一步获得。我们可以使用 `"function"` 节点获取这两个信息并将其输入到 `"read-single-device"` 节点以读取设备数据。您可以在右侧调试窗口中复制 deviceID 和 Address 属性的路径，然后在 `"function"` 中将它们分配给变量，这样您就可以准确获取设备的地址和设备号。

<center><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Node_red_pic/2ReadSingleDevice.gif" /></center>

### 步骤 3：过滤数据
第二步中读取的数据项很多。我们需要处理它们以获取我们想要的数据项。这里我们提取三个温度数据，即"Tempture indoor"、"Tempture outdoor"、"Tempture Water"，方法与第二步相同。我们在调试窗口中复制相应数据项的路径，然后在 `"function"` 节点中提取它。之后，我们就可以使用这三项数据了。

<center><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Node_red_pic/3Filter_data.gif" /></center>

- 以下是过滤数据的代码
```javascript
var Temperature_Indoor = Number(msg.payload["OBJECT_LIST(76)"][1]["PRESENT_VALUE(85)"]); 
var Temperature_Waterm = Number(msg.payload["OBJECT_LIST(76)"][2]["PRESENT_VALUE(85)"]); 
var Temperature_Outdoor = Number(msg.payload["OBJECT_LIST(76)"][3]["PRESENT_VALUE(85)"]); 
var msg0 = { payload: Temperature_Indoor };
var msg1 = { payload: Temperature_Waterm };
var msg2 = { payload: Temperature_Outdoor };
return [msg0, msg1, msg2];
```

### 步骤 4：循环读取
我们需要持续从 BACnet 设备获取数据，这需要使用 `"loop"` 节点。如图所示，我们在第三步的基础上引入 `"loop"` 节点来加入循环。`"loop"` 节点有三种循环模式。我们使用 `"condition"` 模式，在循环条件中输入 `"1 == 1"` 来实现无限循环。同时，添加一个 `"delay"` 节点在循环中引入 2s 延迟，这样就可以每 2s 读取一次数据。

<center><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Node_red_pic/4Loop_reading.gif" /></center>

### 步骤 5：数据显示
通过以上 4 个步骤，我们可以持续从 BACnet 设备获取数据。为了使数据变化更加直观，我们可以引入 UI 功能并绘制一个 UI 交互界面来显示数据变化。这可以使用 **"node-red-dashboard"** 节点实现。在这个示例中，使用 `"chart"` 和 `"gauge"` 来绘制三组折线图和仪表盘。将步骤 4 的输出作为 `"chart"` 和 `"gauge"` 的输入，实现对 BACnet 数据的实时可视化监控。
<center><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Node_red_pic/5show.gif" /></center>

本节主要介绍如何使用 **"node-bacnet-contrib-extended"** 和 **"node-red-dashboard"** 节点来实现 BACnet 设备数据的可视化读取。更多关于 **"node-bacnet-contrib-extended"** 节点的使用说明，您可以参考[此教程](https://wiki.seeedstudio.com/cn/edge_box_rpi_200_node_red_bacnet_tcp/)。

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
