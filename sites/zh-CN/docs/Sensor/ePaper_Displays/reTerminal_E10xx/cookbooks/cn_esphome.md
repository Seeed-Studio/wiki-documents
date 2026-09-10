---
description: 适用于 reTerminal E1001 / E1002 / E1003 / E1004 的 ESPHome 显示 cookbook——Home Assistant 集成、首个仪表盘、Wi-Fi 设置、预构建固件 ZIP，以及电子纸绘图示例。
title: ESPHome Cookbook - 显示基础（reTerminal E 系列）
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.webp
slug: /reterminal_e10xx_with_esphome
aliases:
  - /reterminal_e10xx_esphome
sku: 100017057,100073581
sidebar_position: 3
sidebar_label: ESPHome - 显示
last_update:
  date: 08/05/2026
  author: Citric
createdAt: '2025-07-25'
updatedAt: '2026-08-05'
url: https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_esphome/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ESPHome Cookbook - 显示基础：reTerminal E 系列

:::tip 请先阅读主 ESPHome 指南
本页是**针对 reTerminal E 系列的 ESPHome 显示 cookbook**。通用的样板内容——选择烧录路径、通用 YAML 骨架、连接 Home Assistant——都在 **[使用 ESPHome 工作](/cn/epaper_work_with_esphome)** 中。如果你是第一次在 Seeed 电子纸上使用 ESPHome，建议先快速浏览那一页。关于按键、蜂鸣器、LED、电池、SHT4x 和深度睡眠，请参阅 [I/O、电池、触摸和低功耗 cookbook](/cn/reterminal_e10xx_with_esphome_advanced)。关于 RTC、microSD 卡检测和麦克风设置，请参阅 [RTC、SD 卡和麦克风 cookbook](/cn/reterminal_e10xx_with_esphome_rtc_sd_microphone)。
:::

:::tip 在浏览器中生成 ESPHome YAML 或烧录演示固件
想要一个现成的 ESPHome 配置，而不是手动拼装每一个引脚？打开 **[reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)**，选择 **ESPHome** 卡片，挑选你的设备（E1001 / E1002 / E1003 / E1004），然后勾选你需要的板载功能——显示、按键、电池、传感器、RTC、SD 卡、麦克风、触摸、深度睡眠等。Hub 会生成与你设备匹配的 ESPHome YAML，你可以复制或下载到自己的 ESPHome 仪表盘中。

同一个 Hub 也可以直接在浏览器中烧录演示固件（桌面版 Chrome 或 Edge）。关于通用的 ESPHome 工作流程，请参阅 **[使用 ESPHome 工作](/cn/epaper_work_with_esphome)**。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Firmware Hub 🖱️</font></span></strong>
    </a>
</div><br />
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.jpg" style={{width:700, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/cn/reterminal_e10xx_with_esphome" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong></a>
</div>

## [Home Assistant](https://www.home-assistant.io/) 简介

Home Assistant 是一个功能强大的开源家庭自动化平台，它允许你通过一个统一的界面来控制和监控智能家居设备。它充当智能家居的中央枢纽，使你能够自动化日常流程、监控传感器，并打造更智能的居住空间。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/204.png" style={{width:700, height:'auto'}}/></div>

### 为什么选择 Home Assistant？

- **本地控制**：与许多基于云的解决方案不同，Home Assistant 在你的本地网络上运行，确保数据保持私密，即使没有互联网连接，你的自动化也能继续工作。

- **广泛的设备支持**：Home Assistant 可与成千上万种不同的智能家居设备和服务集成，具有极高的通用性和前瞻性。

- **强大的自动化能力**：可以创建复杂的自动化规则，响应时间、设备状态、传感器读数等各种触发条件。

- **可自定义仪表盘**：你可以自行设计用户界面，展示对你最重要的信息。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 了解更多 🖱️</font></span></strong></a>
</div>

### 为什么要在 Home Assistant 中使用 reTerminal E 系列电子纸显示屏？

reTerminal E 系列电子纸显示屏是 Home Assistant 的绝佳搭档，原因包括：

1. **能效高**：电子纸显示屏只在更新内容时才消耗电能，非常适合显示天气预报、日历事件或系统状态等持久信息。

2. **可视性好**：与 LCD 屏不同，电子纸在任何光照条件下都易于阅读，包括直射阳光，非常适合作为壁挂式家庭控制面板。

3. **电池寿命长**：配合深度睡眠模式，显示屏在一次充电后可以运行数月，同时仍能一眼提供有价值的信息。

4. **集成灵活**：通过 ESPHome，显示屏可以与 Home Assistant 无缝集成，让你以优雅、始终可见的形式展示来自智能家居系统的任意数据。

这些优势使 reTerminal E 系列电子纸显示屏成为为 Home Assistant 搭建节能、常亮信息面板的理想选择。

### ESPHome 集成

ESPHome 是一个专为 ESP8266/ESP32 设备设计的开源固件创建工具。它允许你使用简单的 YAML 配置文件来创建自定义固件，然后将其烧录到设备上。对于 reTerminal E 系列，ESPHome 充当关键的中间件，使设备能够与 Home Assistant 通信。

系统通过将你的 YAML 配置转换为在 ESP 设备上运行的完整固件来工作。该固件负责处理连接网络、与 Home Assistant 通信以及控制电子纸显示屏等所有复杂任务。与 Home Assistant 结合使用时，ESPHome 为创建复杂的家庭自动化显示和控制界面提供了一个强大的平台。

下面我们来看看如何进行设置，并充分利用这块多功能显示屏。

## 入门指南

在开始阅读本文的教程内容之前，你可能需要先准备好以下硬件。

### 所需材料

:::tip 支持的型号
本 cookbook 涵盖 **reTerminal E1001、E1002、E1003 和 E1004**。在每个示例中，请为你的设备选择对应的选项卡。E1003 和 E1004 需要 **ESPHome 2026.7.0 或更高版本**。
:::

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/145.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/146.jpg" style={{width:250, height:'auto'}}/></div></td>
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
    </tr>
  </table>
</div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1003</th>
      <th>reTerminal E1004</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2-reterminal-e1004-epaper-display.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1004-p-6692.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>Home Assistant Green</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Home Assistant Green 是自动化家庭的最简单、最注重隐私的方式。它提供了极其简便的设置流程，让你可以通过一个系统控制所有智能设备，且所有数据默认都本地存储。该主板受益于蓬勃发展的 Home Assistant 生态系统，并将通过开源社区在每个月持续改进。

我们建议在本教程中使用 Home Assistant Green 作为 Home Assistant 主机，当然你也可以使用任何带 Supervisor 的 Home Assistant 主机。

### 生成你的第一个 ESPHome YAML（推荐）

在复制下面的 cookbook 代码片段之前，你可以先在一个地方构建完整且与设备匹配的配置：

**步骤 1.** 在桌面版 Chrome 或 Edge 中打开 **[reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)**。

**步骤 2.** 选择 **ESPHome** 平台卡片，然后选择你的 reTerminal 型号（E1001 / E1002 / E1003 / E1004）。

**步骤 3.** 在设置步骤中，勾选你设备上可用的功能——例如显示屏、按键、蜂鸣器、LED、电池、SHT4x、RTC、microSD、麦克风、触摸（E1003）或深度睡眠。

**步骤 4.** 生成 YAML，然后使用 **Copy to clipboard** 或 **Download file** 并将其导入到你的 ESPHome 仪表盘中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/257.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Open Firmware Hub 🖱️</font></span></strong>
    </a>
</div><br />

:::tip
Firmware Hub 会为你填好开发板、总线和外设引脚。当你想要一步步学习每个绘图或显示示例，或者想自定义生成的 YAML 时，请使用本 cookbook。完整的共享工作流程记录在 **[Work with ESPHome](/cn/epaper_work_with_esphome)** 中。
:::

:::tip install Home Assistant
我们也编写了如何为部分 Seeed Studio 产品安装 Home Assistant 的教程，请参考以下内容。

- **[在 ODYSSEY-X86 上开始使用 Home Assistant](https://wiki.seeedstudio.com/cn/ODYSSEY-X86-Home-Assistant/)**
- **[在 reTerminal 上开始使用 Home Assistant](https://wiki.seeedstudio.com/cn/reTerminal_Home_Assistant/)**
- **[在 LinkStar H68K/reRouter CM4 上开始使用 Home Assistant](https://wiki.seeedstudio.com/cn/h68k-ha-esphome/)**

如果你没有使用 Seeed Studio 产品，也可以在 Home Assistant 官方网站上查看并学习如何为其他产品安装 Home Assistant。

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
如果你在插件商店中找不到 ESPHome，请确保你使用的是支持插件的 Home Assistant 安装方式（例如 Home Assistant OS 或 supervised 安装）。对于其他安装类型（例如 Home Assistant Container），你可能需要使用 Docker 独立运行 ESPHome Device Builder。更多详情请参阅 [官方 ESPHome 文档](https://esphome.io/guides/getting_started_hassio)。
:::

### 步骤 2. 添加新设备

进入 ESPHome 并点击 **NEW DEVICE**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/31.png" style={{width:1000, height:'auto'}}/></div>

给设备起一个你喜欢的名字，并为芯片类型选择 **ESP32-S3**，然后点击 **SKIP**。

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', marginLeft:'10%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/32.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/34.png" style={{width:'100%', height:'auto'}}/></div>
</div>

创建新设备后，点击 **EDIT**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/35.png" style={{width:1000, height:'auto'}}/></div>

<!-- Inside the default generated code, the framework of esp32 may be `esp-idf`, which we need to change to `arduino`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/esphome_arduino.png" style={{width:600, height:'auto'}}/></div> -->

### 步骤 3. 安装固件

这是一个非常基础的示例，会在显示屏上显示 “Hello World!”。

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
      it.print(0, 0, id(myFont), BLACK, "Hello World!");
```

</TabItem>

<TabItem value="For E1003" label="For E1003">

:::tip
请将你的 ESPHome 版本更新到 **2026.7.0** 或更高版本，以支持 `it8951` 显示平台。
:::

```yaml
# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

# OPI PSRAM is required for the E1003 framebuffer
psram:
  mode: octal

# define SPI interface
spi:
  id: epaper_spi_bus
  clk_pin: GPIO7
  mosi_pin: GPIO9
  miso_pin: GPIO8

display:
  - platform: it8951
    id: epaper_display
    spi_id: epaper_spi_bus
    model: seeed-reterminal-e1003
    update_interval: 300s
    full_update_every: 30
    grayscale: true
    dithering: true
    update_mode: GC16
    transform:
      mirror_x: true
      mirror_y: false
    lambda: |-
      it.print(0, 0, id(myFont), Color::BLACK, "Hello World!");
```

</TabItem>


<TabItem value="For E1004" label="For E1004">

:::tip
请将你的 ESPHome 版本更新到 **2026.7.0** 或更高版本，以支持 `seeed-reterminal-e1004` 型号。
:::

```yaml
# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

# OPI PSRAM is required for the E1004 framebuffer
psram:
  mode: octal

# define SPI interface
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    model: seeed-reterminal-e1004
    update_interval: 300s
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      it.print(0, 0, id(myFont), BLACK, "Hello World!");
```

</TabItem>

</Tabs>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/36.png" style={{width:1000, height:'auto'}}/></div>

点击 **INSTALL** 将代码安装到设备上，你会看到如下图像。

<Tabs>
<TabItem value='Install through browser'>

:::tip
如果你的 Home Assistant 主机（Raspberry PI/Green/Yellow 等）离你较远，我们推荐使用这种方式。你可以使用手边的电脑来安装。
:::

首先，你需要点击 **Manual download** 来下载已编译的固件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/62.png" style={{width:500, height:'auto'}}/></div>

打开这个网站，我们将在这里把固件上传到 ePaper 面板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/63.png" style={{width:800, height:'auto'}}/></div>

回到 ESPHome 下载固件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/64.png" style={{width:800, height:'auto'}}/></div>

选择 Factory 格式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/65.png" style={{width:500, height:'auto'}}/></div>

使用 USB 线 **将 ePaper 面板连接到你的电脑**，然后点击 **CONNECT**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/66.png" style={{width:800, height:'auto'}}/></div>

选择 usbmodemxxx（Windows 为 COMxxx）并点击连接。[遇到问题？点击这里。](#Q4)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/67.png" style={{width:800, height:'auto'}}/></div>

点击 **INSTALL** 并选择你刚刚下载的固件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/69.png" style={{width:500, height:'auto'}}/></div>

稍等片刻，你会在显示屏上看到 “Hello world!” ～

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/37.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>

<TabItem value='Install through host'>

:::tip
如果你的 Home Assistant 主机（Raspberry PI/Green/Yellow 等）就在附近，我们推荐使用这种方式，因为它更简单。
:::

在你将代码安装到设备之前，需要使用 USB 线 **将此设备连接到运行 Home Assistant 的 Raspberry Pi 或 HA Green（Yellow）等主机**。

按照下图所示点击选项，将代码安装到设备中。[设备处于深度睡眠模式时没有找到端口？](#port)

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/6.png" style={{width:'70%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/7.png" style={{width:'100%', height:'auto'}}/></div>
</div>

等待片刻，你将看到如下图所示的反馈。这表示代码已成功运行。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/37.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>

<TabItem value='Install through Wi-Fi'>

:::tip
这是最简单的方式，但前提是首次安装程序时，需要先使用左侧的方法将程序上传到 ePaper Panel。之后，你就可以通过 Wi-Fi 上传。同时，请确保你的 YAML 配置中包含正确配置的 `ota` 和 `api` 部分，并带有有效的加密密钥，以保证此方法可以正常工作。
:::

通过这种方式，你无需将 ePaper 面板连接到任何设备，只需确保它已联网即可。

点击该选项，固件就会自动安装到 ePaper 面板上。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/72.png" style={{width:500, height:'auto'}}/></div>

等待片刻，你将看到如下图所示的反馈。如果失败，可能是信号较弱导致的。请将设备移近你的路由器。[遇到问题？点击这里。](#Q4)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/37.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>
</Tabs>

## ESPHome 绘图基础

### 绘制简单图形

此示例 YAML 代码为 ESPHome 项目配置了 SPI 接口和 reTerminal E 系列 ePaper 显示屏。`lambda` 部分包含在屏幕上绘制简单图形的绘制命令：

- 两个矩形（一个位于 (10, 10)，尺寸为 100x50，另一个位于 (150, 10)，尺寸为 50x50）
- 一个圆，中心在 (250, 35)，半径为 25
- 两个填充矩形（位于 (10, 80) 和 (150, 80)）
- 一个填充圆，中心在 (250, 105)，半径为 25

你可以通过复制下面的代码，并将其粘贴到 Yaml 文件中 `captive_portal` 代码行之后来使用此示例。

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

当你看到如下图所示的反馈时，表示代码已成功运行。

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

当你看到如下图所示的反馈时，表示代码已成功运行。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/144.jpg" style={{width:600, height:'auto'}}/></div>

</TabItem>

<TabItem value="For E1003" label="适用于 E1003">

:::tip
请将你的 ESPHome 版本更新到 **2026.7.0** 或更高版本。
:::

```yaml
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

psram:
  mode: octal

spi:
  id: epaper_spi_bus
  clk_pin: GPIO7
  mosi_pin: GPIO9
  miso_pin: GPIO8

display:
  - platform: it8951
    id: epaper_display
    spi_id: epaper_spi_bus
    model: seeed-reterminal-e1003
    update_interval: 300s
    full_update_every: 30
    grayscale: true
    dithering: true
    update_mode: GC16
    transform:
      mirror_x: true
      mirror_y: false
    lambda: |-
      it.rectangle(10, 10, 100, 50, Color::BLACK);
      it.rectangle(150, 10, 50, 50, Color::BLACK);
      it.circle(250, 35, 25, Color::BLACK);
      it.filled_rectangle(10, 80, 100, 50, Color::BLACK);
      it.filled_rectangle(150, 80, 50, 50, Color::BLACK);
      it.filled_circle(250, 105, 25, Color::BLACK);
```

</TabItem>


<TabItem value="For E1004" label="适用于 E1004">

:::tip
请将你的 ESPHome 版本更新到 **2026.7.0** 或更高版本。
:::

```yaml
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

psram:
  mode: octal

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    model: seeed-reterminal-e1004
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

</TabItem>

</Tabs>

由于篇幅限制，我们不会对其他图案的绘制方法和原理做过多展开，如有需要，建议读者阅读 [ESPHome 在这一部分的详细示例](https://esphome.io/components/display/)。

### 从 Home Assistant 获取数值用于显示

要在 reTerminal E 系列 ePaper 显示设备上显示天气数据，你需要从 Home Assistant 获取温度、天气状况和风速数据。Open-Meteo 集成提供了可靠的天气数据，可以通过 Developer Tools 访问。

#### 安装 Open-Meteo 集成

步骤 1. 打开你的 Home Assistant 仪表盘，导航到 **Settings** → **Devices & Services**。

步骤 2. 点击右下角的 **Add Integration** 按钮。

步骤 3. 搜索 “Open-Meteo” 并从列表中选择它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/esphome_weather.png" style={{width:800, height:'auto'}}/></div>

步骤 4. 按照配置向导设置你的地理位置和首选单位。

步骤 5. 安装完成后，Open-Meteo 集成会在你的 Home Assistant 实例中创建多个与天气相关的实体。

#### 在 Developer Tools 中访问天气数据

安装 Open-Meteo 集成后，你可以通过 Developer Tools 访问天气数据：

步骤 1. 在 Home Assistant 仪表盘中，导航到 **Developer Tools** → **States**。

步骤 2. 在过滤框中输入 `weather`，以找到主要的天气实体。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/39.png" style={{width:1000, height:'auto'}}/></div>

步骤 3. 点击该实体以查看所有可用属性。关键的天气属性包括：

- `temperature`：当前温度（使用你配置的单位）
- `wind_bearing`：风向
- `wind_speed`：风速

#### 在 ESPHome 中使用天气数据

要在 reTerminal E 系列的 ESPHome 配置中使用这些天气数据，你需要在 ESPHome 的 YAML 配置中建立与 Home Assistant 的 API 连接：

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

此配置会在你的 ESPHome 设备中创建从 Home Assistant 天气集成中获取数据的传感器实体。然后你可以使用这些传感器，将当前天气信息更新到 reTerminal E 系列 ePaper 显示屏上。

:::tip
对于预报数据，你需要使用 `weather.open_meteo_forecast` 实体，其中包含未来几天的预测值。
:::

最后，添加显示部分的代码以使用上述这些数值。完整代码如下：

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

<TabItem value="For E1003" label="适用于 E1003">

:::tip
请将 ESPHome 版本更新到 **2026.7.0** 或更高版本。
:::

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

psram:
  mode: octal

spi:
  id: epaper_spi_bus
  clk_pin: GPIO7
  mosi_pin: GPIO9
  miso_pin: GPIO8

display:
  - platform: it8951
    id: epaper_display
    spi_id: epaper_spi_bus
    model: seeed-reterminal-e1003
    update_interval: 300s
    full_update_every: 30
    grayscale: true
    dithering: true
    update_mode: GC16
    transform:
      mirror_x: true
      mirror_y: false
    lambda: |-
      ESP_LOGD("epaper", "weather: %s", id(myWeather).state.c_str());
      ESP_LOGD("epaper", "temperature: %s", id(myTemperature).state.c_str());
      ESP_LOGD("epaper", "pressure: %.1f", id(myWindBearing).state);
      it.printf(100, 100, id(myFont), Color::BLACK, "%s", id(myWeather).state.c_str());
      it.printf(100, 150, id(myFont), Color::BLACK, "%s", id(myTemperature).state.c_str());
      it.printf(100, 200, id(myFont), Color::BLACK, "%.1f", id(myWindBearing).state);
```

</TabItem>


<TabItem value="For E1004" label="适用于 E1004">

:::tip
请将 ESPHome 版本更新到 **2026.7.0** 或更高版本。
:::

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

psram:
  mode: octal

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    model: seeed-reterminal-e1004
    update_interval: 300s
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);

      ESP_LOGD("epaper", "weather: %s", id(myWeather).state.c_str());
      ESP_LOGD("epaper", "temperature: %s", id(myTemperature).state.c_str());
      ESP_LOGD("epaper", "pressure: %.1f", id(myWindBearing).state);
      it.printf(100, 100, id(myFont), BLACK, "%s", id(myWeather).state.c_str());
      it.printf(100, 150, id(myFont), BLACK, "%s", id(myTemperature).state.c_str());
      it.printf(100, 200, id(myFont), BLACK, "%.1f", id(myWindBearing).state);
```

</TabItem>

</Tabs>

在编译上述代码并将其上传到设备后，您可能会首先在屏幕上看到显示 **NaN**，请不要担心，这是正常现象。这是因为设备尚未添加到 Home Assistant 环境中，因此 reTerminal 还无法获取 Home Assistant 的数据。我们只需要按照下面的步骤添加设备即可。

#### 将 reTerminal E 系列电子纸显示屏添加到 Home Assistant

步骤 1. 在为设备烧录完成后，返回 Home Assistant，导航到 **Settings → Devices & Services**。

步骤 3. Home Assistant 应该会通过 mDNS 自动发现您的 reTerminal E 系列电子纸显示屏设备。如果它出现在已发现设备部分，点击 Configure 将其添加。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/41.png" style={{width:1000, height:'auto'}}/></div>

步骤 4. 如果设备没有被自动发现，点击 Add Integration 并搜索 "ESPHome"。

步骤 5. 输入您的 reTerminal E 系列电子纸显示屏设备的 IP 地址，以及如果您设置了的话，API 加密密钥。

步骤 6. 连接成功后，您的 reTerminal E 系列电子纸显示屏将作为一个设备出现在 Home Assistant 中，其所有传感器和组件都可以使用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/40.jpg" style={{width:600, height:'auto'}}/></div>

:::note
程序从烧录完成到最终显示可能需要 2~3 分钟。
:::

下面是增强后的 Demo 3 内容，改进了格式、图片位置并增加了说明：

### 绘制 TrueType 字体

本示例演示如何使用 TrueType 字体在 reTerminal E 系列电子纸显示屏上显示自定义图标。Material Design Icons 提供了大量适合电子纸显示屏的可缩放符号。

#### 安装所需工具

步骤 1. 首先，我们需要安装 Studio Code Server 插件来管理文件。导航到 Home Assistant 插件商店，搜索 **Studio Code Server** 并点击进入。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/17.png" style={{width:1000, height:'auto'}}/></div>

步骤 2. 点击 **INSTALL** 并等待安装完成。安装完成后，点击 **START** 启动编辑器。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/18.png" style={{width:800, height:'auto'}}/></div>

#### 设置图标字体

步骤 3. 在 ESPHome 配置目录中创建一个名为 **fonts** 的新文件夹。该文件夹将用于存放显示图标所需的 TrueType 字体文件。

步骤 4. 点击下方按钮下载 Material Design Icons 字体文件，并解压其内容。

<div align="center">
<a href="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/font_ttf.zip" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>下载 Material Design Icons 字体</button></p>
</a>
</div>

步骤 5. 将下载得到的字体文件（`materialdesignicons-webfont.ttf`）上传到之前创建的 fonts 文件夹中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/19.png" style={{width:800, height:'auto'}}/></div>

#### 为图标配置 ESPHome

步骤 6. 在 ESPHome 配置文件中 `captive_portal` 部分之后添加以下代码。该代码定义了两种图标字体大小，并配置显示屏以显示天气图标。

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

<TabItem value="For E1003" label="适用于 E1003">

:::tip
请将 ESPHome 版本更新到 **2026.7.0** 或更高版本。
:::

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

psram:
  mode: octal

spi:
  id: epaper_spi_bus
  clk_pin: GPIO7
  mosi_pin: GPIO9
  miso_pin: GPIO8

display:
  - platform: it8951
    id: epaper_display
    spi_id: epaper_spi_bus
    model: seeed-reterminal-e1003
    update_interval: 300s
    full_update_every: 30
    grayscale: true
    dithering: true
    update_mode: GC16
    transform:
      mirror_x: true
      mirror_y: false
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), Color::BLACK, TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), Color::BLACK, TextAlign::CENTER, "\U000F0592");
```

</TabItem>


<TabItem value="For E1004" label="适用于 E1004">

:::tip
请将 ESPHome 版本更新到 **2026.7.0** 或更高版本。
:::

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

psram:
  mode: octal

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    model: seeed-reterminal-e1004
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

步骤 7. 保存你的配置并将其上传到 reTerminal E 系列。当你看到类似下图的反馈时，表示代码已成功运行。

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

然后在显示 lambda 中：

```yaml
lambda: |-
  it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0123");
```

步骤 5. 保存更新后的配置并上传到你的设备，即可看到新图标。

:::tip
对于天气仪表盘，可以考虑使用 `F0590`（晴天）、`F0591`（多云）、`F0593`（雨天）和 `F059E`（有风）等图标。
:::

通过将这些图标与我们之前在 Home Assistant 中设置的天气数据结合，你可以创建一个动态天气显示界面，用合适的图标展示当前天气状况。

### 显示自定义图片

本示例演示如何在 reTerminal E 系列电子墨水屏上显示自定义图片。你可以使用此功能显示 Logo、图标或任何能提升仪表盘体验的图形。

#### 准备工作

步骤 1. 确保你在 Home Assistant 中安装了 **Studio Code Server** 插件。如果尚未安装，请参考前面示例中的说明进行安装。

步骤 2. 在 ESPHome 配置目录中创建一个名为 **image** 的新文件夹。此文件夹将用于存放你想要显示的图片文件。

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

步骤 4. 使用 Studio Code Server 的文件管理器，将下载的图片上传到之前创建的 **image** 文件夹中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/20.png" style={{width:800, height:'auto'}}/></div>

:::tip
如果你想显示复杂且精美的风景图片，最好先在[我们的网站](https://sensecraft.seeed.cc/hmi/tools/dither)上进行图像抖动处理，以获得更好的效果。JPG 和 PNG 格式均受支持。
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
请将 ESPHome 版本更新到 **2025.11.1** 以上。
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

<TabItem value="For E1003" label="适用于 E1003">

:::tip
请将 ESPHome 版本更新到 **2026.7.0** 或更高版本。E1003 使用 16 级灰度面板——在需要时优先使用 `GRAYSCALE` 图像类型，并为 1872×1404 面板设置更大的缩放尺寸。
:::

```yaml
image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: GRAYSCALE                         # Grayscale for the E1003 16-level panel
    resize: 800x480                         # Start with a smaller size for a quick test

psram:
  mode: octal

spi:
  id: epaper_spi_bus
  clk_pin: GPIO7
  mosi_pin: GPIO9
  miso_pin: GPIO8

display:
  - platform: it8951
    id: epaper_display
    spi_id: epaper_spi_bus
    model: seeed-reterminal-e1003
    update_interval: 300s
    full_update_every: 30
    grayscale: true
    dithering: true
    update_mode: GC16
    transform:
      mirror_x: true
      mirror_y: false
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

</TabItem>


<TabItem value="For E1004" label="适用于 E1004">

:::tip
请将 ESPHome 版本更新到 **2026.7.0** 或更高版本。
:::

```yaml
image:
  - file: /config/esphome/image/wifi.jpg    # Path to your image file (JPG or PNG)
    id: myImage
    type: RGB565                            # RGB565 works for colorful e-ink
    resize: 800x480                         # Start with a smaller size for a quick test

psram:
  mode: octal

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: epaper_spi
    model: seeed-reterminal-e1004
    update_interval: 300s
    lambda: |-
      it.image(0, 0, id(myImage));          # Display image at position (0,0)
```

</TabItem>

</Tabs>

步骤 6. 保存你的配置并将其上传到 reTerminal E 系列。更新完成后，你的电子纸显示屏将显示该图像。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/43.jpg" style={{width:600, height:'auto'}}/></div>

#### 高级图像技巧

你可以通过以下附加技巧增强图像显示效果：

**图像定位**

要将图像放置在屏幕上的特定坐标位置：

```yaml
lambda: |-
  // Display image at position (100,50)
  it.image(100, 50, id(myImage));
```

**将图像与文本组合**

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
请记住，电子纸显示屏的刷新率有限。`update_interval: 300s` 设置意味着你的显示屏每 5 分钟才会刷新一次。根据你的需求调整这个值，但要注意，频繁刷新会缩短电子纸显示屏的使用寿命。
:::

通过将图像与文本以及前面示例中介绍的其他显示元素结合，你可以在 reTerminal E 系列上创建丰富且信息量大的仪表盘。

## 继续阅读

本文重点介绍连接显示屏以及在电子纸屏幕上绘制内容。当你想要使用其余板载硬件时，请继续阅读以下 ESPHome cookbooks：

- **[reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)** - 通过选择你的设备并勾选板载功能来生成完整的 ESPHome YAML，或直接在浏览器中烧录演示固件。
- **[ESPHome Cookbook：按键、蜂鸣器、LED、电池、触摸与低功耗](/cn/reterminal_e10xx_with_esphome_advanced)** - 用户按键、蜂鸣器反馈、板载 LED、电池监测、SHT4x 传感器、电容触摸（E1003）、深度睡眠以及多页面仪表盘。
- **[ESPHome Cookbook：RTC、SD 卡与麦克风](/cn/reterminal_e10xx_with_esphome_rtc_sd_microphone)** - PCF8563 RTC 时间同步、microSD 卡电源/检测引脚以及板载 PDM 麦克风初始化。

## 常见问题

### Q1：为什么没有数据？

在这种情况下，你需要前往 Settings -> Devices & Services -> Integrations 来 **RECONGFIGURE** 设备。还没有找到你的 reTerminal？尝试重启 Home Assistant。

<div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/101.png" style={{width:'100%', height:'auto'}}/></div>

### Q2：为什么我在 Home Assistant 中获取不到这些数据？ {#port}

在这种情况下，你需要前往 Settings -> Devices & Services -> Integrations，将你的设备 **ADD** 到 HA 中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/41.png" style={{width:1000, height:'auto'}}/></div>

### Q3：reTerminal E 系列电子纸显示屏无法连接到你的电脑？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/68.png" style={{width:600, height:'auto'}}/></div>

尝试多次拔插，或者根据提示安装驱动程序。

### Q4：为什么通过 USB 没有串口日志？

reTerminal E 系列在 UART0 上使用 CH340K USB 转 UART 桥接芯片。请在你的 YAML 中保留以下日志设置：

```yaml
logger:
  hardware_uart: UART0
```

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
