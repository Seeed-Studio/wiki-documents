---
description: Grove - 3軸デジタル加速度センサー(±400g)
title: Grove - 3軸デジタル加速度センサー(±400g)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-3-Axis_Digital_Accelerometer-400g
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Grove_3Axis_Accelerometer400g.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Grove_3Axis_Accelerometer400g.jpg" alt="pir" width={600} height="auto" /></p>


H3LIS331DLは「nano」ファミリーに属する低消費電力・高性能な3軸線形加速度センサーで、デジタルI2Cシリアルインターフェース標準出力を備えています。このデバイスは、超低消費電力動作モードを特徴としており、高度な省電力機能やスマートなスリープからのウェイクアップ機能を提供します。H3LIS331DLは、±100g/±200g/±400gの動的にユーザーが選択可能なフルスケールを備えており、0.5Hzから1kHzまでの出力データレートで加速度を測定することができます。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer(%C2%B1400g)-p-1897.html)

特徴
--------

-   広い電源範囲 DC3.3V～5V
-   Grove形式
-   3軸センサー
-   小型・低プロファイルパッケージ：3×3×1mm TFLGA
-   低消費電力 3.3Vで300µA（典型値）
-   ±100g /±200g /±400g 動的に選択可能なフルスケール
-   I2Cデジタル出力インターフェース
-   10000gの高衝撃耐性
-   ECOPACK®RoHSおよび「グリーン」準拠

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

応用例
-----------------

-   衝撃検知器
-   衝撃認識とログ記録
-   脳震盪検知

対応プラットフォーム
-------------------

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

使用方法
-----

以下に、この加速度センサーから生データを読み取る方法を示します。

1. [Grove - Base Shield](https://www.seeedstudio.com/depot/grove-base-shield-p-754.html?cPath=132_134)のI2Cポートに接続します。
<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Grove-3-Axis_Digital_Accelerometer_connect_BaseBoard.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Grove-3-Axis_Digital_Accelerometer_connect_BaseBoard.jpg" alt="pir" width={600} height="auto" /></p>


2. [Digital Accelerometer(±400g) Library](https://github.com/Seeed-Studio/Grove_3Axis_Digital_Accelerometer_H3LIS331DL)をダウンロードし、Arduinoインストールフォルダ内のarduino-1.0\\librariesに解凍します。

3. デモコードを以下のパスから直接開きます：File -> Example -> Grove_3Axis_Digital_Accelerometer_H3LIS331DL -> H3LIS331DL_AdjVal。このスケッチは、H3LIS331DLの生データを調整してより正確にするためのものです。

4. コードをアップロードし、シリアルモニターを開きます。

5. シリアルモニターを開き、シリアル出力で説明されている手順に従って参照値を調整します。
<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Adjust_value_of_Accelerometer.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Adjust_value_of_Accelerometer.jpg" alt="pir" width={600} height="auto" /></p>


6. デモコードを以下のパスから直接開きます：File -> Example -> Grove_3Axis_Digital_Accelerometer_H3LIS331DL -> H3LIS331DL_Demo。その後、H3LIS331DL_AdjValスケッチから取得した値に基づいてVAL_X_AXIS/VAL_Y_AXIS/VAL_Z_AXISを修正します。
<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Redefine_the_VAL_of_Accelerometer.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Redefine_the_VAL_of_Accelerometer.jpg" alt="pir" width={600} height="auto" /></p>

7. コードをアップロードし、シリアルモニターを開いて結果を確認します。
<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Raw_data_of_H3LIS331DL.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/Raw_data_of_H3LIS331DL.jpg" alt="pir" width={600} height="auto" /></p>


## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/res/Grove-3-Axis_Digital_Accelerometer-400g-v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


リソース
---------

-   [Grove - 3-Axis Digital Accelerometer(±400g) Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/res/Grove-3-Axis_Digital_Accelerometer-400g-v1.0.zip)
-   [3-Axis Digital Accelerometer(±400g) 用 GitHub リポジトリ](https://github.com/Seeed-Studio/Grove_3Axis_Digital_Accelerometer_H3LIS331DL)
-   [H3LIS331DL データシート PDF](http://www.st.com/web/en/resource/technical/document/datasheet/DM00053090.pdf)
 

<!-- この Markdown ファイルは https://www.seeedstudio.com/wiki/Grove_-_3-Axis_Digital_Accelerometer(±400g) から作成されました -->

## 技術サポート & 製品ディスカッション
弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを用意しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>