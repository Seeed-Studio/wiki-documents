---
description: Grove - LED ストリップ ドライバー
title: Grove - LED ストリップ ドライバー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-LED_Strip_Driver
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/Grove-LED_Strip_Driver.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/Grove-LED_Strip_Driver.jpg" alt="pir" width={600} height="auto" /></p>

4ピンのGroveインターフェースを備えたLEDストリップドライバーは、標準的なArduinoデバイスやSeeed Stalkerへの簡単な接続を提供します。これにより、ArduinoまたはSeeeduinoを使用して、単色LEDストリップの輝度やRGB LEDストリップの色と輝度を制御することができます。

このドライバーには2つの端子と2つのGroveインターフェースがあります。LEDストリップへの電力は2ピン端子を通じて供給され、LED制御電圧は4ピン端子を通じて出力されます。2つのGroveインターフェースは、それぞれ「IN」（データ入力制御用）および「OUT」（次のストリップドライバーとデータを共有するための制御用）とスクリーンプリントされています。

このドライバーは、9Vで1～2メートル、12Vで1～5メートルのLEDストリップを駆動することができます。カラフルなLEDストリップと組み合わせることで、屋内外で素晴らしい効果を発揮します。

* Grove - LED ストリップ ドライバー V1.1：
  1. SI5904を使用してレベル変換を行います。
  2. 78M05は電圧レギュレータで、出力電圧は5Vです。

* Grove - LED ストリップ ドライバー V1.2：
  1. SI5904を2つの2N7002に置き換えました。
  2. 100nFコンデンサのパッケージが0402から0603に変更されました。
  3. 3.3Kの個別抵抗が除外に変更されました。

:::note
    クロック/データIOは5Vロジックレベルを必要とします。
:::
<!-- [![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-LED-Strip-Driver-p-1197.html) -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-LED-Strip-Driver-p-1197.html)

## 仕様
---
<table>
<tr>
<td width="150"><strong>電源供給</strong></td>
<td width="150"><strong>LEDストリップ</strong></td>
<td width="100"><strong>LEDカラー</strong></td>
<td width="100"><strong>長さ(m)</strong></td>
<td width="150"><strong>最大電流(mA)</strong></td>
</tr>
<tr>
<td rowspan="5">12V/5A</td>
<td rowspan="5">RGB LEDストリップ</td>
<td rowspan="5">ホワイト</td>
<td>1</td>
<td>1032</td>
</tr>
<tr>
<td>2</td>
<td>1822</td>
</tr>
<tr>
<td>3</td>
<td>2430</td>
</tr>
<tr>
<td>4</td>
<td>2800</td>
</tr>
<tr>
<td>5</td>
<td>3000</td>
</tr>
<tr>
<td rowspan="2">9V/1A</td>
<td rowspan="2">RGB LEDストリップ</td>
<td rowspan="2">ホワイト</td>
<td>1</td>
<td>365</td>
</tr>
<tr>
<td>2</td>
<td>627</td>
</tr>
</table>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_Interface3.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_Interface3.jpg" alt="pir" width={600} height="auto" /></p>

**12V電源供給** – 9～12Vの電源供給用スクリュー端子。

**チェイン可能入力** – Grove - Base Shieldまたは他のドライバーのチェイン可能出力に接続。ピン定義：**CLK DIN NC GND**。

**チェイン可能出力** – 他のドライバーのチェイン可能入力に接続。ピン定義：**CLK DOUT NC GND**。

**LEDストリップインターフェース** – LEDストリップ用スクリュー端子。ピン定義：**+ B R G**

**注意**: Arduino/SeeeduinoのVCCはGroveインターフェースに接続されていません。

## デモンストレーション
---
### ハードウェアのインストール

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step1.jpg" alt="pir" width={600} height="auto" /></p>

1. Groveケーブルを使用して、LEDストリップドライバーの「IN」とマークされたGroveソケットと、Base Shieldのデジタルポート2を接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step2.jpg" alt="pir" width={600} height="auto" /></p>

2. LEDストリップをGrove - LEDストリップドライバーの4ピン端子に接続します。LEDストリップの**「+12v」**とマークされたワイヤーを端子の**「+」**とマークされた座席に接続し、**「B」**を**「B」**に、**「R」**を**「R」**に、**「G」**を**「G」**に接続します。上記の写真のように、販売されているほとんどのLEDストリップには4本のワイヤーがありますが、[White LED Flexi-Strip - 60 LED - 1m](https://www.seeedstudio.com/depot/white-led-flexistrip-60-led1m-p-1122.html?cPath=207)は例外です。このタイプを使用する場合、接続手順が少し異なる場合があります。**「+12V」**とマークされたワイヤーを**「+」**とマークされた座席に接続し、他のワイヤーは**「B」**、**「R」**、**「G」**のいずれかの座席に接続できます。そして、以下のソフトウェア手順で**「DemoForWhiteLEDStrip」**という名前のデモコードを実行してください。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step3.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step3.jpg" alt="pir" width={600} height="auto" /></p>

3. 12V DCまたは9V DCの電源ワイヤーを2ピン端子に接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step4.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/LED_Strip_Driver_hardware_install_Step4.jpg" alt="pir" width={600} height="auto" /></p>

4. カスケード機能を利用したい場合は、まず別のドライバーとストリップを準備します。そして、Groveケーブルを使用して、最初のボードの「out」とマークされたGroveソケットと、2番目のボードの「IN」とマークされたGroveソケットを接続します。これで完了です。2つのストリップが同期して光ります。

### ソフトウェアプログラミング

1. [LEDストリップドライバーライブラリ](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LEDStripDriver_library.zip)をダウンロードします。解凍してArduino-1.0ライブラリにインポートします: ..\arduino-1.0\libraries。

2. ドライバーを1つだけ使用する場合は、SingleLEDStripデモコードをアップロードします。
<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/SingleLEDStripDemo.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/SingleLEDStripDemo.jpg" alt="pir" width={600} height="auto" /></p>

3. LEDストリップが2つの場合は、DualLEDStripデモコードをアップロードします。
<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/DualLEDStripDemo.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/img/DualLEDStripDemo.jpg" alt="pir" width={600} height="auto" /></p>

# LEDストリップドライバー Eagleファイル V1.1
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LED_Strip_driver_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# LEDストリップドライバー Eagleファイル V1.2
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LED_Strip_Driver_eagle_file_V1.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース
---
*   [LEDストリップドライバー Eagleファイル V1.1](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LED_Strip_driver_eagle_files.zip)

*   [LEDストリップドライバー Eagleファイル V1.2](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LED_Strip_Driver_eagle_file_V1.2.zip)

*   [回路図 V1.1（PDF）](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LED_Strip_driver.pdf)

*   [回路図 V1.2（PDF）](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/Grove-LED_Strip_driver_V1.2.pdf)

*   [P9813 データシート](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/P9813_datasheet.pdf)

*   [N-MOSFET DMN3016LK3 データシート](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/N-MOSFET_DMN3016LK3_Datasheet.pdf)

*   [LEDストリップドライバライブラリ](https://files.seeedstudio.com/wiki/Grove-LED_Strip_Driver/res/LEDStripDriver_library.zip)

*   [Suliライブラリ](https://github.com/Seeed-Studio/LED_Strip_Suli)

## 技術サポート & 製品ディスカッション
弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを用意しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>