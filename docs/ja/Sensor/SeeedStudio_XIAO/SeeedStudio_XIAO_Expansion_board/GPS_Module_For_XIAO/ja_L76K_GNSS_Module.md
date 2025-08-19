---
title: Quectel L76K
description: L76K GNSSモジュールを使用したXIAOの始め方
keywords:
  - XIAO
  - Quectel L76K
  - GNSS
image: https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg
slug: /ja/get_start_l76k_gnss
sidebar_position: 0
last_update:
  date: 05/15/2025
  author: Spencer
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# SeeedStudio XIAO用L76K GNSSモジュールの始め方

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

<!-- TODO バザールリンクを追加 -->

## 概要

SeeedStudio XIAO用L76K GNSSモジュールは、すべてのXIAO開発ボードと互換性のあるマルチGNSS（全地球航法衛星システム）モジュールです。GPS、BeiDou（BDS）、GLONASS、QZSSシステムをサポートし、マルチシステムの組み合わせまたは単一システムの独立した測位が可能です。また、AGNSS機能をサポートし、低ノイズアンプと音響表面フィルターを内蔵しており、高速で正確かつ高性能な測位体験を提供します。

このモジュールには、GPS L1 C/A、BeiDou B1、GLONASS L1バンドをカバーする高性能なアクティブGNSSアンテナが付属しています。また、固定時の1PPS出力を示す明るい緑色の小型LEDも搭載されています。

### 特徴

- **受信性能の向上:** 内蔵低ノイズアンプと音響表面波フィルターにより、感度とノイズ低減を改善
- **高精度:** 32/72チャンネル、-162dBmトラッキング、-160dBm再取得感度
- **省エネルギー:** トラッキング/取得時41mA、待機時360µA
- **マルチGNSSシステム:** Quectel L76K搭載、GPS、BeiDou、GLONASS、QZSSをサポート
- **セラミックアンテナ:** 信号受信を強化し、従来のアンテナより優れた性能を発揮

### 仕様

<div class="table-center">
<table align="center">
 <tr>
     <th>項目</th>
     <th>詳細</th>
 </tr>
 <tr>
     <th>GNSSバンド</th>
     <td>GPS L1 C/A: 1575.42MHz<br></br> GLONASS L1: 1602MHz<br></br> BeiDou B1: 1561.098MHz</td>
 </tr>
 <tr>
     <th>チャンネル</th>
     <td>32トラッキングチャンネル/72取得チャンネル</td>
 </tr>
  <tr>
     <th>TTFF（初期測位時間）</th>
     <td>コールドスタート: 30秒（AGNSSなし）、5.5秒（GNSSあり）<br></br> ホットスタート: 5.5秒（AGNSSなし）、2秒（AGNSSあり）</td>
 </tr>
  <tr>
     <th>感度</th>
     <td>自動取得: -148dBm<br></br> トラッキング: -162dBm<br></br> 再取得: -160dBm</td>
 </tr>
  <tr>
     <th>精度</th>
     <td>位置: 2.0m CEP<br></br> 速度: 0.1m/s<br></br> 加速度: 0.1m/s²<br></br> タイミング: 30ns</td>
 </tr>
  <tr>
     <th>UARTインターフェース</th>
     <td>ボーレート: 9600~115200bps（デフォルト9600bps）<br></br> 更新レート: 1Hz（デフォルト）、最大5Hz<br></br> プロトコル: NMEA 0183、CASIC独自プロトコル</td>
 </tr>
  <tr>
     <th>アンテナ</th>
     <td>タイプ: アクティブアンテナ<br></br> 動作周波数: 1559–1606MHz<br></br> 同軸ケーブル: RF1.13 長さ=10cm<br></br> ケーブルコネクタ: U.FLプラグRA</td>
 </tr>
  <tr>
     <th>電流消費量（アクティブアンテナ使用時）</th>
     <td>自動取得: 41mA<br></br> トラッキング: 41mA<br></br> 待機: 360µA</td>
 </tr>
  <tr>
     <th>寸法</th>
     <td>18mm x 21mm</td>
 </tr>
</table>
</div>

## ハードウェア概要

始める前に、以下の画像を参照して SeeedStudio XIAO 用 L76K GNSS モジュールのピン設計を理解し、モジュールの機能を把握するのに役立ててください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/gnss-xiao-pinout.png" style={{width:800, height:'auto'}}/></div>

## はじめに

### ハードウェア準備

L76K GNSS モジュールの機能を最大限に活用するために、XIAO シリーズのマザーボードと組み合わせて使用することをお勧めします。*以下のいずれかの XIAO モデル*が L76K GNSS モジュールと互換性があります。

<table align="center">
 <tr>
  <th>Seeed Studio XIAO SAMD21</th>
  <th>Seeed Studio XIAO RP2040</th>
  <th>Seeed Studio XIAO nRF52840 (Sense)</th>
  <th>Seeed Studio XIAO ESP32C3</th>
  <th>Seeed Studio XIAO ESP32S3 (Sense)</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" style={{width:400, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" style={{width:500, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoblesense.jpg" style={{width:500, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:450, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

このモジュールを XIAO マザーボードで使用する前に、モジュールにヘッダーソケットを取り付け、アクティブ GNSS アンテナをモジュールに接続する必要があります。XIAO に接続する際は、モジュールの取り付け方向に特に注意してください。逆向きに差し込むと、モジュールや XIAO が損傷する可能性があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/gnss-xiao-assembled.png" style={{width:500, height:'auto'}}/></div>

:::caution
モジュールの取り付け方向に特に注意してください。逆向きに差し込むと、モジュールや XIAO が損傷する可能性があります。
:::

### ソフトウェア準備

SeeedStudio XIAO 用 L76K GNSS モジュールを使用するには、XIAO シリーズをプログラムする必要があります。推奨されるプログラミングツールは Arduino IDE であり、XIAO 用に Arduino 環境を設定し、オンボードパッケージを追加する必要があります。

:::tip
Arduino を初めて使用する場合は、[Arduino の使い方](/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

#### ステップ 1. お使いのオペレーティングシステムに応じて安定版の Arduino IDE をダウンロードしてインストール

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDE をダウンロード</font></span></strong></a>
</div>

#### ステップ 2. Arduino アプリケーションを起動

#### ステップ 3. 使用する XIAO に応じて Arduino IDE を設定

- **Seeed Studio XIAO SAMD21** を使用する場合は、**[このチュートリアル](/ja/Seeeduino-XIAO/#software)** を参照して設定を完了してください。

- **Seeed Studio XIAO RP2040** を使用する場合は、**[このチュートリアル](/ja/XIAO-RP2040-with-Arduino/#software-setup)** を参照して設定を完了してください。

- **Seeed Studio XIAO nRF52840** を使用する場合は、**[このチュートリアル](/ja/XIAO_BLE/#software-setup)** を参照して設定を完了してください。

- **Seeed Studio XIAO ESP32C3** を使用する場合は、**[このチュートリアル](/ja/XIAO_ESP32C3_Getting_Started#software-setup)** を参照して設定を完了してください。

- **Seeed Studio XIAO ESP32S3** を使用する場合は、**[このチュートリアル](/ja/xiao_esp32s3_getting_started#software-preparation)** を参照して設定を完了してください。

#### ステップ 4. TinyGPSPlus ライブラリを Arduino に追加

まず、Arduino IDE で最新バージョンの **TinyGPSPlus** ライブラリを検索してダウンロードしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/installing-tinygpsplus.png" style={{width:800, height:'auto'}}/></div>

## アプリケーションデモ

### 例 1: GNSS データの読み取りと表示

ハードウェアとソフトウェアの準備が整ったら、最初のサンプルプログラムをアップロードします。L76K GNSS モジュールは、電源投入後、1秒ごとにシリアルポートを介して GNSS 情報を出力します。この例では、**TinyGPSPlus** ライブラリを使用してモジュールから受信した NMEA センテンスを解析し、緯度、経度、時刻を含む結果を Arduino IDE のシリアルモニタに表示します。

以下がソースコードです：

```cpp
#include <TinyGPSPlus.h>
#include <SoftwareSerial.h>
/*
   このサンプルスケッチは、SeeedStudio XIAO 上で L76K GNSS モジュールを使用する方法を示します。
*/
static const int RXPin = D7, TXPin = D6;
static const uint32_t GPSBaud = 9600;

// TinyGPSPlus オブジェクト
TinyGPSPlus gps;

// GNSS モジュールへのシリアル接続
SoftwareSerial ss(RXPin, TXPin);

void setup() {
  Serial.begin(115200);
#ifdef ARDUINO_SEEED_XIAO_RP2040
  pinMode(D10,OUTPUT);
  digitalWrite(D10,1);
  pinMode(D0,OUTPUT);
  digitalWrite(D0,1);
#endif
  ss.begin(GPSBaud);

  Serial.println(F("DeviceExample.ino"));
  Serial.println(F("TinyGPSPlus と L76K GNSS モジュールの簡単なデモ"));
  Serial.print(F("TinyGPSPlus ライブラリ v. "));
  Serial.println(TinyGPSPlus::libraryVersion());
  Serial.println(F("by Mikal Hart"));
  Serial.println();
}

void loop() {
  // 新しいセンテンスが正しくエンコードされるたびに情報を表示します。
  while (ss.available() > 0)
    if (gps.encode(ss.read()))
      displayInfo();

  if (millis() > 5000 && gps.charsProcessed() < 10) {
    Serial.println(F("GPS が検出されません: 配線を確認してください。"));
    while (true);
  }
}

void displayInfo() {
  Serial.print(F("位置: "));
  if (gps.location.isValid()) {
    Serial.print(gps.location.lat(), 6);
    Serial.print(F(","));
    Serial.print(gps.location.lng(), 6);
  } else {
    Serial.print(F("無効"));
  }

  Serial.print(F("  日付/時刻: "));
  if (gps.date.isValid()) {
    Serial.print(gps.date.month());
    Serial.print(F("/"));
    Serial.print(gps.date.day());
    Serial.print(F("/"));
    Serial.print(gps.date.year());
  } else {
    Serial.print(F("無効"));
  }

  Serial.print(F(" "));
  if (gps.time.isValid()) {
    if (gps.time.hour() < 10) Serial.print(F("0"));
    Serial.print(gps.time.hour());
    Serial.print(F(":"));
    if (gps.time.minute() < 10) Serial.print(F("0"));
    Serial.print(gps.time.minute());
    Serial.print(F(":"));
    if (gps.time.second() < 10) Serial.print(F("0"));
    Serial.print(gps.time.second());
    Serial.print(F("."));
    if (gps.time.centisecond() < 10) Serial.print(F("0"));
    Serial.print(gps.time.centisecond());
  } else {
    Serial.print(F("無効"));
  }

  Serial.println();
}
```

使用している XIAO と XIAO が接続されているポート番号を選択し、コンパイルしてアップロードしてください。

L76K GNSS モジュールが良好な GNSS 信号を受信できる屋外に設置されていることを確認してください。コードを XIAO にアップロードし、数分待つと、シリアルモニタに情報が表示されるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/gnss-output.png" style={{width:800, height:'auto'}}/></div>

このコードは、TinyGPSPlus ライブラリを使用してシリアル接続を介して L76K GNSS モジュールからデータを読み取り、有効な位置情報と日付/時刻をシリアルモニタに表示します。

## 設定

### 例 1: LEDの動作を変更する

このセクションでは、Arduinoを使用してシリアル通信を介して特定の16進コマンドを送信することで、緑色のLEDを制御する方法を示します。以下の例では、LEDを消灯し、その後通常の点滅状態に戻す方法を説明します。

```cpp
static const int RXPin = D7, TXPin = D6;
static const uint32_t GPSBaud = 9600;
SoftwareSerial SerialGNSS(RXPin, TXPin);

void setup() {
  SerialGNSS.begin(GPSBaud);

  // LEDを消灯するためのバイト配列を定義
  byte OffState[] = {0xBA, 0xCE, 0x10, 0x00, 0x06, 0x03, 0x40, 
                     0x42, 0x0F, 0x00, 0xA0, 0x86, 0x01, 0x00, 
                     // highlight-start
                     0x00, 
                     // highlight-end
                     0x00, 0x01, 0x05, 0x00, 0x00, 0x00, 0x00, 
                     // highlight-start
                     0xF0, 
                     // highlight-end
                     0xC8, 0x17, 0x08};

  // LEDの点滅状態を復元するためのバイト配列を定義
  byte RecoverState[] = {0xBA, 0xCE, 0x10, 0x00, 0x06, 0x03, 0x40, 
                         0x42, 0x0F, 0x00, 0xA0, 0x86, 0x01, 0x00, 
                         // highlight-start
                         0x03, 
                         // highlight-end
                         0x00, 0x01, 0x05, 0x00, 0x00, 0x00, 0x00,
                         // highlight-start
                         0xF3, 
                         // highlight-end
                         0xC8, 0x17, 0x08};

  // LEDを消灯するコマンドを送信
  SerialGNSS.write(OffState, sizeof(OffState));
  // 5秒間待機
  delay(5000);
  // LEDを点滅状態に戻すコマンドを送信
  SerialGNSS.write(RecoverState, sizeof(RecoverState));
}

void loop() {}
```

:::info
Quectel_L76K_GNSSのCASICプロトコルメッセージの詳細については以下を参照してください。

```c
struct CASIC_Messages {  
  uint16_t header; // 0xBA, 0xCE
  uint16_t len;    // 0x10, 0x00
  uint8_t class;   // 0x06
  uint8_t id;      // 0x03
  uint8_t* payload; // 0x40, 0x42, 0x0F, 0x00, 0xA0, 0x86, 0x01, 0x00, ->8
                   // 0x00, 0x00, 0x01, 0x05, 0x00, 0x00, 0x00, 0x00, ->8
  uint8_t checksum; // 0xF0,0xC8, 0x17, 0x08
} L76KStruct;
```

:::

## リソース

- **PDF**: [L76K GNSS Module for Seeed Studio XIAO Schematic](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/109100021-L76K-GNSS-Module-for-Seeed-Studio-XIAO-Schematic.pdf)
- **PDF**: [Quectel_L76K_GNSS_协议规范_V1.0](https://raw.githubusercontent.com/Seeed-Projects/Seeed_L76K-GNSS_for_XIAO/fb74b715224e0ac153c3884e578ee8e024ed8946/docs/Quectel_L76K_GNSS_协议规范_V1.0.pdf)
- **PDF**: [Quectel_L76K_GNSS_Protocol_Specification_V1.1](https://raw.githubusercontent.com/Seeed-Projects/Seeed_L76K-GNSS_for_XIAO/fb74b715224e0ac153c3884e578ee8e024ed8946/docs/Quectel_L76K_GNSS_Protocol_Specification_V1.1.pdf)
- **GitHub**: [Seeed_L76K-GNSS_for_XIAO](https://github.com/Seeed-Projects/Seeed_L76K-GNSS_for_XIAO)

## トラブルシューティング

<details>
<summary>充電式セルはXIAOを電源供給できますか？</summary>
いいえ、このコンテキストでの充電式セルは、リアルタイムクロック（RTC）とL76K GNSSモジュールのウォームスタート状態を維持するためだけに使用されます。XIAOやGNSSモジュールの一般的な動作のための主要な電源として使用することはできません。
</details>

<details>
<summary>GNSS情報がシリアルモニターに表示されないのはなぜですか？</summary>

L76K GNSSモジュールが良好なGNSS信号を受信できる屋外に配置されていることを確認してください。
</details>

<details>
<summary>デバイスの緑色のライトがXIAO RP2040に接続した際に常時点灯するのはなぜですか？</summary>
この問題を解決するには、D0とD10をハイにする必要があります。緑色のライトが常時点灯している場合、デバイスが異常な動作状態に入っていることを示しています。

```cpp
pinMode(D10,OUTPUT);
digitalWrite(D10,1);
pinMode(D0,OUTPUT);
digitalWrite(D0,1);
```

</details>

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>