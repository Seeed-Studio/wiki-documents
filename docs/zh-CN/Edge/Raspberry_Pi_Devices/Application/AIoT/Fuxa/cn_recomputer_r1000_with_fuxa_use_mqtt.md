---
description: 本文主要介绍如何使用 fuxa 进行 MQTT 通信。

title: 使用 fuxa 和 reComputer R1000 实现 mqtt 客户端
keywords:
  - 边缘控制器
  - reComputer R1000
  - fuxa
  - mqtt 客户端
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/reComputer_r1000_fuxa_mqtt_client
last_update:
  date: 2024/10/8
  author: ShuishengPeng
---

## 介绍
FUXA 是一款基于 Web 的过程可视化（SCADA/HMI/仪表盘）软件。通过 FUXA，您可以为机器创建现代化的过程可视化界面，并实时显示数据。它支持 Modbus RTU/TCP、Siemens S7 协议、OPC-UA、BACnet IP、MQTT 等协议。

本文主要介绍如何在 reComputer R1000 上使用 fuxa 进行 mqtt 通信。本文使用 mosquitto 作为 MQTT 服务器代理，fuxa 和 node-red 作为 MQTT 客户端，并引入 ModbusTCP 从站作为 fuxa 发布数据的来源。fuxa 订阅名为 /dev/fromNode_red 的主题，并发布名为 /dev/fromfuxa 的主题。该主题的数据来源于 ModbusTCP 从站；node-red 订阅名为 /dev/fromfuxa 的主题，并发布名为 /dev/fromNode_red 的主题。通信框架如下图所示：
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/mqtt_global.png" /></center>

## 开始

在开始此项目之前，您需要提前准备好硬件和软件，如下所述。

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
* 在 W10 PC 上使用 [modbusmechanic](https://modbusmechanic.scifidryer.com/)。您也可以使用其他 Modbus 测试工具。
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
* 关于如何在 fuxa 中使用 ModbusTCP 功能，您可以参考此 [wiki](https://wiki.seeedstudio.com/cn/reComputer_r1000_fuxa_modbus_rtu_and_tcp/)。
* 关于如何下载和配置 mosquitto，您可以参考此 [教程](https://wiki.seeedstudio.com/cn/recomputer_r1000_nodered_mqtt/)。其中还包括如何在 node-red 中配置 mqtt 通信，您也可以参考。

### 硬件配置

对于 ModbusTCP，我们使用以太网线将 W10 PC 和 reComputer R1000 连接到交换机，以确保它们处于同一网段。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## MQTT 客户端通信步骤

**步骤 1**：参考此[教程](https://wiki.seeedstudio.com/cn/reComputer_r1000_fuxa_modbus_rtu_and_tcp/)，使用 `fuxa` 与 `modbusmechanic` 建立连接。同时参考此[维基](https://wiki.seeedstudio.com/cn/Edge-Box-Node-Red-MQTT/)在 reComputer R1000 上部署 `mosquitto` 和 `Node-red`。

**步骤 2**：连接到 MQTT 服务器。在 `fuxa` 界面右下角点击 `+` 按钮，输入 `Name` 和 `Type`，选择 `MQTTclient`，然后输入 MQTT 服务器的 IP 地址和端口号。如果您的 MQTT 服务器需要安全验证，还需要输入 `Client ID`、`Username`、`Password` 等信息。我们的服务器不需要此验证，因此无需填写。最后点击 `OK`，等待模块左下角出现绿色点，表示成功连接到 MQTT 服务器。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/connect_mqtt_server.gif" /></center>

**步骤 3**：订阅主题。进入配置界面，点击左上角的 `+` 按钮，在 `Browser Topics on broker` 中输入要订阅的主题，这里我们订阅由 node-red 发布的 `/dev/fromNode_red` 主题，然后点击旁边的搜索按钮，可以看到对应主题的内容。fuxa 支持两种显示格式：`raw` 和 `json`。这里我们选择 `json`，最后点击 `subscribe` 即可成功订阅。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/sub_topic.gif" /></center>

**步骤 4**：发布主题。进入配置界面，选择 `Publish` 栏，在 `Topic path` 中输入要发布的主题名称，这里我们输入 `/dev/fromfuxa`，然后点击 `Add attribute to payload`，会弹出一行可以发布的数据内容，这里我们选择从 ModbusTCP 从机获取的 4 个数据和一个时间戳作为我们发布主题的内容，并选择发布格式为 `json`，最后点击 `Publish` 即可成功发布。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/public_topic.gif" /></center>

**步骤 5**：完成上述配置后，我们更改 Modbus 从机端的数据。您可以在 node-red 的调试窗口中看到数据的实时变化，表明 fuxa 成功通过 `/dev/fromfuxa` 主题发布了数据。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/mqtt_show_data.gif" /></center>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>