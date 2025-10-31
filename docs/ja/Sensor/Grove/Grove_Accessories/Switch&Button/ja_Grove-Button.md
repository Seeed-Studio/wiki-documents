---
description: Grove - ボタン
title: Grove - ボタン
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Button
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Button/img/Button.jpg" /></div>

Grove - ボタンは、一時的なプッシュボタンです。このボタンは独立した「一時的なオン/オフ」ボタンを1つ備えています。「一時的」とは、ボタンを離すと自動的に元の位置に戻ることを意味します。ボタンが押されるとHIGH信号を出力し、離されるとLOW信号を出力します。シルク層に記載されている「Sig」は信号を表し、「NC」は全く使用されないことを意味します。このボタンには、写真に示されているように2つのバージョンがあります。唯一の違いはGroveソケットの方向です。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Button-p-766.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove_Button/image/300px-Get_One_Now_Banner.png" /></a></p>

## バージョン

| 製品バージョン              | 変更点                                                                                                                                                                                    | リリース日       |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|
| Grove-Button | 初期バージョン                                                                                                                                                                                    | 2010年11月25日   |

## 特徴

- 簡単に使用できる一時的なON/OFFボタン
- 標準的な4ピンGroveケーブルを使用

:::tip
Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## 仕様

| パラメータ             | 値/範囲        |
|-----------------------|----------------|
| 動作電圧             | 3.3/5V         |
| 電気的寿命           | 200,000サイクル |
| 動作力               | 100 ± 50gf     |
| 動作温度             | -25℃ ～ +70℃   |
| サイズ               | 20mmX20mm      |

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

- ステップ1. 以下のものを準備してください：

| Seeeduino V4.2 | Base Shield | Grove - Button |
|----------------|-------------|----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Button/img/button_s.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Button-p-766.html)|

- ステップ2. Grove-ButtonをGrove-Base ShieldのD2ポートに接続します。
- ステップ3. Grove - Base ShieldをSeeeduinoに差し込みます。
- ステップ4. USBケーブルを使ってSeeeduinoをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Button/img/seeeduino_button.jpg" /></div>

:::note
Grove Base Shieldを持っていない場合は、以下のようにGrove-ButtonをSeeeduinoに直接接続することもできます。
:::

| Seeeduino       | Grove-Button |
|-----------------|--------------|
| 5V              | 赤           |
| GND             | 黒           |
| 接続なし         | 白           |
| D2              | 黄           |

#### ソフトウェア

- ステップ1. 以下のコードをArduino IDEにコピーしてアップロードします。

```c
const int buttonPin = 2;     // プッシュボタンのピン番号
const int ledPin =  13;      // LEDのピン番号

// 変数を定義
int buttonState = 0;         // プッシュボタンの状態を読み取るための変数

void setup() {
    // LEDピンを出力として初期化
    pinMode(ledPin, OUTPUT);
    // プッシュボタンピンを入力として初期化
    pinMode(buttonPin, INPUT);
}

void loop(){
    // プッシュボタンの状態を読み取る
    buttonState = digitalRead(buttonPin);

    // プッシュボタンが押されているか確認
    // 押されている場合、buttonStateはHIGH
    if (buttonState == HIGH) {
        // LEDを点灯
        digitalWrite(ledPin, HIGH);
    }
    else {
        // LEDを消灯
        digitalWrite(ledPin, LOW);
    }
}
```

- ステップ2. ArduinoのオンボードPin13 LEDが点灯・消灯するのが確認できます。

### Codecraftで遊ぶ

#### ハードウェア

**ステップ1.** Grove - ButtonをBase ShieldのD2ポートに接続します。

**ステップ2.** Base ShieldをSeeeduino/Arduinoに差し込みます。

**ステップ3.** USBケーブルを使ってSeeeduino/ArduinoをPCに接続します。

#### ソフトウェア

**ステップ1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

:::note
Codecraftを初めて使用する場合は、[CodecraftでArduinoを使用するためのガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)も参照してください。
:::

**ステップ2.** 以下の画像のようにブロックをドラッグするか、このページの最後でダウンロードできるcdcファイルを開きます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Button/img/cc_Button.png" /></div>

プログラムをArduino/Seeeduinoにアップロードします。

tipsuccess
コードのアップロードが完了すると、ボタンを押したときにArduino/Seeeduinoボード上のLEDが点灯します。

### Raspberry Piで遊ぶ (Grove Base Hat for Raspberry Piを使用)

#### ハードウェア

- **ステップ1**. このプロジェクトで使用するもの：

| Raspberry Pi | Grove Base Hat for RasPi | Grove - Button |
|--------------|---------------------------|----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Button/img/button_s.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Button-p-766.html)|

- **ステップ2**. Grove Base HatをRaspberry Piに差し込みます。
- **ステップ3**. Grove - ButtonをBase HatのPWMポート(ポート12)に接続します。
- **ステップ4**. USBケーブルを使ってRaspberry PiをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Button/img/with_hat.jpg" /></div>

#### ソフトウェア

:::caution
**Raspberry Pi OS >= Bullseye**を使用している場合は、**Python3のみ**で以下のコマンドを実行してください。
:::

- **ステップ1**. [ソフトウェアの設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation)に従って開発環境を構成します。
- **ステップ2**. grove.pyライブラリをクローンしてソースファイルをダウンロードします。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **ステップ3**. 以下のコマンドを実行してコードを実行します。

```
cd grove.py/grove
python3 grove_button.py 12
```

Base Hatの別のポートにRed LEDを接続している場合は、**python grove_led.py 12**の代わりに以下のコマンドを実行してください。

```
python3 grove_button.py portnumber
```

以下はgrove_button.pyのコードです。

```python
import time
from grove.button import Button
from grove.factory import Factory

class GroveButton(object):
    def __init__(self, pin):
        # High = 押された状態
        self.__btn = Factory.getButton("GPIO-HIGH", pin)
        self.__last_time = time.time()
        self.__on_press = None
        self.__on_release = None
        self.__btn.on_event(self, GroveButton.__handle_event)

    @property
    def on_press(self):
        return self.__on_press

    @on_press.setter
    def on_press(self, callback):
        if not callable(callback):
            return
        self.__on_press = callback

    @property
    def on_release(self):
        return self.__on_release

    @on_release.setter
    def on_release(self, callback):
        if not callable(callback):
            return
        self.__on_release = callback

    def __handle_event(self, evt):
        dt, self.__last_time = evt["time"] - self.__last_time, evt["time"]
        # print("event index:{} event:{} pressed:{}".format(evt["index"], evt["code"], evt["pressed"]))
        if evt["code"] == Button.EV_LEVEL_CHANGED:
            if evt["pressed"]:
                if callable(self.__on_press):
                    self.__on_press(dt)
            else:
                if callable(self.__on_release):
                    self.__on_release(dt)

Grove = GroveButton

def main():
    from grove.helper import SlotHelper
    sh = SlotHelper(SlotHelper.GPIO)
    pin = sh.argv2pin()

    button = GroveButton(pin)

    def on_press(t):
        print('ボタンが押されました')
    def on_release(t):
        print("ボタンが離されました。押されていた時間: {0} 秒".format(round(t,6)))

    button.on_press = on_press
    button.on_release = on_release

    while True:
        time.sleep(1)

if __name__ == '__main__':
    main()

```

:::tip
すべてが正常に動作すれば、以下の結果が表示されます:
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_button.py 12
Hat Name = 'Grove Base Hat RPi'
Button is pressed
Button is pressed
Button is pressed
Button is pressed
Button is pressed
Button is pressed
Button is released, pressed for 0.002685 seconds
Button is pressed
Button is released, pressed for 0.219019 seconds
Button is pressed
Button is released, pressed for 0.001372 seconds
Button is pressed
Button is pressed
Button is released, pressed for 0.043143 seconds
Button is pressed
Button is released, pressed for 1.083292 seconds
^CTraceback (most recent call last):
  File "grove_button.py", line 103, in <module>
    main()
  File "grove_button.py", line 99, in main
    time.sleep(1)
KeyboardInterrupt


```

`ctrl`+`c`を押してこのプログラムを終了することができます。

### Raspberry Piで遊ぶ（GrovePi_Plusを使用）

#### ハードウェア

- ステップ1. 以下のものを準備してください:

| Raspberry pi | GrovePi_Plus | Grove - Button |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Button/img/button_s.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Button-p-766.html)|

- ステップ2. GrovePi_PlusをRaspberryに接続します。
- ステップ3. Grove-ButtonをGrovePi_PlusのD3ポートに接続します。
- ステップ4. USBケーブルを使用してRaspberryをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Button/img/rasp_button.jpg" /></div>

#### ソフトウェア

:::caution
**Raspberry PiでRaspberrypi OS >= Bullseye**を使用している場合は、**Python3**のみでこのコマンドラインを使用する必要があります。
:::

- ステップ1. [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)に従って開発環境を構築します。
- ステップ2. Githubリポジトリをクローンします。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- ステップ3. 以下のコマンドを実行します。

```
cd ~/GrovePi/Software/Python
python3 grove_button.py
```

以下はgrove_button.pyのコードです。

```python
import time
import grovepi

# Grove ButtonをデジタルポートD3に接続
# SIG,NC,VCC,GND
button = 3

grovepi.pinMode(button,"INPUT")

while True:
    try:
        print(grovepi.digitalRead(button))
        time.sleep(.5)

    except IOError:
        print ("Error")
```

- ステップ4. ボタンのオンとオフが確認できます。

```
pi@raspberrypi:~/GrovePi/Software/Python $ python3 grove_button.py
0
1
1
1
1
0
0
```

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Button/resources/Grove_-_Button_v1.0_Source_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Eagle&PDF]** [Grove-Button Eagle ファイル](https://files.seeedstudio.com/wiki/Grove_Button/resources/Grove_-_Button_v1.0_Source_File.zip)

- **[さらに読む]** [木製レーザーガン](https://www.instructables.com/id/DIY-a-Wooden-Laser-Gun-As-a-Xmas-Present-for-Your-/)

- **[Codecraft]** [CDC ファイル](https://files.seeedstudio.com/wiki/Grove_Button/res/Grove_Button_CDC_File.zip)

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Button/img/gun.jpg" /></div>

OVERWATCH にインスパイアされて、最近とてもクールな木製レーザーガンのおもちゃを作りました！

木製レーザーガンとガンターゲットは、Seeeduino Lotus という Arduino ボードをベースにしています。レーザーガンのレーザーエミッターは、レーザーパルスを発射してガンターゲットを「起動」するように制御されます。そして、ガンターゲットにはレーザーパルスを検出するための 3 つの光センサーがあります。とてもシンプルに見えますよね？このプロジェクトに興味がある方は、ぜひ自分やお子さんのために作ってみてください！クリスマスプレゼントとして 1 日かけて DIY する価値があります。

## プロジェクト

**Grove - ボタンと LED ストリングライトの紹介**: 初心者向けの例 - 初心者の方はこのプロジェクトで笑顔になるはずです - セルフィーを送ってください！

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/grove-introduction-in-a-button-led-string-light-f7e4d6/embed' width='350'></iframe>

**Grove ボタンを使用して Grove LED を制御する**: Grove ボタンを接続して Grove LED ソケットキットを制御する方法。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/user50338573/using-grove-button-to-control-grove-led-96d00b/embed' width='350'></iframe>

**ボタンと LED Grove モジュール**:

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/RCtsxwx4OaA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/78lVn_-oYaY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>