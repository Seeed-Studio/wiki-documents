---
description: 基于 XIAO ESP32C3 的 7.5 英寸 E Ink® 显示屏是一个紧凑、节能的解决方案，用于展示 Home Assistant 数据。
title: 在 Home Assistant 中与 ESPHome 配合使用
keywords:
- ePaper display
- ESPHome
- Home Assistant
image: https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/cover.webp
slug: /cn/xiao_075inch_epaper_panel_esphome
sidebar_position: 2
last_update:
  date: 03/12/2025
  author: Allen
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/201.png" style={{width:900, height:'auto'}}/></div>

<br></br>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong></a>
</div>

## Home Assistant 介绍

Home Assistant 是一个功能强大的开源家庭自动化平台，允许您从一个统一的界面控制和监控智能家居设备。它充当智能家居的中央枢纽，使您能够自动化例程、监控传感器，并创建更智能的生活空间。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/204.png" style={{width:900, height:'auto'}}/></div>

### 为什么选择 Home Assistant？

- **本地控制**：与许多基于云的解决方案不同，Home Assistant 在您的网络上本地运行，确保您的数据保持私密，即使没有互联网访问，您的自动化也能正常工作。

- **广泛的设备支持**：Home Assistant 与数千种不同的智能家居设备和服务集成，使其具有高度的通用性和面向未来的特性。

- **强大的自动化**：创建复杂的自动化规则，可以响应各种触发器，如时间、设备状态、传感器读数等。

- **可定制的仪表板**：设计您自己的用户界面，显示对您最重要的信息。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 了解更多 🖱️</font></span></strong></a>
</div>

### 为什么将电子纸显示屏与 Home Assistant 结合使用？

XIAO 7.5" ePaper Panel 是 Home Assistant 的绝佳伴侣，原因如下：

1. **节能高效**：电子纸显示屏仅在更新内容时消耗电力，非常适合显示持久信息，如天气预报、日历事件或系统状态。

2. **清晰可见**：与 LCD 屏幕不同，电子纸显示屏在任何光照条件下都易于阅读，包括直射阳光，使其成为壁挂式家庭控制面板的理想选择。

3. **长电池续航**：结合深度睡眠模式，显示屏可以在单次电池充电下运行数月，同时仍能提供一目了然的有价值信息。

4. **灵活集成**：通过 ESPHome，显示屏与 Home Assistant 无缝集成，允许您以优雅、始终可见的格式显示智能家居系统中的任何数据。

这些优势使 XIAO 7.5" ePaper Panel 成为为您的 Home Assistant 设置创建节能、始终在线信息显示屏的理想选择。

### ESPHome 集成

ESPHome 是一个专为 ESP8266/ESP32 设备设计的开源固件创建工具。它允许您使用简单的 YAML 配置文件创建自定义固件，然后可以将其刷写到您的设备上。对于 XIAO 7.5" ePaper Panel，ESPHome 作为重要的中间件，实现设备与 Home Assistant 之间的通信。

该系统通过将您的 YAML 配置转换为在 ESP 设备上运行的功能齐全的固件来工作。该固件处理连接到网络、与 Home Assistant 通信以及控制 ePaper 显示屏的所有复杂任务。当与 Home Assistant 结合使用时，ESPHome 为创建复杂的家庭自动化显示屏和控制器提供了强大的平台。

让我们探索如何设置并充分利用这个多功能显示屏。

## 开始使用

在本文教程内容开始之前，您可能需要准备以下硬件。

### 所需材料

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO 7.5" ePaper Panel</th>
      <th>Home Assistant Green</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/209.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank">
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

Home Assistant Green 是自动化您家庭的最简单且最注重隐私的方式。它提供了轻松的设置，让您可以用一个系统控制所有智能设备，默认情况下所有数据都存储在本地。这块板子受益于蓬勃发展的 Home Assistant 生态系统，并且每个月都会通过开源得到改进。

我们建议在本教程中使用 Home Assistant Green 作为 Home Assistant 主机，或者您可以使用任何带有 Supervisor 的 Home Assistant 主机。

:::tip 安装 Home Assistant
我们还为一些 Seeed Studio 产品编写了如何安装 Home Assistant 的教程，请参考它们。

- **[在 ODYSSEY-X86 上开始使用 Home Assistant](https://wiki.seeedstudio.com/cn/ODYSSEY-X86-Home-Assistant/)**
- **[在 reTerminal 上开始使用 Home Assistant](https://wiki.seeedstudio.com/cn/reTerminal_Home_Assistant/)**
- **[在 LinkStar H68K/reRouter CM4 上开始使用 Home Assistant](https://wiki.seeedstudio.com/cn/h68k-ha-esphome/)**

如果您没有使用 Seeed Studio 产品，您也可以在官方 Home Assistant 网站上查看并学习如何为其他产品安装 Home Assistant。

- **[Home Assistant 安装](https://www.home-assistant.io/installation/)**
:::

### 步骤 1. 安装 ESPHome

如果您已经安装了 ESPHome，可以跳过此步骤。

转到 **Settings** -> **Add-ons** -> **ADD-ON STORE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/01.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/02.png" style={{width:800, height:'auto'}}/></div>

搜索 ESPHome 并点击它。点击 **INSTALL** 和 **START**。

:::tip
如果您在附加组件商店中找不到 ESPHome，请确保您使用的是支持附加组件的 Home Assistant 安装（如 Home Assistant OS 或监督安装）。对于其他安装类型（如 Home Assistant Container），您可能需要使用 Docker 独立运行 ESPHome Device Builder。有关更多详细信息，请参阅[官方 ESPHome 文档](https://esphome.io/guides/getting_started_hassio)。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/03.png" style={{width:800, height:'auto'}}/></div>

然后，ESPHome Builder 将出现在侧边栏中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/04.png" style={{width:800, height:'auto'}}/></div>

### 步骤 2. 添加新设备

转到 ESPHome 并点击 **NEW DEVICE**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/06.png" style={{width:800, height:'auto'}}/></div>

给设备起一个您喜欢的名字，然后点击 **NEXT**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/1.png" style={{width:800, height:'auto'}}/></div>

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', marginLeft:'10%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/2.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3.png" style={{width:'100%', height:'auto'}}/></div>
</div>

创建新设备后，点击 **EDIT**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/4.png" style={{width:800, height:'auto'}}/></div>

### 步骤 3. 安装固件

这是一个非常基本的示例，将在显示屏上显示"Hello World!"。

**主要目的是向您展示将固件安装到设备的不同方法。**

安装 ESPHome 并添加新设备后，您可以复制下面的代码并将其粘贴到 `captive_portal` 之后，如下所示。

<details>

<summary>点击这里预览完整代码</summary>

```yaml

# define font to display words
font:
  - file: "gfonts://Inter@700"
    id: font1
    size: 24

# define SPI interface
spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10

display:
  - platform: waveshare_epaper
    cs_pin: GPIO3
    dc_pin: GPIO5
    busy_pin: 
      number: GPIO4
      inverted: true
    reset_pin: GPIO2
    model: 7.50inv2
    update_interval: 30s
    lambda: |-
      it.print(0, 0, id(font1), "Hello World!");
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/5.png" style={{width:1000, height:'auto'}}/></div>

点击 **INSTALL** 将代码安装到设备上，您将看到以下图像。

<Tabs>
<TabItem value='通过浏览器安装'>

:::tip
如果您的 Home Assistant 主机（Raspberry PI/Green/Yellow 等）距离您较远，我们建议使用此方法。您可以使用手边的计算机进行安装。
:::

首先，您需要点击 **Manual download** 下载编译好的固件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/62.png" style={{width:500, height:'auto'}}/></div>

打开这个网站，我们将在这里上传固件到电子纸面板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/63.png" style={{width:800, height:'auto'}}/></div>

返回 ESPHome 下载固件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/64.png" style={{width:800, height:'auto'}}/></div>

选择 Factory 格式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/65.png" style={{width:500, height:'auto'}}/></div>

使用 USB 线缆 **将电子纸面板连接到您的计算机** 并点击 **CONNECT**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/66.png" style={{width:800, height:'auto'}}/></div>

选择 usbmodemxxx（Windows 是 COMxxx）并点击连接。[遇到问题？点击这里。](#Q5)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/67.png" style={{width:800, height:'auto'}}/></div>

点击 **INSTALL** 并选择您刚才下载的固件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/69.png" style={{width:500, height:'auto'}}/></div>

稍等片刻，您将在显示屏上看到 'Hello world!' ～

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/71.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/33.png" style={{width:'80%', height:'auto'}}/></div>
</div>

</TabItem>

<TabItem value='通过主机安装'>

:::tip
如果您的 Home Assistant 主机（Raspberry PI/Green/Yellow 等）就在附近，我们建议使用此方法，因为它更简单。
:::

在将代码安装到设备之前，您需要使用 USB 线缆 **将此设备连接到运行 Home Assistant 的 Raspberry Pi 或 HA Green（Yellow）等设备**。

按照图像中的选项点击，将代码安装到设备。[设备在深度睡眠模式下找不到端口？](#port)

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/6.png" style={{width:'70%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/7.png" style={{width:'100%', height:'auto'}}/></div>
</div>

稍等片刻，您将看到如下图所示的反馈。这意味着代码正在成功运行。

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/9.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/33.png" style={{width:'80%', height:'auto'}}/></div>
</div>

</TabItem>

<TabItem value='通过 Wi-Fi 安装'>

:::tip
这是最简单的方法，但前提是在第一次安装程序时，您应该首先使用左侧的方法将程序上传到电子纸面板。之后，您可以通过 wifi 上传。另外，确保您的 YAML 配置包含正确配置的 `ota` 和 `api` 部分以及有效的加密密钥，以便此方法正常工作。
:::

通过这种方式，您不需要将电子纸面板连接到任何设备，只需确保它在线即可。

点击选项，然后固件将自动安装到电子纸面板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/72.png" style={{width:500, height:'auto'}}/></div>

稍等片刻，您将看到如下图所示的反馈。如果失败，可能是由于信号较弱。请将设备移近您的路由器。[遇到问题？点击这里。](#Q5)

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/73.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/33.png" style={{width:'80%', height:'auto'}}/></div>
</div>

</TabItem>
</Tabs>

## 基本用法

### 1. 显示形状

此示例将在显示屏上显示形状。

安装 ESPHome 并添加新设备后，您可以复制下面的代码并将其粘贴到 **captive_portal** 部分，如下图所示。

<details>

<summary> 点击这里复制代码。 </summary>

```yaml
spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10

display:
  - platform: waveshare_epaper
    model: 7.50inv2
    cs_pin: GPIO3
    dc_pin: GPIO5
    reset_pin: GPIO2
    busy_pin: 
      number: GPIO4
      inverted: true
    update_interval: 5min
    lambda: |-
      it.rectangle(10, 10, 100, 50);
      it.rectangle(150, 10, 50, 50);
      it.circle(250, 35, 25);

      it.filled_rectangle(10, 80, 100, 50);
      it.filled_rectangle(150, 80, 50, 50);
      it.filled_circle(250, 105, 25);
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/40.png" style={{width:800, height:'auto'}}/></div>

当您看到如下图所示的反馈时，说明代码运行成功。

您也可以[点击这里](https://esphome.io/components/display/)查看更多用法。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/37.png" style={{width:600, height:'auto'}}/></div>

### 2. 在 HA 中显示信息

此示例将在显示屏上显示 HA 中的信息。

首先，您需要将此设备添加到 HA 中。否则，您无法从 HA 获取信息。

如果 HA 没有显示设备，您应该先运行上面的演示。运行上面的演示后，您可以在 HA 中看到设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/10.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/11.png" style={{width:800, height:'auto'}}/></div>

然后，点击 **SUBMIT** 和 **FINISH**。

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', marginLeft:'8%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/12.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/13.png" style={{width:'68%', height:'auto'}}/></div>
</div>

安装 ESPHome 并添加新设备后，您可以复制下面的代码并将其粘贴到 `captive_portal` 之后，如下所示。

<details>

<summary>点击这里预览完整代码</summary>

```yaml

# Define font to show info
font:
  - file: "gfonts://Inter@700"
    id: myFont
    size: 24

# Get info from HA, as string format
text_sensor:
  - platform: homeassistant
    entity_id: weather.forecast_home
    id: myWeather
    internal: true
  - platform: homeassistant
    entity_id: weather.forecast_home
    id: myTemperature
    attribute: "temperature"
    internal: true

# Get info from HA, as float format
sensor:
  - platform: homeassistant
    entity_id: weather.forecast_home
    id: myPressure
    attribute: "pressure"
    internal: true

# Display info via SPI
spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10

display:
  - platform: waveshare_epaper
    cs_pin: GPIO3
    dc_pin: GPIO5
    busy_pin: 
      number: GPIO4
      inverted: true
    reset_pin: GPIO2
    model: 7.50inv2
    update_interval: 30s
    lambda: |-
      //print info in log
      ESP_LOGD("epaper", "weather: %s", id(myWeather).state.c_str());
      ESP_LOGD("epaper", "temperature: %s", id(myTemperature).state.c_str());
      ESP_LOGD("epaper", "pressure: %.1f", id(myPressure).state);
      //display info in epaper screen
      it.printf(100, 100, id(myFont), "%s", id(myWeather).state.c_str());
      it.printf(100, 150, id(myFont), "%s", id(myTemperature).state.c_str());
      it.printf(100, 200, id(myFont), "%.1f", id(myPressure).state);
```

</details>

将这些代码安装到您的设备上。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/15.png" style={{width:1000, height:'auto'}}/></div>

代码的功能是从 HA 获取**天气**、**温度**和**压力**信息，并在显示屏上显示它们。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/39.png" style={{width:1000, height:'auto'}}/></div>

当您看到如下图所示的反馈时，说明代码运行成功。

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/14.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/34.png" style={{width:'80%', height:'auto'}}/></div>
</div>

### 3. 显示图标 {#ttf}

此示例将在显示屏上显示图标。

首先，我们需要安装一个文件编辑器插件。搜索 **Studio Code Server** 并点击它。点击 **INSTALL** 和 **START**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/17.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/18.png" style={{width:800, height:'auto'}}/></div>

<span id="ttf">然后</span>，创建一个名为 **fonts** 的新文件夹，下载此文件并**将其放入 fonts 文件夹**。

<div align="center">
<a href="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/font_ttf.zip" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>点击此处下载</button></p>
</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/19.png" style={{width:800, height:'auto'}}/></div>

安装 ESPHome 并添加新设备后，您可以复制下面的代码并将其粘贴到 `captive_portal` 之后，如下所示。

<details>

<summary>点击此处预览完整代码</summary>

```yaml
font:
  - file: 'fonts/materialdesignicons-webfont.ttf'  #here is the directory to save ttf file
    id: font_mdi_large
    size: 200        # big size icon
    glyphs: &mdi-weather-glyphs
      - "\U000F0595" # weather cloudy
      - "\U000F0592" # weather hail
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_medium   # small size icon
    size: 40
    glyphs: *mdi-weather-glyphs

spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10

display:
  - platform: waveshare_epaper
    cs_pin: GPIO3
    dc_pin: GPIO5
    busy_pin: 
      number: GPIO4
      inverted: true
    reset_pin: GPIO2
    model: 7.50inv2
    update_interval: 30s
    lambda: |-
      it.printf(100, 200, id(font_mdi_medium), TextAlign::CENTER, "\U000F0595");
      it.printf(400, 200, id(font_mdi_large), TextAlign::CENTER, "\U000F0592");
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/21.png" style={{width:800, height:'auto'}}/></div>

当您看到如下图所示的反馈时，说明代码运行成功。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/35.png" style={{width:600, height:'auto'}}/></div>

如果您想使用其他图标，可以点击下面的按钮探索更多选项。

<div align="center">
<a href="https://pictogrammers.com/library/mdi/" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>点击这里访问图标网站</button></p>
</a>
</div>

选择您想要的图标。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/41.png" style={{width:800, height:'auto'}}/></div>

复制代码并将其粘贴到 **captive_portal** 部分，如下图所示。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/42.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/43.png" style={{width:800, height:'auto'}}/></div>

### 4. 显示图像 {#image}

此示例将在显示屏上显示您喜欢的任何图像。

与前面的示例一样，我们需要安装 **Studio Code Server** 并创建一个名为 **image** 的新文件夹来保存图像。

然后将图像放入 **image** 文件夹中。您可以点击下面的按钮下载一张图像进行尝试。

<div align="center">
<a href="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/wifi.jpg" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>点击这里下载</button></p>
</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/20.png" style={{width:800, height:'auto'}}/></div>

安装 ESPHome 并添加新设备后，您可以复制下面的代码并将其粘贴到 `captive_portal` 之后，如下所示。

<details>

<summary>点击这里预览完整代码</summary>

```yaml

image:
  - file: /config/esphome/image/wifi.jpg    # the path where you save the image, png or jpg format
    id: myImage
    type: BINARY
    resize: 800x480    # how big you want to show, the biggest size should be as same as ePaper Penal pixel(800x480)
    invert_alpha: true   # invert color

spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10

display:
  - platform: waveshare_epaper
    cs_pin: GPIO3
    dc_pin: GPIO5
    busy_pin: 
      number: GPIO4
      inverted: true
    reset_pin: GPIO2
    model: 7.50inv2
    update_interval: 30s
    lambda: |-
      it.image(0, 0, id(myImage));
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/22.png" style={{width:800, height:'auto'}}/></div>

当您看到如下图所示的反馈时，说明代码运行成功。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/wifi.png" style={{width:600, height:'auto'}}/></div>

## 演示 1. 截取 Home Assistant 仪表板的屏幕截图

此示例将在显示屏上显示 HA 的屏幕截图。

首先，您需要安装一个屏幕截图插件 **Puppet**，[点击此处安装。](https://github.com/balloob/home-assistant-addons/tree/main/puppet)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/83.jpg" style={{width:800, height:'auto'}}/></div>

请注意版本应该**高于或等于 1.11.4**。安装后，转到**配置页面**。我们需要为此插件创建一个 access_token。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/96.jpg" style={{width:800, height:'auto'}}/></div>

请参阅下一步创建令牌并粘贴到此处。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/88.jpg" style={{width:800, height:'auto'}}/></div>

转到**安全页面**的底部并创建一个令牌，然后复制并粘贴到 **Puppet** 插件中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/85.jpg" style={{width:800, height:'auto'}}/></div>

记住要**重启** Puppet 插件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/95.jpg" style={{width:800, height:'auto'}}/></div>

启动插件将在端口 10000 上启动一个新服务器。您请求的任何路径都将返回该页面的屏幕截图。您需要指定所需的视口大小。

例如，要获取默认仪表板的 1000px x 1000px 屏幕截图，请获取：

```python
# http://192.168.1.191:10000/lovelace/0?viewport=1000x1000(My address)

http://homeassistant.local:10000/lovelace/0?viewport=1000x1000
```

为了减少 E Ink® 显示屏的调色板，您可以添加 eink 参数。该值表示要使用的颜色数量（包括黑色）。例如，对于 2 色 E Ink® 显示屏：

```python
http://homeassistant.local:10000/lovelace/0?viewport=1000x1000&eink=2
```

如果你使用的是 eink=2，你还可以通过添加 invert 参数来反转颜色：

```python
http://homeassistant.local:10000/lovelace/0?viewport=1000x1000&eink=2&invert
```

此外，你还可以截取其他页面的屏幕截图，例如 HA 中的**待办事项列表**页面：

```python
http://192.168.1.191:10000/todo?viewport=800x480&eink=2&invert
```

您可以在浏览器中输入此链接查看截图效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/92.jpg" style={{width:800, height:'auto'}}/></div>

安装 ESPHome 并添加新设备后，您可以复制下面的代码并将其粘贴到 `captive_portal` 之后，如下所示。

<details>

<summary>点击此处预览完整代码</summary>

```yaml

http_request:
  verify_ssl: false
  timeout: 10s
  watchdog_timeout: 15s

online_image:
  - id: dashboard_image
    format: PNG
    type: BINARY
    buffer_size: 30000
    url: http://192.168.1.191:10000/todo?viewport=800x480&eink=2&invert #change this link to your screenshot link
    update_interval: 30s
    on_download_finished:
      - delay: 0ms
      - component.update: main_display

spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10

display:
  - platform: waveshare_epaper
    id: main_display
    cs_pin: GPIO3
    dc_pin: GPIO5
    busy_pin: 
      number: GPIO4
      inverted: true
    reset_pin: GPIO2
    model: 7.50inv2
    update_interval: never
    lambda: |-
      it.image(0, 0, id(dashboard_image));

```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/93.jpg" style={{width:800, height:'auto'}}/></div>

当您看到如下图所示的反馈时，说明代码运行成功。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/94.jpg" style={{width:600, height:'auto'}}/></div>

## 演示2. 深度睡眠模式

:::tip
在深度睡眠模式下，您无法直接向设备上传代码。您需要进入下载模式。[点击这里跳转到Q3。](#port)
:::

此示例将展示如何使用深度睡眠模式来节省电力。每6小时更新一次信息。2000mAh电池可以持续使用约3个月。

安装ESPHome并添加新设备后，您可以复制下面的代码并将其粘贴到`captive_portal`之后，如下所示。

<details>

<summary>点击这里预览完整代码</summary>

```yaml
globals:
  - id: sleep_counter
    type: int
    restore_value: yes  # key parameter, to use RTC storage
    initial_value: '0'

# Here is deep sleep part
deep_sleep:
  id: deep_sleep_1
  run_duration: 30s  # Device wake up and run 30s (enough to display)
  sleep_duration: 3min  # deep sleep for 3min

interval:
  - interval: 29s  # run this command before the end of run_duration
    then:
      - logger.log: "Entering deep sleep now..."

font:
  - file: "gfonts://Inter@700"
    id: font1
    size: 24

spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10

display:
  - platform: waveshare_epaper
    cs_pin: GPIO3
    dc_pin: GPIO5
    busy_pin: 
      number: GPIO4
      inverted: true
    reset_pin: GPIO2
    model: 7.50inv2
    update_interval: 3min
    lambda: |-
      id(sleep_counter) += 1;
      ESP_LOGD("main", "Wakeup count: %d", id(sleep_counter));
      it.printf(100, 100, id(font1), "Wakeup count: %d", id(sleep_counter));
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/89.jpg" style={{width:800, height:'auto'}}/></div>

你会看到一个计数器。每次唤醒时它都会增加一。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/90.jpg" style={{width:600, height:'auto'}}/></div>

## 演示 3. 综合示例

:::tip
为了让您更好地理解，我们强烈建议您首先运行上面的基本用法。
:::

这个示例将展示如何从 HA 获取天气信息和日历信息并在显示屏上显示它们。此外，它将使用**深度睡眠模式**来节省电力。每 6 小时更新一次信息。一个 2000mAh 电池可以持续约 3 个月。

首先，您需要检查 HA 中是否有天气组件。通常，在安装 HA 时您会有一个。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/24.png" style={{width:800, height:'auto'}}/></div>

您也可以转到 **Developer Tools -> STATES** 来检查 HA 中是否有天气信息。这是您稍后将获得的信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/25.png" style={{width:800, height:'auto'}}/></div>

其次，您需要在 HA 中安装日历组件。

转到 **Settings** -> **Devices & Services** -> **Integrations** -> **Add Integration**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/28.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/29.png" style={{width:800, height:'auto'}}/></div>

选择 **Local Calendar** 并点击 **SUBMIT** 按钮。

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/30.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/31.png" style={{width:'95%', height:'auto'}}/></div>
</div>

之后，您将在 Configured 部分和侧边栏中看到 Local Calendar。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/32.png" style={{width:800, height:'auto'}}/></div>

点击侧边栏中的 Calendar 并创建 3 个新日历，名称为 **calendar**、**epaper_event** 和 **new_calendar**。您也可以使用其他名称，但请在稍后的代码中保持相同的名称。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/27.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/26.png" style={{width:800, height:'auto'}}/></div>

:::tip
在复制代码之前，请将 [wifi.jpg](#image)、[图标 ttf 文件和字体 ttf 文件](#ttf) 放入 **image** 文件夹和 **fonts** 文件夹中。
:::

<details>

<summary>点击这里预览完整代码</summary>

```yaml

esphome:
  name: dashboard
  friendly_name: dashboard

esp32:
  board: esp32-c3-devkitm-1
  framework:
    type: arduino

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "jBgx0v+Y9eKiQmYTk0SCnHgtDowNDZqgFU26Z2VTYzM="

ota:
  - platform: esphome
    password: "9f78b53ef216c5d689f7408bb1ebe728"

# -------------------------------------- Keep your code above, change your code below --------------------------------------

globals:
  - id: wifi_status
    type: int
    restore_value: no
    initial_value: "0"
  - id: first_update_done
    type: bool
    restore_value: no
    initial_value: "false"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
  on_connect:
    then:
      - lambda: |-
          id(wifi_status) = 1;
  on_disconnect:
    then:
      - lambda: |-
          id(wifi_status) = 0;


captive_portal:

# Here is deep sleep part
deep_sleep:
  id: deep_sleep_1
  run_duration: 1min  # Device wake up and run 60s (enough to pull data and update)
  sleep_duration: 60min  # deep sleep for 1h

script:
  - id: update_display
    then:
      - component.update: my_display

interval:
  # Condition: wifi connected && data retrieved && first time
  - interval: 10s  # Check every second
    then:
      - if:
          condition:
            and:
              - wifi.connected:
              - lambda: "return !id(ha_calendar_event_1).state.empty();"
              - lambda: "return !id(first_update_done);"
          then:
            - lambda: |-
                ESP_LOGD("Display", "Updating Display...");
            - script.execute: update_display  # Refresh immediately
            - lambda: "id(first_update_done) = true;"
  - interval: 59s  # run this command before 1s of run_duration end
    then:
      - logger.log: "Entering deep sleep now..."


image:
  - file: image/wifi.jpg
    type: BINARY
    id: esphome_logo
    resize: 400x240
    invert_alpha: true

# Connect to Home Assistant to get time
time:
  - platform: homeassistant
    id: homeassistant_time

text_sensor:
  - platform: homeassistant
    id: ha_calendar_event_1
    entity_id: calendar.calendar
    attribute: "message"
  - platform: homeassistant
    id: ha_calendar_start_time_1
    entity_id: calendar.calendar
    attribute: "start_time"
  - platform: homeassistant
    id: ha_calendar_end_time_1
    entity_id: calendar.calendar
    attribute: "end_time"

  - platform: homeassistant
    id: ha_calendar_event_2
    entity_id: calendar.epaper_event
    attribute: "message"
  - platform: homeassistant
    id: ha_calendar_start_time_2
    entity_id: calendar.epaper_event
    attribute: "start_time"
  - platform: homeassistant
    id: ha_calendar_end_time_2
    entity_id: calendar.epaper_event
    attribute: "end_time"

  - platform: homeassistant
    id: ha_calendar_event_3
    entity_id: calendar.new_calendar
    attribute: "message"
  - platform: homeassistant
    id: ha_calendar_start_time_3
    entity_id: calendar.new_calendar
    attribute: "start_time"
  - platform: homeassistant
    id: ha_calendar_end_time_3
    entity_id: calendar.new_calendar
    attribute: "end_time"

  - platform: homeassistant
    entity_id: weather.forecast_home
    id: myWeather
  - platform: homeassistant
    entity_id: weather.forecast_home
    id: temp
    attribute: "temperature"
  - platform: homeassistant
    entity_id: weather.forecast_home
    id: humi
    attribute: "humidity"
  - platform: homeassistant
    entity_id: weather.forecast_home
    id: press
    attribute: "pressure"
  - platform: homeassistant
    entity_id: weather.forecast_home
    id: wind
    attribute: "wind_speed"

font:
  - file: "fonts/Montserrat-Black.ttf"
    id: web_font
    size: 20
  - file: "fonts/Montserrat-Black.ttf"
    id: data_font
    size: 30
  - file: "fonts/Montserrat-Black.ttf"
    id: sensor_font
    size: 22

  - file: "gfonts://Inter@700" #
    id: font1
    size: 24

  - file: 'fonts/materialdesignicons-webfont.ttf' # Directory to save ttf file
    id: font_mdi_large
    size: 200
    glyphs: &mdi-weather-glyphs # https://pictogrammers.com/library/mdi/
      - "\U000F050F" # Thermometer
      - "\U000F058E" # Humidity
      - "\U000F059D" # Wind speed
      - "\U000F0D60" # Atmospheric pressure
      - "\U000F0590" # Cloudy weather
      - "\U000F0596" # Rainy weather
      - "\U000F0598" # Snowy weather
      - "\U000F0599" # Sunny weather
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_weather # Copy the above icon and change the size to 40
    size: 200
    glyphs: *mdi-weather-glyphs
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: img_font_sensor # Copy the above icon and change the size to 40
    size: 70
    glyphs: *mdi-weather-glyphs

spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10

display:
  - platform: waveshare_epaper
    id: my_display
    cs_pin: GPIO3
    dc_pin: GPIO5
    busy_pin: 
      number: GPIO4
      inverted: true
    reset_pin: GPIO2
    model: 7.50inv2
    update_interval: 50s
    lambda: |-
      if(id(wifi_status) == 0){
        it.image(180, 0, id(esphome_logo));
        it.print(230, 300, id(data_font), "WI-FI CONNECTING");
      }else{
        // Draw weather images here
        std::string weather_string = id(myWeather).state.c_str();
        if(weather_string == "rainy" || weather_string == "lightning" || weather_string == "pouring"){
          // Draw rainy weather image
          it.printf(120, 85, id(font_weather), TextAlign::CENTER, "\U000F0596");
        }else if(weather_string == "snowy"){
          // Draw snowy weather image
          it.printf(120, 85, id(font_weather), TextAlign::CENTER, "\U000F0598");
        }else if(weather_string == "sunny" || weather_string == "windy"){
          // Draw sunny weather image
          it.printf(120, 85, id(font_weather), TextAlign::CENTER, "\U000F0599");
        }else{
          // Draw cloudy weather image
          it.printf(120, 85, id(font_weather), TextAlign::CENTER, "\U000F0590");
        }

        auto time_now = id(homeassistant_time).now();
        // Month conversion
        const char* months[] = {
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        };
        const char* month_str = months[time_now.month - 1];  // Month index starts from 0
        // Get the day
        int day = time_now.day_of_month;
        // Draw the date
        it.printf(250, 110, id(data_font), "%s %d", month_str, day);
        // Get the day of the week
        const char* days[] = {"Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"};
        const char* day_of_week = days[time_now.day_of_week];
        it.printf(250, 70, id(data_font), "%s", day_of_week);

        int x = 20, y = 180, w = 180, h = 120, r = 10, thickness = 4;
        // Draw four borders
        it.filled_rectangle(x + r, y, w - 2 * r, thickness); // Top border
        it.filled_rectangle(x + r, y + h - thickness, w - 2 * r, thickness); // Bottom border
        it.filled_rectangle(x, y + r, thickness, h - 2 * r); // Left border
        it.filled_rectangle(x + w - thickness, y + r, thickness, h - 2 * r); // Right border
        // Draw four rounded corners
        it.filled_circle(x + r, y + r, r); // Top-left corner
        it.filled_circle(x + w - r, y + r, r); // Top-right corner
        it.filled_circle(x + r, y + h - r, r); // Bottom-left corner
        it.filled_circle(x + w - r, y + h - r, r); // Bottom-right corner
        // Fill the inside with black to form a border
        it.filled_rectangle(x + thickness, y + thickness, w - 2 * thickness, h - 2 * thickness, COLOR_OFF);
        // Temperature
        it.printf(x+10, y+10, id(sensor_font), "Temperature");
        it.printf(x+45, y+75, id(img_font_sensor), TextAlign::CENTER, "\U000F050F");
        // Get temperature data
        it.printf(x+75,y+65, id(data_font), "%s°F", id(temp).state.c_str());

        x = 220;
        y = 180;
        // Draw four borders
        it.filled_rectangle(x + r, y, w - 2 * r, thickness); // Top border
        it.filled_rectangle(x + r, y + h - thickness, w - 2 * r, thickness); // Bottom border
        it.filled_rectangle(x, y + r, thickness, h - 2 * r); // Left border
        it.filled_rectangle(x + w - thickness, y + r, thickness, h - 2 * r); // Right border
        // Draw four rounded corners
        it.filled_circle(x + r, y + r, r); // Top-left corner
        it.filled_circle(x + w - r, y + r, r); // Top-right corner
        it.filled_circle(x + r, y + h - r, r); // Bottom-left corner
        it.filled_circle(x + w - r, y + h - r, r); // Bottom-right corner
        // Fill the inside with black to form a border
        it.filled_rectangle(x + thickness, y + thickness, w - 2 * thickness, h - 2 * thickness, COLOR_OFF);
        // Humidity
        it.printf(x+10, y+10, id(sensor_font), "Humidity");
        it.printf(x+45, y+75, id(img_font_sensor), TextAlign::CENTER, "\U000F058E");
        // Get humidity data
        it.printf(x+75,y+65, id(data_font), "%s%%", id(humi).state.c_str());

        x = 20;
        y = 320;
        // Draw four borders
        it.filled_rectangle(x + r, y, w - 2 * r, thickness); // Top border
        it.filled_rectangle(x + r, y + h - thickness, w - 2 * r, thickness); // Bottom border
        it.filled_rectangle(x, y + r, thickness, h - 2 * r); // Left border
        it.filled_rectangle(x + w - thickness, y + r, thickness, h - 2 * r); // Right border
        // Draw four rounded corners
        it.filled_circle(x + r, y + r, r); // Top-left corner
        it.filled_circle(x + w - r, y + r, r); // Top-right corner
        it.filled_circle(x + r, y + h - r, r); // Bottom-left corner
        it.filled_circle(x + w - r, y + h - r, r); // Bottom-right corner
        // Fill the inside with black to form a border
        it.filled_rectangle(x + thickness, y + thickness, w - 2 * thickness, h - 2 * thickness, COLOR_OFF);
        // Air Pressure
        it.printf(x+10, y+10, id(sensor_font), "Air Pressure");
        it.printf(x+45, y+75, id(img_font_sensor), TextAlign::CENTER, "\U000F0D60");
        // Get atmospheric pressure data
        it.printf(x+85,y+50, id(data_font), "%s", id(press).state.c_str());
        it.printf(x+85,y+78, id(sensor_font), "inHg");

        x = 220;
        y = 320;
        // Draw four borders
        it.filled_rectangle(x + r, y, w - 2 * r, thickness); // Top border
        it.filled_rectangle(x + r, y + h - thickness, w - 2 * r, thickness); // Bottom border
        it.filled_rectangle(x, y + r, thickness, h - 2 * r); // Left border
        it.filled_rectangle(x + w - thickness, y + r, thickness, h - 2 * r); // Right border
        // Draw four rounded corners
        it.filled_circle(x + r, y + r, r); // Top-left corner
        it.filled_circle(x + w - r, y + r, r); // Top-right corner
        it.filled_circle(x + r, y + h - r, r); // Bottom-left corner
        it.filled_circle(x + w - r, y + h - r, r); // Bottom-right corner
        // Fill the inside with black to form a border
        it.filled_rectangle(x + thickness, y + thickness, w - 2 * thickness, h - 2 * thickness, COLOR_OFF);
        // Wind Speed
        it.printf(x+10, y+10, id(sensor_font), "Wind Speed");
        it.printf(x+45, y+75, id(img_font_sensor), TextAlign::CENTER, "\U000F059D");
        // Get wind speed data
        it.printf(x+85,y+50, id(data_font), "%s", id(wind).state.c_str());
        it.printf(x+85,y+78, id(sensor_font), "mph");

        // Draw a vertical line
        it.filled_rectangle(430, 30, 5, 430);
        // Right section
        it.printf(540, 40, id(data_font), "Calendar");

        // Define event structure
        struct Event {
            std::string message;
            std::string start_time;
            std::string end_time;
            time_t start_timestamp;
        };

        // Parse time string to time_t (UNIX timestamp)
        auto parse_time = [](const std::string &time_str) -> time_t {
            struct tm timeinfo = {};
            if (strptime(time_str.c_str(), "%Y-%m-%d %H:%M:%S", &timeinfo) == nullptr) {
                return 0;  // Invalid time
            }
            return mktime(&timeinfo);
        };

        // Create event list
        std::vector<Event> events = {
            {id(ha_calendar_event_1).state, id(ha_calendar_start_time_1).state, id(ha_calendar_end_time_1).state, parse_time(id(ha_calendar_start_time_1).state)},
            {id(ha_calendar_event_2).state, id(ha_calendar_start_time_2).state, id(ha_calendar_end_time_2).state, parse_time(id(ha_calendar_start_time_2).state)},
            {id(ha_calendar_event_3).state, id(ha_calendar_start_time_3).state, id(ha_calendar_end_time_3).state, parse_time(id(ha_calendar_start_time_3).state)}
        };
        ESP_LOGD("myCalendar", "Start Time: %s -> %ld", id(ha_calendar_start_time_1).state.c_str(), parse_time(id(ha_calendar_start_time_1).state));
        ESP_LOGD("myCalendar", "Start Time: %s -> %ld", id(ha_calendar_start_time_2).state.c_str(), parse_time(id(ha_calendar_start_time_2).state));
        ESP_LOGD("myCalendar", "Start Time: %s -> %ld", id(ha_calendar_start_time_3).state.c_str(), parse_time(id(ha_calendar_start_time_3).state));

        // Filter invalid events (start_timestamp == 0)
        events.erase(std::remove_if(events.begin(), events.end(), [](const Event &e) { return e.start_timestamp == 0; }), events.end());

        // Sort by `start_timestamp` (earliest to latest)
        std::sort(events.begin(), events.end(), [](const Event &a, const Event &b) {
            return a.start_timestamp < b.start_timestamp;
        });

        // Define a function to format time
        auto format_time = [](std::string time_str) -> std::string {
            struct tm timeinfo;
            if (strptime(time_str.c_str(), "%Y-%m-%d %H:%M:%S", &timeinfo) == nullptr) {
                return "Invalid";
            }
            char buffer[10];
            strftime(buffer, sizeof(buffer), "%I:%M%p", &timeinfo); // Convert to 12-hour format
            return std::string(buffer);
        };
        // Parse date
        auto format_date = [](const std::string &time_str) -> std::string {
            struct tm timeinfo = {};
            if (strptime(time_str.c_str(), "%Y-%m-%d %H:%M:%S", &timeinfo) == nullptr) {
                return "Invalid";
            }
            char buffer[6];  // Need to store "MM-DD\0"
            strftime(buffer, sizeof(buffer), "%m-%d", &timeinfo);
            return std::string(buffer);
        };

        // Draw events
        int even_x_start_offset = 460;
        int even_y_start_offset = 80;
        for (const auto &event : events) {
          if(even_y_start_offset >= 420){
            break;
          }

          // Format time
          std::string formatted_date = format_date(event.start_time);
          std::string formatted_start_time = format_time(event.start_time);
          std::string formatted_end_time = format_time(event.end_time);

          // Combine time range string
          std::string time_range = formatted_start_time + " - " + formatted_end_time;
          time_range = formatted_date + "  " + time_range;
          if(formatted_start_time == "Invalid" || formatted_end_time == "Invalid"){
            time_range.clear();
          }
          // Display time range, e.g., "10:00AM - 11:00AM"
          it.printf(even_x_start_offset, even_y_start_offset, id(sensor_font), "%s", time_range.c_str());
          even_y_start_offset += 30;
          // Display event name
          it.printf(even_x_start_offset, even_y_start_offset, id(sensor_font), "%s", event.message.c_str());
          even_y_start_offset += 40;
        }
      }


```

</details>

当您看到如下图所示的反馈时，表示代码正在成功运行。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/38.png" style={{width:600, height:'auto'}}/></div>

## 常见问题

#### Q1: 为什么没有数据？

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/104.JPG" style={{width:'80%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/100.png" style={{width:'100%', height:'auto'}}/></div>
</div>

在这种情况下，您应该前往设置 -> 设备与服务 -> 集成来**重新配置**设备。没有找到您的电子纸面板？尝试重启 HA。

<div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/101.png" style={{width:'100%', height:'auto'}}/></div>

#### Q2: 为什么我无法在《Home Assistant》中获取这些数据？ {#port}

在这种情况下，您应该前往设置 -> 设备与服务 -> 集成来**添加**您的设备到 HA。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/11.png" style={{width:800, height:'auto'}}/></div>

#### <span id="deepmode">Q3</span>: 当设备处于深度睡眠模式时，如何上传新程序？

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/103.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/102.png" style={{width:'100%', height:'auto'}}/></div>
</div>

当设备处于深度睡眠模式时，您无法直接上传新程序。

1. 首先，确保设备已开启，然后按下板子背面的**Boot**按钮。

2. 点击一次**Reset**按钮并释放**Boot**按钮。

3. 之后，关闭电池开关并拔掉电源线。

4. 最后，重新插入线缆并上传新程序。

#### Q4: 电池能持续多长时间？

:::tip
充电时记得打开电池按钮。否则，电池无法充电。
:::

经过我们的测试，每6小时刷新一次屏幕，在深度睡眠模式下电池大约可以持续3个月。

#### <span id="Q5">Q5</span>: 电子纸面板无法连接到您的计算机？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/68.png" style={{width:600, height:'auto'}}/></div>

尝试多次拔插，或者根据提示安装驱动程序。

#### <span id="Q6">Q6</span>: Wi-Fi上传程序失败？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/74.png" style={{width:800, height:'auto'}}/></div>

在这种情况下，您的电子纸面板处于离线状态或深度睡眠模式。请让它上线或唤醒它。

## 资源

- **[STP]**: [3D 模型外壳](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3D_model.zip)
- **[PDF]**: [电子纸驱动板原理图 PDF](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)

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
