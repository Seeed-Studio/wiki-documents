---
title: Grove - Recorder
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Grove_Recorder/
slug: /ja/Grove_Recorder
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove_Recorder/img/Grove-Recoder.jpg)

Grove - RecorderはISD1820Pチップをベースにしており、8～20秒間の音声を録音することができます。真の単一チップ音声録音を提供し、非揮発性ストレージを備えています。録音時間はモジュールのPCB上のサンプリング抵抗（R6）を変更することで調整可能です。デフォルトでは、オンボードの抵抗値は100KΩであり、モジュールはデフォルトで10秒間の録音時間を提供します。音声録音はオンボードのプッシュボタンやSeeeduinoなどのマイクロコントローラーによって直接制御することができます。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Recorder-p-1825.html)

## 特徴

---

* 低消費電力

* 非揮発性ストレージ

* ユーザーフレンドリーな操作

* 単一の抵抗を交換して録音時間とサンプリング周波数を変更可能

* 抵抗を追加して再生サイクルモードを設定可能

* 8Ω/2Wのミニスピーカー（写真の通り）を付属し接続可能

* 標準的な4ピンGroveケーブルを使用して他のGroveモジュールやSeeeduinoなどのマイクロコントローラーに接続可能

## インターフェース機能

---
![](https://files.seeedstudio.com/wiki/Grove_Recorder/img/Recorder_Bottom1.jpg)
![](https://files.seeedstudio.com/wiki/Grove_Recorder/img/Recorder_Top1.jpg)

**① LEDインジケーター**

モード:
- 録音: 赤色LEDが録音開始から終了まで点灯します。
- 再生: 赤色LEDが点滅して音声再生の終了を知らせます。

**② サンプリング抵抗**

以下の表に基づいてサンプリング抵抗（R6）を変更することで録音時間とサンプリングレートを設定できます:
| ROSC | 録音時間 | サンプリング周波数 | 入力帯域幅 |
|------|----------|-------------------|------------|
| 80 KΩ | 8秒 | 8.0 KHz | 3.4 KHz |
| 100 KΩ (デフォルト) | 10秒 | 6.4 KHz | 2.6 KHz |
| 120 KΩ | 12秒 | 5.3 KHz | 2.3 KHz |
| 160 KΩ | 16秒 | 4.0 KHz | 1.7 KHz |
| 200 KΩ | 20秒 | 3.2 KHz | 1.3 KHz |

**③ 再生抵抗**

モード:
- サイクル: R8に0Ωの抵抗を配置
- 単一: R8に抵抗を配置しない

**④ 再生キー**
現在使用されていません

**⑤ 録音キー**

**⑥ Groveインターフェース**

**⑦ スピーカーインターフェース**

**⑧ 録音IC：ISD1820P**

## 使用方法

---
以下の手順に従って、**Grove - Recorder**モジュールを使用したサンプル回路を構築してください:

1. 録音モジュールをGrove回路の出力側（電源モジュールの右側）に接続します。回路の入力側には、[Grove - Button](/ja/Grove-Button "Grove - Button")または[Grove - Slide Potentiometer](/ja/Grove-Slide_Potentiometer "Grove - Slide Potentiometer")モジュールを使用できます。
2. 回路に電源を供給します。

3. 録音モジュールのRECボタンを押し続けて音声を録音します。オンボードの赤色LEDが点灯します。赤色LEDが消灯するまで録音を続けます。LEDが消灯することで録音時間が終了したことを示します。

4. 録音した音声を再生するには、[Grove - Button](/ja/Grove-Button "Grove - Button")を押し続けます。録音した音声が再生されるのを聞くことができます。[Grove - Button](/ja/Grove-Button "Grove - Button")を押し続けている間、録音モジュールの赤色LEDが点滅します。この点滅は音声再生が完了したことを示します。[Grove - Button](/ja/Grove-Button "Grove - Button)の代わりに[Grove - Slide Potentiometer](/ja/Grove-Slide_Potentiometer "Grove - Slide Potentiometer")を使用している場合は、スライダーをGNDからVCCの位置に移動することでいつでも再生を聞くことができます。

5. 録音した音声を上書きするには、上記の手順3を繰り返してください。新しいメッセージが古いメッセージを上書きします。

以下はGrove - USB Powerモジュールを使用して構築されたGrove回路のイラストです:

![](https://files.seeedstudio.com/wiki/Grove_Recorder/img/REC_Grove-Recoder.JPG)

![](https://files.seeedstudio.com/wiki/Grove_Recorder/img/Play_Grove-Recoder.JPG)

Grove - USB Powerモジュールを持っていない場合は、代わりにGrove - DC Jack Powerモジュールを使用してください。

## 入手可能性

---
この Grove モジュールは、以下の Grove キットシリーズの一部として利用可能です。

<!-- * [Grove Mixer Pack V2](/ja/Grove-Mixer_Pack_V2 "GROVE MIXER PACK V2") -->

または、Seeed Studio バザールで単体購入することもできます。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Recorder/res/Grove-Recorder_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

---

* [Grove - Recorder v1.0 回路図 (Eagle ファイル)](https://files.seeedstudio.com/wiki/Grove_Recorder/res/Grove-Recorder_v1.0.zip)

* [Grove - Recorder v1.0 回路図 (pdf)](https://files.seeedstudio.com/wiki/Grove_Recorder/res/Grove-Recorder_v1.0.pdf)

* [データシート ISD1820P.pdf (中国語)](https://files.seeedstudio.com/wiki/Grove_Recorder/res/ISD1820P.pdf)

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