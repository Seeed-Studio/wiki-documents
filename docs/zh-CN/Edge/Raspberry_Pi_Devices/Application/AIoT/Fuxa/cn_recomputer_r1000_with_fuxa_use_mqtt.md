---
description: 本文主要介绍如何使用 fuxa 进行 MQTT 通信。

title: reComputer R1000 使用 fuxa 作为 mqtt 客户端
keywords:
  - Edge Controller
  - reComputer R1000
  - fuxa
  - mqtt client
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/reComputer_r1000_fuxa_mqtt_client
last_update:
  date: 10/8/2024
  author: ShuishengPeng
---

## 介绍

FUXA 是一个基于 Web 的过程可视化（SCADA/HMI/仪表板）软件。使用 FUXA，您可以为您的机器创建具有个性化设计的现代过程可视化界面和实时数据显示。它支持 Modbus RTU/TCP、西门子 S7 协议、OPC-UA、BACnet IP、MQTT 和其他协议。

本文主要介绍如何在 reComputerR1000 上使用 fuxa 进行 mqtt 通信。本文使用 mosquitto 作为 MQTT 服务器代理，fuxa 和 node-red 作为 MQTT 客户端，并引入一个 ModbusTCP 从站作为 fuxa 发布数据的来源。fuxa 订阅名为 /dev/fromNode_red 的主题并发布名为 /dev/fromfuxa 的主题。该主题的数据来自 ModbusTCP 从站；node-red 订阅名为 /dev/fromfuxa 的主题并发布 /dev/fromNode_red 主题。通信框架如图所示：
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/mqtt_global.png" /></center>

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
- 在 W10 PC 上使用 [modbusmechanic](https://modbusmechanic.scifidryer.com/)。您也可以使用其他 modbus 测试工具
- 在 reComputer R1000 上使用 [fuxa](https://github.com/frangoteam/FUXA)。您可以参考以下步骤在 reComputer R1000 上安装 fuxa

  ```shell
    ## You need to have installed Node Version 14 || 16 || 18.
    wget https://nodejs.org/dist/v18.20.3/node-v18.20.3-linux-arm64.tar.xz
    tar -xf node-v18.20.3-linux-arm64.tar.xz
    cd node-v18.20.3-linux-arm64
    sudo cp -R * /usr/local/
    node -v
    npm -v
    ## Next install FUXA from npm
    sudo npm install -g --unsafe-perm @frangoteam/fuxa
    sudo fuxa
  ```

- 关于如何在fuxa中使用modbusTCP功能，您可以参考这个[wiki](https://wiki.seeedstudio.com/cn/reComputer_r1000_fuxa_modbus_rtu_and_tcp/)。
- 关于如何下载和配置mosquitto，您可以参考这个[教程](https://wiki.seeedstudio.com/cn/recomputer_r1000_nodered_mqtt/)。这里还介绍了如何在node-red中配置mqtt通信，您也可以参考。

### 硬件配置

对于ModbusTCP，我们使用以太网线将W10 PC和reComputer R1000连接到交换机，以确保它们在同一网段内。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## MQTT客户端通信步骤

**步骤1**：参考这个[教程](https://wiki.seeedstudio.com/cn/reComputer_r1000_fuxa_modbus_rtu_and_tcp/)，使用`fuxa`与`modbusmechanic`建立连接。并参考这个[wiki](https://wiki.seeedstudio.com/cn/Edge-Box-Node-Red-MQTT/)在reComputer R1000上部署`mosquitto`和`Node-red`。

**步骤2**：连接到MQTT服务器。点击`fuxa`界面右下角的`+`按钮，输入`Name`、`Type`，选择`MQTTclient`，然后输入MQTT服务器的IP地址和端口号。如果您的MQTT服务器需要安全验证，您还需要输入`Client ID`、`Username`、`Password`等。我们的服务器不需要此验证，因此不填写。最后点击`OK`并等待模块左下角出现绿点，表示成功连接到MQTT服务器。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/connect_mqtt_server.gif" /></center>

**步骤3**：订阅主题。进入配置界面，点击左上角的`+`按钮，在`Browser Topics on broker`中输入要订阅的主题，这里我们订阅node-red发布的`/dev/fromNode_red`主题，然后点击旁边的搜索按钮，可以看到相应主题的内容。fuxa支持两种显示格式：`raw`和`json`。这里我们选择`json`，最后点击`subscribe`即可成功订阅。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/sub_topic.gif" /></center>

**步骤4**：发布主题。进入配置界面，选择`Publish`栏，在`Topic path`中输入要发布的主题名称，这里我们输入/dev/fromfuxa，然后点击`Add attribute to payload`，会弹出一行可以发布的数据内容，这里我们选择从ModbusTCP从站获得的4个数据和一个时间戳作为我们发布主题的内容，选择发布格式为`json`，最后点击`Publish`即可成功发布。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/public_topic.gif" /></center>

**步骤5**：完成上述配置后，我们在Modbus从站侧更改数据。您可以在node-red的调试窗口中看到数据的实时变化，表明fuxa成功通过/dev/fromfuxa主题将数据发布出来。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/mqtt_show_data.gif" /></center>

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
