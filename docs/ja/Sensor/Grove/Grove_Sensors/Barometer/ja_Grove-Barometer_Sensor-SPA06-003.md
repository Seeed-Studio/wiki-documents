---
description: Grove - 気圧センサー (SPA06-003)
title: Grove - 気圧センサー (SPA06-003)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/show.webp
slug: /ja/Grove-Barometer_Sensor-SPA06-003
last_update:
  date: 05/15/2025
  author: robben
---


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/SPA06-003.jpg" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-and-Barometer-Sensor-SPA06-003-p-6441.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>


## 説明

**Grove - 温度および気圧センサー(SPA06-003)** は、高精度かつ低消費電力の環境センサーで、温度と気圧を測定します。I2CおよびSPI通信の両方をサポートしており、SPA06-003用のArduinoライブラリを提供しています。

:::note

このセンサーは環境条件に非常に敏感であるため、**指で触れないでください**。
:::

## 特徴

-   **広い測定範囲:** 気圧測定範囲は300hPa～1100hPa、温度測定範囲は-40℃～+85℃。
-   **高精度:** 気圧測定の絶対精度は±0.3 hPa、温度測定の精度は±1℃。
-   **長いスタンバイ時間:** FIFOを使用することで、ホストプロセッサが読み取り間のスリープモードを長く維持でき、システム全体の消費電力を削減し、スタンバイ電流を0.5 μAまで低減可能。
-   **Groveインターフェース:** [Grove 4ピンコネクタ](https://wiki.seeedstudio.com/ja/Grove_System/)を備え、Arduino、Raspberry Pi、Micro:bitなどの主流ハードウェアプラットフォームとの「プラグアンドプレイ」接続を実現。

:::tip
Groveモジュールの詳細については、[Groveシステム](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## 仕様

<div class="table-center">
  <table align="center" border="1" cellpadding="6" cellspacing="0">
    <tr>
      <th>パラメータ</th>
      <th>説明</th>
    </tr>
    <tr>
      <td>供給電圧</td>
      <td>3.3V</td>
    </tr>
    <tr>
      <td>インターフェース</td>
      <td>I2CおよびSPI</td>
    </tr>
    <tr>
      <td>I2Cアドレス</td>
  	  <td>0x77 (デフォルト)<br />0x76</td>
    </tr>
    <tr>
      <th colspan="2">気圧測定</th>
    </tr>
    <tr>
      <td>範囲</td>
      <td>300~1100 hPa</td>
    </tr>
    <tr>
      <td>絶対精度</td>
      <td>±0.3 hPa</td>
    </tr>
    <tr>
      <th colspan="2">温度測定</th>
    </tr>
    <tr>
      <td>範囲</td>
      <td>-40℃ ～ +85℃</td>
    </tr>
    <tr>
      <td>精度</td>
      <td>±1℃</td>
    </tr>
    <tr>
      <td>寸法</td>
      <td>40mm x 20mm x 6.5mm</td>
    </tr>
  </table>
</div>




### **BMP280 vs. BME280 vs. DPS310 vs. SPA06-003**

<div class="table-center">
  <table align="center" border="1" cellpadding="6" cellspacing="0">
    <tr>
      <th>項目</th>
      <th>Grove-BMP280</th>
      <th>Grove-BME280</th>
      <th>Grove-DPS310</th>
      <th>Grove-SPA06-003</th>
    </tr>
    <tr>
      <td>気圧範囲</td>
      <td>300 ~ 1100 hPa</td>
      <td>300 ~ 1100 hPa</td>
      <td>300 ~ 1200 hPa</td>
      <td>300 ~ 1100 hPa</td>
    </tr>
    <tr>
      <td>温度範囲</td>
      <td>-40 ~ 85 ℃</td>
      <td>-40 ~ 85 ℃</td>
      <td>-40 ~ 85 °C</td>
      <td>-40 ~ 85 °C</td>
    </tr>
    <tr>
      <td>気圧精度</td>
      <td>-</td>
      <td>-</td>
      <td>± 0.002 hPa (または±0.02 m)</td>
      <td>-</td>
    </tr>
    <tr>
      <td>気圧精度 (絶対)</td>
      <td>± 1 hPa (または±8 m)</td>
      <td>± 1 hPa (または±8 m)</td>
      <td>± 1 hPa (または±8 m)</td>
      <td>± 0.3 hPa</td>
    </tr>
    <tr>
      <td>気圧精度 (相対)</td>
      <td>± 0.12 hPa</td>
      <td>± 0.12 hPa</td>
      <td>± 0.06 hPa (または±0.5 m)</td>
      <td>± 0.03 hPa (または±0.25 m)</td>
    </tr>
    <tr>
      <td>気圧分解能</td>
      <td>0.18 Pa</td>
      <td>0.18 Pa</td>
      <td>0.06 Pa</td>
      <td>0.06 Pa</td>
    </tr>
    <tr>
      <td>湿度</td>
      <td>-</td>
      <td>0 ~ 100%</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>通信</td>
      <td>I2C/SPI</td>
      <td>I2C/SPI</td>
      <td>I2C/SPI</td>
      <td>I2C/SPI</td>
    </tr>
    <tr>
      <td>価格</td>
      <td>\$9.8</td>
      <td>\$18.7</td>
      <td>\$7.5</td>
      <td>\$4.5</td>
    </tr>
  </table>
</div>



### **部品リスト**

<div class="table-center">
  <table align="center" border="1" cellpadding="6" cellspacing="0">
    <tr>
      <th>項目</th>
      <th>数量</th>
    </tr>
    <tr>
      <td>Grove 温度および気圧センサー (SPA06-003)</td>
      <td>×1</td>
    </tr>
    <tr>
      <td>Grove - 20cmケーブル</td>
      <td>×1</td>
    </tr>
  </table>
</div>

## アプリケーション

- 気象観測ステーションおよび気象センサー
- 温度、気圧、高度の測定

## はじめに

### 表示図

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/Grove-Barometer_Sensor-SPA06-003-Components.png" style={{width:800, height:'auto'}}/></div>

- **SPI はんだ付けパッド**。
- **インターフェースバス選択パッド**：I<sup>2</sup>Cバスを選択するには、2つのパッドをはんだ付けで接続します（デフォルトで接続されています）。SPIバスを選択するには、鋭利なナイフまたははんだごてで2つのパッドを切断します。
- **スレーブボードアドレス選択パッド**：アドレスの衝突を避けるためにスレーブボードアドレスを選択します。

:::tip

- I2Cバスを選択した場合、スレーブボードのデフォルトアドレスは0x77（右側の2つのパッドが接続されています）です。アドレス0x76を使用したい場合は、左側の2つのパッドのみを接続し（右側の2つを切断）、はんだ付けしてください。
- パッドは鋭利なナイフで簡単に切断できます。
- SPIバスを選択した場合、スレーブボードのデフォルトアドレスは0x77（右側の2つのパッドが接続されています）です。アドレス0x76を使用したい場合は、3つのパッドすべてを切断してください。

:::

### ハードウェア

**以下のものを準備してください：**

- *Arduinoで遊ぶ*

| Seeeduino V4.2                                               | ベースシールド                                                | Grove-気圧センサー SPA06-003                             |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| <p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width="400" height="auto" /></p> | <p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width="400" height="auto" /></p> | <p><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/small.jpg" alt="pir" width="350" height="auto" /></p> |
| [今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html) | [今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html) | [今すぐ購入](https://www.seeedstudio.com/Grove-Temperature-and-Barometer-Sensor-SPA06-003-p-6441.html) |

- *ArduinoにGroveを接続*

<div align="center"><img width="500" src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/grove_with_arduino.png" /></div>

- *XIAO ESP32シリーズで遊ぶ*

| Seeed Studio Grove Base for XIAO                             | XIAO ESP32-S3                                                | Grove-気圧センサー SPA06-003                             |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| <div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Thumbnail-27.png"/></div> | <div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" /></div> | <div align="center"><img width="500" src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/small.jpg" /></div> |
| [今すぐ購入](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) | [今すぐ購入](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) | [今すぐ購入](https://www.seeedstudio.com/Grove-Temperature-and-Barometer-Sensor-SPA06-003-p-6441.html) |

- _ESP32シリーズにGroveを接続_

<div align="center"><img width="500" src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/grove_with_esp32.png" /></div>

2つの異なる組み合わせですが、同じコードを使用します。

:::tip

動作中にこの製品に触れたり、揺らしたり、振動させたりしないでください。これにより干渉が発生し、収集されたデータの精度に影響を与えます。

:::

この接続表は、I2Cをサポートするすべてのボードに適用されます。

<div className="table-center" style={{ textAlign: 'center' }}>
  <table style={{ borderCollapse: 'collapse', margin: 'auto' }} border="1" cellPadding="6">
    <thead>
      <tr>
        <th>ボード</th>
        <th>Grove-気圧センサー SPA06-003</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>3.3V</td>
        <td>VCC</td>
      </tr>
      <tr>
        <td>GND</td>
        <td>GND</td>
      </tr>
      <tr>
        <td>SDA</td>
        <td>SDA</td>
      </tr>
      <tr>
        <td>SCL</td>
        <td>SCL</td>
      </tr>
    </tbody>
  </table>
</div>

### ソフトウェア

**ステップ1.** [ライブラリ](https://github.com/Seeed-Studio/Seeed_Arduino_SPA06)をGithubからダウンロードします。
<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SPA06" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロードする</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**ステップ2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

**ステップ 3.** 新しい Arduino スケッチを作成し、以下のコードを貼り付けるか、次のパスからコードを直接開いてください：File -> Example -> Seeed Arduino SPA06 -> Example1_BasicRead

**ステップ 4.** コードをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

**ステップ 5.** シリアルモニターを開き、センサーのデータ（温度、気圧値、高度）を受信します。

:::success
すべてが正常に動作している場合、結果は以下のように**シリアルポート**に表示されます。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/outcome.png" style={{width:400, height:'auto'}}/></div>

### 機能

**以下がコードです：**

```cpp
/*
 * Author: Kennan / Kenneract
 * GitHub: https://github.com/Kenneract/SPL07-003-Arduino-Library
 * Created: Mar.15.2025
 * Updated: Apr.14.2025, V1.0.0
 * Purpose: Example usage for the SPL07-003 sensor library. Connects
 *          to the sensor, configures the measurement and oversampling
 *          rate, sets the SPL07-003 to continuous sampling mode, then
 *          prints pressure/temperature measurements to the serial monitor.
 */

#include <Wire.h>
#include "SPL07-003.h"

// SPL07-006 I2Cアドレスを定義
#define SPL07_ADDR SPL07_ADDR_DEF // デフォルトのI2Cアドレス (SDO=high)
// #define SPL07_ADDR SPL07_ADDR_ALT // 代替I2Cアドレス (SDO=low)

// SPL07-003センサーインスタンスを作成
SPL07_003 spl;

//HardwareSerial SerialOut(PA10, PA9); // STM32F103C8Tx用

// 起動時に実行
void setup() {

  // シリアル通信を開始
  Serial.begin(115200);

  // I2Cを設定して開始
  //Wire.setSDA(PB7); // STM32F103C8Tx用
  //Wire.setSCL(PB6); // STM32F103C8Tx用
  Wire.begin();

  // SPL07-003に接続
  if (spl.begin(SPL07_ADDR) == false) {
    Serial.println("SPL07-003の初期化エラー :(");
    while (1) {}
  }//if
  Serial.println("SPL07-003に接続しました！ :)");

  // 気圧と温度のサンプリング設定を行う
  spl.setPressureConfig(SPL07_4HZ, SPL07_32SAMPLES);
  spl.setTemperatureConfig(SPL07_4HZ, SPL07_1SAMPLE);

  // SPL07-003を連続測定モードに設定
  spl.setMode(SPL07_CONT_PRES_TEMP);

}//setup()


// 継続的に実行
void loop() {

  // 利用可能な読み取りを待機
  if (spl.pressureAvailable() || spl.temperatureAvailable()) {
    // 最新の値を読み取る
    double pres = spl.readPressure();
    double temp = spl.readTemperature();
    double altitude = spl.calcAltitude();
    // シリアルに出力
    Serial.print("気圧: ");
    Serial.print(pres, 3);
    Serial.print(" Pa, 温度: ");
    Serial.print(temp, 3);
    Serial.print(" C, 高度: ");
    Serial.print(altitude, 3);
    Serial.println(" m");
  }//if

}//loop()
```

上記のサンプルコードで使用されている関数は以下の通りです。それぞれの関数の役割を説明します：
```cpp
Serial.begin(115200)
```
ESP32とコンピュータ間のシリアル通信を初期化します。ボーレートは115200で、デバッグメッセージをシリアルモニターに出力できます。
```cpp
Wire.begin()
```
デフォルトのピン（ほとんどのプラットフォームではSDAとSCL）を使用してI2Cバスを初期化します。これはSPL07-003センサーと通信する前に必要です。
```cpp
spl.begin(SPL07_ADDR)
```
指定されたI2Cアドレスを使用してSPL07-003センサーを初期化します。センサーがバス上で見つからない場合はfalseを返します。

- パラメータ: SPL07_ADDR – I2Cアドレス (0x76 または 0x77)

- 戻り値: 成功時はtrue、センサーが検出されない場合はfalse
```cpp
spl.setPressureConfig(SPL07_4HZ, SPL07_32SAMPLES)
```
気圧センサーを以下の設定で構成します：

- 4 Hzの出力データレート
- ノイズ低減のための32サンプルの平均化

サンプル数が多いほど精度が向上しますが、応答時間が長くなります。
```cpp
spl.setTemperatureConfig(SPL07_4HZ, SPL07_1SAMPLE)
```
温度センサーを以下の設定で構成します：

- 4 Hzの更新レート
- 1サンプルの平均化（応答が速く、平滑化が少ない）
```cpp
spl.setMode(SPL07_CONT_PRES_TEMP)
```
SPL07-003を連続的な気圧および温度測定モードに設定します。これにより、手動でトリガーすることなくデータが自動的に更新されます。
```cpp
spl.pressureAvailable(), spl.temperatureAvailable()
```
センサーから新しい気圧または温度測定値が利用可能かどうかを確認します。新しいデータが準備できた場合にtrueを返します。
```cpp
spl.readPressure()
```
センサーから最新の気圧値をパスカル（Pa）単位で読み取ります。
```cpp
spl.readTemperature()
```
現在の温度を摂氏（°C）単位で読み取ります。
```cpp
spl.calcAltitude()
```
標準大気モデルを使用して、現在の気圧読み取り値に基づいて高度（メートル単位）を推定します。
ドローンや気象観測所などの気圧高度推定アプリケーションで便利です。

## リソース

- **[KiCAD]** [Grove-Barometer Sensor SPA06-003 SCH&PCB](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/res/SCH&PCB.zip)
- **[データシート]** [SPA06-003 データシート](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/res/Datasheet.PDF)
- **[参考資料]** [Arduino 用 I2C の使い方](https://www.arduino.cc/en/Reference/Wire)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートをご用意しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>