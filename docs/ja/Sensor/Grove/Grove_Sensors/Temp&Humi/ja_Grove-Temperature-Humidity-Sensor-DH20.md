---
description: Grove - Temperature&Humidity Sensor(DHT20)
title: Grove - Temperature&Humidity Sensor(DHT20)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Temperature-Humidity-Sensor-DH20
last_update:
  date: 12/29/2025
  author: Brandy
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Tem-humidity-sensor1.jpg" /></div>

新しい Grove - Temperature & Humidity Sensor は DHT20 センサーをベースにしています。DHT20 は DHT11 のアップグレード版で、以前のバージョンと比較して、温度と湿度の測定精度が高く、測定範囲も広くなっています。I2C 出力を特徴としており、使いやすくなっています。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 産業用センサーへのアップグレード可能

SenseCAP [S2110 コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) と [S2100 データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) を使用することで、Grove を LoRaWAN® センサーに簡単に変換できます。Seeed はプロトタイピングをサポートするだけでなく、堅牢な [産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) の SenseCAP シリーズでプロジェクトを拡張する可能性も提供します。

SenseCAP S210x シリーズの産業用センサーは、環境センシングのためのすぐに使える体験を提供します。大気質監視のためのより高い性能と堅牢性を持つ S2101 ワイヤレス温湿度センサーを参照してください。このシリーズには、土壌水分、気温と湿度、光強度、CO2、EC、および 8-in-1 気象ステーションのセンサーが含まれています。次の成功する産業プロジェクトのために、最新の [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) をお試しください。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size="{4}"><strong>SenseCAP 産業用センサー</strong></font></td>
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
          <strong>S2101 大気温湿度</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## 特徴

- 高精度：
  - 温度精度：± 0.5 ℃
  - 湿度精度：± 3 % RH ( 25 ℃ )
- 広い測定範囲：
  - 測定範囲（湿度）：0 ~ 100% RH
  - 測定範囲（温度）：-40 ~ + 80 ℃
- より良い互換性：
  - デジタル出力
  - I²C インターフェース
- 完全校正済み
- 優れた長期安定性
- 高速応答と抗干渉能力
- 広い電圧サポート 2.5-5.5V DC

## 仕様

|パラメータ |値|
|---|---|
|入力電圧|2.0 V – 5.5 V|
|湿度測定範囲|0 ~ 100% RH|
|温度測定範囲|-40 ~ + 80 ℃ |
|湿度精度|± 3 % RH ( 25 ℃ )|
|温度精度|± 0.5 ℃|
|出力信号|I2C 信号|

## ハードウェア概要

### ピンマップ

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/pin-mode.jpg" /></div>

## サポートされているプラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上記でサポートされているとして言及されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性の指標です。ほとんどの場合、Arduino プラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能な MCU プラットフォーム用のソフトウェアライブラリ/デモコードを提供することは不可能です。したがって、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

## 入門ガイド

### Arduino で遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield| Grove - Temperature & Humidity Sensor V2.0 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/getonenow.png" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ入手</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ入手</a>|<a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">今すぐ入手</a>|

- **ステップ 1.** Grove Temperature & Humidity Sensor V2.0 を Grove-Base Shield の **I2C** ポートに接続します。

- **ステップ 2.** Grove - Base Shield を Seeeduino に差し込みます。

- **ステップ 3.** USB ケーブルで Seeeduino を PC に接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/zhanshitu4.png" /></div>

#### ソフトウェア

:::note
Arduino を初めて使用する場合は、開始前に [Arduino 入門ガイド](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) を参照することを強くお勧めします。
:::

DHT11 と比較して、DHT20 温湿度センサーは電源電圧、温度と湿度の測定範囲、精度、出力信号の品質に明確な変化があります。

完全に校正されたデジタル I2C インターフェースを搭載しているため、ピンの定義が若干異なります。DHT20 を使用するには、[こちら](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor) からライブラリをダウンロードしてインストールする必要があります。

すべてセットアップが完了したら、サンプルコードをアップロードして動作するかどうかを確認できます：

```cpp
// Example testing sketch for various DHT humidity/temperature sensors
// Written by ladyada, public domain
#include "Wire.h"
#include "DHT.h"
#define DHTTYPE DHT20   // DHT 20
/*Notice: The DHT10 and DHT20 is different from other DHT* sensor ,it uses i2c interface rather than one wire*/
/*So it doesn't require a pin.*/
DHT dht(DHTTYPE);         //   DHT10 DHT20 don't need to define Pin

#if defined(ARDUINO_ARCH_AVR)
    #define debug  Serial

#elif defined(ARDUINO_ARCH_SAMD) ||  defined(ARDUINO_ARCH_SAM)
    #define debug  SerialUSB
#else
    #define debug  Serial
#endif

void setup() {

    debug.begin(115200);
    debug.println("DHTxx test!");
    Wire.begin();

    /*if using WIO link,must pull up the power pin.*/
    // pinMode(PIN_GROVE_POWER, OUTPUT);
    // digitalWrite(PIN_GROVE_POWER, 1);

    dht.begin();
}

void loop() {
    float temp_hum_val[2] = {0};
    // Reading temperature or humidity takes about 250 milliseconds!
    // Sensor readings may also be up to 2 seconds 'old' (its a very slow sensor)


    if (!dht.readTempAndHumidity(temp_hum_val)) {
        debug.print("Humidity: ");
        debug.print(temp_hum_val[0]);
        debug.print(" %\t");
        debug.print("Temperature: ");
        debug.print(temp_hum_val[1]);
        debug.println(" *C");
    } else {
        debug.println("Failed to get temprature and humidity value.");
    }

    delay(1500);
}
```

アップロードが完了したら、Arduino のシリアルモニターを使用して結果を確認できます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Serial-Monitor.png" /></div>

出力は次のようになるはずです... :

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/output.png" /></div>

値は現在の環境に基づいています。


### Raspberry Pi で遊ぶ（Grove Base Hat for Raspberry Pi 使用）

#### ハードウェア

- **ステップ 1**. このプロジェクトで使用するもの：

| Raspberry pi | Grove Base Hat for RasPi|Grove - Temperature & Humidity Sensor V2.0 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/getonenow.png" /></div>|
|[今すぐ入手](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html)|

- **ステップ 2**. Grove Base Hat を Raspberry に接続します。
- **ステップ 3**. Grove - Temperature & Humidity Sensor V2.0 を Base Hat の **I2C** ポートに接続します。
- **ステップ 4**. USB ケーブルを使用して Raspberry Pi を PC に接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/GROVE-fix/DHT20.jpg" /></div>

:::note
ステップ 3 では、温湿度センサー pro を **任意の GPIO ポート** に接続できますが、対応するポート番号でコマンドを変更することを確認してください。
:::

#### ソフトウェア

:::caution
**Raspberrypi OS >= Bullseye を搭載した Raspberry Pi** を使用している場合は、このコマンドラインを **Python3 でのみ** 使用する必要があります。
:::


- **ステップ 1**. [Setting Software](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation) に従って開発環境を設定します。
:::tip
ステップの一つは必要な DHT ライブラリを追加することです。インストールされていることを確認してください。
:::
- **ステップ 2**. 関連する仮想環境に入ります。

```
source ~/grove_env/env/bin/activate
cd ~/grove_env/grove.py/grove
```

- **ステップ 3**. 以下のコマンドを実行してコードを実行します。

```
nano ~/grove_env/dht20_demo.py
```

以下のコードをコピーします

```python
import time
import seeed_dht

# for DHT10/20
sensor = seeed_dht.DHT("20") 
# sensor = seeed_dht.DHT("10") 
# for DHT11/DHT22
#sensor = seeed_dht.DHT("22", 12) 

print("DHT11 reading every second, Ctrl+C to quit")
try:
    while True:
        humi, temp = sensor.read()
        print(f"DHT11  Humidity {humi:.1f}%  Temperature {temp:.1f}°C")
        time.sleep(1)
except KeyboardInterrupt:
    print("\nBye")

```

:::tip
    保存して終了：
Ctrl+O → Enter → Ctrl+X
:::

  すべてがうまくいけば、以下の結果を見ることができます

```python

pi@raspberrypi:~/Seeed_Python_DHT/examples $ python ~/grove_env/dht20_demo.py

DHT20, humidity 39.2%, temperature 29.1*
DHT20, humidity 39.2%, temperature 29.1*
DHT20, humidity 39.2%, temperature 29.1*
DHT20, humidity 39.1%, temperature 29.1*
DHT20, humidity 40.0%, temperature 29.1*
DHT20, humidity 39.9%, temperature 29.1*
DHT20, humidity 40.3%, temperature 29.1*
DHT20, humidity 42.0%, temperature 29.1*
```

++ctrl+c++ を押すだけでこのプログラムを終了できます。



## MicroPython で遊ぶ

### RaspberryPi Pico を接続

**必要な材料**

| RaspberryPi Pico | Grove Shield for Pi Pico v1.0 | Grove - Temperature & Humidity Sensor V2.0 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https:///files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/pico1.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/pico-shield1.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/getonenow.png" /></div>
|[今すぐ入手](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html)|

#### I2C 接続

- **ステップ 1.** RaspberryPi Pico を Grove Shield for Pi Pico に接続します。

- **ステップ 2.**  Grove - CO2 & Temperature & Humidity Sensor - SCD41 を Grove Shield for Pi Pico の **I2C0** ポートに接続します。

- **ステップ 3.** USB ケーブルを使用して RaspberryPi Pico を PC に接続します。
:::tip
I2C0 を使用することに注意してください。I2C1 を使用すると動作しません。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/pico-connect.jpeg" /></div>

これが基本的なハードウェア接続です。

### ソフトウェア

- **ステップ 1.** **Grove - Temperature & Humidity Sensor V2.0** を制御するためにサードパーティライブラリを使用する必要があります

1. [dht20_demo2.py](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/dht/dht20_demo2.py) と [DHT20.py](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/dht/DHT20.py) ライブラリをダウンロードしてコンピュータに保存します。

2. Thonny を使用して dht20_demo2.py と DHT20.py を開き、左上の "file" オプションをクリックして "save as" を選択します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Thonny1.png" /></div>

3. "Raspberry Pi Pico" を選択して Pico に保存します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Thonny2.png" /></div>

:::note
保存する際、Thonny はファイル名を尋ねます。ここでは名前として "dht20_demo2.py" と入力し、ファイルの拡張子も入力する必要があります。そうしないと使用できません。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Thonny3.png" /></div>

- **ステップ 2.** プロセスを開始します。

1. 最初に DHT20.py を初期化します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Thonny4.png" /></div>

2. デモプロセスを開始すると、以下の結果を見ることができます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Thonny5.png" /></div>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Grove-Temperature&Humidity-Sensor-V2.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[ZIP]** [Grove - Temperature & Humidity Sensor V2.0(DHT20)](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Pico-micropython-master.zip)

## 技術サポート & 製品ディスカッション

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 産業用センサーへのアップグレード

SenseCAP [S2110 コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) と [S2100 データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) を使用することで、Grove を LoRaWAN® センサーに簡単に変換できます。Seeed はプロトタイピングを支援するだけでなく、堅牢な [産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) の SenseCAP シリーズでプロジェクトを拡張する可能性も提供します。

IP66 筐体、Bluetooth 設定、グローバル LoRaWAN® ネットワークとの互換性、内蔵 19 Ah バッテリー、APP からの強力なサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) は産業用アプリケーションに最適な選択肢です。このシリーズには、土壌水分、気温と湿度、光強度、CO2、EC、および 8-in-1 気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトのために最新の SenseCAP S210x をお試しください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
