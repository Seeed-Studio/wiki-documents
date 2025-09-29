---
description: Grove - 赤色LED
title: Grove - 赤色LED
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Red_LED
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Raspi_wiki/img/red_led.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Raspi_wiki/img/red_led.jpg" alt="pir" width={600} height="auto" /></p>

Grove - 赤色LEDは、Grove - LEDモジュールと似ており、LED光源を備えています。さらに、LEDの電力要件を管理するためのポテンショメータが搭載されています。このモジュールのPCBには取り付け穴があり、プロトタイプの必要な表面に取り付けることができます。例えば、電源や信号の存在を示すパイロットランプとして使用できます。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Red-LED-p-1142.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)


## バージョン


| 製品バージョン              | 変更点                                                                                                                                                                                    | リリース日 |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove-LED_v1.3 | 初期リリース                                                                                                                                                                                    | 2016年3月15日      |

## 特徴

*   プロジェクトにLED光のインジケーションを提供
*   異なる色のLEDをサポート、LEDは基板にハンダ付けされておらず、LEDホルダーに差し込む形式
*   オンボードポテンショメータ調整により、明るさの制御と広範囲の入力電圧をサポート

## 対応プラットフォーム


<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

- ステップ1. 以下のものを準備してください：

| Seeeduino V4.2 | Base Shield | Grove - Red LED |
|----------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED/img/Red%20LED_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/s/Grove-Red-LED-p-1142.html)|

- ステップ2. Grove-Red LEDをGrove-Base ShieldのD2ポートに接続します。
- ステップ3. Grove - Base ShieldをSeeeduinoに差し込みます。
- ステップ4. USBケーブルを使ってSeeeduinoをPCに接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Red_LED/img/seeedstudio_red_led.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED/img/seeedstudio_red_led.jpg" alt="pir" width={600} height="auto" /></p>

:::note
	Grove Base Shieldがない場合でも、以下のようにGrove-Red LEDを直接Seeeduinoに接続することができます。
:::
| Seeeduino       | Grove-Red LED |
|-----------------|---------------|
| 5V              | 赤            |
| GND             | 黒            |
| 接続なし         | 白            |
| D2              | 黄            |

#### ソフトウェア

- **ステップ1**. 以下のコードをArduino IDEにコピーしてアップロードします。

```
void setup() {
  // デジタルピン2を出力として初期化
  pinMode(2, OUTPUT);
}

// ループ関数は永遠に繰り返し実行されます
void loop() {
  digitalWrite(2, HIGH);   // LEDを点灯 (HIGHは電圧レベル)
  delay(1000);             // 1秒待機
  digitalWrite(2, LOW);    // LEDを消灯 (LOWは電圧レベル)
  delay(1000);             // 1秒待機
}
```

- **ステップ2**. LEDが点灯・消灯するのが確認できます。

### Codecraftで遊ぶ

#### ハードウェア

**ステップ1.** Grove - Red LEDをBase ShieldのD2ポートに接続します。

**ステップ2.** Base ShieldをSeeeduino/Arduinoに差し込みます。

**ステップ3.** USBケーブルを使ってSeeeduino/ArduinoをPCに接続します。

#### ソフトウェア

**ステップ1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

:::note
    初めてCodecraftを使用する場合は、[CodecraftでArduinoを使用するためのガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)も参照してください。
:::
**ステップ2.** 以下の画像のようにブロックをドラッグするか、このページの最後からダウンロードできるcdcファイルを開きます。

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove-Red_LED/img/cc_LED.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED/img/cc_LED.png" alt="pir" width={600} height="auto" /></p>

プログラムをArduino/Seeeduinoにアップロードします。

:::success
    コードのアップロードが完了すると、LEDが点滅するのが確認できます。
:::

### Raspberry Piで遊ぶ (Raspberry Pi用Grove Base Hatを使用)

#### ハードウェア

- **ステップ1**. このプロジェクトで使用するもの：

| Raspberry Pi | Grove Base Hat for RasPi | Grove - Red LED |
|--------------|---------------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED/img/Red%20LED_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/s/Grove-Red-LED-p-1142.html)|

- **ステップ2**. Grove Base HatをRaspberry Piに差し込みます。
- **ステップ3**. Red LEDをBase Hatのポート12に接続します。
- **ステップ4**. USBケーブルを使ってRaspberry PiをPCに接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Red_LED/img/BaseHat_LED.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED/img/BaseHat_LED.jpg" alt="pir" width={600} height="auto" /></p>

:::note
    ステップ3では、Red LEDを**任意のGPIOポート**に接続することも可能ですが、その場合は対応するポート番号にコマンドを変更してください。
:::

#### ソフトウェア

:::note
    **Raspberry Pi OS >= Bullseye**を使用している場合は、**Python3**でのみ以下のコマンドを使用してください。
:::
- **ステップ1**. [ソフトウェアの設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation)に従って開発環境を構成します。
- **ステップ2**. grove.pyライブラリをクローンしてソースファイルをダウンロードします。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **ステップ3**. 以下のコマンドを実行してコードを実行します。

```
cd yourpath/grove.py/grove
python3 grove_led.py 12
```

Red LEDをBase Hatの別のポートに接続している場合は、**python grove_led.py 12**の代わりに以下のコマンドを実行してください。

```
python3 grove_led.py portnumber
```

以下はgrove_led.pyのコードです。

```python
from grove.gpio import GPIO


class GroveLed(GPIO):
    def __init__(self, pin):
        super(GroveLed, self).__init__(pin, GPIO.OUT)

    def on(self):
        self.write(1)

    def off(self):
        self.write(0)


Grove = GroveLed


def main():
    import sys
    import time

    if len(sys.argv) < 2:
        print('Usage: {} pin'.format(sys.argv[0]))
        sys.exit(1)

    led = GroveLed(int(sys.argv[1]))

    while True:
        led.on()
        time.sleep(1)
        led.off()
        time.sleep(1)


if __name__ == '__main__':
    main()
```

:::success
    すべてが正常に動作すれば、LEDが点灯・消灯するのが確認できます。
:::
:::note
    ほとんどのGroveモジュールでは、この例のように`python3 grove_led.py 12`のようにピン番号のパラメータを追加する必要があります。**12**は選択されたGPIOピンであり、ピン12からの出力がLEDに供給されます。
:::

### Raspberry Pi で遊ぶ (GrovePi_Plus を使用)

#### ハードウェア

- ステップ 1. 以下のものを準備してください：

| Raspberry Pi | GrovePi_Plus | Grove - Red Led |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED/img/Red%20LED_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ購入](https://www.seeedstudio.com/s/Grove-Red-LED-p-1142.html)|

- ステップ 2. GrovePi_Plus を Raspberry Pi に接続します。
- ステップ 3. Grove-Red Led を GrovePi_Plus の D4 ポートに接続します。
- ステップ 4. USB ケーブルを使用して Raspberry Pi を PC に接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Red_LED/img/rasp_red_led.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Red_LED/img/rasp_red_led.jpg" alt="pir" width={600} height="auto" /></p>

#### ソフトウェア

:::note 
     **Raspberry Pi OS >= Bullseye** を使用している場合は、**Python3** のみで以下のコマンドを実行してください。
:::
- **ステップ 1**. [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) に従って開発環境を設定します。
- **ステップ 2**. GitHub リポジトリをクローンします。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```
- **ステップ 3**. 以下のコマンドを実行します。

```
cd ~/GrovePi/Software/Python
python3 grove_led_blink.py
```

以下は `grove_led_blink.py` のコードです。

```python

import time
from grovepi import *

# Grove LED をデジタルポート D4 に接続
led = 4

pinMode(led,"OUTPUT")
time.sleep(1)

print ("この例では、GrovePi+ の D4 ポートに接続された Grove LED を点滅させます。LED が点滅しない場合は、LED の接続とポート番号を確認してください。また、センサー上の LED の向きを逆にしてみてください。")
print (" ")
print ("LED を D4 ポートに接続してください！")

while True:
    try:
        # LED を点滅させる
        digitalWrite(led,1)		# HIGH を送信して LED を点灯
        print ("LED ON!")
        time.sleep(1)

        digitalWrite(led,0)		# LOW を送信して LED を消灯
        print ("LED OFF!")
        time.sleep(1)

    except KeyboardInterrupt:	# 停止する前に LED を消灯
        digitalWrite(led,0)
        break
    except IOError:				# 通信エラーが発生した場合に "Error" を表示
        print ("Error")
        
```

- **ステップ 4**. LED が点灯・消灯するのが確認できます。

```
pi@raspberrypi:~/GrovePi/Software/Python $ python3 grove_led_blink.py
この例では、GrovePi+ の D4 ポートに接続された Grove LED を点滅させます。
LED が点滅しない場合は、LED の接続とポート番号を確認してください。
また、センサー上の LED の向きを逆にしてみてください。

LED を D4 ポートに接続してください！
LED ON!
LED OFF!
LED ON!
LED OFF!
```

## リソース

* **[PDF]** [Grove-Red LED 回路図](https://files.seeedstudio.com/wiki/Grove-Red_LED/res/Grove-LED_v1.3.pdf)
* **[Codecraft]** [CDC ファイル](https://files.seeedstudio.com/wiki/Grove-Red_LED/res/Grove_Red_LED_CDC_File.zip)

## プロジェクト

**Grove ボタンを使用して Grove LED を制御する**: Grove ボタンを接続して Grove LED ソケットキットを制御する方法。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/user50338573/using-grove-button-to-control-grove-led-96d00b/embed' width='350'></iframe>

**ボタンと LED の Grove モジュール**:

<iframe width={560} height={315} src="https://www.youtube.com/embed/RCtsxwx4OaA" frameBorder={0} allow="autoplay; encrypted-media" allowFullScreen />

<iframe width={560} height={315} src="https://www.youtube.com/embed/78lVn_-oYaY" frameBorder={0} allow="autoplay; encrypted-media" allowFullScreen />

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを用意しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>