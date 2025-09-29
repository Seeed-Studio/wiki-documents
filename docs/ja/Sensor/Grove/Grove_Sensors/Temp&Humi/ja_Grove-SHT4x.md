---
description: Grove - 温度・湿度センサー(SHT4x)
title: Grove - 温度・湿度センサー(SHT4x)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-SHT4x
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


# Grove - 温度・湿度センサー

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SHT4x/SHT4x.jpeg" /></div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/grove-temp-humi-sensor-sht40-p-5384.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p>

## 概要

このGrove SHT40デジタルセンサーは、Sensirionの実績ある湿度および温度センサーに基づいています。広範囲の測定範囲で一定の温度および湿度精度を提供できます。また、Groveプラットフォームを使用することで、SHT4xセンサーを任意のマイクロコントローラー（Arduino）やマイクロプロセッサ（Raspberry Pi）に簡単に接続して使用することができます。

## ハードウェア概要

始める前に、製品の基本的なパラメータを把握することが重要です。以下の表は、Grove - 温度・湿度センサーの特性に関する情報を提供します。

<table border="0">
<tbody>
<tr>
<td><strong>パラメータ</strong></td>
<td><strong>評価値</strong></td>
</tr>
<tr>
<td>温度精度</td>
<td>±0.2 ℃</td>
</tr>
<tr>
<td>湿度精度</td>
<td>±1.8% RH</td>
</tr>
<tr>
<td>動作温度範囲</td>
<td>-40°C ～ 125°C</td>
</tr>
<tr>
<td>動作湿度範囲</td>
<td>0% ～ 100% RH</td>
</tr>
<tr>
<td>Grove電源供給</td>
<td>5/3.3 V</td>
</tr>
<tr>
<td>シリアルプロトコル</td>
<td>I2C</td>
</tr>
<tr>
<td>Grove平均電流</td>
<td>32 µA</td>
</tr>
<tr>
<td>Grove待機電流</td>
<td>1.2 µA</td>
</tr>
<tr>
<td>製品寸法</td>
<td>20mm x 40mm</td>
</tr>
<tr>
<td>通信</td>
<td>IIC</td>
</tr>
<tr>
<td>レート</td>
<td>115200</td>
</tr>
</tbody>
</table>

## はじめに

これでモジュールをセットアップし、湿度と温度を検出する準備が整いました。

### 準備

**ハードウェア**

- Grove - 温度・湿度センサー
- WindowsホストPCまたはMacOS PC（Win 10 & MacOS 12.2でテスト済み）
- Type-Cケーブル

**ソフトウェア**

- [Arduinoソフトウェア](https://www.arduino.cc/)
- [モジュールライブラリ](https://github.com/Sensirion/arduino-i2c-sht4x)

## Arduinoライブラリ概要

:::tip
Arduinoを初めて使用する場合は、[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

ここで使用するライブラリはGitHubで公開されており、例も含まれています。

<p style={{textAlign: 'center'}}><a href="https://github.com/Sensirion/arduino-i2c-sht4x" target="_blank"><img src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></a></p>

### 機能

- `Serial.begin(115200);` —— ここでの数値はレートが115200に設定されていることを意味します。コードをアップロードする際、モニターを開くときにレートを115200に設定する必要があります。

### インストール

ZIPライブラリをダウンロードしたら、Arduino IDEを開き、**スケッチ > ライブラリをインクルード > .ZIPライブラリを追加**をクリックします。ダウンロードしたZIPファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウに**ライブラリがライブラリに追加されました**と表示されます。これでライブラリが正常にインストールされたことを意味します。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" /></div>

### パッケージのアップグレード

製品の継続性を考慮して、後の段階で製品ライブラリを最適化およびアップグレードする場合があります。上記の2つのライブラリインストール方法に基づいて、ライブラリを更新するための2つの方法も参考にできます。

ライブラリが最適化されると、GitHubが最初に更新されます。コンピュータのフォルダ内の元のライブラリフォルダを削除し、GitHubから最新バージョンをダウンロードして解凍し、Arduino IDEライブラリディレクトリに配置します。（**...\Arduino\libraries. ....** はArduinoを設定したパスです）

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Location_lib.png" /></div>

## Arduino 例

ライブラリをインストールし、基本的な機能を理解したところで、Grove - Temp & Humidi Sensor の動作を確認するためにいくつかの例を実行してみましょう。

**前提条件**

| Seeeduino V4.2 | ベースシールド | Grove - Temp & Humidi Sensor |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width="{210}" src="https://files.seeedstudio.com/wiki/SHT4x/SHT4x.jpeg" /></div>
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/grove-temp-humi-sensor-sht40-p-5384.html)|

**ステップ 1.** 以下のようにハードウェアを接続し、特に IIC ポートの接続に注意してください：

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SHT4x/SHT4xconnection.png" /></div>

**ステップ 2.** Arduino ソフトウェアをインストールしてください。

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><img width = "{600}" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></p>

**ステップ 3.** Arduino アプリケーションを起動してください。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>

**ステップ 4.** 「file-->examples-->Sensirion IIC Sen4x-->exampleUsage」に移動し、ライブラリに提供されている例を開きます。また、以下のコードをコピーすることもできます：

```cpp
#include <Arduino.h>
#include <SensirionI2CSht4x.h>
#include <Wire.h>

SensirionI2CSht4x sht4x;

void setup() {

    Serial.begin(115200);
    while (!Serial) {
        delay(100);
    }

    Wire.begin();

    uint16_t error;
    char errorMessage[256];

    sht4x.begin(Wire);

    uint32_t serialNumber;
    error = sht4x.serialNumber(serialNumber);
    if (error) {
        Serial.print("serialNumber() を実行中にエラーが発生しました: ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("シリアル番号: ");
        Serial.println(serialNumber);
    }
}

void loop() {
    uint16_t error;
    char errorMessage[256];

    delay(1000);

    float temperature;
    float humidity;
    error = sht4x.measureHighPrecision(temperature, humidity);
    if (error) {
        Serial.print("measureHighPrecision() を実行中にエラーが発生しました: ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("温度:");
        Serial.print(temperature);
        Serial.print("\t");
        Serial.print("湿度:");
        Serial.println(humidity);
    }
}
```

**ステップ 5.** コードを Arduino ソフトウェアにアップロードし、右上の「モニター」をクリックしてください。モニター結果は以下のように表示されるかもしれません：

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/SHT4x/SHT4xoutput.png" /></div>

## リソース

- **[PDF]** [SHT4x データシート](https://files.seeedstudio.com/wiki/SHT4x/SHT4x_Datasheet.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>