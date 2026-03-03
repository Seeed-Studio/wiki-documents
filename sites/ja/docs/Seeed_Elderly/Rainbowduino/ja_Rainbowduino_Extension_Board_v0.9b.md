---
description: Rainbowduino拡張ボード v0.9b
title: Rainbowduino拡張ボード v0.9b
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Rainbowduino_Extension_Board_v0.9b
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Rainbowduino_Extension_Board_v0.9b/img/Rainbowshield.jpg)

Rainbowduino拡張シールドは、Rainbowduinoの192個の独立したLED駆動チャンネルをブレイクアウトするボードです。これらのチャンネルは、制御を容易にするために、赤、緑、青の3つの8×8配列に分割されています。このボードは、RainbowduinoをベースにしたカスタマイズLEDプロジェクトを簡単にするために設計されています。

<font color="red" size="3">注意: Rainbowduino拡張ボードを駆動するには、[Rainbowduino](https://www.seeedstudio.com/depot/rainbowduino-led-driver-platform-atmega-328-p-371.html?cPath=132_133)も必要です。</font>

**モデル: [INT111A4M](https://www.seeedstudio.com/depot/rainbowduino-extension-board-v09b-p-692.html?cPath=175_177)**

## 特徴

* 60.33mm×180.61mm（Rainbowduinoのサイズの3倍）
* 192個の独立したLEDを駆動可能
* 追加の接続不要
* Rainbowduinoに直接差し込み可能
* 8×24 LEDマトリックス
* 外部LEDを駆動可能

## 応用アイデア

* 独自のパターンをデザイン
* スクロールメッセージを作成

## 注意事項

LEDの正極は必ず八角形のパッドに接続してください。拡張ボードの四角形のピンは最初のピンラビットに差し込む必要があります。逆に接続すると、LEDは点灯せず、損傷することもありません。

## 使用方法

Rainbowduino拡張シールドはRainbowduinoのブレイクアウトボードであり、192（8×24）のLEDを簡単に制御できます。また、ボード外にLEDをはんだ付けすることも可能です。LEDは上向きで、その裏側がピンをはんだ付けする場所です。

### ハードウェアのインストール

1. ピンヘッダーとLEDを正しくはんだ付けする
2. Rainbowduinoに差し込む

### プログラミング

詳細なデモコードは**こちら**にリンクされています。必要に応じてご参照ください。

### 例

Rainbowduino拡張シールドは、異なるパターンでLEDを点灯させるために使用されます。以下のコードは、例としてG10とR31を徐々に点灯させる方法を示しています。`dots_color`配列のパラメータ値を変更することで、スタイルを簡単に変更できます。最初の要素は異なる色のマトリックスを選択でき、最後の2つのパラメータは行と列の値で点灯させるLEDを定義します。

```
void _main(void)
{
  _init();
  unsigned char i=0;
  for(;;)
  {
    dots_color[0][0][0]=i<<4;// 上位4ビット G8 ドット
    dots_color[1][0][3]=i&0x0f;// 下位4ビット R1 ドット
    i++;
    delay(100);
  }
}
```

効果は以下の通りです：

![](https://files.seeedstudio.com/wiki/Rainbowduino_Extension_Board_v0.9b/img/Rainbowduino-extension-exam1.jpg)

実際には1バイトで2つのLEDを制御します。詳細な理論は以下の通りです：

```
unsigned char dots_color[3][8][4]=
{
//=====================================================
  {// 緑のデバッグ
    {0x00,0x00,0x00,0x00},// G8,G7,G6,G5,G4,G3,G2,G1          各ドットは4ビットの色を持つ
    {0x00,0x00,0x00,0x00},// G16,G15,G14,G13,G12,G11,G10,G9   各ドットは4ビットの色を持つ
    {0x00,0x00,0x00,0x00},// G24,G23,G22,G21,G20,G19,G18,G17  各ドットは4ビットの色を持つ
    {0x00,0x00,0x00,0x00},// G32,G31,G30,G29,G28,G27,G26,G25  各ドットは4ビットの色を持つ
    {0x00,0x00,0x00,0x00},// G40,G39,G38,G37,G36,G35,G34,G33  各ドットは4ビットの色を持つ
    {0x00,0x00,0x00,0x00},// G48,G47,G46,G45,G44,G43,G42,G41  各ドットは4ビットの色を持つ
    {0x00,0x00,0x00,0x00},// G56,G55,G54,G53,G52,G51,G50,G49  各ドットは4ビットの色を持つ
    {0x00,0x00,0x00,0x00} // G64,G63,G62,G61,G60,G59,G58,G57  各ドットは4ビットの色を持つ
},
//=======================================================
  {// 赤のデバッグ
    {0x00,0x00,0x00,0x00},// R8,R7,R6,R5,R4,R3,R2,R1          各ドットは4ビットの色を持つ
    {0x00,0x00,0x00,0x00},// R16,R15,R14,R13,R12,R11,R10,R9   各ドットは4ビットの色を持つ
    {0x00,0x00,0x00,0x00},// R24,R23,R22,R21,R20,R19,R18,R17  各ドットは4ビットの色を持つ
    {0x00,0x00,0x00,0x00},// R32,R31,R30,R29,R28,R27,R26,R25  各ドットは4ビットの色を持つ
    {0x00,0x00,0x00,0x00},// R40,R39,R38,R37,R36,R35,R34,R33  各ドットは4ビットの色を持つ
    {0x00,0x00,0x00,0x00},// R48,R47,R46,R45,R44,R43,R42,R41  各ドットは4ビットの色を持つ
    {0x00,0x00,0x00,0x00},// R56,R55,R54,R53,R52,R51,R50,R49  各ドットは4ビットの色を持つ
    {0x00,0x00,0x00,0x00} // R64,R63,R62,R61,R60,R59,R58,R57  各ドットは4ビットの色を持つ
  },
//======================================================
  {// 青のデバッグ
    {0x00,0x00,0x00,0x00},// B8,B7,B6,B5,B4,B3,B2,B1          各ドットは4ビットの色を持つ
    {0x00,0x00,0x00,0x00},// B16,B15,B14,B13,B12,B11,B10,B9   各ドットは4ビットの色を持つ
    {0x00,0x00,0x00,0x00},// B24,B23,B22,B21,B20,B19,B18,B17  各ドットは4ビットの色を持つ
    {0x00,0x00,0x00,0x00},// B32,B31,B30,B29,B28,B27,B26,B25  各ドットは4ビットの色を持つ
    {0x00,0x00,0x00,0x00},// B40,B39,B38,B37,B36,B35,B34,B33  各ドットは4ビットの色を持つ
    {0x00,0x00,0x00,0x00},// B48,B47,B46,B45,B44,B43,B42,B41  各ドットは4ビットの色を持つ
    {0x00,0x00,0x00,0x00},// B56,B55,B54,B53,B52,B51,B50,B49  各ドットは4ビットの色を持つ
    {0x00,0x00,0x00,0x00} // B64,B63,B62,B61,B60,B59,B58,B57  各ドットは4ビットの色を持つ
},
};
```

もう1つの効果として、RGBという文字が表示される例があります。詳細なコードはデポページにリンクされています。

![](https://files.seeedstudio.com/wiki/Rainbowduino_Extension_Board_v0.9b/img/Rainbowduino-extension-exam2.jpg)

## リソース  

- **[データシート]** [データシート](https://www.seeedstudio.com/depot/datasheet/Rainbowduino_Extension_Shield_v0.9b.pdf)

## サポート  

質問やより良い設計アイデアがある場合は、[フォーラム](https://www.seeedstudio.com/forum)または **wish** にアクセスして議論してください。

## バージョントラッカー  

| リビジョン | 説明 | リリース日 |
|---|---|---|
| v0.9b | 初回公開リリース | 2010年9月23日 |

## 追加アイデア  

追加アイデアは、この製品に関するプロジェクトアイデアや、見つけた他の用途について記載する場所です。または、プロジェクトページに記載することもできます。

## 購入方法  

購入はこちらをクリックしてください: [https://www.seeedstudio.com/depot/rainbowduino-extension-board-v09b-p-692.html?cPath=175_177](https://www.seeedstudio.com/depot/rainbowduino-extension-board-v09b-p-692.html?cPath=175_177)

## 関連情報  

拡張ボード用のLEDについては、こちらをご覧ください: **https://www.seeedstudio.com/depot/optoelectronics-discrete-led-c-93_94.html**

## ライセンス  

このドキュメントは Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/) の下でライセンスされています。ソースコードおよびライブラリは [GPL/LGPL](http://www.gnu.org/licenses/gpl.html) の下でライセンスされています。詳細についてはソースコードファイルをご確認ください。

## 技術サポート & 製品ディスカッション  

弊社製品をお選びいただきありがとうございます！製品のご利用がスムーズに進むよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>