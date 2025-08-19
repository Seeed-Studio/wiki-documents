---
description: 本文主要介绍如何使用 fuxa 进行 OPC-UA 通信。

title: 使用 fuxa 和 reComputer R1000 实现 OPC-UA
keywords:
  - 边缘控制器
  - reComputer R1000
  - fuxa
  - OPC-UA
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/reComputer_r1000_fuxa_opc_ua
last_update:
  date: 2024/10/8
  author: ShuishengPeng
---

## 简介
FUXA 是一款基于 Web 的过程可视化（SCADA/HMI/仪表盘）软件。通过 FUXA，您可以为您的设备创建现代化的过程可视化界面，并实时显示数据。它支持 Modbus RTU/TCP、Siemens S7 协议、OPC-UA、BACnet IP、MQTT 等协议。

本文主要介绍如何使用 fuxa 进行 OPC-UA 通信。我们将在 W10 PC 上运行 `Prosys OPC UA Simulation Server`，然后在 reComputer R1000 上读取模拟器的数据。

## 入门指南

在开始本项目之前，您需要提前准备好硬件和软件，如下所述。

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
* Python 3.11 可能与 fuxa 不兼容。如果您的 Python 版本是 3.11，请考虑更换为其他版本。
* 在 W10 PC 上使用 [Prosys OPC UA Simulation Server](https://downloads.prosysopc.com/opc-ua-simulation-server-downloads.php)。您也可以使用其他 Modbus 测试工具。
* 在 reComputer R1000 上使用 [fuxa](https://github.com/frangoteam/FUXA)。您可以参考以下步骤在 reComputer R1000 上安装 fuxa：
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

我们使用以太网线将 W10 PC 和 reComputer R1000 连接到交换机，以确保它们处于同一网络段。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## OPC-UA 通信步骤
**步骤 1**：打开 `Prosys OPC UA Simulation Server` 并复制 `连接地址（UA TCP）`。
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/OPC_UA_simulator.png" /></center>

**步骤 2**：点击右下角的 `+` 按钮，输入 `名称`，在 `类型` 中选择 `OPCUA`，并将第一步中复制的 `连接地址（UA TCP）` 粘贴到 `地址` 中，根据您的设备需求选择 `安全和加密模式`。这里我选择 `None-None`。如果您的设备在建立连接时需要 `用户名` 和 `密码`，可以在相应位置填写。最后点击 `OK`。打开 `Prosys OPC UA Simulation Server` 的 `ConnectionLog`，如果日志如图所示，则表示连接成功。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/connect_opcua_simulation.gif" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/connection_sucsses.png" /></center>

**步骤 3**：创建标签以显示数据。进入配置界面，点击左上角或右下角的 `+` 按钮，可以看到三个标签 `Objects`、`Type`、`Views`，点击 `Objects`，然后点击 `Simulation` 查看模拟器模拟的数据。我们选择 `Simulation` 下的所有数据并创建标签。最后点击 `OK`。您可以看到我们尝试读取 OPCUA 设备的数据。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/read_opcua_data.gif" /></center>

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>