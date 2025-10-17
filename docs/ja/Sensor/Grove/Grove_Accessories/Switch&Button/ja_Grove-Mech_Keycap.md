---
description: Grove-Mech keycap
title: Grove-Mech keycap
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Mech_Keycap
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: Grove-Mech keycap
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 111020049
tags:
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/2.jpg)

Grove-Mech keycapは、内蔵LEDを備えたメカニカルスイッチです。255色のフルカラーRGB LEDにより、スイッチの状態を簡単に表示することができます。このキーキャップは非常に信頼性が高く、2,000万回の押下操作寿命を持っています。

このモジュールは、楽しいプロジェクトや製品を作るための興味深く安定したモジュールであることがわかるでしょう。実際、複数のGrove-Mechキーキャップを使用してメカニカルキーボードを作ることも可能です。

:::tip
2,000万回の操作は、負荷なしで1分間に300回の速度で連続して行うことができます。
:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Mech-Keycap.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

- プログラム可能なLED
- 信頼性の高いメカニカル構造  
- 非常に長い操作寿命

## 仕様

|項目|値|
|---|---|
|動作電圧|3V-5V|
|絶縁抵抗|100MΩ 最小|
|接触抵抗|200mΩ 最大|
|負荷なしの操作寿命|2,000万回|

## 応用例

- 自動車機器
- 視覚機器
- 家庭用電気製品
- 情報機器

## ハードウェア

### ピンマップ

![](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/pin_map.jpg)

### 回路図

![](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/schametic.jpg)

K1はボタンに接続されています。キーが開いているとき、**SIG1**はR2によってプルダウンされ、**SIG1**の出力は低くなります。  
ボタンが押されると、K1が閉じ、**SIG1**が**VCC**に接続され、**SIG1**の出力が高くなります。

:::note
このセクションでは回路図の一部のみを示しています。完全なドキュメントについては[Resources](#リソース)をご参照ください。
:::

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
上記で対応プラットフォームとして挙げられているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能なMCUプラットフォームに対してソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

:::note
Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove-Mech keycap |
|----------------|-------------|-------------------|
|![画像を入力してください](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![画像を入力してください](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![画像を入力してください](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-Mech-Keycap-p-3138.html" target="_blank">今すぐ購入</a>|

:::note
**1** USBケーブルを優しく差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

**2** Groveモジュールは購入時にGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

- **ステップ 1.** Grove-Mech keycapをGrove-Base Shieldのポート**D2**に接続します。

- **ステップ 2.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ 3.** USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/light1400-1050%C2%B7.jpg)

:::note
Grove Base Shieldがない場合は、以下のようにGrove-Mech keycapをSeeeduinoに直接接続することもできます。
:::

| Seeeduino     | Grove-Mech keycap       |
|---------------|-------------------------|
| 5V            | 赤                     |
| GND           | 黒                     |
| D3            | 白                     |
| D2            | 黄色                   |

#### ソフトウェア

- **ステップ 1.** [Adafruit_NeoPixel-master](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Adafruit_NeoPixel-master.zip)ライブラリをGithubからダウンロードします。

- **ステップ 2.** [Arduinoライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

- **ステップ 3.** Arduino IDEを開き、新しいファイルを作成して、以下のコードを新しいファイルにコピーします。

```cpp
/**
 * これはGrove - Mech Keycapの例です。
 * キーを押すたびにSK6805 RGB LEDの色が変わります。SK6805はNeoPixel互換のチップです。
 * 
 * クレジット:
 * Adafruit_NeoPixel - https://github.com/adafruit/Adafruit_NeoPixel/blob/master/COPYING
 */

#include <Adafruit_NeoPixel.h>

#define BUTTON_PIN   2    // ボタンに接続されたデジタルIOピン。このピンはプルアップ抵抗で駆動されるため、
                          // スイッチは一時的にピンをグランドに引き下げます。高 -> 低の変化でボタン押下ロジックが実行されます。

#define PIXEL_PIN    3    // NeoPixelsに接続されたデジタルIOピン。

#define PIXEL_COUNT 60

// パラメータ1 = ストリップ内のピクセル数、neopixel stickは8
// パラメータ2 = ピン番号（ほとんどが有効）
// パラメータ3 = ピクセルタイプフラグ、必要に応じて加算:
//   NEO_RGB     ピクセルはRGBビットストリーム用に配線されています
//   NEO_GRB     ピクセルはGRBビットストリーム用に配線されています（neopixel stickに適しています）
//   NEO_KHZ400  400 KHzビットストリーム（例: FLORAピクセル）
//   NEO_KHZ800  800 KHzビットストリーム（例: 高密度LEDストリップ）、neopixel stickに適しています
Adafruit_NeoPixel strip = Adafruit_NeoPixel(PIXEL_COUNT, PIXEL_PIN, NEO_GRB + NEO_KHZ800);

bool oldState = LOW;
uint8_t color_pos = 0;
int i=0;
int longpress=2000;
long timecheck;

void setup() {
  pinMode(BUTTON_PIN, INPUT_PULLUP);
  strip.begin();
  strip.clear();
  strip.show(); // すべてのピクセルを「オフ」に初期化
  Serial.begin(9600); 
}

void loop()
{
  
  // 現在のボタン状態を取得
  bool newState = digitalRead(BUTTON_PIN);

  // 状態が低から高に変化したか（ボタン押下）を確認
  if (newState == HIGH && oldState == LOW) {
      timecheck = millis(); 
    // ボタンのデバウンスのための短い遅延
    delay(20);
    // デバウンス後にボタンがまだ低いか確認
    newState = digitalRead(BUTTON_PIN);
    if (newState == HIGH){
      color_pos+=8;
      strip.setPixelColor(0, Wheel(color_pos));
      strip.show();
    }
  }

 if( millis()-timecheck > 300)
 {
   if (digitalRead(BUTTON_PIN)==HIGH)
   {
 if(millis()-timecheck > longpress)
 {
  while(digitalRead(BUTTON_PIN) == HIGH)
  {
  strip.setPixelColor(0,Wheel(color_pos));
  strip.show();
  delay(300);

  strip.setPixelColor(0,0,0,0);
  strip.show();
  delay(300);
  bool newState = digitalRead(BUTTON_PIN);
  }
  strip.setPixelColor(0,0,0,0);
  strip.show();
   timecheck = millis(); 
 }
  }
   }
 
  // 最後のボタン状態を古い状態に設定
  oldState = newState;
}

// 0から255の値を入力して色の値を取得
// 色はr - g - b - rに戻る遷移です
uint32_t Wheel(byte WheelPos) {
  WheelPos = 255 - WheelPos;
  if(WheelPos < 85) {
    return strip.Color(255 - WheelPos * 3, 0, WheelPos * 3);
  }
  if(WheelPos < 170) {
    WheelPos -= 85;
    return strip.Color(0, WheelPos * 3, 255 - WheelPos * 3);
  }
  WheelPos -= 170;
  return strip.Color(WheelPos * 3, 255 - WheelPos * 3, 0);
}

```

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)をご確認ください。

- **ステップ 5.** Grove-Mech Keycapを押すたびに、LEDの色が変わるのがわかります。ボタンを約2秒間押し続けると、呼吸ライト効果が表示されます。

### Raspberry Piで遊ぶ

#### ハードウェア

- **ステップ 1.** このプロジェクトで使用するもの:

| Raspberry Pi | Grove Base Hat for RasPi | Grove - Mech Keycap |
|--------------|---------------------------|---------------------|
|![画像を入力してください](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![画像を入力してください](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![画像を入力してください](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/thumbnail.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Mech-Keycap-p-3138.html)|

- **ステップ 2**. Grove Base Hat を Raspberry に接続します。
- **ステップ 3**. Grove - Mech Keycap を Base Hat の PWM ポート（ポート 12）に接続します。

:::note
PWM 機能のピンは以下のピン列の値のいずれかを使用し、対応するスロットにデバイスを接続してください。
:::

|ピン|スロット|
|---|---|
|18|D18|
|12|PWM|

- **ステップ 4**. Raspberry Pi を USB ケーブルを使用して PC に接続します。

![](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/Mech_Hat.jpg)

#### ソフトウェア

- **ステップ 1**. [Setting Software](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation) に従って開発環境を設定します。
- **ステップ 2**. grove.py ライブラリをクローンしてソースファイルをダウンロードします。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **ステップ 3**. 以下のコマンドを実行してコードを実行します。

```
cd grove.py/grove
sudo python grove_mech_keycap.py 12

```

:::caution
Unix には「セキュリティモデル」があります。通常のユーザーとしては、いくつかの操作が可能ですが、同じコンピュータ上の他の人のファイルにアクセスすることはできません。また、ユーザーとしてコンピュータが動作を停止する原因を作ることもできません。"/dev/mem" は GPIO を変更する以上の「いたずら」を許可するため、通常のユーザーから保護する必要があります。そのため、このコードを実行するには、コマンドラインで **sudo python grove_mech_keycap.py** を入力する必要があります。
:::

以下は grove_mech_keycap.py のコードです。

```python

import time
from grove.button import Button
from grove.factory import Factory

class GroveKeycap(object):
    def __init__(self, pin):
        # High = 押された状態
        self.__btn = Factory.getButton("GPIO-HIGH", pin)
        # 単一の WS2812 LED
        self.__led = Factory.getOneLed("WS2812-PWM", pin + 1)
        self.__on_event = None
        self.__btn.on_event(self, GroveKeycap.__handle_event)

    @property
    def on_event(self):
        return self.__on_event

    @on_event.setter
    def on_event(self, callback):
        if not callable(callback):
            return
        self.__on_event = callback

    def __handle_event(self, evt):
        # print("event index:{} event:{} pressed:{}".format(evt['index'], evt['code'], evt['presesed']))
        if callable(self.__on_event):
            self.__on_event(evt['index'], evt['code'], evt['time'])
            return

        self.__led.brightness = self.__led.MAX_BRIGHT
        event = evt['code']
        if event & Button.EV_SINGLE_CLICK:
            self.__led.light(True)
            print("LED をオンにします")
        elif event & Button.EV_DOUBLE_CLICK:
            self.__led.blink()
            print("LED を点滅させます")
        elif event & Button.EV_LONG_PRESS:
            self.__led.light(False)
            print("LED をオフにします")


Grove = GroveKeycap

def main():
    from grove.helper import SlotHelper
    sh = SlotHelper(SlotHelper.PWM)
    pin = sh.argv2pin()

    ledbtn = GroveKeycap(pin)

    # 以下の ''' ペアを削除して実験を開始してください
    '''
    # カスタマイズされたイベントハンドラを定義
    def cust_on_event(index, event, tm):
        print("コード {}, 時間 {}".format(event, tm))

    ledbtn.on_event = cust_on_event
    '''
    while True:
        time.sleep(1)


if __name__ == '__main__':
    main()


```

:::tip
すべてが正常に動作すれば、以下の結果が表示されます。キーキャップをシングルクリックすると「LED をオンにします」が表示され、ダブルクリックすると「LED を点滅させます」が表示されます。キーキャップを長押しすると「LED をオフにします」が表示されます。
:::

```python

pi@raspberrypi:~/grove.py/grove $ sudo python grove_mech_keycap.py 12
Hat Name = 'Grove Base Hat RPi'
LED をオンにします
LED をオンにします
LED を点滅させます
LED をオンにします
LED をオフにします
^CTraceback (most recent call last):
  File "grove_mech_keycap.py", line 98, in <module>
    main()
  File "grove_mech_keycap.py", line 94, in main
    time.sleep(1)
KeyboardInterrupt


```

このプログラムを終了するには、++ctrl+c++ を押すだけです。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Grove-Mech_Keycap_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove-Mech Keycap eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Grove-Mech_Keycap_eagle.zip)
- **[Zip]** [Adafruit_NeoPixel-master](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Adafruit_NeoPixel-master.zip)
- **[PDF]** [スイッチの製品概要](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/DIP_Mech_Key.pdf)

## プロジェクト

こちらはこの製品の紹介動画です。簡単なデモが含まれており、試してみることができます。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/wz1GzW2-VW4?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>