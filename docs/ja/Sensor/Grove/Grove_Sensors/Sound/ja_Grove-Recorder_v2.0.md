---
description: Grove - Recorder v2.0
title: Grove - Recorder v2.0
keywords:
  - Grove Grove_Sensors Sound
image: https://wiki.seeedstudio.com/ja/Grove-Loudness_Sensor/
slug: /ja/Grove-Recorder_v2.0
last_update:
  date: 05/15/2025
  author: jianjing huang
---


![](https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/img/Grove-Recorder_V2.0.jpg)
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Recorder-v2-0-p-4552.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border="0" /></a></p>

Grove - Recorder v2.0は、機能が強化されたアップグレード版のレコーダーです。8～20秒<sup>\[1\]</sup>の高品質で自然な音声を録音することができます。さらに、音量調整機能や再生機能も備えています。SeeeduinoやArduinoボードなどのMCUを使用することで、ユーザーフレンドリーなインターフェースを使ってさまざまなアプリケーションを迅速にプロトタイプ化することができます。

<sup>[1]</sup>録音時間は、異なる抵抗を交換することでカスタマイズ可能です。この方法については後のセクションで説明します。

バージョントラッカー
-----------------------

| 製品リビジョン | リリース日 | サポート状況       | 備考 |
|----------------|------------|--------------------|------|
| V1.0           | 2014年4月  | サポート中         | -    |
| V2.0           | 2015年10月 | 主流サポート       | <ol><li>スピーカー音量コントローラーを追加。</li><li>NS8002アンプを追加して出力を強化。</li><li>Recピン切り替えスイッチを追加。</li></ol>|

特徴
--------

- 音量調整、録音、再生機能、Groveインターフェースを備えた使いやすい設計。
- MCUを使用して多くのアプリケーションを簡単にプログラム可能。
- 自動電源オフモード、可変録音および再生時間、不揮発性ストレージ。
- 低消費電力。
- スピーカー（8Ω/2W）付きで出荷。

:::tip
Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)を参照してください。
:::

アプリケーションアイデア
-----------------------

- おもちゃ。
- アラーム。
- 短時間のエコーが必要なアプリケーション。

仕様
--------------

| パラメータ                   | 値                                                                                                         |
|-----------------------------|-----------------------------------------------------------------------------------------------------------|
| 動作電圧                   | 3.3～5.0V(DC)                                                                                              |
| リップル(最大電力時)        | ≤ 50mV                                                                                                    |
| 録音時間(デフォルト)        | 12秒(最大値)<sup>\[2\]</sup>。                                                                            |
| 再生時間(デフォルト)        | 12秒(最大値)。                                                                                            |
| サンプリングレート          | 53 kHz                                                                                                    |
| チップ                      | ISD1820PY([データシート](https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/res/ISD_1800_Specifications.pdf)), NS8002(音量アンプ) |

対応プラットフォーム
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
上記で対応可能とされているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

<sup>[2]</sup>録音時間を変更するには、以下のように抵抗を交換してください。

![](https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/img/Grove-Recorder_V2.0_back_view_600.jpg)

*赤い矩形でマークされた領域*

:::note
再生時間は録音時間の変更に伴い同じになります。異なる種類の抵抗を使用すると、以下の表に示すように録音時間が変化します。
:::

| ROSC             | 時間     | サンプリング周波数 | 入力帯域幅       |
|------------------|----------|--------------------|-----------------|
| 80 KΩ            | 8秒      | 8.0 KHz            | 3.4 KHz         |
| 100 KΩ (デフォルト) | 10秒     | 6.4 KHz            | 2.6 KHz         |
| 120 KΩ           | 12秒     | 5.3 KHz            | 2.3 KHz         |
| 160 KΩ           | 16秒     | 4.0 KHz            | 1.7 KHz         |
| 200 KΩ           | 20秒     | 3.2 KHz            | 1.3 KHz         |

ハードウェア概要
-----------------

![](https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/img/Grove-Recorder_Hardware_View_wiki_s.jpg)

**Groveインターフェース**

Seeeduino_v4.2ボードなどのメイン制御ボードをGrove - Recorderに接続します。

**スピーカーインターフェース**

Grove - Recorderをスピーカーに接続します。

**Recシャフト**

録音を開始します。

**音量調整インターフェース**

スピーカーの音量を調整します。

**MIC**

録音用のマイク。

**IDS 1820PY**

マイクロコントローラー。

**動作インジケーター**

録音中は点灯します。録音を停止するか、録音時間が録音可能時間を超えると消灯します。

**Recピン切り替えスイッチ**

RecピンをON/OFFに切り替えることができ、MCUによる録音制御を無効化または有効化できます。

**Groveワイヤー**

メイン制御ボードをドライバーボードに接続します。

**スピーカー**

### **部品リスト**

| 部品名                | 数量     |
|-----------------------|----------|
| Grove - Recorder v2.0 | 1個      |
| Groveワイヤー         | 1個      |
| スピーカー            | 1個      |

はじめに
---------

### **必要な材料**

- Seeeduino_v4.2 x 1
- Grove - Button x 1
- Groveワイヤー x 1

### **準備**

以下のガイドを参照して適切なIDEを構築してください：

:::note
    このケースではSeeeduinoを使用しています。
:::

- Windowsでのセットアップガイド
- Mac OS Xでのセットアップガイド

### **ハードウェア接続**

![](https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/img/Grove-Recorder_Hardware_connection_s.jpg)

- 上記の図に示すようにすべてのモジュールを接続します。
  - Grove - Button > **D2**
  - Grove - Recorder > **D7**

### **ソフトウェア作業**

以下のテストコードをArduino IDEにコピーし、Upload(CTRL+U)をクリックしてコードをアップロードしてください。

```
// Grove - Recorderのデモ
 
const int pinButton = 2;
const int pinRec    = 7;
 
 
void setup()
{
    pinMode(pinButton, INPUT);
    pinMode(pinRec, OUTPUT);
}
 
void loop()
{
    if(digitalRead(pinButton))      // ボタンが押された場合
    {
        digitalWrite(pinRec, HIGH);
        delay(200);
        digitalWrite(pinRec, LOW);
        while(digitalRead(pinButton));  // ボタンが離されるまで待機
    }
 
    delay(10);
}
```

### テスト

- 接続が正常に動作し、ソフトウェア作業が完了した後、Recシャフトを押して録音を開始します。
- 次に、Grove - Buttonのボタンを押して再生します。
- また、フィリップスドライバーを使用して音量を調整することができます。

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/res/Grove-Recorder_v2.0_Schematic_Eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

- [Eagle](https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/res/Grove-Recorder_v2.0_Schematic_Eagle_file.zip)形式の回路図ファイル
- [PDF](https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/res/Grove-Recorder_v2.0_Schematic_PDF_file.zip)形式の回路図ファイル

<!-- このMarkdownファイルはhttps://www.seeedstudio.com/wiki/Grove_-_Recorder_v2.0から作成されました -->

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