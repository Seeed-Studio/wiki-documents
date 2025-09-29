---
description: Grove - PIR モーションセンサー
title: Grove - PIR モーションセンサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-PIR_Motion_Sensor
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Grove_-_PIR_Motion_Sensor.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Grove_-_PIR_Motion_Sensor.jpg" alt="pir" width={600} height="auto" /></p>

このセンサーは、範囲内での動きを検知することができ、通常は人間の動きを感知します。Grove - Base Shield に接続してプログラムするだけで、検知範囲内で誰かが動くと、センサーは SIG ピンで HIGH を出力します。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html)

## 特徴

- Grove 互換インターフェース
- 検知距離の調整可能
- ホールディングタイムの調整可能

:::tip
    Grove モジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) を参照してください。
:::

## 仕様

|パラメータ	|値/範囲|
|---|---|
|動作電圧|	3V–5V|
|動作電流(VCC = 3V)|	100uA|
|動作電流(VCC = 5V)|	150uA|
|測定範囲	|0.1 - 6m|
|デフォルト検知距離|	3m|
|ホールディングタイム	|1 - 25秒|
|動作波長	|7 - 14um|
|検知角度|	120度|

## 対応プラットフォーム

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上記で対応しているとされるプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduino プラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能な MCU プラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

## はじめに

:::note
    Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

### Arduinoで遊ぶ

#### ハードウェア

- **ステップ 1.** 以下のアイテムを準備してください：

| Seeeduino V4.2 | Grove - PIRモーションセンサー | Base Shield |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Grove%20-%20PIR%20Motion%20Sensor_s.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

- **ステップ 2.** Grove - PIRモーションセンサーをGrove-Base Shieldのポート**D2**に接続します。

- **ステップ 3.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ 4.** USBケーブルを使用してSeeeduinoをPCに接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/connect_arduino.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/connect_arduino.jpg" alt="pir" width={600} height="auto" /></p>

:::note
	Grove Base Shieldがない場合は、以下のようにGrove-PIRモーションセンサーをSeeeduinoに直接接続することもできます。
:::

| Seeeduino       | Grove - PIRモーションセンサー |
|---------------|-------------------------|
| 5V           | 赤                     |
| GND           | 黒                     |
| 接続なし       | 白                     |
| D2            | 黄色                   |

#### ソフトウェア

- 以下のコードをArduino IDEにコピーしてアップロードしてください。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)をご確認ください。

```c
/*
PIRモーションセンサーのピンのマクロ定義
モジュールからの信号を受信するためにピン2を使用
*/
#define PIR_MOTION_SENSOR 2

void setup()
{
    pinMode(PIR_MOTION_SENSOR, INPUT);
    Serial.begin(9600);  
}

void loop()
{
    // 人が動いているのを検知した場合
    // デジタル値がブール値として使用される理由について詳しくは以下を参照してください：
    // https://www.techtarget.com/whatis/definition/Boolean#:~:text=The%20Boolean%20data,1%20or%200
    if(digitalRead(PIR_MOTION_SENSOR))
        Serial.println("こんにちは、人が来ています");
    else
        Serial.println("監視中");

    delay(200);
}
```

:::note
    検知距離と保持時間は、基板上に追加のポテンショメータを2つ追加することで調整できます。詳細については以下のV1.2 Eagleをご参照ください。また、ジャンパーハットを変更することで、再トリガー可能または非再トリガー可能に設定することもできます。
:::

結果は以下のようになります：

<!-- ![](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/result_arduino.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/result_arduino.png" alt="pir" width={600} height="auto" /></p>

:::tip
ジャンパーキャップを使用して2つのピンをショートさせることで、再トリガー可能または非再トリガー可能なトリガーを選択できます。GNDとピン1を使用すると、非再トリガー可能なトリガー（デフォルト）になります。ピン1とVCCを使用すると、再トリガー可能なトリガーになります。非再トリガー可能なトリガーは、サイクル内で1回だけイベントが発生することを意味します（通常は数秒）。Wikiの例では、非再トリガー可能なトリガーです。
:::

### Codecraftで遊ぶ

#### ハードウェア

**ステップ 1.** Grove - PIRモーションセンサーをBase ShieldのポートD2に接続します。

**ステップ 2.** Base ShieldをSeeeduino/Arduinoに差し込みます。

**ステップ 3.** USBケーブルを使用してSeeeduino/ArduinoをPCに接続します。

#### ソフトウェア

**ステップ 1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

:::note
    Codecraftを初めて使用する場合は、[CodecraftでArduinoを使用するガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)もご覧ください。
:::

**ステップ 2.** 以下の画像のようにブロックをドラッグするか、このページの最後でダウンロードできるcdcファイルを開きます。

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/cc_PIR_Motion_Sensor.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/cc_PIR_Motion_Sensor.png" alt="pir" width={600} height="auto" /></p>

プログラムをArduino/Seeeduinoにアップロードします。

:::success
    コードのアップロードが完了すると、人が来たときにLEDが点灯します。
:::

### Raspberry Piで遊ぶ (Grove Base Hat for Raspberry Piを使用)

#### ハードウェア

- **ステップ 1.** このプロジェクトで使用するもの：

| Raspberry Pi | Grove Base Hat for RasPi| Grove - PIRモーションセンサー |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Grove%20-%20PIR%20Motion%20Sensor_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html)|

- **ステップ 2.** Grove Base HatをRaspberryに差し込みます。
- **ステップ 3.** PIRモーションセンサーをBase Hatのポート12に接続します。
- **ステップ 4.** USBケーブルを使用してRaspberry PiをPCに接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Motion_Hat.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Motion_Hat.jpg" alt="pir" width={600} height="auto" /></p>

:::note
    ステップ3では、PIRモーションセンサーを**任意のGPIOポート**に接続できますが、対応するポート番号に合わせてコマンドを変更することを忘れないでください。
:::

#### ソフトウェア

- **ステップ1**. [ソフトウェアの設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation)に従って開発環境を構築します。
- **ステップ2**. grove.pyライブラリをクローンしてソースファイルをダウンロードします。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **ステップ3**. 以下のコマンドを実行してコードを実行します。

```
cd grove.py/grove
python grove_mini_pir_motion_sensor.py 12

```

以下はgrove_mini_pir_motion_sensor.pyのコードです。

```python

import time
from grove.gpio import GPIO


class GroveMiniPIRMotionSensor(GPIO):
    def __init__(self, pin):
        super(GroveMiniPIRMotionSensor, self).__init__(pin, GPIO.IN)
        self._on_detect = None

    @property
    def on_detect(self):
        return self._on_detect

    @on_detect.setter
    def on_detect(self, callback):
        if not callable(callback):
            return

        if self.on_event is None:
            self.on_event = self._handle_event

        self._on_detect = callback

    def _handle_event(self, pin, value):
        if value:
            if callable(self._on_detect):
                self._on_detect()

Grove = GroveMiniPIRMotionSensor


def main():
    import sys

    if len(sys.argv) < 2:
        print('Usage: {} pin'.format(sys.argv[0]))
        sys.exit(1)

    pir = GroveMiniPIRMotionSensor(int(sys.argv[1]))

    def callback():
        print('Motion detected.')

    pir.on_detect = callback

    while True:
        time.sleep(1)


if __name__ == '__main__':
    main()

```

:::success
    すべてが正常に動作すれば、以下の結果が表示されます。
:::
```python

pi@raspberrypi:~/grove.py/grove $ python grove_mini_pir_motion_sensor.py 12
Motion detected.
Motion detected.
Motion detected.
^CTraceback (most recent call last):
  File "grove_mini_pir_motion_sensor.py", line 84, in <module>
    main()
  File "grove_mini_pir_motion_sensor.py", line 80, in main
    time.sleep(1)
KeyboardInterrupt

```

このプログラムを終了するには、++ctrl+c++を押すだけです。



### Raspberry Piで遊ぶ (GrovePi_Plusを使用)

#### ハードウェア

- **ステップ1.** 以下のものを準備します：

| Raspberry pi | GrovePi_Plus | Grove - PIR Motion Sensor |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Grove%20-%20PIR%20Motion%20Sensor_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html)|


- **ステップ2.** GrovePi_PlusをRaspberryに接続します。

- **ステップ3.** センサーをGrovePi_Plusの**D8**ポートに接続します。

- **ステップ4.** USBケーブルを介してRaspberryをPCに接続します。


<!-- ![](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/connect_pi.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/connect_pi.jpg" alt="pir" width={600} height="auto" /></p>

#### ソフトウェア


- **ステップ1.** [ソフトウェアの設定](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)に従って開発環境を構築します。

- **ステップ2.** [ファームウェアの更新](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/)に従ってGrovePiの最新ファームウェアを更新します。

:::tip
    このWikiでは**~/GrovePi/**のパスを使用していますが、**/home/pi/Desktop/GrovePi**ではありません。ステップ2とステップ3で同じパスを使用する必要があります。
:::
:::note
    ファームウェアを更新することを強くお勧めします。一部のセンサーではエラーが発生する可能性があります。
:::
:::note
     **Raspberry Pi with Raspberrypi OS >= Bullseye**を使用している場合は、**Python3のみ**でこのコマンドラインを使用する必要があります。
:::
- **ステップ3.** Githubリポジトリをクローンします。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

-	**ステップ4.** 以下のコマンドを実行して、PIRモーションセンサーを使用して人の動きを監視します。

```
cd ~/GrovePi/Software/Python
sudo python3 grove_pir_motion_sensor.py
```

以下はgrove_pir_motion_sensor.pyのコードです。

```python
import time
import grovepi

# Grove PIR Motion SensorをデジタルポートD8に接続
# SIG,NC,VCC,GND
pir_sensor = 8

grovepi.pinMode(pir_sensor,"INPUT")

while True:
    try:
        # 通常は人間の動きをターゲット範囲内で検知
        if grovepi.digitalRead(pir_sensor):
            print 'Motion Detected'
        else:
            print '-'

        # ホールド時間がこれより短い場合、検知が少なくなる可能性があります
        time.sleep(.2)

    except IOError:
        print "Error"
```

結果は以下のようになります：

```python
pi@raspberrypi:~/GrovePi/Software/Python $ sudo python3 grove_pir_motion_sensor.py

-
-
-
Motion Detected
Motion Detected
Motion Detected
Motion Detected
Motion Detected
Motion Detected
Motion Detected
Motion Detected
Motion Detected
Motion Detected
Motion Detected
-
-

```

## FAQs

**Q1: 距離を調整する方法は？**

A1: R2: 検出距離を調整するために使用します（AMP係数、2MΩ）。R6: ホールド時間を調整するために使用します（トリガー持続時間、100KΩ）。

検出距離は6メートルから数センチメートルまで調整可能です。ポテンショメータを片側に設定すると、モジュールが非常に敏感になり、人が動いていなくても大気によってトリガーされる可能性があります。ホールド時間もDelay_timeポテンショメータで調整可能で、値は約25秒から1秒の範囲です。

もしR2とR6がはんだ付けされている場合は、R13とR14が空であることを確認してください。

:::note
    ボードが破損するリスクがあります。この改造を行う前に慎重に検討してください。
:::
<!-- ![](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Resistor.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/img/Resistor.png" alt="pir" width={600} height="auto" /></p>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/res/Grove%20PIR%20Motion%20Sensor_v1_2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Eagle]** [Grove - PIR Motion Sensor Eagle File v1.2](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/res/Grove%20PIR%20Motion%20Sensor_v1_2.zip)
- **[PDF]** [Grove - PIR Motion Sensor v1.2 Schematics](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/resources/Grove_PIR_Sensor_v1.2.pdf)
- **[PDF]** [Grove - PIR Motion Sensor Eagle V1.2 PCB](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/res/Grove%20-%20PIR%20motion%20sensor%20v1.1b%20PCB.pdf)
- **[Library]** [Github repository for PIR Motion Sensor](https://github.com/Seeed-Studio/PIR_Motion_Sensor)
- **[Datasheet]** [BISS0001 Datasheet](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/resources/Twig_-_BISS0001.pdf)
- **[Datasheet]** [Fresnel lens 8120 Datasheet](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/resources/Fresnel_lens_8120.pdf)
- **[Codecraft]** [CDC File](https://files.seeedstudio.com/wiki/Grove_PIR_Motion_Sensor/res/Grove_PIR_Motion_Sensor_CDC_File.zip)

## プロジェクト

**PIRモーションセンサーを使用した防犯アラーム**: この記事では、PIRモーションセンサーを使用した防犯アラームについて説明しています。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/pooja_baraskar/burglar-alarm-with-pir-motion-sensor-964c42/embed' width='350'></iframe>

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