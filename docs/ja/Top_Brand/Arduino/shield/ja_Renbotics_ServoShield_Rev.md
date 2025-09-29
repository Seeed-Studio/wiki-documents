---
description: Renbotics_ServoShield_Rev
title: Renbotics サーボシールド Rev

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Renbotics_ServoShield_Rev
last_update:
  date: 05/15/2025
  author: Eico 

no_comments: false # for Disqus

---


<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/h/t/httpsstatics3.seeedstudio.comimagesproductservoshieldkitlarge.jpg" alt="pir" width={600} height="auto" /></p>

Renbotics ServoShield は、Arduino 互換のシールドで、2つの 4017 ディケードカウンタを使用して、わずか 4 つのピン（デジタルピン 6 ～ 9）と標準モードでは 1 つの 8 ビットタイマー（タイマー 2）、高精度モードでは 2 つの 16/8 ビットタイマー（Duemilanove 用のタイマー 1 とタイマー 2、または Mega 用のタイマー 3）を使用して最大 16 個のサーボを駆動します。また、196 ポイントのブレッドボードスタイルのプロトタイピングエリアも含まれています。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Renbotics-ServoShield-V2.0-p-1299.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

* 16 サーボチャンネル

* サーボ電源供給用の便利なねじ端子

* 196 ポイントのブレッドボードスタイルのプロトタイピングエリア

* Arduino Duemilanove および Arduino Mega と互換性あり

* 使いやすい API

## 応用アイデア

* ロボティクス

* アニマトロニクス

* メカトロニックアート

## 使用方法

### ハードウェアのインストール

組み立て済みビュー：

<p style={{textAlign: 'center'}}><img src="http://bz.seeedstudio.com/depot/images/product/StackedLarge.jpg" alt="pir" width={600} height="auto" /></p>

### プログラミング

**サンプル 1: シンプルなサーボスイーパー**

```cpp
#include <ServoShield.h>
ServoShield servos; // ServoShield オブジェクトを作成
void setup()
{
    for (int servo = 0; servo < 16; servo++) // 16 個のサーボを初期化
    {
        servos.setbounds(servo, 1000, 2000); // 最小および最大パルス幅を設定
        servos.setposition(servo, 1500); // サーボの初期位置を設定
    }
    servos.start(); // サーボシールドを開始
}
void loop()
{
    for(int pos = 1000; pos < 2000; pos++) // サーボを 0 度から 180 度まで移動
    { // 1 度ずつ移動
        for (int i = 0; i < 16; i++) // 16 個のサーボすべてに対して
        servos.setposition(i, pos); // サーボを 'pos' 変数の位置に移動
        delay(1);
    }
    for(int pos = 2000; pos >= 1000; pos--) // サーボを 180 度から 0 度まで移動
    {
        for (int i = 0; i < 16; i++) // 16 個のサーボすべて
        servos.setposition(i, pos); // サーボを 'pos' 変数の位置に移動
        delay(1);
    }
}
```

## 部品表 (BOM) / パーツリスト

* 2 x 4017 ディケードカウンタ DIP16

* 2 x 10nf コンデンサ

* 2 x 6 ピン メスシールドスタッキングヘッダー

* 2 x 8 ピン メスシールドスタッキングヘッダー

* 1 x 2 ピン ねじ端子

* 3 x 16 ピン オスブレークアウェイヘッダー

## バージョントラッカー

<table>
  <tr>
    <th> リビジョン </th>
    <th> 説明 </th>
    <th> リリース日 </th>
  </tr>
  <tr>
    <td width="300px"> v1.1 </td>
    <td width="500px"> 初回公開リリース </td>
    <td width="200px"> 2009年8月23日 </td>
  </tr>
</table>

## リソース

* [マニュアル Rev 1.5](https://www.seeedstudio.com/depot/datasheet/RenboticsServoShield1.5.pdf)

* [Arduino ライブラリ Rev 1.3 (2009年7月9日更新)](https://www.seeedstudio.com/depot/images/product/ServoShield.zip)

## 技術サポート & 製品ディスカッション

当社の製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>