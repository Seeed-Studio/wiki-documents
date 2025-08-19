---
description: 本维基提供了使用 Node-RED 在由 Raspberry Pi 驱动的 reComputer R1000 上设置 OPC UA 服务器的分步指南。内容包括详细的安装和配置 OPC UA 服务器节点的说明、连接 Modbus TCP 和 RTU 设备，以及使用 UaExpert OPC 客户端监控数据。非常适合希望轻松集成和可视化工业数据的用户。
title: 使用 Node-RED 将 reComputer R1000 作为 OPC UA 服务器

keywords:
  - 边缘控制器
  - reComputer R1000
  - Node-Red
  - Modbus
  - OPC UA
  
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/recomputer_r1000_nodered_opcua_server
last_update:
  date: 08/14/2024
  author: Kasun Thushara
---

## 介绍

OPC Unified Architecture (UA) 于 2008 年推出，代表了工业通信标准的一次重大演进。与其前身 OPC Classic 系列相比，OPC UA 是一个平台无关的面向服务的架构，将之前所有 OPC 规范的功能统一到一个可扩展的框架中。这种现代化方法不仅保留了 OPC Classic 的核心功能，还通过多层设计增强了其能力，以满足当今工业环境的复杂需求。

OPC UA 的架构设计遵循以下关键原则：它通过将所有基于 COM 的 OPC Classic 规范映射到 UA 框架，确保了**功能等效性**，从而实现了对旧系统的无缝过渡。OPC UA 的**平台独立性**使其能够在从嵌入式微控制器到云基础设施的广泛设备上运行，具有高度的灵活性和未来适应性。**安全性**是 OPC UA 的核心，提供强大的加密、认证和审计功能，以保护数据的完整性和机密性。此外，其**可扩展性**允许在不影响现有应用的情况下持续集成新功能，确保其能够适应不断变化的工业需求。OPC UA 的**全面信息建模**能力还提供了定义复杂信息结构的强大工具，非常适合需要详细且可扩展数据管理解决方案的行业。

## 开始准备

在开始这个项目之前，您需要提前准备好硬件和软件，如下所述。

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

在本教程中，我们将创建一个实际示例，展示如何使用 Node-RED 将 reComputer R1000 设置为 OPC UA 服务器。我们将重点收集来自 Modbus TCP 和 RTU 设备的数据，但值得注意的是，您也可以从 MQTT、BACnet 和其他设备收集数据。为了演示，我们将特别使用 Modbus TCP 和 RTU。如果您不熟悉如何从这些协议中收集数据，请参考我们之前的教程：
- [使用 Node-RED 和 BACnet IP 的 reComputer R1000](https://wiki.seeedstudio.com/cn/reComputer_r1000_node_red_bacnet_ip/)
- [使用 Node-RED 和 Modbus TCP 的 reComputer R1000](https://wiki.seeedstudio.com/cn/recomputer_r1000_node_red_modbus_tcp/)
- [使用 Node-RED 和 MQTT 的 reComputer R1000](https://wiki.seeedstudio.com/cn/recomputer_r1000_nodered_mqtt/)

## 安装 OPC-UA 服务器节点

**访问 reComputer R1000 上的 Node-RED**

打开您的网页浏览器，导航到 `http://{reComputer_IP_ADDRESS}:1880`，以访问 reComputer R1000 上的 Node-RED 界面。

**安装 OPC-UA 服务器节点**

在 Node-RED 中，点击右上角菜单并选择“管理调色板”。

在“安装”选项卡中，搜索 `node-red-contrib-opcua-server`。

点击节点包旁边的“安装”按钮，将其添加到您的 Node-RED 环境中。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/gif1.gif" /></center>

**添加紧凑型 OPC-UA 服务器节点**

安装完成后，在 Node-RED 调色板中找到 OPC-UA 节点。将紧凑型服务器节点拖放到您的工作区中，以开始配置您的 OPC-UA 服务器。

## 端口配置：

将紧凑型服务器节点拖放到工作区后，双击它以打开配置设置。

在配置面板中，您将看到分配给服务器的端口号。请记下此端口号，因为后续步骤中需要用到。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/compact-server1.PNG" /></center>

**创建 Endpoint URL**

切换到配置设置中的 **Discovery**（发现）选项卡。

在这里，您需要为 OPC-UA 服务器创建一个 **Endpoint URL**。

使用以下格式创建 URL：
`opc.tcp://<IP_reComputer>:<Port>`

例如，如果您的 reComputer 的 IP 地址是 192.168.0.157，分配的端口是 54840，那么您的 Endpoint URL 将是：
`opc.tcp://192.168.0.157:54840`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/compact-server2.PNG" /></center>

## 在 Flow Context 中存储变量

在 Node-RED 中，`flow.set()` 函数用于将数据存储在 flow context 中，从而使信息可以被同一 flow 中的任何节点访问。这在需要在 flow 的不同部分之间共享数据时特别有用。

**添加 Function 节点**

将一个 Function 节点拖放到您的 Node-RED 工作区中。双击 Function 节点以打开其编辑器。

**存储温度数据**

假设您希望将来自 Modbus RTU 传感器的温度值存储为 flow context 变量。在 Function 节点编辑器中，输入以下代码：

```bash
flow.set("Temperature", msg.payload);
```

此代码将温度数据（包含在 `msg.payload` 中）保存到名为 "Temperature" 的 flow context 变量中。

**连接 Function 节点**

将此 Function 节点连接到接收原始温度数据的节点。这样可以确保温度值在从传感器接收到后立即被存储。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/gif2.gif" /></center>

**存储 PLC DI/DO 值**

如果您需要存储来自 PLC 数字输入/输出（DI/DO）数组的特定值，可以使用类似的方法。例如，要存储数组中第三个线圈的值，请使用以下代码：

```bash
flow.set("Coil3", msg.payload[2]);
```

此代码从 `msg.payload` 数组中提取第三个值，并将其存储到名为 "Coil3" 的 flow context 变量中。

**连接 DI/DO 的 Function 节点**

将此 Function 节点连接到输出 DI/DO 数组的节点。这样，每次数组更新时，特定的线圈值都会被存储。

## OPC UA 服务器地址空间设置

**地址空间**选项卡是构建 OPC UA 服务器信息模型的地方。该模型使用来自 node-opcua SDK 的类和方法定义了 OPC UA 客户端可用的结构和数据。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/compact-server4.PNG" /></center>

```bash
// 从 coreServer 导入 OPC UA SDK 和实用工具
const opcua = coreServer.choreCompact.opcua;

```
### 命名空间创建

**命名空间**是在服务器的地址空间内创建的。此命名空间将包含所有特定于您的应用程序的节点和变量。

```bash
// 在地址空间内为服务器创建一个新的命名空间
const namespace = addressSpace.getOwnNamespace();
// 内部引用服务器实例以在函数中使用
var flexServerInternals = this;

```

### OPC UA 数据类型和状态码

OPC UA SDK 中的 **Variant、DataType 和 StatusCodes** 类用于定义服务器将发布的变量的类型和状态。

```bash
// 定义 OPC UA 数据结构和类型以供后续使用
const Variant = opcua.Variant;
const DataType = opcua.DataType;
const StatusCodes = opcua.StatusCodes;

```
### 初始化变量

将在服务器中发布的变量在流程上下文中初始化。这些变量表示客户端将读取或写入的数据。

```bash
// 在流程上下文中初始化将由 OPC UA 服务器公开的变量
this.sandboxFlowContext.set("Coil2", 0);
this.sandboxFlowContext.set("Coil3", 0);
this.sandboxFlowContext.set("Humidity", 0);
this.sandboxFlowContext.set("Temperature", 0);

```

### 在地址空间中定义文件夹结构

在服务器的命名空间中定义文件夹结构以组织节点。此结构使客户端更容易浏览可用数据。

```bash
// 在地址空间中找到根文件夹节点
const rootFolder = addressSpace.findNode("RootFolder");

// 在根文件夹下为 RaspberryPI-reComputer 添加一个新设备文件夹
const myDevice = namespace.addFolder(rootFolder.objects, {
    "browseName": "RaspberryPI-reComputer"
});

// 在设备文件夹下添加数字输出 (DIO) 和模拟值的子文件夹
const isoOutputs = namespace.addFolder(myDevice, { "browseName": "DIO" });
const Analogvalues = namespace.addFolder(myDevice, { "browseName": "Analog" });

```

### 定义 OPC UA 视图

OPC UA 视图是自定义层次结构，提供了除默认文件夹结构之外的客户端浏览服务器数据的替代方式。

```bash
// 为数字输出 (DO) 创建一个视图
const viewDO = namespace.addView({
    "organizedBy": rootFolder.views,
    "browseName": "PLC-Digital-Outs"
});

// 为模拟值创建一个视图
const Analogvals = namespace.addView({
    "organizedBy": rootFolder.views,
    "browseName": "Analog_Values"
});

// 在各自的视图中添加对节点的引用
Analogvals.addReference({
    "referenceType": "Organizes",
    "nodeId": Humid.nodeId  // 引用湿度节点
});

viewDO.addReference({
    "referenceType": "Organizes",
    "nodeId": gpioDI1.nodeId  // 引用 Coil2 节点
});
```

## 使用 UaExpert 连接到 OPC UA 服务器

要连接到我们的 OPC UA 服务器端点，您需要一个 OPC UA 客户端。请按照以下步骤开始操作：

**下载 UaExpert**

[访问](https://www.unified-automation.com/downloads/opc-ua-clients)并注册以下载 UaExpert，这是一个免费的 OPC UA 客户端。

**安装 UaExpert**

下载完成后，根据屏幕上的说明在您的计算机上安装 UaExpert。

**设置连接**

启动 UaExpert 并进入 Endpoints 部分。通过输入您的 OPC UA 服务器的端点 URL 创建一个新连接。
例如：`opc.tcp://<IP_reComputer>:<Port>`

示例：`opc.tcp://192.168.0.157:54840`

根据您的服务器配置，设置必要的安全设置或连接规则。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/opcua.PNG" /></center>

**连接到服务器**

连接建立后，导航到 UaExpert 的 Address Space 部分。您会看到一个名为 RaspberryPI-reComputer 的主文件夹，这是您在 Node-RED 中创建的。在这个主文件夹中，您会找到两个子文件夹：Analog 和 DIO。

**监控数值**

将 Analog 和 DIO 文件夹中的变量拖放到 UaExpert 的数据视图区域。现在，您可以直观地监控系统运行时数值的实时变化。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/opcua-demo.gif" /></center>

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>