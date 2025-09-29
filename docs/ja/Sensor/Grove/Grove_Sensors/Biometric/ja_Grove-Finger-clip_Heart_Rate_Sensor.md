---
description: Grove - 指クリップ型心拍センサー
title: Grove - 指クリップ型心拍センサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Finger-clip_Heart_Rate_Sensor
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Grove-Finger-clip_Heart_Rate_Sensor.jpg" /></div>

Grove - 指クリップ型心拍センサーは、PAH8001EI-2Gをベースにした高性能で低消費電力のCMOSプロセス光学センサーで、緑色LEDとDSPが統合されており、心拍検出（HRD）センサーとして機能します。このモジュールは光学技術に基づいており、血管内の人間の血液の動きの変化を測定します。低消費電力と柔軟な省電力モードにより、ウェアラブルデバイスに適しています。心拍センサーのチップは心拍データのアルゴリズムに高い処理速度を必要とするため、このモジュールにはSTM32が統合されており、SWDインターフェースが予約されているため、ユーザーはSTM32を再プログラムすることができます。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Finger-clip-Heart-Rate-Sensor-p-2425.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 仕様

---

* 超低消費電力、タッチ動作がない時間の省電力モード

* 柔軟なスリープレート制御

* STM32F103を統合

* I2Cインターフェース

* 心拍センサーエリアはわずか3.0 x 4.7mm

* SWDインターフェースを予約

* 動作温度: -20 ~ +60℃

## インターフェース機能

---
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Finger-clip_Heart_Rate_Sensor_TOP.jpg" /></div>
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Finger-clip_Heart_Rate_Sensor_Bottom.jpg" /></div>

* 1: Groveインターフェース

* 2: STM32のプログラミング用予約SWDインターフェース

* 3: 心拍センサー

## 使用方法

---
ここでは、このセンサーの使用方法を示す例を提供します。

### ハードウェアのインストール

Groveケーブルを使用してセンサーをSeeeduinoのI2Cポートに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Finger-clip_Heart_Rate_Sensor_Connect.jpg" /></div>

### ソフトウェア部分

#### Arduinoを使用する場合

**ハードウェアシリアル**

以下のコードをArduinoの新しいスケッチにコピーしてアップロードしてください。その後、シリアルモニターから心拍数を取得できます。センサーに指を触れた後、心拍数が有効になるまで約1分かかる場合があります。

```cpp
#include <Wire.h>
void setup() {
    Serial.begin(9600);
    Serial.println("心拍センサー:");
    Wire.begin();
}
void loop() {
    Wire.requestFrom(0xA0 >> 1, 1);    // スレーブデバイスから1バイトを要求
    while(Wire.available()) {          // スレーブが要求より少ないデータを送る可能性あり
        unsigned char c = Wire.read();   // 心拍数値（1バイト）を受信
        Serial.println(c, DEC);         // 心拍数値を出力
    }
    delay(500);
}
```

**ソフトウェアシリアル**

Arduinoの標準I2CライブラリはWireライブラリです。このライブラリは、I2CピンSDA/SCLが他の目的で既に使用されている場合には動作しません。そのため、SoftwareI2Cを使用できます。SCLをD2に、SDAをD3に接続してください。[SoftI2CMasterライブラリ](https://github.com/felias-fogg/SoftI2CMaster)をダウンロードし、[Arduinoライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)に従ってライブラリを設定してください。以下のコードをArduinoの新しいスケッチにコピーしてアップロードしてください。その後、シリアルモニターから心拍数を取得できます。センサーに指を触れた後、心拍数が有効になるまで約1分かかる場合があります。

```cpp
#define SDA_PORT PORTD
#define SDA_PIN 3
#define SCL_PORT PORTD
#define SCL_PIN 2
#include <SoftI2CMaster.h>
#include <SoftWire.h>
SoftWire Wire = SoftWire();

void setup() {
    Serial.begin(9600);
    Serial.println("心拍センサー:");
    Wire.begin();
}
void loop() {
    Wire.requestFrom(0xA0 >> 1, 1);    // スレーブデバイスから1バイトを要求
    while(Wire.available()) {          // スレーブが要求より少ないデータを送る可能性あり
        unsigned char c = Wire.read();   // 心拍数値（1バイト）を受信
        Serial.println(c, DEC);         // 心拍数値を出力
    }
    delay(500);
}
```

#### Mbedを使用する場合

I2Cデバイス0xA0（8ビットアドレス）から1バイトを読み取り、それが心拍数です。

```cpp
#include "mbed.h"

I2C i2c(I2C_SDA, I2C_SCL);
const int addr = 0xA0;

int main() {
    char heart_rate;
    while (1) {
        i2c.read(addr, &heart_rate, 1);
        printf("心拍数: = %d\r\n", heart_rate);
    }
}
```

#### ファームウェアのアップグレード

心拍センサーのブートローダーを介してファームウェアをアップグレードすることができます。

* ブートローダーは0x08000000 - 0x08002000に配置されています
* アプリケーションは0x08002000 - 0x08020000に配置されています

##### ハードウェア接続

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Firmware_Connection.jpg" /></div>

* [USB to serial adapter](https://www.seeedstudio.com/CH340G-USB-to-Serial-%28TTL%29-Module%26Adapter-p-2359.html)が必要です
* UART（GroveコネクタはI2CとUARTをサポート）、ファームウェアをアップグレードする際にはGroveインターフェースがUARTモードで動作します。

| Grove-Finger-clip_Heart_Rate_Sensor | USB to Serial (TTL) Module&Adapter |
|-------------------------------------|------------------------------------|
| VCC                                 | VCC                                |
| GND                                 | GND                                |
| SDA                                 | TX                                 |
| SCL                                 | RX                                 |

##### ソフトウェア

* [Tera Term](https://ttssh2.osdn.jp/index.html.en)ソフトウェアをダウンロードしてください
* UARTボーレートを115200に設定してください

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/BaudRate_Setting.png" /></div>

* [ファームウェア](https://github.com/SeeedDocument/Grove-Finger-clip_Heart_Rate_Sensor/raw/master/res/Grove-Finger-clip_Heart_Rate_Sensor_bin.zip)をダウンロードします。

* Grove - Finger-clip Heart Rate Sensor.bin を選択します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Select_firmware.png" /></div>

* ファームウェアを Grove-Finger-clip Heart Rate Sensor にダウンロードします。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Firmware_download.png" /></div>

* ファームウェアのダウンロードが成功しました。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Finish_Downloading.png" /></div>

:::note
Grove - Finger-clip Heart Rate Sensor は心拍数の測定を提供します。ただし、これは医療機器ではありません。手首、指、または手のひらで心拍数センサーを使用するには、以下を守る必要があります：
:::

* センサーをしっかりと固定し、肌に密着させ、測定中は安定した状態（動かない）を保つことで、正確な心拍数を取得できます。センサーが肌に十分に接触していない場合や、測定中に極端な動きがある場合、心拍数は正確に測定されません。

* センサーの性能は血流が多いほど最適化されます。寒い日や血行が悪い（例：冷たい手、指、足）場合、測定位置での血流が少ないため、センサーの性能（心拍数の精度）が影響を受ける可能性があります。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/res/Grove-Finger-clip_Heart_Rate_Sensor_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

---

* [Grove - Finger-clip Heart Rate Sensor eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/res/Grove-Finger-clip_Heart_Rate_Sensor_v1.0_sch_pcb.zip)

* [Grove - Finger-clip Heart Rate Sensor bin ファイル](https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/res/Grove-Finger-clip_Heart_Rate_Sensor_bin.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>