---
description: 开始使用 FUXA
title: 开始使用 FUXA - 基于 Web 的 SCADA 工具
keywords:
  - reTerminal Dm
  - 入门指南
  - SCADA
  - 工业
  - FUXA
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal-DM_intro_FUXA
last_update:
  date: 1/27/2024
  author: Kasun Thushara
---

## 什么是 SCADA？

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-demo.gif" /></center>

**监控与数据采集系统（Supervisory Control and Data Acquisition，简称 SCADA）** 是工业环境中的关键系统，用于监控和控制流程。它作为一个**集中化平台，从工业网络中的各种传感器和设备收集实时数据**。SCADA 使操作员能够**可视化、分析并响应这些数据，从而促进高效的决策**。此外，它还提供**远程访问和控制功能，使操作员能够从中央位置管理流程**。通过 SCADA 的集成，可以通过提供对整个系统的全面概览和控制，提升工业操作的整体效率、安全性和可靠性。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-editor.png" /></center>

## FUXA

FUXA 是一个强大的基于 Web 的软件，能够快速创建和部署可扩展的 SCADA、HMI、仪表盘或工业物联网（IIoT）系统。借助 FUXA，您可以为您的机器定制现代化的流程可视化，展示实时数据并控制自动化工业设备中的仪器。

## 入门指南

在开始此项目之前，您需要提前准备好硬件和软件，如下所述。

### 硬件准备

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

### 软件准备

我们推荐从官方网站安装 **Raspberry Pi 64 位 OS 的 Bullseye 版本**。如果您希望安装新的 Raspbian OS，请按照此[**指南**](https://wiki.seeedstudio.com/cn/reterminal-dm-flash-OS/)中的步骤操作。

## 在 reTerminal DM 上安装 FUXA

:::note

需要安装 Node.js 18 版本。请在终端中逐条执行以下命令。

:::

```sh
wget https://nodejs.org/dist/v18.20.3/node-v18.20.3-linux-arm64.tar.xz

tar -xf node-v18.20.3-linux-arm64.tar.xz

cd node-v18.20.3-linux-arm64
    
sudo cp -R * /usr/local/
    
node -v
    
npm -v

```

**接下来从 NPM 安装 FUXA**

```sh
sudo npm install -g --unsafe-perm @frangoteam/fuxa-min

sudo fuxa

```

FUXA 的用户界面可以通过以下 URL 访问：**http://localhost:1881** 。

FUXA Web 服务器主要提供两个页面：

- 面向终端用户的可视化页面 **http://localhost:1881/home**
- 用于项目和设计的编辑器页面 **http://localhost:1881/editor**

## 如何添加设备和标签？

要与设备建立连接，第一步是获取必要的设备凭据。FUXA 支持多种设备，包括 Modbus RTU/TCP、Siemens S7 协议、OPC-UA、BACnet IP、MQTT 和 Ethernet/IP（Allen Bradley）。连接设备后，您可以继续配置实时值、标签、传感器等的订阅。

**步骤 1**

导航到设置菜单并选择“Connections”以访问设备设置。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/tagdevice.PNG" /></center>

**步骤 2**

点击屏幕底部的“+”图标。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/devicesadd.PNG" /></center>

**步骤 3**

在本示例中，我们将连接 MQTT 服务器。根据您的设备类型（Modbus RTU/TCP、Siemens S7 协议、OPC-UA、BACnet IP、MQTT 或 Ethernet/IP），选择适当的连接类型。

**了解更多详情** [点击这里](https://github.com/frangoteam/FUXA/wiki/HowTo-Devices-and-Tags)

选择设备类型，将轮询间隔设置为您希望的秒数，并启用它。然后，向服务器提供必要的凭据，包括地址、客户端 ID、用户名和密码。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/mqqtdevice.PNG" /></center>

## 选择标签

**步骤 1**

接下来，您会看到一个绿色指示灯，确认成功连接到 MQTT 服务器。随后，点击附加图标。

<center><img width={300} img height={350} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/mqqtgreen.PNG" /></center>

**步骤 2**

点击“+”图标以添加一个 MQTT 代理。订阅相关主题，然后点击搜索图标继续。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/mqttsubscribe.png" /></center>

**步骤 3**

接下来，从列表中选择所需的主题进行订阅。提供一个名称并点击“Subscribe”。您可以灵活地添加多个主题进行订阅。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/mqttsubscribe2.png" /></center>

要发布一个主题，您需要指定它。提供一个用于识别的名称并指定主题。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/publishmqqt.png" /></center>

之后，您将拥有一个主题列表，允许您选择是发布还是订阅。

## 使用滑块调整发送到终端设备的值

在本示例中，我们将控制器绑定到设备标签。控制选项卡提供了多种输入值的功能，在本例中，我们将使用滑块。滑块可以根据您的具体需求进行自定义。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-slider-control.gif" /></center>

## 显示设备数据

在您的系统中，可能需要展示传感器值。为此，您可以使用 Circular Gauge、Bar Gauge 等工具。在本次演示中，我们将使用 Circular Gauge，它可以在 Controls 选项卡下找到。

<center><img width={300} img height={350} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/gauge.png" /></center>

接下来，您将看到一个交互式用户界面，用于修改您的 Circular Gauge。选择标签并根据您的偏好进行自定义。您可以将其分为多个子部分，为这些部分分配颜色，甚至更改文本位置，以及其他自定义功能。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/bar.gif" /></center>

## 添加工艺工程组件

在本节中，您将发现丰富的工艺工程组件，例如 **泵、马达、鼓风机、储罐、搅拌器** 等。作为演示，我们将重点展示如何为泵设置开启和关闭的颜色。只需选择相关的标签，并为开启和关闭状态指定颜色即可。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/processengineer.gif" /></center>

## 如何为管道添加动画

首先，设计您的管道形状，然后通过将设备标签（变量）与动画绑定来定义动作。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-pipe.gif" /></center>

## 如何添加图表

要向视图中添加图表控件，请进入编辑器并选择视图。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-chart.gif" /></center>

## 如何添加报警

要添加报警，您需要在编辑器窗口中导航到设置并选择 **Alarms**。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/setup-alarms.png" /></center>

接下来，有几种设置报警的选项：高高限、高限、低限和消息。在 **高高限** 中，我们可以设置阈值并配置报警。在 **高限** 中，当值超出某个范围时，我们可以在两个关键点之间设置报警。**消息** 是一种通知，当值达到某个阈值时会弹出并消失。**低限** 则在传感器数据低于某个水平时触发，例如当储罐液位较低时。在这种情况下，我们还可以为两个关键设定点设置报警。在本示例中，我们将演示 **高高限** 和 **消息** 报警的出色功能。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-alarms.gif" /></center>

要查看报警，您可能需要稍微调整布局，因为默认情况下它是隐藏的。为此，请转到 **Layout** 并导航到 **Header Navigation Bar**。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/Layout1.PNG" /></center>

然后，确保将 **Alarms notification mode** 设置为 **fixed**，并将 **Info notification mode** 也设置为 **fixed**。此配置允许您在操作 SCADA 系统时查看报警通知。

<center><img width={650} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/layoutalarms.PNG" /></center>

<center><img width={750} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/alrmnotification.PNG" /></center>

## 演示

在这一全面的演示中，设置包括三个储罐，其中两个储罐装有不同的溶液。此外，还有两个独立的阀门和泵，用于将溶液输送到混合罐中。在混合过程完成后，另一个阀门用于获取混合后的溶液。在整个操作过程中，混合罐的温度会被持续监控。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/demo-fuxa.gif" /></center>

我们向 **frangoteam** 表示诚挚的感谢，感谢他们在本 Wiki 创建过程中提供的支持和指导。有关 FUXA 项目的更多详细信息，请参阅下方的资源标签。

## 资源

- **[网页]** [FUXA 官方文档](https://github.com/frangoteam/FUXA/wiki)


# 技术支持

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>