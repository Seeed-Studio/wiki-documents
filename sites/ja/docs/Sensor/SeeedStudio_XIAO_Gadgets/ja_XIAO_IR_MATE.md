---
title: XIAO IR Mate スマート IR リモートの使用開始
description: |
  Seeed Studio のスマート IR リモート。テレビやエアコンなどの従来の家電を Home Assistant スマートホームエコシステムに統合するよう設計されています。
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
createdAt: '2025-09-11'
updatedAt: '2026-02-04'
url: https://wiki.seeedstudio.com/ja/XIAO_IR_Mate_Smart_IR_Remote/
---

# XIAO IR Mate スマート IR リモートの使用開始（Home Assistant 向け）

**XIAO IR Mate スマート IR リモート**へようこそ！このデバイスは Home Assistant ユーザー向けに特別に設計されており、シームレスで効率的、統合されたスマート赤外線リモートコントロールソリューションの提供を目的としています。このガイドを通じて、デバイスのセットアップ、ホームネットワークへの接続、Home Assistant への統合、そして基本的な信号学習から高度なスマートエアコン制御まで、その全ての可能性を解き放つ方法を学びます。

<div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/6-109990586-XIAO-Smart-IR-Mate.jpg"
    alt="Product diagram"
    style={{
      maxWidth: '50%',
      height: 'auto',
      display: 'block',
      borderRadius: '8px'
    }}
  />
</div>

## はじめに

**XIAO IR Mate** は **Seeed Studio XIAO ESP32-C3** をベースとしたコンパクトなスマート赤外線モジュールです。赤外線送受信、タッチセンシング、振動フィードバック、ステータス表示を統合しています。Wi-Fi 経由で接続し、Home Assistant スマートホームエコシステムに完璧に統合できます。その中核的な使命は、赤外線リモコンを使用するすべての従来の家電（テレビ、エアコン、ファンなど）を「スマート」にし、HA を通じて制御して自動化を可能にすることです。

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '16px',
  alignItems: 'center'
}}>
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/1-109990586-XIAO-Smart-IR-Mate.jpg" alt="XIAO Smart IR Mate Product diagram 1" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/2-109990586-XIAO-Smart-IR-Mate.jpg" alt="XIAO Smart IR Mate Product diagram 2" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/3-109990586-XIAO-Smart-IR-Mate.jpg" alt="XIAO Smart IR Mate Product diagram 3" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/4-109990586-XIAO-Smart-IR-Mate.jpg" alt="XIAO Smart IR Mate Product diagram 4" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/5-109990586-XIAO-Smart-IR-Mate.jpg" alt="XIAO Smart IR Mate Product diagram 5" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/touch.jpg" alt="XIAO Smart IR Mate Product diagram 6" />
</div>

- **Home Assistant とのシームレスな統合**

ESPHome プラットフォーム上に構築された IR Mate は、Home Assistant によって自動的に発見され、簡単な自動化とスクリプト作成のためのシンプルなエンティティを提供します。

- **強力な IR 学習と送信**

360° カバレッジのための 3 つの高出力 IR エミッターと高感度レシーバーを装備。標準リモコンから最大 10 の IR コマンドの学習をサポート（プロジェクター、エアコン、タイマーの制御など）し、Home Assistant でワンタップ再生が可能です。

- **直感的な物理的インタラクションフィードバック**

振動モーターと LED インジケーターを搭載。短い振動でアクションを確認し、長い振動で学習モードを知らせ、LED でネットワークステータスを表示し、セットアップとトラブルシューティングを簡素化します。

- **ファナティックスマート AC コントローラーへのアップグレード可能**

カスタムファームウェアをフラッシュして IR Mate をスマート AC リモートに変換。Home Assistant で正確な温度、モード、ファン速度を直接設定でき、自動 IR コード生成により繰り返し学習を排除します。

- **コンパクトデザイン、USB-C 電源**

## ハードウェア概要

デバイスの基本コンポーネントを理解することで、より良く使用できるようになります：

- **メインコントローラー**: Seeed Studio XIAO ESP32-C3、強力なパフォーマンスと Wi-Fi 接続を提供。
- **電源供給**: オンボード Type-C ポート経由で電源供給（5V）。
- **赤外線エミッター**: 3 つの高出力赤外線 LED（ピン D1 使用）、死角のない 360° 信号送信を保証。
- **赤外線レシーバー**: 1 つの高精度赤外線レシーバー（ピン D2 使用）、他のリモコンからの信号学習用。
- **タッチセンサー**: デバイスにはタッチモジュールが統合されています（ピン D3 使用）。シングルタッチで短い振動（0.5 秒）が操作フィードバックとしてトリガーされます。
- **振動モーター**: 内蔵振動モーター（ピン D4 使用）が振動時間を変えて明確な触覚フィードバックを提供。
- **ステータスインジケーター LED**: LED ライト（ピン D5 使用）でデバイスの異なる動作状態を表示。
- **リセットボタン**: デバイス上の物理ボタン（ピン D0 に接続）、再起動または工場出荷時リセット用。

## 初回使用とネットワーク設定（工場出荷時ファームウェア）

デバイスを初めて入手した際は、以下の手順に従って初期セットアップを完了してください。

### ステップ 1: 電源投入

標準の USB Type-C ケーブルを使用してデバイスに電源を供給します。起動後、デバイスは設定待機状態に入り、**白色 LED が 1Hz 周波数で点滅**するのが見えます。

### ステップ 2: AP プロビジョニングモードに入る

ネットワークが設定されていない場合、デバイスは自動的に **XIAO IR Mate**（または見つかるものによっては **Seeed_ir**）という名前の Wi-Fi ホットスポット（AP）を作成します。

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/ap_mode_network_connect.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

### ステップ 3: ホットスポットに接続してネットワークを設定

1. スマートフォンまたはコンピューターの Wi-Fi 設定を開き、**XIAO IR Mate** という名前のネットワークを検索して接続します。

:::note
ホットスポットのデフォルトネットワークパスワードは '12345678' です。
:::

2. 接続が成功すると、通常デバイスは自動的に設定ページを開きます。開かない場合は、手動でブラウザを開いて **[http://192.168.4.1](http://192.168.4.1)** にアクセスしてください。
3. このページで Wi-Fi ネットワークのリストが表示されます。ご自宅の **2.4GHz Wi-Fi ネットワーク（SSID）** を選択し、正しいパスワードを入力してください。
4. "Connect" または "Save" をクリックします。デバイスは提供された Wi-Fi ネットワークへの接続を試行します。

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/ap_mode_network_connect_02.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

### ステップ 4: 接続成功

デバイスがご自宅の Wi-Fi に正常に接続すると、AP ホットスポットは自動的にオフになり、**ステータスインジケーターライトが点灯状態**になります。ネットワーク設定が完了しました。

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/ap_mode_network_connect_03.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

## Home Assistant 統合（工場出荷時ファームウェア）

デバイスファームウェアは **ESPHome** をベースとしており、Home Assistant への統合が非常に簡単です。

1. **自動発見**: Home Assistant ホストと XIAO IR Mate が同じローカルネットワークに接続されていることを確認してください。通常、HA は新しい ESPHome デバイスを自動的に発見します。**Settings \> Devices & Services** で「新しいデバイスが発見されました」という通知が表示されます。
2. **手動追加**: 自動的に発見されない場合は、右下の **[Add Integration]** ボタンをクリックし、**"ESPHome"** を検索して、デバイスのホスト名（例：**xiao-ir-mate**）または IP アドレスを入力して手動で追加できます。

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

3. **デバイスダッシュボード**: 追加が成功すると、XIAO IR Mate は HA でデバイスとして表示されます。そのダッシュボードには 10 種類の異なる赤外線信号を制御するための以下のエンティティが含まれます：

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/homeassistant_07.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

## コア機能詳細（工場出荷時ファームウェア）

デバイスを復元またはファームウェアを更新したい場合は、下のボタンからジャンプできます。XIAO Gadget ダイレクトフラッシュファームウェア専用のページを作成しました。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://gadgets.seeed.cc/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ファームウェアをフラッシュ</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### IR 信号学習

IR Mate に新しいリモコンコマンドを教える必要がある場合は、以下の手順に従ってください。工場出荷時ファームウェアのコアインターフェースには、**信号スロット選択リスト**と **Learn** および **Send** ボタンが含まれています。

1. Home Assistant デバイスダッシュボードで、まず **"Signal"** という名前のドロップダウン選択リストを見つけます。
2. ドロップダウンリストをクリックして、使用したい信号スロットを選択します。例えば **"signal_1"**。
3. 選択したら、**"Learn"** ボタンを見つけて、その横の **"PRESS"** をクリックします。
4. XIAO IR Mate は学習モードに入り、**連続的に振動**を開始し、ペアリングを開始できることを示します。
5. 元のリモコンを IR Mate の赤外線レシーバーウィンドウに向けて、学習したいボタンを短く押します。
6. IR Mate が信号を正常に受信して記録すると、**振動が停止**し、学習が成功したことを示します。
7. この時点で、**"Is Learned Signal"** という名前のステータスインジケーターが自動的に "ON" になり、ドロップダウンリストで現在選択されている信号スロット（つまり "signal_1"）に信号が保存されていることを示します。

### IR信号送信

信号が正常に学習されると、いつでもその信号を送信できます。

1. **"Signal"** ドロップダウンリストで、送信したい信号スロットが選択されていることを確認します（例：**"signal_1"**）。
2. **"Send"** ボタンを見つけて、その横の **"PRESS"** をクリックします。
3. XIAO IR Mateは、現在選択されているスロットに保存されている信号を、3つの赤外線エミッターを通じて即座に送信します。
4. **注意**：ドロップダウンリストで信号が学習されていないスロットを選択した場合、送信ボタンをクリックしても何も起こりません。

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/homeassistant_08.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

## 物理的な操作とステータス表示

HAによる制御に加えて、物理的な操作を通じてデバイスを理解し制御することもできます。

### ステータス表示灯（白色LED）

- **ゆっくり点滅（1Hz）**：デバイスがWi-Fiネットワークへの接続を待機しています。
- **点灯**：デバイスがWi-Fiネットワークに正常に接続され、正常に動作しています。

### 振動フィードバック

- **短い振動（100ms）**：デバイスに触れた時など、一般的な操作確認に使用されます。
- **長い振動（500ms）**：学習モードに入る時や工場出荷時設定にリセットする時など、重要なステータス警告に使用されます。

### RESETボタン

- **短押し（1秒以内）**：デバイスが再起動し、短い振動が伴います。デバイスが応答しなくなった場合に非常に有用です。
- **長押し（5秒以上）**：デバイスが**工場出荷時設定にリセット**されます。この操作により、**保存されたすべてのWi-Fi認証情報と学習された10個の赤外線信号がすべて消去**されます。この操作が実行されると、デバイスは長い振動でプロンプトを出します。完了後、デバイスは再起動し、初期の設定待機状態（LED点滅）に戻ります。

## 高度な使用法 - スマートエアコン制御

工場出荷時ファームウェアが提供する基本的な「記録-再生」モードは汎用的ですが、エアコンのような複数の状態（温度、モード、ファン速度など）を持つデバイスを制御する際には扱いにくい場合があります。より細かく、よりインテリジェントなエアコン制御を実現するために、専用のESPHomeファームウェアをフラッシュして、XIAO IR Mateを「IR信号リピーター」から真の「スマートエアコンコントローラー」に変身させることができます。

この章では、Greeエアコンを詳細な例として使用しますが、これが唯一の選択肢ではありません。ESPHomeの強力なエコシステムは多数のエアコンブランドをサポートしており、このガイドの概念に従い、設定コードに軽微な変更を加えることで、Midea、Daikin、Panasonicなどの他のブランドのスマート制御を簡単に実現できます。

### 主な利点

- **ステートフル制御**：単純な再生はもう必要ありません。HAで直接「24°C、冷房、自動ファン」を設定でき、デバイスは即座に正しい赤外線コマンドを生成して送信します。
- **より使いやすいUI**：HAで標準的なClimateカードとして表示され、操作が直感的になります。
- **スペースの節約**：各温度やモードごとに個別の信号を学習する必要がなく、1つの設定ですべてのエアコン機能を制御できます。

### 前提条件

1. **ESPHomeのインストール**：まだインストールしていない場合は、Home Assistant Add-on StoreからESPHomeアドオンをインストールして開始してください。
2. **エアコンブランドプロトコルの取得**：ESPHomeは多くのエアコンブランドプロトコル（Gree、Midea、Daikinなど）をサポートしています。正しいプロトコルを選択するために、お使いのエアコンのブランドを知る必要があります。

### カスタムファームウェアのフラッシュ

1. **新しいデバイス設定の作成**
      - HAでESPHomeインターフェースを開きます。
      - 右下の **"+ NEW DEVICE"** ボタンをクリックし、ポップアップウィンドウで **"Continue"** をクリックします。
      - デバイスに名前を付け（例：**xiao-ir-ac-controller**）、ボードタイプとして **Seeed Studio XIAO ESP32C3** を選択します。
2. **設定ファイルの編集**
      - 新しく作成されたデバイスカードの **EDIT** ボタンをクリックして、YAML設定エディターに入ります。
      - エディター内のすべてのデフォルトコンテンツを削除します。
      - 以下のコードを**完全にコピーして貼り付け**ます：

<Details>

<summary>seeed-ir-v2.yaml</summary>
```yaml
# ==== AUTO-SYNC START: xiao_smart_ir_mate/xiao_smart_ir_mate.yaml ====

substitutions:
  name: "xiao-smart-ir-mate"
  friendly_name: "XIAO Smart IR Mate"

esphome:
  name: "${name}"
  friendly_name: "${friendly_name}"
  name_add_mac_suffix: True
  project:
    name: "xiao.smart-ir-mate"
    version: "2.0"

esp32:
  board: seeed_xiao_esp32c3
  framework:
    type: arduino

globals:
  - id: is_wifi_connected
    type: bool
    initial_value: 'false'

  - id: reset_press_time
    type: uint32_t
    initial_value: '0'

  - id: touch_timer
    type: unsigned long
    restore_value: no
    initial_value: '0'

  # open or close the learning mode
  - id: is_learning_mode
    type: bool
    initial_value: 'false'

  # signal index , you can select the signal index on ESPHome
  - id: signal_select_index
    type: int
    restore_value: no
    initial_value: '0'

  # Read the signals stored in nvs and store them in this vector
  - id: send_data_vector
    type: std::vector<long int>
    restore_value: no

  - id: filter_size
    type: int
    initial_value: '10'

# Enable logging
logger:
  level: INFO

# Enable Home Assistant API
api:

ota:
  - platform: esphome
    password: "15afb09b5aba7b3d6a6ba01180c60df5"

wifi:
 # ssid: !secret wifi_ssid
 # password: !secret wifi_password
  on_connect:
    - globals.set:
        id: is_wifi_connected
        value: 'true'
    - light.turn_on: rgb_light
    - lambda: |-
        ESP_LOGI("ir", "IP address: %s", ::esphome::wifi::global_wifi_component->wifi_sta_ip_addresses()[0].str().c_str());

  on_disconnect:
    - globals.set:
        id: is_wifi_connected
        value: 'false'

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    # ssid: "XIAO Smart IR Mate"
    password: "12345678"

captive_portal:

# Custom components
external_components:
  - source:
      type: git        # git component
      url: https://github.com/Seeed-Studio/xiao-esphome-projects  # Path where the component is github
      ref: main   # Branch name
    components: [Flash_comp]   # Explicitly specify the components to import

# Component name
Flash_comp:
  id: signal_nvs  # Component id

remote_transmitter:
  id: my_transmitter
  pin: GPIO3
  carrier_duty_percent: 50%

remote_receiver:
  - id: rcvr
    pin:
      number: GPIO4
      inverted: true
    # Idle time, if the low level exceeds this time, it is considered as a new segment of the signal
    # That is "segmentation"
    idle: 65500us
    # Important, this parameter is used to segment the infrared signal
    # If a certain segment of the infrared signal is too long, it may be divided into several segments
    # For such a case, you must send the infrared signal strictly according to the corresponding timing, otherwise it will fail
    # If you don't want it to be segmented, you can reduce the frequency and adjust the idle parameter to make it receive as complete as possible
    clock_resolution: "500000"
    # Receive data: using raw data
    # In the infrared parsing of esphome, a signal (e.g., NEC) may be parsed into multiple signals (e.g., JVC, Pronto, etc.).
    # Here, we only retain the original signal and do not decode the protocol.
    on_raw:
      - switch.turn_off: vibration_switch
      - lambda: |-
          if (id(is_learning_mode)) {
            if (x.size() > id(filter_size)){
              ESP_LOGI("ir", "Saved signal index: %d", id(signal_select_index));
              id(signal_nvs).save_to_nvs(id(signal_select_index), x);
              id(send_data_vector).clear();
              id(send_data_vector) = id(signal_nvs).load_from_nvs<long int>(id(signal_select_index));
              id(is_learning_mode) = false;
              // Learned the signal, turn on the switch
              id(is_learned_signal_script).execute(true);
            }
          }

button:
  # Button in learning mode, you need to open learning mode first, and the signal will be saved
  - platform: template
    id: learn
    name: "Learn"
    on_press:
      - switch.turn_on: vibration_switch
      - lambda: |-
          id(is_learning_mode) = true;
          ESP_LOGI("ir", "Learning mode activated!");

  # Button in sending mode, according to your current index, read the signal from nvs and send it
  # Since it's using a script to send, it will always trigger a log print whether the sending is successful or not
  # That is, it will print Sending signal index
  # So when there is a log print but the control doesn't work, you need to write a separate receiving code to analyze the data
  # It is recommended to use the example program in the Arduino IRremote library.
  - platform: template
    id: transmit
    name: "Send"
    on_press:
      - lambda: |-
          if (id(send_data_vector).size() > 0) {
            id(send_raw).execute();
            ESP_LOGI("ir", "Sending signal index: %d", id(signal_select_index));
            ESP_LOGI("ir", "Sending signal size: %d", id(send_data_vector).size());
          } else {
            ESP_LOGI("ir", "Signal index %d not learned", id(signal_select_index));
          }

# Signal selection dropdown list
# Provides ten signals to choose from, and records the index
select:
  - platform: template
    name: signal_select
    id: signal_select
    options:
      - "Signal0"
      - "Signal1"
      - "Signal2"
      - "Signal3"
      - "Signal4"
      - "Signal5"
      - "Signal6"
      - "Signal7"
      - "Signal8"
      - "Signal9"
    initial_option: "Signal0"
    optimistic: true
    on_value:
      - lambda: |-
          id(signal_select_index) = i;
          ESP_LOGI("ir", "Current selected signal index: %d", i);
          id(send_data_vector).clear();
          id(send_data_vector) = id(signal_nvs).load_from_nvs<long int>(id(signal_select_index));
          if (id(send_data_vector).size() > 0) {
            id(is_learned_signal_script).execute(true);
          } else {
            id(is_learned_signal_script).execute(false);
          }

switch:
  - platform: output
    id: vibration_switch
    name: "Vibration device"
    output: vibration_output

  - platform: factory_reset
    id: factory_switch
    name: "Restart with Factory Default Settings"

  # Has the signal been learned?
  # If the signal has been learned, turn on this switch.
  # Otherwise, turn off this switch.
  - platform: template
    id: is_learned_signal_switch
    name: "Is Learned Signal?"
    optimistic: true

light:
  - platform: esp32_rmt_led_strip
    rgb_order: GRB
    pin: GPIO7 # D5
    num_leds: 1
    chipset: WS2812
    name: "WIFI RGB Light"
    id: rgb_light
    rmt_symbols: 48

binary_sensor:
  - platform: gpio
    id: touch_pad
    pin:
      number: GPIO5 # D3
      mode: INPUT_PULLDOWN
    on_state:
      then:
        - lambda: |-
            id(vibe).execute(100);
            id(touch_timer) = millis();
            if (id(check_touch_delay).is_running()) {
              id(check_touch_delay).stop();
              delay(10);
            }
            id(check_touch_delay).execute();

  - platform: gpio
    id: reset_button
    pin:
      number: GPIO9 # D9
      mode: INPUT_PULLUP
    filters:
      invert

    on_press:
      then:
        - lambda: |-
            id(reset_press_time) = millis();

    on_release:
      then:
        - lambda: |-
            uint32_t press_duration = millis() - id(reset_press_time);
            if (press_duration < 5000) {
              id(vibe).execute(100);
              ESP_LOGI("ir", "Restart Device");
              ESP.restart();
            } else {
              // clear all learned signals
              for (int i = 0; i < 10; i++) {
                id(signal_nvs).clear_signal_by_index(i);
              }
              ESP_LOGI("ir", "Restart with Factory Default Settings");
              id(vibe).execute(500);
              id(factory_switch).turn_on();
            }

output:
  - platform: gpio
    id: vibration_output
    pin: GPIO6 # D4

script:
  - id: vibe
    parameters:
      delay_ms: int
    then:
      - switch.turn_on: vibration_switch
      - delay: !lambda return delay_ms;
      - switch.turn_off: vibration_switch

  - id: check_touch_delay
    then:
      - delay: 300ms
      - lambda: |-
          unsigned long current_time = millis();
          if (current_time - id(touch_timer) >= 300) {
            ESP_LOGI("check click", "single click action");
            id(transmit).press();
          }

  # Send infrared signal
  # The saved signal is the original signal, we do not encode or decode, just send
  - id: send_raw
    then:
      - remote_transmitter.transmit_raw:
          code: !lambda return id(send_data_vector);
          carrier_frequency: 38000Hz
          repeat: 1

  # Used to indicate whether the signal can be sent
  # If there is a signal, turn on the switch
  # Otherwise, turn off the switch
  - id: is_learned_signal_script
    parameters:
      is_learned_signal: bool
    then:
      - lambda: |-
          if (is_learned_signal) {
            id(is_learned_signal_switch).turn_on();
          } else {
            id(is_learned_signal_switch).turn_off();
          }

interval:
  - id: blink_rgb
    interval: 500ms
    then:
      - lambda: |-
          if (!id(is_wifi_connected)) {
            static int state = 0;
            if (state == 1) {
              auto call = id(rgb_light).turn_on();
              call.set_rgb(1.0, 1.0, 1.0);
              call.set_transition_length(0);
              call.perform();
            } else {
              auto call = id(rgb_light).turn_off();
              call.set_transition_length(0);
              call.perform();
            }
            state = !state;
          }
# ==== AUTO-SYNC END ====
```

</Details>

3. **設定をカスタマイズする**
      - **Wi-Fi**: `!secret` ファイルを使用しない場合は、`wifi:` セクションのコメントを外し、`Your_WiFi_SSID` と `Your_WiFi_Password` を自分の Wi-Fi 情報に置き換えてください。
      - **正しい AC プロトコルを選択する**: これが最も重要なステップです！この例では `platform: gree` を使用しています。お使いのエアコンが Gree でない場合は、お使いのブランドのプラットフォームに置き換えてください。サポートされているブランドを見つける方法は？[ESPHome Climate Components](https://esphome.io/components/climate/index.html) ページをご覧ください。サポートされているすべてのブランドとそのプラットフォーム名（例：`daikin`、`midea`、`panasonic_ac` など）が記載されています。
          - 対応するプラットフォームを選択した後、そのプラットフォームのドキュメントに従って `model` やサポートされているモードなどのパラメータを微調整する必要がある場合もあります。
4. **コンパイルとフラッシュ**
      - YAML 設定を保存します。
      - XIAO IR Mate を USB ケーブルで HA を実行しているコンピュータに接続します。
      - デバイスカードの **INSTALL** ボタンをクリックします。
      - **"Plug into this computer"** オプションを選択します。
      - ESPHome がファームウェアをコンパイルし、ブラウザを通じてデバイスにフラッシュします。画面の指示に従ってプロセスを完了してください。
      - フラッシュが成功すると、デバイスは自動的に再起動し、設定した Wi-Fi に接続します。

### Home Assistant での使用方法

フラッシュと再起動後、デバイスは Home Assistant に新しい Climate エンティティ（例：`climate.gree_air_conditioner`）として表示されます。ダッシュボードに「Thermostat Card」を追加することで、完全に機能するエアコン制御パネルを取得でき、ネイティブなスマートエアコンのように温度、モード、ファン速度、スイングを自由に調整できます！

### さらなる展望：発想を広げる

おめでとうございます！これで XIAO IR Mate の 2 つの主要な用途をマスターしました：1 つは箱から出してすぐ使える「汎用リモコン学習」機能、もう 1 つは精密なエアコン制御のための「プロフェッショナル気候コントローラー」モードです。

しかし、ここで止まらないでください。これはほんの始まりに過ぎません！XIAO IR Mate の本当の楽しさは、その驚くべき柔軟性にあります。これをあなたが定義する「創造的な構築ブロック」と考えてください。想像を超えるものを構築するために使用できます。以下は、あなたにインスピレーションを与える 2 つの発想を広げるアイデアです：

#### アイデア 1：古いリモコンを汎用シーンスイッチとして復活させる

**応用シナリオ**

周りを見回してください。使わなくなった古いリモコンがたくさん転がっていませんか？古いテレビ、DVD、ステレオのリモコンで、たくさんのボタンがあり、手触りも良いのに、今は引き出しでほこりをかぶっているだけ。これらのリモコンのボタンを使って、スマートライト、ロボット掃除機、さらには複雑な「おかえりなさい」シーンを制御できたらクールだと思いませんか？

**仕組み**

このアイデアの核心は、XIAO IR Mate を「送信機」から「リスナー」に変換することです。他のデバイスを積極的に制御するのではなく、古いリモコンからの信号を静かに聞き取り、Home Assistant に「信号を聞きました、どうするか決めてください！」と伝えます。

- **実装手順**

  1. **「リスナー」ファームウェアを設定する：** ESPHome ファームウェアで、核となる設定は `remote_receiver` コンポーネントです。電源投入後のデバイスの唯一の仕事は、IR 信号を「聞き取る」ことです。

  2. **各ボタンの「秘密コード」を特定する：** 古いリモコンを手に取り、デバイスに向けて任意のボタンを押します。ESPHome ログで、そのボタンの固有の IR コード（`RAW` データの文字列や `NEC` プロトコルコードなど）が表示されます。この「秘密コード」をメモしてください。

  3. **HA でオートメーションルールを作成する：** Home Assistant で、トリガー条件を「XIAO IR Mate が特定の IR 秘密コードを検出したとき」とするオートメーションを設定します。

  4. **アクションを定義する：** ルールのアクションは何でも構いません！例えば：

     - **「テレビリモコンの音量+ボタン」**を検出したとき -> **ロボット掃除機を開始**して清掃を始める。

     - **「Apple Remote の再生ボタン」**を検出したとき -> **バスルームのライトを点灯**する。

     - **「DVD リモコンの赤ボタン」**を検出したとき -> 「外出モード」シーンを実行する。

- **このアプローチの利点**

  - **アップサイクリングと環境に優しい：** 使わなくなったハードウェアに新しい命を与え、電子廃棄物を再び活用することで、お金を節約し、環境にも良いです。

  - **本物の触覚ボタン体験：** タッチスクリーンと比較して、数十の異なる、しっかりとした感触のボタンを持つ物理的なリモコンは、多くのシナリオでより直接的で満足のいくものです。

  - **高い妻受容度（WAF）：** スマホアプリやスマートスピーカーに慣れていない家族（高齢者や子供など）にとって、「このボタンを押してライトを点ける」と伝えることは、最も直感的で学習しやすいインタラクションです。

  - **充電不要の「スマートスイッチ」：** 従来のリモコンの電池は 1〜2 年持つことが多く、頻繁な充電が必要な多くのスマートガジェットよりもはるかに便利です。

#### **アイデア 2：汎用「IoT マジックボタン」を作成する**

**核となるコンセプト**

デバイスのタッチボタンは本当に IR 制御だけのためのものでしょうか？もちろん違います！これを家の中の**何でも**制御するマジックボタンに変えることができます。鍵は「分離」することです—「ボタンを押す」という物理的なアクションと「実際に何が起こるか」というスマートアクションを完全に分離することです。

- **実装手順**

  1. **ボタンを単なる「レポーター」にする：** ファームウェアで、タッチボタン（シングルタップ、ダブルタップ、長押し）を特定のタスクを実行するのではなく、Home Assistant に「イベント通知」を送信するだけに設定します。例えば、ダブルタップで、HA に「やあ！ダブルタップされました！」と報告するだけです。

  2. **HA を「司令官」にする：** Home Assistant で、ボタンからのこれらの様々な「報告」（イベント）を特に聞き取るオートメーションを作成します。

  3. **すべてを接続し、何でもする：** HA が報告を受信すると、家の中の任意のデバイスに行動を命令できます！

     - **「シングルタップ」**報告を受信 -> 家の中のすべての **Zigbee ライト**のオン/オフを切り替える。

     - **「ダブルタップ」**報告を受信 -> **ロボット掃除機**に清掃開始を命令する。

     - **「長押し」**報告を受信 -> 「映画モード」シーンを実行し、カーテンを閉め、ライトを暗くし、プロジェクターとサウンドシステムを起動する。

- **このアプローチの利点**

  - **境界を破り、無限の可能性：** タッチボタンはもはや「IR リモコン」の一部ではなく、スマートホーム全体の物理的なスイッチとなり、HA に接続された任意のデバイスを制御できます。

  - **柔軟に定義し、気まぐれに変更：** 今日はダブルタップで掃除機を開始するが、明日は音楽を再生したい？HA インターフェースでオートメーションを編集するだけで、ファームウェアに触れる必要は全くありません。

  - **最も直感的なインタラクション：** 家族に物事を制御する最もシンプルな方法を提供します。触覚フィードバック付きの物理的なボタンは、スマホアプリを開くよりもはるかに便利でエレガントなことが多いです。

要するに、XIAO IR Mate を単なる IR ツールとして見ないでください。これを Wi-Fi に接続された小さなロボットと考えてください。触覚と「声」（IR エミッター）を持っています。それができることは、あなたの想像力によってのみ制限されます！

## よくある質問（FAQ）

> **Q: スマホで XIAO IR Mate のホットスポットが見つからないのはなぜですか？**
> **A:** デバイスが Type-C で適切に電源供給されていることを確認してください。白色 LED が点滅しているかチェックしてください。ライトが消えている場合は、ケーブルまたは電源を変更してみてください。デバイスが以前にネットワークで正常に設定されている場合、ネットワーク接続が失敗するか、RESET ボタンを長押しして工場出荷時設定にリセットされない限り、AP ホットスポットを再作成することはありません。

> **Q: IR 学習が失敗する場合はどうすればよいですか？（工場出荷時ファームウェア）**
> **A:** 元のリモコンの電池が十分にあることを確認し、IR Mate の受信機（通常は黒い半透明のコンポーネント）にできるだけ近づけて保持してください。また、強い光の下や他の赤外線干渉源の近くで学習プロセスを実行することは避けてください。

> **Q: デバイスが HA でオフラインと表示されますか？**
> **A:** 家の Wi-Fi が正常に動作していること、IR Mate が Wi-Fi 信号範囲内にあることを確認してください。RESET ボタンを短押ししてデバイスを再起動してみることができます。

> **Q: カスタムファームウェアをフラッシュした後、工場出荷時ファームウェアを復元するにはどうすればよいですか？**
> **A:** 工場出荷時ファームウェアの `.bin` ファイルまたはその ESPHome YAML ソースファイルを取得し、ESPHome を介して再度フラッシュしてカスタムファームウェアを上書きする必要があります。

> **Q: 学習した信号（工場出荷時ファームウェア）または AC 制御（高度なファームウェア）をオートメーションで使用するにはどうすればよいですか？**
> **A:** HA のオートメーションまたはスクリプトエディターで、「Call service」を選択してください。

## リソース

- **[ZIP]** [ハードウェア](https://files.seeedstudio.com/wiki/XIAO_IR_MATE/XIAO_IR_REMOTE_hardware.zip)
- **[ZIP]** [ソフトウェア](https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/xiao_smart_ir_mate)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
