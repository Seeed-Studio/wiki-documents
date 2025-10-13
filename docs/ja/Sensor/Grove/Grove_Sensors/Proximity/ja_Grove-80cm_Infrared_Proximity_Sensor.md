---
title: Grove - 80cm 赤外線近接センサー
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Grove-80cm_Infrared_Proximity_Sensor/
slug: /ja/Grove-80cm_Infrared_Proximity_Sensor
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-80cm_Infrared_Proximity_Sensor/img/Image_of_PSD.jpg)

80cm赤外線近接センサーは汎用型距離測定センサーです。このセンサーSharpGP2Y0A21YKは、小型パッケージと非常に低い電流消費を特徴とし、連続的に距離を測定し、10cm（4インチ）から80cm（30インチ）の範囲で対応するアナログ電圧を返します。テレビ、パソコン、車などで使用可能です。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-80cm-Infrared-Proximity-Sensor-p-788.html)

特徴
--------

- 簡単に使用可能
- 広い供給電圧範囲：2.5V–7V
- Groveインターフェース

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

応用例
-----------------

- 水滴の保存
- おもちゃ
- ロボット工学

仕様
-------------

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
</tr>
<tr align="center">
<th scope="row">
動作電圧
</th>
<td>
2.5V
</td>
<td>
5V
</td>
<td>
7V
</td>
</tr>
<tr align="center">
<th scope="row">
アナログ出力電圧（80cm）
</th>
<td>
0.25V
</td>
<td>
0.4V
</td>
<td>
0.5V
</td>
</tr>
<tr align="center">
<th scope="row">
平均電流消費量
</th>
<td>
-
</td>
<td>
33mA
</td>
<td>
50mA
</td>
</tr>
</table>

対応プラットフォーム
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上記で対応していると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

使用方法
-----

### Arduinoでの使用

赤外線近接センサーは簡単に使用できます。以下に示すように、電圧読み取り値と距離の関係があります。電圧を読み取ることで、センサーの前にある物体からの距離を示します。

- 3ピンコネクタをセンサーに接続し、4ピンコネクタを**Grove-Base Shield**のA1ポートに接続します。

<div class="admonition note">
<p class="admonition-title">注意</p>
このセンサーは非常に小型で、日本ソルダーレス端子（JST）コネクタと呼ばれる小型コネクタを使用しています。このコネクタには3本のワイヤーがあります：Ground、Vcc、および出力信号。このセンサーは連続的に動作し、読み取りサイクルを開始するためのクロックを必要としないため、どのマイクロコントローラーとも簡単にインターフェースできます。ArduinoおよびSeeeduinoの場合、センサーの3ピンコネクタをGrove Base Shieldの4ピンコネクタに変換するための4ピンから3ピンへのワイヤーを準備しています。これにより、Seeeduino Groveインターフェースと互換性があります。
</div>

- Arduino/SeeeduinoをUSBケーブルで接続します。

![](https://files.seeedstudio.com/wiki/Grove-80cm_Infrared_Proximity_Sensor/img/80cm_Infrared.jpg)

- 以下のコードを新しいArduinoスケッチにコピーして貼り付けます。

```
    #define IR_PROXIMITY_SENSOR A1 // センサーに接続されているアナログ入力ピン
    #define ADC_REF 5// ADCの基準電圧は5Vです。SeeeduinoボードのVccスイッチが3V3に切り替わる場合、ADC_REFは3.3にする必要があります。
    float voltage;// センサー電圧。データシートのページ4またはページ5の図に基づいて反射物体までの距離を計算または確認できます。

    void setup()
    {
        // シリアル通信を9600bpsで初期化します：
        Serial.begin(9600);
    }

    void loop()
    {
        voltage = getVoltage();
        Serial.print("センサー電圧 = " );                       
        Serial.print(voltage);
        // 次のループまで500ミリ秒待機
        delay(500);
    }
    /****************************************************************************/
    /*関数: アナログピンに接続されたセンサーから電圧を取得します*/
    /*パラメータ: -void                                                       */
    /*戻り値:   -float, アナログピンの電圧                        */
    float getVoltage()
    {
        int sensor_value;
        int sum;  
        // アナログ入力値を読み取ります：
        for (int i = 0;i < 20;i ++)//連続サンプリング20回
        {
            sensor_value = analogRead(IR_PROXIMITY_SENSOR);
            sum += sensor_value;
        }
        sensor_value = sum / 20;
        float voltage;
        voltage = (float)sensor_value*ADC_REF/1024;
        return voltage;
    }
```

- コードをアップロードします。
- シリアルモニターを開くと、電圧を取得できます。以下の図に基づいて、反射物体までの距離を計算または確認することができます。

![](https://files.seeedstudio.com/wiki/Grove-80cm_Infrared_Proximity_Sensor/img/Infrared_Proximity.jpg)

<div class="admonition note">
<p class="admonition-title">注意</p>
三角形のエミッターから反射点、そして受信機までの基本的な三角法のため、検出器の出力は測定される距離に対して非線形です。
</div>

### Raspberry Pi を使用する場合

1. Raspberry Pi と GrovePi または GrovePi+ を準備してください。

2. 開発環境の設定を完了している必要があります。
設定がまだの場合は [こちら](/ja/GrovePi_Plus/) を参照してください。

3. 接続

- センサーを Grove ケーブルを使用して GrovePi のソケット D4 に接続します。

4. デモディレクトリに移動します:

    cd yourpath/GrovePi/Software/Python/

- コードを確認するには以下を実行します

```
    nano grove_infrared_distance_interrupt.py    # "Ctrl+x" で終了 #
```

```
    import time
    import grovepi

    # Grove 赤外線距離割り込みセンサーをデジタルポート D4 に接続
    # SIG,NC,VCC,GND
    sensor = 4

    grovepi.pinMode(sensor,"INPUT")

    while True:
        try:
            # センサーは受信した赤外線光の強度が校正されたレベルを超えると
            # LOW を返し、オンボード LED が点灯します
            if grovepi.digitalRead(sensor) == 0:
                print "何かを検出しました"
            else:
                print "何もありません"

            time.sleep(.5)

        except IOError:
            print "エラー"
```

5. デモを実行します。

```
    sudo python grove_infrared_distance_interrupt.py
```

参考情報
---------

この新しいレンジャーは三角測量と小型の線形 CCD 配列を使用して、視野内の物体の距離や存在を計算します。基本的なアイデアは以下の通りです: エミッターから赤外線光のパルスが放射されます。この光は視野内を進み、物体に当たるか、ただ進み続けます。物体がない場合、光は反射されず、読み取り結果は物体がないことを示します。光が物体に反射すると、検出器に戻り、反射点、エミッター、検出器の間に三角形を形成します。

![](https://files.seeedstudio.com/wiki/Grove-80cm_Infrared_Proximity_Sensor/img/Theory_of_PSD.jpg)

この三角形の角度は物体までの距離に応じて変化します。これらの新しい検出器の受信部分は、反射光を上記の三角形の角度に基づいて、内部の線形 CCD 配列のさまざまな部分に伝達する精密レンズです。CCD 配列は反射光が戻ってきた角度を判断し、それに基づいて物体までの距離を計算できます。

この新しい測距方法は、周囲光による干渉にほぼ免疫であり、検出される物体の色に対して驚くほど無関心です。直射日光下で黒い壁を検出することも可能です。

リソース
---------

- [GP2Y0A21YK データシート](https://files.seeedstudio.com/wiki/Grove-80cm_Infrared_Proximity_Sensor/res/GP2Y0A21YK.pdf)

## プロジェクト

**Arduino101 BLE Autonomous Rover**  
Arduino101 BLE Roverにセンサーを追加し、自律走行を実現するプロジェクト。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/31926/arduino101-ble-autonomous-rover-2cb19f/embed' width='350'></iframe>

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_-_80cm_Infrared_Proximity_Sensor から作成されました -->

## 技術サポートと製品に関する議論

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを用意しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
