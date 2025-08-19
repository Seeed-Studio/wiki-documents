---
description: Seeed Studio XIAO ESP32C6 の使い方を始める。
title: Seeed Studio XIAO ESP32C6 の使い方を始める
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113991254-seeedxiao-esp32c6-font.jpg
keywords:
- XIAO
- ESP32C6
- Seeeduino
slug: /ja/xiao_esp32c6_getting_started
toc_max_heading_level: 4
sidebar_position: 1
last_update:
  date: 05/15/2025
  author: Spencer
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio XIAO ESP32C6 の使い方を始める

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32C6</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## 概要

Seeed Studio XIAO ESP32C6 は、高度に統合された [ESP32-C6 SoC](https://www.espressif.com/en/products/socs/esp32-c6) を搭載しており、**2つの32ビットRISC-Vプロセッサ**を備えています。高性能プロセッサは**最大160 MHz**で動作し、低消費電力プロセッサは最大20 MHzで動作します。チップには**512KB SRAM と 4 MB Flash**が搭載されており、プログラミングスペースが広がり、IoT制御シナリオにさらなる可能性をもたらします。

XIAO ESP32C6 は、**強化されたワイヤレス接続性により Matter ネイティブ**です。ワイヤレススタックは**2.4 GHz WiFi 6、Bluetooth® 5.3、Zigbee、および Thread (802.15.4)** をサポートしています。Thread に対応した初の XIAO メンバーとして、Matter準拠のプロジェクトを構築するのに最適であり、スマートホームにおける相互運用性を実現します。

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

### 仕様

<table class="sp-table-c6">
    <thead>
        <tr>
            <th colspan="2">製品</th>
            <th><Highlight color="#92c52a">XIAO ESP32C6</Highlight></th>
            <th>XIAO ESP32C3</th>
            <th>XIAO ESP32S3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th colspan="2" rowspan="2">プロセッサ</th>
            <td>Espressif ESP32-C6 SoC</td>
            <td>Espressif ESP32-C3 SoC</td>
            <td>Espressif ESP32-S3R8</td>
        </tr>
        <tr>
            <td>2つの32ビットRISC-Vプロセッサを搭載。高性能プロセッサは最大160 MHzで動作し、低消費電力プロセッサは最大20 MHzで動作</td>
            <td>RISC-Vシングルコア32ビットチッププロセッサ。4段階のパイプラインで最大160 MHzで動作</td>
            <td>Xtensa LX7デュアルコア32ビットプロセッサ。最大240 MHzで動作</td>
        </tr>
        <tr>
            <th colspan="2" rowspan="3">ワイヤレス</th>
            <td>完全な2.4GHz <strong>Wi-Fi 6</strong> サブシステム</td>
            <td colspan="2">完全な2.4GHz Wi-Fi サブシステム</td>
        </tr>
        <tr>
            <td>BLE: Bluetooth 5.0, Bluetooth Mesh</td>
            <td>BLE: Bluetooth 5.0, Bluetooth Mesh</td>
            <td>BLE: Bluetooth 5.0, Bluetooth Mesh</td>
        </tr>
        <tr>
            <td><strong>Zigbee, Thread, IEEE 802.15.4</strong></td>
            <td>/</td>
            <td>/</td>
        </tr>
        <tr>
            <th colspan="2" rowspan="1">オンチップメモリ</th>
            <td>512KB SRAM &amp; 4MB Flash</td>
            <td>400KB SRAM &amp; 4MB Flash</td>
            <td>8M PSRAM &amp; 8MB Flash</td>
        </tr>
        <tr>
            <th colspan="2" rowspan="2">インターフェース</th>
            <td>1x UART, 1x LP_UART, 1x IIC, 1x LP_IIC, 1x SPI, 11x GPIO(PWM), 7x ADC, 1x SDIO 2.0 Slave</td>
            <td>1x UART, 1x IIC, 1x SPI, 11x GPIO(PWM), 4x ADC</td>
            <td>1x UART, 1x IIC, 1x IIS, 1x SPI, 11x GPIO(PWM), 9x ADC, 1x ユーザーLED, 1x 充電LED</td>
        </tr>
        <tr>
            <td colspan="3">1x リセットボタン, 1x ブートボタン</td>
        </tr>
        <tr>
            <th colspan="2" rowspan="1">寸法</th>
            <td colspan="3">21 x 17.8 mm</td>
        </tr>
        <tr>
            <th colspan="1" rowspan="3">電源</th>
            <th colspan="1">入力電圧</th>
            <td colspan="3">Type-C: 5V<br></br>BAT: 4.2V</td>
        </tr>
        <tr>
            <th>回路動作電圧 (動作準備)</th>
            <td colspan="2">USB: 5V@9mA<br></br>BAT: 3.8V@9mA</td>
            <td>Type-C: 5V@19mA<br></br>BAT: 3.8V@22mA</td>
        </tr>
        <tr>
            <th>充電バッテリー電流</th>
            <td>100mA</td>
            <td>350mA</td>
            <td>100mA</td>
        </tr>
        <tr>
            <th colspan="1" rowspan="3">消費電力モデル (供給電力: 3.8V)</th>
            <th>モデムスリープモデル</th>
            <td>~ 30 mA</td>
            <td>~ 24 mA</td>
            <td>~ 25 mA</td>
        </tr>
        <tr>
            <th>ライトスリープモデル</th>
            <td>~ 2.5 mA</td>
            <td>~ 3 mA</td>
            <td>~ 2 mA</td>
        </tr>
        <tr>
            <th>ディープスリープモデル</th>
            <td>~ 15 μA</td>
            <td>~ 44 μA</td>
            <td>~ 14 μA</td>
        </tr>
        <tr>
            <th colspan="2">動作温度</th>
            <td colspan="2">-40°C ~ 85°C</td>
            <td>-40°C ~ 65°C</td>
        </tr>
    </tbody>
</table>

### 特徴

- **強化された接続性**: ***2.4*** GHz Wi-Fi 6 (802.11ax)、Bluetooth 5(LE)、および IEEE 802.15.4 ラジオ接続を統合し、**Thread** および **Zigbee** プロトコルの適用を可能にします。
- **Matter ネイティブ**: Matter準拠のスマートホームプロジェクトの構築をサポートし、異なるスマートデバイス間の相互運用性を保証します。
- **チップ上でのセキュリティ暗号化**: ESP32-C6 を利用してセキュアブート、暗号化、および Trusted Execution Environment (TEE) 機能を提供し、スマートホームプロジェクトのセキュリティを強化します。
- **優れたRF性能**: 最大 *80m* の BLE/Wi-Fi 範囲を持つオンボードアンテナを備え、外部 UFL アンテナを接続するインターフェースを提供し、信頼性の高い接続を保証します。
- **消費電力の最適化**: 消費電力が *15* μA と低いディープスリープモードを含む4つの動作モードを提供し、リチウムバッテリー充電管理をサポートします。
- **デュアルRISC-Vプロセッサ**: 2つの32ビットRISC-Vプロセッサを搭載し、高性能プロセッサは最大160 MHz、低消費電力プロセッサは最大 *20 MHz* で動作します。
- **クラシックな XIAO デザイン**: 21 x 17.8mm の親指サイズのフォームファクターと片面マウントデザインを維持し、ウェアラブルデバイスのようなスペース制限のあるプロジェクトに最適です。

## ハードウェア概要

<table align="center">
 <tr>
     <th>XIAO ESP32C6 インディケーション図</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1Nzc0ODUwMjM3NA_556525_Slxs4ARdyuXRrJK-_1711096256?w=9854&h=3367&type=image/png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO ESP32C6 ピンリスト</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1Nzc0ODUwMjM3NA_318648_dMoXitoaQiq2N3-a_1711678067?w=1486&h=1228" style={{width:1000, height:'auto'}}/></div></td>
 </tr>
</table>

:::tip RFスイッチ

**RFスイッチ**機能を使用すると、`GPIO14`を設定することで内蔵セラミックアンテナと外部アンテナを切り替えることができます。この機能を有効にするには、*まず`GPIO3`を低レベルに設定する必要があります*。これによりRFスイッチ制御がアクティブになります。

- **GPIO14 低レベル（デフォルト設定）**: デバイスは内蔵セラミックアンテナを使用します。
- **GPIO14 高レベル**: デバイスは外部アンテナに切り替わります。

デフォルトでは、`GPIO14`は低レベルに設定されており、内蔵アンテナが有効です。外部アンテナを使用するには、`GPIO14`を高レベルに設定してください。以下の例コードを参考にして、外部アンテナを有効にするための`GPIO3`と`GPIO14`の設定方法を確認してください：

```cpp
void setup() {
  pinMode(WIFI_ENABLE, OUTPUT); // pinMode(3, OUTPUT);
  digitalWrite(WIFI_ENABLE, LOW); // digitalWrite(3, LOW); // RFスイッチ制御をアクティブ化

  delay(100);

  pinMode(WIFI_ANT_CONFIG, OUTPUT); // pinMode(14, OUTPUT);
  digitalWrite(WIFI_ANT_CONFIG, HIGH); // digitalWrite(14, HIGH); // 外部アンテナを使用
}
```

:::

## はじめに

XIAO ESP32C6を迅速に使用開始するために、以下のハードウェアおよびソフトウェアの準備を読んでXIAOを準備してください。

### ハードウェアの準備

以下を準備する必要があります：

- 1 x [Seeed Studio XIAO ESP32C6](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html)
- 1 x コンピュータ
- 1 x USB Type-Cケーブル

:::tip
一部のUSBケーブルは電力供給のみ可能で、データ転送ができません。USBケーブルを持っていない場合や、USBケーブルがデータ転送可能かどうかわからない場合は、[Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)を確認してください。
:::

#### ヘッダーのはんだ付け

XIAO ESP32C6はデフォルトでピンヘッダーが付属していません。ピンヘッダーを準備し、対応するXIAOのピンに自分ではんだ付けする必要があります。これにより拡張ボードやセンサーに接続できます。

XIAO ESP32C6の小型サイズのため、ヘッダーのはんだ付け時には注意してください。異なるピンを一緒に接続したり、シールドや他のコンポーネントにハンダを付けないようにしてください。そうしないと、XIAOがショートしたり正常に動作しなくなる可能性があります。この結果による影響はユーザーが負担するものとします。

#### BootLoaderモード

誤ったプログラムを使用すると、XIAOがポートを失ったり正常に動作しなくなることがあります。具体的な症状は以下の通りです：

- コンピュータに接続してもXIAOのポート番号が見つからない。
- コンピュータに接続してポート番号が表示されるが、プログラムのアップロードが失敗する。

上記の状況に遭遇した場合、XIAOをBootLoaderモードにすることで、認識されないデバイスやアップロード失敗の問題を解決できる場合があります。具体的な方法は以下の通りです：

- **ステップ1**. XIAO ESP32C6のBOOTボタンを押し続けます。
- **ステップ2**. BOOTボタンを押したまま、データケーブルでコンピュータに接続します。コンピュータに接続した後、BOOTボタンを離します。
- **ステップ3**. **Blink**プログラムをアップロードしてXIAO ESP32C6の動作を確認します。

#### リセット

プログラムが異常に動作する場合、電源投入時にリセットを1回押すことで、XIAOがアップロードされたプログラムを再実行します。

BOOTキーを押しながら電源を投入し、その後リセットキーを1回押すことでBootLoaderモードに入ることもできます。

### ソフトウェアの準備

XIAO ESP32C6の推奨プログラミングツールはArduino IDEです。そのため、ソフトウェア準備の一環としてArduinoのインストールを完了する必要があります。

:::tip
Arduinoを初めて使用する場合は、[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。

また、XIAO ESP32C6のオンボードパッケージはバージョン**2.0.8**以上が必要です。

:::

- **ステップ1.** オペレーティングシステムに応じて安定版のArduino IDEをダウンロードしてインストールします。

  <div class="download_arduino_container" style={{textAlign: 'center'}}>
      <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDEをダウンロード</font></span></strong></a>
  </div>

  <br></br>
- **ステップ2.** Arduinoアプリケーションを起動します。
- **[ステップ3](#add-board).** Arduino IDEにXIAO ESP32C6のオンボードパッケージを追加し、`OK`をクリックします。
- **ステップ4.** Arduino IDEを閉じて再度開きます。

#### XIAO-C6ボードを追加する {#add-board}

XIAO ESP32C6ボードをインストールするには、以下の手順に従ってください：

```
https://espressif.github.io/arduino-esp32/package_esp32_index.json
```

1. 上記のボードマネージャURLをArduino IDEの設定に追加します。このURLは[Installing - Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html#installing-using-arduino-ide)から取得されています。

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/boards_url.png" style={{width: 'auto', height: 'auto'}}/></div>

2. XIAO ESP32C6ボードパッケージをダウンロードします。

:::note
esp32ボードのバージョンが`3.0.0`以上である場合のみ利用可能です。
:::

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/install_board.png" style={{width: 'auto', height: 'auto'}}/></div>

3. `XIAO_ESP32C6`バリアントを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/select_xiao_c6.png" style={{width:1000, height:'auto'}}/></div>

これでコーディングを楽しめます✨。

#### 初めてのBlinkプログラムを実行する

- **ステップ 1.** Arduino アプリケーションを起動します。

- **ステップ 2.** **ファイル > スケッチ例 > 01.Basics > Blink** に移動し、プログラムを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/11.png" style={{width:700, height:'auto'}}/></div>

- **ステップ 3.** ボードモデルを **XIAO ESP32C6** に設定し、正しいポート番号を選択してプログラムをアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/upload_program.png" style={{width:1000, height:'auto'}}/></div>

プログラムが正常にアップロードされると、以下の出力メッセージが表示され、XIAO ESP32C6 の右側にあるオレンジ色の LED が点滅しているのを確認できます。

<table>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/XIAOC6_flash_firmware.png" style={{width:680, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/XIAOC6-blink.gif" style={{width:400, height:'auto'}}/></div></td>
 </tr>
</table>

## バッテリー使用

XIAO ESP32C6 シリーズは内蔵の電源管理チップを備えており、バッテリーで独立して電源供給を行うことができ、また USB ポートを介してバッテリーを充電することも可能です。

XIAO にバッテリーを接続するには、認定された充電可能な 3.7V リチウムバッテリーを使用することをお勧めします。バッテリーをはんだ付けする際は、正極と負極を慎重に区別してください。負極パッドはシルクスクリーン「D8」の近くの左側に位置し、正極パッドはシルクスクリーン「D5」の近くの右側に位置します。

:::caution
バッテリー電源を使用する場合、5V ピンには電圧が供給されません。
:::

:::tip 赤色インジケータライト

XIAO ESP32C6 にはバッテリー充電用の赤色インジケータライトがあり、[XIAO ESP32S3](/ja/xiao_esp32s3_getting_started/#battery-usage) と同様です。

XIAO ESP32C6 の赤色ライトの動作は以下の通りです：

- バッテリーが接続されていない場合：
  - Type-C ケーブルが接続されると赤色ライトが点灯し、30 秒後に消灯します。
- バッテリーが接続され、Type-C ケーブルが充電のために接続されている場合：
  - 赤色ライトが点滅します。
- Type-C 接続を介してバッテリーが完全に充電された場合：
  - 赤色ライトが消灯します。

:::

## バッテリー電圧の読み取り

XIAO ESP32C6 のバッテリー電圧を監視するには、[XIAO ESP32C3](/ja/XIAO_ESP32C3_Getting_Started/#check-the-battery-voltage) と同様に、200kΩ の抵抗を 1:2 の構成ではんだ付けする必要があります。この設定により電圧が半分に減少し、A0 アナログポートを介して安全に監視することができます。

### サンプルコード

以下のコードは、A0 ポートの ADC を初期化し、16 回の読み取りを平均化して、電圧分圧器の 1:2 減衰比を考慮したバッテリー電圧を計算します。

```cpp
#include <Arduino.h>

void setup() {
  Serial.begin(115200);
  pinMode(A0, INPUT);         // A0 を ADC 入力として設定
}

void loop() {
  uint32_t Vbatt = 0;
  for(int i = 0; i < 16; i++) {
    Vbatt += analogReadMilliVolts(A0); // ADC 電圧を読み取り、累積
  }
  float Vbattf = 2 * Vbatt / 16 / 1000.0;     // 1:2 分圧器を考慮して調整し、ボルトに変換
  Serial.println(Vbattf, 3);                  // 小数点以下 3 桁で電圧を出力
  delay(1000);                                // 1 秒待機
}
```

このコードは、ADC から 16 回の測定を行い、それを平均化した後、電圧分圧器の 1:2 比率を補正して、3 桁の小数点精度でバッテリー電圧をボルト単位で出力します。

## ディープスリープモードとウェイクアップ

XIAO ESP32C6は完全なディープスリープモードとウェイクアップ機能を備えています。ここでは、ESPが提供する一般的な例を2つ紹介します。

### デモ1: 外部ウェイクアップによるディープスリープ

このコードは、外部トリガーをウェイクアップソースとして使用する方法と、RTCメモリにデータを保存して再起動時に使用する方法を示しています。

```cpp
/*
ハードウェア接続
======================
GPIO 0に接続されたプッシュボタンを10Kオームの抵抗でプルダウン

注意:
======
ウェイクアップを引き起こすGPIO番号のビットマスク。RTC機能を持つGPIOのみがこのビットマップで使用可能です。
異なるSoCにおける関連するGPIOは以下の通りです:
- ESP32: 0, 2, 4, 12-15, 25-27, 32-39
- ESP32-S2: 0-21
- ESP32-S3: 0-21
- ESP32-C6: 0-7
- ESP32-H2: 7-14
*/

#define BUTTON_PIN_BITMASK (1ULL << GPIO_NUM_0) // GPIO 0のビットマスク（ext1用）

RTC_DATA_ATTR int bootCount = 0;

/*
ESP32がスリープから目覚めた理由を表示するメソッド
*/
void print_wakeup_reason(){
  esp_sleep_wakeup_cause_t wakeup_reason;

  wakeup_reason = esp_sleep_get_wakeup_cause();

  switch(wakeup_reason)
  {
    case ESP_SLEEP_WAKEUP_EXT0 : Serial.println("RTC_IOを使用した外部信号によるウェイクアップ"); break;
    case ESP_SLEEP_WAKEUP_EXT1 : Serial.println("RTC_CNTLを使用した外部信号によるウェイクアップ"); break;
    case ESP_SLEEP_WAKEUP_TIMER : Serial.println("タイマーによるウェイクアップ"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD : Serial.println("タッチパッドによるウェイクアップ"); break;
    case ESP_SLEEP_WAKEUP_ULP : Serial.println("ULPプログラムによるウェイクアップ"); break;
    default : Serial.printf("ディープスリープによるウェイクアップではありません: %d\n",wakeup_reason); break;
  }
}

void setup(){
  Serial.begin(115200);
  delay(1000); //シリアルモニターを開くための時間を確保

  //起動回数をインクリメントし、再起動ごとに表示
  ++bootCount;
  Serial.println("起動回数: " + String(bootCount));

  //ESP32のウェイクアップ理由を表示
  print_wakeup_reason();

  /*
  まずウェイクアップソースを設定します。
  ESP32を外部トリガーでウェイクアップするように設定します。
  ESP32にはext0とext1の2種類がありますが、ESP32C6ではext0がサポートされていないため、ext1を使用します。
  */

  //ext1を使用する場合は以下のように設定します
  esp_sleep_enable_ext1_wakeup(BUTTON_PIN_BITMASK,ESP_EXT1_WAKEUP_ANY_HIGH);

  //スリープに入る
  Serial.println("スリープに入ります");
  esp_deep_sleep_start();
  Serial.println("このメッセージは表示されません");
}

void loop(){
  //この関数は呼び出されません
}
```

### デモ2: タイマーウェイクアップによるディープスリープ

ESP32は、IoTアプリケーションにおいて重要な要素である電力効率を向上させるためにディープスリープモードを提供します。このモードでは、CPU、RAMの大部分、およびAPB_CLKからクロックされるすべてのデジタル周辺機器が電源オフになります。チップの中で電源がオンのままになる部分は、RTCコントローラー、RTC周辺機器、およびRTCメモリのみです。

このコードは、タイマーを使用してウェイクアップする最も基本的なディープスリープと、RTCメモリにデータを保存して再起動時に使用する方法を示しています。

```cpp
/*
タイマーウェイクアップによるシンプルなディープスリープ
=====================================
このコードはパブリックドメインライセンスの下で提供されています。

著者:
Pranav Cherukupalli <cherukupallip@gmail.com>
*/

#define uS_TO_S_FACTOR 1000000ULL  /* マイクロ秒から秒への変換係数 */
#define TIME_TO_SLEEP  5        /* ESP32がスリープする時間（秒単位） */

RTC_DATA_ATTR int bootCount = 0;

/*
ESP32がスリープから目覚めた理由を表示するメソッド
*/
void print_wakeup_reason(){
  esp_sleep_wakeup_cause_t wakeup_reason;

  wakeup_reason = esp_sleep_get_wakeup_cause();

  switch(wakeup_reason)
  {
    case ESP_SLEEP_WAKEUP_EXT0 : Serial.println("RTC_IOを使用した外部信号によるウェイクアップ"); break;
    case ESP_SLEEP_WAKEUP_EXT1 : Serial.println("RTC_CNTLを使用した外部信号によるウェイクアップ"); break;
    case ESP_SLEEP_WAKEUP_TIMER : Serial.println("タイマーによるウェイクアップ"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD : Serial.println("タッチパッドによるウェイクアップ"); break;
    case ESP_SLEEP_WAKEUP_ULP : Serial.println("ULPプログラムによるウェイクアップ"); break;
    default : Serial.printf("ディープスリープによるウェイクアップではありません: %d\n",wakeup_reason); break;
  }
}

void setup(){
  Serial.begin(115200);
  delay(1000); //シリアルモニターを開くための時間を確保

  //起動回数をインクリメントし、再起動ごとに表示
  ++bootCount;
  Serial.println("起動回数: " + String(bootCount));

  //ESP32のウェイクアップ理由を表示
  print_wakeup_reason();

  /*
  まずウェイクアップソースを設定します。
  ESP32を5秒ごとにウェイクアップするように設定します。
  */
  esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);
  Serial.println("ESP32を" + String(TIME_TO_SLEEP) + "秒ごとにスリープするように設定しました");

  /*
  次に、シャットダウンする周辺機器/オンにしておく周辺機器を決定します。
  デフォルトでは、ESP32はウェイクアップソースに必要のない周辺機器を自動的に電源オフしますが、
  より詳細に設定したい場合は以下を参考にしてください。
  詳細はAPIドキュメントを参照してください:
  http://esp-idf.readthedocs.io/en/latest/api-reference/system/deep_sleep.html
  以下の行は、すべてのRTC周辺機器をディープスリープ中に電源オフにする例としてコメントアウトされています。
  */
  //esp_deep_sleep_pd_config(ESP_PD_DOMAIN_RTC_PERIPH, ESP_PD_OPTION_OFF);
  //Serial.println("すべてのRTC周辺機器をスリープ中に電源オフに設定しました");

  /*
  ウェイクアップ原因を設定し、必要に応じてディープスリープ中の周辺機器の状態を設定した後、
  ディープスリープを開始します。
  ウェイクアップソースが提供されずにディープスリープが開始された場合、
  ハードウェアリセットが発生するまで永遠にスリープします。
  */
  Serial.println("スリープに入ります");
  Serial.flush(); 
  esp_deep_sleep_start();
  Serial.println("このメッセージは表示されません");
}

void loop(){
  //この関数は呼び出されません
}
```

:::tip
ディープスリープモードとウェイクアップ機能をさらに活用する方法を学びたい場合は、Arduino IDEでESPが公式に作成したサンプルプログラムを参照してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/16.png" style={{width:600, height:'auto'}}/></div>
:::

## リソース

- **[PDF]** [ESP32C6 データシート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/res/esp32-c6_datasheet_en.pdf)

- **[ZIP]** [Seeed Studio XIAO ESP32C6 KiCAD ライブラリ](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/XIAO-ESP32-C6_v1.0_SCH&PCB_24028.zip)

- **[PDF]** [Seeed Studio XIAO ESP32C6 回路図](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/XIAO-ESP32-C6_v1.0_SCH_PDF_24028.pdf)

- **[XLSX]** [Seeed Studio XIAO ESP32C6 ピン配置シート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/res/XIAO_ESP32C6_Pinout.xlsx)

- 🔗 **[Kicad]** [Seeed Studio XIAO ESP32C6 フットプリント](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

- **[STEP]** [Seeed Studio XIAO ESP32C6 ステップファイル](https://grabcad.com/library/seeed-studio-xiao-esp32-c6-1)

## コースリソース

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[電子書籍]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>