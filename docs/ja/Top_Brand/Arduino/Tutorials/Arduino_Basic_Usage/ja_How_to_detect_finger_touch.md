---
description: 指のタッチを検出する方法
title: 指のタッチを検出する方法

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/How_to_detect_finger_touch
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # for Disqus

---


<!-- ---
name: 指のタッチを検出する方法
category: チュートリアル
bzurl:
oldwikiname: 指のタッチを検出する方法
prodimagename:  
surveyurl: https://www.research.net/r/How_to_detect_finger_touch
sku:
--- -->

## 静電容量を測定する方法

完全な静電容量測定システムは、MPR121のセンシング入力に接続されたセンシング電極パッドと、I2Cバスおよび割り込み出力を介してホストプロセッサと通信するMPR121で構成されています。

![](https://files.seeedstudio.com/wiki/How_to_detect_finger_touch/img/600px-1.jpg)

各センシングチャネルで測定される静電容量は、背景の寄生静電容量(Cb)と指のタッチによる静電容量(Cx)の組み合わせである、地面への総静電容量です。MPR121は一定のDC充電電流方式を使用して静電容量を測定します。各チャネルは定期的に完全に地面に充電および放電され、静電容量を測定します。すべてのチャネルは順次測定され、一つのチャネルが充電/放電および測定期間中にある間、他のチャネルは地面に短絡されます。

![](https://files.seeedstudio.com/wiki/How_to_detect_finger_touch/img/500px-2.jpg)

適用される電荷(Q)の量は、充電電流(I)と充電時間(T)を設定することでプログラム可能です。電極が充電されると、充電終了時のピーク電圧(V)が内部の10ビットADCによって測定されます。この電圧Vは、センシングチャネル上の静電容量(C)に反比例します。

```
 C = Q/V = (I*T)/V
```

つまり、外部の静電容量をある値の電流(I)と時間(T)で充電し、電圧(V)を取得することで、この方法を使用して静電容量を求めることができます。この方法で測定可能な静電容量の範囲を計算することができます。

## タッチセンシングの方法

ADCの生データ出力は、遭遇する高周波および低周波ノイズを除去するために3段階のデジタルフィルタリングを通過します。第一段階のフィルターは単純な移動平均フィルターであり、第二段階のフィルター結果は10ビットで、各センシング入力の即時静電容量として出力データレジスタに保存されます。第三段階のフィルター結果は、第二段階フィルター出力を使用して信号変化のさらに低周波成分を表し、主に長期的でゆっくりとした環境変化（例えば大気中の湿気や汚れ）による静電容量の変動を基準値として使用します。

![](https://files.seeedstudio.com/wiki/How_to_detect_finger_touch/img/600px-3.jpg)

タッチとリリースは、電極の第二段階フィルター出力データの偏差を基準値と比較することで決定されます。偏差が設定された閾値を超えた場合、タッチまたはリリース状態が検出され、ステータスレジスタに報告されます。タッチとリリースの閾値は独立しており、各電極ごとに個別にプログラム可能で、ヒステリシスと電極の独立性を提供します。デバウンス設定を使用してさらにノイズをフィルタリングし、タッチとリリース検出をグリッチフリーにすることができます。

![](https://files.seeedstudio.com/wiki/How_to_detect_finger_touch/img/600px-4.jpg)

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