---
title: MR60FDA2 跌倒检测传感器与 Home Assistant
description: MR60FDA2 跌倒检测毫米波传感器与 Home Assistant
keywords:
- mmwave
- radar
- MR60FDA2
image: https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.jpg
slug: /cn/ha_with_mr60fda2
sidebar_position: 1
last_update:
  date: 10/15/2024
  author: Spencer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::danger 关于雷达在 Home Assistant 中的使用范围
雷达固件更新和 ESPHome YAML 更新是两个不同的软件。ESPHome YAML 可以通过 OTA 更新，而雷达板只能通过外壳内的 USB 使用 SEEED 提供的专用软件进行更新。您可以自定义 ESPHome 软件，但[无法自定义雷达固件](https://wiki.seeedstudio.com/cn/getting_started_with_mr60fda2_mmwave_kit/#module-firmware-upgrade)。Seeed Studio 只有在您进行商业应用时才允许雷达定制。
:::

## 介绍 {#introduction}

MR60FDA2 是一个 60GHz 毫米波跌倒检测传感器模块，专为与 XIAO ESP32C6 微控制器集成而设计。这个先进的传感器利用毫米波技术提供非侵入式的生命体征监测和存在检测。

本指南旨在为使用 XIAO ESP32C6 微控制器将 MR60FDA2 毫米波传感器与 Home Assistant 集成提供清晰而全面的演练。这种 Home Assistant 集成使用户能够通过先进的传感功能增强其智能家居系统，实现自动响应和实时监控，适用于各种应用（例如，老年人护理的跌倒检测、安全应用）。

<div><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-sensor-light-on.jpg" style={{"border-radius": '6px'}}/></div>

## 产品概述

<div class="table-center">
   <table align="center">
      <tr>
         <th>MR60FDA2 毫米波传感器</th>
      </tr>
      <tr>
         <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.jpg" style={{width:360, height:'auto', "border-radius": '6px'}}/></div></td>
      </tr>
      <tr>
         <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
               <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60FDA2-60GHz-mmWave-Sensor-Fall-Detection-Module-p-5946.html?utm_source=wiki" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong></a>
            </div>
         </td>
      </tr>
   </table>
</div>

### MR60FDA2 毫米波传感器与 XIAO ESP32C6

要使用 XIAO ESP32C6 将 MR60FDA2 毫米波传感器有效集成到 Home Assistant，请按照以下关键步骤操作：

1. **[设置 Home Assistant](#setting-up-home-assistant)**：首先安装和配置 Home Assistant 来管理您的智能家居设备，确保与传感器的无缝连接。
2. **[连接 MR60FDA2 传感器](#discovering-and-adding-the-device-in-home-assistant)**：学习如何发现并将 MR60FDA2 传感器添加到您的 Home Assistant 设置中，实现生命体征的实时监测。
3. **[监测传感器数据](#sensor-data-monitoring)**：集成完成后，您可以有效监测传感器数据以检查是否发生跌倒。
4. **[实施自动化](#implementing-automation-in-home-assistant)**：探索 Home Assistant 强大的自动化功能，基于传感器数据创建响应式操作，增强您的智能家居环境。
5. **[使用 ESPHome 修改固件](#modifying-the-firmware-with-esphome)**：利用 ESPHome 自定义传感器功能，根据您的特定需求进行定制，获得更大的灵活性和控制力。

这些步骤将指导您使用 MR60FDA2 毫米波传感器和 XIAO ESP32C6 集成。

## 入门指南 {#getting-started}

:::note 注意
请注意，当我们提到固件更新或修改时，我们特指 XIAO ESP32C6 上的固件。
:::

要成功将 MR60FDA2 毫米波传感器与 Home Assistant 集成，您需要以下组件：

- **Home Assistant**：管理传感器数据的智能家居平台。
- **ESPHome 插件**：能够轻松配置和管理 ESP32 设备的固件。

### 步骤 1：设置 Home Assistant {#setting-up-home-assistant}

1. **安装**：为了获得最佳性能，建议在虚拟机或树莓派上安装 [Home Assistant OS](https://www.home-assistant.io/installation/)。请按照 Home Assistant 官网上的官方安装指南进行操作。
2. **启用 ESPHome 插件**：
   - 访问 Home Assistant 仪表板。
   - 导航到"插件"部分并搜索 ESPHome 插件。
   - 点击"安装"然后点击"启动"来启用它。
   - 安装完成后，配置插件以确保与 XIAO ESP32C6 的正常通信。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/2.png" style={{width:1000, height:'auto'}}/></div>

通过收集必要的组件并设置带有 ESPHome 插件的 Home Assistant，您就可以准备进行 MR60FDA2 毫米波传感器的集成了。

:::tip 安装 Home Assistant
我们还为一些 Seeed Studio 产品编写了如何安装 Home Assistant 的教程，请参考它们。

- [在 ODYSSEY-X86 上开始使用 Home Assistant](/cn/ODYSSEY-X86-Home-Assistant)
- [在 reTerminal 上开始使用 Home Assistant](/cn/reTerminal_Home_Assistant)
- [在 LinkStar H68K/reRouter CM4 上开始使用 Home Assistant](/cn/h68k-ha-esphome)
:::

### 步骤 2：准备套件

默认情况下，您的设备（XIAO ESP32C6）预装了用于呼吸和心率检测的固件。但是，在两种情况下您可能需要更新固件：

1. **重新刷写固件**：如果现有固件损坏或您需要重新开始。
2. **升级固件**：如果有具有改进功能的新版本固件。

有两种简单的刷写固件方法：

<Tabs>
<TabItem value='Web Tool'>

您可以使用这个 [Web Tool](https://limengdu.github.io/MR60FDA2_ESPHome_external_components/) 来获得简单直接的固件刷写方法。只需按照屏幕上的说明操作即可。

- 点击 `CONNECT` 按钮开始连接。工具将自动更新固件。

如果出现问题，请按照屏幕上的故障排除步骤操作，或切换到 `ESPHome Web` 方法来完成过程。

</TabItem>
<TabItem value='ESPHome Web'>

对于这种方法，您需要从[这里](https://github.com/limengdu/MR60FDA2_ESPHome_external_components/releases)下载 `bin` 固件文件（您需要解压下载的文件）。

1. 将传感器套件连接到您的 PC。
2. 访问 [ESPHome Web](https://web.esphome.io/) 页面。
3. 选择带有 `*.factory.bin` 后缀的固件文件。

观看以下视频了解通过 ESPHome Web 刷写固件的详细步骤：

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="Install firmware via ESPHome Web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</TabItem>
</Tabs>

使用任一方法，您都将更新固件并准备好与 Home Assistant 集成。

#### 连接到套件的热点

使用固件，您可以为传感器套件供电，将出现一个 Wi-Fi 接入点：`seeedstudio-mr60fda2`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/hotspot-name.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

导航到 `192.168.4.1` 来配置您的 Home Assistant 服务器的本地网络设置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/opt-for-wifi-ap.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-enter-psw.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

### 步骤 3：在 Home Assistant 中发现和添加设备 {#discovering-and-adding-the-device-in-home-assistant}

在本节中，我们将使用 Home Assistant 应用程序来完成这个过程，其逻辑与网页版相同。

1. **打开应用**：启动应用后，选择您的 Home Assistant 服务器。应用会自动找到您的服务器。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-server-option.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>
2. **创建账户**：如果您还没有创建账户，需要先创建一个。之后，使用您的凭据登录。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-login.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>
3. **导航到集成页面**：登录后，转到 Home Assistant 中的"集成"页面。如果您已安装 ESPHome 插件，并且 XIAO ESP32C6 和您的 Home Assistant 服务器都在同一网络上，您应该会看到设备 `Seeed Studio MR60FDA2 Kit {device-mac-address}` 出现在已发现的设备下。
4. **添加设备**：点击将设备添加到您的 Home Assistant 设置中。
  <div class="img-container" align="center">
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-device-find.jpg" alt="find device"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-device-submit.jpg" alt="submit a device"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-device-add.jpg" alt="area"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-addon-device.JPG" alt="addon"/>
  </div>
  
  点击 `CONFIGURE` 按钮，按 `SUBMIT` 按钮确认，并将设备分配到您首选的区域（例如，浴室）。之后，设备将通过您的 ESPHome 集成进行管理，在 Home Assistant 中实现完全控制和监控。

  :::note
  如果在设置过程中提示不要求您分配区域，您可以稍后通过导航到 Home Assistant 中的"集成"部分，选择您的设备，并从那里配置区域来手动分配。
  :::

## 监控和控制 {#monitoring-and-control}

完成这些步骤后，您将成功集成并添加 MR60FDA2 传感器到 Home Assistant，启用监控功能。

### 传感器数据监控

在本节中，传感器被添加到"浴室"，导航到"概览"选项卡。您将看到毫米波卡片显示在浴室部分。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-sensor-data.jpg" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

### RGB 灯光控制

在本节中，我们将探索如何控制 RGB 灯光。

<div class="img-container">
   <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-sensor-light-on.jpg" style={{"border-radius": '6px'}}/>
   <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/light-on.jpg" style={{"border-radius": '6px'}}/>
</div>

点击相应的框来直接控制 RGB 灯光：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-light-panel.jpg" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-control-light.jpg" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

### 下一步 {#next-steps}

现在您已成功将 MR60FDA2 毫米波传感器与 XIAO ESP32C6 和 Home Assistant 集成，您可以探索进一步的增强功能，以充分利用您的设置。以下是两个需要考虑的重要方向：

#### 在 Home Assistant 中实现自动化

Home Assistant 强大的自动化功能允许您基于从 MR60FDA2 传感器收集的数据创建更具响应性的智能家居环境。这意味着您可以设置基于与运动或心跳检测相关的特定触发器自动发生的操作。

以下是逐步实现自动化的方法：

1. **导航到自动化部分**：在您的 Home Assistant 仪表板中，找到并点击"自动化"选项卡。此区域专门用于在您的家中创建和管理自动化操作。
2. **创建新的自动化**：点击"添加自动化"按钮。Home Assistant 提供了一个用户友好的向导，指导您完成设置自动化的过程。
3. **定义触发器**：基于 MR60FDA2 传感器的数据选择触发器。例如，您可以设置自动化在有人跌倒时触发。这意味着您的自动化可以立即响应传感器的读数。
4. **设置条件（可选）**：条件允许您细化自动化应何时执行。例如，您可能希望灯光仅在外面天黑时或特定用户在家时才打开。
5. **确定操作**：指定当满足触发条件时应发生什么操作。操作可以包括打开灯光、发送通知，甚至调整恒温器设置。例如，您可以创建一个在检测到运动时打开 RGB 灯光的操作，增强安全性和舒适性。
6. **保存和测试**：配置自动化后，保存它并测试其功能。走过传感器看看灯光是否按预期打开。如果出现任何问题，您可以返回自动化设置进行故障排除和调整。

通过利用 Home Assistant 的自动化功能，您可以创建一个真正智能的环境，响应您的运动和健康指标，确保您的生活空间无缝适应您的生活方式。

## 使用 ESPHome 修改固件

使用 XIAO ESP32C6 的一个重要优势是它与 ESPHome 的兼容性，ESPHome 是一个用于管理和自定义微控制器固件的强大工具。通过 ESPHome，您可以直接修改固件，以根据您的特定需求定制 MR60FDA2 毫米波传感器的功能。

要开始使用 ESPHome，请按照以下步骤操作：

1. **访问 ESPHome 仪表板**：在 Home Assistant 中，导航到 ESPHome 插件。您应该会看到您的 XIAO ESP32C6 列在设备中。
2. **创建新配置**：点击设备以打开其配置。在这里，您可以调整传感器的灵敏度、报告间隔和输出格式等设置。ESPHome 使用 YAML 配置格式，这种格式用户友好，允许您定义各种参数。您可以使用以下模板 YAML 文件作为配置的起点，该文件专为 MR60FDA2 传感器设计：

    ```yaml showLineNumbers title=example/mr60fda2.yaml
    # template from https://github.com/limengdu/MR60FDA2_ESPHome_external_components/blob/main/example/mr60fda2.yaml
    
    substitutions:
      name: "seeedstudio-mr60fda2-kit"
      friendly_name: "Seeed Studio MR60FDA2 Kit"

    esphome:
      name: "${name}"
      friendly_name: "${friendly_name}"
      name_add_mac_suffix: true
      project:
        name: "seeedstudio.mr60fda2_kit"
        version: "1.0"
      platformio_options:
        board_upload.maximum_size: 4194304
      min_version: "2024.3.2" # Fix logger compile error on ESP32-C6 esphome#6323

    esp32:
      board: esp32-c6-devkitc-1
      variant: esp32c6
      flash_size: 4MB # upload.flash_size
      framework:
        type: esp-idf
        platform_version: 6.5.0 # Need at least 6.4 for ESP32-C6

        # Tasmota's release of 5.1.3 works, first-party release does not LOL
        version: 5.1.3
        source: https://github.com/tasmota/esp-idf/releases/download/v5.1.3.240325/esp-idf-v5.1.3.zip

        # Fix flash size by ensuring IDF flash size is also set (was defaulting to 2MB?!?)
        # See https://github.com/esphome/issues/issues/5404
        sdkconfig_options:
          CONFIG_ESPTOOLPY_FLASHSIZE_4MB: y

    external_components:
      - source:
          type: git
          url: https://github.com/ssieb/esphome
          ref: adc
        components: [ adc ]
        refresh: 1min
      - source:
          type: git
          url: https://github.com/limengdu/MR60FDA2_ESPHome_external_components
          ref: main
        components: [ seeed_mr60fda2 ]
        refresh: 0s

    # Enable logging
    logger:
      hardware_uart: USB_SERIAL_JTAG
      level: DEBUG

    # Enable Home Assistant API
    api:

    ota:
      - platform: esphome

    wifi:
      # Enable fallback hotspot (captive portal) in case wifi connection fails
      ap:
        ssid: "seeedstudio-mr60fda2"

    captive_portal:

    # For XIAO ESP32C6 Onboard LED
    # light:
    #   - platform: status_led
    #     name: "Switch state"
    #     pin: GPIO15

    light:
      - platform: esp32_rmt_led_strip
        id: led_ring
        name: "Seeed MR60FDA2 RGB Light"
        pin: GPIO1
        num_leds: 1
        rmt_channel: 0
        rgb_order: GRB
        chipset: ws2812

    i2c:
      sda: GPIO22
      scl: GPIO23
      scan: true
      id: bus_a

    sensor:
      - platform: bh1750
        name: "Seeed MR60FDA2 Illuminance"
        address: 0x23
        update_interval: 1s

    uart:
      id: seeed_mr60fda2_uart
      baud_rate: 115200
      rx_pin: 17
      tx_pin: 16
      parity: NONE
      stop_bits: 1

    seeed_mr60fda2:
      id: my_seeed_mr60fda2
      uart_id: seeed_mr60fda2_uart

    binary_sensor:
      - platform: seeed_mr60fda2
        people_exist:
          name: "Person Information"
        fall_detected:
          name: "Falling Information"

    button:
      - platform: seeed_mr60fda2
        get_radar_parameters:
          name: "Get Radar Parameters"
        factory_reset:
          name: "Reset"

    select:
      - platform: seeed_mr60fda2
        install_height:
          name: "Set Install Height"
        height_threshold:
          name: "Set Height Threshold"
        sensitivity:
          name: "Set Sensitivity"
    ```

3. **自定义功能**：您可以通过探索 ESPHome 中提供的各种功能来增强传感器的能力，允许灵活调整以满足您的特定需求。
4. **上传更新的固件**：进行修改后，保存配置。ESPHome 仪表板允许您直接通过无线方式上传固件。只需点击 `Upload` 按钮，并按照提示完成该过程。这种简化的方法使保持固件最新变得容易。
5. **测试和迭代**：上传完成后，实时测试您的更改。监控传感器的性能以确保其按预期运行。如果遇到任何问题，请重新访问 ESPHome 仪表板以优化您的设置。这种迭代方法使您能够持续改进固件，确保其有效满足您的要求。

通过使用 ESPHome，您可以对传感器设置进行持续改进，使其适应您不断变化的需求。这种能力不仅增强了项目的功能性，还为学习和实验物联网开发提供了平台。

通过这些步骤，您可以最大化 MR60FDA2 毫米波传感器和 XIAO ESP32C6 设置的功能，将其转变为根据您的偏好和需求量身定制的高度自定义和响应式智能家居系统。

## 资源

- [ESPHome — ESPHome](https://esphome.io/)
- [Installation - Home Assistant](https://www.home-assistant.io/installation/)
- [limengdu/MR60FDA2_ESPHome_external_components](https://limengdu.github.io/MR60FDA2_ESPHome_external_components)

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
