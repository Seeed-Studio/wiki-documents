---
description: Grove オフライン音声認識センサーの使い方ガイド。
title: Grove オフライン音声認識センサー
keywords:
- ジェスチャー
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/Grove-Offline-Voice-Recognition
last_update:
  date: 05/15/2025
  author: Allen
---


# Grove オフライン音声認識センサー

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/headPic.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Offline-Voice-Recognition-Module-p-5861.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>


## 概要

Grove - オフライン音声認識モジュールは、VC-02モジュールをベースにした低消費電力の純オフライン音声認識に適しています。このモジュールには最大150個の事前プログラム済みコマンドがあり、スマート家電を制御するために使用できます。認識時間は100ms未満で、18mm * 17mmというコンパクトなサイズが特徴です。このモジュールはUARTペリフェラルを介して通信し、認識された各コマンドに固有の16進コードを提供します。このモジュールに必要なのは5Vだけで、すぐにコマンドを認識できます！

### 特徴

- **150個の音声コマンドをサポート** 
- **低消費電力**
- **ESD保護付き電源レール**
- **コマンド用LEDインジケーター**
- **Grove UARTインターフェース**

### 仕様

<table align="center">
  <tbody>
    <tr>
    <td><h4>パラメータ</h4></td>
    <td><h4>範囲/値</h4></td>
    </tr>
    <tr>
    <td>入力電圧</td>
    <td>5V/3.3V</td>
    </tr>
    <tr>
    <td>デフォルトボーレート</td>
    <td>115200</td>
    </tr>
    <tr>
    <td>デフォルト出力</td>
    <td>検出されたコマンドの16進値</td>
    </tr>
  </tbody></table>


## はじめに

### デモ1: Grove オフライン音声認識モジュールと Arduino IDE

#### ハードウェアのセットアップ

以下を準備してください：

- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html)
- [Grove Base for XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)
- [Grove - オフライン音声認識モジュール](/ja/Grove-Offline-Voice-Recognition)
- [スピーカー](https://www.seeedstudio.com/Mono-Enclosed-Speaker-2W-6-Ohm-p-2832.html)


:::tip

一部のUSBケーブルは電力供給のみでデータ転送ができません。USBケーブルを持っていない場合や、使用中のUSBケーブルがデータ転送可能か不明な場合は、[Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)を確認してください。

:::

**ステップ1.** USB Type-Cケーブルを使用してXIAO RP2040をコンピュータに接続します。

**ステップ2.** XIAO RP2040をXIAO拡張ボードに接続します。

**ステップ3.** Groveケーブルを使用して、XIAO拡張ボードのUARTポートにオフライン音声認識モジュールを接続します。

**ステップ4.** オフライン音声認識モジュールをスピーカーに接続します。

以下は接続例の画像です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/connection.png" style={{width:1000, height:'auto'}}/></div>

#### **ソフトウェアのセットアップ**

**ステップ1.** オペレーティングシステムに応じて、最新バージョンのArduino IDEをダウンロードしてインストールします。

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/software"target="_blank"><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/Download_IDE.png" /></a></p>

**ステップ2.** 開発ボードモデルを選択し、Arduino IDEに追加します。後の手順で**XIAO RP2040**を使用する場合は、[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-Arduino/#software-setup)を参照して追加を完了してください。

:::tip
他の種類のXIAOを使用したい場合は、[こちら](https://wiki.seeedstudio.com/ja/xiao_topic_page/)を参照してください。
:::

**ステップ3.** Arduinoコードライブラリをインストールします。

まず、[GitHub](https://github.com/Seeed-Projects/SeeedStudio-Grove_offline_voice_recognition_sensor)からコードベースを取得し、ローカルコンピュータにダウンロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/1.png" style={{width:1000, height:'auto'}}/></div>

ZIPライブラリをダウンロードしたら、Arduino IDEを開き、**スケッチ > ライブラリをインクルード > .ZIPライブラリを追加**をクリックします。先ほどダウンロードしたZIPファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウに**ライブラリがライブラリに追加されました**と表示されます。これでライブラリのインストールが成功しました。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/2.png" style={{width:1000, height:'auto'}}/></div>


#### オフライン音声認識デモ

**ステップ1.** Arduinoでこのファイルを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/3.png" style={{width:1000, height:'auto'}}/></div>

以下のようなコードが表示されます。

```cpp
#include "GroveOfflineSensor.h"
#include <SoftwareSerial.h>
#define RX_VC02 D7
#define TX_VC02 D6

SoftwareSerial groveSerial(RX_VC02, TX_VC02); // RX, TX

void setup() {
  Serial.begin(115200);
  // シリアルポートが接続されるのを待つ。ネイティブUSBポートのみ必要。このポートはGroveセンサーが送信するデータを表示するためのもの
  while (!Serial); 
  // 通信に合わせてボーレートを設定
  groveSerial.begin(115200); 
}

void loop() {
  // 音声認識センサーから音声を検出
   uint8_t *voiceData = detectVoiceFromGroveSensor(&groveSerial);

  // 音声をコマンド文字列に変換
  if(voiceData != NULL){
    String response = getCommandInString(voiceData);
    Serial.println(response);
  }
  delay(1000);
}

```

**ステップ2.** **アップロード**ボタンをクリックしてコードをボードにアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/5.png" style={{width:1000, height:'auto'}}/></div>

**ステップ 3.** センサーにウェイクワード「hello pudding」と話しかけると、スピーカーから音声フィードバックが聞こえ、Arduino IDEのシリアルモニターから文字フィードバックが表示されます。詳細な手順については、この記事の下部にある**Resources**セクションをご参照ください。

<iframe width="100%" height="460" src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/offlineVoiceRecognition.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### デモ2: Grove オフライン音声認識をESPHomeとHome Assistantで使用する

#### ハードウェアのセットアップ

以下のものを準備してください:
- **Home Assistantがインストールされたデバイス**

Home Assistantを始める最初のステップは、デバイスにインストールすることです。ステップバイステップのガイドは[こちら](https://www.home-assistant.io/installation/)をご参照ください。

- [XIAO-ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)
- [XIAO用Groveベース](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)
- [Grove - オフライン音声認識モジュール](https://www.seeedstudio.com/Grove-Offline-Voice-Recognition-Module-p-5861.html)

:::tip

一部のUSBケーブルは電力供給のみでデータ転送ができません。USBケーブルを持っていない場合や、USBケーブルがデータ転送可能かどうかわからない場合は、[Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)をご確認ください。

:::

**ステップ 1.** ハードウェアの準備

XIAO ESP32S3をUSB Type-Cケーブルを使用してコンピュータに接続します。  
XIAO ESP32S3をXIAO拡張ボードに接続します。  
XIAO拡張ボードをGroveケーブルを使用してUARTポート経由でオフライン音声認識モジュールに接続します。  
オフライン音声認識モジュールをスピーカーに接続します。  
XIAO ESP32S3にアンテナを接続します。

以下は接続図です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/29.jpg" style={{width:700, height:'auto'}}/></div>

**ステップ 2.** スマートホームの作成  
ブラウザのアドレスバーにHome Assistantデバイスのアドレスを入力し、Home Assistantアカウントを作成します。ステップバイステップのガイドは[こちら](https://www.home-assistant.io/getting-started/onboarding/)をご参照ください。

**ステップ 3.** Home AssistantにESPHomeをインストール  
[こちら](https://wiki.seeedstudio.com/ja/Connect-Grove-to-Home-Assistant-ESPHome/#install-esphome-on-home-assistant)を参照して、Home AssistantにESPHomeを迅速にセットアップできます。

#### ソフトウェア

XIAO ESP32S3をESPHomeに追加する

- **+ NEW DEVICE**をクリックします。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/6.png" style={{width:1000, height:'auto'}}/></div>

- **CONTINUE**をクリックします。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/7.png" style={{width:500, height:'auto'}}/></div>

- デバイスの**名前**を入力し、WiFiの認証情報（**ネットワーク名**と**パスワード**）を入力します。その後、**NEXT**をクリックします。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/8.png" style={{width:500, height:'auto'}}/></div>

- **ESP32-S3**を選択し、**NEXT**をクリックします。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/9.png" style={{width:500, height:'auto'}}/></div>

- **Install**をクリックし、**Manual download**を選択します。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/11.png" style={{width:800, height:'auto'}}/></div>

- ダウンロードが成功した後、ESPHome Webを開き、**Modern format**を選択します。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/13.png" style={{width:1000, height:'auto'}}/></div>

- XIAO ESP32S3のポートを接続し、取得したbinファイルをインストールします。これにより、必要なボードパッケージがすべてダウンロードされ、ESPHomeファームウェアがXIAO ESP32S3にフラッシュされます。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/16.png" style={{width:500, height:'auto'}}/></div>

- LOGSを開き、フラッシュが成功した場合、以下の出力が表示されます。ESPHomeページに戻り、ボードのステータスがONLINEと表示されていれば、WiFiへの接続が成功したことを意味します。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/28.png" style={{width:1000, height:'auto'}}/></div>

:::tip
"[wifi_esp32:482][arduino_events]: Event: Disconnected …… reason='Auth Expired'"という警告が表示された場合は、ESP32デバイスがWiFiネットワークの範囲内にあることを確認してください。信号強度が弱いと接続問題が発生する可能性があります。アンテナを[Rod Antenna](https://www.seeedstudio.com/2-4GHz-2-81dBi-Antenna-for-XIAO-ESP32C3-p-5475.html)に交換することを検討してください。
:::

これでXIAO ESP32C3をコンピュータから切断し、USBケーブルで電源を供給するだけで済みます。今後、XIAO ESP32C3にファームウェアをフラッシュする場合は、USBケーブルを使用してX86ボードに接続することなく、OTAで簡単に行うことができます。

- 3つのドットをクリックし、**Install**を選択します。**Wirelessly**を選択すると、変更がボードにワイヤレスでプッシュされます。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/25.png" style={{width:700, height:'auto'}}/></div>

- 設定に移動し、**Devices & Services**を選択します。ESPHomeが検出された統合として表示されます。**CONFIGURE**をクリックします。暗号化キーを求められた場合は、ESPHomeページに戻り、APIキーをコピーして入力してください。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/24.png" style={{width:600, height:'auto'}}/></div>

#### オフライン音声認識

**ステップ1.** 以前に作成したoffline-voice-recognition.yamlファイルの**末尾**に以下を追加し、OTAでXIAO ESP32S3にプッシュします。

<details>

<summary>完全なコードをプレビューするにはここをクリック</summary>

```yaml
uart:
  id: uart_bus
  tx_pin: GPIO43
  rx_pin: GPIO44
  baud_rate: 115200

globals:
  - id: hex_code
    type: uint8_t
    restore_value: no
    initial_value: '0'

interval:
  - interval: 1s
    then:
      - lambda: |-
          while (id(uart_bus).available() >= 5) {
            uint8_t receivedData[5];
            for (int i = 0; i < 5; i++) {
              id(uart_bus).read_byte(&receivedData[i]);
            }
            id(hex_code) = receivedData[1];
            ESP_LOGD("main", "Hex code: %02X", id(hex_code));
          }

sensor:
  - platform: template
    name: "Received Hex Code"
    lambda: |-
      return id(hex_code);
    update_interval: 5s
    unit_of_measurement: ""
    accuracy_decimals: 0
    on_value:
      then:
        - lambda: |-
            auto call_acwind = id(acwind).make_call();
            auto call_actemp = id(actemp).make_call();
              switch (id(hex_code)) {
                case 0x03:
                  id(ac).publish_state(true);
                  break;
                case 0x04:
                  id(ac).publish_state(false);
                  break;
                case 0x05:
                  id(acmode).publish_state("automatic mode");
                  break;
                case 0x06:
                  id(acmode).publish_state("cold mode");
                  break;
                case 0x07:
                  id(acmode).publish_state("heat mode");
                  break;
                case 0x08:
                  id(acmode).publish_state("dry mode");
                  break;
                case 0x09:
                  id(acmode).publish_state("fan mode");
                  break;
                case 0x0A:
                  id(acmode).publish_state("sleeping mode");
                  break;
                case 0x0B:
                  id(acwind).publish_state("automatic fan");
                  break;
                case 0x0C:
                  id(acwind).publish_state("low fan");
                  break;
                case 0x0D:
                  id(acwind).publish_state("medium fan");
                  break;
                case 0x0E:
                  id(acwind).publish_state("high fan");
                  break;
                case 0x0F:
                  call_acwind.select_next(false);
                  call_acwind.perform();
                  break;
                case 0x10:
                  call_acwind.select_previous(false);
                  call_acwind.perform();
                  break;
                case 0x11:
                  id(actemp).publish_state("sixteen centigrade");
                  break;
                case 0x12:
                  id(actemp).publish_state("seventeen centigrade");
                  break;
                case 0x13:
                  id(actemp).publish_state("eighteen centigrade");
                  break;
                case 0x14:
                  id(actemp).publish_state("nineteen centigrade");
                  break;
                case 0x15:
                  id(actemp).publish_state("twenty centigrade");
                  break;
                case 0x16:
                  id(actemp).publish_state("twenty one centigrade");
                  break;
                case 0x17:
                  id(actemp).publish_state("twenty two centigrade");
                  break;
                case 0x18:
                  id(actemp).publish_state("twenty three centigrade");
                  break;
                case 0x19:
                  id(actemp).publish_state("twenty four centigrade");
                  break;
                case 0x1A:
                  id(actemp).publish_state("twenty five centigrade");
                  break;
                case 0x1B:
                  id(actemp).publish_state("twenty six centigrade");
                  break;
                case 0x1C:
                  id(actemp).publish_state("twenty seven centigrade");
                  break;
                case 0x1D:
                  id(actemp).publish_state("twenty eight centigrade");
                  break;
                case 0x1E:
                  id(actemp).publish_state("twenty nine centigrade");
                  break;
                case 0x1F:
                  id(actemp).publish_state("thirty centigrade");
                  break;
                case 0x20:
                  call_actemp.select_next(false);
                  call_actemp.perform();
                  break;
                case 0x21:
                  call_actemp.select_previous(false);
                  call_actemp.perform();
                  break;
                case 0x22:
                  id(fan).publish_state(true);
                  break;
                case 0x23:
                  id(fan).publish_state(false);
                  break;
                case 0x24:
                  id(acswept).publish_state("air swing up and down");
                  break;
                case 0x25:
                  id(acswept).publish_state("air swing left and right");
                  break;
                case 0x26:
                  id(acmode).publish_state("automatic mode");
                  id(acwind).publish_state("automatic fan");
                  id(actemp).publish_state("twenty six centigrade");
                  id(fan).publish_state(false);
                  break;
                case 0x27:
                  id(light).publish_state(true);
                  break;
                case 0x28:
                  id(light).publish_state(false);
                  break;
                case 0x29:
                  id(cold_light).publish_state(true);
                  break;
                case 0x2A:
                  id(cold_light).publish_state(false);
                  break;
                case 0x2B:
                  id(warm_light).publish_state(true);
                  break;
                case 0x2C:
                  id(warm_light).publish_state(false);
                  break;
                default:
                  ESP_LOGW("main", "Unknown hex code: %02X", id(hex_code));
                  break;
              }

switch:
  - platform: template
    name: "air conditioner"
    id: ac
    optimistic: True
  - platform: template
    name: "fan"
    id: fan
    optimistic: True
  - platform: template
    name: "light"
    id: light
    optimistic: True
  - platform: template
    name: "cold light"
    id: cold_light
    optimistic: True
  - platform: template
    name: "warm light"
    id: warm_light
    optimistic: True
  
select:

  - platform: template
    name: Air conditioner mode
    id: acmode
    optimistic: True
    options:
      - "automatic mode"
      - "cold mode"
      - "heat mode"
      - "dry mode"
      - "fan mode"
      - "sleeping mode"
    initial_option: "automatic mode"  

  - platform: template
    name: Fan mode 
    id: acwind
    optimistic: True
    options:
      - "automatic fan"
      - "low fan"
      - "medium fan"
      - "high fan"
    initial_option: "automatic fan"

  - platform: template
    name: Temperature
    id: actemp
    optimistic: True
    options:
      - "sixteen centigrade"
      - "seventeen centigrade"
      - "eighteen centigrade"
      - "nineteen centigrade"
      - "twenty centigrade"
      - "twenty one centigrade"
      - "twenty two centigrade"
      - "twenty three centigrade"
      - "twenty four centigrade"
      - "twenty five centigrade"
      - "twenty six centigrade"
      - "twenty seven centigrade"
      - "twenty eight centigrade"
      - "twenty nine centigrade"
      - "thirty centigrade"
    initial_option: "twenty six centigrade"

  - platform: template
    name: Fan direction
    id: acswept
    optimistic: True
    options: 
      - "air swing up and down"
      - "air swing left and right"
```

</details>

:::note
新しいデバイスを作成する際に自動生成される yaml ファイルは、異なる構成やデバイスタイプによって異なります。そのため、**ファイルの冒頭部分を変更しないことを推奨**し、コードを末尾に追加するだけにしてください。
:::

- **Uart Bus**についての詳細は[こちら](https://esphome.io/components/uart)をご覧ください。
- **Switch Component**についての詳細は[こちら](https://esphome.io/components/switch/)をご覧ください。
- **Select Component**についての詳細は[こちら](https://esphome.io/components/select/)をご覧ください。

**ステップ2.** Dashboardでの可視化

- デバイスに戻り、オフライン音声認識を選択します。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/23.png" style={{width:1000, height:'auto'}}/></div>

- **ADD TO DASHBOARD**→**NEXT**→**ADD TO DASHBOARD**をクリックし、**OVERVIEW**に戻ります。これで、Home Assistant のダッシュボードは以下のようになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/27.png" style={{width:600, height:'auto'}}/></div>

**ステップ3.** センサーに向かってウェイクワード「hello pudding」を話しかけると、音声フィードバックが聞こえ、Home Assistant 上でアクションフィードバックが表示されます。詳細な手順については、この記事の下部にある**Resources**をご覧ください。
<iframe width="100%" height="460" src="https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/1.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

## リソース

- **[PDF]** [オフライン音声コマンド](https://files.seeedstudio.com/wiki/Offline_Voice_Recognition_Img/VoiceCommends.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>