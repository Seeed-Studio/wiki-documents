---
title: Lipo Rider V1.1
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/DC_framework_solenoid_HCNE1-0630/
slug: /ja/Lipo_Rider_V1.1
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name:  Lipo Rider V1.1
category: 廃止
bzurl:
oldwikiname: Lipo_Rider_V1.1
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Lipo_Rider_V1-1
sku:
tags:
--- -->

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/Liporider-setup.jpg)

お気に入りの電子キットをグリーンエネルギーで駆動しましょう！Lipo Riderボードを使用すれば、ソーラーエネルギーを利用してお気に入りの5Vデバイスを動作させることができます。Lipo Riderボードは、屋外センサー設計に最適なグリーン電源ソリューションです。Lipo Riderボードをセンサーボードに接続すれば、ソーラー電力で永続的に動作させることができます！

LipoRiderは非常に手頃な価格で、使いやすい設計です。プログラミングは不要で、接続するだけで動作します。内部の充電ICが、さまざまなコンポーネント間の電力フローをすべて処理します。

ソーラー電力が十分でない場合は、microUSBポートを使用してリチウムバッテリーをUSB経由で充電できます。また、Lipo Riderボードを取り外すことなく、キットをプログラムすることも可能です。

Lipo Riderは、単体のボードとして、またはキット（Lipo Rider + リチウムバッテリー + ソーラーパネル）として[Seeed Studio](https://www.seeedstudio.com/depot/)から購入できます。

モデル: POW115D2P

## 特徴 ##

- JST 2.0コネクタ

- 電源の種類に関係なく安定した5V USB電源供給

- チップ内蔵の充電/再充電アルゴリズム

- ソーラー電力またはUSBを介してリチウムポリマーバッテリーを充電

- リチウムバッテリーまたはUSBのいずれかを介して安定した供給電圧

- 2つのUSBポートで、リチウムバッテリーを充電しながらキットをプログラム可能

- バッテリー満充電または充電状態を示すLEDインジケーター

- シンプルな設計で非常に手頃な価格

- エンドユーザーによる簡単な改造で、複数のリチウムバッテリーや大規模/複数のソーラーパネルに対応可能

## 応用アイデア ##

- 分散型屋外センサーネットワークのグリーン電源およびバックアップ供給

- リチウムバッテリー用充電器

## 注意事項 ##

- 露出した電子部品が生きている状態

- 大きな負荷を供給する際にボードが熱くなる可能性

- 短絡や感電の可能性、特に屋外でソーラー電力収集時にデバイスが濡れる場合

- モジュールが過熱する可能性があるため、携帯電話の充電には推奨されません

## 回路図 ##

### ブロック図 ###

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/Lipo-rider-blockdiagram.JPG)

## 仕様 ##

- 小型フットプリント – 寸法 = L47 × H37.5 × D6.6

- リチウムバッテリーの最大充電電流600mA

- リチウムバッテリーからの最大供給電流350mA

- USBデバイスからLipoバッテリーへの逆流を防ぐ電源ダイオード

### 主な仕様 ###

|項目|最小|標準|最大|
|---|---|---|---|
| Iin Solar| 4.8V| 5.0V| 6.5V|
| Icharge (RIset=3.9kΩ)| 400mA| 500mA| 600mA|
| Isupply 0mA|350mA|||
| Vbatt(Rx=0Ω)|4.2V|||
| Vsource USB 5.0V|Vdestination USB 5.0V||||

## ピン定義と定格 ##

### ピン説明とLEDステートメント ###

|CHピンレベル(赤LED状態)|OKピンレベル(緑LED状態)|ステートメント|
|---|---|---|
|低レベル(点灯)|高レベル(消灯)|充電中|
|高レベル(消灯)|低レベル(最後に点灯)|充電完了|
|パルス信号(点滅)|パルス信号(点灯)|バッテリーが存在しない|
|高レベル(消灯)|高レベル(消灯)|2つの状況: - ゲート電圧より入力電圧が低い - バッテリー電圧より入力電圧が低い|

## 使用方法 ##

Lipo Rider は、**MCU** プロジェクトに安定した 5VDC 電源を供給するための電源モジュールとして機能します。以下は、300mA の出力波形を駆動する電源供給の例です：

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/MAP001.jpg)

### ハードウェア設定 ###

#### ハードウェアコンポーネント ####

**ソーラーパネル**

ソーラーパネルは、下部の JST コネクタを介して基板に接続されます。ソーラーチャージャー IC は、入力電圧が 4.8-6.5V の範囲内である場合のみ受け入れます。充電 LED が点灯しない場合、以下の理由が考えられます：

1. リチウムバッテリーが満充電

2. ソーラーパネルの電圧が範囲外（主に太陽光が不足している場合）

2 番目の場合、可能であればソーラーパネルを再配置して、より多くの太陽光を受け取るようにしてください。  
上記のいずれの条件も、バッテリーが完全に空でない限り、Lipo Rider が USB に安定した 5V の供給を提供することを妨げることはありません。

**ソーラーパネルの計算式**

ソーラーパネルの出力電力 = 出力電流 × 供給電圧

例: 1W = Iout × 5V

Iout = 200mA

したがって、損失を無視すると、1 時間の充電で 200mAh が得られます。1000mAh のバッテリーの場合、空から満充電まで約 5 時間かかります（理想的な条件下で）。

**リチウムバッテリー**

Lipo Rider の名前から、リチウムポリマーを使用することが推奨されます。ただし、リチウムポリマーとリチウムイオンバッテリーの化学的性質は十分に類似しているため、これらのバッテリータイプは互換性があります。  
複数のバッテリーを使用する場合は、直列ではなく並列に接続してください。チャージャー IC は 4.2V を供給します。

**スライドスイッチ**

スライドスイッチは USB 5V 電源の供給元を制御します。  
ON – リチウムバッテリーおよび/またはソーラーからの充電が有効  
OFF – リチウムバッテリーおよび/またはソーラーからの充電が無効

**ソース USB ポート**

ソース USB ポートは通常の USB ポートとして使用されるミニ USB ポートです。このポートはリチウムバッテリーを充電するために使用するか、宛先デバイスに接続するために宛先 USB ポートを介して使用されます。

**宛先 USB ポート**

宛先 USB ポートは、宛先デバイスを接続する場所です。宛先デバイスへの電力は Lipo Rider ボードによって供給されます。この供給は、ソーラーパネル、リチウムバッテリー、またはソース USB ポートのいずれかから行われます。

#### 異なる接続シナリオにおける電力フローの方向 ####

多数の組み合わせがあるため、主要なシナリオのみを以下に含めています：

**スタンドアロンモード**

ソーラー電力がリチウムバッテリーを充電します。

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/Lipo-Rider-v1.2-standalone.JPG)

**USB モード**

ソーラー電力がリチウムバッテリーを充電します。リチウムバッテリーが宛先 USB デバイスに電力を供給します。

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/Lipo-Rider-v1.2-usb.JPG)

**プログラムモード**

ソース USB がリチウムバッテリーを充電し、宛先 USB デバイスに電力を供給します。ソースと宛先 USB デバイス間でデータ接続が有効になります。

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/Lipo-Rider-v1.2-program.JPG)

### 例 ###

#### 屋外センサーデバイスの電源供給 ####

Lipo Rider ボードの重要な用途の 1 つは、屋外センサー用の手頃な電源供給としての役割です。屋外センサーデバイスは、ソーラーパネルによって補助されるリチウムバッテリーによって電力供給されます。屋外センサーをソーラー電力のみで動作させることは推奨されません。これは、日中の変動によりセンサーがリセットされたり、予期せず電源が切れたりする可能性があるためです。この場合、デバイスは「USB モード」で動作しています。

屋外センサーデバイスのファームウェアを再プログラムする必要がある場合は、ミニ USB ポートを PC に接続するだけで、上記の「プログラムモード」に移行します。

より大きなバッテリーや複数のバッテリー、またはソーラーパネルを使用することも可能ですが、これはエンドユーザーによる改造が必要です。

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/Lipo-Rider-v1.2-exam1.JPG)

Lipo Rider が Arduino Duemilanove に電力を供給している様子（この場合、厳密には屋外センサーではありません。センサーが接続されておらず、屋外でもありませんが、趣旨は理解できるでしょう）。

## サポート ##

質問やより良い設計アイデアがある場合は、[フォーラム](https://www.seeedstudio.com/forum)または**Wish**で議論することができます。

## バージョントラッカー ##

 |リビジョン| 説明|日付|編集者|
 |---|---|---|---|
|Lipo Rider V0.9b | 初回公開リリース|2010年11月2日| Lafier|
|Lipo Rider V1.0 |リリース改訂|2011年1月11日|Silas Wan|
|Lipo Rider V1.1 |JSTコネクタを2.54から2.0に変更|2011年11月2日|Mike|

## 回路図オンラインビューアー

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/res/Lipo_rider_v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース ##

- [ファイル:Lipo rider v1.1.zip](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/res/Lipo_rider_v1.1.zip)

## 購入方法 ##

[Lipo Rider](https://seeeddoc.github.io/Lipo_Rider/)やその他の**製品**を購入するには、[こちらをクリック](https://www.seeedstudio.com/depot/lipo-rider-p-710.html?cPath=104_107)してください。

## 関連情報 ##

[Lipo Rider Pro](https://seeeddoc.github.io/Lipo_Rider_Pro/)

## ライセンス ##

このドキュメントは、Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/)の下でライセンスされています。ソースコードおよびライブラリは[GPL/LGPL](http://www.gnu.org/licenses/gpl.html)の下でライセンスされており、詳細はソースコードファイルをご確認ください。

## 技術サポート & 製品ディスカッション ##

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>