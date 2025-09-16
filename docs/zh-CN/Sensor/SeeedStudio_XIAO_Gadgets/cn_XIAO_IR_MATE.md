---
title: XIAO IR Mate 智能红外遥控器入门指南
description: |
  来自 Seeed Studio 的智能红外遥控器，专为将电视和空调等传统家电集成到您的 Home Assistant 智能家居生态系统而设计。
image: https://files.seeedstudio.com/wiki/XIAO_IR_MATE/XIAO-Smart-IR-Mate.webp
slug: /cn/XIAO_IR_Mate_Smart_IR_Remote
keywords:
  - XIAO
  - Home Assistant
  - Smart Home
sidebar_position: 5
last_update:
  author: TienjuiWong
  date: 07/17/2025
---

# XIAO IR Mate 智能红外遥控器入门指南（适用于 Home Assistant）

欢迎使用 **XIAO IR Mate 智能红外遥控器**！该设备专为 Home Assistant 用户设计，旨在提供无缝、高效且集成的智能红外遥控解决方案。通过本指南，您将学习如何设置设备、将其连接到家庭网络、集成到 Home Assistant 中，并释放其全部潜力，从基本信号学习到高级智能空调控制。

<div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/6-109990586-XIAO-Smart-IR-Mate.jpg"
    alt="产品图"
    style={{
      maxWidth: '50%',
      height: 'auto',
      display: 'block',
      borderRadius: '8px'
    }}
  />
</div>

## 介绍

**XIAO IR Mate** 是一款基于 **Seeed Studio XIAO ESP32-C3** 的紧凑型智能红外模块。它集成了红外发射和接收、触摸感应、振动反馈和状态指示功能。通过 Wi-Fi 连接，可以完美集成到您的 Home Assistant 智能家居生态系统中。其核心使命是让所有使用红外遥控器的传统家电（如电视、空调、风扇等）变得"智能"，并允许您通过 HA 控制它们进行自动化。

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '16px',
  alignItems: 'center'
}}>
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/1-109990586-XIAO-Smart-IR-Mate.jpg" alt="XIAO Smart IR Mate 产品图 1" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/2-109990586-XIAO-Smart-IR-Mate.jpg" alt="XIAO Smart IR Mate 产品图 2" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/3-109990586-XIAO-Smart-IR-Mate.jpg" alt="XIAO Smart IR Mate 产品图 3" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/4-109990586-XIAO-Smart-IR-Mate.jpg" alt="XIAO Smart IR Mate 产品图 4" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/5-109990586-XIAO-Smart-IR-Mate.jpg" alt="XIAO Smart IR Mate 产品图 5" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/touch.jpg" alt="XIAO Smart IR Mate 产品图 6" />
</div>

- **与 Home Assistant 无缝集成**

基于 ESPHome 平台构建，IR Mate 可被 Home Assistant 自动发现，提供简单的实体以便轻松进行自动化和脚本编写。

- **强大的红外学习和发射功能**

配备三个高功率红外发射器，实现 360° 覆盖，以及高灵敏度接收器。支持从标准遥控器学习多达 10 个红外命令（例如，控制投影仪、空调、定时器），可在 Home Assistant 中一键回放。

- **直观的物理交互反馈**

配备振动马达和 LED 指示器。短振动确认操作，长振动表示学习模式，LED 显示网络状态，简化设置和故障排除。

- **可升级为狂热智能空调控制器**

刷入自定义固件，将 IR Mate 转换为智能空调遥控器。直接在 Home Assistant 中设置精确的温度、模式和风扇速度，具有自动红外代码生成功能，消除重复学习。

- **紧凑设计，USB-C 供电**

## 硬件概述

了解设备的基本组件将帮助您更好地使用它：

- **主控制器**：Seeed Studio XIAO ESP32-C3，提供强大的性能和Wi-Fi连接。
- **电源供应**：通过板载Type-C端口供电（5V）。
- **红外发射器**：3个高功率红外LED（使用引脚D1），确保360°信号传输无盲区。
- **红外接收器**：1个高精度红外接收器（使用引脚D2），用于学习其他遥控器的信号。
- **触摸传感器**：设备集成了触摸模块（使用引脚D3）。单次触摸会触发短暂振动（0.5秒）作为操作反馈。
- **振动马达**：内置振动马达（使用引脚D4）提供清晰的触觉反馈，具有不同的振动持续时间。
- **状态指示LED**：LED灯（使用引脚D5）用于指示设备的不同工作状态。
- **复位按钮**：设备上的物理按钮（连接到引脚D0），用于重启或恢复出厂设置。

## 首次使用和网络配置（出厂固件）

当您首次获得设备时，请按照以下步骤完成初始设置。

### 步骤1：开机

使用标准USB Type-C线缆为设备供电。启动后，设备将进入等待配置状态，您将看到**白色LED以1Hz频率闪烁**。

### 步骤2：进入AP配网模式

当网络未配置时，设备将自动创建一个名为**XIAO IR Mate**（或**Seeed_ir**，取决于您找到的名称）的Wi-Fi热点（AP）。

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/ap_mode_network_connect.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

### 步骤3：连接热点并配置网络

1. 在您的手机或电脑上打开Wi-Fi设置，搜索并连接名为**XIAO IR Mate**的网络。

:::note
热点的默认网络密码为'12345678'。
:::

2. 连接成功后，您的设备通常会自动打开配置页面。如果没有，请手动打开浏览器并访问**[http://192.168.4.1](http://192.168.4.1)**。
3. 在此页面上，您将看到Wi-Fi网络列表。请选择您家的**2.4GHz Wi-Fi网络（SSID）**并输入正确的密码。
4. 点击"Connect"或"Save"。设备将尝试连接到您提供的Wi-Fi网络。

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/ap_mode_network_connect_02.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

### 步骤4：连接成功

一旦设备成功连接到您的家庭Wi-Fi，AP热点将自动关闭，**状态指示灯将变为常亮**。网络配置现已完成。

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/ap_mode_network_connect_03.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

## Home Assistant集成（出厂固件）

设备固件基于**ESPHome**，使其非常容易集成到Home Assistant中。

1. **自动发现**：确保您的Home Assistant主机和XIAO IR Mate连接到同一本地网络。通常，HA会自动发现新的ESPHome设备。您将在**设置 \> 设备和服务**中看到"发现新设备"的通知。
2. **手动添加**：如果未自动发现，您可以点击右下角的**[添加集成]**按钮，搜索**"ESPHome"**，然后输入设备的主机名（例如，**xiao-ir-mate**）或IP地址来手动添加。

<div style={{textAlign:'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/homeassistant_01.png"
    alt=""
    style={{width:1000, height:'auto'}}
  /><br />

  <img
    src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/homeassistant_02.png"
    alt=""
    style={{width:1000, height:'auto'}}
  /><br />

  <img
    src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/homeassistant_05.png"
    alt=""
    style={{width:800, height:'auto'}}
  /><br />

  <img
    src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/homeassistant_06.png"
    alt=""
    style={{width:1000, height:'auto'}}
  />
</div>

3. **设备仪表板**：成功添加后，XIAO IR Mate将作为设备出现在HA中。其仪表板将包含以下实体，用于控制10个不同的红外信号：

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/homeassistant_07.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

## 核心功能详情（出厂固件）

如果您想要恢复设备或更新其固件，可以通过下面的按钮跳转。我们已经创建了一个专门用于 XIAO Gadget 直接刷写固件的页面。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://gadgets.seeed.cc/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 刷写固件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 红外信号学习

当您需要教 IR Mate 学习新的遥控器命令时，请按照以下步骤操作。出厂固件的核心界面包括一个**信号槽选择列表**，以及**学习**和**发送**按钮。

1. 在 Home Assistant 设备仪表板中，首先找到名为**"Signal"**的下拉选择列表。
2. 点击下拉列表并选择您想要使用的信号槽，例如**"signal_1"**。
3. 选择完成后，找到**"Learn"**按钮并点击其旁边的**"PRESS"**。
4. XIAO IR Mate 现在将进入学习模式并开始**持续振动**，表示您可以开始配对。
5. 将您的原始遥控器对准 IR Mate 的红外接收窗口，短按您想要学习的按钮。
6. IR Mate 成功接收并记录信号后，**振动将停止**，表示学习成功。
7. 此时，名为**"Is Learned Signal"**的状态指示器将自动变为"ON"，表示下拉列表中当前选择的信号槽（即"signal_1"）现在已存储了信号。

### 红外信号发送

一旦信号成功学习后，您可以随时发送它。

1. 在**"Signal"**下拉列表中，确保您已选择要发送的信号槽，例如**"signal_1"**。
2. 找到**"Send"**按钮并点击其旁边的**"PRESS"**。
3. XIAO IR Mate 将立即通过其 3 个红外发射器发送存储在当前选择槽中的信号。
4. **注意**：如果您在下拉列表中选择了一个从未学习过信号的信号槽，点击发送按钮将不会有任何效果。

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/homeassistant_08.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

## 物理交互与状态指示

除了 HA 控制外，您还可以通过物理交互来了解和控制设备。

### 状态指示灯（白色 LED）

- **慢闪烁（1Hz）**：设备正在等待连接到 Wi-Fi 网络。
- **常亮**：设备已成功连接到 Wi-Fi 网络并正常运行。

### 振动反馈

- **短振动（100ms）**：用于一般操作确认，例如触摸设备时。
- **长振动（500ms）**：用于重要状态提醒，例如进入学习模式或执行恢复出厂设置时。

### RESET 按钮

- **短按（1秒内）**：设备将重启，伴随短振动。如果设备无响应，这非常有用。
- **长按（超过5秒）**：设备将**执行恢复出厂设置**。此操作将**清除所有已保存的 Wi-Fi 凭据和所有 10 个已学习的红外信号**。执行此操作时，设备将发出长振动作为提示。完成后，设备将重启并返回到初始等待配置状态（LED 闪烁）。

## 高级用法 - 智能空调控制

出厂固件提供的基本"录制-重放"模式是通用的，但在控制像空调这样具有多种状态的设备（温度、模式、风速等）时可能会显得笨拙。为了实现更精细、更智能的空调控制，我们可以刷入专用的 ESPHome 固件，将 XIAO IR Mate 从"红外信号中继器"转变为真正的"智能空调控制器"。

在本章中，我们将以格力空调为详细示例，但这绝不是唯一选择。ESPHome 强大的生态系统支持众多空调品牌，您可以轻松按照本指南中的概念，对配置代码进行微小更改，来实现对美的、大金、松下等其他品牌的智能控制。

### 核心优势

- **状态化控制**：不再是简单的重放。您可以在 HA 中直接设置"24°C，制冷，自动风速"，设备将立即生成并发送正确的红外命令。
- **更友好的界面**：在 HA 中显示为标准的 Climate 卡片，操作直观。
- **节省空间**：无需为每个温度或模式学习单独的信号；一个配置即可控制所有空调功能。

### 前提条件

1. **安装 ESPHome**：如果您还没有安装，请从 Home Assistant 插件商店安装并启动 ESPHome 插件。
2. **获取您的空调品牌协议**：ESPHome 支持许多空调品牌协议（如格力、美的、大金等）。您需要知道您的空调品牌以选择正确的协议。

### 刷入自定义固件

1. **创建新设备配置**
      - 在 HA 中打开 ESPHome 界面。
      - 点击右下角的 **"+ NEW DEVICE"** 按钮，在弹出窗口中点击 **"Continue"**。
      - 为您的设备命名（例如 **xiao-ir-ac-controller**），然后选择板型为 **Seeed Studio XIAO ESP32C3**。
2. **编辑配置文件**
      - 点击新创建的设备卡片上的 **EDIT** 按钮进入 YAML 配置编辑器。
      - 删除编辑器中的所有默认内容。
      - **完整复制并粘贴** 下面的代码到编辑器中：

<Details>

```yaml title="seeed-ir-v1.yaml"
substitutions:
  name: "seeed-ir"
  friendly_name: "Gree AC Controller" # You can customize a more friendly name
  version: "v1"

esphome:
  name: "${name}-${version}"
  friendly_name: "${friendly_name}"
  name_add_mac_suffix: True

esp32:
  board: esp32-c3-devkitm-1
  framework:
    type: arduino

globals:
  - id: is_wifi_connected
    type: bool
    initial_value: 'false'
  - id: reset_press_time
    type: uint32_t
    initial_value: '0'
  - id: touch_count
    type: int
    restore_value: no
    initial_value: '0'
  - id: touch_timer
    type: unsigned long
    restore_value: no
    initial_value: '0'

logger:
  level: INFO

api:

ota:
  platform: esphome
  password: "15afb09b5aba7b3d6a6ba01180c60df5"  # Change this to your desired password

wifi:
  # ssid: !secret wifi_ssid
  # password: !secret wifi_password
  on_connect:
    - globals.set: {id: is_wifi_connected, value: 'true'}
    - light.turn_on: rgb_light
  on_disconnect:
    - globals.set: {id: is_wifi_connected, value: 'false'}
  ap:
    password: "12345678"

captive_portal:

remote_transmitter:
  id: default_ir_transmitter
  pin: GPIO3
  carrier_duty_percent: 50%
  rmt_channel: 0

remote_receiver:
  id: default_ir_receiver
  pin:
    number: GPIO4
    inverted: true
  rmt_channel: 2
  dump: raw # Keep for learning or debugging other infrared codes

# Gree Climate Control
climate:
  - platform: gree
    name: "Gree Air Conditioner" # The name displayed in Home Assistant
    id: gree_ac    # Internal ID used by ESPHome, for touch button control
    # --- Required configuration for the gree platform ---
    model: "yan"   # [IMPORTANT] This is a required parameter. Gree has multiple infrared protocols.
                   # You may need to try the following values to find the one that suits your air conditioner:
                   # "generic", "yan", "yaa", "yac", "yac1fb9", "yx1ff", "yag"
                   # "yan" is a common starting point.
    # Optional configuration:
    # sensor: my_temperature_sensor_id # If you have an external temperature sensor
    supports_cool: true
    supports_heat: true # If your Gree AC does not support heating, set to false
    # Note: According to the documentation, the gree platform does not seem to support receiver_id to sync the state from the original remote

binary_sensor:
  - platform: gpio
    id: touch_pad
    pin:
      number: GPIO5
      mode: INPUT_PULLDOWN
    on_state:
      then:
        - if:
            condition:
              binary_sensor.is_on: touch_pad
            then:
              - script.execute: vibe_short
              - lambda: |-
                  unsigned long current_time = millis();
                  if (current_time - id(touch_timer) < 300) {
                    id(touch_count)++;
                  } else {
                    id(touch_count) = 1;
                  }
                  id(touch_timer) = current_time;
                  ESP_LOGD("touch_pad", "Touch detected. Current count: %d", id(touch_count));
                  if (id(check_touch_actions_script).is_running()) {
                    id(check_touch_actions_script).stop();
                  }
                  id(check_touch_actions_script).execute();

  - platform: gpio
    id: reset_button
    pin:
      number: GPIO9 # Strapping Pin!
      mode: INPUT_PULLUP
    filters:
      - invert
    on_press:
      then:
        - lambda: id(reset_press_time) = millis();
    on_release:
      then:
        - lambda: |-
            uint32_t press_duration = millis() - id(reset_press_time);
            if (press_duration < 5000) {
              id(vibe_short).execute();
              ESP_LOGI("reset_button", "Short press: Restarting device.");
              ESP.restart();
            } else {
              id(vibe_long).execute();
              ESP_LOGI("reset_button", "Long press: Activating factory reset.");
              id(factory_reset_switch).turn_on();
            }

output:
  - platform: gpio
    id: vibration_output
    pin: GPIO6

switch:
  - platform: output
    id: vibration_switch
    name: "Vibration Motor"
    output: vibration_output
  - platform: factory_reset
    id: factory_reset_switch
    name: "Factory Reset"

light:
  - platform: esp32_rmt_led_strip
    rgb_order: GRB
    pin: GPIO7
    num_leds: 1
    rmt_channel: 1
    chipset: ws2812
    name: "RGB Status Light"
    id: rgb_light
    default_transition_length: 0s
    on_turn_on:
      - light.control:
          id: rgb_light
          red: 1.0
          green: 1.0
          blue: 1.0
          brightness: 0.7
    effects:
      - addressable_scan:
      - addressable_rainbow:

script:
  - id: vibe_short
    then:
      - switch.turn_on: vibration_switch
      - delay: 100ms
      - switch.turn_off: vibration_switch
  - id: vibe_long
    then:
      - switch.turn_on: vibration_switch
      - delay: 500ms
      - switch.turn_off: vibration_switch

  - id: check_touch_actions_script
    mode: restart
    then:
      - delay: 350ms
      - if: # Single-click action
          condition:
            lambda: 'return id(touch_count) == 1;'
          then:
            - logger.log: "Single Click: Toggling Gree AC Power"
            - lambda: |-
                // [IMPORTANT] Ensure the climate ID used below is gree_ac
                if (id(gree_ac).mode == climate::CLIMATE_MODE_OFF) {
                  ESP_LOGD("touch_action", "Gree AC is OFF, attempting to turn to COOL mode.");
                  auto call = id(gree_ac).make_call();
                  call.set_mode(climate::CLIMATE_MODE_COOL);
                  call.set_target_temperature(25);
                  call.perform();
                } else {
                  ESP_LOGD("touch_action", "Gree AC is ON, attempting to turn OFF.");
                  auto call = id(gree_ac).make_call();
                  call.set_mode(climate::CLIMATE_MODE_OFF);
                  call.perform();
                }
          else: # If not a single click, then check for a double click
            - if:
                condition:
                  lambda: 'return id(touch_count) == 2;'
                then: # Double-click action
                  - logger.log: "Double Click: Gree AC Temperature Up"
                  - lambda: |-
                      // [IMPORTANT] Ensure the climate ID used below is gree_ac
                      if (id(gree_ac).mode != climate::CLIMATE_MODE_OFF) {
                        float current_temp = id(gree_ac).target_temperature;
                        float max_temp = id(gree_ac).get_traits().get_visual_max_temperature();
                        if (current_temp < max_temp) {
                           ESP_LOGD("touch_action", "Increasing Gree AC temp from %.1f to %.1f", current_temp, current_temp + 1.0f);
                           auto call = id(gree_ac).make_call();
                           call.set_target_temperature(current_temp + 1.0f);
                           call.perform();
                        } else {
                          ESP_LOGD("touch_action", "Gree AC already at max temp: %.1f", max_temp);
                        }
                      }
                else: # If not a double click, then check for a triple click
                  - if:
                      condition:
                        lambda: 'return id(touch_count) == 3;'
                      then: # Triple-click action
                        - logger.log: "Triple Click: Gree AC Temperature Down"
                        - lambda: |-
                            // [IMPORTANT] Ensure the climate ID used below is gree_ac
                            if (id(gree_ac).mode != climate::CLIMATE_MODE_OFF) {
                              float current_temp = id(gree_ac).target_temperature;
                              float min_temp = id(gree_ac).get_traits().get_visual_min_temperature();
                              if (current_temp > min_temp) {
                                 ESP_LOGD("touch_action", "Decreasing Gree AC temp from %.1f to %.1f", current_temp, current_temp - 1.0f);
                                 auto call = id(gree_ac).make_call();
                                 call.set_target_temperature(current_temp - 1.0f);
                                 call.perform();
                              } else {
                                ESP_LOGD("touch_action", "Gree AC already at min temp: %.1f", min_temp);
                              }
                            }
                      else: # Other click counts
                        - logger.log:
                            level: WARN
                            format: "Touch Action: No specific action defined for %d clicks."
                            args: ['id(touch_count)']
      # Reset the touch count
      - lambda: 'id(touch_count) = 0; ESP_LOGD("check_touch_actions", "Touch count reset to 0.");'

interval:
  - id: blink_rgb_interval
    interval: 500ms
    then:
      - if:
          condition:
            lambda: 'return !id(is_wifi_connected);'
          then:
            - lambda: |-
                static bool intervalos_led_state = false;
                intervalos_led_state = !intervalos_led_state;
                auto call = id(rgb_light).turn_on();
                if (intervalos_led_state) {
                  call.set_rgb(0, 0, 1);
                  call.set_brightness(0.5);
                } else {
                  call.set_rgb(0, 0, 0); // Off
                }
                call.perform();
```

</Details>

3. **自定义您的配置**
      - **Wi-Fi**：如果您不使用 `!secret` 文件，请取消注释 `wifi:` 部分，并将 `Your_WiFi_SSID` 和 `Your_WiFi_Password` 替换为您自己的 Wi-Fi 信息。
      - **选择正确的空调协议**：这是最关键的步骤！示例使用 `platform: gree`。如果您的空调不是格力品牌，请将其替换为您品牌的平台。如何找到支持的品牌？请访问 [ESPHome Climate Components](https://esphome.io/components/climate/index.html) 页面，该页面列出了所有支持的品牌及其平台名称（例如 `daikin`、`midea`、`panasonic_ac` 等）。
          - 选择相应平台后，您可能还需要根据该平台的文档微调 `model` 或支持的模式等参数。
4. **编译和刷写**
      - 保存您的 YAML 配置。
      - 通过 USB 线将您的 XIAO IR Mate 连接到运行 HA 的计算机。
      - 点击设备卡片上的 **INSTALL** 按钮。
      - 选择 **"Plug into this computer"** 选项。
      - ESPHome 将编译固件并通过浏览器将其刷写到您的设备。按照屏幕提示完成该过程。
      - 刷写成功后，设备将自动重启并连接到您配置的 Wi-Fi。

### 在 Home Assistant 中使用

刷写和重启后，您的设备将在 Home Assistant 中显示为新的 Climate 实体（例如 `climate.gree_air_conditioner`）。您可以在仪表板中添加"恒温器卡片"以获得功能齐全的空调控制面板，让您可以自由调节温度、模式、风速和摆风，就像原生智能空调一样！

### 进一步展望：开拓您的思路

恭喜！到现在为止，您已经掌握了 XIAO IR Mate 的两个核心用途：一个是开箱即用的"万能遥控学习"功能，另一个是用于精确空调控制的"专业气候控制器"模式。

但不要止步于此，因为这只是开始！XIAO IR Mate 的真正乐趣在于其令人难以置信的灵活性。将其视为由您定义的"创意积木"，您可以用它构建远超想象的东西。以下是两个开拓思路的想法来启发您：

#### 想法 1：将旧遥控器复活为万能场景开关

**应用场景**

看看您周围。您是否有很多闲置的旧遥控器？旧电视、DVD 或音响的遥控器，有很多按钮，手感很好，现在只是在抽屉里积灰。如果您能使用这些遥控器上的按钮来控制智能灯、扫地机器人，甚至复杂的"回家"场景，那不是很酷吗？

**工作原理**

这个想法的核心是将 XIAO IR Mate 从"发射器"转变为"监听器"。它不再主动控制其他设备，而是静静地监听来自任何旧遥控器的信号，然后告诉 Home Assistant："我听到了一个信号，您决定做什么！"

- **实施步骤**

  1. **配置"监听器"固件：** 在您的 ESPHome 固件中，核心配置是 `remote_receiver` 组件。设备开机后的唯一工作就是"监听"红外信号。

  2. **识别每个按钮的"密码"：** 拿起一个旧遥控器，指向设备按任意按钮。在 ESPHome 日志中，您将看到该按钮的唯一红外代码（如一串 `RAW` 数据或 `NEC` 协议代码）。记下这个"密码"。

  3. **在 HA 中创建自动化规则：** 在 Home Assistant 中，设置一个自动化，触发条件为："当 XIAO IR Mate 检测到特定红外密码时。"

  4. **定义动作：** 规则的动作可以是任何事情！例如：

     - 当检测到 **电视遥控器的"音量 +"按钮** -> **启动扫地机器人** 开始清洁。

     - 当检测到 **Apple Remote 的"播放"按钮** -> **打开浴室灯**。

     - 当检测到 **DVD 遥控器的"红色"按钮** -> 执行"离家模式"场景。

- **这种方法的优势**

  - **升级改造和环保：** 为闲置硬件注入新生命，让电子垃圾重新发挥作用，既省钱又环保。

  - **真实的触觉按钮体验：** 与触摸屏相比，具有数十个不同、手感扎实按钮的物理遥控器在许多场景中更直接、更令人满意。

  - **高妻子接受因子 (WAF)：** 对于不习惯手机应用或智能音箱的家庭成员（如老人或儿童），告诉他们"按这个按钮开灯"是最直观、最容易学习的交互方式。

  - **不需要充电的"智能开关"：** 传统遥控器的电池通常可以使用一两年，这比许多需要频繁充电的智能设备方便得多。

#### **想法 2：创建万能"IoT 魔法按钮"**

**核心概念**

设备上的触摸按钮真的只能用来控制红外吗？当然不是！我们可以将其变成控制家中 **任何东西** 的魔法按钮。关键是"解耦"——完全分离"按下按钮"的物理动作和"实际发生什么"的智能动作。

- **实施步骤**

  1. **让按钮只做"报告者"：** 在固件中，配置触摸按钮（单击、双击、长按）不执行任何特定任务，只向 Home Assistant 发送"事件通知"。例如，双击时，它只向 HA 报告："嘿！我被双击了！"

  2. **让 HA 成为"指挥官"：** 在 Home Assistant 中，创建专门监听按钮这些各种"报告"（事件）的自动化。

  3. **连接一切，做任何事：** 一旦 HA 收到报告，它就可以命令家中的任何设备执行动作！

     - 收到 **"单击"** 报告 -> 切换房屋中所有 **Zigbee 灯** 的开/关状态。

     - 收到 **"双击"** 报告 -> 命令 **扫地机器人** 开始清洁。

- 接收到**"长按"**报告 -> 执行"电影模式"场景，关闭窗帘，调暗灯光，打开投影仪和音响系统。

- **这种方法的优势**

  - **打破边界，无限可能：** 您的触摸按钮不再只是"红外遥控器"的一部分，而是整个智能家居的物理开关，能够控制连接到 HA 的任何设备。

  - **灵活定义，随心改变：** 今天双击启动吸尘器，但明天您想让它播放音乐？只需在 HA 界面中编辑自动化，完全不需要触碰固件。

  - **最直观的交互：** 为您的家人提供最简单的控制方式。带有触觉反馈的物理按钮通常比打开手机应用程序更方便、更优雅。

简而言之，不要只把 XIAO IR Mate 看作红外工具。把它想象成一个连接到 Wi-Fi 的迷你机器人，具有触觉和"声音"（红外发射器）。它能做什么只受您的想象力限制！

## 常见问题 (FAQ)

> **问：为什么我在手机上找不到 XIAO IR Mate 的热点？**
> **答：** 请确认设备通过 Type-C 正确供电。检查白色 LED 是否闪烁。如果指示灯熄灭，请尝试更换线缆或电源。如果设备之前已成功配置到网络，除非网络连接失败或通过长按 RESET 按钮恢复出厂设置，否则不会再次创建 AP 热点。

> **问：如果红外学习失败怎么办？（出厂固件）**
> **答：** 请确保您的原始遥控器电池电量充足，并尽可能靠近 IR Mate 的接收器（通常是黑色半透明组件）。同时，避免在强光下或其他红外干扰源附近进行学习过程。

> **问：设备在 HA 中显示为离线？**
> **答：** 请检查您的家庭 Wi-Fi 是否正常工作，以及 IR Mate 是否在 Wi-Fi 信号范围内。您可以尝试短按 RESET 按钮重启设备。

> **问：刷入自定义固件后，如何恢复出厂固件？**
> **答：** 您需要获取出厂固件的 `.bin` 文件或其 ESPHome YAML 源文件，然后通过 ESPHome 再次刷入以覆盖自定义固件。

> **问：如何在自动化中使用学习的信号（出厂固件）或空调控制（高级固件）？**
> **答：** 在 HA 的自动化或脚本编辑器中，选择"调用服务"。

## 资源

- **[ZIP]** [硬件](https://files.seeedstudio.com/wiki/XIAO_IR_MATE/XIAO_IR_REMOTE_hardware.zip)
- **[ZIP]** [软件](https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/xiao_smart_ir_mate)

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
