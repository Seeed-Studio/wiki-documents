---
description: 本文主要介绍如何使用 fuxa 进行 OPC-UA 通信。

title: reComputer R1000 与 fuxa 使用 OPC-UA
keywords:
  - Edge Controller
  - reComputer R1000
  - fuxa
  - OPC-UA
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/reComputer_r1000_fuxa_opc_ua
last_update:
  date: 10/8/2024
  author: ShuishengPeng
---

## 介绍
FUXA 是一个基于 Web 的过程可视化（SCADA/HMI/仪表板）软件。使用 FUXA，您可以为您的机器创建具有个性化设计的现代过程可视化界面和实时数据显示。它支持 Modbus RTU/TCP、西门子 S7 协议、OPC-UA、BACnet IP、MQTT 和其他协议。

本文主要介绍如何使用 fuxa 进行 OPC-UA 通信。我们在 W10 PC 上运行 `Prosys OPC UA Simulation Server`，然后在 reComputer R1000 上读取模拟器的数据。

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
* Python 3.11 可能与 fuxa 不兼容。如果您的 Python 版本是 3.11，请考虑更换为其他 Python 版本。
* 在 W10 PC 上使用 [Prosys OPC UA Simulation Server](https://downloads.prosysopc.com/opc-ua-simulation-server-downloads.php)。您也可以使用其他 modbus 测试工具
* 在 reComputer R1000 上使用 [fuxa](https://github.com/frangoteam/FUXA)。您可以参考以下步骤在 reComputer R1000 上安装 fuxa
  ```shell
    ## 您需要安装 Node 版本 14 || 16 || 18。
    wget https://nodejs.org/dist/v18.20.3/node-v18.20.3-linux-arm64.tar.xz
    tar -xf node-v18.20.3-linux-arm64.tar.xz
    cd node-v18.20.3-linux-arm64
    sudo cp -R * /usr/local/
    node -v
    npm -v
    ## 接下来从 npm 安装 FUXA
    sudo npm install -g --unsafe-perm @frangoteam/fuxa
    sudo fuxa
  ```

### 硬件配置

我们使用以太网电缆将 W10 PC 和 reComputer R1000 连接到交换机，以确保它们在同一网段内。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## OPC-UA 通信步骤
**步骤 1**：打开 `Prosys OPC UA Simulation Server` 并复制 `Connection Address(UA TCP)`。
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/OPC_UA_simulator.png" /></center>

**步骤 2**：点击右下角的 `+` 按钮，输入 `Name`，`Type` 选择 `OPCUA`，将第一步复制的 `Connection Address(UA TCP)` 粘贴到 `Address`，`Security and encryption mode` 根据您自己的设备要求选择。这里我选择 `None-None`。如果您的设备在建立连接时需要 `Username` 和 `Password`，您可以在相应的地方填写。最后点击 `OK`。打开 `Prosys OPC UA Simulation Server` 的 `ConnectionLog`，出现如图所示的日志，表示连接成功建立。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/connect_opcua_simulation.gif" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/connection_sucsses.png" /></center>

**步骤 3**：创建标签来显示数据。进入配置界面，点击左上角或右下角的 `+` 按钮，您可以看到三个标签 `Objects`、`Type`、`Views`，点击 `Objects`，然后点击 `Simulation` 查看模拟器模拟的数据，我们选择 `Simulation` 下的所有数据并创建标签。最后，点击 `OK`。您可以看到我们可以尝试读取 OPCUA 设备的数据。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/read_opcua_data.gif" /></center>

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