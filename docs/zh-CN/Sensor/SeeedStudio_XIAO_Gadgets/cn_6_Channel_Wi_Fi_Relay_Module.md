---
title: 6通道Wi-Fi继电器模块在Home Assistant中的应用
description: |
  来自Seeed Studio的智能设备，专为在安全直流电压下无线控制设备而设计。
image: https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/7-114993588_6_CH_Relay_Sensor_feature.webp
slug: /cn/6_channel_wifi_relay
keywords:
  - XIAO
  - Home Assistant
  - Relay
  - Smart Home
sidebar_position: 2
last_update:
  author: Cody
  date: 01/04/2025
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 6通道Wi-Fi继电器模块在Home Assistant中的入门指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/7-114993588_6_CH_Relay_Sensor_feature.webp" style={{width:640, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/6-Channel-Wi-Fi-5V-DC-Relay-p-6373.html?utm_source=wiki" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div><br />

## 概述

**[6通道Wi-Fi继电器模块](https://www.seeedstudio.com/)**是Seeed Studio推出的智能设备，专为在安全直流电压范围内进行控制而设计，不适用于交流供电设备。其六通道配置支持独立控制多达六个负载，是智能家居环境中自动化各种设备的绝佳选择。

除了六个继电器通道外，该模块还配备了两个额外的Grove扩展接口，允许用户集成额外的传感器或执行器，以实现更高级的自动化场景。

本指南提供了详细的操作说明，包括设置、集成和高级配置，适用于从初学者到智能家居爱好者的各类用户。

### 主要特性和规格

<div class="table-center">
<table align="center">
    <thead>
        <tr>
            <th>特性</th>
            <th>详细信息</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>输入电压</th>
            <td>DC 5V(适用于XIAO)</td>
        </tr>
        <tr>
            <th>直流耐压</th>
            <td>DC 0~30V</td>
        </tr>
        <tr>
            <th>最大负载</th>
            <td>每通道10A</td>
        </tr>
        <tr>
            <th>通道数</th>
            <td>6个（每个通道独立控制）</td>
        </tr>
        <tr>
            <th>连接类型</th>
            <td>Wi-Fi</td>
        </tr>
        <tr>
            <th>电气端口</th>
            <td>NO（常开）、COM（公共端）、NC（常闭）</td>
        </tr>
        <tr>
            <th>Grove扩展</th>
            <td>IIC×1，UART×1</td>
        </tr>
    </tbody>
</table>
</div>

:::warning 安全警告

此继电器模块专为低压直流操作而设计。请勿将其连接到交流电源以避免电气危险。在为继电器接线之前，请务必断开电源以防止短路和电击。

超过24V的电压可能会导致电击或烧伤，特别是在皮肤破损或潮湿环境中。处理电气设备时请谨慎操作以避免受伤。

:::

### 物理布局和连接

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/simplified_diagram_with_con.png" style={{width: 600, height: 'auto'}}/></div>

- **NO (常开)**: 常开端子。默认情况下，此端子不与公共端子 (COM) 连接。当继电器激活时，NO 端子连接到 COM 端子。通常用于控制负载的开关。
- **COM (公共)**: 继电器的公共端子，作为电路一侧的共享连接点。
- **NC (常闭)**: 常闭端子。默认情况下，此端子与公共端子 (COM) 连接。当继电器激活时，NC 端子和 COM 端子之间的连接断开。通常用于需要断开控制的场景。

   | XIAO GPIO | 继电器通道 |
   | --------- | ------------- |
   | GPIO2     | 继电器 1       |
   | GPIO21    | 继电器 2       |
   | GPIO1     | 继电器 3       |
   | GPIO0     | 继电器 4       |
   | GPIO19    | 继电器 5       |
   | GPIO18    | 继电器 6       |

## 入门指南

### 要求

1. **核心组件**:
   - [6通道Wi-Fi继电器模块](https://www.seeedstudio.com/)
   - [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html)
2. **网络**:
   - 稳定的Wi-Fi，确保硬件与Home Assistant之间的无缝交互。

### 步骤1：设置Home Assistant {#setting-up-home-assistant}

1. **安装**: homeassistant已预装在[Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html)中。
2. **启用ESPHome插件**:
   - 访问Home Assistant仪表板。
   - 导航到"插件"部分并搜索ESPHome插件。
   - 点击"安装"然后"启动"以启用它。
   - 安装完成后，配置插件以确保与XIAO ESP32C6的正确通信。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enabling_ESPHome_Add-on.png" style={{width:1000, height:'auto'}}/></div>

通过收集必要的组件并使用ESPHome插件设置Home Assistant，您将准备好继续集成6通道继电器模块。

### 步骤2：准备继电器模块

默认情况下，您的设备（XIAO ESP32C6）预装了6通道继电器的固件。但是，在两种情况下您可能需要更新固件：

1. **重新刷写固件**: 如果现有固件损坏或您需要重新开始。
2. **升级固件**: 如果有具有改进功能的新版本固件。

有两种简单的刷写固件方法：

:::caution
Firefox不支持在ESP设备上刷写固件。请使用Google Chrome或Microsoft Edge。
:::

<Tabs>
<TabItem value='Web Tool'>

您可以使用这个[Web工具](https://seeed-projects.github.io/6-Channel_Relay_based_on_XIAO_ESP32C6/)来简单直接地刷写固件。只需按照屏幕上的说明操作。

- 点击`CONNECT`按钮启动连接。工具将自动更新固件。

如果出现问题，请按照屏幕上的故障排除步骤操作，或切换到`ESPHome Web`方法完成过程。

</TabItem>
<TabItem value='ESPHome Web'>

对于此方法，您需要从[这里](https://github.com/Seeed-Projects/6-Channel_Relay_based_on_XIAO_ESP32C6/releases)下载`bin`固件文件（您需要解压下载的文件）。

1. 将传感器套件连接到您的PC。
2. 访问[ESPHome Web](https://web.esphome.io/)页面。
3. 选择带有`*.factory.bin`后缀的固件文件。

观看以下视频，了解通过ESPHome Web刷写固件的详细步骤：

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="Install firmware via ESPHome Web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</TabItem>
</Tabs>

使用任一方法，您都将更新固件并准备好与Home Assistant集成。

### 步骤3：网络配置

1. **启用接入点**:
   - 首次上电时，模块将创建一个Wi-Fi网络（SSID：`seeedstudio-6-channel-relay`）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ap-from-xiao-esp32c6-seeedstudio-6-channel-relay.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

2. **访问配置**:
   - 使用手机或PC连接到该网络。
   - 打开浏览器并导航到[http://192.168.4.1](http://192.168.4.1)。
   - 输入您家庭Wi-Fi网络的SSID和密码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ap_wireless_setting_page.png" style={{width:'auto', height:680, "border-radius": '15px'}}/></div>

3. **Home Assistant集成**:
   - 连接到家庭网络后，模块将在Home Assistant的`设置 -> 设备和服务`下可被发现。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ha_new_device_discovered.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

这样，您可以将模块连接到您的Home Assistant网络并让Home Assistant发现它。

### 步骤 4：添加模块设备

1. **自动发现**：
   - 确保 **ESPHome** 已安装在 Home Assistant 中。
   - 导航到 `设置 -> 设备与服务 -> 集成` 并查找设备。
2. **手动配置**：
   - 如果未自动发现，请通过指定其 IP 地址手动添加设备。

添加设备后，您可以在概览页面中看到所有六个开关。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/buttons_in_ha_overview.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

您还可以单独设置每个开关的名称。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/buttons_in_ha_overview_with_custom_names.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

### 步骤 5：连接您想要控制的电器

:::warning 安全警告

此继电器模块专为低压直流操作而设计。请勿将其连接到交流电源以避免电气危险。在为继电器接线之前，请始终断开电源以防止短路和电击。

超过 24V 的电压可能导致电击或烧伤，特别是在皮肤破损或潮湿环境中。处理电气设备时请谨慎操作以避免受伤。

:::

1. 接线：
    - 按照物理布局和连接部分为继电器模块接线。
    - 确保所有连接牢固，没有裸露的电线。
2. 通电：
    - 通过 USB 为模块供电。
    - 打开直流电源以控制其他电器设备。

## 安全和维护

1. 定期检查接线是否有磨损和撕裂。
2. 使用适当的电路保护设备，如保险丝或断路器。
3. 让设备远离水和过热。

## 常见问题

1. **如果设备与 Wi-Fi 断开连接会发生什么？**
   - 模块将尝试自动重新连接。如果失败，它将启用其备用接入点进行重新配置。
2. **我可以在连接到交流电源时使用 USB 端口吗？**
   - 不可以，在连接到交流电源时使用 USB 可能会损坏设备或造成安全隐患。
3. **此模块可以在没有 Home Assistant 的情况下工作吗？**
   - 可以，该模块可以通过其**本地 IP 地址**进行控制，或与支持 ESPHome 或 MQTT 的其他平台集成。

## 资源

- **GitHub 仓库**：在 [Seeed Studio 6 通道继电器模块 GitHub 页面](https://github.com/Seeed-Projects/6-Channel_Relay_based_on_XIAO_ESP32C6) 访问 ESPHome 固件。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
