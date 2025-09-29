---
title: Logic DC ジャック
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Logic_DC_Jack/
slug: /ja/Logic_DC_Jack
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_fengmian.JPG)

これは、論理 AND と論理否定を実装する使いやすいロジックコントローラーです。  
Hブリッジを使用して設計されており、モーターやその他のアプリケーションを駆動するための特定の駆動機能を備えています。これにより、アプリケーションはLEDアプリケーションに限定されなくなります。  
プログラミング初心者で簡単なアプリケーションを作成したい場合、これを使用することで簡単に始めることができます。

## 特徴

* デュアル入力とシングル出力

* スイッチでロジックを選択可能

* 入力はデフォルトでHIGH

* ハーフブリッジ出力で、モーターを直接駆動可能

* 9Vバッテリーで駆動

## 仕様

* 無負荷電流: 10±1mA

* 入力電圧: 6~9V

* 出力電圧: 5V

* 電力変換効率: 82±5%

## ハードウェア概要

以下は、Logic_DC_Jackモジュールのブロック図で、以下のパーツで構成されています。

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_hardware_overview1.JPG)

* **入力** - ロジック入力

  * GND - グランドに接続

  * VCC - 電源に接続

  * IN2 - 入力2

  * IN1 - 入力1

* **出力** - ロジック出力

  * GND - グランドに接続

  * VCC - 電源に接続

  * OUT - 出力

  * OUT - 出力

* **ステータスLED** - 赤色LED

  * ON - NOTモード

  * OFF - ANDモード

* **機能スイッチ**

  * Off - 電源オフ

  * Not - NOTモード。ボードがNOTロジックゲートとして動作し、1つの入力モジュールのみをサポートします。

  * And - ANDモード。メインボードの左側ソケットに1本のGroveケーブルを挿入した場合、メインボードは単純なコネクタとして動作します。ただし、分岐したGroveケーブルを使用した場合、メインボードはANDロジックゲートとして動作します。

_注: ANDモードでは、IN2はデフォルトでHIGHです。そのため、入力モジュールが1つだけの場合、Logic DC Jackはバッファとして動作します。_

* **電源入力** - DC電源入力、6-9Vが必要

* **電源LED** - 緑色LED。電源供給時に点灯

## はじめに

このセクションを読めば、数ステップでLogic DC Jackを動作させることができます。

### どのように動作するのか？

Logic DC Jackは、簡単なロジック機能を実現するためのロジックデバイスです。[NOTゲート](https://en.wikipedia.org/wiki/Inverter_logic_gate)および[ANDゲート](https://en.wikipedia.org/wiki/AND_gate)についての情報を事前に確認してください。

このモジュールには2種類のケーブルが含まれており、入力ポートに1つまたは2つの入力を接続する際に使用します。

<dl>
<dd>状況1 – 1つの入力</dd>
<dd>入力が1つのモジュールのみの場合、Logic DC JackはANDおよびNOTのロジック機能を実現できます。以下はロジック機能の図です：</dd>
</dl>

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_DC_Jack_3.png)

<dl>
<dd>状況2 – 2つの入力</dd>
<dd>入力が2つのモジュールの場合、このLogic DC JackはANDのロジック機能のみを実現できます。以下はロジック機能の図です：</dd>
</dl>

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_DC_Jack_4.png)

まず入力数を選択し、次にスイッチを適切な位置に調整することで、必要なロジック機能が確定します。

### 入力ポートと出力ポートをどのように判別するか？

シェルには2つの矢印シールがあり、入力と出力を簡単に区別できます。

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_fengmian_2.JPG)

### デフォルトの入力レベルをどのように確認するか？

ロジック機能の使い方を理解していても、入力のデフォルトレベル状態を知る必要があります。異なるデフォルトレベル状態は異なる出力状態を生じさせるためです。ここでは、簡単な実験で確認できます。

#### 準備

以下のものが必要です：

* [Grove - ボタン](https://www.seeedstudio.com/Grove-Button-p-766.html?cPath=85_50)

* [Grove - 赤色LED](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html?cPath=81_35)

* 9Vバッテリー

#### ハードウェアの接続

このデモでは、[Grove - ボタン](https://www.seeedstudio.com/Grove-Button-p-766.html?cPath=85_50)を入力として使用し、[Grove - 赤色LED](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html?cPath=81_35)を出力として使用します。

スイッチを**NOT**ゲートに切り替えます。

以下の図のように接続します：

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_hardware_setting_stared_not.JPG)

#### 結果の確認

ご存知の通り、出力レベルが1の場合のみ、Grove - LEDが点灯します。電源をオンにすると、Grove - LEDが点灯します。つまり、ロジック図に従って出力レベルが1であることを意味します。したがって、スイッチモードがNOTの場合、デフォルトの入力レベルは0であることがわかります。

### 2つの入力に関するデモ

2つの入力を使用する場合、Groveブランチケーブルが必要です。

このケーブルを使用すると、2つのGroveを入力に接続できます。1つはInput1に、もう1つはInput2に接続します。

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_cable.JPG)

以下は例です。2つのボタンを入力として使用し、LEDを出力として使用します：

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_and.jpg)

2つのボタンが押されたときのみLEDが点灯します。

<font color="Red">ヒント: このケーブルは出力としても使用できます。同時に2つのGroveの状態レベルを制御したい場合、このケーブルが必要です。ただし、この方法でケーブルを使用する場合、2つの出力の状態レベルは同じになりますので注意してください。</font>

### レゴとの連携

Logic DC Jackにはレゴ互換のケースが含まれており、Logic DC Jackをレゴに挿入して、より楽しく使用できます。

レゴと互換性のあるGroveベースについては、近日公開予定です。

以下はデモです：

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_with_lego.jpg)

## Logic DCジャックに対応するGroveモジュール

以下のGroveモジュールはLogic DCジャックと正常に動作します：

### 入力

* [Grove - ボタン](https://www.seeedstudio.com/Grove-Button-p-766.html?cPath=85_50)

* [Grove - タッチセンサー](https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html?cPath=85_94)

* [Grove - スイッチ](https://www.seeedstudio.com/Grove-SwitchP-p-1252.html?cPath=85_50)

* [Grove - 光センサー](https://www.seeedstudio.com/Grove-Light-Sensor-p-746.html?cPath=25_27)

* [Grove - 音量センサー](https://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html?cPath=25_128)

* [Grove - 土壌湿度センサー](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html?cPath=25_27)

* [Grove - 水センサー](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html?cPath=25_27)

* [Grove - 磁気スイッチ](https://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html)

* [Grove - 傾きスイッチ](https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html)

* [Grove - ラインファインダー](https://www.seeedstudio.com/Grove-Line-Finder-p-825.html?cPath=25_31)

* [Grove - PIRモーションセンサー](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html?cPath=25_31)

* [Grove - 回転角センサー](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html?cPath=85_52)

* [Grove - スライドポテンショメーター](https://www.seeedstudio.com/Grove-Slide-Potentiometer-p-1196.html?cPath=85_52)

* [Grove - 炎センサー](https://www.seeedstudio.com/Grove-Flame-Sensor-p-1450.html)

### 出力

* [Grove - LED](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)

* [Grove - LEDストリングライト](https://www.seeedstudio.com/Grove-LED-String-Light-p-2324.html)

* [Grove - 振動モーター](https://www.seeedstudio.com/Grove-Vibration-Motor-p-839.html)

* [Grove - ブザー](https://www.seeedstudio.com/Grove-Buzzer-p-768.html?cPath=38)

* [Grove - ミニファン](https://www.seeedstudio.com/Grove-Mini-Fan-p-1819.html)

* [Grove - レコーダー](https://www.seeedstudio.com/Grove-Recorder-p-1825.html?cPath=25_128)

* [Grove - 電磁石](https://www.seeedstudio.com/Grove-Electromagnet-p-1820.html?cPath=25_33)

* [Grove - リレー](https://www.seeedstudio.com/Grove-Relay-p-769.html?cPath=39_42)

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Logic_DC_Jack/res/Logic_DC_Jack_v1.0_SCH_PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

* **[PDF]**   [PDF形式の回路図](https://files.seeedstudio.com/wiki/Logic_DC_Jack/res/Logic_DC_Jack_v1.0_SCH.pdf)
* **[Eagle]**    [Eagle形式の回路図](https://files.seeedstudio.com/wiki/Logic_DC_Jack/res/Logic_DC_Jack_v1.0_SCH_PCB.zip)
* **[PDF]**[Logic DC Jack v1.0 PDF](https://files.seeedstudio.com/wiki/Logic_DC_Jack/res/Logic%20DC%20Jack%20v1.0.pdf)
* **[EAGLE]**[Logic DC Jack v1.0 SCH](https://files.seeedstudio.com/wiki/Logic_DC_Jack/res/Logic%20DC%20Jack%20v1.0.sch)
* **[Wik]**   [NOTゲートのWikiページ](https://en.wikipedia.org/wiki/Inverter_(logic_gate))
* **[Wik]**    [ANDゲートのWikiページ](https://en.wikipedia.org/wiki/AND_gate)

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>