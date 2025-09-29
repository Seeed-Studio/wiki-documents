---
description: Grove - スライドポテンショメータ
title: Grove - スライドポテンショメータ
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Slide_Potentiometer
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding1.JPG) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding1.JPG" alt="pir" width={600} height="auto" /></p>

Grove - スライドポテンショメータモジュールは、最大抵抗値が10KΩの線形可変抵抗を組み込んでいます。スライダーを片側からもう片側に移動すると、出力電圧は0Vから適用したVccまで変化します。このモジュールは標準の4ピン**Groveケーブル**を介して他のGroveモジュールに接続されます。ピンのうち3つはOUT（ピン1）、Vcc（ピン3）、GND（ピン4）に接続され、4番目のピン（ピン2）はオンボードの緑色インジケータLEDに接続されています。このLEDは、ポテンショメータの抵抗変化を視覚的に表すために使用されます。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Slide-Potentiometer-p-1196.html)

特徴
--------

-   30mmのスライド長
-   線形抵抗テーパー
-   Grove互換

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

応用アイデア
-----------------

以下は参考用のプロジェクトです。

| **Arduino BoomBox**                                                  | **Arduino BeatBox**                                                    |
|----------------------------------------------------------------------|------------------------------------------------------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Recipe-Arduino_BoomBox.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Recipe-Arduino_BeatBox.jpg" alt="pir" width={600} height="auto" /></p>  |
| [今すぐ作る！](https://community.seeedstudio.com/project_detail.html?id=171)       | [今すぐ作る！](https://community.seeedstudio.com/project_detail.html?id=187)         |

仕様
--------------

<table border="2" cellspacing="0" width="60%">
<tr>
<th scope="col">
項目
</th>
<th>
最小値
</th>
<th>
標準値
</th>
<th>
最大値
</th>
</tr>
<tr align="center">
<th scope="row">
電圧 (DC)
</th>
<td>
3.3V
</td>
<td>
5.0V
</td>
<td>
30V
</td>
</tr>
<tr align="center">
<th scope="row">
電流
</th>
<td>
-
</td>
<td>
-
</td>
<td>
30mA
</td>
</tr>
<tr align="center">
<th scope="row">
寸法
</th>
<td colspan="3">
24mm x 60mm
</td>
</tr>
<tr align="center">
<th height="22" scope="row">
重量
</th>
<td colspan="3">
8.6g
</td>
</tr>
<tr align="center">
<th height="22" scope="row">
回転寿命
</th>
<td colspan="3">
&gt;15,000 サイクル
</td>
</tr>
<tr align="center">
<th height="22" scope="row">
総抵抗値
</th>
<td colspan="3">
10KΩ
</td>
</tr>
<tr align="center">
<th height="22" scope="row">
ストローク長
</th>
<td colspan="3">
30mm
</td>
</tr>
<tr align="center">
<th height="22" scope="row">
総抵抗値許容差
</th>
<td colspan="3">
+/- 20%
</td>
</tr>
</table>

対応プラットフォーム
-------------------

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上記で対応可能とされているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

はじめに
---------------

#### 可変抵抗として使用する場合

以下に示すように、Grove - スライドポテンショメータは、MCU制御またはスタンドアロンプロジェクトで単純なスライドポテンショメータとして使用できます。
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding_justr.JPG) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding_justr.JPG" alt="pir" width={600} height="auto" /></p>

### スタンドアロン

以下の手順に従って、このモジュールを使用してサンプルGrove回路を構築します。ただし、マイクロコントローラボードは使用しません。

1. スライドポテンショメーターモジュールを回路の入力側（電源モジュールの左側）に接続します。回路の出力側では、以下のようなユーザーインターフェースモジュールを使用できます（Grove - 赤色LED、Grove - LEDストリングライト、Grove - ミニファン、Grove - ブザー、Grove - レコーダーなど）。
2. 回路が完成したら電源を入れます。
3. スライドポテンショメーターモジュールを使用して出力をトリガーできます。例えば：

    - Grove - 赤色LED出力モジュールと組み合わせて使用すると、スライダーをGNDからVccに移動させるにつれてLEDの明るさが増加することを確認できます。Vccではポテンショメーターの抵抗が最小となり、LEDが最も明るく点灯します。同様の動作は、スライドポテンショメーターをGrove - LEDストリングライトモジュールと使用した場合にも見られます。スライダーをVccマークに近づけることで、より多くの電圧が適用され、LEDライトがより明るくなります。
    - 同様に、スライドポテンショメーターを使用してGrove - ミニファンの速度やGrove - ブザーモジュールの音の周波数を変化させることができます。
    - スライドポテンショメーターは、任意の回路のON/OFFスイッチとしても使用できます。スライダーをVcc位置に移動すると回路がONになり、GNDに移動すると回路がOFFになります。

電源モジュールを選択する際には、Grove - USB電源モジュールまたはGrove - DCジャック電源モジュールのいずれかを使用して、独立したGrove回路を構築できます。

#### 電圧分割器として

スライドポテンショメーターモジュールを電圧分割器として機能させるために、以下の簡単な手順に従ってください：

1. モジュールを[Arduino](/ja/Arduino "Arduino")または[Seeeduino](/ja/Seeeduino_v4.2 "Seeeduino")と組み合わせて使用する場合、Grove - ベースシールドを使用し、指定されたGroveインターフェース（例：アナログポート0）を使用してGrove - スライドポテンショメーターモジュールをシールドに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding2.JPG" alt="pir" width={600} height="auto" /></p>

2. USBケーブルを使用してボードをPCに接続します。

3. 以下のサンプルスケッチをアップロードします。

```
int adcPin = A0; // ポテンショメーターの入力ピンを選択
int ledPin = A1; // LEDのピンを選択
int adcIn = 0;   // センサーからの値を格納する変数
void setup()
{
    Serial.begin(9600); // シリアル通信を9600bpsで初期化
    pinMode(ledPin, OUTPUT); // ledPinをOUTPUTに設定
    Serial.println("スライドポテンショメーターテストコード!!");
}
void loop()
{
    // センサーから値を読み取る:
    adcIn = analogRead(adcPin);
    if(adcIn >= 500) digitalWrite(ledPin,HIGH);  // adcInが500以上の場合、LEDを点灯
    else digitalWrite(ledPin, LOW);
    Serial.println(adcIn);
    delay(100);
}
```

4. シリアルモニターを開きます。ADCからのデータが表示されるはずです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding_com.jpg" alt="pir" width={600} height="auto" /></p>

5. レバーを前後に動かします。シリアルデータがそれに応じて変化します。出力抵抗が一定の設定値を超えると、オンボードのインジケーターLEDも点灯します。

#### HIDデバイスとして

スライドポテンショメーターは効果的なヒューマンインターフェースデバイス（HID）として使用でき、例えばラジオコントローラーのラジオ制御玩具車に使用できます。以下の写真はコントロールパネル上の2つのスライドポテンショメーターを示しています。一つは左車輪の速度を制御し、もう一つは右車輪の速度を制御します。それぞれのモーターの速度を変更し、その動作を確認できます。右車輪を左車輪より速く回転させると車は右に曲がり、左車輪を右車輪より速く回転させると車は左に曲がります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Car.JPG" alt="pir" width={600} height="auto" /></p>

### Codecraftで遊ぶ

#### ハードウェア

**ステップ1.** Grove - スライドポテンショメーターをベースシールドのポートA0に接続します。

**ステップ2.** ベースシールドをSeeeduino/Arduinoに接続します。

**ステップ3.** USBケーブルを介してSeeeduino/ArduinoをPCに接続します。

#### ソフトウェア

**ステップ1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

:::note
    初めてCodecraftを使用する場合は、[Codecraftを使用したArduinoのガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)も参照してください。
:::

**ステップ2.** 以下の画像のようにブロックをドラッグするか、このページの最後でダウンロード可能なcdcファイルを開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/cc_Slide_Potentiometer.png" alt="pir" width={600} height="auto" /></p>

Arduino/Seeeduinoにプログラムをアップロードします。

:::success
    コードのアップロードが完了すると、スライドポテンショメーターをスライドさせると、センサー値がシリアルモニターに表示されます。また、ポテンショメーターの半分を超えてスライドさせると、LEDが点灯します。
:::

### Raspberry Piで遊ぶ（Raspberry Pi用Grove Base Hatを使用）

#### ハードウェア

- **ステップ1**. このプロジェクトで使用するもの：

| Raspberry Pi | Grove Base Hat for RasPi | Grove - スライドポテンショメーター |
|--------------|---------------------------|------------------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Slide_small.JPG" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Slide-Potentiometer-p-1196.html)|

- **ステップ 2**. Grove Base Hat を Raspberry Pi に接続します。
- **ステップ 3**. スライドポテンショメータを Base Hat の A0 ポートに接続します。
- **ステップ 4**. USBケーブルを使用して Raspberry Pi を PC に接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Slide_Hat.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Slide_Hat.jpg" alt="pir" width={600} height="auto" /></p>

:::note
ステップ 3では、スライドポテンショメータを**任意のアナログポート**に接続することができますが、対応するポート番号に合わせてコマンドを変更する必要があります。
:::

#### ソフトウェア

:::note
**Raspberry Pi OS >= Bullseye** を使用している場合は、**Python3** のみでこのコマンドラインを使用する必要があります。
:::
- **ステップ 1**. [ソフトウェアの設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation)に従って開発環境を構成します。
- **ステップ 2**. grove.py ライブラリをクローンしてソースファイルをダウンロードします。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **ステップ 3**. 以下のコマンドを実行してコードを実行します。

```
cd grove.py/grove
python3 grove_slide_potentiometer.py 0
```

以下は grove_slide_potentiometer.py のコードです。

```python
import math
import sys
import time
from grove.adc import ADC


class GroveSlidePotentiometer(ADC):
    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()
    
    @property
    def value(self):
        return self.adc.read(self.channel)


Grove = GroveSlidePotentiometer


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveSlidePotentiometer(int(sys.argv[1]))

    while True:
        print('Slide potentiometer value: {}'.format(sensor.value))
        time.sleep(.2)


if __name__ == '__main__':
    main()
```

:::success
すべてが正常に動作すれば、以下の結果が表示されます。
:::
```python
pi@raspberrypi:~/grove.py/grove $ python3 grove_slide_potentiometer.py 0
Slide potentiometer value: 987
Slide potentiometer value: 988
Slide potentiometer value: 986
Slide potentiometer value: 8
Slide potentiometer value: 2
Slide potentiometer value: 0
Slide potentiometer value: 1
Slide potentiometer value: 0
Slide potentiometer value: 24
Slide potentiometer value: 0
Slide potentiometer value: 0
Slide potentiometer value: 11
Slide potentiometer value: 995
Slide potentiometer value: 999
Slide potentiometer value: 999
^CTraceback (most recent call last):
  File "grove_slide_potentiometer.py", line 66, in <module>
    main()
  File "grove_slide_potentiometer.py", line 62, in main
    time.sleep(.2)
KeyboardInterrupt
```

++ctrl+c++ を押すことで、このプログラムを終了することができます。

:::note
アナログポートの場合、シルクスクリーンのピン番号は **A0, A1** のようになっていますが、コマンドでは **0** や **1** を使用します。これはデジタルポートと同じです。そのため、モジュールを正しいポートに接続するようにしてください。そうしないとピンの競合が発生する可能性があります。
:::

### Raspberry Pi で遊ぶ (GrovePi_Plus を使用)

:::note
**Raspberry Pi OS >= Bullseye** を使用している場合は、**Python3** のみでこのコマンドラインを使用する必要があります。
:::

1. Raspberry Pi と GrovePi または GrovePi+ を準備します。

<!-- 链接有问题2.You should have completed configuring the development enviroment, otherwise follow [here](/ja/GrovePi_Plus). -->

3. 接続

- Groveケーブルを使用してセンサーを GrovePi の A0 ソケットに接続します。

4. デモディレクトリに移動します。

```
cd yourpath/GrovePi/Software/Python/
```

- コードを確認します。

```
nano grove_slide_potentiometer.py   # "Ctrl+x" で終了 #
```

```py
import time
import grovepi

# Grove スライドポテンショメータをアナログポート A0 に接続
# OUT,LED,VCC,GND
slide = 0   # ピン 1 (黄色のワイヤー)

# デバイスにはポート A0 のピン 2 としてアクセス可能なオンボード LED が搭載されています
# OUT,LED,VCC,GND
led = 1     # ピン 2 (白色のワイヤー)

grovepi.pinMode(slide,"INPUT")
grovepi.pinMode(led,"OUTPUT")
time.sleep(1)

while True:
    try:
        # ポテンショメータからセンサー値を読み取る
        sensor_value = grovepi.analogRead(slide)

        # オンボード LED を点灯
        if sensor_value > 500:
            grovepi.digitalWrite(led,1)
        else:
            grovepi.digitalWrite(led,0)

        print "sensor_value =", sensor_value

    except IOError:
        print "Error"
```

5. デモを実行します。
```
sudo python3 grove_slide_potentiometer.py
```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/res/Sliding_Potentiometer.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

-   [スライドポテンショメータ Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/res/Sliding_Potentiometer.rar)
-   [スライドポテンショメータ PDF](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/res/Sliding_protentiometer_sch.pdf)
-   [スライドポテンショメータ データシート](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/res/Sliding_potentiometer_datasheet.pdf)
-   [Codecraft CDC ファイル](https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/res/Grove_Slide_Potentiometer_CDC_File.zip)

<!-- この Markdown ファイルは https://www.seeedstudio.com/wiki/Grove_-_Slide_Potentiometer から作成されました -->

## プロジェクト

**Raspberry Pi 音楽サーバー**: Raspberry Pi プロジェクトの第一歩

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kishima7/raspberry-pi-music-server-f5a0ae/embed' width='350'></iframe>

## 技術サポート & 製品ディスカッション
私たちの製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>