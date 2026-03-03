---
description: ReSpeaker 製品ガイド
title: reSpeaker 製品ガイド
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ReSpeaker_Product_Guide
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

# **ReSpeaker 製品ガイド**

## 開発者向けオープンボイスエコシステム

[![All ReSpeaker Dev Boards](https://files.seeedstudio.com/wiki/ReSpeakerSolutions/img/FullReSpeakerLine.png)](https://www.seeedstudio.com/series/Respeaker-10.html)

## **自分に合った ReSpeaker の選び方**

すでに [solutions page](https://wiki.seeedstudio.com/ja/ReSpeaker_Solutions/) や [introduction page](https://wiki.seeedstudio.com/ja/ReSpeaker/) から、ReSpeaker ラインの目的や使い方について少しご存じかもしれませんが、実際にはどの製品があなたのニーズに合うのでしょうか？心配はいりません ― この自己紹介的なページが、その手助けをします。

## **3 つのカテゴリ**

現在、ReSpeaker ラインには主に 3 つのボードカテゴリがあります。これら 3 つのカテゴリはいずれも音声インターフェースを実現するために設計されていますが、プロジェクトへの統合方法はそれぞれ異なります。

- SBC ソリューション
- マイクアレイソリューション
- Raspberry Pi 用マイクアレイソリューション

### **SBC ソリューション**

![SBC Solution](https://files.seeedstudio.com/wiki/ReSpeakerProductGuide/img/SBC_Solution.png)

音声インタラクションを中心としたプロジェクトには、ReSpeaker Core ラインが最適です。SBC として動作し、音声を聞き取るだけでなく、フロントエンドのオーディオ処理のためのソフトウェアベース DSP を実行し、さらにプロジェクト全体の処理を制御することができます。ハードウェアの制御から高度なユーザーアプリケーションコードの実行まで、ReSpeaker Core ラインはプロジェクトの中心となるよう設計されています。

推奨ユーザー：開発者、企業

**[ReSpeaker Core v2.0](https://wiki.seeedstudio.com/ja/ReSpeaker_Core_v2.0/)** は、高い処理能力と統合された 6 マイク円形アレイを備えています。ボード中央には SoC、メモリ（RAM）、PMU を含むコアモジュールがあり、ボード外周にはコネクタ、WiFi モジュール、LED、マイクアレイなどの周辺機器が配置されています。これによりカスタマイズが容易になり、ReSpeaker Core v2.0 はプロジェクトに最適なオールインワンボードソリューションとなり、量産段階に移行する際のコスト削減にもつながります。

### **マイクアレイソリューション**

![MicArraySolution](https://files.seeedstudio.com/wiki/ReSpeakerProductGuide/img/Mic_Array_Solution.png)

ReSpeaker Mic Array ラインは、フロントエンドのアクセラレーションにハードウェア DSP を使用し、統合先のシステムにクリーンな音声を返します。これにより、音声インターフェースを追加したい既存プロジェクトへの組み込みに最適です。

推奨ユーザー：開発者、メーカープロ、企業

**[ReSpeaker Mic Array v2.0](https://wiki.seeedstudio.com/ja/ReSpeaker_Mic_Array_v2.0/)** は、XMOS XVF3000 を搭載した円形マイクアレイです。ハードウェアによるフロントエンドオーディオ処理を備え、Windows、macOS、多くの Linux ディストリビューションなど、一般的な OS のほとんどに対応しています。オーディオ出力にも対応しており、使用時には AEC を実現できます。マイクの構成も設定・カスタマイズが可能です。

### **Raspberry Pi 用マイクアレイソリューション**

![a](https://files.seeedstudio.com/wiki/ReSpeakerProductGuide/img/Raspberry_Pi_Mic_Array_Solutions.png)

私たちは Raspberry Pi 向けに複数の ReSpeaker シールドを用意しています。簡単な音声コマンドを試したい方、自作の Amazon Echo や Google Home を作りたい方、あるいは Raspberry Pi 上で開発したい方にとって、Raspberry Pi 用マイクアレイは最適な選択肢です。他の ReSpeaker 製品と同様に、これらもカスタマイズが可能です。

推奨ユーザー：メイカー、メーカープロ、開発者

**[ReSpeaker 4-Mic Linear Array Kit](https://wiki.seeedstudio.com/ja/ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi/)** は、壁際などに固定して設置するプロジェクトに最適です。180° の音声検出が可能で、このキットは相対的な位置を検出したり、特定の方向にフォーカスして他の音声入力を無視したりできます。アレイにはフレキシブルケーブルが付属しており、さまざまな向きに配置できるため、エンクロージャ設計の自由度が高まります。他のボードと異なり、青色 LED を 1 個のみ搭載しています。

主な特長:

- 4 マイク直線アレイ
- 柔軟な配置が可能なリボンケーブル
- 青色 LED × 1
- Grove コネクタ × 2（I2C & Digital）
- 3.5mm オーディオジャック × 1（ステレオ）
- JST スピーカーコネクタ × 1（モノラル）

**[ReSpeaker 6-Mic Circular Array Kit](https://wiki.seeedstudio.com/ja/ReSpeaker_6-Mic_Circular_Array_kit_for_Raspberry_Pi/)** は、人の輪の中心などに設置されるプロジェクトに最適です。360° の音声検出が可能で、このキットは相対的な位置を検出したり、特定の方向にフォーカスして他の音声入力を無視したりできます。アレイにはフレキシブルケーブルが付属しており、さまざまな向きに配置できるため、エンクロージャ設計の自由度が高まります。

主な特長:

- 6 マイク円形アレイ
- 柔軟な配置が可能なリボンケーブル
- RGB LED × 12
- Grove コネクタ × 2（I2C & Digital）
- 3.5mm オーディオジャック × 1（ステレオ）
- JST スピーカーコネクタ × 1（モノラル）

**[ReSpeaker 4-Mic Array](https://wiki.seeedstudio.com/ja/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/)**（円形）は、360° の音声検出が可能です。ただし、他のボードと異なりオーディオ出力機能を持たないため、出力オーディオはすべて Raspberry Pi 側で対応する必要があります。ボードには 4 つのマイク、12 個の RGB LED、2 つの Grove コネクタが搭載されています。

主な特長:

- 4 マイク円形アレイ
- RGB LED × 12
- Grove コネクタ × 2（I2C & GPIO）

:::note
ReSpeaker 4-Mic Array for Raspberry Pi にはオーディオ出力インターフェースはありません。音声キャプチャ専用です。オーディオ出力には Raspberry Pi の [headphone jack](https://www.raspberrypi.org/documentation/configuration/audio-config.md) を使用できます。プロジェクトでより高品質なオーディオ出力が必要な場合は、別の製品をお選びください。
:::

**[ReSpeaker 2-Mic Pi HAT](https://wiki.seeedstudio.com/ja/ReSpeaker_2_Mics_Pi_HAT/)** は、エントリーレベルとして非常に良い選択肢です。このカテゴリ内の他の製品と異なり、2-Mic HAT は話者の方向を検出できず、遠距離音声入力専用に設計されている点に注意してください。

主な特長:

- デュアルマイク
- 柔軟な配置が可能なリボンケーブル
- RGB LED × 3
- Grove コネクタ × 2（I2C & Digital）
- 3.5mm オーディオジャック × 1（ステレオ）
- JST スピーカーコネクタ × 1（モノラル）

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせてお選びいただけるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
