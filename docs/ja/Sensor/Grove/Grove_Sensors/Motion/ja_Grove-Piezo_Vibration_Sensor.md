---
description: Grove - Piezo Vibration Sensor
title: Grove - Piezo Vibration Sensor
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Piezo_Vibration_Sensor
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Grove-Piezo_Vibration_Sensor-1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Grove-Piezo_Vibration_Sensor-1.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Piezo_Vibration_Sensor_02.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Piezo_Vibration_Sensor_02.jpg" alt="pir" width={600} height="auto" /></p>

Grove-Piezo Vibration Sensorは、柔軟性、振動、衝撃、タッチの測定に適しています。このモジュールはPZTフィルムセンサーLDT0-028を基にしています。センサーが前後に動くと、内部の電圧コンパレータによって一定の電圧が生成されます。広い動的範囲（0.001Hz～1000MHz）は優れた測定性能を保証します。また、オンボードのポテンショメータをネジで調整することで感度を調整することができます。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Piezo-Vibration-Sensor-p-1411.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Piezo-Vibration-Sensor-p-1411.html)
## バージョン

| 製品バージョン              | 変更点                                                                                                                                                                                    | リリース日 |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove - Piezo Vibration Sensor V1.1 | 初版                                                                                                                                                                                    | 2014年7月      |

## 特徴

-   標準Groveソケット
-   広い動的範囲：0.1Hz～180Hz
-   感度調整可能
-   強い衝撃に対する高い感受性

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)を参照してください。
:::
## 対応プラットフォーム

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## 応用例

- 洗濯機の振動検知
- 低消費電力のウェイクアップスイッチ
- 低コストの振動検知
- 車の警報装置
- 身体の動き検知
- セキュリティシステム

## はじめに

### Arduinoで遊ぶ

#### ハードウェア

Grove - Piezo Vibration Sensorは振動を検知するとロジックHIGHを出力します。このセンサーのデータを読み取るためにArduinoの任意のピンを使用できます。以下は、Piezo Vibration SensorでLEDを制御する例です。振動が検知されると、このセンサーはロジックHIGH信号を出力します（感度はポテンショメータを調整することで変更可能）。その際、LEDが点灯します。

- ステップ1. 以下のものを準備してください：

| Seeeduino V4 | Base Shield | Grove - Piezo Vibration |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Piezo%20vibration%20sensor_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Piezo-Vibration-Sensor-p-1411.html)|

- ステップ2. モジュールを4ピンのGroveケーブルを使用してBase Shieldの**D2**に接続します。**ボード上のデジタルピン13のLED**を出力として使用します。
- ステップ3. Base ShieldをArduinoに差し込みます。
- ステップ4. USBケーブルを使用してArduinoをPCに接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/piezo%20vibration%20connection.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/piezo%20vibration%20connection.jpg" alt="pir" width={600} height="auto" /></p>

:::note
ポテンショメータを時計回りに調整してしきい値電圧を上げると、元々HIGHレベルを出力していた場合でもLOWレベルを出力することがあります。
:::

#### ソフトウェア

- ステップ1. 以下のコードを新しいArduinoスケッチにコピー＆ペーストしてください。

```c
const int ledPin=13;
void setup() {
    Serial.begin(9600);
    pinMode(ledPin,OUTPUT);
}

void loop() {
    int sensorState = digitalRead(2);
    Serial.println(sensorState);
    delay(100);
    if(sensorState == HIGH)
    {
        digitalWrite(ledPin,HIGH);
    }
    else
    {
        digitalWrite(ledPin,LOW);
    }
}
```

- ステップ2. 振動が検知されるとLEDが点灯します。

### Raspberry Piで遊ぶ (Grove Base Hat for Raspberry Piを使用)

#### ハードウェア

- **ステップ1**. このプロジェクトで使用するもの：

| Raspberry pi | Grove Base Hat for RasPi| Grove - Piezo Vibration|
|----------------|--------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Piezo%20vibration%20sensor_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Piezo-Vibration-Sensor-p-1411.html)|

- **ステップ2**. Grove Base HatをRaspberry Piに差し込みます。
- **ステップ3**. Grove - Piezo Vibration SensorをBase Hatのポート12に接続します。
- **ステップ4**. USBケーブルを使用してRaspberry PiをPCに接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Piezo_Hat.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Piezo_Hat.jpg" alt="pir" width={600} height="auto" /></p>

:::note
ステップ3では、Piezo Vibration Sensorを**任意のGPIOポート**に接続することができますが、対応するポート番号に合わせてコマンドを変更する必要があります。
:::

#### ソフトウェア

:::note
**Raspberry Pi OS >= Bullseye**を使用している場合は、**Python3**のみでコマンドラインを使用してください。
:::

- **ステップ1**. [ソフトウェア設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation)に従って開発環境を構築してください。
- **ステップ2**. grove.pyライブラリをクローンしてソースファイルをダウンロードします。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **ステップ3**. 以下のコマンドを実行してコードを実行します。

```
cd grove.py/grove
python3 grove_piezo_vibration_sensor.py 12
```

以下はgrove_piezo_vibration_sensor.pyのコードです。

```python
import time
from grove.gpio import GPIO


class GrovePiezoVibrationSensor(GPIO):
    def __init__(self, pin):
        super(GrovePiezoVibrationSensor, self).__init__(pin, GPIO.IN)
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

Grove = GrovePiezoVibrationSensor


def main():
    import sys

    if len(sys.argv) < 2:
        print('Usage: {} pin'.format(sys.argv[0]))
        sys.exit(1)

    pir = GrovePiezoVibrationSensor(int(sys.argv[1]))

    def callback():
        print('Detected.')

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
pi@raspberrypi:~/grove.py/grove $ python3 grove_piezo_vibration_sensor.py 12
Detected.
Detected.
Detected.
Detected.
Detected.
Detected.
Detected.
Detected.
^CTraceback (most recent call last):
  File "grove_piezo_vibration_sensor.py", line 84, in <module>
    main()
  File "grove_piezo_vibration_sensor.py", line 80, in main
    time.sleep(1)
KeyboardInterrupt

```

このプログラムを終了するには、++ctrl+c++ を押すだけです。



### Raspberry Pi で遊ぶ (GrovePi_Plus を使用)

#### ハードウェア

- ステップ 1. 以下のものを準備してください:

| Raspberry Pi | GrovePi_Plus | Grove - Piezo Vibration |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Piezo%20vibration%20sensor_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Piezo-Vibration-Sensor-p-1411.html)|

- ステップ 2. GrovePi_Plus を Raspberry Pi に接続します。
- ステップ 3. Grove-Piezo Vibration を GrovePi_Plus の A0 ポートに接続します。
- ステップ 4. USB ケーブルを使用して Raspberry Pi を PC に接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/grove%20connection.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/grove%20connection.jpg" alt="pir" width={600} height="auto" /></p>

#### ソフトウェア

:::note 
     **Raspberry Pi OS >= Bullseye** を使用している場合は、**Python3** のみでこのコマンドラインを使用する必要があります。
:::

- ステップ 1. [ソフトウェアの設定](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) に従って開発環境を構成します。
- ステップ 2. Github リポジトリをクローンします。

```python
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- ステップ 3. 以下のコマンドを実行して振動を検出します。

```python
cd ~/GrovePi/Software/Python
python3 grove_piezo_vibration_sensor.py
```

以下は grove_piezo_vibration_sensor.py のコードです。

```python
import time
import grovepi

# Grove Piezo Vibration Sensor をアナログポート A0 に接続
# OUT,NC,VCC,GND
piezo = 0

grovepi.pinMode(piezo,"INPUT")

while True:
    try:
        # 振動が検出されると、センサーは論理ハイ信号を出力します
        print grovepi.analogRead(piezo)
        time.sleep(.5)

    except IOError:
        print "Error"
```

- ステップ 4. ターミナルに以下のように振動が表示されます。

```python
pi@raspberrypi:~/GrovePi/Software/Python $ python3 grove_piezo_vibration_sensor.py
1023
1023
1023
1023
18
17
18
17
```

:::note
    GrovePi の D2 ポートにセンサーを接続して grovepi.digitalRead(2) を使用することで振動状態を読み取ることもできます。
:::

## FAQs

**Q1: 出力はデジタルですか、それともアナログですか？**

A1: 出力はデジタルで、Low または High です。


## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/res/Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## リソース

- **[PDF]** [Wiki PDFをダウンロード](https://files.seeedstudio.com/wiki//Grove-Piezo_Vibration_Sensor/res//Grove-Piezo_Vibration_Sensor_wiki.pdf)
- **[Eagle]** [Grove - Piezo Vibration Sensor Eagleファイル](https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/res/Eagle.zip)
- **[PDF]** [Grove - Piezo Vibration Sensor 回路図PDFファイル](https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/res/Gvove-Piezo_Vibration_Sensor.pdf)
- **[PDF]** [Grove - Piezo Vibration Sensor PCB PDFファイル](https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/res/Gvove%20-%20Piezo%20Vibration%20Sensor%20v1.1%20PCB.pdf)
- **[Datasheet]** [Piezo Vibration Sensor データシート](https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/res/Piezo_Vibration_Sensor.pdf)

## プロジェクト

**Grove Starter Kit For Arduino - Piezo Vibration Sensor**: Arduino GroveスターターキットでPiezo振動センサーの使用方法を学べます。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/trduunze/grove-starter-kit-for-arduino-piezo-vibration-sensor-92c531/embed' width='350'></iframe>

**Seat Monitor**: ARTIKクラウドを使用してキャビンシートの状態を監視します。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/momososo/seat-monitor-4288dc/embed' width='350'></iframe>

## 技術サポートと製品ディスカッション
弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>