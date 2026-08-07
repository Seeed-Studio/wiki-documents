---
title: XIAO IR Mate 智能红外遥控器快速上手
description: |
  一款来自 Seeed Studio 的智能红外遥控器，旨在将电视、空调等传统家电无缝接入你的 Home Assistant 智能家居生态系统。
image: https://files.seeedstudio.com/wiki/XIAO_IR_MATE/XIAO-Smart-IR-Mate.webp
slug: /XIAO_IR_Mate_Smart_IR_Remote
sku: 109990586
keywords:
  - XIAO
  - Home Assistant
  - Smart Home
sidebar_position: 5
last_update:
  author: TienjuiWong
  date: 07/17/2025
createdAt: '2025-07-18'
updatedAt: '2026-07-14'
url: https://wiki.seeedstudio.com/cn/XIAO_IR_Mate_Smart_IR_Remote/
---


# XIAO IR Mate 智能红外遥控器快速上手（适用于 Home Assistant）

欢迎使用 **XIAO IR Mate Smart IR Remote**\! 这款设备专为 Home Assistant 用户设计，旨在提供无缝、高效、深度集成的智能红外遥控解决方案。通过本指南，你将学会如何完成设备的基础设置、连接家庭网络、集成到 Home Assistant 中，并逐步解锁其全部功能，从基础的红外信号学习到进阶的智能空调控制。

<div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/6-109990586-XIAO-Smart-IR-Mate.jpg"
    alt="产品示意图"
    style={{
      maxWidth: '50%',
      height: 'auto',
      display: 'block',
      borderRadius: '8px'
    }}
  />
</div>

## 介绍

**XIAO IR Mate** 是一款基于 **Seeed Studio XIAO ESP32-C3** 的紧凑型智能红外模块。它集成了红外发射与接收、触摸感应、震动反馈以及状态指示功能。通过 Wi-Fi 连接后，可以完美融入你的 Home Assistant 智能家居生态系统。它的核心使命是让所有使用红外遥控器的传统家电（如电视、空调、电风扇等）变得“智能”，并通过 HA 进行自动化控制。

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '16px',
  alignItems: 'center'
}}>
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/1-109990586-XIAO-Smart-IR-Mate.jpg" alt="XIAO Smart IR Mate 产品示意图 1" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/2-109990586-XIAO-Smart-IR-Mate.jpg" alt="XIAO Smart IR Mate 产品示意图 2" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/3-109990586-XIAO-Smart-IR-Mate.jpg" alt="XIAO Smart IR Mate 产品示意图 3" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/4-109990586-XIAO-Smart-IR-Mate.jpg" alt="XIAO Smart IR Mate 产品示意图 4" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/5-109990586-XIAO-Smart-IR-Mate.jpg" alt="XIAO Smart IR Mate 产品示意图 5" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/touch.jpg" alt="XIAO Smart IR Mate 产品示意图 6" />
</div>

- **与 Home Assistant 无缝集成**

基于 ESPHome 平台构建，IR Mate 能被 Home Assistant 自动发现，并提供简洁的实体，方便你进行自动化和脚本编排。

- **强大的红外学习与发射能力**

配备三颗高功率红外发射器，实现 360° 全向覆盖，并搭载高灵敏度接收器。支持学习多达 10 组来自标准遥控器的红外指令（例如控制投影仪、空调、定时器等），可在 Home Assistant 中一键回放。

- **直观的物理交互反馈**

内置震动马达和 LED 指示灯。短震动用于确认操作，长震动表示进入学习模式，LED 用于显示网络状态，简化设备的安装与故障排查。

- **可升级为强大的智能空调控制器**

通过烧录自定义固件，你可以将 IR Mate 升级为智能空调遥控器。在 Home Assistant 中直接设置精确温度、模式和风速，由系统自动生成红外码，无需重复学习。

- **小巧设计，USB-C 供电**

## 硬件概览

了解设备的基本组成有助于你更好地使用它：

- **主控制器**：Seeed Studio XIAO ESP32-C3，提供强大的性能和 Wi-Fi 连接能力。
- **电源供给**：通过板载 Type-C 接口供电（5V）。
- **红外发射器**：3 颗高功率红外 LED（使用引脚 D1），确保 360° 无死角信号发射。
- **红外接收器**：1 颗高精度红外接收器（使用引脚 D2），用于学习其他遥控器的信号。
- **触摸传感器**：设备集成了触摸模块（使用引脚 D3）。单次触摸会触发 0.5 秒的短震动，作为操作反馈。
- **震动马达**：内置震动马达（使用引脚 D4），通过不同震动时长提供清晰的触觉反馈。
- **状态指示 LED**：一颗 LED 灯（使用引脚 D5），用于指示设备的不同工作状态。
- **复位按键**：设备上的物理按键（连接到引脚 D0），用于重启或恢复出厂设置。

## 初次使用与网络配置（出厂固件）

当你第一次拿到设备时，请按照以下步骤完成初始设置。

### 步骤 1：上电

使用标准 USB Type-C 线为设备供电。启动后，设备会进入等待配置状态，你会看到 **白色 LED 以 1Hz 频率闪烁**。

### 步骤 2：进入 AP 配网模式

当网络尚未配置时，设备会自动创建一个 Wi-Fi 热点（AP），名称为 **XIAO IR Mate**（或 **Seeed_ir**，以你实际看到的为准）。

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/ap_mode_network_connect.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

### 步骤 3：连接热点并配置网络

1. 打开手机或电脑的 Wi-Fi 设置，搜索并连接名称为 **XIAO IR Mate** 的网络。

:::note
该热点的默认密码为 ‘12345678’。
:::

2. 连接成功后，你的设备通常会自动弹出配置页面。如果没有，请手动打开浏览器并访问 **[http://192.168.4.1](http://192.168.4.1)**。
3. 在该页面中，你会看到可用 Wi-Fi 网络列表。请选择你家中的 **2.4GHz Wi-Fi 网络（SSID）**，并输入正确的密码。
4. 点击 "Connect" 或 "Save"。设备将尝试连接到你提供的 Wi-Fi 网络。

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/ap_mode_network_connect_02.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

### 步骤 4：连接成功

当设备成功连接到家庭 Wi-Fi 后，AP 热点会自动关闭，且 **状态指示灯会常亮**。此时网络配置已完成。

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/ap_mode_network_connect_03.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

## Home Assistant 集成（出厂固件）

设备固件基于 **ESPHome**，因此非常容易集成到 Home Assistant 中。

1. **自动发现**：确保你的 Home Assistant 主机与 XIAO IR Mate 连接在同一局域网内。通常情况下，HA 会自动发现新的 ESPHome 设备。你会在 **Settings \> Devices & Services** 中看到 “New device discovered” 的通知。
2. **手动添加**：如果没有被自动发现，你可以点击右下角的 **[Add Integration]** 按钮，搜索 **"ESPHome"**，然后输入设备的主机名（例如 **xiao-ir-mate**）或 IP 地址进行手动添加。

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

3. **设备面板**：添加成功后，XIAO IR Mate 会作为一个设备出现在 HA 中。其设备面板中会包含以下实体，用于控制 10 组不同的红外信号：

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/homeassistant_07.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

## 核心功能详解（出厂固件）

如果你需要恢复设备或更新固件，可以通过下方按钮跳转。我们为 XIAO Gadget 直刷固件专门创建了一个页面。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://gadgets.seeed.cc/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Flash the Firmwave</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 红外信号学习

当你需要让 IR Mate 学习一个新的遥控指令时，请按照以下步骤操作。出厂固件的核心界面包括一个 **信号槽选择列表**，以及 **Learn** 和 **Send** 按钮。

1. 在 Home Assistant 的设备面板中，首先找到名为 **"Signal"** 的下拉选择列表。
2. 点击下拉列表，选择你想使用的信号槽，例如 **"signal_1"**。
3. 选择完成后，找到 **"Learn"** 按钮，并点击其旁边的 **"PRESS"**。
4. XIAO IR Mate 此时会进入学习模式，并开始 **持续震动**，表示你可以开始配对。
5. 将原始遥控器对准 IR Mate 的红外接收窗口，短按你希望学习的按键。
6. 当 IR Mate 成功接收并记录该信号后，**震动会停止**，表示学习成功。
7. 此时，一个名为 **"Is Learned Signal"** 的状态指示会自动变为 "ON"，表示当前下拉列表中选中的信号槽（即 "signal_1"）已经存储了信号。

### 红外信号发送

一旦成功学习了某个信号，你就可以在任何时候发送它。

1. 在 **"Signal"** 下拉列表中，确保已选择你希望发送的信号槽，例如 **"signal_1"**。
2. 找到 **"Send"** 按钮，并点击其旁边的 **"PRESS"**。
3. XIAO IR Mate 将通过其 3 个红外发射器立即发送当前所选槽中存储的信号。
4. **注意**：如果你在下拉列表中选择了一个从未学习过信号的信号槽，点击发送按钮将不会产生任何效果。

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/homeassistant_08.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

## 物理交互与状态指示

除了通过 HA 控制外，你还可以通过物理交互来了解和控制设备。

### 状态指示灯（白色 LED）

- **慢闪（1Hz）**：设备正在等待连接到 Wi-Fi 网络。
- **常亮**：设备已成功连接到 Wi-Fi 网络并正常运行。

### 震动反馈

- **短震动（100ms）**：用于一般操作确认，例如触摸设备时。
- **长震动（500ms）**：用于重要状态提示，例如进入学习模式或执行出厂重置。

### RESET 按钮

- **短按（1 秒内）**：设备将重启，并伴随一次短震动。如果设备无响应，这非常有用。
- **长按（超过 5 秒）**：设备将**执行出厂重置**。此操作将**清除所有已保存的 Wi-Fi 凭据以及全部 10 个已学习的红外信号**。执行该操作时，设备会发出一次长震动作为提示。完成后，设备将重启并回到初始的等待配置状态（LED 闪烁）。

## 高级用法 - 智能空调控制

出厂固件提供的基础“录制-回放”模式具有通用性，但在控制空调这类具有多种状态（温度、模式、风速等）的设备时会显得笨拙。为了实现更精细、更智能的空调控制，我们可以烧录专用的 ESPHome 固件，将 XIAO IR Mate 从一个“红外信号中继器”升级为真正的“智能空调控制器”。

本章节将以格力空调为详细示例，但这绝不是唯一选择。ESPHome 强大的生态系统支持众多空调品牌，你可以轻松按照本指南中的思路，仅对配置代码做少量修改，就能实现对美的、大金、松下等其他品牌空调的智能控制。

### 核心优势

- **有状态控制**：不再只是简单回放。你可以在 HA 中直接设置“24°C、制冷、自动风”，设备会立即生成并发送正确的红外指令。
- **更友好的界面**：在 HA 中以标准气候（Climate）卡片的形式呈现，操作直观。
- **节省空间**：无需为每个温度或模式单独学习信号；一套配置即可控制空调的全部功能。

### 前置条件

1. **安装 ESPHome**：如果尚未安装，请在 Home Assistant 插件商店中安装并启动 ESPHome 插件。
2. **获取你的空调品牌协议**：ESPHome 支持许多空调品牌协议（如 Gree、Midea、Daikin 等）。你需要知道自己空调的品牌，以选择正确的协议。

### 烧录自定义固件

1. **创建新的设备配置**
      - 在 HA 中打开 ESPHome 界面。
      - 点击右下角的 **"+ NEW DEVICE"** 按钮，在弹出窗口中点击 **"Continue"**。
      - 为你的设备命名（例如 **xiao-ir-ac-controller**），然后将开发板类型选择为 **Seeed Studio XIAO ESP32C3**。
2. **编辑配置文件**
      - 点击新建设备卡片上的 **EDIT** 按钮，进入 YAML 配置编辑器。
      - 删除编辑器中的所有默认内容。
      - **完整复制并粘贴**下方的代码到编辑器中：

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

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
  on_connect:
    - globals.set: {id: is_wifi_connected, value: 'true'}
    - light.turn_on: rgb_light
  on_disconnect:
    - globals.set: {id: is_wifi_connected, value: 'false'}

captive_portal:

remote_transmitter:
  id: default_ir_transmitter
  pin: GPIO3
  carrier_duty_percent: 50%
  rmt_symbols: 48
  non_blocking: false

remote_receiver:
  id: default_ir_receiver
  pin:
    number: GPIO4
    inverted: true
  dump: raw # Keep for learning or debugging other infrared codes
  rmt_symbols: 96

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
    rmt_symbols: 48
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

3. **自定义你的配置**
      - **Wi-Fi**：如果你不使用 `!secret` 文件，请取消注释 `wifi:` 部分，并将 `Your_WiFi_SSID` 和 `Your_WiFi_Password` 替换为你自己的 Wi-Fi 信息。
      - **选择正确的空调协议**：这是最关键的一步！示例中使用的是 `platform: gree`。如果你的空调不是格力，请将其替换为你品牌对应的平台。如何查找支持的品牌？请访问 [ESPHome Climate Components](https://esphome.io/components/climate/index.html) 页面，其中列出了所有支持的品牌及其平台名称（例如 `daikin`、`midea`、`panasonic_ac` 等）。
          - 选择对应的平台后，你可能还需要根据该平台的文档，对 `model` 或支持的模式等参数进行微调。
4. **编译并烧录**
      - 保存你的 YAML 配置。
      - 通过 USB 线将 XIAO IR Mate 连接到运行 HA 的电脑。
      - 点击设备卡片上的 **INSTALL** 按钮。
      - 选择 **"Plug into this computer"** 选项。
      - ESPHome 会编译固件，并通过浏览器将其烧录到你的设备。按照屏幕提示完成整个过程。
      - 烧录成功后，设备会自动重启并连接到你配置的 Wi-Fi。

### 在 Home Assistant 中的使用

烧录并重启后，你的设备会作为一个新的气候实体（例如 `climate.gree_air_conditioner`）出现在 Home Assistant 中。你可以在仪表盘中添加一个 “Thermostat Card”（恒温器卡片），即可获得一个功能完整的空调控制面板，让你像使用原生智能空调一样自由调节温度、模式、风速和扫风！

### 更多展望：打开你的脑洞

恭喜你！到这里，你已经掌握了 XIAO IR Mate 的两大核心用法：一个是开箱即用的“万能遥控学习”功能，另一个是用于精确空调控制的“专业气候控制器”模式。

但不要止步于此，因为这仅仅是开始！XIAO IR Mate 真正的乐趣在于它惊人的灵活性。把它想象成一个由你定义的“创意积木”，你可以用它搭建远超你想象的各种玩法。下面是两个打开思路的点子，供你参考：

#### 点子 1：让旧遥控器复活，变身万能场景开关

**应用场景**

环顾一下你周围，你是否有很多闲置的旧遥控器？老电视、DVD 或音响的遥控器，按键多、手感好，如今却只是在抽屉里吃灰。如果你能用这些遥控器上的按键来控制智能灯、扫地机器人，甚至是复杂的“回家模式”场景，是不是很酷？

**工作原理**

这个点子的核心，是把 XIAO IR Mate 从一个“发射器”变成一个“监听者”。它不再主动控制其他设备，而是安静地监听任何旧遥控器发出的信号，然后告诉 Home Assistant：“我听到一个信号，你来决定要做什么！”

- **实现步骤**

  1. **配置一个“监听器”固件：** 在你的 ESPHome 固件中，核心配置是 `remote_receiver` 组件。设备上电后的唯一任务就是“竖起耳朵”监听红外信号。

  2. **识别每个按键的“暗号”：** 拿起一个旧遥控器，对准设备按下任意按键。在 ESPHome 日志中，你会看到该按键对应的唯一红外编码（可能是一串 `RAW` 数据或一个 `NEC` 协议码）。把这个“暗号”记录下来。

  3. **在 HA 中创建自动化规则：** 在 Home Assistant 中，新建一个自动化，将触发条件设置为：“当 XIAO IR Mate 检测到某个特定的红外暗号时”。

  4. **定义动作：** 这个规则的动作可以是任何事情！例如：

     - 当检测到 **电视遥控器的 “音量 +” 按键** -> **启动扫地机器人** 开始清扫。

     - 当检测到 **Apple Remote 的 “Play” 按键** -> **打开浴室灯**。

     - 当检测到 **DVD 遥控器的 “红色” 按键** -> 执行“离家模式”场景。

- **这种玩法的优势**

  - **旧物改造，环保节约：** 让闲置硬件焕发第二春，把电子垃圾重新利用起来，既省钱又环保。

  - **真实的按键触感体验：** 相比触摸屏，一个拥有几十个清晰分区、手感扎实的物理遥控器，在很多场景下更直接、更爽快。

  - **高 WAF（家庭成员接受度）：** 对于不习惯用手机 App 或智能音箱的家人（如老人或小孩），告诉他们“按这个键就能开灯”，是最直观、最容易上手的交互方式。

  - **不需要充电的“智能开关”：** 传统遥控器的电池往往能用一两年，比很多需要频繁充电的智能小玩意方便得多。

#### **点子 2：打造一个万能的 “IoT 魔法按钮”**

**核心理念**

设备上的触摸按键，真的只能用来控制红外吗？当然不是！我们可以把它变成一个可以控制家里**任何东西**的魔法按钮。关键在于“解耦”——彻底将“按下按钮”这个物理动作，与“实际发生什么”这个智能行为分离开来。

- **实现步骤**

  1. **让按键只做“上报者”：** 在固件中，将触摸按键（单击、双击、长按）的配置改为不直接执行任何具体任务，而只是向 Home Assistant 发送一个“事件通知”。例如，当双击时，它只向 HA 报告：“嘿！我被双击了！”

  2. **让 HA 做“指挥官”：** 在 Home Assistant 中，创建自动化，专门监听来自该按键的各种“上报”（事件）。

  3. **万物互联，随心所欲：** 一旦 HA 收到上报，它就可以指挥家中任何设备行动！

     - 收到 **“单击”** 上报 -> 切换家中所有 **Zigbee 灯** 的开/关状态。

     - 收到 **“双击”** 上报 -> 指令 **扫地机器人** 开始清扫。

     - 收到 **“长按”** 上报 -> 执行“观影模式”场景，拉上窗帘、调暗灯光、打开投影和音响。

- **这种玩法的优势**

  - **打破边界，可能性无限：** 你的触摸按键不再只是“红外遥控器”的一部分，而是整个智能家的物理开关，可以控制任何接入 HA 的设备。

  - **灵活定义，随时更改：** 今天双击是启动扫地机，明天你想改成播放音乐？只需在 HA 界面里改一下自动化规则，完全不用动固件。

  - **最直观的交互方式：** 给家人提供最简单的控制方式。带有触觉反馈的物理按键，往往比打开手机 App 操作更方便、更优雅。

总之，不要只把 XIAO IR Mate 看作一个红外工具。把它想象成一个连上 Wi-Fi、拥有触觉和“声音”（红外发射器）的迷你机器人。它能做什么，唯一的限制就是你的想象力！

## 常见问题（FAQ）

> **问：为什么我在手机上找不到 XIAO IR Mate 的热点？**
> **答：** 请确认设备已通过 Type-C 正常供电，并检查白色 LED 是否在闪烁。如果指示灯不亮，请尝试更换数据线或电源适配器。如果设备之前已经成功配置过网络，在网络连接正常的情况下，它不会再次创建 AP 热点，除非网络连接失败，或者你通过长按 RESET 按钮进行了恢复出厂设置。

> **问：如果红外学习失败怎么办？（出厂固件）**
> **答：** 请确保原遥控器电量充足，并尽可能靠近 IR Mate 的接收端（通常是黑色半透明元件）进行学习。同时避免在强光环境下或其他红外干扰源附近进行学习操作。

> **问：设备在 HA 中显示离线？**
> **答：** 请检查家中 Wi-Fi 是否工作正常，并确认 IR Mate 处于 Wi-Fi 信号覆盖范围内。你可以尝试短按 RESET 按钮重启设备。

> **问：刷入自定义固件后，如何恢复出厂固件？**
> **答：** 你需要获取出厂固件的 `.bin` 文件或其 ESPHome YAML 源文件，然后通过 ESPHome 再次烧录，以覆盖自定义固件。

> **问：如何在自动化中使用学习到的信号（出厂固件）或空调控制（高级固件）？**
> **答：** 在 HA 的自动化或脚本编辑器中，选择 “Call service”（调用服务）。

## 资源

- **[ZIP]** [硬件](https://files.seeedstudio.com/wiki/XIAO_IR_MATE/XIAO_IR_REMOTE_hardware.zip)
- **[ZIP]** [软件](https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/xiao_smart_ir_mate)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
