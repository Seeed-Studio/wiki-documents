---
description: Grove-LED ボタン
title: Grove-LED ボタン
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-LED_Button
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: Grove-LED Button
category: Acator
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 111020044,111020045,111020046
tags: 2-リンク 
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/main.jpg)

Grove - LED ボタンは、Grove - Yellow Button、Grove - Blue LED Button、Grove - Red LED Buttonで構成されています。このボタンは安定しており、信頼性が高く、10万回の長寿命を誇ります。内蔵されたLEDにより、多くの興味深いプロジェクトに応用することができ、ボタンの状態を表示するためにLEDを使用するのは非常に便利です。高品質なNチャネルMOSFETを使用してLEDを制御し、高速なスイッチングと低消費電力を実現しています。要するに、素晴らしいボタンを探しているなら、これがぴったりです。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Yellow-LED-Button-p-3101.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/Y.png" height="48" width="300" /></a></p>
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Blue-LED-Button-p-3104.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/B.png" height="48" width="300" /></a></p>
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Red-LED-Button-p-3096.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/R.png"  height="48" width="300" /></a></p>

## バージョン

| 製品バージョン  | 変更点                                                                                               | リリース日 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove-LED ボタン | 初期リリース                                                                                         | 2018年6月      |

## バージョン

| 製品バージョン  | 変更点                                                                                               | リリース日 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove-LED ボタン | 初期リリース                                                                                         | 2018年6月      |

## バージョン

| 製品バージョン  | 変更点                                                                                               | リリース日 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove-LED ボタン | 初期リリース                                                                                         | 2018年6月      |

## 特徴

- 長寿命
- 簡単に使用可能
- Grove デジタルインターフェース

## 仕様

|項目|値|
|---|---|
|動作電圧|3.3V/5V|
|負荷なしでの動作寿命|10万回|
|LED定格電流|50mA|
|押下抵抗<sup>1</sup>|&lt;100mΩ|
|解放抵抗<sup>2</sup>|&gt;100MΩ|
|サイズ|長さ: 40mm 幅: 20mm 高さ: 13mm|
|重量|4.3g|
|パッケージサイズ|長さ: 140mm 幅: 90mm 高さ: 10mm|
|総重量|11g|

:::tip
1,2 - 抵抗を測定したい場合は、キーキャップを基板から取り外してください。そうしないと、キーキャップの真の抵抗値ではなく、基板の等価抵抗値が得られます。
:::

## ハードウェア概要

### ピンマップ

![](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/pin_map.jpg)

### 回路図

![](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/schematic.jpg)

**SIG1** は LED 制御信号です。デフォルト値は低であるため、NチャネルMOSFETはオフになり、LEDもオフになります。SIG1 が高になると、NチャネルMOSFETがオンになり、LEDが点灯します。

**SIG2** はボタンピンに接続されています。プルアップ抵抗があるため、**SIG2** のデフォルト値は高です。ボタンを押すと電圧が低くなり、**SIG2** が低になります。

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

## はじめに

:::tip
このセクションでは、Grove - Red LED Button を例として使用します。以下の内容は Yellow および Blue にも適用されます。
:::

### Arduino で遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield| Grove- Red LED Button |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/IMG_0068a.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-Red-LED-Button-p-3096.html" target="_blank">今すぐ購入</a>|

- **ステップ 1.** Grove- Red LED Button を Grove-Base Shield のポート **D3** に接続します。

- **ステップ 2.** Grove - Base Shield を Seeeduino に差し込みます。

- **ステップ 3.** USB ケーブルを使用して Seeeduino を PC に接続します。

![](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/red%20LED.jpg)

:::note
Grove Base Shield がない場合は、以下のように直接このモジュールを Seeeduino に接続することもできます。
:::

| Seeeduino     |  Grove- Red LED Button           |
|---------------|-------------------------|
| 5V            | 赤                     |
| GND           | 黒                     |
| SIG2          | 白                     |
| SIG1          | 黄色                   |

#### ソフトウェア

:::note
Arduino を初めて使用する場合は、開始する前に [Arduino の使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) を参照することを強くお勧めします。
:::

- **ステップ 1.** Arduino IDE を開き、新しいファイルを作成して、以下のコードをそのファイルにコピーします。

```cpp
#include "Arduino.h"

// 1: トグルモード, 2: フォローモード
#define LED_MODE   1

const int ledPin = 3;      // LED ピンの番号, D3
const int buttonPin = 4;    // プッシュボタンピンの番号, D4
const boolean breathMode = true;  // LED がブレスモードで点灯するかどうか

// 変数の初期化:
int ledState = LOW;         // 出力ピンの現在の状態
int ledFadeValue = 0;
int ledFadeStep = 5;
int ledFadeInterval = 20;   // ミリ秒
int buttonState;             // 入力ピンの現在の読み取り値
int lastButtonState = HIGH;   // 入力ピンの前回の読み取り値

unsigned long lastDebounceTime = 0;  // 出力ピンが最後にトグルされた時間
unsigned long debounceDelay = 50;    // デバウンス時間; 出力がちらつく場合は増加
unsigned long lastLedFadeTime = 0;

void setup() {
  pinMode(buttonPin, INPUT);
  pinMode(ledPin, OUTPUT);
  digitalWrite(ledPin, ledState);
}

void loop() {
  int reading = digitalRead(buttonPin);

  // スイッチがノイズや押下によって変化した場合:
  if (reading != lastButtonState) {
    // デバウンスタイマーをリセット
    lastDebounceTime = millis();
  }

  if ((millis() - lastDebounceTime) > debounceDelay) {
    // 読み取り値がデバウンス遅延時間より長く保持されている場合、
    // 実際の現在の状態として受け入れる:

    // ボタン状態が変化した場合:
    if (reading != buttonState) {
      buttonState = reading;

#if LED_MODE == 1
      if (buttonState == LOW) {  // ボタンが押された場合
          ledState = !ledState;
          ledFadeValue = 0;
          lastLedFadeTime = millis();
      }
#else
      if (buttonState == LOW) {  // ボタンが押された場合
        ledState = HIGH;
        ledFadeValue = 0;
        lastLedFadeTime = millis();
      } else {                   // ボタンが離された場合
        ledState = LOW;
      }
#endif
    }
  }

  // LED を設定:
  if (breathMode && ledState != LOW) {
    if (millis() - lastLedFadeTime > ledFadeInterval) {
      lastLedFadeTime = millis();
      analogWrite(ledPin, ledFadeValue);
      ledFadeValue += ledFadeStep;
      if (ledFadeValue > 255){
        ledFadeValue = 255 - ledFadeStep;
        ledFadeStep = -ledFadeStep;
      } else if (ledFadeValue < 0) {
        ledFadeValue = 0;
        ledFadeStep = -ledFadeStep;
      }
    }
  } else {
    digitalWrite(ledPin, ledState);
  }

  lastButtonState = reading;
}
```


:::tip
このデモでは、モード1（トグルモード）を選択しています。<mark>#define LED_MODE   1</mark> を <mark>#define LED_MODE   2</mark> に変更することで、フォローモードを使用することができます。
:::

- **ステップ 2.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ 3.** ボタンを押してみてください。LEDがフェードイン/フェードアウト効果で点灯するのが確認できます。

以下のようになります：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/result.gif"  /></p>

### Raspberry Piで遊ぶ

#### ハードウェア

- **ステップ 1**. このプロジェクトで使用するもの：

| Raspberry pi | Grove Base Hat for RasPi| Grove - Red LED Button|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/IMG_0068a.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Red-LED-Button-p-3096.html)|

- **ステップ 2**. Grove Base HatをRaspberryに接続します。
- **ステップ 3**. 赤色LEDボタンをBase HatのD5ポートに接続します。
- **ステップ 4**. Raspberry PiをUSBケーブルを介してPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/img/LED_Hat.jpg)

:::note
ステップ3では、LEDボタンを**任意のGPIOポート**に接続することができますが、対応するポート番号に合わせてコマンドを変更する必要があります。
:::

#### ソフトウェア

:::caution
**Raspberry Pi OS >= Bullseye**を使用している場合は、**Python3**のみで以下のコマンドラインを使用してください。
:::

- **ステップ 1**. [ソフトウェアの設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation)に従って開発環境を構成します。
- **ステップ 2**. grove.pyライブラリをクローンしてソースファイルをダウンロードします。

```
sudo pip3 install Seeed-grove.py
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **ステップ 3**. 以下のコマンドを実行してコードを実行します。

```
cd grove.py/grove
sudo python3 grove_ryb_led_button.py 5

```

以下はgrove_ryb_led_button.pyのコードです。

```python

import time
from grove.button import Button
from grove.factory import Factory

class GroveLedButton(object):
    def __init__(self, pin):
        # High = 点灯
        self.__led = Factory.getOneLed("GPIO-HIGH", pin)
        # Low = 押された状態
        self.__btn = Factory.getButton("GPIO-LOW", pin + 1)
        self.__on_event = None
        self.__btn.on_event(self, GroveLedButton.__handle_event)

    @property
    def on_event(self):
        return self.__on_event

    @on_event.setter
    def on_event(self, callback):
        if not callable(callback):
            return
        self.__on_event = callback

    def __handle_event(self, evt):
        # print("イベントインデックス:{} イベント:{} 押された状態:{}".format(evt['index'], evt['code'], evt['presesed']))
        if callable(self.__on_event):
            self.__on_event(evt['index'], evt['code'], evt['time'])
            return

        self.__led.brightness = self.__led.MAX_BRIGHT
        event = evt['code']
        if event & Button.EV_SINGLE_CLICK:
            self.__led.light(True)
            print("LEDを点灯")
        elif event & Button.EV_DOUBLE_CLICK:
            self.__led.blink()
            print("LEDを点滅")
        elif event & Button.EV_LONG_PRESS:
            self.__led.light(False)
            print("LEDを消灯")


Grove = GroveLedButton

def main():
    from grove.helper import SlotHelper
    sh = SlotHelper(SlotHelper.GPIO)
    pin = sh.argv2pin()

    ledbtn = GroveLedButton(pin)

    # 以下の'''を削除して実験を開始してください
    '''
    # カスタマイズされたイベントハンドラを定義
    def cust_on_event(index, event, tm):
        print("コード{}, 時間{}".format(event, tm))

    ledbtn.on_event = cust_on_event
    '''
    while True:
        time.sleep(1)


if __name__ == '__main__':
    main()


```

:::tip
すべてが正常に動作すれば、ボタンを押すとLEDが点灯し、長押しすると消灯します。ボタンをダブルクリックすると、LEDが点滅します。
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_ryb_led_button.py 5
Hat Name = 'Grove Base Hat RPi'
LEDを点灯
LEDを点灯
LEDを点滅
LEDを点灯
LEDを消灯
^CTraceback (most recent call last):
  File "grove_ryb_led_button.py", line 101, in <module>
    main()
  File "grove_ryb_led_button.py", line 97, in main
    time.sleep(1)
KeyboardInterrupt

```

このプログラムを終了するには、++ctrl+c++を押してください。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/res/Grove-Red_LED_Button.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove-LED ボタン Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Red_LED_Button/res/Grove-Red_LED_Button.zip)

## 技術サポート & 製品ディスカッション

<br />
弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>