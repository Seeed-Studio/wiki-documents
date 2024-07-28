---
description: Introduction of how the mmWave Sensor connect to HA.
title: 通过蓝牙将XIAO的毫米波雷达数据传输到Home Assistant（家庭助手）
keywords:
- mmwave
- radar
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/mmwave_for_xiao_to_ha_bt
last_update:
  date: 03/21/2024
  author: AnXiaodie
---

# 通过蓝牙将XIAO的毫米波雷达数据传输到Home Assistant（家庭助手）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/9.png" style={{width:1000, height:'auto'}}/></div>

## 简介

XIAO 24GHz毫米波传感器 - 人体静态检测是Seeed Studio XIAO系列的一个扩展板。它是一个集成了天线、高灵敏度的毫米波传感器，基于FMCW（调频连续波）原理。结合传感器信号处理技术和精确的人体感应算法，它能够识别运动中或静止状态下的人体。

本章主要介绍如何将XIAO 24GHz毫米波传感器通过蓝牙连接到HA（Home Assistant，家庭助手）。关于XIAO 24GHz毫米波传感器的详细功能特性，您可以参考[这里](https://wiki.seeedstudio.com/mmwave_for_xiao/)。

:::caution注意
本Wiki的所有内容仅适用于XIAO 24GHz毫米波传感器，并不适用于其他毫米波传感器。
:::

## 开始使用

### 硬件准备

在本文中，我们将使用XIAO的毫米波传感器与XIAO ESP32C3配合使用，并将其插入Home Assistant中，以便美观和易于布线。如果您想严格按照本教程进行操作，那么您需要准备以下模块。

<table align="center">
	<tr>
		<th>Seeed Studio XIAO ESP32C3</th>
        <th>24GHz mmWave for XIAO</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/1.png" style={{width:150, height:'auto'}}/></div></td>
	</tr>
    <tr>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
				</a>
        </div></td>
	</tr>
</table>


该传感器专为与XIAO兼容而设计，因此，通常如果您想使用此传感器，您需要准备一个XIAO，并为传感器安装母排针。当连接到XIAO时，请特别注意传感器的安装方向，请勿反向插入，否则可能会烧毁传感器或XIAO。

:::caution注意
正确的方向是传感器的天线应朝向外部。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/5.png" style={{width:800, height:'auto'}}/></div>

确认连接方向正确后，您可以将USB-C型电缆连接到电脑或3.3V电源，传感器将开始工作。

:::tip提示
如果您手头暂时没有XIAO，您可以选择将TTL连接到其3.3V引脚和GND引脚，为XIAO的毫米波传感器单独供电，这也可以按照本教程的内容进行。对于本教程，无需使用RX和TX引脚。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/10.jpg" style={{width:300, height:'auto'}}/></div>
:::

### 软件准备

如果您还没有安装HomeAssistant，可以点击[这里](https://www.home-assistant.io/installation/)参考HomeAssistant的官方教程。

## 操作步骤

### 步骤1. 发现设备

在Home Assistant中，点击左下角的**设置**，在中心选择**设备与服务**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/1.png" style={{width:1000, height:'auto'}}/></div>

在“已发现”区域中，会出现一个传感器图标，请点击**配置**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/2.png" style={{width:1000, height:'auto'}}/></div>

将会出现一个弹窗，点击**提交**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/3.png" style={{width:1000, height:'auto'}}/></div>

您将看到一个配置成功的弹窗，点击**完成**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/4.png" style={{width:1000, height:'auto'}}/></div>

### 步骤2. 配置设备

在已配置区域，点击**ld2410_ble**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/5.png" style={{width:1000, height:'auto'}}/></div>

一旦进入传感器设置页面，点击**设备1**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/6.png" style={{width:1000, height:'auto'}}/></div>

将传感器的返回值添加到仪表板中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/7.png" style={{width:1000, height:'auto'}}/></div>

在弹出窗口中选择“添加到仪表板”。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/8.png" style={{width:1000, height:'auto'}}/></div>

最后，点击左上角的“概览”，您会看到mmwave-for-xiao传感器数据已成功显示在仪表板上。至此，mmwave for xiao传感器已成功连接到Home Assistant。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/9.png" style={{width:1000, height:'auto'}}/></div>

接下来，您可以充分发挥创造力，实现自动化操作！

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供全方位的支持，确保您在使用我们的产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同偏好和需求。

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>