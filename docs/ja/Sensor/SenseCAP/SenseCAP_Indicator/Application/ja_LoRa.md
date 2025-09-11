---
description: LoRa デモの使用方法
title: LoRa 通信 - SenseCAP Indicator
keywords:
- SenseCAP Indicator
- LoRa
- ESP32S3
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_Indicator_LoRa
toc_max_heading_level: 4
sidebar_position: 3
last_update:
  date: 05/15/2025
  author: Spencer
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SenseCAP Indicator - LoRa アプリケーション開発

## はじめに

LoRa®は、少量のデータを遠距離に送信するために最適化された長距離無線通信技術です。この技術は、Chirp Spread Spectrum (CSS) と呼ばれる方法を使用してサブGHzスペクトラムの無線信号を変調します。

Seeed StudioのSenseCAP Indicator（バージョン D1L および D1Pro）には、LoRa トランシーバーモジュール（Semtech SX1262 LoRa® チップ）が内蔵されており、低消費電力の無線接続をプロジェクトに簡単に追加できます。この投稿では、2つのSenseCAP Indicatorボード間でLoRa通信を設定する方法を説明します。

### 概要

この[デモ](https://github.com/Seeed-Solution/indicator_lora_commu)では、SenseCAP IndicatorとXIAOボード間で基本的なLoRa通信を確立する方法を紹介します。SenseCAP IndicatorはXIAOからセンサーデータを取得し、それをWio-E5を介して送信します。送信されたペイロードはその後SenseCAP Indicatorによって受信され、解読されて結果を出力し、データを画面に表示します。

LVGLコードなし: [Code · GitHub](https://github.com/Seeed-Solution/indicator_lora_commu/tree/29624d10643a41ae5e1e24124b81e93b5e3cd3bb)

## ハードウェア

### SenseCAP Indicator

[Dive_into_the_Hardware](/ja/SenseCAP_Indicator_Dive_into_the_Hardware/#hardware-diagram)のページから、LoRaトランシーバーがSPIインターフェースを介してESP32-S3 MCUに接続されていることがわかります。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png
"/></div>

主要なコンポーネントは以下の通りです：
- Semtech SX1262 ラジオフロントエンド
- ESP32-S3 MCU

LoRaトランシーバーは、LoRa信号の低レベルの変調と復調をすべて処理します。ESP32-S3からSPIインターフェースを使用して通信できます。

### XIAO

このデモでは、XIAOはセンサーデータを収集し、それをWio-E5を介してSenseCAP Indicatorに送信する必要があります。XIAOはUARTインターフェースを介してWio-E5に接続されています。

- XIAO
- Wio-E5
- SEN5x

## ソフトウェア

[SenseCAP_Indicator_ESP32](https://github.com/Seeed-Solution/sensecap_indicator_esp32) SDKはすでにLoRaライブラリを提供しているため、それを直接使用できます。[LoRa®](/ja/SenseCAP_Indicator_ESP32_LoRa)のページを簡単に確認して、LoRaライブラリの使用方法を確認してください。

## 始めるにあたって

このデモは、IoT接続のためのローカルLoRa®ハブを設定する方法を示しています。

### 前提条件

開発環境を設定するための[指示](/ja/SenseCAP_Indicator_How_To_Flash_The_Default_Firmware)に従ってください。

### ステップ1: デモコードをダウンロードする

[このリンク](https://github.com/Seeed-Solution/indicator_lora_commu)からデモコードをクローンまたはダウンロードしてください。このコードはLoRaアプリケーションの出発点として使用されます。

### ステップ2: ペイロードエンコーダーを実装する (XIAO;Arduino)

#### ステップ2.1: ペイロード構造とエンコーダーを実装する

<Tabs>

  <TabItem value="XIAO/include/Frame.h">

  ```cpp
  #ifndef _FRAME_H
  #define _FRAME_H
  #include <Arduino.h>
  #include <vector>

  /** ペイロードフォーマット
  * | トピック | データ長 | データペイロード | CRC |
  * | 1バイト | 1バイト  | n バイト         | 2バイト |
  * 例:
  * | 0x01 | 0x0E | 14 バイト | 2バイト | SEN54用
  * | 0x01 | 0x10 | 16 バイト | 2バイト | SEN55用
  */

  #pragma pack(1)
  enum topics {
      TOPICS_MIN   = 0x00,
      TOPICS_SEN5x = 0x01,
      TOPIC_MAX,
  };

  #pragma pack(1)
  /* ハイライト開始 */
  typedef struct
  {
      enum topics topic;         /*メッセージタイプ*/
      uint8_t dataLength;
      std::vector<uint8_t> data; /*ペイロードの実際のデータ*/
      uint16_t crc;
  } Frame_t;
  /* ハイライト終了 */
  String packFrame(Frame_t frame);
  void deleteFrame(Frame_t *frame);
  uint16_t crc16_ccitt(const uint8_t *data, size_t length);
  #endif
  ```
  </TabItem>

  <TabItem value="XIAO/include/Frame.cpp">

  ```cpp
  #include "Frame.h"
  String packFrame(Frame_t frame) {
      uint8_t *packedData = (uint8_t *)malloc(2 + frame.dataLength + 2);
      if (packedData == NULL) {
          return String(); // メモリ割り当てが失敗した場合は空の文字列を返す
      }
      // フレームトピックをパック
      packedData[0] = frame.topic;
      packedData[1] = frame.dataLength;
      // ハイライト開始
      // データペイロードをパック
      for (size_t i = 0; i < frame.dataLength; i++) {
          packedData[2 + i] = frame.data[i];
      }
      // ハイライト終了
      // CRCを計算（簡略化のため、CRCはすべてのバイトの合計と仮定）
      frame.crc = crc16_ccitt(packedData, 2 + frame.dataLength);

      // CRCをパック
      packedData[2 + frame.dataLength]     = (frame.crc & 0xFF00) >> 8;
      packedData[2 + frame.dataLength + 1] = frame.crc & 0x00FF;
      // ハイライト開始
      // packedFrameを文字列としてシリアライズ
      char packedFrameBuffer[(2 + frame.dataLength + 2) * 2];
      for (size_t i = 0; i < 2 + frame.dataLength + 2; i++) {
          snprintf(&packedFrameBuffer[i * 2], 3, "%02X", packedData[i]); // 3はヌル終端を含む
      }
      // ハイライト終了
      free(packedData);

      return String(packedFrameBuffer);
  }

  void deleteFrame(Frame_t *frame) {
      free(frame);
  }

  uint16_t crc16_ccitt(const uint8_t *data, size_t length) {
      uint16_t crc = 0xFFFF;

      for (size_t i = 0; i < length; i++) {
          crc ^= (uint8_t)data[i] << 8;
          for (uint8_t j = 0; j < 8; j++) {
              if (crc & 0x8000) {
                  crc = (crc << 1) ^ 0x1021;
              } else {
                  crc <<= 1;
              }
          }
      }

      return crc & 0xFFFF;
  }
  ```
  </TabItem>
</Tabs>

#### ステップ2.2: センサーデータ構造を実装し、ペイロードエンコーダーに適応させる
<Tabs>
  <TabItem value="XIAO/include/sensor_sen5x.h">

```cpp
#ifndef PAYLOAD_SEN5X_H
#define PAYLOAD_SEN5X_H
#include "Frame.h"
#include "SensorPayload.h"
#include <SensirionI2CSen5x.h>

#define DEVICE_SEN54

#if defined(DEVICE_SEN54)
#elif defined(DEVICE_SEN55)
#else
#error "コンパイラオプションでデバイスを定義してください。"
#endif

class PayloadSEN5x : public SensorPayload<SensirionI2CSen5x> {
    public:
      PayloadSEN5x(SensirionI2CSen5x handler);
      uint16_t init() override;
      String toPayloadString() override;

    private:
    //highlight-start
      uint16_t massConcentrationPm1p0;
      uint16_t massConcentrationPm2p5;
      uint16_t massConcentrationPm4p0;
      uint16_t massConcentrationPm10p0;
      int16_t ambientHumidity;
      int16_t ambientTemperature;
      int16_t vocIndex;
  #ifdef DEVICE_SEN55
  // int16_t noxIndex; // センサー SEN54 は NOx をサポートしていません
  #endif
      //highlight-end
      SensirionI2CSen5x _sen5x;
};
#endif // PAYLOAD_SEN5X_H
```
  </TabItem>
  <TabItem value="XIAO/src/sensor_sen5x.cpp">

```cpp
#include "sensor_sen5x.h"
#include "main.h"

PayloadSEN5x::PayloadSEN5x(SensirionI2CSen5x handler)
    : SensorPayload<SensirionI2CSen5x>(handler), _sen5x(handler) {
    // 必要に応じて SEN5X 用の特定のデータメンバーを初期化
    _sen5x.begin(Wire);
}

uint16_t PayloadSEN5x::init() {
    // SEN5X の初期化ロジックをここに実装
    uint16_t error;
    char errorMessage[256];
    error = _sen5x.deviceReset();
    if (error) {
        Serial.print("deviceReset() 実行中のエラー: ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    }
    float tempOffset = 0.0;
    error            = _sen5x.setTemperatureOffsetSimple(tempOffset);
    if (error) {
        Serial.print("setTemperatureOffsetSimple() 実行中のエラー: ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("温度オフセットが ");
        Serial.print(tempOffset);
        Serial.println(" 度に設定されました (SEN54/SEN55 のみ)");
    }

    // 測定開始
    error = _sen5x.startMeasurement();
    if (error) {
        Serial.print("startMeasurement() 実行中のエラー: ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    }
    return 0;
}

String PayloadSEN5x::toPayloadString() {
  // データをペイロード文字列に変換するコードを追加
  #ifdef DEVICE_SEN55
      _sen5x.readMeasuredValuesAsIntegers(massConcentrationPm1p0, massConcentrationPm2p5, massConcentrationPm4p0, massConcentrationPm10p0, ambientHumidity, ambientTemperature, vocIndex, noxIndex);
      _frame.dataLength = 16;
  #else
      int16_t __noxIndex;
      _sen5x.readMeasuredValuesAsIntegers(massConcentrationPm1p0, massConcentrationPm2p5, massConcentrationPm4p0, massConcentrationPm10p0, ambientHumidity, ambientTemperature, vocIndex, __noxIndex);
      _frame.dataLength = 14;
  #endif

      _frame.topic = TOPICS_SEN5x;

      // データベクターを空にする
      _frame.data.clear();
      //highlight-start
      // 値を16進ペイロード文字列に変換
      _frame.data.push_back((uint8_t)(massConcentrationPm1p0 >> 8));
      _frame.data.push_back((uint8_t)(massConcentrationPm1p0 & 0xFF));
      _frame.data.push_back((uint8_t)(massConcentrationPm2p5 >> 8));
      _frame.data.push_back((uint8_t)(massConcentrationPm2p5 & 0xFF));
      _frame.data.push_back((uint8_t)(massConcentrationPm4p0 >> 8));
      _frame.data.push_back((uint8_t)(massConcentrationPm4p0 & 0xFF));
      _frame.data.push_back((uint8_t)(massConcentrationPm10p0 >> 8));
      _frame.data.push_back((uint8_t)(massConcentrationPm10p0 & 0xFF));
      _frame.data.push_back((uint8_t)(ambientHumidity >> 8));
      _frame.data.push_back((uint8_t)(ambientHumidity & 0xFF));
      _frame.data.push_back((uint8_t)(ambientTemperature >> 8));
      _frame.data.push_back((uint8_t)(ambientTemperature & 0xFF));
      _frame.data.push_back((uint8_t)(vocIndex >> 8));
      _frame.data.push_back((uint8_t)(vocIndex & 0xFF));
  #ifdef DEVICE_SEN55
  // _frame.data.push_back((uint8_t)(noxIndex >> 8));
  // _frame.data.push_back((uint8_t)(noxIndex & 0xFF));
  #endif
      //highlight-end
      char data[256];
      sprintf(data, "%d,%d,%d,%d,%d,%d,%d", massConcentrationPm1p0, massConcentrationPm2p5, massConcentrationPm4p0, massConcentrationPm10p0, ambientHumidity, ambientTemperature, vocIndex);
      Serial.println("文字列: " + String(data));

      for (int i = 0; i < _frame.dataLength; i++) {
          Serial.print(_frame.data[i], HEX);
          Serial.print(" ");
      }
      Serial.println();

      return packFrame(_frame);
}
```
  </TabItem>
</Tabs>

関数 `toPayloadString` はデータを文字列にシリアライズし、その文字列を SenseCAP Indicator 経由で Wio-E5 に送信します。

#### ステップ 2.3: コードをコンパイルして XIAO にアップロード

```cpp
#include "sensor_sen5x.h"
#include "wio_e5_at.h"
#include <Arduino.h>
#include <SensirionI2CSen5x.h>
#include <Wire.h>
SoftwareSerial serial_lora( D2, D3 );
Radio radio( serial_lora, RF_FREQUENCY, LORA_SF12, LORA_BW_125, 15, 15, 14, LORA_CRC_ON, LORA_IQ_NORMAL, LORA_PUBLIC_OFF );

SensirionI2CSen5x sen5x;
PayloadSEN5x payloadSEN5x( sen5x );

void setup() {
    delay( 2000 );
    wait_serial();
    Serial.println( "開始中..." );

    radio.begin();

    Wire.begin();
    payloadSEN5x.init();

    Serial.println( "アプリケーション開始" );
}

void loop() {
    static int count               = 0;
    static unsigned long task_time = 0;
    static String test_string;

    if ( millis() - task_time > 10000 ) {
        task_time   = millis();

        radio.sendPayload( payloadSEN5x.toPayloadString() );

        Serial.printf( "データ送信 %d\r\n", count++ );
    }
}
```

ペイロードを完成させたので、次は SenseCAP Indicator におけるペイロードデコーダーのプログラミングに進みます。

### ステップ 3: ペイロードデコーダーの実装 (SenseCAP Indicator;ESP-IDF)

> ペイロードデコーダは、LoRaトランシーバーから受信したバイナリペイロードを人間が読みやすい形式に変換する機能です。ペイロードデコーダはアプリケーションに特化しており、ユーザー自身で実装する必要があります。このデモ用のペイロードデコーダはデモコード内で提供されています。

#### ステップ 3.1: ペイロードデコーダを実装する

<Tabs>
  <TabItem value="Indicator/main/Frame/frame.h">

  ```cpp
    #ifndef __SIMPLE_FRAME_H
    #define __SIMPLE_FRAME_H
    #include <stdint.h>
    #include <stdio.h>
    #include <stdlib.h>

    /** ペイロード形式
    * | トピック | データ長 | データペイロード | CRC |
    * | 1バイト | 1バイト  | n バイト         | 2バイト |
    * 例:
    * | 0x01 | 0x0E | 14 バイト | 2バイト | SEN54の場合
    * | 0x01 | 0x10 | 16 バイト | 2バイト | SEN55の場合
    */

    #pragma pack(1)
    enum topics {
        TOPICS_MIN   = 0x00,
        TOPICS_SEN5x = 0x01,
        TOPIC_MAX,
    };
    typedef struct
    {
        enum topics topic; /*メッセージタイプまたはDataId*/
        uint8_t dataLength;
    /* highlight-start */
        uint8_t *data;     /*ペイロードの実際のデータ*/
    /* highlight-end */
        uint16_t crc;
    } Frame_t;
    Frame_t *parsePayload( uint8_t *payload, uint8_t length );
    void deleteFrame( Frame_t *frame );
    uint16_t crc16_ccitt( const uint8_t *data, size_t length );
    #endif
  ```

  </TabItem>
<TabItem value="Indicator/main/Frame/frame.c">

  ```cpp
    #include "frame.h"
    #include "esp_log.h"

    Frame_t *parsePayload( uint8_t *payload, uint8_t length )
    {
        Frame_t *frame = (Frame_t *)malloc( sizeof( Frame_t ) );
        if ( frame == NULL ) {
            ESP_LOGE( "parsePayload", "フレームのメモリ割り当てに失敗しました" );
            return NULL;
        }

        frame->topic = (enum topics)payload[0];

        frame->dataLength = payload[1];
        /* highlight-start */
        frame->data = (uint8_t *)malloc( frame->dataLength );
        if ( frame->data == NULL ) {
            ESP_LOGE( "parsePayload", "フレームデータのメモリ割り当てに失敗しました" );
            free( frame ); // 以前に割り当てたメモリをクリーンアップ
            return NULL;
        }
        /* highlight-end */
        memcpy( frame->data, payload + 2, frame->dataLength );

        frame->crc = (uint16_t)payload[length - 2] << 8 | (uint16_t)payload[length - 1];

        if ( frame->crc != crc16_ccitt( payload, length - 2 ) ) {
            ESP_LOGE( "parsePayload", "CRC不一致" );
            free( frame->data );
            free( frame );
            return NULL;
        }

        return frame;
    }

    void deleteFrame( Frame_t *frame )
    {
        free( frame->data );
        free( frame );
    }

    uint16_t crc16_ccitt( const uint8_t *data, size_t length )
    {
        uint16_t crc = 0xFFFF;

        for ( size_t i = 0; i < length; i++ ) {
            crc ^= (uint8_t)data[i] << 8;
            for ( uint8_t j = 0; j < 8; j++ ) {
                if ( crc & 0x8000 ) {
                    crc = ( crc << 1 ) ^ 0x1021;
                } else {
                    crc <<= 1;
                }
            }
        }

        return crc & 0xFFFF;
    }
  ```
  </TabItem>
</Tabs>

#### ステップ 3.2: センサーデータ構造を実装する

<Tabs>
  <TabItem value="Indicator/main/Sensors/sen5x.h">

  ```cpp
    #ifndef PAYLOAD_SEN5X_H
    #define PAYLOAD_SEN5X_H
    #include "SensorPayload.h"

    #define DEVICE_SEN54

    #if defined( DEVICE_SEN54 )
    #elif defined( DEVICE_SEN55 )
    #else
    #error "コンパイラオプションでデバイスを定義してください。"
    #endif
    // highlight-start
    #pragma pack(push, 1)
    typedef union {
        struct
        {
            uint16_t massConcentrationPm1p0;
            uint16_t massConcentrationPm2p5;
            uint16_t massConcentrationPm4p0;
            uint16_t massConcentrationPm10p0;
            int16_t  ambientHumidity;
            int16_t  ambientTemperature;
            int16_t  vocIndex;
    #ifdef DEVICE_SEN55
            int16_t noxIndex;
    #endif
        };

    #ifdef DEVICE_SEN55
        int16_t data[8];
    #else
        int16_t data[7];
    #endif
    } SEN5xData_t;
    #pragma pack(pop)
    // highlight-end
    void phraseSEN5xData( uint8_t *data_arry, SEN5xData_t *SEN5x );
    void prinSEN5xData( const SEN5xData_t *SEN5x );
    #endif // PAYLOAD_SEN5X_H
  ```
  </TabItem>
  <TabItem value="Indicator/main/Sensors/sen5x.c">

  ```cpp
    #include "sen5x.h"
    #include "esp_log.h"
    // highlight-start
    void phraseSEN5xData( uint8_t *data_arry, SEN5xData_t *SEN5x )
    {
        for ( uint8_t i = 0; i < sizeof( SEN5xData_t ); i++ ) {
            SEN5x->data[i] = data_arry[2 * i] << 8 | data_arry[2 * i + 1];
        }
    }
    // highlight-end
    void prinSEN5xData( const SEN5xData_t *SEN5x )
    {
        static const char *TAG = "sen5x_";
        ESP_LOGI( TAG, "massConcentrationPm1p0: %d", SEN5x->massConcentrationPm1p0 );
        ESP_LOGI( TAG, "massConcentrationPm2p5: %d", SEN5x->massConcentrationPm2p5 );
        ESP_LOGI( TAG, "massConcentrationPm4p0: %d", SEN5x->massConcentrationPm4p0 );
        ESP_LOGI( TAG, "massConcentrationPm10p0: %d", SEN5x->massConcentrationPm10p0 );
        ESP_LOGI( TAG, "ambientHumidity: %d", SEN5x->ambientHumidity );
        ESP_LOGI( TAG, "ambientTemperature: %d", SEN5x->ambientTemperature );
        ESP_LOGI( TAG, "vocIndex: %d", SEN5x->vocIndex );
    #ifdef DEVICE_SEN55
        ESP_LOGI( TAG, "noxIndex: %d", SEN5x->noxIndex );
    #endif
    }
  ```
  </TabItem>
</Tabs>

#### ステップ 3.3: LoRaを設定する

##### LoRaパラメータを設定する

周波数、拡散率、帯域幅などの必要なLoRaパラメータを設定します。これらの設定は、通信を成功させるために2つのLoRaチャネル間で一致している必要があります。

```cpp
#define RF_FREQUENCY               868000000 // Hz
#define LORA_BANDWIDTH             0         // [0: 125 kHz, 1: 250 kHz, 2: 500 kHz, 3: Reserved]
#define LORA_SPREADING_FACTOR      12        // [SF7..SF12]
#define LORA_CODINGRATE            1         // [1: 4/5, 2: 4/6, 3: 4/7, 4: 4/8]
#define LORA_PREAMBLE_LENGTH       15        // TxとRxで同じ
#define LORA_SYMBOL_TIMEOUT        5         // シンボル
#define LORA_FIX_LENGTH_PAYLOAD_ON false
#define LORA_IQ_INVERSION_ON       false
```

##### LoRaトランシーバー受信機の設定

```cpp
void OnRxDone( uint8_t *payload, uint16_t size, int16_t rssi, int8_t snr )
{
    SEN5xData_t sen5x_data;
    // ハイライト開始
    Frame_t *frame = parsePayload( payload, size );
    // ハイライト終了
    if ( frame == NULL ) {
        ESP_LOGE( TAG, "parsePayloadエラー" );
        return;
    }
    ESP_LOGI( TAG, "frame->type: %s", dataIDToString( frame->topic ) );

    // ハイライト開始
    switch ( frame->topic ) {
        case TOPICS_SEN5x:
            phraseSEN5xData( frame->data, &sen5x_data );
            break;
        default:
            break;
    }
    // ハイライト終了
    deleteFrame( frame );
}
```

##### LoRaトランシーバーの初期化

```cpp
RadioEvents.RxDone = OnRxDone;
Radio.Init( &RadioEvents );

Radio.SetChannel( RF_FREQUENCY );

Radio.SetRxConfig( MODEM_LORA, LORA_BANDWIDTH, LORA_SPREADING_FACTOR,
                    LORA_CODINGRATE, 0, LORA_PREAMBLE_LENGTH,
                    LORA_SYMBOL_TIMEOUT, LORA_FIX_LENGTH_PAYLOAD_ON,
                    0, true, 0, 0, LORA_IQ_INVERSION_ON, true );
Radio.SetMaxPayloadLength( MODEM_LORA, 255 );

Radio.Rx( 0 ); // 連続受信
```

#### ステップ 3.4: コードをSenseCAPインジケーターにコンパイルしてフラッシュする

```cpp
/**
 * @source: https://github.com/Seeed-Solution/indicator_lora_commu/blob/29624d10643a41ae5e1e24124b81e93b5e3cd3bb/Indicator/main/main.c
 */
#include "bsp_board.h"
#include "esp_log.h"
#include "frame.h"
#include "radio.h"
#include "sen5x.h"

static const char *TAG = "app_main";

#define VERSION "v0.0.1"

#define SENSECAP "\n\
   _____                      _________    ____         \n\
  / ___/___  ____  ________  / ____/   |  / __ \\       \n\
  \\__ \\/ _ \\/ __ \\/ ___/ _ \\/ /   / /| | / /_/ /   \n\
 ___/ /  __/ / / (__  )  __/ /___/ ___ |/ ____/         \n\
/____/\\___/_/ /_/____/\\___/\\____/_/  |_/_/           \n\
--------------------------------------------------------\n\
 Version: %s %s %s\n\
--------------------------------------------------------\n\
"

#define RF_FREQUENCY               868000000 // Hz
#define LORA_BANDWIDTH             0         // [0: 125 kHz, 1: 250 kHz, 2: 500 kHz, 3: Reserved]
#define LORA_SPREADING_FACTOR      12        // [SF7..SF12]
#define LORA_CODINGRATE            1         // [1: 4/5, 2: 4/6, 3: 4/7, 4: 4/8]
#define LORA_PREAMBLE_LENGTH       15        // TxとRxで同じ
#define LORA_SYMBOL_TIMEOUT        5         // シンボル
#define LORA_FIX_LENGTH_PAYLOAD_ON false
#define LORA_IQ_INVERSION_ON       false

static RadioEvents_t RadioEvents;

SEN5xData_t sen5x_data;

void OnRxDone( uint8_t *payload, uint16_t size, int16_t rssi, int8_t snr ) {
    int i = 0;
    ESP_LOGI( TAG, "rssi:%d dBm, snr:%d dB, len:%d, payload:", rssi, snr, size );
    for ( i = 0; i < size; i++ ) {
        printf( "0x%x ", payload[i] );
    }
    printf( "\n" );

    Frame_t *frame = parsePayload( payload, size );
    if ( frame == NULL ) {
        ESP_LOGE( TAG, "parsePayloadエラー" );
        return;
    }
    ESP_LOGI( TAG, "frame->type: %s", dataIDToString( frame->topic ) );

    switch ( frame->topic ) {
        case TOPICS_SEN5x:
            phraseSEN5xData( frame->data, &sen5x_data );
            prinSEN5xData( &sen5x_data );
            break;

        default:
            break;
    }

    deleteFrame( frame );
}

void app_main( void ) {
    ESP_LOGI( "", SENSECAP, VERSION, __DATE__, __TIME__ );

    ESP_ERROR_CHECK( bsp_board_init() );

    ESP_LOGI( TAG, "APP MAIN START" );

    RadioEvents.RxDone = OnRxDone;
    Radio.Init( &RadioEvents );

    Radio.SetChannel( RF_FREQUENCY );

    Radio.SetRxConfig( MODEM_LORA, LORA_BANDWIDTH, LORA_SPREADING_FACTOR,
                       LORA_CODINGRATE, 0, LORA_PREAMBLE_LENGTH,
                       LORA_SYMBOL_TIMEOUT, LORA_FIX_LENGTH_PAYLOAD_ON,
                       0, true, 0, 0, LORA_IQ_INVERSION_ON, true );
    Radio.SetMaxPayloadLength( MODEM_LORA, 255 );

    Radio.Rx( 0 ); // 連続受信

    while ( 1 ) {
        vTaskDelay( pdMS_TO_TICKS( 10000 ) );
    }
}
```

### ステップ 4: 通信のテスト

両方のSenseCAPインジケーターボードの電源を入れ、シリアルモニターを開きます。ボード間でメッセージが送受信されるのが確認できるはずです。おめでとうございます！SenseCAPインジケーターを使用してLoRa通信を正常に設定しました。

```sh title="XIAOのシリアルモニター"
String: 76,80,81,81,5389,5990,980
0 4C 0 50 0 51 0 51 15 D 17 66 3 D4
CRC: 629
<<<AT+TEST=TXLRPKT,"010E004C005000510051150D176603D40629"
>>>+TEST: TX DONE
+TEST: TXLRPKT

ペイロードを正常に送信しました
データ1を送信
```

```sh title="SenseCAPインジケーターのシリアルモニター"
I (95490) app_main: rssi:-22 dBm, snr:5 dB, len:18, payload:
0x1 0xe 0x0 0x4c 0x0 0x50 0x0 0x51 0x0 0x51 0x15 0xd 0x17 0x66 0x3 0xd4 0x6 0x29
W (95541) parsePayload: topic: 1
W (95541) parsePayload: dataLength: 14
W (95545) parsePayload: payload[0]: 00
W (95549) parsePayload: payload[1]: 4C
W (95554) parsePayload: payload[2]: 00
W (95558) parsePayload: payload[3]: 50
W (95563) parsePayload: payload[4]: 00
W (95567) parsePayload: payload[5]: 51
W (95572) parsePayload: payload[6]: 00
W (95576) parsePayload: payload[7]: 51
W (95580) parsePayload: payload[8]: 15
W (95585) parsePayload: payload[9]: 0D
W (95589) parsePayload: payload[10]: 17
W (95594) parsePayload: payload[11]: 66
W (95598) parsePayload: payload[12]: 03
W (95603) parsePayload: payload[13]: D4
I (95607) app_main: frame->type: SEN5X
I (95612) sen5x_: massConcentrationPm1p0: 76
I (95617) sen5x_: massConcentrationPm2p5: 80
I (95622) sen5x_: massConcentrationPm4p0: 81
I (95627) sen5x_: massConcentrationPm10p0: 81
I (95632) sen5x_: ambientHumidity: 5389
I (95636) sen5x_: ambientTemperature: 5990
I (95641) sen5x_: vocIndex: 980
```

## リソース

<div class="table-center">
  <table align="center">
  <tr>
    <th> 名前 </th>
    <th> 機能 </th>
  </tr>
  <tr>
    <td> <a href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/main/examples/indicator_lora/main/demo/beep.c"><span> ビープ音制御 </span></a> </td>
    <td> 文字列 "ON" または "OFF" を受信し、対応する機能を実行します。</td>
  </tr>
  <tr>
    <td> <a href="https://github.com/Seeed-Solution/indicator_lora_commu"><span> ピンポン通信 </span></a></td>
    <td> マスターとスレーブデバイス間でピンポン通信パターンを確立します。</td>
  </tr>
  <tr>
    <td> <a href="https://github.com/Seeed-Solution/indicator_lora_commu"><span> マルチセンサーデータアップロード </span></a></td>
    <td> XIAOS3 がデータを収集し、Wio-E5（LoRaモジュールとATコマンドを使用）を利用してセンサーデータをインジケーターにアップロードします。</td>
  </tr>
 </table>
</div>

詳細については、[README](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/main/examples/indicator_lora/README.md) ファイルをご覧ください。

## 技術サポート

**SenseCAP インジケーターに関するサポートが必要ですか？私たちがサポートします！**

このチュートリアルを進める中で問題が発生したり質問がある場合は、ぜひ技術サポートにお問い合わせください。いつでもお手伝いします！

[Seeed公式Discordチャンネル](https://discord.gg/kpY74apCWj)を訪れて質問するか、[GitHubディスカッション](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions)で自由に共有してください！