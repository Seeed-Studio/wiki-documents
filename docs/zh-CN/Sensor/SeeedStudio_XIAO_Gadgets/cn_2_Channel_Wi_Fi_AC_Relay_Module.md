---
title: 2-Channel Wi-Fi AC Relay Module In Home Assistant
description: |
  A smart device from Seeed Studio designed to control AC-powered appliances wirelessly
image: https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/dual_smart_relay_module_for_xiao_45font.webp
slug: /cn/2_channel_wifi_ac_relay
keywords:
  - XIAO
  - Home Assistant
  - AC Relay
  - Smart Home
sidebar_position: 2
last_update:
  author: Spencer
  date: 2024-11-27T03:21:36.491Z
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 在 Home Assistant 中开始使用 2-Channel Wi-Fi AC Relay Module

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/2-114993526-dual-smart-relay-module-for-xiao-45font.jpg" style={{width:420, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Dual-Smart-Relay-Module-for-XIAO-p-6309.html?utm_source=wiki" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div><br />

## 概述

**[2-Channel Wi-Fi AC Relay Module](https://www.seeedstudio.com/Dual-Smart-Relay-Module-for-XIAO-p-6309.html)** 是 Seeed Studio 设计的智能设备，用于无线控制交流电供电的电器。其双通道配置支持两个负载的独立控制，使其成为在 Home Assistant 环境中自动化家用电器（如灯具、风扇和其他设备）的绝佳选择。

本指南提供了详细的演练，包括设置、集成和高级配置，适用于从初学者到智能家居爱好者的各类用户。

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
            <td>AC 100-240V, 50/60Hz</td>
        </tr>
        <tr>
            <th>输出电压</th>
            <td>AC 100-240V, 50/60Hz</td>
        </tr>
        <tr>
            <th>最大负载</th>
            <td>每通道 10A</td>
        </tr>
        <tr>
            <th>通道数</th>
            <td>2（每个通道独立控制）</td>
        </tr>
        <tr>
            <th>连接类型</th>
            <td>Wi-Fi</td>
        </tr>
        <tr>
            <th>输入端子</th>
            <td>N（零线）、L（火线）</td>
        </tr>
        <tr>
            <th rolspan="2">输出端子</th>
            <td><b>通道 1：</b> N1（零线）、L1（火线） <br></br> <b>通道 2：</b> N2（零线）、L2（火线）</td>
        </tr>
    </tbody>
</table>
</div>

:::warning 安全警告

在接线继电器之前，请务必断开交流电源。避免在设备连接到交流电源时使用USB端口，以防止电气危险。

:::

### 物理布局和连接

#### 输入和输出端子

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/relay_connections.png" style={{width: 600, height: 'auto'}}/></div>

- 输入
  - **N (零线)**: 连接交流电源的零线。
  - **L (火线)**: 连接交流电源的火线。
- 输出
  - 通道 1
    - **N1 (零线)**: 连接到继电器1的负载零线。
    - **L1 (火线)**: 连接到继电器1的负载火线。
  - 通道 2
    - **N2 (零线)**: 连接到继电器2的负载零线。
    - **L2 (火线)**: 连接到继电器2的负载火线。

## 入门指南

### 要求

1. **核心组件**:
   - [2通道Wi-Fi交流继电器模块](https://www.seeedstudio.com/Dual-Smart-Relay-Module-for-XIAO-p-6309.html)
   - [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html)
2. **网络**:
   - 稳定的Wi-Fi，确保硬件与Home Assistant之间的无缝交互。

### 步骤1：设置继电器模块（物理设置）

1. **安装**: homeassistant已预装在[Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html)中。
2. **启用ESPHome插件**:
   - 访问Home Assistant仪表板。
   - 导航到"插件"部分并搜索ESPHome插件。
   - 点击"安装"然后"启动"以启用它。
   - 安装完成后，配置插件以确保与XIAO ESP32C3的正确通信。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enabling_ESPHome_Add-on.png" style={{width:1000, height:'auto'}}/></div>

通过收集必要的组件并设置带有ESPHome插件的Home Assistant，您将准备好继续集成2通道Wi-Fi交流继电器模块。

### 步骤2：准备继电器模块

默认情况下，您的设备（XIAO ESP32C3）预装了2通道Wi-Fi交流继电器模块的固件。但是，在两种情况下您可能需要更新固件：

1. **重新刷写固件**: 如果现有固件损坏或您需要重新开始。
2. **升级固件**: 如果有具有改进功能的新版本固件。

有两种简单的刷写固件方法：

:::caution
Firefox不支持在ESP设备上刷写固件。请使用Google Chrome或Microsoft Edge。
:::

<Tabs>
<TabItem value='Web Tool'>

您可以使用这个[Web工具](https://limengdu.github.io/2-Channel_Relay_based_on_XIAO_ESP32C3/)来简单直接地刷写固件。只需按照屏幕上的说明操作。

- 点击`CONNECT`按钮启动连接。工具将自动更新固件。

如果出现问题，请按照屏幕上的故障排除步骤操作，或切换到`ESPHome Web`方法完成过程。

</TabItem>
<TabItem value='ESPHome Web'>

对于此方法，您需要从[这里](https://github.com/limengdu/2-Channel_Relay_based_on_XIAO_ESP32C3/releases)下载`bin`固件文件（您需要解压下载的文件）。

1. 将传感器套件连接到您的PC。
2. 访问[ESPHome Web](https://web.esphome.io/)页面。
3. 选择带有`*.factory.bin`后缀的固件文件。

观看以下视频，了解通过ESPHome Web刷写固件的详细步骤：

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="Install firmware via ESPHome Web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

</TabItem>
</Tabs>

使用任一方法，您都将更新固件并准备好与Home Assistant集成。

### 步骤3：网络配置

1. **启用接入点**:
   - 首次上电时，模块将创建一个Wi-Fi网络（SSID：`seeedstudio-relay`）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/2ch_relay_wifi_list.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

2. **访问配置**:
   - 使用手机或PC连接到该网络。
   - 打开浏览器并导航到`http://192.168.4.1`。
   - 输入您家庭Wi-Fi网络的SSID和密码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ap_wireless_setting_page.png" style={{width:'auto', height:680, "border-radius": '15px'}}/></div>

3. **Home Assistant集成**:
   - 连接到家庭网络后，模块将在Home Assistant的`设置 -> 设备和服务`下可被发现。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ha_new_device_discovered.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

这样，您可以将模块连接到您的Home Assistant网络并让Home Assistant发现它。

### 步骤4：添加模块设备

1. **自动发现**:
   - 确保**ESPHome**已安装在Home Assistant中。
   - 导航到`设置 -> 设备和服务 -> 集成`并查找设备。
2. **手动配置**:
   - 如果未自动发现，请通过指定其IP地址手动添加设备。

添加设备后，您可以在概览页面中看到两个开关。您还可以单独设置每个开关的名称。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/ha_switch_overview.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

## 安全和维护

1. 定期检查接线是否有磨损和撕裂。
2. 使用适当的电路保护设备，如保险丝或断路器。
3. 保持设备远离水和过热。

## 常见问题

1. **如果设备与 Wi-Fi 断开连接会发生什么？**
   - 模块将尝试自动重新连接。如果失败，它将启用其备用接入点进行重新配置。
2. **在连接到交流电源时可以使用 USB 端口吗？**
   - 不可以，在连接到交流电源时使用 USB 可能会损坏设备或造成安全隐患。
3. **这个模块可以在没有 Home Assistant 的情况下工作吗？**
   - 可以，该模块可以通过其**本地 IP 地址**进行控制，或与其他支持 ESPHome 或 MQTT 的平台集成。

## 资源

- **GitHub 仓库**：在 [Seeed Studio 双通道继电器模块 GitHub 页面](https://github.com/limengdu/2-Channel_Relay_based_on_XIAO_ESP32C3) 访问 ESPHome 固件。
- **双通道继电器模块原理图**：[Seeed_Studio_2-Channel_AC_Wi-Fi_Relay_SCH.pdf](https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/resource/Seeed_Studio_2-Channel_AC_Wi-Fi_Relay_SCH.pdf)。

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
