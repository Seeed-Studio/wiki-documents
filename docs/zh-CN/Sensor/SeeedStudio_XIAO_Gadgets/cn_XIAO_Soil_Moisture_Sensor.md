---
description: XIAO 土壤湿度传感器入门指南
title: XIAO 土壤湿度传感器入门指南
keywords:
  - XIAO
  - Soil Moisture Sensor
  - ESP32-C6
  - Moisture
image: https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/1.webp
slug: /cn/xiao_soil_moisture_sensor
last_update:
  date: 05/26/2025
  author: Robben
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/top.jpg" style={{width:550, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-Soil-Sensor-p-6452.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 简介

XIAO 土壤湿度传感器是一款紧凑、低功耗的环境监测器，由 [XIAO ESP32-C6](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-Pre-Soldered-p-6328.html) 驱动。仅使用一节 AA 电池运行，提供持久的工作时间和实时的土壤状况更新。它具有预校准自适应土壤湿度感应功能，可精确监测土壤。同时，它支持动态监测间隔和即时读数，提供准确、响应迅速的数据。完全兼容 Home Assistant，是智能园艺和精准农业的理想选择——高效、可靠，专为可持续植物护理而设计。

## 特性

**1.三级土壤湿度监测**  

- 🌿 **正常：** 土壤湿度最佳，无需浇水。  
- 🌤 **接近干燥：** 湿度正在下降，准备尽快浇水。  
- 🌵 **干燥：** 严重缺水，立即浇水。

默认阈值：

- **60%** → 绿色到黄色转换。
- **20%** → 黄色到红色转换。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/feature_1.jpg" style={{width:800, height:'auto'}}/></div>

**2.即插即用 Home Assistant**  
预装 ESPHome — 开箱即用，支持 Home Assistant，让您直接从智能家居仪表板监控和自动化。

**3.自适应监测和即时读数**  

- 根据湿度水平自动调整检查间隔（8 小时 → 1 小时 → 15 分钟）。  
- 按一次按钮即可随时获得即时湿度读数。

**4.简单校准（可选）**  
快速三次按下按钮即可为您的特定土壤重新校准：干燥读数 + 湿润读数 → 系统自动调整。

- 三次短按 → 进入校准模式：
  - 红色 LED 闪烁 → 在 10 秒内，将传感器插入完全干燥的土壤中。
  - 等待红色 LED 停止闪烁，然后等待 3 秒。
  - 绿色 LED 闪烁 → 在 10 秒内，将传感器插入完全湿润的土壤中。
  - 等待绿色 LED 停止闪烁，然后等待 3 秒。
  - 校准结果：
    - 两次快速绿色闪烁 → 成功。
    - 两次快速红色闪烁 → 失败（可能是由于干燥/湿润读数颠倒）。

注意：在校准过程中，如果传感器未及时插入，初始读数可能不稳定。系统将进行多次采样，应用过滤，并对读数进行平均以确保可靠的校准。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/feature_4.jpg" style={{width:800, height:'auto'}}/></div>

## 硬件概述

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/hardware.jpg" style={{width:800, height:'auto'}}/></div>

## 入门指南

本节将指导您首次设置 XIAO 土壤湿度传感器。

### 所需材料

在本文教程内容开始之前，您可能需要准备以下硬件。

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO 土壤湿度传感器</th>
      <th>Home Assistant Green</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/big.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:270, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Home Assistant Green 是自动化家居最简单、最注重隐私的方式。它提供轻松的设置，让您只需一个系统就能控制所有智能设备，默认情况下所有数据都存储在本地。该板受益于蓬勃发展的 Home Assistant 生态系统，并将通过开源每月改进。

我们建议在本教程中使用 Home Assistant Green 作为 Home Assistant 主机，或者您可以使用任何带有 Supervisor 的 Home Assistant 主机。

:::tip 安装 Home Assistant
我们还编写了如何为一些 Seeed Studio 产品安装 Home Assistant 的教程，请参考它们。

- **[在 ODYSSEY-X86 上开始使用 Home Assistant](https://wiki.seeedstudio.com/cn/ODYSSEY-X86-Home-Assistant/)**
- **[在 reTerminal 上开始使用 Home Assistant](https://wiki.seeedstudio.com/cn/reTerminal_Home_Assistant/)**
- **[在 LinkStar H68K/reRouter CM4 上开始使用 Home Assistant](https://wiki.seeedstudio.com/cn/h68k-ha-esphome/)**

如果您没有使用 Seeed Studio 产品，您也可以在 Home Assistant 官方网站上查看并学习如何为其他产品安装 Home Assistant。

- **[Home Assistant 安装](https://www.home-assistant.io/installation/)**
:::

### 步骤 1. 安装 ESPHome

如果您已经安装了 ESPHome，可以跳过此步骤。

转到 **Settings** -> **Add-ons** -> **ADD-ON STORE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/01.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/02.png" style={{width:800, height:'auto'}}/></div>

搜索 ESPHome 并点击它。点击 **INSTALL** 和 **START**。

:::tip
如果您在附加组件商店中找不到 ESPHome，请确保您使用的是支持附加组件的 Home Assistant 安装（如 Home Assistant OS 或监督安装）。对于其他安装类型（如 Home Assistant Container），您可能需要使用 Docker 独立运行 ESPHome Device Builder。有关更多详细信息，请参阅 [官方 ESPHome 文档](https://esphome.io/guides/getting_started_hassio)。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/03.png" style={{width:800, height:'auto'}}/></div>

然后，ESPHome Builder 将出现在侧边栏中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/04.png" style={{width:800, height:'auto'}}/></div>

### 步骤 2：准备土壤湿度传感器

默认情况下，您的设备（XIAO ESP32C6）预装了 XIAO 土壤湿度传感器的固件。但是，如果您需要修改或升级默认固件，下面的资源部分提供了出厂 YAML 配置文件。您可以根据需要自定义逻辑并通过 Home Assistant 刷写。

:::tip
为确保读数准确，请在使用前对传感器进行快速校准。
:::

### 步骤 3：网络配置

1. **启用接入点**：
   - 首次上电时，模块将创建一个 Wi-Fi 网络（SSID：`Xiao-Soil-Moisture-Monitor`）。

2. **访问配置**：
   - 使用手机或 PC 连接到该网络。
   - 打开浏览器并导航到 `http://192.168.4.1`。
   - 输入您家庭 Wi-Fi 网络的 SSID 和密码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ap_wireless_setting_page.png" style={{width:'auto', height:650, "border-radius": '15px'}}/></div>

3. **Home Assistant 集成**：
   - 连接到家庭网络后，模块将在 Home Assistant 的 `Settings -> Devices & Services` 下可被发现。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ha_new_device_discovered.png" style={{width:400, height:'auto', "border-radius": '15px'}}/></div>

这样，您可以将模块连接到您的 Home Assistant 网络并让 Home Assistant 发现它。

### 步骤 4：添加模块设备

1. **自动发现**：
   - 确保在 Home Assistant 中安装了 **ESPHome**。
   - 导航到 `Settings -> Devices & Services -> Integrations` 并查找设备。

2. **手动配置**：
   - 如果未自动发现，请通过指定其 IP 地址手动添加设备。

添加设备后，您将在 Home Assistant 概览页面上看到一个名为 Solid_sensor 的新传感器卡，显示电池测量和当前土壤湿度状态。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/View_in_HA.png" style={{width:400, height:'auto', "border-radius": '15px'}}/></div>

现在您的土壤传感器已经启动并运行，去享受监测您的植物的乐趣吧！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/feature_2.jpg" style={{width:800, height:'auto'}}/></div>

## 高级用法

您可以修改原始固件逻辑，并直接通过 Home Assistant 刷写您的自定义版本土壤传感器。

### 步骤 1. 安装 ESPHome

请参阅上面步骤 1 中的安装指南。

### 步骤 2. 添加新设备

转到 ESPHome 并点击 **NEW DEVICE**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/06.png" style={{width:800, height:'auto'}}/></div>

为设备起一个您喜欢的名称，然后点击 **NEXT**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/1.png" style={{width:800, height:'auto'}}/></div>

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', marginLeft:'10%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/2.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3.png" style={{width:'100%', height:'auto'}}/></div>
</div>

创建新设备后，点击 **EDIT**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/4.png" style={{width:800, height:'auto'}}/></div>

### 步骤 3. 安装固件

这里是出厂固件：
<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/xiao-soil-moisture-monitor" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

这里是一个可直接使用的 `ESPHome` YAML 配置文件，适用于 Home Assistant：
<details>

<summary>点击这里预览完整代码</summary>

```yaml
# ==== AUTO-SYNC START: xiao-soil-moisture-monitor/xiao-soil-moisture-monitor.yaml ====

substitutions:
  name: "xiao-soil-moisture"
  friendly_name: "XIAO Soil Moisture Monitor"

esphome:
  name: "${name}"
  friendly_name: "${friendly_name}"
  name_add_mac_suffix: true
  project:
    name: "xiao.soil-moisture-monitor"
    version: "1.0"
  on_boot: 
    then:
      - output.turn_off: gpio_3_output
      - output.turn_on: gpio_14_output
      - light.turn_on:
          id: pwm_led
          brightness: 68%  # Set 68% duty cycle
      - if:
          condition:
            lambda: 'return id(wifi_net_status) == 0;'
          then:
            - logger.log: "The device has not been set to the network"
            - deep_sleep.prevent: deep_sleep_control
          else:
            - logger.log: "The device has been networked"
      - delay: 1s
      - script.execute: check_moisture_once


esp32:
  board: esp32-c6-devkitc-1
  framework:
    type: esp-idf

# LED Yellow	D10 18
# LED RED	D9  20
# LED Green	D8 19
# button	D2  2

# Battery	D0 0
# PWM out	D3 21
# Soil sensor	D1  1


output:
  - platform: gpio
    pin: GPIO18
    id: yellow_led_output

  - platform: gpio
    pin: GPIO19
    id: green_led_output

  - platform: gpio
    pin: GPIO20
    id: red_led_output

  - platform: ledc
    pin: GPIO21  
    id: pwm_output
    frequency: 200kHz  # Set the frequency to 200kHz

  - platform: gpio
    pin: GPIO3
    id: gpio_3_output

  - platform: gpio
    pin: GPIO14
    id: gpio_14_output
    
light:
  - platform: binary
    id: yellow_led
    output: yellow_led_output

  - platform: binary
    id: green_led
    output: green_led_output

  - platform: binary
    id: red_led
    output: red_led_output

  - platform: monochromatic
    output: pwm_output
    id: pwm_led
    name: "200kHz PWM"
    internal: true
    default_transition_length: 0s


script:
  - id: red_led_blink
    mode: restart
    then:
      - repeat:
          count: 10
          then:
            - light.turn_on: red_led
            - delay: 500ms
            - light.turn_off: red_led
            - delay: 500ms

  - id: green_led_blink
    mode: restart
    then:
      - repeat:
          count: 10
          then:
            - light.turn_on: green_led
            - delay: 500ms
            - light.turn_off: green_led
            - delay: 500ms

  - id: fast_blink_green
    then:
      - repeat:
          count: 5
          then:
            - light.turn_on: green_led
            - delay: 200ms
            - light.turn_off: green_led
            - delay: 200ms

  - id: fast_blink_red
    then:
      - repeat:
          count: 5
          then:
            - light.turn_on: red_led
            - delay: 200ms
            - light.turn_off: red_led
            - delay: 200ms

  - id: red_led_blink_3_times
    then:
      - repeat:
          count: 1
          then:
            - light.turn_on: red_led
            - delay: 1000ms
            - light.turn_off: red_led
            - delay: 100ms
  - id: yellow_led_blink_3_times
    then:
      - repeat:
          count: 1
          then:
            - light.turn_on: yellow_led
            - delay: 1000ms
            - light.turn_off: yellow_led
            - delay: 100ms

  - id: green_led_blink_3_times
    then:
      - repeat:
          count: 1
          then:
            - light.turn_on: green_led
            - delay: 1000ms
            - light.turn_off: green_led
            - delay: 100ms


  - id: do_calibration
    then:
      - deep_sleep.prevent: deep_sleep_control
      - logger.log: "Starting calibration"
      - script.execute: red_led_blink
      - delay: 10s
      - script.stop: red_led_blink
      - lambda: |-
          float sum = 0;
          for (int i = 0; i < 10; i++) {
            id(soil_sensor).update();
            sum += id(soil_sensor).state;
            delay(200);
          }
          id(dry_value) = sum / 10.0;
          ESP_LOGI("calibration", "Dry value: %f", id(dry_value));

      - delay: 3s

      - script.execute: green_led_blink
      - delay: 10s
      - script.stop: green_led_blink
      - lambda: |-
          float sum = 0;
          for (int i = 0; i < 10; i++) {
            id(soil_sensor).update();
            sum += id(soil_sensor).state;
            delay(200);
          }
          id(wet_value) = sum / 10.0;
          ESP_LOGI("calibration", "Wet value: %f", id(wet_value));

      - delay: 3s

      - lambda: |-
          if (id(dry_value) > id(wet_value)) {
            ESP_LOGI("calibration", "Calibration success");
            id(fast_blink_green).execute();
          } else {
            ESP_LOGW("calibration", "Calibration failed");
            id(fast_blink_red).execute();
          }

      - delay: 3s
      - script.execute: check_moisture_once
      - delay: 3s
      - deep_sleep.enter: deep_sleep_control

  - id: check_moisture_once
    then:
      - lambda: |-
          for(int i = 0; i < 10; i++){
            id(soil_sensor).update();
            delay(200);
          }
          float moisture = id(soil_sensor).state;
          ESP_LOGI("moisture_check", "Moisture reading: %f", moisture);
          float Diff = id(dry_value) - id(wet_value);
          ESP_LOGI("moisture_check", "Diff is: %f", Diff);
          ESP_LOGI("moisture_check", "ref_dry Diff is: %f",id(dry_value) - Diff * id(ref_dry));
          ESP_LOGI("moisture_check", "ref_wet Diff is: %f",id(dry_value) - Diff * id(ref_wet));
          if (moisture >= (id(dry_value) - Diff * id(ref_dry))) {  // The drier -> the higher the voltage
            id(red_led_blink_3_times).execute();
            id(deep_sleep_control).set_sleep_duration(900000);
          } else if(moisture >  (id(dry_value) - Diff * id(ref_wet)) && moisture < (id(dry_value) - Diff * id(ref_dry))){
            id(yellow_led_blink_3_times).execute();
            id(deep_sleep_control).set_sleep_duration(3600000);
          }else{
            // moisture >  (id(dry_value) - Diff * id(ref_wet))
            id(green_led_blink_3_times).execute();
            id(deep_sleep_control).set_sleep_duration(28800000);
          }



globals:
  - id: button_press_count
    type: int
    restore_value: no
    initial_value: '0'
  - id: dry_value
    type: float
    restore_value: yes
    initial_value: '2.75'
  - id: wet_value
    type: float
    restore_value: yes
    initial_value: '1.2'
  - id: wifi_net_status
    type: int
    restore_value: yes
    initial_value: "0"
  - id: ref_dry
    type: float
    restore_value: no
    initial_value: "0.23"
  - id: ref_wet
    type: float
    restore_value: no
    initial_value: "0.58"

binary_sensor:
  - platform: gpio
    pin:
      number: GPIO2
      mode: INPUT_PULLUP
      allow_other_uses: true
    id: my_button
    on_press:
      - lambda: |-
          id(button_press_count)++;
      - delay: 1s  # Delay 1 second to see if the button is pressed 3 times in a row
      - lambda: |-
          if (id(button_press_count) == 3) {
            id(button_press_count) = 0;
            id(do_calibration).execute();  // Trigger calibration process
          } else if (id(button_press_count) == 1) {
            id(button_press_count) = 0;
            id(check_moisture_once).execute();  // Perform an ADC decision
          } else {
            id(button_press_count) = 0;
          }
      
          
# interval:
#   - interval: 10s
#     then:
#       - script.execute: check_moisture_once

            

# Deep sleep configuration
deep_sleep:
  id: deep_sleep_control
  run_duration: 120s  
  sleep_duration: 180min  
  wakeup_pin: 
    number: GPIO2 
    inverted: true
    allow_other_uses: true
    mode: INPUT_PULLUP


external_components:
  - source: github://pr#7942
    components: [ "adc" ]

sensor:
  - platform: adc
    id: soil_sensor
    pin: GPIO1
    name: "Soil moisture measurement"
    update_interval: 4s
    internal: true
    attenuation: 12db


  - platform: adc
    pin: GPIO0
    name: "Battery measurement"
    attenuation: 12db
    # internal: true
    filters:                     # When the battery drops below 1V, it is dead.
      - lambda: |-
          if (x < 1.2) {
            return 0.0;
          }else if(x > 1.5){
            return 1.0 * 100.0;
          }else {
            return ((x - 1.2) / (1.5 - 1.2)) * 100.0;
          } 
    unit_of_measurement: "%"
    update_interval: 5s
    force_update: True

  - platform: wifi_signal
    name: "wifi singnal strength"
    update_interval: 10s
    
# text_sensor:
#   - platform: template
#     name: "Soil Moisture Status"   # ✅ Status displayed on the HA panel
#     id: soil_status
#     # internal: true
#     lambda: |-
#       float value = id(soil_sensor).state;
#       float Diff = id(dry_value) - id(wet_value);
#       if (value >= (id(dry_value) - Diff * id(ref_dry))) {
#         //id(red_led_blink_3_times).execute();
#         return {"Dry"};
#       } else if (value > (id(dry_value) - Diff * id(ref_wet)) && value < (id(dry_value) - Diff * id(ref_dry))) {
#         //id(yellow_led_blink_3_times).execute();
#         return {"Almost Dry"};
#       } else {
#         //id(green_led_blink_3_times).execute();
#         return {"Normal Moisture"};
#       }
#     update_interval: 5s

text_sensor:
  - platform: template
    name: "Soil Moisture Status"
    id: soil_status
    lambda: |-
      float value = id(soil_sensor).state;
      float Diff = id(dry_value) - id(wet_value);
      if (value >= (id(dry_value) - Diff * id(ref_dry))) {
        return {"Dry"};
      } else if (value > (id(dry_value) - Diff * id(ref_wet)) && value < (id(dry_value) - Diff * id(ref_dry))) {
        return {"Almost Dry"};
      } else {
        return {"Normal Moisture"};
      }
    update_interval: never  # 不让自动触发上报，我们自己控制

interval:
  - interval: 5s
    then:
      - text_sensor.template.publish:
          id: soil_status
          state: !lambda |-
            return "";
      - delay: 10ms
      - text_sensor.template.publish:
          id: soil_status
          state: !lambda |-
            float value = id(soil_sensor).state;
            float Diff = id(dry_value) - id(wet_value);
            if (value >= (id(dry_value) - Diff * id(ref_dry))) {
              id(deep_sleep_control).set_sleep_duration(900000);
              return "Dry";
            } else if (value > (id(dry_value) - Diff * id(ref_wet)) && value < (id(dry_value) - Diff * id(ref_dry))) {
              id(deep_sleep_control).set_sleep_duration(3600000);
              return "Almost Dry";
            } else {
              id(deep_sleep_control).set_sleep_duration(28800000);
              return "Normal Moisture";
            }  

# Enable logging
logger:

improv_serial:

# Enable Home Assistant API
api:

ota:
  - platform: esphome

wifi:
  on_connect:
    then:
      - if:
          condition:
            lambda: 'return id(wifi_net_status) == 0;'
          then:
            - logger.log: "The device has not been configured yet, but now it is successfully configured"
            - globals.set:
                id: wifi_net_status
                value: '1'
            - delay: 5s
            - deep_sleep.allow: deep_sleep_control
          else:
            - logger.log: "The device has been networked"


  on_disconnect:
    then:
      - globals.set:
          id: wifi_net_status
          value: '0'
  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "XIAO-Soil-Moisture-Monitor"

captive_portal:
# ==== AUTO-SYNC END ====
```

</details>

<details>
<summary>以下是 YAML 配置中使用的关键函数和逻辑概述。</summary>

`on_boot` – 定义设备启动时发生的操作。

- **输入参数**：无。
- **操作**：打开 GPIO 14，设置 PWM LED 亮度，检查 Wi-Fi 状态，并触发第一次湿度检查。

`scripts (red_led_blink, green_led_blink, fast_blink_green, fast_blink_red, etc.)` – 预定义的 LED 闪烁模式。

- **输入参数**：无。
- **操作**：以各种模式闪烁 LED 以指示状态或校准步骤。

`do_calibration` – 运行干燥和湿润土壤的校准过程。

- **输入参数**：无。
- **操作**：闪烁红色 LED，等待干燥读数；然后闪烁绿色 LED，等待湿润读数；存储平均值并确认成功或失败。

`check_moisture_once` – 读取和评估土壤湿度水平。

- **输入参数**：无。
- **操作**：进行多次 ADC 读数，计算平均值，与校准阈值比较，决定湿度状态，相应地触发 LED 和深度睡眠设置。

`binary_sensor (GPIO2)` – 处理物理按钮按压逻辑。

- **输入参数**：无。
- **操作**：计算按钮按压次数；单次按压触发湿度检查，三次按压触发校准。

`globals` – 存储系统状态和校准数据。

- **变量**：
  - `button_press_count`：跟踪按钮按压计数。
  - `dry_value`、`wet_value`：存储校准的干燥/湿润 ADC 值。
  - `wifi_net_status`：跟踪 Wi-Fi 连接状态。
  - `ref_dry`、`ref_wet`：用于阈值计算的参考缩放因子。

`deep_sleep` – 管理省电睡眠周期。

- **输入参数**：无。
- **操作**：运行 120 秒，然后睡眠最多 180 分钟；在按钮按压或间隔时唤醒。

`sensor (ADC)` – 从土壤传感器和电池读取模拟值。

- **输入参数**：无。
- **操作**：测量土壤湿度和电池电压；电池按比例显示百分比。

`text_sensor` – 发布人类可读的土壤湿度状态。

- **输入参数**：无。
- **操作**：在 Home Assistant 中显示 "Dry"、"Almost Dry" 或 "Normal Moisture"。

`wifi` + `api` + `ota` – 管理网络连接、Home Assistant 集成和无线固件更新。

- **输入参数**：Wi-Fi SSID 和密码。
- **操作**：将设备连接到网络，公开其 API，并启用远程更新。

</details>

点击 **INSTALL** 将代码安装到设备，您将看到以下图像。

<Tabs>
<TabItem value='通过浏览器安装'>

:::tip
如果您的 Home Assistant 主机（Raspberry PI/Green/Yellow 等）距离您很远，我们建议使用此方法。您可以使用手边的计算机进行安装。
:::

首先，您需要点击 **Manual download** 下载编译的固件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/62.png" style={{width:500, height:'auto'}}/></div>

打开此网站，我们将在此上传固件到 ePaper 面板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/63.png" style={{width:800, height:'auto'}}/></div>

返回 ESPHome 下载固件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/64.png" style={{width:800, height:'auto'}}/></div>

选择 Factory format。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/65.png" style={{width:500, height:'auto'}}/></div>

使用 USB 线缆**将 ePaper 面板连接到您的计算机**并点击 **CONNECT**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/66.png" style={{width:800, height:'auto'}}/></div>

选择 usbmodemxxx（Windows 是 COMxxx）并点击连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/67.png" style={{width:800, height:'auto'}}/></div>

点击 **INSTALL** 并选择您刚下载的固件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/69.png" style={{width:650, height:'auto'}}/></div>

您的固件将很快被刷写～

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/71.png" style={{width:650, height:'auto'}}/></div>

</TabItem>

<TabItem value='通过主机安装'>

:::tip
如果您的 Home Assistant 主机（Raspberry PI/Green/Yellow 等）就在附近，我们建议使用此方法，因为它更简单。
:::

在将代码安装到设备之前，您需要使用 USB 线缆**将此设备连接到运行 Home Assistant 的 Raspberry Pi 或 HA Green（Yellow）等**。

按照图像中的选项点击以将代码安装到设备。

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/6.png" style={{width:'70%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/7.png" style={{width:'100%', height:'auto'}}/></div>
</div>

稍等片刻，您将看到如下图所示的反馈。这意味着代码正在成功运行。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/9.png" style={{width:650, height:'auto'}}/></div>

</TabItem>

<TabItem value='通过 Wi-Fi 安装'>

:::tip
这是最简单的方法，但前提是在第一次安装程序时，您应该首先使用左侧的方法将程序上传到 ePaper 面板。之后，您可以通过 wifi 上传。另外，确保您的 YAML 配置包含正确配置的 `ota` 和 `api` 部分以及有效的加密密钥，以便此方法正常工作。
:::

通过这种方式，您不需要将 ePaper 面板连接到任何设备，只需确保它在线即可。

点击选项，然后固件将自动安装到 ePaper 面板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/72.png" style={{width:500, height:'auto'}}/></div>

稍等片刻，您将看到如下图所示的反馈。如果失败，可能是由于信号较弱。请将设备移近您的路由器。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/73.png" style={{width:650, height:'auto'}}/></div>

</TabItem>
</Tabs>

## 重置

如果需要重新刷写固件，您可以使用以下链接恢复默认固件：  
[https://gadgets.seeed.cc/](https://gadgets.seeed.cc/)

首先将您的设备连接到计算机。  
然后，在页面上找到 **XIAO Soil Moisture Monitor** 并点击 **Connect** 继续重新刷写。

## 资源

- **[PDF]** [XIAO 土壤湿度传感器原理图](https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/res/SCH.pdf)
- **[Kicad]** [XIAO 土壤湿度传感器 PCB](https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/res/Kicad.kicad_pcb)
- **[Yaml]** [XIAO 土壤湿度传感器 HA Yaml](https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/res/HomeAssistanceYaml.yaml)
- **[Bin]** [XIAO 土壤湿度传感器 HA 出厂固件](https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/res/factory.bin)
- **[链接]** [XIAO 土壤湿度传感器 3D 文件 Printtables](https://www.printables.com/model/1260595-3d-enclosure-for-seeed-studio-xiao-75-epaper-panel/edit)
- **[链接]** [XIAO 土壤湿度传感器 3D 文件 Thingiverse](https://www.thingiverse.com/thing:7039325)

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
