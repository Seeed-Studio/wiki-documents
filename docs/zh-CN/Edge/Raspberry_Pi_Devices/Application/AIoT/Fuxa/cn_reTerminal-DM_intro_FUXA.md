---
description: FUXA 入门指南
title: FUXA 入门指南 - 基于 Web 的 SCADA 工具
keywords:
  - reTerminal Dm
  - Getting started
  - SCADA
  - Industrial 
  - FUXA
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal-DM_intro_FUXA
last_update:
  date: 1/27/2024
  author: Kasun Thushara
---

## 什么是 SCADA？

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-demo.gif" /></center>

**监控与数据采集系统（SCADA）** 是工业环境中的关键系统，旨在监控和控制过程。它作为一个**集中式平台，从整个工业网络中的各种传感器和设备收集实时数据**。SCADA 使操作员能够**可视化、分析和响应这些数据，促进高效决策**。此外，它还提供**远程访问和控制功能，允许操作员从中央位置管理过程**。SCADA 的集成通过提供整个系统的全面概览和控制，增强了工业操作的整体效率、安全性和可靠性。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-editor.png" /></center>

## FUXA

FUXA 是一个强大的基于 Web 的软件，能够快速创建和部署可扩展的 SCADA、HMI、仪表板或 IIoT 系统。使用 FUXA，您可以为您的机器制作现代化的过程可视化界面，显示实时数据并控制自动化工业设备中的仪器。

## 入门指南

在开始这个项目之前，您可能需要按照此处描述的内容提前准备硬件和软件。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### 软件准备

我们建议从官方网站安装 **Bullesye** 版本的 Raspberry Pi 64 位操作系统。如果您希望安装新的 Raspbian 操作系统，请按照此[**指南**](https://wiki.seeedstudio.com/cn/reterminal-dm-flash-OS/)中概述的步骤进行操作。

## 在 reTerminal DM 上安装 FUXA

:::note

需要安装 Node 版本 18。在终端中逐一执行以下命令。

:::

```sh
wget https://nodejs.org/dist/v18.20.3/node-v18.20.3-linux-arm64.tar.xz

tar -xf node-v18.20.3-linux-arm64.tar.xz

cd node-v18.20.3-linux-arm64
    
sudo cp -R * /usr/local/
    
node -v
    
npm -v

```
**接下来从NPM安装FUXA**

```sh
sudo npm install -g --unsafe-perm @frangoteam/fuxa-min

sudo fuxa

```

FUXA UI 将通过以下 URL 可用：**`http://localhost:1881`**。

FUXA web 服务器主要提供两个页面：

- 面向最终用户的可视化界面 **`http://localhost:1881/home`**
- 用于项目设计的编辑器 **`http://localhost:1881/editor`**

## 如何添加设备和标签？

要与设备建立连接，第一步是获取必要的设备凭据。FUXA 支持多种设备，包括 Modbus RTU/TCP、西门子 S7 协议、OPC-UA、BACnet IP、MQTT 和 Ethernet/IP（Allen Bradley）。连接到设备后，您可以继续配置实时值、标签、传感器等的订阅。

**步骤 1**

导航到设置菜单并选择"连接"以访问设备设置。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/tagdevice.PNG" /></center>

**步骤 2**

点击屏幕底部的"+"图标。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/devicesadd.PNG" /></center>

**步骤 3**

在此示例中，我们将连接 MQTT 服务器。根据您的设备类型（Modbus RTU/TCP、西门子 S7 协议、OPC-UA、BACnet IP、MQTT 或 Ethernet/IP），选择适当的连接类型。

**更多详细信息** [点击这里](https://github.com/frangoteam/FUXA/wiki/HowTo-Devices-and-Tags)

选择设备类型，将轮询间隔设置为您所需的秒数，并启用它。然后，向服务器提供必要的凭据，包括地址、客户端 ID、用户名和密码。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/mqqtdevice.PNG" /></center>

## 选择标签

**步骤 1**

接下来，您将看到一个绿色指示器，确认成功连接到 MQTT 服务器。随后，点击附加图标。

<center><img width={300} img height={350} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/mqqtgreen.PNG" /></center>

**步骤 2**

点击"+"图标添加 MQTT 代理。订阅相关主题，然后点击搜索图标继续。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/mqttsubscribe.png" /></center>

**步骤 3**

接下来，从列表中选择要订阅的主题。提供一个名称并点击"订阅"。您可以灵活地添加多个主题进行订阅。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/mqttsubscribe2.png" /></center>

要发布主题，您需要指定它。提供一个用于识别的名称并指定主题。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/publishmqqt.png" /></center>

之后，您将有一个主题列表，允许您选择是发布还是订阅。

## 使用滑块调整发送到终端设备的值

在此示例中，我们将控制器绑定到设备标签。控制选项卡提供各种输入值的功能，在这种情况下，我们将使用滑块。滑块可以根据您的具体要求进行自定义。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-slider-control.gif" /></center>

## 显示设备数据

在您的系统中，可能需要展示传感器数值。为此，您可以使用圆形仪表、条形仪表等工具。在本演示中，我们将使用圆形仪表，它可以在控件选项卡下找到。

<center><img width={300} img height={350} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/gauge.png" /></center>

接下来，您将看到一个交互式用户界面来修改您的圆形仪表。选择标签并根据您的偏好进行自定义。您可以选择将其分为子区间，为这些区间分配颜色，甚至更改文本位置等其他自定义功能。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/bar.gif" /></center>

## 添加过程工程组件

在本节中，您将发现丰富的过程工程组件，如**泵、电机、鼓风机、储罐、混合器**等。在我们的演示中，我们将重点设置泵的开启和关闭颜色。只需选择相关标签并指定开启和关闭状态的颜色。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/processengineer.gif" /></center>

## 如何制作管道动画

首先设计您的管道形状，然后通过将设备标签（变量）与动画绑定来定义动作。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-pipe.gif" /></center>

## 如何添加图表

要向视图添加图表控件，请进入编辑器并选择视图。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-chart.gif" /></center>

## 如何添加报警

要添加报警，您需要导航到编辑器窗口中的设置并选择**报警**。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/setup-alarms.png" /></center>

接下来，有几个设置报警的选项：高高、高、低和消息。在**高高**中，我们可以设置阈值并配置报警。在**高**中，当数值超过某个范围时，我们可以在两个临界点之间设置报警。**消息**是当数值达到某个阈值时弹出并消失的通知。**低**在传感器数据低于某个水平时触发，例如，当储罐液位较低时。在这种情况下，我们也可以为两个临界设定点设置报警。在本示例中，我们将演示**高高**和**消息**报警的功能运行现象。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/fuxa-alarms.gif" /></center>

要查看报警，您可能需要稍微调整布局，因为它默认是隐藏的。为此，请转到**布局**并导航到**标题导航栏**。

<center><img width={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/Layout1.PNG" /></center>

然后，确保**报警通知模式**设置为**固定**，**信息通知模式**也设置为**固定**。此配置允许您在操作SCADA系统时查看报警通知。

<center><img width={650} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/layoutalarms.PNG" /></center>

<center><img width={750} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/alrmnotification.PNG" /></center>

## 演示

在这个综合演示中，设置包括三个储罐，其中两个储罐装有各种溶液。此外，还有两个独立的阀门和泵将溶液转移到混合罐中。混合过程完成后，有一个单独的阀门用于获取最终溶液。在整个操作过程中，混合罐的温度会被持续监控。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/FUXA/demo-fuxa.gif" /></center>

我们向 **frangoteam** 表示诚挚的感谢，感谢他们在创建本wiki过程中提供的支持和指导。有关FUXA项目的更多详细信息，请参考下面的资源选项卡。

## 资源

- **[网页]** [FUXA官方文档](https://github.com/frangoteam/FUXA/wiki)

## 技术支持

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
