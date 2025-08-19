---
description: 将 AWS IoT Core 与 N3uron 连接
title: 将 AWS IoT Core 与 N3uron 连接
keywords:
  - reTerminal DM
  - 入门指南
  - IIoT
  - 工业
  - N3uron
  - AWS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminalDM_N3uron_AWS
last_update:
  date: 2024/3/20
  author: Kasun Thushara
---
## 介绍

我们已经概述了[通过 MQTT 协议将数据从 reTerminal DM 设备传输到 AWS IoT Core 的过程](https://wiki.seeedstudio.com/cn/reTerminal-DM_AWS_first/)。本教程将与上述过程无缝集成。在本教程中，我们将深入探讨 N3uron 边缘 IIoT 平台与 AWS IoT Core 之间的接口细节。

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

我们强烈建议先学习[《N3uron 入门指南》](https://wiki.seeedstudio.com/cn/reTerminalDM_N3uron_Get_Start/)。该指南提供了关于如何使用 N3uron Web 界面的基本知识，包括 Web UI 和 Web Vision 模块的概念、标签的理解以及创建基本仪表板的操作。如果您尚未了解这些基础知识，建议在继续之前先阅读该指南。您可以通过提供的链接访问该指南。

如果您尚未阅读我们关于[将 AWS IoT Core 与 reTerminal DM 集成](https://wiki.seeedstudio.com/cn/reTerminal-DM_AWS_first/)的指南，我们也建议您阅读。这份全面的指南涵盖了从基础到高级的步骤，包括如何将值发布到 IoT Core。**由于它与当前教程相辅相成，熟悉该内容将非常有益**。

## 配置 N3uron IIoT 平台

**在 N3uron 的 WebUI 界面中创建模块实例**

- 步骤 01：在 **导航** 面板中，选择 **Config**。
- 步骤 02：在 **资源管理器** 面板中，选择 **Modules**。
- 步骤 03：点击 **Model** 菜单并选择 **New Module**。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/createmodel.PNG" /></center>

- 步骤 04：实例可以命名为任何名称，但在本示例中我们将使用 **MQTT**。
- 步骤 05：将 **Module Type** 属性设置为 **MqttClient**。其余属性保持默认值，然后点击 **Save**。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/selectmodeltype.PNG" /></center>

## 在 WebUI 的 Explorer 面板中配置 N3uron 的 MQTT 模块

- 步骤 01：在 **Explorer** 面板中，选择您刚刚创建的 **MQTT** 实例。
- 步骤 02：点击 **Model** 菜单按钮并选择 **New Connection**。
- 步骤 03：为新连接命名。在本例中，将其命名为 **AWS**。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/AWSconnection.PNG" /></center>

- 步骤 04：配置连接属性：
    - A: 从 **Destination Broker** 下拉菜单中选择 **Amazon Web Services**。**Authentication mode** 将为 **Certificate**。在本例中，**Client Id** 为 **N3uron**。
    - B: 加载您在 AWS IoT 控制台中创建 Thing 时下载并保存的 **Certificate、Private key 和 CA certificate**。
    - C: 在 AWS IoT 控制台的左侧菜单中，进入 **Settings** 并复制您的 **Device Data Endpoint**。返回 N3uron 并将其粘贴到 **Broker URL** 字段中。
    - D: 保留其余属性为默认值，然后点击 **Save**。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/AWSconfig.PNG" /></center>

## 使用 N3uron 的 MQTT 模块订阅主题

- 步骤 01：在 **Model** 面板中，右键点击 **AWS** 连接，选择 **New Subscriber**，并为其命名。在本例中，我们将其命名为 **Subscriber**。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/newsubscriber.PNG" /></center>

- 步骤 02：点击它并在 Topic 字段中添加一个名称。在本例中，我们使用了 device/data。（在我们的 AWS 教程中，我们在此主题下发布了数据。）

- 步骤 03：使用以下值设置属性，其余属性保留默认值：
    - **Qos**: Qos 0。
    - **Encoding**: UTF8
    - **Compression**: None
    - **Serialization**: JSON
    - **Data parser/Type**: MqttClient JSON

然后点击保存。
<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/Subscriberconfig.PNG" /></center>

## 创建一个 Tag
- 步骤 01：在 **Explorer panel** 中，选择 **Tags**。
- 步骤 02：在 Model 菜单中，右键点击文件夹图标，选择 **New Tag**，并为其命名。在本例中，我们将其命名为 **Subscribed_value**。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/newtag.PNG" /></center>

- 步骤 03：在 Configuration 面板中，使用以下值设置属性，其余属性保留默认值：
    - **Type**: Number。
    - **Source/Enabled**: Yes
    - **Module Type**: MqttClient
    - **Module name**: MQTT
    - **Config/Subscriber**: AWS/Subscriber

- 步骤 04：点击 **Save**。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/tagconfig.PNG" /></center>

在您运行我们提供的 AWS IoT 和 reTerminal DM 或 EdgeBox 与 AWS IoT 的 Python 脚本后，返回 N3uron WebUI 界面，在左侧面板中选择 **Data/Real Time**。您现在应该可以看到之前创建的 **Subscribed_Value** 标签及其值。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/realtimedata.PNG" /></center>

## 可视化

如果您已经创建了一个 WebVision 模块，可以开始以下步骤。

- 步骤 01：在 **Config** 部分导航到 **WebVision**，然后点击 **Open Designer**。使用管理员凭据登录。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/wenvision.PNG" /></center>

- 步骤 02：在 Templates 部分，创建一个新的容器，并根据您的需求命名。然后，将此容器设置为启动容器。这将设置为我们的初始 WebVision 屏幕，它会显示一个星号符号（*）在旁边。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/webvison.PNG" /></center>

- 步骤 03：更改容器的背景颜色。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/colorchabge.PNG" /></center>

- 步骤 04：在主容器内，导航到 **Components** 并添加一个新组件。在本例中，选择 **Label** 组件。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/addnewcomp.PNG" /></center>

- 步骤 05：您可以修改标签的属性以获得更好的外观。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/changeproperties.PNG" /></center>

- 步骤 06：在 **Label 组件** 内，选择将为标签组件显示值的标签。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/selecttag.PNG" /></center>

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/taglist.PNG" /></center>

- 步骤 07：选择标签属性。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/tagproperty.PNG" /></center>

- 步骤 08：接下来，导航到 Config 部分的 WebVision 并点击 Open UI。使用管理员凭据登录。

 <center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_14.png" /></center>
 
 随后，您将看到最终结果，即根据从云端订阅的数据更新标签值。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron_AWS/output.PNG" /></center>

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>