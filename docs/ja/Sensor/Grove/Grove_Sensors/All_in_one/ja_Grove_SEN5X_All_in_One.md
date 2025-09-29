---
description: Grove SEN5X オールインワン
title: Grove SEN5X オールインワン
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove_SEN5X_All_in_One
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/GroveAllin1/GroveAllin1overview.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-All-in-one-Environmental-Sensor-SEN54-p-5374.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
</div>

## はじめに

Grove オールインワン環境センサー SEN54/SEN55 は、8種類のデータ信号出力を統合した Grove 環境センサーであり、高精度でのセンシングが可能で、最大10年間動作します。これは、HVAC（暖房、換気、空調）や長期間の空気質検出アプリケーション向けに設計されています。このウィキでは、Arduino および Raspberry Pi ツールを使用してこのセンサーを活用する方法を紹介します。

### 特徴

- 包括的な環境センシング機能：PM（粒子状物質）、VOC（揮発性有機化合物）、RH（相対湿度）、温度の5つの環境データ信号を連続的にセンシング可能
- 最大7/8種類のデータ信号に対応する1つのドライバ：IIC機能を通じて4種類のPMと4つの主要な環境信号を提供
- すべてのデータ出力に1本のケーブル：センサーとシングルボード間で1本のGroveケーブルのみを必要とするGroveファミリーの簡素化された接続を実現
- 優れたセンシング精度：完全デジタル信号をキャリブレーションして出力
- 優れた動作寿命：最大10年間の高性能を維持
- エッジでの展開に利用可能な3つのモード：低コストアプリケーション向けのアイドルモードとRHT/ガス専用測定モードを設定可能。測定モードはフル機能用

## ハードウェア概要

## 初めての使用方法

Grove オールインワン環境センサー SEN54/SEN55 は、Grove シリーズの優れた特徴を受け継いでおり、Grove IIC インターフェースを通じて直接適用できます。

### 機器のインストール

Grove ケーブルを使用して Grove オールインワン環境センサー SEN54/SEN55 を接続します。

### 環境の準備

ここでは Arduino と Raspberry Pi を使用するため、モジュールをインストールされたシステム上で動作させる必要があります：

- [Arduino](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)
- [Raspberry Pi](https://wiki.seeedstudio.com/ja/Raspberry_Pi_3_Model_B/)

## Arduino ライブラリ概要

:::tip
Arduino を初めて使用する場合は、[Arduino の始め方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) を参照することを強くお勧めします。
:::

Arduino を使用する際には、以下の2つのライブラリをインストールする必要があります：

- [arduino-i2c-sen5x](https://github.com/Sensirion/arduino-i2c-sen5x)（Grove オールインワン環境センサー SEN54/SEN55 の主な機能）
- [arduino-core](https://github.com/Sensirion/arduino-core)（コアファイル / 依存関係）

### 機能

スケッチの開発を始める前に、ライブラリの利用可能な機能を確認しましょう。

- `Serial.begin(115200)` —— アップロードプロセスが完了したら、ツールメニューからシリアルモニタまたはシリアルプロッタを開き、測定値を観察します。対応するウィンドウのボーレートを115200 baud に設定する必要があります。

### インストール

ZIP ライブラリをダウンロードしたら、Arduino IDE を開き、**スケッチ > ライブラリをインクルード > .ZIP ライブラリを追加** をクリックします。ダウンロードした ZIP ファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウに **ライブラリがライブラリに追加されました** と表示されます。これでライブラリが正常にインストールされたことを意味します。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png"/></div>

## Arduinoの例

ライブラリをインストールし、基本的な機能を理解したので、Groveオールインワン環境センサーSEN54/SEN55の動作を確認するためにいくつかの例を実行してみましょう。

**ステップ1.** ハードウェアの接続。

**ステップ2.** Arduinoソフトウェアをインストールする必要があります。

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></div></a></p>

**ステップ3.** Arduinoアプリケーションを起動します。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

### デモ1 4種類のPMと4つの主要な環境信号を検知

このデモでは、4種類のPM（微粒子）、VOC（揮発性有機化合物）、RH（相対湿度）、Temp（温度）を検知し、モニターに表示します。これにより、モジュールが設置されている場所が健康的かどうかを確認できます。

#### 必要な材料

| Seeeduino V4.2 | ベースシールド | SEN54/SEN55 |
|----------------|----------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|<div align="center"><img width ="{210}" src="https://files.seeedstudio.com/wiki/GroveAllin1/GroveAllin1overview.jpg"/></div>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-All-in-one-Environmental-Sensor-SEN54-p-5374.html)|

```cpp

/*
 * I2C-Generator: 0.3.0
 * Yaml Version: 2.1.3
 * Template Version: 0.7.0-112-g190ecaa
 */
/*
 * Copyright (c) 2021, Sensirion AG
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 * * Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * * Neither the name of Sensirion AG nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

#include <Arduino.h>
#include <SensirionI2CSen5x.h>
#include <Wire.h>

// 使用されるコマンドは最大48バイトを使用します。一部のArduinoではデフォルトのバッファ
// スペースが十分でない場合があります
#define MAXBUF_REQUIREMENT 48

#if (defined(I2C_BUFFER_LENGTH) &&                 \
     (I2C_BUFFER_LENGTH >= MAXBUF_REQUIREMENT)) || \
    (defined(BUFFER_LENGTH) && BUFFER_LENGTH >= MAXBUF_REQUIREMENT)
#define USE_PRODUCT_INFO
#endif

SensirionI2CSen5x sen5x;

void printModuleVersions() {
    uint16_t error;
    char errorMessage[256];

    unsigned char productName[32];
    uint8_t productNameSize = 32;

    error = sen5x.getProductName(productName, productNameSize);

    if (error) {
        Serial.print("getProductName()の実行中にエラーが発生しました: ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("製品名:");
        Serial.println((char*)productName);
    }

    uint8_t firmwareMajor;
    uint8_t firmwareMinor;
    bool firmwareDebug;
    uint8_t hardwareMajor;
    uint8_t hardwareMinor;
    uint8_t protocolMajor;
    uint8_t protocolMinor;

    error = sen5x.getVersion(firmwareMajor, firmwareMinor, firmwareDebug,
                             hardwareMajor, hardwareMinor, protocolMajor,
                             protocolMinor);
    if (error) {
        Serial.print("getVersion()の実行中にエラーが発生しました: ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("ファームウェア: ");
        Serial.print(firmwareMajor);
        Serial.print(".");
        Serial.print(firmwareMinor);
        Serial.print(", ");

        Serial.print("ハードウェア: ");
        Serial.print(hardwareMajor);
        Serial.print(".");
        Serial.println(hardwareMinor);
    }
}

void printSerialNumber() {
    uint16_t error;
    char errorMessage[256];
    unsigned char serialNumber[32];
    uint8_t serialNumberSize = 32;

    error = sen5x.getSerialNumber(serialNumber, serialNumberSize);
    if (error) {
        Serial.print("getSerialNumber()の実行中にエラーが発生しました: ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("シリアル番号:");
        Serial.println((char*)serialNumber);
    }
}

void setup() {

    Serial.begin(115200);
    while (!Serial) {
        delay(100);
    }

    Wire.begin();

    sen5x.begin(Wire);

    uint16_t error;
    char errorMessage[256];
    error = sen5x.deviceReset();
    if (error) {
        Serial.print("deviceReset()の実行中にエラーが発生しました: ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    }

// i2cバッファが十分に大きい場合、SEN55モジュール情報を表示
#ifdef USE_PRODUCT_INFO
    printSerialNumber();
    printModuleVersions();
#endif

    // 温度オフセットを摂氏で設定
    // 注意: SEN54およびSEN55センサーでサポートされています
    // デフォルトでは、センサーからの温度と湿度の出力はモジュールの自己発熱に対して補正されています。
    // モジュールがデバイスに組み込まれている場合、温度補正は熱結合の変化や他のデバイス部品の自己発熱を
    // 組み込むために調整が必要になる場合があります。
    //
    // 最適な性能を達成するためのガイド、ならびに機械設計例への参照は、
    // www.sensirion.comのアプリケーションノート「SEN5x – Temperature Compensation Instruction」に記載されています。
    // 詳細な補正設定については、`setTemperatureOffsetParameters`、`setWarmStartParameter`、
    // `setRhtAccelerationMode`で使用される高度な補正設定に関するこれらのアプリケーションノートを参照してください。
    //
    // SENモジュールの自己発熱を超える追加の温度オフセットを考慮するためにtempOffsetを調整します。
    float tempOffset = 0.0;
    error = sen5x.setTemperatureOffsetSimple(tempOffset);
    if (error) {
        Serial.print("setTemperatureOffsetSimple()の実行中にエラーが発生しました: ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("温度オフセットが ");
        Serial.print(tempOffset);
        Serial.println(" 度に設定されました (SEN54/SEN55のみ)");
    }

    // 測定を開始
    error = sen5x.startMeasurement();
    if (error) {
        Serial.print("startMeasurement()の実行中にエラーが発生しました: ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    }
}

void loop() {
    uint16_t error;
    char errorMessage[256];

    delay(1000);

    // 測定値を読み取る
    float massConcentrationPm1p0;
    float massConcentrationPm2p5;
    float massConcentrationPm4p0;
    float massConcentrationPm10p0;
    float ambientHumidity;
    float ambientTemperature;
    float vocIndex;
    float noxIndex;

    error = sen5x.readMeasuredValues(
        massConcentrationPm1p0, massConcentrationPm2p5, massConcentrationPm4p0,
        massConcentrationPm10p0, ambientHumidity, ambientTemperature, vocIndex,
        noxIndex);

    if (error) {
        Serial.print("readMeasuredValues()の実行中にエラーが発生しました: ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("MassConcentrationPm1p0:");
        Serial.print(massConcentrationPm1p0);
        Serial.print("\t");
        Serial.print("MassConcentrationPm2p5:");
        Serial.print(massConcentrationPm2p5);
        Serial.print("\t");
        Serial.print("MassConcentrationPm4p0:");
        Serial.print(massConcentrationPm4p0);
        Serial.print("\t");
        Serial.print("MassConcentrationPm10p0:");
        Serial.print(massConcentrationPm10p0);
        Serial.print("\t");
        Serial.print("AmbientHumidity:");
        if (isnan(ambientHumidity)) {
            Serial.print("n/a");
        } else {
            Serial.print(ambientHumidity);
        }
        Serial.print("\t");
        Serial.print("AmbientTemperature:");
        if (isnan(ambientTemperature)) {
            Serial.print("n/a");
        } else {
            Serial.print(ambientTemperature);
        }
        Serial.print("\t");
        Serial.print("VocIndex:");
        if (isnan(vocIndex)) {
            Serial.print("n/a");
        } else {
            Serial.print(vocIndex);
        }
        Serial.print("\t");
        Serial.print("NoxIndex:");
        if (isnan(noxIndex)) {
            Serial.println("n/a");
        } else {
            Serial.println(noxIndex);
        }
    }
}
```

#### **結果**

コードをアップロードした後、シリアルモニターを115200ボーのボーレートで開くと、8種類すべての信号が表示されるはずです。

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/GroveAllin1/GroveAllin12.png"/></div>

## Python パッケージ概要

:::tip
Raspberry Pi を初めて使用する場合は、[Raspberry Pi の使い方](https://tinkergen-helper.yuque.com/tinkergen_helper/slgacm/tn0wlt)を参照することを強くお勧めします。
:::

このパッケージは SEN50、SEN54、SEN55 センサーをサポートしており、Raspberry Pi を使用して環境データを検出することができます。

<p style={{textAlign: 'center'}}><a href="https://github.com/Sensirion/raspberry-pi-i2c-sen5x" target="_blank"><div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></div></a></p>

### 機能

## Raspberry Pi の例

ライブラリをインストールし、基本的な機能を理解したので、Grove-All-in-One 環境センサー SEN54/SEN55 の動作を確認するためにいくつかの例を実行してみましょう。

**ステップ 1.** ハードウェア接続。

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/GroveAllin1/GroveAllin13.png"/></div>

**ステップ 2.** [Raspberry Pi OS を Raspberry Pi にインストールする](https://projects.raspberrypi.org/en/projects/raspberry-pi-setting-up)。

**ステップ 3.** [raspi-config で I2C インターフェースを有効にする](https://www.raspberrypi.org/documentation/configuration/raspi-config.md)。

**ステップ 4.** 上記のように [Sensirion Github ページ](https://github.com/Sensirion/raspberry-pi-i2c-sen5x) からドライバーをダウンロードし、`.zip` を Raspberry Pi に解凍します。

### デモ 1 Raspberry Pi で機能例を適用する

このデモでは、周辺の環境データを検知することができます。

#### 必要な材料

|              |              |
|--------------|--------------|
|<div align="center"><img width ="{210}" src="https://files.seeedstudio.com/wiki/GroveAllin1/GroveAllin14.png"/></div>| <div align="center"><img width ="{210}" src="https://files.seeedstudio.com/wiki/GroveAllin1/GroveAllin1overview.jpg"/></div>
|[**今すぐ購入**](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html)|[**今すぐ購入**](https://www.seeedstudio.com/Grove-All-in-one-Environmental-Sensor-SEN55-p-5373.html)|

ドライバーをコンパイルします：

**ステップ 1.** ターミナルを開きます。

**ステップ 2.** ドライバーのディレクトリに移動します。例: **cd ~/raspberry-pi-i2c-sen5x**。

**ステップ 3.** `make` コマンドを実行してドライバーをコンパイルします。

**ステップ 4.** ドライバーをコンパイルしたのと同じディレクトリで `./sen5x_i2c_example_usage` を実行します。

```cpp
//sen5x_i2c_example_usage.c


/*
 * I2C-Generator: 0.3.0
 * Yaml Version: 2.1.3
 * Template Version: 0.7.0-109-gb259776
 */
/*
 * Copyright (c) 2021, Sensirion AG
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 * * Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * * Neither the name of Sensirion AG nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

#include <math.h>   // NAN
#include <stdio.h>  // printf

#include "sen5x_i2c.h"
#include "sensirion_common.h"
#include "sensirion_i2c_hal.h"

/*
 * TO USE CONSOLE OUTPUT (PRINTF) YOU MAY NEED TO ADAPT THE INCLUDE ABOVE OR
 * DEFINE IT ACCORDING TO YOUR PLATFORM:
 * #define printf(...)
 */

int main(void) {
    int16_t error = 0;

    sensirion_i2c_hal_init();

    error = sen5x_device_reset();
    if (error) {
        printf("Error executing sen5x_device_reset(): %i\n", error);
    }

    unsigned char serial_number[32];
    uint8_t serial_number_size = 32;
    error = sen5x_get_serial_number(serial_number, serial_number_size);
    if (error) {
        printf("Error executing sen5x_get_serial_number(): %i\n", error);
    } else {
        printf("Serial number: %s\n", serial_number);
    }

    unsigned char product_name[32];
    uint8_t product_name_size = 32;
    error = sen5x_get_product_name(product_name, product_name_size);
    if (error) {
        printf("Error executing sen5x_get_product_name(): %i\n", error);
    } else {
        printf("Product name: %s\n", product_name);
    }

    uint8_t firmware_major;
    uint8_t firmware_minor;
    bool firmware_debug;
    uint8_t hardware_major;
    uint8_t hardware_minor;
    uint8_t protocol_major;
    uint8_t protocol_minor;
    error = sen5x_get_version(&firmware_major, &firmware_minor, &firmware_debug,
                              &hardware_major, &hardware_minor, &protocol_major,
                              &protocol_minor);
    if (error) {
        printf("Error executing sen5x_get_version(): %i\n", error);
    } else {
        printf("Firmware: %u.%u, Hardware: %u.%u\n", firmware_major,
               firmware_minor, hardware_major, hardware_minor);
    }

    // 温度オフセットを摂氏で設定
    // 注意: SEN54 および SEN55 センサーでサポートされています
    // デフォルトでは、センサーからの温度と湿度の出力は
    // モジュールの自己発熱に対して補正されています。
    // モジュールがデバイスに組み込まれている場合、
    // 温度補正は他のデバイスコンポーネントの熱結合と自己発熱の変化を
    // 組み込むために調整する必要があるかもしれません。
    //
    // 最適な性能を達成するためのガイド、機械設計例への参照を含む
    // アプリケーションノート「SEN5x – 温度補正指示書」は
    // www.sensirion.com にあります。
    // `sen5x_set_temperature_offset_parameters`、
    // `sen5x_set_warm_start_parameter` および `sen5x_set_rht_acceleration_mode` で
    // 使用される高度な補正設定に関する詳細情報については、
    // これらのアプリケーションノートを参照してください。
    //
    // SEN モジュールの自己発熱を超える追加の温度オフセットを考慮して
    // temp_offset を調整します。
    float temp_offset = 0.0f;
    error = sen5x_set_temperature_offset_simple(temp_offset);
    if (error) {
        printf("Error executing sen5x_set_temperature_offset_simple(): %i\n",
               error);
    } else {
        printf("Temperature Offset set to %.2f °C (SEN54/SEN55 only)\n",
               temp_offset);
    }

    // 測定開始
    error = sen5x_start_measurement();

    if (error) {
        printf("Error executing sen5x_start_measurement(): %i\n", error);
    }

    for (int i = 0; i < 600; i++) {
        // 測定値を読み取る
        sensirion_i2c_hal_sleep_usec(1000000);

        float mass_concentration_pm1p0;
        float mass_concentration_pm2p5;
        float mass_concentration_pm4p0;
        float mass_concentration_pm10p0;
        float ambient_humidity;
        float ambient_temperature;
        float voc_index;
        float nox_index;

        error = sen5x_read_measured_values(
            &mass_concentration_pm1p0, &mass_concentration_pm2p5,
            &mass_concentration_pm4p0, &mass_concentration_pm10p0,
            &ambient_humidity, &ambient_temperature, &voc_index, &nox_index);
        if (error) {
            printf("Error executing sen5x_read_measured_values(): %i\n", error);
        } else {
            printf("Mass concentration pm1p0: %.1f µg/m³\n",
                   mass_concentration_pm1p0);
            printf("Mass concentration pm2p5: %.1f µg/m³\n",
                   mass_concentration_pm2p5);
            printf("Mass concentration pm4p0: %.1f µg/m³\n",
                   mass_concentration_pm4p0);
            printf("Mass concentration pm10p0: %.1f µg/m³\n",
                   mass_concentration_pm10p0);
            if (isnan(ambient_humidity)) {
                printf("Ambient humidity: n/a\n");
            } else {
                printf("Ambient humidity: %.1f %%RH\n", ambient_humidity);
            }
            if (isnan(ambient_temperature)) {
                printf("Ambient temperature: n/a\n");
            } else {
                printf("Ambient temperature: %.1f °C\n", ambient_temperature);
            }
            if (isnan(voc_index)) {
                printf("Voc index: n/a\n");
            } else {
                printf("Voc index: %.1f\n", voc_index);
            }
            if (isnan(nox_index)) {
                printf("Nox index: n/a\n");
            } else {
                printf("Nox index: %.1f\n", nox_index);
            }
        }
    }

    error = sen5x_stop_measurement();
    if (error) {
        printf("Error executing sen5x_stop_measurement(): %i\n", error);
    }

    return 0;
}

```

#### **結果**

出力は以下のようになります：

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/GroveAllin1/output.png"/></div>

## リソース

- [STM32用ライブラリ](https://github.com/Sensirion/embedded-i2c-sen5x)

## 技術サポート & 製品ディスカッション

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 産業用センサーへのアップグレード可能

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングを支援するだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66の筐体、Bluetooth設定、グローバルLoRaWAN®ネットワークとの互換性、内蔵19Ahバッテリー、そして強力なAPPサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device)は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1気象ステーション用センサーが含まれています。次の成功する産業プロジェクトには最新のSenseCAP S210xを試してみてください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width ="{800}" src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png"/></a></div>
