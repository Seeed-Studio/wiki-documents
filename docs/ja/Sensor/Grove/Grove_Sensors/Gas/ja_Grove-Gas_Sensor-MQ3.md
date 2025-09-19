---
description: Grove - ガスセンサー(MQ3)
title: Grove - ガスセンサー(MQ3)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Gas_Sensor-MQ3
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- <div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/wiki.jpg" /></div> -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/wiki.jpg" alt="pir" width={600} height="auto" /></p>

Grove - ガスセンサー(MQ3)モジュールは、家庭や産業におけるガス漏れ検知に役立ちます。このセンサーは、<font color="Blue">アルコール、ベンゼン、CH4、ヘキサン、LPG、CO</font>を検知するのに適しています。高感度と高速応答時間により、測定を迅速に行うことができます。センサーの感度はポテンショメーターを使用して調整可能です。

<div class="admonition danger">
<p class="admonition-title">注意</p>
センサー値は許容誤差範囲内でガス濃度の概略的な傾向を反映するだけであり、正確なガス濃度を示すものではありません。空気中の特定の成分を検出するには、通常、より精密で高価な機器が必要であり、単一のガスセンサーでは実現できません。プロジェクトが非常に正確なレベルでガス濃度を取得することを目的としている場合、このガスセンサーはお勧めできません。
</div>

<!-- |Sensor|Gas Type|今すぐ購入取|
|---|---|---|
|MQ2|Combustible Gas, Smoke|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-937.html)|
|MQ3|Alcohol Vapor|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-1418.html)|
|MQ5|LPG, Natural Gas, Town Gas|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-938.html)|
|MQ9|Carbon Monoxide, Coal Gas, Liquefied Gas|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-1419.html)| -->

<table align="center">
  <tbody>
    <tr>
    <td><h4>センサー</h4></td>
    <td><h4>ガスタイプ</h4></td>
    <td><h4>今すぐ購入</h4></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/ja/Grove-Gas_Sensor-MQ2/" target="_blank"><span>MQ2</span></a></td>
    <td>可燃性ガス、煙</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor(MQ2)-p-937.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/ja/Grove-Gas_Sensor-MQ3/" target="_blank"><span>MQ3</span></a></td>
    <td>アルコール蒸気</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ3%29-p-1418.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/ja/Grove-Gas_Sensor-MQ5/" target="_blank"><span>MQ5</span></a></td>
    <td>LPG、天然ガス、都市ガス</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ5%29-p-938.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/ja/Grove-Gas_Sensor-MQ9/" target="_blank"><span>MQ9</span></a></td>
    <td>一酸化炭素、石炭ガス、液化ガス</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ9%29-p-1419.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
</tr>
</tbody></table>

:::tip
    [Seeed Gas Sensor Selection Guide](https://wiki.seeedstudio.com/ja/Seeed_Gas_Sensor_Selection_Guide/)を公開しました。このガイドは、あなたのニーズに最適なガスセンサーを選ぶのに役立ちます。
:::

## 特徴

- アルコールに対する高感度とベンゼンに対する低感度
- 安定性が高く、長寿命
- 高速応答と高感度

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)を参照してください。
:::

## 仕様

| 項目  | パラメータ               | 最小値 | 典型値    | 最大値 | 単位 |
|-------|-------------------------|--------|-----------|--------|------|
| VCC   | 動作電圧               | 4.9    | 5         | 5.1    | V    |
| PH    | ヒーター消費電力       | 0.5    | -         | 750    | mW   |
| RL    | 負荷抵抗               |        | 調整可能  |        |      |
| RH    | ヒーター抵抗           | -      | 33        | -      | Ω    |
| Rs    | センサー抵抗           | 1      | -         | 8      | MΩ   |
| Scope | 検出濃度範囲           | 0.05   | -         | 10     | mg/L |

## 応用例

- アルコールチェッカー
- 呼気検査器
- 玩具

## ハードウェア概要

これはアナログ出力センサーです。このセンサーはGrove Base Shieldの任意のアナログソケットに接続する必要があります。このチュートリアルで使用される例では、A0アナログピンを使用します。Base ShieldのA0ポートにこのモジュールを接続してください。

ジャンパーワイヤを使用して、GroveモジュールをArduinoに直接接続することも可能です。接続方法は以下の表に示されています：

| Arduino   | ガスセンサー |
|-----------|-------------|
| 5V        | VCC         |
| GND       | GND         |
| NC        | NC          |
| Analog A0 | SIG         |

ガスセンサーからの出力電圧は、ガス濃度が増加すると増加します。感度はポテンショメータを調整することで変更できます。<font color="Red">センサーの最適な予熱時間は24時間以上です</font>。MQ-3センサーの詳細情報については、**Resources**セクションに記載されているデータシートを参照してください。

## 対応プラットフォーム

|Arduino|Raspberry|ArduPy|
|---|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={500} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={500} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/ArduPy-Logo.png" alt="pir" width={500} height="auto" /></p>| 

:::caution
    上記で対応可能とされているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

| Seeeduino V4.2 | Base Shield | Grove - Gas Sensor(MQ3) |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-1418.html" target="_blank">今すぐ購入</a>|

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/Read_Gas_Sensor_data.jpg) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/Read_Gas_Sensor_data.jpg" alt="pir" width={600} height="auto" /></p>

Grove - Gas Sensor(MQ3)を上記の画像のようにA0ポートに接続してください。

#### ガス検出：基本例

この例では、センサーがA0ピンに接続されています。センサーから読み取った電圧が表示されます。この値を閾値として使用し、ガス濃度の増減を検出することができます。

```cpp
void setup() {
  Serial.begin(9600);
}
 
void loop() {
  float sensor_volt;
  float sensorValue;
 
  sensorValue = analogRead(A0);
  sensor_volt = sensorValue/1024*5.0;
 
  Serial.print("sensor_volt = ");
  Serial.print(sensor_volt);
  Serial.println("V");
  delay(1000);
}
```

#### 測定：概算

この例では、ガスの概算濃度を知る方法を示します。MQ3センサーのデータシートによると、これらの方程式は標準条件下でテストされており、校正されていません。温度や湿度の変化により結果が異なる場合があります。

1. ガスセンサーを清浄な空気環境に置き、以下のプログラムをアップロードしてください。

```cpp
void setup()
{
    Serial.begin(9600);
}

void loop()
{
    float sensor_volt;
    float RS_air; // 清浄な空気中でのRS値を取得
    float R0;  // アルコール中でのR0値を取得
    float sensorValue;

    /*--- 100回のテストで平均値を取得 ---*/
    for(int x = 0 ; x < 100 ; x++)
    {
        sensorValue = sensorValue + analogRead(A0);
    }
    sensorValue = sensorValue/100.0;
    /*-----------------------------------*/

    sensor_volt = sensorValue/1024*5.0;
    RS_air = (5.0-sensor_volt)/sensor_volt; // *RLを省略
    R0 = RS_air/60.0; // グラフから清浄な空気中でのRS/R0比は60（WebPlotDigitizerを使用して取得）

    Serial.print("sensor_volt = ");
    Serial.print(sensor_volt);
    Serial.println("V");

    Serial.print("R0 = ");
    Serial.println(R0);
    delay(1000);

}
```

2. 次に、Arduino IDEのシリアルモニターを開きます。R0の値を記録し、次のプログラムで使用する必要があります。読み取り値が安定した後にR0を記録してください。

<font color="Red">以下のR0を上記でテストしたR0の値に置き換えてください</font>。センサーを上記のいずれかのガスにさらしてください。

```cpp
void setup() {
    Serial.begin(9600);
}

void loop() {

    float sensor_volt;
    float RS_gas; // ガス中でのRS値を取得
    float ratio; // RS_GAS/RS_air比を取得
    int sensorValue = analogRead(A0);
    sensor_volt=(float)sensorValue/1024*5.0;
    RS_gas = (5.0-sensor_volt)/sensor_volt; // *RLを省略

    /*-最初のテストのデモでのR0の値を名前"R0"に置き換え-*/
    ratio = RS_gas/R0;  // ratio = RS/R0
    /*----------------------------------------------------*/

    Serial.print("sensor_volt = ");
    Serial.println(sensor_volt);
    Serial.print("RS_ratio = ");
    Serial.println(RS_gas);
    Serial.print("Rs/R0 = ");
    Serial.println(ratio);

    Serial.print("\n\n");

    delay(1000);

}
```

さて、以下の図からガスの濃度を取得することができます。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/GAS_Sensor_3.png) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/GAS_Sensor_3.png" alt="pir" width={600} height="auto" /></p>

図によると、測定可能な最小濃度は0.1mg/L、最大濃度は10mg/Lであることがわかります。ただし、比率と濃度の関係が非線形であるため、公式を提供することはできません。しかし、mg/Lをppmに変換することが可能であり、値を確認する際に便利かもしれません。

### Raspberry Piでの操作 (Grove Base Hat for Raspberry Piを使用)

#### ハードウェア

- **ステップ1**. このプロジェクトで使用するもの:

| Raspberry Pi | Grove Base Hat for RasPi | Grove - Gas Sensor(MQ3) |
|--------------|---------------------------|-------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-1418.html)|

- **ステップ2**. Grove Base HatをRaspberry Piに接続します。
- **ステップ3**. Grove - Gas Sensor(MQ3)をBase HatのA0ポートに接続します。
- **ステップ4**. USBケーブルを使用してRaspberry PiをPCに接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/With_Hat.jpg) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/With_Hat.jpg" alt="pir" width={600} height="auto" /></p>

:::note
ステップ3では、Grove - Gas Sensor(MQ3)を**任意のアナログポート**に接続することができますが、対応するポート番号に合わせてコマンドを変更する必要があります。
:::

#### ソフトウェア

- **ステップ1**. [ソフトウェア設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation)に従って開発環境を構築します。
- **ステップ2**. grove.pyライブラリをクローンしてソースファイルをダウンロードします。

```sh
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **ステップ3**. 以下のコマンドを実行してコードを書きます。

```sh
cd grove.py/grove
nano grove_gas_sensor_mq3.py
```

次に、以下のコードをこのファイルにコピーし、++ctrl+x++を押して保存して終了します。

```python
import math
import sys
import time
from grove.adc import ADC


class GroveGasSensorMQ3:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def MQ3(self):
        value = self.adc.read(self.channel)
        return value

Grove = GroveGasSensorMQ3


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveGasSensorMQ3(int(sys.argv[1]))

    print('Detecting...')
    while True:
        print('Gas value: {0}'.format(sensor.MQ3))
        time.sleep(.3)

if __name__ == '__main__':
    main()
```

- **ステップ4**. 以下のコマンドを実行してコードを実行します。

```python 
python grove_gas_sensor_mq3.py  0
```

:::success
すべてが正常に動作すれば、以下の結果が表示されます。
:::

```python
pi@raspberrypi:~/grove.py/grove $ python grove_gas_sensor_mq3.py 0
Detecting...
Gas value: 564
Gas value: 564
Gas value: 564
Gas value: 565
Gas value: 565
Gas value: 565
Gas value: 566
Gas value: 566
Gas value: 566
Gas value: 566
Gas value: 566
^CTraceback (most recent call last):
  File "grove_gas_sensor_mq3.py", line 69, in <module>
    main()
  File "grove_gas_sensor_mq3.py", line 66, in main
    time.sleep(.3)
KeyboardInterrupt
```

++ctrl+c++を押すことで、このプログラムを終了することができます。

:::note
アナログポートの場合、シルクスクリーンのピン番号は**A0, A1**のようになっていますが、コマンドでは**0**や**1**というパラメータを使用します。これはデジタルポートと同じです。そのため、モジュールを正しいポートに接続するようにしてください。そうしないとピンの競合が発生する可能性があります。
:::

### Wio Terminalでの操作 (ArduPy)

#### ハードウェア

- **ステップ1**. 以下のものを準備します:

| Wio Terminal | Grove - Gas Sensor(MQ3) |
|------------------|-------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ3.html)|

- **ステップ2**. Grove - Gas Sensor(MQ3)をWio Terminalの**A0**ポートに接続します。

- **ステップ3**. USB Type-Cケーブルを使用してWio TerminalをPCに接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/WT-MQ3.png) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/WT-MQ3.png" alt="pir" width={600} height="auto" /></p>

#### ソフトウェア

- **ステップ1**. [**ArduPy Getting Started**](https://wiki.seeedstudio.com/ja/ArduPy/)に従ってWio Terminal上でArduPy開発環境を構築します。

- **ステップ2**. ArduPyファームウェアがWio Terminalにフラッシュされていることを確認します。詳細については[**こちら**](https://wiki.seeedstudio.com/ja/ArduPy/#ardupy-aip-cli-getting-started)を参照してください。

```sh
aip build
aip flash
```

- **ステップ3**. 以下のコードをコピーして`ArduPy-mq3.py`として保存します。

```python
from machine import Pin, ADC
from machine import LCD
from machine import Sprite
import time

mq3 = ADC(Pin(13))
lcd = LCD()
spr = Sprite(lcd) # バッファを作成

def main():
    spr.createSprite(320, 240)
    while True:
        spr.setTextSize(2)
        spr.fillSprite(spr.color.BLACK)
        spr.setTextColor(lcd.color.BLUE)
        spr.drawString("MQ3 Reading", 90, 10)
        spr.drawFastHLine(40, 35, 240, lcd.color.DARKGREY)
        spr.setTextColor(lcd.color.WHITE)
        spr.drawString("- Current Level: ", 20, 50)
        spr.drawNumber(mq3.read(), 220,50)
        spr.pushSprite(0,0)
        time.sleep_ms(500)

        print("MQ3 Gas Sensor Reading is: ", mq3.read())

if __name__ == "__main__":
    main()
```

- **ステップ 4.** `ArduPy-mq3.py` を分かりやすい場所に保存します。以下のコマンドを実行し、`<YourPythonFilePath>` を `ArduPy-mq3.py` の保存場所に置き換えてください。

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# 例:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-mq3.py"
```

- **ステップ 5.** 以下のようにターミナルにガス値が表示され、Wio Terminal の LCD 画面にも表示されます。

```python
ansonhe@Ansons-Macbook-Pro ~:aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-mq3.py"
Positional argument (/dev/cu.usbmodem1413101) takes precedence over --open.
Connected to ardupy
MQ3 Gas Sensor Reading is:  609
MQ3 Gas Sensor Reading is:  611
MQ3 Gas Sensor Reading is:  614
MQ3 Gas Sensor Reading is:  616
MQ3 Gas Sensor Reading is:  618
MQ3 Gas Sensor Reading is:  621
MQ3 Gas Sensor Reading is:  623
MQ3 Gas Sensor Reading is:  625
MQ3 Gas Sensor Reading is:  627
MQ3 Gas Sensor Reading is:  628
MQ3 Gas Sensor Reading is:  629
MQ3 Gas Sensor Reading is:  632
```

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/Ardupy-MQ3.png) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/Ardupy-MQ3.png" alt="pir" width={600} height="auto" /></p>


## 回路図オンラインビューア
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/res/Gas_Sensor_Eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



リソース
---------

**推奨読書 / 参考資料**

-   ガスセンサーの選び方
-   [LELとは何か](https://en.wikipedia.org/wiki/Flammability_limit)

**回路図**

-   [Grove Gas Sensor - EAGLE (回路図と基板) ファイル](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/res/Gas_Sensor_Eagle_files.zip)
-   [Grove Gas Sensor - PDF 回路図](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/res/Gas_Sensor_Schematic.pdf)

**データシート**

-   [MQ-3 データシート](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/res/MQ-3.pdf)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_-_Gas_Sensor(MQ3) から作成されました -->

## 技術サポート & 製品ディスカッション

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 産業用センサーへのアップグレード可能

SenseCAP [S2110 コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) と [S2100 データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) を使用することで、Grove を簡単に LoRaWAN® センサーに変えることができます。Seeed はプロトタイピングを支援するだけでなく、SenseCAP シリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66 ハウジング、Bluetooth 設定、グローバル LoRaWAN® ネットワークとの互換性、内蔵 19 Ah バッテリー、そして強力な APP サポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして 8-in-1 気象ステーション用センサーが含まれています。次の成功する産業プロジェクトには最新の SenseCAP S210x をお試しください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width="{800}" src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>