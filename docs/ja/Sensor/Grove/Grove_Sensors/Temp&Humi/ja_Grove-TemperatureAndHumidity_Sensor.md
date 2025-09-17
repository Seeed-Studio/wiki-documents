---
description: Grove - 温度＆湿度センサー (DHT11)
title: Grove - 温度＆湿度センサー (DHT11)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-TemperatureAndHumidity_Sensor
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Grove - 温度＆湿度センサー (DHT11)

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/main.jpg" /></div>

この温度＆湿度センサーは、事前に校正されたデジタル出力を提供します。独自の容量性センサー要素が相対湿度を測定し、温度は負の温度係数（NTC）サーミスタによって測定されます。このセンサーは優れた信頼性と長期的な安定性を備えています。ただし、このセンサーは0度以下の温度では動作しないことに注意してください。

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT1-p-745.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

## 産業用センサーへのアップグレード可能

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングを支援するだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

SenseCAP S210xシリーズの産業用センサーは、環境センシングのための即時使用可能な体験を提供します。空気質モニタリングのために、より高性能で堅牢なS2101ワイヤレス温度および湿度センサーを参照してください。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、および8-in-1気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトのために最新の[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)を試してみてください。

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

--------

- 相対湿度および温度測定
- 全範囲温度補償済み校正
- デジタル信号
- 長期的な安定性
- 長距離伝送（>20m）
- 低消費電力

:::tip
Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## アプリケーションアイデア

------------------

- 消費者向け製品
- 気象ステーション
- 湿度調整器
- エアコン

## 仕様

--------------

### 主な仕様

| 項目         | 最小値                  |
|--------------|------------------------|
| PCBサイズ    | 2.0cm*4.0cm            |
| インターフェース | 2.0mmピッチピンヘッダー |
| IO構造       | SIG,VCC,GND,NC         |
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
ボルト
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
長期的安定性
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
秒
</td>
</tr>
</table>

対応プラットフォーム
------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::note
上記で対応しているとされるプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

はじめに

MCUがトリガー信号を送信すると、センサーは低消費電力モードからアクティブモードに切り替わります。トリガー信号の後、センサーはMCUに応答信号を送り返し、40ビットの収集データが送信され、新しい信号収集がトリガーされます。（センサーからMCUに送信される40ビットの収集データは、トリガー信号が来る前にすでに収集されています。）1つのトリガー信号でセンサーから1回分の40ビット応答データを受信します。MCUとセンサー間の通信にはシングルバスデータが使用されます。
通信プロセスは以下の通りです：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/Twig-Temperature_Humidity.jpg" /></div>

1回の通信には5msかかります。データの上位ビットが最初に送信されます。信号データは40ビットで構成されており、16ビットの湿度データ、16ビットの温度データ、8ビットのチェックサムで構成されています。データ形式は以下の通りです：

    湿度の整数部分8ビット+湿度の小数部分8ビット
    +温度の整数部分8ビット+温度の小数部分8ビット
    +チェックサム8ビット。

:::note
Arduinoを初めて使用する場合は、開始前に[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を必ずご覧ください。
:::

### Arduinoで遊ぶ

#### ハードウェア

- **ステップ1.** 以下のものを準備してください：

| Seeeduino V4.2 | ベースシールド| 温度＆湿度センサー|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/list.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)|

- **ステップ 2.** Grove - Temperature&Humidity Sensor を Grove-Base Shield のポート **D2** に接続します。

- **ステップ 3.** Grove - Base Shield を Seeeduino に差し込みます。

- **ステップ 4.** USB ケーブルを使用して Seeeduino を PC に接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/connect_arduino.jpg" /></div>

:::note
Grove Base Shield を持っていない場合でも、以下のように Grove - Temperature and Humidity Sensor Pro を Seeeduino に直接接続することができます。
:::

| Seeeduino       | Temperature&Humidity Sensor |
|-----------------|-----------------------------|
| 5V              | 赤                          |
| GND             | 黒                          |
| 接続なし        | 白                          |
| D2              | 黄                          |

#### ソフトウェア

- **ステップ 1.** [Seeed DHT ライブラリ](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor) を Github からダウンロードします。

- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library) を参照して、Arduino 用のライブラリをインストールします。

- **ステップ 3.** Arduino IDE を再起動します。**File --> Examples --> Grove_Humidity_Temperature_Sensor-master --> DHTtester** のパスを通じて「DHTtester」サンプルを開きます。このデモを通じて、環境の温度と相対湿度の情報を読み取ることができます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/path.png" /></div>

:::note
この Grove - Temperature&Humidity Sensor と、もう一つの製品 [Grove-Temperature&Humidity Sensor pro](https://wiki.seeedstudio.com/ja/Grove-Temperature_and_Humidity_Sensor_Pro/) は、このライブラリを共有しています。どちらの製品を使用している場合でも、ボードのセンサーの定義行を有効にし、他の仕様の定義行をコメントアウトすることを確認してください。例えば、Grove - Temperature&Humidity Sensor で使用されているセンサーは DHT 11 です。そのため、センサー仕様の定義部分は以下のようにする必要があります。
:::

```
#define DHTTYPE DHT11   // DHT 11
//#define DHTTYPE DHT22   // DHT 22  (AM2302)
//#define DHTTYPE DHT21   // DHT 21 (AM2301)
```

ライブラリのデフォルト設定は `DHT 22` なので、手動で `DHT 11` に変更する必要があります。

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ 5.** Arduino IDE の **Serial Monitor** を開きます。**Tool-> Serial Monitor** をクリックするか、++ctrl+shift+m++ キーを同時に押します。すべてが正常に動作していれば、温度が表示されます。

結果は以下のようになります：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/result_ar.png" /></div>

### Codecraft を使って遊ぶ

#### ハードウェア

**ステップ 1.** Grove - Temperature&Humidity Sensor を Base Shield のポート D2 に接続します。

**ステップ 2.** Base Shield を Seeeduino/Arduino に差し込みます。

**ステップ 3.** USB ケーブルを使用して Seeeduino/Arduino を PC に接続します。

#### ソフトウェア

**ステップ 1.** [Codecraft](https://ide.chmakered.com/) を開き、Arduino サポートを追加し、メインプロシージャを作業エリアにドラッグします。

:::note
Codecraft を初めて使用する場合は、[Codecraft を Arduino で使用するためのガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)も参照してください。
:::

**ステップ 2.** 以下の画像のようにブロックをドラッグするか、このページの最後でダウンロードできる cdc ファイルを開きます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/cc_Temperature_Humidity.png" /></div>

プログラムを Arduino/Seeeduino にアップロードします。

:::tip
コードのアップロードが完了すると、Serial Monitor に温度と湿度が表示されます。
:::

### Raspberry Pi で遊ぶ (Raspberry Pi 用 Grove Base Hat を使用)

#### ハードウェア

- **ステップ 1.** このプロジェクトで使用するもの：

| Raspberry Pi | Grove Base Hat for RasPi | Grove - Temp & Hum Sensor |
|--------------|---------------------------|---------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/list.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)|

- **ステップ 2.** Grove Base Hat を Raspberry Pi に差し込みます。
- **ステップ 3.** 温度と湿度センサーを Base Hat のポート 12 に接続します。
- **ステップ 4.** USB ケーブルを使用して Raspberry Pi を PC に接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/Temp_Hum_Hat.jpg" /></div>

:::note
ステップ 3 では、温度と湿度センサーを **任意の GPIO ポート** に接続することができますが、対応するポート番号でコマンドを変更することを確認してください。
:::

#### ソフトウェア

:::caution
**Raspberry Pi OS >= Bullseye** を使用している場合は、**Python3 のみ**でこのコマンドラインを使用する必要があります。
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
python3 dht_simpleread.py 
```

以下は dht_simpleread.py のコードです。

```python
import time
import seeed_dht
def main():

    # DHT11/DHT22 用
    sensor = seeed_dht.DHT("11", 12)
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
    すべてが正常に動作すれば、以下の結果が表示されるはずです。
:::

```python

pi@raspberrypi:~/Seeed_Python_DHT/examples $ python3 dht_simpleread.py 
DHT11, humidity 39.2%, temperature 29.1*
DHT11, humidity 39.2%, temperature 29.1*
DHT11, humidity 39.2%, temperature 29.1*
DHT11, humidity 39.1%, temperature 29.1*
DHT11, humidity 40.0%, temperature 29.1*
DHT11, humidity 39.9%, temperature 29.1*
DHT11, humidity 40.3%, temperature 29.1*
DHT11, humidity 42.0%, temperature 29.1*
```

このプログラムを終了するには、++ctrl+c++ を押してください。

### Raspberry Pi で遊ぶ (GrovePi_Plus を使用)

#### ハードウェア

まず、以下のものを準備してください：

- **ステップ 1.** 以下のものを準備してください：

| Raspberry Pi | GrovePi_Plus | 温湿度センサー |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/list.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html)|

- **ステップ 2.** GrovePi_Plus を Raspberry Pi に接続します。

- **ステップ 3.** Grove - 温湿度センサーを GrovePi_Plus の **D4** ポートに接続します。

- **ステップ 4.** Raspberry Pi を USB ケーブルで PC に接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/connect_pi.jpg" /></div>

#### ソフトウェア

- **ステップ 1.** [ソフトウェアの設定](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) に従って開発環境を構築します。

- **ステップ 2.** [ファームウェアの更新](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) に従って GrovePi の最新ファームウェアを更新します。

:::tip
この Wiki では **~/GrovePi/** のパスを使用します。**/home/pi/Desktop/GrovePi** の代わりに使用することを確認してください。ステップ 2 とステップ 3 で同じパスを使用する必要があります。
:::

:::note
ファームウェアを更新することを強く推奨します。一部のセンサーでは、更新しないとエラーが発生する可能性があります。
:::

:::caution
**Raspberry Pi OS >= Bullseye** を使用している場合は、**Python3** のみでコマンドラインを使用する必要があります。
:::

- **ステップ 3.** Github リポジトリをクローンします。

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
# Grove 温湿度センサー Pro をデジタルポート D4 に接続します
# この例では青色のセンサーを使用します。
# SIG,NC,VCC,GND
sensor = 4  # センサーはデジタルポート 4 に接続します。

# temp_humidity_sensor_type
# Grove Base Kit には青色のセンサーが付属しています。
blue = 0    # 青色のセンサー。
white = 1   # 白色のセンサー。

while True:
    try:
        # この例では青色のセンサーを使用します。
        # 最初のパラメータはポート、2 番目のパラメータはセンサーの種類です。
        [temp,humidity] = grovepi.dht(sensor,blue)  
        if math.isnan(temp) == False and math.isnan(humidity) == False:
            print("temp = %.02f C humidity =%.02f%%"%(temp, humidity))

    except IOError:
        print ("Error")

```

次に ++ctrl+x++ を押して nano を終了します。

:::note
Grove - 温湿度センサーと Grove - 温湿度センサー Pro は同じ Python コード `grove_dht_pro.py` を共有しています。唯一の違いは、`[temp,humidity] = grovepi.dht(sensor,blue)` の文です。Grove - 温湿度センサーにはパラメータ `blue` を使用し、Grove - 温湿度センサー Pro には `white` を使用します。デフォルト値は `blue` なので、このセンサーの場合コードを変更する必要はありません。
:::

- **ステップ 5.** 以下のコマンドを実行して値を取得します。

```
sudo python3 grove_dht_pro.py
```

結果は以下のようになります：

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

### Wio Terminal (ArduPy) で遊ぶ

#### ハードウェア

- **ステップ 1.** 以下を準備してください：

| Wio Terminal | Grove - 温湿度センサー (DHT11) |
|--------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/new.jpeg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html)|

- **ステップ 2.** Grove - 温湿度センサーを Wio Terminal の **D0** ポートに接続します。

- **ステップ 3.** Wio Terminal を USB Type-C ケーブルで PC に接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/new-connect.jpeg" /></div>

#### ソフトウェア

- **ステップ 1.** [**ArduPy 入門**](https://wiki.seeedstudio.com/ja/ArduPy/) に従って Wio Terminal 上で ArduPy 開発環境を構築します。

- **ステップ 2.** 以下のコマンドを使用して、ArduPy ファームウェアに DHT ライブラリが含まれていることを確認します。詳細については [**こちら**](https://wiki.seeedstudio.com/ja/ArduPy/#using-aip-to-include-other-ardupy-librariesfrom-arduino-libraries-example) を参照してください。

```sh
aip install Seeed-Studio/seeed-ardupy-dht/archive/main.zip
aip build
aip flash
```

- **ステップ 3.** 以下のコードをコピーして `ArduPy-DHT.py` として保存してください:

```python
from arduino import grove_dht
from machine import LCD, Sprite
import time 

dht = grove_dht(0,11)
lcd = LCD() # TFT LCD を初期化
spr = Sprite(lcd) # バッファを初期化

def main(): # メイン関数
    spr.createSprite(320, 240) # バッファを作成
    while True: # ループ
        spr.fillSprite(spr.color.WHITE) # 背景を塗りつぶす

        # 2つの塗りつぶし矩形
        spr.fillRect(0,0,160,240,spr.color.DARKGREEN) # 色付き矩形を塗りつぶす
        spr.fillRect(160,0,160,240,spr.color.BLUE)

        # 温度と湿度のテキスト描画
        spr.setTextSize(2) # テキストサイズを設定
        spr.setTextColor(spr.color.WHITE,spr.color.DARKGREEN) # テキスト色を設定
        spr.drawString("Temperature", 15, 65) # 文字列を描画
        spr.setTextColor(spr.color.WHITE,spr.color.BLUE) 
        spr.drawString("Humidity", 190, 65) 

        # 測定値を取得
        t = dht.temperature # 温度測定値を変数に格納
        h = dht.humidity # 湿度測定値を変数に格納
        
        # 温度測定値を表示
        spr.setTextSize(4)
        spr.setTextColor(spr.color.WHITE,spr.color.DARKGREEN)
        spr.drawNumber(int(t),50,110) # 数値を表示
        spr.drawString("C", 100, 110) 

        # 湿度測定値を表示
        spr.setTextColor(spr.color.WHITE,spr.color.BLUE) # テキスト色を設定
        spr.drawNumber(int(h),180,110)  
        spr.drawString("%RH", 235, 110) 

        spr.pushSprite(0,0) # LCD にプッシュ
        time.sleep_ms(100)

        print("temperature:",t,"C", end ="     ")
        print("humidity:",h,"%RH")
 
if __name__ == "__main__": # main.py から実行されているか確認
    main() # 関数を実行
```

- **ステップ 4.** `ArduPy-DHT.py` を分かりやすい場所に保存してください。以下のコマンドを実行し、`<YourPythonFilePath>` を `ArduPy-DHT.py` の保存場所に置き換えてください。

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# 例:
# aip shell -n -c "runfile /Users/user/Desktop/ArduPy-DHT.py"
```

これで、温度と湿度の情報がコマンドプロンプト/ターミナルウィンドウおよび Wio Terminal の LCD に表示されます。

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

- **[Zip]** [温度＆湿度センサーのEagleファイル](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/res/Temperature_Humidity.zip)

- **[Zip]** [温度＆湿度センサーライブラリ](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)

- **[Codecraft]** [CDCファイル](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/res/Grove_Temperature_and_Humidity_Sensor_CDC_File.zip)

## プロジェクト

**トイレ管理システム**: このシステムを使用することで、複数の人が1つのトイレを効率的に共有できます。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/taifur/toilet-management-system-8e2786/embed' width='350'></iframe>

## 技術サポート＆製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>