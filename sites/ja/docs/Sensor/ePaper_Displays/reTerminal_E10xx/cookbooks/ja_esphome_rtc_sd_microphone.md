---
description: reTerminal E1001 / E1002 向け ESPHome クックブックです。PCF8563 RTC の時刻同期、microSD カード検出、オンボード PDM マイクの初期化、およびそれらを組み合わせたハードウェアステータスダッシュボードのスタンドアロンデモを紹介します。
title: 'ESPHome クックブック: RTC、SD カード & マイク (reTerminal E シリーズ)'
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/27.webp
slug: /reterminal_e10xx_with_esphome_rtc_sd_microphone
sidebar_position: 5
sidebar_label: 'ESPHome - RTC, SD & Microphone'
last_update:
  date: 06/12/2026
  author: Citric
createdAt: '2026-06-12'
updatedAt: '2026-06-12'
url: https://wiki.seeedstudio.com/ja/reterminal_e10xx_with_esphome_rtc_sd_microphone/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ESPHome クックブック: RTC、SD カード & マイク (reTerminal E シリーズ)

:::tip 前提条件
このページでは、すでに [reTerminal E シリーズ向け ESPHome ディスプレイクックブック](/ja/reterminal_e10xx_with_esphome) を完了し、デバイスが Home Assistant 上でオンラインになっていることを前提とします。ボタン、ブザー、LED、バッテリー監視、SHT4x、およびディープスリープについては、[ESPHome クックブック: ボタン、ブザー、LED、バッテリー & 省電力](/ja/reterminal_e10xx_with_esphome_advanced) を参照してください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/27.jpg" style={{width:700, height:'auto'}}/></div><br />

このクックブックでは、reTerminal E シリーズ向け ESPHome サンプルの続きとして、ディスプレイおよび I/O クックブックでは扱っていない 3 つのオンボードハードウェアブロックを取り上げます：

- **PCF8563 RTC** - オンボード RTC からハードウェア時刻を読み取り、Home Assistant から同期します。
- **microSD カードスロット** - SD 電源レールを有効にし、カードが挿入されているかどうかを報告します。
- **PDM マイク** - オンボードマイクの電源レールを有効にし、ESPHome 経由で PDM マイクを初期化します。

以下の各セクションは、小さなスタンドアロン ESPHome デモとして構成されています。完全な YAML サンプルを 1 つコピーし、API と OTA のプレースホルダを置き換えて、ESPHome からそのままアップロードできます。

:::note 対応モデル
このページのコピーしてすぐ使えるサンプルは、テスト済みの ESPHome ハードウェアサンプルに合わせて **reTerminal E1001** と **reTerminal E1002** 向けに記述されています。オンボードマイクのサンプルは PDM マイクハードウェアを搭載したモデルに適用されますが、reTerminal E1004 にはマイクが搭載されていません。
:::

## ハードウェア機能

このクックブックのデモで使用するピンは次のとおりです。

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
      <td><code>GPIO16</code></td>
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
サンプルでは、`REPLACE_WITH_YOUR_API_KEY` や `REPLACE_WITH_YOUR_OTA_PASSWORD` などのプレースホルダを使用しています。実際の API 暗号化キー、OTA パスワード、Wi-Fi パスワード、Home Assistant トークンを公開しないでください。
:::

## RTC 時刻同期

このデモでは、オンボードの **PCF8563 RTC** から時刻を読み取り、ePaper 画面に表示します。Home Assistant がデバイスに時刻を同期すると、ESPHome はその時刻をハードウェア RTC に書き戻します。

RTC は共有 I2C バスを使用します：

- SDA: `GPIO19`
- SCL: `GPIO20`
- RTC アドレス: `0x51`

このサンプルは、プレースホルダ値を置き換え、完全な YAML をデバイスにアップロードすることで使用できます。

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
</Tabs>

この構成では、次のことを行います：

- 起動時に一度 PCF8563 RTC から時刻を読み取ります。
- デバイスが接続された後は、Home Assistant の時刻を信頼できる基準として使用します。
- Home Assistant の時刻をハードウェア RTC に書き戻します。
- 現在の日付と時刻を ePaper 画面に表示します。

次の画像は、reTerminal E1002 上で期待される結果を示しています。同じデモは reTerminal E1001 と E1002 の両方で動作します。主な違いはディスプレイ出力で、E1001 はモノクロ表示、E1002 はカラー表示が可能です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/252.jpeg" style={{width:700, height:'auto'}}/></div>

:::tip
完全に電源を切って再投入した後に RTC の時刻が正しく保持されない場合は、RTC バックアップ用ホルダの CR1220 コイン電池を取り付けるか交換してください。
:::

## MicroSD カード検出

このデモでは、microSD カードが挿入されているかどうかを報告します。また、`GPIO16` を通じて SD カードの電源レールをオンにします。

カード検出ピンはアクティブ Low なので、binary sensor では `inverted: true` を使用します。

このサンプルは、プレースホルダ値を置き換え、完全な YAML をデバイスにアップロードすることで使用できます。

<Tabs>
<TabItem value="For E1001" label="E1001 向け" default>

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
<TabItem value="For E1002" label="E1002 向け">

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

この構成では、次のことを行います：

- `GPIO16` を通して SD カードの電源を有効にします。
- `GPIO15` からカード検出信号を読み取ります。
- ePaper 画面にカードの状態を表示します。
- Home Assistant に `SD Card Detected` をバイナリセンサーとして公開します。

次の画像は、reTerminal E1002 上で期待される結果を示しています。同じデモは reTerminal E1001 と E1002 の両方で動作します。主な違いはディスプレイ出力で、E1001 はモノクロ表示、E1002 はカラー表示が可能です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/253.jpeg" style={{width:700, height:'auto'}}/></div>

:::note ESPHome が microSD カードをどのように利用するか
この ESPHome クックブックでは、microSD カードはデバイスのステータス信号として使用されます。デモではカードが挿入されているかどうかを確認し、その結果を画面に表示し、同じ状態を Home Assistant に公開します。

これは、ESPHome が主にセンサー、スイッチ、ディスプレイ、および Home Assistant の自動化向けに設計されており、通常はデバイス上のローカルファイルマネージャとして使用されないためです。ファイルを開く、フォルダを作成する、ログを書き込む、WAV オーディオを SD カードに直接記録するといったタスクは、ファームウェアが SD カードのファイルシステムを直接制御できる Arduino で行う方が適しています。

一般的な ESPHome セットアップでは、SD カードのステータスは次の用途に使用できます：
- ストレージが物理的に利用可能かどうかを表示する
- カードの挿入・取り外し時に Home Assistant のオートメーションをトリガーする
- RTC、バッテリー、マイクの状態と合わせてハードウェアヘルス情報を表示する

目的が SD カードへの直接的なファイルの読み書きである場合は、代わりに Arduino SD カードクックブックを参照してください。
:::

## PDM マイク電源チェック

このデモでは、オンボード PDM マイクの電源レールを有効にし、マイクのピン割り当てを ePaper 画面に表示します。YAML を最小限に保つことで、まずディスプレイの更新を確認し、その後、Home Assistant Voice Assistant でマイクを使用したい場合に、オプションの ESPHome I2S マイク設定を追加できるようにしています。

マイクは次のピンを使用します：

- 電源イネーブル：`GPIO38`
- PDM クロック：`GPIO42`
- PDM データ：`GPIO41`

プレースホルダー値を置き換え、完成した YAML をデバイスにアップロードすることで、このサンプルを使用できます。

<Tabs>
<TabItem value="For E1001" label="E1001 向け" default>

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
<TabItem value="For E1002" label="E1002 向け">

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

この構成では、次のことを行います：

- `GPIO38` を通してマイクの電源を有効にします。
- ePaper 画面に PDM クロックピン `GPIO42` とデータピン `GPIO41` を表示します。
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

次の画像は、reTerminal E1002 上で期待される結果を示しています。同じデモは reTerminal E1001 と E1002 の両方で動作します。主な違いはディスプレイ出力で、E1001 はモノクロ表示、E1002 はカラー表示が可能です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/254.jpeg" style={{width:700, height:'auto'}}/></div>

:::note
このデモは、マイクの電源制御と、ePaper 画面上での関連ピン割り当ての確認のみを行います。完全な Home Assistant Assist 音声パイプラインには、上記のオプションのマイクブロックと、追加のボイスアシスタント設定が必要です。オーディオを SD カードに直接録音する処理は、Arduino のマイクサンプルで行う方が適しています。
:::

## デモ 4：RTC、SD カード、マイクのステータスを統合したダッシュボード

このデモでは、上記 3 つの機能を 1 つのハードウェアステータスページに統合します：

1. PCF8563 からの RTC 日付と時刻。
2. `GPIO15` からの microSD カード挿入ステータス。
3. PDM マイクの初期化ステータス。

よりよく理解するために、この統合サンプルを試す前に、単一機能のデモを先に実行してください。

<details>
<summary>完全なコードを見るにはここをクリック</summary>

<Tabs>
<TabItem value="For E1001" label="E1001 向け" default>

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

ファームウェアが動作しているとき、画面には 1 ページに RTC 時刻、SD カードの状態、マイクの初期化ステータスが表示されます。

次の画像は reTerminal E1002 での期待される結果を示しています。同じデモは reTerminal E1001 と E1002 の両方で動作します。主な違いはディスプレイ出力で、E1001 はモノクロ表示、E1002 はカラー表示が可能です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/255.jpeg" style={{width:700, height:'auto'}}/></div>

## FAQ

### Q1: なぜ画面に「RTC: waiting for sync」と表示されるのですか？

デバイスがまだ有効な時刻を受信していません。Wi-Fi が接続されていること、ESPHome API が Home Assistant に接続されていること、そして Home Assistant のシステム時刻が正しいことを確認してください。Home Assistant が時刻を同期すると、ESPHome はその時刻を PCF8563 RTC に書き戻します。

### Q2: なぜ電源を外すと RTC の時刻が消えてしまうのですか？

PCF8563 は、メインバッテリーと USB 電源が外されたときに時刻を保持するため、CR1220 コイン電池を必要とします。コイン電池を取り付けるか交換し、デバイスを再起動して、Home Assistant に一度時刻を同期させてください。

### Q3: なぜ Home Assistant では SD カードが常に未検出と表示されるのですか？

次の 3 点を確認してください：

- カードがスロットに最後までしっかり挿入されていることを確認します。
- 起動時に `GPIO16` 上の `bsp_sd_enable` がオンになっていることを確認します。
- 検出信号はアクティブ Low なので、`GPIO15` は `INPUT_PULLUP` かつ `inverted: true` に設定したままにしておきます。

### Q4: ESPHome で microSD カード上のファイルを読み書きできますか？

このページでは、ESPHome を使って SD 電源レールを有効にし、カード検出ピンを読み取ることだけを行っています。ファイル一覧、画像の読み取り、フォルダの作成、音声ファイルの保存といった一般的なファイル操作は、Arduino の SD カードサンプルで行う方が適しています。

### Q5: ESPHome でマイク音声を直接 SD カードに録音できますか？

このページにあるシンプルな YAML だけではできません。マイクのデモはオンボードの PDM マイクハードウェアを初期化するだけです。目的が SD カードに WAV ファイルを録音することであれば、代わりに Arduino のマイクおよび SD のサンプルを使用してください。

### Q6: なぜ USB 経由のシリアルログが出力されないのですか？

reTerminal E シリーズは UART0 上に CH340K USB-UART ブリッジを使用しています。YAML には次の logger 設定を保持してください：

```yaml
logger:
  hardware_uart: UART0
```

### Q3: なぜ RTC またはマイクのデモで画面が更新されないのですか？

microSD カードが挿入されている場合は、まずカードを取り外してからデバイスを再起動してください。microSD カード検出デモを除き、このページの他のデモではカードを挿入しておく必要はありません。カードを挿入したままにすると、共有 SPI バスに影響し、ePaper 画面が正しくリフレッシュされない場合があります。

カードを取り外した後、RTC またはマイクのデモを再度アップロードまたは再起動してください。ePaper 画面は正常にリフレッシュされるはずです。

## リソース

- **[Wiki]** [ESPHome クックブック：ディスプレイの基本](/ja/reterminal_e10xx_with_esphome)
- **[Wiki]** [ESPHome クックブック：ボタン、ブザー、LED、バッテリー & 低消費電力](/ja/reterminal_e10xx_with_esphome_advanced)
- **[Wiki]** [ESPHome と連携する](/ja/epaper_work_with_esphome)
- **[Wiki]** [Arduino クックブック：オンボードペリフェラル](/ja/reterminal_e10xx_with_arduino_peripherals)
- **[Wiki]** [Arduino クックブック：RTC、低消費電力、オーディオ & タッチ](/ja/reterminal_e10xx_with_arduino_peripherals_2)
- **[Documentation]** [ESPHome Time コンポーネント](https://esphome.io/components/time/)
- **[Documentation]** [ESPHome I2S Audio コンポーネント](https://esphome.io/components/i2s_audio.html)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
