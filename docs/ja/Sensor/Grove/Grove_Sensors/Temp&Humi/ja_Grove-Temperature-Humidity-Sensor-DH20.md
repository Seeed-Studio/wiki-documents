---
description: Grove - 温度＆湿度センサー（DHT20）
title: Grove - 温度＆湿度センサー（DHT20）
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Temperature-Humidity-Sensor-DH20
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Tem-humidity-sensor1.jpg" /></div>

新しい Grove - 温度＆湿度センサーは DHT20 センサーをベースにしています。DHT20 は DHT11 のアップグレード版であり、以前のバージョンと比較して、温度と湿度の測定精度が向上し、測定範囲も広がっています。また、I2C 出力を備えているため、使用がより簡単です。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 産業用センサーへのアップグレードが可能

SenseCAP [S2110 コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)および [S2100 データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Grove を簡単に LoRaWAN® センサーに変えることができます。Seeed はプロトタイピングをサポートするだけでなく、SenseCAP シリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

SenseCAP S210x シリーズの産業用センサーは、環境センシングのための即時使用可能な体験を提供します。空気質モニタリングのために、より高性能で堅牢な S2101 ワイヤレス温度および湿度センサーを参照してください。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、8-in-1 気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトのために最新の [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) をお試しください。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size={4}><strong>SenseCAP 産業用センサー</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
            <img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
          <strong>S2101 空気温度＆湿度</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## 特徴

- 高精度:
  - 温度精度: ± 0.5 ℃
  - 湿度精度: ± 3 % RH (25 ℃)
- 広い測定範囲:
  - 測定範囲 (湿度): 0 ~ 100% RH
  - 測定範囲 (温度): -40 ~ +80 ℃
- 優れた互換性：
  - デジタル出力
  - I²Cインターフェース
- 完全校正済み
- 優れた長期安定性
- 高速応答と耐干渉性
- 幅広い電圧サポート: 2.5-5.5V DC

## 仕様

| パラメータ | 値 |
|---|---|
| 入力電圧 | 2.0 V – 5.5 V |
| 測定湿度範囲 | 0 ~ 100% RH |
| 測定温度範囲 | -40 ~ +80 ℃ |
| 湿度精度 | ± 3 % RH (25 ℃) |
| 温度精度 | ± 0.5 ℃ |
| 出力信号 | I2C信号 |

## ハードウェア概要

### ピンマップ

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/pin-mode.jpg" /></div>

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能なMCUプラットフォーム用のソフトウェアライブラリ/デモコードを提供することはできません。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | ベースシールド | Grove - 温湿度センサー V2.0 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/getonenow.png" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">今すぐ購入</a>|

- **ステップ 1.** Grove 温湿度センサー V2.0 を Grove-Base Shield の **I2C** ポートに接続します。

- **ステップ 2.** Grove-Base Shield を Seeeduino に差し込みます。

- **ステップ 3.** USBケーブルを使用して Seeeduino をPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/zhanshitu4.png" /></div>

#### ソフトウェア

:::note
Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

DHT11と比較して、DHT20温湿度センサーは、供給電圧、温度と湿度の測定範囲、精度、出力信号の品質に明確な変更があります。

このセンサーは完全に校正されたデジタルI2Cインターフェースを備えているため、ピンの定義が若干異なります。DHT20を使用するには、[こちら](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)からライブラリをダウンロードしてインストールする必要があります。

すべてのセットアップが完了したら、サンプルコードをアップロードして動作を確認します：

```cpp
// 各種DHT湿度/温度センサー用のテストスケッチ例
// ladyadaによって作成され、パブリックドメイン
#include "Wire.h"
#include "DHT.h"
#define DHTTYPE DHT20   // DHT 20
/*注意: DHT10およびDHT20は他のDHT*センサーとは異なり、I2Cインターフェースを使用します（ワイヤー1本ではありません）*/
/*したがって、ピンを定義する必要はありません。*/
DHT dht(DHTTYPE);         // DHT10およびDHT20はピンを定義する必要がありません

#if defined(ARDUINO_ARCH_AVR)
    #define debug  Serial

#elif defined(ARDUINO_ARCH_SAMD) ||  defined(ARDUINO_ARCH_SAM)
    #define debug  SerialUSB
#else
    #define debug  Serial
#endif

void setup() {

    debug.begin(115200);
    debug.println("DHTxxテスト開始！");
    Wire.begin();

    /*WIOリンクを使用する場合、電源ピンをプルアップする必要があります。*/
    // pinMode(PIN_GROVE_POWER, OUTPUT);
    // digitalWrite(PIN_GROVE_POWER, 1);

    dht.begin();
}

void loop() {
    float temp_hum_val[2] = {0};
    // 温度または湿度の読み取りには約250ミリ秒かかります！
    // センサーの読み取り値は最大2秒「古い」場合があります（非常に遅いセンサーです）


    if (!dht.readTempAndHumidity(temp_hum_val)) {
        debug.print("湿度: ");
        debug.print(temp_hum_val[0]);
        debug.print(" %\t");
        debug.print("温度: ");
        debug.print(temp_hum_val[1]);
        debug.println(" *C");
    } else {
        debug.println("温度と湿度の値を取得できませんでした。");
    }

    delay(1500);
}
```

アップロードが完了したら、Arduino のシリアルモニタを使用して結果を確認できます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Serial-Monitor.png" /></div>

出力は以下のようになるはずです... :

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/output.png" /></div>

値は現在の環境に基づいています。

## MicroPython を使ってみる

### RaspberryPi Pico を接続する

**必要な材料**

| RaspberryPi Pico | Grove Shield for Pi Pico v1.0 | Grove - Temperature & Humidity Sensor V2.0 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https:///files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/pico1.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/pico-shield1.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/getonenow.png" /></div>
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html)|

#### I2C 接続

- **ステップ 1.** RaspberryPi Pico を Grove Shield for Pi Pico に接続します。

- **ステップ 2.** Grove - CO2 & Temperature & Humidity Sensor - SCD41 を Grove Shield for Pi Pico の **I2C0** ポートに接続します。

- **ステップ 3.** USB ケーブルを使用して RaspberryPi Pico を PC に接続します。
:::tip
必ず I2C0 を使用してください。I2C1 を使用すると動作しません。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/pico-connect.jpeg" /></div>

これが基本的なハードウェア接続です。

### ソフトウェア

- **ステップ 1.** **Grove - Temperature & Humidity Sensor V2.0** を制御するためにサードパーティライブラリを使用する必要があります。

1. [dht20_demo2.py](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/dht/dht20_demo2.py) と [DHT20.py](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/dht/DHT20.py) ライブラリをダウンロードし、コンピュータに保存します。

2. Thonny を使用して dht20_demo2.py と DHT20.py を開き、左上の「ファイル」オプションをクリックして「名前を付けて保存」を選択します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Thonny1.png" /></div>

3. 「Raspberry Pi Pico」を選択し、Pico に保存します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Thonny2.png" /></div>

:::note
保存時に Thonny はファイル名を尋ねてきます。ここでは「dht20_demo2.py」と入力します。また、ファイルの拡張子も入力する必要があります。そうしないと使用できません。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Thonny3.png" /></div>

- **ステップ 2.** プロセスを開始します。

1. まず DHT20.py を初期化します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Thonny4.png" /></div>

2. デモプロセスを開始すると、以下のような結果が表示されます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Thonny5.png" /></div>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Grove-Temperature&Humidity-Sensor-V2.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[ZIP]** [Grove - Temperature & Humidity Sensor V2.0(DHT20)](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Pico-micropython-master.zip)

## 技術サポートと製品ディスカッション

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 産業用センサーへのアップグレード可能

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングをサポートするだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66ハウジング、Bluetooth設定、グローバルLoRaWAN®ネットワークとの互換性、内蔵19Ahバッテリー、そして強力なAPPサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device)は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1気象ステーション用センサーが含まれています。次の成功する産業プロジェクトには最新のSenseCAP S210xを試してみてください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>