---
description: Grove - 温度センサー V1.2
title: Grove - 温度センサー V1.2
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Temperature_Sensor_V1.2
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_View.jpg" /></div>

Grove - 温度センサーは、[サーミスタ](https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/res/NCP18WF104F03RC.pdf)を使用して周囲温度を検出します。サーミスタの抵抗値は周囲温度が低下すると増加します。この特性を利用して周囲温度を計算します。このセンサーの検出可能範囲は -40 ～ 125ºC で、精度は ±1.5ºC です。

注意: このWikiはGrove - 温度センサー V1.1にも対応しています。V1.0については[Grove - Temperature Sensor](https://wiki.seeedstudio.com/ja/Grove-Temperature_Sensor)をご参照ください。

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

## 産業用センサーへのアップグレード可能

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)および[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングを支援するだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

SenseCAP S210xシリーズの産業用センサーは、環境センシングのための即時使用可能な体験を提供します。空気質モニタリングのための高性能で堅牢なS2101ワイヤレス温湿度センサーをご参照ください。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、8-in-1気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトのために最新の[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)をお試しください。

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

---

- 電圧: 3.3 ~ 5V
- 無電力抵抗: 100 KΩ
- 抵抗許容差: ±1%
- 動作温度範囲: -40 ~ +125 ℃
- 公称B定数：4250 ~ 4299K

:::tip
Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## 対応プラットフォーム

-------------------

|Arduino|Raspberry|ArduPy|
|---|---|---|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/ArduPy-Logo.png" /></div>|

:::caution
上記で対応していると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

---
このセクションの後、Grove - Temperature Sensor V1.1/1.2を数ステップで動作させることができます。

:::note
Arduinoを初めて使用する場合は、開始前に[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を必ずご覧ください。
:::

### Arduinoで遊ぶ

#### ハードウェア

- **ステップ1.** 以下のものを準備してください：

| Seeeduino V4.2 | Base Shield|  Grove - Temperature Sensor |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_View_little.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html)|

- **ステップ2.** Grove - Temperature SensorをGrove-Base Shieldのポート**A0**に接続します。

- **ステップ3.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ4.** USBケーブルを使用してSeeeduinoをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/connect_Arduino.jpg" /></div>

:::note
Grove Base Shieldがない場合は、以下のようにGrove_Ultrasonic_RangerをSeeeduinoに直接接続することもできます。
:::

| Seeeduino       | Grove - Temperature Sensor |
|---------------|-------------------------|
| 5V           | 赤                     |
| GND           | 黒                   |
| 接続なし      | 白                   |
| A0            | 黄色                  |

#### ソフトウェア

- **ステップ1.** Arduino IDEを起動し、**File>New**をクリックして新しいページを開きます。以下のコードを新しいページにコピーしてアップロードしてください。コードのアップロード方法がわからない場合は、[How to upload code](https://wiki.seeedstudio.com/ja/Upload_Code/)をご確認ください。

```cpp
// Grove - Temperature Sensor V1.1/1.2のデモコード
// Loovee @ 2015-8-26

#include <math.h>

const int B = 4275000;            // サーミスタのB値
const int R0 = 100000;            // R0 = 100k
const int pinTempSensor = A0;     // Grove - Temperature SensorをA0に接続

#if defined(ARDUINO_ARCH_AVR)
#define debug  Serial
#elif defined(ARDUINO_ARCH_SAMD) ||  defined(ARDUINO_ARCH_SAM)
#define debug  SerialUSB
#else
#define debug  Serial
#endif

void setup()
{
    Serial.begin(9600);
}

void loop()
{
    int a = analogRead(pinTempSensor);

    float R = 1023.0/a-1.0;
    R = R0*R;

    float temperature = 1.0/(log(R/R0)/B+1/298.15)-273.15; // データシートを基に温度に変換

    Serial.print("temperature = ");
    Serial.println(temperature);

    delay(100);
}
```

**ステップ2.** Arduino IDEの**Serial Monitor**を開くには、**Tool-> Serial Monitor**をクリックするか、++ctrl+shift+m++キーを同時に押します。すべてが正常に動作していれば、温度が表示されます。

結果は以下のようになります：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_result.jpg" /></div>

### Raspberry Piで遊ぶ (Grove Base Hat for Raspberry Piを使用)

#### ハードウェア

- **ステップ1.** このプロジェクトで使用するもの：

| Raspberry pi | Grove Base Hat for RasPi| Grove - Temperature Sensor |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_View_little.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html)|

- **ステップ2.** Grove Base HatをRaspberryに差し込みます。
- **ステップ3.** 温度センサーをBase HatのポートA0に接続します。
- **ステップ4.** USBケーブルを使用してRaspberry PiをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Temperature_Hat.jpg" /></div>

:::note
ステップ3では、温度センサーを**任意のアナログポート**に接続することができますが、対応するポート番号に合わせてコマンドを変更する必要があります。
:::

#### ソフトウェア

:::caution
**Raspberry PiでRaspberrypi OS >= Bullseye**を使用している場合、このコマンドラインは**Python3のみ**で使用してください。
:::

- **ステップ 1**. [ソフトウェアの設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation)に従い、開発環境を構成します。
- **ステップ 2**. grove.pyライブラリをクローンしてソースファイルをダウンロードします。

```sh
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **ステップ 3**. 以下のコマンドを実行してコードを実行します。

```sh
cd grove.py/grove
python3 grove_temperature_sensor.py 0
```

以下はgrove_temperature_sensor.pyのコードです。

```python
import sys
import time
from grove.factory import Factory


def main():
    from grove.helper import SlotHelper
    sh = SlotHelper(SlotHelper.ADC)
    pin = sh.argv2pin()

    sensor = Factory.getTemper("NTC-ADC", pin)

    print('温度を検出中...')
    while True:
        print('{} 摂氏'.format(sensor.temperature))
        time.sleep(1)


if __name__ == '__main__':
    main()
```

:::tip
    すべてが正常に動作すれば、以下の結果が表示されます。
:::

```python
pi@raspberrypi:~/grove.py/grove $ python3 grove_temperature_sensor.py 0
Hat Name = 'Grove Base Hat RPi'
温度を検出中...
24.7473402633 摂氏
24.7473402633 摂氏
24.7473402633 摂氏
24.7112751977 摂氏
24.7112751977 摂氏
^CTraceback (most recent call last):
  File "grove_temperature_sensor.py", line 53, in <module>
    main()
  File "grove_temperature_sensor.py", line 49, in main
    time.sleep(1)
KeyboardInterrupt
```

このプログラムを終了するには、++ctrl+c++を押すだけです。

:::note
アナログポートの場合、シルクスクリーンのピン番号は**A1, A0**のようになっていますが、コマンドでは**0**や**1**というパラメータを使用します。これはデジタルポートと同じです。そのため、モジュールを正しいポートに接続してください。そうしないとピンの競合が発生する可能性があります。
:::

### Raspberry Piで遊ぶ (GrovePi_Plusを使用)

#### ハードウェア

- **ステップ 1.** 以下のアイテムを準備します：

| Raspberry Pi | GrovePi_Plus | Grove - Temperature Sensor |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_View_little.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html)|

- **ステップ 2.** GrovePi_PlusをRaspberry Piに接続します。

- **ステップ 3.** Grove - Temperature SensorをGrovePi_Plusの**A0**ポートに接続します。

- **ステップ 4.** Raspberry PiをUSBケーブルでPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/connect_pi.jpg" /></div>

#### ソフトウェア

- **ステップ 1.** [ソフトウェアの設定](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)に従い、開発環境を構成します。

- **ステップ 2.** [ファームウェアの更新](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/)に従い、GrovePiの最新ファームウェアを更新します。

:::tip
このWikiでは**~/GrovePi/**というパスを使用していますが、**/home/pi/Desktop/GrovePi**ではありません。ステップ2とステップ3で同じパスを使用する必要があります。

:::note
ファームウェアを更新することを強くお勧めします。そうしないと、一部のセンサーでエラーが発生する可能性があります。
:::

:::caution
**Raspberry Pi OS >= Bullseye**を使用している場合は、**Python3**のみでコマンドラインを使用する必要があります。
:::

- **ステップ 3.** GitHubリポジトリをクローンします。

```sh
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- **ステップ 4.** 以下のコマンドを実行して、Grove - Temperature Sensorを使用して温度を測定します。

```sh
cd ~/GrovePi/Software/Python
sudo python3 grove_temperature_sensor.py
```

以下はgrove_temperature_sensor.pyのコードです。

```python
# 注意:
#  このセンサーはサーミスタを使用して周囲温度を検出します。
#  周囲温度が下がるとサーミスタの抵抗値が増加します。
#
#  バージョン1.0、1.1、1.2の3つのリビジョンがあり、それぞれ異なるモデルのサーミスタを使用しています。
#  各サーミスタのデータシートには、計算式で使用される固有のNominal B-Constantが記載されています。
#
#  grovepi.temp()メソッドの第2引数は接続されているボードのバージョンを定義します。
#  デフォルトは'1.0'です。例:
#   temp = grovepi.temp(sensor)        # B値 = 3975
#   temp = grovepi.temp(sensor,'1.1')  # B値 = 4250
#   temp = grovepi.temp(sensor,'1.2')  # B値 = 4250

import time
import grovepi

# Grove Temperature SensorをアナログポートA0に接続
# SIG,NC,VCC,GND
sensor = 0

while True:
    try:
        temp = grovepi.temp(sensor,'1.2')
        print("温度 =", temp)
        time.sleep(.5)

    except KeyboardInterrupt:
        break
    except IOError:
        print ("エラー")

```

結果は以下のようになります：

```python
pi@raspberrypi:~/GrovePi/Software/Python $ sudo python3 grove_temperature_sensor.py

('温度 =', 25.28652137917777)
('温度 =', 25.28652137917777)
('温度 =', 25.28652137917777)
('温度 =', 25.28652137917777)
('温度 =', 25.368489566400115)
('温度 =', 25.61468397498203)
('温度 =', 27.43501590142614)
('温度 =', 27.85285590636829)
('温度 =', 27.18509952680688)
('温度 =', 26.852756540240193)

```

### Wio Terminal (ArduPy)で遊ぶ

#### ハードウェア

- **ステップ 1.** 以下のアイテムを準備します：

| Wio Terminal | Grove - Temperature Sensor |
|--------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_View_little.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.htmll)|

- **ステップ 2.** Grove - Temperature Sensor を **A0** ポートに接続します（Wio Terminal）。

- **ステップ 3.** USB Type-C ケーブルを使用して Wio Terminal を PC に接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/WT-temp.png" /></div>

#### ソフトウェア

- **ステップ 1.** [**ArduPy Getting Started**](https://wiki.seeedstudio.com/ja/ArduPy/) に従って、Wio Terminal 上で ArduPy 開発環境を構成します。

- **ステップ 2.** ArduPy ファームウェアが Wio Terminal にフラッシュされていることを確認してください。詳細については、[**こちら**](https://wiki.seeedstudio.com/ja/ArduPy/#ardupy-aip-cli-getting-started) を参照してください。

```sh
aip build
aip flash
```

- **ステップ 3.** 以下のコードをコピーして `ArduPy-temp.py` として保存します：

```python
from machine import Pin, ADC
from machine import LCD
from machine import Sprite
import time, math

raw = ADC(Pin(13))
lcd = LCD()
spr = Sprite(lcd) # バッファを作成
B = 4275 # サーミスタのB値
R0 = 100000 # R0 = 100k

def temp(reading):
    R = 1023.0 / reading - 1.0
    R = R0*R 
    temperature = 1.0/(math.log(R/R0)/B+1/298.15)-273.15 # データシートに基づいて温度に変換
    return temperature

def main():
    spr.createSprite(320, 240)
    while True:
        spr.setTextSize(2)
        spr.fillSprite(spr.color.BLACK)
        spr.setTextColor(lcd.color.ORANGE)
        spr.drawString("Temperature Reading", 45, 10)
        spr.drawFastHLine(40, 35, 240, lcd.color.DARKGREY)
        spr.setTextColor(lcd.color.WHITE)
        spr.drawString("- ", 20, 50)
        spr.drawFloat(temp(raw.read()), 3, 40,50)
        spr.drawString("C", 120, 50)
        spr.pushSprite(0,0)
        time.sleep_ms(500)

        print("Temperature: ", temp(raw.read()), "C")

if __name__ == "__main__":
    main()
```

- **ステップ 4.** `ArduPy-temp.py` をわかりやすい場所に保存します。以下のコマンドを実行し、`<YourPythonFilePath>` を `ArduPy-temp.py` の保存場所に置き換えてください。

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# 例:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-temp.py"
```

- **ステップ 5.** 以下のようにターミナルに温度値が表示され、Wio Terminal の LCD 画面にも表示されます。

```sh
ansonhe@Ansons-Macbook-Pro ~:aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-temp.py"
Positional argument (/dev/cu.usbmodem141101) takes precedence over --open.
Connected to ardupy
Temperature:  28.08603 C
Temperature:  28.50415 C
Temperature:  28.16953 C
Temperature:  28.25308 C
Temperature:  28.08603 C
Temperature:  28.16953 C
Temperature:  28.08603 C
Temperature:  28.16953 C
Temperature:  28.33671 C
Temperature:  28.16953 C
Temperature:  28.25308 C
```

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Ardupy-temp.png" /></div>

## 参考

---
温度計算アルゴリズムの詳細については、以下の画像を参照してください：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_Basic_Characteristics.jpg" /></div>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/res/Grove_-_Temperature_sensor_v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

---

- **[Zip]** [Grove - Temperature Sensor v1.1 Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/res/Grove_-_Temperature_sensor_v1.1.zip)
- **[PDF]** [Grove - Temperature Sensor v1.1.PDF](https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/res/Grove_-_Temperature_sensor_v1.1.pdf)
- **[PDF]** [温度センサー データシート](https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/res/NCP18WF104F03RC.pdf)

## プロジェクト

**温度センサー Grove モジュール**:

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/wjL7xOGqAqg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/vI9pkmiK8EM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できるだけスムーズな体験を提供できるよう、さまざまなサポートをご用意しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>