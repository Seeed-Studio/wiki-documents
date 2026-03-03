---
description: ソーラーチャージャーシールド
title: ソーラーチャージャーシールド
keywords:
- Arduinoシールド
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Solar_Charger_Shield
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: ソーラーチャージャーシールド
category: 廃止
bzurl:
oldwikiname: Solar_Charger_Shield
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Solar_Charger_Shield
sku:
tags:

--- -->

![](https://files.seeedstudio.com/wiki/Solar_Charger_Shield/img/Solar-charger-shield.jpg)

ソーラーチャージャーはArduino互換プラットフォームにスタック可能なシールドで、適応型バッテリーパワーを可能にし、フィールドでの充電用エネルギーハーベスターとして機能します。さまざまなバッテリーを使用して5V出力に昇圧することができるほか、リチウムイオンバッテリーとソーラーパネルを組み合わせて自律型センサーユニットを構成することもできます。

**モデル：[INT107D3P](https://www.seeedstudio.com/depot/solar-charger-shield-p-594.html?cPath=104_107)**

## 特徴  

### 変更点

* ソースの能力に応じて充電電流を自動調整

* ソーラーパネルのような不安定な供給に対応

* リチウムイオンバッテリー向けに最適化された充電曲線

* 充電状態インジケーター

### 供給

* 0.9-4.2Vの広い入力電圧範囲

* 5 VDCの安定化出力

* 最大500mAの出力

* 最大87%の変換効率

* 内蔵1A過電流保護

## 応用アイデア  

* 応用例1
* 応用例2
* 応用例3

## 注意事項  

警告および誤操作は危険を引き起こす可能性があります。

## 仕様

### 主な仕様

| 項目 | 仕様 |
|------|------|
| PCBサイズ | 5.3 x 6.9 x 0.16 cm |
| インジケーター | 充電中、完了 |
| 電源供給 | 4.4VDV-6VDC |
| 電源コネクタ | Mini USB / JST |
| RoHS | YES |

### 充電

| 仕様 | 最小 | 標準 | 最大 | 単位 |
|------|------|------|------|------|
| 入力電圧 | 4.4 | 5 | 6 | VDC |
| 低電力しきい値 | - | 3.7 | 3.9 | VDC |
| 充電電圧 | 4.158 | 4.2 | 4.242 | VDC |
| 事前充電しきい値 | 2.9 | 3 | 3.1 | VDC |

### 電力供給

| 仕様 | 最小 | 標準 | 最大 | 単位 |
|------|------|------|------|------|
| バッテリー電圧 | 2.8 | 3.7 | 4.2 | VDC |
| 出力電圧 | 4.6 | 4.8 | 5.0 | VDC |
| 出力電流 | 200 | 4.2 | 500 | mA |
| 昇圧効率 | 70 | 80 | 87 | % |

### 充電曲線

![](https://files.seeedstudio.com/wiki/Solar_Charger_Shield/img/Changing-curve.jpg)

## ピン定義と定格  

## 機械的寸法  

## 使用方法  

### ハードウェアのインストール  

![](https://files.seeedstudio.com/wiki/Solar_Charger_Shield/img/Solarchange-hardware.jpg)

1. スタック構成：バッテリーをピンヘッダーの間に配置します。バッテリージャックにワイヤーを接続する際は極性に注意してください。

(赤を + に、黒を - に接続してください)。

![](https://files.seeedstudio.com/wiki/Solar_Charger_Shield/img/Solarchange-hardware-step1.jpg)

2. ソーラーパネルまたは他のエネルギー源を PWR1（ソーラーパネルジャック）に接続してください。

![](https://files.seeedstudio.com/wiki/Solar_Charger_Shield/img/Solarchange-hardware-step2.jpg)

**エネルギー源: (4V ～ 6V 出力)**

5V ソーラーセル

安定化モーター出力

**充電式バッテリー (3.7V ～ 4.2V)**

リチウムバッテリー

NiMh バッテリー

**通常のバッテリー (2.8V ～ 4.2V)**

AAA

AA

### プログラミング  

重要なコードスニペットを含みます。  
デモコード例：

```
デモコード
{

}
```

### 例  

プロジェクトおよびアプリケーション例。

## 部品表 (BOM) / 部品リスト  

製品の製造に使用されるすべての部品。

## FAQ  

ここに質問を記載してください：

## サポート  

質問やより良い設計アイデアがある場合は、[フォーラム](https://www.seeedstudio.com/forum)または **wish** にアクセスして議論してください。

## バージョントラッカー  

| リビジョン | 説明 | リリース日 |
|-----------|------|-----------|
| Solar Charger Shield v1.0 | 初回公開リリース | 2010年5月1日 |

## バグトラッカー  

バグトラッカーは、使用中に見つけた可能性のあるバグを公開する場所です。意見を書き留めてください。あなたの回答は、私たちの製品改善に役立ちます。

## 追加アイデア  

追加アイデアは、この製品に関するプロジェクトアイデアや、見つけた他の用途を書き留める場所です。または、プロジェクトページに記載することもできます。

## 購入方法  

Solar Charger Shield の購入はこちら: [https://www.seeedstudio.com/depot/solar-charger-shield-p-594.html?cPath=104_107](https://www.seeedstudio.com/depot/solar-charger-shield-p-594.html?cPath=104_107)

## ライセンス  

このドキュメントは Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/) の下でライセンスされています。ソースコードおよびライブラリは [GPL/LGPL](http://www.gnu.org/licenses/gpl.html) の下でライセンスされています。詳細についてはソースコードファイルを参照してください。

## 技術サポート & 製品ディスカッション  

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>