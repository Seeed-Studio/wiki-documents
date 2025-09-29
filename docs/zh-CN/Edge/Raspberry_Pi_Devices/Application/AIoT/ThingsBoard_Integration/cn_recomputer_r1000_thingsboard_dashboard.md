---
description: 通过这个分步指南学习如何在 reComputer 设备上使用 ThingsBoard。了解如何添加设备、配置 MQTT 节点，并使用流行功能创建交互式仪表板以实现高效的数据监控。

title: 使用 ThingsBoard 和 reComputer R1000 创建动态物联网仪表板
keywords:
  - reComputer-R1000
  - Getting started
  - IIoT
  - Industrial 
  - Thingsboard
  - Edge Computing
image: https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/thingsboard_1.webp
slug: /cn/recomputer_r1000_thingsboard_dashboard
last_update:
  date: 10/25/2024
  author: Kasun Thushara
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/thingsboard.gif" style={{width:600}}/></div>

## 介绍

[ThingsBoard 社区版](https://thingsboard.io/)是一个开源平台，提供强大的功能来创建交互式仪表板，在其他开源物联网解决方案中脱颖而出。ThingsBoard 拥有各种图形工具，允许用户轻松可视化和监控从物联网设备收集的数据，使其成为管理和分析实时数据的理想选择。无论是用于工业自动化、智慧城市项目还是环境监测，ThingsBoard 都提供了一种多功能且用户友好的方式来跟踪和响应物联网数据洞察。

## 先决条件

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### 软件

如果您是 ThingsBoard 的新用户，请确保正确安装。请参考[此 wiki](https://wiki.seeedstudio.com/cn/recomputer_r1000_thingsboard_ce/) 获取指导。

## 登录 ThingsBoard

使用以下凭据登录：

:::note
用户名：tenant@thingsboard.org

密码：tenant
:::

## 步骤 1：配置设备

- 在 `实体` 部分下导航到 `设备` 页面。
  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb1.png" style={{width:600}}/></div>

- 点击表格右上角的 `+` 图标，从下拉菜单中选择 `添加新设备`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb2.png" style={{width:600}}/></div>

- 输入设备名称。提供客户端 ID、密码、用户名。点击 `添加`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb3.png" style={{width:600}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/mqtt4.PNG" style={{width:400}}/></div>

- 当您添加更多设备时，它们将出现在表格顶部。表格会自动按创建时间对设备进行排序，最新的设备排在最前面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb5.png" style={{width:600}}/></div>

## 步骤 2：连接设备

- 点击您的设备，然后在 `设备详情` 窗口中点击 `检查连接` 按钮。
  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb6.png" style={{width:600}}/></div>

- 在打开的窗口中，选择消息协议和您的操作系统。
  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb7.png" style={{width:600}}/></div>

- 安装必要的客户端工具并复制提供的命令。
- 执行复制的命令。一旦 `温度` 读数成功发布，设备状态将从"非活动"变为 `活动`。您还将看到发布的温度读数。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb8.png" style={{width:600}}/></div>

- 关闭连接窗口。

## 步骤 3：在 Node-RED 中配置 MQTT 节点

- 如果您使用不同的协议（如 Modbus、BACnet 或 OPC UA）收集数据，可以使用 Node-RED。
- 打开 Node-RED 并添加一个 `MQTT Out` 节点。
- 在 MQTT Out 代理设置中，配置 `客户端名称、密码、代理用户名和 reComputer 的 IP 地址`。
- 使用主题 `v1/devices/me/telemetry` 发送遥测数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/mqtt1.PNG" style={{width:400}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/mqtt2.PNG" style={{width:400}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/mqtt3.PNG" style={{width:400}}/></div>

- 如果您想了解更多关于 MQTT In 节点的信息，[您可以进一步探索](https://wiki.seeedstudio.com/cn/recomputer_r1000_nodered_mqtt/)。

:::note
您不需要在 reComputer 上安装 Mosquitto 代理。
:::

## 步骤 4：创建仪表板

### 创建空仪表板

- 从屏幕左侧的主菜单导航到 `Dashboards` 页面。
- 点击屏幕右上角的 `+` 号，从下拉菜单中选择 `Create new dashboard`。
  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb9.png" style={{width:600}}/></div>

- 在对话框中，输入仪表板的标题（描述是可选的）。点击 `Add`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb10.png" style={{width:600}}/></div>

- 创建仪表板后，它会自动打开，您可以开始添加小部件。
- 要保存仪表板，请点击右上角的 `Save` 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb11.png" style={{width:600}}/></div>

- 您的第一个仪表板现已创建。随着您添加更多仪表板，它们将按创建时间戳排序显示在列表顶部。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb12.png" style={{width:600}}/></div>

### 添加图表小部件

- 进入编辑模式并点击屏幕顶部的 `Add new widget` 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb13.png" style={{width:600}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb14.png" style={{width:600}}/></div>

- 找到 `Charts` 小部件包并点击它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb15.png" style={{width:600}}/></div>

- 选择 `Time series chart` 小部件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb16.png" style={{width:600}}/></div>

- 在 `Device` 字段中，指定您之前创建的设备作为数据源。
- 在 `Series` 部分，输入数据键 `Temperature` 来监控设备的温度值。
- 点击 `Add`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/tb/dashboard/tb17.png" style={{width:600}}/></div>

- 调整小部件大小并应用更改。

您可以在[这里](https://thingsboard.io/docs/user-guide/dashboards/)探索更多仪表板小部件。

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
