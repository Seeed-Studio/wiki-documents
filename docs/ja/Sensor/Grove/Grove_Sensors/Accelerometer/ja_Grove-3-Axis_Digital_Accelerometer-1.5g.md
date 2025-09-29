---
description: Grove - 3軸デジタル加速度センサー(±1.5g)
title: Grove - 3軸デジタル加速度センサー(±1.5g)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-3-Axis_Digital_Accelerometer-1.5g
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<div>
  <table>
    <colgroup>
      <col width="50%" />
      <col width="50%" />
    </colgroup>
    <tbody>
      <tr className="odd">
        <td><div className="center">
            <div className="floatnone">
              <img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/3_aix_acc.jpg" />
            </div>
          </div></td>
        <td><div className="center">
            <div className="floatnone">
              <img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/Grove-3-Axis_v1.3.jpg" />
            </div>
          </div></td>
      </tr>
      <tr className="even">
        <td><div style={{}}>
            Grove - 3軸デジタル加速度センサー v1.2
          </div></td>
        <td><div style={{}}>
            Grove - 3軸デジタル加速度センサー v1.2b
          </div></td>
      </tr>
    </tbody>
  </table>
  3軸デジタル加速度センサーは、方向検出、ジェスチャー検出、動作検出などのプロジェクトにおいて重要な部品です。この3軸デジタル加速度センサー(±1.5g)は、Freescaleの低消費電力モジュールMMA7660FCを基にしています。最大10,000gの高衝撃耐性と、サンプルレートの設定可能性を特徴としています。測定範囲がそれほど大きくない用途においては、耐久性があり、省エネルギーでコスト効率が高いため、優れた選択肢です。
</div>


[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer(%C2%B11.5g)-p-765.html)


仕様
--------------

-   動作電圧: 3.0 - 5.5V
-   オフモード電流: 0.4μA
-   スタンバイモード電流: 2μA
-   アクティブモード電流: 1 ODRで47 μA
-   テスト範囲: ±1.5g
-   感度: 21LSB/g
-   Suli互換ライブラリ

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::
対応プラットフォーム
-------------------

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上記で対応していると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::


デモンストレーション
-------------

### Arduinoを使用する場合

ここでは、このセンサーから生のデータと「g」で測定されたデータを取得する方法を示します。

Groveケーブルを使用して、このモジュールをGrove - Base ShieldのI2Cポートに接続します。

<div class="admonition note">
<p class="admonition-title">注意</p>
このモジュールの割り込み機能を有効にしたい場合は、基板上でブレークアウトされたINTはんだパッドを、割り込みサービスルーチンが可能なArduinoのピンに接続する必要があります。
</div>

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/Digital_Accelerometer_Sensor_Connector1.5g.jpg" alt="pir" width={600} height="auto" /></p>

リソースセクションで提供されているライブラリをインストールしてください。

コードを次のパスから直接開きます: File -> Example -> DigitalAccelerometer_MMA7660FC -> MMA7660FC_Demo。

このプログラムでは、センサーからの加速度情報がI2Cバスを介してSeeeduinoに送信され、その後Seeeduinoがそれをシリアルモニターに表示します。
シリアルモニターを開いて結果を確認してください。

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/Grove-3-Axis_Digital_Accelerometer-1.5g-.jpg" alt="pir" width={600} height="auto" /></p>

このセンサーの出力は、生データと重力単位「g」に変換された3軸加速度情報の2つの部分で構成されています。

### Raspberry Pi を使用する場合

1. Raspberry Pi と GrovePi または GrovePi+ を用意してください。

2. 開発環境の設定を完了している必要があります。設定がまだの場合は、[こちら](/ja/GrovePi_Plus/)を参照してください。

3. 接続

- センサーを Grove ケーブルを使用して GrovePi の I2C ソケット（i2c-x(1~3)）に接続します。

4. デモディレクトリに移動します：

       cd yourpath/GrovePi/Software/Python/

- コードを確認するには以下を実行します：

```
    nano grove_i2c_accelerometer.py   # "Ctrl+x" で終了 #
```
```
    import time
    import grovepi

    # Grove Accelerometer (+/- 1.5g) を任意の I2C ポート（例: I2C-1）に接続
    # I2C アドレス 0x4c で見つかります
    # SCL, SDA, VCC, GND

    while True:
        try:
            print grovepi.acc_xyz()
            time.sleep(.5)

        except IOError:
            print "Error"
```

5. デモを実行します。
```
    sudo python grove_i2c_accelerometer.py
```

参考
---------

以下の2つの図は、結果の物理的な意味を理解するのに役立ちます。

最初の図は各軸の方向について説明しています：
<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/MMA7660_Direction.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/MMA7660_Direction.jpg" alt="pir" width={600} height="auto" /></p>

2番目の図は具体例を示しています：

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/Sensing_Direction_1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/Sensing_Direction_1.jpg" alt="pir" width={600} height="auto" /></p>


## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/res/Grove-3-Axis_Digital_Accelerometer-1.5g-Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



リソース
---------

-   [MMA7660FC のデータシート](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/res/MMA7660FC.pdf)
-   [Grove - 3-Axis Digital Accelerometer Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/res/Grove-3-Axis_Digital_Accelerometer-1.5g-Eagle_File.zip)
-   [3-Axis Digital Accelerometer(±1.5g) の GitHub リポジトリ](https://github.com/Seeed-Studio/Accelerometer_MMA7660)


## プロジェクト

**傾きで作動するスピニングファンライトスティック**  
ポータブル LED カラースティックは、振る動作に反応します。追加のファンとアラーム付き。

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/chuartdo/tilt-activated-spinning-fan-light-stick-e05cec/embed" width={350} />


**Lean Green RC Sailing Machine**  
インターネット接続デバイスで、サーボを制御し、センサー（GPS/ジャイロ/加速度/コンパス）の更新を GSM セルリンクを介してリアルタイムで送信します。

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/anemoi/lean-green-rc-sailing-machine-2cdde5/embed" width={350} />

<!-- この Markdown ファイルは https://www.seeedstudio.com/wiki/Grove_-_3-Axis_Digital_Accelerometer(±1.5g) から作成されました -->

## 技術サポートと製品ディスカッション
弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートを提供しております。お客様の好みやニーズに合わせた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>