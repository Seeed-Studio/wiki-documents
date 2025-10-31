---
description: Grove - Rotary Angle Sensor
title: Grove - Rotary Angle Sensor
keywords:
- Grove Grove_Sensors Touch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Rotary_Angle_Sensor
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/rotary.jpg)

ロータリー角度センサーは、D1コネクタで0からVcc（Seeeduinoでは5V DC）の間のアナログ出力を生成します。D2コネクタは使用されません。角度範囲は300度で、値は線形に変化します。抵抗値は10kオームで、Arduinoでの使用に最適です。このセンサーは「ポテンショメータ」としても知られています。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border="0" /></a></p>

もう1つの製品、Grove - Rotary Angle Sensor(P)があります。「P」とは何を意味するのでしょうか？この製品では「P」は「パネルマウント」を意味します。これはGrove - Rotary Angle Sensorの姉妹版です。両者はほぼ同一ですが、Groveコネクタが背面に移動しており、すっきりとした配線不要のヒューマンインターフェースデバイスとして簡単に使用できます。

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

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/depot/grove-rotary-angle-sensorp-p-1242.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border="0" /></a></p>

## バージョン

| 製品バージョン                   | 変更点                              | リリース日 |
|-----------------------------------|--------------------------------------|---------------|
|Grove-Rotary Angle Sensor(P) V1.1  | 初版                                 | 2013年1月    |
|Grove-Rotary Angle Sensor V1.2     | 初版                                 | 2014年5月    |

## 特徴

- Groveインターフェース
- 簡単に使用可能
- Groveベースモジュール

:::tip
Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)を参照してください。
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
上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

:::note
Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

### Arduinoで遊ぶ

**ハードウェア**

- **ステップ 1.** 以下のものを準備してください：

| Seeeduino V4.2 | Base Shield| Grove-Rotary Angle Sensor |Grove-LED|
|--------------|-------------|-----------------|-----------------|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/rorary_s.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/grove_led.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-LED-p-767.html)|

- **ステップ 2.** Grove-Rotary Angle SensorをGrove-Base Shieldの**A0**ポートに接続します。
- **ステップ 3.** Grove-LEDをGrove-Base Shieldの**D3**ポートに接続します。
- **ステップ 4.** Grove - Base ShieldをSeeeduinoに差し込みます。
- **ステップ 5.** USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/seeeduino_rotary.jpg)

:::note
Grove Base Shieldがない場合は、以下のようにGrove-Rotary Angle SensorとGrove-LEDをSeeeduinoに直接接続することもできます。Grove-LEDはPWMポートに接続する必要があります。Seeeduinoの場合、D3, 5, 6, 9, 10, 11が該当します。
:::

| Seeeduino | Grove-Rotary Angle Sensor | Seeeduino | Grove-LED |
|-----------|---------------------------|-----------|-----------|
| 5V        | 赤                        | 5V        | 赤        |
| GND       | 黒                        | GND       | 黒        |
| NC        | 白                        | NC        | 白        |
| A0        | 黄                        | D3        | 黄        |

**ソフトウェア**

- **ステップ 1.** 以下のコードをArduino IDEにコピーしてArduinoにアップロードしてください。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)をご確認ください。

```cpp
/*ロータリー角度センサーとLEDピンのマクロ定義*/

#define ROTARY_ANGLE_SENSOR A0
#define LED 3  // Grove - LEDはArduinoのPWMピンD3に接続されています
#define ADC_REF 5 // ADCの基準電圧は5Vです。SeeeduinoボードのVccスイッチが3V3に切り替わっている場合、ADC_REFは3.3にする必要があります
#define GROVE_VCC 5 // GroveインターフェースのVCCは通常5Vです
#define FULL_ANGLE 300 // ロータリー角度の最大値は300度です

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
    Serial.println("マークと開始位置の間の角度:");
    Serial.println(degrees);

    int brightness;
    brightness = map(degrees, 0, FULL_ANGLE, 0, 255);
    analogWrite(LED,brightness);
    delay(500);
}
```

- **ステップ 2.** Grove-Rotary Angle Sensorを調整すると、Grove-LEDの明るさが変化するのが確認できます。

### Codecraftで遊ぶ

#### ハードウェア

**ステップ 1.** Grove - Rotary Angle SensorをポートA0に接続し、Grove - Red LEDをBase ShieldのポートD3に接続します。

**ステップ 2.** Base ShieldをSeeeduino/Arduinoに差し込みます。

**ステップ 3.** USBケーブルを使用してSeeeduino/ArduinoをPCに接続します。

#### ソフトウェア

**ステップ 1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

:::note
Codecraftを初めて使用する場合は、[ArduinoでCodecraftを使用するガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)もご覧ください。
:::

**ステップ 2.** 以下の画像のようにブロックをドラッグするか、このページの最後でダウンロードできるcdcファイルを開きます。

![cc](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/cc_Rotary_Angle_Sensor.png)

プログラムをArduino/Seeeduinoにアップロードします。

:::tip
コードのアップロードが完了すると、センサーの角度に応じてLEDの明るさが変化し、角度の値がシリアルモニターに表示されます。
:::

### Raspberry Piで遊ぶ (Grove Base Hat for Raspberry Piを使用)

#### ハードウェア

- **ステップ 1.** このプロジェクトで使用するもの：

| Raspberry pi | Grove Base Hat for RasPi| Grove - Rotary Angle Sensor |
|--------------|-------------|-----------------|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/rorary_s.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor--p-1242.html)|

- **ステップ 2.** Grove Base HatをRaspberryに差し込みます。
- **ステップ 3.** ロータリーセンサーをBase HatのポートA0に接続します。
- **ステップ 4.** USBケーブルを使用してRaspberry PiをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/Rotary_Hat.jpg)

:::note
ステップ3では、ロータリー角度センサーを**任意のアナログポート**に接続することができますが、対応するポート番号に合わせてコマンドを変更する必要があります。
:::

#### ソフトウェア

:::caution
**Raspberry Pi OS >= Bullseye**を使用している場合は、**Python3**のみでこのコマンドラインを使用する必要があります。
:::

- **ステップ 1.** [ソフトウェアの設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation)に従って開発環境を構成します。
- **ステップ 2.** grove.pyライブラリをクローンしてソースファイルをダウンロードします。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **ステップ 3**. 以下のコマンドを実行してコードを動かします。

```
cd grove.py/grove
python3 grove_rotary_angle_sensor.py 0

```

以下は `grove_rotary_angle_sensor.py` のコードです。

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
        print('使用方法: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveRotaryAngleSensor(int(sys.argv[1]))

    while True:
        print('回転値: {}'.format(sensor.value))
        time.sleep(.2)


if __name__ == '__main__':
    main()

```

:::tip
    すべてが正常に動作すれば、以下の結果が表示されます。
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_rotary_angle_sensor.py 0
回転値: 932
回転値: 931
回転値: 931
回転値: 931
回転値: 933
回転値: 931
回転値: 742
回転値: 666
回転値: 666
回転値: 549
回転値: 520
回転値: 499
回転値: 430
回転値: 430
回転値: 321
回転値: 286
回転値: 205
回転値: 127
回転値: 88
回転値: 0
回転値: 0
回転値: 0
回転値: 0
回転値: 0
回転値: 0
回転値: 0
^CTraceback (most recent call last):
  File "grove_rotary_angle_sensor.py", line 66, in <module>
    main()
  File "grove_rotary_angle_sensor.py", line 62, in main
    time.sleep(.2)
KeyboardInterrupt


```

このプログラムを終了するには、++ctrl+c++ を押してください。

:::note
アナログポートの場合、シルクスクリーンのピン番号は **A0, A1** のようになっていますが、コマンドでは **0** や **1** を使用します。これはデジタルポートと同じです。そのため、モジュールを正しいポートに接続してください。そうしないとピンの競合が発生する可能性があります。
:::

### Raspberry Pi で遊ぶ (GrovePi_Plus を使用)

**ハードウェア**

- **ステップ 1.** 以下のものを準備してください:

| Raspberry pi | GrovePi_Plus |  Grove-回転角センサー | Grove-LED |
|--------------|-------------|-----------------|-----------------|
|![画像を入力してください](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![画像を入力してください](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![画像を入力してください](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/rorary_s.jpg)|![画像を入力してください](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/grove_led.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-LED-p-767.html)|

- **ステップ 2.** GrovePi_Plus を Raspberry に接続します。
- **ステップ 3.** Grove-回転角センサーを GrovePi_Plus の **A0** ポートに接続します。
- **ステップ 4.** Grove-LED を GrovePi_Plus の **D5** ポートに接続します。
- **ステップ 5.** Raspberry を USB ケーブルで PC に接続します。

![](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/rpi_rotary.jpg)

**ソフトウェア**

:::caution
**Raspberry Pi OS >= Bullseye** を使用している場合は、**Python3** のみでこのコマンドラインを使用してください。
:::

- **ステップ 1.** [ソフトウェアの設定](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) に従って開発環境を構成します。
- **ステップ 2.** GitHub リポジトリをクローンします。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **ステップ 3.** 以下のコマンドを実行して音量を監視します。

```python
cd ~/GrovePi/Software/Python
python3 grove_rotary_angle_sensor.py
```

以下は `grove_rotary_angle_sensor.py` のコードです。

```python
import time
import grovepi

# Grove 回転角センサーをアナログポート A0 に接続
# SIG,NC,VCC,GND
potentiometer = 0

# LED をデジタルポート D5 に接続
# SIG,NC,VCC,GND
led = 5

grovepi.pinMode(potentiometer,"INPUT")
grovepi.pinMode(led,"OUTPUT")
time.sleep(1)

# ADC の基準電圧は 5V
adc_ref = 5

# Grove インターフェースの Vcc は通常 5V
grove_vcc = 5

# 回転角センサーの仕様に基づき、回転角の最大値は 300 度 (0 から 300)
full_angle = 300

while True:
    try:
        # ポテンショメータからセンサー値を読み取る
        sensor_value = grovepi.analogRead(potentiometer)

        # 電圧を計算
        voltage = round((float)(sensor_value) * adc_ref / 1023, 2)

        # 回転角を度数 (0 から 300) で計算
        degrees = round((voltage * full_angle) / grove_vcc, 2)

        # 回転角 (0 から 300) から LED の明るさ (0 から 255) を計算
        brightness = int(degrees / full_angle * 255)

        # LED に PWM 出力を与える
        grovepi.analogWrite(led,brightness)

        print("sensor_value = %d voltage = %.2f degrees = %.1f brightness = %d" %(sensor_value, voltage, degrees, brightness))
    except KeyboardInterrupt:
        grovepi.analogWrite(led,0)
        break
    except IOError:
        print ("エラー")

```

- **ステップ 4.** Grove-回転角センサーを調整すると、Grove-LED の明るさが変化するのがわかります。

### TI LaunchPad で遊ぶ

**ポテンショメータ (回転角センサー) の読み取り**

この例では、Grove ポテンショメータモジュールからのアナログ出力を読み取る方法を示します。この例では、いくつかの Grove モジュールを組み合わせて使用します！ポテンショメータのノブを回すことで、Grove 4 デジタルディスプレイにアナログ読み取り値を表示します。

![](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/img/Angle_sensor.jpg)

```
/*
    回転角センサー
    Grove Base BoosterPack の J16 にあるアナログセンサーを読み取ることでアナログ入力を示します。ポテンショメータのノブの位置に応じて、LaunchPad 上の赤色 LED の速度が変化します。この例では、アナログ読み取り値を Grove 4 デジタルディスプレイに表示します。

    回路:
    * ポテンショメータをピン 24 (Grove Base BoosterPack の J6) に接続
    * ポテンショメータの中央ピンをアナログピンに接続
    * 一方のサイドピンをグランドに接続
    * もう一方のサイドピンを VCC (3.3V) に接続

    * 注意: 電圧の不安定性により、回転角センサーの値は触らなくても実行ごとにわずかに変化します。

    作成者: Oliver Wang

    この例のコードはパブリックドメインにあります。

    https://www.seeedstudio.com/wiki/GROVE_-_Starter_Kit_v1.1b#Grove_-_Rotary_Angle_Sensor
    */

#include "TM1637.h"

/* マクロ定義 */
#define CLK               39                  /* 4 デジタルディスプレイのクロックピン */
#define DIO               38                  /* 4 デジタルディスプレイのデータピン */
#define ROTARY_ANGLE_P    24                  /* 回転角センサーのピン */

/* グローバル変数 */
TM1637 tm1637(CLK, DIO);                      /* 4 デジタルディスプレイオブジェクト */
int analog_value = 0;                         /* 回転角センサーからの値を格納する変数 */

int8_t bits[4] = {0};                         /* 値の各ビットを格納する配列 */

/* setup() メソッドはスケッチ開始時に 1 回実行されます */
void setup() {

    /* 4 デジタルディスプレイを初期化 */
    tm1637.init();
    tm1637.set(BRIGHT_TYPICAL);

}

/* loop() メソッドは繰り返し実行されます */
void loop() {   

    analog_value = analogRead(ROTARY_ANGLE_P);      /* センサーから値を読み取る */
    memset(bits, 0, 4);                             /* 使用時に配列をリセット */
    for(int i = 3; i >= 0; i--) {
        /* アナログ値の各ビットを取得 */
        bits[i] = analog_value % 10;
        analog_value = analog_value / 10;  
        tm1637.display(i, bits[i]);                 /* 4 デジタルディスプレイに表示 */
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
- **[ライブラリ]** [Rotary Angle SensorのGithubリポジトリ](https://github.com/Seeed-Studio/Grove_Rotary_Angle_Sensor)
- **[Codecraft]** [CDCファイル](https://files.seeedstudio.com/wiki/Grove-Rotary_Angle_Sensor/res/Grove_Rotary_Angle_Sensor_CDC_File.zip)

## プロジェクト

**Grove-Rotary Angle Sensor(P)を使用してGrove LEDを制御する**: Arduino/Genuino 101を使用して、Grove-Rotary Angle Sensor(P)を介してLEDの明るさを制御します。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/user50338573/using-grove-rotary-angle-sensor-p-to-control-grove-led-725e32/embed' width='350'></iframe>

**Rotary Angle Groveモジュール**:

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/31RaX7JGv5s" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/xx7hMoFQohY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験をスムーズにするために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>