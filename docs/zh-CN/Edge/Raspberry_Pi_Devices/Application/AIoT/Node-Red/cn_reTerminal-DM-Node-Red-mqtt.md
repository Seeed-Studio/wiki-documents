---
description: reTerminal DM MQTT 与 Node-RED
title: reTerminal DM MQTT 与 Node-RED
keywords:
  - Edge
  - reTerminal-DM
  - Node-Red
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal-DM-Node-Red-mqtt
last_update:
  date: 04/27/2023
  author: Peter Pan
---
# reTerminal DM MQTT 与 Node-RED

## MQTT 简介

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

<br />

### MQTT 与 Node-RED

MQTT（消息队列遥测传输）是一种轻量级消息传递协议，旨在实现机器对机器（M2M）或物联网（IoT）环境中设备之间的通信。MQTT 由 IBM 于 1999 年开发，后来成为开放标准。MQTT 旨在成为在设备之间发送小数据包的简单高效方式。它使用发布/订阅消息传递模式，其中消息发布到代理，然后传递给所有订阅了特定主题的订阅者。这使得设备可以相互通信，而无需知道彼此的 IP 地址或其他网络详细信息。MQTT 在设备通过不可靠网络连接的情况下特别有用，例如低带宽或高延迟网络，因为它使用少量带宽且开销较低。它还支持服务质量（QoS）级别，允许消息传递具有不同的可靠性级别。MQTT 因其简单性和高效性而成为 IoT 和 M2M 应用的热门选择，并得到广泛的设备和平台支持。

MQTT 代理是一个服务器，在基于 MQTT 的 IoT 或 M2M 网络中充当设备之间交换 MQTT 消息的中心点。它接收设备发布的消息并将其分发给订阅了相同主题的其他设备。

MQTT 是 Node-RED 支持的众多协议之一，使其成为构建基于 MQTT 的 IoT 应用程序的绝佳工具。Node-RED 为 MQTT 提供内置节点，允许用户连接到 MQTT 代理并发布或订阅消息。MQTT 节点可以使用 Node-RED 界面轻松配置，用户可以指定代理地址、端口、客户端 ID、用户名和密码。这些节点还支持 MQTT QoS 级别，可以设置以确保可靠的消息传递。在 Node-RED 中，用户可以创建处理传入 MQTT 消息的流程，并根据消息负载执行各种操作。例如，流程可以订阅温度传感器的 MQTT 主题，解析温度值，然后在温度超过某个阈值时发送警报。Node-RED 还提供各种节点用于与其他 IoT 服务和设备集成，例如 HTTP 端点、数据库和云服务。这使用户能够轻松构建复杂的 IoT 应用程序，可以与广泛的设备和服务通信。

总的来说，Node-RED 凭借其内置的 MQTT 节点和对其他 IoT 服务和设备的支持，提供了一种简单直观的方式来构建基于 MQTT 的 IoT 应用程序。

# 在 reTerminal DM 上开始使用 MQTT 节点

由于 MQTT 节点是 Node-RED 的内置功能，您可以直接使用 MQTT 节点而无需额外的节点安装步骤。但是，您需要有一个 MQTT 代理来向主题发布或订阅消息。因此，以下步骤将包括如何在 reTerminal DM 上安装本地 MQTT 代理，然后利用 MQTT 代理来发送和接收消息。

## 前提条件

### 硬件

- 1 x reTerminal DM
- 1 x 主机电脑

:::note
主机电脑应该能够通过互联网连接到 reTerminal DM 以执行以下设置步骤。
:::

### 软件

- MQTT 代理 [Eclipse Mosquitto](https://mosquitto.org/)

## 安装 MQTT 代理 [Eclipse Mosquitto](https://mosquitto.org/)

在本节中，我们将安装 [Eclipse Mosquitto](https://mosquitto.org/)，这是一个开源的 MQTT 代理，广泛用于物联网和 M2M 应用程序。它由 Eclipse 基金会开发，并在 Eclipse 公共许可证下提供。Mosquitto 设计为轻量级和高效，非常适合在低功耗设备和网络带宽有限的环境中使用。它支持最新的 MQTT 5.0 协议，以及早期版本如 MQTT 3.1.1。

首先，请复习一下通过 SSH 访问 reTerminal DM 的知识，请查看[这里](/cn/reterminal-dm-flash-OS#install-drivers)的步骤

一旦您通过 SSH 访问了 reTerminal DM，您可以继续执行以下步骤：

步骤 1：通过运行以下命令更新软件包列表：

```sh
sudo apt-get update
```

步骤 2: 通过运行以下命令安装 Mosquitto：

```sh
sudo apt-get install mosquitto
```

步骤 3: 通过运行以下命令安装 Mosquitto 客户端工具：

```sh
sudo apt-get install mosquitto-clients
```

步骤 4: 安装完成后，您可以通过运行以下命令来启动Mosquitto服务：

```sh
sudo systemctl start mosquitto
```

步骤 5: 要检查 Mosquitto 是否正在运行，你可以执行以下命令：

```sh
sudo systemctl status mosquitto
```

默认情况下，Mosquitto 配置为在 `端口 1883` 上监听 MQTT 流量。您可以使用 Mosquitto 客户端工具订阅主题来测试安装，如下所示：

打开一个新的 SSH 会话并运行以下命令来订阅主题：

```sh
mosquitto_sub -h localhost -t test
```

在另一个 SSH 会话中，运行以下命令向同一主题发布消息：

```sh
mosquitto_pub -h localhost -t test -m "Hello, world!"
```

您应该会在运行 mosquitto_sub 命令的第一个 SSH 会话窗口中看到消息"Hello, world!"出现。

就是这样！您已经成功在 reTerminal DM 上安装了 Mosquitto 并使用 Mosquitto 客户端工具进行了测试。现在让我们深入了解 Node-RED 方式的 MQTT 通信

## reTerminal DM 的 MQTT 节点

在 Node-RED 中，有 MQTT in 和 MQTT out，分别代表订阅和发布。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-nodes.png" /></div>

### 编辑流程

:::note

以下步骤仅用于教程目的，我们将使用 mqtt-in 订阅来自 mqtt out 发布到同一主题的消息。

:::

步骤 1：将 `mqtt in` 拖拽到 `流程编辑器` 面板

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/drag-mqtt-in.png" /></div>

步骤 2：配置 `Modbus 服务器` 和 `mqtt in` 节点

步骤 2-1：双击 `mqtt in` 打开 `节点编辑器面板`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-node-editor.png" /></div>

步骤 2-2：点击服务器配置选项的 `铅笔` 图标

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-node-editor-click.png" /></div>

点击 `铅笔` 图标后，您应该看到 `添加新的 mqtt-broker 配置节点` 配置面板

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-broker-config.png" /></div>

步骤 2-3：在 `连接` 选项卡中，请相应地配置以下字段

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-connection-config.png" /></div>

:::note

现在您可以暂时不管 `安全` 和 `消息` 选项卡。

:::

步骤 2-4：设置要订阅的主题，这里我们使用 `test-mqtt`，其他所有设置保持默认，然后点击 `完成` 按钮。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/sub-topic-setup.png" /></div>

步骤 2-5：以下步骤将介绍 `debug` 节点，在这种情况下，它用于查看和调试来自 `mqtt in` 的订阅主题输出，如下图所示

步骤 2-5-1：请将一个 `debug` 节点拖拽到 `流程编辑器` 面板

步骤 2-5-2：将 `debug` 节点与 `mqtt in` 节点连接

步骤 2-5-3：点击 `选项和配置面板` 的 `小虫子按钮` 在 `选项和配置面板` 打开 `调试控制台`

步骤 2-5-4：点击 `部署` 按钮部署流程

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-debug-node.png" /></div>

:::note

由于我们还没有设置任何 mqtt 主题发布者，所以 `调试控制台` 中不会显示任何消息

:::

步骤 3：设置 `mqtt out` 节点

步骤 3-1：双击 `mqtt out` 节点打开 `节点编辑器面板`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/drag-mqtt-out.png" /></div>

步骤 3-1：请将一个 `mqtt out` 节点拖拽到 `流程编辑器` 面板，如下图所示

步骤 3-1-1：您应该选择我们在 `步骤 2-3:` 中设置的相同服务器，即 `localhost:1883`

步骤 3-1-2：您必须设置与 `步骤 2-4:` 主题设置相同的主题名称，即 `test-mqtt`。

步骤 3-1-3：同样，QoS 应该与 `mqtt in` 设置保持一致，为 `2`

步骤 3-1-4：点击 `完成` 完成设置

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-out-setup.png" /></div>

步骤 4：设置 `inject` 节点

步骤 4-1：将 `inject` 节点拖拽到 `流程编辑器` 面板

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/drag-inject.png" /></div>

步骤 4-2：双击 `inject` 节点打开 `节点编辑器面板`，您应该看到 `inject` 节点的默认设置

步骤 4-2-1：点击 msg.topic 行的 `x` 将其删除

步骤 4-2-2：点击 `msg.payload` 行的 `timestamp` 选项打开下拉列表

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/inject-node-config.png" /></div>

步骤 4-2-3：在下拉列表中选择 `string` 选项

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/select-string.png" /></div>

步骤 4-2-4：在消息框中请输入 `this is the message` 作为我们要发送到 `test-mqtt` 主题的消息，然后点击 `完成`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/edit-string.png" /></div>

步骤 4-2-5：将 `inject` 节点与 `mqtt out` 节点连接，然后点击 `部署`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/connect-mqtt-out.png" /></div>

#### 最终结果

恭喜，您已经成功体验并学会了如何在 reTerminal DM 和 node-RED 中使用 MQTT 协议，您的最终结果应该与下图所示类似

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/final-result-mqtt.png" /></div>

您可以复制以下 JSON 代码来导入节点

```json
[
    {
        "id": "8d317d539464f080",
        "type": "tab",
        "label": "MQTT",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "128fa85f993944d6",
        "type": "mqtt in",
        "z": "8d317d539464f080",
        "name": "",
        "topic": "test-mqtt",
        "qos": "2",
        "datatype": "auto-detect",
        "broker": "b6a7c986cb61ea54",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 300,
        "y": 220,
        "wires": [
            [
                "a022e0bf3404fdd9"
            ]
        ]
    },
    {
        "id": "a022e0bf3404fdd9",
        "type": "debug",
        "z": "8d317d539464f080",
        "name": "debug 2",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 500,
        "y": 220,
        "wires": []
    },
    {
        "id": "9d0098383c96ee8b",
        "type": "mqtt out",
        "z": "8d317d539464f080",
        "name": "",
        "topic": "test-mqtt",
        "qos": "2",
        "retain": "",
        "respTopic": "",
        "contentType": "",
        "userProps": "",
        "correl": "",
        "expiry": "",
        "broker": "b6a7c986cb61ea54",
        "x": 520,
        "y": 320,
        "wires": []
    },
    {
        "id": "3c967b7d5cc112fc",
        "type": "inject",
        "z": "8d317d539464f080",
        "name": "",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "3",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "this is the message",
        "payloadType": "str",
        "x": 340,
        "y": 320,
        "wires": [
            [
                "9d0098383c96ee8b"
            ]
        ]
    },
    {
        "id": "b6a7c986cb61ea54",
        "type": "mqtt-broker",
        "name": "",
        "broker": "localhost",
        "port": "1883",
        "clientid": "",
        "autoConnect": true,
        "usetls": false,
        "protocolVersion": "4",
        "keepalive": "60",
        "cleansession": true,
        "birthTopic": "",
        "birthQos": "0",
        "birthPayload": "",
        "birthMsg": {},
        "closeTopic": "",
        "closeQos": "0",
        "closePayload": "",
        "closeMsg": {},
        "willTopic": "",
        "willQos": "0",
        "willPayload": "",
        "willMsg": {},
        "userProps": "",
        "sessionExpiry": ""
    }
]

```

# 使用 node-RED 在 reTerminal DM 上探索更多节点

- [reTerminal DM RS485 端口与 Node-RED](/cn/reTerminal-DM-Node-Red-RS485)
- [reTerminal DM CAN BUS 与 Node-RED](/cn/reTerminal-DM-Node-Red-canbus)

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
