---
description: 适用于 reTerminal E1001 / E1002 的 ESPHome 使用手册——用于 PCF8563 RTC 时间同步、microSD 卡检测、板载 PDM 麦克风初始化以及组合硬件状态仪表盘的独立示例。
title: 'ESPHome 使用手册：RTC、SD 卡与麦克风（reTerminal E 系列）'
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/27.webp
slug: /reterminal_e10xx_with_esphome_rtc_sd_microphone
sidebar_position: 5
sidebar_label: 'ESPHome - RTC, SD & Microphone'
last_update:
  date: 06/12/2026
  author: Citric
createdAt: '2026-06-12'
updatedAt: '2026-06-12'
url: https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_esphome_rtc_sd_microphone/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ESPHome 使用手册：RTC、SD 卡与麦克风（reTerminal E 系列）

:::tip 前置条件
本页面假设你已经完成了 [reTerminal E 系列的 ESPHome 显示使用手册](/cn/reterminal_e10xx_with_esphome)，并且你的设备已经在 Home Assistant 中在线。关于按键、蜂鸣器、LED、电池监控、SHT4x 和深度睡眠，请参阅 [ESPHome 使用手册：按键、蜂鸣器、LED、电池与低功耗](/cn/reterminal_e10xx_with_esphome_advanced)。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/27.jpg" style={{width:700, height:'auto'}}/></div><br />

本使用手册在 reTerminal E 系列 ESPHome 示例的基础上，继续介绍三个在显示与 I/O 使用手册中尚未覆盖的板载硬件模块：

- **PCF8563 RTC** - 从板载 RTC 读取硬件时间，并从 Home Assistant 同步时间。
- **microSD 卡槽** - 使能 SD 供电电源轨，并上报是否插入了卡。
- **PDM 麦克风** - 使能板载麦克风供电电源轨，并通过 ESPHome 初始化 PDM 麦克风。

下方每个小节都组织为一个独立的 ESPHome 演示示例。你可以复制一个完整的 YAML 示例，替换 API 和 OTA 占位符，然后直接从 ESPHome 上传。

:::note 适用机型
本页面中可直接复制的示例是为 **reTerminal E1001** 和 **reTerminal E1002** 编写的，与已测试的 ESPHome 硬件示例相匹配。板载麦克风示例适用于包含 PDM 麦克风硬件的机型；reTerminal E1004 不包含麦克风。
:::

## 硬件能力

本使用手册中的演示示例会用到以下引脚。

<div class="table-center">
  <table align="center">
    <tr>
      <th>功能</th>
      <th>ESPHome 组件</th>
      <th>引脚 / 地址</th>
    </tr>
    <tr>
      <td>PCF8563 RTC</td>
      <td><code>time.pcf8563</code></td>
      <td>I2C 地址 <code>0x51</code>，SDA <code>GPIO19</code>，SCL <code>GPIO20</code></td>
    </tr>
    <tr>
      <td>microSD 卡检测</td>
      <td><code>binary_sensor.gpio</code></td>
      <td><code>GPIO15</code>，低电平有效</td>
    </tr>
    <tr>
      <td>microSD 供电使能</td>
      <td><code>output.gpio</code></td>
      <td><code>GPIO16</code></td>
    </tr>
    <tr>
      <td>PDM 麦克风供电使能</td>
      <td><code>output.gpio</code></td>
      <td><code>GPIO38</code></td>
    </tr>
    <tr>
      <td>PDM 麦克风时钟</td>
      <td><code>i2s_audio</code></td>
      <td><code>GPIO42</code></td>
    </tr>
    <tr>
      <td>PDM 麦克风数据</td>
      <td><code>microphone.i2s_audio</code></td>
      <td><code>GPIO41</code></td>
    </tr>
    <tr>
      <td>共享 SPI 总线</td>
      <td><code>spi</code></td>
      <td>CLK <code>GPIO7</code>，MOSI <code>GPIO9</code>，MISO <code>GPIO8</code></td>
    </tr>
  </table>
</div>

:::caution 保护你的敏感信息
这些示例使用了诸如 `REPLACE_WITH_YOUR_API_KEY` 和 `REPLACE_WITH_YOUR_OTA_PASSWORD` 之类的占位符。请不要公开你的真实 API 加密密钥、OTA 密码、Wi-Fi 密码或 Home Assistant 令牌。
:::

## RTC 时间同步

本演示从板载 **PCF8563 RTC** 读取时间，并将其显示在电子纸屏幕上。当 Home Assistant 将时间同步到设备时，ESPHome 会把该时间写回到硬件 RTC。

RTC 使用共享 I2C 总线：

- SDA：`GPIO19`
- SCL：`GPIO20`
- RTC 地址：`0x51`

你可以通过替换占位符值并将完整 YAML 上传到你的设备来使用此示例。

<Tabs>
<TabItem value="For E1001" label="适用于 E1001" default>

```yaml
esphome:
  name: reterminal-e1001-rtc-demo
  friendly_name: reTerminal_E1001_RTC_Demo
  on_boot:
    priority: 600
    then:
      - pcf8563.read_time:

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

logger:
  hardware_uart: UART0

api:
  encryption:
    key: "REPLACE_WITH_YOUR_API_KEY"

ota:
  - platform: esphome
    password: "REPLACE_WITH_YOUR_OTA_PASSWORD"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
  ap:
    ssid: "E1001-RTC-Demo"
    password: "ChangeMe123"

captive_portal:

i2c:
  scl: GPIO20
  sda: GPIO19

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

time:
  - platform: pcf8563
    id: rtc_time
    address: 0x51
    update_interval: never

  - platform: homeassistant
    on_time_sync:
      then:
        - pcf8563.write_time:
        - component.update: epaper_display

font:
  - file: "gfonts://Inter@700"
    id: font_title
    size: 32
  - file: "gfonts://Inter@700"
    id: font_body
    size: 26

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
    update_interval: 300s
    lambda: |-
      it.printf(400, 40, id(font_title), TextAlign::TOP_CENTER, "RTC Time Sync Demo");
      auto now = id(rtc_time).now();
      if (now.is_valid()) {
        it.strftime(400, 135, id(font_title), TextAlign::TOP_CENTER, "%Y-%m-%d", now);
        it.strftime(400, 190, id(font_title), TextAlign::TOP_CENTER, "%H:%M:%S", now);
        ESP_LOGD("rtc_demo", "RTC time is valid");
      } else {
        it.printf(400, 150, id(font_body), TextAlign::TOP_CENTER, "RTC: waiting for sync");
        ESP_LOGW("rtc_demo", "RTC time is not valid yet");
      }
```

</TabItem>
<TabItem value="For E1002" label="适用于 E1002">

```yaml
esphome:
  name: reterminal-e1002-rtc-demo
  friendly_name: reTerminal_E1002_RTC_Demo
  on_boot:
    priority: 600
    then:
      - pcf8563.read_time:

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

logger:
  hardware_uart: UART0

api:
  encryption:
    key: "REPLACE_WITH_YOUR_API_KEY"

ota:
  - platform: esphome
    password: "REPLACE_WITH_YOUR_OTA_PASSWORD"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
  ap:
    ssid: "E1002-RTC-Demo"
    password: "ChangeMe123"

captive_portal:

i2c:
  scl: GPIO20
  sda: GPIO19

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

time:
  - platform: pcf8563
    id: rtc_time
    address: 0x51
    update_interval: never

  - platform: homeassistant
    on_time_sync:
      then:
        - pcf8563.write_time:
        - component.update: epaper_display

font:
  - file: "gfonts://Inter@700"
    id: font_title
    size: 32
  - file: "gfonts://Inter@700"
    id: font_body
    size: 26

display:
  - platform: epaper_spi
    id: epaper_display
    model: Seeed-reTerminal-E1002
    update_interval: 300s
    lambda: |-
      const auto BLACK = Color(0, 0, 0, 0);
      const auto RED = Color(255, 0, 0, 0);
      const auto BLUE = Color(0, 0, 255, 0);

      it.printf(400, 40, id(font_title), BLACK, TextAlign::TOP_CENTER, "RTC Time Sync Demo");
      auto now = id(rtc_time).now();
      if (now.is_valid()) {
        it.strftime(400, 135, id(font_title), BLUE, TextAlign::TOP_CENTER, "%Y-%m-%d", now);
        it.strftime(400, 190, id(font_title), BLUE, TextAlign::TOP_CENTER, "%H:%M:%S", now);
        ESP_LOGD("rtc_demo", "RTC time is valid");
      } else {
        it.printf(400, 150, id(font_body), RED, TextAlign::TOP_CENTER, "RTC: waiting for sync");
        ESP_LOGW("rtc_demo", "RTC time is not valid yet");
      }
```

</TabItem>
</Tabs>

该配置将会：

- 在启动时读取一次 PCF8563 RTC。
- 在设备连接后，将 Home Assistant 的时间作为唯一可信时间源。
- 将 Home Assistant 的时间写回到硬件 RTC。
- 在电子纸屏幕上显示当前日期和时间。

下图展示了在 reTerminal E1002 上的预期效果。同一演示在 reTerminal E1001 和 E1002 上都可以运行。主要区别在于显示输出：E1001 显示为单色效果，而 E1002 可以显示彩色效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/252.jpeg" style={{width:700, height:'auto'}}/></div>

:::tip
如果在完全断电后 RTC 时间无法保持正确，请为 RTC 备用电池座安装或更换 CR1220 纽扣电池。
:::

## MicroSD 卡检测

本演示会上报是否插入了 microSD 卡。同时，它还会通过 `GPIO16` 打开 SD 卡供电电源轨。

卡检测引脚为低电平有效，因此二进制传感器使用 `inverted: true`。

你可以通过替换占位符值并将完整 YAML 上传到你的设备来使用此示例。

<Tabs>
<TabItem value="For E1001" label="适用于 E1001" default>

```yaml
esphome:
  name: reterminal-e1001-sd-demo
  friendly_name: reTerminal_E1001_SD_Demo
  on_boot:
    priority: 600
    then:
      - output.turn_on: bsp_sd_enable
      - delay: 200ms
      - component.update: epaper_display

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

logger:
  hardware_uart: UART0

api:
  encryption:
    key: "REPLACE_WITH_YOUR_API_KEY"

ota:
  - platform: esphome
    password: "REPLACE_WITH_YOUR_OTA_PASSWORD"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
  ap:
    ssid: "E1001-SD-Demo"
    password: "ChangeMe123"

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9
  miso_pin: GPIO8

output:
  - platform: gpio
    pin: GPIO16
    id: bsp_sd_enable

binary_sensor:
  - platform: gpio
    pin:
      number: GPIO15
      mode: INPUT_PULLUP
      inverted: true
    id: sd_card_detect
    name: "SD Card Detected"
    on_press:
      then:
        - logger.log: "SD card inserted"
        - component.update: epaper_display
    on_release:
      then:
        - logger.log: "SD card removed"
        - component.update: epaper_display

font:
  - file: "gfonts://Inter@700"
    id: font_title
    size: 32
  - file: "gfonts://Inter@700"
    id: font_body
    size: 28

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
    update_interval: 300s
    lambda: |-
      it.printf(400, 40, id(font_title), TextAlign::TOP_CENTER, "microSD Card Detection");
      if (id(sd_card_detect).state) {
        it.printf(400, 160, id(font_body), TextAlign::TOP_CENTER, "SD Card: inserted");
      } else {
        it.printf(400, 160, id(font_body), TextAlign::TOP_CENTER, "SD Card: not detected");
      }
      it.printf(400, 230, id(font_body), TextAlign::TOP_CENTER, "Detect pin: GPIO15");
```

</TabItem>
<TabItem value="For E1002" label="适用于 E1002">

```yaml
esphome:
  name: reterminal-e1002-sd-demo
  friendly_name: reTerminal_E1002_SD_Demo
  on_boot:
    priority: 600
    then:
      - output.turn_on: bsp_sd_enable
      - delay: 200ms
      - component.update: epaper_display

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

logger:
  hardware_uart: UART0

api:
  encryption:
    key: "REPLACE_WITH_YOUR_API_KEY"

ota:
  - platform: esphome
    password: "REPLACE_WITH_YOUR_OTA_PASSWORD"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
  ap:
    ssid: "E1002-SD-Demo"
    password: "ChangeMe123"

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9
  miso_pin: GPIO8

output:
  - platform: gpio
    pin: GPIO16
    id: bsp_sd_enable

binary_sensor:
  - platform: gpio
    pin:
      number: GPIO15
      mode: INPUT_PULLUP
      inverted: true
    id: sd_card_detect
    name: "SD Card Detected"
    on_press:
      then:
        - logger.log: "SD card inserted"
        - component.update: epaper_display
    on_release:
      then:
        - logger.log: "SD card removed"
        - component.update: epaper_display

font:
  - file: "gfonts://Inter@700"
    id: font_title
    size: 32
  - file: "gfonts://Inter@700"
    id: font_body
    size: 28

display:
  - platform: epaper_spi
    id: epaper_display
    model: Seeed-reTerminal-E1002
    update_interval: 300s
    lambda: |-
      const auto BLACK = Color(0, 0, 0, 0);
      const auto RED = Color(255, 0, 0, 0);
      const auto GREEN = Color(0, 255, 0, 0);

      it.printf(400, 40, id(font_title), BLACK, TextAlign::TOP_CENTER, "microSD Card Detection");
      if (id(sd_card_detect).state) {
        it.printf(400, 160, id(font_body), GREEN, TextAlign::TOP_CENTER, "SD Card: inserted");
      } else {
        it.printf(400, 160, id(font_body), RED, TextAlign::TOP_CENTER, "SD Card: not detected");
      }
      it.printf(400, 230, id(font_body), BLACK, TextAlign::TOP_CENTER, "Detect pin: GPIO15");
```

</TabItem>
</Tabs>

此配置：

- 通过 `GPIO16` 启用 SD 卡电源。
- 从 `GPIO15` 读取卡检测信号。
- 在电子纸屏幕上显示卡的状态。
- 将 `SD Card Detected` 作为二进制传感器暴露给 Home Assistant。

下图展示了在 reTerminal E1002 上的预期结果。相同的演示在 reTerminal E1001 和 E1002 上都适用。主要区别在于显示输出：E1001 显示单色结果，而 E1002 可以显示彩色结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/253.jpeg" style={{width:700, height:'auto'}}/></div>

:::note ESPHome 如何使用 microSD 卡
在本 ESPHome 菜谱中，microSD 卡被用作设备状态信号。该演示会检查是否插入了卡，在屏幕上显示结果，并将相同状态暴露给 Home Assistant。

这是因为 ESPHome 主要面向传感器、开关、显示屏和 Home Assistant 自动化设计。它通常不会被用作设备上的本地文件管理器。诸如打开文件、创建文件夹、写入日志或将 WAV 音频直接录制到 SD 卡等任务，更适合使用 Arduino，在那里你的固件可以直接控制 SD 卡文件系统。

在典型的 ESPHome 设置中，SD 卡状态可以用于：
- 显示存储是否在物理上可用；
- 在插入或移除卡时触发 Home Assistant 自动化；
- 与 RTC、电池和麦克风状态一起显示硬件健康信息。

如果你的目标是直接对 SD 卡进行文件读写，请参考 Arduino SD 卡菜谱。
:::

## PDM 麦克风电源检查

此演示启用板载 PDM 麦克风电源轨，并在电子纸屏幕上显示麦克风引脚分配。它保持 YAML 尽量精简，以便你可以先验证显示更新，然后如果希望将麦克风用于 Home Assistant 语音助手，再添加可选的 ESPHome I2S 麦克风配置。

麦克风使用以下引脚：

- 电源使能：`GPIO38`
- PDM 时钟：`GPIO42`
- PDM 数据：`GPIO41`

你可以通过替换占位符值并将完整 YAML 上传到你的设备来使用此示例。

<Tabs>
<TabItem value="For E1001" label="For E1001" default>

```yaml
esphome:
  name: reterminal-e1001-mic-demo
  friendly_name: reTerminal_E1001_Mic_Demo
  on_boot:
    priority: 600
    then:
      - output.turn_on: mic_power_enable
      - delay: 200ms
      - logger.log: "PDM microphone power enabled"
      - component.update: epaper_display

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

logger:
  hardware_uart: UART0

api:
  encryption:
    key: "REPLACE_WITH_YOUR_API_KEY"

ota:
  - platform: esphome
    password: "REPLACE_WITH_YOUR_OTA_PASSWORD"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
  ap:
    ssid: "E1001-Mic-Demo"
    password: "ChangeMe123"

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

output:
  - platform: gpio
    pin: GPIO38
    id: mic_power_enable

font:
  - file: "gfonts://Inter@700"
    id: font_title
    size: 32
  - file: "gfonts://Inter@700"
    id: font_body
    size: 26

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
    update_interval: 300s
    lambda: |-
      it.printf(400, 40, id(font_title), TextAlign::TOP_CENTER, "PDM Microphone Power");
      it.printf(400, 135, id(font_body), TextAlign::TOP_CENTER, "Mic Power: ON");
      it.printf(400, 190, id(font_body), TextAlign::TOP_CENTER, "CLK GPIO42 / DATA GPIO41");
      it.printf(400, 245, id(font_body), TextAlign::TOP_CENTER, "I2S microphone: optional");
```

</TabItem>
<TabItem value="For E1002" label="For E1002">

```yaml
esphome:
  name: reterminal-e1002-mic-demo
  friendly_name: reTerminal_E1002_Mic_Demo
  on_boot:
    priority: 600
    then:
      - output.turn_on: mic_power_enable
      - delay: 200ms
      - logger.log: "PDM microphone power enabled"
      - component.update: epaper_display

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

logger:
  hardware_uart: UART0

api:
  encryption:
    key: "REPLACE_WITH_YOUR_API_KEY"

ota:
  - platform: esphome
    password: "REPLACE_WITH_YOUR_OTA_PASSWORD"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
  ap:
    ssid: "E1002-Mic-Demo"
    password: "ChangeMe123"

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9

output:
  - platform: gpio
    pin: GPIO38
    id: mic_power_enable

font:
  - file: "gfonts://Inter@700"
    id: font_title
    size: 32
  - file: "gfonts://Inter@700"
    id: font_body
    size: 26

display:
  - platform: epaper_spi
    id: epaper_display
    model: Seeed-reTerminal-E1002
    update_interval: 300s
    lambda: |-
      const auto BLACK = Color(0, 0, 0, 0);
      const auto BLUE = Color(0, 0, 255, 0);

      it.printf(400, 40, id(font_title), BLACK, TextAlign::TOP_CENTER, "PDM Microphone Power");
      it.printf(400, 135, id(font_body), BLUE, TextAlign::TOP_CENTER, "Mic Power: ON");
      it.printf(400, 190, id(font_body), BLACK, TextAlign::TOP_CENTER, "CLK GPIO42 / DATA GPIO41");
      it.printf(400, 245, id(font_body), BLACK, TextAlign::TOP_CENTER, "I2S microphone: optional");
```

</TabItem>
</Tabs>

此配置：

- 通过 `GPIO38` 启用麦克风电源。
- 在电子纸屏幕上显示 PDM 时钟引脚 `GPIO42` 和数据引脚 `GPIO41`。
- 使主演示尽量接近 RTC 和 microSD 演示，以便在添加音频组件之前先验证显示刷新。

如果你想将板载 PDM 麦克风暴露给 ESPHome，请在确认屏幕演示能够正确刷新后，添加以下可选代码块：

```yaml
i2s_audio:
  i2s_lrclk_pin: GPIO42

microphone:
  - platform: i2s_audio
    id: onboard_mic
    adc_type: external
    pdm: true
    i2s_din_pin: GPIO41
```

下图展示了在 reTerminal E1002 上的预期结果。相同的演示在 reTerminal E1001 和 E1002 上都适用。主要区别在于显示输出：E1001 显示单色结果，而 E1002 可以显示彩色结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/254.jpeg" style={{width:700, height:'auto'}}/></div>

:::note
此演示仅验证麦克风电源控制以及在电子纸屏幕上的相关引脚分配。一个完整的 Home Assistant Assist 语音流水线需要上面的可选麦克风代码块以及额外的语音助手配置。将音频直接录制到 SD 卡更适合使用 Arduino 麦克风示例来完成。
:::

## 演示 4：完整的 RTC、SD 卡和麦克风状态仪表板

此演示将上述三个功能组合成一个硬件状态页面：

1. 来自 PCF8563 的 RTC 日期和时间。
2. 来自 `GPIO15` 的 microSD 卡插入状态。
3. PDM 麦克风初始化状态。

为了更好地理解，建议先运行单功能演示，再尝试此组合示例。

<details>
<summary>点击此处查看完整代码</summary>

<Tabs>
<TabItem value="For E1001" label="For E1001" default>

```yaml
esphome:
  name: reterminal-e1001-hardware-status
  friendly_name: reTerminal_E1001_Hardware_Status
  on_boot:
    priority: 600
    then:
      - output.turn_on: bsp_sd_enable
      - output.turn_on: mic_power_enable
      - delay: 200ms
      - pcf8563.read_time:
      - component.update: epaper_display

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

logger:
  hardware_uart: UART0

api:
  encryption:
    key: "REPLACE_WITH_YOUR_API_KEY"

ota:
  - platform: esphome
    password: "REPLACE_WITH_YOUR_OTA_PASSWORD"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
  ap:
    ssid: "E1001-HW-Status"
    password: "ChangeMe123"

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9
  miso_pin: GPIO8

i2c:
  scl: GPIO20
  sda: GPIO19

i2s_audio:
  i2s_lrclk_pin: GPIO42

output:
  - platform: gpio
    pin: GPIO16
    id: bsp_sd_enable

  - platform: gpio
    pin: GPIO38
    id: mic_power_enable

time:
  - platform: pcf8563
    id: rtc_time
    address: 0x51
    update_interval: never

  - platform: homeassistant
    on_time_sync:
      then:
        - pcf8563.write_time:
        - component.update: epaper_display

microphone:
  - platform: i2s_audio
    id: onboard_mic
    adc_type: external
    pdm: true
    i2s_din_pin: GPIO41

binary_sensor:
  - platform: gpio
    pin:
      number: GPIO15
      mode: INPUT_PULLUP
      inverted: true
    id: sd_card_detect
    name: "SD Card Detected"
    on_press:
      then:
        - component.update: epaper_display
    on_release:
      then:
        - component.update: epaper_display

font:
  - file: "gfonts://Inter@700"
    id: font_small
    size: 20
  - file: "gfonts://Inter@700"
    id: font_medium
    size: 32

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
    update_interval: 300s
    lambda: |-
      it.printf(400, 20, id(font_medium), TextAlign::TOP_CENTER,
                "reTerminal E1001 Hardware Status");
      it.line(20, 60, 780, 60);

      auto now = id(rtc_time).now();
      if (now.is_valid()) {
        it.strftime(30, 95, id(font_medium), "%Y-%m-%d %H:%M", now);
        ESP_LOGD("status", "RTC time is valid");
      } else {
        it.printf(30, 95, id(font_medium), "RTC: waiting for sync");
        ESP_LOGW("status", "RTC time is not valid yet");
      }

      if (id(sd_card_detect).state) {
        it.printf(30, 155, id(font_medium), "SD Card: inserted");
      } else {
        it.printf(30, 155, id(font_medium), "SD Card: not detected");
      }

      it.printf(30, 215, id(font_medium), "PDM Mic: initialized");
      it.printf(30, 265, id(font_small), "RTC: I2C address 0x51");
      it.printf(30, 295, id(font_small), "SD: DET GPIO15 / EN GPIO16");
      it.printf(30, 325, id(font_small), "Mic: CLK GPIO42 / DATA GPIO41 / EN GPIO38");
```

</TabItem>
<TabItem value="For E1002" label="适用于 E1002">

```yaml
esphome:
  name: reterminal-e1002-hardware-status
  friendly_name: reTerminal_E1002_Hardware_Status
  on_boot:
    priority: 600
    then:
      - output.turn_on: bsp_sd_enable
      - output.turn_on: mic_power_enable
      - delay: 200ms
      - pcf8563.read_time:
      - component.update: epaper_display

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

logger:
  hardware_uart: UART0

api:
  encryption:
    key: "REPLACE_WITH_YOUR_API_KEY"

ota:
  - platform: esphome
    password: "REPLACE_WITH_YOUR_OTA_PASSWORD"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
  ap:
    ssid: "E1002-HW-Status"
    password: "ChangeMe123"

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9
  miso_pin: GPIO8

i2c:
  scl: GPIO20
  sda: GPIO19

i2s_audio:
  i2s_lrclk_pin: GPIO42

output:
  - platform: gpio
    pin: GPIO16
    id: bsp_sd_enable

  - platform: gpio
    pin: GPIO38
    id: mic_power_enable

time:
  - platform: pcf8563
    id: rtc_time
    address: 0x51
    update_interval: never

  - platform: homeassistant
    on_time_sync:
      then:
        - pcf8563.write_time:
        - component.update: epaper_display

microphone:
  - platform: i2s_audio
    id: onboard_mic
    adc_type: external
    pdm: true
    i2s_din_pin: GPIO41

binary_sensor:
  - platform: gpio
    pin:
      number: GPIO15
      mode: INPUT_PULLUP
      inverted: true
    id: sd_card_detect
    name: "SD Card Detected"
    on_press:
      then:
        - component.update: epaper_display
    on_release:
      then:
        - component.update: epaper_display

font:
  - file: "gfonts://Inter@700"
    id: font_small
    size: 20
  - file: "gfonts://Inter@700"
    id: font_medium
    size: 32

display:
  - platform: epaper_spi
    id: epaper_display
    model: Seeed-reTerminal-E1002
    update_interval: 300s
    lambda: |-
      const auto BLACK = Color(0, 0, 0, 0);
      const auto BLUE = Color(0, 0, 255, 0);
      const auto GREEN = Color(0, 255, 0, 0);
      const auto RED = Color(255, 0, 0, 0);

      it.printf(400, 20, id(font_medium), BLACK, TextAlign::TOP_CENTER,
                "reTerminal E1002 Hardware Status");
      it.line(20, 60, 780, 60, BLACK);

      auto now = id(rtc_time).now();
      if (now.is_valid()) {
        it.strftime(30, 95, id(font_medium), BLUE, "%Y-%m-%d %H:%M", now);
        ESP_LOGD("status", "RTC time is valid");
      } else {
        it.printf(30, 95, id(font_medium), RED, "RTC: waiting for sync");
        ESP_LOGW("status", "RTC time is not valid yet");
      }

      if (id(sd_card_detect).state) {
        it.printf(30, 155, id(font_medium), GREEN, "SD Card: inserted");
      } else {
        it.printf(30, 155, id(font_medium), RED, "SD Card: not detected");
      }

      it.printf(30, 215, id(font_medium), BLUE, "PDM Mic: initialized");
      it.printf(30, 265, id(font_small), BLACK, "RTC: I2C address 0x51");
      it.printf(30, 295, id(font_small), BLACK, "SD: DET GPIO15 / EN GPIO16");
      it.printf(30, 325, id(font_small), BLACK, "Mic: CLK GPIO42 / DATA GPIO41 / EN GPIO38");
```

</TabItem>
</Tabs>

</details>

当固件运行时，屏幕会在一个页面上显示 RTC 时间、SD 卡状态和麦克风初始化状态。

下图展示了在 reTerminal E1002 上的预期结果。相同的演示在 reTerminal E1001 和 E1002 上都可以运行。主要区别在于显示输出：E1001 显示的是单色结果，而 E1002 可以显示彩色结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/255.jpeg" style={{width:700, height:'auto'}}/></div>

## 常见问题

### 问题 1：为什么屏幕显示 “RTC: waiting for sync”？

设备尚未接收到有效时间。请确认 Wi-Fi 已连接、ESPHome API 已连接到 Home Assistant，并且 Home Assistant 的系统时间是正确的。在 Home Assistant 完成时间同步后，ESPHome 会将时间写回到 PCF8563 RTC。

### 问题 2：为什么断电后 RTC 时间会消失？

当主电池和 USB 供电被移除时，PCF8563 需要一颗 CR1220 纽扣电池来保持计时。请安装或更换纽扣电池，重新启动设备，并让 Home Assistant 同步一次时间。

### 问题 3：为什么 Home Assistant 总是显示 SD 卡未检测到？

请检查以下三点：

- 确认卡已完全插入卡槽。
- 确保在启动过程中 `GPIO16` 上的 `bsp_sd_enable` 已打开。
- 保持 `GPIO15` 配置为 `INPUT_PULLUP` 且 `inverted: true`，因为检测信号为低电平有效。

### 问题 4：ESPHome 能否在 microSD 卡上读写文件？

本页面只使用 ESPHome 打开 SD 供电轨并读取卡检测引脚。诸如列出文件、读取图像、创建文件夹或保存音频文件等通用文件操作，更适合使用 Arduino SD 卡示例来完成。

### 问题 5：ESPHome 能否将麦克风音频直接录制到 SD 卡？

仅凭本页面展示的简单 YAML 无法实现。麦克风示例只初始化了板载 PDM 麦克风硬件。如果你的目标是将 WAV 文件录制到 SD 卡，请改用 Arduino 的麦克风和 SD 示例。

### 问题 6：为什么通过 USB 没有串口日志？

reTerminal E 系列在 UART0 上使用 CH340K USB 转 UART 转换芯片。请在你的 YAML 中保留以下日志设置：

```yaml
logger:
  hardware_uart: UART0
```

### 问题 3：为什么在 RTC 或麦克风示例中屏幕不刷新？

如果插入了 microSD 卡，请先取出卡并重启设备。除了 microSD 卡检测示例外，本页面中的其他示例都不需要插入卡。保持插卡可能会影响共享的 SPI 总线，从而导致电子纸屏幕无法正常刷新。

取出卡后，请重新上传或重启 RTC 或麦克风示例。电子纸屏幕应能正常刷新。

## 资源

- **[Wiki]** [ESPHome 使用手册：显示基础](/cn/reterminal_e10xx_with_esphome)
- **[Wiki]** [ESPHome 使用手册：按键、蜂鸣器、LED、电池与低功耗](/cn/reterminal_e10xx_with_esphome_advanced)
- **[Wiki]** [与 ESPHome 协同工作](/cn/epaper_work_with_esphome)
- **[Wiki]** [Arduino 使用手册：板载外设](/cn/reterminal_e10xx_with_arduino_peripherals)
- **[Wiki]** [Arduino 使用手册：RTC、低功耗、音频与触摸](/cn/reterminal_e10xx_with_arduino_peripherals_2)
- **[Documentation]** [ESPHome Time 组件](https://esphome.io/components/time/)
- **[Documentation]** [ESPHome I2S Audio 组件](https://esphome.io/components/i2s_audio.html)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
