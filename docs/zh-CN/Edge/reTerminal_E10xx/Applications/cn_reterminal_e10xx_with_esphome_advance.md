---
description: 本文介绍如何在 Home Assistant 中利用 reTerminal E Series ePaper Display 系列的硬件功能在 ESPHome 上。
title: reTerminal E Series ePaper Display 在 Home Assistant 中的高级 ESPHome 使用方法
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/27.webp
slug: /cn/reterminal_e10xx_with_esphome_advanced
sidebar_position: 3
last_update:
  date: 07/24/2025
  author: Citric
---

# reTerminal E Series ePaper Display 在 Home Assistant 中的高级 ESPHome 使用方法

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/27.jpg" style={{width:700, height:'auto'}}/></div><br />

本文探讨了 reTerminal E Series ePaper Display 设备的高级 ESPHome 配置，基于我们的[基础 ESPHome 使用指南](https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_esphome)中涵盖的基础概念。如果您是 ESPHome 或 reTerminal E Series ePaper Display 的新手，我们建议在深入了解这些高级应用之前先从基础指南开始。

## 硬件功能

reTerminal E Series ePaper Display 包含几个硬件组件，可以通过 ESPHome 在 Home Assistant 中利用：

- 三个可编程按钮（GPIO3、GPIO4、GPIO5）

- 蜂鸣器（GPIO45）

- 电池电量监控（GPIO1 用于电压）

- 板载 LED（GPIO6）

- 温湿度传感器（I²C 接口）

让我们探讨如何在实际应用中使用这些组件。

## reTerminal E Series ePaper Display 硬件组件控制

让我们探讨如何在 Home Assistant 中使用 reTerminal E Series ePaper Display 上的每个硬件组件。

### 按钮和 LED

此示例演示如何使用 reTerminal E Series ePaper Display 上的三个按钮来控制功能，并通过板载 LED 提供视觉反馈。

您可以通过复制下面的代码并将其粘贴到 Yaml 文件中的 `captive_portal` 代码行之后来使用此示例。

```yaml
# 按钮配置
binary_sensor:
  - platform: gpio
    pin:
      number: GPIO3         # 绿色按钮
      mode: INPUT_PULLUP
      inverted: true
    id: button_1
    name: "Button 1"
    on_press:
      then:
        - light.turn_on: onboard_led
        - delay: 500ms
        - light.turn_off: onboard_led
        
  - platform: gpio
    pin:
      number: GPIO4          # 右侧白色按钮
      mode: INPUT_PULLUP
      inverted: true
    id: button_2
    name: "Button 2"
    on_press:
      then:
        - light.turn_on: onboard_led
        - delay: 200ms
        - light.turn_off: onboard_led
        - delay: 200ms
        - light.turn_on: onboard_led
        - delay: 200ms
        - light.turn_off: onboard_led
        
  - platform: gpio
    pin:
      number: GPIO5           # 左侧白色按钮
      mode: INPUT_PULLUP
      inverted: true
    id: button_3
    name: "Button 3"
    on_press:
      then:
        - light.toggle: onboard_led

# LED 配置
output:
  - platform: gpio
    pin: GPIO6
    id: led_output
    inverted: true

light:
  - platform: binary
    name: "Onboard LED"
    output: led_output
    id: onboard_led
```

此配置：

- 将所有三个按钮设置为带上拉电阻的输入

- 配置按钮 1 短暂闪烁 LED

- 配置按钮 2 以双闪模式闪烁 LED

- 配置按钮 3 切换 LED 开/关

- 使 LED 在 Home Assistant 中作为可控制的灯光实体可用

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/45.gif" style={{width:250, height:'auto'}}/></div>

### 蜂鸣器控制

reTerminal E Series ePaper Display 在 GPIO45 上包含一个蜂鸣器，可用于提供声音反馈。以下是配置方法：

您可以通过复制下面的代码并将其粘贴到 Yaml 文件中 `captive_portal` 代码行之后来使用此示例。

```yaml
# 此组件创建原始 PWM（脉宽调制）输出信号。
# 对于 ESP32，正确的平台是 'ledc'，它使用专用的 LED 控制硬件外设。
output:
  - platform: ledc   # 更正：'ledc' 是 ESP32 PWM 的正确平台。
    pin: GPIO45
    id: buzzer_pwm
    # 频率决定蜂鸣器声音的音调。1000Hz 是中等音调。
    frequency: 1000Hz

# 创建一个灯光实体，提供用户友好的方式来控制蜂鸣器。
# 灯光的"亮度"将控制 PWM 占空比，这有效地改变了蜂鸣器的音量。
light:
  - platform: monochromatic
    output: buzzer_pwm
    name: "Buzzer"
    id: buzzer
    # 将过渡长度设置为 0s 使蜂鸣器立即开启和关闭。
    default_transition_length: 0s

# 此部分定义将触发蜂鸣器的物理按钮。
binary_sensor:
  - platform: gpio
    pin:
      number: GPIO3            # 连接到绿色按钮的 GPIO 引脚。
      mode: INPUT_PULLUP       # 使用内部上拉电阻。
      inverted: true           # 按下时信号为低电平。
    id: button_1
    # 'on_press' 定义按下按钮时要执行的动作序列。
    on_press:
      then:
        # 第一次蜂鸣：以 50% 音量（亮度）开启 200 毫秒。
        - light.turn_on:
            id: buzzer
            brightness: 50%
        - delay: 200ms
        - light.turn_off: buzzer
        # 蜂鸣之间暂停 100 毫秒。
        - delay: 100ms
        # 第二次蜂鸣：以 70% 音量开启 200 毫秒。
        - light.turn_on:
            id: buzzer
            brightness: 70%
        - delay: 200ms
        - light.turn_off: buzzer
```

此配置：

- 将蜂鸣器设置为 PWM 输出

- 创建一个灯光实体来控制蜂鸣器

- 配置按钮 1 在按下时播放短促的蜂鸣模式

:::tip
您可以调整 `frequency` 参数来改变蜂鸣器的音调。数值越高，音调越高。
:::

### 电池监控

reTerminal E Series ePaper Display 可以通过 GPIO1 上的模拟输入监控其电池电量。以下是设置方法：

```yaml
esphome:
  name: reterminal-e10xx
  friendly_name: reTerminal_E10xx
  on_boot:
    priority: 600
    then:
      - output.turn_on: bsp_battery_enable

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

# 启用日志记录
logger:

# 启用 Home Assistant API
api:
  encryption:
    key: "m+rOiVDwjdvePoiG1zritvcD0Kl/a2zmsnuG+4IfWlw="

ota:
  - platform: esphome
    password: "710fecea969062a5775b287a54f3c0f5"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

  # 在 wifi 连接失败时启用后备热点（强制门户）
  ap:
    ssid: "Reterminal-E10Xx"
    password: "tRc2fXaYE54Q"

captive_portal:

output:
  - platform: gpio
    pin: GPIO21
    id: bsp_battery_enable

sensor:
  - platform: adc
    pin: GPIO1
    name: "Battery Voltage"
    id: battery_voltage
    update_interval: 60s
    attenuation: 12db
    filters:
      - multiply: 2.0  # 分压器补偿

  - platform: template
    name: "Battery Level"
    id: battery_level
    unit_of_measurement: "%"
    icon: "mdi:battery"
    device_class: battery
    state_class: measurement
    lambda: 'return id(battery_voltage).state;'
    update_interval: 10s
    filters:
      - calibrate_linear:
          - 4.15 -> 100.0
          - 3.96 -> 90.0
          - 3.91 -> 80.0
          - 3.85 -> 70.0
          - 3.80 -> 60.0
          - 3.75 -> 50.0
          - 3.68 -> 40.0
          - 3.58 -> 30.0
          - 3.49 -> 20.0
          - 3.41 -> 10.0
          - 3.30 -> 5.0
          - 3.27 -> 0.0
      - clamp:
          min_value: 0
          max_value: 100
```

此配置：

- 通过 ADC 读取电池电压

- 使用校准曲线将电压转换为电池百分比

- 在 Home Assistant 中提供原始电压和百分比

:::caution
要测量电池电量，您需要启用 **GPIO21** 引脚。否则无法从 GPIO1 读取电池电压值。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/46.png" style={{width:1000, height:'auto'}}/></div>


## 演示 2. 将 Home Assistant 仪表板截图

此示例演示如何捕获您的 Home Assistant 仪表板截图并在 reTerminal E Series ePaper Display 上显示。

### 安装 [Puppet](https://github.com/balloob/home-assistant-addons) 插件

步骤 1. 首先，您需要安装 Puppet 插件。点击下面的按钮，它将直接带您到 Home Assistant 实例中的插件安装页面：

<div align="center">
<a href="https://my.home-assistant.io/redirect/supervisor_addon/?addon=0f1cc410_puppet&repository_url=https%3A%2F%2Fgithub.com%2Fballoob%2Fhome-assistant-addons" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#03A9F4', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>安装 Puppet 插件</button></p>
</a>
</div>

步骤 2. 在插件页面上，点击"INSTALL"按钮并等待安装完成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/48.png" style={{width:1000, height:'auto'}}/></div>

### 创建访问令牌

步骤 3. 安装完成后，转到 Puppet 插件的配置页面。如您所见，这里我们需要输入令牌。您需要为此插件创建一个访问令牌。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/49.png" style={{width:800, height:'auto'}}/></div>

步骤 4. 通过点击左下角的用户名导航到 Home Assistant 中的个人资料，然后在页面底部选择"Long-Lived Access Tokens"。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/50.png" style={{width:1000, height:'auto'}}/></div>

步骤 5. 创建一个新令牌，使用描述性名称如"Puppet Screenshot"，并复制生成的令牌。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/51.png" style={{width:800, height:'auto'}}/></div>

步骤 6. 返回 Puppet 插件配置，将令牌粘贴到"Long-Lived Access Token"字段中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/52.png" style={{width:1000, height:'auto'}}/></div>

步骤 7. 保存配置并重启 Puppet 插件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/95.jpg" style={{width:800, height:'auto'}}/></div>

### 了解截图 API

Puppet 插件在端口 10000 上启动一个服务器，生成任何 Home Assistant 页面的截图。使用方法如下：

#### 基本截图 URL 格式：

```
http://homeassistant.local:10000/lovelace/0?viewport=800x480
```

此 URL 将以 800x480 分辨率（非常适合 reTerminal E Series）捕获您默认仪表板的屏幕截图。

#### 电子纸优化：

对于电子纸显示器，添加 `eink` 参数来减少调色板：

```
http://homeassistant.local:10000/lovelace/0?viewport=800x480&eink=2
```

值 `2` 表示 2 色（黑白）调色板。

#### 反转颜色：

添加 `invert` 参数来反转黑白颜色：

```
http://homeassistant.local:10000/lovelace/0?viewport=800x480&eink=2&invert
```

#### 捕获不同页面：

您可以通过更改 URL 路径来捕获任何 Home Assistant 页面：

```
http://homeassistant.local:10000/todo?viewport=800x480&eink=2&invert
```

步骤 10. 通过在网页浏览器中输入截图 URL 来测试您的截图 URL。您应该能看到所选 Home Assistant 页面的截图。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/92.jpg" style={{width:800, height:'auto'}}/></div>

### ESPHome 配置

步骤 11. 在 `captive_portal` 部分之后，将以下代码添加到您的 ESPHome 配置中：

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
    url: http://homeassistant.local:10000/lovelace/0?viewport=800x480&eink=2&invert  # 替换为您的 Home Assistant 地址
    update_interval: 30s
    on_download_finished:
      - delay: 0ms
      - component.update: main_display

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2
    cs_pin: GPIO10
    dc_pin: GPIO11
    reset_pin:
      number: GPIO12
      inverted: false
    busy_pin:
      number: GPIO13
      inverted: true
    update_interval: never
    lambda: |-
      it.image(0, 0, id(dashboard_image));
```

:::caution
如果本地DNS解析在您的网络中不起作用，请将 `homeassistant.local` 替换为您的 Home Assistant 的实际IP地址。
:::

当您的配置成功上传并运行时，您的 reTerminal E Series ePaper Display 将显示您的 Home Assistant 仪表板的截图：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/54.jpg" style={{width:600, height:'auto'}}/></div>

## 演示 3：深度睡眠模式

:::tip
如果您开始使用深度睡眠程序，我们建议您优先使用右侧的白色按钮，并将右侧的白色按钮设置为睡眠唤醒按钮。这样，当您想要更新程序时，就不会遇到设备正在睡眠而无法通过串口上传程序的尴尬情况。
:::

此示例演示如何使用深度睡眠模式来显著降低功耗，使您的 reTerminal E Series ePaper Display 适用于电池供电的应用。

您可以通过复制下面的代码并将其粘贴到 Yaml 文件中 `captive_portal` 代码行之后来使用此示例。

```yaml
globals:
  - id: sleep_counter
    type: int
    restore_value: yes  # 使用RTC存储在睡眠期间保持计数器
    initial_value: '0'

# 深度睡眠配置
deep_sleep:
  id: deep_sleep_1
  run_duration: 30s  # 设备保持唤醒30秒
  sleep_duration: 3min  # 然后睡眠3分钟
  # 可选：使用按钮从睡眠中唤醒
  wakeup_pin: GPIO4
  wakeup_pin_mode: INVERT_WAKEUP

interval:
  - interval: 29s  # 在run_duration结束前安排睡眠
    then:
      - logger.log: "现在进入深度睡眠..."

font:
  - file: "gfonts://Inter@700"
    id: font1
    size: 24

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2
    cs_pin: GPIO10
    dc_pin: GPIO11
    reset_pin:
      number: GPIO12
      inverted: false
    busy_pin:
      number: GPIO13
      inverted: true
    update_interval: 3min
    lambda: |-
      id(sleep_counter) += 1;
      ESP_LOGD("main", "Wakeup count: %d", id(sleep_counter));
      it.printf(100, 100, id(font1), "Wakeup count: %d", id(sleep_counter));
```

此配置：

- 创建一个在睡眠周期中持续存在的计数器

- 配置设备唤醒30秒，然后睡眠3分钟

- 使用当前唤醒次数更新显示

- 可选择配置按钮来唤醒设备

运行时，您将看到设备每次从睡眠中唤醒时计数器都会递增：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/53.jpg" style={{width:600, height:'auto'}}/></div>

## 演示 4：综合示例

:::tip
为了更好地理解，我们强烈建议您在尝试这个综合示例之前先运行上面的基础示例。
:::

这个高级示例将多个功能组合成一个完整的 reTerminal E Series ePaper Display 仪表板解决方案。它演示了：

1. 天气和室内气候显示
2. 带图标的电池监控
3. 时间和日期显示
4. 使用按钮进行页面切换
5. 电池监控

<details>
<summary>点击此处查看完整代码</summary>

```yaml
esphome:
  name: reterminal
  friendly_name: reTerminal
  on_boot:
    priority: 600
    then:
      - output.turn_on: bsp_sd_enable
      - output.turn_on: bsp_battery_enable
      - delay: 200ms
      - component.update: battery_voltage
      - component.update: battery_level


esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

# 启用日志记录
logger:

# 启用 Home Assistant API
api:
  encryption:
    key: "g93yP72UIyVsz9WfffaDMK+JeIQYROIFRK+VIQjkM+g="

ota:
  - platform: esphome
    password: "1ff187393ee444aa2e892779dc78e488"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

  # 如果wifi连接失败，启用后备热点（强制门户）
  ap:
    ssid: "reTerminal-E1001"
    password: "yoUkaGlJaDpC"

captive_portal:

# 深度睡眠，通过GPIO4唤醒
deep_sleep:
  id: deep_sleep_1
  run_duration: 1min
  sleep_duration: 60min
  wakeup_pin: GPIO4          # 右侧白色按钮
  wakeup_pin_mode: INVERT_WAKEUP

# SPI / I²C
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9
i2c:
  scl: GPIO20
  sda: GPIO19

# 字体
font:
  - file: "gfonts://Inter@700"
    id: small_font
    size: 24
  - file: "gfonts://Inter@700"
    id: mid_font
    size: 36
  - file: "gfonts://Inter@700"
    id: big_font
    size: 180
  - file: "gfonts://Inter@700"
    id: time_font
    size: 96      # 用于大时间显示
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_large
    size: 70
    glyphs:
      - "\U000F050F"  # 温度计
      - "\U000F058E"  # 湿度
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_bat_icon
    size: 24
    glyphs:
      - "\U000F007A"  # mdi-battery-10
      - "\U000F007B"  # mdi-battery-20
      - "\U000F007C"  # mdi-battery-30
      - "\U000F007D"  # mdi-battery-40
      - "\U000F007E"  # mdi-battery-50
      - "\U000F007F"  # mdi-battery-60
      - "\U000F0080"  # mdi-battery-70
      - "\U000F0081"  # mdi-battery-80
      - "\U000F0082"  # mdi-battery-90
      - "\U000F0079"  # mdi-battery

globals:
  - id: page_index
    type: int
    restore_value: true
    initial_value: '0'
  - id: battery_glyph
    type: std::string
    restore_value: no
    initial_value: "\"\\U000F0079\""   # 默认满电池

sensor:
  - platform: sht4x
    temperature:
      name: "Temperature"
      id: temp_sensor
    humidity:
      name: "Relative Humidity"
      id: hum_sensor
  - platform: adc
    pin: GPIO1
    name: "Battery Voltage"
    id: battery_voltage
    update_interval: 60s
    attenuation: 12db
    filters:
      - multiply: 2.0
  - platform: template
    name: "Battery Level"
    id: battery_level
    unit_of_measurement: "%"
    icon: "mdi:battery"
    device_class: battery
    state_class: measurement
    lambda: 'return id(battery_voltage).state;'
    update_interval: 60s
    on_value:
      then:
        - lambda: |-
            int pct = int(x);
            if (pct <= 10)      id(battery_glyph) = "\U000F007A";
            else if (pct <= 20) id(battery_glyph) = "\U000F007B";
            else if (pct <= 30) id(battery_glyph) = "\U000F007C";
            else if (pct <= 40) id(battery_glyph) = "\U000F007D";
            else if (pct <= 50) id(battery_glyph) = "\U000F007E";
            else if (pct <= 60) id(battery_glyph) = "\U000F007F";
            else if (pct <= 70) id(battery_glyph) = "\U000F0080";
            else if (pct <= 80) id(battery_glyph) = "\U000F0081";
            else if (pct <= 90) id(battery_glyph) = "\U000F0082";
            else                id(battery_glyph) = "\U000F0079";
    filters:
      - calibrate_linear:
          - 4.15 -> 100.0
          - 3.96 -> 90.0
          - 3.91 -> 80.0
          - 3.85 -> 70.0
          - 3.80 -> 60.0
          - 3.75 -> 50.0
          - 3.68 -> 40.0
          - 3.58 -> 30.0
          - 3.49 -> 20.0
          - 3.41 -> 10.0
          - 3.30 -> 5.0
          - 3.27 -> 0.0
      - clamp:
          min_value: 0
          max_value: 100

output:
  - platform: gpio
    pin: GPIO6
    id: bsp_led
    inverted: true
  - platform: gpio
    pin: GPIO16
    id: bsp_sd_enable
  - platform: gpio
    pin: GPIO21
    id: bsp_battery_enable

# 板载LED
light:
  - platform: binary
    name: "Onboard LED"
    output: bsp_led
    id: onboard_led
    
binary_sensor:
  - platform: gpio    # 下一页
    pin:
      number: GPIO3
      mode: INPUT_PULLUP
      inverted: true
    id: key1
    name: "Key1"
    on_press:
      then:
        - lambda: |-
            id(page_index) = (id(page_index) + 1) % 2;
            id(epaper_display).update();

  - platform: gpio     # 上一页
    pin:
      number: GPIO5
      mode: INPUT_PULLUP
      inverted: true
    id: key2
    name: "Key2"
    on_press:
      then:
        - lambda: |-
            id(page_index) = (id(page_index) - 1 + 2) % 2;
            id(epaper_display).update();

  # - platform: gpio
  #   pin:
  #     number: GPIO4
  #     mode: INPUT_PULLUP
  #     inverted: true
  #   id: key2
  #   name: "Key2"
  #   on_press:
  #     then:
  #       - lambda: |-
  #           id(page_index) = (id(page_index) - 1 + 3) % 3;
  #           id(epaper_display).update();

# Home Assistant 时间
time:
  - platform: homeassistant
    id: ha_time

# 电子纸
display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.50inv2
    cs_pin: GPIO10
    dc_pin: GPIO11
    reset_pin:
      number: GPIO12
      inverted: false
    busy_pin:
      number: GPIO13
      inverted: true
    update_interval: never
    lambda: |-
      // ----------  页面 0  ----------
      if (id(page_index) == 0) {
        const int scr_w = 800;
        const int scr_h = 480;

        // 右上角电池
        it.printf(670, 13, id(font_bat_icon), "%s", id(battery_glyph).c_str());
        it.printf(700, 10, id(small_font), "%.0f%%", id(battery_level).state);

        //线条
        it.filled_rectangle(400, 100, 2, 280);

        // 将°C转换为°F
        float temp_f = id(temp_sensor).state * 9.0 / 5.0 + 32.0;

        // ---------------------------------------------------------
        // 水平分割：两个400像素列
        const int col_w = scr_w / 2;

        const int icon_y   = 100;   // 图标基线
        const int value_y  = 220;   // 数字基线
        const int unit_y   = 300;   // 单位基线
        const int label_y  = 380;   // 文本标签基线

        const int icon_size = 70;   // 图标字体大小
        const int val_size  = 120;  // 数字字体大小
        const int unit_size = 44;   // 单位字体大小
        const int label_size= 36;   // 标签字体大小

        // --- 左列：温度 -----------------------------
        const int left_mid = col_w / 2 - 30;   // 200像素

        // 图标
        it.printf(left_mid, icon_y, id(font_mdi_large), TextAlign::CENTER, "\U000F050F");
        // 数值
        it.printf(left_mid, value_y, id(big_font), TextAlign::CENTER, "%.0f", temp_f);
        // 单位
        it.printf(left_mid + 150, unit_y, id(mid_font), TextAlign::CENTER, "°F");
        // 标签
        it.printf(left_mid, label_y, id(mid_font), TextAlign::CENTER, "Temperature");

        // --- 右列：湿度 -------------------------------
        const int right_mid = col_w + col_w / 2;   // 600像素

        // 图标
        it.printf(right_mid, icon_y, id(font_mdi_large), TextAlign::CENTER, "\U000F058E");
        // 数值
        it.printf(right_mid, value_y, id(big_font), TextAlign::CENTER, "%.0f", id(hum_sensor).state);
        // 单位
        it.printf(right_mid + 150, unit_y, id(mid_font), TextAlign::CENTER, "%%");
        // 标签
        it.printf(right_mid, label_y, id(mid_font), TextAlign::CENTER, "Humidity");
      }
      // ----------  页面 1  ----------
      else{
        // 右上角电池
        it.printf(670, 13, id(font_bat_icon), "%s", id(battery_glyph).c_str());
        it.printf(700, 10, id(small_font), "%.0f%%", id(battery_level).state);

        auto now = id(ha_time).now();
        struct tm timeinfo = now.to_c_tm();

        // 居中时间 HH:MM
        char timeStr[6];
        strftime(timeStr, sizeof(timeStr), "%H:%M", &timeinfo);
        it.printf(400, 180, id(time_font), TextAlign::CENTER, timeStr);

        // 日期：星期几
        const char *weekday[] = {"Sun","Mon","Tue","Wed","Thu","Fri","Sat"};
        const char *wday = weekday[timeinfo.tm_wday];

        // 日期：月 - 日
        char dateStr[12];
        strftime(dateStr, sizeof(dateStr), "%b %d", &timeinfo);  // 例如 Jun 15

        // 星期几 + 日期在时间下方
        it.printf(400, 280, id(mid_font), TextAlign::CENTER, "%s, %s", wday, dateStr);
      }
```

</details>

当您的配置成功上传并运行时，您的 reTerminal E Series ePaper Display 将显示一个包含环境数据、时间和电池状态的综合仪表板：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/55.gif" style={{width:800, height:'auto'}}/></div>

### 理解综合示例

此示例实现了：

1. **多页面**：显示在两个页面之间切换 - 气候仪表板和时间/日期显示

2. **按钮导航**：使用 GPIO3 和 GPIO5 上的按钮在页面之间导航

3. **电池监控**：显示电池电量，图标会根据充电水平适当变化

4. **硬件初始化**：启动时启用 SD 卡和电池监控电路

5. **温湿度显示**：通过 I²C 使用板载 SHT4x 传感器

6. **动态图标**：Material Design 图标根据传感器值变化

## 常见问题

### Q1：为什么没有数据？

在这种情况下，您应该转到设置 -> 设备和服务 -> 集成来**重新配置**设备。没有找到您的电子纸面板？尝试重启 Home Assistant。

<div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/101.png" style={{width:'100%', height:'auto'}}/></div>

### Q2：为什么我无法在 Home Assistant 中获取这些数据？ {#port}

在这种情况下，您应该转到设置 -> 设备和服务 -> 集成来**添加**您的设备到 Home Assistant。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/11.png" style={{width:800, height:'auto'}}/></div>

<!-- ### Q3: How can I upload a new program when device is in deep sleep mode?

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/103.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/102.png" style={{width:'100%', height:'auto'}}/></div>
</div>

When the device is in deep sleep mode, you can't upload a new program directly. Follow these steps to enter download mode:

Step 1. Make sure the device is turned on. Then, press and hold the **Boot** button located next to the USB-C port on the XIAO ESP32-S3 Plus.

Step 2. While holding the **Boot** button, press the **Reset** button once, then release the **Boot** button.

Step 3. Turn off the battery switch and unplug the power cable.

Step 4. Finally, replug the cable and upload a new program. -->

### Q3：Wi-Fi 上传程序失败？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/74.png" style={{width:800, height:'auto'}}/></div>

在这种情况下，您的设备要么离线，要么处于深度睡眠模式。请确保它已连接到您的网络，或在尝试上传之前将其从睡眠模式唤醒。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
