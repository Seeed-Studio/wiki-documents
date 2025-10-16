---
title: Grove - サーボ
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Grove-Servo/
slug: /ja/Grove-Servo
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-Servo/img/Grove—Servo.jpg)

Grove - サーボは、ギアとフィードバックシステムを備えたDCモーターです。これはロボットの駆動機構に使用されます。このモジュールはGroveファンのためのボーナス製品です。3線式サーボをGrove標準コネクタに調整しました。これにより、ジャンパーワイヤーの煩雑さを気にせず、通常のGroveモジュールのようにプラグアンドプレイで使用できます。

もしプロトタイプサーボをお探しの場合は、EMAX 9g ES08A 高感度ミニサーボをご覧ください。同じモデルであり、どちらも高品質で手頃な価格です。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Servo-p-1241.html)

特徴
---

* 小型モジュール
* Grove互換インターフェース
* 簡単に使用可能

仕様
---

<table cellSpacing={0} width="80%">
  <tbody>
    <tr>
      <th scope="col">項目</th>
      <th scope="col">最小</th>
      <th scope="col">典型</th>
      <th scope="col">最大</th>
      <th scope="col">単位</th>
    </tr>
    <tr>
      <th>動作電圧</th>
      <td>4.8</td>
      <td>5.0</td>
      <td>6.0</td>
      <td>V</td>
    </tr>
    <tr>
      <th>トルク</th>
      <td colSpan={3}>1.5/1.8</td>
      <td>Kg.cm</td>
    </tr>
    <tr>
      <th scope="row">スピード</th>
      <td colSpan={3}>0.12/0.16</td>
      <td>s/60°</td>
    </tr>
    <tr>
      <th scope="row">サイズ</th>
      <td colSpan={3}>32X11.5X24</td>
      <td>mm</td>
    </tr>
    <tr>
      <th scope="row">重量</th>
      <td colSpan={3}>8.5</td>
      <td>g</td>
    </tr>
  </tbody>
</table>

対応プラットフォーム
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能なMCUプラットフォームに対してソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

ここでは、簡単なデモを通じてこのGrove - Servoの動作を説明します。まず、以下のものを準備する必要があります：

| Seeeduino V4 | Grove - Servo | Base Shield |
|--------------|-------------|-----------------|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove-Servo/img/Grove%20Servo_s.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Servo-p-1241.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

サーボには3本のワイヤーがあります：電源、グラウンド、信号。電源ワイヤーは通常赤色で、Arduino/Seeeduinoボードの5Vピンに接続する必要があります。グラウンドワイヤーは通常黒または茶色で、Arduinoボードのグラウンドピンに接続する必要があります。信号ピンは通常黄色、オレンジまたは白色で、Arduinoボードの**D5**に接続する必要があります。デジタルポートは自由に変更できますが、デモコードの定義でポート番号を同時に変更することを忘れないでください。

* モジュールをBase Shieldの**D5**ポートに接続します。
* Grove-Base ShieldをArduinoに差し込みます。
* USBケーブルを使用してArduinoをPCに接続します。

#### ソフトウェア

* [Arduino Servo Library](https://arduino.cc/en/Reference/Servo)を使用して、サーボのシャフトを180度の範囲で前後に動かします。
* 次のパスでコードを直接開きます：**File -> Examples -> Servo -> Sweep**。

  ![](https://files.seeedstudio.com/wiki/Grove-Servo/img/library%20example.jpg)

```
/* Sweep
 by BARRAGAN <http://barraganstudio.com>
 This example code is in the public domain.

 modified 8 Nov 2013
 by Scott Fitzgerald
 https://arduino.cc/en/Tutorial/Sweep
*/

#include <Servo.h>

Servo myservo;  // サーボオブジェクトを作成してサーボを制御
// ほとんどのボードで12個のサーボオブジェクトを作成可能

int pos = 0;    // サーボ位置を格納する変数

void setup() {
  myservo.attach(5);  // ピン5にサーボオブジェクトを接続
}

void loop() {
  for (pos = 0; pos <= 180; pos += 1) { // 0度から180度まで移動
    // 1度ずつステップ
    myservo.write(pos);              // 'pos'変数の位置にサーボを移動
    delay(15);                       // サーボが位置に到達するまで15ms待機
  }
  for (pos = 180; pos >= 0; pos -= 1) { // 180度から0度まで移動
    myservo.write(pos);              // 'pos'変数の位置にサーボを移動
    delay(15);                       // サーボが位置に到達するまで15ms待機
  }
}
```

* スケッチをアップロードします。サーボがスイープする様子が確認できます。

### Codecraftで遊ぶ

#### ハードウェア

**ステップ1.** Grove - ServoをBase ShieldのD5ポートに接続します。

**ステップ2.** Base ShieldをSeeeduino/Arduinoに差し込みます。

**ステップ3.** USBケーブルを使用してSeeeduino/ArduinoをPCに接続します。

#### ソフトウェア

**ステップ1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

:::note
    初めてCodecraftを使用する場合は、[Codecraftを使用したArduinoのガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)も参照してください。
:::
**ステップ2.** 以下の画像のようにブロックをドラッグするか、このページの最後でダウンロード可能なcdcファイルを開きます。

![servo](https://files.seeedstudio.com/wiki/Grove-Servo/img/Servo.png)

プログラムをArduino/Seeeduinoにアップロードします。

:::tip
    コードのアップロードが完了すると、サーボがスイープする様子が確認できます。
:::

### Raspberry Piで遊ぶ (Grove Base Hat for Raspberry Piを使用)

#### ハードウェア

* **ステップ1**. このプロジェクトで使用するもの：

| Raspberry pi | Grove Base Hat for RasPi| Grove - Servo|
|--------------|-------------|-----------------|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove-Servo/img/Grove%20Servo_s.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Servo-p-1241.html)|

* **ステップ2**. Grove Base HatをRaspberryに差し込みます。
* **ステップ3**. Grove - ServoをBase Hatのポート12に接続します。
* **ステップ4**. USBケーブルを使用してRaspberry PiをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-Servo/img/Servo_Hat.jpg)

:::note
    ステップ3では、サーボモジュールを**任意のGPIOポート**に接続できますが、対応するポート番号でコマンドを変更することを忘れないでください。
:::

#### ソフトウェア

:::tip
     **Raspberry Pi OS >= Bullseye**を使用している場合は、**Python3**でのみこのコマンドラインを使用してください。
:::
* **ステップ1**. [ソフトウェアの設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation)に従って開発環境を構成します。
* **ステップ2**. grove.pyライブラリをクローンしてソースファイルをダウンロードします。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

* **ステップ3**. 以下のコマンドを実行してコードを実行します。

```
cd grove.py/grove
python3 grove_servo.py 12

```

以下はgrove_servo.pyコードです。

```python

import RPi.GPIO as IO
import sys
import time
from numpy import interp

IO.setwarnings(False)
IO.setmode(IO.BCM)

class GroveServo:
    MIN_DEGREE = 0
    MAX_DEGREE = 180
    INIT_DUTY = 2.5

    def __init__(self, channel):
        IO.setup(channel,IO.OUT)
        self.pwm = IO.PWM(channel,50)
        self.pwm.start(GroveServo.INIT_DUTY)

    def __del__(self):
        self.pwm.stop()

    def setAngle(self, angle):
        # 角度を0〜180の範囲から25〜125の範囲にマッピング
        angle = max(min(angle, GroveServo.MAX_DEGREE), GroveServo.MIN_DEGREE)
        tmp = interp(angle, [0, 180], [25, 125])
        self.pwm.ChangeDutyCycle(round(tmp/10.0, 1))

Grove = GroveServo

def main():
    if len(sys.argv) < 2:
        print('Usage: {} servo_channel'.format(sys.argv[0]))
        sys.exit(1)

    servo = GroveServo(int(sys.argv[1]))

    while True:
        for x in range(0, 180):
            print x, "度"
            servo.setAngle(x)
            time.sleep(0.05)
        for x in range(180, 0, -1):
            print x, "度"
            servo.setAngle(x)
            time.sleep(0.05)

if __name__ == '__main__':
    main()


```

:::tip
    すべてが正常に動作すれば、サーボがスイープする様子を見ることができます。
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_servo.py 12
0 degree
1 degree
2 degree
3 degree
4 degree
5 degree
6 degree
7 degree
8 degree
9 degree
10 degree
11 degree
12 degree
13 degree
14 degree
15 degree
16 degree
17 degree
18 degree
19 degree
20 degree
21 degree
^CTraceback (most recent call last):
  File "grove_servo.py", line 81, in <module>
    main()
  File "grove_servo.py", line 74, in main
    time.sleep(0.05)
KeyboardInterrupt


```

このプログラムを終了するには、++ctrl+c++ を押すだけです。

## リソース

* **[ドキュメント]** [RCサーボの理解](http://www.rchelicopterfun.com/rc-servos.html)
* **[ライブラリ]** [Arduinoチュートリアル - サーボライブラリ](https://www.arduino.cc/en/Reference/Servo)
* **[ライブラリ]** [CodeCraftコード](https://files.seeedstudio.com/wiki/Grove-Servo/res/Servo.zip)
* **[デモ]** [デジタル/アナログ時計 - Arduino + PaperCraft](https://www.instructables.com/id/DigitalAnalog-Clock-Arduino-PaperCraft/?ALLSTEPS)
* **[デモ]** [低コストホビーサーボXYテーブル](https://www.instructables.com/id/Low-Cost-Hobby-Servo-XY-Table/?ALLSTEPS)

## プロジェクト

**サーボモーター Grove モジュール**:

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/XNPn7AUmgqU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/8GTej6Lv8us" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
