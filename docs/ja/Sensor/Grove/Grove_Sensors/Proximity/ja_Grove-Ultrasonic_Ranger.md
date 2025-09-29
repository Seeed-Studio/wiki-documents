---
title: Grove - 超音波レンジャー
nointro:
keywords:
  - ドキュメント
  - ドキュサウラス
image: https://wiki.seeedstudio.com/ja/Grove-Ultrasonic_Ranger/
slug: /ja/Grove-Ultrasonic_Ranger
last_update:
  date: 05/15/2025
  author: gunengyu
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/V2.jpg" alt="pir" width={600} height="auto" /></p>

この Grove - 超音波レンジャーは、40kHzで動作する非接触型距離測定モジュールです。信号ピンを介して10uS以上のパルストリガー信号を提供すると、Grove_Ultrasonic_Ranger は40kHzのサイクルレベルを8サイクル発信し、エコーを検出します。エコー信号のパルス幅は測定された距離に比例します。以下の式で距離を計算できます：距離 = エコー信号のハイタイム * 音速 (340M/S) / 2。Grove_Ultrasonic_Ranger のトリガー信号とエコー信号は1つのSIGピンを共有します。

:::warning
 Grove-Ultrasonic-Ranger をホットプラグしないでください。センサーが損傷する可能性があります。測定エリアは0.5平方メートル以上で滑らかである必要があります。
:::
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

## バージョン

| 製品バージョン              | 変更点                                                                                                                                                                                    | リリース日       |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|
| Grove-Ultrasonic ranger V1.0 | 初期バージョン                                                                                                                                                                             | 2012年3月        |
| Grove-Ultrasonic ranger V2.0 | 以下の変更により低電圧メインボードでの電力安定性を向上： 1. コンデンサC14を追加 2. レイアウトを再設計してより整然としたものに 3. 3.3V電圧システムと互換性を持たせる | 2017年7月        |

## 仕様

| パラメータ           | 値/範囲           |
|:---------------------|:------------------|
| 動作電圧            | 3.2~5.2V          |
| 動作電流            | 8mA               |
| 超音波周波数        | 40kHz             |
| 測定範囲            | 2-350cm           |
| 分解能              | 1cm               |
| 出力                | PWM               |
| サイズ              | 50mm X 25mm X 16mm|
| 重量                | 13g               |
| 測定角度            | 15度              |
| 動作温度            | -10~60度C         |
| トリガー信号        | 10uS TTL          |
| エコー信号          | TTL               |

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) を参照してください。
:::

## 対応プラットフォーム

| Arduino | Raspberry | ArduPy |
|---------|-----------|--------|
|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg)|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg)|![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/ArduPy-Logo.png)|

:::note
    上記で対応可能と記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

:::note
    Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を必ずご覧ください。
:::

### Arduinoで遊ぶ

#### ハードウェア

- **ステップ 1.** 以下のものを準備してください：

| Seeeduino V4.2 | Base Shield|  Grove - Ultrasonic Ranger |
|--------------|-------------|-----------------|
|![画像説明](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![画像説明](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![画像説明](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Ultrasonic_small.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)|

- **ステップ 2.** Ultrasonic RangerをGrove-Base ShieldのポートD7に接続します。

- **ステップ 3.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ 4.** USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/arduino%20connection.jpg)

:::note
 Grove Base Shieldがない場合は、以下のようにGrove_Ultrasonic_RangerをSeeeduinoに直接接続することもできます。
:::

| Seeeduino       | Grove-Ultrasonic Ranger |
|---------------|-------------------------|
| 5V           | 赤                     |
| GND           | 黒                   |
| 未接続       | 白                   |
| D7            | 黄色                  |

#### ソフトウェア

- **ステップ 1.** Githubから[UltrasonicRangerライブラリ](https://github.com/Seeed-Studio/Seeed_Arduino_UltrasonicRanger/archive/master.zip)をダウンロードします。

- **ステップ 2.** Arduino用ライブラリのインストール方法については、[ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照してください。

- **ステップ 3.** 以下のコードをArduino IDEにコピーしてアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

```cpp
#include "Ultrasonic.h"

Ultrasonic ultrasonic(7);
void setup()
{
 Serial.begin(9600);
}
void loop()
{
 long RangeInInches;
 long RangeInCentimeters;

 Serial.println("前方の障害物までの距離は: ");
 RangeInInches = ultrasonic.MeasureInInches();
 Serial.print(RangeInInches);//0~157インチ
 Serial.println(" インチ");
 delay(250);

 RangeInCentimeters = ultrasonic.MeasureInCentimeters(); // 2つの測定間隔を保つ必要があります
 Serial.print(RangeInCentimeters);//0~400cm
 Serial.println(" cm");
 delay(250);
}
```

- **ステップ 4.** ターミナルに以下のように距離が表示されます。

```sh
前方の障害物までの距離は:
2 インチ
6 cm
前方の障害物までの距離は:
2 インチ
6 cm
前方の障害物までの距離は:
2 インチ
6 cm
```

### Codecraftで遊ぶ

#### ハードウェア

**ステップ 1.** Grove - Ultrasonic RangerをBase ShieldのポートD7に接続します。

**ステップ 2.** Base ShieldをSeeeduino/Arduinoに差し込みます。

**ステップ 3.** USBケーブルを使用してSeeeduino/ArduinoをPCに接続します。

#### ソフトウェア

**ステップ 1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

:::note
    Codecraftを初めて使用する場合は、[ArduinoでのCodecraftの使い方](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)も参照してください。
:::

**ステップ 2.** 以下の画像のようにブロックをドラッグするか、このページの最後でダウンロードできるcdcファイルを開きます。

![cc](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/cc_Ultrasonic_Ranger.png)

プログラムをArduino/Seeeduinoにアップロードします。

:::success
    コードのアップロードが完了すると、Serial Monitorに距離が表示されます。
:::

### Raspberry Piで遊ぶ (Grove Base Hat for Raspberry Piを使用)

#### ハードウェア

- **ステップ 1.** このプロジェクトで使用するもの：

| Raspberry pi | Grove Base Hat for RasPi| Grove - Ultrasonic Ranger |
|--------------|-------------|-----------------|
|![画像説明](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![画像説明](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![画像説明](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Ultrasonic_small.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)|

- **ステップ 2.** Grove Base HatをRaspberryに差し込みます。

- **ステップ 3.** Grove - Ultrasonic RangerをBase HatのポートD5に接続します。

- **ステップ 4.** USBケーブルを使用してRaspberry PiをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect2.jpg)

:::note
    ステップ3では、超音波レンジャーを**任意のGPIOポート**に接続できますが、対応するポート番号でコマンドを変更する必要があります。
:::

#### ソフトウェア

:::note
     **Raspberry Pi OS >= Bullseye**を使用している場合は、**Python3のみ**で以下のコマンドラインを使用してください。
:::

- **ステップ 1.** [ソフトウェアの設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation)に従って開発環境を構成します。

- **ステップ 2.** grove.pyライブラリをクローンしてソースファイルをダウンロードします。

```sh
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **ステップ 3.** 以下のコマンドを実行してコードを実行します。

```sh
cd grove.py/grove
python3 grove_ultrasonic_ranger.py 5 6
```

以下はgrove_ultrasonic_ranger.pyのコードです。

```python
import sys
import time
from grove.gpio import GPIO

usleep = lambda x: time.sleep(x / 1000000.0)

_TIMEOUT1 = 1000
_TIMEOUT2 = 10000

class GroveUltrasonicRanger(object):
    def __init__(self, pin):
        self.dio =GPIO(pin)

    def _get_distance(self):
        self.dio.dir(GPIO.OUT)
        self.dio.write(0)
        usleep(2)
        self.dio.write(1)
        usleep(10)
        self.dio.write(0)

        self.dio.dir(GPIO.IN)

        t0 = time.time()
        count = 0
        while count < _TIMEOUT1:
            if self.dio.read():
                break
            count += 1
        if count >= _TIMEOUT1:
            return None

        t1 = time.time()
        count = 0
        while count < _TIMEOUT2:
            if not self.dio.read():
                break
            count += 1
        if count >= _TIMEOUT2:
            return None

        t2 = time.time()

        dt = int((t1 - t0) * 1000000)
        if dt > 530:
            return None

        distance = ((t2 - t1) * 1000000 / 29 / 2)    # cm

        return distance

    def get_distance(self):
        while True:
            dist = self._get_distance()
            if dist:
                return dist

Grove = GroveUltrasonicRanger

def main():
    if len(sys.argv) < 2:
        print('使用法: {} pin_number'.format(sys.argv[0]))
        sys.exit(1)

    sonar = GroveUltrasonicRanger(int(sys.argv[1]))

    print('距離を検出中...')
    while True:
        print('{} cm'.format(sonar.get_distance()))
        time.sleep(1)

if __name__ == '__main__':
    main()
```

:::success
    すべてが正常に動作すれば、以下の結果が表示されるはずです。
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_ultrasonic_ranger.py 5 6
距離を検出中...
121.757901948 cm
246.894770655 cm
2.60205104433 cm
0.205533257846 cm
0.657706425108 cm
247.433267791 cm
122.485489681 cm
^CTraceback (most recent call last):
  File "grove_ultrasonic_ranger.py", line 110, in <module>
    main()
  File "grove_ultrasonic_ranger.py", line 107, in main
    time.sleep(1)
KeyboardInterrupt
```

このプログラムを終了するには、++ctrl+c++ を押すだけです。

### Raspberry Pi で遊ぶ (GrovePi_Plus を使用)

#### ハードウェア

- **ステップ 1.** 以下のものを準備してください：

| Raspberry Pi | GrovePi_Plus | Grove - Ultrasonic Ranger |
|--------------|-------------|-----------------|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Ultrasonic_small.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)|

- **ステップ 2.** GrovePi_Plus を Raspberry Pi に接続します。

- **ステップ 3.** Grove-Ultrasonic Ranger を GrovePi_Plus の **D4** ポートに接続します。

- **ステップ 4.** Raspberry Pi を USB ケーブルを介して PC に接続します。

![](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/pi%20connection.jpg)

#### ソフトウェア

:::note
     **Raspberry Pi OS >= Bullseye** を使用している場合は、**Python3** のみでこのコマンドラインを使用する必要があります。
:::

- **ステップ 1.** [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) に従って開発環境を構成します。

- **ステップ 2.** Github リポジトリをクローンします。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **ステップ 3.** 以下のコマンドを実行して、超音波距離センサーを使用して距離を測定します。

```
cd ~/GrovePi/Software/Python
python3 grove_ultrasonic.py
```

以下は grove_ultrasonic.py のコードです。

```python
# GrovePi + Grove Ultrasonic Ranger

from grovepi import *

# Grove Ultrasonic Ranger をデジタルポート D4 に接続
# SIG,NC,VCC,GND

ultrasonic_ranger = 4

while True:
    try:
        # 超音波センサーから距離値を読み取る
        print ultrasonicRead(ultrasonic_ranger)

    except TypeError:
        print "エラー"
    except IOError:
        print "エラー"
```

- **ステップ 4.** 以下のようにターミナルに距離が表示されます。

```python
pi@raspberrypi:~/GrovePi/Software/Python $ python3 grove_ultrasonic.py
9
9
9
9
9
9
9
9
9
9
9
```

### Wio Terminal (ArduPy) で遊ぶ

#### ハードウェア

- **ステップ 1.** 以下のものを準備してください：

| Wio Terminal | Grove - Ultrasonic Ranger |
|--------------|-----------------|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Ultrasonic_small.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html)|

- **ステップ 2.** Grove - Ultrasonic Ranger を Wio Terminal の **D0** ポートに接続します。

- **ステップ 3.** Wio Terminal を USB Type-C ケーブルを介して PC に接続します。

![](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/with-WT.jpg)

#### ソフトウェア

- **ステップ 1.** [**ArduPy Getting Started**](https://wiki.seeedstudio.com/ja/ArduPy/) に従って Wio Terminal 上で ArduPy 開発環境を構成します。

- **ステップ 2.** 以下のコマンドを使用して、ArduPy ファームウェアに超音波センサー ArduPy ライブラリが含まれていることを確認します。詳細については [**こちら**](https://wiki.seeedstudio.com/ja/ArduPy/#using-aip-to-include-other-ardupy-librariesfrom-arduino-libraries-example) を参照してください。

```sh
aip install Seeed-Studio/seeed-ardupy-ultrasonic-sensor
aip build
aip flash
```

- **ステップ 3.** 以下のコードをコピーして `ArduPy-ultrasonic.py` として保存します：

```python
from arduino import grove_ultra_ranger
from machine import LCD
from machine import Sprite
import time

Ultrasonic = grove_ultra_ranger(0)
lcd = LCD()
spr = Sprite(lcd) # バッファを作成

def main():
    spr.createSprite(320, 240)
    while True:
        spr.setTextSize(2)
        spr.fillSprite(spr.color.BLACK)
        spr.setTextColor(lcd.color.RED)
        spr.drawString("Ultrasonic Sensor", 55, 10)
        spr.drawFastHLine(40, 35, 240, lcd.color.DARKGREY)
        spr.setTextColor(lcd.color.WHITE)
        spr.drawString("- Centimeters: ", 20, 50)
        spr.drawString("- Inches: ", 20, 80)
        spr.drawNumber(Ultrasonic.cm, 200,50)
        time.sleep_ms(50) # データを再読み取りするために必要
        spr.drawNumber(Ultrasonic.inch, 130,80)
        spr.pushSprite(0,0)
        time.sleep_ms(500)

        print("前方の障害物までの距離は:", Ultrasonic.cm, 'センチメートル')
        print("前方の障害物までの距離は:", Ultrasonic.inch, 'インチ')

if __name__ == "__main__":
    main()
```

- **ステップ 4.** `ArduPy-ultrasonic.py` をわかりやすい場所に保存します。以下のコマンドを実行し、`<YourPythonFilePath>` を `ArduPy-ultrasonic.py` の保存場所に置き換えてください。

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# 例:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-ultrasonic.py"
```

- **ステップ 5.** 以下のようにターミナルに距離が表示され、Wio Terminal の LCD 画面にも表示されます。

```python
ansonhe@Ansons-Macbook-Pro ~:aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-ultrasonic.py"
Positional argument (/dev/cu.usbmodem1413101) takes precedence over --open.
Connected to ardupy
前方の障害物までの距離は: 3 センチメートル
前方の障害物までの距離は: 1 インチ
前方の障害物までの距離は: 7 センチメートル
前方の障害物までの距離は: 2 インチ
前方の障害物までの距離は: 6 センチメートル
前方の障害物までの距離は: 2 インチ
前方の障害物までの距離は: 6 センチメートル
前方の障害物までの距離は: 2 インチ
前方の障害物までの距離は: 4 センチメートル
前方の障害物までの距離は: 1 インチ
前方の障害物までの距離は: 7 センチメートル
前方の障害物までの距離は: 2 インチ
```

## よくある質問 (FAQs)

**Q1: Grove-Ultrasonicセンサーはどのように動作しますか？**

- A1: 信号ピンを通じて10uS以上のパルストリガー信号を提供すると、Grove_Ultrasonic_Rangerは40kHzのサイクルレベルを8サイクル発信し、エコーを検出します。エコー信号のパルス幅は測定された距離に比例します。以下がその計算式です：  
  距離 = エコー信号のハイタイム × 音速 (340M/S) / 2

**Q2: Grove-Ultrasonicセンサーは、他の超音波センサーのTrigピンとEchoピンに比べて、なぜ1つの信号ピンしかないのですか？**

- A2: Grove_Ultrasonic_RangerのTrig信号とEcho信号は、MCUを介して1つのSIGピンを共有しています。

**Q3: 複数の超音波センサーを1つのArduinoに接続できますか？**

- A3: はい、可能です。以下はその例です。1つのセンサーをD2に、もう1つをD3に接続します。

```cpp
#include "Ultrasonic.h"

Ultrasonic ultrasonic1(2);
Ultrasonic ultrasonic2(3);
void setup()
{
    Serial.begin(9600);
}
void loop()
{
    long RangeInCentimeters1;
    long RangeInCentimeters2;

    RangeInCentimeters1 = ultrasonic1.MeasureInCentimeters(); // 2つの測定間に間隔を設ける必要があります
    Serial.print(RangeInCentimeters1); // 0~400cm
    Serial.println(" cm");
    
    RangeInCentimeters2 = ultrasonic2.MeasureInCentimeters(); // 2つの測定間に間隔を設ける必要があります
    Serial.print(RangeInCentimeters2); // 0~400cm
    Serial.println(" cm");
    
    delay(250);
}
```

## リソース

- **[PDF]** [Wiki PDFをダウンロード](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/res/Grove-Ultrasonic_Ranger_WiKi.pdf)
- **[PDF]** [Grove_Ultrasonic Ranger 回路図](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/res/Grove_Ultrasonic%20Ranger%20Schematic.pdf)
- **[PDF]** [セラミック超音波センサー NU40C16T/R-1](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/res/NU40C16T-R-1.pdf)
- **[ライブラリ]** [Grove_Ultrasonic Ranger ライブラリ](https://github.com/Seeed-Studio/Seeed_Arduino_UltrasonicRanger/archive/master.zip)
- **[Codecraft]** [CDC ファイル](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/res/Grove_Ultrasonic_Ranger_CDC_File.zip)
- **[プロジェクト]** [The Color Helix](https://community.seeedstudio.com/project_detail.html?id=138)
- **[プロジェクト]** [Indoor Lightning Cloud](https://community.seeedstudio.com/project_detail.html?id=182)
- **[プロジェクト]** [自動水位コントローラー](https://community.seeedstudio.com/project_detail.html?id=241)
- **[例]** [距離を測定してLEDで表示する例](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/res/Example_Measure_distance_and_led_display.zip)
- **[例]** [距離を測定して表示する例](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/res/Example_Measure_and_display_the_distance.zip)

## プロジェクト

**Seeedの新オフィスで階段をハッキング**: オフィスの階段をインタラクティブなインスタレーションに変え、訪問者に「STAFF ONLY」というメッセージを伝えるクールな方法を実現。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/stairs-hackers/hacking-the-stairs-at-seeed-s-new-office-9ef30b/embed' width='350'></iframe>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートを提供しております。お客様の好みやニーズに合わせた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>