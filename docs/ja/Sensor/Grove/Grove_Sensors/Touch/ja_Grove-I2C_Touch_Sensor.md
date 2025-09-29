---
description: Grove - I2C タッチセンサー
title: Grove - I2C タッチセンサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-I2C_Touch_Sensor
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: Grove - I2C Touch Sensor
category: Sensor
bzurl: https://seeedstudio.com/Grove-I2C-Touch-Sensor-p-840.html
oldwikiname: Grove_-_I2C_Touch_Sensor
prodimagename: Grove-I2C-Touch-Sensor.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/P3202380.jpg
surveyurl: https://www.research.net/r/Grove-I2C_Touch_Sensor
sku: 101020047
tags: grove_i2c, io_3v3, io_5v, plat_duino, plat_linkit
--- -->

![](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/img/Grove-I2C-Touch-Sensor.jpg)

I2C タッチセンサーは、FreeScale の近接容量性タッチセンサーコントローラー MPR121 をベースにしています。このセンサーは、人間の指のタッチや近接を検出します。タッチセンサーコントローラーと 4 つのタッチフィーラーが含まれており、フィーラーのコネクタをセンサーコントローラーのベースに差し込むことで、タッチの検出を開始できます。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Grove-I2C-Touch-Sensor-p-840.html)

仕様
-------------

| パラメータ              | 値/範囲                             |
|------------------------|-------------------------------------|
| 動作電圧              | 3~5.5V                              |
| スタンバイモード電流   | 2μA                                 |
| タッチチャンネル数     | 12 (タッチフィーラー付き 4 チャンネルを含む) |
| 通信プロトコル         | I2C                                 |
| I2C アドレス           | 0x5A                                |

:::tip
Grove モジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) を参照してください。
:::

対応プラットフォーム
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
上記でサポートされていると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduino プラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能な MCU プラットフォームに対してソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

ハードウェア概要
-----------------

![](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/img/DSC_0030.png)

12 個の電極 CH0-CH11 があります。CH0-CH3 は 4 つのタッチフィーラーに接続されています。

CH4-CH11 は機能拡張用です。さらに必要な場合は、自分でフィーラーを作成することができます。

フィーラーのワイヤーは環境の影響を軽減するためにツイストされています。高感度が必要な場合は、黒（グラウンド）ワイヤーを切断することができます。

MPR121 の割り込みピンを使用したい場合は、INT ピンを引き出す必要があります。

はじめに
---------------

### **Grove - ヘルプ**

以下のドキュメントは、Grove の使用を開始する際に役立ちます。

- [序文 - はじめに](https://www.seeedstudio.com/document/pdf/Preface.pdf)
- [Grove について](https://www.seeedstudio.com/document/pdf/Introduction%20to%20Grove.pdf)

:::note
各電極は電源投入時に MPR121 によって自動的に構成される必要があり、タッチセンサーコントローラーには電源リセットがないため、フィーラーを挿入または取り外すたびに Seeeduino の電源をリセットする必要があります。
:::

フィーラーは、間に何かがあっても人間の指を感知することができます。つまり、実際に指でフィーラーに触れる必要はありません。

![](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/img/DSC_0026.jpg)

![](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/img/DSC_0027.jpg)

厚さ約 3 mm の紙板を使用すると、フィーラーは指のタッチを感知することができ、多くのアプリケーションに適したソリューションとなります。

### Codecraft を使ってみる

#### ハードウェア

**ステップ 1.** Grove ケーブルを使用して Grove - I2C タッチセンサーを Seeeduino の I2C ポートに接続します。Arduino を使用している場合は、Base Shield を活用してください。

**ステップ 2.** Seeeduino/Arduino を USB ケーブルで PC に接続します。

#### ソフトウェア

**ステップ 1.** [Codecraft](https://ide.chmakered.com/) を開き、Arduino サポートを追加し、メイン手順を作業エリアにドラッグします。

:::note
Codecraft を初めて使用する場合は、[Arduino を使用した Codecraft ガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/) も参照してください。
:::

**ステップ 2.** 以下の画像のようにブロックをドラッグするか、このページの最後からダウンロードできる cdc ファイルを開きます。

![cc](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/img/cc_I2C_Touch_Sensor.png)

プログラムを Arduino/Seeeduino にアップロードします。

:::tip
コードのアップロードが完了すると、シリアルモニターでどのチャンネルに触れたかが表示されます。
:::

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/res/I2C_Touch_Sensor_eagle_files-v1.1-.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

- [I2C タッチセンサーライブラリ](https://github.com/Seeed-Studio/Grove_I2C_Touch_Sensor)
- [I2C タッチセンサー Eagle ファイル(v1.1).zip](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/res/I2C_Touch_Sensor_eagle_files-v1.1-.zip)
- [I2C タッチセンサー PDF](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/res/Grove-I2C_Color_sensor_v1.2.pdf)
- [指のタッチを検出する方法](/ja/How_to_detect_finger_touch)
- [I2C タッチセンサー データシート](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/res/Freescale_Semiconductor;MPR121QR2.pdf)
- [Codecraft CDC ファイル](https://files.seeedstudio.com/wiki/Grove-I2C_Touch_Sensor/res/Grove_I2C_Touch_Sensor_CDC_File.zip)

<!-- この Markdown ファイルは https://www.seeedstudio.com/wiki/Grove_-_I2C_Touch_Sensor から作成されました -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際の体験をスムーズにするため、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>