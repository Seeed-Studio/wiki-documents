---
description: 概要
title: 概要
keywords:
- ReSpeaker_2-Mics_Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ReSpeaker_2_Mics_Pi_HAT
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/products/107100001/01.png)

ReSpeaker 2-Mics Pi HAT は、AI と音声アプリケーション向けに設計された Raspberry Pi 用のデュアルマイク拡張ボードです。これにより、Amazon Alexa Voice Service、Google Assistant などを統合した、より強力で柔軟な音声製品を構築できます。

このボードは、低消費電力ステレオコーデックである WM8960 をベースに開発されています。音声収集用にボードの両側に 2 つのマイクがあり、アプリケーション拡張用に 3 つの APA102 RGB LED、1 つのユーザーボタン、2 つのオンボード Grove インターフェースも提供しています。さらに、音声出力には 3.5mm オーディオジャックまたは JST 2.0 スピーカー出力の両方が利用可能です。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong></a>
</div>

## 特徴

* Raspberry Pi 互換（Raspberry Pi Zero および Zero W、Raspberry Pi B+、Raspberry Pi 2 B、Raspberry Pi 3 B、Raspberry Pi 3 B+、Raspberry Pi 3 A+、Raspberry Pi 4 をサポート）
* 2 つのマイク
* 2 つの Grove インターフェース
* 1 つのユーザーボタン
* 3.5mm オーディオジャック
* JST2.0 スピーカー出力
* 最大サンプルレート：48Khz

## アプリケーションアイデア

* 音声インタラクションアプリケーション
* AI アシスタント

## ハードウェア概要

![](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/mic_hatv1.0.png)

* BUTTON：ユーザーボタン、GPIO17 に接続
* MIC_L および MIC_R：ボードの両側にある 2 つのマイク
* RGB LED：3 つの APA102 RGB LED、SPI インターフェースに接続
* WM8960：低消費電力ステレオコーデック
* Raspberry Pi 40 ピンヘッダー：Raspberry Pi Zero、Raspberry Pi 1 B+、Raspberry Pi 2 B、Raspberry Pi 3 B、Raspberry Pi 3 B+ をサポート
* POWER：ReSpeaker 2-Mics Pi HAT への電源供給用 Micro USB ポート、スピーカー使用時は十分な電流を供給するためにボードに電源を供給してください
* I2C：Grove I2C ポート、I2C-1 に接続
* GPIO12：Grove デジタルポート、GPIO12 および GPIO13 に接続
* JST 2.0 SPEAKER OUT：JST 2.0 コネクタ付きスピーカー接続用
* 3.5mm AUDIO JACK：3.5mm オーディオプラグ付きヘッドフォンまたはスピーカー接続用

## サポートプラットフォーム

<div align="center"><img src="https://files.seeedstudio.com/products/107100001/01.png"/></div>

* **[Raspberry Pi で始める](https://wiki.seeedstudio.com/ja/ReSpeaker_2_Mics_Pi_HAT_Raspberry)**

<div align="center"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/JetsonNano-2MICS.png"/></div>

* **[Nvidia Jetson Nano シリーズで始める](https://wiki.seeedstudio.com/ja/ReSpeaker_2_Mics_Pi_HAT_Jetson)**

<div align="center"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/IMX6-2MIC-removebg-preview.png"/></div>

* **[NPi i.MX6ULL Dev Board Linux SBC で始める](https://wiki.seeedstudio.com/ja/NPi-i.MX6ULL-Dev-Board-Linux-SBC/#iis)**

<div align="center"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/STM32-2MIC-removebg-preview.png"/></div>

* **[ODYSSEY – STM32MP157C で始める](https://wiki.seeedstudio.com/ja/ODYSSEY-STM32MP157C/#i2s-on-odyssey-stm32mp157c)**

## Picovoice によるエッジでの音声認識の実現

<div align="center"><img width = "{700}" src="https://files.seeedstudio.com/wiki/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/banner.gif"/></div>

[**Picovoice**](https://picovoice.ai/) **は、企業がプライベート音声 AI で迅速に革新し差別化することを可能にします**。音声認識と[**自然言語理解（NLU）技術**](https://searchenterpriseai.techtarget.com/definition/natural-language-understanding-NLU)を使用して、ブランドと製品を中心とした統一 AI 戦略を構築します。

**Seeed は Picovoice と提携し、開発者向けに [ReSpeaker 2-Mic Pi HAT](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html) を使用したエッジでの音声認識ソリューションを提供しています。**

Picovoice は、あなたの条件で音声製品を構築するためのエンドツーエンドプラットフォームです。Alexa や Google に似た音声体験の作成を可能にします。しかし、100% デバイス上で完全に動作します。Picovoice の利点は以下の通りです：

* **プライベート**：すべてがオフラインで処理されます。本質的に HIPAA および GDPR に準拠しています。
* **信頼性**：常時接続を必要とせずに動作します。
* **ゼロレイテンシ**：エッジファーストアーキテクチャにより、予測不可能なネットワーク遅延を排除します。
* **正確性**：ノイズと残響に対して耐性があります。クラウドベースの代替手段を大幅に上回る性能を発揮します。
* **クロスプラットフォーム**：一度設計すれば、どこでもデプロイできます。馴染みのある言語とフレームワークを使用して構築します。

## Mycroft Precise によるオープンソースキーワード検出

Picovoice に加えて、Mycroft Precise - オープンソースのリアルタイムキーワード検出パッケージに対する限定的なサポートを提供しています。Mycroft Precise は完全にオープンソースで、名前から咳まで何でも認識するように訓練できます。Precise は Linux 上で動作するように設計されています。Debian、Ubuntu、Raspbian を含む様々な Linux ディストリビューションで動作することが知られています。公式 README ファイルによると、「おそらく他の *nx ディストリビューションでも動作します。」

Mycroft Precise は Apache-2.0 ライセンスプロジェクトです。これは、商用目的を含めて変更および配布できることを意味します - 唯一の要件は元のライセンスを保持することです。

**Picovoice 製品と Mycroft Precise の両方の例は、対応するプラットフォームの入門ドキュメントで見つけることができます。**

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/ReSpeaker 2-Mics Pi HAT.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

* **[Eagle]** [Respeaker_2_Mics_Pi_HAT_SCH](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_SCH.zip)
* **[Eagle]** [Respeaker_2_Mics_Pi_HAT_PCB](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_PCB.zip)
* **[PDF]** [Respeaker_2_Mics_Pi_HAT_SCH](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_SCH.pdf)
* **[PDF]** [Respeaker_2_Mics_Pi_HAT_PCB](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_PCB.pdf)
* **[3D]** [ReSpeaker 2 Mics Pi HAT 3D](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT.zip)
* **[Driver]** [Seeed-Voice Driver](https://github.com/respeaker/seeed-voicecard)
* **[Algorithms]** [Algorithms includes DOA, VAD, NS](https://github.com/respeaker/mic_array)
* **[Voice Engine]** [Voice Engine project, provides building blocks to create voice enabled objects](https://github.com/voice-engine/voice-engine)
* **[Algorithms]** [AEC](https://github.com/voice-engine/ec)

* **[Eagle]** [Respeaker_2_Mics_Pi_HAT_SCH_v2](https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/202004059_ReSpeaker-2-Mics-Pi-HAT-V2.0_SCH_PDF_241121.pdf)


## プロジェクト

**RPI と ReSpeaker HAT を使用して独自の Amazon Echo を構築**：Raspberry Pi と ReSpeaker 2-Mics HAT を使用して独自の Amazon Echo を構築する方法。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/idreams/build-your-own-amazon-echo-using-a-rpi-and-respeaker-hat-7f44a0/embed' width='350'></iframe>

**音声対応コーヒーマシンであなたの個人的なホームバリスタが実現**：お気に入りのコーヒーとカフェイン摂取スケジュールをプライベートに保つオープンソースのプライバシー重視設計のコーヒーマシン。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/4gN1bvl24ZM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技術サポートと製品ディスカッション



弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
