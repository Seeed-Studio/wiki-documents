---
title: XIAO IR Mate Smart IR Remote 入門ガイド
description: |
  Seeed Studio のスマート IR リモコンで、テレビやエアコンなどの従来家電を Home Assistant スマートホームエコシステムに統合するために設計されています。
image: https://files.seeedstudio.com/wiki/XIAO_IR_MATE/XIAO-Smart-IR-Mate.webp
slug: /XIAO_IR_Mate_Smart_IR_Remote
sku: 109990586
keywords:
  - XIAO
  - Home Assistant
  - スマートホーム
sidebar_position: 5
last_update:
  author: TienjuiWong
  date: 07/17/2025
createdAt: '2025-07-18'
updatedAt: '2026-07-02'
url: https://wiki.seeedstudio.com/ja/XIAO_IR_Mate_Smart_IR_Remote/
---


# XIAO IR Mate Smart IR Remote 入門ガイド（Home Assistant 向け）

**XIAO IR Mate Smart IR Remote** へようこそ！このデバイスは Home Assistant ユーザー向けに特別に設計されており、シームレスで効率的かつ統合されたスマート赤外線リモコンソリューションを提供することを目的としています。本ガイドでは、デバイスのセットアップ方法、自宅のネットワークへの接続方法、Home Assistant への統合方法、そして基本的な信号学習から高度なスマートエアコン制御まで、その潜在能力を最大限に引き出す方法を学びます。

<div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/6-109990586-XIAO-Smart-IR-Mate.jpg"
    alt="製品図"
    style={{
      maxWidth: '50%',
      height: 'auto',
      display: 'block',
      borderRadius: '8px'
    }}
  />
</div>

## はじめに

**XIAO IR Mate** は、**Seeed Studio XIAO ESP32-C3** をベースにしたコンパクトなスマート赤外線モジュールです。赤外線送受信、タッチ検知、振動フィードバック、ステータスインジケータを統合しています。Wi-Fi 接続により、Home Assistant スマートホームエコシステムに完全に統合することができます。その中核的な使命は、赤外線リモコンを使用するすべての従来家電（テレビ、エアコン、扇風機など）を「スマート化」し、HA を通じて自動化制御できるようにすることです。

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '16px',
  alignItems: 'center'
}}>
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/1-109990586-XIAO-Smart-IR-Mate.jpg" alt="XIAO Smart IR Mate 製品図 1" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/2-109990586-XIAO-Smart-IR-Mate.jpg" alt="XIAO Smart IR Mate 製品図 2" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/3-109990586-XIAO-Smart-IR-Mate.jpg" alt="XIAO Smart IR Mate 製品図 3" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/4-109990586-XIAO-Smart-IR-Mate.jpg" alt="XIAO Smart IR Mate 製品図 4" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/5-109990586-XIAO-Smart-IR-Mate.jpg" alt="XIAO Smart IR Mate 製品図 5" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/touch.jpg" alt="XIAO Smart IR Mate 製品図 6" />
</div>

- **Home Assistant とのシームレスな統合**

ESPHome プラットフォーム上に構築されているため、IR Mate は Home Assistant によって自動的に検出され、シンプルなエンティティを提供し、容易な自動化やスクリプト作成を可能にします。

- **強力な IR 学習および送信機能**

3 つの高出力 IR エミッタによる 360° カバレッジと高感度レシーバを搭載しています。標準リモコンから最大 10 個の IR コマンドを学習でき（例：プロジェクタ、エアコン、タイマーの制御など）、Home Assistant でワンタップ再生が可能です。

- **直感的な物理インタラクションフィードバック**

振動モーターと LED インジケータを備えています。短い振動は動作の確定を示し、長い振動は学習モードを示します。LED はネットワークステータスを表示し、セットアップやトラブルシューティングを簡素化します。

- **高機能スマート AC コントローラへのアップグレード**

カスタムファームウェアを書き込むことで、IR Mate をスマート AC リモコンに変身させることができます。Home Assistant 上で温度、モード、風量を直接細かく設定でき、自動 IR コード生成により、繰り返しの学習作業を不要にします。

- **コンパクト設計、USB-C 給電**

## ハードウェア概要

デバイスの基本コンポーネントを理解することで、より便利に活用できるようになります：

- **メインコントローラ**：Seeed Studio XIAO ESP32-C3。高い処理性能と Wi-Fi 接続機能を提供します。
- **電源**：オンボードの Type-C ポート（5V）から給電します。
- **赤外線エミッタ**：3 つの高出力赤外線 LED（ピン D1 使用）で、死角のない 360° 信号送信を実現します。
- **赤外線レシーバ**：1 つの高精度赤外線レシーバ（ピン D2 使用）で、他のリモコンからの信号学習に使用します。
- **タッチセンサ**：デバイスにはタッチモジュール（ピン D3 使用）が統合されています。1 回タッチすると、操作フィードバックとして 0.5 秒間の短い振動が発生します。
- **振動モーター**：内蔵の振動モーター（ピン D4 使用）が、振動時間の違いによって明確な触覚フィードバックを提供します。
- **ステータスインジケータ LED**：デバイスのさまざまな動作状態を示す LED ライト（ピン D5 使用）です。
- **リセットボタン**：デバイス上の物理ボタン（ピン D0 接続）で、再起動や工場出荷時リセットに使用します。

## 初回使用とネットワーク設定（工場出荷時ファームウェア）

デバイスを初めて使用する際は、次の手順に従って初期セットアップを完了してください。

### ステップ 1：電源を入れる

標準的な USB Type-C ケーブルを使用してデバイスに電源を供給します。起動後、デバイスは設定待ち状態に入り、**白色 LED が 1Hz の周期で点滅**しているのが確認できます。

### ステップ 2：AP プロビジョニングモードに入る

ネットワークが未設定の場合、デバイスは自動的に **XIAO IR Mate**（または、表示によっては **Seeed_ir**）という名前の Wi-Fi ホットスポット（AP）を作成します。

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/ap_mode_network_connect.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

### ステップ 3：ホットスポットに接続してネットワークを設定する

1. スマートフォンまたはパソコンで Wi-Fi 設定を開き、**XIAO IR Mate** という名前のネットワークを検索して接続します。

:::note
ホットスポットのデフォルトネットワークパスワードは「12345678」です。
:::

2. 接続に成功すると、通常は自動的に設定ページが開きます。開かない場合は、ブラウザを手動で開き、**[http://192.168.4.1](http://192.168.4.1)** にアクセスしてください。
3. このページには Wi-Fi ネットワークの一覧が表示されます。自宅の **2.4GHz Wi-Fi ネットワーク（SSID）** を選択し、正しいパスワードを入力してください。
4. "Connect" または "Save" をクリックします。デバイスは入力された Wi-Fi ネットワークへの接続を試みます。

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/ap_mode_network_connect_02.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

### ステップ 4：接続成功

デバイスが自宅の Wi-Fi に正常に接続されると、AP ホットスポットは自動的にオフになり、**ステータスインジケータライトが点灯しっぱなし**になります。これでネットワーク設定は完了です。

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/ap_mode_network_connect_03.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

## Home Assistant への統合（工場出荷時ファームウェア）

デバイスのファームウェアは **ESPHome** をベースとしており、Home Assistant への統合が非常に簡単です。

1. **自動検出**：Home Assistant ホストと XIAO IR Mate が同じローカルネットワークに接続されていることを確認します。通常、HA は新しい ESPHome デバイスを自動的に検出します。**Settings \> Devices & Services** に「New device discovered」という通知が表示されます。
2. **手動追加**：自動検出されない場合は、右下の **[Add Integration]** ボタンをクリックし、**"ESPHome"** を検索してから、デバイスのホスト名（例：**xiao-ir-mate**）または IP アドレスを入力して手動で追加します。

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

3. **デバイスダッシュボード**：追加に成功すると、XIAO IR Mate は HA 上のデバイスとして表示されます。そのダッシュボードには、10 個の異なる赤外線信号を制御するための以下のエンティティが含まれます。

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/homeassistant_07.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

## コア機能の詳細（工場出荷時ファームウェア）

デバイスを復元したりファームウェアを更新したりしたい場合は、以下のボタンから移動できます。XIAO Gadget 直接書き込みファームウェア専用のページを用意しています。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://gadgets.seeed.cc/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Flash the Firmwave</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### IR 信号の学習

IR Mate に新しいリモコンコマンドを学習させる必要がある場合は、次の手順に従ってください。工場出荷時ファームウェアのコアインターフェースには、**信号スロット選択リスト** と **Learn** および **Send** ボタンが含まれています。

1. Home Assistant のデバイスダッシュボードで、まず **"Signal"** という名前のドロップダウン選択リストを探します。
2. ドロップダウンリストをクリックし、使用したい信号スロットを選択します。例：**"signal_1"**。
3. 選択したら、**"Learn"** ボタンを見つけ、その横の **"PRESS"** をクリックします。
4. XIAO IR Mate は学習モードに入り、**連続的に振動**し始めます。これはペアリングを開始できることを示します。
5. 元のリモコンを IR Mate の赤外線レシーバウィンドウに向け、学習させたいボタンを短く押します。
6. IR Mate が信号を正常に受信して記録すると、**振動が停止**し、学習が成功したことを示します。
7. この時点で、**"Is Learned Signal"** という名前のステータスインジケータが自動的に「ON」になり、ドロップダウンリストで現在選択されている信号スロット（つまり "signal_1"）に信号が保存されたことを示します。

### IR 信号の送信

一度信号の学習が正常に完了すると、いつでもその信号を送信できます。

1. **"Signal"** ドロップダウンリストで、送信したい信号スロット（例：**"signal_1"**）が選択されていることを確認します。
2. **"Send"** ボタンを見つけ、その横にある **"PRESS"** をクリックします。
3. XIAO IR Mate は、現在選択されているスロットに保存されている信号を、3 つの赤外線発光部から即座に送信します。
4. **注意**: ドロップダウンリストで、まだ一度も信号を学習していないスロットを選択した場合、送信ボタンをクリックしても何も起こりません。

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/homeassistant_08.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

## 物理的な操作とステータス表示

HA による制御に加えて、物理的な操作を通じてデバイスの状態を把握したり制御したりすることもできます。

### ステータスインジケーターライト（白色 LED）

- **ゆっくり点滅（1Hz）**: デバイスが Wi-Fi ネットワークへの接続待機中です。
- **点灯（常時オン）**: デバイスが Wi-Fi ネットワークに正常に接続され、正常に動作しています。

### 振動フィードバック

- **短い振動（100ms）**: デバイスに触れたときなど、一般的な操作確認に使用されます。
- **長い振動（500ms）**: 学習モードへの移行やファクトリーリセットの実行など、重要なステータス通知に使用されます。

### RESET ボタン

- **短押し（1 秒以内）**: デバイスが再起動し、短い振動が伴います。デバイスが反応しなくなった場合に非常に有用です。
- **長押し（5 秒以上）**: デバイスは**ファクトリーリセットを実行します**。この操作により、**保存されているすべての Wi-Fi 認証情報と、学習済みの 10 個の赤外線信号がすべて消去されます**。この操作が行われると、デバイスは長い振動を発して通知します。完了後、デバイスは再起動し、初期の設定待ち状態（LED 点滅）に戻ります。

## 応用編 - スマートエアコン制御

工場出荷時ファームウェアが提供する基本的な「記録・再生」モードは汎用的ですが、エアコン（温度、モード、風量など）のように複数の状態を持つ機器を制御する際には扱いづらい場合があります。よりきめ細かくインテリジェントなエアコン制御を実現するために、専用の ESPHome ファームウェアを書き込み、XIAO IR Mate を「IR 信号リピーター」から本当の「スマートエアコンコントローラー」へと変身させることができます。

本章では、Gree 製エアコンを詳細な例として使用しますが、これは決して唯一の選択肢ではありません。ESPHome の強力なエコシステムは多数のエアコンブランドをサポートしており、本ガイドのコンセプトに従って設定コードを少し変更するだけで、Midea、ダイキン、Panasonic など他ブランドのスマート制御も簡単に実現できます。

### 主要な利点

- **状態を持った制御**: もはや単純な再生ではありません。HA 上で「24°C、冷房、風量自動」などを直接設定でき、デバイスは即座に正しい赤外線コマンドを生成して送信します。
- **より使いやすい UI**: HA 上では標準的な Climate カードとして表示され、直感的に操作できます。
- **省スペース**: 温度やモードごとに個別の信号を学習させる必要はなく、1 つの設定でエアコンの全機能を制御できます。

### 前提条件

1. **ESPHome をインストール**: まだの場合は、Home Assistant の Add-on Store から ESPHome アドオンをインストールして起動します。
2. **エアコンのブランドプロトコルを把握**: ESPHome は Gree、Midea、ダイキンなど多くのエアコンブランドのプロトコルをサポートしています。正しいプロトコルを選択するために、お使いのエアコンのブランドを把握しておく必要があります。

### カスタムファームウェアの書き込み

1. **新しいデバイス設定を作成**
      - HA で ESPHome インターフェースを開きます。
      - 右下の **"+ NEW DEVICE"** ボタンをクリックし、ポップアップウィンドウで **"Continue"** をクリックします。
      - デバイスに名前を付け（例：**xiao-ir-ac-controller**）、ボードタイプとして **Seeed Studio XIAO ESP32C3** を選択します。
2. **設定ファイルを編集**
      - 新しく作成したデバイスカードの **EDIT** ボタンをクリックして、YAML 設定エディタに入ります。
      - エディタ内のデフォルト内容をすべて削除します。
      - 下記のコードを**完全にコピー＆ペースト**してエディタに貼り付けます：

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

3. **設定をカスタマイズする**
      - **Wi-Fi**: `!secret` ファイルを使用しない場合は、`wifi:` セクションのコメントを解除し、`Your_WiFi_SSID` と `Your_WiFi_Password` をご自分の Wi-Fi 情報に置き換えてください。
      - **正しい AC プロトコルを選択する**: これは最も重要なステップです\! サンプルでは `platform: gree` を使用しています。お使いのエアコンが Gree でない場合は、ご使用のブランドのプラットフォームに置き換えてください。対応しているブランドを見つけるには？[ESPHome Climate Components](https://esphome.io/components/climate/index.html) ページをご覧ください。ここに、すべての対応ブランドとそのプラットフォーム名（例：`daikin`、`midea`、`panasonic_ac` など）が一覧表示されています。
          - 対応するプラットフォームを選択した後、そのプラットフォームのドキュメントに従って、`model` や対応モードなどのパラメータを微調整する必要がある場合があります。
4. **コンパイルと書き込み**
      - YAML 設定を保存します。
      - XIAO IR Mate を USB ケーブルで HA を実行しているコンピュータに接続します。
      - デバイスカードの **INSTALL** ボタンをクリックします。
      - **"Plug into this computer"** オプションを選択します。
      - ESPHome がファームウェアをコンパイルし、ブラウザ経由でデバイスに書き込みます。画面の指示に従って処理を完了してください。
      - 書き込みが成功すると、デバイスは自動的に再起動し、設定した Wi-Fi に接続します。

### Home Assistant での使用方法

書き込みと再起動が完了すると、デバイスは Home Assistant 上で新しい Climate エンティティ（例：`climate.gree_air_conditioner`）として表示されます。ダッシュボードに「Thermostat Card」を追加すれば、完全な AC コントロールパネルが手に入り、ネイティブのスマートエアコンと同じように、温度、モード、ファン速度、スイングを自由に調整できます\!

### さらなる展望：発想を広げよう

おめでとうございます！ここまでで、XIAO IR Mate の 2 つのコアな使い方をマスターしました。1 つは箱から出してすぐ使える「学習型汎用リモコン」機能、もう 1 つはエアコンを精密に制御するための「プロフェッショナルなクライメートコントローラー」モードです。

しかし、ここで終わりではありません。これはまだ始まりに過ぎないからです。XIAO IR Mate の本当の面白さは、その驚くべき柔軟性にあります。これを、あなたが定義する「クリエイティブなブロック」と考えてみてください。想像をはるかに超えるものを作り上げることができます。ここでは、発想を広げる 2 つのアイデアをご紹介します。

#### アイデア 1: 古いリモコンを万能シーンスイッチとして蘇らせる

**適用シナリオ**

周りを見回してみてください。使われずに放置されている古いリモコンがたくさんありませんか？古いテレビ、DVD、ステレオ用のリモコンなど、ボタンがたくさんあり、押し心地も良いのに、今は引き出しの中でほこりをかぶっているだけ。これらのリモコンのボタンを使って、スマートライトやロボット掃除機、さらには複雑な「おかえりシーン」まで操作できたら、すごくクールだと思いませんか？

**仕組み**

このアイデアの核心は、XIAO IR Mate を「送信機」から「リスナー」に変身させることです。もはや他のデバイスを能動的に制御するのではなく、あらゆる古いリモコンからの信号を静かに聞き取り、そのうえで Home Assistant に「信号を受信したよ。あとは任せた！」と伝える役割を担います。

- **実装ステップ**

  1. **「リスナー」ファームウェアを構成する:** ESPHome ファームウェアでは、コアとなる設定は `remote_receiver` コンポーネントです。電源投入後のデバイスの唯一の仕事は、IR 信号を「しっかり聞く」ことです。

  2. **各ボタンの「秘密のコード」を特定する:** 古いリモコンを手に取り、デバイスに向けて任意のボタンを押します。ESPHome のログには、そのボタン固有の IR コード（`RAW` データの文字列や `NEC` プロトコルのコードなど）が表示されます。この「秘密のコード」をメモしておきます。

  3. **HA でオートメーションルールを作成する:** Home Assistant で、「XIAO IR Mate が特定の IR の秘密のコードを検出したとき」をトリガー条件とするオートメーションを設定します。

  4. **アクションを定義する:** ルールのアクションは何でも構いません！例えば：

     - **テレビのリモコンの「音量 +」ボタン** を検出したとき -> **ロボット掃除機を起動** して掃除を開始する。

     - **Apple Remote の「再生」ボタン** を検出したとき -> **バスルームの照明をオンにする**。

     - **DVD リモコンの「赤」ボタン** を検出したとき -> 「外出モード」シーンを実行する。

- **このアプローチの利点**

  - **アップサイクルでエコフレンドリー:** 眠っているハードウェアに新たな命を吹き込み、電子ゴミを再活用することで、お財布にも環境にも優しくなります。

  - **本物の物理ボタンの触感:** タッチスクリーンと比べて、何十個ものはっきりした押し心地のボタンを持つ物理リモコンは、多くのシーンでよりダイレクトで満足感があります。

  - **高い WAF（妻受け要因）:** スマホアプリやスマートスピーカーに慣れていない家族（高齢者や子どもなど）にとって、「このボタンを押すとライトが点くよ」と伝えるのが、最も直感的で覚えやすいインタラクションです。

  - **充電不要の「スマートスイッチ」:** 従来型リモコンの電池は、しばしば 1～2 年もつことがあり、頻繁な充電が必要な多くのスマートガジェットよりはるかに便利です。

#### **アイデア 2: 万能な「IoT マジックボタン」を作る**

**コアコンセプト**

デバイス上のタッチボタンは、本当に IR 制御専用でなければならないのでしょうか？もちろんそんなことはありません！これを、家の **あらゆるもの** を制御するマジックボタンに変身させることができます。鍵となるのは「デカップリング」——つまり、「ボタンを押す」という物理的な行為と、「実際に何が起こるか」というスマートな動作を完全に切り離すことです。

- **実装ステップ**

  1. **ボタンを単なる「レポーター」にする:** ファームウェアでは、タッチボタン（シングルタップ、ダブルタップ、長押し）に特定のタスクを実行させるのではなく、Home Assistant に「イベント通知」を送るだけに設定します。例えば、ダブルタップされたときは、HA に「やあ！ダブルタップされたよ！」と報告するだけにします。

  2. **HA を「司令官」にする:** Home Assistant では、ボタンからのこれらさまざまな「レポート」（イベント）を特に監視するオートメーションを作成します。

  3. **すべてをつなぎ、何でも実行する:** HA がレポートを受信したら、家中のあらゆるデバイスに動作を命令できます！

     - **「シングルタップ」** レポートを受信 -> 家中の **Zigbee ライト** をオン／オフ切り替え。

     - **「ダブルタップ」** レポートを受信 -> **ロボット掃除機** に掃除開始を命令。

     - **「長押し」** レポートを受信 -> 「ムービーモード」シーンを実行し、カーテンを閉め、照明を暗くし、プロジェクターとサウンドシステムをオンにする。

- **このアプローチの利点**

  - **境界を超え、可能性は無限大:** タッチボタンはもはや単なる「IR リモコン」の一部ではなく、HA に接続されたあらゆるデバイスを制御できる、スマートホーム全体の物理スイッチになります。

  - **柔軟に定義し、気分で変更:** 今日はダブルタップで掃除機を起動させていても、明日は音楽を再生したくなった？そんなときは HA のインターフェースでオートメーションを編集するだけでよく、ファームウェアに触れる必要はまったくありません。

  - **最も直感的なインタラクション:** 家族にとって最もシンプルな操作方法を提供できます。触覚フィードバックのある物理ボタンは、多くの場合、スマホアプリを開くよりもはるかに便利でスマートです。

要するに、XIAO IR Mate を単なる IR ツールとして見なさないでください。Wi-Fi に接続され、触覚を持ち、「声」（IR 送信機）を持つ小さなロボットだと考えてみましょう。何ができるかは、あなたの想像力だけが制限になります！

## よくある質問（FAQ）

> **Q: スマホで XIAO IR Mate のホットスポットが見つからないのはなぜですか？**
> **A:** デバイスが Type-C 経由で正しく給電されているか確認してください。白色 LED が点滅しているかをチェックします。ランプが消灯している場合は、ケーブルや電源を交換してみてください。以前にネットワーク設定が正常に完了している場合、ネットワーク接続に失敗するか、RESET ボタンを長押しして工場出荷時設定に戻さない限り、AP ホットスポットは再度作成されません。

> **Q: IR 学習に失敗した場合はどうすればよいですか？（工場出荷時ファームウェア）**
> **A:** 元のリモコンの電池残量が十分であり、IR Mate の受信部（通常は黒い半透明の部品）にできるだけ近づけていることを確認してください。また、強い光の下や、他の赤外線干渉源の近くで学習を行うのは避けてください。

> **Q: デバイスが HA 上でオフラインと表示されますか？**
> **A:** ご家庭の Wi-Fi が正常に動作していること、そして IR Mate が Wi-Fi 電波の届く範囲内にあることを確認してください。RESET ボタンを短く押して、デバイスを再起動してみることもできます。

> **Q: カスタムファームウェアを書き込んだ後、工場出荷時ファームウェアを復元するにはどうすればよいですか？**
> **A:** 工場出荷時ファームウェアの `.bin` ファイル、またはその ESPHome YAML ソースファイルを入手し、ESPHome 経由で再度書き込んでカスタムファームウェアを上書きする必要があります。

> **Q: 学習した信号（工場出荷時ファームウェア）や AC 制御（高度なファームウェア）をオートメーションで使用するにはどうすればよいですか？**
> **A:** HA のオートメーションまたはスクリプトエディタで、「Call service」を選択します。

## リソース

- **[ZIP]** [Hardware](https://files.seeedstudio.com/wiki/XIAO_IR_MATE/XIAO_IR_REMOTE_hardware.zip)
- **[ZIP]** [Software](https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/xiao_smart_ir_mate)

## 技術サポート & 製品ディスカッション

当社製品をお選びいただきありがとうございます！当社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
