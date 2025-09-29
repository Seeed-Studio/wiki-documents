---
description: ReSpeaker製品ガイド
title: ReSpeaker製品ガイド
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ReSpeaker_Product_Guide
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

# **ReSpeaker製品ガイド**

## 開発者向けオープン音声エコシステム

[![All ReSpeaker Dev Boards](https://files.seeedstudio.com/wiki/ReSpeakerSolutions/img/FullReSpeakerLine.png)](https://www.seeedstudio.com/series/Respeaker-10.html)

## **ReSpeakerの選び方**

ReSpeakerラインの目的と用途について少し理解していただけたでしょうか - [ソリューションページ](https://wiki.seeedstudio.com/ja/ReSpeaker_Solutions/)や[紹介ページ](https://wiki.seeedstudio.com/ja/ReSpeaker/)をご覧いただいたかもしれませんが、実際にあなたのニーズに合う製品はどれでしょうか？ご心配なく - このページがお手伝いします。

## **3つのカテゴリー**

現在、ReSpeakerラインには3つの主要なボードカテゴリーがあります。これら3つのカテゴリーはすべて音声インターフェースを可能にするように設計されていますが、それぞれ異なる方法でプロジェクトに統合されるように設計されています。

- SBCソリューション
- マイクアレイソリューション
- Raspberry Piマイクアレイソリューション

### **SBCソリューション**

![SBC Solution](https://files.seeedstudio.com/wiki/ReSpeakerProductGuide/img/SBC_Solution.png)

音声インタラクションを中心としたプロジェクトには、ReSpeaker Coreラインが理想的です。SBCとして機能し、音声を聞き取り、フロントエンドオーディオ処理のためのソフトウェアベースDSPを実行するだけでなく、プロジェクト全体のプロセスを制御することもできます。ハードウェアの操作から高度なユーザーアプリケーションコードの実行まで、ReSpeaker Coreラインはプロジェクトの中心となるように設計されています。

推奨対象：開発者、企業

**[ReSpeaker Core v2.0](https://wiki.seeedstudio.com/ja/ReSpeaker_Core_v2.0/)**は、大幅な処理能力と統合された6マイク円形アレイを特徴としています。ボードの中央にはコアモジュールがあり、SoC、メモリ（RAM）、PMUが含まれています。ボードの外側の端には、コネクタ、WiFiモジュール、LED、マイクアレイなどの周辺機器があります。これにより簡単なカスタマイズが可能になり、ReSpeaker Core v2.0をプロジェクトの優れたオールインワンボードソリューションにし、プロジェクトをスケールに移行する際のコストを削減します。

### **マイクアレイソリューション**

![MicArraySolution](https://files.seeedstudio.com/wiki/ReSpeakerProductGuide/img/Mic_Array_Solution.png)

ReSpeaker Mic Arrayラインは、フロントエンド加速にハードウェアDSPを使用し、統合されたシステムにクリーンな音声を返します。これにより、音声インターフェースの恩恵を受ける既存のプロジェクトに追加するのに理想的です。

推奨対象：開発者、メーカープロ、企業

**[ReSpeaker Mic Array v2.0](https://wiki.seeedstudio.com/ja/ReSpeaker_Mic_Array_v2.0/)**は、XMOS XVF3000によって駆動される円形マイクアレイです。ハードウェア対応のフロントエンドオーディオ処理を特徴とし、Windows、macOS、多くのLinuxディストリビューションを含む最も一般的なOSと互換性があります。オーディオ出力も可能で、使用時にはAECが可能です。マイク構成も設定およびカスタマイズできます。

### **Raspberry Piマイクアレイソリューション**

![a](https://files.seeedstudio.com/wiki/ReSpeakerProductGuide/img/Raspberry_Pi_Mic_Array_Solutions.png)

Raspberry Pi用のReSpeakerシールドをいくつか作成しました。シンプルな音声コマンドを実験したい、独自のAmazon EchoやGoogle Homeを作成したい、またはRaspberry Piで開発したいユーザーにとって、Raspberry Pi用のマイクアレイは優れた選択肢です。他のReSpeaker製品と同様に、これらもカスタマイズできます。

推奨対象：メーカー、メーカープロ、開発者

**[ReSpeaker 4-Mic Linear Array Kit](https://wiki.seeedstudio.com/ja/ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi/)**は、壁に対して固定されるプロジェクトに最適です。180°音声検出が可能で、このキットは相対位置を検出したり、他の音声入力を無視しながら特定の方向に焦点を当てることができます。アレイには柔軟なケーブルがあり、多数の向きに配置でき、エンクロージャ設計により多くのオプションを提供します。他のボードとは異なり、これには単一の青色LEDのみが含まれています。

注目すべき機能：

- 4-Micリニアアレイ
- 柔軟な配置のためのリボンケーブル
- 1 x 青色LED
- 2 x Groveコネクタ（I2C & デジタル）
- 1 x 3.5mmオーディオジャック（ステレオ）
- 1 x JSTスピーカーコネクタ（モノ）

**[ReSpeaker 6-Mic Circular Array Kit](https://wiki.seeedstudio.com/ja/ReSpeaker_6-Mic_Circular_Array_kit_for_Raspberry_Pi/)**は、人々の中央に配置される可能性があるプロジェクトに最適です。360°音声検出が可能で、このキットは相対位置を検出したり、他の音声入力を無視しながら特定の方向に焦点を当てることができます。アレイには柔軟なケーブルがあり、多数の向きに配置でき、エンクロージャ設計により多くのオプションを提供します。

注目すべき機能：

- 6-Mic円形アレイ
- 柔軟な配置のためのリボンケーブル
- 12 x RGB LED
- 2 x Groveコネクタ（I2C & デジタル）
- 1 x 3.5mmオーディオジャック（ステレオ）
- 1 x JSTスピーカーコネクタ（モノ）

**[ReSpeaker 4-Mic Array](https://wiki.seeedstudio.com/ja/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/)**（円形）は360°音声検出が可能です。ただし、他のボードとは異なり、オーディオ出力機能がないため、Raspberry Piがすべての出力オーディオを単独でサポートする必要があります。ボードには4つのマイク、12個のRGB LED、2つのgroveコネクタが搭載されています。

注目すべき機能：

- 4-Mic円形アレイ
- 12個のRGB LED
- 2 x Groveコネクタ（I2C & GPIO）

:::note
ReSpeaker 4-Mic Array for Raspberry Piにはオーディオ出力インターフェースがありません。音声キャプチャ専用です。オーディオ出力にはRaspberry Piの[ヘッドフォンジャック](https://www.raspberrypi.org/documentation/configuration/audio-config.md)を使用できます。プロジェクトでより高品質なオーディオ出力が必要な場合は、別の製品を選択してください。
:::

**[ReSpeaker 2-Mic Pi HAT](https://wiki.seeedstudio.com/ja/ReSpeaker_2_Mics_Pi_HAT/)** は、エントリーレベルの優れた選択肢です。このカテゴリの他のアイテムとは異なり、2-Mic HATは話者の方向を検出することができないことに注意することが重要です。これは遠距離音声入力専用に設計されています。

注目すべき機能：

- デュアルマイクロフォン
- 柔軟な配置のためのリボンケーブル
- 3 x RGB LED
- 2 x Grove コネクタ（I2C & デジタル）
- 1 x 3.5mmオーディオジャック（ステレオ）
- 1 x JSTスピーカーコネクタ（モノラル）

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
