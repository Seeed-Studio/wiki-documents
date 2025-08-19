---
description: 将 N3uron 连接到支持 MQTT 和 Modbus 的设备
title: 将 N3uron 连接到支持 MQTT 和 Modbus 的设备
keywords:
  - reTerminal DM
  - MQTT
  - IIoT
  - 工业
  - N3uron
  - Modbus
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminalDM_N3uron_modbus_mqtt
last_update:
  date: 2024/5/6
  author: Kasun Thushara 和 Xabier Fernández
---
## 简介

在工业自动化中，Modbus 是最常见的协议之一。而 MQTT 因其众多特性，已成为工业自动化中物联网的领先协议。其轻量化设计、高效性、可扩展性以及对异步消息的支持尤为显著。在 MQTT 中，设备仅在有可报告事件时进行通信，这与持续更新检查形成鲜明对比。这种事件驱动的方法，加上异常报告（仅在数据偏离常规或触发特定条件时发送数据），节省了带宽和资源，从而优化了关键物联网应用的数据传输。

reTerminal DM 和 [N3uron](https://n3uron.com/) Duo 的强大组合，通过提供强大的连接性和数据处理能力，实现了高效的工厂管理。本 Wiki 强调了 Modbus TCP 在工业环境中的重要性，并突出了与 MQTT 设备的无缝集成，以进一步增强连接性。

## 前置条件

### 硬件

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal DM</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### 软件

我们强烈建议先学习 [N3uron 入门指南](https://wiki.seeedstudio.com/cn/reTerminalDM_N3uron_Get_Start/)。该指南提供了关于如何使用 N3uron Web 界面的基本知识，包括 Web UI 和 Web Vision 模块的概念、标签的理解以及创建基本仪表板的操作。如果您尚未了解这些基础知识，建议先通过提供的链接进行学习。

### 配置以太网设置

由于您的 PLC IP 域与无线设置不同，您可能需要手动更改 IP 配置。具体步骤如下：
- 第一步：运行以下命令：

```sh
sudo nano /etc/dhcpcd.conf
```

- 第二步：根据您的 PLC 网络域配置以太网端口设置，并使用 'metric' 命令设置优先级。数值越低的 metric 优先级越高。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/ipconfig.PNG" /></center>

## Modbus 模块创建与配置

在 N3uron 的 WebUI 界面中创建模块实例

- 步骤 01：在导航面板中，选择 **Config**。
- 步骤 02：在资源管理器面板中，选择 **Modules**。
- 步骤 03：点击 Model 菜单并选择 **New Module**。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/modbusmodule.PNG" /></center>

- 步骤 04：实例可以命名为任意名称，但在本例中，我们将其命名为 **ModbusClient**。
- 步骤 05：将 Module Type 属性设置为 **ModbusClient**。其余属性保持默认值，然后点击 **Save**。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/modbusmodule2.PNG" /></center>

### 通道创建与配置

- 步骤 01：在创建的 Modbus Client 和 Model 下，选择 **New Channel**。将通道命名为 **Client**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/newmodbuschannel.PNG" /></center>

- 步骤 02：现在，我们将使用 Modbus TCP 与 PLC 通信。请提供 PLC 的 **IP 地址** 和 **端口地址**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/clientconfig.PNG" /></center>

:::note
如果您使用的是 Modbus RTU，则需要考虑各种配置。为此，您需要提供诸如 COM 端口、波特率等详细信息。有关在 N3uron 上配置 Modbus RTU 和 TCP 协议的更多信息，请参考提供的[指南](https://docs.n3uron.com/docs/modbus-client-configuration)。
:::

- 步骤 03：添加设备：每个通道可以包含一个或多个设备。为设备设置一个 **名称** 并继续配置。在本例中，设备名称为 **PLC**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/adddevice.PNG" /></center>

- 步骤 04：您可以通过此界面调整一些设置。更多详细信息可以通过此链接找到。然而，在本例中，我们将保持默认设置。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/deviceconfig.PNG" /></center>

## 标签配置

- 步骤 01：进入 **WebUI**，选择 **Config**，然后点击 **Tag**。在 Model 部分，点击菜单并选择 **New Tag**。将其命名为 Q1。通常 Q 用于表示输出线圈。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/addtag.PNG" /></center>

- 步骤 02：然后需要进行以下配置：
    - Source：Enabled/Yes
    - Module Type：ModbusClient
    - ModuleName：ModbusClient
    - Config：Device: Client/PLC
    - Modbus address：008931
    - Data type：Boolean  
并点击 **Save**。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/tagconfig.PNG" /></center>

:::note
建议参考 PLC 或设备制造商的技术手册中的 Modbus 地址。在那里，您可以找到有关输入、输出和保持地址的详细信息。根据这些规范，应在标签配置中的 Modbus 地址行进行调整。例如，如果制造商将输出线圈 Q1 标记为 8193，则地址应配置为 008193。同样，如果网络输入标记为 1 且为线圈类型，则地址应设置为 000001。
:::

- 步骤 03：实时仿真

连接到系统后，您可以查看输出线圈和输入线圈的实时状态。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/realtimeview.PNG" /></center>

:::note
通过 N3uron 界面与 PLC 交互需要适当的访问权限，包括读写权限。
:::

## 在 N3uron 的 WebUI 界面中创建一个 MQTT 模块实例

- 步骤 01：在导航面板中，选择 **Config**。
- 步骤 02：在资源管理器面板中，选择 **Modules**。
- 步骤 03：点击 Model 菜单并选择 **New Module**。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/mqqtmodule.PNG" /></center>

- 步骤 04：实例可以命名为任意名称，但在本示例中，我们将使用 **MQTT**。
- 步骤 05：将模块类型属性设置为 **MqttClient**。其余属性保持默认值，然后点击 **Save**。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/mqqtmodule2.PNG" /></center>

## 配置 N3uron 的 MQTT 模块

- 步骤 01：在资源管理器面板中，选择刚刚创建的 MQTT 实例。
- 步骤 02：点击 Model 菜单按钮并选择 New Connection。
- 步骤 03：为新连接命名。在本示例中，命名为 **MqttClient**：

    - 目标代理：Custom 
    - 认证模式：Password
    - 用户名：您的代理用户名
    - 密码：您的代理密码
    - 协议：MQTT
    - 代理 URL：代理 IP
**保存**配置

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/mqttchannelconfig.PNG" /></center>

## 使用 N3uron 的 MQTT 模块订阅主题

- 步骤 01：在 Model 面板中，右键点击 AWS 连接，选择 New Subscriber，并为其命名。在本示例中，我们将其命名为 Subscriber。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/mqttconnection.PNG" /></center>

- 步骤 02：点击它，并在 Topic 字段中添加一个名称。在本示例中，我们使用 device/data。

:::note
为了测试和实践，我们为您提供了一个可以在 XIAO 上运行的 [Arduino 代码](https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/MQTT_N3uron.ino)。此外，您需要在上传代码之前输入您自己的凭据。
:::

- 步骤 03：使用以下值设置以下属性，其余属性保持默认值：

    - Qos：Qos 0
    - 编码：UTF8
    - 压缩：None
    - 序列化：JSON
    - 数据解析器/类型：MqttClient JSON
然后点击 **Save**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/subscriberconfig.PNG" /></center>

:::note
在这里，我们使用了为 MQTTClient JSON 格式配置的数据解析器。XIAO 设备以此格式向代理发布数据。如果您的设备未以此特定格式发布数据，您需要识别其使用的格式并创建自定义 JavaScript 代码片段以相应处理设备。有关更多指导，请参阅提供的[指南](https://docs.n3uron.com/docs/mqtt-client-custom-parser)。
:::

## 创建一个 Tag

- 步骤 01：在资源管理器面板中，选择 **Tags**。
- 步骤 02：在 Model 菜单中，右键点击文件夹图标，选择 **New Tag**，并为其命名。在本示例中，我们将其命名为 **test**。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/mqtttag.PNG" /></center>

- 步骤 03：在配置面板中，使用以下值设置以下属性，其余属性保持默认值：

    - 类型：Number
    - 来源/启用：Yes
    - 模块类型：MqttClient
    - 模块名称：MQTT
    - 配置/订阅者：MqttClient/Subscriber
点击 **Save**。

<center><img width={500} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/mqtttagconfig.PNG" /></center>

- 步骤 04：实时模拟  
连接到系统后，您可以查看来自 MQTT 代理的输出的实时状态。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/realtimeview2.PNG" /></center>

## 奖励：使用 AWS 发布工厂状态

:::note
我们提供了逐步的操作指南，教您如何将 [AWS 云连接到您的 reTerminal DM 设备](https://wiki.seeedstudio.com/cn/reTerminal-DM_AWS_first/)。如果您是第一次访问此 Wiki，请参考该链接。
:::

- 第一步：在 Explorer 面板中，选择您刚刚创建的 **MQTT** 实例。
- 第二步：点击 Model 菜单按钮并选择 **New Connection**。
- 第三步：为新连接命名。在本示例中，命名为 **MqttPublisher**。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/newpublisher.PNG" /></center>

- 第四步：配置连接属性：

    - A: 从 **Destination Broker** 下拉菜单中选择 **Amazon Web Services**。**Authentication mode** 将设置为 **Certificate**。此外，**Client Id** 在本示例中为 **N3uron**。
    - B: 加载您在 AWS IoT 控制台中创建 Thing 时下载并保存的 **Certificate、Private key 和 CA certificate**。
    - C: 在 AWS IoT 控制台左侧菜单中，进入 **Settings** 并复制您的 **Device Data Endpoint**。返回 N3uron 并将其粘贴到 **Broker URL** 字段中。
    - D: 保留其他属性为默认值，然后点击 **Save**。

<center><img width={700} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/publisherconfig.PNG" /></center>

- 第五步：在 Model 面板中，右键点击您刚刚配置的 **MqttPublisher** 连接，选择 **New Publisher**，并为其命名。在本示例中，我们将其命名为 **AWS**。

<center><img width={700} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/newpublisheraws.PNG" /></center>

- 第六步：点击它，并在 **Topic** 字段中添加一个名称。在本示例中，我们使用了 **N3uron**。

- 第七步：点击 **Tag Filter** 按钮，选择 **New Tag Filter**，并更改默认名称。在本示例中，我们使用了 **TagFilter**。保留 Mode、Path 和 Regex pattern 为默认值。通过此配置，N3uron 中配置的每个标签都会发布到我们的 AWS Broker。

<center><img width={700} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/awssettings.PNG" /></center>

- 第八步：进入 AWS IoT 控制台，在左侧菜单中选择 **MQTT test client**。点击 **Subscribe to a topic** 标签，在 Topic filter 中输入 **N3uron** 以订阅所有内容，然后点击 **Subscribe**。

<center><img width={700} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron-mqtt-modbus/awsend.PNG" /></center>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供了多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>