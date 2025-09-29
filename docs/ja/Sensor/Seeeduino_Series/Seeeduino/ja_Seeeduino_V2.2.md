---
description: Seeeduino V2.2 
title: Seeeduino V2.2 
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino_V2.2
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_V2.2/img/Seeeduino-168p.jpg) ![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeeduino_V2.2/img/Seeeduino_fritzing.png)

こちらは、Seeeduino V2.2 Atmega 168PおよびSeeeduino V2.2 Atmega 328PのWikiページです。

現在、Seeeduino V2.2 Atmega 168Pは在庫切れです。

SeeeduinoはArduino互換のボードです。その設計はDiecimilaスキームに基づいており、既存のプログラム、シールド、IDEに100%互換性があります。ハードウェア部分では、柔軟性とユーザー体験を向上させるために顕著な変更が加えられています。

Seeeduino V2.2 Atmega 328モデル：[ARD128D2P](https://www.seeedstudio.com/depot/seeeduino-v22-atmega-328p-p-669.html?cPath=80)

## 特徴 ##

- Arduino Diecimilaのすべての機能を継承し、ソケット内のDILパッケージマイクロコントローラーをSMDに置き換え

- Diecimilaのピンレイアウト、ネジ穴、寸法に互換性あり

- SMDコンポーネントを採用

- 拡張性と利便性を向上

## 応用アイデア ##

- データロギング

- リモートセンサーノード

- ロボット制御

## 注意事項 ##

警告や誤操作は危険を引き起こす可能性があります。

## 回路図 ##

これは回路図です。メモリ不足を避けるために、Eagleリソース（.pdfなど）へのリンクをここに記載する必要があります。

## 仕様 ##

主要な仕様やその他の仕様を含めることができます。

## 使用方法 ##

Arduino開発環境を使用してボードをプログラムする場合、ボードリストからAnduino Duemilanoveボードを選択してください。

Seeeduinoをコンピュータに接続してもシリアルポートが表示されない場合は、適切なUSBからシリアルドライバーをダウンロードする必要があります。
Windows、Linux、Mac用のドライバーは以下からダウンロードできます：[https://www.ftdichip.com/Drivers/VCP.htm](https://www.ftdichip.com/Drivers/VCP.htm)

### ハードウェアのインストール ###

### プログラミング ###

重要なコードスニペットを含みます。
デモコード例：

```
デモコード
{}
```

### 例 ###

プロジェクトや応用例。

## 部品表 (BOM) / パーツリスト ##

製品を製造するために使用されるすべての部品。

## FAQ ##

こちらはSeeeduino FAQです。現在のバージョンはV2.2で、ユーザーは以下のように頻繁に寄せられる質問をリストできます：

### Seeeduinoとは何ですか ###

回答: Seeeduinoは...

## サポート ##

質問やより良い設計アイデアがある場合は、[フォーラム](https://www.seeedstudio.com/forum)または**wish**で議論することができます。

## バージョントラッカー ##

|リビジョン|説明|リリース日|
|---|---|------|
|Seeeduino V0.9|初回公開リリース||
|Seeeduino V1.1|1. ピン4の配線に不要なビアを修正。2. スイッチでラベルが誤って覆われるバグを修正。3. I2Cとセンサーポートを追加。4. VCCスイッチ用に100uFコンデンサを追加。5. 新しい100milグリッドピンをグループ化。6. リセットボタンを金属製に変更。7. テキストとラベルを再配置してより明確に表示。||
|Seeeduino V2.12|1. 電源オフ時の外部電力消費ゼロ。2. 強化されたスイッチ。3. 5V直接入力用の第2電源供給。[注意] 5Vのみ使用！4. 3.3Vで150mAのドライバ容量。5. 軽量化のための1.0mm薄型PCB。6. ピンヘッダー用に追加の列を予約。||
|Seeeduino V2.2|1. USB/EXT電源自動選択。2. 電源コンデンサのアップグレード。3. レイアウトの整理。4. リセットが簡単に。5. 本物の水晶振動子。6. 外部電源ダイオードを1N4004に変更（Vinピンでより多くの電力）。|2010年12月16日|

## バグトラッカー ##

バグトラッカーは、使用中に見つけた可能性のあるバグを公開する場所です。意見を書き留めてください。あなたの回答は製品の改善に役立ちます。

- ミニUSBコネクタは、ミニUSBケーブルが接続されている状態で横方向の力を加えると非常に簡単に基板から外れる可能性があります。延長USBケーブルを使用し、SeeeduinoボードへのミニUSBケーブルの頻繁な接続/切断を控えることを検討してください。

## 追加アイデア ##

追加アイデアは、この製品に関するプロジェクトアイデアや、見つけたその他の用途を書く場所です。または、プロジェクトページに記載することができます。

## リソース ##

- [ソースファイル](https://www.seeedstudio.com/depot/source/seeeduinov22.zip)

## 購入方法 ##

Seeeduino V2.2 [Atmega 168P](https://www.seeedstudio.com/depot/microcontrollers-seeeduino-c-79_80.html)および[Atmega 328P](https://www.seeedstudio.com/depot/seeeduino-v22-atmega-328p-p-669.html?cPath=79_80)をSEEED [Bazaar](https://www.seeedstudio.com/depot)で購入できます。

## 関連情報 ##

その他の関連製品やリソース。

## ライセンス ##

このドキュメントはCreative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/)の下でライセンスされています。ソースコードとライブラリは[GPL/LGPL](http://www.gnu.org/licenses/gpl.html)の下でライセンスされています。詳細についてはソースコードファイルを参照してください。

## 技術サポートと製品ディスカッション ##

私たちの製品を選んでいただきありがとうございます！製品の使用体験をスムーズにするために、さまざまなサポートを提供しています。異なる好みやニーズに対応するために、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>