---
title: DSO Quad:キャリブレーション
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/DSO_Quad-Calibration/
slug: /ja/DSO_Quad-Calibration
last_update:
  date: 05/15/2025
  author: gunengyu
---


キャリブレーションは以下の異なる部分で構成されています：

* DCキャリブレーション

* ゼロオフセット

* ゲイン

* ACキャリブレーション（スロープ応答、オーバーシュート）

* 1 ... 10V/divの場合

* 50 ... 500mV/divの場合
* x10プローブの場合

## ゼロオフセット

このキャリブレーションはほぼ自動的に行われます。この作業を行う際、DSOは十分に動作温度に達している必要があります。そのため、少なくとも10分前に電源を入れておく必要があります。「Save/Recall」メニューから「Calibr」を選択した後（「Square」ボタンを押し、最後の項目までスクロールし、-/+ボタンを押す）、CH_A入力をGNDに短絡するよう求められます。プローブを使用している場合は、「x1」モードである必要があり、「x10」モードではありません。「Square」ボタンを押すことで開始されます。数秒後に完了し、ゲインキャリブレーションの最初のステップを待機します。ここでゲインキャリブレーションを行いたくない場合は、-/+ナビゲーターを使用してすべての範囲を変更せずに「右矢印」で進むことができます。その後、再度実行する（Squareボタン）か、「ナビゲーターの右」で「次の操作」に進み、CH_Bのゼロ調整を行うことができます。追加情報：入力電圧がゼロであっても、実際のアンプは出力で小さな非ゼロ値を持っています。そして、この値は範囲の抵抗が変更されると変化します。このゼロオフセットは各範囲で評価され、将来的にはデジタル部分でそのオフセットを加算/減算することで補正されます。

## ゲインキャリブレーション

ゲインキャリブレーションには追加の外部ハードウェアが必要です！各範囲で、フルスケール範囲の約80 ... 100%の既知のDC電圧を適用する必要があります。その「フルスケール範囲」は例えば50mV/div * 6 div = 0.3Vまたは10V/div * 6 div = 60Vです。そのため、以下の電圧が必要です：

```
0.25... 0.3 V for 50mV/div range
0.5 ... 0.6 V for 0.1V/div range
1.0 ... 1.2 V for 0.2V/div range
2.5 ... 3.0 V for 0.5V/div range
5.0 ... 6.0 V for   1V/div range
10  ... 12  V for   2V/div range
25  ... 30  V for   5V/div range
50  ... 60  V for  10V/div range
```

抵抗を電圧分割器として使用し、電圧を測定するために電圧マルチメーターを使用することをお勧めします。非常に安価な電圧計はしばしば正確ではないことに注意してください。しかし、25 ... 40 €（またはUSドル）の価格のメーターは十分に正確であるはずです。低電圧は例えばUSB充電器から取得することができます。また、例えば12V電源や19Vノートブック電源を使用することもできます。50 ... 60Vは最も入手が難しいかもしれません。しかし、より小さい範囲のみをキャリブレーションし、高い範囲では精度が低いままにすることもできます。高電圧の可能な解決策として、DC/DCコンバーターを使用することが考えられます。例えば、5Vから24Vへのコンバーターを2つ使用することができ、これらは1つあたり約5€で入手可能です。出力電流は5mAで十分です。5Vで供給可能な完全な回路は以下のようになります：[[[1]](https://files.seeedstudio.com/wiki/DSO_Quad-Calibration/res/GainCalibrationCircuit.PNG)] 与えられた出力値は例えば入力電圧や抵抗の許容誤差によって変動する可能性があります。しかし、上記の必要な範囲内に収まるはずです。**注意:** 54Vは危険な電圧です！

この装置を使用して、電圧計とDSOのチャンネルをその回路の出力に順次接続し、-/+を使用してDSOの値を電圧計の値と同じに調整します。

## ACキャリブレーション

DCキャリブレーションがDSOのデジタル部分で適用される一方で、ACキャリブレーションはハードウェア内のいくつかのコンデンサーの値を変更することで行われます。コンデンサーの分割比率は抵抗の分割比率と一致する必要があります。

![](https://files.seeedstudio.com/wiki/DSO_Quad-Calibration/img/DSO203_AC-Cal_Circuit_Diagr.PNG).

Quad DSOのキャリブレーション手順はすでに記述されています。例えばこちら：[[2]](http://neophob.com/2012/03/dso-quad-for-dummies/) 内蔵の方形波出力を使用します。まずCh_Aでプローブをx1に設定し、1V/div範囲でA1（=C5A）を調整します。その後、500mV/div範囲でA2（C3A）を調整します。その後、A1設定を再確認し、次にA2を再確認します。各設定が他の設定にも少し影響を与えるためです。最後にプローブをx10に設定し、適切な範囲を選択してA3を調整します。

## 関連情報

* [DSO Quad](/ja/DSO_Quad "DSO Quad")

* [DSO Quad:ファームウェアのアップグレード](/ja/DSO_Quad-Building_Firmware "DSO Quad:ファームウェアのアップグレード")

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