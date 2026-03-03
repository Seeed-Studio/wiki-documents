---
description: LoRa デモンストレーション使用方法
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
  date: 11/17/2023
  author: Spencer
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SenseCAP Indicator - LoRa アプリケーション開発

## はじめに

LoRa® は、小量のデータを長距離で送信することに最適化された長距離無線通信技術です。Chirp Spread Spectrum (CSS) と呼ばれる方法を使用して、サブGHzスペクトラムの無線信号を変調することで動作します。

Seeed Studio の SenseCAP Indicator（バージョン D1L および D1Pro）には、内蔵の LoRa トランシーバーモジュール（Semtech SX1262 LoRa® チップ）が含まれており、プロジェクトに低消費電力の無線接続を簡単に追加できます。この記事では、2つの SenseCAP Indicator ボード間で LoRa 通信を設定する方法について説明します。

### 概要

この[デモンストレーション](https://github.com/Seeed-Solution/indicator_lora_commu)では、Wio-E5 を中継として使用して、SenseCAP Indicator と XIAO ボード間で基本的な LoRa 通信を確立する方法を紹介します。SenseCAP Indicator は XIAO からセンサーデータを取得し、それが Wio-E5 を介して送信されます。送信されたペイロードは、その後 SenseCAP Indicator によって受信され、結果を解読して出力し、データを画面に表示します。

LVGL コードなし: [Code · GitHub](https://github.com/Seeed-Solution/indicator_lora_commu/tree/29624d10643a41ae5e1e24124b81e93b5e3cd3bb)

## ハードウェア

### SenseCAP Indicator

ページ [Dive_into_the_Hardware](/ja/SenseCAP_Indicator_Dive_into_the_Hardware/#hardware-diagram) から、LoRa トランシーバーが SPI インターフェースを介して ESP32-S3 MCU に接続されていることがわかります。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png
"/></div>

主要なコンポーネントは以下の通りです：

- Semtech SX1262 無線フロントエンド
- ESP32-S3 MCU

LoRa トランシーバーは、LoRa 信号の低レベル変調および復調をすべて処理します。ESP32-S3 から SPI インターフェースを使用してそれと通信できます。

### XIAO

このデモの XIAO は、センサーデータを収集し、Wio-E5 を介して SenseCAP Indicator に送信するために必要です。XIAO は UART インターフェースを介して Wio-E5 に接続されています。

- XIAO
- Wio-E5
- SEN5x

## ソフトウェア

[SenseCAP_Indicator_ESP32](https://github.com/Seeed-Solution/sensecap_indicator_esp32) SDK がすでに LoRa ライブラリを提供しているため、直接使用できます。LoRa ライブラリの使用方法については、ページ [LoRa®](/ja/SenseCAP_Indicator_ESP32_LoRa) を素早く確認してください。

## はじめに

このデモでは、IoT 接続用のローカル LoRa® ハブを設定する方法を示します。

### 前提条件

開発環境を設定するために提供された[手順](/ja/SenseCAP_Indicator_How_To_Flash_The_Default_Firmware)に従ってください。

### ステップ 1: デモコードのダウンロード

[このリンク](https://github.com/Seeed-Solution/indicator_lora_commu)からデモコードをクローンまたはダウンロードします。このコードは、LoRa アプリケーションの出発点として機能します。

### ステップ 2: ペイロードエンコーダーの実装（XIAO;Arduino）

#### ステップ 2.1: ペイロード構造とエンコーダーの実装

<Tabs>

  <TabItem value="XIAO/include/Frame.h">

  ```cpp
  #ifndef _FRAME_H
  #define _FRAME_H
  #include <Arduino.h>
  #include <vector>

  /** payload format
  * | topic | dataLength | Data Payload | CRC |
  * | 1byte | 1byte      | n byte       | 2byte |
  * example:
  * | 0x01 | 0x0E | 14 bytes | 2byte | for SEN54
  * | 0x01 | 0x10 | 16 bytes | 2byte | for SEN55
  */

  #pragma pack(1)
  enum topics {
      TOPICS_MIN   = 0x00,
      TOPICS_SEN5x = 0x01,
      TOPIC_MAX,
  };

  #pragma pack(1)
  /* highlight-start */
  typedef struct
  {
      enum topics topic;         /*msg type*/
      uint8_t dataLength;
      std::vector<uint8_t> data; /*actual data of payload*/
      uint16_t crc;
  } Frame_t;
  /* highlight-end */
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
          return String(); // Return an empty string if memory allocation fails
      }
      // Pack the frame topic
      packedData[0] = frame.topic;
      packedData[1] = frame.dataLength;
      // highlight-start
      // Pack the data payload
      for (size_t i = 0; i < frame.dataLength; i++) {
          packedData[2 + i] = frame.data[i];
      }
      // highlight-end
      // Calculate CRC (for simplicity, we assume CRC is just the sum of all bytes)
      frame.crc = crc16_ccitt(packedData, 2 + frame.dataLength);

      // Pack the CRC
      packedData[2 + frame.dataLength]     = (frame.crc & 0xFF00) >> 8;
      packedData[2 + frame.dataLength + 1] = frame.crc & 0x00FF;
      // highlight-start
      // String packedFrame; serialize the packed data into a string
      char packedFrameBuffer[(2 + frame.dataLength + 2) * 2];
      for (size_t i = 0; i < 2 + frame.dataLength + 2; i++) {
          snprintf(&packedFrameBuffer[i * 2], 3, "%02X", packedData[i]); // 3 to include null terminator
      }
      // highlight-end
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

#### ステップ 2.2: センサーデータ構造を実装し、ペイロードエンコーダーに適応させる

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
  #error "Please define a device in the compiler options."
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
  // int16_t noxIndex; // Sensor SEN54 does not support NOx
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
      // Initialize specific data members for SEN5X here (if needed)
      _sen5x.begin(Wire);
  }

  uint16_t PayloadSEN5x::init() {
      // Implement the initialization logic for SEN5X here
      uint16_t error;
      char errorMessage[256];
      error = _sen5x.deviceReset();
      if (error) {
          Serial.print("Error trying to execute deviceReset(): ");
          errorToString(error, errorMessage, 256);
          Serial.println(errorMessage);
      }
      float tempOffset = 0.0;
      error            = _sen5x.setTemperatureOffsetSimple(tempOffset);
      if (error) {
          Serial.print("Error trying to execute setTemperatureOffsetSimple(): ");
          errorToString(error, errorMessage, 256);
          Serial.println(errorMessage);
      } else {
          Serial.print("Temperature Offset set to ");
          Serial.print(tempOffset);
          Serial.println(" deg. Celsius (SEN54/SEN55 only)");
      }

      // Start Measurement
      error = _sen5x.startMeasurement();
      if (error) {
          Serial.print("Error trying to execute startMeasurement(): ");
          errorToString(error, errorMessage, 256);
          Serial.println(errorMessage);
      }
      return 0;
  }

  String PayloadSEN5x::toPayloadString() {
  // Add your code to convert data to payload string here
  #ifdef DEVICE_SEN55
      _sen5x.readMeasuredValuesAsIntegers(massConcentrationPm1p0, massConcentrationPm2p5, massConcentrationPm4p0, massConcentrationPm10p0, ambientHumidity, ambientTemperature, vocIndex, noxIndex);
      _frame.dataLength = 16;
  #else
      int16_t __noxIndex;
      _sen5x.readMeasuredValuesAsIntegers(massConcentrationPm1p0, massConcentrationPm2p5, massConcentrationPm4p0, massConcentrationPm10p0, ambientHumidity, ambientTemperature, vocIndex, __noxIndex);
      _frame.dataLength = 14;
  #endif

      _frame.topic = TOPICS_SEN5x;

      // empty the data vector
      _frame.data.clear();
      //highlight-start
      // make the value into hex payload string
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
      Serial.println("String: " + String(data));

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

関数 `toPayloadString` はデータを文字列にシリアル化し、その文字列は Wio-E5 を介して SenseCAP Indicator に送信されます。

#### ステップ 2.3: コードをコンパイルして XIAO にアップロードする

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
    Serial.println( "Starting..." );

    radio.begin();

    Wire.begin();
    payloadSEN5x.init();

    Serial.println( "APP begin" );
}

void loop() {
    static int count               = 0;
    static unsigned long task_time = 0;
    static String test_string;

    if ( millis() - task_time > 10000 ) {
        task_time   = millis();

        radio.sendPayload( payloadSEN5x.toPayloadString() );

        Serial.printf( "Send data %d\r\n", count++ );
    }
}
```

ペイロードを完成させたので、次にSenseCAP Indicatorに進んでペイロードデコーダーをプログラムします。

### ステップ3: ペイロードデコーダーの実装（SenseCAP Indicator;ESP-IDF）

> ペイロードデコーダーは、LoRaトランシーバーから受信したバイナリペイロードを人間が読める形式に変換する関数です。ペイロードデコーダーはあなたのアプリケーション固有のものであり、あなたが実装する必要があります。このデモ用のペイロードデコーダーはデモコードで提供されています。

#### ステップ3.1: ペイロードデコーダーの実装

<Tabs>
  <TabItem value="Indicator/main/Frame/frame.h">

  ```cpp
    #ifndef __SIMPLE_FRAME_H
    #define __SIMPLE_FRAME_H
    #include <stdint.h>
    #include <stdio.h>
    #include <stdlib.h>

    /** payload format
    * | topic | dataLength | Data Payload | CRC |
    * | 1byte | 1byte      | n byte       | 2byte |
    * example:
    * | 0x01 | 0x0E | 14 bytes | 2byte | for SEN54
    * | 0x01 | 0x10 | 16 bytes | 2byte | for SEN55
    */

    #pragma pack(1)
    enum topics {
        TOPICS_MIN   = 0x00,
        TOPICS_SEN5x = 0x01,
        TOPIC_MAX,
    };
    typedef struct
    {
        enum topics topic; /*msg type or DataId*/
        uint8_t dataLength;
    /* highlight-start */
        uint8_t *data;     /*actual data of payload*/
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
            ESP_LOGE( "parsePayload", "Failed to allocate memory for frame" );
            return NULL;
        }

        frame->topic = (enum topics)payload[0];

        frame->dataLength = payload[1];
        /* highlight-start */
        frame->data = (uint8_t *)malloc( frame->dataLength );
        if ( frame->data == NULL ) {
            ESP_LOGE( "parsePayload", "Failed to allocate memory for frame data" );
            free( frame ); // Clean up previously allocated memory
            return NULL;
        }
        /* highlight-end */
        memcpy( frame->data, payload + 2, frame->dataLength );

        frame->crc = (uint16_t)payload[length - 2] << 8 | (uint16_t)payload[length - 1];

        if ( frame->crc != crc16_ccitt( payload, length - 2 ) ) {
            ESP_LOGE( "parsePayload", "CRC mismatch" );
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

#### ステップ 3.2: センサーデータ構造の実装

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
    #error "Please define a device in the compiler options."
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

#### ステップ 3.3: LoRa の設定

##### LoRa パラメータの設定

周波数、拡散係数、帯域幅などの必要な LoRa パラメータを設定します。これらの設定は、通信を成功させるために 2 つの LoRa チャンネル間で一致している必要があります。

```cpp
#define RF_FREQUENCY               868000000 // Hz
#define LORA_BANDWIDTH             0         // [0: 125 kHz, 1: 250 kHz, 2: 500 kHz, 3: Reserved]
#define LORA_SPREADING_FACTOR      12        // [SF7..SF12]
#define LORA_CODINGRATE            1         // [1: 4/5, 2: 4/6, 3: 4/7, 4: 4/8]
#define LORA_PREAMBLE_LENGTH       15        // Same for Tx and Rx
#define LORA_SYMBOL_TIMEOUT        5         // Symbols
#define LORA_FIX_LENGTH_PAYLOAD_ON false
#define LORA_IQ_INVERSION_ON       false
```

##### LoRaトランシーバーレシーバーの設定

```cpp
void OnRxDone( uint8_t *payload, uint16_t size, int16_t rssi, int8_t snr )
{
    SEN5xData_t sen5x_data;
    // highlight-start
    Frame_t *frame = parsePayload( payload, size );
    // highlight-end
    if ( frame == NULL ) {
        ESP_LOGE( TAG, "parsePayload error" );
        return;
    }
    ESP_LOGI( TAG, "frame->type: %s", dataIDToString( frame->topic ) );

    // highlight-start
    switch ( frame->topic ) {
        case TOPICS_SEN5x:
            phraseSEN5xData( frame->data, &sen5x_data );
            break;
        default:
            break;
    }
    // highlight-end
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

Radio.Rx( 0 ); // Continuous Rx
```

#### ステップ 3.4: コードをコンパイルしてSenseCAP Indicatorにフラッシュする

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
  \__ \\/ _ \\/ __ \\/ ___/ _ \\/ /   / /| | / /_/ /   \n\
 ___/ /  __/ / / (__  )  __/ /___/ ___ |/ ____/         \n\
/____/\___/_/ /_/____/\___/\____/_/  |_/_/           \n\
--------------------------------------------------------\n\
 Version: %s %s %s\n\
--------------------------------------------------------\n\
"

#define RF_FREQUENCY               868000000 // Hz
#define LORA_BANDWIDTH             0         // [0: 125 kHz, 1: 250 kHz, 2: 500 kHz, 3: Reserved]
#define LORA_SPREADING_FACTOR      12        // [SF7..SF12]
#define LORA_CODINGRATE            1         // [1: 4/5, 2: 4/6, 3: 4/7, 4: 4/8]
#define LORA_PREAMBLE_LENGTH       15        // Same for Tx and Rx
#define LORA_SYMBOL_TIMEOUT        5         // Symbols
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
        ESP_LOGE( TAG, "parsePayload error" );
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

    Radio.Rx( 0 ); // Continuous Rx

    while ( 1 ) {
        vTaskDelay( pdMS_TO_TICKS( 10000 ) );
    }
}
```

### ステップ4: 通信をテストする

両方のSenseCAP Indicatorボードの電源を入れ、シリアルモニターを開きます。2つのボード間でメッセージが送受信されているのが確認できるはずです。おめでとうございます！SenseCAP Indicatorを使用してLoRa通信のセットアップが正常に完了しました。

```sh title="Serial Monitor of XIAO"
String: 76,80,81,81,5389,5990,980
0 4C 0 50 0 51 0 51 15 D 17 66 3 D4
CRC: 629
<<<AT+TEST=TXLRPKT,"010E004C005000510051150D176603D40629"
>>>+TEST: TX DONE
+TEST: TXLRPKT

Send payload successfully
Send data 1
```

```sh title="Serial Monitor of SenseCAP Indicator"
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
    <td> <a href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/main/examples/indicator_lora/main/demo/beep.c"><span> ビープ制御 </span></a> </td>
    <td> 文字列「ON」または「OFF」を受信し、対応する機能を実行できます</td>
  </tr>
  <tr>
    <td> <a href="https://github.com/Seeed-Solution/indicator_lora_commu"><span> PingPong </span></a></td>
    <td> マスターデバイスとスレーブデバイス間でピンポン通信パターンを確立します。</td>
  </tr>
  <tr>
    <td> <a href="https://github.com/Seeed-Solution/indicator_lora_commu"><span> マルチセンサーデータアップロード </span></a></td>
    <td> XIAOS3がデータを収集し、Wio-E5（LoRaモジュールとATコマンド付き）を利用してセンサーデータをIndicatorにアップロードします。</td>
  </tr>
 </table>
</div>

詳細については、[README](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/main/examples/indicator_lora/README.md)ファイルを参照してください。

## 技術サポート

**SenseCAP Indicatorでお困りですか？私たちがサポートいたします！**

このチュートリアルに従う際に問題が発生したり、ご質問がございましたら、お気軽に技術サポートまでお問い合わせください。私たちは常にお手伝いする準備ができています！

ご質問は[Seeed公式Discordチャンネル](https://discord.gg/kpY74apCWj)にアクセスするか、[GitHubディスカッション](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions)で何でもお気軽にシェアしてください！
