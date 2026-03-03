---
title: Grove - シリアルカメラ
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Grove-Serial_Camera/
slug: /ja/Grove-Serial_Camera
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/img/Serial_camera.jpg)

シリアルカメラは、MCUでの使用が簡単なJPEGカラーカメラモジュールです。画像処理DSPを統合しており、サムネイル情報なしで320×240または640×480のJPEG画像を生成します。撮影された画像は内部バッファに保存され、UARTポートを介して転送されます。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Serial-Camera-p-945.html)

特徴
--------

- Groveインターフェース
- サムネイル情報なしのJPEG圧縮画像
- 5V電源供給
- 小型でコンパクト
- プロトコル制御

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

仕様
--------------

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
項目
</th>
<th scope="col">
最小値
</th>
<th scope="col">
標準値
</th>
<th scope="col">
最大値
</th>
<th scope="col">
単位
</th>
</tr>
<tr align="center">
<th scope="row">
動作電圧
</th>
<td>
4.8
</td>
<td>
5.0
</td>
<td>
5.3
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
解像度（デフォルト）
</th>
<td colspan="3">
640x480 / 320x240
</td>
<td>
/
</td>
</tr>
<tr align="center">
<th scope="row">
シリアルポートのデフォルトボーレート
</th>
<td colspan="3">
115200
</td>
<td>
ボーレート
</td>
</tr>
</table>

対応プラットフォーム
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上記で言及されている対応プラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

アプリケーションアイデア
-----------------

- [SDカードシールド](https://www.seeedstudio.com/depot/sd-card-shield-p-492.html?cPath=109)を使用したデジタルカメラ
- ビデオ監視システム

使用方法
-----

### PCでカメラを使用する

**ステップ1**: 専用のシリアルポートデバッグツール[VC0703COMTOOL.rar](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/res/VC0703COMTOOL.rar)をダウンロードしてインストールします。

**ステップ2**: シリアルカメラをUSBを使用してPCに接続し、シリアルコンバータツールUartSBeeを使用します。

| シリアルカメラ | Uart_SB v3.1 |
|---------------|---------------|
| GND (黒)      | GND           |
| VCC (赤)      | VCC           |
| RX (白)       | TX            |
| TX (黄)       | RX            |

**ステップ3:** Uart_SB v3.1をコンピュータに接続し、vc0703CommToolソフトウェアを開きます。カメラに接続しているポートの正しいCOM番号を選択し、デフォルトボーレート115200を設定してポートを開きます。

**ステップ4:** 「Get Version」ボタンをクリックしてカメラをリセットします。

**ステップ5:** 「Fbuf」ボタンをクリックして写真撮影の準備をします。

1. 「stop CFbuf」をクリックして写真を撮影します。

2. 「Sel File」をクリックして画像を保存するファイル名を選択します。

3. 「Read」をクリックしてバッファからデータを読み取り、選択したファイルに保存します。以下のように表示されます：

    ![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/img/Serial_Camera_Picture.jpg)

4. 「Resume」をクリックしてフレーム更新を再開し、別の写真を撮影できます。

### ArduinoとSDカードでカメラを使用する

**ステップ1**: Grove - シリアルカメラをArduinoボードに接続します。ハードウェアにはSeeeduino V3.0、SDカードシールド、SanDisk microSD™カード2GB、Grove - ボタンが含まれます。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/img/Serial_Camera.jpg) -->

**ステップ2**: シリアル受信バッファ（デフォルト64バイト）を128バイトに変更します。hardware/arduino/coresディレクトリを開き、wiring_serial.cまたはHardwareSerial.cppという名前のファイルを編集します。上部付近にある#define SERIAL_BUFFER_SIZE 64を128に変更します。詳細については、[Arduino Hacks](http://learn.adafruit.com/arduino-tips-tricks-and-techniques/arduino-hacks)をご参照ください。

**ステップ3**: [Grove - シリアルカメラライブラリ](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/res/SerialCameral_DemoCode.zip)をダウンロードし、Seeeduinoにアップロードします。コンパイルできない場合は、[SDライブラリ](https://arduino.cc/en/Reference/SD)がArduino IDEフォルダにあるか確認してください。

**ステップ4**: シリアルモニターを開き、SDカードとカメラの初期化後にボタンを押して写真を撮影します。

リソース
---------

- [VC0703デバッグツール](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/res/VC0703COMTOOL.rar)
- [シリアルカメラのマニュアル.pdf](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/res/Manual_for_serial_camera.pdf)
- [Grove - シリアルカメラライブラリ](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/res/SerialCameral_DemoCode.zip)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを用意しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>