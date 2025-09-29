---
title: Grove - 高精度RTC（リアルタイムクロック）
nointro:
keywords:
  - ドキュメント
  - ドキュサウラス
image: https://wiki.seeedstudio.com/ja/Grove_High_Precision_RTC/
slug: /ja/Grove_High_Precision_RTC
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/Grove-High_Precision_RTC.jpg)

Grove - 高精度RTCは、低消費電力に最適化されたCMOSリアルタイムクロック（RTC）およびカレンダーであるPCF85063TPクロックチップをベースにしています。オフセットレジスタにより、クロックの微調整が可能です。すべてのアドレスとデータはI2Cバスを介してシリアル転送され、最大バス速度は400 kbit/sです。

[Grove - RTC](https://www.seeedstudio.com/Grove-RTC-p-758.html)と比較して、このモジュールはより正確な結果を提供できます。また、周辺機器用のプログラム可能なクロック出力や、分および半分の分割割り込みを提供します。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-High-Precision-RTC-p-2741.html)

## 特徴

---

- 動作電圧: 5V/3.3V
- 32.768 kHzの水晶振動子に基づく年、月、日、曜日、時、分、秒を提供
- 低電流: VDD = 3.3 V、Tamb = 25 ℃で典型的な0.22 uA
- 400 kHzの2線式I2Cバスインターフェース（VDD = 1.8 V～5.5 V）
- 周辺機器用のプログラム可能なクロック出力（32.768 kHz、16.384 kHz、8.192 kHz、4.096 kHz、2.048 kHz、1.024 kHz、1 Hz）
- 分および半分の分割割り込み
- オシレータ停止検出機能
- 内部電源オンリセット（POR）
- 周波数調整用のプログラム可能なオフセットレジスタ
- インターフェース: Grove - I2C（SCL、SDA、VCC、GND）
- サイズ: 20×40mm
- Arduino用の準備済みライブラリ

## 対応プラットフォーム

## インターフェース機能

---

![](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/Interface.jpg)

1. Groveインターフェース  
2. プログラム可能なクロック出力インターフェース  
3. 分および半分の分割割り込み出力インターフェース  
4. クロックチップPCF85063TP  
5. CR1225バッテリーホルダー  

## アプリケーションアイデア

---

- デジタルスチルカメラ
- デジタルビデオカメラ
- プリンター
- コピー機
- バッテリー駆動デバイス

## はじめに

このセクションの後、**Grove - 高精度RTC**を数ステップで動作させることができます。

### 準備

Grove - 高精度RTCモジュールのデモを作成します。このデモでは、ターミナルを使用してデータを表示します。以下はこのデモに必要なものです。

- [Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html) *1  
- [Grove - 高精度RTC](https://www.seeedstudio.com/) *1  

初めて[Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html)を使用する場合は、[Seeeduino LotusのWiki](https://wiki.seeedstudio.com/ja/Seeeduino_Lotus/)を参照してください。

Seeeduino LotusはArduinoと完全に互換性があり、Arduinoと同じように簡単に動作します。

Arduinoを初めて使用する場合は、[こちら](https://arduino.cc)でArduinoの旅を始めてください。

### ハードウェアの接続

[Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html)はSeeeduinoとBase Shieldの組み合わせです。以下の画像のようにRTCモジュールをI2Cソケットに直接接続できます。

![](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/connect.jpg)

### ライブラリのダウンロード

ライブラリをダウンロードしてインストールしてください（[Arduinoライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)）。

[![](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/library.png)](https://github.com/Seeed-Studio/Grove_High_Precision_RTC_PCF85063TP/archive/master.zip)

### サンプルを開く

ライブラリをインストールした後、Arduinoを再起動し、File > Examples > SetTimeAndDisplayをクリックしてください。

![](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/demo2.jpg)

### 結果を確認

アップロードが完了したら、シリアルモニターを開いて結果を確認できます。

![](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/result.jpg)

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/res/sch_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

---
- [Grove - 高精度RTCライブラリとサンプル](https://github.com/Seeed-Studio/Grove_High_Precision_RTC_PCF85063TP)
- [Grove - 高精度RTC Eagleファイル](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/res/sch_eagle.zip)
- [Grove - 高精度RTC回路図PDFファイル](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/res/sch_pdf.pdf)
- [PCF85063TPデータシート](https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/res/PCF85063TP.pdf)
- [Grove - RTC](https://www.seeedstudio.com/Grove-RTC-p-758.html)

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