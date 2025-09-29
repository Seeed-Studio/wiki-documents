---
description: Grove - 指クリップ型心拍センサー（シェル付き）
title: Grove - 指クリップ型心拍センサー（シェル付き）
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Finger-clip_Heart_Rate_Sensor_with_shell
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/img/Grove-Finger-clip_Heart_Rate_Sensor_with_shell.JPG" /></div>

Grove - 指クリップ型心拍センサー（シェル付き）は、PAH8001EI-2Gをベースにした高性能・低消費電力のCMOSプロセス光学センサーで、緑色LEDとDSPが統合され、心拍検出（HRD）センサーとして機能します。このモジュールは光学技術に基づいており、血管内の人間の血流の変動を測定します。低消費電力と柔軟な省電力モードにより、ウェアラブルデバイスに適しています。心拍センサーのチップは心拍データのアルゴリズムに高い処理速度を必要とするため、このモジュールにはSTM32が統合されており、SWDインターフェースが予約されているため、ユーザーはSTM32を再プログラムできます。このモジュールにはシェルと2本のバンドが付属しており、指、手首、または腕に簡単に固定できます。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Finger-clip-Heart-Rate-Sensor-with-shell-p-2420.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 仕様

---

* 超低消費電力、非接触時の省電力モード

* 柔軟なスリープレート制御

* STM32F103を統合

* I2Cインターフェース

* 心拍センサーエリアのサイズ：3.0 x 4.7mm

* SWDインターフェースを予約

* シェルとバンドを装備

* 動作温度：-20～+60℃

## インターフェース機能

---
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/img/Finger-clip_Heart_Rate_Sensor_TOP.jpg" /></div>
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/img/Finger-clip_Heart_Rate_Sensor_Bottom.jpg" /></div>

* 1: Groveインターフェース

* 2: STM32用プログラミングのためのSWDインターフェース（予約済み）

* 3: 心拍センサー

## 使用方法

---
ここでは、このセンサーの使用方法を示す例を提供します。

### ハードウェアのインストール

Groveケーブルを使用してセンサーをSeeeduinoのI2Cポートに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/img/Grove-Finger-clip_Heart_Rate_Sensor_with_shell_connect.jpg" /></div>

このモジュールを指や手首に固定する際は、センサーエリアが肌にしっかり接触し、動かないようにしてください。以下の画像のようにしてください。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/img/Grove-Finger-clip_Heart_Rate_Sensor_touch.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/img/Grove-Finger-clip_Heart_Rate_Sensor_touch2.JPG" /></div>

### ソフトウェア部分

### Arduinoを使用する場合

以下のコードをArduinoの新しいスケッチにコピーしてアップロードしてください。その後、シリアルモニターから心拍数を取得できます。センサーに指を触れてから有効な心拍数を取得するまでに約1分かかる場合があります。

```
#include <Wire.h>
void setup() {
    Serial.begin(9600);
    Serial.println("heart rate sensor:");
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

### Mbedを使用する場合

I2Cデバイス0xA0（8ビットアドレス）から1バイトを読み取ります。これが心拍数です。

```
#include "mbed.h"

I2C i2c(I2C_SDA, I2C_SCL);
const int addr = 0xA0;

int main() {
    char heart_rate;
    while (1) {
        i2c.read(addr, &heart_rate, 1);
        printf("heart rate: = %d\r\n", heart_rate);
    }
}
```

#### ファームウェアのアップグレード

心拍センサーのブートローダーを通じてファームウェアをアップグレードできます。

* ブートローダーは0x08000000 - 0x08002000に配置されています。

* アプリケーションは0x08002000 - 0x08020000に配置されています。

* ブートローダーに入るには、SWDIOをGNDに接続し、リセットして実行します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/img/Grove-Finger-clip_Heart_Rate_Sensor_boot_set.jpg" /></div>

* インターフェース：UART（GroveコネクタはI2CとUARTをサポート）、ファームウェアをアップグレードする際はGroveインターフェースがUARTモードで動作します。

VCC  -  VCC

GND  -  GND

SDA  -  TX

SCL  -  RX

* UARTボーレート：115200

* プロトコル：ymodem（推奨ツールはTera Term）

:::note
Grove - 指クリップ型心拍センサーは心拍数を測定しますが、医療機器ではありません。手首、指、または手のひらで心拍検出センサーを使用するには、以下を守る必要があります：
:::

* (1) センサーを肌にしっかり密着させ、測定中は動かないようにしてください。センサーが肌にしっかり接触していない場合や、測定中に極端な動きがある場合、心拍数が正確に測定されません。
* (2) センサーの性能は血流が多いほど最適化されます。寒い日や血行が悪い場合（例：冷たい手、指、足）には、測定位置での血流が少ないため、センサーの性能（心拍数の精度）が影響を受ける可能性があります。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/res/Grove%20-%20Finger-clip%20Heart%20Rate%20Sensor%20eagle%20file.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

---

* [Grove - 指クリップ型心拍センサー Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/res/Grove%20-%20Finger-clip%20Heart%20Rate%20Sensor%20eagle%20file.rar)

* [Grove - 指クリップ型心拍センサー bin ファイル](https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/res/Grove-Finger-clip_Heart_Rate_Sensor_bin.zip)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>