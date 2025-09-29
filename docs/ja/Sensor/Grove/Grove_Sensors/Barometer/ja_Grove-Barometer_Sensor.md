---
description: Grove - 気圧センサー
title: Grove - 気圧センサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Barometer_Sensor
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Grove-Barometer.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Grove-Barometer.jpg" alt="pir" width={600} height="auto" /></p>


この Grove - 気圧センサーは、Bosch BMP085 高精度チップを搭載しており、気圧と温度を検出します。300hPaから1100hPa、つまり海抜+9000mから-500mまでの範囲を広く測定でき、超高解像度モードでは0.03hPa（0.25m）の非常に高い精度を持っています。このチップは1.8Vから3.6Vの入力電圧のみを受け付けますが、外部回路を追加することで、このモジュールは3.3Vおよび5Vに対応します。そのため、Arduino/#SeeeduinoやSeeeduino Stalkerで改造なしに使用できます。このセンサーは、I2Cバスを介してマイクロコントローラーに直接接続するよう設計されています。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>
](https://www.seeedstudio.com/Grove-Barometer-Sensor-p-1199.html)

特徴
--------

-   デジタル2線式（I2C）インターフェース
-   広い気圧測定範囲
-   柔軟な電源電圧範囲
-   超低消費電力
-   低ノイズ測定
-   完全校正済み
-   温度測定機能を含む

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

応用例
-----------------

-   GPSナビゲーションの強化
-   屋内および屋外ナビゲーション
-   レジャーとスポーツ
-   天気予報
-   垂直速度指示（上昇/下降速度）

仕様
--------------

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
89
</td>
<td>
/
</td>
<td>
130
</td>
<td>
uA
</td>
</tr>
<tr align="center">
<th scope="row">
気圧範囲
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
高速I2Cデータ転送
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
20.4*24.3*9.7
</td>
<td>
mm
</td>
</tr>
<tr align="center">
<th scope="row">
重量
</th>
<td colspan="3">
2
</td>
<td>
g
</td>
</tr>
</table>

使用方法
-----

### Arduinoでの使用

気圧条件は、天気の変化を予測したり、海抜高度を推定するための基準の1つです。以下は、このGrove - 気圧センサーから気圧データを読み取る方法を示すデモです。

1. Groveケーブルを使用して、SeeeduinoまたはGrove - Base ShieldのIICポートに接続します。そして、USBケーブルを介してArduinoをPCに接続します。
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Grove-Barometer_Sensor_hard.JPG) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Grove-Barometer_Sensor_hard.JPG" alt="pir" width={600} height="auto" /></p>


2. ライブラリ [Barometer_Sensor Library](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/res/Barometer_Sensor.zip) をダウンロードし、Arduino IDEのライブラリフォルダに解凍します。パスは次の通りです： ..\\arduino-1.0.1\\libraries。

3. 新しいArduinoスケッチを作成し、以下のコードを貼り付けるか、次のパスからコードを直接開きます：File -> Example ->Barometer_Sensor->Barometer_Sensor。

```
/* Barometer demo V1.0
*  主にJim Lindblomのコードを基にしています
*  BMP085から気圧、高度、温度を取得します。
*  シリアルモニターに9600ボーで出力します。
*
*  By:https://www.seeedstudio.com
*/
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
    temperature = myBarometer.bmp085GetTemperature(myBarometer.bmp085ReadUT()); // 温度を取得します。bmp085ReadUTは最初に呼び出す必要があります
    pressure = myBarometer.bmp085GetPressure(myBarometer.bmp085ReadUP()); // 気圧を取得します
    altitude = myBarometer.calcAltitude(pressure); // 補正されていない計算 - メートル単位
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

    delay(1000); // 1秒待って再度値を取得します
}
```

4. シリアルモニターを開き、温度、気圧値、相対気圧、および高度を含むセンサーのデータを受信します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Barometer_Sensor.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Barometer_Sensor.jpg" alt="pir" width={600} height="auto" /></p>


以下は、海抜高度と気圧の関係をプロットした参考グラフです。
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Pressure_and_Altitude.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Pressure_and_Altitude.jpg" alt="pir" width={600} height="auto" /></p>


### Raspberry Piでの使用

1. Raspberry PiとGrovePiまたはGrovePi+を用意してください。

2. 開発環境の設定を完了している必要があります。設定がまだの場合は、[こちら](/ja/GrovePi_Plus/)を参照してください。

3. 接続

-   バロメーターセンサーを GrovePi の i2c ソケットに接続します。

4. デモのディレクトリに移動します:
```
cd yourpath/GrovePi/Software/Python/grove_barometer/adafruit/
```

-   コードを確認するには以下を実行します:

```
nano grove_i2c_barometic_sensor_example.py   # "Ctrl+x" で終了 #
```

```
#!/usr/bin/python

import smbus
import RPi.GPIO as GPIO
#import grovepi from grove_i2c_barometic_sensor import BMP085

# ===========================================================================
# サンプルコード
# ===========================================================================

# BMP085 を初期化し、STANDARD モード（デフォルト値）を使用
# bmp = BMP085(0x77, debug=True)
bmp = BMP085(0x77, 1)

# 別の動作モードを指定するには、以下のいずれかをコメント解除してください:
# bmp = BMP085(0x77, 0)  # ULTRALOWPOWER モード
# bmp = BMP085(0x77, 1)  # STANDARD モード
# bmp = BMP085(0x77, 2)  # HIRES モード
# bmp = BMP085(0x77, 3)  # ULTRAHIRES モード

rev = GPIO.RPI_REVISION
if rev == 2 or rev == 3:
    bus = smbus.SMBus(1)
else:
    bus = smbus.SMBus(0)

temp = bmp.readTemperature()

# 現在の気圧レベルを読み取る
pressure = bmp.readPressure()

# 推定平均海面気圧（1013.25 hPa）に基づいて高度を計算するには、
# 以下のように関数を呼び出します。ただし、これはあまり正確ではありません。
# altitude = bmp.readAltitude()

# より正確な高度を指定するには、正しい平均海面気圧レベルを入力します。
# 例えば、現在の気圧レベルが 1023.50 hPa の場合、102350 を入力します。
# 小数点以下 2 桁を整数値に含めます。
altitude = bmp.readAltitude(101560)

print "Temperature: %.2f C" % temp
print "Pressure:    %.2f hPa" % (pressure / 100.0)
print "Altitude:    %.2f m" % altitude
```

5. デモを実行します。
```
sudo python grove_i2c_barometic_sensor_example.py
```

6. 結果

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Grovepi_barometer_sensor_00.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/img/Grovepi_barometer_sensor_00.png" alt="pir" width={600} height="auto" /></p>



## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/res/Grove-Barometer_Sensor_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



リソース
---------

-   [Grove - バロメーターセンサー Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/res/Grove-Barometer_Sensor_Eagle_File.zip)
-   [バロメーターセンサーライブラリ](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/res/Barometer_Sensor.zip)
-   [バロメーターセンサーライブラリの Github リポジトリ](https://github.com/Seeed-Studio/Grove_Barometer_Sensor)
-   [BST-BMP085-DS000-06](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor/res/BST-BMP085-DS000-06.pdf)


<!-- この Markdown ファイルは https://www.seeedstudio.com/wiki/Grove_-_Barometer_Sensor から作成されました -->

## 技術サポートと製品ディスカッション
私たちの製品をお選びいただきありがとうございます！製品をご利用いただく際に、できるだけスムーズな体験をしていただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>