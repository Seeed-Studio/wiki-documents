---
description: 在 XIAO W5500 上使用 ESPHome 连接 Home Assistant
title: 在 XIAO(ESP32-S3) W5500 以太网适配器上使用 ESPHome 连接 Home Assistant
keywords:
  - esphome
  - ethernet
  - w5500
image: https://files.seeedstudio.com/wiki/xiao_w5500_poe/0.webp
sidebar_position: 2
slug: /cn/esphome_xiao_w5500_ethernet_adapter
last_update:
  date: 12/08/2025
  author: Zeller
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113100042-xiao-w5500-ethernet-adapter.jpg" style={{width:800, height:'auto'}}/></div>

本教程演示如何使用 **XIAO W5500 以太网适配器** 实现 **蓝牙代理**，并在 **Home Assistant** 上进行集成和验证。

在开始本教程之前，请确保满足以下先决条件：

1. 一台能够运行 [Home Assistant](https://www.home-assistant.io/) 的主机设备。
2. 稳定的以太网或 Wi-Fi 连接。
3. （推荐）PoE（以太网供电）功能或外部 5V 电源。
4. [XIAO(ESP32-S3) W5500 以太网适配器](https://www.seeedstudio.com/XIAO-W5500-Ethernet-Adapter-p-6472.html)

<div class="table-center">
 <table>
  <tr>
   <th>XIAO(ESP32-S3) W5500 以太网适配器</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113100042-xiao-w5500-ethernet-adapter.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-W5500-Ethernet-Adapter-p-6472.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## [Home Assistant](https://www.home-assistant.io/) 简介

Home Assistant 是一个功能强大的开源家庭自动化平台，允许您从单一统一界面控制和监控智能家居设备。它充当智能家居的中央枢纽，使您能够自动化例程、监控传感器并创建更智能的生活空间。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/204.png" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 了解更多 🖱️</font></span></strong></a>
</div>

### [ESPHome](https://esphome.io/) 集成

ESPHome 是一个专为 ESP8266 / ESP32 设备设计的开源固件创建工具。它允许您使用简单的 YAML 配置文件创建自定义固件，然后可以将其刷写到您的设备上。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://esphome.io/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 了解更多 🖱️</font></span></strong></a>
</div>

## ESPHome 入门

### 蓝牙代理概述

蓝牙代理充当轻量级分布式感知桥梁，将 Home Assistant 的蓝牙覆盖范围扩展到主机内置范围之外。通过在整个空间中部署多个 **ESP32 节点**，可以建立全屋蓝牙感知网络，实现与各种 BLE 设备的稳定连接，如温湿度传感器、门窗传感器、照明模块和植物监测器。

**主要功能：**

- **扩展覆盖范围：** 通过利用分布式 ESP32 代理节点实现全屋蓝牙连接，消除对主机蓝牙范围的依赖。
- **工作原理：**
  - **XIAO W5500 以太网适配器** 启用蓝牙扫描
  - 接收附近的 BLE 广播数据包（例如温度计、智能锁、灯具）
  - 通过 **以太网或 Wi-Fi** 将数据转发到 Home Assistant
  - Home Assistant 将这些设备识别为 **蓝牙实体**
  - 用户可以直接在 Home Assistant 界面中查看温度、电池电量、信号强度和其他指标

### 安装固件

如果您尚未设置 Home Assistant，可以点击此链接并按照官方 Home Assistant 教程完成设置。[Home Assistant 安装](https://www.home-assistant.io/installation/)

**步骤 1.** 安装 ESPhome<br/>

  如果您已经安装了 ESPHome，可以跳过此步骤。

- 转到 **Settings** -> **Add-ons**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/01.png" style={{width:800, height:'auto'}}/></div>

- **ADD-ON STORE** -> **Search ESPHome**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/02.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/03.png" style={{width:800, height:'auto'}}/></div>

- 启动 ESPhome

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/04.png" style={{width:800, height:'auto'}}/></div>

**步骤 2.** 添加新设备

    转到 ESPHome，点击右下角的 **Add New Device** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device1.png" style={{width:800, height:'auto'}}/></div>

    为设备命名并选择相应的主控芯片。XIAO W5500 基于 **XIAO ESP32-S3** 设计。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device2.png" style={{width:800, height:'auto'}}/></div><br/>

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', marginLeft:'10%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device3.png" style={{width:'90%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3.png" style={{width:'100%', height:'auto'}}/></div>
</div>

**步骤 3.** 安装固件

<details>
<summary>点击此处复制 yaml 文件</summary>

```yaml
esphome:
  name: seeed-esp32-s3
  friendly_name: Bluetooth Proxy
  min_version: 2025.8.0
  name_add_mac_suffix: true

esp32:
  variant: esp32s3
  framework:
    type: esp-idf

ethernet:
  type: W5500
  cs_pin: GPIO2
  clk_pin: GPIO7
  mosi_pin: GPIO9
  miso_pin: GPIO8

api:
logger:

ota:
  - platform: esphome
    id: ota_esphome

esp32_ble_tracker:
  scan_parameters:
    interval: 1100ms
    window: 1100ms
    active: true

bluetooth_proxy:
  active: true

button:
  - platform: safe_mode
    id: button_safe_mode
    name: Safe Mode Boot

  - platform: factory_reset
    id: factory_reset_btn
    name: Factory reset
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device4.png" style={{width:800, height:'auto'}}/></div>

    点击 **INSTALL** 将代码安装到设备上，您将看到以下图像。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device5.png" style={{width:800, height:'auto'}}/></div>

<Tabs>
<TabItem value='通过浏览器安装'>

:::tip
如果您的 Home Assistant 主机（Raspberry PI/Green/Yellow 等）距离您较远，我们建议使用此方法。您可以使用手边的计算机进行安装。
:::

首先，您需要点击 **Manual download** 下载编译好的固件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/62.png" style={{width:500, height:'auto'}}/></div>

打开此网站，我们将在这里将固件上传到 XIAO(ESP32-S3) W5500 以太网适配器。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device5.png" style={{width:800, height:'auto'}}/></div>

返回 ESPHome 下载固件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/64.png" style={{width:800, height:'auto'}}/></div>

选择 Factory 格式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/65.png" style={{width:500, height:'auto'}}/></div>

使用 USB 线缆 **将设备连接到您的计算机** 并点击 **CONNECT**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/66.png" style={{width:800, height:'auto'}}/></div>

选择 usbmodemxxx（Windows 是 COMxxx）并点击连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/67.png" style={{width:800, height:'auto'}}/></div>

点击 **INSTALL** 并选择您刚刚下载的固件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/69.png" style={{width:500, height:'auto'}}/></div>

</TabItem>

<TabItem value='通过主机安装'>

:::tip
如果您的 Home Assistant 主机（Raspberry PI/Green/Yellow 等）就在附近，我们建议使用此方法，因为它更简单。
:::

在将代码安装到设备之前，您需要使用 USB 线缆 **将此设备连接到运行 Home Assistant 的 Raspberry Pi 或 HA Green（Yellow）等设备**。

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

通过这种方式，您无需将 ePaper panel 连接到任何设备，只需确保它在线即可。

点击选项，然后固件将自动安装到 ePaper panel。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/72.png" style={{width:500, height:'auto'}}/></div>

稍等片刻，您将看到如下图所示的反馈。如果失败，可能是由于信号较弱。请将设备移近您的路由器。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device7.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
</Tabs>

**步骤 4.** 查看扫描结果

- 导航到 **Settings** → **Devices & services** → Bluetooth 并选择 **Bluetooth Proxy** 设备。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/buletooth_1.png" style={{width:800, height:'auto'}}/></div>
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/buletooth_2.png" style={{width:800, height:'auto'}}/></div>
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/buletooth_3.png" style={{width:800, height:'auto'}}/></div>

- 选择 **Advertisement Monitor** 查看扫描到的蓝牙设备信息。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/buletooth_4.png" style={{width:800, height:'auto'}}/></div>

  - **Addresss**：蓝牙设备的广播地址（MAC 格式）。请注意，这不是实际的物理 MAC 地址——它是由 BLE 隐私机制生成的随机化私有地址，会定期更改。
  - **Name**：蓝牙设备的广播名称。如果设备广播其名称，此字段有助于识别它。
  - **Device**：Home Assistant 中识别的蓝牙实体。如果设备尚未配对或识别，此字段保持为空。
  - **Source**：指示扫描源，即特定的蓝牙代理节点（例如，**Bluetooth Proxy 8fed20**）。这有助于区分来自多个代理节点的数据。
  - **RRSI**：接收信号强度指示器（以 dBm 为单位）。值越接近 0，信号越强。

- 或者，选择 **Visualization** 访问视图。

    该图显示了 Home Assistant 中的蓝牙广播可视化，说明了蓝牙代理网络的拓扑结构。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/buletooth_5.jpg" style={{width:800, height:'auto'}}/></div>

:::tip
许多 BLE 设备出于安全考虑使用隐私地址，这意味着它们的广播地址是随机化的并定期更新。因此，同一物理设备可能在 Home Assistant 的广播列表中以不同的地址出现。
要可靠地识别设备，请使用其广播名称或其他特征，如服务 UUID 或信号强度模式。
:::

## 应用

通过利用在 **XIAO(ESP32-S3) W5500 以太网适配器**上实现的蓝牙代理，您可以显著扩展蓝牙覆盖范围以连接蓝牙设备。具体来说，这可以基于不同的蓝牙协议来实现。下面，以 Home Assistant (HA) 的现有集成为例，我们演示了针对智能家居应用场景量身定制的实现方法。

### [BTHome](https://bthome.io/)

BTHome 是一种节能但灵活的 BLE 格式，供设备广播其传感器数据和按钮按压。<br/>
以从 DHT11 温湿度传感器读取数据为例，在 Home Assistant (HA) 中添加相应的集成，通过蓝牙代理读取数据，并实现稳定的

除了 XIAO(ESP32-S3) W5500 以太网适配器外，您还需要准备一个 XIAO ESP32-C3 和一个 DHT11 温湿度传感器。

1. 添加 Arduino 代码

:::tip
您还需要将 BTHome 文件和 DHT 文件添加到您创建的目录中。具体文件可以在以下位置访问：[DHT&BTHome.zip](https://files.seeedstudio.com/wiki/xiao_w5500_poe/BTHome_Temp_or_Hei_sensor.zip)
:::

```cpp
#include "BTHome.h"
#include "DHT.h"

#define DHTTYPE DHT11   // DHT 11
#define DHTPIN D0     // what pin we're connected to（DHT10 and DHT20 don't need define it）
DHT dht(DHTPIN, DHTTYPE);   //   DHT11 DHT21 DHT22

#define DEVICE_NAME "DIY-sensor"
#define ENABLE_ENCRYPT

String BIND_KEY = "231d39c1d7cc1ab1aee224cd096db912"; // Change this key with a string containing 32 of: a-f and 0-9 characters (hex) this will be asked in HA
BTHome bthome;

void setup() {
  Serial.begin(115200);
#ifdef ENABLE_ENCRYPT
  bthome.begin(DEVICE_NAME, true, BIND_KEY, false);
#else
  bthome.begin(DEVICE_NAME, false, "", false);
#endif
  Wire.begin();
  dht.begin();
}

void loop() {
  float temp_hum_val[2] = {0};
  if (!dht.readTempAndHumidity(temp_hum_val)) 
  {
    Serial.print("Humidity: ");
    Serial.print(temp_hum_val[0]);
    Serial.print(" %\t");
    Serial.print("Temperature: ");
    Serial.print(temp_hum_val[1]);
    Serial.println(" *C");
  } 
  else 
  {
    Serial.println("Failed to get temprature and humidity value.");
  }

  bthome.resetMeasurement();

  bthome.addMeasurement(ID_TEMPERATURE_PRECISE, temp_hum_val[1]);//3
  bthome.addMeasurement(ID_HUMIDITY_PRECISE, temp_hum_val[0]);//3

  bthome.sendPacket();
  bthome.stop();
  delay(500);
}
```

2. 添加集成

- 打开 Home Assistant 并导航到 Settings。在 Devices & Services 下将发现一个 BTHome 设备。点击 Add，输入密钥（粘贴代码中的 32 字符 BIND_KEY），然后选择 Submit。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/bthome_1.png" style={{width:800, height:'auto'}}/></div>

- 提交后，您将被重定向到一个页面，在那里您可以查看传输的温度和湿度数据以及蓝牙 MAC 地址。您还可以选择 **Add to dashboard**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/bthome_2.png" style={{width:800, height:'auto'}}/></div>

- 点击 MAC 地址显示该设备是由在 XIAO(ESP32-S3) W5500 以太网适配器上实现的蓝牙代理发现的。这确认了蓝牙代理按预期运行。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/bthome_3.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/bthome_4.png" style={{width:800, height:'auto'}}/></div>

:::tip
BTHome 协议仅支持向 Home Assistant 的单向数据传输，每个传输的数据对应一个唯一的 ID。如果您希望添加更多设备，请参考 [BThome Format](https://bthome.io/format/)
:::

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
