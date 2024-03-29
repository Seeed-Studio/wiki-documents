---
description: SenseCAP Indicator - Home Assistant Application Development
title: Home Assistant - SenseCAP Indicator
keywords:
- SenseCAP Indicator
- Home Assistant
- ESP32S3
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_Application_Home_Assistant
sidebar_position: 1
last_update:
  date: 3/3/2024
  author: guiying zhao
---

# SenseCAP指示器—Home Assistant（家庭助理）应用程序开发

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/PKMcutZDjDg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<div class="button-container">
<a class="button-style" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html">
        Get One Now 🖱️</a>
</div>

欢迎来到Seeed SenseCAP指示器和Home Assistant开发教程。本指南将引导您完成使用[Home Assistant Yellow](https://www.home-assistant.io/yellow)将SenseCAP指示器与Home Assistant集成的步骤。

<div align="center"><img width={680} src="https://www.home-assistant.io/images/yellow/home-assistant-yellow-exploded-and-labeled.png"/></div>

> **Home Assistant Yellow** 预装在定制外壳中，带有树莓派计算模块4 (CM4)和无风扇、静音操作的定制散热器。CM4是一个没有无线的版本，有2gb RAM和16gb eMMC存储空间。预装的Home Assistant。

为了让您的SenseCAP指示器与Home Assistant一起工作，您需要遵循两个主要步骤:

1. [安装Home Assistant](#安装HA)
2. [配置家庭助理投影](#Config_HA)


## 前提

在开始之前，请务必阅读SenseCAP指示板的[用户指南](/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator)，了解SenseCAP的软硬件信息。

## 安装 Home Assistant {#install_HA}

> Home Assistant是一个强大的开源家庭自动化平台，专注于隐私和本地控制。它提供了一个可定制和灵活的框架，以管理和自动化所有家庭设备从一个单一的，统一的平台。

使用**Home Assistant Yellow**，您可以按照[这里](https://www.home-assistant.io/installation/yellow)提供的说明进行操作。此外，要在任何类型的树莓派或本地服务器上运行，您可以逐步遵循这个[说明](https://www.home-assistant.io/installation/)。 

安装完成后，进入这个页面意味着你可以进入下一步。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Installed.png"/></div>

<br />

:::小贴士:不知道如何安装Home Assistant? 
一旦您安装了Home Assistant，请查看[File Editor](https://www.home-assistant.io/getting-started/onboarding/)了解详细信息。
:::

### Step 1: 安装**Mosquitto Broker**和**File Editor**

下一步是安装**Mosquitto代理**和**File Editor**。**Mosquitto**是一个开源消息代理，它实现了MQTT协议，而**File Editor**则允许你修改`configuration. py `。不访问终端的Yaml `文件。 

在Home Assistant Yellow中，您可以使用附加功能安装Mosquitto Broker和File Editor。

:::注意需要附加功能 
Home Assistant Yellow自带**Home Assistant操作系统**，可以轻松安装插件。然而，**Home Assistant Container**不支持插件，这意味着除了Home Assistant之外，您还需要安装MQTT代理应用程序。具体请参见[安装方法](https://www.home-assistant.io/installation/#compare-installation-methods)。
:::

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_Setting.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_Add-ons.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Press_Add.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add-on_Store.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

:::小贴士
<details>
<summary>为了方便起见, 在侧边栏显示 'File editorr:</summary>

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_editor_show.png"/></div>

</details>
:::

现在我们有两个附加组件。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Two_Adds.png"/></div>

### Step 2: 添加MQTT集成和配置

在安装MQTT代理之后，您需要将MQTT集成和配置添加到Home Assistant。这将允许Home Assistant助理与SenseCAP指示板通信。

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_Devices.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Config_MQTT.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>
:::提示
如果没有发现MQTT，重新启动Home Assistant以查看发现的新MQTT。
:::


### Step 3: 修改"configuration.yaml" ，添加指示器实体

你可以使用Home Assistant Yellow中的**文件编辑器**插件来修改 `configuration.yaml`文件。


<details>
<summary>点击复制 Configuration.yaml ，配置集成</summary>

```yaml
# Example configuration.yaml entry
mqtt:
  sensor:
    - unique_id: indicator_temperature
      name: "Indicator Temperature"
      state_topic: "indicator/sensor"
      suggested_display_precision: 1
      unit_of_measurement: "°C"
      value_template: "{{ value_json.temp }}"
    - unique_id: indicator_humidity
      name: "Indicator Humidity"
      state_topic: "indicator/sensor"
      unit_of_measurement: "%"
      value_template: "{{ value_json.humidity }}"
    - unique_id: indicator_co2
      name: "Indicator CO2"
      state_topic: "indicator/sensor"
      unit_of_measurement: "ppm"
      value_template: "{{ value_json.co2 }}"
    - unique_id: indicator_tvoc
      name: "Indicator tVOC"
      state_topic: "indicator/sensor"
      unit_of_measurement: ""
      value_template: "{{ value_json.tvoc }}"
  switch:
    - unique_id: indicator_switch1
      name: "Indicator Switch1"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch1 }}"
      payload_on: '{"switch1":1}'
      payload_off: '{"switch1":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch2
      name: "Indicator Switch2"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch2 }}"
      payload_on: '{"switch2":1}'
      payload_off: '{"switch2":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch3
      name: "Indicator Switch3"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch3 }}"
      payload_on: '{"switch3":1}'
      payload_off: '{"switch3":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch4
      name: "Indicator Switch4"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch4 }}"
      payload_on: '{"switch4":1}'
      payload_off: '{"switch4":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch6
      name: "Indicator Switch6"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch6 }}"
      payload_on: '{"switch6":1}'
      payload_off: '{"switch6":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch7
      name: "Indicator Switch7"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch7 }}"
      payload_on: '{"switch7":1}'
      payload_off: '{"switch7":0}'
      state_on: 1
      state_off: 0
  number:
    - unique_id: indicator_switch5
      name: "Indicator Switch5"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      command_template: '{"switch5": {{ value }} }'
      value_template: "{{ value_json.switch5 }}"
    - unique_id: indicator_switch8
      name: "Indicator Switch8"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      command_template: '{"switch8": {{ value }} }'
      value_template: "{{ value_json.switch8 }}"
```
</details>

:::注意：如果您的本地服务器不支持Add-ons，例如Home Assistant容器，您需要通过终端修改configuration.yaml。
:::

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_File_editor.png"/></div>

<!--  <div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_choose.png"/></div>  图片不存在! -->

下一步是修改`configuration.yaml`文件，以添加指示器实体。这个文件被Home Assistant用来跟踪设置中的各种实体。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_Choose_config.png"/></div>

将代码添加到`configuration.yaml`中，就像这样：

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_edit.png"/></div>

保存文件，并转到`开发者工具`以更新YAML配置。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_ALL_YAML.png"/></div>

### Step 4: 编辑仪表板

最后一步是编辑Home Assistant仪表板。您需要将以下内容添加到仪表板的原始配置编辑器中：

<details>
<summary>点击复制仪表板YAML以更改UI</summary>

> 注意：这不是用于`configuration.yaml`。

```yaml
views:
  - title: Indicator device
    icon: ''
    badges: []
    cards:
      - graph: line
        type: sensor
        detail: 1
        icon: mdi:molecule-co2
        unit: ppm
        entity: sensor.indicator_co2
      - graph: line
        type: sensor
        entity: sensor.indicator_temperature
        detail: 1
        icon: mdi:coolant-temperature
      - graph: line
        type: sensor
        detail: 1
        entity: sensor.indicator_humidity
      - graph: line
        type: sensor
        entity: sensor.indicator_tvoc
        detail: 1
        icon: mdi:air-filter
      - type: entities
        entities:
          - entity: switch.indicator_switch1
          - entity: switch.indicator_switch2
          - entity: switch.indicator_switch3
          - entity: switch.indicator_switch4
          - entity: number.indicator_switch5
          - entity: switch.indicator_switch6
          - entity: switch.indicator_switch7
          - entity: number.indicator_switch8
        title: Indicator control
        show_header_toggle: false
        state_color: true
```

</details>

<details>
<summary>创建一个用于SenseCAP指示器的仪表板（不一定要创建，任何仪表板都可以）。</summary>

切换侧边栏：`设置->仪表板`。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add_dashboard.png"/></div>

设置您喜欢的标题和图标，然后创建它。

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add_dashboard_info.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Dashboard.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

<!-- <div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add_dashboard_info.png"/></div> -->

<!-- <div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Dashboard.png"/></div> -->

</details>


<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_SenseCAP.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Edit_Dashboard.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

按下 `TAKE CONTROL` 按钮

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Edit_Dashboard_config.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Dashboard_Save.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

替换YAML内容如上所示：

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Dashboard_Done.png"/></div>

现在您已完成Home Assistant配置。

### 为MQTT添加用户

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add_User.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Create_User.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

## 项目配置

本节的目的是建立Home Assistant（HA）和指示器之间的默认通信。

### Step 1：配置IP地址

通常，默认的Home Assistant服务器地址是`homeassistant.local`，如果您有多个Home Assistant服务器，或者如果没有默认的DNS解析，或者如果有多个IP服务器地址，您将需要相应地配置IP地址。

在`ha_config.h`中，更改`CONFIG_BROKER_URL`值，例如：

```c
// #define CONFIG_BROKER_URL    "mqtt://homeassistant.local" // Default
#define CONFIG_BROKER_URL    "mqtt://192.168.1.100" // To yours
```
### Step 2: 配置用户名和密码

如果您有用户名和密码，您需要对它们进行配置。这可以在`indicator_ha.c`文件中的`mqtt_start`函数中完成，具体是在`mqtt_cfg`配置中。如果您没有用户名和密码，可以将它们注释掉。

以下是如何配置用户名和密码的示例：

```c
    esp_mqtt_client_config_t mqtt_cfg = {
        .broker.address.uri = CONFIG_BROKER_URL,
        .credentials.username = "MQTT_Indicator_1", // Your Home Assistant user
        .credentials.authentication.password = "kjdf", // user's password
    };
```

完成这些步骤并构建后，您应该能够看到Home Assistant和指示器一起正常工作。

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_data_show.gif"/></div>

## 构建并烧写本地固件

完成上述步骤后，您可以开始构建并烧写项目。

<div class="github_container" style={{textAlign: 'center'}}>

<a class="github_item" href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32">

<strong><span><font color={'FFFFFF'} size={"4"}> Download the Project</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>

</a>

</div>
<br />

```bash
git clone https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32
```


1. 克隆git存储库。
2. 导航到`examples\indicator_ha`文件夹。
	- 运行`idf.py -p PORT build flash monitor`来构建、烧写并监视项目。
	- 要退出串行监视器，请键入`Ctrl-]`。

```bash
$ git clone https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32
$ cd SenseCAP_Indicator_ESP32/examples/indicator_ha
$ idf.py -p PORT build flash monitor
```

:::警告：需要 PSRAM 八位 120M 功能 

该项目默认使用八位 120M 配置 PSRAM。请查看[此处](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/main/tools/patch/README.md#idf-patch)以启用`PSRAM 八位 120M`功能。
:::

要完整配置和使用ESP-IDF构建项目的步骤，请参考[入门指南](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html)。

> 由于Home Assistant演示主要基于indicator_basis演示，因此您可以在滑动到其他面板时体验Home Assistant的功能。

## 附加信息
### 修改配置


在`ha_config.h`文件中，有几个用于MQTT通信的标签。这些标签用于识别系统中的不同组件，并可以根据您的需要进行修改。

例如，对于*sensor5*，标签定义如下：

```c
#define CONFIG_SENSOR5_VALUE_KEY     "temp"
#define CONFIG_SENSOR5_UI_UNIT       "°C"
#define CONFIG_SENSOR5_UI_NAME       "Temp"
#define CONFIG_SENSOR5_TOPIC_DATA    CONFIG_TOPIC_SENSOR_DATA
```

`CONFIG_SENSOR5_VALUE_KEY`标签用于解析JSON和构造JSON数据。此标记确定将用于从传入的MQTT消息中提取传感器数据的密钥。 

**SenseCAP指示器UI**

`CONFIG_SENSOR5_UI_UNIT`和`CONFIG_SENSOR5_UI_NAME`标签用于设置SenseCAP指示器上的显示。`CONFIG_SENSOR5_UI_UNIT`标签确定要显示的测量单位，而`CONFIG_SENSOR5_UI_NAME`标签确定要显示的传感器名称。

如果你想改变SenseCAP指示器上显示的标题或测量单位，你可以简单地修改`CONFIG_SENSOR5_UI_UNIT`和`CONFIG_SENSOR5_UI_NAME`标签。同样的原理也适用于其他传感器和开关。

### CONFIG_BROKER_URL

`CONFIG_BROKER_URL`应该与Home Assistant的MQTT代理地址相关。这对于SenseCAP指示器和Home Assistant之间的通信至关重要。

### ha_config.h` 和Configuration.yaml`之间的关系

`ha_config.h`文件是C编程语言的头文件。它包含在几个源文件之间共享的定义。在这种情况下，它包含与MQTT配置相关的定义。

"configuration.yaml"文件，另一方面，是Home Assistant使用的一个文件，用于跟踪您设置中的各种实体。

当你修改`configuration. py `文件时。要添加指示器实体，你需要将`ha_config.h`文件中的定义添加到Home Assistant设置中。

### `indicator_ha.c` 功能

`indicator_ha.c`文件包含了集成家庭助手的主要功能。它包括用于初始化MQTT客户机、订阅主题和处理传入消息的函数。 

你可以在[这里](https://raw.githubusercontent.com/Seeed-Solution/SenseCAP_Indicator_ESP32/main/examples/indicator_ha/main/model/indicator_ha.c)找到`indicator_ha.c`文件。 

该文件包含Home Assistant集成的主要功能。它包括用于初始化MQTT客户机、订阅主题和处理传入消息的函数。下面是关键函数的简要概述以及它们是如何工作的: 

1. `mqtt_event_handler()`:该函数是MQTT事件的主要事件处理程序。每当MQTT客户机中发生事件时，例如到达新消息、建立连接或发生断开连接时，都会调用它。根据事件的类型，它执行不同的操作。例如，如果新消息到达，它会调用`mqtt_message_arrived()`函数来处理该消息。 

2. `mqtt_message_arrived()`:当新的MQTT消息到达时，调用此函数。它解析消息并根据消息的内容执行适当的操作。例如，它可能根据接收到的消息更新传感器或开关的状态。 

3. `mqtt_subscribe()`:此函数用于订阅MQTT主题。当您订阅一个主题时，您告诉MQTT代理您希望接收发布到该主题的消息。在SenseCAP指示器的上下文中，该函数用于订阅指示器的传感器和开关将其状态发布到的主题。 

4. `mqtt_publish()`:此函数用于将消息发布到MQTT主题。当您将消息发布到主题时，它将被发送到MQTT代理，然后由MQTT代理将其转发到订阅了该主题的所有客户机。在SenseCAP指示器的上下文中，此函数用于发布指示器的传感器和开关的状态。 

5. `mqtt_app_start()`:此函数用于启动MQTT客户端。它设置MQTT客户机配置，创建MQTT客户机，设置MQTT事件处理程序，最后将MQTT客户机连接到MQTT代理。 

6. `indicator_ha_init()`:这是集成Home Assistant的主要初始化函数。它通过调用`mqtt_app_start()`初始化MQTT客户端，然后通过调用`mqtt_subscribe()`订阅必要的MQTT主题。 

这些函数协同工作，实现SenseCAP指示器与Home Assistant之间通过MQTT进行通信。`indicator_ha_init()`函数启动MQTT客户端并订阅必要的主题。然后，每当MQTT事件发生时，都会调用`mqtt_event_handler()`函数来处理事件。如果新消息到达，它会调用`mqtt_message_arrived()`来处理该消息。每当传感器或开关的状态发生变化时，都会调用`mqtt_publish()`将新状态发布到相应的MQTT主题。

## 来源

1. **Demo SDK**: SenseCAP指示器的Demo SDK可以在[GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32)上找到。 
2. **`indicator_ha.c`文件**:该文件包含集成家庭助手的主要功能。你可以在[这里](https://raw.githubusercontent.com/Seeed-Solution/SenseCAP_Indicator_ESP32/main/examples/indicator_ha/main/model/indicator_ha.c)查看它。 
3. **用户指南**:提供SenseCAP指示板的软硬件详细信息。你可以在[这里](/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator)阅读它。 
4. **Home Assistant安装指南**:如果你刚接触Home Assistant，本指南将帮助你安装和设置它。你可以在[这里](https://www.home-assistant.io/installation/)找到它。 
5. **ESP-IDF入门指南**:该指南提供了配置和使用ESP-IDF来构建项目的完整步骤。你可以在[这里](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html)访问它。 
6. [Home Assistant（家庭助理）的概念和术语](https://www.home-assistant.io/getting-started/concepts-terminology/)


## 技术支持

**需要帮助你的SenseCAP指示器吗?我们是来帮助你的!**

如果您在学习本教程过程中遇到任何问题或问题，请随时联系我们的技术支持。我们永远在这里提供帮助! 

访问我们的[查看官方Discord频道](https://discord.com/invite/QqMgVwHT3X)提出您的问题或[GitHub讨论](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions)分享您想要的一切!