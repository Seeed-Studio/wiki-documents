---
description: Seeeduino V2.21
title: Seeeduino V2.21 
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino_v2.21
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![画像の説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_v2.21/img/Seeeduino-168p.jpg) ![画像の説明を入力してください](https://files.seeedstudio.com/wiki/Seeeduino_v2.21/img/Seeeduino_fritzing.png)

こちらは、Seeeduino V2.21 Atmega 168P および Seeeduino V2.21 Atmega 328P のための Wiki ページです。

Seeeduino は Arduino 互換ボードです。その設計は Diecimila スキームに基づいており、既存のプログラム、シールド、IDE に 100% 互換性があります。ハードウェア部分では、柔軟性とユーザー体験を向上させるために顕著な変更が加えられています。

## 特徴 ##

- Arduino Diecimila のすべての機能を継承しています。

- Diecimila のピンレイアウト、ネジ穴、寸法に互換性があります。

- SMD コンポーネントを採用。

- 拡張性と利便性を向上。

## FAQ ##

こちらは Seeeduino の FAQ です。現在のバージョンは v2.21 で、ユーザーは以下のようなよくある質問をリストできます。

### Seeeduino とは何ですか？ ###

**回答:** Seeeduino は...

### Seeeduino 328 を Arduino IDE で使用するにはどうすればよいですか？ ###

**回答:** Arduino IDE で「Arduino Duemilanove 328」を選択し、プログラミング時にはリセットスイッチが AUTO に設定されていることを確認してください。

### JST 電源コネクタを通してどのような電圧を供給できますか？ ###

**回答:** これは非公式の（ユーザー提供の）回答です。JST コネクタは L1117-50 電圧レギュレータに接続されており、入力電圧を 5.0 VDC に変換します。L1117 は LDO（低ドロップアウト）レギュレータであるため、動作するには規定電圧より最低 +1.2 ボルト高い電圧が必要です。結論として、最低でも 6.2 VDC が必要ですが、より高い電圧が推奨されます。レギュレータの最大電圧は 15 VDC ですが、これはレギュレータの最良の条件を想定しています。安全マージンを考慮して、電圧は 7 VDC から 13 VDC の範囲内に保つべきです。

### M_RST_A スイッチの用途は何ですか？ ###

**回答:** M_RST_A スイッチは、「M」をオンにするとプログラムをダウンロードする際にボードが自動的に再起動します。「A」をオンにすると自動再起動しません。デフォルトでは「M」がオンになっています。

## サポート ##

質問やより良い設計アイデアがある場合は、[フォーラム](https://www.seeedstudio.com/forum) または **wish** にて議論することができます。

## バージョントラッカー ##

|リビジョン|説明|リリース日|
|---|---|---|
|Seeeduino V0.9|初回公開リリース||
|Seeeduino v1.1|**1.** ピン4の配線に不要なビアを修正。**2.** スイッチでラベルが誤って覆われていたバグを修正。**3.** I2C とセンサーポートを追加。**4.** VCC スイッチ用に 100uF コンデンサを追加。**5.** 新しい 100mil グリッドピンをグループ化。**6.** リセットボタンを金属製に変更。**7.** テキストとラベルを再配置して明確化。||
|Seeeduino v2.12|**1.** 電源オフ時の外部電力消費ゼロ。**2.** 強化されたスイッチ。**3.** 5V 直接入力用の第2電源。[注意] 5V のみ使用！**4.** 3.3V で 150mA のドライバ容量。**5.** 軽量化のための 1.0mm 薄型 PCB。**6.** ピンヘッダ用の追加行を予約。||
|Seeeduino v2.2|**1.** USB/EXT 電源自動選択。**2.** 電源コンデンサのアップグレード。**3.** レイアウトの整理。**4.** リセットの簡略化。**5.** 本物の水晶振動子。**6.** 外部電源ダイオードを 1N4004 に変更（Vin ピンでより多くの電力）。|2010年12月16日|
|Seeeduino v2.21|1. 強化されたミニ USB コネクタにアップグレード。|2011年1月12日|
|Seeeduino v3.0|1. JST コネクタを DC ジャックコネクタに変更。|2012年1月1日|

## バグトラッカー ##

バグトラッカーは、使用中に見つけた可能性のあるバグを公開できる場所です。意見を書き込んでください。あなたの回答が製品の改善に役立ちます。

- ミニ USB コネクタは、ミニ USB ケーブルが接続されている状態で横方向の力を加えると非常に簡単に基板から外れる可能性があります。延長 USB ケーブルを使用し、Seeeduino ボードへのミニ USB ケーブルの頻繁な抜き差しを避けることを検討してください。

## 追加アイデア ##

追加アイデアは、この製品に関するプロジェクトアイデアや、見つけた他の用途を書き込む場所です。または、プロジェクトページに書き込むこともできます。

## 購入方法 ##

Seeeduino v2.21 [(Atmega 168P)](https://www.seeedstudio.com/depot/seeeduino-v221-atmega-168p-p-690.html) および Seeeduino v3.0 [(Atmega 328P)](https://www.seeedstudio.com/depot/seeeduino-v30-atmega-328p-p-669.html?cPath=132_133) を SEEED **Bazaar** で購入できます。

## ライセンス ##

このドキュメントは Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/) の下でライセンスされています。ソースコードおよびライブラリは [GPL/LGPL](http://www.gnu.org/licenses/gpl.html) の下でライセンスされています。詳細はソースコードファイルを参照してください。

## リソース ##

- **[PDF]** [PDF 形式の回路図](https://files.seeedstudio.com/wiki/Seeeduino_v2.21/res/Seeeduino_v2.21.pdf)

## 技術サポートと製品ディスカッション

当社の製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>