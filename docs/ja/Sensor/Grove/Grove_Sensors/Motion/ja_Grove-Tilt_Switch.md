---
description: Grove - 傾きスイッチ
title: Grove - 傾きスイッチ
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Tilt_Switch
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Tilt1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Tilt1.jpg" alt="pir" width={600} height="auto" /></p>

Grove-傾きスイッチはボタンに相当し、デジタル入力として使用されます。傾きスイッチの内部には一対のボールがあり、ケースが直立しているときにピンと接触します。ケースを傾けるとボールが接触せず、接続が成立しません。このGroveではSIGラインに接続されており、NCは使用されていません。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html)

特徴
--------

-   Groveインターフェース
-   簡単に使用可能
-   シンプルなGroveモジュール

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)を参照してください。
:::   
仕様
--------------

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
項目
</th>
<th scope="col">
最小値
</th>
<th scope="col">
標準値
</th>
<th scope="col">
最大値
</th>
<th scope="col">
単位
</th>
</tr>
<tr align="center">
<th scope="row">
電圧
</th>
<td>
3
</td>
<td>
5.0
</td>
<td>
5.25
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
接続角度
</th>
<td colspan="3">
10° ~170°
</td>
<td>
-
</td>
</tr>
<tr align="center">
<th scope="row">
切断角度
</th>
<td colspan="3">
190° ~350°
</td>
<td>
-
</td>
</tr>
<tr align="center">
<th scope="row">
電気的寿命
</th>
<td colspan="3">
100,000
</td>
<td>
サイクル
</td>
</tr>
</table>

対応プラットフォーム
-------------------

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    上記で対応可能とされているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

Grove - Tilt SwitchのSIGピンは通常LOWを出力します。Tilt Switchが直立すると、内部のボールがピンに接触し、SIGピンがHIGHを出力します。

以下のスケッチは、Tilt SwitchとGrove - Buttonを使用してLEDを制御する簡単なアプリケーションを示しています。

- 次の図が示すように、Tilt SwitchはGrove - Base Shieldのデジタルポート5に接続され、Grove-Buttonはデジタルポート7に接続されています。LEDはデジタルポート1に接続されています。ハードウェアの接続は以下の通りです：

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Digitalv1.0b.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Digitalv1.0b.jpg" alt="pir" width={600} height="auto" /></p>

- 以下のコードを新しいArduinoスケッチにコピー＆ペーストしてください。

```
void setup()
{
    pinMode(1, OUTPUT);
    pinMode(5, INPUT);
    pinMode(7, INPUT);
}

void loop()
{

    if (digitalRead(5)==HIGH)
    {
        digitalWrite(1, HIGH);
        delay(100);
        digitalWrite(1, LOW);
    }

    if (digitalRead(7)==HIGH)
    {
        digitalWrite(1, HIGH);
        delay(200);
        digitalWrite(1, LOW);
    }

}
```

- コードをアップロードしてください。
- その後、ボタンを押すかTilt Switchを動作させるとLEDが点灯します。試してみてください！

### Codecraftで遊ぶ

#### ハードウェア

**ステップ1.** Grove - Tilt SwitchをポートD5に接続し、Grove - ButtonとGrove - Red LEDをBase ShieldのポートD7とD2に接続します。

**ステップ2.** Base ShieldをSeeeduino/Arduinoに接続します。

**ステップ3.** USBケーブルを使用してSeeeduino/ArduinoをPCに接続します。

#### ソフトウェア

**ステップ1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

:::note
    初めてCodecraftを使用する場合は、[Codecraftを使用したArduinoのガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)も参照してください。
:::
**ステップ2.** 以下の図のようにブロックをドラッグするか、このページの最後でダウンロード可能なcdcファイルを開いてください。

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/cc_Tilt_Switch.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/cc_Tilt_Switch.png" alt="pir" width={600} height="auto" /></p>

プログラムをArduino/Seeeduinoにアップロードしてください。

:::success
    コードのアップロードが完了すると、Tilt Switchを傾けたりボタンを押したりするとLEDが点灯します。
:::

### Raspberry Piで遊ぶ (Raspberry Pi用Grove Base Hatを使用)

#### ハードウェア

- **ステップ1.** このプロジェクトで使用するもの：

| Raspberry pi | Grove Base Hat for RasPi| Grove - Tilt Switch |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html)|

- **ステップ2.** Grove Base HatをRaspberry Piに接続します。
- **ステップ3.** Tilt SwitchをBase Hatのポート12に接続します。
- **ステップ4.** USBケーブルを使用してRaspberry PiをPCに接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Tilt_Hat.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Tilt_Hat.jpg" alt="pir" width={600} height="auto" /></p>

:::note
    ステップ3では、Tilt Switchを**任意のGPIOポート**に接続できますが、対応するポート番号でコマンドを変更することを忘れないでください。
:::

#### ソフトウェア

:::note
     **Raspberry Pi OS >= Bullseye**を使用している場合は、**Python3のみ**で以下のコマンドラインを使用してください。
:::
- **ステップ1.** [ソフトウェア設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation)に従って開発環境を構成してください。
- **ステップ2.** grove.pyライブラリをクローンしてソースファイルをダウンロードします。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **ステップ3.** 以下のコマンドを実行してコードを実行します。

```
cd grove.py/grove
python3 grove_tilt_switch.py 12

```

以下はgrove_tilt_switch.pyのコードです。

```python

import time
from grove.gpio import GPIO


class GroveTiltSwitch(GPIO):
    def __init__(self, pin):
        super(GroveTiltSwitch, self).__init__(pin, GPIO.IN)
        self._on_trigger = None
        self._on_release = None

    @property
    def on_trigger(self):
        return self._on_trigger

    @on_trigger.setter
    def on_trigger(self, callback):
        if not callable(callback):
            return

        if self.on_event is None:
            self.on_event = self._handle_event

        self._on_trigger = callback

    @property
    def on_release(self):
        return self._on_release

    @on_release.setter
    def on_release(self, callback):
        if not callable(callback):
            return

        if self.on_event is None:
            self.on_event = self._handle_event

        self._on_release = callback

    def _handle_event(self, pin, value):

        if value:
            if callable(self._on_trigger):
                self._on_trigger()
        else:
            if callable(self._on_release):
                self._on_release()

Grove = GroveTiltSwitch


def main():
    import sys

    if len(sys.argv) < 2:
        print('Usage: {} pin'.format(sys.argv[0]))
        sys.exit(1)

    swicth = GroveTiltSwitch(int(sys.argv[1]))

    def on_trigger():
        print('Triggered')
    def on_release():
        print("Released.")

    swicth.on_trigger = on_trigger
    swicth.on_release = on_release

    while True:
        time.sleep(1)


if __name__ == '__main__':
    main()


```

:::success
    すべてが正常に動作すれば、Tilt Switchに触れると以下の結果が表示されます。
:::
```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_tilt_switch.py 12
Triggered
Released.
Triggered
^CTraceback (most recent call last):
  File "grove_tilt_switch.py", line 106, in <module>
    main()
  File "grove_tilt_switch.py", line 102, in main
    time.sleep(1)
KeyboardInterrupt

```

このプログラムを終了するには、++ctrl+c++ を押すだけです。




### Raspberry Pi で遊ぶ (GrovePi_Plus を使用)


### Raspberry Pi を使用する場合


:::note
     **Raspberry Pi OS >= Bullseye** を使用している場合は、**Python3** のみでこのコマンドラインを使用する必要があります。
:::
1. Raspberry Pi と Grovepi または Grovepi+ を用意してください。

2. 開発環境の設定を完了している必要があります。設定がまだの場合は [こちら](/ja/GrovePi_Plus/) を参照してください。

3. 接続

- Grove ケーブルを使用して Tilt_Switch を Grovepi のソケット D3 に接続します。

4. デモのディレクトリに移動します:
```
       cd yourpath/GrovePi/Software/Python/
```
- コードを確認するには
```
    nano grovepi_tilt_switch.py   # "Ctrl+x" で終了 #
```
```
    import time
    import grovepi

    # Grove Tilt Switch をデジタルポート D3 に接続
    # SIG,NC,VCC,GND
    tilt_switch = 3

    grovepi.pinMode(tilt_switch,"INPUT")

    while True:
        try:
            print grovepi.digitalRead(tilt_switch)
            time.sleep(.5)

        except IOError:
            print "Error"
```

5. デモを実行します。

```
    sudo python grove_tilt_switch.py
```

6. 結果: センサーを片側で直立させると、SIG ピンが HIGH を出力します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Grovepi_tilt_Switch_00.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Grovepi_tilt_Switch_00.png" alt="pir" width={600} height="auto" /></p>



参考
---------

Grove-Tilt Switch の動作角度は以下の通りです:

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Tilt_Switch_Operate.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Tilt_Switch_Operate.jpg" alt="pir" width={600} height="auto" /></p>

<div class="admonition note">
<p class="admonition-title">注意</p>
Grove 上のマーク J1 は基準端子です。
</div>

# Grove - Tilt Switch v1.0 Eagle ファイル
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/Grove-Tilt_Switch_v1.0_Source_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


# Grove - Tilt Switch v1.1 Eagle ファイル
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/Grove-Tilt_Switch_v1.1_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


リソース
---------

-   [Grove - Tilt Switch v1.0 Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/Grove-Tilt_Switch_v1.0_Source_File.zip)
-   [Grove - Tilt Switch v1.1 PDF ファイル](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/Grove-Tilt_Switch_v1.1_PDF_File.pdf)
-   [Grove - Tilt Switch v1.1 Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/Grove-Tilt_Switch_v1.1_Eagle_File.zip)
-   [SW200D データシート](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/SW200D_datasheet.pdf)
-   [Codecraft CDC ファイル](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/Grove_Tilt_Switch_CDC_File.zip)


<!-- この Markdown ファイルは https://www.seeedstudio.com/wiki/Grove_-_Tilt_Switch から作成されました -->


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>