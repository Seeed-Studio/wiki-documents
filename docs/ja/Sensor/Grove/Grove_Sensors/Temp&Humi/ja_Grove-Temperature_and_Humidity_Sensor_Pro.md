---
description: Grove - Temperature&Humidity Sensor Pro(DHT22)
title: Grove - Temperature&Humidity Sensor Pro(DHT22)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Temperature_and_Humidity_Sensor_Pro
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/main.jpg" /></div>

これは、Grove - Temperature&Humidity Sensor Proの強力な姉妹版です。基本バージョンよりも完全で正確な性能を備えています。このセンサーの検出範囲は5% RH - 99% RH、-40°C - 80°Cであり、その精度は2% RHおよび0.5°Cに達します。比較的厳しい要件を持つアプリケーションに最適なプロフェッショナルな選択肢です。

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro%EF%BC%88AM2302%EF%BC%89-p-838.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 産業用センサーへのアップグレード可能

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングを支援するだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

SenseCAP S210xシリーズの産業用センサーは、環境センシングのための即時使用可能な体験を提供します。空気品質モニタリングのための高性能で堅牢なS2101ワイヤレス温度および湿度センサーを参照してください。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトのために最新の[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)を試してみてください。

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
          <strong>S2101 空気温度 &amp; 湿度</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## 仕様

|項目| 最小 |標準 |最大 |単位|
|---|---|---|---|---|
|入力電圧 (VCC) | 3.3| -| 6| V|
|I/O ロジックレベル|-|VCCに基づく|-| V|
|測定時の電流供給 | 1| -| 1.5| mA|
|待機時の電流供給 | 40| -| 50| uA|
|測定範囲 **(湿度)** |5%| -| 99%| RH|
|測定範囲 **(温度)**| -40| - |80| °C|
|精度 **(湿度)**|- | -| ±2%| RH|
|精度 **(温度)** |-|-| ±0.5| °C|
|分解能 **(湿度)** |-| -| 0.1% |RH|
|分解能 **(温度)** | -|-| 0.1| °C|
|再現性 **(湿度)**| -| -| ±0.3%| RH|
|再現性 **(温度)**| - |- |±0.2| °C|
|長期安定性|  -| - |±0.5% |RH/年|
|信号収集周期 |-| 2| -| 秒|
|応答時間 1/e(63%)| 6| - |20| 秒|
|信号ピンモード|-|デジタル|-|-|

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能なMCUプラットフォーム用のソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

## はじめに

:::note
Arduinoを初めて使用する場合は、開始する前に[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | ベースシールド| 温湿度センサープロ |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/Thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html" target="_blank">今すぐ購入</a>|

:::note
 **1** USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

**2** Groveモジュールを購入すると、各モジュールにGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

- **ステップ 1.** Grove - 温湿度センサープロをGrove-Base Shieldのポート**D2**に接続します。

- **ステップ 2.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ 3.** USBケーブルを使用してSeeeduinoをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/connect_arduino.jpg" /></div>

:::note
 Grove Base Shieldがない場合は、以下のようにGrove - 温湿度センサープロをSeeeduinoに直接接続することもできます。
:::

| Seeeduino       | 温湿度センサープロ |
|---------------|-------------------------|
| 5V           | 赤                     |
| GND           | 黒                   |
| 接続なし      | 白                   |
| D2            | 黄                  |

#### ソフトウェア

- **ステップ 1.** [Seeed DHTライブラリ](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)をGithubからダウンロードします。

- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

- **ステップ 3.** Arduino IDEを再起動します。パス**File --> Examples --> Grove_Humidity_Temperature_Sensor-master --> DHTtester**を通じて「DHTtester」例を開きます。このデモを通じて、環境の温度と相対湿度情報を読み取ることができます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/path.png" /></div>

:::note
この Grove - Temperature&Humidity Sensor Pro と、もう一つの製品 [Grove-Temperature and Humidity Sensor](https://wiki.seeedstudio.com/ja/Grove-Temperature_Humidity_Pressure_Gas_Sensor_BME680/) は同じライブラリを共有しています。どちらの製品を使用する場合でも、ボードのセンサー定義行を有効にし、他の仕様の定義行をコメントアウトしていることを確認してください。例えば、Grove - Temperature and Humidity Sensor Pro で使用されているセンサーは DHT 22 です。そのため、センサー仕様の定義部分は以下のようにする必要があります。
:::

```
//#define DHTTYPE DHT11   // DHT 11
#define DHTTYPE DHT22   // DHT 22  (AM2302)
//#define DHTTYPE DHT21   // DHT 21 (AM2301)
```

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ 5.** Arduino IDE の **シリアルモニタ** を開きます。**ツール -> シリアルモニタ** をクリックするか、++ctrl+shift+m++ キーを同時に押します。すべてが正常に動作していれば、結果が表示されます。

結果は以下のようになります：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/result_arduino.png" /></div>

### Raspberry Pi での使用方法 (Grove Base Hat for Raspberry Pi を使用)

#### ハードウェア

- **ステップ 1.** このプロジェクトで使用するもの：

| Raspberry pi | Grove Base Hat for RasPi| Grove - Temp & Hum Sensor Pro|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/Thumbnail.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-Pro-AM230-p-838.html)|

- **ステップ 2.** Grove Base Hat を Raspberry に接続します。
- **ステップ 3.** 温湿度センサー Pro を Base Hat のポート 12 に接続します。
- **ステップ 4.** Raspberry Pi を USB ケーブルで PC に接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/Temp&Hum_Pro_Hat.jpg" /></div>

:::note
ステップ 3 では、温湿度センサー Pro を **任意の GPIO ポート** に接続することもできますが、その場合は対応するポート番号でコマンドを変更する必要があります。
:::

#### ソフトウェア

:::caution
**Raspberry Pi OS >= Bullseye** を使用している場合は、**Python3** のみでこのコマンドラインを使用する必要があります。
:::

- **ステップ 1.** [ソフトウェアの設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation) に従って開発環境を構成します。
- **ステップ 2.** grove.py ライブラリをクローンしてソースファイルをダウンロードします。

```
cd ~
git clone https://github.com/Seeed-Studio/Seeed_Python_DHT.git
```

- **ステップ 3.** 以下のコマンドを実行してコードを実行します。

```
cd Seeed_Python_DHT
sudo python3 setup.py install
cd ~/Seeed_Python_DHT/examples
nano dht_simpleread.py 
```

`sensor = seeed_dht.DHT("11", 12)` を `sensor = seeed_dht.DHT("22", 12)` に変更します。以下は dht_simpleread.py のコードです。

```python
import time
import seeed_dht
def main():

    # DHT11/DHT22 用
    sensor = seeed_dht.DHT("22", 12)
    # DHT10 用
    # sensor = seeed_dht.DHT("10")
    
    while True:
        humi, temp = sensor.read()
        if not humi is None:
            print('DHT{0}, humidity {1:.1f}%, temperature {2:.1f}*'.format(sensor.dht_type, humi, temp))
        else:
            print('DHT{0}, humidity & temperature: {1}'.format(sensor.dht_type, temp))
        time.sleep(1)


if __name__ == '__main__':
    main()
```

:::tip
すべてが正常に動作していれば、`python dht_simpleread.py` を実行することで以下の結果が表示されます。
:::

```python
pi@raspberrypi:~/Seeed_Python_DHT/examples $ python3 dht_simpleread.py 
DHT22, humidity 39.2%, temperature 29.1*
DHT22, humidity 39.2%, temperature 29.1*
DHT22, humidity 39.2%, temperature 29.1*
DHT22, humidity 39.1%, temperature 29.1*
DHT22, humidity 40.0%, temperature 29.1*
DHT22, humidity 39.9%, temperature 29.1*
DHT22, humidity 40.3%, temperature 29.1*
DHT22, humidity 42.0%, temperature 29.1*
```

このプログラムを終了するには、++ctrl+c++ を押すだけです。

### Raspberry Pi での使用方法 (GrovePi_Plus を使用)

#### ハードウェア

**必要な材料**

| Raspberry pi | GrovePi_Plus | Temperature&Humidity Sensor Pro |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/Thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/GrovePi%2B-p-2241.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html" target="_blank">今すぐ購入</a>|

- **ステップ 1.** GrovePi_Plus を Raspberry に接続します。

- **ステップ 2.** Grove - Temperature&Humidity Sensor Pro を GrovePi_Plus の **D4** ポートに接続します。

- **ステップ 3.** Raspberry を USB ケーブルで PC に接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/connect_pi.jpg" /></div>

#### ソフトウェア

GrovePiを初めて使用する場合は、この部分をステップごとに実行してください。GrovePiに慣れている場合は、**Step1**と**Step2**をスキップできます。

- **Step 1.** ソフトウェアのセットアップ。コマンドラインで以下のコマンドを入力してください：

:::caution
**Raspberry Pi with Raspberrypi OS >= Bullseye**を使用している場合、**このコマンドラインは使用できません**。
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

この部分の詳細については、[Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)を参照してください。

- **Step 2.** [Updating the Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/)に従って、GrovePiの最新ファームウェアを更新してください。

:::note
ファームウェアを更新することを強くお勧めします。一部のセンサーでは、更新しないとエラーが発生する可能性があります。
:::

- **Step 3.** パラメータの設定

:::caution
**Raspberry Pi with Raspberrypi OS >= Bullseye**を使用している場合、**Python3のみ**でこのコマンドラインを使用する必要があります。
:::

```

cd /home/pi/Desktop/GrovePi/Software/Python/
sudo nano grove_dht_pro.py

```

:::note
Grove - Temperature&Humidity SensorとGrove - Temperature&Humidity Sensor proは、`grove_dht_pro.py`という同じPythonコードを共有しています。唯一の違いは、文`[temp,humidity] = grovepi.dht(sensor,blue)`において、Grove - Temperature&Humidity Sensorには`blue`パラメータを使用し、Grove - Temperature&Humidity Sensor proには`white`を使用する点です。デフォルト値は`blue`なので、このセンサーの場合はコードを変更する必要があります。
:::

デフォルトのパラメータ`[temp,humidity] = grovepi.dht(sensor,blue)`を`[temp,humidity] = grovepi.dht(sensor,white)`に変更します。コードは以下のようになります：

```python
import grovepi
import math
# Grove Temperature & Humidity Sensor ProをデジタルポートD4に接続
# この例では青色のセンサーを使用します。
# SIG,NC,VCC,GND
sensor = 4  # センサーはデジタルポート4に接続します。

# temp_humidity_sensor_type
# Grove Base Kitには青色のセンサーが付属しています。
blue = 0    # 青色のセンサー。
white = 1   # 白色のセンサー。

while True:
    try:
        # この例では白色のセンサーを使用します。
        # 最初のパラメータはポート、2番目のパラメータはセンサーの種類です。
        [temp,humidity] = grovepi.dht(sensor,white)  
        if math.isnan(temp) == False and math.isnan(humidity) == False:
            print("temp = %.02f C humidity =%.02f%%"%(temp, humidity))

    except IOError:
        print ("Error")

```

次に、++ctrl+x++を押してnanoを終了します。++y++を押して変更を保存します。

- **Step 4.** 以下のコマンドを実行して結果を確認します。

```
sudo python3 grove_dht_pro.py
```

結果は以下のようになります：

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

- **[Zip]** [Temperature&Humidity Sensor ProのEagle形式ファイル](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/Temp_Humi_Pro_eagle_files.zip)
- **[PDF]** [Temperature&Humidity Sensor ProのPCB（PDF形式）](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/TemperatureHumidiy%20Pro%20PCB.pdf)
- **[PDF]** [Temperature&Humidity Sensor Proの回路図（PDF形式）](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/TemperatureHumidiy%20Pro%20Schematic.pdf)
- **[Library]** [Temperature&Humidity Sensor Proライブラリ](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/Humidity_Temperature_Sensor_pro.zip)
- **[Datasheet]** [AM2302-CN.pdf](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/AM2302-CN.pdf)
- **[Datasheet]** [AM2302-EN.pdf](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/AM2302-EN.pdf)

## プロジェクト

**温湿度データロガー**: このプロジェクトでは、特定の場所の温度と湿度の値をデバイスのバッテリーレベルとともに監視できます。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/alpha007/temperature-humidity-data-logger-767570/embed' width='350'></iframe>

**LinkIt ONE IoTデモ**: LinkIt ONEによるIoTデモ。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/loovee/linkit-one-iot-demo-546a9c/embed' width='350'></iframe>

**カメラ付き自動蛇用エンクロージャ**: 温度と湿度を制御し、緯度・経度を使用して自然光サイクルを模倣するオンラインカメラ付きのインタラクティブな蛇用エンクロージャ。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/hagakure/automated-snake-enclosure-with-camera-a56ea9/embed' width='350'></iframe>

**Foton - 接続されたライトセーバー**: Fotonは特別なライトセーバーで、部屋の温度と湿度を監視し、動きを検知してスマートフォンにデータを送信できます。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/Momy93/foton-the-connected-lightsaber-a6c159/embed' width='350'></iframe>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>