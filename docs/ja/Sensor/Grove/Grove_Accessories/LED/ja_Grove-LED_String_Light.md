---
description: Grove - LED String Light
title: Grove - LED String Light
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-LED_String_Light
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_String_Light/img/Grove-led-string-light.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_String_Light/img/Grove-led-string-light.jpg" alt="pir" width={600} height="auto" /></p>

Grove - LED String Light モジュールは、パックに含まれる LED ストリングライト用の LED ドライバーです。モジュールの動作電圧は 3.3V/5V ですが、LED ストリングライトは 12V の動作電圧を必要とします。そのため、このモジュールは AIC1896 電流モード昇圧 DC-DC コンバーターを使用して、LED ストリングライトに必要な電圧を供給します。LED ストリングライトは長さ 5 メートルで、50 個の RGB LED が等間隔で接続されています。これを使用してクリスマスツリーを飾ったり、パーティーを照らしたり、部屋を装飾することができます。

<!-- [![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-LED-String-Light-p-2324.html) -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-LED-String-Light-p-2324.html)
## 特徴
---
* LED ストリングライトと組み合わせて使用

* パックに含まれる長さ 5 メートルの LED ストリングライト

* 長さ 5 メートル全体にわたって等間隔に接続された 50 個の RGB LED がカラフルな外観を提供

* JST 2.0 インターフェースを使用して LED ストリングライトをドライバーモジュールに接続

* 他の Grove モジュールに接続するための標準 4 ピン Grove ケーブルを使用

## インターフェース機能
---
<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_String_Light/img/LED_String_Light.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_String_Light/img/LED_String_Light.jpg" alt="pir" width={600} height="auto" /></p>

<dl>
<dt>① JST 2.0 インターフェース: LED ストリングライトに接続するために使用</dt>
<dt>② Grove インターフェース: SIG (ピン 1) が HIGH の場合、LED ストリングライトが点灯し、LOW の場合は消灯</dt>
</dl>

## 使用方法
---
以下の手順に従って、このモジュールを使用してサンプル回路を構築してください：

1.  まず、JST2.0 二線式インターフェースを使用して **Grove - LED String Light** モジュールに LED ストリングライトを接続します。

2.  LED ストリングライトモジュールを回路の出力側（電源モジュールの右側）に接続します。回路の入力側には、センサーをベースとした入力モジュール（[Grove - Light Sensor](/ja/Grove-Light_Sensor/)、[Grove - Sound Sensor](/ja/Grove-Sound_Sensor/)、[Grove - Button](/ja/Grove-Button/) または [Grove - Slide Potentiometer](/ja/Grove-Slide_Potentiometer/)）を使用できます。

3.  回路に電源を供給します。

4.  入力モジュールがトリガーを供給すると、LED ストリングライトが点灯します：

光センサーを回路の入力側に直接接続して使用する場合、明るい光で LED が点灯するのが見えるはずです。暗闇でライトを点灯させたい場合は、光センサーと電源モジュールの間に Grove - NOT モジュールを追加してください。

音センサーを使用する場合、音を検知すると LED が点灯するのが見えるはずです。逆に、常時ライトを点灯させたい場合（音があるときだけ消灯させたい場合）は、音センサーと電源モジュールの間に Grove - NOT モジュールを追加してください。

[Grove - Button](/ja/Grove-Button/) モジュールのようなモーメンタリースイッチを使用する場合、ボタンを押すだけでストリングライトが点灯します。

* スライドポテンショメーターを使用する場合、スライダーを GND 位置から VCC 位置に移動すると、供給電圧が増加するにつれてライトの明るさが増加するのが見えます。
<!-- </dd></dl>
</dd></dl>
</dd></dl> -->

以下は、Grove - USB Power 電源モジュールを使用して構築された Grove 回路の例です：

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_String_Light/img/LED_String_Light_Photo.gif) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_String_Light/img/LED_String_Light_Photo.gif" alt="pir" width={600} height="auto" /></p>

Grove - USB Power モジュールがない場合は、代わりに Grove - DC Jack Power モジュールを使用して LED ストリングライトを点灯させてください。

## 入手可能性
---
この Grove モジュールは、以下の Grove キットシリーズの一部として利用可能です。

<!-- 链接有问题*   [Grove Mixer Pack V2](/ja/Grove-Mixer_Pack_V2 "GROVE MIXER PACK V2") -->

または、Seeed Studio バザールで単体購入することもできます。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_String_Light/res/Grove-LED_String_Light.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース
---
*   [[回路図 PDF](https://files.seeedstudio.com/wiki/Grove-LED_String_Light/res/Grove-LED_String_Light.pdf)]

*   [[Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-LED_String_Light/res/Grove-LED_String_Light.zip)]

## 技術サポート & 製品ディスカッション
弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、スムーズな体験を提供するため、さまざまなサポートを用意しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>