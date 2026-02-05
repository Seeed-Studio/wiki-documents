---
description: Seeed Studio XIAO ESP32C6 の入門ガイド。
title: Seeed Studio XIAO ESP32C6 の入門ガイド
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113991254-seeedxiao-esp32c6-font.jpg
keywords:
- XIAO
- ESP32C6
- Seeeduino
slug: /ja/xiao_esp32c6_getting_started
sku: 113991254,102010636,101991470
toc_max_heading_level: 4
sidebar_position: 1
last_update:
  date: 08/05/2024
  author: Spencer
---

# Seeed Studio XIAO ESP32C6 の入門ガイド

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

Seeed Studio XIAO ESP32C6 は、高度に統合された [ESP32-C6 SoC](https://www.espressif.com/en/products/socs/esp32-c6) を搭載し、**2つの32ビット RISC-V プロセッサ**で構築されています。高性能（HP）プロセッサは**最大160 MHzで動作**し、低消費電力（LP）32ビット RISC-V プロセッサは最大20 MHzでクロック動作します。チップには**512KB SRAM と 4 MB Flash**が搭載されており、より多くのプログラミング空間を提供し、IoT制御シナリオにより多くの可能性をもたらします。

XIAO ESP32C6 は**強化されたワイヤレス接続により Matter ネイティブ**です。ワイヤレススタックは**2.4 GHz WiFi 6、Bluetooth® 5.3、Zigbee、Thread（802.15.4）**をサポートしています。Thread 対応の初の XIAO メンバーとして、Matter 準拠プロジェクトの構築に最適であり、スマートホームでの相互運用性を実現します。

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
    <td>Espressif ESP32-C6 SoC<br/>2つの32ビット RISC-V プロセッサ、高性能プロセッサは最大160 MHz、低消費電力プロセッサは最大20 MHzで動作</td>
    <td>Espressif ESP32-C3 SoC<br/>RISC-V シングルコア32ビットチッププロセッサ、4段パイプラインで最大160 MHzで動作</td>
    <td>Espressif ESP32-S3R8 SoC<br/>Xtensa LX7 デュアルコア、32ビットプロセッサ、最大240 MHzで動作</td>
  </tr>
  <tr>
    <th rowspan="3">ワイヤレス</th>
    <td>完全な2.4GHz Wi-Fi 6 サブシステム</td>
    <td>完全な2.4GHz Wi-Fi サブシステム</td>
    <td>完全な2.4GHz Wi-Fi サブシステム</td>
  </tr>
  <tr>
    <td colspan="3">Bluetooth Low Energy 5.0</td>
  </tr>
  <tr>
    <td>Zigbee、Thread、IEEE 802.15.4</td>
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
    <td colspan="3">入力電圧（Type-C）：5V<br/>入力電圧（BAT）：3.7V</td>
  </tr>
  <tr>
    <th>消費電力モデル（標準）<br/>（供給電力：3.8V）</th>
    <td>モデムスリープモデル：30 mA<br/>ライトスリープモデル：3.1 mA<br/>ディープスリープモデル：15 μA</td>
    <td>モデムスリープモデル：24 mA<br/>ライトスリープモデル：3 mA<br/>ディープスリープモデル：44 μA</td>
    <td>モデムスリープモデル：27 mA<br/>ライトスリープモデル：2 mA<br/>ディープスリープモデル：14 μA</td>
  </tr>
  <tr>
    <th>動作温度</th>
    <td>-40°C ~ 85°C</td>
    <td>-40°C ~ 85°C</td>
    <td>-40°C ~ 65°C</td>
  </tr>
</table>

> [XIAO ESP32-S3 vs ESP32-C3 vs ESP32-C6: Which One Is Best for Your Project?](https://www.seeedstudio.com/blog/2026/01/14/xiao-esp32-s3-c3-c6-comparison/)

### 特徴

- **強化された接続性**：***2.4*** GHz Wi-Fi 6（802.11ax）、Bluetooth 5（LE）、IEEE 802.15.4 無線接続を統合し、**Thread** および **Zigbee** プロトコルの適用を可能にします。
- **Matter ネイティブ**：Matter 準拠のスマートホームプロジェクトの構築をサポートし、異なるスマートデバイス間の相互運用性を確保します。
- **チップ上でのセキュリティ暗号化**：ESP32-C6 を利用してセキュアブート、暗号化、信頼実行環境（TEE）機能を提供し、スマートホームプロジェクトのセキュリティを強化します。
- **優れたRF性能**：最大*80m*のBLE/Wi-Fi範囲を持つオンボードアンテナを搭載し、外部UFLアンテナ接続用のインターフェースを提供し、信頼性の高い接続を確保します。
- **消費電力の活用**：*15* μAという低消費電力のディープスリープモードを含む4つの動作モードを提供し、リチウムバッテリー充電管理をサポートします。
- **デュアル RISC-V プロセッサ**：2つの32ビット RISC-V プロセッサを搭載し、高性能プロセッサは最大160 MHz、低消費電力プロセッサは最大*20 MHz*で動作可能です。
- **クラシック XIAO デザイン**：21 x 17.8mmの親指サイズフォームファクターと片面実装設計を維持し、ウェアラブルデバイスなどの空間制限のあるプロジェクトに最適です。

## ハードウェア概要

<table align="center">
 <tr>
     <th>XIAO ESP32C6 表示図</th>
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

:::tip RF スイッチ

**RF スイッチ**機能により、`GPIO14`を設定することで内蔵セラミックアンテナと外部アンテナを切り替えることができます。この機能を有効にするには、*まず`GPIO3`をローレベルに設定する必要があります*。これによりRFスイッチ制御が有効になります。

- **GPIO14 ローレベル（デフォルト設定）**：デバイスは内蔵セラミックアンテナを使用します。
- **GPIO14 ハイレベル**：デバイスは外部アンテナに切り替わります。

デフォルトでは、`GPIO14`はローレベルに設定されており、内蔵アンテナが有効になっています。外部アンテナを使用するには、`GPIO14`をハイレベルに設定します。外部アンテナを有効にするための`GPIO3`と`GPIO14`の設定に関するガイダンスについては、以下のサンプルコードを参照してください：

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

| XIAO ピン                | 機能      | チップピン | 代替機能           | 説明                                 |
| :---------------------: | :-------: | :-------: | :----------------: | :---------------------------------- |
| 5V                      | VBUS      |           |                    | 電源入力/出力                        |
| GND                     |           |           |                    |                                      |
| 3V3                     | 3V3_OUT   |           |                    | 電源出力                             |
| D0                      | Analog    | GPIO0     | LP_GPIO0           | GPIO、ADC                            |
| D1                      | Analog    | GPIO1     | LP_GPIO1           | GPIO、ADC                            |
| D2                      | Analog    | GPIO2     | LP_GPIO2           | GPIO、ADC                            |
| D3                      | Digital   | GPIO21    | SDIO_DATA1         | GPIO                                 |
| D4                      | SDA       | GPIO22    | SDIO_DATA2         | GPIO、I2C データ                     |
| D5                      | SCL       | GPIO23    | SDIO_DATA3         | GPIO、I2C クロック                   |
| D6                      | TX        | GPIO16    |                    | GPIO、UART 送信                      |
| D7                      | RX        | GPIO17    |                    | GPIO、UART 受信                      |
| D8                      | SCK       | GPIO19    | SDIO_CLK           | GPIO、SPI クロック                   |
| D9                      | MISO      | GPIO20    | SDIO_DATA0         | GPIO、SPI データ                     |
| D10                     | MOSI      | GPIO18    | SDIO_CMD           | GPIO、SPI データ                     |
| MTDO                    |           | GPIO7     |                    | JTAG                                 |
| MTDI                    |           | GPIO5     |                    | JTAG、ADC                            |
| MTCK                    |           | GPIO6     |                    | JTAG、ADC                            |
| MTMS                    |           | GPIO4     |                    | JTAG、ADC                            |
| EN                      |           | CHIP_PU   |                    | リセット                             |
| Boot                    |           | GPIO9     |                    | ブートモード開始                     |
| RF Switch Port Select   |           | GPIO14    |                    | オンボードアンテナとUFLアンテナの切り替え |
| RF Switch Power         |           | GPIO3     |                    | 電源                                 |
| Light                   |           | GPIO15    |                    | ユーザーライト                       |
## 入門ガイド

XIAO ESP32C6 をより早く使い始められるように、以下のハードウェアとソフトウェアの準備を読んで XIAO を準備してください。

### ハードウェア準備

以下を準備する必要があります：

- 1 x [Seeed Studio XIAO ESP32C6](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html)
- 1 x コンピュータ
- 1 x USB Type-C ケーブル

:::tip
一部のUSBケーブルは電源供給のみで、データ転送ができません。USBケーブルをお持ちでない場合や、お使いのUSBケーブルがデータ転送可能かわからない場合は、[Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)をご確認ください。
:::

#### ヘッダーのはんだ付け

XIAO ESP32C6はデフォルトでピンヘッダーが付属していないため、独自にピンヘッダーを準備し、XIAOの対応するピンにはんだ付けして、拡張ボードやセンサーに接続できるようにする必要があります。

XIAO ESP32C6は小型サイズのため、ヘッダーをはんだ付けする際は注意深く行い、異なるピン同士をくっつけたり、シールドや他の部品にはんだを付着させたりしないでください。そうしないと、XIAOがショートしたり正常に動作しなくなる可能性があり、これによって生じる結果はユーザーの責任となります。

#### BootLoader モード

間違ったプログラムを使用してXIAOがポートを失ったり、正常に動作しなくなったりすることがあります。具体的な症状は以下の通りです：

- コンピュータに接続されているが、XIAOのポート番号が見つからない。
- コンピュータが接続されてポート番号が表示されるが、プログラムのアップロードに失敗する。

上記の2つの状況に遭遇した場合、XIAOをBootLoaderモードにすることで、デバイスの認識不良やアップロード失敗の問題の大部分を解決できます。具体的な方法は以下の通りです：

- **ステップ 1**. XIAO ESP32C6のBOOTボタンを離さずに押し続けます。
- **ステップ 2**. BOOTボタンを押したまま、データケーブルでコンピュータに接続します。コンピュータに接続後、BOOTボタンを離します。
- **ステップ 3**. **Blink**プログラムをアップロードして、XIAO ESP32C6の動作を確認します。

#### リセット

プログラムが異常に動作している場合、電源投入時にResetを一度押すことで、XIAOにアップロードされたプログラムを再実行させることができます。

電源投入時にBOOTキーを押し続けてからResetキーを一度押すことでも、BootLoaderモードに入ることができます。

### ソフトウェア準備

XIAO ESP32C6の推奨プログラミングツールはArduino IDEです。そのため、ソフトウェア準備の一環としてArduinoのインストールを完了する必要があります。

:::tip
Arduinoを初めて使用する場合は、[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。

また、XIAO ESP32C6のオンボードパッケージには少なくともバージョン**2.0.8**が必要です。

:::

- **ステップ 1.** お使いのオペレーティングシステムに応じて、Arduino IDEの安定版をダウンロードしてインストールします。

  <div class="download_arduino_container" style={{textAlign: 'center'}}>
      <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDEをダウンロード</font></span></strong></a>
  </div>

  <br></br>
- **ステップ 2.** Arduinoアプリケーションを起動します。
- **[ステップ 3](#add-board).** XIAO ESP32C6オンボードパッケージをArduino IDEに追加し、`OK`をクリックします。
- **ステップ 4.** Arduino IDEを閉じて再度開きます。

#### XIAO-C6 ボードの追加 {#add-board}

XIAO ESP32C6ボードをインストールするには、以下の手順に従ってください：

```
https://espressif.github.io/arduino-esp32/package_esp32_index.json
```

1. 上記のボードマネージャーURLをArduino IDEの設定に追加します。これは[Installing - Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html#installing-using-arduino-ide)から取得したものです。

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/boards_url.png" style={{width: 'auto', height: 'auto'}}/></div>

2. XIAO ESP32C6ボードパッケージをダウンロードします。

:::note
esp32ボードのバージョンが`3.0.0`より大きい場合のみ利用可能です。
:::

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/install_board.png" style={{width: 'auto', height: 'auto'}}/></div>

3. `XIAO_ESP32C6`バリアントを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/select_xiao_c6.png" style={{width:1000, height:'auto'}}/></div>

これでコーディングを楽しめます ✨。

#### 最初のBlinkプログラムを実行する

- **ステップ 1.** Arduinoアプリケーションを起動します。

- **ステップ 2.** **File > Examples > 01.Basics > Blink**に移動し、プログラムを開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/11.png" style={{width:700, height:'auto'}}/></div>

- **ステップ 3.** ボードモデルを**XIAO ESP32C6**に選択し、正しいポート番号を選択してプログラムをアップロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/upload_program.png" style={{width:1000, height:'auto'}}/></div>

プログラムが正常にアップロードされると、以下の出力メッセージが表示され、XIAO ESP32C6の右側にあるオレンジ色のLEDが点滅していることが確認できます。

<table>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/XIAOC6_flash_firmware.png" style={{width:680, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/XIAOC6-blink.gif" style={{width:400, height:'auto'}}/></div></td>
 </tr>
</table>

## バッテリー使用

XIAO ESP32C6 シリーズには内蔵電源管理チップが搭載されており、バッテリーで独立して電源供給したり、USBポート経由でバッテリーを充電したりできます。

XIAOにバッテリーを接続する場合は、認定された充電式3.7Vリチウムバッテリーの使用をお勧めします。バッテリーをはんだ付けする際は、正極と負極の端子を慎重に区別してください。負極パッドは「D8」のシルクスクリーンマーキング近くの左側に、正極パッドは「D5」のシルクスクリーンマーキング近くの右側に配置する必要があります。

:::caution
バッテリー電源を使用する場合、5Vピンには電圧が存在しません。
:::

:::tip 赤色インジケーターライト

XIAO ESP32C6には、[XIAO ESP32S3](/ja/xiao_esp32s3_getting_started/#battery-usage)と同様に、バッテリー充電用の赤色インジケーターライトがあります：

XIAO ESP32C6の赤色ライトの動作は以下の通りです：

- バッテリーが接続されていない場合：
  - Type-Cケーブルが接続されると赤色ライトが点灯し、30秒後に消灯します。
- バッテリーが接続されてType-Cケーブルが充電のために接続されている場合：
  - 赤色ライトが点滅します。
- Type-C接続でバッテリーが完全に充電された場合：
  - 赤色ライトが消灯します。

:::

## バッテリー電圧の読み取り

XIAO ESP32C6でバッテリー電圧を監視するには、[XIAO ESP32C3](/ja/XIAO_ESP32C3_Getting_Started/#check-the-battery-voltage)と同様に、200kΩ抵抗を1:2構成ではんだ付けする必要があります。この設定により電圧が半分に減少し、A0アナログポート経由で安全に監視できます。

### サンプルコード

以下のコードはA0ポートでADCを初期化し、16回の読み取りを平均してバッテリー電圧を計算し、分圧器の1:2減衰比を調整します。

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

このコードはADCから16回測定を行い、それらを平均し、分圧器の1:2比を補正してバッテリー電圧を小数点以下3桁の精度でボルト単位で出力します。

## ディープスリープモードとウェイクアップ

XIAO ESP32C6には完全なディープスリープモードとウェイクアップ機能があります。ここでは、ESPが提供するより一般的な2つの例を示します。

### デモ1：外部ウェイクアップ付きディープスリープ

このコードは、外部トリガーをウェイクアップソースとしてディープスリープを使用する方法と、再起動時にデータを使用するためにRTCメモリにデータを保存する方法を示しています。

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

### デモ2: タイマーウェイクアップ付きディープスリープ

ESP32は、IoTアプリケーションにとって電力が重要な要素であるため、効果的な省電力のためのディープスリープモードを提供しています。このモードでは、CPU、RAMの大部分、およびAPB_CLKからクロックされるすべてのデジタル周辺機器の電源が切られます。チップの中で電源を入れたままにできる部分は、RTCコントローラー、RTC周辺機器、およびRTCメモリのみです。

このコードは、タイマーでウェイクアップする最も基本的なディープスリープと、再起動時に使用するためにRTCメモリにデータを保存する方法を示しています。

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
ディープスリープモードとウェイクアップ機能をより多く使用する方法を学びたい場合は、Arduino IDEでESPがチップ用に公式に作成したより多くのサンプルプログラムを見つけることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/16.png" style={{width:600, height:'auto'}}/></div>
:::

## リソース

**ハードウェア設計**
- **📄[データシート]** [Espressif ESP32-C6 データシート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/res/esp32-c6_datasheet_en.pdf )
- **📄[回路図]** [XIAO ESP32-C6 回路図](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/XIAO_ESP32_C6_v1.0_SCH_260114.pdf )
- **🗃️[PCB設計ファイル]** [XIAO ESP32-C6 KiCadプロジェクト](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/XIAO_ESP32_C6_v1.0_SCH&PCB_260114.zip )
- **🗃️[PCB設計ライブラリ]** 
  - [XIAO シリーズ KiCadフットプリント](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_Footprints.zip )
  - [XIAO シリーズ KiCad SCHシンボル](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[ピン配置図]** [XIAO ESP32-C6 ピン配置シート](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/res/XIAO_ESP32C6_Pinout.xlsx )

**機械設計**
- **📄[3Dモデル]** [XIAO ESP32-C6 3Dモデル](https://grabcad.com/library/seeed-studio-xiao-esp32-c6-1 )

## コースリソース

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[電子書籍]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
