---
description: Grove - 3軸コンパス V1.0
title: Grove - 3軸コンパス V1.0
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-3-Axis_Compass_V1.0
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/Grove-3-Axis_Compass_V1.0.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/Grove-3-Axis_Compass_V1.0.jpg" alt="pir" width={600} height="auto" /></p>


この3軸デジタルコンパスは、低磁場磁気センサーを搭載したマルチチップモジュールHMC5883Lを特徴としており、1°から2°の方位精度を提供します。HMC5883Lは、高解像度のHMC118Xシリーズ磁気抵抗センサーと、増幅、オートデガウスストラップドライバー、オフセットキャンセル、12ビットADCを含むHoneywellが開発したASICで構成されています。周辺電源管理回路が追加されており、低コストのコンパスおよび磁気測定用として使いやすく信頼性の高いコンパスモジュールです。

<!-- [![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-p-759.html) -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-p-759.html)


仕様
--------------

-   入力電圧: 3.3V, 5V
-   スリープモード電流: 2.5uA
-   測定モード電流: 640uA
-   高解像度
-   簡単に制御可能なI2Cインターフェース
-   3.3Vまたは5.0Vの開発プラットフォームに対応
-   最大116Hzの出力レート
-   高い方位精度

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::
対応プラットフォーム
-------------------

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|


:::caution
    上記で対応プラットフォームとして挙げられているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能なMCUプラットフォームに対してソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

このデモでは、生データの読み取り方法、ローカルの磁気偏角を使用したデータのキャリブレーション方法、および方位角の取得方法を示します。

まず最初に、何か行動を起こす前に、デモで使用するパラメータを準備する必要があります。それがローカルの磁気偏角です。

[磁気偏角のウェブページ](http://www.magnetic-declination.com/)を使用して、度単位で確認できます。例えば、私の場合は -2°37’ で、これは -2.617 度に相当します。

次に、それを度からラジアンに変換します。これで「declinationAngle」が得られます。例えば、私の場合、`declinationAngle = -2.617 * π / 180 = -0.0456752665 rad` となります。有効数字は3桁で十分です。したがって、-0.0456 rad に短縮します。この値をデモコード内の "declinationAngle" の値に置き換えます。

それでは、コンパスを動かしてみましょう。

1. Grove - Base Shield の I2C ポートに 3軸コンパスを接続します。

2. ライブラリファイルをダウンロードします：[Digital Compass Library](https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/res/Digital_Compass.zip)。これを Arduino IDE のライブラリフォルダに解凍します。パスは次の通りです：`..\\arduino-1.0.1\\libraries`。

3. デモを開きます。パスは次の通りです：`File -> Example -> Digital Compass -> HMC5883L_Example`。

    <!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/Digital_Compass1.jpg) -->
    <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/Digital_Compass1.jpg" alt="pir" width={600} height="auto" /></p>

4. 変数 "declinationAngle" の値を、すでに計算した値に置き換えます。

5. コードをアップロードします。

6. シリアルモニターを開いて出力結果を確認します。

    <!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/Digital_Compass2.jpg) -->
    <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/Digital_Compass2.jpg" alt="pir" width={600} height="auto" /></p>

### Raspberry Pi（GrovePi_Plusを使用）で遊ぶ

1. Raspberry Pi と GrovePi または GrovePi+ を用意してください。

2. 開発環境の設定を完了している必要があります。設定がまだの場合は、[こちら](/ja/GrovePi_Plus/)を参照してください。

3. 接続

- センサーを Grove ケーブルを使用して GrovePi の I2C ソケット（1〜3）に接続します。

4. デモのディレクトリに移動します：

       cd yourpath/GrovePi/Software/Python/

- コードを確認します：

```
    nano grove_compass_lib.py       
    nano grove_compass_example.py    
```
```
    import grove_compass_lib
    c=grove_compass_lib.compass()
    while True:
            print "X:",c.x,"Y:",c.y,"X:",c.z,"Heading:",c.headingDegrees
            c.update()
            time.sleep(.1)
```

5. デモを実行します：
```
    sudo python grove_compass_example.py
```

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/res/Grove-3-Axis_Digital_Compass_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

- [Grove-3-Axis Digital Compass Eagle File](https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/res/Grove-3-Axis_Digital_Compass_Eagle_File.zip)
- [HMC5883.pdf](https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/res/HMC5883.pdf "File:HMC5883.pdf")
- [Digital Compass Library](https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/res/Digital_Compass.zip)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_-_3-Axis_Compass_V1.0 から作成されました -->

## 技術サポートと製品ディスカッション
弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>