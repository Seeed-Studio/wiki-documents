---
description: Grove - Node
title: Grove - Node
keywords:
- Grove_Sensors_Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Node
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


Grove - Node は、物理オブジェクトを接続するためのシンプルで柔軟な電子モジュールです。これは IFTTT（IF-This-Then-That）のアイデアに基づいています。2つの Grove コネクタを備えており、さまざまな Grove モジュールにアクセスできます。IFTTT ファームウェアが事前にプログラムされているため、アナログセンサーや 0/1 アクチュエーターを使用して物理オブジェクトを簡単に作成できます。

また、Bluetooth Low Energy（BLE）を統合しており、スマートフォンやタブレットとの相互作用が非常に簡単です。さらに、DFU ブートローダーを内蔵しており、BLE を介して Over-The-Air で再プログラムすることができます。ARM mbed プラットフォームをサポートしており、数百のライブラリを使用して新しいファームウェアを記述できます。

## 特徴

* IFTTT パターンの使用

* センサーとアクチュエーター用の 2 つの Grove コネクタ

  * アナログセンサーと高/低アクチュエーターのプラグアンドプレイ

    * 柔軟な 4 つの GPIO、すべて PWM、ADC、I2C、UART に使用可能

* Nordic nRF51822 マルチプロトコル Bluetooth® 4.0 低エネルギー/2.4GHz RF SoC

  * ARM Cortex-M0 プロセッサ

    * 256kB フラッシュ、16kB RAM

* オンボードバッテリー充電回路

* OTA ファームウェア

* mbed 対応

  * オンライン IDE

    * 使いやすい C/C++ SDK

    * 便利なライブラリ

## 仕様

* 動作電圧: 3.3Vdc

* バッテリー容量: 80mAH

* 最大充電電流: 100mA

* Grove インターフェース供給電圧：3.3V

* Grove インターフェース供給電流: 最大 100mA

* Grove インターフェース入力電圧：0~3.3V

## ピン配置

## 始め方

* Grove Node をオンにする

Grove Node をバッテリーまたは USB ケーブルで接続し、ボタンを押すと動作します。

<dl><dd>

* ダブルクリック - ブートローダーを実行し、赤色 LED が点灯します。

* それ以外 - アプリケーションを実行し、緑色 LED が点滅します。

</dd></dl>

* Grove Node をオフにする

<dl><dd>

* ブートローダーモードの場合 - アプリケーションが実行されるまでしばらく待ちます。

* アプリケーションモードの場合 - ボタンを長押しして、すべての LED が消灯するまで待ちます。

</dd></dl>

### 事前プログラムされたファームウェアで始める

![](https://files.seeedstudio.com/wiki/Grove-Node/img/Milcandy_IFTTT.jpg)

まず、物理世界を感知するための **入力** Grove モジュールが必要です。事前プログラムされたファームウェアは、アナログ入力センサーまたは 0/1 デジタル入力センサーのみをサポートします。以下の Seeedstudio の Grove モジュールが **入力** として使用できます：

<table>
  <tbody><tr>
      <th>モジュール名</th>
      <th>測定するパラメータ</th>
    </tr>
    <tr >
      <td width="300"> Grove - 80cm 赤外線近接センサー</td>
      <td width="400"> 距離</td>
    </tr>
    <tr>
      <td> Grove - ボタン</td>
      <td colspan="3" rowspan="1">オン/オフ</td>
    </tr>
    <tr>
      <td> Grove - 電流センサー</td>
      <td colspan="3" rowspan="1"> 電流</td>
    </tr>
    <tr>
      <td> Grove - ガスセンサー(MQ2&amp;MQ5)</td>
      <td colspan="3" rowspan="1"> ガス品質</td>
    </tr>
    <tr>
      <td> Grove - 光センサー</td>
      <td colspan="3" rowspan="1"> 光</td>
    </tr>
    <tr>
      <td> Grove - 磁気スイッチ</td>
      <td colspan="3" rowspan="1"> 磁気</td>
    </tr>
    <tr>
      <td> Grove - 湿度センサー</td>
      <td colspan="3" rowspan="1"> 湿度</td>
    </tr>
    <tr>
      <td> Grove - PIR モーションセンサー</td>
      <td colspan="3" rowspan="1"> PIR モーション</td>
    </tr>
    <tr>
      <td> Grove - 回転角センサー</td>
      <td colspan="3" rowspan="1"> 回転角</td>
    </tr>
    <tr>
      <td> Grove - 傾きスイッチ</td>
      <td colspan="3" rowspan="1"> オブジェクトの位置</td>
    </tr>
    <tr>
      <td> Grove - サウンドセンサー</td>
      <td colspan="3" rowspan="1"> 音</td>
    </tr>
    <tr>
      <td> Grove - 温度センサー</td>
      <td colspan="3" rowspan="1"> 温度</td>
    </tr>
    <tr>
      <td> Grove - タッチセンサー</td>
      <td colspan="3" rowspan="1"> 人のタッチ</td>
    </tr>
    <tr>
      <td> Grove - 水センサー</td>
      <td colspan="3" rowspan="1"> 水</td>
    </tr></tbody></table>

Grove 互換でない他のアナログセンサーは、少し調整が必要です。信号出力を Grove コネクタの pin4 に接続し、VCC と GND を接続してください。_アナログまたはデジタル 1/0 値を出力するセンサーのみが事前プログラムされたファームウェアで使用可能です_

![](https://files.seeedstudio.com/wiki/Grove-Node/img/Mil_Grove_con.png)

次に、アクチュエーターとして **出力** Grove モジュールが必要です。以下の Grove モジュールが使用できます：

<table>
  <tbody><tr>
      <th>モジュール名</th>
      <th>トリガー時の動作</th>
    </tr>
    <tr>
      <td width="300"> Grove - ブザー</td>
      <td width="400"> ブザーが有効化</td>
    </tr>
    <tr>
      <td> Grove - LED</td>
      <td colspan="3" rowspan="1">LED 点灯</td>
    </tr>
    <tr>
      <td> Grove - バイブレーター</td>
      <td colspan="3" rowspan="1"> 振動</td>
    </tr>
    <tr>
      <td> Grove - リレー</td>
      <td colspan="3" rowspan="1"> 他の回路のオン/オフ切り替え</td>
    </tr></tbody></table>

例えば、暗い環境で自動的に点灯し、それ以外では消灯するライトを作成する場合、[Grove-Light_Sensor](/ja/Grove-Light_Sensor "Grove - Light Sensor") と Grove-Red_LED を選択します。

次に、Grove Node にロジックを教えます。

ライトセンサーを入力として接続し、LED を出力として接続してから、Grove Node をオンにします。

* 通常の環境では、Grove Node のボタンをシングルクリックします。

* 光センサーを手で覆い暗い環境をシミュレートし、その後ダブルクリックを行うと、Grove - LED が点灯します。

* 光センサーを解放すると、Grove - LED が消灯します。

## オーバー・ザ・エア（OTA）

Grove Node には事前にプログラムされた OTA ブートローダーが搭載されています。ブートローダーを起動するには以下の手順を実行してください：

1. Grove Node の電源をオフにします。

2. Grove Node のボタンをダブルクリックします。

3. 赤色の LED が点灯し、「SD7DFU」という名前の BLE デバイスがスキャン可能になります。

4. [nRF Master Control Panel](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp) を使用して BLE アプリをアップグレードします。

![](https://files.seeedstudio.com/wiki/Grove-Node/img/Ota-ui.png)

詳細情報は [mbed.org](https://developer.mbed.org/teams/Bluetooth-Low-Energy/wiki/Firmware-Over-the-Air-FOTA-Updates) を参照してください。

## 新しいアプリケーションの開発

[mbed.org の BLE](http://developer.mbed.org/teams/Bluetooth-Low-Energy/) を参照してください。

## 回路図オンラインビューア

<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Node/res/Grove-Node_v1.0_eagle.zip">
</div>

## リソース

* [Grove - Node v1.0 回路図 PDF ファイル](https://files.seeedstudio.com/wiki/Grove-Node/res/Grove-Node_v1.0.pdf)

* [Grove - Node v1.0 Eagle 設計ファイル](https://files.seeedstudio.com/wiki/Grove-Node/res/Grove-Node_v1.0_eagle.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>