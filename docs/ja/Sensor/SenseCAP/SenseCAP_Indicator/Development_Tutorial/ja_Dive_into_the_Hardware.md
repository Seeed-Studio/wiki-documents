---
description: デバイスの構造と動作について説明し、各コンポーネントがSenseCAP Indicatorの全体的な機能にどのように貢献するかを詳述します。
title: ハードウェアの詳細
keywords:
- Indicator Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_Indicator_Dive_into_the_Hardware
sidebar_position: 1
last_update:
  date: 11/17/2023
  author: Spencer
---
# **概要**

SenseCAP Indicatorは、ESP32とRP2040デュアルMCUによって駆動される4インチタッチスクリーンデバイスです。ESP32とRP2040は、どちらも幅広い機能を提供する高性能なマイクロコントローラーです。

この章では、SenseCAP IndicatorのESP32とRP2040について、その機能と使用方法を含む詳細な情報を提供します。プログラミング、センサーとのインターフェース、他のデバイスとの通信などについて説明します。

# **ハードウェアの詳細**

## **ハードウェア図**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png"/></div>

図に示すように、SenseCAP Indicatorは主にESP32とRP2040 MCUによって駆動され、これらはLoRaトランシーバー、LCD、その他の周辺回路に接続されています。
以下のセクションでは、ESP32とRP2040の開発とそれぞれの機能について概要を説明します。

## **ESP32-S3**

ESP32-S3は、強力なCPU、2.4 GHz Wi-Fi、Bluetooth 5.0機能を組み合わせた高度に統合されたシステムオンチップ（SoC）です。また、UART、SPI、I2C、PWMなどの様々な入出力ピンとインターフェースを含み、他のデバイスやセンサーとのインターフェースを可能にします。

## **RP2040**

SenseCAP Indicatorには[RP2040](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html?)が組み込まれています。RP2040は最大133MHzのクロック速度を持つデュアルコアARM Cortex-M0+プロセッサ、264KBのRAM、USB、UART、SPI、I2Cなどの様々な周辺機器を特徴としています。また、プログラマブルI/O（PIO）と呼ばれるユニークな機能も含まれており、専用ハードウェアを必要とせずにカスタムデジタルインターフェースを実装することができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/rppinout.png"/></div>

## **ESP32-S3とRP2040の通信**

ESP32とRP2040はシリアルポート通信を使用し、[COBS](http://www.stuartcheshire.org/papers/COBSforToN.pdf)通信プロトコルを使用します。

ESP32で使用されるライブラリ：https://github.com/cmcqueen/cobs-c
RP2040で使用されるArduinoライブラリ：https://github.com/bakercp/PacketSerial

ターミナルデモでは、送信に以下のデータフレームが使用されます：

| Byte0    | Byte1-4          |
| -------- | ---------------- |
| PKT_TYPE | PKT_PARA (Little Endia)  |

**PKT_TYPEリスト**

**注意**：以下のコマンドは参考用のみです。もちろん、独自のコマンドを定義することもできます。

| PKT_TYPE  | DIR\t | Notes  |
|:----------|:----------|:----------|
| 0x00    | ESP32↔RP2040    |   ACK, string, value:'ACK'  |
| 0xA0    | ESP32→RP2040    |  Collect Interval CMD, PKT_PARA is uint32_t |
| 0xA1    | ESP32→RP2040    |  Beep on CMD, PKT_PARA is uint32_t   |
| 0xA2    | ESP32→RP2040    |  Beep off CMD, PKT_PARA is uint32_t  |
| 0xA3    | ESP32→RP2040    |  Shutdown CMD, PKT_PARA is uint32_t  |
| 0xA4    | ESP32→RP2040    |  Power On CMD, PKT_PARA is uint32_t  |
| 0xA0～0xAF  | ESP32→RP2040    |  Other data or cmd   |
| 0xB0    | RP2040→ESP32    | SCD41 Temperature data, PKT_PARA is float    |
| 0xB1    | RP2040→ESP32    | SCD41 Humidity data, PKT_PARA is float    |
| 0xB2    | RP2040→ESP32    | SCD41 CO2 data, PKT_PARA is float    |
| 0xB3    | RP2040→ESP32    | ATH20 Temperature data, PKT_PARA is float    |
| 0xB4    | RP2040→ESP32    | ATH20 Humidity data, PKT_PARA is float    |
| 0xB5    | RP2040→ESP32    | SGP40 tVOC data, PKT_PARA is float. 0～500 index   |
| 0xB6～0xBF    | RP2040→ESP32    | Other data or cmd, PKT_PARA is float    |

# **技術サポート**

**SenseCAP Indicatorでお困りですか？私たちがサポートいたします！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>