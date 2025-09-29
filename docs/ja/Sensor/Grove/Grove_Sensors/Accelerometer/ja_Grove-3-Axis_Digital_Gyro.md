---
description: Grove - 3軸デジタルジャイロ
title: Grove - 3軸デジタルジャイロ
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-3-Axis_Digital_Gyro
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Grove-3-Axis_Digital_Gyro.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Grove-3-Axis_Digital_Gyro.jpg" alt="pir" width={600} height="auto" /></p>


Grove - 3軸デジタルジャイロモジュールは、ITG 3200をベースにしています。これは、世界初のシングルチップ、デジタル出力、3軸MEMSモーション処理ジャイロで、ゲーム、3Dマウス、インターネット接続型デジタルテレビやセットトップボックス向けのモーションベースリモートコントロールアプリケーションに最適化されています。ITG-3200は、ジャイロ出力をデジタル化するための3つの16ビットアナログ-デジタルコンバータ（ADC）、ユーザー選択可能な内部ローパスフィルタ帯域幅、および高速モードI2C（400kHz）インターフェースを備えています。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Gyro-p-750.html)

特徴
--------

-   電源電圧: 3.3V, 5V
-   動作電流: 6.5mA
-   待機電流: 5μA
-   感度: 14 LSBs per °/sec
-   フルスケール範囲: ±2000°/sec
-   加速度: 10,000g for 0.3ms
-   I2Cインターフェース
-   ±2000°/sのフルスケール範囲と14.375 LSBs per °/sの感度
-   3つの統合16ビットADC
-   オンチップ温度センサー
-   統合アンプとローパスフィルタ
-   温度および湿度耐性のための気密封止
-   RoHSおよびグリーン準拠

:::tip
    Groveモジュールに関する詳細は、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::
対応プラットフォーム
-------------------

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    上記で対応プラットフォームとして挙げられているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能なMCUプラットフォームに対してソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::
デモンストレーション
-------------

このデモでは、このデジタルジャイロからデータを取得する方法を示します。データはrad/sの単位で表示されます。

ここでは、Grove - 3軸デジタルジャイロとSeeeduino V3.0が必要です。

### ハードウェアのインストール

ハードウェアのインストールは非常に簡単です。SeeeduinoにはI2C Groveがあるため、

必要なのは、Groveケーブルを使用してI2C Groveに接続することだけです。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Grove-3-Axis_Digital_Gyro_Hardware.JPG) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Grove-3-Axis_Digital_Gyro_Hardware.JPG" alt="pir" width={600} height="auto" /></p>


### コードのダウンロードとアップロード

ライブラリをGitHubからダウンロードできます。[こちら](https://github.com/Seeed-Studio/Grove_3_Axis_Digital_Gyro/)をクリックして、Arduinoのライブラリフォルダに解凍してください。

次に、File -> examples -> Grove_3_Digital_Gyro -> ITG3200_gyroを開き、デモコードを開きます。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/ITG3200_gyro_ArduinoIde.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/ITG3200_gyro_ArduinoIde.jpg" alt="pir" width={600} height="auto" /></p>


<!-- コードをアップロードするには、Uploadをクリックしてください。Arduinoの使い方について問題がある場合は、[こちら](/ja/Getting_Started_with_Seeeduino)をクリックしてヘルプをご覧ください。 -->



### 結果を確認する

シリアルモニターを開いて結果を確認できます。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Grove-3-Axis_Digital_Gyro_SerialDta.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Grove-3-Axis_Digital_Gyro_SerialDta.jpg" alt="pir" width={600} height="auto" /></p>

参考
---------

以下の図は3軸の方向を示しています。結果の物理的な意味を理解するのに役立ちます。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Gyro_Reference_1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Gyro_Reference_1.jpg" alt="pir" width={600} height="auto" /></p>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/res/Grove-3-Axis_Digital_Gyro_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

-   [ITG-3200のデータシート](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/res/ITG-3200.pdf)
-   [Grove - 3軸デジタルジャイロ Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/res/Grove-3-Axis_Digital_Gyro_Eagle_File.zip)
-   [デジタルジャイロライブラリ](https://github.com/Seeed-Studio/Grove_3_Axis_Digital_Gyro)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_-_3-Axis_Digital_Gyro から作成されました -->

## 技術サポートと製品ディスカッション
弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>