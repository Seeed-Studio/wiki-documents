---
description: デバイスの構造と動作をカバーし、各コンポーネントがSenseCAP Indicatorの全体的な機能にどのように貢献しているかを詳述します。
title: ハードウェアの詳細
keywords:
- Indicator 開発チュートリアル
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_Indicator_Dive_into_the_Hardware
sidebar_position: 1
last_update:
  date: 05/15/2025
  author: Spencer
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# **概要**

SenseCAP Indicatorは、ESP32とRP2040のデュアルMCUによって駆動される4インチのタッチスクリーンデバイスです。ESP32とRP2040はどちらも高性能なマイクロコントローラーで、多くの機能と特徴を提供します。

この章では、SenseCAP IndicatorのESP32とRP2040について、それぞれの機能と使用方法を詳しく説明します。プログラミング、センサーとのインターフェース、他のデバイスとの通信などをカバーします。

# **ハードウェアの詳細**

## **ハードウェア図**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png"/></div>

図に示されているように、SenseCAP Indicatorは主にESP32とRP2040のMCUによって駆動されており、これらはLoRaトランシーバー、LCD、およびその他の周辺回路に接続されています。
以下のセクションでは、ESP32とRP2040の開発およびそれぞれの能力について概説します。

## **ESP32-S3**

ESP32-S3は、高性能なCPU、2.4 GHz Wi-Fi、Bluetooth 5.0機能を組み合わせた高度に統合されたシステムオンチップ（SoC）です。また、UART、SPI、I2C、PWMなどのさまざまな入出力ピンとインターフェースを備えており、他のデバイスやセンサーとインターフェースすることができます。

## **RP2040**

SenseCAP Indicatorには[RP2040](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html?)が組み込まれています。RP2040は、最大133 MHzのクロックスピードを持つデュアルコアARM Cortex-M0+プロセッサ、264KBのRAM、およびUSB、UART、SPI、I2Cなどのさまざまな周辺機器を備えています。また、PIO（Programmable I/O）と呼ばれる独自の機能を備えており、特別なハードウェアを必要とせずにカスタムデジタルインターフェースを実装することができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/rppinout.png"/></div>

## **ESP32-S3とRP2040の通信**

ESP32とRP2040はシリアルポート通信を使用し、[COBS](http://www.stuartcheshire.org/papers/COBSforToN.pdf)通信プロトコルを採用しています。

ESP32で使用されるライブラリ: https://github.com/cmcqueen/cobs-c  
RP2040で使用されるArduinoライブラリ: https://github.com/bakercp/PacketSerial  

ターミナルデモでは、以下のデータフレームが送信に使用されます：

| Byte0    | Byte1-4          |
| -------- | ---------------- |
| PKT_TYPE | PKT_PARA (リトルエンディアン)  |

**PKT_TYPEリスト**

**注記**: 以下のコマンドは参考用です。もちろん、独自のコマンドを定義することも可能です。

| PKT_TYPE  | DIR	 | 説明  |
|:----------|:----------|:----------|
| 0x00    | ESP32 ↔ RP2040    |   ACK, 文字列, 値: 'ACK'  |
| 0xA0    | ESP32->RP2040    |  収集間隔コマンド, PKT_PARAはuint32_t |
| 0xA1    | ESP32->RP2040    |  ビープ音オンコマンド, PKT_PARAはuint32_t   |
| 0xA2    | ESP32->RP2040    |  ビープ音オフコマンド, PKT_PARAはuint32_t  |
| 0xA3    | ESP32->RP2040    |  シャットダウンコマンド, PKT_PARAはuint32_t  |
| 0xA4    | ESP32->RP2040    |  電源オンコマンド, PKT_PARAはuint32_t  |
| 0xA0~0xAF  | ESP32->RP2040    |  その他のデータまたはコマンド   |
| 0xB0    | RP2040->ESP32    | SCD41 温度データ, PKT_PARAはfloat    |
| 0xB1    | RP2040->ESP32    | SCD41 湿度データ, PKT_PARAはfloat    |
| 0xB2    | RP2040->ESP32    | SCD41 CO2データ, PKT_PARAはfloat    |
| 0xB3    | RP2040->ESP32    | ATH20 温度データ, PKT_PARAはfloat    |
| 0xB4    | RP2040->ESP32    | ATH20 湿度データ, PKT_PARAはfloat    |
| 0xB5    | RP2040->ESP32    | SGP40 tVOCデータ, PKT_PARAはfloat. 0~500インデックス   |
| 0xB6~0xBF    | RP2040->ESP32    | その他のデータまたはコマンド, PKT_PARAはfloat    |

# **技術サポート**

**SenseCAP Indicatorに関するサポートが必要ですか？私たちがサポートします！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>