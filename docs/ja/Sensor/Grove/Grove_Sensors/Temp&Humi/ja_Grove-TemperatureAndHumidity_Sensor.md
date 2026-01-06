---
description: Grove - 温湿度センサー (DHT11)
title: Grove - 温湿度センサー (DHT11)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-TemperatureAndHumidity_Sensor
last_update:
  date: 12/29/2025
  author: Brandy
---


# Grove - 温湿度センサー (DHT11)

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/main.jpg" /></div>

この温湿度センサーは、事前校正されたデジタル出力を提供します。独自の容量式センサー素子が相対湿度を測定し、温度は負の温度係数（NTC）サーミスタによって測定されます。優れた信頼性と長期安定性を備えています。このセンサーは0度以下の温度では動作しないことにご注意ください。

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT1-p-745.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

## 産業用センサーへのアップグレード

SenseCAP [S2110 コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100 データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Grove を LoRaWAN® センサーに簡単に変換できます。Seeed はプロトタイピングをサポートするだけでなく、堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)の SenseCAP シリーズでプロジェクトを拡張する可能性も提供します。

SenseCAP S210x シリーズの産業用センサーは、環境センシングのためのすぐに使える体験を提供します。大気質監視のためのより高い性能と堅牢性を持つ S2101 ワイヤレス温湿度センサーをご参照ください。このシリーズには、土壌水分、気温・湿度、光強度、CO2、EC、および8-in-1気象ステーションのセンサーが含まれています。次の成功する産業プロジェクトには、最新の[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)をお試しください。

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
          <strong>S2101 気温・湿度センサー</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## 特徴

--------

- 相対湿度と温度測定
- 全範囲温度補償校正済み
- デジタル信号
- 長期安定性
- 長距離伝送（>20m）
- 低消費電力

:::tip
Grove モジュールの詳細については、[Grove システム](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください
:::

## 応用例

------------------

- 消費者製品
- 気象ステーション
- 湿度調整器
- エアコン

## 仕様

--------------

### 主要仕様

| 項目         |   最小値               |
|--------------|------------------------|
| PCB サイズ   | 2.0cm*4.0cm            |
| インターフェース | 2.0mm ピッチピンヘッダー |
| IO 構造      | SIG,VCC,GND,NC         |
| ROHS         | YES                    |

### 電気的特性

<table border="1">
<tr>
<th>
項目
</th>
<th>
条件
</th>
<th>
最小値
</th>
<th>
標準値
</th>
<th>
最大値
</th>
<th>
単位
</th>
</tr>
<tr align="center">
<td>
VCC
</td>
<td>
-
</td>
<td>
3.3
</td>
<td>
-
</td>
<td>
5
</td>
<td>
Volts
</td>
</tr>
<tr align="center">
<td>
測定時電流供給
</td>
<td>
-
</td>
<td>
1.3
</td>
<td>
-
</td>
<td>
2.1
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<td>
平均電流供給
</td>
<td>
-
</td>
<td>
0.5
</td>
<td>
-
</td>
<td>
1.1
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<td rowspan="2">
測定範囲
</td>
<td>
湿度
</td>
<td>
20%
</td>
<td>
-
</td>
<td>
90%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
温度
</td>
<td>
0
</td>
<td>
-
</td>
<td>
50
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
精度
</td>
<td>
湿度
</td>
<td>
-
</td>
<td>
-
</td>
<td>
±5%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
温度
</td>
<td>
</td>
<td>
</td>
<td>
±2
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
 感度
</td>
<td>
湿度
</td>
<td>
</td>
<td>
-
</td>
<td>
1%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
温度
</td>
<td>
</td>
<td>
</td>
<td>
1
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
再現性
</td>
<td>
湿度
</td>
<td>
</td>
<td>
</td>
<td>
±1%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
温度
</td>
<td>
</td>
<td>
</td>
<td>
±1
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td>
長期安定性
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
±1%
</td>
<td>
RH/年
</td>
</tr>
<tr align="center">
<td>
信号収集周期
</td>
<td>
</td>
<td>
</td>
<td>
2
</td>
<td>
</td>
<td>
S
</td>
</tr>
</table>

対応プラットフォーム
------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::note
上記で対応として言及されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示すものです。ほとんどの場合、Arduino プラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能な MCU プラットフォーム用のソフトウェアライブラリ/デモコードを提供することは不可能です。したがって、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

はじめに

MCU がトリガー信号を送信すると、センサーは低消費電力モードからアクティブモードに変わります。トリガー信号の後、センサーは MCU に応答信号を送り返し、その後40ビットの収集データが送信され、新しい信号収集がトリガーされます。（センサーから MCU に送信される40ビットの収集データは、トリガー信号が来る前にすでに収集されていることに注意してください。）1つのトリガー信号で、センサーから1回の40ビット応答データを受信します。MCU とセンサー間の通信には、シングルバスデータが使用されます。
通信プロセスは以下に示されています：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/Twig-Temperature_Humidity.jpg" /></div>

1回の通信には5msかかります。データの上位ビットが最初に送信されます。信号データは40ビットで、16ビットの湿度データ、16ビットの温度データ、8ビットのチェックサムで構成されています。データ形式は以下の通りです：

    湿度の整数部8ビット+湿度の小数部8ビット
    +温度の整数部8ビット+温度の小数部8ビット
    +チェックサム8ビット。

:::note
Arduino を初めて使用する場合は、開始前に[Arduino 入門ガイド](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

### Arduino で遊ぶ

#### ハードウェア

- **ステップ 1.** 以下のものを準備してください：

| Seeeduino V4.2 | Base Shield| 温湿度センサー|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/list.jpg" /></div>|
|[今すぐ入手](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ入手](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)|

- **ステップ 2.** Grove - 温湿度センサーを Grove-Base Shield のポート **D2** に接続します。

- **ステップ 3.** Grove - Base Shield を Seeeduino に差し込みます。

- **ステップ 4.** USB ケーブルで Seeeduino を PC に接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/connect_arduino.jpg" /></div>

:::note
 Grove Base Shield がない場合でも、Grove - Temperature and Humidity Sensor Pro を以下のように Seeeduino に直接接続することができます。
:::

| Seeeduino       | Temperature&Humidity Sensor |
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| Not Conencted | White                   |
| D2            | Yellow                  |

#### ソフトウェア

- **ステップ 1.** Github から [Seeed DHT ライブラリ](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor) をダウンロードします。

- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library) を参照して Arduino 用ライブラリをインストールします。

- **ステップ 3.** Arduino IDE を再起動します。パス **File --> Examples --> Grove_Humidity_Temperature_Sensor-master --> DHTtester** から "DHTtester" サンプルを開きます。このデモを通じて、環境の温度と相対湿度の情報を読み取ることができます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/path.png" /></div>

:::note
この Grove - Temperature&Humidity Sensor と弊社の別製品 [Grove-Temperature&Humidity Sensor pro](https://wiki.seeedstudio.com/ja/Grove-Temperature_and_Humidity_Sensor_Pro/) は同じライブラリを共有しています。どちらの製品を使用している場合でも、お使いのボードのセンサーの定義行を有効にし、他の仕様の定義行をコメントアウトしていることを確認してください。例えば、Grove - Temperature&Humidity Sensor で使用しているセンサーは DHT 11 です。そのため、センサー仕様の定義部分は以下のようになります：
:::

```
#define DHTTYPE DHT11   // DHT 11
//#define DHTTYPE DHT22   // DHT 22  (AM2302)
//#define DHTTYPE DHT21   // DHT 21 (AM2301)
```

ライブラリのデフォルト設定は `DHT 22` なので、手動で `DHT 11` に変更する必要があります。

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/) を確認してください。

- **ステップ 5.** **Tool-> Serial Monitor** をクリックして Arduino IDE の **Serial Monitor** を開きます。または ++ctrl+shift+m++ キーを同時に押します。すべてが正常に動作すれば、温度が取得できます。

結果は以下のようになります：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/result_ar.png" /></div>

### Codecraft で遊ぶ

#### ハードウェア

**ステップ 1.** Grove - Temperature&Humidity Sensor を Base Shield のポート D2 に接続します。

**ステップ 2.** Base Shield を Seeeduino/Arduino に接続します。

**ステップ 3.** USB ケーブルで Seeeduino/Arduino を PC に接続します。

#### ソフトウェア

**ステップ 1.** [Codecraft](https://ide.chmakered.com/) を開き、Arduino サポートを追加し、メインプロシージャを作業エリアにドラッグします。

:::note
Codecraft を初めて使用する場合は、[Arduino を使用した Codecraft ガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/) も参照してください。
:::

**ステップ 2.** 下の画像のようにブロックをドラッグするか、このページの最後でダウンロードできる cdc ファイルを開きます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/cc_Temperature_Humidity.png" /></div>

プログラムを Arduino/Seeeduino にアップロードします。

:::tip
コードのアップロードが完了すると、Serial Monitor に温度と湿度が表示されます。
:::

### Raspberry Pi で遊ぶ（Grove Base Hat for Raspberry Pi 使用）

#### ハードウェア

- **ステップ 1**. このプロジェクトで使用するもの：

| Raspberry pi | Grove Base Hat for RasPi| Grove - Temp & Hum Sensor|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/list.jpg" /></div>|
|[今すぐ入手](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)|

- **ステップ 2**. Grove Base Hat を Raspberry に接続します。
- **ステップ 3**. 温湿度センサーを Base Hat のポート 12 に接続します。
- **ステップ 4**. USB ケーブルで Raspberry Pi を PC に接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/Temp_Hum_Hat.jpg" /></div>

:::note
ステップ 3 では、温湿度センサーを **任意の GPIO ポート** に接続できますが、対応するポート番号でコマンドを変更することを確認してください。
:::

#### ソフトウェア

:::caution
**Raspberrypi OS >= Bullseye の Raspberry Pi** を使用している場合は、このコマンドラインを **Python3 でのみ** 使用する必要があります。
:::

- **ステップ 1**. [ソフトウェア設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation) に従って開発環境を設定します。
:::tip
ステップの一つは必要な DHT ライブラリを追加することです。インストールされていることを確認してください。
:::
- **ステップ 2**.関連する仮想環境に入ります。

```
source ~/grove_env/env/bin/activate
cd ~/grove_env/grove.py/grove
```

- **ステップ 3**. 以下のコマンドを実行してコードを実行します。

```
nano ~/grove_env/dht11_demo.py
```

以下のコードをコピーします

```python
import time
import seeed_dht

sensor = seeed_dht.DHT("11", 12)  
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

  すべてが正常に動作すれば、以下の結果を確認できます


```python

pi@raspberrypi:~/Seeed_Python_DHT/examples $ python ~/grove_env/dht11_demo.py 
DHT11, humidity 39.2%, temperature 29.1*
DHT11, humidity 39.2%, temperature 29.1*
DHT11, humidity 39.2%, temperature 29.1*
DHT11, humidity 39.1%, temperature 29.1*
DHT11, humidity 40.0%, temperature 29.1*
DHT11, humidity 39.9%, temperature 29.1*
DHT11, humidity 40.3%, temperature 29.1*
DHT11, humidity 42.0%, temperature 29.1*
```

++ctrl+c++ を押すだけでこのプログラムを終了できます。

### Raspberry Pi で遊ぶ（GrovePi_Plus 使用）

#### ハードウェア

まず、以下のものを準備する必要があります：

- **ステップ 1.** 以下のものを準備します：

| Raspberry pi | GrovePi_Plus | Temperature&Humidity Sensor|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/list.jpg" /></div>|
|[今すぐ入手](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ入手](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html)|

- **ステップ 2.** GrovePi_Plus を Raspberry に接続します。

- **ステップ 3.** Grove - Temperature&Humidity Sensor を GrovePi_Plus の **D4** ポートに接続します。

- **ステップ 4.** USB ケーブルで Raspberry を PC に接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/connect_pi.jpg" /></div>

#### ソフトウェア

- **ステップ 1.** [ソフトウェア設定](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) に従って開発環境を設定します。

- **ステップ 2.** [ファームウェアの更新](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) に従って GrovePi の最新ファームウェアに更新します。

:::tip
この wiki では **/home/pi/Desktop/GrovePi** の代わりにパス **~/GrovePi/** を使用しています。ステップ 2 とステップ 3 で同じパスを使用することを確認してください。
:::

:::note
ファームウェアの更新を強く推奨します。一部のセンサーでエラーが発生する可能性があります。
:::

:::caution
**Raspberrypi OS >= Bullseye の Raspberry Pi** を使用している場合は、このコマンドラインを **Python3 でのみ** 使用する必要があります。
:::

- **ステップ 3.** Github リポジトリを Git クローンします。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **ステップ 4.** コードを確認します。

```python

cd ~/GrovePi/Software/Python
sudo nano grove_dht_pro.py

```

コードは以下のようになります：

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
        [temp,humidity] = grovepi.dht(sensor,blue)  
        if math.isnan(temp) == False and math.isnan(humidity) == False:
            print("temp = %.02f C humidity =%.02f%%"%(temp, humidity))

    except IOError:
        print ("Error")

```

次に ++ctrl+x++ を押して nano を終了します。

:::note
Grove - Temperature&Humidity Sensor と Grove - Temperature&Humidity Sensor pro は `grove_dht_pro.py` という名前の同じ Python コードを共有しています。唯一の違いは、`[temp,humidity] = grovepi.dht(sensor,blue)` の文で、Grove - Temperature&Humidity Sensor には `blue` パラメータを使用し、Grove - Temperature&Humidity Sensor pro には `white` を使用することです。デフォルト値は blue なので、このセンサーではコードを変更する必要はありません。
:::

- **ステップ 5.** 以下のコマンドを実行して値を取得します。

```
sudo python3 grove_dht_pro.py
```

結果は次のようになります：

```python

pi@raspberrypi:~/GrovePi/Software/Python $ sudo python3 grove_dht_pro.py
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%

```

### Wio Terminal で遊ぶ（ArduPy）

#### ハードウェア

- **ステップ 1.** 以下を準備します：

| Wio Terminal | Grove - 温湿度センサー（DHT11） |
|--------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/new.jpeg" /></div>|
|[今すぐ入手](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html)|

- **ステップ 2.** Grove - 温湿度センサーを Wio Terminal の **D0** ポートに接続します。

- **ステップ 3.** USB Type-C ケーブルで Wio Terminal を PC に接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/new-connect.jpeg" /></div>

#### ソフトウェア

- **ステップ 1.** [**ArduPy 入門ガイド**](https://wiki.seeedstudio.com/ja/ArduPy/) に従って、Wio Terminal で ArduPy 開発環境を設定します。

- **ステップ 2.** 以下のコマンドを使用して、ArduPy ファームウェアに DHT ライブラリが含まれていることを確認します。詳細については、[**こちら**](https://wiki.seeedstudio.com/ja/ArduPy/#using-aip-to-include-other-ardupy-librariesfrom-arduino-libraries-example) を参照してください。

```sh
aip install Seeed-Studio/seeed-ardupy-dht/archive/main.zip
aip build
aip flash
```

- **ステップ 3.** 以下のコードをコピーして `ArduPy-DHT.py` として保存します：

```python
from arduino import grove_dht
from machine import LCD, Sprite
import time 

dht = grove_dht(0,11)
lcd = LCD() # initialize TFT LCD 
spr = Sprite(lcd) # initialize buffer

def main(): # main function 
    spr.createSprite(320, 240) # create buffer
    while True: # while loop
        spr.fillSprite(spr.color.WHITE) # fill background 

        # two fill rectangles
        spr.fillRect(0,0,160,240,spr.color.DARKGREEN) # fill rectangle in color
        spr.fillRect(160,0,160,240,spr.color.BLUE)

        # temp and humid text draw 
        spr.setTextSize(2) # set text size
        spr.setTextColor(spr.color.WHITE,spr.color.DARKGREEN) # set text color
        spr.drawString("Temperature", 15, 65) # draw string 
        spr.setTextColor(spr.color.WHITE,spr.color.BLUE) 
        spr.drawString("Humidity", 190, 65) 

        # obtain readings 
        t = dht.temperature # store temperature readings in variable 
        h = dht.humidity # store humidity readings in variable 

        # display temp readings
        spr.setTextSize(4)
        spr.setTextColor(spr.color.WHITE,spr.color.DARKGREEN)
        spr.drawNumber(int(t),50,110) # display number  
        spr.drawString("C", 100, 110) 

        # display humi readings
        spr.setTextColor(spr.color.WHITE,spr.color.BLUE) # set text color
        spr.drawNumber(int(h),180,110)  
        spr.drawString("%RH", 235, 110) 

        spr.pushSprite(0,0) # push to LCD
        time.sleep_ms(100)

        print("temperature:",t,"C", end ="     ")
        print("humidity:",h,"%RH")

if __name__ == "__main__": # check whether this is run from main.py
    main() # execute function
```

- **ステップ 4.** `ArduPy-DHT.py` を分かりやすい場所に保存します。以下のコマンドを実行し、`<YourPythonFilePath>` を `ArduPy-DHT.py` の場所に**置き換えて**ください。

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# Example:
# aip shell -n -c "runfile /Users/user/Desktop/ArduPy-DHT.py"
```

これで、温度と湿度の情報がコマンドプロンプト/ターミナルウィンドウと Wio Terminal の LCD の両方に表示されます。

```python
C:\Users\user>aip shell -n -c "runfile /Users/user/Desktop/ArduPy-DHT.py"
Positional argument (COM4) takes precedence over --open.
Connected to ardupy
temperature: 31.0 C     humidity: 85.0 %RH
temperature: 31.0 C     humidity: 85.0 %RH
temperature: 31.0 C     humidity: 85.0 %RH
temperature: 31.0 C     humidity: 87.0 %RH
temperature: 31.0 C     humidity: 87.0 %RH
temperature: 31.0 C     humidity: 87.0 %RH
temperature: 31.0 C     humidity: 87.0 %RH
temperature: 31.0 C     humidity: 87.0 %RH
temperature: 31.0 C     humidity: 87.0 %RH
temperature: 31.0 C     humidity: 87.0 %RH
```

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/new-demo.jpeg" /></div>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/res/Temperature_Humidity.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [温湿度センサー eagle ファイル](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/res/Temperature_Humidity.zip)

- **[Zip]** [温湿度センサーライブラリ](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)

- **[Codecraft]** [CDC ファイル](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/res/Grove_Temperature_and_Humidity_Sensor_CDC_File.zip)

## プロジェクト

**トイレ管理システム**：このシステムを使用することで、複数の人が一つのトイレを効率的に共有できます。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/taifur/toilet-management-system-8e2786/embed' width='350'></iframe>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

