---
description: 本文介绍如何让 reTerminal E 系列 ePaper 显示屏与 Home Assistant 和 ESPHome 配合工作。
title: reTerminal E 系列 ePaper 显示屏与 ESPHome 配合 Home Assistant 使用
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.webp
slug: /reterminal_e10xx_with_esphome
sku: 100017057,100073581
sidebar_position: 2
last_update:
  date: 07/21/2025
  author: Citric
createdAt: '2025-08-07'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_esphome/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reTerminal E 系列 ePaper 显示屏与 ESPHome 配合 Home Assistant 使用

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.jpg" style={{width:700, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/cn/reterminal_e10xx_with_esphome" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong></a>
</div>

## [Home Assistant](https://www.home-assistant.io/) 简介

Home Assistant 是一个功能强大的开源家庭自动化平台，允许您从一个统一的界面控制和监控智能家居设备。它充当智能家居的中央枢纽，使您能够自动化日常任务、监控传感器并创建更智能的生活空间。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/204.png" style={{width:700, height:'auto'}}/></div>

### 为什么选择 Home Assistant？

- **本地控制**：与许多基于云的解决方案不同，Home Assistant 在您的网络上本地运行，确保您的数据保持私密，即使没有互联网连接，您的自动化也能正常工作。

- **广泛的设备支持**：Home Assistant 集成了数千种不同的智能家居设备和服务，使其具有高度的通用性和面向未来的特性。

- **强大的自动化**：创建复杂的自动化规则，可以响应各种触发器，如时间、设备状态、传感器读数等。

- **可定制的仪表板**：设计您自己的用户界面，显示对您最重要的信息。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 了解更多 🖱️</font></span></strong></a>
</div>

### 为什么 reTerminal E 系列 ePaper 显示屏适合与 Home Assistant 配合使用？

reTerminal E 系列 ePaper 显示屏是 Home Assistant 的绝佳伴侣，原因如下：

1. **节能高效**：电子纸显示屏仅在更新内容时消耗电力，非常适合显示持久信息，如天气预报、日历事件或系统状态。

2. **清晰可见**：与 LCD 屏幕不同，电子纸显示屏在任何光照条件下都易于阅读，包括直射阳光，使其成为壁挂式家庭控制面板的理想选择。

3. **长续航时间**：结合深度睡眠模式，显示屏可以在单次电池充电下运行数月，同时仍能一目了然地提供有价值的信息。

4. **灵活集成**：通过 ESPHome，显示屏与 Home Assistant 无缝集成，允许您以优雅、始终可见的格式显示智能家居系统中的任何数据。

这些优势使 reTerminal E 系列 ePaper 显示屏成为为您的 Home Assistant 设置创建节能、始终在线信息显示屏的理想选择。

### ESPHome 集成

ESPHome 是专为 ESP8266/ESP32 设备设计的开源固件创建工具。它允许您使用简单的 YAML 配置文件创建自定义固件，然后可以将其刷写到您的设备上。对于 reTerminal E 系列，ESPHome 充当设备与 Home Assistant 之间通信的重要中间件。

该系统通过将您的 YAML 配置转换为在 ESP 设备上运行的功能齐全的固件来工作。该固件处理连接到网络、与 Home Assistant 通信以及控制 ePaper 显示屏的所有复杂任务。当与 Home Assistant 结合使用时，ESPHome 为创建复杂的家庭自动化显示屏和控制器提供了强大的平台。

让我们探索如何设置并充分利用这个多功能显示屏。

## 入门指南

在本文的教程内容开始之前，您可能需要准备以下硬件。

### 所需材料

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
      <th>Home Assistant Green</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/145.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/146.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Home Assistant Green 是自动化家居最简单、最注重隐私的方式。它提供轻松的设置，让您只需一个系统就能控制所有智能设备，所有数据默认本地存储。该板受益于蓬勃发展的 Home Assistant 生态系统，并将通过开源每月得到改进。

我们建议在本教程中使用 Home Assistant Green 作为 Home Assistant 主机，或者您可以使用任何带有 Supervisor 的 Home Assistant 主机。

:::tip 安装 Home Assistant
我们还为一些 Seeed Studio 产品编写了如何安装 Home Assistant 的教程，请参考它们。

- **[在 ODYSSEY-X86 上开始使用 Home Assistant](https://wiki.seeedstudio.com/cn/ODYSSEY-X86-Home-Assistant/)**
- **[在 reTerminal 上开始使用 Home Assistant](https://wiki.seeedstudio.com/cn/reTerminal_Home_Assistant/)**
- **[在 LinkStar H68K/reRouter CM4 上开始使用 Home Assistant](https://wiki.seeedstudio.com/cn/h68k-ha-esphome/)**

如果您没有使用 Seeed Studio 产品，您也可以在 Home Assistant 官方网站上查看并学习如何为其他产品安装 Home Assistant。

- **[Home Assistant 安装](https://www.home-assistant.io/installation/)**
:::

### 步骤 1. 安装 ESPHome

:::note
如果您已经安装了 ESPHome，可以跳过此步骤。
:::

转到 **Settings** -> **Add-ons** -> **ADD-ON STORE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/28.png" style={{width:1000, height:'auto'}}/></div>

输入搜索词 **ESPHome**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/29.png" style={{width:1000, height:'auto'}}/></div>

点击 **INSTALL** 和 **START**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/30.png" style={{width:1000, height:'auto'}}/></div>

:::tip
如果您在附加组件商店中找不到 ESPHome，请确保您使用的是支持附加组件的 Home Assistant 安装（如 Home Assistant OS 或监督安装）。对于其他安装类型（如 Home Assistant Container），您可能需要使用 Docker 独立运行 ESPHome Device Builder。有关更多详细信息，请参阅 [官方 ESPHome 文档](https://esphome.io/guides/getting_started_hassio)。
:::

### 步骤 2. 添加新设备

转到 ESPHome 并点击 **NEW DEVICE**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/31.png" style={{width:1000, height:'auto'}}/></div>

给设备起一个您喜欢的名称，选择 **ESP32-S3** 作为芯片类型，然后点击 **SKIP**。

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', marginLeft:'10%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/32.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/34.png" style={{width:'100%', height:'auto'}}/></div>
</div>

创建新设备后，点击 **EDIT**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/35.png" style={{width:1000, height:'auto'}}/></div>

<!-- Inside the default generated code, the framework of esp32 may be `esp-idf`, which we need to change to `arduino`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/esphome_arduino.png" style={{width:600, height:'auto'}}/></div> -->

### 步骤 3. 安装固件

这是一个非常基本的示例，将在显示屏上显示"Hello World!"。

**主要目的是向您展示将固件安装到设备的不同方法。**

您可以通过复制下面的代码并将其粘贴到 Yaml 文件中 `captive_portal` 代码行之后来使用此示例。

<Tabs>
<TabItem value="For E1001" label="适用于 E1001" default>

```yaml
# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2 # You can use 7.50inv2alt when you draw complex info and it display not good.
    cs_pin: GPIO10
    dc_pin: GPIO11
    reset_pin:
      number: GPIO12
      inverted: false
    busy_pin:
      number: GPIO13
      inverted: true
    update_interval: 300s
    lambda: |-
      it.print(0, 0, id(myFont), "Hello World!");
```

</TabItem>
<TabItem value="For E1002" label="适用于 E1002">

```yaml

# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    model: Seeed-reTerminal-E1002 #Please update your ESPHome version to 2025.11.1 above
    update_interval: 300s
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      # const auto RED     = Color(255, 0,   0,   0);
      # const auto GREEN   = Color(0,   255, 0,   0);
      # const auto BLUE    = Color(0,   0,   255, 0);
      # const auto YELLOW  = Color(255, 255, 0,   0);
      it.print(0, 0, id(myFont), BLACK, "Hello World!");
```

</TabItem>
</Tabs>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/36.png" style={{width:1000, height:'auto'}}/></div>

点击 **INSTALL** 将代码安装到设备上，您将看到以下图像。

<Tabs>
<TabItem value='通过浏览器安装'>

:::tip
如果您的 Home Assistant 主机（Raspberry PI/Green/Yellow 等）距离您较远，我们建议使用此方法。您可以使用手边的计算机进行安装。
:::

首先，您需要点击 **Manual download** 下载编译好的固件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/62.png" style={{width:500, height:'auto'}}/></div>

打开这个网站，我们将在此上传固件到电子纸面板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/63.png" style={{width:800, height:'auto'}}/></div>

返回 ESPHome 下载固件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/64.png" style={{width:800, height:'auto'}}/></div>

选择 Factory format。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/65.png" style={{width:500, height:'auto'}}/></div>

使用 USB 线缆**将电子纸面板连接到您的计算机**并点击 **CONNECT**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/66.png" style={{width:800, height:'auto'}}/></div>

选择 usbmodemxxx（Windows 是 COMxxx）并点击连接。[遇到问题？点击这里。](#Q4)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/67.png" style={{width:800, height:'auto'}}/></div>

点击 **INSTALL** 并选择您刚刚下载的固件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/69.png" style={{width:500, height:'auto'}}/></div>

稍等片刻，您将在显示屏上看到 'Hello world!' ～

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/37.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>

<TabItem value='通过主机安装'>

:::tip
如果您的 Home Assistant 主机（Raspberry PI/Green/Yellow 等）就在附近，我们建议使用此方法，因为它更简单。
:::

在将代码安装到设备之前，您需要使用 USB 线缆**将此设备连接到运行 Home Assistant 的 Raspberry Pi 或 HA Green（Yellow）等设备**。

按照图像中的选项点击将代码安装到设备。[在深度睡眠模式下未找到端口？](#port)

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/6.png" style={{width:'70%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/7.png" style={{width:'100%', height:'auto'}}/></div>
</div>

稍等片刻，您将看到如下图所示的反馈。这意味着代码正在成功运行。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/37.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>

<TabItem value='通过 Wi-Fi 安装'>

:::tip
这是最简单的方法，但前提是在第一次安装程序时，您应该首先使用左侧的方法将程序上传到电子纸面板。之后，您可以通过 wifi 上传。另外，请确保您的 YAML 配置包含正确配置的 `ota` 和 `api` 部分以及有效的加密密钥，以便此方法正常工作。
:::

使用这种方法，您无需将电子纸面板连接到任何设备，只需确保它在线即可。

点击选项，然后固件将自动安装到电子纸面板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/72.png" style={{width:500, height:'auto'}}/></div>

稍等片刻，您将看到如下图所示的反馈。如果失败，可能是由于信号较弱。请将设备移近您的路由器。[遇到问题？点击这里。](#Q4)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/37.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>
</Tabs>

## ESPHome 绘图基础

### 绘制简单图形

此示例 YAML 代码为 ESPHome 项目配置了 SPI 接口和 reTerminal E 系列电子纸显示屏。`lambda` 部分包含在屏幕上渲染简单形状的绘图命令：

- 两个矩形（一个位于位置 (10, 10)，大小为 100x50，另一个位于 (150, 10)，大小为 50x50）
- 一个位于 (250, 35) 半径为 25 的圆形
- 两个填充矩形（位于 (10, 80) 和 (150, 80)）
- 一个位于 (250, 105) 半径为 25 的填充圆形

您可以通过复制下面的代码并将其粘贴到 Yaml 文件中的 `captive_portal` 代码行之后来使用此示例。

<Tabs>
<TabItem value="For E1001" label="适用于 E1001" default>

```yaml
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2 # You can use 7.50inv2alt when you draw complex info and it display not good.
    cs_pin: GPIO10
    dc_pin: GPIO11
    reset_pin:
      number: GPIO12
      inverted: false
    busy_pin:
      number: GPIO13
      inverted: true
    update_interval: 300s
    lambda: |-
      it.rectangle(10, 10, 100, 50);
      it.rectangle(150, 10, 50, 50);
      it.circle(250, 35, 25);
      it.filled_rectangle(10, 80, 100, 50);
      it.filled_rectangle(150, 80, 50, 50);
      it.filled_circle(250, 105, 25);
```

当您看到如下图所示的反馈时，表示代码正在成功运行。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/38.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="For E1002" label="适用于 E1002">

```yaml

# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    model: Seeed-reTerminal-E1002 #Please update your ESPHome version to 2025.11.1 above
    update_interval: 300s
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      const auto RED     = Color(255, 0,   0,   0);
      const auto GREEN   = Color(0,   255, 0,   0);
      const auto BLUE    = Color(0,   0,   255, 0);
      const auto YELLOW  = Color(255, 255, 0,   0);
      const auto WHITE   = Color(255, 255, 255, 0);

      it.rectangle(10, 10, 100, 50, BLACK);
      it.rectangle(150, 10, 50, 50, RED);
      it.circle(250, 35, 25, GREEN);
      it.filled_rectangle(10, 80, 100, 50, BLUE);
      it.filled_rectangle(150, 80, 50, 50, YELLOW);
      it.filled_circle(250, 105, 25, WHITE);
```

当您看到如下图所示的反馈时，表示代码正在成功运行。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/144.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>
</Tabs>

由于篇幅限制，我们不会过多详述其他图案的绘制方法和原理，如有需要，建议读者阅读 [ESPHome 这部分的详细示例](https://esphome.io/components/display/)。

### 从 Home Assistant 获取值用于显示

要在您的 reTerminal E 系列电子纸显示设备上显示天气数据，您需要从 Home Assistant 访问温度、天气状况和风速数据。Open-Meteo 集成提供可通过开发者工具访问的可靠天气数据。

#### 安装 Open-Meteo 集成

步骤 1. 打开您的 Home Assistant 仪表板并导航到 **Settings** → **Devices & Services**。

步骤 2. 点击右下角的 **Add Integration** 按钮。

步骤 3. 搜索 "Open-Meteo" 并从列表中选择它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/esphome_weather.png" style={{width:800, height:'auto'}}/></div>

步骤 4. 按照配置向导设置您的位置和首选单位。

步骤 5. 安装完成后，Open-Meteo 集成将在您的 Home Assistant 实例中创建多个与天气相关的实体。

#### 在开发者工具中访问天气数据

安装 Open-Meteo 集成后，您可以通过开发者工具访问天气数据：

步骤 1. 在您的 Home Assistant 仪表板中，导航到 **Developer Tools** → **States**。

步骤 2. 在过滤框中，输入 `weather` 以查找主要天气实体。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/39.png" style={{width:1000, height:'auto'}}/></div>

步骤 3. 点击实体以查看所有可用属性。关键天气属性包括：

- `temperature`: 当前温度（以您配置的单位显示）
- `wind_bearing`: 风向
- `wind_speed`: 风速

#### 在 ESPHome 中使用天气数据

要在您的 reTerminal E 系列的 ESPHome 配置中使用这些天气数据，您需要在 ESPHome YAML 配置中设置 Home Assistant API 连接：

```yaml
# Example ESPHome configuration to retrieve weather data
# Get info from HA, as string format
text_sensor:
  - platform: homeassistant
    entity_id: weather.home
    id: myWeather
    internal: true
  - platform: homeassistant
    entity_id: weather.home
    id: myTemperature
    attribute: "temperature"
    internal: true

# Get info from HA, as float format
sensor:
  - platform: homeassistant
    entity_id: weather.home
    id: myWindBearing
    attribute: "wind_bearing"
    internal: true
```

此配置在您的 ESPHome 设备中创建传感器实体，从 Home Assistant 天气集成中提取数据。然后您可以使用这些传感器来更新您的 reTerminal E 系列电子纸显示屏，显示当前天气信息。

:::tip
对于预报数据，您需要使用包含未来几天预测值的 `weather.open_meteo_forecast` 实体。
:::

最后，添加显示部分的代码以使用上述这些值。完整代码如下：

<Tabs>
<TabItem value="For E1001" label="适用于 E1001" default>

```yaml
# Example ESPHome configuration to retrieve weather data
# Get info from HA, as string format
text_sensor:
  - platform: homeassistant
    entity_id: weather.home
    id: myWeather
    internal: true
  - platform: homeassistant
    entity_id: weather.home
    id: myTemperature
    attribute: "temperature"
    internal: true

# Get info from HA, as float format
sensor:
  - platform: homeassistant
    entity_id: weather.home
    id: myWindBearing
    attribute: "wind_bearing"
    internal: true

font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2 # You can use 7.50inv2alt when you draw complex info and it display not good.
    cs_pin: GPIO10
    dc_pin: GPIO11
    reset_pin:
      number: GPIO12
      inverted: false
    busy_pin:
      number: GPIO13
      inverted: true
    update_interval: 300s
    lambda: |-
      //print info in log
      ESP_LOGD("epaper", "weather: %s", id(myWeather).state.c_str());
      ESP_LOGD("epaper", "temperature: %s", id(myTemperature).state.c_str());
      ESP_LOGD("epaper", "pressure: %.1f", id(myWindBearing).state);
      //display info in epaper screen
      it.printf(100, 100, id(myFont), "%s", id(myWeather).state.c_str());
      it.printf(100, 150, id(myFont), "%s", id(myTemperature).state.c_str());
      it.printf(100, 200, id(myFont), "%.1f", id(myWindBearing).state);
```

</TabItem>
<TabItem value="For E1002" label="适用于 E1002">

```yaml

# Example ESPHome configuration to retrieve weather data
# Get info from HA, as string format
text_sensor:
  - platform: homeassistant
    entity_id: weather.home
    id: myWeather
    internal: true
  - platform: homeassistant
    entity_id: weather.home
    id: myTemperature
    attribute: "temperature"
    internal: true

# Get info from HA, as float format
sensor:
  - platform: homeassistant
    entity_id: weather.home
    id: myWindBearing
    attribute: "wind_bearing"
    internal: true

font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    model: Seeed-reTerminal-E1002 #Please update your ESPHome version to 2025.11.1 above
    update_interval: 300s
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      // const auto RED     = Color(255, 0,   0,   0);
      // const auto GREEN   = Color(0,   255, 0,   0);
      // const auto BLUE    = Color(0,   0,   255, 0);
      // const auto YELLOW  = Color(255, 255, 0,   0);

      //print info in log
      ESP_LOGD("epaper", "weather: %s", id(myWeather).state.c_str());
      ESP_LOGD("epaper", "temperature: %s", id(myTemperature).state.c_str());
      ESP_LOGD("epaper", "pressure: %.1f", id(myWindBearing).state);
      //display info in epaper screen
      it.printf(100, 100, id(myFont), BLACK, "%s", id(myWeather).state.c_str());
      it.printf(100, 150, id(myFont), BLACK, "%s", id(myTemperature).state.c_str());
      it.printf(100, 200, id(myFont), BLACK, "%.1f", id(myWindBearing).state);
```

</TabItem>
</Tabs>

编译上述代码并上传到您的设备后，您可能首先会在屏幕上看到 **NaN** 显示，请不要担心，这是正常的。这是因为设备尚未添加到 Home Assistant 环境中，所以 reTerminal 还无法获取 Home Assistant 数据。我们只需要按照以下步骤添加设备即可。

#### 将 reTerminal E 系列电子纸显示屏添加到 Home Assistant

步骤 1. 刷写设备后，返回 Home Assistant 并导航到 **Settings → Devices & Services**。

步骤 3. Home Assistant 应该会通过 mDNS 自动发现您的 reTerminal E 系列电子纸显示屏设备。如果它出现在已发现设备部分，请点击 Configure 来添加它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/41.png" style={{width:1000, height:'auto'}}/></div>

步骤 4. 如果设备未自动发现，请点击 Add Integration 并搜索 "ESPHome"。

步骤 5. 输入您的 reTerminal E 系列电子纸显示屏设备的 IP 地址，如果您设置了 API 加密密钥，也请输入。

步骤 6. 连接后，您的 reTerminal E 系列电子纸显示屏将作为设备出现在 Home Assistant 中，其所有传感器和组件都可用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/40.jpg" style={{width:600, height:'auto'}}/></div>

:::note
程序从烧录完成到最终显示可能需要 2~3 分钟。
:::

以下是增强版演示 3 内容，具有改进的格式、图像放置和附加描述：

### 绘制 TrueType 字体

此示例演示如何使用 TrueType 字体在您的 reTerminal E 系列电子纸显示屏上显示自定义图标。Material Design Icons 提供了大量适合电子纸显示屏的可缩放符号。

#### 安装所需工具

步骤 1. 首先，我们需要安装 Studio Code Server 插件来管理文件。导航到 Home Assistant 插件商店，搜索 **Studio Code Server** 并点击它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/17.png" style={{width:1000, height:'auto'}}/></div>

步骤 2. 点击 **INSTALL** 并等待安装完成。安装完成后，点击 **START** 启动编辑器。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/18.png" style={{width:800, height:'auto'}}/></div>

#### 设置图标字体

步骤 3. 在您的 ESPHome 配置目录中创建一个名为 **fonts** 的新文件夹。此文件夹将存储显示图标所需的 TrueType 字体文件。

步骤 4. 点击下面的按钮下载 Material Design Icons 字体文件并解压内容。

<div align="center">
<a href="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/font_ttf.zip" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>下载 Material Design Icons 字体</button></p>
</a>
</div>

步骤 5. 将下载的字体文件（`materialdesignicons-webfont.ttf`）上传到您之前创建的 fonts 文件夹中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/19.png" style={{width:800, height:'auto'}}/></div>

#### 为图标配置 ESPHome

步骤 6. 在 `captive_portal` 部分之后，将以下代码添加到您的 ESPHome 配置文件中。此代码定义了两种图标字体大小，并配置显示屏显示天气图标。

<Tabs>
<TabItem value="For E1001" label="适用于 E1001" default>

```yaml
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
    model: 7.50inv2 # You can use 7.50inv2alt when you draw complex info and it display not good.
    cs_pin: GPIO10
    dc_pin: GPIO11
    reset_pin:
      number: GPIO12
      inverted: false
    busy_pin:
      number: GPIO13
      inverted: true
    update_interval: 300s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```

</TabItem>
<TabItem value="For E1002" label="适用于 E1002">

```yaml

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
    model: Seeed-reTerminal-E1002 #Please update your ESPHome version to 2025.11.1 above
    update_interval: 300s
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      const auto RED     = Color(255, 0,   0,   0);
      const auto GREEN   = Color(0,   255, 0,   0);
      const auto BLUE    = Color(0,   0,   255, 0);
      const auto YELLOW  = Color(255, 255, 0,   0);

      it.printf(100, 200, id(font_mdi_medium), RED, TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), GREEN, TextAlign::CENTER, "\U000F0592");
```

</TabItem>
</Tabs>

:::note

1. `glyphs` 部分定义了从字体文件中加载哪些图标。仅加载您需要的图标可以节省设备内存。

2. 程序从烧录完成到最终显示可能需要 2~3 分钟。

:::

步骤 7. 保存您的配置并将其上传到您的 reTerminal E 系列。当您看到如下图所示的反馈时，表示代码运行成功。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/42.jpg" style={{width:600, height:'auto'}}/></div>

#### 使用不同图标进行自定义

Material Design Icons 库包含数千个可在项目中使用的图标。以下是查找和使用不同图标的方法：

步骤 1. 点击下方按钮访问 Material Design Icons 网站。

<div align="center">
<a href="https://pictogrammers.com/library/mdi/" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>浏览 Material Design Icons</button></p>
</a>
</div>

步骤 2. 搜索您想在项目中使用的图标。您可以按类别浏览或使用搜索功能。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/41.png" style={{width:800, height:'auto'}}/></div>

步骤 3. 找到您喜欢的图标后，点击它查看详细信息。查找 Unicode 值，格式为 `F0595`。

步骤 4. 通过以下方式将 Unicode 值添加到您的 ESPHome 配置中：

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

步骤 5. 保存更新的配置并将其上传到您的设备以查看新图标。

:::tip
对于天气仪表板，考虑使用 `F0590`（晴天）、`F0591`（多云）、`F0593`（雨天）和 `F059E`（有风）等图标。
:::

通过将这些图标与我们之前设置的 Home Assistant 天气数据相结合，您可以创建一个动态天气显示，使用适当的图标显示当前条件。

### 显示自定义图像

此示例演示如何在您的 reTerminal E 系列 ePaper Display 电子纸显示屏上显示自定义图像。您可以使用此功能显示徽标、图标或任何增强仪表板体验的图形。

#### 准备工作

步骤 1. 确保您已在 Home Assistant 中安装了 **Studio Code Server** 插件。如果您尚未安装，请按照前面示例中的说明进行操作。

步骤 2. 在您的 ESPHome 配置目录中创建一个名为 **image** 的新文件夹。此文件夹将存储您要显示的图像文件。

```
config/
└── esphome/
    ├── your_device.yaml
    └── image/         <- Create this folder
```

#### 添加图像

步骤 3. 下载示例图像以测试功能。您可以使用下面提供的 WiFi 图标或使用您自己的图像。

<div align="center">
<a href="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/wifi.jpg" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>下载示例 WiFi 图像</button></p>
</a>
</div>

步骤 4. 使用 Studio Code Server 文件管理器将下载的图像上传到您之前创建的 **image** 文件夹。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/20.png" style={{width:800, height:'auto'}}/></div>

:::tip
如果您想显示复杂而美丽的风景图片，最好提前[在我们的网站](https://sensecraft.seeed.cc/hmi/tools/dither)进行图像抖动处理以获得更好的效果。支持 JPG 和 PNG 格式。
:::

#### 配置 ESPHome 进行图像显示

步骤 5. 在 `captive_portal` 部分之后将以下代码添加到您的 ESPHome 配置文件中。此代码定义图像资源并配置显示屏以显示它。

<Tabs>
<TabItem value="For E1001" label="适用于 E1001" default>

```yaml
image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: BINARY                            # Binary works for monochrome, RGB565 works for colorful eink
    resize: 800x480                         # Resize to match display resolution
    invert_alpha: true                      # Invert colors is needed

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2 # You can use 7.50inv2alt when you draw complex info and it display not good.
    cs_pin: GPIO10
    dc_pin: GPIO11
    reset_pin:
      number: GPIO12
      inverted: false
    busy_pin:
      number: GPIO13
      inverted: true
    update_interval: 300s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

</TabItem>
<TabItem value="For E1002" label="适用于 E1002">

:::tip
请将您的 ESPHome 版本更新到 **2025.11.1** 以上。
:::

```yaml


image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: RGB565                            #  Binary works for monochrome, RGB565 works for colorful eink
    resize: 800x480                         # Resize to match display resolution

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    model: Seeed-reTerminal-E1002 #Please update your ESPHome version to 2025.11.1 above
    update_interval: 300s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

</TabItem>
</Tabs>

步骤 6. 保存您的配置并将其上传到您的 reTerminal E 系列。更新完成后，您的电子纸显示屏将显示图像。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/43.jpg" style={{width:600, height:'auto'}}/></div>

#### 高级图像技术

您可以使用以下附加技术增强图像显示：

**定位图像**

要将图像定位在屏幕上的特定坐标：

```yaml
lambda: |-
  // Display image at position (100,50)
  it.image(100, 50, id(myImage));
```

**将图像与文本结合**

您可以在同一屏幕上显示图像和文本：

```yaml
lambda: |-
  // Display image
  it.image(0, 0, id(myImage));

  // Add text below or beside the image
  it.printf(400, 400, id(myFont), TextAlign::CENTER, "WiFi Connected");
```

**使用多个图像**

要在同一屏幕上显示多个图像，请在配置中定义每个图像：

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
请记住，电子纸显示屏的刷新率有限。`update_interval: 300s` 设置意味着您的显示屏只会每 5 分钟刷新一次。根据您的需要调整此值，但请注意频繁刷新可能会缩短电子纸显示屏的使用寿命。
:::

通过将图像与前面示例中涵盖的文本和其他显示元素相结合，您可以在 reTerminal E 系列上创建丰富、信息丰富的仪表板。

## 继续阅读

由于篇幅限制，本文仅涵盖了设备的一些基本用例和绘图示例。我们将在 [reTerminal E 系列 ePaper Display 在 Home Assistant 中的高级 ESPHome 用法](https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_esphome_advanced) 的 Wiki 中更详细地介绍 reTerminal 硬件在 ESPHome 上的使用，您可以继续阅读。

## 常见问题

### Q1：为什么没有数据？

在这种情况下，您应该转到 Settings -> Devices & Services -> Integrations 来**重新配置**设备。没有找到您的 reTerminal？尝试重启 Home Assistant。

<div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/101.png" style={{width:'100%', height:'auto'}}/></div>

### Q2：为什么我无法在 Home Assistant 中获取这些数据？ {#port}

在这种情况下，您应该转到 Settings -> Devices & Services -> Integrations 来**添加**您的设备到 HA。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/41.png" style={{width:1000, height:'auto'}}/></div>

### Q3：reTerminal E 系列 ePaper Display 无法连接到您的计算机？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/68.png" style={{width:600, height:'auto'}}/></div>

尝试多次拔插，或者根据提示安装驱动程序。

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
