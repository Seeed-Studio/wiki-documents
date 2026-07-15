---
title: 在 Home Assistant 中使用 6 路 Wi-Fi 继电器模块
description: |
  一款来自 Seeed Studio 的智能设备，可在安全的直流电压范围内实现对设备的无线控制。
image: https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/7-114993588_6_CH_Relay_Sensor_feature.webp
slug: /6_channel_wifi_relay
sku: 114993588
keywords:
  - XIAO
  - Home Assistant
  - Relay
  - Smart Home
sidebar_position: 2
last_update:
  author: Cody
  date: 07/06/2026
createdAt: '2025-01-04'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/cn/6_channel_wifi_relay/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 在 Home Assistant 中使用 6 路 Wi-Fi 继电器模块入门

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/7-114993588_6_CH_Relay_Sensor_feature.webp" style={{width:640, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/6-Channel-Wi-Fi-5V-DC-Relay-p-6373.html?utm_source=wiki" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div><br />

## 概述

**[6-Channel Wi-Fi Relay Module](https://www.seeedstudio.com/)** 是一款来自 Seeed Studio 的智能设备，专为在安全的直流电压范围内进行控制而设计，不适用于交流供电设备。其六通道配置支持最多六路负载的独立控制，是在智能家居环境中实现多种设备自动化的理想选择。

除了六路继电器通道外，该模块还配备了两个额外的 Grove 扩展接口，允许用户集成更多传感器或执行器，以实现更高级的自动化场景。

本指南将为从初学者到智能家居爱好者的用户提供详细的操作步骤，包括安装、集成以及高级配置。

### 主要特性与规格

<div class="table-center">
<table align="center">
    <thead>
        <tr>
            <th>特性</th>
            <th>详细参数</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>输入电压</th>
            <td>DC 5V（用于 XIAO）</td>
        </tr>
        <tr>
            <th>直流耐压</th>
            <td>DC 0~30V</td>
        </tr>
        <tr>
            <th>最大负载</th>
            <td>每通道 10A</td>
        </tr>
        <tr>
            <th>通道数</th>
            <td>6（每个通道独立控制）</td>
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
            <th>Grove 扩展</th>
            <td>IIC×1，UART×1</td>
        </tr>
    </tbody>
</table>
</div>

:::warning 安全警告

本继电器模块专为低压直流工作而设计。请勿将其连接到交流电源，以避免电气危险。接线前务必先断开电源，以防止短路和触电。

超过 24V 的电压可能会导致电击或灼伤，尤其是在皮肤破损或潮湿环境下。操作电气设备时请务必小心，避免造成人身伤害。

:::

### 物理布局与连接

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/simplified_diagram_with_con.png" style={{width: 600, height: 'auto'}}/></div>

- **NO（常开）**：常开端子。默认情况下，该端子与公共端（COM）不连接。当继电器吸合时，NO 端子与 COM 端子连接。通常用于控制负载的开关。
- **COM（公共端）**：继电器的公共端子，作为电路一侧的公共连接点。
- **NC（常闭）**：常闭端子。默认情况下，该端子与公共端（COM）连接。当继电器吸合时，NC 端子与 COM 端子之间的连接被断开。通常用于需要断开控制的场景。

   | XIAO GPIO | 继电器通道 |
   | --------- | ---------- |
   | GPIO2     | 继电器 1   |
   | GPIO21    | 继电器 2   |
   | GPIO1     | 继电器 3   |
   | GPIO0     | 继电器 4   |
   | GPIO19    | 继电器 5   |
   | GPIO18    | 继电器 6   |

## 入门指南

### 前置条件

1. **核心组件**：
   - [6-Channel Wi-Fi Relay Module](https://www.seeedstudio.com/)
   - [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html)
2. **网络**：
   - 稳定的 Wi-Fi，用于硬件与 Home Assistant 之间的顺畅交互。

### 步骤 1：设置 Home Assistant {#setting-up-home-assistant}

1. **安装**：homeassistant 已预装在 [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html) 中。
2. **启用 ESPHome 插件**：
   - 进入 Home Assistant 仪表盘。
   - 导航到 "Add-ons" 部分并搜索 ESPHome 插件。
   - 点击 "Install"，然后点击 "Start" 以启用它。
   - 安装完成后，配置该插件以确保其能与 XIAO ESP32C6 正常通信。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enabling_ESPHome_Add-on.png" style={{width:1000, height:'auto'}}/></div>

在准备好所需组件并通过 ESPHome 插件完成 Home Assistant 的设置后，你就可以继续进行 6 路继电器模块的集成了。

### 步骤 2：准备继电器模块

默认情况下，你的设备（XIAO ESP32C6）已经预烧录了用于 6 路继电器的固件。但在以下两种情况下，你可能需要更新固件：

1. **重新烧录固件**：如果现有固件损坏，或你需要从头开始。
2. **升级固件**：如果有功能更完善的新版本固件发布。

有两种简单的方法可以烧录固件：

:::caution
Firefox 不支持在 ESP 设备上烧录固件。请改用 Google Chrome 或 Microsoft Edge。
:::

<Tabs>
<TabItem value='Web Tool'>

你可以使用这个 [Web Tool](https://seeed-projects.github.io/6-Channel_Relay_based_on_XIAO_ESP32C6/) 以简单直接的方式烧录固件，只需按照页面上的指引操作即可。

- 点击 `CONNECT` 按钮开始连接。该工具会自动更新固件。

如果过程中出现问题，请按照页面上的故障排除步骤操作，或切换到 `ESPHome Web` 方法完成烧录。

</TabItem>
<TabItem value='ESPHome Web'>

使用此方法时，你需要先从[这里](https://github.com/Seeed-Projects/6-Channel_Relay_based_on_XIAO_ESP32C6/releases)下载 `bin` 固件文件（需要先解压下载的压缩包）。

1. 将传感器套件连接到电脑。
2. 访问 [ESPHome Web](https://web.esphome.io/) 页面。
3. 选择带有 `*.factory.bin` 后缀的固件文件。

你也可以观看下面的视频，了解通过 ESPHome Web 烧录固件的详细步骤：

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="Install firmware via ESPHome Web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</TabItem>
</Tabs>

无论使用哪种方法，你都可以完成固件更新，并为与 Home Assistant 的集成做好准备。

### 步骤 3：网络配置

1. **启用接入点**：
   - 首次上电时，模块会创建一个 Wi-Fi 网络（SSID：`seeedstudio-6-channel-relay`）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ap-from-xiao-esp32c6-seeedstudio-6-channel-relay.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

2. **访问配置页面**：
   - 使用手机或电脑连接到该网络。
   - 打开浏览器并访问 [http://192.168.4.1](http://192.168.4.1)。
   - 输入你家中 Wi-Fi 网络的 SSID 和密码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ap_wireless_setting_page.png" style={{width:'auto', height:680, "border-radius": '15px'}}/></div>

3. **集成到 Home Assistant**：
   - 连接到家庭网络后，该模块会在 Home Assistant 中被发现，路径为 `Settings -> Devices & Services`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ha_new_device_discovered.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

通过这种方式，你可以将模块连接到 Home Assistant 所在的网络，并让 Home Assistant 自动发现它。

### 步骤 4：添加模块设备

1. **自动发现**：
   - 确保在 Home Assistant 中已安装 **ESPHome**。
   - 导航到 `Settings -> Devices & Services -> Integrations` 并查找该设备。
2. **手动配置**：
   - 如果未被自动发现，可通过指定设备的 IP 地址手动添加。

添加设备后，你可以在 Overview 页面中看到所有六个开关。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/buttons_in_ha_overview.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

你也可以分别为每个开关设置自定义名称。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/buttons_in_ha_overview_with_custom_names.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

### 步骤 5：连接你想控制的电器

:::warning 安全警告

本继电器模块专为低压直流工作而设计。请勿将其连接到交流电源，以避免电气危险。接线前务必先断开电源，以防止短路和触电。

超过 24V 的电压可能会导致电击或灼伤，尤其是在皮肤破损或潮湿环境下。操作电气设备时请务必小心，避免造成人身伤害。

:::

1. 接线：
    - 按照“物理布局和连接”部分连接继电器模块。
    - 确保所有连接牢固可靠，且没有裸露的电线。
2. 上电：
    - 通过 USB 为模块供电。
    - 打开直流电源以控制其他电器设备。

## 安全与维护

1. 定期检查线路是否有磨损和老化。
2. 使用适当的电路保护装置，例如保险丝或断路器。
3. 使设备远离水源和过高温度。

## 常见问题

1. **如果设备与 Wi-Fi 断开连接会发生什么？**
   - 模块会尝试自动重新连接。如果失败，它会启用备用接入点以进行重新配置。
2. **在连接交流电源时可以使用 USB 接口吗？**
   - 不可以，在连接交流电源时使用 USB 可能会损坏设备或造成安全隐患。
3. **这个模块可以在没有 Home Assistant 的情况下工作吗？**
   - 可以，模块可以通过其**本地 IP 地址**进行控制，或集成到支持 ESPHome 或 MQTT 的其他平台中。

## 资源

- **GitHub 仓库**：在 [Seeed Studio 6 Channel Relay Module GitHub 页面](https://github.com/Seeed-Projects/6-Channel_Relay_based_on_XIAO_ESP32C6)获取 ESPHome 固件。
- **📄[原理图]** [ 6 通道 Wi-Fi 继电器模块原理图](https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/202004205_PCBA;6-Channel-Wi-Fi-5V-DC-Relay_SCH_PDF.pdf)
- **🗃️[PCB 设计文件]** [ 6 通道 Wi-Fi 继电器模块 KiCad 工程](https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/202004205_PCBA;6-Channel-Wi-Fi-5V-DC-Relay-SCH.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
