---
description: ワイヤー温度センサー DS18B20
title: ワイヤー温度センサー DS18B20
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/One-Wire-Temperature-Sensor-DS18B20
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/one-wire.png" /></div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/One-Wire-Temperature-Sensor-p-1235.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border="0" /></a></p>

この2m長のワイヤー温度センサーは、防水プローブと長いワイヤー形状を備えており、浸漬型の温度検出に適しています。このセンサー内部のチップは、広く採用されている**DS18B20**です。オリジナルのセンサーには3本のワイヤーが含まれており、動作させるためには追加の抵抗が必要です。しかし、このセンサーではGroveポートに調整され、内部に抵抗が事前に組み込まれているため、通常のGroveセンサーとして使用できます。本記事では、Raspberry Piでのセンサーの使用方法を説明し、楽しみましょう！

## 産業用センサーへのアップグレード可能

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングを支援するだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

SenseCAP S210xシリーズの産業用センサーは、環境センシングのための即時使用可能な体験を提供します。空気質モニタリングのための高性能で堅牢なS2101ワイヤレス温度・湿度センサーをご参照ください。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、8-in-1気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトのために最新の[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)をお試しください。

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

---

- データインターフェースに1本のワイヤーのみ必要
- 防水仕様
- Grove互換
- 3.0Vから5.5Vの電源供給に対応
- 広い温度範囲：-55°Cから+125°C
- 高精度：±0.5°C（-10°Cから+85°C）

:::caution
ケーブル部分は70°Cを超える温度に長時間さらさないでください。
:::

## 仕様

|||
|--------|---------|
|動作電圧 |3.0-5.5V|
|チップ|DS18B20|
|長さ |2m|
|動作温度| -55°Cから+125°C |

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

## はじめに

---
このセクションの後、わずか数ステップでOne Wire Temperature Sensorを動作させることができます。

### Arduinoで遊ぶ

#### 必要な材料

| Seeeduino Lotus V1.1 |One Wire Temperature Sensor|
|--------------|--------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/small.png" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/small.png" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html)|[今すぐ購入](https://www.seeedstudio.com/One-Wire-Temperature-Sensor-p-1235.html)|

#### ハードウェア接続

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/hardware-1-wire.jpg" /></div>

:::tip
USBケーブル、One Wire Temperature SensorインターフェースをSeeeduino Lotus V1.1インターフェースに慎重に接続してください。そうしないとポートが損傷する可能性があります。
:::

- **ステップ1.** Groveケーブルを使用して、One Wire Temperature SensorをSeeeduino Lotus V1.1の**D2**インターフェースに接続します。

- **ステップ2.** USBケーブルを使用してSeeeduino Lotus V1.1をPCに接続します。

- **ステップ3.** コードをダウンロードします。ソフトウェア部分を参照してください。

- **ステップ4.** コードを実行し、結果はArduino IDEの**シリアルモニター**画面に表示されます。

#### ソフトウェア

:::caution
Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ1.** [Onewire用ライブラリ](https://github.com/PaulStoffregen/OneWire/archive/master.zip)と[Arduino Temperature Control用ライブラリ](https://github.com/milesburton/Arduino-Temperature-Control-Library/archive/master.zip)をダウンロードします。

- **ステップ2.** **OneWire**および**Arduino-Temperature-Control-Library**ファイル全体をArduino IDEのライブラリフォルダにコピーします。

- **ステップ3.** 以下の**ソフトウェアコード**からデモコードをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

**ソフトウェアコード**

```cpp
// 必要なライブラリをインクルード
#include <OneWire.h>
#include <DallasTemperature.h>

// データワイヤーはArduinoのポート2に接続
#define ONE_WIRE_BUS 2

// OneWireインスタンスをセットアップして、任意のOneWireデバイス（Maxim/Dallas温度IC以外も含む）と通信
OneWire oneWire(ONE_WIRE_BUS);

// Dallas TemperatureにOneWire参照を渡す
DallasTemperature sensors(&oneWire);

/*
 * セットアップ関数。ここではセンサーを開始するだけ
 */
void setup(void)
{
  // シリアルポートを開始
  Serial.begin(115200);
  Serial.println("Dallas Temperature IC Control Library Demo");

  // ライブラリを開始
  sensors.begin();
}

/*
 * メイン関数、温度を取得して表示
 */
void loop(void)
{ 
  // sensors.requestTemperatures()を呼び出して、バス上のすべてのデバイスに対してグローバル温度リクエストを発行
  Serial.print("Requesting temperatures...");
  sensors.requestTemperatures(); // 温度取得コマンドを送信
  Serial.println("DONE");
  // 温度を取得した後、ここで表示可能
  // ByIndex関数を使用し、例として最初のセンサーから温度を取得
  float tempC = sensors.getTempCByIndex(0);

  // 読み取りが成功したか確認
  if(tempC != DEVICE_DISCONNECTED_C) 
  {
    Serial.print("Temperature for the device 1 (index 0) is: ");
    Serial.println(tempC);
  } 
  else
  {
    Serial.println("Error: Could not read temperature data");
  }
}
```

:::tip
  すべてが正常に動作すれば、**シリアルモニター**で以下のような結果を確認できます：
:::

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/outcome-1-wire.png" alt="1-wire'' OUTCOME" title="demo" />
    <figcaption><b /><i /></figcaption>
  </figure>
</div>

### Raspberry Pi を使ってみよう

#### 必要な材料

| Raspberry Pi 4 Model B |Grove - Base Hat for Raspberry Pi|One Wire Temperature Sensor|
|--------------|-------------|-----------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/raspberry_pi.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/hat.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/small.png" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[今すぐ購入](https://www.seeedstudio.com/One-Wire-Temperature-Sensor-p-1235.html)|

#### ハードウェアの接続

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/connection.jpg" /></div>

**ステップ 1.** One Wire Temperature Sensor を Grove - Base Hat for Raspberry Pi のポート **D5** に接続し、Raspberry Pi 4 Model B に差し込みます。その後、Raspberry Pi 4 Model B を PC に接続します。

**ステップ 2.** Raspberry Pi のシステムにアクセスした後、**[Seeed_Python_DS18B20](https://github.com/Seeed-Studio/Seeed_Python_DS18B20.git)** を git clone し、以下のコマンドを挿入して **grove.py** をインストールします：

```shell
pip3 install Seeed-grove.py
```

または、Raspberry Pi のようなサポートされている GNU/Linux システムで、PyPI からローカルにドライバーをインストールすることができます：

```Shell
pip3 install seeed-python-Ds18b20
```

**ステップ 3.** システム全体にインストールする場合（必要な場合があります）：

```Shell
sudo pip3 install seeed-python-Ds18b20
```

さらに、以下のコマンドを挿入して PyPI からローカルにドライバーをアップグレードすることができます：

```Shell
pip3 install --upgrade seeed-python-Ds18b20
```

#### ソフトウェア

```python
import seeed_ds18b20
import time

def main():
    DS18B20 = seeed_ds18b20.grove_ds18b20()
    print("Ctrl C を使用して終了してください")
    while True:
        temp_c,temp_f = DS18B20.read_temp
        print('temp_c %.2f C   temp_f %.2f F' % (temp_c,temp_f),end=" ")
        print('\r', end='')
        time.sleep(0.5)

if __name__ == "__main__":
    main()   
```

:::caution
Raspberry Pi でデモコードを実行する際に、**1-Wire** インターフェースを有効にするよう求められる場合があります。その場合は、**sudo raspi-config** コマンドを使用して再起動し、1-Wire デバイスを有効にしてください：
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/1.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/1.png" /></div>

**ステップ 4.** 以下のコマンドでデモを実行します：

```Shell
cd Seeed_Python_DS18B20
```

```Shell
python3 examples/BasicRead.py 
```

:::tip
          すべてが正常に動作している場合、以下のような結果が表示されます：
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/TEM.png" /></div>

## リソース

**[PDF]** [DS18B20-Datasheet](https://files.seeedstudio.com/wiki/One-Wire-Temperature/res/DS18B20-Datasheet.pdf).

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートを提供しております。お客様の好みやニーズに合わせた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>