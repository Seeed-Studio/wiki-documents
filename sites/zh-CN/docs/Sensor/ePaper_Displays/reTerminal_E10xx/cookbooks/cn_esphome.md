---
description: 适用于 reTerminal E1001 / E1002 / E1003 / E1004 的 ESPHome 显示菜谱——Home Assistant 集成、首个仪表盘、Wi‑Fi 设置、预构建固件 ZIP 以及电子纸绘图示例。
title: ESPHome 菜谱 - 显示基础（reTerminal E 系列）
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.webp
slug: /reterminal_e10xx_with_esphome
aliases:
  - /reterminal_e10xx_esphome
sku: 100017057,100073581
sidebar_position: 3
sidebar_label: ESPHome - 显示
last_update:
  date: 04/28/2026
  author: Citric
createdAt: '2025-07-25'
updatedAt: '2026-05-20'
url: https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_esphome/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ESPHome 菜谱 - 显示基础：reTerminal E 系列

:::tip 首先阅读主 ESPHome 指南
本页是**针对 reTerminal E 系列的 ESPHome 显示菜谱**。通用的样板内容——选择烧录路径、通用 YAML 骨架、连接 Home Assistant——都在 **[使用 ESPHome 工作](/cn/epaper_work_with_esphome)** 中。如果你是第一次在 Seeed 电子纸上使用 ESPHome，建议先快速浏览那一页。关于按键、蜂鸣器、LED、电池、SHT4x 和深度睡眠，请参阅 [I/O、电池和低功耗菜谱](/cn/reterminal_e10xx_with_esphome_advanced)。关于 RTC、microSD 卡检测和麦克风设置，请参阅 [RTC、SD 卡和麦克风菜谱](/cn/reterminal_e10xx_with_esphome_rtc_sd_microphone)。
:::

:::tip 在不搭建开发环境的情况下体验示例
如果你想在搭建开发环境之前，快速预览项目效果或体验基础演示固件，请打开 **[reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)**。你可以选择受支持的 reTerminal E 系列设备，并直接通过浏览器烧录演示固件。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Firmware Flasher 🖱️</font></span></strong>
    </a>
</div><br />
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.jpg" style={{width:700, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/cn/reterminal_e10xx_with_esphome" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong></a>
</div>

## [Home Assistant](https://www.home-assistant.io/) 简介

Home Assistant 是一个功能强大的开源家庭自动化平台，它允许你通过一个统一的界面来控制和监控智能家居设备。它充当智能家居的中央枢纽，使你能够自动化日常流程、监控传感器，并打造更智能的生活空间。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/204.png" style={{width:700, height:'auto'}}/></div>

### 为什么选择 Home Assistant？

- **本地控制**：与许多基于云的解决方案不同，Home Assistant 在你的本地网络上运行，确保数据保持私密，即使没有互联网连接，你的自动化也能继续工作。

- **广泛的设备支持**：Home Assistant 可与成千上万种不同的智能家居设备和服务集成，具有高度的通用性和前瞻性。

- **强大的自动化能力**：可以创建复杂的自动化规则，响应时间、设备状态、传感器读数等各种触发条件。

- **可自定义仪表盘**：你可以自行设计用户界面，展示对你最重要的信息。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 了解更多 🖱️</font></span></strong></a>
</div>

### 为什么要在 Home Assistant 中使用 reTerminal E 系列电子纸显示屏？

reTerminal E 系列电子纸显示屏是 Home Assistant 的绝佳搭档，原因包括：

1. **能效高**：电子纸显示屏只在更新内容时消耗电能，非常适合显示天气预报、日历事件或系统状态等持久信息。

2. **可视性强**：与 LCD 屏不同，电子纸显示屏在任何光照条件下都易于阅读，包括直射阳光，非常适合作为壁挂式家庭控制面板。

3. **电池寿命长**：配合深度睡眠模式，显示屏在一次充电后即可运行数月，同时仍能一眼提供有价值的信息。

4. **灵活集成**：通过 ESPHome，显示屏可以与 Home Assistant 无缝集成，让你以优雅、始终可见的形式展示来自智能家居系统的任意数据。

这些优势使 reTerminal E 系列电子纸显示屏成为为你的 Home Assistant 搭建节能、常亮信息显示屏的理想选择。

### ESPHome 集成

ESPHome 是一个专为 ESP8266/ESP32 设备设计的开源固件创建工具。它允许你使用简单的 YAML 配置文件创建自定义固件，然后将其烧录到设备上。对于 reTerminal E 系列，ESPHome 充当关键的中间件，使设备能够与 Home Assistant 通信。

系统通过将 YAML 配置转换为在 ESP 设备上运行的完整固件来工作。该固件负责处理连接网络、与 Home Assistant 通信以及控制电子纸显示屏等所有复杂任务。结合 Home Assistant，ESPHome 为创建复杂的家庭自动化显示和控制界面提供了一个强大的平台。

下面我们来了解如何进行设置，并充分利用这个多功能显示屏。

## 入门指南

在开始阅读本文的教程内容之前，你可能需要准备好以下硬件。

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
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
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

Home Assistant Green 是自动化家庭的最简单且最注重隐私的方式。它提供了毫不费力的设置流程，让你可以通过一个系统控制所有智能设备，并且所有数据默认都本地存储。该主板受益于蓬勃发展的 Home Assistant 生态系统，并将通过开源社区在每个月持续改进。

我们建议在本教程中使用 Home Assistant Green 作为 Home Assistant 主机，当然你也可以使用任何带 Supervisor 的 Home Assistant 主机。

:::tip 安装 Home Assistant
我们也为部分 Seeed Studio 产品编写了 Home Assistant 的安装教程，请参考以下内容。

- **[在 ODYSSEY-X86 上开始使用 Home Assistant](https://wiki.seeedstudio.com/cn/ODYSSEY-X86-Home-Assistant/)**
- **[在 reTerminal 上开始使用 Home Assistant](https://wiki.seeedstudio.com/cn/reTerminal_Home_Assistant/)**
- **[在 LinkStar H68K/reRouter CM4 上开始使用 Home Assistant](https://wiki.seeedstudio.com/cn/h68k-ha-esphome/)**

如果你没有使用 Seeed Studio 的产品，也可以在 Home Assistant 官方网站上查看并学习其他产品的 Home Assistant 安装方法。

- **[Home Assistant 安装](https://www.home-assistant.io/installation/)**
:::

### 步骤 1. 安装 ESPHome

:::note
如果你已经安装了 ESPHome，可以跳过此步骤。
:::

进入 **Settings** -> **Add-ons** -> **ADD-ON STORE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/28.png" style={{width:1000, height:'auto'}}/></div>

输入搜索词 **ESPHome**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/29.png" style={{width:1000, height:'auto'}}/></div>

点击 **INSTALL** 和 **START**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/30.png" style={{width:1000, height:'auto'}}/></div>

:::tip
如果你在插件商店中找不到 ESPHome，请确保你使用的是支持插件的 Home Assistant 安装方式（例如 Home Assistant OS 或 supervised 安装）。对于其他安装类型（如 Home Assistant Container），你可能需要使用 Docker 独立运行 ESPHome Device Builder。更多详情请参阅 [ESPHome 官方文档](https://esphome.io/guides/getting_started_hassio)。
:::

### 步骤 2. 添加新设备

进入 ESPHome 并点击 **NEW DEVICE**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/31.png" style={{width:1000, height:'auto'}}/></div>

给设备起一个你喜欢的名字，并选择 **ESP32-S3** 作为芯片类型，然后点击 **SKIP**。

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', marginLeft:'10%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/32.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/34.png" style={{width:'100%', height:'auto'}}/></div>
</div>

创建新设备后，点击 **EDIT**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/35.png" style={{width:1000, height:'auto'}}/></div>

<!-- Inside the default generated code, the framework of esp32 may be `esp-idf`, which we need to change to `arduino`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/esphome_arduino.png" style={{width:600, height:'auto'}}/></div> -->

### 步骤 3. 安装固件

这是一个非常基础的示例，会在显示屏上显示 "Hello World!"。

**主要目的是向你展示将固件安装到设备的不同方式。**

你可以通过复制下面的代码，并将其粘贴到 Yaml 文件中 `captive_portal` 代码行之后来使用此示例。

<Tabs>
<TabItem value="For E1001" label="For E1001" default>

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
<TabItem value="For E1002" label="For E1002">

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

点击 **INSTALL** 将代码安装到设备上，你会看到如下图所示的画面。

<Tabs>
<TabItem value='Install through browser'>

:::tip
如果你的 Home Assistant 主机（Raspberry PI/Green/Yellow 等）离你比较远，推荐使用这种方式。你可以使用手边的电脑来安装。
:::

首先，你需要点击 **Manual download** 下载已编译好的固件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/62.png" style={{width:500, height:'auto'}}/></div>

打开这个网站，我们将在这里把固件上传到 ePaper 面板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/63.png" style={{width:800, height:'auto'}}/></div>

回到 ESPHome 下载固件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/64.png" style={{width:800, height:'auto'}}/></div>

选择 Factory 格式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/65.png" style={{width:500, height:'auto'}}/></div>

使用 USB 线 **将 ePaper 面板连接到电脑**，然后点击 **CONNECT**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/66.png" style={{width:800, height:'auto'}}/></div>

选择 usbmodemxxx（Windows 为 COMxxx）并点击 connect。[遇到问题？点击这里。](#Q4)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/67.png" style={{width:800, height:'auto'}}/></div>

点击 **INSTALL** 并选择你刚刚下载的固件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/69.png" style={{width:500, height:'auto'}}/></div>

稍等片刻，你会在显示屏上看到 “Hello world!” ～

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/37.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>

<TabItem value='Install through host'>

:::tip
如果你的 Home Assistant 主机（Raspberry PI/Green/Yellow 等）就在附近，推荐使用这种方式，因为更简单。
:::

在将代码安装到设备之前，你需要使用 USB 线 **将此设备连接到正在运行 Home Assistant 的 Raspberry Pi 或 HA Green(Yellow) 等设备**。

按照下图所示点击相应选项，将代码安装到设备上。[设备处于深度睡眠模式时没有找到端口？](#port)

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/6.png" style={{width:'70%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/7.png" style={{width:'100%', height:'auto'}}/></div>
</div>

稍等片刻，你会看到如下图所示的反馈，这表示代码已成功运行。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/37.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>

<TabItem value='Install through Wi-Fi'>

:::tip
这是最简单的方式，但前提是首次安装程序时，需要先使用左侧的方法将程序上传到 ePaper 面板。之后就可以通过 Wi-Fi 上传。同时，请确保你的 YAML 配置中包含正确配置的 `ota` 和 `api` 部分，并带有有效的加密密钥，否则此方法无法工作。
:::

通过这种方式，你不需要将 ePaper 面板连接到任何设备，只需确保它在线即可。

点击该选项，固件就会自动安装到 ePaper 面板上。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/72.png" style={{width:500, height:'auto'}}/></div>

稍等片刻，你会看到如下图所示的反馈。如果失败，可能是信号较弱，请将设备移近路由器。[遇到问题？点击这里。](#Q4)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/37.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>
</Tabs>

## 在 ESPHome 中进行绘图的基础知识

### 绘制简单图形

这个示例 YAML 代码为 ESPHome 项目配置了 SPI 接口和 reTerminal E 系列 ePaper 显示屏。`lambda` 部分包含在屏幕上绘制简单图形的绘图命令：

- 两个矩形（一个位于 (10, 10)，大小为 100x50，另一个位于 (150, 10)，大小为 50x50）
- 一个圆，中心在 (250, 35)，半径为 25
- 两个填充矩形（位于 (10, 80) 和 (150, 80)）
- 一个填充圆，中心在 (250, 105)，半径为 25

你可以通过复制下面的代码，并将其粘贴到 Yaml 文件中 `captive_portal` 代码行之后来使用此示例。

<Tabs>
<TabItem value="For E1001" label="For E1001" default>

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

当你看到如下图所示的反馈时，就表示代码已成功运行。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/38.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="For E1002" label="For E1002">

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

当你看到如下图所示的反馈时，就表示代码已成功运行。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/144.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>
</Tabs>

由于篇幅限制，我们不会对其他图案的绘制方法和原理做过多展开，如有需要，建议读者阅读 [ESPHome 在这一部分的详细示例](https://esphome.io/components/display/)。

### 从 Home Assistant 获取用于显示的数值

要在 reTerminal E 系列 ePaper 显示设备上显示天气数据，你需要从 Home Assistant 获取温度、天气状况和风速数据。Open-Meteo 集成提供了可靠的天气数据，可以通过 Developer Tools 访问。

#### 安装 Open-Meteo 集成

步骤 1. 打开你的 Home Assistant 仪表板并导航到 **Settings** → **Devices & Services**。

步骤 2. 点击右下角的 **Add Integration** 按钮。

步骤 3. 搜索 "Open-Meteo" 并从列表中选择它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/esphome_weather.png" style={{width:800, height:'auto'}}/></div>

步骤 4. 按照配置向导设置你的位置和首选单位。

步骤 5. 安装完成后，Open-Meteo 集成会在你的 Home Assistant 实例中创建多个与天气相关的实体。

#### 在开发者工具中访问天气数据

安装 Open-Meteo 集成后，你可以通过开发者工具访问天气数据：

步骤 1. 在 Home Assistant 仪表板中，导航到 **Developer Tools** → **States**。

步骤 2. 在过滤框中输入 `weather` 以找到主要的天气实体。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/39.png" style={{width:1000, height:'auto'}}/></div>

步骤 3. 点击该实体以查看所有可用属性。关键的天气属性包括：

- `temperature`: 当前温度（使用你配置的单位）
- `wind_bearing`: 风向
- `wind_speed`: 风速

#### 在 ESPHome 中使用天气数据

要在 reTerminal E 系列的 ESPHome 配置中使用这些天气数据，你需要在 ESPHome YAML 配置中设置 Home Assistant API 连接：

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

此配置会在你的 ESPHome 设备中创建从 Home Assistant 天气集成中获取数据的传感器实体。然后你可以使用这些传感器，将当前天气信息更新到 reTerminal E 系列 ePaper Display 上进行显示。

:::tip
对于预报数据，你需要使用 `weather.open_meteo_forecast` 实体，它包含未来几天的预测值。
:::

最后，添加显示部分的代码以使用上述这些数值。完整代码如下：

<Tabs>
<TabItem value="For E1001" label="For E1001" default>

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
<TabItem value="For E1002" label="For E1002">

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

在编译上述代码并将其上传到你的设备后，你可能会首先在屏幕上看到 **NaN** 显示，请不要担心，这是正常现象。这是因为设备尚未添加到 Home Assistant 环境中，所以 reTerminal 还无法获取 Home Assistant 的数据。我们只需要按照下面的步骤添加设备即可。

#### 将 reTerminal E 系列 ePaper Display 添加到 Home Assistant

步骤 1. 烧录设备完成后，返回 Home Assistant 并导航到 **Settings → Devices & Services**。

步骤 3. Home Assistant 应该会通过 mDNS 自动发现你的 reTerminal E 系列 ePaper Display 设备。如果它出现在已发现设备部分，点击 Configure 进行添加。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/41.png" style={{width:1000, height:'auto'}}/></div>

步骤 4. 如果设备没有被自动发现，点击 Add Integration 并搜索 "ESPHome"。

步骤 5. 输入你的 reTerminal E 系列 ePaper Display 设备的 IP 地址，以及如果你设置了的话，输入 API 加密密钥。

步骤 6. 连接成功后，你的 reTerminal E 系列 ePaper Display 将作为一个设备出现在 Home Assistant 中，其所有传感器和组件都可用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/40.jpg" style={{width:600, height:'auto'}}/></div>

:::note
程序从烧录完成到最终显示可能需要 2~3 分钟。
:::

下面是增强后的 Demo 3 内容，改进了格式、图片位置并增加了说明：

### 绘制 TrueType 字体

本示例演示如何在 reTerminal E 系列 ePaper Display 上使用 TrueType 字体显示自定义图标。Material Design Icons 提供了大量适合电子墨水屏的可缩放符号。

#### 安装所需工具

步骤 1. 首先，我们需要安装 Studio Code Server 插件来管理文件。导航到 Home Assistant 插件商店，搜索 **Studio Code Server** 并点击它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/17.png" style={{width:1000, height:'auto'}}/></div>

步骤 2. 点击 **INSTALL** 并等待安装完成。安装完成后，点击 **START** 启动编辑器。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/18.png" style={{width:800, height:'auto'}}/></div>

#### 设置图标字体

步骤 3. 在你的 ESPHome 配置目录中创建一个名为 **fonts** 的新文件夹。该文件夹将存储用于显示图标的 TrueType 字体文件。

步骤 4. 点击下面的按钮下载 Material Design Icons 字体文件，并解压内容。

<div align="center">
<a href="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/font_ttf.zip" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>下载 Material Design Icons 字体</button></p>
</a>
</div>

步骤 5. 将下载的字体文件（`materialdesignicons-webfont.ttf`）上传到你之前创建的 fonts 文件夹中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/19.png" style={{width:800, height:'auto'}}/></div>

#### 为图标配置 ESPHome

步骤 6. 在 `captive_portal` 部分之后，将以下代码添加到你的 ESPHome 配置文件中。此代码定义了两种图标字体大小，并配置显示屏以显示天气图标。

<Tabs>
<TabItem value="For E1001" label="For E1001" default>

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

1. `glyphs` 部分定义了要从字体文件中加载哪些图标。只加载你需要的图标可以节省设备内存。

2. 程序从烧录完成到最终显示可能需要 2~3 分钟。

:::

步骤 7. 保存你的配置并将其上传到 reTerminal E 系列。当你看到类似下图的反馈时，表示代码运行成功。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/42.jpg" style={{width:600, height:'auto'}}/></div>

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

步骤 3. 找到喜欢的图标后，点击它查看详细信息。找到 Unicode 值，其格式类似 `F0595`。

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

然后在显示 lambda 中：

```yaml
lambda: |-
  it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0123");
```

步骤 5. 保存更新后的配置并上传到你的设备，即可看到新图标。

:::tip
对于天气仪表盘，可以考虑使用 `F0590`（晴天）、`F0591`（多云）、`F0593`（雨天）和 `F059E`（有风）等图标。
:::

通过将这些图标与我们之前设置的来自 Home Assistant 的天气数据结合，你可以创建一个动态天气显示，用合适的图标展示当前天气状况。

### 显示自定义图片

本示例演示如何在 reTerminal E 系列 ePaper Display 电子纸显示屏上显示自定义图片。你可以使用此功能显示 Logo、图标或任何能增强仪表盘体验的图形。

#### 准备工作

步骤 1. 确保你在 Home Assistant 中安装了 **Studio Code Server** 插件。如果尚未安装，请参考前面示例中的说明进行安装。

步骤 2. 在 ESPHome 配置目录中创建一个名为 **image** 的新文件夹。此文件夹将存储你想要显示的图片文件。

```
config/
└── esphome/
    ├── your_device.yaml
    └── image/         <- Create this folder
```

#### 添加图片

步骤 3. 下载一个示例图片来测试功能。你可以使用下方提供的 WiFi 图标，也可以使用你自己的图片。

<div align="center">
<a href="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/wifi.jpg" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>下载示例 WiFi 图片</button></p>
</a>
</div>

步骤 4. 使用 Studio Code Server 文件管理器，将下载的图片上传到之前创建的 **image** 文件夹中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/20.png" style={{width:800, height:'auto'}}/></div>

:::tip
如果你想显示复杂且精美的风景图片，最好提前在[我们的网站](https://sensecraft.seeed.cc/hmi/tools/dither)上进行图像抖动处理，以获得更好的效果。JPG 和 PNG 格式均受支持。
:::

#### 为图片显示配置 ESPHome

步骤 5. 在 ESPHome 配置文件的 `captive_portal` 部分之后添加以下代码。此代码定义图片资源并配置显示以展示该图片。

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
请将 ESPHome 版本更新到 **2025.11.1** 及以上。
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

步骤 6. 保存你的配置并将其上传到 reTerminal E 系列。更新完成后，你的电子纸显示屏将显示该图片。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/43.jpg" style={{width:600, height:'auto'}}/></div>

#### 高级图片技巧

你可以通过以下附加技巧增强图片显示效果：

**图片定位**

要将图片定位到屏幕上的特定坐标：

```yaml
lambda: |-
  // Display image at position (100,50)
  it.image(100, 50, id(myImage));
```

**将图片与文本结合**

你可以在同一屏幕上同时显示图片和文本：

```yaml
lambda: |-
  // Display image
  it.image(0, 0, id(myImage));

  // Add text below or beside the image
  it.printf(400, 400, id(myFont), TextAlign::CENTER, "WiFi Connected");
```

**使用多张图片**

要在同一屏幕上显示多张图片，请在配置中定义每一张图片：

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
请记住，电子纸显示屏的刷新率有限。`update_interval: 300s` 设置意味着你的显示屏每 5 分钟才会刷新一次。可根据需要调整此值，但要注意过于频繁的刷新会缩短电子纸显示屏的使用寿命。
:::

通过将图片与文本以及前面示例中介绍的其他显示元素结合，你可以在 reTerminal E 系列上创建丰富且信息量大的仪表盘。

## 继续阅读

本文重点介绍了连接显示屏并在 ePaper 屏幕上绘制内容。当你想使用其余板载硬件时，请继续阅读以下 ESPHome 菜谱：

- **[ESPHome 菜谱：按键、蜂鸣器、LED、电池与低功耗](/cn/reterminal_e10xx_with_esphome_advanced)** - 用户按键、蜂鸣器反馈、板载 LED、电池监测、SHT4x 传感器、深度睡眠和多页面仪表盘。
- **[ESPHome 菜谱：RTC、SD 卡与麦克风](/cn/reterminal_e10xx_with_esphome_rtc_sd_microphone)** - PCF8563 RTC 时间同步、microSD 卡电源/检测引脚以及板载 PDM 麦克风初始化。

## 常见问题

### 问题 1：为什么没有数据？

在这种情况下，你应该前往 Settings -> Devices & Services -> Integrations 中对设备进行 **RECONGFIGURE**。还没有找到你的 reTerminal？尝试重启 Home Assistant。

<div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/101.png" style={{width:'100%', height:'auto'}}/></div>

### Q2：为什么我在 Home Assistant 中无法获取这些数据？ {#port}

在这种情况下，你需要前往 Settings -> Devices & Services -> Integrations，将你的设备**添加**到 HA 中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/41.png" style={{width:1000, height:'auto'}}/></div>

### Q3：reTerminal E 系列电子纸显示屏无法连接到你的电脑？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/68.png" style={{width:600, height:'auto'}}/></div>

尝试多次拔插，或者根据提示安装驱动程序。

### Q4：为什么通过 USB 没有串口日志？

reTerminal E 系列在 UART0 上使用 CH340K USB 转 UART 转换芯片。请在你的 YAML 中保持以下日志记录器设置：

```yaml
logger:
  hardware_uart: UART0
```

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
