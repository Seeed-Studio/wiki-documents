---
description: ステッピングモータードライバ v2.3
title: ステッピングモータードライバ v2.3
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Stepper_Motor_Driver_v2.3
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Stepper_Motor_Driver_v2.3/img/Steperdriver.jpg)

このボードは、1つのステッピングモーターを制御し、2つのリミットスイッチからの入力を受け取ることができます。Allegro A3982 ステッピングモータードライバとトランスレーターを基盤としています。A3982はコイルあたり最大2Aを駆動する能力を持っています。このボードは、従来のL297/L298ステッピングモータードライバを基盤としたv1.xシリーズを改良し、置き換えるために設計されました。A3982は以下のような多くの改良点を提供します：

* L297/L298の2チップ構成に対して、1つのチップのみで済む
* 優れたDMOS技術（ヒートシンク不要！）
* 内蔵ダイオードと同期整流（大きなダイオードアレイ不要！）
* L297/L298よりもはるかに安価で小型（合計で約10ドル安価！）

欠点としては、このボードは主にSMT（表面実装技術）で構成されている点です。しかし、市場で最も大きく、はんだ付けが容易なSMTコンポーネントを使用するという設計上の意識的な決定を行いました。1206サイズの抵抗器を使用し、A3982自体はSOICパッケージに収められています。このボードは初心者でも非常に簡単に組み立てることができます。はんだペーストとホットプレートのような技術を使用すれば、はんだ付けが非常に簡単になります。この方法では、スルーホールコンポーネントを1ピンずつ手動ではんだ付けするよりも、SMTボードをはんだ付けする方がはるかに簡単です。

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社の製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>