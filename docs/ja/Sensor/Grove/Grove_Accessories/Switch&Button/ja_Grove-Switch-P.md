---
description: Grove - スイッチ(P)
title: Grove - スイッチ(P)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Switch-P
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/switch_p.jpg)

この Grove – スイッチは、ミニ SPDT スライドスイッチで、「ON/OFF」の状況に最適です。高品質な構造を持つ信頼性の高いスイッチであり、私たちの多くのボードで採用されています。Grove プロトタイピングシステムのためにいくつかストックしておくことをお勧めします。

「P」とは何を意味しますか？この製品における「P」は「パネルマウント」を意味します。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Switch(P)-p-1252.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border="0" /></a></p>

## バージョン

| 製品バージョン              | 変更点                                   | リリース日       |
|------------------------------|-------------------------------------------|------------------|
|Grove-Switch(P) V1.0          | 初期リリース                             | 2012年7月        |

## 特徴

- Grove インターフェース
- 簡単に使用可能
- 基本的な Grove 要素

:::tip
Grove モジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) を参照してください。
:::

## 仕様

| パラメータ             | 値/範囲         |
|-----------------------|----------------|
| 動作電圧             | 3.3/5V         |
| 電気的寿命           | 10,000 サイクル |
| 動作力               | 200 ± 50gf     |
| 動作温度             | -20℃ ～ +80℃   |
| サイズ               | 20mmX20mm      |

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduino プラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能な MCU プラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

:::note
Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

### Arduinoで遊ぶ

**ハードウェア**

- **ステップ1.** 以下のものを準備してください：

| Seeeduino V4.2 | Base Shield|  Grove-Switch(P) |Grove - Purple LED (3mm)|
|--------------|-------------|-----------------|-----------------|
|![画像説明をここに入力](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/SwitchP_s.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/grove_led_s.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Switch(P)-p-1252.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Purple-LED-%283mm%29-p-1143.html)|

- **ステップ2.** Grove-Switch(P)をGrove-Base Shieldの**D2**ポートに接続します。
- **ステップ3.** Grove-LEDをGrove-Base Shieldの**D6**ポートに接続します。
- **ステップ4.** Grove - Base ShieldをSeeeduinoに差し込みます。
- **ステップ5.** USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/seeeduino_switch_led.jpg)

:::note
Grove Base Shieldがない場合でも、以下のようにGrove-Switch(P)とGrove - Purple LED (3mm)をSeeeduinoに直接接続することができます。
:::

| Seeeduino | Grove-Switch(P) | Seeeduino | Grove - Purple LED (3mm) |
|-----------|-----------------|-----------|--------------------------|
| 5V        | 赤              | 5V        | 赤                       |
| GND       | 黒              | GND       | 黒                       |
| NC        | 白              | NC        | 白                       |
| D2        | 黄              | D6        | 黄                       |

**ソフトウェア**

- **ステップ1.** 以下のコードをArduino IDEにコピーしてArduinoにアップロードしてください。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

```
const int switchPin = 2;     // スイッチピンの番号
const int ledPin =  6;      // LEDピンの番号

int switchState = 0;         // スイッチの状態を読み取るための変数

void setup() {
    // LEDピンを出力として初期化
    pinMode(ledPin, OUTPUT);
    // スイッチピンを入力として初期化
    pinMode(switchPin, INPUT);
    Serial.begin(9600);
}

void loop(){
    // スイッチの状態を読み取る
    switchState = digitalRead(switchPin);

    if (switchState == HIGH) {
        // LEDを点灯
        digitalWrite(ledPin, HIGH);
        Serial.println("スイッチがオンです！");
    }
    else {
        // LEDを消灯
        digitalWrite(ledPin, LOW);
        Serial.println("スイッチがオフです");
    }
}

```

- **ステップ2.** スイッチをオンにするとLEDが点灯します。また、以下のようなシリアル出力が確認できます。

```
スイッチがオンです！
スイッチがオンです！
スイッチがオンです！
```

### Raspberry Piで遊ぶ (Grove Base Hat for Raspberry Piを使用)

#### ハードウェア

- **ステップ1.** このプロジェクトで使用するもの：

| Raspberry pi | Grove Base Hat for RasPi| Grove - Switch P |
|--------------|-------------|-----------------|
|![画像説明をここに入力](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/SwitchP_s.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Switch(P)-p-1252.html)|

- **ステップ2.** Grove Base HatをRaspberryに差し込みます。
- **ステップ3.** スイッチをBase Hatのポート12に接続します。
- **ステップ4.** USBケーブルを使用してRaspberry PiをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/Switch_Hat.jpg)

:::note
ステップ3では、スイッチを**任意のGPIOポート**に接続することもできますが、その場合は対応するポート番号に合わせてコマンドを変更してください。
:::

#### ソフトウェア

:::caution
**Raspberry Pi OS >= Bullseye**を使用している場合は、**Python3**のみで以下のコマンドラインを使用してください。
:::

- **ステップ1.** [ソフトウェアの設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation)に従って開発環境を構成します。
- **ステップ2.** grove.pyライブラリをクローンしてソースファイルをダウンロードします。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **ステップ3.** 以下のコマンドを実行してコードを実行します。

```
cd grove.py/grove
python3 grove_switch.py 12

```

以下はgrove_switch.pyのコードです。

```python
import time
from grove.gpio import GPIO


class GroveTiltSwitch(GPIO):
    def __init__(self, pin):
        super(GroveTiltSwitch, self).__init__(pin, GPIO.IN)

    @property
    def state(self):
        return super(GroveTiltSwitch, self).read()


Grove = GroveTiltSwitch


def main():
    import sys

    if len(sys.argv) < 2:
        print('使用方法: {} pin'.format(sys.argv[0]))
        sys.exit(1)

    swicth = GroveTiltSwitch(int(sys.argv[1]))


    while True:
        if swicth.state is 1:
            print("オン")
        else:
            print("オフ")
        time.sleep(1)


if __name__ == '__main__':
    main()

```

:::tip
すべてが正常に動作すれば、以下のような結果が表示されます。
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_switch.py 12
オフ
オフ
オン
オフ
オン
オン
オフ
^CTraceback (most recent call last):
  File "grove_switch.py", line 70, in <module>
    main()
  File "grove_switch.py", line 66, in main
    time.sleep(1)
KeyboardInterrupt

```

このプログラムを終了するには、++ctrl+c++を押すだけです。

### Raspberry Piで遊ぶ (GrovePi_Plusを使用)

**ハードウェア**

- **ステップ1.** 以下のものを準備してください：

| Raspberry pi | GrovePi_Plus | Grove-Switch(P) |
|--------------|-------------|-----------------|
|![画像説明をここに入力](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/SwitchP_s.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Switch(P)-p-1252.html)|

- **ステップ 2.** GrovePi_Plus を Raspberry に接続します。
- **ステップ 3.** Grove-Switch(P) を GrovePi_Plus の **D3** ポートに接続します。
- **ステップ 4.** Raspberry を USBケーブルを介して PC に接続します。

![](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/rpi_switch.jpg)

**ソフトウェア**

:::caution
**Raspberry Pi OS >= Bullseye** を使用している場合は、**Python3** のみで以下のコマンドラインを使用してください。
:::

- **ステップ 1.** [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) に従って開発環境を設定します。
- **ステップ 2.** GitHub リポジトリをクローンします。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- **ステップ 3.** 以下のコマンドを実行してスイッチの状態を監視します。

```python
cd ~/GrovePi/Software/Python
python3 grove_switch.py
```

以下は grove_switch.py のコードです。

```python
import time
import grovepi

# Grove スイッチをデジタルポート D3 に接続
# SIG,NC,VCC,GND
switch = 3

grovepi.pinMode(switch,"INPUT")

while True:
    try:
        print(grovepi.digitalRead(switch))
        time.sleep(.5)

    except IOError:
        print ("Error")
```

- **ステップ 4.** 以下のようにスイッチの状態が表示されます。

```python
pi@raspberrypi:~/GrovePi/Software/Python $ python3 grove_switch.py 
1
1
0
0
0
```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Switch-P/res/Grove-Switch-P-Eagle_File_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Eagle&PDF]** [Grove-Switch(P) 回路図](https://files.seeedstudio.com/wiki/Grove-Switch-P/res/Grove-Switch-P-Eagle_File_v1.0.zip)

## プロジェクト

**スイッチを使用してリレーを開閉する**: スイッチの値（High と Low の機能）を学びます。さらに、リレーをアクチュエータとして使用する方法を学びます。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/sodaqmoja/using-a-switch-to-open-and-close-a-relay-3329ec/embed' width='350'></iframe>

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