---
description: reTerminal DM CANBUS 与 Node-RED
title: reTerminal DM CANBUS 与 Node-RED
keywords:
  - Edge
  - reTerminal-DM
  - Node-Red
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal-DM-Node-Red-canbus
last_update:
  date: 04/28/2023
  author: Peter Pan
---

# reTerminal DM CAN BUS 与 Node-RED

## 关于 CAN BUS 的简要信息

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

<br />

### CAN BUS 与 Node-RED

CAN 总线（控制器局域网络总线）是一种用于连接车辆或工业系统中多个电子控制单元（ECU）的网络类型。它最初由博世公司在1980年代开发，并已成为车辆和其他应用中串行通信的国际标准（ISO 11898）。

CAN 总线支持 ECU 之间的高速数据交换，使它们能够共享信息并协调活动。它使用两线系统，一根用于传输数据，另一根用于接收数据，并支持多个节点，非常适合需要多个设备相互通信的复杂系统。

CAN 总线技术广泛应用于汽车行业的各种应用，包括发动机控制、变速器控制、ABS（防抱死制动系统）、安全气囊控制等。它还用于其他行业，例如工业自动化、医疗设备和航空航天领域，这些领域需要可靠且高效的设备间通信。

CAN 总线具有许多优点，包括高可靠性、低成本以及在恶劣环境中运行的能力。它易于安装和维护，并且对电磁干扰具有很高的抵抗力。这些特性使其成为许多需要可靠和高效通信的应用的理想选择。

## 在 reTerminal DM 上使用 CAN BUS 节点

要在 Node-RED 中使用 CAN 总线，您需要一个 CAN 总线接口设备，该设备连接到 reTerminal DM 的 CAN 总线端口，以及一个 Node-RED CAN 总线节点，允许您在网络上发送和接收消息。在本教程中，我们将一起探索 `node-red-contrib-socketcan` 节点。一旦您在 Node-RED 中安装了 CAN 总线节点，您就可以开始构建流程，从 CAN 总线网络读取数据、处理数据并将其发送到其他系统或设备。例如，您可以从车辆的 CAN 总线读取发动机转速，处理数据以计算燃油消耗，并将结果发送到仪表板进行显示。

您可以在 [node-red-contrib-socketcan](https://flows.nodered.org/node/node-red-contrib-socketcan) 页面找到更多信息。

如果您使用的是 Senscraft Edge OS，则可以跳过 Socketcan 节点的安装步骤。

### 前置条件

#### 硬件

* 1 x reTerminal DM
* 1 x 主机电脑
* 1 x [USB-CAN 分析仪](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)

##### 硬件准备

请按照下图连接硬件

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/canbus-connection.png" /></div>

#### 软件

:::note
主机电脑应能够通过互联网连接到 reTerminal DM，以执行以下设置步骤。
:::

##### 安装 Socketcan 节点

在本 Wiki 教程中，我们将使用 `node-red-contrib-socketcan` 节点，因此请按照 [安装节点](/cn/reTerminal-DM-Getting-Started-with-Node-Red#install-nodes) 的指南安装 `node-red-contrib-socketcan`。

##### 在 reTerminal DM 上配置 CAN BUS

:::note
假设您可以直接访问 reTerminal DM 上的 `Terminal` 应用或通过 SSH 访问 reTerminal DM，如果不能，请按照 [此处](/cn/reTerminal-DM-Getting-Started-with-Node-Red#install-node-red) 的第一步操作，熟悉如何进行操作。
:::

请逐一输入以下命令，以启用一个名为 can0 的虚拟 CAN 设备，该设备与 reTerminal DM 的 CAN 总线端口连接。

```sh
sudo apt install can-utils
sudo ip link set can0 up type can bitrate 250000
sudo ifconfig can0 txqueuelen 1000
sudo ip link set can0 up
```

输入上述命令后，您应该可以通过 `ifconfig` 命令看到 `can0` 设备，如下所示：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/canbus.png" /></div>

##### 配置主机电脑的 USB-CAN 软件和驱动

:::note
如果您使用的是相同的 [USB-CAN 分析仪](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)，可以按照以下步骤设置分析仪的软件驱动。
:::

请访问 `USB-CAN 分析仪` 驱动的 GitHub 仓库 [USB-CAN Analyzer system driver](https://github.com/kobolt/usb-can)，并按照 Readme 部分的说明，根据您的操作系统安装驱动。

以下是发送和接收 CAN 总线流量的示例命令：

```
# 从 CAN 总线转储流量
$ ./canusb -t -d /dev/ttyUSB0 -s 250000 -t

# 从 CAN 总线 ID 005 发送字节 0x00112233
$ ./canusb -d /dev/ttyUSB0 -s 250000 -t -i 5 -j 00112233
```

### 使用 reTerminal DM 的 Socketcan 节点

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/socketcan-nodes.png" /></div>

#### 导入流程

:::note

以下步骤仅用于教程目的，在本节中我们将展示如何通过复制 JSON 格式的流程并粘贴到导入节点弹出菜单的输入框中快速导入流程。

:::

步骤 1：点击 `设置按钮`，然后点击 `导入` 按钮，打开 `导入节点` 窗口。

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
        "name": "发送对象 - 标准帧",
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
        "name": "发送字符串 - 标准帧",
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
        "name": "发送字符串 - 扩展帧",
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
        "name": "发送对象 - 扩展帧",
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
        "name": "使用不同的负载在 CAN0 上发送 CAN 帧",
        "info": "",
        "x": 260,
        "y": 80,
        "wires": []
    },
    {
        "id": "912f9928.da2758",
        "type": "comment",
        "z": "829af3ee.a57c1",
        "name": "从接口 CAN0 接收 CAN 数据",
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

步骤 3：在 `导入节点` 窗口中，请选择 `剪贴板` 选项卡，然后将上述 JSON 流程代码粘贴到 `红色对话框` 中，然后点击 `导入` 按钮。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/paste-json-import.png" /></div>

步骤 4：完成上述步骤后，您应该会看到一个名为 `CAN BUS` 的新流程标签，请检查流程是否与下图所示一致。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/check-deply.png" /></div>

步骤 5：要设置 CAN 接口，您需要双击 `socketcan-in 节点` 打开 `编辑节点` 窗口。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/open-edit-node.png" /></div>

:::note
确保您已完成 [在 reTerminal DM 上配置 CAN BUS](#configure-can-bus-on-reterminal-dm) 部分中的步骤，以在 reTerminal DM 上创建一个 can0 接口设备。
:::

步骤 6：在 `编辑 socketcan-in 节点` 窗口中，点击 `接口` 选项的 `铅笔` 图标以打开 `添加新的 socketcan-config 配置节点` 窗口。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/edit-can-interface.png" /></div>

步骤 7：在 `添加新的 socketcan-config 配置节点` 窗口中，请在接口对话框中输入 `can0`。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/enter-can-interface.png" /></div>

步骤 8：点击上述步骤中的 `添加` 按钮后，您应该看到接口设置为 `can0`，然后点击 `完成` 以应用。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/confirm-can-interface.png" /></div>

步骤 9：设置 `socketcan-out` 的 CAN 总线接口，只需双击 `socketcan-out` 节点并选择 `can0` 作为配置，然后点击 `完成`。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/open-edit-node-1.png" /></div>

步骤 10：现在请点击 `Deploy`

#### 最终测试和结果

恭喜！您已经成功体验并学习了如何使用 reTerminal DM 和 Node-RED 进行 CAN 总线协议操作，您的最终结果应与下图所示类似。

对于主机发送 CAN 总线数据，reTerminal DM 接收：

* 在主机终端窗口中，您可以执行命令 `./canusb -d /dev/ttyUSB0 -s 250000 -t -i 5 -j 00112233`，将 `00112233`（十六进制）发送到 reTerminal DM。在 reTerminal DM 的调试窗口中，您可以看到数据如下：
```json  
0: 0 
1: 17 
2: 34
3: 51
```
这是 `x00 x11 x22 x33` 十六进制数据集的二进制表示。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/Host-send.png" /></div>

对于主机接收 CAN 总线数据，reTerminal DM 发送：

* 您需要点击 reTerminal DM Node-Red 中的 `inject` 按钮（如下图所示），以将数据 `01 02 03 04 05` 发送到主机。您可以在主机终端窗口中看到接收命令为 `./canusb -t -d /dev/ttyUSB0 -s 250000 -t`，接收到的数据为 `05 04 03 02 01`，因为数据是以先进先出的顺序排列的：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/node-red/Host-receive.png" /></div>

# 在 reTerminal DM 上探索更多 Node-RED 节点

* [reTerminal DM RS485 端口与 Node-RED](/cn/reTerminal-DM-Node-Red-RS485)
* [reTerminal DM MQTT 与 Node-RED](/cn/reTerminal-DM-Node-Red-mqtt)

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们的产品时拥有顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>