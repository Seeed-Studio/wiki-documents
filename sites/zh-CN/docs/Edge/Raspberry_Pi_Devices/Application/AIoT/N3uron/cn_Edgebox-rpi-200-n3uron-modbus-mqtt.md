---
description: 连接 N3uron 与 MQTT 和 Modbus 支持设备
title: 连接 N3uron 与 MQTT 和 Modbus 支持设备
keywords:
  - Edge Box RPi 200
  - MQTT
  - IIoT
  - Industrial 
  - N3uron
  - Modbus
  - AWS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Edgebox_rpi_200_N3uron_modbus_mqtt_aws
last_update:
  date: 5/10/2024
  author: Kasun Thushara and Xabier Fernández
---
## 介绍

在工业自动化中，Modbus 是最常见的协议之一。MQTT 由于其众多特性，已成为工业自动化中物联网的领先协议。其轻量级设计、高效性、可扩展性和对异步消息传递的支持尤为突出。在 MQTT 中，设备仅在有可报告事件时才进行通信，这与持续更新检查形成对比。这种事件驱动的方法，结合异常报告——仅在数据偏离正常值或特定触发器时发送数据——节省了带宽和资源，为关键物联网应用优化了数据传输。

Edge Box RPi 200 和 [N3uron](https://n3uron.com/) Duo 的强大组合通过提供强大的连接性和数据处理能力，促进了高效的工厂管理。本 Wiki 强调了 Modbus TCP 在工业环境中的重要性，突出了 MQTT 设备的无缝集成以进一步增强连接性。

## 先决条件

### 硬件

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Edge Box RPi 200</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg
" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### 软件

我们强烈建议学习 [N3uron 入门指南](https://wiki.seeedstudio.com/cn/Edgebox-rpi-200-n3uron/)。它提供了导航 N3uron Web 界面的基本见解，理解 Web UI 和 Web Vision 模块等概念，掌握标签的概念，以及创建基本仪表板。如果您还没有探索这些基础知识，建议在进一步操作之前先了解这些内容。您可以通过提供的链接访问该指南。

### 配置以太网设置

由于您的 PLC IP 域与无线设置不同，您可能需要手动更改 IP 配置。为此，

- 步骤 01：运行以下命令：

```sh
sudo nano /etc/dhcpcd.conf
```

- 步骤 02：然后根据您的 PLC 网络域配置以太网端口设置，并使用 'metric' 命令设置优先级。最低的 metric 值具有最高优先级。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/ipconfig.PNG" /></center>

## Modbus 模块创建和配置

在 N3uron 的 WebUI 界面中创建模块实例

- 步骤 01：在导航面板中，选择 **Config**。
- 步骤 02：在资源管理器面板中，选择 **Modules**。
- 步骤 03：点击模型菜单并选择 **New Module**。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/modbusmodule.PNG" /></center>

- 步骤 04：实例可以使用任何名称，但在本示例中，我们将使用 **ModbusClient**。
- 步骤 05：将模块类型属性设置为 **ModbusClient**。其余属性保持默认值，然后点击 **Save**。

<center><img width={400} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/modbusmodule2.PNG" /></center>

### 通道创建和配置

- 步骤 01：在创建的 Modbus 客户端和模型下，选择 **New Channel**。将通道名称设置为 **Client**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/newmodbuschannel.PNG" /></center>

- 步骤 02：现在，我们将使用 Modbus TCP 与 PLC 进行通信。请提供 PLC 的 **IP 地址**和**端口地址**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/clientconfig.PNG" /></center>

:::note
 如果您使用 Modbus RTU，需要考虑各种配置。为此，您需要提供 COM 端口、波特率等详细信息。有关在 N3uron 上配置 Modbus RTU 和 TCP 协议的更多信息，请参考提供的[指南](https://docs.n3uron.com/docs/modbus-client-configuration)。
:::

- 步骤 03：添加设备：每个通道可以有一个或多个设备。为设备设置一个**名称**并继续配置。在这种情况下，设备名称是 **PLC**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/adddevice.PNG" /></center>

- 步骤 04：您可以通过此界面调整一些设置。您可以从此链接找到更多详细信息。但是，在这种情况下，我们将保持它们不变。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/deviceconfig.PNG" /></center>

## 标签配置

- 步骤 01：转到 **WebUI**，选择 **Config**，然后点击 **Tag**。在模型部分，点击菜单并选择 **New Tag**。将其命名为 Q1。通常 Q 用于表示输出线圈。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/addtag.PNG" /></center>

- 步骤 02：然后您需要进行以下配置。
  - Source：Enabled/Yes
  - Module Type：ModbusClient
  - ModuleName：ModbusClient
  - Config：Device：Client/PLC
  - Modbus 地址：008931
  - Data type：Boolean
然后**保存**。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/tagconfig.PNG" /></center>

:::note
 建议参考 PLC 或设备制造商关于 Modbus 地址的数据表。在那里，您将找到有关输入、输出和保持地址的详细信息。根据这些规范，应在标签配置中的 Modbus 地址行进行调整。例如，如果制造商将输出线圈 Q1 标记为 8193，则地址应配置为 008193。同样，如果网络输入表示为 1 且为线圈类型，则地址应设置为 000001。
:::

- 步骤 03：实时仿真

连接到系统后，您可以查看输出线圈和输入线圈的实时状态。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/realtimeview.PNG" /></center>

:::note
 通过 N3uron 界面与 PLC 交互需要适当的访问权限，包括读取和写入功能。
:::

## 在 N3uron 的 WebUI 界面中创建一个 MQTT 模块实例

- 步骤 01：在导航面板中，选择 **Config**。
- 步骤 02：在资源管理器面板中，选择 **Modules**。
- 步骤 03：点击模型菜单并选择 **New Module**。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/mqqtmodule.PNG" /></center>

- 步骤 04：实例可以使用任何名称，但在本示例中，我们将使用 **MQTT**。
- 步骤 05：将模块类型属性设置为 **MqttClient**。其余属性保持默认值，然后点击 **Save**。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/mqqtmodule2.PNG" /></center>

## 配置 N3uron 的 MQTT 模块

- 步骤 01：在资源管理器面板中，选择您刚刚创建的 MQTT 实例。
- 步骤 02：点击模型菜单按钮并选择 New Connection。
- 步骤 03：为新连接命名。在本示例中，已命名为 **MqttClient**：

  - Destination broker : Custom
  - Authentication mode: Password
  - Username : Your Broker Username
  - Password: Your Broker Password
  - Protocol:MQTT
  - Broker URL:Broker ip
**保存** 配置

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/mqttchannelconfig.PNG" /></center>

## 使用 N3uron 的 MQTT 模块订阅主题

- 步骤 01：在模型面板中，右键点击 AWS 连接，选择 New Subscriber，并为其命名。在本示例中，我们将简单地使用 Subscriber。

<center><img width={400} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/mqttconnection.PNG" /></center>

- 步骤 02：点击它并在主题字段中添加名称。在本示例中，我们使用了 device/data。

:::note
为了测试和实践体验，我们为您提供了一个可以在 XIAO 上运行的 [Arduino 代码](https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/MQTT_N3uron.ino)。此外，您需要在上传代码之前将自己的凭据输入到此代码中。
:::

- 步骤 03：使用下面显示的值设置以下属性，其余属性保持默认值：

  - Qos: Qos 0.
  - Encoding: UTF8
  - Compression: None
  - Serialization: JSON
  - Data parser/Type: MqttClient JSON
然后 **保存**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/subscriberconfig.PNG" /></center>

:::note
在这里，我们使用了为 MQTTClient JSON 格式配置的数据解析器。XIAO 设备以此格式向代理发布数据。如果您的设备不以此特定格式发布数据，您需要识别它使用的格式并创建自定义 JavaScript 代码片段来相应地处理设备。如需进一步指导，请参考提供的[指南](https://docs.n3uron.com/docs/mqtt-client-custom-parser)。
:::

## 创建标签

- 步骤 01：在资源管理器面板中，选择 **Tags**。
- 步骤 02：在模型菜单中，右键点击文件夹图标，选择 **New Tag**，并为其命名。在本示例中，我们将使用 **test**。

<center><img width={400} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/mqtttag.PNG" /></center>

- 步骤 03：在配置面板中，使用下面显示的值设置以下属性，其余属性保持默认值：

  - Type: Number.
  - Source/Enabled: Yes
  - Module Type: MqttClient
  - Module name: MQTT
  - Config/Subscriber: MqttClient/Subscriber
点击 **Save**。

<center><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/mqtttagconfig.PNG" /></center>

- 步骤 04：实时仿真
连接到系统后，您可以查看来自 MQTT 代理的输出的实时状态。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/realtimeview2.PNG" /></center>

## 额外功能：让我们发布工厂状态到 AWS

:::note
我们已经提供了如何将 [AWS 云连接到您的 Edge Box RPi 200 设备](https://wiki.seeedstudio.com/cn/Edgebox-Rpi-200_N3uron_AWS/) 的分步说明。如果您是第一次接触这个 wiki，请参考此链接。

:::

- 步骤 01：在资源管理器面板中，选择您刚刚创建的 **MQTT** 实例。
- 步骤 02：点击模型菜单按钮并选择 **新建连接**。
- 步骤 03：为新连接命名。在此示例中，已命名为 **MqttPublisher**。

<center><img width={400} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/newpublisher.PNG" /></center>

- 步骤 04：配置连接属性：

  - A：从 **目标代理** 下拉菜单中选择 **Amazon Web Services**。**身份验证模式** 将是 **证书**。此外，在此示例中 **客户端 ID** 是 **N3uron**。
  - B：加载您在 AWS IoT 控制台中创建 Thing 时下载并保存的 **证书、私钥和 CA 证书**。
  - C：在 AWS IoT 控制台中，在左侧菜单中，转到 **设置** 并复制您的 **设备数据端点**。返回 N3uron 并将其粘贴到 **代理 URL** 字段中。
  - D：将其余属性保留为默认值，然后点击 **保存**。

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/publisherconfig.PNG" /></center>

- 步骤 05：在模型面板中，右键点击您刚刚配置的 **MqttPublisher** 连接，选择 **新建发布者**，并为其命名。在此示例中，我们将简单地使用 **AWS**。

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/newpublisheraws.PNG" /></center>

- 步骤 06：点击它并在 **主题** 字段中添加名称。在此示例中，我们使用了 **N3uron**。

- 步骤 07：点击 **标签过滤器** 按钮，选择 **新建标签过滤器**，并更改默认名称。在此示例中我们使用了 **TagFilter**。将模式、路径和正则表达式模式保留为默认值。通过此配置，N3uron 中配置的每个标签都将发布到我们的 AWS 代理。

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/awssettings.PNG" /></center>

- 步骤 08：转到 AWS IoT 控制台，在左侧菜单中选择 **MQTT 测试客户端**。点击 **订阅主题** 选项卡，在主题过滤器中输入 **N3uron** 以订阅所有内容，然后点击 **订阅**。

<center><img width={700} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/awsend.PNG" /></center>

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
