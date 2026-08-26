---
description: reTerminal E1001 / E1002 / E1003 / E1004 向け ESPHome cookbook - PCF8563 RTC の時刻同期、microSD カード検出、オンボード PDM マイクの初期化、およびハードウェアステータスダッシュボードを個別デモとして紹介します。
title: 'ESPHome Cookbook: RTC、SD カード & マイク (reTerminal E シリーズ)'
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/27.webp
slug: /reterminal_e10xx_with_esphome_rtc_sd_microphone
sidebar_position: 5
sidebar_label: ESPHome - RTC, SD & Microphone
last_update:
  date: 08/05/2026
  author: Citric
createdAt: '2026-06-12'
updatedAt: '2026-08-05'
url: https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_esphome_rtc_sd_microphone/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ESPHome Cookbook: RTC、SD カード & マイク (reTerminal E シリーズ)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/251.jpeg" style={{width:1000, height:'auto'}}/></div><br />

:::tip 前提条件
このページでは、すでに [reTerminal E シリーズ向け ESPHome ディスプレイ cookbook](/ja/reterminal_e10xx_with_esphome) を完了し、デバイスが Home Assistant 上でオンラインになっていることを前提とします。ボタン、ブザー、LED、バッテリー監視、SHT4x、静電容量式タッチ（E1003）、およびディープスリープについては、[ESPHome Cookbook: ボタン、ブザー、LED、バッテリー、タッチ & 低消費電力](/ja/reterminal_e10xx_with_esphome_advanced) を参照してください。
:::

:::tip ブラウザで ESPHome YAML を生成またはデモを書き込み
すべてのピンを手作業で組み立てずに、すぐに使える ESPHome 設定が欲しい場合は、**[reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)** を開き、**ESPHome** カードを選択し、デバイス（E1001 / E1002 / E1003 / E1004）を選んでから、必要なオンボード機能 ― ディスプレイ、ボタン、バッテリー、センサー、RTC、SD カード、マイク、タッチ、ディープスリープなど ― にチェックを入れてください。Hub は一致する ESPHome YAML を生成するので、それをコピーするかダウンロードして ESPHome ダッシュボードに取り込めます。

同じ Hub から、ブラウザ（デスクトップ版 Chrome または Edge）経由でデモファームウェアを書き込むこともできます。共通の ESPHome ワークフローについては **[Work with ESPHome](/ja/epaper_work_with_esphome)** を参照してください。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Firmware Hub 🖱️</font></span></strong>
    </a>
</div><br />
:::

この cookbook では、reTerminal E シリーズ向け ESPHome の例をさらに発展させ、ディスプレイおよび I/O cookbooks では扱っていない 3 つのオンボードハードウェアブロックを取り上げます：

- **PCF8563 RTC** - オンボード RTC からハードウェア時刻を読み取り、Home Assistant から同期します。
- **microSD カードスロット** - SD 電源レールを有効にし、カードが挿入されているかどうかを報告します。
- **PDM マイク** - オンボードマイクの電源レールを有効にし、ESPHome 経由で PDM マイクを初期化します。

以下の各セクションは、小さな単体 ESPHome デモとして構成されています。完全な YAML 例を 1 つコピーし、API と OTA のプレースホルダーを置き換えて、そのまま ESPHome からアップロードできます。

:::note 対応モデル
このページのコピーしてすぐ使える例は **reTerminal E1001 / E1002 / E1003 / E1004** を対象としています。E1003 と E1004 には **ESPHome 2026.7.0 以降** が必要です。オンボードマイクの例は PDM マイクハードウェアを搭載したモデル（**E1001 / E1002 / E1003**）に適用されます。**reTerminal E1004 にはマイクは搭載されていません**。
:::

## ハードウェア機能

この cookbook のデモで使用するピンは次のとおりです。

<div class="table-center">
  <table align="center">
    <tr>
      <th>機能</th>
      <th>ESPHome コンポーネント</th>
      <th>ピン / アドレス</th>
    </tr>
    <tr>
      <td>PCF8563 RTC</td>
      <td><code>time.pcf8563</code></td>
      <td>I2C アドレス <code>0x51</code>、SDA <code>GPIO19</code>、SCL <code>GPIO20</code></td>
    </tr>
    <tr>
      <td>microSD カード検出</td>
      <td><code>binary_sensor.gpio</code></td>
      <td><code>GPIO15</code>、アクティブ Low</td>
    </tr>
    <tr>
      <td>microSD 電源イネーブル</td>
      <td><code>output.gpio</code></td>
      <td><code>GPIO16</code>（E1001 / E1002 / E1004）、<code>GPIO39</code>（E1003）</td>
    </tr>
    <tr>
      <td>PDM マイク電源イネーブル</td>
      <td><code>output.gpio</code></td>
      <td><code>GPIO38</code></td>
    </tr>
    <tr>
      <td>PDM マイククロック</td>
      <td><code>i2s_audio</code></td>
      <td><code>GPIO42</code></td>
    </tr>
    <tr>
      <td>PDM マイクデータ</td>
      <td><code>microphone.i2s_audio</code></td>
      <td><code>GPIO41</code></td>
    </tr>
    <tr>
      <td>共有 SPI バス</td>
      <td><code>spi</code></td>
      <td>CLK <code>GPIO7</code>、MOSI <code>GPIO9</code>、MISO <code>GPIO8</code></td>
    </tr>
  </table>
</div>

:::caution 秘密情報を公開しないでください
これらの例では、`REPLACE_WITH_YOUR_API_KEY` や `REPLACE_WITH_YOUR_OTA_PASSWORD` などのプレースホルダーを使用しています。実際の API 暗号化キー、OTA パスワード、Wi-Fi パスワード、Home Assistant トークンを公開しないでください。
:::

## RTC 時刻同期

このデモでは、オンボードの **PCF8563 RTC** から時刻を読み取り、ePaper 画面に表示します。Home Assistant がデバイスに時刻を同期すると、ESPHome はその時刻をハードウェア RTC に書き戻します。

RTC は共有 I2C バスを使用します：

- SDA: `GPIO19`
- SCL: `GPIO20`
- RTC アドレス: `0x51`

この例は、プレースホルダー値を置き換え、完全な YAML をデバイスにアップロードすることで利用できます。

<Tabs>
<TabItem value="For E1001" label="E1001 向け" default>

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
<TabItem value="For E1002" label="E1002 向け">

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

<TabItem value="For E1003" label="E1003 向け">

:::tip
ESPHome のバージョンを **2026.7.0** 以降に更新してください。
:::

```yaml
esphome:
  name: reterminal-e1003-rtc-demo
  friendly_name: reTerminal_E1003_RTC_Demo
  on_boot:
    priority: 600
    then:
      - pcf8563.read_time:

esp32:
  board: seeed_xiao_esp32s3
  framework:
    type: esp-idf

psram:
  mode: octal

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
    ssid: "E1003-RTC-Demo"
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
  - platform: it8951
    id: epaper_display
    spi_id: epaper_spi_bus
    model: seeed-reterminal-e1003
    update_interval: 300s
    full_update_every: 30
    grayscale: true
    dithering: true
    update_mode: GC16
    transform:
      mirror_x: true
      mirror_y: false
    lambda: |-
      it.printf(400, 40, id(font_title), Color::BLACK, TextAlign::TOP_CENTER, "RTC Time Sync Demo");
      auto now = id(rtc_time).now();
      if (now.is_valid()) {
        it.strftime(400, 135, id(font_title), Color::BLACK, TextAlign::TOP_CENTER, "%Y-%m-%d", now);
        it.strftime(400, 190, id(font_title), Color::BLACK, TextAlign::TOP_CENTER, "%H:%M:%S", now);
        ESP_LOGD("rtc_demo", "RTC time is valid");
      } else {
        it.printf(400, 150, id(font_body), Color::BLACK, TextAlign::TOP_CENTER, "RTC: waiting for sync");
        ESP_LOGW("rtc_demo", "RTC time is not valid yet");
      }
```

</TabItem>

<TabItem value="For E1004" label="For E1004">

:::tip
ESPHome のバージョンを **2026.7.0** 以降に更新してください。
:::

```yaml
esphome:
  name: reterminal-e1004-rtc-demo
  friendly_name: reTerminal_E1004_RTC_Demo
  on_boot:
    priority: 600
    then:
      - pcf8563.read_time:

esp32:
  board: seeed_xiao_esp32s3
  framework:
    type: esp-idf

psram:
  mode: octal

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
    ssid: "E1004-RTC-Demo"
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
    model: seeed-reterminal-e1004
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

この設定では次のことを行います：

- 起動時に一度 PCF8563 RTC を読み取ります。
- デバイスが接続された後は、Home Assistant の時刻を正として使用します。
- Home Assistant の時刻をハードウェア RTC に書き戻します。
- 現在の日付と時刻を ePaper 画面に表示します。

次の画像は reTerminal E1002 上での期待される結果を示しています。同じデモパターンは reTerminal E シリーズ全体で動作します。上の対応するデバイスタブを選択してください。モノクロ／グレースケールパネル（E1001、E1003）とカラー パネル（E1002、E1004）の違いは、主にディスプレイプラットフォームとカラー描画 API です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/252.jpeg" style={{width:700, height:'auto'}}/></div>

:::tip
完全に電源を切った後に RTC の時刻が正しく保持されない場合は、RTC バックアップホルダー用の CR1220 コイン電池を取り付けるか交換してください。
:::

## MicroSD カード検出

このデモは microSD カードが挿入されているかどうかを報告します。また、`GPIO16`（E1001 / E1002 / E1004）または `GPIO39`（E1003）を通じて SD カードの電源レールをオンにします。

カード検出ピンはアクティブ Low なので、バイナリセンサーでは `inverted: true` を使用します。

プレースホルダー値を置き換え、完成した YAML をデバイスにアップロードすることで、このサンプルを使用できます。

<Tabs>
<TabItem value="For E1001" label="For E1001" default>

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
  id: epaper_spi_bus
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
<TabItem value="For E1002" label="For E1002">

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
  id: epaper_spi_bus
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

<TabItem value="For E1003" label="For E1003">

:::tip
ESPHome のバージョンを **2026.7.0** 以降に更新してください。E1003 は `GPIO39` 上の SD 電源イネーブルを使用します。
:::

```yaml
esphome:
  name: reterminal-e1003-sd-demo
  friendly_name: reTerminal_E1003_SD_Demo
  on_boot:
    priority: 600
    then:
      - output.turn_on: bsp_sd_enable
      - delay: 200ms
      - component.update: epaper_display

esp32:
  board: seeed_xiao_esp32s3
  framework:
    type: esp-idf

psram:
  mode: octal

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
    ssid: "E1003-SD-Demo"
    password: "ChangeMe123"

captive_portal:

spi:
  id: epaper_spi_bus
  clk_pin: GPIO7
  mosi_pin: GPIO9
  miso_pin: GPIO8

output:
  - platform: gpio
    pin: GPIO39
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
  - platform: it8951
    id: epaper_display
    spi_id: epaper_spi_bus
    model: seeed-reterminal-e1003
    update_interval: 300s
    full_update_every: 30
    grayscale: true
    dithering: true
    update_mode: GC16
    transform:
      mirror_x: true
      mirror_y: false
    lambda: |-
      it.printf(400, 40, id(font_title), Color::BLACK, TextAlign::TOP_CENTER, "microSD Card Detection");
      if (id(sd_card_detect).state) {
        it.printf(400, 160, id(font_body), Color::BLACK, TextAlign::TOP_CENTER, "SD Card: inserted");
      } else {
        it.printf(400, 160, id(font_body), Color::BLACK, TextAlign::TOP_CENTER, "SD Card: not detected");
      }
      it.printf(400, 230, id(font_body), Color::BLACK, TextAlign::TOP_CENTER, "Detect pin: GPIO15");
```

</TabItem>

<TabItem value="For E1004" label="For E1004">

:::tip
ESPHome のバージョンを **2026.7.0** 以降に更新してください。
:::

```yaml
esphome:
  name: reterminal-e1004-sd-demo
  friendly_name: reTerminal_E1004_SD_Demo
  on_boot:
    priority: 600
    then:
      - output.turn_on: bsp_sd_enable
      - delay: 200ms
      - component.update: epaper_display

esp32:
  board: seeed_xiao_esp32s3
  framework:
    type: esp-idf

psram:
  mode: octal

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
    ssid: "E1004-SD-Demo"
    password: "ChangeMe123"

captive_portal:

spi:
  id: epaper_spi_bus
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
    model: seeed-reterminal-e1004
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

この構成では、次のことを行います：

- `GPIO16`（E1001 / E1002 / E1004）または `GPIO39`（E1003）を通してSDカードの電源を有効にします。
- `GPIO15` からカード検出信号を読み取ります。
- ePaperスクリーンにカードの状態を表示します。
- `SD Card Detected` をバイナリセンサーとして Home Assistant に公開します。

次の画像は、reTerminal E1002 上で期待される結果を示しています。同じデモパターンは reTerminal E シリーズ全体で動作します。上の対応するデバイスタブを選択してください。モノクロ／グレースケールパネル（E1001、E1003）とカラーパネル（E1002、E1004）の違いは、主にディスプレイプラットフォームとカラー描画APIです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/253.jpeg" style={{width:700, height:'auto'}}/></div>

:::note ESPHome が microSD カードをどのように使用するか
この ESPHome cookbook では、microSD カードはデバイスステータス信号として使用されます。デモではカードが挿入されているかどうかをチェックし、その結果を画面に表示し、同じ状態を Home Assistant に公開します。

これは、ESPHome が主にセンサー、スイッチ、ディスプレイ、および Home Assistant オートメーション向けに設計されているためです。通常、デバイス上のローカルファイルマネージャとしては使用されません。ファイルを開く、フォルダを作成する、ログを書き込む、WAV オーディオを SD カードに直接記録するといったタスクは、ファームウェアが SD カードのファイルシステムを直接制御できる Arduino で処理する方が適しています。

一般的な ESPHome セットアップでは、SD カードのステータスは次の用途に使用できます：
- ストレージが物理的に利用可能かどうかを表示する。
- カードの挿入または取り外し時に Home Assistant のオートメーションをトリガーする。
- RTC、バッテリー、マイクのステータスと合わせてハードウェアヘルス情報を表示する。

目的が SD カードファイルの直接読み書きである場合は、代わりに Arduino SD カード cookbook を参照してください。
:::

## PDM マイク電源チェック

このデモでは、オンボード PDM マイクの電源レールを有効にし、マイクのピン割り当てを ePaper スクリーンに表示します。YAML を最小限に保つことで、まずディスプレイの更新を確認し、その後、Home Assistant Voice Assistant でマイクを使用したい場合に、オプションの ESPHome I2S マイク設定を追加できるようにしています。

マイクは次のピンを使用します：

- 電源イネーブル: `GPIO38`
- PDM クロック: `GPIO42`
- PDM データ: `GPIO41`

プレースホルダー値を置き換え、完成した YAML をデバイスにアップロードすることで、このサンプルを使用できます。

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

<TabItem value="For E1003" label="For E1003">

:::tip
ESPHome のバージョンを **2026.7.0** 以降に更新してください。reTerminal E1003 にはオンボード PDM マイクが含まれています。
:::

```yaml
esphome:
  name: reterminal-e1003-mic-demo
  friendly_name: reTerminal_E1003_Mic_Demo
  on_boot:
    priority: 600
    then:
      - output.turn_on: mic_power_enable
      - delay: 200ms
      - logger.log: "PDM microphone power enabled"
      - component.update: epaper_display

esp32:
  board: seeed_xiao_esp32s3
  framework:
    type: esp-idf

psram:
  mode: octal

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
    ssid: "E1003-Mic-Demo"
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
  - platform: it8951
    id: epaper_display
    spi_id: epaper_spi_bus
    model: seeed-reterminal-e1003
    update_interval: 300s
    full_update_every: 30
    grayscale: true
    dithering: true
    update_mode: GC16
    transform:
      mirror_x: true
      mirror_y: false
    lambda: |-
      it.printf(400, 40, id(font_title), Color::BLACK, TextAlign::TOP_CENTER, "PDM Microphone Power");
      it.printf(400, 135, id(font_body), Color::BLACK, TextAlign::TOP_CENTER, "Mic Power: ON");
      it.printf(400, 190, id(font_body), Color::BLACK, TextAlign::TOP_CENTER, "CLK GPIO42 / DATA GPIO41");
      it.printf(400, 245, id(font_body), Color::BLACK, TextAlign::TOP_CENTER, "I2S microphone: optional");
```

</TabItem>

<TabItem value="For E1004" label="For E1004">

:::note
**reTerminal E1004 にはオンボード PDM マイクが含まれていません。** E1004 では、このページの RTC および microSD デモを使用するか、このセクションをスキップしてください。
:::

</TabItem>
</Tabs>

この構成では、次のことを行います：

- `GPIO38` を通してマイクの電源を有効にします。
- ePaper スクリーンに PDM クロックピン `GPIO42` とデータピン `GPIO41` を表示します。
- メインのデモを RTC と microSD のデモに近い構成に保ち、オーディオコンポーネントを追加する前にディスプレイのリフレッシュを確認できるようにします。

オンボード PDM マイクを ESPHome に公開したい場合は、画面デモが正しくリフレッシュされることを確認した後に、次のオプションブロックを追加してください：

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

次の画像は、reTerminal E1002 上で期待される結果を示しています。同じデモパターンは reTerminal E シリーズ全体で動作します。上の対応するデバイスタブを選択してください。モノクロ／グレースケールパネル（E1001、E1003）とカラーパネル（E1002、E1004）の違いは、主にディスプレイプラットフォームとカラー描画APIです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/254.jpeg" style={{width:700, height:'auto'}}/></div>

:::note
このデモは、マイクの電源制御と関連するピン割り当てを ePaper スクリーン上で検証するだけです。完全な Home Assistant Assist 音声パイプラインには、上記のオプションのマイクブロックと、追加のボイスアシスタント設定が必要です。オーディオを SD カードに直接録音する場合は、Arduino のマイクサンプルで処理する方が適しています。
:::

## デモ4：RTC、SDカード、マイクステータスの完全ダッシュボード

このデモでは、上記3つの機能を1つのハードウェアステータスページにまとめます：

1. PCF8563 からの RTC 日付と時刻。
2. `GPIO15` からの microSD カード挿入ステータス。
3. PDM マイクの初期化ステータス。

よりよく理解するために、この複合サンプルを試す前に、単一機能のデモを先に実行してください。

<details>
<summary>完全なコードを見るにはここをクリック</summary>

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
  id: epaper_spi_bus
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
<TabItem value="For E1002" label="E1002 向け">

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
  id: epaper_spi_bus
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

<TabItem value="For E1003" label="E1003 向け">

:::tip
ESPHome のバージョンを **2026.7.0** 以降に更新してください。
:::

```yaml
esphome:
  name: reterminal-e1003-hardware-status
  friendly_name: reTerminal_E1003_Hardware_Status
  on_boot:
    priority: 600
    then:
      - output.turn_on: bsp_sd_enable
      - output.turn_on: mic_power_enable
      - delay: 200ms
      - pcf8563.read_time:
      - component.update: epaper_display

esp32:
  board: seeed_xiao_esp32s3
  framework:
    type: esp-idf

psram:
  mode: octal

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
    ssid: "E1003-HW-Status"
    password: "ChangeMe123"

captive_portal:

spi:
  id: epaper_spi_bus
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
    pin: GPIO39
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
  - platform: it8951
    id: epaper_display
    spi_id: epaper_spi_bus
    model: seeed-reterminal-e1003
    update_interval: 300s
    full_update_every: 30
    grayscale: true
    dithering: true
    update_mode: GC16
    transform:
      mirror_x: true
      mirror_y: false
    lambda: |-
      it.printf(400, 20, id(font_medium), Color::BLACK, TextAlign::TOP_CENTER,
                "reTerminal E1003 Hardware Status");
      it.line(20, 60, 780, 60, Color::BLACK);

      auto now = id(rtc_time).now();
      if (now.is_valid()) {
        it.strftime(30, 95, id(font_medium), Color::BLACK, "%Y-%m-%d %H:%M", now);
        ESP_LOGD("status", "RTC time is valid");
      } else {
        it.printf(30, 95, id(font_medium), Color::BLACK, "RTC: waiting for sync");
        ESP_LOGW("status", "RTC time is not valid yet");
      }

      if (id(sd_card_detect).state) {
        it.printf(30, 155, id(font_medium), Color::BLACK, "SD Card: inserted");
      } else {
        it.printf(30, 155, id(font_medium), Color::BLACK, "SD Card: not detected");
      }

      it.printf(30, 215, id(font_medium), Color::BLACK, "PDM Mic: initialized");
      it.printf(30, 265, id(font_small), Color::BLACK, "RTC: I2C address 0x51");
      it.printf(30, 295, id(font_small), Color::BLACK, "SD: DET GPIO15 / EN GPIO39");
      it.printf(30, 325, id(font_small), Color::BLACK, "Mic: CLK GPIO42 / DATA GPIO41 / EN GPIO38");
```

</TabItem>

<TabItem value="For E1004" label="E1004 向け">

:::tip
ESPHome のバージョンを **2026.7.0** 以降に更新してください。reTerminal E1004 にはオンボードの PDM マイクロフォンが含まれていないため、このステータスデモでは RTC と microSD のみを扱います。
:::

```yaml
esphome:
  name: reterminal-e1004-hardware-status
  friendly_name: reTerminal_E1004_Hardware_Status
  on_boot:
    priority: 600
    then:
      - output.turn_on: bsp_sd_enable
      - delay: 200ms
      - pcf8563.read_time:
      - component.update: epaper_display

esp32:
  board: seeed_xiao_esp32s3
  framework:
    type: esp-idf

psram:
  mode: octal

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
    ssid: "E1004-HW-Status"
    password: "ChangeMe123"

captive_portal:

spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9
  miso_pin: GPIO8

i2c:
  scl: GPIO20
  sda: GPIO19

output:
  - platform: gpio
    pin: GPIO16
    id: bsp_sd_enable

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
    model: seeed-reterminal-e1004
    update_interval: 300s
    lambda: |-
      const auto BLACK = Color(0, 0, 0, 0);
      const auto BLUE = Color(0, 0, 255, 0);
      const auto GREEN = Color(0, 255, 0, 0);
      const auto RED = Color(255, 0, 0, 0);

      it.printf(400, 20, id(font_medium), BLACK, TextAlign::TOP_CENTER,
                "reTerminal E1004 Hardware Status");
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

      it.printf(30, 215, id(font_medium), BLUE, "PDM Mic: not available on E1004");
      it.printf(30, 265, id(font_small), BLACK, "RTC: I2C address 0x51");
      it.printf(30, 295, id(font_small), BLACK, "SD: DET GPIO15 / EN GPIO16");
```

</TabItem>
</Tabs>

</details>

ファームウェアが動作しているとき、画面には 1 ページに RTC 時刻と SD カードの状態が表示されます。オンボードの PDM マイクロフォンを搭載したモデル（E1001 / E1002 / E1003）ではマイクロフォンの初期化ステータスも表示され、E1004 ではマイクロフォンが利用できないことが表示されます。

次の画像は reTerminal E1002 での期待される結果を示しています。同じデモパターンは reTerminal E シリーズ全体で動作します。上部から対応するデバイスタブを選択してください。モノクロ／グレースケールパネル（E1001、E1003）とカラーパネル（E1002、E1004）の違いは、主にディスプレイプラットフォームとカラー描画 API にあります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/250.jpeg" style={{width:700, height:'auto'}}/></div>

## FAQ

### Q1: なぜ画面に「RTC: waiting for sync」と表示されるのですか？

デバイスがまだ有効な時刻を受信していません。Wi-Fi が接続されていること、ESPHome API が Home Assistant に接続されていること、そして Home Assistant のシステム時刻が正しいことを確認してください。Home Assistant が時刻を同期すると、ESPHome はその時刻を PCF8563 RTC に書き戻します。

### Q2: なぜ USB 経由でシリアルログが出力されないのですか？

reTerminal E シリーズは UART0 上で CH340K USB-UART ブリッジを使用しています。YAML では次の logger 設定を維持してください：

```yaml
logger:
  hardware_uart: UART0
```

### Q3: なぜ RTC またはマイクデモで画面が更新されないのですか？

microSD カードが挿入されている場合は、まずカードを取り外してからデバイスを再起動してください。microSD カード検出デモを除き、このページの他のデモではカードを挿入しておく必要はありません。カードを挿入したままにしておくと、共有 SPI バスに影響し、ePaper 画面が正しく更新されない可能性があります。

カードを取り外した後、RTC またはマイクデモを再度アップロードまたは再起動してください。ePaper 画面は正常に更新されるはずです。

## リソース

- **[Tool]** [reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/) — デバイス機能を選択して ESPHome YAML を生成したり、ブラウザからデモを書き込んだりできます
- **[Wiki]** [ESPHome Cookbook：ディスプレイの基本](/ja/reterminal_e10xx_with_esphome)
- **[Wiki]** [ESPHome Cookbook：ボタン、ブザー、LED、バッテリー、タッチ & 低消費電力](/ja/reterminal_e10xx_with_esphome_advanced)
- **[Wiki]** [ESPHome と連携する](/ja/epaper_work_with_esphome)
- **[Wiki]** [Arduino Cookbook：オンボードペリフェラル](/ja/reterminal_e10xx_with_arduino_peripherals)
- **[Wiki]** [Arduino Cookbook：RTC、低消費電力、オーディオ & タッチ](/ja/reterminal_e10xx_with_arduino_peripherals_2)
- **[Documentation]** [ESPHome Time コンポーネント](https://esphome.io/components/time/)
- **[Documentation]** [ESPHome I2S Audio コンポーネント](https://esphome.io/components/i2s_audio.html)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただけるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
