---
description: 本記事では、ESPHome 上で reTerminal E Series ePaper Display のハードウェア機能を活用する方法を解説します。
title: Home Assistant における reTerminal E Series ePaper Display の高度な ESPHome 活用
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/27.webp
slug: /ja/reterminal_e10xx_with_esphome_advanced
sidebar_position: 3
last_update:
  date: 07/24/2025
  author: Citric
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Home Assistant における reTerminal E Series ePaper Display の高度な ESPHome 活用

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/27.jpg" style={{width:700, height:'auto'}}/></div><br />

本記事では、[ESPHome 基本編](https://wiki.seeedstudio.com/reterminal_e10xx_with_esphome)で扱った基礎の上に、reTerminal E Series ePaper Display デバイス向けの高度な ESPHome 設定を掘り下げます。ESPHome や reTerminal E Series が初めての方は、まず基本編からご覧いただくことをおすすめします。

## ハードウェア機能

reTerminal E Series ePaper Display には、ESPHome を通じて Home Assistant で活用できる複数のハードウェアが搭載されています。

- 3 つのプログラマブルボタン（GPIO3, GPIO4, GPIO5）

- ブザー（GPIO45）

- バッテリ残量監視（GPIO1 の電圧）

- オンボード LED（GPIO6）

- 温湿度センサ（I²C インターフェース）

以下では、これらを実用的なアプリケーションとして順に使ってみます。

## reTerminal E Series ePaper Display のハードウェア制御

Home Assistant 上で、reTerminal E Series ePaper Display の各ハードウェアをどのように使うかを見ていきます。

### ボタンと LED

この例では、3 つのボタンで機能を呼び出し、オンボード LED で視覚的フィードバックを行う方法を示します。

以下の例は、Yaml の `captive_portal` 行の後にそのまま貼り付けて利用できます。

```yaml
# ボタン設定
binary_sensor:
  - platform: gpio
    pin:
      number: GPIO3         # 緑ボタン
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
      number: GPIO4          # 右の白ボタン
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
      number: GPIO5           # 左の白ボタン
      mode: INPUT_PULLUP
      inverted: true
    id: button_3
    name: "Button 3"
    on_press:
      then:
        - light.toggle: onboard_led

# LED 設定
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

この設定でできること：

- 3 つのボタンをプルアップ入力として設定
- Button 1 は LED を短時間フラッシュ
- Button 2 は LED をダブル点滅
- Button 3 は LED の ON/OFF をトグル
- LED は Home Assistant 上で制御可能な light エンティティとして露出

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/45.gif" style={{width:250, height:'auto'}}/></div>

### ブザー制御

reTerminal E Series ePaper Display には GPIO45 のブザーがあり、可聴フィードバックに使えます。設定方法は以下の通りです。

以下の例は、Yaml の `captive_portal` 行の後にそのまま貼り付けて利用できます。

```yaml
# このコンポーネントは生の PWM（パルス幅変調）出力を生成します。
# ESP32 では、専用の LEDC ハードウェアを用いるため platform は 'ledc' が正解です。
output:
  - platform: ledc   # 修正：ESP32 の PWM は 'ledc' を使用
    pin: GPIO45
    id: buzzer_pwm
    # frequency は音程を決めます。1000Hz は中音域。
    frequency: 1000Hz

# ブザーをユーザーフレンドリーに制御できるよう light エンティティを作成します。
# light の 'brightness' は PWM デューティ比（実質的に音量）を制御します。
light:
  - platform: monochromatic
    output: buzzer_pwm
    name: "Buzzer"
    id: buzzer
    # 遷移時間 0s で、即時 ON/OFF。
    default_transition_length: 0s

# ブザーを鳴らす物理ボタンを定義します。
binary_sensor:
  - platform: gpio
    pin:
      number: GPIO3            # 緑ボタン
      mode: INPUT_PULLUP       # 内蔵プルアップ
      inverted: true           # 押下時 Low
    id: button_1
    # 'on_press' はボタン押下時のアクションシーケンス
    on_press:
      then:
        # 1 回目のビープ：音量 50% で 200ms
        - light.turn_on:
            id: buzzer
            brightness: 50%
        - delay: 200ms
        - light.turn_off: buzzer
        # 100ms のポーズ
        - delay: 100ms
        # 2 回目のビープ：音量 70% で 200ms
        - light.turn_on:
            id: buzzer
            brightness: 70%
        - delay: 200ms
        - light.turn_off: buzzer
```

この設定でできること：

- ブザーを PWM 出力として設定
- ブザーを制御する light エンティティを作成
- Button 1 で短いビープパターンを再生

:::tip
`frequency` パラメータを調整することで、ブザーの音程を変更できます。値が高いほど高い音になります。
:::

### バッテリ監視

reTerminal E Series ePaper Display は GPIO1 のアナログ入力でバッテリ電圧を監視できます。設定は以下の通りです。

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

# ログを有効化
logger:

# Home Assistant API を有効化
api:
  encryption:
    key: "m+rOiVDwjdvePoiG1zritvcD0Kl/a2zmsnuG+4IfWlw="

ota:
  - platform: esphome
    password: "710fecea969062a5775b287a54f3c0f5"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

  # 失敗時のフォールバック AP（キャプティブポータル）
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
      - multiply: 2.0  # 分圧の補正

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

この設定でできること：

- ADC でバッテリ電圧を読み取り
- キャリブレーションカーブで電圧から残量（%）へ変換
- 電圧と残量の両方を Home Assistant にエクスポート

:::caution
バッテリー残量を測定するには、**GPIO21** ピンを有効にする必要があります。そうしないと、GPIO1 からバッテリー電圧値を読み取ることはできません。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/46.png" style={{width:1000, height:'auto'}}/></div>

## デモ 2. Home Assistant ダッシュボードをスクリーンショット表示

この例では、Home Assistant のダッシュボードをスクリーンショットで取得し、reTerminal E Series に表示する方法を示します。

### [Puppet](https://github.com/balloob/home-assistant-addons) アドオンのインストール

Step 1. まず Puppet アドオンをインストールします。下のボタンをクリックすると、お使いの Home Assistant インスタンスのアドオンインストールページへ遷移します。

<div align="center">
<a href="https://my.home-assistant.io/redirect/supervisor_addon/?addon=0f1cc410_puppet&repository_url=https%3A%2F%2Fgithub.com%2Fballoob%2Fhome-assistant-addons" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#03A9F4', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Puppet アドオンをインストール</button></p>
</a>
</div>

Step 2. アドオンページで「INSTALL」をクリックし、完了まで待ちます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/48.png" style={{width:1000, height:'auto'}}/></div>

### アクセストークンの作成

Step 3. インストール後、Puppet アドオンの Configuration ページに移動します。ここではトークン入力が必要です。このアドオン用のアクセストークンを作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/49.png" style={{width:800, height:'auto'}}/></div>

Step 4. Home Assistant 左下のユーザー名からプロフィールへ移動し、ページ下部の「Long-Lived Access Tokens」を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/50.png" style={{width:1000, height:'auto'}}/></div>

Step 5. 「Puppet Screenshot」など分かりやすい名前で新しいトークンを作成し、生成されたトークンをコピーします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/51.png" style={{width:800, height:'auto'}}/></div>

Step 6. Puppet アドオンの設定に戻り、「Long-Lived Access Token」欄へ貼り付けます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/52.png" style={{width:1000, height:'auto'}}/></div>

Step 7. 設定を保存し、Puppet アドオンを再起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/95.jpg" style={{width:800, height:'auto'}}/></div>

### スクリーンショット API の理解

Puppet アドオンはポート 10000 でサーバーを起動し、任意の Home Assistant ページのスクリーンショットを生成します。使い方は次の通りです。

#### 基本的なスクリーンショット URL

```
http://homeassistant.local:10000/lovelace/0?viewport=800x480
```

この URL はデフォルトダッシュボードの 800x480 スクリーンショットを取得します（reTerminal E Series に最適）。

#### 電子ペーパー向け最適化

色数を絞る `eink` パラメータを追加します。

```
http://homeassistant.local:10000/lovelace/0?viewport=800x480&eink=2
```

`2` は 2 色（黒/白）パレットを表します。

#### 反転表示

黒白を反転するには `invert` を付与します。

```
http://homeassistant.local:10000/lovelace/0?viewport=800x480&eink=2&invert
```

#### 別ページのキャプチャ

URL パスを変えることで任意のページをキャプチャできます。

```
http://homeassistant.local:10000/todo?viewport=800x480&eink=2&invert
```

Step 10. 作成した URL をブラウザで開いてテストします。指定したページのスクリーンショットが表示されるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/92.jpg" style={{width:800, height:'auto'}}/></div>

### ESPHome 設定

Step 11. 以下のコードを、ESPHome 設定の `captive_portal` セクションの後に追加します。

<Tabs>
<TabItem value="For E1001" label="For E1001" default>

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
    url: http://homeassistant.local:10000/lovelace/0?viewport=800x480&eink=2&invert  # あなたの Home Assistant のアドレスに置き換え
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

</TabItem>
<TabItem value="For E1002" label="For E1002">

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
    url: http://homeassistant.local:10000/lovelace/0?viewport=800x480&eink=2&invert  # あなたの Home Assistant のアドレスに置き換え
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
    model: 7.30in-e
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

</TabItem>
</Tabs>

:::caution
ネットワークでローカル DNS 解決が機能しない場合は、`homeassistant.local` を Home Assistant の実際の IP アドレスに置き換えてください。
:::

設定のアップロードと実行に成功すると、reTerminal E Series ePaper Display に Home Assistant ダッシュボードのスクリーンショットが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/54.jpg" style={{width:600, height:'auto'}}/></div>

## デモ 3: ディープスリープ（Deep Sleep）モード

:::tip
ディープスリーププログラムを使用する場合は、右側の白いボタンを使用し、それをスリープ解除ボタンとして設定することをお勧めします。こうすることで、プログラムを更新したいときに、デバイスがスリープ中でシリアルポートからプログラムをアップロードできないという厄介な状況を回避できます。
:::

この例では、消費電力を大きく削減するディープスリープの使い方を示し、バッテリ駆動アプリケーションに適した運用を可能にします。

以下の例は、Yaml の `captive_portal` 行の後にそのまま貼り付けて利用できます。

<Tabs>
<TabItem value="For E1001" label="For E1001" default>

```yaml
globals:
  - id: sleep_counter
    type: int
    restore_value: yes  # スリープ間でカウンタを保持（RTC ストレージ）
    initial_value: '0'

# ディープスリープ設定
deep_sleep:
  id: deep_sleep_1
  run_duration: 30s  # 30 秒起床
  sleep_duration: 5min  # その後 5 分スリープ
  # 任意：ボタンでスリープ解除
  wakeup_pin: GPIO4
  wakeup_pin_mode: INVERT_WAKEUP

interval:
  - interval: 29s  # run_duration 終了直前にスリープをスケジュール
    then:
      - logger.log: "Entering deep sleep now..."

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
    update_interval: 5min
    lambda: |-
      id(sleep_counter) += 1;
      ESP_LOGD("main", "Wakeup count: %d", id(sleep_counter));
      it.printf(100, 100, id(font1), "Wakeup count: %d", id(sleep_counter));
```

</TabItem>
<TabItem value="For E1002" label="For E1002">

```yaml
globals:
  - id: sleep_counter
    type: int
    restore_value: yes  # スリープ間でカウンタを保持（RTC ストレージ）
    initial_value: '0'

# ディープスリープ設定
deep_sleep:
  id: deep_sleep_1
  run_duration: 30s  # 30 秒起床
  sleep_duration: 5min  # その後 5 分スリープ
  # 任意：ボタンでスリープ解除
  wakeup_pin: GPIO4
  wakeup_pin_mode: INVERT_WAKEUP

interval:
  - interval: 29s  # run_duration 終了直前にスリープをスケジュール
    then:
      - logger.log: "Entering deep sleep now..."

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
    model: 7.30in-e
    cs_pin: GPIO10
    dc_pin: GPIO11
    reset_pin:
      number: GPIO12
      inverted: false
    busy_pin:
      number: GPIO13
      inverted: true
    update_interval: 5min
    lambda: |-
      const auto BLACK   = Color(0,   0,   0,   0);
      id(sleep_counter) += 1;
      ESP_LOGD("main", "Wakeup count: %d", id(sleep_counter));
      it.printf(100, 100, id(font1), BLACK, "Wakeup count: %d", id(sleep_counter));
```

</TabItem>
</Tabs>

この設定でできること：

- スリープ間で永続するカウンタの作成
- 30 秒起床 → 3 分スリープ（※上の例は 5 分に設定、必要に応じて調整可）
- 現在のウェイクアップ回数をディスプレイへ表示
- 任意でボタンをスリープ解除に利用

動作時、デバイスがスリープから起床するたびに、カウンタが 1 ずつ増えて表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/53.jpg" style={{width:600, height:'auto'}}/></div>

## デモ 4: 総合例

:::tip
よりよく理解するために、この総合的な例を試す前に、まず上記の基本的な例を実行することを強くお勧めします。
:::

この上級例は、reTerminal E Series のためのダッシュボードを構成する複数機能を結合しています。以下を実装します。

1. 天気と室内環境の表示
2. アイコン付きバッテリ監視
3. 時刻と日付の表示
4. ボタンによるページ切り替え
5. バッテリ監視

<details>
<summary>クリックして全コードを表示</summary>

<Tabs>
<TabItem value="For E1001" label="For E1001" default>

```yaml
esphome:
  name: reterminal_e1001
  friendly_name: reTerminal_E1001
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

# ログを有効化
logger:

# Home Assistant API を有効化
api:
  encryption:
    key: "g93yP72UIyVsz9WfffaDMK+JeIQYROIFRK+VIQjkM+g="

ota:
  - platform: esphome
    password: "1ff187393ee444aa2e892779dc78e488"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

  # 失敗時フォールバック AP（キャプティブポータル）
  ap:
    ssid: "reTerminal-E1001"
    password: "yoUkaGlJaDpC"

captive_portal:

# ディープスリープ（GPIO4 で復帰）
deep_sleep:
  id: deep_sleep_1
  run_duration: 1min
  sleep_duration: 60min
  wakeup_pin: GPIO4          # 右の白ボタン
  wakeup_pin_mode: INVERT_WAKEUP

# SPI / I²C
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9
i2c:
  scl: GPIO20
  sda: GPIO19

# フォント
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
    size: 96      # 大きな時計表示用
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_large
    size: 70
    glyphs:
      - "\U000F050F"  # thermometer
      - "\U000F058E"  # humidity
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
    initial_value: "\"\\U000F0079\""   # 既定は満充電アイコン

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

# オンボード LED
light:
  - platform: binary
    name: "Onboard LED"
    output: bsp_led
    id: onboard_led
    
binary_sensor:
  - platform: gpio    # 次ページ
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

  - platform: gpio     # 前ページ
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

# Home Assistant の時刻
time:
  - platform: homeassistant
    id: ha_time

# e-paper
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
      // ----------  PAGE 0  ----------
      if (id(page_index) == 0) {
        const int scr_w = 800;
        const int scr_h = 480;

        // 右上のバッテリ
        it.printf(670, 13, id(font_bat_icon), "%s", id(battery_glyph).c_str());
        it.printf(700, 10, id(small_font), "%.0f%%", id(battery_level).state);

        // セパレータ
        it.filled_rectangle(400, 100, 2, 280);

        // °C を °F に変換
        float temp_f = id(temp_sensor).state * 9.0 / 5.0 + 32.0;

        // ---------------------------------------------------------
        // 横 2 分割（各 400 px）
        const int col_w = scr_w / 2;

        const int icon_y   = 100;   // アイコン基準線
        const int value_y  = 220;   // 数値基準線
        const int unit_y   = 300;   // 単位基準線
        const int label_y  = 380;   // ラベル基準線

        const int icon_size = 70;   // アイコンフォント
        const int val_size  = 120;  // 数値フォント
        const int unit_size = 44;   // 単位フォント
        const int label_size= 36;   // ラベルフォント

        // --- 左カラム：温度 -----------------------------
        const int left_mid = col_w / 2 - 30;   // 約 200 px

        // アイコン
        it.printf(left_mid, icon_y, id(font_mdi_large), TextAlign::CENTER, "\U000F050F");
        // 値
        it.printf(left_mid, value_y, id(big_font), TextAlign::CENTER, "%.0f", temp_f);
        // 単位
        it.printf(left_mid + 150, unit_y, id(mid_font), TextAlign::CENTER, "°F");
        // ラベル
        it.printf(left_mid, label_y, id(mid_font), TextAlign::CENTER, "Temperature");

        // --- 右カラム：湿度 -----------------------------
        const int right_mid = col_w + col_w / 2;   // 約 600 px

        // アイコン
        it.printf(right_mid, icon_y, id(font_mdi_large), TextAlign::CENTER, "\U000F058E");
        // 値
        it.printf(right_mid, value_y, id(big_font), TextAlign::CENTER, "%.0f", id(hum_sensor).state);
        // 単位
        it.printf(right_mid + 150, unit_y, id(mid_font), TextAlign::CENTER, "%%");
        // ラベル
        it.printf(right_mid, label_y, id(mid_font), TextAlign::CENTER, "Humidity");
      }
      // ----------  PAGE 1  ----------
      else{
        // 右上のバッテリ
        it.printf(670, 13, id(font_bat_icon), "%s", id(battery_glyph).c_str());
        it.printf(700, 10, id(small_font), "%.0f%%", id(battery_level).state);

        auto now = id(ha_time).now();
        struct tm timeinfo = now.to_c_tm();

        // 中央に HH:MM
        char timeStr[6];
        strftime(timeStr, sizeof(timeStr), "%H:%M", &timeinfo);
        it.printf(400, 180, id(time_font), TextAlign::CENTER, timeStr);

        // 曜日
        const char *weekday[] = {"Sun","Mon","Tue","Wed","Thu","Fri","Sat"};
        const char *wday = weekday[timeinfo.tm_wday];

        // 月-日
        char dateStr[12];
        strftime(dateStr, sizeof(dateStr), "%b %d", &timeinfo);  // 例: Jun 15

        // 曜日 + 日付（時計の下）
        it.printf(400, 280, id(mid_font), TextAlign::CENTER, "%s, %s", wday, dateStr);
      }
```

</TabItem>
<TabItem value="For E1002" label="For E1002">

```yaml
esphome:
  name: reterminal_e1002
  friendly_name: reTerminal_E1002
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

# ログを有効化
logger:

# Home Assistant API を有効化
api:
  encryption:
    key: "g93yP72UIyVsz9WfffaDMK+JeIQYROIFRK+VIQjkM+g="

ota:
  - platform: esphome
    password: "1ff187393ee444aa2e892779dc78e488"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

  # 失敗時フォールバック AP（キャプティブポータル）
  ap:
    ssid: "reTerminal-E1002"
    password: "yoUkaGlJaDpC"

captive_portal:

# ディープスリープ（GPIO4 で復帰）
deep_sleep:
  id: deep_sleep_1
  run_duration: 1min
  sleep_duration: 60min
  wakeup_pin: GPIO4          # 右の白ボタン
  wakeup_pin_mode: INVERT_WAKEUP

# SPI / I²C
spi:
  clk_pin: GPIO7
  mosi_pin: GPIO9
i2c:
  scl: GPIO20
  sda: GPIO19

# フォント
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
    size: 96      # 大きな時計表示用
  - file: 'fonts/materialdesignicons-webfont.ttf'
    id: font_mdi_large
    size: 70
    glyphs:
      - "\U000F050F"  # thermometer
      - "\U000F058E"  # humidity
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
    initial_value: "\"\\U000F0079\""   # 既定は満充電アイコン

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

# オンボード LED
light:
  - platform: binary
    name: "Onboard LED"
    output: bsp_led
    id: onboard_led
    
binary_sensor:
  - platform: gpio    # 次ページ
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

  - platform: gpio     # 前ページ
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

# Home Assistant の時刻
time:
  - platform: homeassistant
    id: ha_time

# e-paper
display:
  - platform: waveshare_epaper
    id: epaper_display
    model: 7.30in-e
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
      const auto BLACK   = Color(0,   0,   0,   0);
      const auto RED     = Color(255, 0,   0,   0);
      const auto GREEN   = Color(0,   255, 0,   0);
      const auto BLUE    = Color(0,   0,   255, 0);
      const auto YELLOW  = Color(255, 255, 0,   0);

      // ----------  PAGE 0  ----------
      if (id(page_index) == 0) {
        const int scr_w = 800;
        const int scr_h = 480;

        // 右上のバッテリ
        it.printf(670, 13, id(font_bat_icon), GREEN, "%s", id(battery_glyph).c_str());
        it.printf(700, 10, id(small_font), GREEN, "%.0f%%", id(battery_level).state);

        // セパレータ
        it.filled_rectangle(400, 100, 2, 280, BLACK);

        // °C を °F に変換
        float temp_f = id(temp_sensor).state * 9.0 / 5.0 + 32.0;

        // ---------------------------------------------------------
        // 横 2 分割（各 400 px）
        const int col_w = scr_w / 2;

        const int icon_y   = 100;   // アイコン基準線
        const int value_y  = 220;   // 数値基準線
        const int unit_y   = 300;   // 単位基準線
        const int label_y  = 380;   // ラベル基準線

        const int icon_size = 70;   // アイコンフォント
        const int val_size  = 120;  // 数値フォント
        const int unit_size = 44;   // 単位フォント
        const int label_size= 36;   // ラベルフォント

        // --- 左カラム：温度 -----------------------------
        const int left_mid = col_w / 2 - 30;   // 約 200 px

        // アイコン
        it.printf(left_mid, icon_y, id(font_mdi_large), BLUE, TextAlign::CENTER, "\U000F050F");
        // 値
        it.printf(left_mid, value_y, id(big_font), BLUE, TextAlign::CENTER, "%.0f", temp_f);
        // 単位
        it.printf(left_mid + 150, unit_y, id(mid_font), RED, TextAlign::CENTER, "°F");
        // ラベル
        it.printf(left_mid, label_y, id(mid_font), RED, TextAlign::CENTER, "Temperature");

        // --- 右カラム：湿度 -----------------------------
        const int right_mid = col_w + col_w / 2;   // 約 600 px

        // アイコン
        it.printf(right_mid, icon_y, id(font_mdi_large), YELLOW, TextAlign::CENTER, "\U000F058E");
        // 値
        it.printf(right_mid, value_y, id(big_font), YELLOW, TextAlign::CENTER, "%.0f", id(hum_sensor).state);
        // 単位
        it.printf(right_mid + 150, unit_y, id(mid_font), GREEN, TextAlign::CENTER, "%%");
        // ラベル
        it.printf(right_mid, label_y, id(mid_font), GREEN, TextAlign::CENTER, "Humidity");
      }
      // ----------  PAGE 1  ----------
      else{
        // 右上のバッテリ
        it.printf(670, 13, id(font_bat_icon), BLUE, "%s", id(battery_glyph).c_str());
        it.printf(700, 10, id(small_font), BLUE, "%.0f%%", id(battery_level).state);

        auto now = id(ha_time).now();
        struct tm timeinfo = now.to_c_tm();

        // 中央に HH:MM
        char timeStr[6];
        strftime(timeStr, sizeof(timeStr), "%H:%M", &timeinfo);
        it.printf(400, 180, id(time_font), BLUE, TextAlign::CENTER, timeStr);

        // 曜日
        const char *weekday[] = {"Sun","Mon","Tue","Wed","Thu","Fri","Sat"};
        const char *wday = weekday[timeinfo.tm_wday];

        // 月-日
        char dateStr[12];
        strftime(dateStr, sizeof(dateStr), "%b %d", &timeinfo);  // 例: Jun 15

        // 曜日 + 日付（時計の下）
        it.printf(400, 280, id(mid_font), YELLOW, TextAlign::CENTER, "%s, %s", wday, dateStr);
      }
```

</TabItem>
</Tabs>

</details>

設定のアップロードと実行に成功すると、環境データ・時刻・バッテリ状態を備えた包括的なダッシュボードが reTerminal E Series ePaper Display に表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/55.gif" style={{width:800, height:'auto'}}/></div>

### 総合例のポイント

この例は以下を実装しています。

1. **複数ページ**：気候ダッシュボードと時刻/日付表示の 2 ページを切替
2. **ボタン操作**：GPIO3 と GPIO5 のボタンでページ遷移
3. **バッテリ監視**：充電状態に応じてバッテリアイコンが変化
4. **ハードウェア初期化**：起動時に SD/バッテリ監視回路を有効化
5. **温湿度表示**：I²C の SHT4x センサを使用
6. **動的アイコン**：センサ値に応じて Material Design Icons を更新

## FAQ

### Q1: データが表示されません

この場合、Settings -> Devices & Services -> Integrations でデバイスを **RECONFIGURE** してください。ePaper パネルが見つからない場合は Home Assistant を再起動してみてください。

<div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/101.png" style={{width:'100%', height:'auto'}}/></div>

### Q2: Home Assistant でデータが取得できません {#port}

Settings -> Devices & Services -> Integrations からデバイスを **ADD** してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/11.png" style={{width:800, height:'auto'}}/></div>

<!-- ### Q3: ディープスリープ中に新しいプログラムをアップロードするには？

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/103.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/102.png" style={{width:'100%', height:'auto'}}/></div>
</div>

ディープスリープ中は直接アップロードできません。以下の手順でダウンロードモードに入ってください：

Step 1. デバイスの電源が入っていることを確認。XIAO ESP32-S3 Plus の USB-C 端子の横にある **Boot** ボタンを押し続けます。

Step 2. **Boot** を押したまま **Reset** を 1 回押してから **Boot** を離します。

Step 3. バッテリスイッチを OFF にし、電源ケーブルを抜きます。

Step 4. もう一度ケーブルを挿し直し、新しいプログラムをアップロードします。 -->

### Q3: Wi-Fi 経由のアップロードに失敗します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/74.png" style={{width:800, height:'auto'}}/></div>

この場合、デバイスがオフライン、もしくはディープスリープ中の可能性があります。ネットワークに接続されていること、またはスリープから復帰していることを確認してからアップロードをお試しください。

## テクニカルサポート & 製品ディスカッション

当社製品をお選びいただきありがとうございます。製品を円滑にご利用いただけるよう、さまざまなサポート窓口をご用意しています。ご希望や用途に応じて以下をご利用ください。

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
