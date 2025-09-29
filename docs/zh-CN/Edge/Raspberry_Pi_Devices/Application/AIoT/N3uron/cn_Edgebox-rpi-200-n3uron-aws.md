---
description: 使用 N3uron 连接 AWS IoT Core
title: 使用 N3uron 连接 AWS IoT Core
keywords:
  - Edge Box Rpi 200
  - Getting started
  - IIoT
  - Industrial 
  - N3uron
  - AWS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Edgebox-Rpi-200_N3uron_AWS
last_update:
  date: 5/2/2024
  author: Kasun Thushara
---
## 介绍

我们已经概述了[使用 MQTT 协议将数据从 Edge Box RPi 200 设备传输到 AWS IoT Core 的过程](https://wiki.seeedstudio.com/cn/Edgebox-rpi-200-AWS/)。本教程将与上述过程无缝集成。在本教程中，我们将深入探讨 N3uron Edge IIoT 平台与 AWS IoT Core 之间接口的复杂性。

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

我们强烈建议学习 [N3uron 入门指南](https://wiki.seeedstudio.com/cn/Edgebox-rpi-200-n3uron/)。它提供了导航 N3uron Web 界面的基本见解，理解 Web UI 和 Web Vision 模块等概念，掌握标签概念，以及创建基本仪表板。如果您还没有探索这些基础知识，建议在进一步操作之前先了解这些内容。您可以通过提供的链接访问该指南。

如果您还没有探索我们关于将 [AWS IoT Core 与 Edge Box RPi 200 集成](https://wiki.seeedstudio.com/cn/Edgebox-rpi-200-AWS/) 的指南，我们也建议您这样做。这个综合指南涵盖了从基础到向 IoT Core 发布值的高级步骤的所有内容。**由于它补充了当前教程，熟悉这些内容也是有益的**。

## 配置 N3uron IIoT 平台

**在 N3uron 的 WebUI 界面中创建模块实例**

- 步骤 01：在 **Navigation** 面板中，选择 **Config**。
- 步骤 02：在 **Explorer** 面板中，选择 **Modules**。
- 步骤 03：点击 **Model** 菜单并选择 **New Module**。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_AWS/createmodel.PNG" /></center>

- 步骤 04：实例可以给任何名称，但在示例中我们将使用 **MQTT**。
- 步骤 05：将 **Module Type** 属性设置为 **MqttClient**。将其余属性保留为默认值并点击 **Save**。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_AWS/selectmodeltype.PNG" /></center>

## 在 WebUI 的 Explorer 面板中配置 N3uron 的 MQTT 模块

- 步骤 01：在 **Explorer** 面板中，选择您刚刚创建的 **MQTT** 实例。
- 步骤 02：点击 Model 菜单按钮并选择 **New Connection**。
- 步骤 03：为新连接命名。在此示例中，它被命名为 **AWS**。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_AWS/AWSconnection.PNG" /></center>

- 步骤 04：配置连接属性：

  - A：从 **Destination Broker** 下拉菜单中选择 **Amazon Web Services**。**Authentication mode** 将是 **Certificate**。此外，在此示例中 **Client Id** 是 **N3uron**。
  - B：加载您在 AWS IoT 控制台中创建 Thing 时下载并保存的 **Certificate、Private key 和 CA certificate**。
  - C：在 AWS IoT 控制台中，在左侧菜单中，转到 **Settings** 并复制您的 **Device Data Endpoint**。返回 N3uron 并将其粘贴到 **Broker URL** 字段中。
  - D：将其余属性保留为默认值并点击 **Save**。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_AWS/AWSconfig.PNG" /></center>

## 使用 N3uron 的 MQTT 模块订阅主题

- 步骤 01：在 **Model** 面板中，右键点击 **AWS** 连接，选择 **New Subscriber**，并为其命名。在此示例中，我们将简单地使用 **Subscriber**。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_AWS/newsubscriber.PNG" /></center>

- 步骤 02：点击它并在 Topic 字段中添加名称。在此示例中，我们使用了 device/data。（在我们的 AWS 教程中，我们在此主题下发布了数据。）

- 步骤 03：使用下面显示的值设置以下属性，将其余属性保留为默认值：
  - **Qos**: Qos 0。
  - **Encoding**: UTF8
  - **Compression**: None
  - **Serialization**: JSON
  - **Data parser/Type**: MqttClient JSON

然后保存。
<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_AWS/Subscriberconfig.PNG" /></center>

## 创建标签

- 步骤 01：在**资源管理器面板**中，选择**标签**。
- 步骤 02：在模型菜单中，右键单击文件夹图标，选择**新建标签**，并为其命名。在此示例中，我们将使用 **Subscribed_value**。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_AWS/newtag.PNG" /></center>

- 步骤 03：在配置面板中，使用下面显示的值设置以下属性，其余属性保持默认值：
  - **类型**：数字。
  - **源/启用**：是
  - **模块类型**：MqttClient
  - **模块名称**：MQTT
  - **配置/订阅者**：AWS/Subscriber

- 步骤 04：点击**保存**。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_AWS/tagconfig.PNG" /></center>

在您运行我们在 AWS IoT 和 Edge Box RPi 200 以及 AWS IoT 上提供的 python 脚本后。
返回到 N3uron WebUI 界面，在左侧面板中选择**数据/实时**。您现在应该能看到之前创建的 **Subscribed_Value** 标签及其值。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_AWS/realtimedata.PNG" /></center>

## 可视化

如果您已经创建了 webvision 模块，可以开始以下步骤。

- 步骤 01：在**配置**部分导航到 **WebVision**，然后点击**打开设计器**。使用您的管理员凭据登录。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_AWS/wenvision.PNG" /></center>

- 步骤 02：在模板部分，创建一个新的容器，按您的意愿命名。然后，将此容器指定为启动容器。这将设置为我们的初始 WebVision 屏幕。它将在旁边显示一个星号符号 (*)。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_AWS/webvison.PNG" /></center>

- 步骤 03：更改容器的背景颜色。

<center><img width={400} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_AWS/colorchabge.PNG" /></center>

- 步骤 04：在主容器内，导航到**组件**并添加新组件。在此示例中，选择**标签**组件。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_AWS/addnewcomp.PNG" /></center>

- 步骤 05：您可以修改标签的属性以获得更好的外观。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_AWS/changeproperties.PNG" /></center>

- 步骤 06：在**标签组件**内，选择将为标签组件显示的值提供数据的标签。

<center><img width={400} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_AWS/selecttag.PNG" /></center>

<center><img width={400} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_AWS/taglist.PNG" /></center>

- 步骤 07：选择标签属性

<center><img width={400} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_AWS/tagproperty.PNG" /></center>

- 步骤 08：接下来，在配置部分导航到 WebVision，然后点击打开 UI。使用您的管理员凭据登录。

 <center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_14.png" /></center>

 随后，您将看到最终结果，即标签值根据从云端订阅的数据进行更新。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Box/N3uron_AWS/output.PNG" /></center>

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
