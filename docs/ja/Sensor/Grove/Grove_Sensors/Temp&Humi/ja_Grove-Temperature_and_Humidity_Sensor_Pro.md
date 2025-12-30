---
description: Grove - Temperature&Humidity Sensor Pro(DHT22)
title: Grove - Temperature&Humidity Sensor Pro(DHT22)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Temperature_and_Humidity_Sensor_Pro
last_update:
  date: 12/29/2025
  author: Brandy
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/main.jpg" /></div>

 これは、Grove - Temperature&Humidity Sensor Proの強力な姉妹版です。基本版よりも完全で正確な性能を持っています。このセンサーの検出範囲は5% RH - 99% RH、-40°C - 80°Cです。そして精度は2% RHと0.5°Cに達します。比較的厳しい要件を持つアプリケーションのためのプロフェッショナルな選択です。

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro%EF%BC%88AM2302%EF%BC%89-p-838.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 産業用センサーへのアップグレード可能

SenseCAP [S2110 コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100 データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、GroveをLoRaWAN®センサーに簡単に変換できます。Seeedはプロトタイピングをサポートするだけでなく、堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)のSenseCAP シリーズでプロジェクトを拡張する可能性も提供します。

SenseCAP S210x シリーズの産業用センサーは、環境センシングのためのすぐに使える体験を提供します。大気質監視のためのより高い性能と堅牢性を持つS2101ワイヤレス温湿度センサーを参照してください。このシリーズには、土壌水分、気温と湿度、光強度、CO2、EC、および8-in-1気象ステーションのセンサーが含まれています。次の成功する産業プロジェクトのために最新の[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)をお試しください。

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
          <strong>S2101 大気温度・湿度</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## 仕様

|項目|  最小 |標準 |最大 |単位|
|---|---|---|---|---|
|入力電圧 (VCC) | 3.3| -| 6| V|
|I/O ロジックレベル|-|VCCに基づく|-| V|
|測定時電流供給 | 1| -| 1.5| mA|
|スタンバイ電流供給 | 40| -| 50| uA|
|測定範囲 **(湿度)** |5%| -| 99%| RH|
|測定範囲 **(温度)**| -40| - |80| °C|
|精度 **(湿度)**|- | -| ±2%| RH|
|精度 **(温度)** |-|-| ±0.5| °C|
|分解能 **(湿度)** |-| -| 0.1% |RH|
|分解能 **(温度)** | -|-| 0.1| °C|
|再現性 **(湿度)**| -| -| ±0.3%| RH|
|再現性 **(温度)**| - |- |±0.2| °C|
|長期安定性|  -| - |±0.5% |RH/年|
|信号収集周期 |-| 2| -| S|
|応答時間 1/e(63%)| 6| - |20| S|
|信号ピンモード|-|デジタル|-|-|

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)を参照してください
:::

## サポートされているプラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上記でサポートされているとして言及されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性の指標です。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能なMCUプラットフォーム用のソフトウェアライブラリ/デモコードを提供することは不可能です。したがって、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

## 入門ガイド

:::note
Arduinoを初めて使用する場合は、開始前に[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield| Temperature&Humidity Sensor Pro |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/Thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ入手</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ入手</a>|<a href="https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html" target="_blank">今すぐ入手</a>|

:::note
 **1** USBケーブルは優しく差し込んでください。そうしないとポートを損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーケーブルではデータを転送できません。お持ちのワイヤーについて確信がない場合は、[ここ](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます

**2** 各Groveモジュールには購入時にGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[ここ](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます
:::

- **ステップ 1.** Grove - Temperature&Humidity Sensor ProをGrove-Base Shieldの**D2**ポートに接続します。

- **ステップ 2.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ 3.** SeeeduinoをUSBケーブルでPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/connect_arduino.jpg" /></div>

:::note
 Grove Base Shieldがない場合は、Grove - Temperature and Humidity Sensor Proを以下のようにSeeeduinoに直接接続することもできます。
:::

| Seeeduino       | Temperature&Humidity Sensor Pro |
|---------------|-------------------------|
| 5V           | 赤                     |
| GND           | 黒                   |
| 未接続 | 白                   |
| D2            | 黄                  |

#### ソフトウェア

- **ステップ 1.** Githubから[Seeed DHTライブラリ](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)をダウンロードします。

- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照してArduino用ライブラリをインストールします。

- **ステップ 3.** Arduino IDEを再起動します。パス：**File --> Examples --> Grove_Humidity_Temperature_Sensor-master --> DHTtester**から"DHTtester"の例を開きます。このデモを通じて、環境の温度と相対湿度の情報を読み取ることができます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/path.png" /></div>

:::note
このGrove - Temperature&Humidity Sensor Proと当社の別の製品[Grove-Temperature and Humidity Sensor](https://wiki.seeedstudio.com/ja/Grove-Temperature_Humidity_Pressure_Gas_Sensor_BME680/)は、このライブラリを共有しています。どちらの製品を使用していても、お使いのボードのセンサーの定義行を有効にし、他の仕様の定義行をコメントアウトしていることを確認してください。例えば、Grove - Temperature and Humidity Sensor Proで使用しているセンサーはDHT 22です。そのため、センサー仕様の定義部分は次のようになります：
:::

```
//#define DHTTYPE DHT11   // DHT 11
#define DHTTYPE DHT22   // DHT 22  (AM2302)
//#define DHTTYPE DHT21   // DHT 21 (AM2301)
```

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ 5.** **Tool-> Serial Monitor**をクリックしてArduino IDEの**Serial Monitor**を開きます。または++ctrl+shift+m++キーを同時に押します。すべてがうまくいけば、結果が得られます。

結果は次のようになるはずです：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/result_arduino.png" /></div>

### Raspberry Pi で遊ぶ（Grove Base Hat for Raspberry Pi を使用）

#### ハードウェア

- **ステップ 1**. このプロジェクトで使用するもの：

| Raspberry pi | Grove Base Hat for RasPi| Grove - Temp & Hum Sensor Pro|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/Thumbnail.jpg" /></div>|
|[今すぐ入手](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-Pro-AM230-p-838.html)|

- **ステップ 2**. Grove Base Hat を Raspberry に接続します。
- **ステップ 3**. 温湿度センサー Pro を Base Hat のポート 12 に接続します。
- **ステップ 4**. Raspberry Pi を USB ケーブルで PC に接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/Temp&Hum_Pro_Hat.jpg" /></div>

:::note
ステップ 3 では、温湿度センサー Pro を**任意の GPIO ポート**に接続できますが、対応するポート番号でコマンドを変更することを確認してください。
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
nano ~/grove_env/dht22_demo.py
```

以下のコードをコピーします

```python
import time
import seeed_dht

# for DHT11/DHT22
    sensor = seeed_dht.DHT("22", 12)
    # for DHT10
    # sensor = seeed_dht.DHT("10") 
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

  すべてがうまくいけば、以下の結果を見ることができるはずです

```python

pi@raspberrypi:~/Seeed_Python_DHT/examples $ python ~/grove_env/dht22_demo.py
DHT22, humidity 39.2%, temperature 29.1*
DHT22, humidity 39.2%, temperature 29.1*
DHT22, humidity 39.2%, temperature 29.1*
DHT22, humidity 39.1%, temperature 29.1*
DHT22, humidity 40.0%, temperature 29.1*
DHT22, humidity 39.9%, temperature 29.1*
DHT22, humidity 40.3%, temperature 29.1*
DHT22, humidity 42.0%, temperature 29.1*
```

++ctrl+c++ を押すだけでこのプログラムを終了できます。

### Raspberry Pi で遊ぶ（GrovePi_Plus を使用）

#### ハードウェア

**必要な材料**

| Raspberry pi | GrovePi_Plus | Temperature&Humidity Sensor Pro |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/Thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">今すぐ入手</a>|<a href="https://www.seeedstudio.com/GrovePi%2B-p-2241.html" target="_blank">今すぐ入手</a>|<a href="https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html" target="_blank">今すぐ入手</a>|

- **ステップ 1.** GrovePi_Plus を Raspberry に接続します。

- **ステップ 2.** Grove - Temperature&Humidity Sensor Pro を GrovePi_Plus の **D4** ポートに接続します。

- **ステップ 3.** Raspberry を USB ケーブルで PC に接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/connect_pi.jpg" /></div>

#### ソフトウェア

GrovePi を初めて使用する場合は、この部分を段階的に実行してください。GrovePi の古い友人であれば、**ステップ 1** と **ステップ 2** をスキップできます。

- **ステップ 1.** ソフトウェアの設定。コマンドラインで以下のコマンドを入力します：

:::caution
**Raspberrypi OS >= Bullseye を搭載した Raspberry Pi** を使用している場合は、このコマンドラインを**使用できません**。
:::

```
sudo curl -kL dexterindustries.com/update_grovepi | bash
```

```
sudo reboot
```

```
cd /home/pi/Desktop
```

```
git clone https://github.com/DexterInd/GrovePi.git
```

この部分の詳細については、[Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) を参照してください。

- **ステップ 2.** [Updating the Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) に従って GrovePi の最新ファームウェアを更新します。

:::note
ファームウェアを更新することを強く推奨します。そうしないと、一部のセンサーでエラーが発生する可能性があります。
:::

- **ステップ 3.** パラメータを設定します

:::caution
**Raspberrypi OS >= Bullseye を搭載した Raspberry Pi** を使用している場合は、このコマンドラインを **Python3 でのみ** 使用する必要があります。
:::

```

cd /home/pi/Desktop/GrovePi/Software/Python/
sudo nano grove_dht_pro.py

```

:::note
Grove - Temperature&Humidity Sensor と Grove - Temperature&Humidity Sensor pro は、
`grove_dht_pro.py` という名前の同じ Python コードを共有しています。唯一の違いは、`[temp,humidity] = grovepi.dht(sensor,blue)` の文で、Grove - Temperature&Humidity Sensor には `blue` パラメータを使用し、Grove - Temperature&Humidity Sensor pro には `white` を使用することです。デフォルト値は blue なので、このセンサーではコードを変更する必要があります。
:::

デフォルトパラメータ `[temp,humidity] = grovepi.dht(sensor,blue)` を `[temp,humidity] = grovepi.dht(sensor,white)` に変更します。そうすると、コードは次のようになります：

```python
import grovepi
import math
# Connect the Grove Temperature & Humidity Sensor Pro to digital port D4
# This example uses the blue colored sensor.
# SIG,NC,VCC,GND
sensor = 4  # The Sensor goes on digital port 4.

# temp_humidity_sensor_type
# Grove Base Kit comes with the blue sensor.
blue = 0    # The Blue colored sensor.
white = 1   # The White colored sensor.

while True:
    try:
        # This example uses the blue colored sensor.
        # The first parameter is the port, the second parameter is the type of sensor.
        [temp,humidity] = grovepi.dht(sensor,white)  
        if math.isnan(temp) == False and math.isnan(humidity) == False:
            print("temp = %.02f C humidity =%.02f%%"%(temp, humidity))

    except IOError:
        print ("Error")

```

次に ++ctrl+x++ をタップして nano を終了します。++y++ をタップして変更を保存します。

- **ステップ 4.** 以下のコマンドを実行して結果を取得します。

```
sudo python3 grove_dht_pro.py
```

結果は次のようになるはずです：

```python

pi@raspberrypi:~/GrovePi/Software/Python $ sudo python3 grove_dht_pro.py
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%

```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/Temp_Humi_Pro_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Eagle 形式の温湿度センサー Pro](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/Temp_Humi_Pro_eagle_files.zip)
- **[PDF]** [PDF 形式の温湿度センサー Pro PCB](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/TemperatureHumidiy%20Pro%20PCB.pdf)
- **[PDF]** [PDF 形式の温湿度センサー Pro 回路図](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/TemperatureHumidiy%20Pro%20Schematic.pdf)
- **[Library]** [温湿度センサー Pro ライブラリ](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/Humidity_Temperature_Sensor_pro.zip)
- **[Datasheet]** [AM2302-CN.pdf](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/AM2302-CN.pdf)
- **[Datasheet]**  [AM2302-EN.pdf](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/AM2302-EN.pdf)

## プロジェクト

**温湿度データロガー**: このプロジェクトは、デバイスのバッテリーレベルとともに、特定の場所の温度と湿度の値を監視するのに役立ちます。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/alpha007/temperature-humidity-data-logger-767570/embed' width='350'></iframe>

**LinkIt ONE IoT デモ**: LinkIt ONE で作られた IoT デモ。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/loovee/linkit-one-iot-demo-546a9c/embed' width='350'></iframe>

**カメラ付き自動ヘビ飼育ケース**: 温度と湿度が制御され、緯度経度を使用して自然光サイクルを模倣し、オンラインカメラを備えたインタラクティブなヘビ飼育ケース。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/hagakure/automated-snake-enclosure-with-camera-a56ea9/embed' width='350'></iframe>

**Foton - 接続されたライトセーバー**: Fotonは特別なライトセーバーで、部屋の温度と湿度を監視し、動きを検出し、それらのデータをスマートフォンに送信することができます。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/Momy93/foton-the-connected-lightsaber-a6c159/embed' width='350'></iframe>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品でのご体験ができる限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
