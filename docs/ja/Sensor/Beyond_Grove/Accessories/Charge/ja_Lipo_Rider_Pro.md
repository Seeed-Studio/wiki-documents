---
description: Lipo Rider Pro
title: Lipo Rider Pro
keywords:
- アクセサリー充電
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Lipo_Rider_Pro
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/img/LiPo_Rider_Pro.jpg)

お気に入りの電子キットをグリーンエネルギーで動かしましょう！LiPo Rider ProはLipo Riderの改良版であり、Lipo Riderよりも重い負荷出力（最大1Aピーク）を供給します。LiPo Rider Proボードは、太陽光を利用してお気に入りの5Vデバイスを動作させることができます。LiPo Rider Proボードは、屋外センサー設計に最適なグリーン電源ソリューションです。LiPo Rider Proボードをセンサーボードに接続すれば、太陽光で永続的に動作させることができます。また、携帯電話の充電にも使用できます。

LiPo Rider Proは非常に手頃な価格で、使いやすい設計です。プログラミングは不要で、接続するだけで動作します。内部の充電ICが、さまざまなコンポーネント間の電力の流れを処理します。

太陽光が十分でない場合、ミニUSBポートを使用してリチウム電池をUSB経由で充電することができます。また、LiPo Rider Proボードを取り外すことなくキットをプログラムすることも可能です。

LiPo Rider Proは、単体のボードとして購入することも、キット（LiPo Rider Pro + リチウム電池 + ソーラーパネル）として購入することもできます。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/LiPo-Rider-Pro-p-992.html)

## 特徴

--------

- 最大1A負荷出力
- バッテリーおよびソーラーパネルコネクタはJST 2.0
- ソースに関係なく安定した5V USB電源供給
- チップ内蔵の充電/再充電アルゴリズム
- 太陽光またはUSBを介してリチウムポリマー電池を充電
- リチウム電池またはUSBを介した安定した供給電圧
- 2つのUSBポートでリチウム電池を充電しながらキットをプログラム可能
- バッテリー満充電または充電状態を示すLEDインジケーター
- エンドユーザーによる簡単な改造で複数のリチウム電池や大規模/複数のソーラーパネルに対応可能
- リチウム電池の電力量を示す4つの緑色LED

## 応用アイデア

-----------------

- 分散型屋外センサーネットワークのグリーン電源およびバックアップ供給
- リチウム電池の充電器
- 携帯電話の充電器

:::caution

1. LiPo Rider ProはLiPo Rider v1.0とは異なるコネクタを使用しています。前者はJST 2.0、後者はJST 2.54です。

2. 露出した電子部品が存在します。

3. 大きな負荷を供給する際にボードが熱くなる可能性があります。

4. 特に屋外で太陽光を収集する際にデバイスが濡れると、短絡や感電の可能性があります。
:::

## 寸法

----------

LiPo Rider Proの寸法は[6Aリチウムポリマー電池](https://www.seeedstudio.com/depot/lithium-ion-polymer-battery-pack-6a-p-602.html?cPath=178_183)に似ています。

![](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/img/Liporiderprod.jpg)

仕様
--------------

<table border="1">
<tr>
<th>
項目
</th>
<th>
最小値
</th>
<th>
標準値
</th>
<th>
最大値
</th>
</tr>
<tr align="center">
<td width="400">
V<sub>in</sub> ソーラー
</td>
<td width="200">
4.8V
</td>
<td width="200">
5.0V
</td>
<td width="200">
6.5V(10秒間)
</td>
</tr>
<tr align="center">
<td>
I<sub>charge</sub> (R<sub>Iset</sub>=3.9kΩ)
</td>
<td>
400mA
</td>
<td>
500mA
</td>
<td>
600mA
</td>
</tr>
<tr align="center">
<td>
I<sub>load</sub>
</td>
<td>
0mA
</td>
<td>
</td>
<td>
1000mA
</td>
</tr>
<tr align="center">
<td>
V<sub>batt</sub>(R<sub>x</sub>=0Ω)
</td>
<td colspan="3" rowspan="1">
4.2V
</td>
</tr>
<tr align="center">
<td>
V<sub>source USB</sub>
</td>
<td colspan="3" rowspan="1">
5.0V
</td>
</tr>
<tr align="center">
<td>
V<sub>destination USB</sub>
</td>
<td colspan="3" rowspan="1">
5.0V
</td>
</tr>
</table>

ピン定義と評価
-------------------------

**ピン説明とLEDステートメント**

| CHピンレベル（赤色LED状態） | OKピンレベル（緑色LED状態） | ステートメント |
|---------------------------|---------------------------|-------------|
| 低レベル（ON） | 高レベル（OFF） | 充電中 |
| 高レベル（OFF） | 低レベル（最後にON） | 充電完了 |
| パルス信号（点滅） | パルス信号（ON） | バッテリーが存在しない |
| 高レベル（OFF） | 高レベル（OFF） | 2つの状況:<br/>• 入力電圧がゲート電圧より低い<br/>• 入力電圧がバッテリー電圧より低い |

**LEDバッテリーインジケーター**

LiPo Rider Proには携帯電話のような4つのLEDバッテリーインジケーターがあり、以下のようにボタンK2を押すだけでバッテリー残量を確認できます:
![](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/img/Lipo3.jpg)

**LEDバッテリーインジケーターのパラメータ**

| 点灯しているインジケーターの数 | 電力量 |
|-----------------------------------|-----------------------|
| 4                                 | 90~100%               |
| 3                                 | 60~90%                |
| 2                                 | 30~60%                |
| 1                                 | 10~30%                |
| 0                                 | 0~10%                 |

使用方法
-----

**例**

**屋外センサーデバイスの電源供給**

LiPo Rider Proボードの重要な応用例の1つは、屋外センサー用の手頃な価格の電源供給としての利用です。屋外センサーデバイスは、ソーラーパネルによって補助されるリチウム電池によって電力供給されます。ただし、屋外センサーを太陽光のみで動作させることは推奨されません。日中の変動によりセンサーがリセットされたり、予期せず電源が切れる可能性があるためです。この場合、デバイスは「USBモード」で動作します。

屋外センサーデバイスのファームウェアを再プログラムする必要がある場合は、ミニUSBポートをPCに接続するだけで、上記の説明の通り「プログラムモード」に切り替わります。

より大きなバッテリーや複数のソーラーパネルを使用することも可能ですが、エンドユーザーによる改造が必要です。

![](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/img/Lipo-Rider-pro.JPG)

**太陽光を利用したリチウムポリマー電池の充電**


![](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/img/LiPo_Rider_Pro1.jpg)

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/res/Lipo_Rider_Pro_v0.9b.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

---

- [CN3065 データシート（PDF形式）](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/res/DSE-CN3065.pdf)
- [回路図とレイアウト（Eagle形式）](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/res/Lipo_Rider_Pro_v0.9b.rar)
- [回路図（PDF形式）](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/res/LiPo_Rider_Pro_v0.9b.pdf)
- [Lipo Rider ProでiPodやiPhoneを充電する方法](https://forum.seeedstudio.com/viewtopic.php?f=4&t=3575)
- [リチウムイオンポリマーバッテリーパック - 6A](https://www.seeedstudio.com/Lithium-Ion-polymer-Battery-pack-6A-p-602.html)

## プロジェクト

**PlantSigfox Monitoring**  
空気/土壌の湿度、温度、明るさ（およびRGB光線）を取得します。また、位置情報を送信し、天気予報を提供します。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/plantsigfox-ei2i4/plantsigfox-monitoring-3d66be/embed' width='350'></iframe>

**Arduinoを使用した通過検知システム**  
このプロジェクトの目的は、果樹園の入口で車や人の通過を検知し、家の中で警告音を鳴らすことです。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/juan-salvador-aleixandre-talens/step-detection-system-by-a-way-with-arduino-bc6f3a/embed' width='350'></iframe>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>