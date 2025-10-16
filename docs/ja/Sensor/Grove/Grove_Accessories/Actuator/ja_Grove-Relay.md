---
title: Grove - リレー
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Grove-Relay/
slug: /ja/Grove-Relay
last_update:
  date: 05/15/2025
  author: gunengyu
---


<!-- <p style=":center"><img src="https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg" /></p> -->

![](https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg)

Grove-Relay モジュールは、デジタルの常時開スイッチです。このモジュールを使用すると、コントローラーの低電圧（例えば 5V）で高電圧の回路を制御できます。基板上にはインジケーター LED があり、制御端子が閉じると点灯します。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/MwLEawbP0ZU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Relay-p-769.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## バージョン

| パラメータ     | V1.1     | V1.2     |
| :------------- | :------------- | :------------- |
| 製品リリース日       | 2013年1月27日       | 2014年6月9日 |
| 動作電圧 | 5V | 3.3V~5V |
| 動作電流 | 60mA | 100mA |
| リレー寿命 | 100,000 サイクル | 100,000 サイクル |
| 最大スイッチング電圧 | 250VAC/30VDC | 250VAC/30VDC |
| 最大スイッチング電流 | 5A | 5A |

:::tip
    Grove モジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) を参照してください。
:::

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    上記で対応プラットフォームとして挙げられているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduino プラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能な MCU プラットフォーム用のソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

:::note
    Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::
#### 必要な材料

| Seeeduino V4.2 | Base Shield| Grove-Button **x2** |Grove-Relay|
|--------------|-------------|-----------------|-----|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove-Relay/img/button_s.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Relay/img/Thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" >今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-Button-p-766.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-Relay-p-769.html">今すぐ購入</a>| 

:::note
    **1** USBケーブルを慎重に差し込んでください。そうしないとポートが損傷する可能性があります。内部に4本のワイヤーがあるUSBケーブルを使用してください。2本のワイヤーしかないケーブルではデータを転送できません。使用しているケーブルが不明な場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)をクリックして購入できます。

    **2** Groveモジュールは購入時にGroveケーブルが付属しています。Groveケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)をクリックして購入できます。
:::
#### ハードウェア

- **ステップ1.** Grove-RelayをGrove-Base Shieldのポート**D4**に接続します。

- **ステップ2.** Grove-Button#1をGrove-Base Shieldのポート**D2**に接続し、Grove-Button#2をポート**D3**に接続します。

- **ステップ3.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ4.** Micro-USBケーブルを使用してSeeeduinoをPCに接続します。

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove-Relay/img/button-relay.jpg)

:::note
    Base Shieldがない場合でも、Grove-RelayとGrove-ButtonをArduinoボードに直接接続することができます。以下の接続方法に従ってください。
:::
| Grove-Relay | Arduino | Grove Cable|
|-------------|---------|-----------|
| GND         | GND     | 黒|
| VCC         | 5V      |赤|
| SIG         | D4      |黄色|

| Grove-Button#1 | Arduino |Grove Cable|
|----------------|---------|-------|
| GND            | GND     |黒|
| VCC            | 5V      |赤|
| SIG            | D2      |黄色|

| Grove-Button#2 | Arduino |Grove Cable|
|----------------|---------|----|
| GND            | GND     |黒|
| VCC            | 5V      |赤|
| SIG            | D3      |黄色|

#### ソフトウェア

以下は、Grove - Buttonを使用してGrove - Relayを制御するデモです。ボタンの1つを押すとリレーが閉じ、もう1つのボタンを押すとリレーが開きます。

- **ステップ1.** Arduino IDEを開き、以下のコードを新しいスケッチにコピーします。

```
// リレー制御

void setup()
{
  pinMode(2, INPUT);
  pinMode(3, INPUT);
  pinMode(4, OUTPUT);
}

void loop()
{
  if (digitalRead(2)==HIGH)
  {
    digitalWrite(4, HIGH);
    delay(100);
  }
  if (digitalRead(3)==HIGH)
  {
    digitalWrite(4, LOW);
  }
}
```

- **ステップ2.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

アップロードが完了したら、Button#1を押すとリレーがオンになり、Button#2を押すとリレーがオフになります。

### Codecraftで遊ぶ

#### ハードウェア

**ステップ1.** Grove - RelayをポートD4に接続し、2つのGrove - ButtonをポートD2とポートD3に接続します。

**ステップ2.** Base ShieldをSeeeduino/Arduinoに差し込みます。

**ステップ3.** USBケーブルを使用してSeeeduino/ArduinoをPCに接続します。

#### ソフトウェア

**ステップ1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

:::note
    Codecraftを初めて使用する場合は、[ArduinoでのCodecraftの使用ガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)も参照してください。
:::
**ステップ2.** 以下の画像のようにブロックをドラッグするか、このページの最後でダウンロードできるcdcファイルを開きます。

![cc](https://files.seeedstudio.com/wiki/Grove-Relay/img/cc_Relay.png)

プログラムをArduino/Seeeduinoにアップロードします。

:::success
    コードのアップロードが完了すると、ポートD2に接続されたボタンを押すとリレーがオンになり、ポートD3に接続されたボタンを押すとリレーがオフになります。
:::
### Raspberry Piで遊ぶ (Raspberry Pi用Grove Base Hatを使用)

#### ハードウェア

- **ステップ1.** このプロジェクトで使用するもの：

| Raspberry pi | Grove Base Hat for RasPi| Grove - Relay |
|--------------|-------------|-----------------|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove-Relay/img/Thumbnail.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Relay-p-769.html)|

- **ステップ2.** Grove Base HatをRaspberryに差し込みます。
- **ステップ3.** Grove - RelayをBase Hatのポート12に接続します。
- **ステップ4.** USBケーブルを使用してRaspberry PiをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-Relay/img/Relay_Hat.jpg)

:::note
    ステップ3では、リレーモジュールを**任意のGPIOポート**に接続できますが、対応するポート番号でコマンドを変更する必要があります。
:::
#### ソフトウェア

:::note
     **Raspberry Pi OS >= Bullseye**を使用している場合は、**Python3のみ**でこのコマンドラインを使用する必要があります。
:::
- **ステップ1.** [ソフトウェアの設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation)に従って開発環境を構成します。
- **ステップ2.** grove.pyライブラリをクローンしてソースファイルをダウンロードします。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **ステップ 3**. 以下のコマンドを実行してコードを動かします。

```
cd grove.py/grove
python3 grove_relay.py 12

```

以下は grove_relay.py のコードです。

```python

from grove.gpio import GPIO


class GroveRelay(GPIO):
    def __init__(self, pin):
        super(GroveRelay, self).__init__(pin, GPIO.OUT)

    def on(self):
        self.write(1)

    def off(self):
        self.write(0)


Grove = GroveRelay


def main():
    import sys
    import time

    if len(sys.argv) < 2:
        print('使用方法: {} pin'.format(sys.argv[0]))
        sys.exit(1)

    relay = GroveRelay(int(sys.argv[1]))

    while True:
        try:
            relay.on()
            time.sleep(1)
            relay.off()
            time.sleep(1)
        except KeyboardInterrupt:
            relay.off()
            print("終了")
            exit(1)            

if __name__ == '__main__':
    main()



```

:::success
    すべてが正常に動作すれば、LEDインジケーターが点滅するのが確認できます。
:::
このプログラムを終了するには、++ctrl+c++ を押すだけです。

### Raspberry Pi で遊ぶ (GrovePi_Plus を使用)

#### ハードウェア

**必要な材料**

| Raspberry pi | GrovePi_Plus| Grove-Button  |Grove-Relay|
|--------------|-------------|-----------------|-----|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove-Relay/img/button_s.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Relay/img/Thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/GrovePi%2B-p-2241.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-Button-p-766.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-Relay-p-769.html" target="_blank">今すぐ購入</a>|

- **ステップ 1.** GrovePi_Plus を Raspberry に接続します。

- **ステップ 2.** Grove-Relay を GrovePi_Plus の **D4** ポートに接続します。

- **ステップ 3.** Grove-Button を GrovePi_Plus の **D3** ポートに接続します。

- **ステップ 4.** Raspberry を USB ケーブルで PC に接続します。

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove-Relay/img/GrovePiPlus_Grove_relay.jpeg)

#### ソフトウェア

初めて GrovePi を使用する場合は、この部分をステップごとに実行してください。GrovePi に慣れている場合は **ステップ1** と **ステップ2** をスキップできます。

- **ステップ 1.** ソフトウェアのセットアップ。コマンドラインで以下のコマンドを入力してください：

:::note
     **Raspberry Pi OS >= Bullseye** を使用している場合、このコマンドラインは使用できません。
:::
```
sudo curl -kL dexterindustries.com/update_grovepi | bash

```

```
sudo reboot
```

```
cd /home/pi/Desktop
```

```
git clone https://github.com/DexterInd/GrovePi.git
```

この部分の詳細については、[ソフトウェアの設定](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)を参照してください。

- **ステップ 2.** [ファームウェアの更新](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/)に従って GrovePi の最新ファームウェアを更新してください。

:::note
    ファームウェアを更新することを強くお勧めします。一部のセンサーでエラーが発生する可能性があります。
:::
- **ステップ 3.** 以下のコマンドを実行して結果を確認します。

:::note
     **Raspberry Pi OS >= Bullseye** を使用している場合、**Python3 のみ**でこのコマンドラインを使用する必要があります。
:::
```
cd /home/pi/Desktop/GrovePi/Software/Python/
sudo python3 grove_switch_relay.py
```

コードを確認したい場合は、以下のコマンドを使用できます：

```
sudo nano grove_switch_relay.py

```

コード：

```python
# Raspberry Pi + Grove Switch + Grove Relay

import time
import grovepi
# Grove Switch をデジタルポート D3 に接続
# SIG,NC,VCC,GND

switch = 3
# Grove Relay をデジタルポート D4 に接続
# SIG,NC,VCC,GND

relay = 4
grovepi.pinMode(switch,"INPUT")
grovepi.pinMode(relay,"OUTPUT")
while True:
    try:
        if grovepi.digitalRead(switch):
            grovepi.digitalWrite(relay,1)
        else:
            grovepi.digitalWrite(relay,0)
            time.sleep(.05)
    except KeyboardInterrupt:
        grovepi.digitalWrite(relay,0)
        break
    except IOError:
        print "エラー"
```

### TI LaunchPad で遊ぶ

他の電子機器を制御する (リレー)

![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove-Relay/img/Relay.jpg)

この例では、Grove-relay モジュールを使用してデスクランプなどの大きな負荷を制御する方法を示します。3V の電圧信号でリレーをオンにし、接続された機器に電流を流すことができます。

```
/*
リレー
基本的な Energia の例。
この例のコードはパブリックドメインにあります。
*/

#define RELAY_PIN 39

// setup ルーチンはリセットを押したときに一度だけ実行されます:
void setup() {
         pinMode(RELAY_PIN, OUTPUT); // デジタルピンを出力として初期化します。
}

// loop ルーチンは永遠に繰り返し実行されます:
void loop() {
         digitalWrite(RELAY_PIN, HIGH); // リレーをオンにする (HIGH は電圧レベル)
         delay(1000);   // 1秒待機
         digitalWrite(RELAY_PIN, LOW);   // リレーをオフにする (LOW にして電圧を下げる)
         delay(1000);   // 1秒待機
}
```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Relay/res/Grove-Relay_Eagle_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

この部品は [geppetto](https://geppetto.seeedstudio.com/) で利用可能です。Seeed と Geppetto を使った簡単なモジュラー電子設計が可能です。今すぐ構築しましょう。[geppetto.seeedstudio.com](https://geppetto.seeedstudio.com/)

## リソース

- **[Eagle]** [Grove - リレーの回路図とPCB（Eagle形式）](https://files.seeedstudio.com/wiki/Grove-Relay/res/Grove-Relay_Eagle_Files.zip)
- **[PDF]** [Grove - リレーのPCB（PDF形式）](https://files.seeedstudio.com/wiki/Grove-Relay/res/Grove%20-%20Relay%20PCB.pdf)
- **[PDF]** [Grove - リレーの回路図（PDF形式）](https://files.seeedstudio.com/wiki/Grove-Relay/res/Grove%20-%20Relay%20Schematic.pdf)
- **[データシート]** [HLS8-T73シリーズリレーのデータシート](https://files.seeedstudio.com/wiki/Grove-Relay/res/Relay_Datasheet.pdf)
- **[Codecraft]** [CDCファイル](https://files.seeedstudio.com/wiki/Grove-Relay/res/Grove_Relay_CDC_File.zip)

## プロジェクト

<table class="tg">
  <tr>
    <th class="tg-031e"><iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/sodaqmoja/using-a-switch-to-open-and-close-a-relay-3329ec/embed' width='350'></iframe></th>
    <th class="tg-031e"><iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/rei-vilo/private-iot-with-blynk-on-local-server-619926/embed' width='350'></iframe></th>
    <th class="tg-yw4l"><iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/josephroberts/resinified-office-lock-0ca2eb/embed' width='350'></iframe></th>
  </tr>
</table>

**リレーGroveモジュール**:

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/DnHqh_Rupb8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/JOsjUOI9FU8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートをご用意しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>