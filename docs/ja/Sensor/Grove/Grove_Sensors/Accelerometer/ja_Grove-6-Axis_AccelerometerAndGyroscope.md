---
description: Grove - 6軸加速度計＆ジャイロスコープ
title: Grove - 6軸加速度計＆ジャイロスコープ
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-6-Axis_AccelerometerAndGyroscope
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- tags: io_3v3, io_5v, grove_i2c, grove_analog, grove_digital, grove_uart, plat_duino, plat_bbg, plat_pi, plat_wio, plat_linkit -->

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/img/Grove-6-Axis_AccelerometerAndGyroscope_product_view_1200_s.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/img/Grove-6-Axis_AccelerometerAndGyroscope_product_view_1200_s.jpg" alt="pir" width={600} height="auto" /></p>

Grove - 6軸加速度計＆ジャイロスコープは、3軸デジタル加速度計と3軸デジタルジャイロスコープを組み合わせた、コストパフォーマンスの高いGroveインターフェース対応の統合センサーです。

低消費電力のデジタルチップLSM6DS3（[データシート](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/res/LSM6DS3TR.pdf)）と電源レギュレーターを内蔵しており、高感度、環境に優しい技術、低ノイズ干渉を特徴としています。加速度の感度レベルや角速度測定範囲をさまざまに設定することが可能です。詳細なSDKが提供されており、プロトタイピングプロセスを迅速かつ簡単に行うことができます。

この製品は、ロボティクス、IoTデバイス、消費者向け電子機器など、傾き、動き、タップ検知のさまざまな用途に使用できます。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer&Gyroscope-p-2606.html)

特徴
--------

-   Groveインターフェース対応でコストパフォーマンスが高い。
-   6自由度（DOF）のモーションデータをデジタル出力。
-   ±2/±4/±8/±16 gのフルスケール線形加速度検知範囲で、さまざまな環境に対応。
-   ±125、±245、±500、±1000、±2000度/秒（dps）の角速度測定範囲で多用途に対応。
-   プログラミングを容易にする詳細なSDK。
-   信頼性の高いデータ収集のためのレギュレートされた電源供給。
-   さまざまなイベントに対応するプログラム可能な割り込み。
-   8 kBのデータバッファリング。

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

応用例
-----------------

-   ロボティクス
-   消費者向け航空機
-   コンピュータ入力デバイス
-   ウェアラブルデバイス
-   IoTデバイス

仕様
--------------

詳細情報については、[データシート](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/res/LSM6DS3TR.pdf)をご参照ください。

| パラメータ                             | 値                                                                                  |
|---------------------------------------|--------------------------------------------------------------------------------------|
| アナログ供給電圧:                     | 5V/3.3V(DC)                                                                          |
| 消費電力:                             | コンボ通常モードで0.9 mA、コンボ高性能モードで1.25 mA（最大1.6 kHz）                   |
| 線形加速度測定範囲                   | ±2/±4/±8/±16 g フルスケール（典型値）                                                |
| 角速度測定範囲                       | ±125、±245、±500、±1000、±2000 dps（典型値）                                         |
| 線形加速度感度                       | 0.061(FS = ±2)、0.122(FS = ±4)、0.244(FS = ±8)、0.488(FS = ±16) mg/LSB               |
| 角速度感度                           | 4.375(FS = ±125)、8.75(FS = ±245)、17.50(FS = ±500)、35(FS = ±1000)、70(FS = ±2000)  |

### 対応プラットフォーム

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    上記で対応プラットフォームとして挙げられているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能なMCUプラットフォームに対してソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

ハードウェア概要
-----------------

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/img/Grove-6-Axis_AccelerometerAndGyroscope_components_view_1200_s.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/img/Grove-6-Axis_AccelerometerAndGyroscope_components_view_1200_s.jpg" alt="pir" width={600} height="auto" /></p>

**Groveポート**  
Seeeduinoボードなどのメイン制御ボードをドライバーボードに接続します。

**LSM6DS3**  
メインMCU。

### **部品リスト**

| 部品名                                  | 数量     |
|----------------------------------------|----------|
| Grove - 6軸加速度計＆ジャイロスコープ  | 1個      |
| Groveワイヤー                          | 1本      |

はじめに
-----------

### **必要な材料**

-   Seeeduino * 1

-   Grove - Base Shield v2

### **準備**

以下のガイドを参照して適切なIDEを構築してください：

<div class="admonition note">
<p class="admonition-title">注意</p>
この場合、Seeeduinoを選択しましたが、これはArduinoと互換性があります。代わりにArduinoボードを使用することもできます。
</div>

- Windowsでの始め方

- Mac OS Xでの始め方

### **ハードウェア接続**

<!-- ![](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/img/Grove-6-Axis_AccelerometerAndGyroscope_demo_connection_1200_s.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/img/Grove-6-Axis_AccelerometerAndGyroscope_demo_connection_1200_s.jpg" alt="pir" width={600} height="auto" /></p>

<div classname="admonition note">
  <p classname="admonition-title">注意</p>
  Grove - 6軸加速度計＆ジャイロスコープをGrove - Base ShieldのI<sup>2</sup>Cインターフェースに接続してください。USBケーブルで電源を接続します。
</div>

### **簡単なデモ**

Grove - 6軸加速度計＆ジャイロスコープ用の[ライブラリ](https://github.com/Seeed-Studio/Accelerometer_And_Gyroscope_LSM6DS3)をダウンロードしてください。SeeedのGithubからダウンロードしたデモを使用するガイドを参照して、メインコントローラーボードにコードを迅速にフラッシュしてください。サブディレクトリ***examples***には合計3つのデモ例があります。

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/res/Grove%20-%206-Axis%20Accelerometer%26Gyroscope%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# リソース
---------

- **[Eagle]** [Grove - 6軸加速度計＆ジャイロスコープ v1.0 Eagleファイル](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/res/Grove%20-%206-Axis%20Accelerometer%26Gyroscope%20v1.0.zip)
-  **[ライブラリ]** [Grove-6-Axis_AccelerometerAndGyroscope](https://github.com/Seeed-Studio/Accelerometer_And_Gyroscope_LSM6DS3)
-  **[データシート]** [LSM6DS3のデータシート](https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/res/LSM6DS3TR.pdf)

## プロジェクト

**プラグアンドプレイ リモートコントロール セイルボート**

<iframe frameBorder="{0}" height="327.5" scrolling="no" src="https://www.hackster.io/simon-werner/plug-n-play-remote-control-sailboat-b5724e/embed" width="{350}">
</iframe>



<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_-_6-Axis_Accelerometer&Gyroscope から作成されました -->

## 技術サポートと製品ディスカッション
弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>