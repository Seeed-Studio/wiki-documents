---
title: XIAO 2通道Wi-Fi交流电能表在Home Assistant中的应用
description: |
  来自Seeed Studio的智能设备，专为检测交流供电设备的用电量而设计。
image: https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/energy_meter_appearance.webp
slug: /cn/2_channel_wifi_ac_energy_meter
keywords:
  - XIAO
  - Home Assistant
  - Energy Meter
  - Smart Home
sidebar_position: 5
last_update:
  author: Hugo
  date: 04/01/2025
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# XIAO 2通道Wi-Fi交流电能表在Home Assistant中的入门指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/energy_meter_appearance.jpg" style={{width:680, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-2-Channel-Wi-Fi-AC-Energy-Meter-Bundle-Kit.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div><br />

## 概述

**[XIAO 2通道Wi-Fi交流电能表](https://www.seeedstudio.com/XIAO-2-Channel-Wi-Fi-AC-Energy-Meter-Bundle-Kit.html)**是Seeed Studio推出的智能设备，专为检测交流供电设备的用电量而设计。其双通道配置支持最多两个负载的独立检测，使其成为智能家居环境中自动化各种设备的绝佳选择。

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
            <td>AC 100-240V, 50/60Hz</td>
        </tr>
        <tr>
            <th>通道数</th>
            <td>2（每个通道独立检测）</td>
        </tr>
        <tr>
            <th>连接类型</th>
            <td>Wi-Fi</td>
        </tr>
        <tr>
            <th>输入端子</th>
            <td>L（火线）、N（零线）、PE（保护接地）</td>
        </tr>
        <tr>
            <th>电流检测有效范围</th>
            <td>10mA-100A @ 1mΩ（CT模式）</td>
        </tr>
        <tr>
            <th>有功电能</th>
            <td>1w-7700w @ 1mΩ</td>
        </tr>
    </tbody>
</table>
</div>

:::warning 安全警告

接线前请务必断开交流电源。

:::

### 物理布局和连接

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/energy_meter_wiring.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

- **L (火线)**: 连接交流电源的火线。
- **N (零线)**: 连接交流电源的零线。
- **PE (保护接地)**: 连接交流电源的保护接地线。
- **CT1, CT2 (电流互感器)**: 将电流互感器的夹具夹在火线上，箭头指向从电源端到负载端。

#### 电流互感器的安装

1. 首先，打开夹具并将导线放入其圆形区域内。

<br />
<div style={{ textAlign: 'center' }}>  
    <img
        src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/CT_install_step1.jpg"
        style={{
            width: '300px',
            height: '300px',
            borderRadius: '15px',
            filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))'
        }}
    />  
</div>  
<br />

2. 然后扣紧扣环，用力按压并听到"咔嗒"声，安装完成。

<br />
<div style={{ textAlign: 'center' }}>  
    <img
        src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/CT_install_step2.gif"
        style={{
            width: '300px',
            height: '300px',
            borderRadius: '15px',
            filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))'
        }}
    />  
</div>  
<br />

:::warning 电流互感器夹具的安装

安装夹具时，请确保电流方向与夹具上箭头指示的方向一致。

<div style={{ textAlign: 'center' }}>  
    <img
        src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/current_flow_direction.jpg"
        style={{
            width: '300px',
            height: '300px',
            borderRadius: '15px',
            filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))'
        }}
    />  
</div>  
<br />

:::

## 入门指南

### 要求

1. **核心组件**:
   - [XIAO 2通道Wi-Fi交流电能表](https://www.seeedstudio.com/XIAO-2-Channel-Wi-Fi-AC-Energy-Meter-Bundle-Kit.html)
   - [非侵入式交流电流互感器](https://www.seeedstudio.com/Non-invasive-AC-Current-Sensor-100A-ma-p-547.html)
   - [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html)
2. **网络**:
   - 稳定的Wi-Fi，确保硬件与Home Assistant之间的无缝交互。

### 步骤1：设置Home Assistant {#setting-up-home-assistant}

1. **安装**: homeassistant已预装在[Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html)中。
2. **启用ESPHome插件**:
   - 访问Home Assistant仪表板。
   - 导航到"插件"部分并搜索ESPHome插件。
   - 点击"安装"然后"启动"以启用它。
   - 安装完成后，配置插件以确保与XIAO ESP32C6的正常通信。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enabling_ESPHome_Add-on.png" style={{width:1000, height:'auto'}}/></div>

通过收集必要的组件并使用ESPHome插件设置Home Assistant，您将准备好继续集成XIAO 2通道Wi-Fi交流电能表。

### 步骤2：准备电能表

默认情况下，您的设备（XIAO ESP32C6）预装了XIAO 2通道Wi-Fi交流电能表的固件。但是，在两种情况下您可能需要更新固件：

1. **重新刷写固件**: 如果现有固件损坏或您需要重新开始。
2. **升级固件**: 如果有具有改进功能的新版本固件。

有两种简单的刷写固件方法：

:::caution
Firefox不支持在ESP设备上刷写固件。请使用Google Chrome或Microsoft Edge。
:::

<Tabs>
<TabItem value='Web Tool'>

您可以使用这个[Web工具](https://gadgets.seeed.cc/)进行简单直接的固件刷写方法。只需按照屏幕上的说明操作。（请选择**SeeedStuido-2CH-EM**）

- 点击`CONNECT`按钮开始连接。工具将自动更新固件。

如果出现问题，请按照屏幕上的故障排除步骤操作，或切换到`ESPHome Web`方法完成过程。

</TabItem>
<TabItem value='ESPHome Web'>

对于此方法，您需要从[这里](https://github.com/Seeed-Studio/xiao-esphome-projects/releases)下载`bin`固件文件（您需要解压下载的文件）。

1. 将传感器套件连接到您的PC。
2. 访问[ESPHome Web](https://web.esphome.io/)页面。
3. 选择带有`*.factory.bin`后缀的固件文件。

观看以下视频，了解通过ESPHome Web刷写固件的详细步骤：

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="通过ESPHome Web安装固件" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</TabItem>
</Tabs>

使用任一方法，您都将更新固件并准备好与Home Assistant集成。

### 步骤3：网络配置

1. **启用接入点**:
   - 首次上电时，模块将创建一个Wi-Fi网络（SSID：`SeeedStudio-2CH-EM`）。

2. **访问配置**:
   - 使用手机或PC连接到该网络。
   - 打开浏览器并导航到`http://192.168.4.1`。
   - 输入您家庭Wi-Fi网络的SSID和密码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ap_wireless_setting_page.png" style={{width:'auto', height:680, "border-radius": '15px'}}/></div>

3. **Home Assistant 集成**：
   - 连接到家庭网络后，该模块将在 Home Assistant 的 `设置 -> 设备和服务` 下被发现。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ha_new_device_discovered.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

这样，您就可以将模块连接到您的 Home Assistant 网络并让 Home Assistant 发现它。

### 步骤 4：添加模块设备

1. **自动发现**：
   - 确保 **ESPHome** 已安装在 Home Assistant 中。
   - 导航到 `设置 -> 设备和服务 -> 集成` 并查找设备。

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/ha_add_new_device.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div> -->

<div style={{ textAlign: 'center' }}>  
    <img
        src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/ha_add_new_device.png"
        style={{
            width: '680px',
            height: 'auto',
            borderRadius: '15px',
            filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))'
        }}
    />  
</div>  
<br />

1. **手动配置**：
   - 如果未自动发现，请通过指定其 IP 地址手动添加设备。

添加设备后，您可以在概览页面上看到一个照明控制开关、两个通道的电流使用情况、两个通道的功耗以及总电压值。

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/ha_overview.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div> -->
<br />
<div style={{ textAlign: 'center' }}>  
    <img
        src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/ha_overview.png"
        style={{
            width: 'auto',
            height: '680px',
            borderRadius: '15px',
            filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))'
        }}
    />  
</div>  

<br />
通过点击任何行图标，您可以更详细地查看相应的值及其最近的变化，这些变化用折线图表示。
<br /><br />

<div style={{ textAlign: 'center' }}>  
    <img
        src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/ha_dashboard_detail.png"
        style={{
            width: '680px',
            height: 'auto',
            borderRadius: '15px',
            filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))'
        }}
    />  
</div>  

## 安全和维护

1. 定期检查接线是否有磨损和撕裂。
2. 使用适当的电路保护设备，如保险丝或断路器。
3. 保持设备远离水和过热。

## 常见问题

1. **如果设备与 Wi-Fi 断开连接会发生什么？**
   - 模块将尝试自动重新连接。如果失败，它将启用其备用接入点进行重新配置。

2. **如果设备意外突然断电，我应该怎么办？**
   - 当设备突然断电时，如果您想要移除电流互感器的固定装置，请等到设备重启并正常运行后再移除，否则可能会损坏设备。

## 资源

- **GitHub 仓库**：在 [Seeed Studio 双通道能耗计 GitHub 页面](https://github.com/ZhangKeLiang0627/2-Channel_Energy_Meter_based_on_XIAO_ESP32C6) 访问 ESPHome 固件

- **双通道能耗计原理图**：[Seeed_Studio_XIAO_2-Channel_Wi-Fi_AC_Energy_Meter_V1.0.pdf](https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/resource/Seeed_Studio_XIAO_2-Channel_Wi-Fi_AC_Energy_Meter_V1.0.pdf)

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
