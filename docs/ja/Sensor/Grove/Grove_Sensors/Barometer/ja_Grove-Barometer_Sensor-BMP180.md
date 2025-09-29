---
description: Grove - 気圧センサー (BMP180)
title: Grove - 気圧センサー (BMP180)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Barometer_Sensor-BMP180
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/Barometer-BMP180-.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/Barometer-BMP180-.jpg" alt="pir" width={600} height="auto" /></p>

これは、Bosch BMP180 高精度・低消費電力のデジタル気圧センサー用の Grove モジュールです。BMP180 は、300 から 1100 hPa の圧力測定範囲を持ち、高解像度モードでは 0.02 hPa までの精度を提供します。このセンサーは、高精度、耐久性、長期安定性を実現するために圧電抵抗技術に基づいています。このチップは 1.8V から 3.6V の入力電圧のみを受け付けますが、外部回路を追加することで、このモジュールは 3.3V および 5V に対応可能となります。そのため、Arduino/Seeeduino または Seeeduino Stalker で改造なしに使用できます。このモジュールは、I2C バスを介してマイクロコントローラーに直接接続するよう設計されています。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP180)-p-1840.html)

## 特徴

- デジタル 2 線式 (I2C) インターフェース
- 広い気圧測定範囲
- 柔軟な電源電圧範囲
- 超低消費電力
- 低ノイズ測定
- 工場出荷時に校正済み
- -40 から +85°C の動作範囲、±2°C の温度精度
- I2C アドレス: 0x77

:::note
    複数の I2C デバイスを使用したい場合は、[Software I2C](https://wiki.seeedstudio.com/ja/Arduino_Software_I2C_user_guide/) を参照してください。
:::
:::tip
    Grove モジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) を参照してください。
:::

## 応用例

- GPS ナビゲーションの強化
- 屋内および屋外ナビゲーション
- レジャーおよびスポーツ
- 天気予報
- 垂直速度指示 (上昇/下降速度)

## 仕様

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
項目
</th>
<th scope="col">
最小
</th>
<th scope="col">
標準
</th>
<th scope="col">
最大
</th>
<th scope="col">
単位
</th>
</tr>
<tr align="center">
<th scope="row">
電圧
</th>
<td>
3
</td>
<td>
5
</td>
<td>
5.5
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
電流
</th>
<td>
1.1
</td>
<td>
/
</td>
<td>
20
</td>
<td>
uA
</td>
</tr>
<tr align="center">
<th scope="row">
圧力範囲
</th>
<td>
300
</td>
<td>
/
</td>
<td>
1100
</td>
<td>
hPa
</td>
</tr>
<tr align="center">
<th scope="row">
高速 I2C データ転送
</th>
<td>
/
</td>
<td>
/
</td>
<td>
3.4
</td>
<td>
MHZ
</td>
</tr>
<tr align="center">
<th scope="row">
寸法
</th>
<td colspan="3">
40.1*20.2*9.7
</td>
<td>
mm
</td>
</tr>
</table>

対応プラットフォーム
-------------------

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上記でサポートされていると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduino プラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能な MCU プラットフォーム用のソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

- **ステップ 1.** 以下のアイテムを準備してください:

| Seeeduino V4.2 | Base Shield | Grove-Barometer_Sensor-BMP180 |
|----------------|-------------|-------------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/45d_small.jpg" alt="pir" width={500} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP180)-p-1840.html)|

- **ステップ 2.** Grove-Barometer_Sensor-BMP180をGrove-Base Shieldの**I2C**ポートに接続します。
- **ステップ 3.** Grove - Base ShieldをSeeeduinoに差し込みます。
- **ステップ 4.** USBケーブルを使用してSeeeduinoをPCに接続します。

<!-- ![with_ardu](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/with_ardu.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>

:::note
     Grove Base Shieldがない場合は、以下のように直接このモジュールをSeeeduinoに接続することもできます。
:::
| Seeeduino_v4 | Grove-Barometer_Sensor-BMP180 |
|--------------|-------------------------------|
| 5V           | VCC                           |
| GND          | GND                           |
| SDA          | SDA                           |
| SCL          | SCL                           |

#### ソフトウェア

**ステップ 1.** [ライブラリ](https://github.com/Seeed-Studio/Grove_Barometer_Sensor)をGithubからダウンロードしてください。

**ステップ 2.** [Arduinoライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールしてください。

**ステップ 3.** 新しいArduinoスケッチを作成し、以下のコードを貼り付けるか、次のパスから直接コードを開いてください: File -> Example -> Barometer_Sensor -> Barometer_Sensor。

以下はコードです:

```cpp
#include "Barometer.h"
#include <Wire.h>
float temperature;
float pressure;
float atm;
float altitude;
Barometer myBarometer;
void setup(){
  Serial.begin(9600);
  myBarometer.init();
}

void loop()
{
   temperature = myBarometer.bmp085GetTemperature(myBarometer.bmp085ReadUT()); // 温度を取得するには、bmp085ReadUTを最初に呼び出す必要があります
   pressure = myBarometer.bmp085GetPressure(myBarometer.bmp085ReadUP()); // 気圧を取得
   altitude = myBarometer.calcAltitude(pressure); // 補正なしの計算 - メートル単位
   atm = pressure / 101325;

  Serial.print("Temperature: ");
  Serial.print(temperature, 2); // 小数点以下2桁を表示
  Serial.println("deg C");

  Serial.print("Pressure: ");
  Serial.print(pressure, 0); // 整数のみを表示
  Serial.println(" Pa");

  Serial.print("Ralated Atmosphere: ");
  Serial.println(atm, 4); // 小数点以下4桁を表示

  Serial.print("Altitude: ");
  Serial.print(altitude, 2); // 小数点以下2桁を表示
  Serial.println(" m");

  Serial.println();

  delay(1000); // 1秒待って再度値を取得
}
```

**ステップ 4.** シリアルモニターを開き、温度、気圧値、相対気圧、標高などのセンサーのデータを受信してください。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/Barometer_Sensor.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/Barometer_Sensor.jpg" alt="pir" width={600} height="auto" /></p>

### Raspberry Piで遊ぶ

#### ハードウェア

- **ステップ 1.** 以下のアイテムを準備してください:

| Raspberry Pi | GrovePi_Plus | Grove-Barometer_Sensor-BMP180 |
|--------------|--------------|-------------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/45d_small.jpg" alt="pir" width={500} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP180)-p-1840.html)|

- **ステップ 2.** GrovePi_PlusをRaspberry Piに差し込みます。
- **ステップ 3.** Grove-Barometer_Sensor-BMP180をGrovePi_Plusの**I2C**ポートに接続します。
- **ステップ 4.** USBケーブルを使用してRaspberry PiをPCに接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/with_rpi.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/with_rpi.jpg" alt="pir" width={600} height="auto" /></p>

#### ソフトウェア

- **ステップ 1.** [ソフトウェアの設定](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)を参照して開発環境を構築してください。
- **ステップ 2.** Githubリポジトリをクローンしてください。

```bash
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- **ステップ 3.** 以下のコマンドを実行してこのセンサーを使用してください。

```bash
cd ~/GrovePi/Software/Python/grove_barometer_sensors/barometric_sensor_bmp180
python grove_i2c_barometic_sensor_example.py
```

```python
#!/usr/bin/python
import time
import smbus
import RPi.GPIO as GPIO
#import grovepi
from grove_i2c_barometic_sensor_BMP180 import BMP085

# ===========================================================================
# サンプルコード
# ===========================================================================

# BMP085を初期化し、STANDARDモード（デフォルト値）を使用
# bmp = BMP085(0x77, debug=True)
bmp = BMP085(0x77, 1)

# 別の動作モードを指定する場合は、以下のいずれかをコメント解除してください:
# bmp = BMP085(0x77, 0)  # ULTRALOWPOWERモード
# bmp = BMP085(0x77, 1)  # STANDARDモード
# bmp = BMP085(0x77, 2)  # HIRESモード
# bmp = BMP085(0x77, 3)  # ULTRAHIRESモード

rev = GPIO.RPI_REVISION
if rev == 2 or rev == 3:
  bus = smbus.SMBus(1)
else:
  bus = smbus.SMBus(0)

while True :
  temp = bmp.readTemperature()

# 現在の気圧レベルを読み取る
  pressure = bmp.readPressure()

# 推定平均海面気圧（1013.25 hPa）に基づいて標高を計算するには、以下のように関数を呼び出しますが、これはあまり正確ではありません
# altitude = bmp.readAltitude()

# より正確な標高を指定するには、正しい平均海面気圧レベルを入力してください。例えば、現在の気圧レベルが1023.50 hPaの場合は、102350を入力してください（小数点以下2桁を含む整数値）
  altitude = bmp.readAltitude(101560)

  print("Temperature: %.2f C" % temp)
  print("Pressure:    %.2f hPa" % (pressure / 100.0))
  print("Altitude:    %.2f m" % altitude)
  time.sleep(.1)

```


- **ステップ 4.** 結果は以下の通りです：
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/Grovepi_barometer_sensor_00.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/Grovepi_barometer_sensor_00.png" alt="pir" width={600} height="auto" /></p>



## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/res/Barometer_Sensor-BMP180-Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## リソース


- **[Eagle]**  [Grove - Barometer Sensor(BMP180) Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/res/Barometer_Sensor-BMP180-Eagle_File.zip)
- **[ライブラリ]**  [Barometer_Sensor ライブラリ](https://github.com/Seeed-Studio/Grove_Barometer_Sensor)
- **[データシート]**  [BMP180 データシート](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/res/BMP180.pdf)
- **[高度と気圧の関係]** 以下は海抜高度と気圧の関係を示す参考グラフです。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/Pressure_and_Altitude.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/Pressure_and_Altitude.jpg" alt="pir" width={600} height="auto" /></p>


## プロジェクト

**Blynk を使用した天気とセキュリティステーション**：Blynk と CC32000 LaunchPad を使用して、天気とセキュリティをリモートで監視します！

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/rei-vilo/weather-and-security-station-with-blynk-74608b/embed' width='350'></iframe>

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

SenseCAP [S2110 コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) と [S2100 データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) を使用することで、Grove を簡単に LoRaWAN® センサーに変えることができます。Seeed はプロトタイピングをサポートするだけでなく、SenseCAP シリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66 ハウジング、Bluetooth 設定、グローバル LoRaWAN® ネットワークとの互換性、内蔵 19 Ah バッテリー、そして強力なアプリサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして 8-in-1 気象ステーション用センサーが含まれています。次の成功する産業プロジェクトには、最新の SenseCAP S210x をお試しください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
