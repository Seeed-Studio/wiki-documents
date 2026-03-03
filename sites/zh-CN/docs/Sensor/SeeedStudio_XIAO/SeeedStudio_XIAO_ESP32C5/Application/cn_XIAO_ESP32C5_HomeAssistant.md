---
title: Seeed Studio XIAO ESP32-C5 连接到 HomeAssitant
description: |
keywords:
  - xiao
  - esp32c5
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /cn/xiao_esp32c5_homeassistant
last_update:
  date: 12/17/2025
  author: Zeller
  sidebar_position: 0
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 将 XIAO ESP32-C5 连接到 Home Assistant

本 wiki 教程将演示如何将 Seeed Studio XIAO ESP32-C5 连接到 Home Assistant，以及在将 Grove 模块连接到 XIAO ESP32-C5 后如何控制设备或传输数据。那么，让我们开始吧！

## [Home Assistant](https://www.home-assistant.io/) 简介

Home Assistant 是一个强大的开源家庭自动化平台，允许您从一个统一的界面控制和监控智能家居设备。它充当智能家居的中央枢纽，使您能够自动化例程、监控传感器并创建更智能的生活空间。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/204.png" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 了解更多 🖱️</font></span></strong></a>
</div>

## [ESPHome](https://esphome.io/) 集成

ESPHome 是一个专为 ESP8266 / ESP32 设备设计的开源固件创建工具。它允许您使用简单的 YAML 配置文件创建自定义固件，然后可以将其刷写到您的设备上。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/2.png" style={{width:600, height:'auto'}}/></div>
<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://esphome.io/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 了解更多 🖱️</font></span></strong></a>
</div>

## 方法 1：使用 ESPHome

此示例将通过 ESPHome 连接到 Home Assistant。

### 硬件准备

您需要准备表格中列出的物品。

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32-C5</th>
      <th>Seeed Studio Grove Base for XIAO</th>
      <th>Grove - Red LED</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:400, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-09bazaar939479_1040300054.jpg" style={{width:400, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 查看更多 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

### 安装固件

如果您尚未设置 Home Assistant，可以点击此链接并按照官方 Home Assistant 教程完成设置。[Home Assistant Installation](https://www.home-assistant.io/installation/)

**步骤 1.** 安装 ESPhome<br/>

如果您已经安装了 ESPHome，可以跳过此步骤。

- 转到 **Settings** -> **Add-ons**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/01.png" style={{width:800, height:'auto'}}/></div>

- **ADD-ON STORE** -> **Search ESPHome**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/02.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/03.png" style={{width:800, height:'auto'}}/></div>

- 启动 ESPhome

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_1.png" style={{width:800, height:'auto'}}/></div>

:::tip
确保您安装的 ESPHome 版本**大于或等于 25.11.5**；否则，它可能不支持 XIAO ESP32-C5。
:::

**步骤 2.** 添加新设备

转到 ESPHome，并点击右下角的 **Add New Device** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device1.png" style={{width:800, height:'auto'}}/></div>
<br/>
添加新设备并将其命名为 **XIAO ESP32-C5**。
<br/>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_2.png" style={{width:800, height:'auto'}}/></div><br/>

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', marginLeft:'10%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_3.png" style={{width:'90%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3.png" style={{width:'100%', height:'auto'}}/></div>
</div>

**步骤 3.** 安装固件

<details>
<summary>参考 YAML 文件配置</summary>

:::tip
您需要修改参数以匹配您设备的参数，例如 API 密钥、SSID、密码等。此外，XIAO ESP32-C5 支持双频 WiFi（2.4 GHz 和 5 GHz），这意味着您可以将其连接到家中的 5 GHz 路由器。
:::

```yaml
esphome:
  name: xiao-esp32-c5
  friendly_name: XIAO ESP32-C5

esp32:
  board: esp32-c5-devkitc-1
  variant: esp32c5
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: 

ota:
  - platform: esphome
    password: 

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32-C5 Fallback Hotspot"
    password: 

captive_portal:
  # Example configuration entry
output:
  - platform: gpio
    pin: GPIO1
    id: led_gpio_output
    inverted: false

switch:
  - platform: output
    name: "LED Switch"
    output: led_gpio_output
    id: dev_board_led
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_4.png" style={{width:800, height:'auto'}}/></div>

点击 **INSTALL** 将代码安装到设备上，您将看到以下图像。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_5.png" style={{width:800, height:'auto'}}/></div>

<Tabs>
<TabItem value='通过浏览器安装'>

:::tip
如果您的 Home Assistant 主机（Raspberry PI/Green/Yellow 等）距离您较远，我们建议使用此方法。您可以使用手边的计算机进行安装。
:::

首先，您需要点击 **Manual download** 下载编译好的固件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/62.png" style={{width:500, height:'auto'}}/></div>

打开此网站，我们将在此处将固件上传到 XIAO ESP32-C5。<br/>
[ESPHome dashboard_install](https://web.esphome.io/?dashboard_install)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_4.png" style={{width:800, height:'auto'}}/></div>
<br/>
返回 ESPHome 下载固件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/64.png" style={{width:800, height:'auto'}}/></div>
<br/>
选择 Factory format。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/65.png" style={{width:500, height:'auto'}}/></div>

使用 USB 线缆**将设备连接到您的计算机**并点击 **CONNECT**。<br/>
[ESPHome dashboard_install](https://web.esphome.io/?dashboard_install)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/66.png" style={{width:800, height:'auto'}}/></div>
<br/>
选择 usbmodemxxx（Windows 是 COMxxx）并点击连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/67.png" style={{width:800, height:'auto'}}/></div>

点击 **INSTALL** 并选择您刚刚下载的固件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/69.png" style={{width:500, height:'auto'}}/></div>

</TabItem>

<TabItem value='通过主机安装'>

:::tip
如果您的 Home Assistant 主机（Raspberry PI/Green/Yellow 等）就在附近，我们建议使用此方法，因为它更简单。
:::

在将代码安装到设备之前，您需要使用 USB 线缆**将此设备连接到运行 Home Assistant 的 Raspberry Pi 或 HA Green(Yellow) 等设备**。

按照图像中的选项点击以将代码安装到设备。

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/6.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/7.png" style={{width:'120%', height:'auto'}}/></div>
</div>

稍等片刻，您将看到如下图所示的反馈。这意味着代码正在成功运行。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device6.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>

<TabItem value='通过 Wi-Fi 安装'>

:::tip
这是最简单的方法，但前提是在第一次安装程序时，您应该首先使用左侧的方法将程序上传到 ePaper Panel。之后，您可以通过 wifi 上传。另外，请确保您的 YAML 配置包含正确配置的 `ota` 和 `api` 部分以及有效的加密密钥，以便此方法正常工作。
:::

通过这种方式，您无需将 XIAO ESP32-C5 连接到任何设备，只需确保它在线即可。

点击选项，然后固件将自动安装到 ePaper 面板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/72.png" style={{width:500, height:'auto'}}/></div>

稍等片刻，您将看到如下图所示的反馈。如果失败，可能是由于信号较弱。请将设备移近您的路由器。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device7.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
</Tabs>

**步骤 4.** 添加设备

- 导航到 **Settings** → **Devices & services**

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/buletooth_1.png" style={{width:800, height:'auto'}}/></div>

- ESPHome Device -> Add。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_6.png" style={{width:800, height:'auto'}}/></div>

- 如果您选择添加密钥，您需要输入它，可以在您创建的 YAML 文件中找到。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_7.png" style={{width:800, height:'auto'}}/></div>

- 成功添加后将显示以下屏幕。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_8.png" style={{width:800, height:'auto'}}/></div>

### 在仪表板上显示

**步骤 1.**  打开 Overview -> 点击右上角的 Edit

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_9.png" style={{width:800, height:'auto'}}/></div>

**步骤 2.** 创建一个部分并命名为 **LED Control** -> 添加卡片

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_10.png" style={{width:800, height:'auto'}}/></div>

**步骤 3.** Add by entity -> 搜索 **XIAO ESP32-C5** -> Continue

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_11.png" style={{width:800, height:'auto'}}/></div>

**步骤 4.** 在弹出窗口中选择 **Add to dashboard** -> 点击右上角的 **Done** 完成添加。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_12.png" style={{width:800, height:'auto'}}/></div>

- 效果如下：

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_13.png" style={{width:800, height:'auto'}}/></div>

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/esphome_effect_1.gif" style={{width:800, height:'auto'}}/></div>

## 方法 2：[Seeed Home Assistant Discovery](https://github.com/limengdu/Seeed-Homeassistant-Discovery)

- **Seeed HA Discovery** 是由 [Seeed Studio](https://www.seeedstudio.com/) 提供的完整解决方案，用于轻松将 ESP32/nRF52840 设备连接到 Home Assistant。<br/>
- 只需在 Arduino IDE 或 PlatformIO 中为您的 XIAO 系列开发板编写几行代码，您就可以通过 WiFi 或 BLE 连接到 Home Assistant。<br/>
- 在这里，我们将使用读取温室温湿度传感器的示例来向您展示如何使用 Seeed Home Assistant Discovery 将 XIAO ESP32-C5 连接到 Home Assistant。

### 硬件准备

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32-C5</th>
      <th>Seeed Studio Grove Base for XIAO</th>
      <th>Grove - Temperature & Humidity Sensor (DHT11)</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:400, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove-temperature-humidity-sensor-dht11-preview.png" style={{width:400, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 查看更多 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

### 安装 HACS 集成

在添加 **Seeed Home Assistant Discovery** 集成之前，您需要先安装 **HACS**。

安装步骤：

1. Settings -> Devices & services -> Add integration -> 搜索 **HACS**

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/hacs_1.png" style={{width:800, height:'auto'}}/></div>

2. 选择所有选项 -> Submit

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/hacs_2.png" style={{width:800, height:'auto'}}/></div>

3. 点击超链接并复制其中的激活码。

4. 输入前面提到的激活码

5. 返回 HomeAssistant -> Developer tools -> Reboot system

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/hacs_3.png" style={{width:800, height:'auto'}}/></div>

6. 左侧导航栏显示 HACS

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/hacs_4.png" style={{width:800, height:'auto'}}/></div>

### 安装集成

- 通过 HACS 一键安装（推荐）

1. 打开 HACS -> Integrations：

    <!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_1.png" style={{width:800, height:'auto'}}/></div> -->

2. 点击右上角的 **⋮** 图标 -> **Custom repositories**

      <!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_2.png" style={{width:800, height:'auto'}}/></div> -->

3. 输入 `https://github.com/limengdu/Seeed-Homeassistant-Discovery`，选择类别 **Integration**

    <!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_3.png" style={{width:800, height:'auto'}}/></div> -->

4. 点击 Add，然后搜索 **Seeed HA Discovery** 并安装

      <!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_4.png" style={{width:800, height:'auto'}}/></div> -->

5. 重启 Home Assistant

### 安装 Arduino 库

#### 安装 WiFi 依赖库

- 对于 Arduino IDE

1. 下载 `arduino/SeeedHADiscovery` 文件夹

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Homeassistant-Discovery" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

2. 复制到 `C:\Users\yourname\Documents\Arduino\libraries\`

3. ArduinoJson (by Benoit Blanchon)

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_5.png" style={{width:800, height:'auto'}}/></div>

4. WebSockets (by Markus Sattler)

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_6.png" style={{width:800, height:'auto'}}/></div>

- 对于 PlatformIO

```ini
lib_deps =
    bblanchon/ArduinoJson@^7.0.0
    links2004/WebSockets@^2.4.0
```

#### 安装 BLE 依赖库

- 对于 Arduino IDE

1. 下载 `arduino/SeeedHADiscoveryBLE` 文件夹

2. 复制到 `C:\Users\yourname\Documents\Arduino\libraries\`

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Homeassistant-Discovery" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

3. NimBLE-Arduino

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_7.png" style={{width:800, height:'auto'}}/></div>

- 对于 PlatformIO

```ini
lib_deps =
    h2zero/NimBLE-Arduino@^1.4.0
```

### 编写 Arduino 程序

根据您的实际需求选择相应的版本。

<Tabs>
<TabItem value='WiFi 版本代码'>

```cpp
#include <SeeedHADiscovery.h>

const char* WIFI_SSID = "Your WiFi Name";
const char* WIFI_PASSWORD = "Your WiFi Password";

SeeedHADiscovery ha;
SeeedHASensor* tempSensor;
SeeedHASensor* humiditySensor;

void setup() {
    Serial.begin(115200);
    ha.setDeviceInfo("Living Room Sensor", "ESP32-C5", "1.0.0");
    ha.enableDebug(true);

    if (!ha.begin(WIFI_SSID, WIFI_PASSWORD)) {
        Serial.println("WiFi connection failed!");
        while (1) delay(1000);
    }

    tempSensor = ha.addSensor("temperature", "Temperature", "temperature", "°C");
    tempSensor->setPrecision(1);

    humiditySensor = ha.addSensor("humidity", "Humidity", "humidity", "%");
    humiditySensor->setPrecision(0);
}

void loop() {
    ha.handle();

    static unsigned long lastUpdate = 0;
    if (millis() - lastUpdate > 5000) {
        lastUpdate = millis();
        tempSensor->setValue(25.5);
        humiditySensor->setValue(55);
    }
}
```

上传代码后，打开串口监视器。WiFi 连接成功后，将打印相应的 IP 地址。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_8.png" style={{width:800, height:'auto'}}/></div>

:::tip
XIAO ESP-C5 支持双频 WiFi（2.4 GHz 和 5 GHz）。<br/>
如果您觉得手动网络配置太麻烦，您也可以使用我们推出的固件刷写网页：[Web Firmware Flasher](https://limengdu.github.io/Seeed-Homeassistant-Discovery/flasher/)
:::

</TabItem>

<TabItem value='BLE 版本代码'>

```cpp
#include <SeeedHADiscoveryBLE.h>

SeeedHADiscoveryBLE ble;
SeeedBLESensor* tempSensor;
SeeedBLESensor* humiditySensor;
SeeedBLESensor* batterySensor;

void setup() {
    Serial.begin(115200);
    ble.enableDebug(true);

    if (!ble.begin("XIAO Temperature Sensor")) {
        Serial.println("BLE initialization failed!");
        while (1) delay(1000);
    }

    // Use BTHome standard sensor types
    tempSensor = ble.addTemperature();
    humiditySensor = ble.addHumidity();
    batterySensor = ble.addBattery();
}

void loop() {
    // Set sensor values
    tempSensor->setValue(25.5f);      // Temperature 25.5°C
    humiditySensor->setValue(55.0f);  // Humidity 55%
    batterySensor->setValue(100.0f);    // Battery 100%

    // Send BLE broadcast
    ble.advertise();

    // Wait 10 seconds (BLE is suitable for low frequency updates)
    delay(10000);
}
```

上传代码后，打开串口监视器，将输出 XIAO ESP32-C5 的蓝牙信息。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_9.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
</Tabs>

### 在 Home Assistant 中添加设备

<Tabs>
<TabItem value='WiFi 设备'>

它将被自动发现！或手动添加：

1. 转到 **Settings** -> **Devices & Services**

2. 点击 **Add Integration**

3. 搜索 **Seeed HA Discovery**

4. 输入 ESP32 的 IP 地址

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_10.png" style={{width:800, height:'auto'}}/></div>

</TabItem>

<TabItem value='BLE 设备'>

它使用 BTHome 协议，将被 Home Assistant 自动发现！

1. 确保 HA 有蓝牙适配器或 ESP32 蓝牙代理

2. 设备将自动出现在 Settings -> Devices & Services -> BTHome 中

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_11.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
</Tabs>

## 效果演示

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/S_HA_12.png" style={{width:800, height:'auto'}}/></div>
<br/>
恭喜！到目前为止，您应该已经掌握了将 **XIAO ESP32-C5** 连接到 **Home Assistant** 的两种方法。我们期待看到您的精彩项目，欢迎与我们分享！

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
