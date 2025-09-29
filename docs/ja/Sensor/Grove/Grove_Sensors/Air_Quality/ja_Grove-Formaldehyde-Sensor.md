---
description: Grove - ホルムアルデヒドセンサー
title: Grove - ホルムアルデヒドセンサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/GroveFormaldehydehardware.jpg
slug: /ja/Grove-Formaldehyde-Sensor
last_update:
  date: 05/15/2025
  author: Spencer Yan
---


<!-- ---
name: Grove - ホルムアルデヒドセンサー
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html
oldwikiname: Grove - PIR Motion Sensor
prodimagename: Breakout_for_LinkIt_Smart_7688_v2.0_product_view_700.jpg
surveyurl: https://www.surveymonkey.com/r/grove-pir-motion-sensor
sku: 101020972
tags: io_3v3, io_5v, plat_duino, plat_pi
--- -->

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/101020972_Front-05.jpg"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Formaldehyde-Sensor-SFA30-p-5204.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>
<br />

Grove ホルムアルデヒドセンサーは、0～1000 ppb の範囲でホルムアルデヒドを検出でき、アルコールに対する低い交差感度と6年間の長期安定性を備えています。内蔵のRHTセンサーにより、異なる温度や湿度の下でも優れた性能を維持し、UARTおよびI2Cポートを介してデータを送信します。

## 特徴

- アルコールに対する低い交差感度
- 標準ホルムアルデヒド測定範囲: 0 ~ 1000 ppb
- 長期安定性と6年間の使用寿命
- 乾燥防止技術を備えた特許取得済みの電気化学セル
- I2C/UARTインターフェースと寿命校正済み出力
- 異なる温度や湿度の下でも性能を維持: Sensirion RHTセンサーによる補償

## 仕様

|パラメータ|値/範囲
|---|---|
|供給電圧範囲|3.3V または 5V
|測定範囲|0 ～ 1,000 ppb
|応答時間|&lt;2 分
|検出限界|&lt;20 ppb
|インターフェース|I2C / UART
|ホルムアルデヒド精度|±20 ppb または測定値の±20%、いずれか大きい方

## 対応プラットフォーム

| Arduino| Raspberry |   |   |   |
|:------:|:---------:|---|---|---|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォームに対してソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

## はじめに

:::note
Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

### Arduinoで遊ぶ

#### **ハードウェア**

- **ステップ1.** 以下のものを準備してください:

| Seeeduino V4.2 | ベースシールド|  Grove-ホルムアルデヒドセンサー|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/GroveFormaldehydehardware.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|   [今すぐ購入](https://www.seeedstudio.com/Grove-Formaldehyde-Sensor-SFA30-p-5204.html)    |

- **ステップ2.** Grove-ホルムアルデヒドセンサーのボタンを**"1"**の位置に設定します。

![](https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/hardware1.png)

- **ステップ3.** Grove - ベースシールドをSeeeduinoに接続し、Grove-ホルムアルデヒドセンサーをGrove-ベースシールドの**I²C**ポートに接続します。
- **ステップ4.** USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/Arduous-link.jpg)

:::note
Groveベースシールドがない場合でも、以下のようにGrove-ホルムアルデヒドセンサーをSeeeduinoに直接接続することができます。
:::

| Seeeduino |  Grove-ラウドネスセンサー |
|-----------|-----------------|
| 5V        | 赤              |
| GND       | 黒              |
| SDA       | 白              |
| SCL       | 黄色            |

#### **ソフトウェア**

- **ステップ1.** Groveホルムアルデヒドセンサーの使用のために[Grove-Formaldehyde Sensor Library](https://github.com/Sensirion/arduino-i2c-sfa3x)をダウンロードし、[インストール](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)してください。

- **ステップ2.** Arduino IDEを開きます。以下のコードをArduino IDEにコピーしてアップロードしてください。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)に関するガイドをご覧ください。

:::tip
ライブラリマネージャで**Sensirion I2C SFA3X**を検索してライブラリを直接ダウンロードすることもできます。
:::

```cpp
#include <Arduino.h>
#include <SensirionI2CSfa3x.h>
#include <Wire.h>

SensirionI2CSfa3x sfa3x;

void setup() {

    Serial.begin(115200);
    while (!Serial) {
        delay(100);
    }

    Wire.begin();

    uint16_t error;
    char errorMessage[256];

    sfa3x.begin(Wire);

    // 測定開始
    error = sfa3x.startContinuousMeasurement();
    if (error) {
        Serial.print("startContinuousMeasurement()を実行中にエラーが発生しました: ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    }
}

void loop() {
    uint16_t error;
    char errorMessage[256];

    delay(1000);
    int16_t hcho;
    int16_t humidity;
    int16_t temperature;
    error = sfa3x.readMeasuredValues(hcho, humidity, temperature);
    if (error) {
        Serial.print("readMeasuredValues()を実行中にエラーが発生しました: ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("ホルムアルデヒド:");
        Serial.print(hcho / 5.0);
        Serial.print("\t");
        Serial.print("湿度:");
        Serial.print(humidity / 100.0);
        Serial.print("\t");
        Serial.print("温度:");
        Serial.println(temperature / 200.0);
    }
}
```

- **ステップ 4.** このプログラムでは、Seeeduinoがホルムアルデヒドガス濃度、空気湿度、温度データをリアルタイムで監視できます。「シリアルモニター」を開くと、結果は以下のようになります。

![](https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/test.png)

### Raspberry Piで遊ぶ

#### **ハードウェア**

- **ステップ 1.** 以下のアイテムを準備してください：

| Raspberry Pi | Raspberry Pi用Grove Base Hat | Grove-Formaldehyde Sensor |
|--------------|-----------------------------|---------------------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/GroveFormaldehydehardware.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Formaldehyde-Sensor-SFA30-p-5204.html)|

- **ステップ 2.** Raspberry PiにGrove Base Hatを接続します。
- **ステップ 3.** Grove-Dust SensorをRaspberry Pi用Grove Base Hatの**I²C**ポートに接続します。
- **ステップ 4.** USBケーブルを使用してRaspberry PiをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/raspberry-link.jpg)

#### **ソフトウェア**

- **ステップ 1.** [ソフトウェアの設定](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)に従って、Raspberry Piの開発環境を構築します。
- **ステップ 2.** [Grove-Formaldehyde Sensor Library](https://github.com/Sensirion/raspberry-pi-i2c-sfa3x/archive/refs/heads/master.zip)をダウンロードし、Raspberry Piに解凍します。

- **ステップ 3.** デモディレクトリに移動します。以下のコマンドでホルムアルデヒド濃度、湿度、温度を監視できます。

```python
cd ~/raspberry-pi-i2c-sfa3x-master
make
./sfa3x_i2c_example_usage
```

:::tip
このWikiでは、**~/embedded-sfa3x-main/i2c**というパスを使用していますが、**/home/pi/Desktop/embedded-sfa3x-main/i2c**ではありません。ステップ 2とステップ 3で同じパスを使用する必要があります。
:::

以下は**sfa3x_i2c_example_usage.c**のコードです。

```cpp
#include <stdio.h>  // printf

#include "sensirion_common.h"
#include "sensirion_i2c_hal.h"
#include "sfa3x_i2c.h"

/**
 * コンソール出力（PRINTF）を使用する場合、プラットフォームに存在しない場合は以下を有効にしてください
 */
//#define printf(...)

int main(void) {
    int16_t error = 0;

    sensirion_i2c_hal_init();

    error = sfa3x_device_reset();
    if (error) {
        printf("デバイスリセットエラー: %i\n", error);
        return -1;
    }

    uint8_t device_marking[42];
    error = sfa3x_get_device_marking(&device_marking[0], sizeof(device_marking));
    if (error) {
        printf("デバイスマーキング取得エラー: %i\n", error);
        return -1;
    }
    printf("デバイスマーキング: %s\n", device_marking);

    // 測定開始
    error = sfa3x_start_continuous_measurement();
    if (error) {
        printf("sfa3x_start_continuous_measurement()実行エラー: %i\n", error);
    }

    for (;;) {
        // 測定値読み取り

        int16_t hcho;
        int16_t humidity;
        int16_t temperature;

        sensirion_i2c_hal_sleep_usec(500000);

        error = sfa3x_read_measured_values(&hcho, &humidity, &temperature);

        if (error) {
            printf("sfa3x_read_measured_values()実行エラー: %i\n", error);
        } else {
            printf("測定結果:\n");
            printf("  ホルムアルデヒド濃度: %.1f\n", hcho / 5.0f);
            printf("  相対湿度: %.2f\n", humidity / 100.0f);
            printf("  温度: %.2f\n", temperature / 200.0f);
        }
    }

    error = sfa3x_stop_measurement();
    if (error) {
        printf("sfa3x_stop_measurement()実行エラー: %i\n", error);
    }

    return 0;
}

```

:::tip
すべてが正常に動作すれば、以下のような結果が表示されます：
:::

```shell
pi@raspberrypi:~/Downloads/embedded-sfa3x-main/i2c $ ./sfa3x_i2c_example_usage
デバイスマーキング: 211117825F073B80
測定結果:
  ホルムアルデヒド濃度: 0.0
  相対湿度: 70.19
  温度: 27.41
```

このプログラムを終了するには、++ctrl+c++を押すだけです。

## 産業用センサーへのアップグレード

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングをサポートするだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66ハウジング、Bluetooth設定、グローバルLoRaWAN®ネットワークとの互換性、内蔵19Ahバッテリー、そして強力なアプリサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device)は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1気象ステーション用のセンサーが含まれています。次の産業プロジェクトで最新のSenseCAP S210xをぜひお試しください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
