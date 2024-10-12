---
description: Getting started with mmWave Human Detection Sensor Kit
title: 毫米波人体检测传感器套件
keywords:
- radar
- mmwave kit
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/mmwave_human_detection_kit
last_update:
  date: 03/22/2024
  author: AnXiaodie
---

# 毫米波人体检测传感器套件

<br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/1.png" style={{width:550, height:'auto'}}/></div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/mmWave-Human-Detection-Sensor-Kit-p-5773.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 产品介绍

毫米波人体检测传感器套件采用 Seeed Studio 的 XIAO ESP32C3 作为核心，支持 WiFi/BLE 连接功能，并可通过毫米波传感器实现精确的人体检测。轻松连接 Grove 模块以添加更多功能。在 1-2 分钟内即可完成与 Home Assistant 的便捷设置，并支持方便的无线空中升级（OTA）。此外，本产品还支持更换毫米波传感器，实现广泛的可定制性。它非常适合用于定制智能家居自动化、检测入侵者以及监测老年人的健康状况。

### 功能特性

- **精准人体检测**：板载的毫米波传感器基于FMCW原理，提供精准且注重隐私保护的人体检测功能。
- **灵活定制**：板载的人体存在传感器可替换为 Seeed 的其他毫米波系列传感器，以实现心跳检测、跌倒检测等功能；配合400多种可选的Grove传感器，可实现更多附加功能。
- **轻松设置，无线更新**：无需编写代码，即可在1-2分钟内完成Home Assistant的设置，并支持无线空中升级（OTA）。
- **无缝连接**：由XIAO ESP32C3驱动，支持WiFi/BLE，兼容智能家居系统
- **可扩展解决方案**：通过提供的OEM/ODM服务，根据您的需求量身定制可扩展的解决方案。



### 应用场景

- **智能家居自动化**：根据人体存在情况，提升照明、HVAC和安全系统的性能。
- **建筑安全**：检测入侵行为并触发安全警报。
- **健康监测**：监测患者移动，辅助跌倒检测。
- **自动门**：实现当人员接近时自动开门。
- **老年人护理**：监测老年人的健康状况，提供及时援助。

## 硬件概览

在开始之前，了解产品的基本参数至关重要。以下表格提供了毫米波人体检测传感器套件的技术特性信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/hardware.png" style={{width:1000, height:'auto'}}/></div>

:::tip提示
在使用这个套件时，有几点需要注意。

1. XIAO ESP32C3的网络功能需要使用天线。如果你想安装一个Grove模块，尽量不要改变天线的位置。天线默认放置在底板的背面，这样可以确保良好的信号，并且不会干扰雷达的工作。
2. 套件外壳上预留的孔是通风孔，这是考虑到用户可能会使用传感器模块检测某些气体而预留的。它们并不是用来判断是否有人存在的标准，因此请不用担心隐私问题。

:::

下表展示了毫米波雷达与XIAO ESP32C3之间的硬件连接。如有需要，您可以根据下表中的连接方式进行后续的自主开发。

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

## 开始使用

:::tip提示
本教程主要聚焦于套件在Home Assistant和ESPHome中的快速应用。如果您想对套件进行二次开发，请参考本教程的[自定义二次开发](https://yiyan.baidu.com/#customized-secondary-development)部分。
:::

### 软件准备

在本教程中，我们将不展开如何安装Home Assistant环境，我们将假设您已经拥有了一个可运行的Home Assistant设备。

如果您想学习如何安装Home Assistant，那么您可以参考[官方教程](https://www.home-assistant.io/installation/)。我们强烈建议您使用x86设备来安装Home Assistant，因为这是使用Supervised安装Home Assistant的最用户友好的方式。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/77.png" /></div>

- 根据上表，安装**Home Assistant OS**和**Home Assistant Supervised**是最合适的选择，这将为您省去很多麻烦。

  我们还为一些Seeed Studio产品编写了如何安装Home Assistant的教程，请参考它们。
- [ODYSSEY-X86上的Home Assistant入门指南](https://wiki.seeedstudio.com/ODYSSEY-X86-Home-Assistant/)
- [reTerminal上的Home Assistant入门指南](https://wiki.seeedstudio.com/reTerminal_Home_Assistant/)
- [LinkStar H68K/reRouter CM4上的Home Assistant入门指南](https://wiki.seeedstudio.com/h68k-ha-esphome/)

此外，XIAO ESP32C3依赖于开源项目ESPHome来接入Home Assistant，因此您还需要在**插件**中安装**ESPHome**服务。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/2.png" style={{width:1000, height:'auto'}}/></div>

## ESPHome入门指南

出厂套件中的XIAO ESP32C3已经预装了可立即启动的固件，因此我们能够在很短的时间内让套件在Home Assistant上运行。下面的视频将向您展示快速入门的精确步骤。

<div class="table-center">
<iframe width="700" height="400" src="https://files.seeedstudio.com/wiki/mmwave_kit/2.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>
以下是详细的图形化步骤，请参考以下内容完成快速入门。

### 步骤1. 为套件供电

请使用USB-C型电缆为套件供电。请注意，电源输入不得超过5V/1A，否则产品可能会损坏。

### 步骤2. 连接到套件的热点“seedstudio-mr24hpc1”

套件上电后，会自动打开一个名为**seedstudio-mr24hpc1**的热点，请搜索并连接到该热点。您可以使用手机连接到这个网络，这样您就不必频繁地在电脑上切换网络了。

:::note注意
如果您使用的是旧版本的固件，那么可能需要您输入WiFi密码才能连接到**mmwave-kit**。我们建议您**[更新您的固件](https://yiyan.baidu.com/#restore-factory-firmware)**。如果您想继续，网络密码是`seeedstudio`。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/40.png" style={{width:400, height:'auto'}}/></div>

然后使用浏览器访问后端管理地址：`192.168.4.1`。我们将在这里配置套件需要连接的网络和密码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/4.png" style={{width:1000, height:'auto'}}/></div>

然后，选择您希望套件连接的网络名称。请注意，您选择的网络需要与Home Assistant处于同一局域网内，否则Home Assistant搜索将无法识别您的套件。

:::caution警告
如果您在页面上找不到要连接的网络，那么很可能是XIAO ESP32C3不支持您的网络。请自行调整路由器以启用最大兼容性，并确保网络处于2.4GHz频段。XIAO不支持5GHz频段的网络。
:::

输入正确的WiFi密码并点击保存。设备将自动重启并尝试连接到您配置的网络。您不需要停留在该页面，现在可以关闭它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/5.png" style={{width:600, height:'auto'}}/></div>

### 步骤3. 将您的设备添加到Home Assistant

如果网络连接顺利，您应该在Home Assistant上找到您的设备。请按照以下路径添加您的设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/41.png" style={{width:500, height:'auto'}}/></div>

在菜单栏中点击**设置**，然后选择**设备与服务**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/42.png" style={{width:1000, height:'auto'}}/></div>

您应该在**已发现**部分看到设备出现，点击**配置**按钮。在随后弹出的窗口中选择**提交**，并配置区域以正常使用设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/43.png" style={{width:1000, height:'auto'}}/></div>

套件已成功添加到Home Assistant中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/44.png" style={{width:1000, height:'auto'}}/></div>

:::note注意
如果您家中设备过多，存在一定概率在已发现中找不到您的设备。那么，请从您的路由器控制台获取套件的IP地址，点击右下角的**添加集成**按钮，并手动输入IP地址以添加设备。
:::

### 步骤4. 将组件添加到仪表板

然后，我们点击添加的**ESPHome**卡片，这里是**1个设备**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/45.png" style={{width:1000, height:'auto'}}/></div>

这将显示我们为套件编写的所有组件内容。让我们稍微向下滚动显示区域，将这些组件全部添加到仪表板中。

:::caution警告
如果您在此页面下找不到显示的组件，请检查套件的电源和日志。如果您正在使用计算机功能，有些计算机的USB端口可能无法提供足够的电源支持。如果您确定电源没有问题，请打开日志并将详细日志发送回Seeed Studio的技术支持部门。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/46.png" style={{width:1000, height:'auto'}}/></div>

我们可以在**概览**中看到所有信息和内容。

### 步骤5. 编辑仪表板

目前，仪表板组件的显示顺序是自动的，这可能不利于观察和执行设置操作，因此接下来我们需要编辑仪表板，使其显示更符合其功能。

在概览中，点击带有三角形的三个点，然后点击**编辑仪表板**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/12.png" style={{width:1000, height:'auto'}}/></div>

在编辑页面上，再次点击右上角的三个点，选择**原始配置编辑器**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/13.png" style={{width:1000, height:'auto'}}/></div>

然后，请清除原始编辑器中的代码，复制下面的代码并保存。

:::tip提示
新固件已根据ESPHome提供的文档进行了修订，每个设备都有一个唯一的MAC名称。因此，组件名称将不会相同。如果您想使用下面的代码，请将代码中的所有`{$DEVICE}`替换为您的设备名称。您的设备名称可以在ESPHome的设备实体中看到。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/47.png" style={{width:1000, height:'auto'}}/></div>
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave-kit-external-components/blob/main/example/mr24hpc1-card.yaml">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即下载</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />


<details>
<summary>点击此处查看完整代码预览</summary>

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

然后点击**完成**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/15.png" style={{width:1000, height:'auto'}}/></div>

全新的仪表板界面已配置完成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/48.png" style={{width:1000, height:'auto'}}/></div>

恭喜，至此您已完成套件的所有Home Assistant访问设置！

## 仪表板操作细节

为帮助您快速了解套件的全部功能以及这些功能的使用方法，您需要仔细阅读本节。如果您需要更详细的信息，我们建议您花时间阅读[产品的用户手册](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V1.5.pdf)。

关于仪表板的配置和参数细节，我们在ESPHome Docs中进行了详细的编写，因此请移至该处阅读完整的文章和细节。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://deploy-preview-3383--esphome.netlify.app/components/sensor/seeed_mr24hpc1">
            <strong><span><font color={'FFFFFF'} size={"4"}>ESPHome 文档 📕</font></span></strong>
    </a>
</div>


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/49.png" style={{width:700, height:'auto'}}/></div>

## 自定义二次开发

如果您需要更换雷达或安装Grove模块，可以参考下面的动态图进行操作。产品背面有四个用于固定外壳的螺丝，拆下它们，然后轻轻敲打以取下前盖。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/24.gif" style={{width:650, height:'auto'}}/></div>

如果您想安装Grove模块，可以参考下面的图片进行安装。我们建议将Grove连接器朝外，并将Grove线缆隐藏在Grove模块下方。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/25.gif" style={{width:650, height:'auto'}}/></div>

:::note注意
除了模块的安装，套件的安装也需要特别注意。套件的安装位置将直接影响监控的准确性，请参考**[数据手册](https://files.seeedstudio.com/wiki/mmWave-radar/24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf)**中的相关说明进行安装。
:::

此套件主要面向智能家居方向，关于内容的二次开发我们不会深入太多细节，但我们会提供您可能需要的二次开发信息和内容，请参考。

- Wiki about the built-in MR24HPC1 module: [24GHz毫米波传感器 - 人体静态存在模块精简版（MR24HPC1）](https://wiki.seeedstudio.com/Radar_MR24HPC1)

- Built-in XIAO ESP32C3 development materials and hands-on Wiki: [开始使用 Seeed Studio XIAO ESP32C3](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/)

### ESPHome的二次开发

目前套件的所有代码都是开源的。如果您有开发ESPHome的需求，可以使用外部组件的代码。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave-kit-external-components/blob/main/">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载代码</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

对于这个代码框架的使用，您可以参考项目中的examples文件夹下的[**mr24hpc1.yaml**](https://github.com/limengdu/mmwave-kit-external-components/blob/main/example/mr24hpc1.yaml)文件。这是一个ESPHome的示例yaml文件。

如果您之前没有任何ESPHome的使用经验，您可以阅读[**这个Wiki**](https://wiki.seeedstudio.com/xiao-esp32c3-esphome/)来学习如何使用它。

## 使用ESPHome OTA进行软件升级

在设计这款产品时，我们希望它是一款持续供电并固定在一个位置上的监控设备。同时，我们会不断更新和维护其软件，并设想了一种情况，即我们不需要改变它的位置，您就可以通过局域网实现OTA（Over-the-Air，空中下载技术）更新。

<div class="table-center">
<iframe width="700" height="400" src="https://files.seeedstudio.com/wiki/mmwave_kit/ota.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

请点击ESPHome的主屏幕。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/61.png" style={{width:1000, height:'auto'}}/></div>

点击**NEW DEVICE（新设备）**。然后点击**Continue（继续）**。

在新的弹出窗口中，请输入您希望设置的应用程序的名称，以及WiFi的名称和密码。请确保套件和Home Assistant位于**同一局域网**中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/22.png" style={{width:450, height:'auto'}}/></div>

然后点击**Next（下一步）**。在设备类型中，请选择**ESP32-C3**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/26.png" style={{width:450, height:'auto'}}/></div>

然后点击**Next（下一步）**。然后点击**SKIP（跳过）**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/27.png" style={{width:1000, height:'auto'}}/></div>

我们会在Github项目中更新我们的程序，一旦程序更新，您可以直接复制里面的所有内容并覆盖生成的yaml文件。也可以对此进行修改。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave-kit-external-components/blob/main/example/mr24hpc1.yaml">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载代码
        </font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />


最后，只需选择**Wireless（无线）**来上传程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/23.png" style={{width:500, height:'auto'}}/></div>

## 恢复出厂固件

### 方法一：快速刷写最新固件

如果您在使用套件时发现与上述步骤和内容存在不一致，请更新套件的固件以恢复出厂设置。

**步骤一**. 点击下方按钮前往刷写固件页面。然后通过USB-C型线缆将套件连接到您的电脑。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://limengdu.github.io/MR24HPC1_ESPHome_external_components/">
    <strong><span><font color={'FFFFFF'} size={"4"}>刷写固件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**步骤二**. 点击Connect（连接）按钮，并选择具有**JTAG**名称的端口号设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/50.png" style={{width:1000, height:'auto'}}/></div>

**步骤三**. 刷写固件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/32.png" style={{width:500, height:'auto'}}/></div>

只需点击**INSTALL SEEED STUDIO MMWAVE KIT（安装Seeed Studio毫米波套件）**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/33.png" style={{width:500, height:'auto'}}/></div>

如果您看到下面的显示，那么固件刷写就完成了。此时，您可能需要重新上电以启动并运行程序。完成固件烧录后，您需要从零开始配置网络。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/34.png" style={{width:500, height:'auto'}}/></div>

### 方法二：使用ESPHome工具刷写固件

如果您的设备工作不正常，请尝试恢复工厂固件并重新将设备添加到Home Assistant中。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave-kit-external-components/releases/">
    <strong><span><font color={'FFFFFF'} size={"4"}>下载固件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />


- 选项一：使用[ESPhome Web工具](https://web.esphome.io/?dashboard_install)进行上传。

使用Chrome或Edge浏览器打开[ESPhome Web工具](https://web.esphome.io/?dashboard_install)。

点击**CONNECT（连接）**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/34.png" /></div>

在弹出窗口中选择XIAO ESP32串行端口。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/64.png" /></div>

点击**INSTALL（安装）**，然后选择从上述步骤中下载的`.bin`文件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/35.png" /></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/38.png" /></div>


- 选项二：使用[esphome-flasher工具](https://github.com/esphome/esphome-flasher)。

如果在安装驱动程序和更换浏览器后，您仍然无法使用方法一上传固件，那么您可以尝试使用方法二。请参照官方教程了解具体的安装方法和说明。

:::tip提示
如果您希望观察XIAO ESP32C3的日志消息，您也可以通过此软件的View Logs（查看日志）按钮查看它们。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/41.png" /></div>
:::

一旦固件成功上传，您将能够看到名为**seeedstudio-mr24hpc1**的网络。请参照[三分钟快速入门ESPHome](https://yiyan.baidu.com/#three-minutes-to-get-started-esphome)内容重新配置设备。


## 资源

- **[GITHUB]** [项目开源](https://github.com/limengdu/mmwave-kit-external-components)
- **[PDF]** [快速设置模板](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_Quick_Setup_Template-V1.0.pdf)
- **[PDF]** [数据表](https://files.seeedstudio.com/wiki/mmWave-radar/24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf)
- **[PDF]** [用户手册](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V1.5.pdf)
- **[ZIP]** [PCB和SCH Eagle文件](https://files.seeedstudio.com/wiki/mmwave_kit/mmWare-kit_sch&pcb.zip)
- **[PDF]** [电路图](https://files.seeedstudio.com/wiki/mmwave_kit/sch_mmware_kit.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供各种支持，以确保您在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的喜好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>