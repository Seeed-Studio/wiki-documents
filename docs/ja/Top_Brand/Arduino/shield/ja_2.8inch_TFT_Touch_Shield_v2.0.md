---
description: 2.8インチ_TFT_タッチ_シールド_v2.0
title: 2.8インチ TFT タッチシールド v2.0
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/2.8inch_TFT_Touch_Shield_v2.0
last_update:
  date: 05/15/2025
  author: Eico 
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/main.jpg" alt="pir" width={600} height="auto" /></p>

TFT Touch Shield V2.0は、抵抗膜方式のタッチスクリーンで、Arduino/Seeeduino/Arduino Mega/SAMD21プラットフォームと互換性があります。ディスプレイデバイスやスケッチパッドとして使用できます。前バージョンである2.8''TFT Touch Shield V1.0と比較して、スクリーンドライバをよりプロフェッショナルなチップであるILI9341ドライバにアップグレードし、データ転送速度を犠牲にすることなく、ピンを節約するSPI通信を提供します。通信方法の変更により、元のバージョン用に開発されたプログラムは、新バージョンに移植する前に修正が必要です。このシールドにはSDカードモジュールが統合されており、プロジェクトのさらなる拡張の可能性を備えています。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/2.8-TFT-Touch-Shield-V2.0-p-1286.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

* 大画面で簡単かつ快適な操作体験
* プログラムで制御可能なバックライト
* 65k色の豊かなカラーディスプレイ
* ピンを節約するSPI通信方式
* 全画面タッチアクティブ範囲

## 仕様

<table align="center">
  <tbody>
  <tr>
    <td><h3>項目</h3></td>
    <td><h3>値</h3></td>
  </tr>
  <tr>
    <td><h4>動作電圧</h4></td>
    <td><h4>5 V</h4></td>
  </tr>
  <tr>
    <td><h4>解像度</h4></td>
    <td><h4>320 x 240</h4></td>
  </tr>  
  <tr>
    <td><h4>色数</h4></td>
    <td><h4>65k</h4></td>
  </tr>
  </tbody></table>

## 対応ボード

2.8インチ TFT タッチシールド v2.0は、以下のボードでテストされ、完全に互換性があります：

* Arduino Uno（全リビジョン）/Seeeduino（V4&V4.2）
* Arduino Mega/Seeeduino Mega
* Arduino Zero（M0）/Seeeduino Lorawan
* Arduino Leonardo/Seeeduino Lite
* Seeeduino Cortex-M0+/Seeeduino Lotus Cortex-M0+

## 応用アイデア

* ゲーム
* センサーハブ
* ヒューマンマシンインターフェース
* スマートハウス

以下は参考になる素晴らしいプロジェクトです。

<table align="center">
  <tbody>
  <tr>
    <td><h3>Arduino Phone</h3></td>
    <td><h3>Facebook Monitor</h3></td>
    <td><h3>Instrucatbles Monitor</h3></td>
  </tr>
  <tr>
  <td>
   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/project1.jpg" alt="pir" width={200} height="auto" /></p>
  </td>
  <td>
   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/project2.jpg" alt="pir" width={200} height="auto" /></p>
  </td>
  <td>
   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/project3.jpg" alt="pir" width={200} height="auto" /></p>
  </td>
  </tr>
  <tr>
  <td><a href="https://www.instructables.com/id/ArduinoPhone-20-an-Open-Source-Mobile-Phone-Based-/" target="_blank"><span>今すぐ作る！</span></a></td>
  <td><a href="https://www.instructables.com/id/Facebook-Like-Monitor/" target="_blank"><span>今すぐ作る！</span></a></td>
  <td><a href="https://www.instructables.com/id/Make-a-Instructables-Indicator/" target="_blank"><span>今すぐ作る！</span></a></td>  
  </tr>  
  </tbody></table>

## ピンマップ

:::note
未使用のピン（NOT USED）は、他のモジュールを制御するために使用できます。
:::

デジタルピン

<table align="center">
  <tbody>
  <tr>
    <td><h3>ピン名</h3></td>
    <td><h3>機能</h3></td>
  </tr>
  <tr>
    <td><h4>D0</h4></td>
    <td><h4>未使用 (NOT USED)</h4></td>
  </tr>
  <tr>
    <td><h4>D1</h4></td>
    <td><h4>未使用 (NOT USED)</h4></td>
  </tr>  
  <tr>
    <td><h4>D2</h4></td>
    <td><h4>未使用 (NOT USED)</h4></td>
  </tr>
  <tr>
    <td><h4>D3</h4></td>
    <td><h4>未使用 (NOT USED)</h4></td>
  </tr>
  <tr>
    <td><h4>D4</h4></td>
    <td><h4>TF_CS</h4></td>
  </tr>
  <tr>
    <td><h4>D5</h4></td>
    <td><h4>TFT_CS</h4></td>
  </tr>
  <tr>
    <td><h4>D6</h4></td>
    <td><h4>TFT_DC</h4></td>
  </tr>
  <tr>
    <td><h4>D7</h4></td>
    <td><h4>バックライト (選択可能)</h4></td>
  </tr>
  <tr>
    <td><h4>D8</h4></td>
    <td><h4>未使用 (NOT USED)</h4></td>
  </tr>
  <tr>
    <td><h4>D9</h4></td>
    <td><h4>未使用 (NOT USED)</h4></td>
  </tr>
  <tr>
    <td><h4>D10</h4></td>
    <td><h4>未使用 (NOT USED)</h4></td>
  </tr>
  <tr>
    <td><h4>D11</h4></td>
    <td><h4>SPI_MOSI</h4></td>
  </tr>
  <tr>
    <td><h4>D12</h4></td>
    <td><h4>SPI_MISO</h4></td>
  </tr>
  <tr>
    <td><h4>D13</h4></td>
    <td><h4>SPI_SCK</h4></td>
  </tr>  
  </tbody></table>

アナログピン

<table align="center">
  <tbody>
  <tr>
    <td><h3>ピン名</h3></td>
    <td><h3>機能</h3></td>
  </tr>
  <tr>
    <td><h4>A0</h4></td>
    <td><h4>タッチパネル</h4></td>
  </tr>
  <tr>
    <td><h4>A1</h4></td>
    <td><h4>タッチパネル</h4></td>
  </tr>  
  <tr>
    <td><h4>A2</h4></td>
    <td><h4>タッチパネル</h4></td>
  </tr>
  <tr>
    <td><h4>A3</h4></td>
    <td><h4>タッチパネル</h4></td>
  </tr>
  <tr>
    <td><h4>A4</h4></td>
    <td><h4>未使用 (NOT USED)</h4></td>
  </tr>
  <tr>
    <td><h4>A5</h4></td>
    <td><h4>未使用 (NOT USED)</h4></td>
  </tr>
  </tbody></table>

## はじめに

:::note
この「はじめに」は、Windows 10 と Arduino IDE 1.6.9 環境を基にしています。
:::
このディスプレイの動作方法を説明します。以下の材料を準備してください。

<table align="center">
  <tbody>
  <tr>
    <td><h3>Seeeduino V4</h3></td>
    <td><h3>2.8 TFT タッチシールド V2</h3></td>
    <td><h3>Micro USB ケーブル</h3></td>
  </tr>

 <tr>
  <td>
   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/gs1.jpg" alt="pir" width={200} height="auto" /></p>
  </td>
  <td>
   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/gs2.jpg" alt="pir" width={200} height="auto" /></p>
  </td>
  <td>
   <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/gs3.jpg" alt="pir" width={200} height="auto" /></p>
  </td>
  </tr>
  <tr>
  <td><a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank"><span>詳細はこちら</span></a></td>
  <td><a href="https://www.seeedstudio.com/2.8-TFT-Touch-Shield-V2.0-p-1286.html" target="_blank"><span>詳細はこちら</span></a></td>
  <td><a href="https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html" target="_blank"><span>詳細はこちら</span></a></td>  
  </tr>  
  </tbody></table>

### Arduino ライブラリのダウンロード

このライブラリは以下のプラットフォームをサポートしています：

* Arduino/Genuino UNO
* Seeeduino V3/4.0/4.2
* Arduino/Genuino Mega
* Arduino Leonardo
* Seeeduino Lite/Clio/Lotus
* LinkIt ONE（タッチパネルは動作しません）

[Touch Screen Driver](https://github.com/Seeed-Studio/Touch_Screen_Driver/archive/master.zip) をクリックしてダウンロードしてください。その後、以下のボタンをクリックしてライブラリをダウンロードし、インストールしてください。Arduino ライブラリのインストール方法がわからない場合は、チュートリアル [(Arduino ライブラリのインストール方法)](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/) を参照してください。

 <p style={{textAlign: 'center'}}><a href="https://github.com/Seeed-Studio/TFT_Touch_Shield_V2/archive/master.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/library.png" /></a></p>
このライブラリには以下の例が含まれています：

* drawCircle
* drawLines
* drawNumber
* drawRectangle
* paint
* shapes
* text
* tftbmp
* tftbmp2

このデモでは「shapes」例を使用します。

:::note
内部フラッシュチップが128k以上の Seeed_Arduino_LCD を使用することをお勧めします。フラッシュデバイスが小さい場合は、TFT_Touch_Shield_V2 を使用することをお勧めします。
:::

### ケーブルを接続してコードをアップロードする

**ステップ1.** TFT_Touch_Shield_V2 ボードを Seeeduino に挿入します。

**ステップ2.** USB ケーブルを使用して Seeeduino ボードをコンピュータに接続します。

**ステップ3.** Arduino IDE を開き、正しい COM ポートとボードを選択します（この例では Seeeduino V4 を使用）。

**ステップ4.** **ファイル > サンプル > TFT_Touch_Shield_V2-master > shapes** をクリックしてコードを開きます。この例を Seeeduino にアップロードしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/shapes%20example.png" alt="pir" width={600} height="auto" /></p>
コードのアップロード方法について質問がある場合は、[こちら](https://wiki.seeedstudio.com/ja/Seeeduino_v4.2/#getting-started) を参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/display.jpeg" alt="pir" width={600} height="auto" /></p>

## バックライト

バックライトは常にデフォルトでオンになっています。バックライトを変更したい場合は、基板にいくつかの改造を行う必要があります。基板の裏側をご覧ください。「BACKLIGHT」というラベルがあります。一方は「ON」と名付けられ、もう一方は「D7」と名付けられています。中央のパッドと「ON」パッドの間の配線を切断し、中央のパッドを「D7」パッドにハンダ付けする必要があります。以下の図を参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/images/backlight.png" alt="pir" width={600} height="auto" /></p>
これでD7を介してバックライトを制御できるようになります。

バックライトをオンにするには:

```cpp
    digitalWrite(7, HIGH);
```

バックライトをオフにするには:

```cpp
    digitalWrite(7, LOW);
```

:::caution
ボックスカッターやハンダゴテを使用する際は十分注意してください。
:::

## FAQ

Q: Seeed_Arduino_LCDを使用して2.8 TFT Touch Shield V2を駆動する方法は？

A: Seeed_Arduino_LCDを使用して2.8 TFT Touch Shield V2を駆動したい場合、以下の詳細が使用方法を示します。

**ステップ1.** [Seeed_Arduino_LCD](https://github.com/Seeed-Studio/Seeed_Arduino_LCD)をダウンロードしてインストールします。Arduinoライブラリのインストール方法がわからない場合は、チュートリアル[(Arduinoライブラリのインストール方法)](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)を参照してください。

**ステップ2.** User_Setup.hのコメントを参照して、LCDがボードで動作するようにUser_Setup.hを設定します。

**ステップ3.** Examples -> Seeed_Arduino_LCD -> 320 x 240を選択します。この中には2.8 TFT Touch Shield V2のすべての例が含まれています。例をボードにアップロードしてください。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/resources/TFT_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

* [Eagle形式の回路図とPCB](https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/resources/TFT_Eagle_File.zip)
* [PDF形式の回路図](https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/resources/TFT%20Touch.pdf)
* [PDF形式のPCB](https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V2/resources/TFT%20Touch%20PCB.pdf)
* [Githubページのライブラリ](https://github.com/Seeed-Studio/TFT_Touch_Shield_V2)

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