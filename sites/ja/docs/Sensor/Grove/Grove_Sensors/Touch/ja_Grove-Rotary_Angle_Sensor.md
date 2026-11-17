---
description: Grove - ロータリー角度センサ
title: Grove - ロータリー角度センサ
keywords:
  - Grove Grove_Sensors Touch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Rotary_Angle_Sensor
sku: 101020048, 101020017
last_update:
  date: 11/17/2026
  author: jianjing Huang
createdAt: '2023-01-19'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/ja/Grove-Rotary_Angle_Sensor/
---



![](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/rotary.jpg)

ロータリー角度センサは、その D1 コネクタから 0 〜 Vcc（Seeeduino の場合は 5V DC）のアナログ出力を生成します。D2 コネクタは使用しません。角度範囲は 300 度で、値は線形に変化します。抵抗値は 10k オームで、Arduino での使用に最適です。これは「ポテンショメータ」としても知られています。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border="0" /></a></p>

もう 1 つの製品 Grove - Rotary Angle Sensor(P) があります。「P」は何を意味するのでしょうか？この製品では「P」は「panel mount（パネル取り付け）」を意味します。これは Grove - Rotary Angle Sensor の姉妹バージョンです。Grove コネクタが背面に移動している点を除き、両者は同一であり、そのためスマートで配線のないヒューマンインターフェースデバイスとして簡単に使用できます。

<table>
  <tbody><tr>
      <td>
        <img src="https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/Grove-Rotary_Angle_Sensor-P-.jpg" />
      </td>
      <td>
        <img src="https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/GroveRotaryP_02.jpg" />
      </td>
    </tr>
  </tbody></table>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-P.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border="0" /></a></p>

## バージョン

| 製品バージョン                         | 変更点                               | リリース日     |
|-----------------------------------|--------------------------------------|---------------|
|Grove-Rotary Angle Sensor(P) V1.1  | 初版                                 | 2013年1月     |
|Grove-Rotary Angle Sensor V1.2     | 初版                                 | 2014年5月     |

## 特長

- Grove インターフェース
- 使いやすい
- Grove ベースモジュール

:::tip
Grove モジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) を参照してください。
:::

## 仕様

|項目|最小|標準|最大|単位|
|----|----|----|----|----|
|電圧|4.75|5.0|5.25|VDC|
|回転角度|0|/|300|度|
|寸法|/|19x19x30.1|/|mm|

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
上記でサポートされていると記載されているプラットフォームは、そのモジュールのソフトウェアまたは理論上の互換性を示すものです。ほとんどの場合、ソフトウェアライブラリやコード例は Arduino プラットフォーム向けのみ提供しています。存在しうるすべての MCU プラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

:::note
Arduino を扱うのが初めての場合は、作業を始める前に [Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) を必ずご覧になることを強くお勧めします。
:::

### Arduino で遊ぶ

**ハードウェア**

- **ステップ 1.** 以下のものを準備します：

| Seeeduino V4.2 | Base Shield|  Grove-Rotary Angle Sensor |Grove-LED|
|--------------|-------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/rorary_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/grove_led.jpg)|
|[今すぐ入手](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ入手](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-LED-p-767.html)|

- **ステップ 2.** Grove-Rotary Angle Sensor を Grove-Base Shield の **A0** ポートに接続します。
- **ステップ 3.** Grove-LED を Grove-Base Shield の **D3** ポートに接続します。
- **ステップ 4.** Grove - Base Shield を Seeeduino に挿し込みます。
- **ステップ 5.** Seeeduino を USB ケーブルで PC に接続します。

![](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/seeeduino_rotary.jpg)

:::note
Grove Base Shield がない場合は、以下のように Grove-Rotary Angle Sensor と Grove-Led を直接 Seeeduino に接続することもできます。Grove-Led は必ず PWM ポートに接続する必要があります。Seeeduino では D3,5,6,9,10,11 が PWM ポートです。
:::

| Seeeduino | Grove-Rotary Angle Sensor | Seeeduino | Grove-LED |
|-----------|---------------------------|-----------|-----------|
| 5V        | Red                       | 5V        | Red       |
| GND       | Black                     | GND       | Black     |
| NC        | White                     | NC        | White     |
| A0        | Yellow                    | D3        | Yellow    |

**ソフトウェア**

- **ステップ 1.** 下記のコードを Arduio IDE にコピーして Arduino にアップロードしてください。コードのアップロード方法がわからない場合は、[how to upload code](https://wiki.seeedstudio.com/ja/Upload_Code/) を確認してください。

```cpp
/*macro definitions of Rotary angle sensor and LED pin*/

#define ROTARY_ANGLE_SENSOR A0
#define LED 3  //the Grove - LED is connected to PWM pin D3 of Arduino
#define ADC_REF 5 //reference voltage of ADC is 5v.If the Vcc switch on the seeeduino
                    //board switches to 3V3, the ADC_REF should be 3.3
#define GROVE_VCC 5 //VCC of the grove interface is normally 5v
#define FULL_ANGLE 300 //full value of the rotary angle is 300 degrees

void setup()
{
    Serial.begin(9600);
    pinMode(ROTARY_ANGLE_SENSOR, INPUT);
    pinMode(LED,OUTPUT);   
}

void loop()
{   
    float voltage;
    int sensor_value = analogRead(ROTARY_ANGLE_SENSOR);
    voltage = (float)sensor_value*ADC_REF/1023;
    float degrees = (voltage*FULL_ANGLE)/GROVE_VCC;
    Serial.println("The angle between the mark and the starting position:");
    Serial.println(degrees);

    int brightness;
    brightness = map(degrees, 0, FULL_ANGLE, 0, 255);
    analogWrite(LED,brightness);
    delay(500);
}

```

- **ステップ 2.** Grove-Rotary Angle Sensor を調整すると、Grove-LED の明るさが変化するのがわかります。

### Codecraft で遊ぶ

#### ハードウェア

**ステップ 1.** Grove - Rotary Angle Sensor をポート A0 に、Grove - Red LED を Base Shield のポート D3 に接続します。

**ステップ 2.** Base Shield を Seeeduino/Arduino に挿し込みます。

**ステップ 3.** Seeeduino/Arduino を USB ケーブルで PC に接続します。

#### ソフトウェア

**ステップ 1.** [Codecraft](https://ide.chmakered.com/) を開き、Arduino サポートを追加して、メインプロシージャを作業エリアにドラッグします。

:::note
Codecraft を初めて使用する場合は、[Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/) も参照してください。
:::

**ステップ 2.** 下図のようにブロックをドラッグするか、このページの末尾からダウンロードできる cdc ファイルを開きます。

![cc](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/cc_Rotary_Angle_Sensor.png)

プログラムを Arduino/Seeeduino にアップロードします。

:::tip
コードのアップロードが完了すると、LED の明るさはセンサの角度に応じて変化し、角度の値はシリアルモニタに表示されます。
:::

### Raspberry Pi で遊ぶ（Raspberry Pi 用 Grove Base Hat 使用）

#### ハードウェア

- **ステップ 1**. このプロジェクトで使用するもの：

| Raspberry pi | Grove Base Hat for RasPi| Grove - Rotary Angle Sensor |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/rorary_s.jpg)|
|[今すぐ入手](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor--p-1242.html)|

- **ステップ 2**. Grove Base Hat を Raspberry に挿し込みます。
- **ステップ 3**. ロータリーセンサを Base Hat のポート A0 に接続します。
- **ステップ 4**. Raspberry Pi を USB ケーブルで PC に接続します。

![](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/Rotary_Hat.jpg)

:::note
ステップ 3 では、ロータリー角度センサを **任意のアナログポート** に接続できますが、必ず対応するポート番号に合わせてコマンドを変更してください。
:::

#### ソフトウェア

:::caution
**Raspberrypi OS >= Bullseye** を搭載した **Raspberry Pi** を使用している場合、このコマンドラインは **Python3 のみ** で使用する必要があります。
:::

- **Step 1**. 開発環境を構成するには、[Setting Software](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#インストール) に従います。
- **Step 2**. grove.py ライブラリをクローンしてソースファイルをダウンロードします。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Step 3**. 以下のコマンドを実行してコードを動かします。

```
cd grove.py/grove
python3 grove_rotary_angle_sensor.py 0

```

以下は grove_rotary_angle_sensor.py のコードです。

```python

import math
import sys
import time
from grove.adc import ADC


class GroveRotaryAngleSensor(ADC):
    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def value(self):
        return self.adc.read(self.channel)


Grove = GroveRotaryAngleSensor


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveRotaryAngleSensor(int(sys.argv[1]))

    while True:
        print('Rotary Value: {}'.format(sensor.value))
        time.sleep(.2)


if __name__ == '__main__':
    main()

```

:::tip
    すべてがうまくいけば、次の結果が表示されます
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_rotary_angle_sensor.py 0
Rotary Value: 932
Rotary Value: 931
Rotary Value: 931
Rotary Value: 931
Rotary Value: 933
Rotary Value: 931
Rotary Value: 742
Rotary Value: 666
Rotary Value: 666
Rotary Value: 549
Rotary Value: 520
Rotary Value: 499
Rotary Value: 430
Rotary Value: 430
Rotary Value: 321
Rotary Value: 286
Rotary Value: 205
Rotary Value: 127
Rotary Value: 88
Rotary Value: 0
Rotary Value: 0
Rotary Value: 0
Rotary Value: 0
Rotary Value: 0
Rotary Value: 0
Rotary Value: 0
^CTraceback (most recent call last):
  File "grove_rotary_angle_sensor.py", line 66, in <module>
    main()
  File "grove_rotary_angle_sensor.py", line 62, in main
    time.sleep(.2)
KeyboardInterrupt


```

++ctrl+c++ を押すだけでこのプログラムを終了できます。

:::note
アナログポートの場合、シルクスクリーンのピン番号は **A0, A1** のようになっていますが、コマンドではデジタルポートと同じようにパラメータ **0** と **1** を使用していることにお気づきかもしれません。そのため、モジュールを正しいポートに接続していることを必ず確認してください。そうしないとピンの競合が発生する可能性があります。
:::

### Raspberry Pi で遊ぶ（GrovePi_Plus 使用）

**ハードウェア**

- **Step 1.** 以下のものを準備します：

| Raspberry pi | GrovePi_Plus |  Grove-Rotary Angle Sensor |Grove-LED|
|--------------|-------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/rorary_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/grove_led.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-LED-p-767.html)|

- **Step 2.** GrovePi_Plus を Raspberry に接続します。
- **Step 3.** Grove-Rotary Angle Sensor を GrovePi_Plus の **A0** ポートに接続します。
- **Step 4.** Grove-LED を GrovePi_Plus の **D5** ポートに接続します。
- **Step 5.** Raspberry を USB ケーブルで PC に接続します。

![](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/rpi_rotary.jpg)

**ソフトウェア**

:::caution
**Raspberrypi OS >= Bullseye を搭載した Raspberry Pi** を使用している場合、このコマンドラインは **Python3 でのみ** 使用する必要があります。
:::

- **Step 1.** 開発環境を構成するには、[Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) に従います。
- **Step 2.** Github リポジトリを git clone します。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Step 3.** 以下のコマンドを実行して音量をモニタリングします。

```python
cd ~/GrovePi/Software/Python
python3 grove_rotary_angle_sensor.py
```

ここに grove_rotary_angle_sensor.py のコードがあります。

```python
import time
import grovepi

# Connect the Grove Rotary Angle Sensor to analog port A0
# SIG,NC,VCC,GND
potentiometer = 0

# Connect the LED to digital port D5
# SIG,NC,VCC,GND
led = 5

grovepi.pinMode(potentiometer,"INPUT")
grovepi.pinMode(led,"OUTPUT")
time.sleep(1)

# Reference voltage of ADC is 5v
adc_ref = 5

# Vcc of the grove interface is normally 5v
grove_vcc = 5

# Full value of the rotary angle is 300 degrees, as per it's specs (0 to 300)
full_angle = 300

while True:
    try:
        # Read sensor value from potentiometer
        sensor_value = grovepi.analogRead(potentiometer)

        # Calculate voltage
        voltage = round((float)(sensor_value) * adc_ref / 1023, 2)

        # Calculate rotation in degrees (0 to 300)
        degrees = round((voltage * full_angle) / grove_vcc, 2)

        # Calculate LED brightess (0 to 255) from degrees (0 to 300)
        brightness = int(degrees / full_angle * 255)

        # Give PWM output to LED
        grovepi.analogWrite(led,brightness)

        print("sensor_value = %d voltage = %.2f degrees = %.1f brightness = %d" %(sensor_value, voltage, degrees, brightness))
    except KeyboardInterrupt:
        grovepi.analogWrite(led,0)
        break
    except IOError:
        print ("Error")

```

- **Step 4.** Grove-Rotary Angle Sensor を調整すると、Grove-LED の明るさが変化するのがわかります。

### TI LaunchPad で遊ぶ

**ポテンショメータ（ロータリー角度センサ）の読み取り**

この例では、Grove ポテンショメータモジュールからのアナログ出力を読み取る方法を示します。この例では、いくつかの Grove モジュールを組み合わせて使用します。ポテンショメータのノブを回すことで、Grove 4 桁ディスプレイにアナログ読み取り値を表示します。

![](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/Angle_sensor.jpg)

```
/*
    Rotary Angle Sensor
    Demonstrates analog input by reading an analog sensor on J16 of the Grove Base BoosterPack. The speed of the red LED on the LaunchPad will change depending on the position of the potentiometer knob. This example will also display the analog reading value on the Grove 4-digital display.

    The circuit:
    * Potentiometer attached to pin 24 (J6 on Grove Base BoosterPack)
    * center pin of the potentiometer to the analog pin
    * one side pin (either one) to ground
    * the other side pin to VCC (3.3V)

    * Note: Because of unstable of the voltage, the value of the rotary angle sensor
            varies slightly from run to run even you don't touch it.  

    Created by Oliver Wang

    This example code is in the public domain.

    https://www.seeedstudio.com/wiki/GROVE_-_Starter_Kit_v1.1b#Grove_-_Rotary_Angle_Sensor
    */

#include "TM1637.h"

/* Macro Define */
#define CLK               39                  /* 4-digital display clock pin */
#define DIO               38                /* 4-digital display data pin */
#define ROTARY_ANGLE_P    24               /* pin of rotary angle sensor */

/* Global Variables */
TM1637 tm1637(CLK, DIO);                  /* 4-digital display object */
int analog_value = 0;                     /* variable to store the value coming from rotary angle sensor */

int8_t bits[4] = {0};                     /* array to store the single bits of the value */

/* the setup() method runs once, when the sketch starts */
void setup() {

    /* Initialize 4-digital display */
    tm1637.init();
    tm1637.set(BRIGHT_TYPICAL);

}

/* the loop() method runs over and over again */
void loop() {   

    analog_value = analogRead(ROTARY_ANGLE_P);      /* read the value from the sensor */
    memset(bits, 0, 4);                             /* reset array when we use it */
    for(int i = 3; i >= 0; i--) {
        /* get single bits of the analog value */
        bits[i] = analog_value % 10;
        analog_value = analog_value / 10;  
        tm1637.display(i, bits[i]);                 /* display by 4-digital display */
    }
    delay(100);
}
```

# Grove - Rotary Angle Sensor(P) v1.1 回路図ファイル

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/res/Grove%20%20-%20Rotary%20Angle%20Sensor(P)%20v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove-Rotary Angle Sensor v1.2 回路図ファイル

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/res/Grove%20-%20Rotary%20Angle%20Sensor%20v1.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Eagle&PDF]** [Grove-Rotary Angle Sensor v1.2 回路図ファイル](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/res/Grove%20-%20Rotary%20Angle%20Sensor%20v1.2.zip)
- **[Eagle&PDF]** [Grove - Rotary Angle Sensor(P) v1.1 回路図ファイル](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/res/Grove%20%20-%20Rotary%20Angle%20Sensor(P)%20v1.1.zip)
- **[Library]** [Rotary Angle Sensor 用 Github リポジトリ](https://github.com/Seeed-Studio/Grove_Rotary_Angle_Sensor)
- **[Codecraft]** [CDC ファイル](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/res/Grove_Rotary_Angle_Sensor_CDC_File.zip)

## プロジェクト

**Grove-Rotary Angle Sensor(P) を使用して Grove LED を制御する**：Arduino/Genuino 101 を使用して、Grove-Rotary Angle Sensor(P) を介して LED の明るさを制御します。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/user50338573/using-grove-rotary-angle-sensor-p-to-control-grove-led-725e32/embed' width='350'></iframe>

**ロータリーアングル Grove モジュール**:

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/31RaX7JGv5s" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/xx7hMoFQohY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
