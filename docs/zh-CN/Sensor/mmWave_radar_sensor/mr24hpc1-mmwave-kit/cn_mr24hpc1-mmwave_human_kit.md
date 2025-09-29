---
description: mmWave 人体检测传感器套件入门指南
title: mmWave 人体检测传感器套件
keywords:
- radar
- mmwave kit
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/mmwave_human_detection_kit
sidebar_position: 0
last_update:
  date: 08/17/2023
  author: Citric
---

# MR24HPC1 mmWave 人体检测传感器套件

<br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/1.png" style={{width:550, height:'auto'}}/></div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/mmWave-Human-Detection-Sensor-Kit-p-5773.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 介绍

由 Seeed Studio 的 XIAO ESP32C3 驱动，支持 WiFi/BLE 连接，并通过 mmWave 传感器提供精确的人体检测。无缝连接 grove 模块以获得更多功能。在 1-2 分钟内轻松设置 Home Assistant，配合便捷的无线空中升级 (OTA) 更新。通过可更换的 mmWave 传感器实现广泛的多功能性。非常适合定制智能家居自动化、检测入侵和监控老年人的健康状况。

### 特性

- **精确人体检测**：基于 FMCW 原理的板载 mmWave 传感器，提供准确的隐私保护人体检测。
- **灵活定制**：板载人体存在传感器可替换为 Seeed 其他 mmWave 系列产品，用于心跳检测、跌倒检测等；通过 400+ 可选 Grove 传感器实现额外功能。
- **简易设置，无线更新**：无代码设置 Home Assistant，1-2 分钟完成，支持无线空中升级 (OTA) 更新。
- **无缝连接**：由 XIAO ESP32C3 驱动，支持 WiFi/BLE，兼容智能家居系统
- **可扩展解决方案**：通过可用的 OEM/ODM 服务根据您的需求进行定制，实现可扩展性。

### 应用

- **智能家居自动化**：基于人体存在增强照明、暖通空调和安全系统。
- **建筑安全**：检测入侵并触发警报以提高安全性。
- **医疗监控**：监控患者活动并协助跌倒检测。
- **自动门**：当人们接近时使门自动打开。
- **老年护理**：监控老年人的健康状况并提供及时帮助。

## 硬件概述

在开始之前，了解产品的一些基本参数是非常重要的。下表提供了 mmWave 人体检测传感器套件特性的信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/hardware.png" style={{width:1000, height:'auto'}}/></div>

:::tip
使用此套件时需要注意一些事项。

1. XIAO ESP32C3 的网络功能需要使用天线。如果您想安装 Grove 模块，请尽量不要改变天线的位置。天线默认放置在底板背面，这确保了良好的信号并且不会干扰雷达工作。

2. 套件外壳中预留的孔是通风孔，考虑到用户可能会使用传感器模块检测某些气体而预留的，它们不用作判断是否有人的标准，所以请不要担心隐私问题。

:::

下表显示了毫米波雷达与 XIAO ESP32C3 之间的硬件连接。如有必要，您可以根据下表中的连接进行自己的后续开发。

<div class="table-center">
  <table align="center">
    <tr>
    <th>XIAO ESP32C3</th>
    <th>MR24HPC1</th>
    </tr>
    <tr>
    <td>5V</td>
    <td>VCC</td>
    </tr>
    <tr>
    <td>GND</td>
    <td>GND</td>
    </tr>
      <tr>
        <td>GPIO4 (D2)</td>
        <td>RX</td>
      </tr>
      <tr>
        <td>GPIO5 (D3)</td>
        <td>TX</td>
      </tr>
  </table>
</div>

## 入门指南

:::tip
本教程的所有内容都专注于在 Home Assistant 和 ESPHome 中快速应用该套件，如果您想将套件用于二次开发，请参考教程的[定制化二次开发](#customized-secondary-development)部分。
:::

### 软件准备

在本教程中，我们不会详细介绍如何安装 Home Assistant 环境，我们假设您已经拥有一个正常工作的 Home Assistant 设备。

如果您希望学习如何安装 Home Assistant，那么您可以参考[官方教程](https://www.home-assistant.io/installation/)。我们强烈建议您使用 x86 设备安装 Home Assistant，因为这是安装带有 Supervised 功能的 Home Assistant 最用户友好的方式。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/77.png" /></div>

根据上表，安装 **Home Assistant OS** 和 **Home Assistant Supervised** 是最合适的，这将为您省去很多麻烦。

我们也为一些 Seeed Studio 产品编写了如何安装 Home Assistant 的教程，请参考它们。

- [在 ODYSSEY-X86 上开始使用 Home Assistant](https://wiki.seeedstudio.com/cn/ODYSSEY-X86-Home-Assistant/)
- [在 reTerminal 上开始使用 Home Assistant](https://wiki.seeedstudio.com/cn/reTerminal_Home_Assistant/)
- [在 LinkStar H68K/reRouter CM4 上开始使用 Home Assistant](https://wiki.seeedstudio.com/cn/h68k-ha-esphome/)

除此之外，XIAO ESP32C3 依赖开源项目 ESPHome 来接入 Home Assistant，所以您还需要在 **Add-Ons** 中安装 **ESPHome** 服务。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/2.png" style={{width:1000, height:'auto'}}/></div>

## 开始使用 ESPHome

出厂套件中，XIAO ESP32C3 已经刷入了可以直接上电使用的固件，我们能够在很短的时间内让套件在 Home Assistant 上工作。下面的视频将向您展示快速入门的确切步骤。

<iframe class="youtube-video-r" src="https://files.seeedstudio.com/wiki/mmwave_kit/2.mp4" frameborder="0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

以下是图文分步详细说明，请参考以下内容完成快速入门。

### 步骤 1. 为套件供电

请通过 USB-C 类型线缆为套件供电。注意电源输入不要超过 5V/1A，否则可能损坏产品。

### 步骤 2. 连接到套件的热点 "seedstudio-mr24hpc1"

套件上电后，会自动开启一个名为 **seedstudio-mr24hpc1** 的热点，请搜索并连接到该热点。您可以使用手机连接到此网络，这样就不必在计算机上频繁切换网络。

:::note
如果您使用的是较旧版本的固件，那么这可能需要您输入 WiFi 密码才能连接到 **mmwave-kit**。我们建议**[更新您的固件](#restore-factory-firmware)**。如果您想继续，网络密码是 `seeedstudio`。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/40.png" style={{width:400, height:'auto'}}/></div>

然后使用浏览器访问后台管理地址：`192.168.4.1`。这里我们将配置套件需要连接的网络和密码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/4.png" style={{width:1000, height:'auto'}}/></div>

然后，选择您希望套件连接的网络名称。请注意，您选择的网络需要与 Home Assistant 在同一局域网内，否则您的套件将不会被 Home Assistant 搜索识别。

:::caution
如果您在页面上找不到想要连接的网络，很可能是 XIAO ESP32C3 不支持您的网络。请自行调整路由器以启用最大兼容性，并确保网络在 2.4GHz 频段上。XIAO 不支持 5GHz 频段的网络。
:::

输入正确的 WiFi 密码并点击保存。设备将自动重启并尝试连接到您配置的网络。您不需要停留在此页面，现在可以关闭它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/5.png" style={{width:600, height:'auto'}}/></div>

### 步骤 3. 将您的设备添加到 Home Assistant

如果网络连接顺利，您将能够在 Home Assistant 上找到您的设备。请按照以下路径添加您的设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/41.png" style={{width:500, height:'auto'}}/></div>

在菜单栏中点击 **Settings** 并选择 **Devices & services**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/42.png" style={{width:1000, height:'auto'}}/></div>

您应该看到设备出现在 **Discovered** 部分，点击 **CONFIGURE** 按钮。在随后弹出的窗口中选择 **SUBMIT** 并配置区域以正常使用设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/43.png" style={{width:1000, height:'auto'}}/></div>

套件随后成功添加到 Home Assistant。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/44.png" style={{width:1000, height:'auto'}}/></div>

:::note
如果您家中有太多设备，有一定概率您的设备不会在 Discovered 中找到。那么，请从路由器控制台获取套件的 IP 地址，点击右下角的 **Add Integration** 按钮，手动输入 IP 地址来添加设备。
:::

### 步骤 4. 将组件添加到仪表板

然后，我们点击添加的 **ESPHome** 卡片，这里显示 **1 device**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/45.png" style={{width:1000, height:'auto'}}/></div>

这将显示我们为套件编写的所有组件内容。让我们稍微向下滚动显示区域，将所有这些组件添加到仪表板中。

:::caution
如果您在此页面下没有找到显示的组件，请检查套件的电源和日志。如果您使用的是计算机功能，某些计算机可能没有提供足够电源支持的USB端口。如果您确保电源没有问题，请打开日志并将详细日志发送给Seeed Studio的技术支持。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/46.png" style={{width:1000, height:'auto'}}/></div>

然后我们可以在 **Overview** 中看到所有信息和内容。

### 步骤 5. 编辑仪表板

目前，仪表板组件的显示顺序是自动的，这可能不利于观察和执行设置操作，因此接下来我们需要编辑仪表板，使其显示更符合其功能。

在 Overview 中，点击带有三角形的三个点，然后点击 **Edit Dashboard**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/12.png" style={{width:1000, height:'auto'}}/></div>

在编辑页面，再次点击右上角的三个点以选择 **Raw Configuration Editor**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/13.png" style={{width:1000, height:'auto'}}/></div>

然后请清除原始编辑器中的代码，复制下面的代码并保存。

:::tip
新固件已根据 ESPHome 提供的文档进行了修订，每个设备都有唯一的MAC名称。因此组件名称不会相同。如果您想使用下面的代码，请将代码中的所有 `{$DEVICE}` 替换为您设备的名称。您的设备名称可以在 ESPHome 的设备实体中看到。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/47.png" style={{width:1000, height:'auto'}}/></div>
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave-kit-external-components/blob/main/example/mr24hpc1-card.yaml" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

<details>

<summary>点击这里预览完整代码</summary>

```css
title: My Home
views:
  - path: default_view
    title: Home
    cards:
      - type: horizontal-stack
        cards:
          - type: entities
            entities:
              - entity: button.{$DEVICE}_module_restart
                name: Module Restart
              - entity: sensor.{$DEVICE}_hardware_model
                name: Hardware Model
              - entity: sensor.{$DEVICE}_hardware_version
                name: Hardware Version
              - entity: sensor.{$DEVICE}_heartbeat
                name: Heartbeat
              - entity: sensor.{$DEVICE}_product_id
                name: Product ID
              - entity: sensor.{$DEVICE}_product_model
                name: Product Model
            title: DEVICE Information
      - type: vertical-stack
        cards:
          - type: entities
            entities:
              - entity: select.{$DEVICE}_scene
                name: Scene
              - entity: number.{$DEVICE}_sensitivity
                name: Sensitivity
              - entity: select.{$DEVICE}_time_for_entering_no_person_state_standard_function
                name: Time For Entering No Person State Setting (Standard Function)
              - entity: binary_sensor.{$DEVICE}_presence_information
                name: Presence Information
              - entity: sensor.{$DEVICE}_motion_information
                name: Motion Information
              - entity: sensor.{$DEVICE}_body_movement_parameter
                name: Body Movement Parameter
              - entity: sensor.{$DEVICE}_active_reporting_of_proximity
                name: Active Reporting Of Proximity
            title: Unsolicited Information
      - type: horizontal-stack
        cards:
          - type: entities
            entities:
              - entity: switch.{$DEVICE}_underlying_open_function_info_output_switch
                name: Underlying Open Function Info Output Switch
              - entity: sensor.{$DEVICE}_existence_energy
                name: Existence Energy
              - entity: sensor.{$DEVICE}_motion_energy
                name: Motion Energy
              - entity: sensor.{$DEVICE}_static_distance
                name: Static Distance
              - entity: sensor.{$DEVICE}_motion_distance
                name: Motion Distance
              - entity: sensor.{$DEVICE}_motion_speed
                name: Motion Speed
            title: Underlying Open Function
      - type: horizontal-stack
        cards:
          - type: entities
            entities: 
              - entity: sensor.{$DEVICE}_custom_mode_status
                name: Custom Mode Status
              - entity: number.{$DEVICE}_custom_mode
                name: Custom Mode
              - entity: sensor.{$DEVICE}_current_custom_mode
                name: Current Custom Mode
              - entity: button.{$DEVICE}_end_of_custom_mode_settings
                name: End Of Custom Mode Settings
              - entity: select.{$DEVICE}_existence_boundary
                name: Existence Boundary
              - entity: select.{$DEVICE}_motion_boundary
                name: Motion Boundary
              - entity: number.{$DEVICE}_existence_energy_threshold
                name: Existence Energy Threshold
              - entity: number.{$DEVICE}_motion_energy_threshold
                name: Motion Energy Threshold
              - entity: number.{$DEVICE}_motion_trigger_time
                name: Motion Trigger Time
              - entity: number.{$DEVICE}_motion_to_rest_time
                name: Motion To Rest Time
              - entity: number.{$DEVICE}_time_for_entering_no_person_state_underlying_open_function
                name: Time For Entering No Person State (Underlying Open Function)
            title: Custom Settings
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/14.png" style={{width:1000, height:'auto'}}/></div>

然后点击 **DONE**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/15.png" style={{width:1000, height:'auto'}}/></div>

一个全新的仪表板界面就配置完成了。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/48.png" style={{width:1000, height:'auto'}}/></div>

恭喜，到此为止您已经完成了套件接入 Home Assistant 的所有工作！

## 仪表板操作详情

为了帮助您快速了解套件的全部功能以及这些功能的使用方法，您需要仔细阅读本节内容。如果您想要更详细的信息，我们建议您花时间阅读[产品用户手册](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V1.5.pdf)。

关于仪表板的配置和参数详情，我们在 ESPHome 文档中编写了详细的说明，请移步阅读完整的说明和详情。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://esphome.io/components/seeed_mr24hpc1.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>ESPHome 文档 📕</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/49.png" style={{width:700, height:'auto'}}/></div>

## 定制化二次开发

如果您需要更换雷达或安装 Grove 模块，可以参考下面的动图进行操作。外壳的四颗螺丝在产品背面，拆下后轻敲即可取下前盖。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/24.gif" style={{width:650, height:'auto'}}/></div>

如果您想要安装 Grove 模块，可以参考下图进行安装。我们建议 Grove 连接器朝外，Grove 线缆隐藏在 Grove 模块下方。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/25.gif" style={{width:650, height:'auto'}}/></div>

:::note
除了模块的安装外，套件的安装需要特别注意。套件的安装位置将直接影响监测的准确性，请参考**[数据手册](https://files.seeedstudio.com/wiki/mmWave-radar/24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf)**中的相关说明进行安装。
:::

本套件主要面向智能家居方向，二次开发的内容我们不会过多详述，但我们会提供您可能需要的二次开发信息和内容，请参考。

- 内置 MR24HPC1 模块的 Wiki：[24GHz mmWave Sensor - Human Static Presence Module Lite (MR24HPC1)](https://wiki.seeedstudio.com/cn/Radar_MR24HPC1)

- 内置 XIAO ESP32C3 开发资料和实践 Wiki：[Getting Started with Seeed Studio XIAO ESP32C3](https://wiki.seeedstudio.com/cn/XIAO_ESP32C3_Getting_Started/)

### ESPHome 二次开发

套件的所有代码目前都是开源的。如果您有 ESPHome 开发需求，可以使用外部组件的代码。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave-kit-external-components/blob/main/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载代码</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

关于此代码框架的使用，您可以参考项目中 examples 文件夹下的 [**mr24hpc1.yaml**](https://github.com/limengdu/mmwave-kit-external-components/blob/main/example/mr24hpc1.yaml) 文件。该文件是 ESPHome 的示例 yaml 文件。

如果您之前没有任何 ESPHome 使用经验，可以阅读[**此 Wiki**](https://wiki.seeedstudio.com/cn/xiao-esp32c3-esphome/) 来学习使用。

## 使用 ESPHome OTA 进行软件升级

在设计产品时，我们希望它是一个持续供电并固定在一个位置的监控设备。同时，我们将继续更新和维护其软件，我们设想了一种情况，即您无需更改其位置，就可以通过局域网实现 OTA 更新。

<iframe class="youtube-video-r" src="https://files.seeedstudio.com/wiki/mmwave_kit/ota.mp4" frameborder="0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

请点击 ESPHome 的主屏幕。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/61.png" style={{width:1000, height:'auto'}}/></div>

点击 **NEW DEVICE**。然后点击 **Continue**。

在新弹出的窗口中，请输入您希望设置的应用程序名称，以及 WiFi 的名称和密码。确保套件和 Home Assistant 在**同一局域网**中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/22.png" style={{width:450, height:'auto'}}/></div>

然后点击 **Next**。在设备类型中，请选择 **ESP32-C3**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/26.png" style={{width:450, height:'auto'}}/></div>

然后点击 **Next**。然后点击 **SKIP**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/27.png" style={{width:1000, height:'auto'}}/></div>

我们将在 Github 项目中更新我们的程序，一旦程序更新，您只需复制其中的所有内容并覆盖生成的 yaml 文件。也可以对此进行更改。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave-kit-external-components/blob/main/example/mr24hpc1.yaml" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载代码</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

最后，只需选择 **Wireless** 来上传程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/23.png" style={{width:500, height:'auto'}}/></div>

## 恢复出厂固件

### 方法 1：快速刷入最新固件

如果您在使用套件时发现与上述步骤和内容不一致，请在以下页面更新套件的固件以恢复出厂设置。

**步骤 1.** 点击下方按钮进入刷写固件页面。然后通过 USB-C 类型线缆将套件连接到您的计算机。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://limengdu.github.io/MR24HPC1_ESPHome_external_components/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>刷写固件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**步骤 2.** 点击连接按钮并选择名称中包含 **JTAG** 的端口号设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/50.png" style={{width:1000, height:'auto'}}/></div>

**步骤 3.** 刷写固件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/32.png" style={{width:500, height:'auto'}}/></div>

只需点击 **INSTALL SEEED STUDIO MMWAVE KIT**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/33.png" style={{width:500, height:'auto'}}/></div>

如果您看到下面的显示，则固件刷写完成。此时您可能需要重新上电以使程序运行。完成固件烧录后，您需要从头开始配置网络。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/34.png" style={{width:500, height:'auto'}}/></div>

### 方法 2：借助 ESPHome 工具刷写固件

如果您的设备无法正常工作，请尝试恢复出厂固件并重新将设备添加到 Home Assistant。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave-kit-external-components/releases/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>下载固件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

- 选项 1：使用 [ESPhome Web 工具](https://web.esphome.io/?dashboard_install) 上传。

使用 Chrome 或 Edge 网页浏览器打开 [ESPhome Web 工具](https://web.esphome.io/?dashboard_install)。

点击 **CONNECT**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/34.png" /></div>

在弹出窗口中选择 XIAO ESP32 串口。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/64.png" /></div>

点击 **INSTALL**，然后选择从上述步骤下载的 `.bin` 文件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/35.png" /></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/38.png" /></div>

- 选项 2：使用 [esphome-flasher 工具](https://github.com/esphome/esphome-flasher)。

如果在安装驱动程序和更换浏览器后仍无法使用方法一上传固件，那么您可以尝试使用方法二。具体的安装方法和说明请参考官方教程。

:::tip
如果您希望观察 XIAO ESP32C3 的日志消息，您也可以通过此软件的查看日志按钮来查看。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/41.png" /></div>
:::

固件成功上传后，您将能够看到名为 **seeedstudio-mr24hpc1** 的网络。请参考[三分钟快速上手 ESPHome](#three-minutes-to-get-started-esphome) 内容重新配置设备。

## 资源

- **[GITHUB]** [项目开源](https://github.com/limengdu/mmwave-kit-external-components)
- **[PDF]** [快速设置模板](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_Quick_Setup_Template-V1.0.pdf)
- **[PDF]** [数据手册](https://files.seeedstudio.com/wiki/mmWave-radar/24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf)
- **[PDF]** [用户手册](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V1.5.pdf)

### 版本 1

- **[ZIP]** [PCB&SCH EAGLE 文件](https://files.seeedstudio.com/wiki/mmwave_kit/mmWare-kit_sch&pcb.zip)
- **[PDF]** [SCH](https://files.seeedstudio.com/wiki/mmwave_kit/sch_mmware_kit.pdf)

### 版本 2

- **[ZIP]** [PCB&SCH EAGLE 文件](https://files.seeedstudio.com/wiki/mmwave_kit/Human_Detection_Sensor_Board_V2.zip)
- **[PDF]** [SCH](https://files.seeedstudio.com/wiki/mmwave_kit/mmwave_kit_sch_V2.pdf)

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
