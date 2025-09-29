---
description: Grove - 3軸アナログ加速度センサー
title: Grove - 3軸アナログ加速度センサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-3-Axis_Analog_Accelerometer
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/Grove-3-axis_Analog_Accelerometer_photo.JPG" alt="pir" width={600} height="auto" /></p>

ADXL335は、小型で薄型、低消費電力の完全な3軸加速度センサーで、信号調整済みの電圧出力を備えています。この製品は、±3 gの最小フルスケール範囲で加速度を測定します。このモジュールは、ADXL335の信号がアナログ（より多くのポートが必要）であるため、ブレークアウトボードとして設計されました。しかし、ボードの形状はGroveモジュールであり、他のGroveモジュールのように便利に固定できます。このセンサーは3.3Vおよび5Vの電源を組み合わせており、標準的なArduinoデバイスやSeeeduino Stalkerで使用できます。以下のプログラムコードには一次フィルターが含まれており、センサーがロボットや玩具の車で使用される場合、出力を滑らかにすることができます。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-p-1086.html)

特徴
--------

-   広い電源範囲 DC3Vから5V
-   Groveモジュール形状
-   3軸センシング
-   小型で低プロファイルのパッケージ：4×4×1.45mm LFCSP
-   低消費電力 3Vで350µA（典型値）
-   高感度
-   10,000 gの衝撃耐性
-   軸ごとに単一のコンデンサでBW調整可能
-   RoHS/WEEE準拠の鉛フリー

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

応用例
--------

-   モーションセンサー
-   衝撃検知器
-   振動センサー
-   玩具の車
-   ロボット

対応プラットフォーム
-------------------

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上記で対応可能とされているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

使用前に
------------

ガスセンサーを使用する前に以下の知識を読むことをお勧めします。これによりArduinoや弊社製品についてより深く理解でき、オープンソースハードウェアをより簡単に使用できるようになります。

-  Arduinoの使い方
-  Groveシステムとは
-  なぜBase Shieldが必要なのか？

これらを読んだ後、Base Shieldを使用してGrove製品をArduinoと連携させる方法が分かります。それでは始めましょう！

使い始める
-----

センサーの形状はブレークアウトボードであり、ボードにワイヤをはんだ付けするか、ジャンパーワイヤを使用してセンサーを接続することができます。

-   VCCを電源（DC5VまたはDC3.3V）に接続し、GNDをグランドに接続、XをArduinoのアナログポートA0に、YをA1に、ZをA2に接続します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/Grove-3-axis_analog_accelerometer_V1.0_hardware.jpg" alt="pir" width={600} height="auto" /></p> 

-   [3軸アナログ加速度センサーライブラリ](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/res/AnalogAccelerometer.zip)をダウンロードし、Arduino IDEのライブラリフォルダに解凍します。パスは ..\\arduino-1.0.1\\libraries です。
-   センサーを調整する

このセンサーはアナログデバイスであるため、システムと組み合わせる前にセンサーを調整する必要があります。

**ステップ1:** デモ「Calibration」を開き、Arduinoにアップロードします。

**ステップ2:** シリアルモニターを開き、センサーが接続されていることを確認します。センサーの基板に印刷された軸の指示に従います。まず、Z軸方向が真上を向いていることを確認し、準備ができたら任意の文字を入力してください。センサーの位置を変更し、上記の操作を繰り返してX軸およびY軸方向が真上を向いている状態を取得します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/3-Axis_Analog_Accelerometer.jpg" alt="pir" width={600} height="auto" /></p>

**ステップ 3:** 上記のように値を取得できます。これらの結果を使用して、ADXL335.h 内のマクロ定義を修正してください。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/Analog_Accelerometer_Code.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/Analog_Accelerometer_Code.jpg" alt="pir" width={600} height="auto" /></p>

これでキャリブレーションが完了しました。

- デモコード「加速度の測定」をダウンロードし、シリアルモニターを開いてください。センサーを任意の角度に回転させると、加速度計からモニターに送信されるデジタル角度値を確認できます。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/3-Axis_Analog_Accelerometer1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/3-Axis_Analog_Accelerometer1.jpg" alt="pir" width={600} height="auto" /></p>

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/res/Grove-3-Axis_Analog_Accelerometer_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

- [Grove - 3-Axis Analog Accelerometer Eagle File](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/res/Grove-3-Axis_Analog_Accelerometer_Eagle_File.zip)

- [3-Axis Analog Accelerometer Library](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/res/AnalogAccelerometer.zip)

- [3-Axis Analog AccelerometerのGitHubリポジトリ](https://github.com/Seeed-Studio/Grove_3Axis_Analog_Accelerometer)

- [ADXL335データシート.pdf](https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/res/ADXL335_datasheet.pdf)

## プロジェクト

**Grove - 3軸デジタル加速度計の紹介**  
3軸デジタル加速度計の使用方法。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/grove-introduction-in-3-axis-digital-accelerometer-ea05c3/embed' width='350'></iframe>

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_-_3-Axis_Analog_Accelerometer から作成されました -->

**ソーラーパネルデュアル管理システム (SP DMS)**  
このIoTプロトタイプは、以下の2つの機能を実行します：  
1) 盗難防止  
2) ソーラーパネルのメンテナンス指示  
LinkIt ONEとセンサーを使用しています。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/skyline/solar-panel-dual-management-system-sp-dms-3a87ca/embed' width='350'></iframe>

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