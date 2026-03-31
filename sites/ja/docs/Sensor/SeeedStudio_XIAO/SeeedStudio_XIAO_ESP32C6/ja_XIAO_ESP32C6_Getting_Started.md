---
description: Seeed Studio XIAO ESP32C6 の使用を開始する。
title: Seeed Studio XIAO ESP32C6 入門ガイド
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113991254-seeedxiao-esp32c6-font.jpg
keywords:
  - XIAO
  - ESP32C6
  - Seeeduino
slug: /xiao_esp32c6_getting_started
sku: 113991254,102010636,101991470
toc_max_heading_level: 4
sidebar_position: 1
last_update:
  date: 08/05/2024
  author: Spencer
createdAt: '2025-05-27'
updatedAt: '2026-03-24'
url: https://wiki.seeedstudio.com/ja/xiao_esp32c6_getting_started/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Seeed Studio XIAO ESP32C6 入門ガイド

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
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## はじめに

Seeed Studio XIAO ESP32C6 は、高度に統合された [ESP32-C6 SoC](https://www.espressif.com/en/products/socs/esp32-c6) を搭載しており、**2 つの 32-bit RISC-V プロセッサ** をベースに構成されています。高性能 (HP) プロセッサは **最大 160 MHz で動作** し、低消費電力 (LP) 32-bit RISC-V プロセッサは最大 20 MHz で動作します。チップ上には **512KB の SRAM と 4 MB のフラッシュ** が搭載されており、より広いプログラム領域を提供し、IoT 制御シナリオにさらなる可能性をもたらします。

XIAO ESP32C6 は、**強化されたワイヤレス接続により Matter をネイティブにサポート** します。ワイヤレススタックは **2.4 GHz WiFi 6、Bluetooth® 5.3、Zigbee、Thread (802.15.4)** をサポートします。Thread に対応した初の XIAO メンバーとして、Matter 準拠のプロジェクト構築に最適であり、スマートホームにおける相互運用性を実現します。

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
<table>
  <tr>
    <th>製品</th>
    <td>XIAO ESP32-C6</td>
    <td><a href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html ">XIAO ESP32-C3</a></td>
    <td><a href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html ">XIAO ESP32-S3</a></td>
  </tr>
  <tr>
    <th>プロセッサ</th>
    <td>Espressif ESP32-C6 SoC<br/>2 つの 32-bit RISC-V プロセッサを搭載し、高性能コアは最大 160 MHz、低消費電力コアは最大 20 MHz で動作</td>
    <td>Espressif ESP32-C3 SoC<br/>最大 160 MHz で動作する 4 ステージパイプラインの RISC-V シングルコア 32-bit チッププロセッサ</td>
    <td>Espressif ESP32-S3R8 SoC<br/>最大 240 MHz で動作する Xtensa LX7 デュアルコア 32-bit プロセッサ</td>
  </tr>
  <tr>
    <th rowspan="3">ワイヤレス</th>
    <td>完全な 2.4GHz Wi-Fi 6 サブシステム</td>
    <td>完全な 2.4GHz Wi-Fi サブシステム</td>
    <td>完全な 2.4GHz Wi-Fi サブシステム</td>
  </tr>
  <tr>
    <td colspan="3">Bluetooth Low Energy 5.0</td>
  </tr>
  <tr>
    <td>Zigbee, Thread, IEEE 802.15.4</td>
    <td>/</td>
    <td>/</td>
  </tr>
  <tr>
    <th>オンチップメモリ</th>
    <td>512KB SRAM &amp; 4MB Flash</td>
    <td>400KB SRAM &amp; 4MB Flash</td>
    <td>8MB PSRAM &amp; 8MB Flash</td>
  </tr>
  <tr>
    <th rowspan="2">インターフェース</th>
    <td>1x UART<br/>1x LP_UART<br/>1x IIC<br/>1x LP_IIC<br/>1x SPI<br/>11x GPIO(PWM)<br/>7x ADC<br/>1x SDIO</td>
    <td>1x UART<br/>1x IIC<br/>1x SPI<br/>11x GPIO(PWM)<br/>4x ADC</td>
    <td>1x UART<br/>1x IIC<br/>1x SPI<br/>11x GPIO(PWM)<br/>9x ADC<br/>1x User LED<br/>1x Charge LED</td>
  </tr>
  <tr>
    <td colspan="3">1x Reset button<br/>1x Boot button</td>
  </tr>
  <tr>
    <th>寸法</th>
    <td colspan="3">21 x 17.8mm</td>
  </tr>
  <tr>
    <th>電源</th>
    <td colspan="3">入力電圧 (Type-C): 5V<br/>入力電圧 (BAT): 3.7V</td>
  </tr>
  <tr>
    <th>消費電力モード (代表値)<br/>(供給電圧: 3.8V)</th>
    <td>Modem-sleep モード: 30 mA<br/>Light-sleep モード: 3.1 mA<br/>Deep Sleep モード: 15 μA</td>
    <td>Modem-sleep モード: 24 mA<br/>Light-sleep モード: 3 mA<br/>Deep Sleep モード: 44 μA</td>
    <td>Modem-sleep モード: 27 mA<br/>Light-sleep モード: 2 mA<br/>Deep Sleep モード: 14 μA</td>
  </tr>
  <tr>
    <th>動作温度</th>
    <td>-40°C ~ 85°C</td>
    <td>-40°C ~ 85°C</td>
    <td>-40°C ~ 65°C</td>
  </tr>
</table>

> [XIAO ESP32-S3 vs ESP32-C3 vs ESP32-C6: あなたのプロジェクトに最適なのはどれ？](https://www.seeedstudio.com/blog/2026/01/14/xiao-esp32-s3-c3-c6-comparison/)

### 特徴

- **強化された接続性**: ***2.4*** GHz Wi-Fi 6 (802.11ax)、Bluetooth 5(LE)、IEEE 802.15.4 無線接続を統合し、**Thread** および **Zigbee** プロトコルの適用を可能にします。
- **Matter ネイティブ対応**: Matter 準拠のスマートホームプロジェクトの構築をサポートし、異なるスマートデバイス間の相互運用性を確保します。
- **チップ上でのセキュリティ暗号化**: ESP32-C6 を利用して、セキュアブート、暗号化、Trusted Execution Environment (TEE) 機能を提供し、スマートホームプロジェクトのセキュリティを強化します。
- **優れた RF 性能**: 最大 *80m* の BLE/Wi-Fi 通信距離を持つオンボードアンテナを備え、外部 UFL アンテナ接続用インターフェースも提供し、信頼性の高い接続を実現します。
- **電力消費の最適化**: 4 つの動作モードを提供し、その中には消費電流が *15* μA まで低減されるディープスリープモードが含まれ、リチウム電池の充電管理もサポートします。
- **デュアル RISC-V プロセッサ**: 2 つの 32-bit RISC-V プロセッサを搭載し、高性能プロセッサは最大 160 MHz、低消費電力プロセッサは最大 *20 MHz* で動作します。
- **クラシックな XIAO デザイン**: 21 x 17.8mm の親指サイズフォームファクタと片面実装デザインを維持しており、ウェアラブルデバイスのようなスペース制約のあるプロジェクトに最適です。

## ハードウェア概要

<table align="center">
 <tr>
     <th>XIAO ESP32C6 表示図</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1Nzc0ODUwMjM3NA_556525_Slxs4ARdyuXRrJK-_1711096256?w=9854&h=3367&type=image/png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO ESP32C6 ピン一覧</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1Nzc0ODUwMjM3NA_318648_dMoXitoaQiq2N3-a_1711678067?w=1486&h=1228" style={{width:1000, height:'auto'}}/></div></td>
 </tr>
</table>

:::tip RF Switch

**RF Switch** 機能により、`GPIO14` を設定することで内蔵セラミックアンテナと外部アンテナを切り替えることができます。この機能を有効にするには、まず *`GPIO3` を Low レベルに設定する必要があります*。これにより RF スイッチ制御が有効になります。  

- **GPIO14 Low レベル (デフォルト設定)**: デバイスは内蔵セラミックアンテナを使用します。
- **GPIO14 High レベル**: デバイスは外部アンテナに切り替わります。  

デフォルトでは、`GPIO14` は Low レベルに設定されており、内蔵アンテナが有効になっています。外部アンテナを使用するには、`GPIO14` を High レベルに設定します。外部アンテナを有効にするために `GPIO3` と `GPIO14` をどのように設定するかについては、以下のサンプルコードを参照してください。

```cpp
void setup() {
  pinMode(WIFI_ENABLE, OUTPUT); // pinMode(3, OUTPUT);
  digitalWrite(WIFI_ENABLE, LOW); // digitalWrite(3, LOW); // Activate RF switch control

  delay(100);

  pinMode(WIFI_ANT_CONFIG, OUTPUT); // pinMode(14, OUTPUT);
  digitalWrite(WIFI_ANT_CONFIG, HIGH); // digitalWrite(14, HIGH); // Use external antenna
}
```


:::

## **ピンマップ**

| XIAO ピン                 | 機能   | チップピン  | 代替機能 | 説明                          |
| :---------------------: | :-------: | :-------: | :----------------: | :---------------------------------- |
| 5V                      | VBUS      |           |                    | 電源入力/出力                   |
| GND                     |           |           |                    |                                      |
| 3V3                     | 3V3_OUT   |           |                    | 電源出力                         |
| D0                      | Analog    | GPIO0     | LP_GPIO0           | GPIO, ADC                            |
| D1                      | Analog    | GPIO1     | LP_GPIO1           | GPIO, ADC                            |
| D2                      | Analog    | GPIO2     | LP_GPIO2           | GPIO, ADC                            |
| D3                      | Digital   | GPIO21    | SDIO_DATA1         | GPIO                                 |
| D4                      | SDA       | GPIO22    | SDIO_DATA2         | GPIO, I2C Data                       |
| D5                      | SCL       | GPIO23    | SDIO_DATA3         | GPIO, I2C Clock                      |
| D6                      | TX        | GPIO16    |                    | GPIO, UART Transmit                  |
| D7                      | RX        | GPIO17    |                    | GPIO, UART Receive                   |
| D8                      | SCK       | GPIO19    | SPI_CLK           | GPIO, SPI Clock                      |
| D9                      | MISO      | GPIO20    | SPI_MISO          | GPIO, SPI Data                       |
| D10                     | MOSI      | GPIO18    | SPI_MOSI           | GPIO, SPI Data                       |
| MTDO                    |           | GPIO7     |                    | JTAG                                 |
| MTDI                    |           | GPIO5     |                    | JTAG, ADC                            |
| MTCK                    |           | GPIO6     |                    | JTAG, ADC                            |
| MTMS                    |           | GPIO4     |                    | JTAG, ADC                            |
| EN                      |           | CHIP_PU   |                    | リセット                                |
| Boot                    |           | GPIO9     |                    | ブートモードに入る                      |
| RF Switch Port Select   |           | GPIO14    |                    | オンボードアンテナと UFL アンテナの切り替え |
| RF Switch Power         |           | GPIO3     |                    | 電源                                |
| Light                   |           | GPIO15    |                    | ユーザー用ライト                           |
## はじめに

XIAO ESP32C6 をすばやく使い始められるように、以下のハードウェアおよびソフトウェアの準備を読んで、XIAO の準備を行ってください。

### ハードウェアの準備

次のものを用意してください：

- 1 x [Seeed Studio XIAO ESP32C6](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html)
- 1 x コンピュータ
- 1 x USB Type-C ケーブル

:::tip
一部の USB ケーブルは電源供給のみで、データ転送ができません。USB ケーブルを持っていない場合や、お使いの USB ケーブルがデータ転送に対応しているか分からない場合は、[Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html) を確認してください。
:::

#### ヘッダピンのはんだ付け

XIAO ESP32C6 はデフォルトではピンヘッダが実装されていない状態で出荷されます。拡張ボードやセンサに接続できるように、ピンヘッダを別途用意し、XIAO の対応するピンにはんだ付けする必要があります。

XIAO ESP32C6 は非常に小型なため、ヘッダピンをはんだ付けする際は、異なるピン同士をブリッジさせないこと、シールドや他の部品にはんだが付着しないことに注意してください。これらを守らないと XIAO が短絡したり正常に動作しなくなる可能性があり、その結果についてはユーザーの自己責任となります。

#### BootLoader モード

誤ったプログラムを書き込んでしまい、XIAO のポートが見えなくなったり、正常に動作しなくなることがあります。具体的な症状は次のとおりです：

- コンピュータに接続しても、XIAO のポート番号が見つからない。
- コンピュータに接続してポート番号は表示されるが、プログラムの書き込みに失敗する。

上記 2 つの状況に遭遇した場合、XIAO を BootLoader モードにすることで、デバイスが認識されない問題や書き込み失敗の多くを解決できます。具体的な方法は次のとおりです：

- **ステップ 1**. XIAO ESP32C6 上の BOOT ボタンを押し続けたままにします。
- **ステップ 2**. BOOT ボタンを押したまま、データケーブルでコンピュータに接続します。コンピュータに接続したら BOOT ボタンを離します。
- **ステップ 3**. **Blink** プログラムを書き込んで、XIAO ESP32C6 の動作を確認します。

#### リセット

プログラムが異常に動作した場合、電源投入中に Reset を 1 回押すことで、XIAO にアップロード済みのプログラムを再実行させることができます。

電源投入時に BOOT キーを押し続け、その後 Reset キーを 1 回押すと、BootLoader モードに入ることもできます。

### ソフトウェアの準備

XIAO ESP32C6 に推奨される開発ツールは Arduino IDE です。そのため、ソフトウェアの準備として Arduino のインストールを完了させる必要があります。

:::tip
初めて Arduino を使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) を参照することを強くお勧めします。

また、XIAO ESP32C6 用のオンボードパッケージを利用するには、少なくとも **2.0.8** 以上のバージョンが必要です。

:::

- **ステップ 1.** お使いのオペレーティングシステムに応じて、安定版の Arduino IDE をダウンロードしてインストールします。

  <div class="download_arduino_container" style={{textAlign: 'center'}}>
      <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDE をダウンロード</font></span></strong></a>
  </div>

  <br></br>
- **ステップ 2.** Arduino アプリケーションを起動します。
- **[ステップ 3](#XIAO-ESP32C6-ボードを追加する).**  Arduino IDE に XIAO ESP32C6 のオンボードパッケージを追加し、`OK` をクリックします。
- **ステップ 4.** Arduino IDE を一度閉じてから、再度開きます。

#### XIAO-C6 ボードを追加する {#XIAO-ESP32C6-ボードを追加する}

XIAO ESP32C6 ボードをインストールするには、次の手順に従ってください：

```
https://espressif.github.io/arduino-esp32/package_esp32_index.json
```

1. 上記のボードマネージャ URL を Arduino IDE の環境設定に追加します。この URL は [Installing - Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html#installing-using-arduino-ide) から取得したものです。

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/boards_url.png" style={{width: 'auto', height: 'auto'}}/></div>

2. XIAO ESP32C6 ボードパッケージをダウンロードします。

:::note
esp32 ボードのバージョンが `3.0.0` より新しい場合にのみ利用できます。
:::

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/install_board.png" style={{width: 'auto', height: 'auto'}}/></div>

3. `XIAO_ESP32C6` バリアントを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/select_xiao_c6.png" style={{width:1000, height:'auto'}}/></div>

それではコーディングを楽しみましょう ✨。

#### 最初の Blink プログラムを実行する

- **ステップ 1.** Arduino アプリケーションを起動します。

- **ステップ 2.** **File > Examples > 01.Basics > Blink** に移動し、プログラムを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/11.png" style={{width:700, height:'auto'}}/></div>

- **ステップ 3.** ボードモデルを **XIAO ESP32C6** に設定し、正しいポート番号を選択してプログラムを書き込みます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/upload_program.png" style={{width:1000, height:'auto'}}/></div>

プログラムの書き込みが正常に完了すると、以下のような出力メッセージが表示され、XIAO ESP32C6 の右側にあるオレンジ色の LED が点滅しているのを確認できます。

<table>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/XIAOC6_flash_firmware.png" style={{width:680, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/XIAOC6-blink.gif" style={{width:400, height:'auto'}}/></div></td>
 </tr>
</table>

## バッテリーの使用

XIAO ESP32C6 シリーズには電源管理チップが内蔵されており、バッテリーによる単独給電や、USB ポートを介したバッテリーの充電が可能です。

XIAO にバッテリーを接続する場合は、認証済みの充電式 3.7V リチウムバッテリーの使用を推奨します。バッテリーをはんだ付けする際は、必ずプラス端子とマイナス端子を正しく区別してください。マイナス電極パッドはシルク印刷「D8」付近の左側に、プラス電極パッドはシルク印刷「D5」付近の右側にあります。

:::caution
バッテリー駆動時には、5V ピンには電圧が出力されません。
:::

:::tip Red Indicator Light

XIAO ESP32C6 には、[XIAO ESP32S3](/ja/xiao_esp32s3_getting_started/#バッテリーの使用) と同様に、バッテリー充電用の赤色インジケータライトがあります：

XIAO ESP32C6 の赤色インジケータライトの動作は次のとおりです：

- バッテリーが接続されていない場合：
  - Type-C ケーブルを接続すると赤色ライトが点灯し、30 秒後に消灯します。
- バッテリーを接続し、Type-C ケーブルを挿して充電している場合：
  - 赤色ライトが点滅します。
- Type-C 接続でバッテリーが満充電になった場合：
  - 赤色ライトが消灯します。

:::

## バッテリー電圧の読み取り

XIAO ESP32C6 上のバッテリー電圧を監視するには、[XIAO ESP32C3](/ja/XIAO_ESP32C3_Getting_Started/#バッテリー電圧を確認する) と同様に、200k の抵抗を 1:2 の構成ではんだ付けする必要があります。この構成により電圧が半分に分圧され、A0 アナログポートを介して安全に監視できるようになります。

### サンプルコード

以下のコードでは、A0 ポートの ADC を初期化し、16 回の読み取り値を平均してバッテリー電圧を算出し、電圧分圧器の 1:2 減衰比を補正します。

```cpp
#include <Arduino.h>

void setup() {
  Serial.begin(115200);
  pinMode(A0, INPUT);         // Configure A0 as ADC input
}

void loop() {
  uint32_t Vbatt = 0;
  for(int i = 0; i < 16; i++) {
    Vbatt += analogReadMilliVolts(A0); // Read and accumulate ADC voltage
  }
  float Vbattf = 2 * Vbatt / 16 / 1000.0;     // Adjust for 1:2 divider and convert to volts
  Serial.println(Vbattf, 3);                  // Output voltage to 3 decimal places
  delay(1000);                                // Wait for 1 second
}
```

このコードは ADC から 16 回測定を行い、その平均値を取り、さらに電圧分圧器の 1:2 比を補正して、バッテリー電圧を小数点以下 3 桁の精度でボルト単位で出力します。

## ディープスリープモードとウェイクアップ

XIAO ESP32C6 には、完全なディープスリープモードとウェイクアップ機能が備わっています。ここでは、ESP が提供する中でもよく使われる 2 つの例を紹介します。

### デモ1: 外部ウェイクアップによるディープスリープ

このコードは、外部トリガをウェイクアップソースとして使用したディープスリープの方法と、RTC メモリにデータを保存して再起動後も利用する方法を示しています。

```cpp
/*
Hardware Connections
======================
Push Button to GPIO 0 pulled down with a 10K Ohm
resistor

NOTE:
======
Bit mask of GPIO numbers which will cause wakeup. Only GPIOs
which have RTC functionality can be used in this bit map.
For different SoCs, the related GPIOs are:
- ESP32: 0, 2, 4, 12-15, 25-27, 32-39
- ESP32-S2: 0-21
- ESP32-S3: 0-21
- ESP32-C6: 0-7
- ESP32-H2: 7-14
*/

#define BUTTON_PIN_BITMASK (1ULL << GPIO_NUM_0) // GPIO 0 bitmask for ext1

RTC_DATA_ATTR int bootCount = 0;

/*
Method to print the reason by which ESP32
has been awaken from sleep
*/
void print_wakeup_reason(){
  esp_sleep_wakeup_cause_t wakeup_reason;

  wakeup_reason = esp_sleep_get_wakeup_cause();

  switch(wakeup_reason)
  {
    case ESP_SLEEP_WAKEUP_EXT0 : Serial.println("Wakeup caused by external signal using RTC_IO"); break;
    case ESP_SLEEP_WAKEUP_EXT1 : Serial.println("Wakeup caused by external signal using RTC_CNTL"); break;
    case ESP_SLEEP_WAKEUP_TIMER : Serial.println("Wakeup caused by timer"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD : Serial.println("Wakeup caused by touchpad"); break;
    case ESP_SLEEP_WAKEUP_ULP : Serial.println("Wakeup caused by ULP program"); break;
    default : Serial.printf("Wakeup was not caused by deep sleep: %d\n",wakeup_reason); break;
  }
}

void setup(){
  Serial.begin(115200);
  delay(1000); //Take some time to open up the Serial Monitor

  //Increment boot number and print it every reboot
  ++bootCount;
  Serial.println("Boot number: " + String(bootCount));

  //Print the wakeup reason for ESP32
  print_wakeup_reason();

  /*
  First we configure the wake up source
  We set our ESP32 to wake up for an external trigger.
  There are two types for ESP32, ext0 and ext1, ext0 
  don't support ESP32C6 so we use ext1.
  */

  //If you were to use ext1, you would use it like
  esp_sleep_enable_ext1_wakeup(BUTTON_PIN_BITMASK,ESP_EXT1_WAKEUP_ANY_HIGH);

  //Go to sleep now
  Serial.println("Going to sleep now");
  esp_deep_sleep_start();
  Serial.println("This will never be printed");
}

void loop(){
  //This is not going to be called
}
```

### デモ2: タイマーによるウェイクアップ付きディープスリープ

ESP32 は、IoT アプリケーションでは電力が重要な要素であるため、効果的に省電力できるディープスリープモードを提供します。このモードでは、CPU、RAM の大部分、および APB_CLK からクロック供給されるすべてのデジタル周辺機能の電源がオフになります。チップのうち電源をオンのままにできる部分は、RTC コントローラ、RTC 周辺機能、および RTC メモリのみです。

このコードは、タイマーでウェイクアップする最も基本的なディープスリープと、再起動後も使用できるようにデータを RTC メモリに保存する方法を示します。

```cpp
/*
Simple Deep Sleep with Timer Wake Up
=====================================
This code is under Public Domain License.

Author:
Pranav Cherukupalli <cherukupallip@gmail.com>
*/

#define uS_TO_S_FACTOR 1000000ULL  /* Conversion factor for micro seconds to seconds */
#define TIME_TO_SLEEP  5        /* Time ESP32 will go to sleep (in seconds) */

RTC_DATA_ATTR int bootCount = 0;

/*
Method to print the reason by which ESP32
has been awaken from sleep
*/
void print_wakeup_reason(){
  esp_sleep_wakeup_cause_t wakeup_reason;

  wakeup_reason = esp_sleep_get_wakeup_cause();

  switch(wakeup_reason)
  {
    case ESP_SLEEP_WAKEUP_EXT0 : Serial.println("Wakeup caused by external signal using RTC_IO"); break;
    case ESP_SLEEP_WAKEUP_EXT1 : Serial.println("Wakeup caused by external signal using RTC_CNTL"); break;
    case ESP_SLEEP_WAKEUP_TIMER : Serial.println("Wakeup caused by timer"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD : Serial.println("Wakeup caused by touchpad"); break;
    case ESP_SLEEP_WAKEUP_ULP : Serial.println("Wakeup caused by ULP program"); break;
    default : Serial.printf("Wakeup was not caused by deep sleep: %d\n",wakeup_reason); break;
  }
}

void setup(){
  Serial.begin(115200);
  delay(1000); //Take some time to open up the Serial Monitor

  //Increment boot number and print it every reboot
  ++bootCount;
  Serial.println("Boot number: " + String(bootCount));

  //Print the wakeup reason for ESP32
  print_wakeup_reason();

  /*
  First we configure the wake up source
  We set our ESP32 to wake up every 5 seconds
  */
  esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);
  Serial.println("Setup ESP32 to sleep for every " + String(TIME_TO_SLEEP) +
  " Seconds");

  /*
  Next we decide what all peripherals to shut down/keep on
  By default, ESP32 will automatically power down the peripherals
  not needed by the wakeup source, but if you want to be a poweruser
  this is for you. Read in detail at the API docs
  http://esp-idf.readthedocs.io/en/latest/api-reference/system/deep_sleep.html
  Left the line commented as an example of how to configure peripherals.
  The line below turns off all RTC peripherals in deep sleep.
  */
  //esp_deep_sleep_pd_config(ESP_PD_DOMAIN_RTC_PERIPH, ESP_PD_OPTION_OFF);
  //Serial.println("Configured all RTC Peripherals to be powered down in sleep");

  /*
  Now that we have setup a wake cause and if needed setup the
  peripherals state in deep sleep, we can now start going to
  deep sleep.
  In the case that no wake up sources were provided but deep
  sleep was started, it will sleep forever unless hardware
  reset occurs.
  */
  Serial.println("Going to sleep now");
  Serial.flush(); 
  esp_deep_sleep_start();
  Serial.println("This will never be printed");
}

void loop(){
  //This is not going to be called
}
```

:::tip
ディープスリープモードやウェイクアップ機能をさらに活用する方法を学びたい場合は、Arduino IDE 内で ESP が公式に作成した、チップ向けのサンプルプログラムをさらに見つけることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/16.png" style={{width:600, height:'auto'}}/></div>
:::

## リソース

**ハードウェア設計**
- **📄[データシート]** [Espressif ESP32-C6 Datasheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/res/esp32-c6_datasheet_en.pdf )
- **📄[回路図]** [XIAO ESP32-C6 Schematic](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/XIAO_ESP32_C6_v1.0_SCH_260114.pdf )
- **🗃️[PCB 設計ファイル]** [XIAO ESP32-C6 KiCad Project](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/XIAO_ESP32_C6_v1.0_SCH&PCB_260114.zip )
- **🗃️[PCB 設計ライブラリ]** 
  - [XIAO シリーズ KiCad フットプリント](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_Footprints.zip )
  - [XIAO シリーズ KiCad SCH シンボル](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[ピン配置図]** [XIAO ESP32-C6 ピン配置シート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/res/XIAO_ESP32C6_Pinout.xlsx )

**メカニカル設計**
- **📄[3D モデル]** [XIAO ESP32-C6 3D Model](https://grabcad.com/library/seeed-studio-xiao-esp32-c6-1 )

## コース用リソース

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[電子書籍]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)



## 参考資料

<JetsonLeadQuote
  buttonText="見積もり依頼"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/Seeed_Studio_XIAO.jpg"
  imageAlt="Request Quote for XIAO"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
