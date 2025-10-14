---
description: reTerminal DM RS485 端口与 Node-RED
title: reTerminal DM RS485 端口与 Node-RED
keywords:
  - Edge
  - reTerminal-DM
  - Node-Red
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal-DM-Node-Red-RS485
last_update:
  date: 04/04/2023
  author: Peter Pan
---

# reTerminal DM RS485 端口与 Node-RED

## 关于 RS485、Modbus、Modbus RTU 和 Modbus Node-RED 节点的简要信息

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

<br />

### RS485

RS485 是用于在设备之间传输数据的串行通信协议。RS485 是数据串行通信传输的标准，通常用于工业应用。它使用差分信号，这意味着有两条数据线（A 和 B）和一条地线（GND）用于通信。这种差分信号提供了更好的抗噪声能力，并允许更长的电缆长度，最长可达 4,000 英尺。RS485 的最大数据速率通常比 RS232 更高，可达 10 Mbps。RS485 专为多点通信而设计。这意味着 RS485 可以在同一总线上的多个设备之间传输数据。总之，RS485 通常用于多个设备之间的长距离通信，例如在工业控制系统中。

### Modbus RTU

Modbus RTU 是一种流行的工业通信协议，用于监控和数据采集（SCADA）系统中设备之间的数据交换。它是一种串行通信协议，运行在 RS485 或 RS232 总线标准之上。Modbus RTU 使用主从架构，其中主设备启动与一个或多个从设备的通信。主设备向从设备发送请求消息，然后从设备响应包含所请求数据的消息。Modbus RTU 消息由报头、数据和错误检查字段组成。报头包含有关消息的信息，例如从设备地址和功能代码。数据字段包含正在传输的实际数据。错误检查字段用于确保消息的完整性。Modbus RTU 支持多种数据类型，包括二进制、整数、浮点和字符串。它还支持一系列功能代码，允许不同类型的数据访问，例如读取保持寄存器、写入单个线圈和读取输入寄存器。Modbus RTU 的优势之一是其简单性和易于实现。它得到各种设备和软件的广泛支持，使其成为工业自动化和控制系统的热门选择。它也非常适合需要实时数据交换和低延迟通信的应用。

Modbus RTU 是一种流行的通信协议，用于各种工业应用，例如：

  *  楼宇自动化和控制系统：Modbus RTU 通常用于监控和控制照明、HVAC 和其他楼宇系统。

  *  能源管理系统：Modbus RTU 可用于监控和控制商业和工业建筑中的能源消耗。

  *  制造和过程控制：Modbus RTU 经常用于监控和控制制造过程，例如装配线、输送系统和包装机。

  *  水和废水处理：Modbus RTU 用于监控和控制水和废水处理设施中泵、阀门和其他设备的运行。

  *  石油和天然气生产：Modbus RTU 用于石油和天然气生产设施中监控和控制泵、压缩机和其他设备。

  *  可再生能源系统：Modbus RTU 可用于监控和控制太阳能电池板、风力涡轮机和其他可再生能源系统。

  *  交通系统：Modbus RTU 用于监控和控制交通系统中的交通信号灯、照明和其他设备。

一般来说，任何需要在工业环境中进行实时数据交换和低延迟通信的应用都可以从使用 Modbus RTU 中受益。

### Modbus 节点

Node-RED 有一个内置的 Modbus 节点，允许用户轻松地将 Modbus 设备集成到他们的 Node-RED 工作流中。Modbus 节点支持 Modbus TCP 和 Modbus RTU 协议，可用于从 Modbus 设备读取和写入数据。

要在 Node-RED 中使用 Modbus 节点，您只需将其拖放到画布上，并使用适当的 Modbus 设置进行配置，例如设备地址、功能代码和数据类型。配置完成后，Modbus 节点可以连接到工作流中的其他节点来处理和显示数据。

Node-RED 还有一系列其他节点和插件，可用于扩展其功能并与其他系统和设备集成。例如，有用于 MQTT、HTTP 和其他通信协议的节点，以及用于数据处理、可视化和存储的节点。

总的来说，Node-RED 为构建物联网和工业自动化应用提供了一个强大而灵活的平台，其内置的 Modbus 节点使得将 Modbus 设备集成到这些工作流中变得容易。

# 开始使用 reTerminal DM 上的 Modbus 节点

您可以在 [Modbus Node-RED](https://flows.nodered.org/node/node-red-contrib-modbus) 页面找到更多信息。

如果您使用的是 Senscraft Edge OS，您可以跳过 modbus 节点安装步骤，直接转到 [如何在 reTerminal DM 上使用 Modbus 节点](#how-to-use-modbus-node-with-retermianl-dm)

## 安装 Modbus 节点

在本节中，我们将安装 `node-red-contrib-modbus` 节点，因此请复习如何[安装节点](/cn/reTerminal-DM-Getting-Started-with-Node-Red#install-nodes)。

### 选项 1：命令行

首先，请复习通过 SSH 访问 reTerminal DM 的知识，请查看[这里](/cn/reterminal-dm-flash-OS#install-drivers)的步骤

一旦您通过 SSH 访问了 reTerminal DM，您可以继续执行以下步骤：

步骤 1：请转到 Node-RED 文件夹

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-folder.png" /></div><br />

```sh
cd .node-red/
```

步骤 2: 安装 Modbus 节点

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/npm-install-node.png" /></div><br />

```sh
npm install node-red-contrib-modbus
```

步骤 3：节点安装完成后，请使用以下命令重启 Node-RED 服务：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-restart.png" /></div><br />

```sh
node-red-restart
```

### 选项 2：Node-RED 编辑器

步骤 1：点击位于右上角的"三横线"图标的 `Settings` 按钮，然后选择 `Manage palette`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/manage_palette.png" /></div>

步骤 2：在调色板选项卡中点击 `Install` 选项卡

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/install-tab.png" /></div>

步骤 3：在节点搜索栏中搜索节点，然后点击 `install` 按钮进行安装

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/search-install.png" /></div>

步骤 4：在下拉警告窗口中点击 `Install` 按钮确认安装

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/confirm-click.png" /></div>

步骤 5：等待安装完成，您应该看到 `install` 按钮变为 `installed`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-installing.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-installed.png" /></div>

步骤 6：您应该在侧边栏中看到 Modbus 节点

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-nodes.png" /></div>


## 如何在 reTerminal DM 中使用 Modbus 节点

### 前提条件

#### 硬件

* 1 个 USB 转 RS485/RS232 适配器
* 6 根电缆
* 1 个 reTerminal DM
* 1 台主机

#### 软件 

* 在您的主机上安装 MODBUS 通信 GUI 工具，如 [`ModbusMechanic`](https://github.com/SciFiDryer/ModbusMechanic)

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/ModbusMechanic.png" /></div>

#### 准备工作 

步骤 1：请按照下图所示连接硬件

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/rs485.png" /></div>

步骤 2：如果您想按照下面的确切步骤操作，请安装 [`ModbusMechanic`](https://github.com/SciFiDryer/ModbusMechanic)。

步骤 2-1：下载 [`ModbusMechanic release`](https://github.com/SciFiDryer/ModbusMechanic/releases/download/v2.7/ModbusMechanic.v2.7.zip) 的发布文件

:::note

在我们准备这个 wiki 时，`ModbusMechanic` 的最新发布版本是 v2.7。

:::

步骤 2-2：解压发布文件，并在 linux 中使用以下命令运行 java 可执行文件 `ModbusMechanic.jar`：

```sh

java -jar ModbusMechanic.jar

```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/ModbusMechanic.png" /></div>

步骤 2-3：请按照下图所示配置 `ModbusMechanic` 的 `Serial Settings Port`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/ModbusMechanic-config.png" /></div>

步骤 3：设置 `Slave Simulator`

步骤 3-1：从 `ModbusMechanic` 工具中打开 `Slave Simulator`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/slave-sim.png" /></div>

步骤 3-2：然后从弹出窗口中选择 `RTU`

步骤 3-4-2：输入 `1` 作为 `Register number`

步骤 3-4-3：选择 `U int 16` 作为 `Data type`

步骤 3-4-4：输入 `120` 作为 `Value`

步骤 3-4-5：勾选 `Word Swap`

步骤 3-4-6：点击 `Add` 确认

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/slave-sim-settings.png" /></div>

步骤 3-5：您应该有与下图类似的设置

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/add-slave-input-data.png" /></div>

步骤 3-6：重复步骤 4-4 添加两个更多的寄存器，如下所示，其中 `Register 2` 的 `Value 为 12`，`Register 3` 的 `Value 为 1`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/slave-sim-sample-setting.png" /></div>


#### 编辑流程

步骤 1：将 `Modbus Read` 拖拽到 `Flow Editor` 面板

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/drag-modbus-read.png" /></div>

步骤 2：配置 Modbus 服务器

步骤 2-1：双击 `Modbus Read` 打开 `Node editor panel`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-read-node-editor.png" /></div>

步骤 2-2：点击服务器配置选项的 `pencil` 图标

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-server-config-button.png" /></div>

点击 `pencil` 图标后，您应该看到 `Add new modbus-client config node` 配置面板

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-client-config.png" /></div>

步骤 2-3：请仔细按照以下步骤配置 Modbus 端口，如下图所示。

步骤 2-3-1：从下拉列表中将类型设置为 Serial Expert

步骤 2-3-2：选择串行端口 `/dev/ttyCH343USB1`

步骤 2-3-3：按照下图所示配置串行端口选项

步骤 2-3-4：按照下图所示配置额外的 Modbus 服务器端口选项

步骤 2-3-5：点击 `Add` 或 `Update` 应用更改。


<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/config-modbus.png" /></div>

步骤 3：按照下图所示配置 Modbus-Read 节点，然后点击 `Done`

:::note

以下步骤只是示例步骤，您可以根据自己的情况更改配置

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/config-modbus-read.png" /></div>


步骤 4：找到并拖出 `debug node` 和 `Modbus Response node`，并将节点连接在一起，如下所示

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-responese.gif" /></div>

#### 最终结果

恭喜，您已经成功体验并学会了如何在 reTerminal DM 上使用 node-RED 的 Modbus，您的最终结果应该与下图所示类似

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/final-results.png" /></div>


您可以复制以下 JSON 代码来导入节点

```json
[
    {
        "id": "0692ee641d6fffbc",
        "type": "tab",
        "label": "Flow 1",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "d16d0d962267f762",
        "type": "modbus-client",
        "name": "",
        "clienttype": "serial",
        "bufferCommands": true,
        "stateLogEnabled": false,
        "queueLogEnabled": false,
        "failureLogEnabled": true,
        "tcpHost": "127.0.0.1",
        "tcpPort": "502",
        "tcpType": "DEFAULT",
        "serialPort": "/dev/ttyACM1",
        "serialType": "RTU",
        "serialBaudrate": "9600",
        "serialDatabits": "8",
        "serialStopbits": "1",
        "serialParity": "none",
        "serialConnectionDelay": "100",
        "serialAsciiResponseStartDelimiter": "0x3A",
        "unit_id": "1",
        "commandDelay": "1",
        "clientTimeout": "1000",
        "reconnectOnTimeout": true,
        "reconnectTimeout": "2000",
        "parallelUnitIdsAllowed": true,
        "showWarnings": true,
        "showLogs": true
    },
    {
        "id": "aef2687aed916539",
        "type": "modbus-read",
        "z": "0692ee641d6fffbc",
        "name": "",
        "topic": "1",
        "showStatusActivities": true,
        "logIOActivities": false,
        "showErrors": true,
        "showWarnings": true,
        "unitid": "1",
        "dataType": "InputRegister",
        "adr": "1",
        "quantity": "3",
        "rate": "500",
        "rateUnit": "ms",
        "delayOnStart": false,
        "startDelayTime": "",
        "server": "d16d0d962267f762",
        "useIOFile": false,
        "ioFile": "",
        "useIOForPayload": false,
        "emptyMsgOnFail": true,
        "x": 250,
        "y": 300,
        "wires": [
            [
                "c17ac94368fd6df1"
            ],
            [
                "409e4a77818587d8"
            ]
        ]
    },
    {
        "id": "c17ac94368fd6df1",
        "type": "debug",
        "z": "0692ee641d6fffbc",
        "name": "debug 1",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 560,
        "y": 240,
        "wires": []
    },
    {
        "id": "409e4a77818587d8",
        "type": "modbus-response",
        "z": "0692ee641d6fffbc",
        "name": "",
        "registerShowMax": 20,
        "x": 530,
        "y": 380,
        "wires": []
    }
]

``` 

# 使用 node-RED 在 reTerminal DM 上探索更多节点

* [使用 Node-RED 的 reTerminal DM MQTT](/cn/reTerminal-DM-Node-Red-mqtt)
* [使用 Node-RED 的 reTerminal DM CAN BUS](/cn/reTerminal-DM-Node-Red-canbus)
*
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
