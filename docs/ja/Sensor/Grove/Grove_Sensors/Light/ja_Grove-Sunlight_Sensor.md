---
description: Grove - Sunlight Sensor
title: Grove - Sunlight Sensor
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Sunlight_Sensor
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/Grove_sunlight_sensor_view.jpg" /></div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Sunlight-Sensor-p-2530.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border="0" /></a></p>

Grove - Sunlight Sensorは、UV光、可視光、赤外線を検出する能力を持つ多チャンネルデジタル光センサーです。

このデバイスはSiLabsの新しいセンサーであるSI1151を基にしています。SI1151は、低消費電力の反射型赤外線近接センサー、UV指数センサー、環境光センサーであり、I2Cデジタルインターフェースとプログラム可能なイベント割り込み出力を備えています。このデバイスは、広い動的範囲と直射日光を含むさまざまな光源の下で優れた性能を提供します。

Grove - Sunlight SensorにはオンボードのGroveコネクタが含まれており、Arduinoに簡単に接続できます。このデバイスを使用して、例えば簡単なUV検出器のような光を検出する必要があるプロジェクトを作成することができます。

デバイスの主なチップはSI1151に更新されましたが、SI1145のチュートリアルは引き続き利用可能です。

## バージョン

| 製品バージョン                  | 変更点                                                            | リリース日   |
|----------------------------------|--------------------------------------------------------------------|---------------|
| Grove - Sunlight Sensor v1.0     | 初期リリース                                                      | 2020年2月12日 |
| Grove - Sunlight Sensor v2.0     | Si1145をSi1151-AB00-GMRに置き換え                                  | 2021年7月27日 |

## 産業用センサーへのアップグレード可能

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングを支援するだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

SenseCAP S210xシリーズの産業用センサーは、環境センシングのための即時使用可能な体験を提供します。光強度検出のための高性能で堅牢なS2102ワイヤレス光強度センサーをご参照ください。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトのために最新の[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)を試してみてください。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size={4}><strong>SenseCAP 産業用センサー</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank">
            <img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S2102-.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank">
          <strong>S2102 Light</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## 特徴

---

- デジタル光センサー
- 精度を向上させる広いスペクトル検出範囲。
- プログラム可能な設定により、さまざまな用途に対応可能。
- 太陽光を直接検出
- Grove互換
- I2Cインターフェース（7ビット）

:::tip
Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## 仕様

---
|||
|---|---|
|動作電圧 |3.0-5.5V|
|動作電流 |3.5mA|
|波長範囲 |280-950nm|
|デフォルトI2Cアドレス| 0x60|
|動作温度| -45-85℃|

## ハードウェア概要

---

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/Hardware_overview.jpg" /></div>

- Groveコネクタ - VCC、GND、SDA、SCLを含む4ピンインターフェース
- LED - LEDドライバーピン
- INT - プログラム可能な割り込み出力
- SI1151 - IC

## はじめに

---
このセクションを終えると、Grove - Sunlight Sensorを数ステップで動作させることができます。

### SI1145 - Arduinoでの使用

**必要な材料**

| Seeeduino V4.2 |Grove - Sunlight Sensor|
|--------------|-------------|
|<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/sunlight_sensor.png" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Sunlight-Sensor.html)|

:::caution
Arduinoを初めて使用する場合は、[こちら](https://wiki.seeedstudio.com/ja/Getting_Started_with_Seeeduino)を参照してArduinoの使い方を学んでください。
:::

**ハードウェアの接続**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/Grove_sunlight_hardware_connect.jpg" /></div>

:::note
メインコントロールボードに複数のモジュールを接続する必要がある場合は、[Groveベースシールド](https://wiki.seeedstudio.com/ja/Base_Shield_V2/)を使用すると作業が簡単になります。
:::

**ダウンロード**

[こちら](https://github.com/Seeed-Studio/Grove_Sunlight_Sensor/tree/master)をクリックしてライブラリをダウンロードし、[追加](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)してください。

Arduino IDEを起動し、**File>Examples>Grove_Sunlight_Sensor>SI1145DEMO**をクリックしてテストコードを開きます。

```cpp
/*
    これはGrove - Sunlight Sensorライブラリをテストするデモです
*/

#include <Wire.h>

#include "Arduino.h"
#include "SI114X.h"

SI114X SI1145 = SI114X();

void setup() {

    Serial.begin(115200);
    Serial.println("Si1145の初期化を開始します！");

    while (!SI1145.Begin()) {
        Serial.println("Si1145が準備できていません！");
        delay(1000);
    }
    Serial.println("Si1145が準備できました！");
}

void loop() {
    Serial.print("//--------------------------------------//\r\n");
    Serial.print("可視光: "); Serial.println(SI1145.ReadVisible());
    Serial.print("赤外線: "); Serial.println(SI1145.ReadIR());
    // 実際のUV値はレジスタ値を100で割る必要があります。詳細はデータシートを参照してください。
    Serial.print("紫外線: ");  Serial.println((float)SI1145.ReadUV() / 100);
    delay(1000);
}
```

**ボードの選択とコードのアップロード**

Tools>BoardをクリックしてArduino UNOを選択し、対応するシリアルポートを選択します。

次に、Upload（CTRL+U）をクリックしてテストコードをアップロードします。エラープロンプトが表示された場合は、[**こちら**](https://wiki.seeedstudio.com/ja/Arduino_Common_Error)を参照してください。

**結果の確認**

アップロードが完了したら、Arduino IDEのシリアルモニターを開き、データを確認できます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/output.png" /></div>

:::note
    Vis - 可視光、単位はlm
    IR - 赤外線、単位はlm
    UV - 紫外線指数
:::

Grove - Sunlight Sensorを太陽の下に置いて、天気が良いかどうか確認してみましょう。

### SI1151 - Arduinoでの使用

**必要な材料**

| Seeeduino V4.2 |Grove - Sunlight Sensor|
|--------------|-------------|
|<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/sunlight_sensor.png" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Sunlight-Sensor.html)|

:::caution
Arduinoを初めて使用する場合は、[こちら](https://wiki.seeedstudio.com/ja/Getting_Started_with_Seeeduino)を参照してArduinoの使い方を学んでください。
:::

**ハードウェアの接続**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/Grove_sunlight_hardware_connect.jpg" /></div>

:::note
メインコントロールボードに複数のモジュールを接続する必要がある場合は、[Groveベースシールド](https://wiki.seeedstudio.com/ja/Base_Shield_V2/)を使用すると作業が簡単になります。
:::

**ダウンロード**

[こちら](https://github.com/Seeed-Studio/Grove_Sunlight_Sensor/tree/master)をクリックしてライブラリをダウンロードし、[追加](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)してください。

Arduino IDEを起動し、**File>Examples>Grove_Sunlight_Sensor>SI1151**をクリックしてテストコードを開きます。

```cpp
#include "Si115X.h"

Si115X si1151;

/**
 * 設定の初期化
 */
void setup()
{
    Wire.begin();
    Serial.begin(115200);
    if (!si1151.Begin()) {
        Serial.println("Si1151が準備できていません！");
        while (1) {
            delay(1000);
            Serial.print(".");
        };
    }
    else {
        Serial.println("Si1151が準備できました！");
    }
}

/**
 * レジスタからデータを読み取るループ
 */
void loop()
{
    Serial.print("赤外線: ");
    Serial.println(si1151.ReadIR());
    Serial.print("可視光: ");
    Serial.println(si1151.ReadVisible());

    delay(500);
}
```

**ボードの選択とコードのアップロード**

Tools>BoardをクリックしてArduino UNOを選択し、対応するシリアルポートを選択します。

次に、Upload（CTRL+U）をクリックしてテストコードをアップロードします。エラープロンプトが表示された場合は、[**こちら**](https://wiki.seeedstudio.com/ja/Arduino_Common_Error)を参照してください。

**結果の確認**

アップロードが完了したら、Arduino IDEのシリアルモニターを開き、データを確認できます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/output.png" /></div>

:::note
Vis - 可視光、単位は lm  
IR - 赤外線、単位は lm  
UV - 紫外線指数（UN Index）
:::

では、Grove - Sunlight Sensor を太陽の下に置いて、良い天気かどうか確認してみましょう。

### SI1145 - Raspberry Pi で遊ぶ

**必要な材料**

| Raspberry Pi 4 Model B | Grove - Base Hat for Raspberry Pi | Grove - Sunlight Sensor |
|--------------|-------------|-----------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/raspberry_pi.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/hat.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/sunlight_sensor.png" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Sunlight-Sensor.html)|

**ハードウェアの接続**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/connection_2.jpg" /></div>

**ステップ 1.** Grove - Sunlight Sensor を Grove - Base Hat for Raspberry Pi の **I2C** ポートに接続し、Raspberry Pi 4 Model B に差し込みます。その後、Raspberry Pi 4 Model B を PC に接続します。

**ステップ 2.** Raspberry Pi のシステムにアクセスした後、**[Seeed_Python_SI114X](https://github.com/Seeed-Studio/Seeed_Python_SI114X)** を git clone し、以下のコマンドを挿入して **grove.py** をインストールします：

```shell
pip3 install Seeed-grove.py
```

または、Raspberry Pi のようなサポートされている GNU/Linux システムでは、PyPI からローカルにドライバをインストールできます：

```Shell
pip3 install seeed-python-si114x
```

**ステップ 3.** システム全体にインストールする場合（必要な場合があります）：

```Shell
sudo pip3 install seeed-python-si114x
```

PyPI からローカルにドライバをアップグレードするには、以下のコマンドを挿入します：

```Shell
pip3 install --upgrade seeed-python-si114x
```

**ソフトウェア**

```python
import seeed_si114x
import time
import signal
def handler(signalnum, handler):
    print("Ctrl C を使用して終了してください")
def main():
    SI1145 = seeed_si114x.grove_si114x()
    print("Ctrl C を使用して終了してください")
    signal.signal(signal.SIGTSTP, handler) # Ctrl-z
    signal.signal(signal.SIGQUIT, handler) # Ctrl-\
    while True:
        print('Visible %03d UV %.2f IR %03d' % (SI1145.ReadVisible , SI1145.ReadUV/100 , SI1145.ReadIR),end=" ")
        print('\r', end='')
        time.sleep(0.5)
if __name__  == '__main__':
    main()
```

デモコードを実行する前に、ボードの対応する i2c 番号を確認する必要があります：

```Shell
ls /dev/i2c*
```

i2c デバイスが正常に動作している場合、以下が表示されます：

```Shell
/dev/i2c-1
```

**動作しない場合**、コマンド **sudo raspi-config** を使用して i2c デバイスを有効にし、再起動してください：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/1.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/2.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/3.png" /></div>

**ステップ 4.** 以下のコマンドでデモを実行します：

```Shell
cd Seeed_Python_SI114X-Si115x
```

```Shell
python3 examples/BasicRead.py 
```

:::tip
すべてが正常に動作している場合、以下のように結果が表示されます：
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/outcome.png" /></div>

:::note
**Visible** は **周囲の可視光** を指し、**UV** は **紫外線指数 (UV Index)** を指します。一方、**IR** は **周囲の赤外線** を意味します。
:::

### SI1151 - Raspberry Pi で遊ぶ

**必要な材料**

| Raspberry Pi 4 Model B | Grove - Base Hat for Raspberry Pi | Grove - Sunlight Sensor |
|--------------|-------------|-----------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/raspberry_pi.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/hat.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/sunlight_sensor.png" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Sunlight-Sensor.html)|

**ハードウェアの接続**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/connection_2.jpg" /></div>

**ステップ 1.** Grove - Sunlight Sensor を Grove - Base Hat for Raspberry Pi の **I2C** ポートに接続し、Raspberry Pi 4 Model B に差し込みます。その後、Raspberry Pi 4 Model B を PC に接続します。

**ステップ 2.** Raspberry Pi のシステムにアクセスした後、**[Grove_Sunlight_Sensor ライブラリ](https://github.com/Seeed-Studio/Grove_Sunlight_Sensor/tree/Si1151)** を git clone します：

```Shell
git clone git clone git@github.com:Seeed-Studio/Grove_Sunlight_Sensor.git -b Si1151 Si1151_library
```

デモコードを実行する前に、ボードの対応する i2c 番号を確認する必要があります：

```Shell
ls /dev/i2c*
```

i2c デバイスが正常に動作している場合、以下が表示されます：

```Shell
/dev/i2c-1
```

**動作しない場合**、コマンド **sudo raspi-config** を使用して i2c デバイスを有効にし、再起動してください：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/1.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/2.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/3.png" /></div>

**ステップ 3.** 以下のコマンドでデモを実行します：

```Shell
cd Seeed_Python_SI114X-Si115x
```

```Shell
python3 seeed_si115x.py
```

:::tip
すべてが正常に動作している場合、以下のように結果が表示されます：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/Sunlighttu.png" /></div>

:::note
**Visible** は **周囲の可視光** を指し、**UV** は **紫外線指数 (UV Index)** を指します。一方、**IR** は **周囲の赤外線** を意味します。
:::

## 参考文献

**スペクトル**

この章の内容は [**Wikipedia - Spectrum**](https://en.wikipedia.org/wiki/Spectrum) から取得しました。元のページを表示するにはクリックしてください。

スペクトル（複数形：spectra または spectrums[1]）とは、特定の値の集合に限定されず、連続体内で無限に変化する状態を指します。この言葉は、科学的に初めて光学の分野で使用され、プリズムを使用して分離された可視光の虹色を説明するために用いられました。光に関する科学的理解が進むにつれて、この言葉は電磁スペクトル全体を指すようになりました。

その後、スペクトルは光学以外のトピックにも類推的に適用されるようになりました。例えば、政治的意見のスペクトル、薬の作用範囲のスペクトル、または自閉症スペクトルについて話すことができます。これらの使用法では、スペクトル内の値が正確に定量化可能な数値や定義に関連付けられていない場合があります。このような使用法は、広範な条件や行動を一つのタイトルの下にまとめて研究し、議論を容易にすることを意味します。

現代のスペクトルの使用法では、両端の極端な状態の間に統一的なテーマが存在することが一般的です。一部の古い使用法では統一的なテーマが存在しませんでしたが、以下に示す一連の出来事を通じて現代の使用法につながりました。数学における現代の使用法は統一的なテーマから進化しましたが、それを認識するのが難しい場合があります。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/Grove_sunlight_spectrum.jpg" /></div>

**ルーメン**

この章の内容は [**Wikipedia - Lumen (unit)**](https://en.wikipedia.org/wiki/Lumen_(unit)) から取得しました。元のページを表示するにはクリックしてください。

ルーメン（記号：lm）は、光束のSI派生単位であり、光源から放射される可視光の総量を測定するものです。光束は、異なる波長の光に対する人間の目の感度の変化を反映する点で、パワー（放射束）とは異なります。一方、放射束の測定は、目が認識できるかどうかに関係なく、放射されるすべての電磁波の総パワーを示します。ルーメンはルクスと関連しており、1ルクスは1平方メートルあたり1ルーメンに相当します。

**紫外線指数**

この章の内容は [**Wikipedia - Ultraviolet index**](https://en.wikipedia.org/wiki/Ultraviolet_index) から取得しました。元のページを表示するにはクリックしてください。

紫外線指数（UV指数）は、特定の場所と時間における日焼けを引き起こす紫外線（UV放射）の強さを測定する国際標準です。このスケールは1992年にカナダの科学者によって開発され、1994年に国連の世界保健機関（WHO）および世界気象機関（WMO）によって採用・標準化されました。主に一般市民向けの日々の予報に使用されており、現在では時間ごとの予報としても利用可能になっています。

UV指数は、日焼けを引き起こすUV放射の強度に直接比例する開放型の線形スケールとして設計されています。例えば、肌が明るい個人（日焼け止めや日焼けなし）がUV指数6で30分で日焼けを始める場合、UV指数12では約15分で日焼けを始めると予想されます。つまり、UVが2倍になると、日焼けの速度も2倍になります。

UV指数の目的は、人々がUV放射から効果的に自分を守ることを助けることです。UV放射は適度であれば健康に良い影響を与えますが、過剰になると日焼け、皮膚の老化、DNA損傷、皮膚がん、免疫抑制[1]、および白内障などの目の損傷を引き起こします（紫外線放射の人間の健康関連効果のセクションを参照）。公衆衛生機関は、UV指数が3以上の場合に屋外で長時間過ごす場合は、肌に日焼け止めを塗り、帽子やサングラスを着用するなどして自分を守ることを推奨しています。以下の表でより詳細な推奨事項を確認できます。

その日の予測されるUV指数がさまざまな数値範囲内にある場合、保護のための推奨事項は以下の通りです：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/uv%20index.png" /></div>

**注意事項**

UV指数と推奨事項を解釈する際には、以下に注意してください：

- 地表に到達するUV放射の強度は、空の太陽の角度に依存します。毎日、太陽は正午に最も高い角度（最も強い強度、最も短い影）を達成しますが、これは時計の12:00と正確に一致するわけではありません。これは、太陽時と特定のタイムゾーンの地方時の違いによるものです。一般的に、太陽が十分に真上にある場合、人々の影が身長より短いときにUVリスクが高くなります。
- 同様に、水平面に対する異なる角度の表面では、UV強度が高くなる場合や低くなる場合があります。例えば、人々が屋外で歩いたり立ったりしている場合、目や顔などの垂直面へのUV曝露は、夏の終わりやスキー場の冬の午後など、太陽が低い位置にあるときに実際により深刻になる可能性があります。これは、指数の基礎となる測定機器が平らな水平面であるという事実の一部によるものです。
UV強度は、雪や水、砂、コンクリートなどの明るい表面からの反射によってほぼ2倍になる可能性があります。
- 推奨事項は、平均的な肌が薄く日焼けした成人を対象としています。肌が暗い人はより多くの日光曝露に耐える可能性が高いですが、子供、高齢者、特に肌が非常に明るい成人、医療上の理由や前日のUV曝露による日光感受性が高い人には追加の予防策が必要です。（UV放射からの肌の回復には通常2日以上かかります。）
- UV指数の計算方法により、技術的には主にUVB放射によって引き起こされる日焼けのリスクを表しています。しかし、UVA放射も損傷（光老化、黒色腫）を引き起こします。一部の条件下では、特にほとんどの日焼けベッドでは、UVAレベルがUV指数で説明されるものよりも不釣り合いに高くなる場合があります。広域スペクトル（UVA/UVB）の日焼け止めを使用することで、この問題に対処することができます。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/res/Grove_-_Sunlight_Sensor_v1.0_SCH%26PCB%26PDF.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

---

- [PDF形式の回路図](https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/res/Grove_-_Sunlight_Sensor_v1.0.pdf)
- [Eagleファイル形式の回路図](https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/res/Grove_-_Sunlight_Sensor_v1.0_SCH%26PCB%26PDF.zip)
- [Si1145データシート](https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/res/Si1145-46-47.pdf)
- [Grove - Sunlight SensorのGithubリポジトリ](https://github.com/Seeed-Studio/Grove_Sunlight_Sensor)
- [スペクトラム](https://en.wikipedia.org/wiki/Spectrum)
- [ルーメン（単位）](https://en.wikipedia.org/wiki/Lumen_(unit))
- [紫外線指数](https://en.wikipedia.org/wiki/Ultraviolet_index)
- [Grove - Sunlight Sensor v2.0](https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/res/v2.0/Grove-SunlightSensorv2.0.zip)
- [SI1151-AB00-GMRデータシート](https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/res/v2.0/SI1151-AB00-GMR.pdf)

## プロジェクト

**環境キューブ！あなたの足元の土地を知ろう！** 必要なセンサーをすべて備えたキューブで、農業など幅広い用途に適しています。あなたの足元の土地を知りましょう！

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/dhairya-parikh/the-environment-cube-know-the-land-beneath-you-b3c2dd/embed' width='350'></iframe>

## 技術サポートと製品ディスカッション

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>