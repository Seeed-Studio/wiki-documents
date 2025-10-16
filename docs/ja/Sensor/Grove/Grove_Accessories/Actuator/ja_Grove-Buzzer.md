---
title: Grove - ブザー
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Grove-Buzzer/
slug: /ja/Grove-Buzzer
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove_Buzzer/images/Grove%20Buzzer.jpg)

Grove - ブザーモジュールは、[圧電ブザー](https://en.wikipedia.org/wiki/Buzzer#Piezoelectric)を主要コンポーネントとしています。この圧電ブザーはデジタル出力に接続することができ、出力がHIGHのときに音を発します。また、アナログのパルス幅変調出力に接続することで、さまざまな音や効果音を生成することも可能です。

[![](https://files.seeedstudio.com/wiki/Grove_Buzzer/images/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)

## バージョン

| 製品バージョン              | 変更点                                                                                                                                                                                    | リリース日 |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove-Buzzer V1.0| 初版                                                                                                                                                                                    | 2010年11月25日      |
| Grove-Buzzer V1.1 | S9013トランジスタを追加                                                                                                                                                                                    | 2014年5月30日      |

## 特徴

- 使いやすい圧電ブザー
- 標準的な4ピンのGroveケーブルを使用して、GroveパワーモジュールやGrove - ベースシールドなどの他のGroveモジュールに接続可能

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## 仕様

| 項目              | 仕様 |
|--------------------|---------------|
| 動作電圧  | 3.3V/5V       |
| 音出力       | ≥85dB         |
| 共振周波数 | 2300±300Hz    |

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

- **ステップ 1.** 以下のものを準備してください：

| Seeeduino V4.2 | Base Shield | Grove - Buzzer |
|----------------|-------------|----------------|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Buzzer/img/buzzer_s.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|

- **ステップ 2.** Grove-BuzzerをGrove-Base ShieldのポートD6に接続します。
- **ステップ 3.** Grove-Base ShieldをSeeeduinoに差し込みます。
- **ステップ 4.** USBケーブルを使ってSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove_Buzzer/img/seeeduino_buzzer.jpg)

:::note
 Grove Base Shieldがない場合は、以下のようにGrove-Buzzerを直接Seeeduinoに接続することもできます。
:::
| Seeeduino       | Grove-Buzzer |
|-----------------|--------------|
| 5V              | 赤           |
| GND             | 黒           |
| 接続なし        | 白           |
| D6              | 黄           |

#### ソフトウェア

- ステップ 1. 以下のコードをArduino IDEにコピーしてアップロードします。

```c
void setup()
{
  pinMode(6, OUTPUT);
}

void loop()
{
  digitalWrite(6, HIGH);
  delay(1000);
  digitalWrite(6, LOW);
  delay(1000);
}
```

- ステップ 2. ブザーがオンとオフを繰り返す音が聞こえます。

### Codecraftで遊ぶ

#### ハードウェア

**ステップ 1.** Grove-BuzzerをBase ShieldのポートD6に接続します。

**ステップ 2.** Base ShieldをSeeeduino/Arduinoに差し込みます。

**ステップ 3.** USBケーブルを使ってSeeeduino/ArduinoをPCに接続します。

#### ソフトウェア

**ステップ 1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

:::note
    初めてCodecraftを使用する場合は、[CodecraftでArduinoを使用するためのガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)も参照してください。
:::
**ステップ 2.** 以下の画像のようにブロックをドラッグするか、このページの最後からダウンロードできるcdcファイルを開きます。

![cc](https://files.seeedstudio.com/wiki/Grove_Buzzer/img/cc_Buzzer.png)

プログラムをArduino/Seeeduinoにアップロードします。

:::success
    コードのアップロードが完了すると、ブザーが断続的に鳴る音が聞こえます。
:::

### Raspberry Piで遊ぶ (Grove Base Hat for Raspberry Piを使用)

#### ハードウェア

- **ステップ 1.** このプロジェクトで使用するもの：

| Raspberry Pi | Grove Base Hat for RasPi | Grove - Buzzer |
|--------------|---------------------------|----------------|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Buzzer/img/buzzer_s.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|

- **ステップ 2.** Grove Base HatをRaspberry Piに差し込みます。
- **ステップ 3.** Grove BuzzerをBase HatのPWMポートに接続します。
- **ステップ 4.** USBケーブルを使ってRaspberry PiをPCに接続します。
![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect1.jpg)

#### ソフトウェア

:::note
     **Raspberry Pi OS >= Bullseye**を使用している場合は、**Python3のみ**で以下のコマンドラインを使用してください。
:::

- **ステップ 1.** [ソフトウェアの設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation)に従って開発環境を構成し、grove.pyをRaspberry Piにインストールします。

- **ステップ 2.** 以下のコマンドを実行してコードを実行します。

```
# Python3用の仮想環境
virtualenv -p python3 env
source env/bin/activate
# コマンドを入力
grove_pwm_buzzer
```

以下はgrove_pwm_buzzer.pyのコードです。

```python
from __future__ import print_function

import time
import RPi.GPIO as GPIO

def main():
    from grove.helper import helper
    # helper.root_check()

    print("Grove-BuzzerをGrove-Base-HatのPWM[12 13 VCC GND]スロットに挿入してください")
    # Grove Base Hat for Raspberry Pi
    pin = 12
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(pin, GPIO.OUT)

    # PWMインスタンスを作成
    pwm = GPIO.PWM(pin, 10)
    pwm.start(0) 

    chords = [1047, 1175, 1319, 1397, 1568, 1760, 1976]
    # 音を再生 (ド、レ、ミなど)、各音の間に0.5秒の間隔を置く
    try:
        for note in chords:
            pwm.ChangeFrequency(note)
            pwm.ChangeDutyCycle(95)
            time.sleep(0.5) 
    finally:
        pwm.stop()
        GPIO.cleanup()

    print("アプリケーションを終了します")

if __name__ == '__main__':
    main()
```

:::success
    すべてが正常に動作すれば、ブザーが数回鳴り、その後停止します。プログラムは自動的に終了します。
:::

このプログラムを終了するには、**ctrl+c**を押すだけです。

### Raspberry Piで遊ぶ (GrovePi_Plusを使用)

#### ハードウェア

- **ステップ 1.** 以下のものを準備してください：

| Raspberry Pi | GrovePi_Plus | Grove - Buzzer |
|--------------|--------------|----------------|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Buzzer/img/buzzer_s.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|

- **ステップ 2.** GrovePi_PlusをRaspberryに差し込みます。
- **ステップ 3.** Grove-BuzzerをGrovePi_PlusのD8ポートに接続します。
- **ステップ 4.** USBケーブルを使ってRaspberryをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove_Buzzer/img/rasp_buzzer.jpg)

#### ソフトウェア

:::note
     **Raspberry Pi OS >= Bullseye**を使用している場合は、**Python3のみ**で以下のコマンドラインを使用してください。
:::

- **ステップ 1.** [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) に従って開発環境を設定します。
- **ステップ 2.** Github リポジトリをクローンします。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- **ステップ 3.** 以下のコマンドを実行します。

```
cd ~/GrovePi/Software/Python
python3 grove_buzzer.py
```

以下は `grove_buzzer.py` のコードです。

```python
import time
import grovepi

# Grove Buzzer をデジタルポート D8 に接続
# SIG,NC,VCC,GND
buzzer = 8

grovepi.pinMode(buzzer,"OUTPUT")

while True:
    try:
        # 1秒間ブザーを鳴らす
        grovepi.digitalWrite(buzzer,1)
        print ('開始')
        time.sleep(1)

        # 1秒間ブザーを停止し、繰り返す
        grovepi.digitalWrite(buzzer,0)
        print ('停止')
        time.sleep(1)

    except KeyboardInterrupt:
        grovepi.digitalWrite(buzzer,0)
        break
    except IOError:
        print ("エラー")
```

- **ステップ 4.** ブザーがオンとオフを繰り返す音が聞こえます。

```
(env)pi@raspberrypi:~ grove_pwm_buzzer
開始
停止
開始
停止
```

### TI LaunchPad で遊ぶ

#### ハードウェア

- この例では、Grove ブザー モジュールを使用してメロディを再生する方法を示します。適切な周波数の方形波をブザーに送信し、対応する音を生成します。

![](https://files.seeedstudio.com/wiki/Grove_Buzzer/images/Buzzer.jpg)

#### ソフトウェア

```c
/*
  Buzzer
 この例では、ブザーを使用してメロディを再生します。適切な周波数の
 方形波をブザーに送信し、対応する音を生成します。

 回路:
 * ブザーをピン39 (Grove Base BoosterPack の J14 プラグ) に接続
 * 一方のピン (どちらでも可) をグラウンドに接続
 * もう一方のピンを VCC に接続
 * LED アノード (長い足) を RED_LED に接続
 * LED カソード (短い足) をグラウンドに接続

 * 注意:
 このサンプルコードはパブリックドメインです。

 https://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Kit_v1.1b#Grove_-_Buzzer

*/

/* マクロ定義 */
#define BUZZER_PIN               39            /* ブザーの信号ピン */

int length = 15;         /* 音符の数 */
char notes[] = "ccggaagffeeddc ";
int beats[] = { 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 4 };
int tempo = 300;

void setup()
{
    /* ブザーピンを出力として設定 */
    pinMode(BUZZER_PIN, OUTPUT);
}

void loop()
{
    for(int i = 0; i < length; i++) {
        if(notes[i] == ' ') {
            delay(beats[i] * tempo);
        } else {
            playNote(notes[i], beats[i] * tempo);
        }
        delay(tempo / 2);    /* 音符間の遅延 */
    }
}

/* 音を再生 */
void playTone(int tone, int duration) {
    for (long i = 0; i < duration * 1000L; i += tone * 2) {
        digitalWrite(BUZZER_PIN, HIGH);
        delayMicroseconds(tone);
        digitalWrite(BUZZER_PIN, LOW);
        delayMicroseconds(tone);
    }
}

void playNote(char note, int duration) {
    char names[] = { 'c', 'd', 'e', 'f', 'g', 'a', 'b', 'C' };
    int tones[] = { 1915, 1700, 1519, 1432, 1275, 1136, 1014, 956 };

    // 音符名に対応する音を再生
    for (int i = 0; i < 8; i++) {
        if (names[i] == note) {
            playTone(tones[i], duration);
        }
    }
}
```

# Grove - Buzzer 回路図ファイル v1.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Buzzer/resources/Grove_-_Buzzer_v1.0_Source_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove - Buzzer 回路図ファイル v1.1

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Buzzer/resources/Grove-Buzzer_V1.1_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Eagle&PDF]** [Grove - Buzzer 回路図ファイル v1.1](https://files.seeedstudio.com/wiki/Grove_Buzzer/resources/Grove-Buzzer_V1.1_eagle.zip)
- **[Eagle&PDF]** [Grove - Buzzer 回路図ファイル v1.0](https://files.seeedstudio.com/wiki/Grove_Buzzer/resources/Grove_-_Buzzer_v1.0_Source_File.zip)
- **[データシート]** [S9013データシート](https://files.seeedstudio.com/wiki/Grove_Buzzer/resources/S9013.pdf)
- **[さらに読む]** [木製レーザーガン](https://www.instructables.com/id/DIY-a-Wooden-Laser-Gun-As-a-Xmas-Present-for-Your-/)
- **[Codecraft]** [CDCファイル](https://files.seeedstudio.com/wiki/Grove_Buzzer/res/Grove_Buzzer_CDC_File.zip)

![](https://files.seeedstudio.com/wiki/Grove_Button/img/gun.jpg)

OVERWATCHにインスパイアされて、最近とてもクールな木製レーザーガンのおもちゃを作りました！

木製レーザーガンとターゲットは、Seeeduino LotusというArduinoボードをベースにしています。レーザーガンのレーザーエミッターはレーザーパルスを発射してターゲットを「アクティブ化」します。そしてターゲットにはレーザーパルスを検出するための3つの光センサーがあります。とても簡単そうに見えますよね？このプロジェクトに興味がある方は、ぜひ自分やお子様のために作ってみてください！クリスマスプレゼントとしてDIYする価値があります。

## プロジェクト

**Grove - Buzzerの紹介**: Groveの「プラグ＆プレイ」コンポーネントを使った最初のステップです。主にブザーを扱います。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/grove-introduction-in-a-buzzer-981efd/embed' width='350'></iframe>

**水の浪費モニター**: 毎年何百万ガロンもの水が浪費されています。このプロジェクトで水を節約する方法を学びましょう！

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/exp0nge/water-waste-monitor-98378e/embed' width='350'></iframe>

**Buzzer Groveモジュール**:

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/XBqvG6R1ueA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ug8dJHPmdMA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>