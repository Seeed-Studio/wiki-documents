---
description: Seeed Studio XIAO nRF52840 シリーズの始め方
title: Seeed Studio XIAO nRF52840 シリーズの始め方
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg
slug: /ja/XIAO_BLE
last_update:
  date: 05/15/2025
  author: Clara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Seeed Studio XIAO nRF52840 シリーズの始め方

<meta name="google-site-verification" content="2bq3L0F_PFVokQM-qT-al7x9FcSNJOO8TtJfAHW43lE" />

<div className="w-full overflow-x-auto">
  <table className="min-w-full">
    <tr>
      <th>XIAO nRF52840</th>
      <th>XIAO nRF52840 Sense</th>
      <th>XIAO nRF52840 Plus</th>
      <th>XIAO nRF52840 Sense Plus</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img 
            src="https://files.seeedstudio.com/wiki/XIAO-BLE/nrf52840_front.jpg"
            style={{width: '100%', maxWidth: '250px', height: 'auto'}}
          />
        </div>
      </td>
      <td>
        <div style={{textAlign: 'center'}}>
          <img 
            src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840sence.png"
            style={{width: '100%', maxWidth: '250px', height: 'auto'}}
          />
        </div>
      </td>
      <td>
        <div style={{textAlign: 'center'}}>
          <img 
            src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840plus.png"
            style={{width: '100%', maxWidth: '250px', height: 'auto'}}
          />
        </div>
      </td>
      <td>
        <div style={{textAlign: 'center'}}>
          <img 
            src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840senceplus.png"
            style={{width: '100%', maxWidth: '250px', height: 'auto'}}
          />
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a 
            className="get_one_now_item" 
            href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html"
          >
            <strong>
              <span>
                <font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱</font>
              </span>
            </strong>
          </a>
        </div>
      </td>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a 
            className="get_one_now_item" 
            href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html"
          >
            <strong>
              <span>
                <font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱</font>
              </span>
            </strong>
          </a>
        </div>
      </td>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a 
            className="get_one_now_item" 
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html"
          >
            <strong>
              <span>
                <font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱</font>
              </span>
            </strong>
          </a>
        </div>
      </td>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a 
            className="get_one_now_item" 
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html"
          >
            <strong>
              <span>
                <font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱</font>
              </span>
            </strong>
          </a>
        </div>
      </td>
    </tr>
  </table>
</div>

Seeed Studio XIAO ファミリーの最初のワイヤレス製品として、**Seeed Studio XIAO nRF52840** は強力な **Nordic nRF52840 MCU** を搭載しており、**Bluetooth 5.0** 接続を統合しています。また、**小型で洗練されたフォームファクター**を持ち、ウェアラブルデバイスや IoT プロジェクトに使用できます。**片面実装可能なデザイン**とオンボードの **Bluetooth アンテナ**により、IoT プロジェクトの迅速な展開が大幅に容易になります。

さらに、このボードの上位版である **Seeed Studio XIAO nRF52840 Sense** もあります。このボードには、2つの追加のオンボードセンサーが統合されています。その1つは **パルス密度変調 (PDM) デジタルマイク**で、リアルタイムでオーディオデータを受信できるため、音声認識に使用できます。もう1つは **6軸慣性計測ユニット (IMU)** で、ジェスチャー認識のような TinyML プロジェクトに非常に役立ちます。これらのオンボードセンサーは、超小型でありながらユーザーに大きな利便性を提供します。

新たにアップグレードされた **XIAO nRF52840 Plus** と **XIAO nRF52840 Sense Plus** は、機能性と使いやすさが大幅に向上しています。多機能ピンの数が **20** に増加し、**I2S** と **SPI** リソースが追加され、より複雑なプロジェクトをサポートします。また、**NFC ピン**が公開され、IoT やスマートカードアプリケーションへの統合が容易になり、**BAT ピン**の位置が変更されてはんだ付けの利便性が向上し、よりユーザーフレンドリーなハードウェア体験を提供します。

Seeed Studio XIAO RP2040 と比較すると、Seeed Studio XIAO nRF52840 は **より豊富なインターフェース**を備えています。まず注目すべきは、ボード上で **近距離無線通信 (NFC) インターフェース**が機能することです。次に、Type-C インターフェースの側面に小さな **リセットボタン**があります。反対側には、**3-in-1 LED (ユーザー LED)** と、バッテリー接続時に充電状態を示す **充電 LED** があります。**11 のデジタル I/O** は **PWM ピン**として使用でき、**6 のアナログ I/O** は **ADC ピン**として使用できます。**UART、I2C、SPI** などの一般的なシリアルインターフェースすべてをサポートしています。Seeed Studio XIAO RP2040 と同様に、**オンボード 2 MB フラッシュ**を搭載しており、**Arduino、MicroPython、CircuitPython、その他のプログラミング言語**を使用してプログラムすることができます。

Seeed Studio XIAO nRF52840 Sense は、Seeed Studio XIAO 拡張ボードと互換性があります。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 特徴

- 強力なワイヤレス機能: Bluetooth 5.0（オンボードアンテナ付き）
- 高性能CPU: Nordic nRF52840、ARM® Cortex®-M4 32ビットプロセッサ（FPU付き）、64 MHz
- 超低消費電力: スタンバイ時の消費電力は5μA未満
- バッテリー充電チップ: リチウムバッテリーの充放電管理をサポート
- オンボード2 MBフラッシュ
- オンボードPDMマイク（Seeed Studio XIAO nRF52840 Senseのみ）
- オンボード6軸LSM6DS3TR-C IMU（Seeed Studio XIAO nRF52840 Senseのみ）
- 超小型サイズ: 21 x 17.8mm、ウェアラブルデバイス向けのSeeed Studio XIAOシリーズのクラシックなフォームファクター
- 豊富なインターフェース: XIAO nRF52840 (Sense)では1xUART、1xI2C、1xSPI、1xNFC、1xSWD、11xGPIO(PWM)、6xADCを提供。XIAO nRF52840 (Sense) Plusでは2xUART、1xI2C、2xSPI、1xI2S、1xNFC、1xSWD、18xGPIO(PWM)、6xADCを提供
- 片面部品、表面実装設計

## 仕様比較

<div class="table-center">
	<table align="center">
  <tr>
      <th>項目</th>
      <th style={{width:220, height:'auto'}}>Seeed Studio XIAO nRF52840</th>
      <th style={{width:220, height:'auto'}}>Seeed Studio XIAO nRF52840 Sense</th>
      <th style={{width:220, height:'auto'}}>Seeed Studio XIAO nRF52840 Plus</th>
      <th style={{width:220, height:'auto'}}>Seeed Studio XIAO nRF52840 Sense Plus</th>
  </tr>
  <tr>
      <th>プロセッサ</th>
      <td colspan="4" align="center">Nordic nRF52840、ARM® Cortex®-M4 32ビットプロセッサ（FPU付き）、64 MHz</td>
  </tr>
  <tr>
      <th>ワイヤレス接続</th>
      <td colspan="4" align="center">Bluetooth 5.0/BLE/NFC</td>
  </tr>
  <tr>
      <th>メモリ</th>
      <td colspan="4" align="center">256 KB RAM、1MBフラッシュ、2MBオンボードフラッシュ</td>
  </tr>
  <tr>
      <th>内蔵センサー</th>
      <td align="center">N/A</td>
      <td align="center">6 DOF IMU (LSM6DS3TR-C)、PDMマイク</td>
      <td align="center">N/A</td>
      <td align="center">6 DOF IMU (LSM6DS3TR-C)、PDMマイク</td>
  </tr>
  <tr>
      <th>インターフェース</th>
      <td colspan="2" align="center">1xI2C、1xUART、1xSPI</td>
      <td colspan="2" align="center">1xI2C、2xUART、2xSPI、1xI2S</td>
  </tr>
  <tr>
      <th>PWM/アナログピン</th>
      <td colspan="2" align="center">11/6</td>
      <td colspan="2" align="center">20/6</td>
  </tr>
  <tr>
      <th>オンボードボタン</th>
      <td colspan="4" align="center">リセットボタン</td>
  </tr>
  <tr>
      <th>オンボードLED</th>
      <td colspan="4" align="center">3-in-one LED/充電LED</td>
  </tr>
  <tr>
      <th>バッテリー充電チップ</th>
      <td colspan="4" align="center">BQ25101</td>
  </tr>
  <tr>
      <th>プログラミング言語</th>
      <td colspan="4" align="center">Arduino/MicroPython/CircuitPython</td>
  </tr>
  </table>
</div>

## ハードウェア概要

<Tabs>
<TabItem  value="52540(Sense)" label="XIAO nRF52840/XIAO nRF52840 Sense" default>

<table align="center">
  <tr>
    <th>XIAO nRF52840/XIAO nRF52840 Sense 前面表示図</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/front-pinout-4.jpg" style={{width:700, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF52840/XIAO nRF52840 Sense 背面表示図</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https:///files.seeedstudio.com/wiki/XIAO-BLE/back-pinout-5.jpg" style={{width:700, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF52840/XIAO nRF52840 Sense ピンリスト</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https:///files.seeedstudio.com/wiki/XIAO-BLE/pinout2.png" style={{width:1000, height:'auto'}}/></div></td>
  </tr>
</table>

 </TabItem>
 <TabItem value="52840Plus" label="XIAO nRF52840 Plus/XIAO nRF52840 Sense Plus" default>

 <table align="center">
  <tr>
    <th>XIAO nRF52840 Plus 前面表示図</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/plus_front.png" style={{width:700, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF52840 Plus 背面表示図</th>
  </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/plus_back.png" style={{width:700, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <th>XIAO nRF52840 Plus ピンリスト</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/plus_pinout.png" style={{width:1000, height:'auto'}}/></div></td>
  </tr>
 </table>

</TabItem>

</Tabs>

## 2つのArduinoライブラリ

Seeed Studio XIAO nRF52840は、多くの機能を小さなボードに集約していますが、すべての機能を最大限に発揮できるわけではありません。そのため、Seeedは各機能の性能を**最大限に引き出す**ための2つのArduinoライブラリを公開しました。以下のように使用を推奨します：

- **Bluetooth機能**や「**低消費電力機能**」を利用したい場合は、`Seeed nRF52 Boards`ライブラリを使用することを推奨します。
- **組み込み機械学習アプリケーション**や「**IMU & PDMの高度な機能**」を利用したい場合は、`Seeed nRF52 mbed-enabled Boards`ライブラリを使用することを推奨します。
- 両方のライブラリは、**LED、デジタル、アナログ、シリアル、I2C、SPI**などの基本的な使用において非常に良好にサポートされています。

これら2つのライブラリでサポートされるピン定義は若干異なる場合があり、Seeedは明確になるまでWikiを更新し続けます。

:::tip
1. Seeed nRF52 Boardsのオンボードパッケージを使用する場合、シリアル機能がコンパイルされないことがあります。この場合の解決策として、コードに `#include <Adafruit_TinyUSB.h>` を追加してください。このパッケージは以下からダウンロードできます：https://github.com/adafruit/Adafruit_TinyUSB_Arduino

2. より簡単な方法を好む場合は、最初からSeeed nRF52 mbed-enabled Boardsを選択することをお勧めします。このライブラリは追加の修正なしでシリアル機能のコンパイルをサポートします。
:::

## はじめに

まず、Seeed Studio XIAO nRF52840 (Sense)をコンピュータに接続し、Arduino IDEから簡単なコードをアップロードして、ボードが正常に動作しているか確認します。

### ハードウェアのセットアップ

以下のものを準備してください：

- 1 x [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) または [Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- 1 x コンピュータ
- 1 x USB Type-Cケーブル

:::tip
一部のUSBケーブルは電力供給のみでデータ転送ができない場合があります。USBケーブルを持っていない場合や、使用しているUSBケーブルがデータ転送可能か分からない場合は、[Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)を確認してください。
:::

USB Type-Cケーブルを使用して、Seeed Studio XIAO nRF52840 (Sense)をコンピュータに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/bletpyecconnect.png" alt="pir" width={500} height="auto" /></p>

### ソフトウェアのセットアップ

- **ステップ1.** お使いのオペレーティングシステムに応じて、最新バージョンのArduino IDEをダウンロードしてインストールします。

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/software"><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" alt="pir" width={700} height="auto" /></a></p>

- **ステップ2.** Arduinoアプリケーションを起動します。

- **ステップ3.** Arduino IDEにSeeed Studio XIAO nRF52840 (Sense)ボードパッケージを追加します。

**File > Preferences**に移動し、**"Additional Boards Manager URLs"**に以下のURLを入力します：
    *https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json*

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" alt="pir" width={700} height="auto" /></p>

**Tools > Board > Boards Manager...**に移動し、検索ボックスに「**seeed nrf52**」と入力して、使用したいボードの最新バージョンを選択し、インストールします。両方をインストールすることも可能です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528401.png" alt="pir" width={700} height="auto" /></p>

- **ステップ4.** ボードとポートを選択します。

**ボード**

ボードパッケージをインストールした後、**Tools > Board**に移動し、使用したいボードを選択します。「**Seeed XIAO nRF52840 Sense**」を選択してください。これで、Arduino IDE用のSeeed Studio XIAO nRF52840 (Sense)のセットアップが完了しました。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528402.png" alt="pir" width={700} height="auto" /></p>

**ポート**

**Tools > Port**に移動し、接続されているSeeed Studio XIAO nRF52840 (Sense)のシリアルポート名を選択します。通常、COM3以上が該当します（**COM1**および**COM2**は通常ハードウェアシリアルポート用に予約されています）。接続されているSeeed Studio XIAO nRF52840 (Sense)のシリアルポートには、**Seeed Studio XIAO nRF52840**または**Seeed Studio XIAO nRF52840 Sense**と記載されています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/port.png" alt="pir" width={550} height="auto" /></p>

- **ステップ5.** **File > Examples > 01.Basics > Blink**に移動して、**Blink**の例を開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" alt="pir" width={550} height="auto" /></p>

- **ステップ6.** **Upload**ボタンをクリックして、Blinkの例のコードをボードにアップロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" alt="pir" width={500} height="auto" /></p>

アップロードが完了すると、内蔵の赤色LEDが1秒間隔で点滅するのが確認できます。これで接続が成功したことを意味し、Seeed Studio XIAO nRF52840 (Sense)を使用してさらに多くのプロジェクトを探索する準備が整いました！

## 内蔵 3-in-1 LED を操作する

Seeed Studio XIAO nRF52840 (Sense) には、ユーザーがプログラム可能な **内蔵 3-in-1 LED** が搭載されています。ここでは、Arduino を使用して RGB カラーを個別に制御する方法を学びます！

まず、この LED の動作は通常のコード制御とは異なることを理解する必要があります。この LED は、**LOW 信号**を与えると **点灯**し、**HIGH 信号**を与えると **消灯**します。これは、この LED が共通アノードで制御されており、低レベル信号でのみ点灯するためです。

以下はサンプルコードです：

```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);   
}
```

ここでは、**HIGH** を使用しているにもかかわらず、LED は **消灯** します。LED を **点灯** させるには、**HIGH** を **LOW** に置き換える必要があります。

以下の LED のピンマッピングを参照し、コード内で使用してください：

- 赤色 LED = LED_BUILTIN または LED_RED
- 青色 LED = LED_BLUE
- 緑色 LED = LED_GREEN

## 消費電力の検証

Seeed Studio XIAO nRF52840 は低消費電力設計であり、ここではその検証方法を提供します。この手順では、`Seeed nRF52 Boards` ライブラリを使用することを強く推奨します。

- **ステップ 1.** **JLink** ダウンローダーを使用して、Seeed Studio XIAO nRF52840 (Sense) 用の [ブートローダーファームウェア](https://github.com/0hotpotman0/BLE_52840_Core/blob/main/bootloader/Seeed_XIAO_nRF52840_Sense/Seeed_XIAO_nRF52840_Sense_bootloader-0.6.1_s140_7.3.0.hex) をフラッシュします。

:::note
もし、Seeed Studio XIAO nRF52840 の工場出荷時のファームウェアを使用している場合、またはファームウェアを変更したことがない場合、このステップをスキップできます。
:::

- **ステップ 2.** `Seeed nRF52 Boards` ライブラリを使用します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528403.png" alt="pir" width={800} height="auto" /></p>

- **ステップ 3.** 以下の deep_sleep デモをアップロードし、**Arduino** で実行します。

```cpp
// The MIT License (MIT)
// Copyright (c) 2019 Ha Thach for Adafruit Industries

#include "SdFat.h"
#include "Adafruit_SPIFlash.h"

// カスタム SPI と SS を使用する場合は以下をアンコメント
// #define CUSTOM_CS   A5
// #define CUSTOM_SPI  SPI

#if defined(CUSTOM_CS) && defined(CUSTOM_SPI)
  Adafruit_FlashTransport_SPI flashTransport(CUSTOM_CS, CUSTOM_SPI);

#elif defined(ARDUINO_ARCH_ESP32)
  // ESP32 はコードを格納する同じフラッシュデバイスを使用します。
  // そのため、SPI と SS を指定する必要はありません。
  Adafruit_FlashTransport_ESP32 flashTransport;

#else
  // ボードバリアントでサポートされている場合、オンボード外部フラッシュ (QSPI または SPI) マクロはすでに定義されています。
  // - EXTERNAL_FLASH_USE_QSPI
  // - EXTERNAL_FLASH_USE_CS/EXTERNAL_FLASH_USE_SPI
  #if defined(EXTERNAL_FLASH_USE_QSPI)
    Adafruit_FlashTransport_QSPI flashTransport;

  #elif defined(EXTERNAL_FLASH_USE_SPI)
    Adafruit_FlashTransport_SPI flashTransport(EXTERNAL_FLASH_USE_CS, EXTERNAL_FLASH_USE_SPI);

  #else
    #error ボードバリアントに QSPI/SPI フラッシュが定義されていません！
  #endif
#endif

Adafruit_SPIFlash flash(&flashTransport);

/* カスタムボード用に特定のフラッシュデバイスを使用したい場合は、まず Adafruit_SPIFlash\src\flash_devices.h を確認してください。
 * そこにない場合は、以下の W25Q80DLX_EXAMPLE の例のように独自の定義を作成する必要があります。
 * これらの定義は、使用したいフラッシュデバイスのデータシートの情報に基づいて編集する必要があります。
 * 製造者 ID、メモリタイプ、容量値が不明な場合は、スケッチを実行してシリアル出力を確認してください。
 * フラッシュデバイスはこれらの値を 16 進数の値 (JDEC ID) として報告します。
 * 例：リストの最初のデバイス W25Q80DLX は JDEC ID を 0xef4014 として報告します。
 * これは以下の 3 つの値で構成されています：
 * - manufacturer_id = 0xef
 * - memory_type     = 0x40
 * - capacity        = 0x14
 * このマクロを正しく定義すれば、以下のようにデバイス定義の配列を作成できます。
 * flash_devices.h のリストにあるデバイスや、ここで定義したデバイスを含めることができます。
 * 配列のアイテム数を反映するように 71 行目の変数を更新してください。
 * また、84 行目をアンコメントし、81 行目をコメントアウトして、この配列をフラッシュメモリドライバに渡します。
 */
// ユーザー定義フラッシュメモリデバイスの例：
//#define W25Q80DLX_EXAMPLE                                                               \
//  {                                                                            \
//    .total_size = (1 << 20), /* 1 MiB */                                       \
//        .start_up_time_us = 5000, .manufacturer_id = 0xef,                     \
//    .memory_type = 0x40, .capacity = 0x14, .max_clock_speed_mhz = 80,         \
//    .quad_enable_bit_mask = 0x02, .has_sector_protection = false,              \
//    .supports_fast_read = true, .supports_qspi = true,                         \
//    .supports_qspi_writes = false, .write_status_register_split = false,       \
//    .single_status_byte = false, .is_fram = false,                             \
//  }

/*
 * 上記で定義した設定を使用してデータ構造の配列を作成します。
 * ここでは 2 つのデバイスを使用していますが、必要に応じて追加できます。
 */
//static const SPIFlash_Device_t my_flash_devices[] = {
//    W25Q80DLX_EXAMPLE,
//};
/*
 * 配列にリストされている異なるデバイスの数を指定します。
 * 配列にデバイスを追加した場合、この値を更新してください。
 */
//const int flashDevices = 1;

#include <bluefruit.h>
void setup()
{
  flash.begin();
  Bluefruit.begin(); 
  if(flash.deepPowerDown() == false){
    pinMode(LED_BUILTIN, OUTPUT);
    digitalWrite(LED_BUILTIN, LOW);
    while(1)
    {
      yield();
    }
  }
  flash.end();

  sd_power_system_off(); 
}

void loop()
{
  // 何もすることはありません
}
```

:::tip
ここで、コードを提供してくださった著者 ***daCoder*** に特別な感謝を申し上げます。
:::

**この例についてさらに詳しい情報を知りたい場合は、[こちら](https://forum.seeedstudio.com/t/xiao-sense-accelerometer-examples-and-low-power/270801) をクリックしてください。**

## バッテリー充電電流

バッテリー充電電流は50mAまたは100mAを選択可能で、**Pin13**をHIGHまたはLOWに設定することで50mAまたは100mAに変更できます。低電流充電電流は入力モードがHIGHレベルに設定され、高電流充電電流は出力モードがLOWレベルに設定されます。

**低充電電流**

```cpp
void setup(){
pinMode (P0_13, OUTPUT);
}
void loop() {
digitalWrite(P0_13, HIGH);
}
```

**高充電電流**

```cpp
void setup(){
pinMode (P0_13, OUTPUT);
}
void loop() {
digitalWrite(P0_13, LOW);
}
```

## SWDピンへのアクセス：デバッグおよびブートローダーの再書き込み

**必要なハードウェア**

- [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- Jlink

**必要なソフトウェア**

[Segger](https://www.segger.com/downloads/jlink/)のウェブサイトからソフトウェアをダウンロードする必要があります。

- **ステップ1.** 以下のピンをJlinkで接続します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SWD1.png" alt="pir" width={300} height="auto" /></p>

- **ステップ2.** J-Flashを起動し、nRF52840を検索して新しいプロジェクトを作成します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SWD2.png" alt="pir" width={500} height="auto" /></p>

- **ステップ3.** 「Target」をクリックし、「Connect」を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SWD3.png" alt="pir" width={500} height="auto" /></p>

- **ステップ4.** binまたは[hexファイル](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_XIAO_nRF52840_Sense_bootloader-0.6.1_s140_7.3.0.hex)をソフトウェアにドラッグします。その後、F4キーとF5キーを順に押します。これで再書き込みが完了します。

## FAQ

### Q1: Arduino IDEでコードをボードにアップロードする際にフリーズする

まず「リセットボタン」を1回クリックして**リセット**を試してください。それでも解決しない場合は、ボタンを素早く2回クリックして**ブートローダーモード**に入ります。それでも解決しない場合は、ボードをPCから切断し、再度接続してください。

### Q2: Arduino IDEでボードがシリアルデバイスとして表示されない

まず「リセットボタン」を1回クリックして**リセット**を試してください。それでも解決しない場合は、ボタンを素早く2回クリックして**ブートローダーモード**に入ります。

### Q3: XIAO nRF52840 (Sense)を使用してバッテリー充電する際の注意点は？

P0.14 (D14)が3.3Vの高レベルでADC機能をオフにすると、P0.31は入力電圧制限の3.6Vに達します。この場合、P0.31ピンが焼損するリスクがあります。

この問題に関して、現在のところユーザーにはP0.14 (D14)のADC機能をオフにしないか、バッテリー充電中にP0.14 (D14)を高レベルに設定しないことを推奨しています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/14.png" alt="pir" width={800} height="auto" /></p>

### Q4: 電源オン時の緑色のライトの動作は？

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/nRF_RGB.png" alt="nRF52840 RGB Schematic" width="120" height="auto" /></p>

`P0.17`ピンは緑色のインジケータライトの動作を制御し、充電状態を示します：

- LOWレベル：**充電中**の場合。
- HIGHレベル：バッテリーが**充電されていない**または**完全に充電された**場合。

LOWレベルの場合、`RED_CHG` LEDが点灯します。

詳細については、以下のデータシートを確認してください：
- PMICデータシート: [BQ25100](https://www.ti.com/lit/ds/symlink/bq25100a.pdf)
- [XIAO nRF52840データシート](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf)

## リソース

### Seeed Studio XIAO nRF52840

- **[電子書籍]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

- **[PDF]** [nRF52840 データシート](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf)

- **[PDF]** [Seeed Studio XIAO nRF52840 回路図](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf)

- **[ZIP]** [Seeed Studio XIAO nRF52840 KiCAD ファイル](https://files.seeedstudio.com/wiki/XIAO-BLE/SeeedStudio_XIAO_nRF52840_v1.1_SCH&PCB.zip)

- **[ZIP]** [Seeed Studio XIAO nRF52840 Eagle ファイル](https://files.seeedstudio.com/wiki/XIAO-BLE/SeeedStudio_XIAO_nRF52840_v1.1_KiCAD.zip)

- **[DXF]** [Seeed Studio XIAO nRF52840 寸法 (DXF)](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-DXF.zip)

- **[LBR]** [Seeed Studio XIAO nRF52840 Eagle フットプリント](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-footprint-eagle.lbr)

- **[XLSX]** [Seeed Studio XIAO nRF52840 ピンアウトシート](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-pinout_sheet.xlsx)

- 🔗 **[Kicad]** [Seeed Studio XIAO nRF52840 フットプリント](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

### Seeed Studio XIAO nRF52840 Sense

- **[PDF]** [nRF52840 データシート](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf)

- **[PDF]** [Seeed Studio XIAO nRF52840 Sense 回路図](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf)

- **[ZIP]** [Seeed Studio XIAO nRF52840 KiCAD ファイル](https://files.seeedstudio.com/wiki/XIAO-BLE/SeeedStudio_XIAO_nRF52840_v1.1_KiCAD.zip)

- **[ZIP]** [Seeed Studio XIAO nRF52840 Eagle ファイル](https://files.seeedstudio.com/wiki/XIAO-BLE/SeeedStudio_XIAO_nRF52840_v1.1_SCH&PCB.zip)

- **[DXF]** [Seeed Studio XIAO nRF52840 Sense 寸法 (DXF)](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Sense-DXF.zip)

- **[LBR]** [Seeed Studio XIAO nRF52840 Sense Eagle フットプリント](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-footprint-eagle.lbr)

- **[XLSX]** [Seeed Studio XIAO nRF52840 Sense ピンアウトシート](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Senese-pinout_sheet.xlsx)

- **[STEP]** [Seeed Studio XIAO nRF52840 Sense 3D モデル](https://files.seeedstudio.com/wiki/XIAO-BLE/seeed-studio-xiao-nrf52840-3d-model.zip)

- 🔗 **[Kicad]** [Seeed Studio XIAO nRF52840 Sense フットプリント](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

### Seeed Studio XIAO nRF52840 (Sense) Plus

- **[PDF]** [nRF52840 データシート](https://files.seeedstudio.com/wiki/XIAO-BLE/nrf52840_datasheet.pdf)

- **[ZIP]** [Seeed Studio XIAO nRF52840 (Sense) Plus 回路図](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_Studio_XIAO_nRF52840_Plus_SCH_PCB_v1.1.zip)

- **[ZIP]** [Seeed Studio XIAO nRF52840 (Sense) Plus KiCAD ファイル](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_Studio_XlAO_nRF52840_Plus_KiCAD_file.zip)

- **[DXF]** [Seeed Studio XIAO nRF52840 Sense 寸法 (DXF)](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_Studio_XlA0_nRF52840_Sense_Dimension_in_DXF.dxf)

- **[ZIP]** [Seeed Studio XIAO Plus ベース (ボトムパッドリードアウトあり)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_with_botton_pad_lead_out_V1.0.zip)

- **[ZIP]** [Seeed Studio XIAO Plus ベース (ボトムパッドリードアウトなし)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_without_botton_pad_lead_out_V1.0.zip)

- **[Kicad]** [Seeed Studio XIAO nRF52840 (Sense) Plus フットプリント](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Plus-SMD.kicad_mod)

## コースリソース

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[電子書籍]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>