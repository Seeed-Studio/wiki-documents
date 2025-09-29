---
description: Grove - 衝突センサー
title: Grove - 衝突センサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Collision_Sensor
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Collision_Sensor/img/Grove_–_Collision_Sensor_photo.jpg) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Collision_Sensor/img/Grove_–_Collision_Sensor_photo.jpg" alt="pir" width={600} height="auto" /></p>

Grove - 衝突センサーは、衝突運動や振動が発生したかどうかを検出することができます。振動が検出されると、低パルス信号を出力します。出力信号をより信頼性の高いものにし、整然としたものにするために、ノイズの影響を軽減するための必要な外部回路を追加しました。そのため、通常の揺れでは出力が発生しません。このセンサーは高感度を持っています。バッテリーマネジメントの自動ウェイクアップや電源オフなどのプロジェクトに適用することができます。

動作電圧は5Vで、標準的なArduino/Seeeduino 5Vシステムと互換性があります。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Collision-Sensor-p-1132.html)

## 仕様

-   電圧: 3.3/5V

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::   
## 対応プラットフォーム

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    上記で対応可能と記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

衝突が発生すると出力信号が変化することを利用して、このデモを設計しました。センサーが衝突を検知するたびにLEDが点灯します。ここではLEDを管理デバイスとして使用しており、このデモを参考にして自転車のライトなどのデバイスを制御することができます。

手順は以下の通りです：

1. Groveケーブルを使用して衝突センサーをGrove - Basic Shieldのデジタルポート2に接続し、LEDをピン13に接続します。

2. Grove - Basic ShieldをArduinoに差し込みます。

3. USBケーブルを使用してArduino/SeeeduinoをPCに接続します。

4. 以下のコードを新しいArduinoスケッチにコピー＆ペーストし、Arduinoにアップロードします。

```c
// Grove - 衝突センサーのテスト
#define LED 13 // ArduinoまたはSeeeduinoのオンボードLED
#define COLLISION_SENSOR 2 // 衝突センサーはArduinoのD2に接続

void setup()
{
    pins_init();
}

void loop()
{
    if(isTriggered())
    {
        turnOnLED();
        delay(2000);
    }
    else turnOffLED();
}

void pins_init()
{
    pinMode(LED,OUTPUT);
    turnOffLED();
    pinMode(COLLISION_SENSOR,INPUT);
}

boolean isTriggered()
{
    if(!digitalRead(COLLISION_SENSOR))
    {
        delay(50);
        if(!digitalRead(COLLISION_SENSOR))
        return true; // 衝突センサーがトリガーされる
    }
    return false;
}

void turnOnLED()
{
    digitalWrite(LED,HIGH); // LEDが点灯
}

void turnOffLED()
{
    digitalWrite(LED,LOW); // LEDが消灯
}
```

5. LEDの状態を確認してください。テーブルに指を叩くたびにLEDが点灯するはずです。

コード内の`delay(50)`関数を変更することでセンサーの感度を調整できます。

```c
if(!digitalRead(COLLISION_SENSOR))
{
    return true; // 衝突センサーがトリガーされる
}
return false;
```

### Codecraftで遊ぶ

#### ハードウェア

**ステップ1.** Grove - 衝突センサーをBase ShieldのポートD2に接続します。

**ステップ2.** Base ShieldをSeeeduino/Arduinoに差し込みます。

**ステップ3.** USBケーブルを使用してSeeeduino/ArduinoをPCに接続します。

#### ソフトウェア

**ステップ1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

:::note
    初めてCodecraftを使用する場合は、[Codecraftを使用したArduinoのガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)も参照してください。
:::

**ステップ2.** 以下の画像のようにブロックをドラッグするか、このページの最後でダウンロードできるcdcファイルを開きます。

<!-- 
![cc](https://files.seeedstudio.com/wiki/Grove-Collision_Sensor/img/cc_Collision_Sensor.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Collision_Sensor/img/cc_Collision_Sensor.png" alt="pir" width={600} height="auto" /></p>

プログラムをArduino/Seeeduinoにアップロードします。

:::success
    コードのアップロードが完了すると、衝突センサーが衝突を検知した際にArduinoのピン13に接続されたLEDが点灯します。
:::

### Raspberry Piで遊ぶ (Raspberry Pi用Grove Base Hatを使用)

#### ハードウェア

- **ステップ1.** このプロジェクトで使用するもの：

| Raspberry Pi | Grove Base Hat for RasPi | Grove - 衝突センサー |
|--------------|---------------------------|-----------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Collision_Sensor/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Collision-Sensor-p-1132.html)|

- **ステップ2.** Grove Base HatをRaspberry Piに差し込みます。
- **ステップ3.** Grove - 衝突センサーをBase HatのD5ポートに接続します。
- **ステップ4.** USBケーブルを使用してRaspberry PiをPCに接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Collision_Sensor/img/with_hat.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Collision_Sensor/img/with_hat.jpg" alt="pir" width={600} height="auto" /></p>

:::note
    ステップ3では、Grove - 衝突センサーを**任意のGPIOポート**に接続することができますが、対応するポート番号に合わせてコマンドを変更する必要があります。
:::

#### ソフトウェア

- **ステップ1.** [ソフトウェアの設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation)に従って開発環境を構成します。
- **ステップ2.** grove.pyライブラリをクローンしてソースファイルをダウンロードします。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **ステップ3.** 以下のコマンドを実行してコードを実行します。

```
cd grove.py/grove
python grove_collision_sensor.py 5
```

以下はgrove_collision_sensor.pyのコードです。

```python
import time
from grove.gpio import GPIO


class GroveCollisionSensor(GPIO):
    def __init__(self, pin):
        super(GroveCollisionSensor, self).__init__(pin, GPIO.IN)
        self._last_time = time.time()

        self._on_collision = None
        self._on_NoCollision = None
        self.collisionState = False

    @property
    def on_collision(self):
        return self._on_collision

    @on_collision.setter
    def on_collision(self, callback):
        if not callable(callback):
            return

        if self.on_event is None:
            self.on_event = self._handle_event

        self._on_collision = callback

    @property
    def on_NoCollision(self):
        return self._on_NoCollision

    @on_NoCollision.setter
    def on_NoCollision(self, callback):
        if not callable(callback):
            return

        if self.on_event is None:
            self.on_event = self._handle_event

        self._on_NoCollision = callback

    def _handle_event(self, pin, value):
        t = time.time()
        dt, self._last_time = t - self._last_time, t

        if not value:
            if callable(self._on_collision):
                self._on_collision(dt)
        else:
            if callable(self._on_NoCollision):
                self._on_NoCollision(dt)

Grove = GroveCollisionSensor


def main():
    import sys

    if len(sys.argv) < 2:
        print('Usage: {} pin'.format(sys.argv[0]))
        sys.exit(1)

    button = GroveCollisionSensor(int(sys.argv[1]))

    def on_collision(t):
        print('Collision')
    def on_NoCollision(t):
        print("No Collision")

    button.on_collision = on_collision
    # button.on_NoCollision = on_NoCollision

    while True:
        time.sleep(1)


if __name__ == '__main__':
    main()

```

:::success
    すべてが正常に動作すれば、以下の結果が表示されるはずです。
:::
```python

pi@raspberrypi:~/grove.py/grove $ python grove_collision_sensor.py 5
Collision
Collision
Collision
Collision
Collision
Collision
Collision
^CTraceback (most recent call last):
  File "grove_collision_sensor.py", line 112, in <module>
    main()
  File "grove_collision_sensor.py", line 108, in main
    time.sleep(1)
KeyboardInterrupt
pi@raspberrypi:~/grove.py/grove $ 

```


このプログラムを終了するには、++ctrl+c++ を押すだけです。



### Raspberry Pi で遊ぶ (GrovePi_Plus を使用)

1. Raspberry Pi と GrovePi または GrovePi+ を準備してください。

2. 開発環境の設定を完了している必要があります。設定がまだの場合は [こちら](/ja/GrovePi_Plus/) を参照してください。

3. 接続

- センサーを Grove ケーブルを使用して GrovePi のソケット D2 に接続します。

4. デモのディレクトリに移動します:
```
cd yourpath/GrovePi/Software/Python/
```
- コードを確認するには

```
nano grove_collision_sensor.py   # "Ctrl+x" で終了 #
```
```
import time
import grovepi

# Grove 衝突センサーをデジタルポート D2 に接続
# SIG,NC,VCC,GND
collision_sensor = 2

grovepi.pinMode(collision_sensor,"INPUT")

while True:
    try:
        print grovepi.digitalRead(collision_sensor)
        time.sleep(.5)

    except IOError:
        print "Error"
```

5. デモを実行します。

```
sudo python grove_collision_sensor.py
```


## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Collision_Sensor/res/Grove-Collision_Sensor_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>




## リソース


-  **[Zip]** [Grove - 衝突センサー Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Collision_Sensor/res/Grove-Collision_Sensor_eagle_file.zip)
-  **[PDF]** [MVS0608.02 データシート](https://files.seeedstudio.com/wiki/Grove-Collision_Sensor/res/DataSheet-MVS0608_02-v2_1.pdf)
-  **[Codecraft]** [CDC ファイル](https://files.seeedstudio.com/wiki/Grove-Collision_Sensor/res/Grove_Collision_Sensor_CDC_File.zip)

<!-- この Markdown ファイルは https://www.seeedstudio.com/wiki/Grove_-_Collision_Sensor から作成されました -->

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
