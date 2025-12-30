---
title: Quectel L76K
description: XIAO用L76K GNSSモジュールの使用開始
keywords:
  - XIAO
  - Quectel L76K
  - GNSS
image: https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg
slug: /ja/get_start_l76k_gnss
sidebar_position: 0
last_update:
  date: 2024-10-14
  author: Spencer
---

# SeeedStudio XIAO用L76K GNSSモジュールの使用開始

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

<!-- TODO Add bazaar link -->

## はじめに

SeeedStudio XIAO用L76K GNSSモジュールは、すべてのXIAO開発ボードと互換性のあるマルチGNSS（全球航法衛星システム）モジュールで、GPS、BeiDou（BDS）、GLONASS、QZSSシステムをサポートし、マルチシステム組み合わせまたは単一システム独立測位を可能にします。また、AGNSS機能をサポートし、低ノイズアンプとサーフェスフィルターを内蔵し、高速、正確、高性能な優れた測位体験を提供します。

このモジュールには、GPS L1 C/A、BeiDou B1、GLONASS L1バンドをカバーする高性能アクティブGNSSアンテナが付属しています。設計には、測位時の1PPS出力を示す小さな明るい緑色LEDも含まれています。

### 特徴

- **受信性能向上：** 低ノイズアンプとサーフェス弾性波フィルターを内蔵し、感度向上とノイズ低減を実現
- **高精度：** 32/72チャンネル、-162dBm追跡、-160dBm再取得感度
- **省エネルギー**: 41mA追跡/取得、360µAスタンバイ
- **マルチGNSSシステム**: Quectel L76Kを搭載し、GPS、BeiDou、GLONASS、QZSSをサポート
- **セラミックアンテナ：** 信号受信を強化し、従来のアンテナより優れた性能

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
     <td>32追跡ch/72取得ch</td>
 </tr>
  <tr>
     <th>TTFF（初回測位時間）</th>
     <td>コールドスタート: 30秒（AGNSS無し）、5.5秒（GNSS有り）<br></br> ホットスタート: 5.5秒（AGNSS無し）、2秒（AGNSS有り）</td>
 </tr>
  <tr>
     <th>感度</th>
     <td>自動取得: -148dBm<br></br> 追跡: -162dBm<br></br> 再取得: -160dBm</td>
 </tr>
  <tr>
     <th>精度</th>
     <td>位置: 2.0m CEP<br></br> 速度: 0.1m/s<br></br> 加速度: 0.1m/s²<br></br> タイミング: 30ns</td>
 </tr>
  <tr>
     <th>UARTインターフェース</th>
     <td>ボーレート: 9600~115200bps（デフォルト9600bps）<br></br> 更新レート: 1Hz（デフォルト）、5Hz（最大）<br></br> プロトコル: NMEA 0183、CASIC独自プロトコル </td>
 </tr>
  <tr>
     <th>アンテナ</th>
     <td>タイプ: アクティブアンテナ<br></br> 動作周波数: 1559–1606MHz<br></br> 同軸ケーブル: RF1.13 長さ=10cm<br></br> ケーブルコネクタ: U.FL プラグ RA </td>
 </tr>
  <tr>
     <th>消費電流（アクティブアンテナ使用時）</th>
     <td>自動取得: 41mA<br></br> 追跡: 41mA<br></br> スタンバイ: 360uA </td>
 </tr>
  <tr>
     <th>寸法</th>
     <td>18mm x 21mm</td>
 </tr>
</table>
</div>

## ハードウェア概要

開始する前に、以下の図を参照してSeeedStudio XIAO用L76K GNSSモジュールのピン設計を理解し、モジュールの機能の理解を促進できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/gnss-xiao-pinout.png" style={{width:800, height:'auto'}}/></div>

## 使用開始

### ハードウェア準備

L76K GNSSモジュールの機能を十分に体験するために、XIAOシリーズのマザーボードとペアリングすることをお勧めします。*以下のXIAOモデルのいずれも*L76K GNSSモジュールとの使用に互換性があります。

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
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

XIAOマザーボードでこのモジュールを使用する前に、モジュールにヘッダーソケットを取り付け、アクティブGNSSアンテナをモジュールに接続する必要があります。XIAOに接続する際は、モジュールの取り付け方向に特に注意してください。逆向きに差し込まないでください。そうしないとモジュールやXIAOを破損する可能性があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/gnss-xiao-assembled.png" style={{width:500, height:'auto'}}/></div>

:::caution
モジュールの取り付け方向に特に注意してください。逆向きに差し込まないでください。そうしないとモジュールやXIAOを破損する可能性があります。
:::

### ソフトウェア準備

SeeedStudio XIAO用L76K GNSSモジュールを使用するには、XIAOシリーズをプログラムする必要があります。推奨プログラミングツールはArduino IDEで、XIAOのArduino環境を設定し、オンボードパッケージを追加する必要があります。

:::tip
Arduinoを初めて使用する場合は、[Arduinoの使用開始](/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

#### ステップ1. お使いのオペレーティングシステムに応じてArduino IDEの安定版をダウンロードしてインストール

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDEをダウンロード</font></span></strong></a>
</div>

#### ステップ2. Arduinoアプリケーションを起動

#### ステップ3. 使用するXIAO用にArduino IDEを設定

- 後のルーチンで**Seeed Studio XIAO SAMD21**を使用したい場合は、**[このチュートリアル](/ja/Seeeduino-XIAO/#software)**を参照して追加を完了してください。

- 後のルーチンで**Seeed Studio XIAO RP2040**を使用したい場合は、**[このチュートリアル](/ja/XIAO-RP2040-with-Arduino/#software-setup)**を参照して追加を完了してください。

- 後のルーチンで**Seeed Studio XIAO nRF52840**を使用したい場合は、**[このチュートリアル](/ja/XIAO_BLE/#software-setup)**を参照して追加を完了してください。

- 後のルーチンで**Seeed Studio XIAO ESP32C3**を使用したい場合は、**[このチュートリアル](/ja/XIAO_ESP32C3_Getting_Started#software-setup)**を参照して追加を完了してください。

- 後のルーチンで**Seeed Studio XIAO ESP32S3**を使用したい場合は、**[このチュートリアル](/ja/xiao_esp32s3_getting_started#software-preparation)**を参照して追加を完了してください。

#### ステップ4. ArduinoにTinyGPSPlusライブラリを追加

まず、Arduino IDEで最新版の**TinyGPSPlus**ライブラリを検索してダウンロードする必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/installing-tinygpsplus.png" style={{width:800, height:'auto'}}/></div>

## アプリケーションデモ

### 例1：GNSSデータの読み取りと表示

ハードウェアとソフトウェアの準備ができたら、最初のサンプルプログラムのアップロードを開始します。L76K GNSSモジュールは電源投入後、1秒ごとにシリアルポート経由でGNSS情報を出力します。この例では、**TinyGPSPlus**ライブラリを使用してモジュールから受信したNMEA文を解析し、緯度、経度、時刻を含む結果をArduino IDEのシリアルモニターに出力します。

ソースコードは以下の通りです：

```cpp
#include <TinyGPSPlus.h>
#include <SoftwareSerial.h>
/*
   This sample sketch demonstrates how to use L76K GNSS Module on SeeedStudio XIAO.
*/
static const int RXPin = D7, TXPin = D6;
static const uint32_t GPSBaud = 9600;

// The TinyGPSPlus object
TinyGPSPlus gps;

// The serial connection to the GNSS module
SoftwareSerial ss(RXPin, TXPin);

void setup() {
  Serial.begin(115200);
#ifdef ARDUINO_SEEED_XIAO_RP2040
  pinMode(D2,OUTPUT);
  digitalWrite(D2,1);
  pinMode(D0,OUTPUT);
  digitalWrite(D0,1);
#endif
  ss.begin(GPSBaud);

  Serial.println(F("DeviceExample.ino"));
  Serial.println(F("A simple demonstration of TinyGPSPlus with L76K GNSS Module"));
  Serial.print(F("Testing TinyGPSPlus library v. "));
  Serial.println(TinyGPSPlus::libraryVersion());
  Serial.println(F("by Mikal Hart"));
  Serial.println();
}

void loop() {
  // This sketch displays information every time a new sentence is correctly encoded.
  while (ss.available() > 0)
    if (gps.encode(ss.read()))
      displayInfo();

  if (millis() > 5000 && gps.charsProcessed() < 10) {
    Serial.println(F("No GPS detected: check wiring."));
    while (true);
  }
}

void displayInfo() {
  Serial.print(F("Location: "));
  if (gps.location.isValid()) {
    Serial.print(gps.location.lat(), 6);
    Serial.print(F(","));
    Serial.print(gps.location.lng(), 6);
  } else {
    Serial.print(F("INVALID"));
  }

  Serial.print(F("  Date/Time: "));
  if (gps.date.isValid()) {
    Serial.print(gps.date.month());
    Serial.print(F("/"));
    Serial.print(gps.date.day());
    Serial.print(F("/"));
    Serial.print(gps.date.year());
  } else {
    Serial.print(F("INVALID"));
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
    Serial.print(F("INVALID"));
  }

  Serial.println();
}
```

使用している XIAO と XIAO が接続されているポート番号を選択し、コンパイルしてアップロードするだけです。

L76K GNSS モジュールが良好な GNSS 信号を受信できる屋外に設置されていることを確認してください。コードを XIAO にアップロードして数分待つと、シリアルモニターに情報が表示されるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/gnss-output.png" style={{width:800, height:'auto'}}/></div>

このコードは TinyGPSPlus ライブラリを使用して、シリアル接続経由で L76K GNSS モジュールからデータを読み取り、有効な位置情報と日時をシリアルモニターに表示します。

## 設定

### 例 1: LED の動作を変更する

このセクションでは、シリアル通信を通じて特定の16進コマンドを送信することで、Arduino を使用して緑色の LED を制御する方法を説明します。以下の例では、LED をオフにしてから通常の点滅状態に戻す方法を示しています。

```cpp
static const int RXPin = D7, TXPin = D6;
static const uint32_t GPSBaud = 9600;
SoftwareSerial SerialGNSS(RXPin, TXPin);

void setup() {
  SerialGNSS.begin(GPSBaud);

  // Define the byte array to turn the LED off
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

  // Define the byte array to recover the LED blinking state
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

  // Send the command to turn off the LED.
  SerialGNSS.write(OffState, sizeof(OffState));
  // Wait for 5 seconds.
  delay(5000);
  // Send the command to return the LED to blinking.
  SerialGNSS.write(RecoverState, sizeof(RecoverState));
}

void loop() {}
```

:::info
詳細については、Quectel_L76K_GNSS の CASIC プロトコルメッセージを参照してください。

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
<summary>充電式電池で XIAO に電力を供給できますか？</summary>
いいえ、この文脈での充電式電池は、リアルタイムクロック（RTC）と L76K GNSS モジュールのウォームスタート状態の維持にのみ使用されます。XIAO や GNSS モジュールの一般的な動作の主電源として使用することはできません。
</details>

<details>
<summary>GNSS 情報がシリアルモニターに表示されないのはなぜですか？</summary>

L76K GNSS モジュールが良好な GNSS 信号を受信できる屋外に設置されていることを確認してください。
</details>

<details>
<summary>XIAO RP2040 に接続したときにデバイスの緑色ライトが常時点灯するのはなぜですか？</summary>
この問題を解決するには、D0 と D2 をハイにプルする必要があります。固定緑色ライトの常時点灯は、デバイスが異常な動作状態に入ったことを示しています。

```cpp
pinMode(D2,OUTPUT);
digitalWrite(D2,1);
pinMode(D0,OUTPUT);
digitalWrite(D0,1);
```

</details>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
