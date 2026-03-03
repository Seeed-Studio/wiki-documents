---
description: ステッピングモータードライバー
title: ステッピングモータードライバー
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Stepper_Motor_Driver
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Stepper_Motor_Driver/img/Motorshield.jpg)

**モデル：[PCB117A4M](https://www.seeedstudio.com/depot/open-source-service-fusion-pcb-pool-c-64_33.html)**

このボードは、1つのステッピングモーターを制御し、2つのリミットスイッチから入力を受け取ることができます。Allegro A3982 ステッピングモータードライバーとトランスレーターを基盤としています。A3982はコイルあたり最大2Aを駆動する能力を持っています。このボードは、従来のL297/L298ステッピングドライバーに基づくv1.xシリーズのステッピングドライバーを改良し、置き換えるために設計されました。A3982は以下のような多くの改良点を提供します：

*   L297/L298の2チップ構成に対して、1つのチップだけで済む

*   優れたDMOS技術（ヒートシンク不要！）

*   内蔵ダイオードと同期整流（大きなダイオードアレイ不要！）

*   L297/L298よりもはるかに安価で小型（合計で約10ドル安い！）

欠点としては、ボードが主にSMT（表面実装技術）であることです。ただし、市場で最も大きく、はんだ付けが簡単なSMTコンポーネントを使用するという設計上の意識的な決定を行いました。1206サイズの抵抗を使用し、A3982自体はSOICパッケージに収められています。このボードは初心者でも非常に簡単に組み立てることができます。はんだペースト＋ホットプレートのような技術を使用すれば、ボードのはんだ付けは非常に簡単になります。この方法では、スルーホールコンポーネントを1ピンずつ手動ではんだ付けするよりもはるかに簡単です。

##   組み立て済みの外観

*   ほとんどの作業を行うには、**はんだ付けツールキット**が必要です。

*   このボードを組み立てるには、**SMTはんだ付けツールキット**も必要です。

*   初心者の方は、当社の**電子工作ガイド**をお読みください。

## 技術サポートと製品ディスカッション

当社の製品をお選びいただきありがとうございます！お客様が当社の製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>