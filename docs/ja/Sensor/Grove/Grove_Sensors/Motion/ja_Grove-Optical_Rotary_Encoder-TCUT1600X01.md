---
description: Grove - Optical Rotary Encoder(TCUT1600X01)
title: Grove - Optical Rotary Encoder(TCUT1600X01)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Optical_Rotary_Encoder-TCUT1600X01
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/main.jpg" alt="pir" width={600} height="auto" /></p>

Grove - Optical Rotary Encoder(TCUT1600X01)は、赤外線発光器と2つのフォトトランジスタ検出器を含む透過型センサーです。通常、赤外線発光器は赤外線を発し、フォトトランジスタ検出器が赤外線を受信するとフォトトランジスタがオンになり、両方の出力がHighとなり、オンボードLEDインジケーターが点灯します。障害物が赤外線を遮ると、フォトトランジスタは赤外線を受信できなくなり、フォトトランジスタがオフになり、両方の出力がLowとなり、オンボードLEDインジケーターが消灯します。

このセンサーを回転エンコーダとして使用して速度や回転を検出することができ、2つのフォトトランジスタ検出器のおかげで回転方向を検出することも可能です。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Optical-Rotary-Encoder%28TCUT1600X01%29-p-3142.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Optical-Rotary-Encoder%28TCUT1600X01%29-p-3142.html)

## 特徴

+ 2つのフォトトランジスタ検出器により回転方向を判定可能
+ オンボードLEDインジケーター
+ Groveインターフェース

## 仕様

|項目|値|
|---|---|
|動作電圧|3.3V / 5V|
|動作温度|-40°C ～ +105°C|
|保存温度範囲|-40°C ～ +125°C|
|発光波長|950 nm|
|ギャップ|3 mm|
|インターフェース|デジタル|

## 応用例

- 自動車用光学センサー
- エンコーダ用の高精度位置センサー
- 動作、速度、方向のセンサー
- 「回転と押し込み」エンコーディング用センサー

## ハードウェア概要

### ピンマップ

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/pin_map.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/pin_map.jpg" alt="pir" width={600} height="auto" /></p>


### 回路図

**電源**
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/schematic.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/schematic.jpg" alt="pir" width={600} height="auto" /></p>

TCUT1600X01の標準電圧は5Vであるため、[MP3120](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/res/MP3120.pdf)電流モード昇圧コンバータを使用して安定した5Vを供給します。MP3120の入力範囲は0.8Vから5Vまでなので、Arduinoで3.3Vおよび5Vの両方でこのモジュールを使用することができます。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/schematic_1.jpg)  -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/schematic_1.jpg" alt="pir" width={600} height="auto" /></p>

フォトトランジスタ検出器が赤外線信号を受信すると、出力はHighになります。障害物が赤外線を遮ると、OUT1とOUT2はLowになります。ただし、漏れ電流のために0Vにはなりません。漏れ電圧は入力電圧によって変化します。

### 機械図面
<!-- 
![](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/Mechanical.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/Mechanical.jpg" alt="pir" width={600} height="auto" /></p>


### 方向検出

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/principle.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/principle.jpg" alt="pir" width={600} height="auto" /></p>

:::tip
    2つのフォトトランジスタ検出器のおかげで、移動方向を検出することができます。障害物が左から右に移動すると、出力状態の変化は**11 --> 01 --> 00 --> 10**となります。同様に、障害物が右から左に移動すると、**11 --> 10 --> 00 --> 01**となります。
:::



## 対応プラットフォーム

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    上記で対応していると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove - Optical Rotary Encoder|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-Optical-Rotary-Encoder%28TCUT1600X01%29-p-3142.html" target="_blank">今すぐ購入</a>|

:::note
    **1** USBケーブルを優しく差し込んでください。そうしないとポートを損傷する可能性があります。内部に4本の線があるUSBケーブルを使用してください。2本線のケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

    **2** Groveモジュールを購入すると、各モジュールにGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::

- **ステップ1.** Grove - Optical Rotary EncoderをBase Shieldの**D5**ポートに接続します。

- **ステップ2.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ3.** USBケーブルを使用してSeeeduinoをPCに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/connect.jpg" alt="pir" width={600} height="auto" /></p>

:::note
        Grove Base Shieldがない場合は、以下のように直接このモジュールをSeeeduinoに接続することもできます。
:::

| Seeeduino     |  Grove - Optical Rotary Encoder         |
|---------------|-------------------------|
| 5V            | 赤                     |
| GND           | 黒                   |
| D6           | 白                    |
| D5           | 黄色                   |

#### ソフトウェア

:::note
        Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ1.** Arduino IDEに**Encoder Library**をインストールします。このライブラリは以下のパスで見つけることができます：**Sketch-->Include Library-->Manage Libraries**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/path.jpg" alt="pir" width={600} height="auto" /></p>

次に、ポップアップウィンドウで**encoder**を検索します。**Encoder by Paul Stoffregen**を見つけ、**Version1.4.1**を選択して**Install**をクリックします。
<p><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/path_1.jpg" alt="pir" width={600} height="auto" /></p>

ライブラリがインストールされると**INSTALLED**と表示されます。その後、**Close**をクリックしてください。

<p><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/path_2.jpg" alt="pir" width={600} height="auto" /></p>

> Paulさんの素晴らしいライブラリに感謝します。

- **ステップ2.** Arduino IDEを再起動します。例を開きます。以下の3つの方法で開くことができます：
    1. Arduino IDEで直接以下のパスから開きます：**File --> Examples --> Encoder --> Basic**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/path_3.jpg" alt="pir" width={600} height="auto" /></p>

2. **Basic.pde** をクリックしてコンピュータで開きます。このファイルは **xxxx\Arduino\libraries\Encoder\examples\Basic** にあります。**XXXX** は Arduino IDE をインストールした場所です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/path_4.jpg" alt="pir" width={600} height="auto" /></p>

3. または、コードブロックの右上隅にあるアイコンをクリックして、以下のコードをコピーし、Arduino IDE の新しいスケッチに貼り付けることもできます。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>

```cpp
/* Encoder Library - Basic Example
 * http://www.pjrc.com/teensy/td_libs_Encoder.html
 *
 * このサンプルコードはパブリックドメインです。
 */

#include <Encoder.h>

// エンコーダに接続されているピンを変更してください。
//   最良のパフォーマンス: 両方のピンが割り込み機能を持つ
//   良好なパフォーマンス: 最初のピンのみが割り込み機能を持つ
//   低パフォーマンス: どちらのピンも割り込み機能を持たない
Encoder myEnc(5, 6);
//   LEDが接続されているピンは使用しないでください

void setup() {
  Serial.begin(9600);
  Serial.println("基本エンコーダテスト:");
}

long oldPosition  = -999;

void loop() {
  long newPosition = myEnc.read();
  if (newPosition != oldPosition) {
    oldPosition = newPosition;
    Serial.println(newPosition);
  }
}
```

:::tip
エンコーダに接続されているピンを変更することができます。最良のパフォーマンスを得るには、両方のピンが割り込み機能を持つ必要があります。そのため、コードの13行目を <mark>Encoder myEnc(2, 3);</mark> に変更し、このセンサーをベースシールドの **D2** に接続してください。
:::

- **ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/) を確認してください。

- **ステップ 5.** Arduino IDE の **シリアルモニター** を開きます。**Tool-> Serial Monitor** をクリックするか、++ctrl+shift+m++ キーを同時に押します。ボーレートを **9600** に設定してください。

:::success
すべてが正常に動作すれば、結果が得られます。障害物を左から右に移動すると、カウント値が1ずつ増加します。障害物を右から左に移動すると、カウント値が1ずつ減少します。
:::
```cpp
基本エンコーダテスト:
0
1
2
3
4
3
2
1
0
-1
-2
-3
-4
```

### Raspberry Pi で遊ぶ (Grove Base Hat for Raspberry Pi を使用)
#### ハードウェア

- **ステップ 1.** このプロジェクトで使用するもの:
<div class="table-center">
	<table>
		<tr>
			<th>Raspberry Pi</th>
      <th>Grove Base Hat for RasPi</th>
      <th>Grove - Optical Rotary Encoder</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Optical-Rotary-Encoder%28TCUT1600X01%29-p-3142.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

- **ステップ 2.** Grove Base Hat を Raspberry Pi に接続します。
- **ステップ 3.** Grove - OLED Display 1.12'' を Base Hat の I2C ポートに接続します。
- **ステップ 4.** Raspberry Pi を USB ケーブルで PC に接続します。

#### ソフトウェア
- **ステップ 1.** [ソフトウェア設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation) に従って開発環境を構成し、grove.py を Raspberry Pi にインストールします。
- **ステップ 2.** 以下のコマンドを実行してコードを実行します。

```
# Python3 用の仮想環境
virtualenv -p python3 env
source env/bin/activate
# コマンドを入力
grove_optical_rotary_encoder
```

以下は grove_optical_rotary_encoder.py のコードです。

```python

'''
これは以下のためのコードです:
    - Grove - Optical Rotary Encoder(TCUT1600X01) <https://www.seeedstudio.com/Grove-Optical-Rotary-Encoder-TCUT1600X0-p-3142.html>`_

例:

    .. code-block:: python

        from grove.grove_button import GroveButton
        import time, sys

        # ピン5 (スロット D5) に接続
        PIN = 5
        encoder = GroveOpticalRotaryEncoder(PIN)

        # 毎秒値を読み取り、動きを検出
        while True:
            print("\rPosition: {0}  ".format(encoder.position()), file=sys.stderr, end='')
            time.sleep(0.001)

'''
from __future__ import print_function
import time, sys, signal, atexit
from grove.gpio import GPIO

__all__ = ["GroveOpticalRotaryEncoder"]

# UPM バージョンの rotaryencoder はセグメントフォールトを引き起こすバグがあります。
# この純粋な Python バージョンは正常に動作します。
class GroveOpticalRotaryEncoder(object):
    '''
    Grove Optical Rotary Encoder(TCUT1600X01) クラス

    Args:
        pin(int): Grove デバイスが接続されている GPIO/スロット番号。
    '''
    def __init__(self, pin1, pin2 = None):
        pin2 = pin1 + 1 if pin2 is None else pin2
        self.__gpio  = GPIO(pin1, GPIO.IN)
        self.__gpio2 = GPIO(pin2, GPIO.IN)
        self.__gpio.on_event = self.__gpio_event
        self._pos = 0

    # GPIO ライブラリによって呼び出される
    def __gpio_event(self, pin, value):
        v1 = self.__gpio.read()
        if not v1: return
        v2 = self.__gpio2.read()
        self._pos += 1 if v2 else -1

    def position(self, pos = None):
        '''
        位置カウンターを設定または取得

        Args:
            pos(int):
                オプション、設定する位置カウンター。

                指定されていない場合、現在のカウンターのみ取得

        Returns:
            (int): 現在の位置カウンター
        '''
        if not pos is None:
            self._pos = pos
        return self._pos

def main():
    from grove.helper import SlotHelper
    sh = SlotHelper(SlotHelper.GPIO)
    pin = sh.argv2pin()

    '''
    from upm.pyupm_rotaryencoder import RotaryEncoder as GroveOpticalRotaryEncoder
    from mraa import getGpioLookup

    mraa_pin1 = getGpioLookup("GPIO%02d" % (pin + 0))
    mraa_pin2 = getGpioLookup("GPIO%02d" % (pin + 1))

    # 信号ピン mraa_pin1 & mraa_pin2 を使用して Grove Rotary Encoder をインスタンス化
    myRotaryEncoder = GroveOpticalRotaryEncoder(mraa_pin1, mraa_pin2);
    '''
    myRotaryEncoder = GroveOpticalRotaryEncoder(pin)

    ## 終了ハンドラ ##
    # Control-C を押したときに Python がスタックトレースを表示しないようにする関数
    def SIGINTHandler(signum, frame):
        raise SystemExit

    # 終了時にコードを実行できる関数 (myRotaryEncoder の関数を含む)
    def exitHandler():
        print("終了します")
        sys.exit(0)

    # 終了ハンドラを登録
    atexit.register(exitHandler)
    signal.signal(signal.SIGINT, SIGINTHandler)

    # 毎秒値を読み取り、動きを検出
    counter = 0
    while True:
        print("\rPosition: {0}  ".format(myRotaryEncoder.position()), file=sys.stderr, end='')
        counter += 1
        if counter >= 5000:
            print("")
            counter = 0
        time.sleep(0.001)

if __name__ == '__main__':
    main()
```

```python
（env）pi@raspberrypi:~ grove_optical_rotary_encoder
```

:::tip
コマンドが正常に実行されると、毎秒値を出力し、動きを検知します。
:::

```python
# 毎秒値を読み取り、動きを検知する
        while True:
            print("\r位置: {0}  ".format(encoder.position()), file=sys.stderr, end='')
            time.sleep(0.001)
```

このプログラムを終了するには、単に `ctrl`+`c` を押してください。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/res/Grove-Optical_Rotary_Encoder-TCUT1600X01.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove - Optical Rotary Encoder eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/res/Grove-Optical_Rotary_Encoder-TCUT1600X01.zip)

- **[PDF]** [TCUT1600X01 のデータシート](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/res/Optical_Sensor.pdf)

- **[PDF]** [MP3120 のデータシート](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/res/MP3120.pdf)

## プロジェクト

この製品の紹介動画です。簡単なデモを含んでおり、試してみることができます。

<iframe width={560} height={315} src="https://www.youtube.com/embed/Ds7kBVdeY4U?rel=0" frameBorder={0} allow="autoplay; encrypted-media" allowFullScreen />

## 技術サポートと製品ディスカッション

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>