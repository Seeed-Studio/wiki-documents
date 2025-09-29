---
description: TI LaunchPad用Sidekick Basic Kit
title: TI LaunchPad用Sidekick Basic Kit
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Sidekick_Basic_Kit_for_TI_LaunchPad
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_TI_LaunchPad/img/Sidekick_Basic_Kit_for_TI_LaunchPad_product_view_1200_s.jpg)

SeeedstudioのTI LaunchPad™用Sidekick Basic Kitは、電子工学を学び、ディスクリート部品、ブレッドボード、LaunchPadを使用して基本的な回路を構築するための素晴らしい出発点です。Energiaを使用することで、ソフトウェア作成が大幅に簡略化され、迅速なプロトタイピングやプロジェクトアイデアに合わせた回路の変更により多くの時間を割くことができます。これは、新しい電子工学エンジニアやメーカーにとって優れたスターターキットです！
Sidekickには、LaunchPad開発キットを補完するための部品、ワイヤ、およびブレッドボードが含まれています。マニュアルには10種類の例回路が含まれていますが、追加の部品を集めたり創造性を発揮することで、さらに多くの回路を作成することが可能です。LaunchPad開発者にとって必須のアイテムです！

*   サンプルコードフォルダを[こちら](http://www.energia.nu/sidekickcode)からダウンロードしてください。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Sidekick-Basic-Kit-for-TI-LaunchPad-p-2571.html)

##  ハードウェア概要

###  **部品リスト**

<table>
<tr>
<th>部品名</th>
<th>数量</th>
</tr>
<tr>
<td>400ポイントブレッドボード</td>
<td>1個</td>
</tr>
<tr>
<td>緑色LED</td>
<td>5個</td>
</tr>
<tr>
<td>赤色LED</td>
<td>5個</td>
</tr>
<tr>
<td>RGB共通アノードLED</td>
<td>1個</td>
</tr>
<tr>
<td>セラミックコンデンサ 10nF</td>
<td>10個</td>
</tr>
<tr>
<td>セラミックコンデンサ 100nF</td>
<td>10個</td>
</tr>
<tr>
<td>アルミコンデンサ 100uF</td>
<td>5個</td>
</tr>
<tr>
<td>抵抗 330Ω</td>
<td>10個</td>
</tr>
<tr>
<td>抵抗 1KΩ</td>
<td>10個</td>
</tr>
<tr>
<td>抵抗 10KΩ</td>
<td>10個</td>
</tr>
<tr>
<td>チルトスイッチ</td>
<td>1個</td>
</tr>
<tr>
<td>サーミスタ</td>
<td>1個</td>
</tr>
<tr>
<td>フォトレジスタ（フォトセル）</td>
<td>1個</td>
</tr>
<tr>
<td>ダイオード (1N4004)</td>
<td>1個</td>
</tr>
<tr>
<td>圧電ブザー</td>
<td>1個</td>
</tr>
<tr>
<td>ボタン</td>
<td>5個</td>
</tr>
<tr>
<td>スイッチ</td>
<td>5個</td>
</tr>
<tr>
<td>ノブ付きポテンショメータ</td>
<td>2個</td>
</tr>
<tr>
<td>小型DCモーター</td>
<td>1個</td>
</tr>
<tr>
<td>7セグメント1桁ディスプレイ (SA39-11SRWA – [データシート](https://energia.nu/wordpress/wp-content/uploads/2015/07/SevenSegmentDS.pdf))</td>
<td>1個</td>
</tr>
<tr>
<td>8ビットシフトレジスタ (SN74HC595N – [データシート](http://www.ti.com/lit/ds/symlink/sn74hc595.pdf))</td>
<td>1個</td>
</tr>
<tr>
<td>NPNトランジスタ (LP395Z/NOPB – [データシート](http://www.ti.com/lit/ds/symlink/lp395.pdf))</td>
<td>1個</td>
</tr>
<tr>
<td>アナログ温度センサ (LM19CIZ/NOPB – [データシート](http://www.ti.com/lit/ds/symlink/lm19.pdf))</td>
<td>1個</td>
</tr>
<tr>
<td>ジャンパーワイヤ（長）</td>
<td>5本</td>
</tr>
<tr>
<td>ジャンパーワイヤ（短）</td>
<td>20本</td>
</tr>
<tr>
<td>Sidekickクイックスタートガイド</td>
<td>1冊</td>
</tr>
<tr>
<td>Sidekickマニュアル</td>
<td>1冊</td>
</tr>
</table>

## はじめに

例題コードを www.energia.nu/sidekickcode からダウンロードしてください。  
このコードは、Energia バージョン 18 以降のコード例にも含まれています。  
また、以下の例題ページからコードをコピーしてスケッチに貼り付けることもできます。

**基本的な例**

例題 00: [LED 点滅 (出力)](https://energia.nu/guide/sidekick/sidekick_blink/)

例題 01: [RGB LED のフェード (PWM)](https://energia.nu/guide/sidekick/sidekick_fadergbled/)

例題 02: [プッシュボタン (入力)](https://energia.nu/guide/sidekick/sidekick_pushbutton/)

例題 03: [複数の LED (複数の出力)](https://energia.nu/guide/sidekick/sidekick_blinkmultiple/)

例題 04: [シフトレジスタ (集積回路)](https://energia.nu/guide/sidekick/sidekick_shiftregister/)

例題 05: [圧電ブザー (音)](https://energia.nu/guide/sidekick/sidekick_piezobuzzer/)

例題 06: [ポテンショメータ (可変抵抗器)](https://energia.nu/guide/sidekick/sidekick_potentiometer/)

例題 07: [フォトレジスタ (光センサー)](https://energia.nu/guide/sidekick/sidekick_photoresistor/)

例題 08: [モーターを回す (トランジスタ)](https://energia.nu/guide/sidekick/sidekick_spinmotor/)

例題 08B: [電圧の切り替え (トランジスタ)](https://energia.nu/guide/sidekick/sidekick_switchvoltage/)

例題 09: [温度 (サーミスタと温度センサー)](https://energia.nu/guide/sidekick/sidekick_temperature/)

例題 10: [7セグメントディスプレイ (デジタル表示)](https://energia.nu/guide/sidekick/sidekick_sevensegmentdisplay/)

**高度な例**

例題: スイッチ (傾きスイッチとトグルスイッチ)

例題: ボタン押下カウンター (入力と表示)

例題: ポテンショメータダイヤル (入力と表示)

例題: フォトレジスタフェード (入力と出力)

例題: [シフトレジスタ 2 (IC と表示)](https://energia.nu/guide/sidekick/sidekick_shiftregister2/)

例題: [シフトレジスタ 3 (IC)](https://energia.nu/guide/sidekick/sidekick_shiftregister3/)

例題: [シフトレジスタ 4 (シフトイン IC)](https://energia.nu/guide/sidekick/sidekick_shiftregister4/)

例題: [モーターを回す 2 (モータードライバー)](https://energia.nu/guide/sidekick/sidekick_spinmotor2/)

例題: [サーボを回す (サーボ)](https://energia.nu/guide/sidekick/sidekick_spinservo/)

例題: [DAC (デジタル-アナログ IC)](https://energia.nu/guide/sidekick/sidekick_dac/)

例題: [555 タイマー (IC とスイッチ)](https://energia.nu/guide/sidekick/sidekick_555timer/)

例題: 赤外線送信機と受信機 (ワイヤレス)

[Energia コアチュートリアル](http://www.energia.nu/guide#tutorials)

[Sidekick を Grove Starter Kit for LaunchPad と組み合わせる](https://energia.nu/guide/grove-starter-kit/)

[**さらに多くの例**](https://energia.nu/guide/#tutorials)

<sup>*</sup>これらの例題では、Sidekick Basic Kit for TI LaunchPad™ 以外の追加ハードウェアが必要になる場合があります。

## 技術サポート & 製品に関する議論

弊社製品をお選びいただきありがとうございます！  
製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを提供しています。  
異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>