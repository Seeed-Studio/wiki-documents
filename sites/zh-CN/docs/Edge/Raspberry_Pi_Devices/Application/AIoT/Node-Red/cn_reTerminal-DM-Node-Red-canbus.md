---
description: reTerminal DM CANBUS with Node-RED
title: reTerminal DM CANBUS with Node-RED
keywords:
  - Edge
  - reTerminal-DM
  - Node-Red
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal-DM-Node-Red-canbus
last_update:
  date: 04/28/2023
  author: Peter Pan
---

# reTerminal DM CAN BUS with Node-RED

## CAN BUS 简介

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

<br />

### CAN BUS & Node-RED

CAN 总线（控制器局域网总线）是一种用于连接车辆或工业系统中多个电子控制单元（ECU）的网络类型。它最初由博世公司在 1980 年代开发，现已成为车辆和其他应用中串行通信的国际标准（ISO 11898）。

CAN 总线能够在 ECU 之间实现高速数据交换，允许它们共享信息并协调活动。它使用双线系统，一根线用于传输数据，另一根线用于接收数据，并且支持多个节点，使其非常适合用于需要多个设备相互通信的复杂系统。

CAN 总线技术在汽车行业中广泛应用于各种应用，包括发动机控制、变速器控制、ABS（防抱死制动系统）、安全气囊控制等等。它还用于其他行业，如工业自动化、医疗设备和航空航天，在这些领域中，设备之间可靠高效的通信至关重要。

CAN 总线具有许多优势，包括高可靠性、低成本以及在恶劣环境中运行的能力。它易于安装和维护，并且对电磁干扰具有很强的抗性。这些特性使其成为许多需要可靠高效通信的不同应用的理想选择。

## 在 reTerminal DM 上开始使用 CAN BUS 节点

要将 Node-RED 与 CAN 总线一起使用，您需要一个连接到 reTerminal DM CAN BUS 端口的 CAN 总线接口设备，以及一个允许您在网络上发送和接收消息的 Node-RED CAN 总线节点，在本例中我们将一起探索 `node-red-contrib-socketcan` 节点。一旦您在 Node-RED 中安装了 CAN 总线节点，您就可以开始构建从 CAN 总线网络读取数据、处理数据并将其发送到其他系统或设备的流程。例如，您可以从车辆的 CAN 总线读取发动机转速，处理数据以计算燃油消耗，并将结果发送到仪表板进行显示。

您可以在 [node-red-contrib-socketcan](https://flows.nodered.org/node/node-red-contrib-socketcan) 页面找到更多信息。

如果您使用的是 Senscraft Edge OS，可以跳过 Socketcan 节点安装步骤。

### 前提条件

#### 硬件

- 1 x reTerminal DM
- 1 x 主机
- 1 x [USB-CAN 分析仪](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)

##### 硬件准备

请按如下所示连接硬件

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/canbus-connection.png" /></div>

#### 软件

:::note
主机应该能够通过互联网连接到 reTerminal DM 以执行以下设置步骤。
:::

##### 安装 Socketcan 节点

在本 Wiki 教程中，我们将使用 `node-red-contrib-socketcan` 节点，因此请按照指南[安装节点](/cn/reTerminal-DM-Getting-Started-with-Node-Red#install-nodes)安装 `node-red-contrib-socketcan`。

##### 在 reTerminal DM 上配置 CAN BUS

:::note
假设您可以直接访问 reTerminal DM 上的 `Terminal` 应用程序或通过 SSH 访问 reTerminal DM，如果没有，请按照[这里](/cn/reTerminal-DM-Getting-Started-with-Node-Red#install-node-red)的第一步来熟悉如何操作。
:::

请逐一输入以下命令，以启用名为 can0 的虚拟 can 设备，该设备连接到 reTerminal DM 上的 CAN BUS 端口。

```sh
sudo apt install can-utils
sudo ip link set can0 up type can bitrate 250000
sudo ifconfig can0 txqueuelen 1000
sudo ip link set can0 up
```

输入上述命令后，您应该能够通过 `ifconfig` 命令看到 `can0` 设备，如下所示：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/canbus.png" /></div>

##### 配置主机 USB-CAN 软件和驱动程序

:::note
如果您使用的是相同的 [USB-CAN 分析仪](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)，您可以按照以下步骤设置软件驱动程序来使用该分析仪。
:::

请访问 `USB-CAN 分析仪` 驱动程序 GitHub 仓库 [USB-CAN 分析仪系统驱动程序](https://github.com/kobolt/usb-can)，并按照 Readme 部分根据您的操作系统安装驱动程序。

发送和接收 CAN 总线流量的示例命令

```
# dump CAN bus traffic from CAN bus
$ ./canusb -t -d /dev/ttyUSB0 -s 250000 -t

# send the bytes 0x00112233 from ID 005 on at CAN bus
$ ./canusb -d /dev/ttyUSB0 -s 250000 -t -i 5 -j 00112233

```

### 使用 reTerminal DM 的 Socketcan 节点

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/socketcan-nodes.png" /></div>

#### 导入流程

:::note

以下步骤仅用于教程目的，在本节中我们将向您展示如何通过复制 JSON 格式的流程并粘贴到导入节点弹出菜单的输入框中来快速导入流程。

:::

步骤 1：点击`设置按钮`然后点击`导入`按钮打开`导入节点`窗口

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/import-flow.png" /></div>

步骤 2：复制以下流程 JSON

```json

[
    {
        "id": "829af3ee.a57c1",
        "type": "tab",
        "label": "CAN BUS",
        "disabled": false,
        "info": ""
    },
    {
        "id": "7b24a62e.8f5458",
        "type": "debug",
        "z": "829af3ee.a57c1",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 350,
        "y": 360,
        "wires": []
    },
    {
        "id": "5f671b29.cd24bc",
        "type": "socketcan-out",
        "z": "829af3ee.a57c1",
        "name": "socketcan-out",
        "config": "d9bf56bb5f3e2f92",
        "x": 150,
        "y": 360,
        "wires": [
            [
                "7b24a62e.8f5458"
            ]
        ]
    },
    {
        "id": "caba412f.047b2",
        "type": "socketcan-in",
        "z": "829af3ee.a57c1",
        "name": "socketcan-in",
        "config": "d9bf56bb5f3e2f92",
        "x": 350,
        "y": 120,
        "wires": []
    },
    {
        "id": "a64240cb.3f0788",
        "type": "inject",
        "z": "829af3ee.a57c1",
        "name": "Send object - std",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "{\"ext\":false,\"canid\":123,\"dlc\":5,\"data\":[1,2,3,4,5]}",
        "payloadType": "json",
        "x": 160,
        "y": 120,
        "wires": [
            [
                "caba412f.047b2"
            ]
        ]
    },
    {
        "id": "3ff96369.ef6f5c",
        "type": "inject",
        "z": "829af3ee.a57c1",
        "name": "Send string - std",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "123#00112233",
        "payloadType": "str",
        "x": 160,
        "y": 200,
        "wires": [
            [
                "caba412f.047b2"
            ]
        ]
    },
    {
        "id": "6879c00a.5edb68",
        "type": "inject",
        "z": "829af3ee.a57c1",
        "name": "Send string - ext",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "1F334455#1122334455667788",
        "payloadType": "str",
        "x": 160,
        "y": 240,
        "wires": [
            [
                "caba412f.047b2"
            ]
        ]
    },
    {
        "id": "1ee3b274.4cb8fe",
        "type": "inject",
        "z": "829af3ee.a57c1",
        "name": "Send object - ext",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "{\"ext\":true,\"canid\":32278,\"dlc\":5,\"data\":[1,2,3,4,5]}",
        "payloadType": "json",
        "x": 160,
        "y": 160,
        "wires": [
            [
                "caba412f.047b2"
            ]
        ]
    },
    {
        "id": "391a4c45.7acd8c",
        "type": "comment",
        "z": "829af3ee.a57c1",
        "name": "Send CAN frames in using different payloads on CAN0",
        "info": "",
        "x": 260,
        "y": 80,
        "wires": []
    },
    {
        "id": "912f9928.da2758",
        "type": "comment",
        "z": "829af3ee.a57c1",
        "name": "Receiove CAN data from interface CAN0",
        "info": "",
        "x": 220,
        "y": 320,
        "wires": []
    },
    {
        "id": "d9bf56bb5f3e2f92",
        "type": "socketcan-config",
        "interface": "can0"
    }
]

```

步骤 3：在 `Import nodes` 窗口中，请选择 `Clipboard` 选项卡，然后将上述 json 流代码粘贴到 `红色对话框` 中，然后点击 `import` 按钮。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/paste-json-import.png" /></div>

步骤 4：完成上述步骤后，您应该看到创建了一个名为 `CAN BUS` 的新流选项卡，请检查流是否与下图所示相同

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/check-deply.png" /></div>

步骤 5：要设置 can 接口，您需要双击 `socketcan-in node` 以打开 `edit node` 窗口。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/open-edit-node.png" /></div>

:::note
确保您已完成 [在 reTerminal DM 上配置 CAN BUS 部分](#configure-can-bus-on-reterminal-dm) 中的步骤，在 reTerminal DM 上创建 can0 接口设备
:::

步骤 6：在 `Edit socketcan-in node` 窗口中，点击 `interface` 选项处的 `铅笔` 图标以打开 `Add new socketcan-config config node` 窗口

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/edit-can-interface.png" /></div>

步骤 7：在 `Add new socketcan-config config node` 窗口中，请在接口对话框中输入 `can0`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/enter-can-interface.png" /></div>

步骤 8：从上述步骤中点击 `Add` 按钮后，您应该看到 `interface` 设置为 `can0`，然后点击 `Done` 应用。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/confirm-can-interface.png" /></div>

步骤 9：为 `socketcan-out` 设置 CAN Bus 接口，只需双击 `scoketcan-out` 节点并为 Config 选择 `can0`，然后点击 `Done`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/open-edit-node-1.png" /></div>

步骤 10：现在请点击 `Deploy`

#### 最终测试和结果

恭喜，您已成功体验并学会了如何在 reTerminal DM 和 node-RED 中使用 CAN Bus 协议，您的最终结果应该与下图所示类似

对于主机发送 CAN Bus 数据和 reTerminal DM 接收：

- 因此，从主机终端窗口您可以执行 `./canusb -d /dev/ttyUSB0 -s 250000 -t -i 5 -j 00112233` 命令向 reTerminal DM 发送 `00112233`（十六进制），从 reTerminal DM 调试窗口您可以看到数据是

```json  
0: 0 
1: 17 
2: 34
3: 51
```

其中是 `x00 x11 x22 x33` 十六进制数据集的二进制表示。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/Host-send.png" /></div>

对于主机接收 CAN 总线数据和 reTerminal DM 发送：

- 您需要点击 reTerminal DM Node-Red 中的 `inject` 按钮，如下图所示，向主机发送数据 `01 02 03 04 05`，正如您在主机终端窗口中看到的，接收命令是 `./canusb -t -d /dev/ttyUSB0 -s 250000 -t`，接收到的数据是 `05 04 03 02 01`，因为它是按先进先出的顺序：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/Host-receive.png" /></div>

# 在 reTerminal DM 上使用 Node-RED 探索更多节点

- [reTerminal DM RS485 端口与 Node-RED](/cn/reTerminal-DM-Node-Red-RS485)
- [reTerminal DM MQTT 与 Node-RED](/cn/reTerminal-DM-Node-Red-mqtt)

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
