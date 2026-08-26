---
description: 适用于 XIAO ePaper 驱动板（EE0x）系列的 ESPHome cookbook - 在 XIAO ESP32-S3 + EE0x 驱动板上集成 Home Assistant，并搭配你选择的 ePaper 屏幕。本文以 EE04 为运行示例；EE02 / EE03 / EE05 共享相同的工作流程。
title: ESPHome Cookbook
keywords:
  - ePaper 显示屏
  - ESPHome
  - Home Assistant
  - EE02
  - EE03
  - EE04
  - EE05
  - XIAO ESP32-S3
image: https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.webp
slug: /EE04_with_esphome_advanced
aliases:
  - /ee0x_with_esphome
sidebar_position: 1
last_update:
  date: 04/28/2026
  author: Jason
createdAt: '2023-08-20'
updatedAt: '2026-04-28'
url: https://wiki.seeedstudio.com/cn/EE04_with_esphome_advanced/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ESPHome Cookbook：XIAO ePaper 驱动板（EE0x）

:::tip 请先阅读主 ESPHome 指南
本页是 **EE0x 驱动板 ESPHome cookbook** —— 适用于 **EE02 / EE03 / EE04 / EE05**。由于这四块板都共享相同的 XIAO ESP32-S3 底板以及相同的 SPI 连接 ePaper 接口，工作流程完全一致；它们之间唯一的区别是你在 YAML `display:` 块中选择的屏幕型号。

**示例讲解：EE04 搭配 7.5" 800×480 单色屏。** 只需在 `display.model` 行替换为你自己的板卡 + 屏幕组合，其余配置可直接复用。

通用的样板内容——选择烧录路径、通用 YAML 骨架、连接 Home Assistant——都在 **[使用 ESPHome](/cn/epaper_work_with_esphome)** 一文中。如果你是首次在 Seeed ePaper 上使用 ESPHome，请先快速浏览那一篇。
:::

## 什么是 ESPHome？

[ESPHome](https://esphome.io/) 是一个开源固件框架，可简化为常见 WiFi 微控制器创建自定义固件的过程。使用 ESPHome，你可以：

- 使用简单的 YAML 配置文件创建自定义智能家居设备
- 与 Home Assistant 无缝集成，获得统一的智能家居体验
- 通过多种接口（Web、API、MQTT）控制和监控你的设备
- 使用强大的本地自动化功能来实现家庭自动化
- 通过无线“空中升级”（OTA）更新设备，而无需物理接触

## 入门指南

### 硬件概览

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ePaper 显示板（ESP32-S3）- EE04</th>
      <th>Home Assistant Green</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:320, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Home Assistant Green 是自动化你家庭的最简单且最注重隐私的方式。它提供了毫不费力的设置流程，并允许你只用一个系统就控制所有智能设备，且所有数据默认都本地存储。该主板受益于蓬勃发展的 Home Assistant 生态系统，并将通过开源社区在每个月持续改进。

我们也为部分 Seeed Studio 产品编写了如何安装 Home Assistant 的教程，请参考以下内容。

- **[在 ODYSSEY-X86 上使用 Home Assistant 入门](https://wiki.seeedstudio.com/cn/ODYSSEY-X86-Home-Assistant/)**
- **[在 LinkStar H68K/reRouter CM4 上使用 Home Assistant 入门](https://wiki.seeedstudio.com/cn/h68k-ha-esphome/)**

:::tip 安装 Home Assistant
如果你没有使用 Seeed Studio 的产品，也可以在 Home Assistant 官方网站上查看并学习如何为其他产品安装 Home Assistant。

- **[Home Assistant 安装说明](https://www.home-assistant.io/installation/)**
:::

### 步骤 1. 安装 ESPHome

进入 **Settings** -> **Add-ons** -> **ADD-ON STORE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/28.png" style={{width:1000, height:'auto'}}/></div>

输入搜索词 **ESPHome**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/29.png" style={{width:1000, height:'auto'}}/></div>

点击 **INSTALL** 和 **START**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/30.png" style={{width:1000, height:'auto'}}/></div>

:::tip
如果你在插件商店中找不到 ESPHome，请确保你使用的是支持插件的 Home Assistant 安装方式（例如 Home Assistant OS 或 supervised 安装）。对于其他安装类型（例如 Home Assistant Container），你可能需要使用 Docker 独立运行 ESPHome Device Builder。更多详情请参阅 [ESPHome 官方文档](https://esphome.io/guides/getting_started_hassio)。
:::

### 步骤 2. 添加新设备

进入 ESPHome 并点击 **NEW DEVICE**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/31.png" style={{width:1000, height:'auto'}}/></div>

给 XIAO ePaper 显示板（ESP32-S3）- EE04 取一个你喜欢的名字，并选择 **ESP32-S3** 作为芯片类型，然后点击 **SKIP**。

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', marginLeft:'10%'}}>

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ee04_esphome8.png" style={{width:400, height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/34.png" style={{width:'100%', height:'auto'}}/></div>
</div>

创建新设备后，点击 **EDIT**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ee04_esphome6.png" style={{width:900, height:'auto'}}/></div><br />

<!-- Inside the default generated code, the framework of esp32 may be `esp-idf`, which we need to change to `arduino`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/esphome_arduino.png" style={{width:600, height:'auto'}}/></div> -->


### 步骤 3. 安装固件

这是一个基础示例，会在显示屏上显示 “Hello World!”。

**主要目的是向你展示多种向设备安装固件的方式。**

你可以通过复制下面的代码，并将其粘贴到 YAML 文件中 `captive_portal` 代码行之后来使用此示例。

:::note
- 由于下面的示例在下载固件前需要字体，请点击此[链接](https://wiki.seeedstudio.com/cn/EE04_with_esphome_advanced/#drawing-truetype-fonts)完成相关配置。
- `ssid:`,`password:` 这里需要填写你的网络名称和密码。
- **Quadruple Color 2.13** 和 **Quadruple Color 2.9** 使用外部库，因此在 ESPHome 中使用的 `board` 名称不同。
:::
***以下为 24 针连接器屏幕类型：***

<Tabs>
<TabItem value="1.54 Inch" label="1.54 英寸单色屏" default>

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

captive_portal:

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 1.54inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.print(0, 0, id(myFont), "Hello World!");
```

</TabItem>

<TabItem value="2.13 Inch" label="2.13 英寸单色屏">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

captive_portal:

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 2.13inv2 #More models you can refer to here: https://esphome.io/components/display/waveshare_epaper/
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.print(0, 0, id(myFont), "Hello World!");
```

</TabItem>

<TabItem value="2.13 Inch Quadruple Color" label="2.13 英寸四色屏">

```yaml
esphome:
  name: ee04
  friendly_name: EE04
  libraries:
    - SPI


esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "eg2Jyse0gE146lJ2mVaqAnwteb4U2GJ7d1sZc2BOOsc="

ota:
  - platform: esphome
    password: "e2f184b95aac832509885f676abf5b73"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "ESPHome_Epaper"
    password: "123456789"

external_components:
  - source: github://xcjk-tofuture/esphome@dev
    components: [ waveshare_epaper ]

font:
  - file: "gfonts://Inter@700"
    id: font1
    size: 24

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: my_display
    model: gdey0213f51
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 90
    update_interval: 30s
    full_update_every: 1
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      const auto RED     = Color(255, 0,   0,   0);
      const auto YELLOW  = Color(255, 255, 0,   0);
      const auto WHITE   = Color(255, 255, 255, 0);

      it.fill(YELLOW); 
      it.print(0, 0, id(font1), BLACK, "Hello World in BLACK!");
      it.print(0, 30, id(font1), RED, "Hello World in RED!");
      it.print(0, 60, id(font1), YELLOW, "Hello World in YELLOW!");
```

</TabItem>

<TabItem value="2.9 Inch" label="2.9 Inch Monochrome Color">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

captive_portal:

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 2.90inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.print(0, 0, id(myFont), "Hello World!");
```


</TabItem>

<TabItem value="2.9 Inch Quadruple Color" label="2.9 Inch Quadruple Color">

```yaml
esphome:
  name: ee04
  friendly_name: EE04
  libraries:
    - SPI


esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "eg2Jyse0gE146lJ2mVaqAnwteb4U2GJ7d1sZc2BOOsc="

ota:
  - platform: esphome
    password: "e2f184b95aac832509885f676abf5b73"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "ESPHome_Epaper"
    password: "123456789"

external_components:
  - source: github://xcjk-tofuture/esphome@dev
    components: [ waveshare_epaper ]


# external_components:
#   - source:
#       type: local
#       path: components_epaper
#     components : [waveshare_epaper]

font:
  - file: "gfonts://Inter@700"
    id: font1
    size: 24

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9
display:
  - platform: waveshare_epaper
    id: my_display
    model: gdey029f51h
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 90
    update_interval: 30s
    full_update_every: 1
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      const auto RED     = Color(255, 0,   0,   0);
      const auto YELLOW  = Color(255, 255, 0,   0);
      const auto WHITE   = Color(255, 255, 255, 0);

      it.print(0, 0, id(font1), BLACK, "Hello World in BLACK!");
      it.print(0, 30, id(font1), RED, "Hello World in RED!");
      it.print(0, 60, id(font1), YELLOW, "Hello World in YELLOW!");
      ESP_LOGD("epaper", "reflash......");
```

</TabItem>

<TabItem value="4.2 Inch" label="4.2 Inch Monochrome Color">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"


# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

captive_portal:

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: gdey042t81
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.print(0, 0, id(myFont), "Hello World!");
```

</TabItem>

<!-- <TabItem value="4.26 Inch Monochrome Color" label="4.26 Inch Monochrome Color">

```yaml
esphome:
  name: ee04
  friendly_name: EE04
  libraries:
    - SPI


esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "eg2Jyse0gE146lJ2mVaqAnwteb4U2GJ7d1sZc2BOOsc="

ota:
  - platform: esphome
    password: "e2f184b95aac832509885f676abf5b73"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "ESPHome_Epaper"
    password: "123456789"

external_components:
  - source: github://xcjk-tofuture/seeed_esphome
    components: [ waveshare_epaper ]

font:
  - file: "gfonts://Inter@700"
    id: font1
    size: 24

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: my_display
    model: 4.26in
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 30s
    lambda: |-
      it.print(0, 150, id(font1), "Hello World!");
```

</TabItem> -->

<TabItem value="5.83 Inch" label="5.83 Inc Monochrome Color">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

captive_portal:

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: gdey0583t81
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.print(0, 0, id(myFont), "Hello World!");
```
</TabItem>

<TabItem value="7.5 Inch" label="7.5 Inch Monochrome Color" default>

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

captive_portal:

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.print(0, 0, id(myFont), "Hello World!");
```

</TabItem>

</Tabs>

<br></br>

***以下是 50 针连接器屏幕类型：***

<Tabs>
<TabItem value="7.3 Inch" label="7.3 Inch spectra™ 6" default>

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

font:
  - file: "gfonts://Inter@700"
    id: font1
    size: 24

captive_portal:

external_components:
  - source:
      type: git
      url: https://github.com/esphome/esphome/
      ref: 2025.10.5
    components: [ epaper_spi, display ]

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    id: my_display
    model: 7.3in-Spectra-E6
    cs_pin: GPIO44
    dc_pin:
      number: GPIO10
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 30s
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      const auto RED     = Color(255, 0,   0,   0);
      const auto BLUE     = Color(0, 0,   255,   0);
      const auto GREEN     = Color(0, 255,   0,   0);
      const auto YELLOW  = Color(255, 255, 0,   0);
      const auto WHITE   = Color(255, 255, 255, 0);

      it.fill(WHITE); 
      it.print(0, 0, id(font1), BLACK, "Hello World in BLACK!");
      it.print(0, 30, id(font1), RED, "Hello World in RED!");
      it.print(0, 60, id(font1), YELLOW, "Hello World in YELLOW!");
      it.print(0, 90, id(font1), GREEN, "Hello World in GREEN!");
      it.print(0, 120, id(font1), BLUE, "Hello World in BLUE!");
```

</TabItem>
</Tabs>


点击 **INSTALL** 将代码安装到设备上，你将看到如下图像。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/esphome_ee042.png" style={{width:1000, height:'auto'}}/></div><br />

<Tabs>
<TabItem value='Install through browser'>

:::tip
如果你的 Home Assistant 主机（Raspberry PI/Green/Yellow 等）离你比较远，我们推荐使用这种方式。你可以使用手边的电脑来安装。
:::

首先，你需要点击 **Manual download** 来下载已编译的固件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/62.png" style={{width:500, height:'auto'}}/></div>

打开这个网站，我们将在这里把固件上传到 ePaper 面板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/63.png" style={{width:800, height:'auto'}}/></div>

回到 ESPHome 下载固件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/64.png" style={{width:800, height:'auto'}}/></div>

选择 **Factory format**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/65.png" style={{width:500, height:'auto'}}/></div>

使用 USB 线**将电子墨水屏连接到电脑**，然后点击 **CONNECT**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/66.png" style={{width:800, height:'auto'}}/></div>

选择 usbmodemxxx（Windows 为 COMxxx）并点击 connect。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/67.png" style={{width:800, height:'auto'}}/></div>

点击 **INSTALL** 并选择你刚刚下载的固件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/69.png" style={{width:800, height:'auto'}}/></div>

稍等片刻，你就会在屏幕上看到 “Hello world!” ～ 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ee04.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>

<TabItem value='Install through host'>

:::tip
如果你的 Home Assistant 主机（Raspberry PI/Green/Yellow 等）在附近，我们推荐使用这种方式，因为它更简单。
:::

在你将代码安装到设备之前，需要使用 USB 线**将该设备连接到运行 Home Assistant 的 Raspberry Pi 或 HA Green（Yellow）等主机**。

按照下图所示点击对应选项，将代码安装到设备中。

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/6.png" style={{width:'70%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/7.png" style={{width:'100%', height:'auto'}}/></div>
</div>

稍等片刻，你会看到类似下图的反馈，这表示代码已成功运行。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ee04.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>

<TabItem value='Install through Wi-Fi'>

:::tip
这是最简单的方式，但前提是：在首次安装程序时，你需要先使用左侧的方法将程序上传到电子墨水屏面板。之后，你就可以通过 Wi-Fi 上传。同时，请确保你的 YAML 配置中包含正确配置的 `ota` 和 `api` 部分，并带有有效的加密密钥，否则此方法将无法工作。
:::

通过这种方式，你无需将电子墨水屏面板连接到任何设备，只需确保它在线即可。

点击该选项，固件就会自动安装到电子墨水屏面板上。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/72.png" style={{width:800, height:'auto'}}/></div>


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ee04.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>
</Tabs>

## 在 ESPHome 中进行绘图的基础知识

### 绘制简单图形

这个示例 YAML 代码为一个 ESPHome 项目配置了 SPI 接口和 XIAO 电子墨水屏显示板（ESP32-S3）- EE04。`lambda` 部分包含在屏幕上绘制简单图形的绘图命令：

- 两个矩形（一个位于 (10, 10)，尺寸为 100x50，另一个位于 (150, 10)，尺寸为 50x50）
- 一个圆，中心在 (250, 35)，半径为 25
- 两个实心矩形（位于 (10, 80) 和 (150, 80)）
- 一个实心圆，中心在 (250, 105)，半径为 25

你可以通过复制下面的示例代码，并将其粘贴到 YAML 文件中 `captive_portal` 代码行之后来使用该示例。

<Tabs>
<TabItem value="1.54 Inch Monochrome" label="1.54 英寸单色" default>

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 1.54inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.rectangle(10, 10, 100, 50);
      it.rectangle(150, 10, 50, 50);
      it.circle(250, 35, 25);
      it.filled_rectangle(10, 80, 100, 50);
      it.filled_rectangle(150, 80, 50, 50);
      it.filled_circle(250, 105, 25);
```

</TabItem>

<TabItem value="2.13 Inch Quadruple Color" label="2.13 英寸四色">

```yaml
esphome:
  name: ee04
  friendly_name: EE04
  libraries:
    - SPI


esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "eg2Jyse0gE146lJ2mVaqAnwteb4U2GJ7d1sZc2BOOsc="

ota:
  - platform: esphome
    password: "e2f184b95aac832509885f676abf5b73"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "ESPHome_Epaper"
    password: "123456789"

external_components:
  - source: github://xcjk-tofuture/esphome@dev
    components: [ waveshare_epaper ]

font:
  - file: "gfonts://Inter@700"
    id: font1
    size: 24

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: my_display
    model: gdey0213f51
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 90
    update_interval: 30s
    full_update_every: 1
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      const auto RED     = Color(255, 0,   0,   0);
      const auto YELLOW  = Color(255, 255, 0,   0);
      const auto WHITE   = Color(255, 255, 255, 0);

      it.rectangle(10, 10, 100, 50,YELLOW);
      it.rectangle(150, 10, 50, 50,YELLOW);
      it.circle(250, 35, 25,YELLOW);
      it.filled_rectangle(10, 80, 100, 50,YELLOW);
      it.filled_rectangle(150, 80, 50, 50,YELLOW);
      it.filled_circle(250, 105, 25,YELLOW);
```

</TabItem>

<TabItem value="2.13 Inch" label="2.13 英寸单色">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 2.13inv2 #More models you can refer to here: https://esphome.io/components/display/waveshare_epaper/
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.rectangle(10, 10, 100, 50);
      it.rectangle(150, 10, 50, 50);
      it.circle(250, 35, 25);
      it.filled_rectangle(10, 80, 100, 50);
      it.filled_rectangle(150, 80, 50, 50);
      it.filled_circle(250, 105, 25);
```

</TabItem>

<TabItem value="2.9 Inch Quadruple Color" label="2.9 英寸四色">

```yaml
esphome:
  name: ee04
  friendly_name: EE04
  libraries:
    - SPI


esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "eg2Jyse0gE146lJ2mVaqAnwteb4U2GJ7d1sZc2BOOsc="

ota:
  - platform: esphome
    password: "e2f184b95aac832509885f676abf5b73"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "ESPHome_Epaper"
    password: "123456789"

external_components:
  - source: github://xcjk-tofuture/esphome@dev
    components: [ waveshare_epaper ]

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: my_display
    model: gdey029f51h
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 90
    update_interval: 30s
    full_update_every: 1
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      const auto RED     = Color(255, 0,   0,   0);
      const auto YELLOW  = Color(255, 255, 0,   0);
      const auto WHITE   = Color(255, 255, 255, 0);

      it.rectangle(10, 10, 100, 50,YELLOW);
      it.rectangle(150, 10, 50, 50,YELLOW);
      it.circle(250, 35, 25,YELLOW);
      it.filled_rectangle(10, 80, 100, 50,YELLOW);
      it.filled_rectangle(150, 80, 50, 50,YELLOW);
      it.filled_circle(250, 105, 25,YELLOW);
```

</TabItem>

<TabItem value="2.9 Inch" label="2.9 英寸单色">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 2.90inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.rectangle(10, 10, 100, 50);
      it.rectangle(150, 10, 50, 50);
      it.circle(250, 35, 25);
      it.filled_rectangle(10, 80, 100, 50);
      it.filled_rectangle(150, 80, 50, 50);
      it.filled_circle(250, 105, 25);
```


</TabItem>

<TabItem value="4.2 Inch" label="4.2 Inch Monochrome Color">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: gdey042t81
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.rectangle(10, 10, 100, 50);
      it.rectangle(150, 10, 50, 50);
      it.circle(250, 35, 25);
      it.filled_rectangle(10, 80, 100, 50);
      it.filled_rectangle(150, 80, 50, 50);
      it.filled_circle(250, 105, 25);
```

</TabItem>

<!-- <TabItem value="4.26 Inch Monochrome Color" label="4.26 Inch Monochrome Color">

```yaml
esphome:
  name: ee04
  friendly_name: EE04
  libraries:
    - SPI


esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "eg2Jyse0gE146lJ2mVaqAnwteb4U2GJ7d1sZc2BOOsc="

ota:
  - platform: esphome
    password: "e2f184b95aac832509885f676abf5b73"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "ESPHome_Epaper"
    password: "123456789"

external_components:
  - source: github://xcjk-tofuture/seeed_esphome
    components: [ waveshare_epaper ]

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: my_display
    model: 4.26in
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 30s
    lambda: |-
      it.rectangle(10, 10, 100, 50);
      it.rectangle(150, 10, 50, 50);
      it.circle(250, 35, 25);
      it.filled_rectangle(10, 80, 100, 50);
      it.filled_rectangle(150, 80, 50, 50);
      it.filled_circle(250, 105, 25);
```

</TabItem> -->


<TabItem value="5.83 Inch" label="5.83 Inch Monochrome Color">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: gdey0583t81
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.rectangle(10, 10, 100, 50);
      it.rectangle(150, 10, 50, 50);
      it.circle(250, 35, 25);
      it.filled_rectangle(10, 80, 100, 50);
      it.filled_rectangle(150, 80, 50, 50);
      it.filled_circle(250, 105, 25);
```
</TabItem>

<TabItem value="7.5 Inch-24Pin" label="7.5 Inch Monochrome Color" default>

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 300s
    lambda: |-
      it.rectangle(10, 10, 100, 50);
      it.rectangle(150, 10, 50, 50);
      it.circle(250, 35, 25);
      it.filled_rectangle(10, 80, 100, 50);
      it.filled_rectangle(150, 80, 50, 50);
      it.filled_circle(250, 105, 25);
```

</TabItem>
</Tabs>

<Tabs>
<TabItem value="7.3 Inch" label="7.3 Inch spectra™ 6" default>

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

external_components:
  - source:
      type: git
      url: https://github.com/esphome/esphome/
      ref: 2025.10.5
    components: [ epaper_spi, display ]

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    id: my_display
    model: 7.3in-Spectra-E6
    cs_pin: GPIO44
    dc_pin:
      number: GPIO10
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 30s
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      const auto RED     = Color(255, 0,   0,   0);
      const auto BLUE     = Color(0, 0,   255,   0);
      const auto GREEN     = Color(0, 255,   0,   0);
      const auto YELLOW  = Color(255, 255, 0,   0);
      const auto WHITE   = Color(255, 255, 255, 0);

      it.rectangle(10, 10, 100, 50,BLACK);
      it.rectangle(150, 10, 50, 50,RED);
      it.circle(250, 35, 25,BLUE);
      it.filled_rectangle(10, 80, 100, 50,GREEN);
      it.filled_rectangle(150, 80, 50, 50,YELLOW);
      it.filled_circle(250, 105, 25,WHITE);
```

</TabItem>
</Tabs>

当你看到如下图所示的反馈时，表示代码已成功运行。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/esphomeee044.png" style={{width:1000, height:'auto'}}/></div><br />

由于篇幅限制，我们不会对其他图案的绘制方法和原理进行过多阐述，如有需要，建议读者阅读[ESPHome 在这一部分的详细示例](https://esphome.io/components/display/)。


### 绘制 TrueType 字体

本示例演示如何使用 TrueType 字体在你的 XIAO ePaper Display Board(ESP32-S3) - EE04 上显示自定义图标。Material Design Icons 提供了大量适合 ePaper 显示屏的可缩放符号。

#### 安装所需工具

步骤 1. 首先，我们需要安装 **Studio Code Server** 插件来管理文件。进入 Home Assistant 插件商店，搜索 **Studio Code Server** 并点击进入。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/esphome00444.png" style={{width:1000, height:'auto'}}/></div>

步骤 2. 点击 **INSTALL** 并等待安装完成。安装完成后，点击 **START** 启动编辑器。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/18.png" style={{width:800, height:'auto'}}/></div>

#### 设置图标字体

步骤 3. 在你的 ESPHome 配置目录中新建一个名为 **fonts** 的文件夹。该文件夹将用于存放显示图标所需的 TrueType 字体文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/esphme_ee041.png" style={{width:800, height:'auto'}}/></div>

步骤 4. 点击下方按钮下载 Material Design Icons 字体文件，并解压其内容。

<div align="center">
<a href="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/font_ttf.zip" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>下载 Material Design Icons 字体</button></p>
</a>
</div>

步骤 5. 将下载得到的字体文件（`materialdesignicons-webfont.ttf`）上传到你之前创建的 fonts 文件夹中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/19.png" style={{width:800, height:'auto'}}/></div>

#### 为图标配置 ESPHome

步骤 6. 在 ESPHome 配置文件中 `captive_portal` 部分之后添加以下代码。该代码定义了两种图标字体大小，并配置显示屏以显示天气图标。

<Tabs>
<TabItem value="1.54 Inch" label="1.54 Inch Monochrome Color" default>

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 1.54inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```

</TabItem>

<TabItem value="2.13 Inch Quadruple Color" label="2.13 Inch Quadruple Color">

```yaml
esphome:
  name: ee04
  friendly_name: EE04
  libraries:
    - SPI


esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "eg2Jyse0gE146lJ2mVaqAnwteb4U2GJ7d1sZc2BOOsc="

ota:
  - platform: esphome
    password: "e2f184b95aac832509885f676abf5b73"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "ESPHome_Epaper"
    password: "123456789"

external_components:
  - source: github://xcjk-tofuture/esphome@dev
    components: [ waveshare_epaper ]


# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: my_display
    model: gdey0213f51
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 90
    update_interval: 30s
    full_update_every: 1
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```

</TabItem>


<TabItem value="2.13 Inch" label="2.13 英寸单色">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 2.13inv2 #More models you can refer to here: https://esphome.io/components/display/waveshare_epaper/
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```

</TabItem>

<TabItem value="2.9 Inch Quadruple Color" label="2.9 Inch Quadruple Color">

```yaml
esphome:
  name: ee04
  friendly_name: EE04
  libraries:
    - SPI


esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "eg2Jyse0gE146lJ2mVaqAnwteb4U2GJ7d1sZc2BOOsc="

ota:
  - platform: esphome
    password: "e2f184b95aac832509885f676abf5b73"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "ESPHome_Epaper"
    password: "123456789"

external_components:
  - source: github://xcjk-tofuture/esphome@dev
    components: [ waveshare_epaper ]


# external_components:
#   - source:
#       type: local
#       path: components_epaper
#     components : [waveshare_epaper]


captive_portal:

# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9
display:
  - platform: waveshare_epaper
    id: my_display
    model: gdey029f51h
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 90
    update_interval: 30s
    full_update_every: 1
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```

</TabItem>

<TabItem value="2.9 Inch" label="2.9 英寸单色">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 2.90inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```


</TabItem>

<TabItem value="4.2 Inch" label="4.2 英寸单色">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: gdey042t81
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```

</TabItem>

<!-- <TabItem value="4.26 Inch Monochrome Color" label="4.26 Inch Monochrome Color">

```yaml
esphome:
  name: ee04
  friendly_name: EE04
  libraries:
    - SPI


esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "eg2Jyse0gE146lJ2mVaqAnwteb4U2GJ7d1sZc2BOOsc="

ota:
  - platform: esphome
    password: "e2f184b95aac832509885f676abf5b73"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "ESPHome_Epaper"
    password: "123456789"

external_components:
  - source: github://xcjk-tofuture/seeed_esphome
    components: [ waveshare_epaper ]

captive_portal:

# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: my_display
    model: 4.26in
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 30s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```

</TabItem> -->


<TabItem value="5.83 Inch" label="5.83 英寸单色">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: gdey0583t81
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```
</TabItem>

<TabItem value="24 Pin" label="7.5 英寸单色彩色" default>

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```

</TabItem>
</Tabs>

<Tabs>
<TabItem value="7.3 Inch" label="7.3 英寸 spectra™ 6" default>

```yaml

esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

external_components:
  - source:
      type: git
      url: https://github.com/esphome/esphome/
      ref: 2025.10.5
    components: [ epaper_spi, display ]

# define font to display words
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  # Path to the font file
    id: font_mdi_large
    size: 200        # Large icon size
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather-cloudy icon
      - "\U000F0592" # weather-hail icon
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # Medium icon size
    size: 40
    glyphs: *mdi-weather-glyphs

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    id: my_display
    model: 7.3in-Spectra-E6
    cs_pin: GPIO44
    dc_pin:
      number: GPIO10
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 30s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");

```

</TabItem>
</Tabs>

:::note

1. `glyphs` 部分定义了要从字体文件中加载哪些图标。只加载你需要的图标可以节省设备的内存。

2. 程序从烧录完成到最终显示可能需要 2~3 分钟。

:::

步骤 7. 保存你的配置并将其上传到 XIAO ePaper Display Board(ESP32-S3) - EE04。当你看到如下图所示的反馈时，表示代码已成功运行。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/esphomeee045.png" style={{width:1000, height:'auto'}}/></div><br />

#### 使用不同图标进行自定义

Material Design Icons 库包含数千个可在项目中使用的图标。以下是查找和使用不同图标的方法：

步骤 1. 点击下方按钮访问 Material Design Icons 网站。

<div align="center">
<a href="https://pictogrammers.com/library/mdi/" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>浏览 Material Design Icons</button></p>
</a>
</div>

步骤 2. 搜索你想在项目中使用的图标。你可以按类别浏览或使用搜索功能。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/41.png" style={{width:800, height:'auto'}}/></div>

步骤 3. 找到喜欢的图标后，点击它查看详细信息。查找 Unicode 值，其格式类似于 `F0595`。

步骤 4. 通过以下方式将 Unicode 值添加到 ESPHome 配置中：

- 将其添加到字体配置中的 `glyphs` 列表
- 更新显示代码以使用新图标

例如，要使用 Unicode 为 `F0123` 的新图标：

```yaml
glyphs:
  - "\U000F0595" # weather-cloudy icon
  - "\U000F0592" # weather-hail icon
  - "\U000F0123" # your new icon
```

在显示 lambda 中：

```yaml
lambda: |-
  it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0123");
```

步骤 5. 保存更新后的配置并上传到你的设备，即可看到新图标。

:::tip
对于天气仪表盘，可以考虑使用诸如 `F0590`（晴天）、`F0591`（多云）、`F0593`（雨天）和 `F059E`（有风）等图标。
:::

通过将这些图标与我们之前在 Home Assistant 中设置的天气数据结合起来，你可以创建一个动态天气显示界面，用合适的图标展示当前天气状况。

### 显示自定义图片

本示例演示如何在 XIAO ePaper Display Board(ESP32-S3) - EE04 上显示自定义图片。你可以使用此功能显示徽标、图标或任何能增强仪表盘体验的图形。

#### 准备工作

步骤 1. 确保你已经在 Home Assistant 中安装了 **Studio Code Server** 插件。如果尚未安装，请参考前面示例中的说明进行安装。

步骤 2. 在 ESPHome 配置目录中创建一个名为 **image** 的新文件夹。此文件夹将存储你想要显示的图片文件。

```
config/
└── esphome/
    ├── your_device.yaml
    └── image/         <- Create this folder
```

#### 添加图片

步骤 3. 下载一个示例图片来测试功能。你可以使用下面提供的 WiFi 图标，也可以使用你自己的图片。

<div align="center">
<a href="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/wifi.jpg" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>下载示例 WiFi 图片</button></p>
</a>
</div>

步骤 4. 使用 Studio Code Server 文件管理器将下载的图片上传到之前创建的 **image** 文件夹中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/20.png" style={{width:800, height:'auto'}}/></div>

:::tip
为了在 ePaper 显示屏上获得最佳效果，请使用高对比度、黑白区域清晰的图片。JPG 和 PNG 格式均受支持。
:::

#### 为图片显示配置 ESPHome

步骤 5. 在 ESPHome 配置文件的 `captive_portal` 部分之后添加以下代码。此代码定义图片资源并配置显示屏来显示它。

<Tabs>
<TabItem value="1.54 Inch" label="1.54 英寸单色彩色" default>

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: BINARY                            # Binary mode works best for e-paper
    resize: 800x480                         # Resize to match display resolution
    invert_alpha: true                      # Invert colors if needed

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 1.54inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

</TabItem>

<TabItem value="2.13 Inch" label="2.13 英寸单色彩色">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: BINARY                            # Binary mode works best for e-paper
    resize: 800x480                         # Resize to match display resolution
    invert_alpha: true                      # Invert colors if needed

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 2.13inv2 #More models you can refer to here: https://esphome.io/components/display/waveshare_epaper/
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

</TabItem>

<TabItem value="2.13 Inch Quadruple Color" label="2.13 Inch Quadruple Color">

```yaml
esphome:
  name: ee04
  friendly_name: EE04
  libraries:
    - SPI


esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "eg2Jyse0gE146lJ2mVaqAnwteb4U2GJ7d1sZc2BOOsc="

ota:
  - platform: esphome
    password: "e2f184b95aac832509885f676abf5b73"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "ESPHome_Epaper"
    password: "123456789"

external_components:
  - source: github://xcjk-tofuture/esphome@dev
    components: [ waveshare_epaper ]


image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: BINARY                            # Binary mode works best for e-paper
    resize: 800x480                         # Resize to match display resolution
    invert_alpha: true                      # Invert colors if needed

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: my_display
    model: gdey0213f51
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 90
    update_interval: 30s
    full_update_every: 1
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

</TabItem>

<TabItem value="2.9 Inch Quadruple Color" label="2.9 Inch Quadruple Color">

```yaml
esphome:
  name: ee04
  friendly_name: EE04
  libraries:
    - SPI


esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "eg2Jyse0gE146lJ2mVaqAnwteb4U2GJ7d1sZc2BOOsc="

ota:
  - platform: esphome
    password: "e2f184b95aac832509885f676abf5b73"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "ESPHome_Epaper"
    password: "123456789"

external_components:
  - source: github://xcjk-tofuture/esphome@dev
    components: [ waveshare_epaper ]

captive_portal:

image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: BINARY                            # Binary mode works best for e-paper
    resize: 800x480                         # Resize to match display resolution
    invert_alpha: true                      # Invert colors if needed

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9
display:
  - platform: waveshare_epaper
    id: my_display
    model: gdey029f51h
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 90
    update_interval: 30s
    full_update_every: 1
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

</TabItem>

<TabItem value="2.9 Inch" label="2.9 Inch Monochrome Color">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: BINARY                            # Binary mode works best for e-paper
    resize: 800x480                         # Resize to match display resolution
    invert_alpha: true                      # Invert colors if needed

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 2.90inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```


</TabItem>

<TabItem value="4.2 Inch" label="4.2 Inch Monochrome Color">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: BINARY                            # Binary mode works best for e-paper
    resize: 800x480                         # Resize to match display resolution
    invert_alpha: true                      # Invert colors if needed

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: gdey042t81
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

</TabItem>

<!-- <TabItem value="4.26 Inch Monochrome Color" label="4.26 Inch Monochrome Color">

```yaml
esphome:
  name: ee04
  friendly_name: EE04
  libraries:
    - SPI


esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "eg2Jyse0gE146lJ2mVaqAnwteb4U2GJ7d1sZc2BOOsc="

ota:
  - platform: esphome
    password: "e2f184b95aac832509885f676abf5b73"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "ESPHome_Epaper"
    password: "123456789"

external_components:
  - source: github://xcjk-tofuture/seeed_esphome
    components: [ waveshare_epaper ]

captive_portal:

image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: BINARY                            # Binary mode works best for e-paper
    resize: 800x480                         # Resize to match display resolution
    invert_alpha: true                      # Invert colors if needed

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: my_display
    model: 4.26in
    cs_pin: GPIO44
    dc_pin: GPIO10
    busy_pin: GPIO4
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 30s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

</TabItem> -->


<TabItem value="5.83 Inch" label="5.83 Inch Monochrome Color">

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: BINARY                            # Binary mode works best for e-paper
    resize: 800x480                         # Resize to match display resolution
    invert_alpha: true                      # Invert colors if needed

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: gdey0583t81
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```
</TabItem>

<TabItem value="7.5 Inch" label="7.5 Inch Monochrome Color" default>

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: BINARY                            # Binary mode works best for e-paper
    resize: 800x480                         # Resize to match display resolution
    invert_alpha: true                      # Invert colors if needed

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2
    cs_pin: GPIO44
    dc_pin: GPIO10
    reset_pin:
      number: GPIO38
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    update_interval: 300s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

</TabItem>
</Tabs>

<Tabs>
<TabItem value="7.3 Inch" label="7.3 Inch spectra™ 6" default>

```yaml
esphome:
  name: ee04
  friendly_name: EE04

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "b0AIbJ+kbeMayi1PgSGXtiD1yQCapUBF4A/7v7btys0="

ota:
  - platform: esphome
    password: "5d7cca6f4b3f38aba559ab0d6aaf5926"

wifi:
  ssid: 
  password: 

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Ee04 Fallback Hotspot"
    password: "zxPMBtCEWonm"

captive_portal:

external_components:
  - source:
      type: git
      url: https://github.com/esphome/esphome/
      ref: 2025.10.5
    components: [ epaper_spi, display ]

image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: BINARY                            # Binary mode works best for e-paper
    resize: 800x480                         # Resize to match display resolution
    invert_alpha: true                      # Invert colors if needed

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    id: my_display
    model: 7.3in-Spectra-E6
    cs_pin: GPIO44
    dc_pin:
      number: GPIO10
      inverted: false
    busy_pin:
      number: GPIO4
      inverted: true
    reset_pin:  GPIO38
    rotation: 0
    update_interval: 30s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```
</TabItem>
</Tabs>

步骤 6. 保存你的配置并将其上传到 XIAO ePaper Display Board(ESP32-S3) - EE04。更新完成后，你的电子纸屏幕将显示该图像。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/esphomeee046.png" style={{width:1000, height:'auto'}}/></div><br />


#### 高级图像技巧

你可以通过以下附加技巧增强图像显示效果：

**图像定位**

要将图像定位到屏幕上的特定坐标：

```yaml
lambda: |-
  // Display image at position (100,50)
  it.image(100, 50, id(myImage));
```

**图像与文本组合**

你可以在同一屏幕上同时显示图像和文本：

```yaml
lambda: |-
  // Display image
  it.image(0, 0, id(myImage));

  // Add text below or beside the image
  it.printf(400, 400, id(myFont), TextAlign::CENTER, "WiFi Connected");
```

**使用多张图像**

要在同一屏幕上显示多张图像，请在配置中定义每一张图像：

```yaml
image:
  - file: /config/esphome/image/wifi.jpg
    id: wifiImage
    type: BINARY
    resize: 200x200

  - file: /config/esphome/image/temperature.png
    id: tempImage
    type: BINARY
    resize: 200x200

# In the display lambda:
lambda: |-
  it.image(50, 50, id(wifiImage));
  it.image(300, 50, id(tempImage));
```

:::caution
请记住，电子纸显示屏的刷新率有限。`update_interval: 300s` 设置意味着你的屏幕每 5 分钟才会刷新一次。请根据你的需求调整该值，但要注意，过于频繁的刷新会缩短电子纸显示屏的使用寿命。
:::

通过将图像与文本以及前面示例中介绍的其他显示元素相结合，你可以在 XIAO ePaper Display Board(ESP32-S3) - EE04 上创建丰富且信息量大的仪表盘。

## 参考与资源

- [ESPHome](https://esphome.io/)
- [ESPHome 详细示例](https://esphome.io/components/display/)
## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
