---
description: Grove - LED Bar
title: Grove - LED Bar
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-LED_Bar
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/Grove-LED_Bar-1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/Grove-LED_Bar-1.jpg" alt="pir" width={600} height="auto" /></p>

Grove – LED Barは、10セグメントのLEDゲージバーとMY9221 LED制御チップで構成されています。バッテリー残量、電圧、水位、音楽の音量、またはグラデーション表示が必要なその他の値のインジケーターとして使用できます。LEDバーグラフには10個のLEDバーがあり、1つの赤、1つの黄色、1つのライトグリーン、そして7つの緑のバーがあります。デモコードが利用可能で、すぐに使用を開始できます。LEDは赤から緑へ順番に点灯し、最終的にバーグラフ全体が点灯します。さらに進みたいですか？独自のエフェクトをコード化してみてください。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/s/Grove-LED-Bar-v2.0-p-2474.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border=0 /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/s/Grove-LED-Bar-v2.0-p-2474.html)
バージョン
--------

| 製品バージョン              | 変更点                                   | リリース日 |
|------------------------------|-------------------------------------------|---------------|
| Grove – LED Bar V1 | 初期版                                   | 2014年6月     |
| Grove – LED Bar V2 | 電源供給の改善                                   | 2015年10月     |

特徴
--------

-   入力電圧: 3.3V/5V
-   各LEDセグメントはコードで個別に制御可能
-   直感的な表示
-   柔軟な電源オプション、3-5.5DC対応
-   デモコード利用可能
-   Suli互換ライブラリ

:::tip
Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## 仕様

| パラメータ                                                   | 値/範囲  |
|-------------------------------------------------------------|--------------|
| 動作電圧                                           | 3.3/5V       |
| 動作温度                                       | -20℃ ～ +80℃ |
| 赤色ピーク発光波長（電流20mA）                  | 630-637nm    |
| 黄緑ピーク発光波長（電流20mA）       | 570-573nm    |
| 黄色ピーク発光波長（電流20mA）             | 585-592nm    |
| 赤色セグメント輝度（電流20mA）          | 50-70mcd     |
| 黄緑セグメント輝度（電流20mA） | 28-35mcd     |
| 黄色セグメント輝度（電流20mA）       | 45-60mcd     |
| LEDセグメント                                                 | 10           |
| サイズ                                                        | 40mm * 20mm  |


対応プラットフォーム
-------------------
<!-- 
| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
上記で対応可能とされているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

はじめに
-------------

:::note
Arduinoを初めて使用する場合は、開始前に[Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::
### Arduinoで遊ぶ

**ハードウェア**

- **ステップ1.** 以下のものを準備してください：

| Seeeduino V4.2 | ベースシールド|  Grove-LED Bar |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/Grove-LED_Bar-3.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/s/Grove-LED-Bar-v2.0-p-2474.html)|

- **ステップ 2.** Grove-LED Bar を Grove-Base Shield のポート **D8** に接続します。
- **ステップ 3.** Grove-Base Shield を Seeeduino に差し込みます。
- **ステップ 4.** Seeeduino を USB ケーブルで PC に接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/seeeduino_ledbar.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/seeeduino_ledbar.jpg" alt="pir" width={600} height="auto" /></p>

:::note
もし Grove Base Shield を持っていない場合でも、以下のように Grove-LED Bar を直接 Seeeduino に接続することができます。
:::
| Seeeduino       | Grove-LED Bar |
|---------------|-------------------------|
| 5V           | 赤                     |
| GND           | 黒                   |
| D9            | 白                   |
| D8            | 黄                  |

**ソフトウェア**

- **ステップ 1.** [Grove - LED Bar ライブラリ](https://github.com/Seeed-Studio/Grove_LED_Bar) を Github からダウンロードします。

- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library) を参照して、Arduino 用のライブラリをインストールします。

- **ステップ 3.** Arduino IDE を再起動します。次のパスから「Level」サンプルを開きます：**File --> Examples --> Grove LED Bar --> Level**。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/LED_BAR_IDE.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/LED_BAR_IDE.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

結果は以下のようになります：

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/LED_Bar_shining.gif) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/LED_Bar_shining.gif" alt="pir" width={600} height="auto" /></p>

### Raspberry Pi で遊ぶ

**ハードウェア**

- **ステップ 1.** 以下のものを準備します：

| Raspberry Pi | GrovePi_Plus | Grove-LED Bar |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/Grove-LED_Bar-3.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ購入](https://www.seeedstudio.com/s/Grove-LED-Bar-v2.0-p-2474.html)|

- **ステップ 2.** GrovePi_Plus を Raspberry Pi に差し込みます。

- **ステップ 3.** Grove-LED Bar を GrovePi_Plus の **D5** ポートに接続します。

- **ステップ 4.** Raspberry Pi を USB ケーブルで PC に接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/rpi_ledbar.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Bar/img/rpi_ledbar.jpg" alt="pir" width={600} height="auto" /></p>

**ソフトウェア**

- **ステップ 1.** [ソフトウェアの設定](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) に従って開発環境を構成します。

- **ステップ 2.** [ファームウェアの更新](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) に従って GrovePi の最新ファームウェアを更新します。

:::tip
この Wiki では、パス **~/GrovePi/** を **/home/pi/Desktop/GrovePi** の代わりに使用しています。ステップ 2 とステップ 3 で同じパスを使用する必要があります。
:::

:::note
ファームウェアを更新することを強くお勧めします。一部のセンサーでは、更新しないとエラーが発生する可能性があります。
:::
:::note
**Raspberry Pi OS >= Bullseye** を使用している場合は、**Python3 のみ**でこのコマンドラインを使用する必要があります。
:::

- **ステップ 3.** Github リポジトリをクローンします。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- **ステップ 4.** デモディレクトリに移動します：

```
cd yourpath/GrovePi/Software/Python/
```

以下は grove_ledbar.py のコードです。

```python
import time
import grovepi
import random

# Grove LED Bar をデジタルポート D5 に接続
# DI,DCKI,VCC,GND
ledbar = 5

grovepi.pinMode(ledbar,"OUTPUT")
time.sleep(1)
i = 0

# LED Bar メソッド
# grovepi.ledBar_init(pin,orientation)
# grovepi.ledBar_orientation(pin,orientation)
# grovepi.ledBar_setLevel(pin,level)
# grovepi.ledBar_setLed(pin,led,state)
# grovepi.ledBar_toggleLed(pin,led)
# grovepi.ledBar_setBits(pin,state)
# grovepi.ledBar_getBits(pin)

while True:
    try:
        print "テスト 1) 初期化 - 赤から緑へ"
        # ledbar_init(pin,orientation)
        # orientation: (0 = 赤から緑, 1 = 緑から赤)
        grovepi.ledBar_init(ledbar, 0)
        time.sleep(.5)

        print "テスト 2) レベル設定"
        # ledbar_setLevel(pin,level)
        # level: (0-10)
        for i in range(0,11):
            grovepi.ledBar_setLevel(ledbar, i)
            time.sleep(.2)
        time.sleep(.3)

        grovepi.ledBar_setLevel(ledbar, 8)
        time.sleep(.5)

        grovepi.ledBar_setLevel(ledbar, 2)
        time.sleep(.5)

        grovepi.ledBar_setLevel(ledbar, 5)
        time.sleep(.5)

        print "テスト 3) 単一 LED のオン/オフ"
        # ledbar_setLed(pin,led,state)
        # led: どの LED (1-10)
        # state: オフまたはオン (0,1)
        grovepi.ledBar_setLed(ledbar, 10, 1)
        time.sleep(.5)

        grovepi.ledBar_setLed(ledbar, 9, 1)
        time.sleep(.5)

        grovepi.ledBar_setLed(ledbar, 8, 1)
        time.sleep(.5)

        grovepi.ledBar_setLed(ledbar, 1, 0)
        time.sleep(.5)

        grovepi.ledBar_setLed(ledbar, 2, 0)
        time.sleep(.5)

        grovepi.ledBar_setLed(ledbar, 3, 0)
        time.sleep(.5)

        print "テスト 4) 単一 LED のトグル"
        # 現在オンの場合はオフに、オフの場合はオンに切り替え
        # ledbar_toggleLed(ledbar, led)
        grovepi.ledBar_toggleLed(ledbar, 1)
        time.sleep(.5)

        grovepi.ledBar_toggleLed(ledbar, 2)
        time.sleep(.5)

        grovepi.ledBar_toggleLed(ledbar, 9)
        time.sleep(.5)

        grovepi.ledBar_toggleLed(ledbar, 10)
        time.sleep(.5)

        print "テスト 5) 状態設定 - 10 ビットで全 LED を制御"
        # ledbar_setBits(ledbar, state)
        # state: (0-1023) または (0x00-0x3FF) または (0b0000000000-0b1111111111) または (int('0000000000',2)-int('1111111111',2))
        for i in range(0,32):
            grovepi.ledBar_setBits(ledbar, i)
            time.sleep(.2)
        time.sleep(.3)

        print "テスト 6) 現在の状態を取得"
        # state = ledbar_getBits(ledbar)
        # state: (0-1023) 各 LED に対応するビット
        state = grovepi.ledBar_getBits(ledbar)
        print "最初の 5 つの LED が点灯している場合、状態は 31 または 0x1F であるべきです"
        print state

        # ビットを左に 5 シフト
        state = state << 5
        # 状態は現在 992 または 0x3E0 になるはずです
        # 保存すると最後の 5 つの LED が点灯し、最初の 5 つの LED は消灯します
        time.sleep(.5)

        print "テスト 7) 状態設定 - 修正した状態を保存"
        # ledbar_setBits(ledbar, state)
        # state: (0-1023) 各 LED に対応するビット
        grovepi.ledBar_setBits(ledbar, state)
        time.sleep(.5)

        print "テスト 8) 向きの切り替え - 緑から赤 - 現在の状態は保持されます"
        # ledbar_orientation(pin,orientation)
        # orientation: (0 = 赤から緑, 1 = 緑から赤)
        # LED バーの向きを反転させると、すべてのメソッドが新しい LED インデックスを処理する方法を認識します
        # 緑から赤
        grovepi.ledBar_orientation(ledbar, 1)
        time.sleep(.5)

        # 赤から緑
        grovepi.ledBar_orientation(ledbar, 0)
        time.sleep(.5)

        # 緑から赤
        grovepi.ledBar_orientation(ledbar, 1)
        time.sleep(.5)

        print "テスト 9) 再びレベル設定"
        # ledbar_setLevel(pin,level)
        # level: (0-10)
        # 赤の LED は現在インデックス 10 になり、1 ではありません
        for i in range(0,11):
            grovepi.ledBar_setLevel(ledbar, i)
            time.sleep(.2)
        time.sleep(.3)

        print "テスト 10) 再び単一 LED を設定"
        # ledbar_setLed(pin,led,state)
        # led: どの LED (1-10)
        # state: オフまたはオン (0,1)
        grovepi.ledBar_setLed(ledbar, 1, 0)
        time.sleep(.5)

        grovepi.ledBar_setLed(ledbar, 3, 0)
        time.sleep(.5)

        grovepi.ledBar_setLed(ledbar, 5, 0)
        time.sleep(.5)

        print "テスト 11) 再び単一 LED をトグル"
        # ledbar_toggleLed(ledbar, led)
        grovepi.ledBar_toggleLed(ledbar, 2)
        time.sleep(.5)

        grovepi.ledBar_toggleLed(ledbar, 4)
        time.sleep(.5)

        print "テスト 12) 状態を取得"
        # state = ledbar_getBits(ledbar)
        # state: (0-1023) 各 LED に対応するビット
        state = grovepi.ledBar_getBits(ledbar)

        # 最後の 5 つの LED が点灯しているため、状態は 992 または 0x3E0 であるべきです

        # ビットを右に 5 シフト
        state = state >> 5
        # 状態は現在 31 または 0x1F になるはずです

        print "テスト 13) 再び状態を設定"
        # ledbar_setBits(ledbar, state)
        # state: (0-1023) 各 LED に対応するビット
        grovepi.ledBar_setBits(ledbar, state)
        time.sleep(.5)

        print "テスト 14) ステップ"
        # すべての 10 個の LED を順番に点灯
        for i in range(0,11):
            grovepi.ledBar_setLevel(ledbar, i)
            time.sleep(.2)
        time.sleep(.3)

        print "テスト 15) バウンス"
        # 最初の 2 つの LED を点灯
        grovepi.ledBar_setLevel(ledbar, 2)

        # 現在の状態を取得 (0x3)
        state = grovepi.ledBar_getBits(ledbar)

        # 右にバウンス
        for i in range(0,9):
            # ビットを左にシフトして更新
            state <<= 1;
            grovepi.ledBar_setBits(ledbar, state)
            time.sleep(.2)

        # 左にバウンス
        for i in range(0,9):
            # ビットを右にシフトして更新
            state >>= 1;
            grovepi.ledBar_setBits(ledbar, state)
            time.sleep(.2)
        time.sleep(.3)

        print "テスト 16) ランダム"
        for i in range(0,21):
            state = random.randint(0,1023)
            grovepi.ledBar_setBits(ledbar, state)
            time.sleep(.2)
        time.sleep(.3)

        print "テスト 17) 反転"
        # 2 番目ごとに LED を点灯 - 341 または 0x155
        state = 341
        for i in range(0,5):
            grovepi.ledBar_setBits(ledbar, state)
            time.sleep(.2)

            # 現在の状態とすべての 10 個の LED をビット単位で XOR
            state = 0x3FF ^ state

            grovepi.ledBar_setBits(ledbar, state)
            time.sleep(.2)
        time.sleep(.3)

        print "テスト 18) すべての可能な組み合わせを順に実行"
        for i in range(0,1024):
            grovepi.ledBar_setBits(ledbar, i)
            time.sleep(.1)
        time.sleep(.4)

    except KeyboardInterrupt:
        grovepi.ledBar_setBits(ledbar, 0)
        break
    except IOError:
        print "エラー"
```

- **ステップ 5.** デモを実行します。

```
sudo python3 grove_ledbar.py
```


## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_Bar/res/Grove-LED_Bar_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



リソース
---------

-   [**Eagle&PDF**][Grove - LED Bar Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-LED_Bar/res/Grove-LED_Bar_v1.0.zip)
-   [**ライブラリ**][Grove - LED Bar ライブラリ](https://github.com/Seeed-Studio/Grove_LED_Bar)
-   [**ライブラリ**][Suli互換ライブラリ](https://github.com/Seeed-Studio/LED_Bar_Suli)
-   [**データシート**][MY9221 データシート](https://files.seeedstudio.com/wiki/Grove-LED_Bar/res/MY9221_DS_1.0.pdf)
-   [**さらに読む**][木製レーザーガン](https://www.instructables.com/id/DIY-a-Wooden-Laser-Gun-As-a-Xmas-Present-for-Your-/)



## プロジェクト

**Grove LED Bar v2.0**: Calliope Miniは2つのGroveコネクタを備えています。このプロジェクトでは、Seeed Groveパーツとどのように通信するかを探ります。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/luuc/grove-led-bar-v2-0-c4b74f/embed' width='350'></iframe>

**Grove LED Bar Controller with the Bean+**: 新しいLightBlue Bean+を使用して、人気のあるGroveコンポーネントの基本を学び、自分のプロジェクトを構築する方法を始めましょう！

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/karel/grove-led-bar-controller-with-the-bean-c3b81e/embed' width='350'></iframe>


## 技術サポートと製品ディスカッション
弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>