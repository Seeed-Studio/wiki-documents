---
description: 通过本分步指南学习如何在 reComputer 设备上使用 ThingsBoard。了解如何添加设备、配置 MQTT 节点，以及使用流行功能创建交互式仪表板以实现高效的数据监控。

title: 使用 ThingsBoard 和 reComputer R1000 创建动态物联网仪表板
keywords:
  - reComputer-R1000
  - 入门指南
  - IIoT
  - 工业
  - ThingsBoard
  - 边缘计算
image: https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/thingsboard_1.webp
slug: /cn/recomputer_r1000_thingsboard_dashboard
last_update:
  date: 2024/10/25
  author: Kasun Thushara
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/thingsboard.gif" style={{width:600}}/></div>

## 介绍

[ThingsBoard 社区版](https://thingsboard.io/)是一款开源平台，提供强大的功能，用于创建在其他开源物联网解决方案中脱颖而出的交互式仪表板。借助各种图形工具，ThingsBoard 允许用户轻松可视化和监控从物联网设备收集的数据，非常适合管理和分析实时数据。无论是工业自动化、智慧城市项目还是环境监测，ThingsBoard 都提供了一种多功能且用户友好的方式来跟踪和响应物联网数据洞察。

## 前提条件

### 硬件

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

### 软件

如果您是 ThingsBoard 的新用户，请确保其已正确安装。请参考[此 Wiki](https://wiki.seeedstudio.com/cn/recomputer_r1000_thingsboard_ce/)获取指导。

## 登录 ThingsBoard
使用以下凭据登录：

:::note
用户名：tenant@thingsboard.org

密码：tenant
:::

## 步骤 1：配置设备

- 导航到 `Entities` 部分下的 `Devices` 页面。
  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb1.png" style={{width:600}}/></div>

- 点击表格右上角的 `+` 图标，并从下拉菜单中选择 `Add new device`。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb2.png" style={{width:600}}/></div>

- 输入设备名称。填写 Client Id、Password、Username。点击 `Add`。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb3.png" style={{width:600}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/mqtt4.PNG" style={{width:400}}/></div>

- 随着您添加更多设备，它们将显示在表格顶部。表格会自动按创建时间排序，最新的设备列在最前面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb5.png" style={{width:600}}/></div>

## 第 2 步：连接设备
- 点击您的设备，然后在 `设备详情` 窗口中点击 `检查连接性` 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb6.png" style={{width:600}}/></div>

- 在打开的窗口中，选择消息协议和您的操作系统。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb7.png" style={{width:600}}/></div>

- 安装必要的客户端工具并复制提供的命令。
- 执行复制的命令。当 `temperature` 数据成功发布后，设备状态将从“未激活”变为 `激活`。您还将看到已发布的温度数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb8.png" style={{width:600}}/></div> 

- 关闭连接窗口。

## 第 3 步：在 Node-RED 中配置 MQTT 节点
- 如果您使用不同的协议（如 Modbus、BACnet 或 OPC UA）收集数据，可以使用 Node-RED。
- 打开 Node-RED 并添加一个 `MQTT 输出` 节点。
- 在 MQTT 输出代理设置中，配置 `客户端名称、密码、代理用户名以及 reComputer 的 IP 地址`。
- 使用主题 `v1/devices/me/telemetry` 发送遥测数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/mqtt1.PNG" style={{width:400}}/></div> 
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/mqtt2.PNG" style={{width:400}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/mqtt3.PNG" style={{width:400}}/></div>

- 如果您想了解更多关于 MQTT 输入节点的信息，[您可以进一步探索](https://wiki.seeedstudio.com/cn/recomputer_r1000_nodered_mqtt/)。 

:::note
您无需在 reComputer 上安装 Mosquitto 代理。
:::



## 第 4 步：创建仪表板
### 创建一个空仪表板
- 从屏幕左侧主菜单导航到 `仪表板` 页面。
- 点击屏幕右上角的 `+` 符号，并从下拉菜单中选择 `创建新仪表板`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb9.png" style={{width:600}}/></div> 

- 在对话框中，为仪表板输入一个标题（描述为可选项）。点击 `添加`。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb10.png" style={{width:600}}/></div> 

- 创建仪表板后，它会自动打开，您可以开始添加小部件。
- 要保存仪表板，请点击右上角的 `保存` 按钮。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb11.png" style={{width:600}}/></div> 

- 您的第一个仪表板已创建。当您添加更多仪表板时，它们将按创建时间戳排序，显示在列表顶部。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb12.png" style={{width:600}}/></div> 

### 添加一个图表小部件
- 进入编辑模式并点击屏幕顶部的 `添加新小部件` 按钮。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb13.png" style={{width:600}}/></div> 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb14.png" style={{width:600}}/></div> 

- 找到 `图表` 小部件包并点击它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb15.png" style={{width:600}}/></div> 

- 选择 `时间序列图表` 小部件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb16.png" style={{width:600}}/></div> 


- 在 `设备` 字段中，指定您之前创建的设备作为数据源。
- 在 `系列` 部分，输入数据键 `Temperature` 以监控设备的温度值。
- 点击 `添加`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb17.png" style={{width:600}}/></div> 

- 调整小部件大小并应用更改。

您可以在 [这里](https://thingsboard.io/docs/user-guide/dashboards/) 探索更多仪表板小部件。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>