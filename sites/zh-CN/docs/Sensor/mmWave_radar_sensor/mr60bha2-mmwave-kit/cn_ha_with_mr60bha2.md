---
title: MR60BHA2 呼吸心跳传感器与 Home Assistant
description: | 
  MR60BHA2 心跳毫米波传感器与 Home Assistant
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/ha_with_mr60bha2
keywords:
  - ESPHome
sidebar_position: 1
last_update:
  date: 09/23/2024
  author: Spencer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::danger 关于雷达在 Home Assistant 中的使用范围
雷达固件更新和 ESPHome YAML 更新是两个不同的软件。ESPHome YAML 可以通过 OTA 更新，而雷达板只能通过外壳内的 USB 使用 SEEED 提供的专用软件进行更新。您可以自定义 ESPHome 软件，但[不能自定义雷达固件](https://wiki.seeedstudio.com/cn/getting_started_with_mr60bha2_mmwave_kit/#module-firmware-upgrade)。Seeed Studio 只有在您进行商业应用时才允许雷达定制。
:::

## 介绍 {#introduction}

MR60BHA2 是一个 60GHz 毫米波呼吸和心跳检测传感器模块，专为与 XIAO ESP32C6 微控制器集成而设计。这个先进的传感器利用毫米波技术提供非侵入式的生命体征监测和存在检测。

本指南旨在为使用 XIAO ESP32C6 微控制器将 MR60BHA2 毫米波传感器与 Home Assistant 集成提供清晰而全面的演练。通过遵循本指南，用户将学习如何设置传感器进行心跳检测，将其连接到 Home Assistant 环境，并利用 ESPHome 有效地管理和监控设备。

这种集成使用户能够通过先进的传感功能增强其智能家居系统，实现自动响应和各种应用的实时监控。

<div><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-sensor-light-on.png" style={{"border-radius": '6px'}}/></div>

## 产品概述

<div class="table-center">
   <table align="center">
      <tr>
         <th>MR60BHA2 毫米波传感器</th>
      </tr>
      <tr>
         <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/22-114993387-mr60bha2-60ghz-mmwave-45font.jpg" style={{width:360, height:'auto', "border-radius": '6px'}}/></div></td>
      </tr>
      <tr>
         <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
               <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60BHA2-60GHz-mmWave-Sensor-Breathing-and-Heartbeat-Module-p-5945.html?utm_source=wiki" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong></a>
            </div>
         </td>
      </tr>
   </table>
</div>

### MR60BHA2 毫米波传感器与 XIAO ESP32C6

要使用 XIAO ESP32C6 有效地将 MR60BHA2 毫米波传感器与 Home Assistant 集成，请遵循以下基本步骤：

:::caution
请确保您已将 MR60BHA2 模块的[固件升级](/cn/getting_started_with_mr60bha2_mmwave_kit#module-firmware-upgrade)到最新版本。  
最新固件添加了人体存在检测和人员检测功能。
:::

1. **[设置 Home Assistant](#setting-up-home-assistant)**：首先安装和配置 Home Assistant 来管理您的智能家居设备，确保与传感器的无缝连接。
2. **[连接 MR60BHA2 传感器](#discovering-and-adding-the-device-in-home-assistant)**：学习如何发现并将 MR60BHA2 传感器添加到您的 Home Assistant 设置中，实现生命体征的实时监控。
3. **[监控传感器数据](#sensor-data-monitoring)**：一旦集成，您可以有效地监控传感器数据，从而深入了解心率和呼吸模式。
4. **[实施自动化](#implementing-automation-in-home-assistant)**：探索 Home Assistant 强大的自动化功能，根据传感器数据创建响应式操作，增强您的智能家居环境。
5. **[使用 ESPHome 修改固件](#modifying-the-firmware-with-esphome)**：利用 ESPHome 自定义传感器的功能，根据您的特定需求进行定制，以获得更大的灵活性和控制力。

这些步骤将指导您完成集成过程，帮助您充分利用 MR60BHA2 毫米波传感器和 XIAO ESP32C6 设置。

## 入门指南 {#getting-started}

:::note 注意
请注意，当我们提到固件更新或修改时，我们特指 XIAO ESP32C6 上的固件。
:::

要成功将 MR60BHA2 毫米波传感器与 Home Assistant 集成，您需要以下组件：

- **Home Assistant**：管理传感器数据的智能家居平台。
- **ESPHome 插件**：能够轻松配置和管理 ESP32 设备的固件。

### 步骤 1：设置 Home Assistant {#setting-up-home-assistant}

1. **安装**：为了获得最佳性能，建议在虚拟机或 Raspberry Pi 上安装 [Home Assistant OS](https://www.home-assistant.io/installation/)。请遵循 Home Assistant 网站上的官方安装指南。
2. **启用 ESPHome 插件**：
   - 访问 Home Assistant 仪表板。
   - 导航到"插件"部分并搜索 ESPHome 插件。
   - 点击"安装"然后"启动"来启用它。
   - 安装完成后，配置插件以确保与 XIAO ESP32C6 的正确通信。

:::caution 注意
由于新图标的原因，请安装 ESPHome 插件版本 2024.12.0 及以上。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enabling_ESPHome_Add-on.png" style={{width:1000, height:'auto'}}/></div>

通过收集必要的组件并使用 ESPHome 插件设置 Home Assistant，您将准备好继续进行 MR60BHA2 毫米波传感器的集成。

:::tip 安装 Home Assistant
我们还为一些 Seeed Studio 产品编写了如何安装 Home Assistant 的指南，请参考它们。

- [在 ODYSSEY-X86 上开始使用 Home Assistant](/cn/ODYSSEY-X86-Home-Assistant)
- [在 reTerminal 上开始使用 Home Assistant](/cn/reTerminal_Home_Assistant)
- [在 LinkStar H68K/reRouter CM4 上开始使用 Home Assistant](/cn/h68k-ha-esphome)
:::

### 步骤 2：准备套件

默认情况下，您的设备（XIAO ESP32C6）预装了用于呼吸和心率检测的固件。但是，在两种情况下您可能需要更新固件：

1. **重新刷写固件**：如果现有固件损坏或您需要重新开始。
2. **升级固件**：如果有具有改进功能的新版本固件。

有两种简单的固件刷写方法：

:::caution
Firefox 不支持在 ESP 设备上刷写固件。请改用 Google Chrome 或 Microsoft Edge。
:::

<Tabs>
<TabItem value='Web Tool'>

您可以使用这个[网页工具](https://limengdu.github.io/MR60BHA2_ESPHome_external_components/)来简单直接地刷写固件。只需按照屏幕上的说明操作。

- 点击 `CONNECT` 按钮开始连接。工具将自动更新固件。

如果出现问题，请按照屏幕上的故障排除步骤操作，或切换到 `ESPHome Web` 方法来完成过程。

</TabItem>
<TabItem value='ESPHome Web'>

对于这种方法，您需要从[这里](https://github.com/limengdu/MR60BHA2_ESPHome_external_components/releases)下载 `bin` 固件文件（您需要解压下载的文件）。

1. 将传感器套件连接到您的 PC。
2. 访问 [ESPHome Web](https://web.esphome.io/) 页面。
3. 选择带有 `*.factory.bin` 后缀的固件文件。

观看以下视频，了解通过 ESPHome Web 刷写固件的详细演练：

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="Install firmware via ESPHome Web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</TabItem>
</Tabs>

使用任一方法，您都将更新固件并准备好与 Home Assistant 集成。

#### 连接到套件的热点

使用固件，您可以打开传感器套件的电源，将出现一个 Wi-Fi 接入点：`seeedstudio-mr60bha2`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/hotspot-name.png" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

导航到 `192.168.4.1` 来配置您的 Home Assistant 服务器的本地网络设置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/opt-for-wifi-ap.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enter-psw.JPEG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

### 步骤 3：在 Home Assistant 中发现和添加设备 {#discovering-and-adding-the-device-in-home-assistant}

在本节中，我们将使用 Home Assistant 应用程序进行演示，其逻辑与网页版相同。

1. **打开应用程序**：启动应用程序后，选择您的 Home Assistant 服务器。应用程序将自动找到您的服务器。

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-server-option.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>
2. **创建账户**：如果您还没有创建账户，需要先创建一个。之后，使用您的凭据登录。
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-login.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>
3. **导航到集成页面**：登录后，转到 Home Assistant 中的"集成"页面。如果您已安装 ESPHome 插件，并且 XIAO ESP32C6 和您的 Home Assistant 服务器都在同一网络上，您应该会看到设备 `Seeed Studio MR60BHA2 Kit {device-mac-address}` 出现在已发现的设备下。
4. **添加设备**：点击将设备添加到您的 Home Assistant 设置中。
  <div class="img-container" align="center">
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-device-find.JPG" alt="find device"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-device-submit.JPG" alt="submit a device"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-device-add.JPG" alt="area"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-addon-device.JPG" alt="addon"/>
  </div>

  点击 `CONFIGURE` 按钮，按下 `SUBMIT` 按钮确认，并将设备分配到您首选的区域（例如，卧室）。之后，设备将通过您的 ESPHome 集成进行管理，在 Home Assistant 中实现完全控制和监控。

## 监控和控制 {#监控和控制}

通过遵循上述步骤，您将成功发现并将 MR60BHA2 传感器添加到您的 Home Assistant 中，实现实时监控和控制。

### 传感器数据监控

现在传感器已添加到"卧室"，导航到"概览"选项卡。您将看到 mmWave 卡片显示在卧室部分。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-sensor-data-with-person-detection.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

### RGB 灯光控制

在本节中，我们将探索如何控制 RGB 灯光。

<div class="img-container">
   <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-sensor-light-on.png" style={{"border-radius": '6px'}}/>
   <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/light-on.jpg" style={{"border-radius": '6px'}}/>
</div>

点击相应的框直接控制 RGB 灯光：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-light-panel.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

<iframe class="video-mp4" src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-control-light.mp4" title="Home Assistant Control RGB Light" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>

### 下一步 {#下一步}

现在您已成功将 MR60BHA2 mmWave 传感器与 XIAO ESP32C6 和 Home Assistant 集成，您可以探索进一步的增强功能，以充分利用您的设置。以下是两个需要考虑的重要方向：

#### 在 Home Assistant 中实现自动化

Home Assistant 强大的自动化功能允许您基于从 MR60BHA2 传感器收集的数据创建更具响应性的智能家居环境。这意味着您可以设置基于与运动或心跳检测相关的特定触发器自动发生的操作。

以下是逐步实现自动化的方法：

1. **导航到自动化部分**：在您的 Home Assistant 仪表板中，找到并点击"自动化"选项卡。此区域专门用于在您的家中创建和管理自动化操作。
2. **创建新的自动化**：点击"添加自动化"按钮。Home Assistant 提供了一个用户友好的向导，指导您完成设置自动化的过程。
3. **定义触发器**：基于 MR60BHA2 传感器的数据选择触发器。例如，您可以设置自动化在传感器检测到运动或特定心跳模式时触发。这意味着您的自动化可以立即响应传感器的读数。
4. **设置条件（可选）**：条件允许您细化自动化应何时执行。例如，您可能希望灯光仅在外面天黑时或特定用户在家时才打开。
5. **确定操作**：指定当满足触发条件时应发生什么操作。操作可以包括打开灯光、发送通知，甚至调整恒温器设置。例如，您可以创建一个在检测到运动时打开 RGB 灯光的操作，增强安全性和舒适性。
6. **保存和测试**：配置自动化后，保存它并测试其功能。走过传感器看看灯光是否按预期打开。如果出现任何问题，您可以返回自动化设置进行故障排除和调整。

通过利用 Home Assistant 的自动化功能，您可以创建一个真正智能的环境，响应您的运动和健康指标，确保您的生活空间无缝适应您的生活方式。

## 使用 ESPHome 修改固件

使用 XIAO ESP32C6 的一个重要优势是它与 ESPHome 的兼容性，ESPHome 是一个用于管理和自定义微控制器固件的强大工具。使用 ESPHome，您可以直接修改固件，将 MR60BHA2 mmWave 传感器的功能定制为您的特定需求。

要开始使用 ESPHome，请按照以下步骤操作：

1. **访问 ESPHome 仪表板**：在 Home Assistant 中，导航到 ESPHome 插件。您应该看到您的 XIAO ESP32C6 列在设备中。

2. **创建新配置**：点击设备打开其配置。在这里，您可以调整传感器的灵敏度、报告间隔和输出格式等设置。ESPHome 使用 YAML 配置格式，这是用户友好的，允许您定义各种参数。您可以使用以下模板 YAML 文件作为配置的起点，该文件专为 MR60BHA2 传感器设计：

  ```yaml showLineNumbers title=example/mr60bha2.yaml
    # template from https://github.com/limengdu/MR60BHA2_ESPHome_external_components
    substitutions:
      name: "seeedstudio-mr60bha2-kit"
      friendly_name: "seeedstudio-mr60bha2-kit"

    esphome:
      name: "${name}"
      friendly_name: "${friendly_name}"
      name_add_mac_suffix: true
      project:
        name: "seeedstudio.mr60bha2_kit"
        version: "3.5"
      platformio_options:
        board_upload.maximum_size: 4194304
      min_version: "2024.3.2" # Fix logger compile error on ESP32-C6 esphome#6323


    esp32:
      board: esp32-c6-devkitc-1
      variant: esp32c6
      flash_size: 4MB # upload.flash_size
      framework:
        type: esp-idf

    # If you want to experience the latest components, you can remove this comment.
    # external_components:
    #   - source:
    #       type: git
    #       url: https://github.com/limengdu/MR60BHA2_ESPHome_external_components
    #       ref: main
    #     components: [ seeed_mr60bha2 ]
    #     refresh: 0s

    # Enable logging
    logger:
      hardware_uart: USB_SERIAL_JTAG
      level: DEBUG

    # Enable Home Assistant API
    api:

    ota:
      - platform: esphome

    # It is highly recommended to use secrets
  wifi:
    ssid: !secret wifi_ssid
    password: !secret wifi_password

      ap:
        ssid: "seeedstudio-mr60bha2"


    captive_portal:

    # For XIAO ESP32C6 Onboard LED
    # light:
    #   - platform: status_led
    #     name: "Switch state"
    #     pin: GPIO15


    light:
      - platform: esp32_rmt_led_strip
        id: led_ring
        name: "Seeed MR60BHA2 RGB Light"
        pin: GPIO1
        num_leds: 1
        rgb_order: GRB
        chipset: ws2812

    i2c:
      sda: GPIO22
      scl: GPIO23
      scan: true
      id: bus_a

    uart:
      id: uart_bus
      baud_rate: 115200
      rx_pin: 17
      tx_pin: 16
      parity: NONE
      stop_bits: 1

    seeed_mr60bha2:
      id: my_seeed_mr60bha2

    binary_sensor:
      - platform: seeed_mr60bha2
        has_target:
          name: "Person Information"

    sensor:
      - platform: bh1750
        name: "Seeed MR60BHA2 Illuminance"
        address: 0x23
        update_interval: 1s
      - platform: seeed_mr60bha2
        breath_rate:
          name: "Real-time respiratory rate"
        heart_rate:
          name: "Real-time heart rate"
        distance:
          name: "Distance to detection object"
        num_targets:
          name: "Target number"
  ```

3. **自定义功能**：您可以通过探索 ESPHome 中可用的各种功能来增强传感器的能力，允许灵活调整以适应您的特定需求。

4. **上传更新的固件**：进行修改后，保存配置。ESPHome 仪表板允许您直接通过无线方式上传固件。只需点击 `Upload` 按钮，并按照提示完成过程。这种简化的方法使保持固件最新变得容易。

5. **测试和迭代**：上传完成后，实时测试您的更改。监控传感器的性能以确保其按预期运行。如果遇到任何问题，请重新访问 ESPHome 仪表板以完善您的设置。这种迭代方法使您能够持续改进固件，确保其有效满足您的要求。

通过利用 ESPHome，您可以对传感器设置进行持续改进，使其适应您不断变化的需求。这种能力不仅增强了项目的功能，还为学习和实验 IoT 开发提供了平台。

通过这些步骤，您可以最大化 MR60BHA2 mmWave 传感器和 XIAO ESP32C6 设置的功能，将其转变为根据您的偏好和需求量身定制的高度自定义和响应式智能家居系统。

## 资源

- [ESPHome — ESPHome](https://esphome.io/)
- [安装 - Home Assistant](https://www.home-assistant.io/installation/)
- [limengdu/MR60BHA2_ESPHome_external_components](https://github.com/limengdu/MR60BHA2_ESPHome_external_components)

## 故障排除

### 雷达传感器数据报告机制说明（适用于 v1.6.12 及更高版本）

本部分详细说明了雷达传感器各种检测功能报告数据的时机、准确性和所需条件。旨在帮助用户更好地理解和利用传感器数据。

---

### 1. 人体静态存在检测

- **功能描述**：
    检测指定区域内静止人体目标的存在。
- **关键参数**：
  - **有效检测范围**：最远 **4 米**。
- **数据上报逻辑**：
  - 当在区域内检测到人体目标时，上报"存在"状态。
  - 当区域内没有人体目标时，上报"无存在"状态。
  - **注意**：4 米检测范围专属于人体静态存在检测功能。它不适用于其他功能，如呼吸心跳检测或目标距离检测，这些功能有各自更短的有效范围。此功能的唯一目的是确定存在或不存在，而不是提供详细数据。

---

### 2. 呼吸心跳检测

- **功能描述**：
    对单个静止人体目标进行非接触式生命体征检测。
- **关键参数**：
  - **有效检测范围**：约 **1.5 米**。
  - **检测目标**：单个静止人体。
- **必要操作条件**：
  - **目标静止**：被监测人员必须保持完全静止。
  - **设备稳定**：雷达设备必须牢固安装，无摇晃或振动。
  - **单一目标**：检测范围内只能有一个人。
- **数据上报逻辑**：
  - **正常上报**：当满足上述所有条件时，雷达上报实时呼吸和心率数值。
  - **异常上报场景**：
    - **目标超出 1.5 米**：当检测到的目标超出 1.5 米有效范围时，呼吸和心率数据将**停止更新**并保持在最后一次有效测量值。
    - **核心区域无目标**：当在 0.5 到 1.5 米核心检测区域内未检测到目标时，呼吸和心率数值将主动上报为**0**。
- **注意**：请注意环境干扰。来自风扇、空调或摆动窗帘等微小运动有时可能被传感器误解。在这种情况下，即使未检测到人体目标（呼吸率报告为 0），雷达也可能报告非零**心率**值。

---

### 3. 目标距离检测

- **适用固件**：`1.6.10` 及更新版本。
- **功能描述**：
    检测并报告雷达与目标之间的直线距离。
- **关键参数**：
  - **最大有效检测范围**：**5 米**。
- **数据上报逻辑和限制**：
  - **无目标状态**：当未检测到目标时，距离值报告为**0**。
  - **检测到目标**：当在 5 米范围内检测到一个或多个目标时，雷达报告**最接近**传感器的目标距离。
  - **数据不更新（保持最后值）**：如果最近的目标处于或移动到 5 米有效检测范围之外，距离值将停止更新。在这种情况下，数值将保持在最后一次有效测量值。
- **跟踪性能**：
    为确保近距离静止目标的稳定性，雷达的跟踪策略针对不同距离进行了优化。性能详情见下表：

| 距离范围 | 目标状态 | 跟踪性能和注意事项 |
| :--- | :--- | :--- |
| **0.5m ~ 1.5m** | 静止 | **跟踪成功率 > 96%**。性能非常稳定。 |
| **1.5m ~ 3m** | 静止 | **跟踪成功率 > 90%**。性能稳定。 |
| **3m ~ 5m** | 静止 | 跟踪稳定性下降，偶尔会丢失目标。版本 1.6.12 相比之前版本有 80%的改进。 |
| **接近** | 移动 | 当目标从远处向雷达移动时，稳定跟踪通常在人员到达约**3 米**时开始。 |
| **远离** | 移动 | 当目标远离雷达时，跟踪可以延伸到**5 米以外**。 |

---

### 4. 环境人员计数

- **功能描述**：
    提供检测区域内个人数量的初步估计计数。
- **数据说明**：
  - 此功能目前处于开发阶段，应视为实验性功能。返回值是通过复杂信号分析得出的粗略估计。
  - 其准确性很大程度上受到多人信号重叠、个人姿势和运动模式等因素的影响。
  - 因此，**此功能不适用于依赖精确人员数量的应用**。
  - 我们正在积极改进底层算法，预计在未来的固件版本中提供显著的准确性改进。

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
