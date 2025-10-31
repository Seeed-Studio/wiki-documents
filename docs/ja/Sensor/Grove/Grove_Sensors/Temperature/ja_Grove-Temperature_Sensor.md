---
description: Grove - 温度センサー
title: Grove - 温度センサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Temperature_Sensor
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor/img/Temperature1.jpg" /></div>

Grove - 温度センサーは、[サーミスタ](http://www.legacydistribution.co.uk/downloads/NTC-thermistors/TTC03.pdf)を使用して周囲温度を検出します。サーミスタの抵抗は周囲温度が下がると増加します。この特性を利用して周囲温度を計算します。このセンサーの検出可能範囲は -40 ～ 125ºC で、精度は ±1.5ºC です。

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 仕様

---

* 電圧: 3.3 ~ 5V

* 25℃での最大定格電力: 300mW

* 無電力抵抗: 10 KΩ

* 動作温度範囲: -40 ~ +125 ℃

## デモンストレーション

---

### Arduino を使用する場合

以下はセンサーから温度情報を読み取る方法を示す例です。

1. 4ピンのGroveケーブルを使用して、モジュールを Grove - Basic Shield のアナログポート0に接続します。

2. Grove - Basic Shield を Arduino に差し込みます。
3. USBケーブルを使用して Arduino をPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor/img/Tempreture_Sensor_Connector.jpg" /></div>

4. 以下のコードをアップロードします。アップロード方法がわからない場合は[こちら](/ja/Upload_Code/)をクリックしてください。

```
/*
/* Grove - Temperature Sensor demo v1.0
*  このセンサーは環境温度を検出します。
*  このセンサーの信号を A0 に接続し、
*  シリアルモニターを使用して結果を取得します。
*  By: https://www.seeedstudio.com
*/
#include <math.h>
int a;
float temperature;
int B=3975;                  // サーミスタのB値
float resistance;

void setup()
{
    Serial.begin(9600);
}

void loop()
{
    a=analogRead(0);
    resistance=(float)(1023-a)*10000/a; // センサーの抵抗を取得
    temperature=1/(log(resistance/10000)/B+1/298.15)-273.15; // データシートを基に温度に変換
    delay(1000);
    Serial.print("現在の温度は ");
    Serial.println(temperature);
}
```

5. シリアルモニターを通じて読み取り値を確認できます。デフォルトの単位は摂氏度です。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor/img/Temperature_Sensor_Score.jpg" /></div>

参考として、このセンサーに使用されているサーミスタ TTC3A103*39H の抵抗曲線を以下に示します。温度が高くなるほど、抵抗は小さくなります。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor/img/Twig-Temperature-Sensor-value.jpg" /></div>

### [Raspberry Pi](/ja/GrovePi_Plus/ "GrovePi+") を使用する場合

1. Raspberry Pi と GrovePi または GrovePi+ を用意してください。

2. 開発環境の設定を完了している必要があります。設定がまだの場合は[こちら](/ja/GrovePi_Plus/#Introducing_the_GrovePi.2B)を参照してください。

3. 接続

* Groveケーブルを使用して、センサーを GrovePi のソケット D3 に接続します。

4. デモディレクトリに移動します:

```
cd yourpath/GrovePi/Software/Python/
```

* コードを確認するには

```
nano grove_temperature_sensor.py   # "Ctrl+x" で終了 #
```

```
import time
import grovepi

# Grove Temperature Sensor をアナログポート A0 に接続
# SIG,NC,VCC,GND
sensor = 0

while True:
try:
temp = grovepi.temp(sensor,'1.1')
print "temp =", temp
time.sleep(.5)

except KeyboardInterrupt:
break
except IOError:
print "Error"
```

5. デモを実行します。

```
sudo python grove_temperature_sensor.py
```

### Beaglebone Green を使用する場合

BBG 上でプログラムを編集するには、Cloud9 IDE を使用できます。

Cloud9 IDE に慣れるための簡単な演習として、BeagleBone の4つのユーザープログラム可能なLEDの1つを点滅させる簡単なアプリケーションを作成するのが良いスタートです。

Cloud9 IDE を初めて使用する場合は、[**こちら**](/ja/BeagleBone_Green/#getting-started)を参照してください。

**ステップ1:** 右上の "+" をクリックして新しいファイルを作成します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor/img/C9-create-tab.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor/img/C9_newfile.jpg" /></div>

**ステップ2:** 以下のコードを新しいタブにコピー＆ペーストします。

```
from Adafruit_I2C import Adafruit_I2C
import time

ADDR_ADC121 = 0x50

REG_ADDR_RESULT = 0x00
REG_ADDR_ALERT = 0x01
REG_ADDR_CONFIG = 0x02
REG_ADDR_LIMITL = 0x03
REG_ADDR_LIMITH = 0x04
REG_ADDR_HYST = 0x05
REG_ADDR_CONVL = 0x06
REG_ADDR_CONVH = 0x07

i2c = Adafruit_I2C(ADDR_ADC121)

class I2cAdc:
def __init__(self):
i2c.write8(REG_ADDR_CONFIG, 0x20)

def read_adc(self):
"ADCデータを読み取ります (0-4095)。"
data_list = i2c.readList(REG_ADDR_RESULT, 2)
        #print 'data list', data_list
data = ((data_list[0] & 0x0f) << 8 | data_list[1]) & 0xfff
return data

if __name__ == '__main__':
    # Grove - I2C ADC を Beaglebone Green の I2C Grove ポートに接続します。
adc = I2cAdc()
while True:
print 'センサー値 ', adc.read_adc()
time.sleep(.2)
```

**ステップ3:** ディスクアイコンをクリックしてファイルを "grove_i2c_adc.py" という名前で保存します。

**ステップ4:** 新しいファイルを作成し、以下のコードを新しいタブにコピーして .py 拡張子で保存します。

```
import time
import math
import grove_i2c_adc
import Adafruit_BBIO.GPIO as GPIO

BUZZER = "P9_22"            # GPIO P9_22
GPIO.setup(BUZZER, GPIO.OUT)

# 閾値: 28℃でブザーをオンにする
THRESHOLD_TEMPERATURE = 28

adc = grove_i2c_adc.I2cAdc()

#   read_temperature() メソッドの引数は、接続されている Grove Temperature Sensor のバージョンを定義します。
#   デフォルトは 'v1.2' です。例:
#       temp = read_temperature('v1.0')          # B 値 = 3975
#       temp = read_temperature('v1.1')          # B 値 = 4250
#       temp = read_temperature('v1.2')          # B 値 = 4250
def read_temperature(model = 'v1.2'):
"Grove Temperature Sensor から摂氏温度を読み取ります"
    # 各センサーリビジョンは異なるサーミスタを使用し、それぞれに固有の B 値定数があります。
if model == 'v1.2':
bValue = 4250  # センサー v1.2 はサーミスタ ??? を使用 (SeeedStudio が明確にするまで NCP18WF104F03RC と仮定)
elif model == 'v1.1':
bValue = 4250  # センサー v1.1 はサーミスタ NCP18WF104F03RC を使用
else:
bValue = 3975  # センサー v1.0 はサーミスタ TTC3A103*39H を使用

total_value = 0
for index in range(20):
sensor_value = adc.read_adc()
total_value += sensor_value
time.sleep(0.05)
average_value = float(total_value / 20)

    # ADCデータを Arduino プラットフォームのデータに変換します。
sensor_value_tmp = (float)(average_value / 4095 * 2.95 * 2 / 3.3 * 1023)
resistance = (float)(1023 - sensor_value_tmp) * 10000 / sensor_value_tmp
temperature = round((float)(1 / (math.log(resistance / 10000) / bValue + 1 / 298.15) - 273.15), 2)
return temperature

# 機能: 温度センサーがコード内で設定した閾値に達すると、ブザーが1秒間鳴ります。
# ハードウェア: Grove - I2C ADC, Grove - Temperature Sensor, Grove - Buzzer
# 注意: P9_22(UART2_RXD) を GPIO として使用します。
# Grove Buzzer を Beaglebone Green の UART Grove ポートに接続します。
# Grove - I2C ADC を Beaglebone Green の I2C Grove ポートに接続し、その後 Grove - Temperature Sensor を Grove - I2C ADC に接続します。
if __name__ == '__main__':

while True:
try:
            # Grove Temperature Sensor から摂氏温度を読み取ります。
temperature = read_temperature('v1.2')

            # 温度が設定した値に達した場合、ブザーが鳴ります。

print "温度 = ", temperature

except IOError:
print "エラー"
```

**ステップ5:** Grove Temperature センサーを Grove I2C ADC に接続し、さらに Grove I2C ソケットを BBG に接続します。

**ステップ6:** コードを実行します。  
ターミナルに温度値が2秒ごとに出力されることが確認できます。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor/res/Grove-Temperature_Sensor-Analog-v1.0_Source_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

---

* [Grove - Temperature Sensor v1.0 Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor/res/Grove-Temperature_Sensor-Analog-v1.0_Source_File.zip)

* [GitHub 上のデモコード](https://github.com/Seeed-Studio/Grove_Temperature_Sensor)

## プロジェクト

**環境キューブ！Sigfox を使用して地面の状態を把握する**: 必要なセンサーをすべて備えたキューブで、農業やモニタリングなど幅広い用途に適しています。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/dhairya-parikh/the-environment-cube-know-the-land-beneath-you-using-sigfox-952f29/embed' width='350'></iframe>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに合わせた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>