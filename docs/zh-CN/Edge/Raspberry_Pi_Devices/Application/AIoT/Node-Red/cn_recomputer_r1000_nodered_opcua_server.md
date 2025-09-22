---
description: 本wiki提供了在基于树莓派的reComputer R1000上使用Node-RED设置OPC UA服务器的分步指南。它包含安装和配置OPC UA服务器节点、连接Modbus TCP和RTU设备以及使用UaExpert OPC客户端监控数据的详细说明。非常适合那些希望轻松集成和可视化工业数据的用户。
title: reComputer R1000作为OPC UA服务器与Node-RED

keywords:
  - Edge Controller
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

OPC统一架构（UA）于2008年推出，代表了工业通信标准的重大发展。与OPC Classic系列的前身不同，OPC UA是一个平台无关的、面向服务的架构，将之前所有OPC规范的功能统一到一个可扩展的框架中。这种现代化的方法不仅保留了OPC Classic的核心功能，还通过多层设计增强了这些功能，以满足当今工业环境的复杂需求。

OPC UA的架构设计考虑了关键原则：它通过将所有基于COM的OPC Classic规范映射到UA框架来确保**功能等效性**，为传统系统提供无缝过渡。OPC UA的**平台独立性**使其能够在从嵌入式微控制器到基于云的基础设施等广泛的设备上运行，使其具有多功能性和面向未来的特点。**安全性**是OPC UA的基石，具有强大的加密、身份验证和审计功能来保护数据完整性和机密性。此外，其**可扩展性**允许持续集成新功能而不会中断现有应用程序，确保它能够适应不断发展的工业需求。OPC UA的**全面信息建模**功能还提供了定义复杂信息结构的强大工具，使其成为需要详细和可扩展数据管理解决方案的行业的理想选择。

## 开始使用

在开始这个项目之前，您可能需要按照此处描述的内容提前准备硬件和软件。

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

在本教程中，我们将创建一个实际示例，将我们的 reComputer R1000 设置为使用 Node-RED 的 OPC UA 服务器。我们将专注于从 Modbus TCP 和 RTU 设备收集数据，不过值得注意的是，您也可以从 MQTT、BACnet 和其他设备收集数据。出于演示目的，我们将特别使用 Modbus TCP 和 RTU。如果您不熟悉从这些协议收集数据，请参考我们之前的教程：

- [搭载 Node-RED 和 BACnet IP 的 reComputer R1000](https://wiki.seeedstudio.com/cn/reComputer_r1000_node_red_bacnet_ip/)
- [搭载 Node-RED 和 Modbus TCP 的 reComputer R1000](https://wiki.seeedstudio.com/cn/recomputer_r1000_node_red_modbus_tcp/)
- [搭载 Node-RED 和 MQTT 的 reComputer R1000](https://wiki.seeedstudio.com/cn/recomputer_r1000_nodered_mqtt/)

## 安装 OPC-UA 服务器节点

**访问 reComputer R1000 上的 Node-RED**

打开您的网络浏览器，导航到 `http://{reComputer_IP_ADDRESS}:1880` 以访问您的 reComputer R1000 上的 Node-RED 界面。

**安装 OPC-UA 服务器节点**

在 Node-RED 中，转到右上角菜单并选择管理调色板。

在安装选项卡中，搜索 `node-red-contrib-opcua-server`。

点击节点包旁边的安装按钮，将其添加到您的 Node-RED 环境中。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/gif1.gif" /></center>

**添加紧凑型 OPC-UA 服务器节点。**

安装完成后，在 Node-RED 调色板中找到 OPC-UA 节点。将紧凑型服务器节点拖放到您的工作区中，开始配置您的 OPC-UA 服务器。

## 端口配置

将紧凑型服务器节点拖到工作区后，双击它以打开配置设置。

在配置面板中，您将看到分配给服务器的端口号。记下这个端口号，因为您在下一步中会需要它。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/compact-server1.PNG" /></center>

**创建端点 URL**

在配置设置中切换到 **Discovery** 选项卡。

在这里，您需要为 OPC-UA 服务器创建一个 **端点 URL**。

使用以下格式的 URL：
`opc.tcp://<IP_reComputer>:<Port>`

例如，如果您的 reComputer 的 IP 地址是 192.168.0.157，分配的端口是 54840，您的端点 URL 将是：
`opc.tcp://192.168.0.157:54840`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/compact-server2.PNG" /></center>

## 在流上下文中存储变量

在 Node-RED 中，flow.set() 函数用于将数据存储在流上下文中，使您能够保存可以被同一流中任何节点访问的信息。当您需要在流的不同部分之间共享数据时，这特别有用。

**添加函数节点**

将函数节点拖放到您的 Node-RED 工作区中。双击函数节点以打开其编辑器。

**存储温度数据**

假设您想要将来自 Modbus RTU 传感器的温度值存储为流上下文变量。在函数节点编辑器中，输入以下代码。

```bash
flow.set("Temperature", msg.payload);

```

这段代码将温度数据（包含在 msg.payload 中）保存到名为 "Temperature" 的流上下文变量中。

**连接功能节点**

将此功能节点连接到原始温度数据输入的节点。这确保温度值在从传感器接收到时立即被存储。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/gif2.gif" /></center>

**存储 PLC DI/DO 值**

如果您需要从 PLC 数字输入/输出 (DI/DO) 数组中存储特定值，可以使用类似的方法。例如，要存储数组中第三个线圈的值，请使用以下代码：

```bash
flow.set("Coil3", msg.payload[2]);

```

这段代码从 msg.payload 数组中提取第三个值，并将其存储在名为"Coil3"的流上下文变量中。

**连接 DI/DO 的功能节点**

将此功能节点连接到输出 DI/DO 数组的节点。这将在每次更新数组时存储特定的线圈值。

## OPC UA 服务器地址空间设置

**地址空间**选项卡是构建 OPC UA 服务器信息模型的地方。该模型使用 node-opcua SDK 中的类和方法定义了 OPC UA 客户端可用的结构和数据。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/compact-server4.PNG" /></center>

```bash
// Import the OPC UA SDK and utilities from the coreServer
const opcua = coreServer.choreCompact.opcua;

```

### 命名空间创建

**命名空间**在服务器的地址空间内创建。此命名空间将包含特定于您应用程序的所有节点和变量。

```bash
// Create a new namespace for the server within the address space
const namespace = addressSpace.getOwnNamespace();
// Internal reference to the server instance for use within functions
var flexServerInternals = this;

```

### OPC UA 数据类型和状态码

来自 OPC UA SDK 的 **Variant、DataType 和 StatusCodes** 类用于定义服务器将发布的变量的类型和状态。

```bash
// Define OPC UA data structures and types for later use
const Variant = opcua.Variant;
const DataType = opcua.DataType;
const StatusCodes = opcua.StatusCodes;

```

### 初始化变量

将由服务器发布的变量在流程上下文中进行初始化。这些变量代表客户端将读取或写入的数据。

```bash
// Initialize variables in the flow context that will be exposed by the OPC UA server
this.sandboxFlowContext.set("Coil2", 0);
this.sandboxFlowContext.set("Coil3", 0);
this.sandboxFlowContext.set("Humidity", 0);
this.sandboxFlowContext.set("Temperature", 0);

```

### 在地址空间中定义文件夹结构

在服务器的命名空间内定义文件夹结构来组织节点。这种结构使客户端更容易浏览可用数据。

```bash
// Find the root folder node in the address space
const rootFolder = addressSpace.findNode("RootFolder");

// Add a new device folder under the root for the RaspberryPI-reComputer
const myDevice = namespace.addFolder(rootFolder.objects, {
    "browseName": "RaspberryPI-reComputer"
});

// Add subfolders for digital outputs (DIO) and analog values under the device folder
const isoOutputs = namespace.addFolder(myDevice, { "browseName": "DIO" });
const Analogvalues = namespace.addFolder(myDevice, { "browseName": "Analog" });

```

### 定义 OPC UA 视图

OPC UA 视图是自定义层次结构，为客户端提供除默认文件夹结构之外的替代方式来浏览服务器数据。

```bash
// Create a view for digital outputs (DO)
const viewDO = namespace.addView({
    "organizedBy": rootFolder.views,
    "browseName": "PLC-Digital-Outs"
});

// Create a view for analog values
const Analogvals = namespace.addView({
    "organizedBy": rootFolder.views,
    "browseName": "Analog_Values"
});

// Add references to the nodes in the respective views
Analogvals.addReference({
    "referenceType": "Organizes",
    "nodeId": Humid.nodeId  // Reference to the Humidity node
});

viewDO.addReference({
    "referenceType": "Organizes",
    "nodeId": gpioDI1.nodeId  // Reference to the Coil2 node
});
```

## 使用 UaExpert 连接到 OPC UA 服务器

要连接到我们的 OPC UA 服务器端点，您需要一个 OPC UA 客户端。按照以下步骤开始：

**下载 UaExpert**

[访问](https://www.unified-automation.com/downloads/opc-ua-clients) 并注册以下载 UaExpert，这是一个免费的 OPC UA 客户端。

**安装 UaExpert**

下载后，按照屏幕上的说明在您的计算机上安装 UaExpert。

**设置连接**

启动 UaExpert 并转到端点部分。通过输入您的 OPC UA 服务器的端点 URL 创建新连接。
例如：`opc.tcp://<IP_reComputer>:<Port>`

示例：`opc.tcp://192.168.0.157:54840`

根据您的服务器配置，配置任何必要的安全设置或连接规则。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/opcua.PNG" /></center>

**连接到服务器**

连接建立后，导航到 UaExpert 中的地址空间。您将看到标记为 RaspberryPI-reComputer 的主文件夹，这是您在 Node-RED 中创建的。在这个主文件夹内，您会找到两个子文件夹：Analog 和 DIO。

**监控数值**

将变量从 Analog 和 DIO 文件夹拖放到 UaExpert 数据视图区域。现在您可以在系统运行时直观地监控数值如何实时变化。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/opcua-demo.gif" /></center>

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
