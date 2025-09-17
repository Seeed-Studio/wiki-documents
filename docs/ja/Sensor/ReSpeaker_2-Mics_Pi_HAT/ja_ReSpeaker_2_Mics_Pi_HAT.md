---
description: 概要
title: 概要
keywords:
- ReSpeaker_2-Mics_Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ReSpeaker_2_Mics_Pi_HAT
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

![](https://files.seeedstudio.com/products/107100001/01.png)

ReSpeaker 2-Mics Pi HATは、Raspberry Pi向けに設計されたAIおよび音声アプリケーション用のデュアルマイク拡張ボードです。これにより、Amazon Alexa Voice ServiceやGoogle Assistantなどを統合した、より強力で柔軟な音声製品を構築することが可能になります。

このボードは低消費電力ステレオコーデックであるWM8960を基に開発されています。ボードの両側には音声を収集するための2つのマイクが搭載されており、さらに3つのAPA102 RGB LED、1つのユーザーボタン、2つのオンボードGroveインターフェースが提供されており、アプリケーションを拡張することができます。さらに、3.5mmオーディオジャックまたはJST 2.0スピーカー出力のどちらも音声出力に利用可能です。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
</div>

## 特徴

* Raspberry Pi対応（Raspberry Pi ZeroおよびZero W、Raspberry Pi B+、Raspberry Pi 2 B、Raspberry Pi 3 B、Raspberry Pi 3 B+、Raspberry Pi 3 A+、Raspberry Pi 4をサポート）
* 2つのマイク
* 2つのGroveインターフェース
* 1つのユーザーボタン
* 3.5mmオーディオジャック
* JST2.0スピーカー出力
* 最大サンプルレート：48kHz

## アプリケーションアイデア

* 音声インタラクションアプリケーション
* AIアシスタント

## ハードウェア概要

![](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/mic_hatv1.0.png)

* BUTTON: ユーザーボタン、GPIO17に接続
* MIC_LおよびMIC_R: ボード両側に配置された2つのマイク
* RGB LED: SPIインターフェースに接続された3つのAPA102 RGB LED
* WM8960: 低消費電力ステレオコーデック
* Raspberry Pi 40ピンヘッダー: Raspberry Pi Zero、Raspberry Pi 1 B+、Raspberry Pi 2 B、Raspberry Pi 3 B、Raspberry Pi 3 B+をサポート
* POWER: ReSpeaker 2-Mics Pi HATを給電するためのMicro USBポート。スピーカーを使用する際は十分な電流を供給するためにボードを給電してください。
* I2C: Grove I2Cポート、I2C-1に接続
* GPIO12: Groveデジタルポート、GPIO12およびGPIO13に接続
* JST 2.0 SPEAKER OUT: JST 2.0コネクタでスピーカーを接続するためのポート
* 3.5mm AUDIO JACK: 3.5mmオーディオプラグでヘッドフォンまたはスピーカーを接続するためのポート

## 対応プラットフォーム

<div align="center"><img src="https://files.seeedstudio.com/products/107100001/01.png"/></div>

* **[Raspberry Piで始める](https://wiki.seeedstudio.com/ja/ReSpeaker_2_Mics_Pi_HAT_Raspberry)**

<div align="center"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/JetsonNano-2MICS.png"/></div>

* **[Nvidia Jetson Nanoシリーズで始める](https://wiki.seeedstudio.com/ja/ReSpeaker_2_Mics_Pi_HAT_Jetson)**

<div align="center"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/IMX6-2MIC-removebg-preview.png"/></div>

* **[NPi i.MX6ULL Dev Board Linux SBCで始める](https://wiki.seeedstudio.com/ja/NPi-i.MX6ULL-Dev-Board-Linux-SBC/#iis)**

<div align="center"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/STM32-2MIC-removebg-preview.png"/></div>

* **[ODYSSEY – STM32MP157Cで始める](https://wiki.seeedstudio.com/ja/ODYSSEY-STM32MP157C/#i2s-on-odyssey-stm32mp157c)**

## エッジでの音声認識を可能にする Picovoice

<div align="center"><img width = "{700}" src="https://files.seeedstudio.com/wiki/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/banner.gif"/></div>

[**Picovoice**](https://picovoice.ai/) **は、企業がプライベート音声AIを活用して迅速に革新し、差別化を図ることを可能にします**。音声認識と[**自然言語理解（NLU）技術**](https://searchenterpriseai.techtarget.com/definition/natural-language-understanding-NLU)を使用して、ブランドと製品を中心とした統一されたAI戦略を構築してください。

**Seeedは、開発者向けに[ReSpeaker 2-Mic Pi HAT](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html)を使用してエッジでの音声認識ソリューションを提供するためにPicovoiceと提携しました。**

Picovoiceは、独自の条件で音声製品を構築するためのエンドツーエンドプラットフォームです。AlexaやGoogleに似た音声体験を作成することが可能ですが、完全に100%オンデバイスで動作します。Picovoiceの利点は以下の通りです：

* **プライバシー保護**: すべてがオフラインで処理されます。HIPAAおよびGDPRに本質的に準拠しています。
* **信頼性**: 常時接続を必要とせずに動作します。
* **ゼロレイテンシー**: エッジ優先のアーキテクチャにより、予測不可能なネットワーク遅延を排除します。
* **高精度**: ノイズや反響に強く、クラウドベースの代替手段を大幅に上回る性能を発揮します。
* **クロスプラットフォーム**: 一度設計すれば、どこにでも展開可能です。馴染みのある言語やフレームワークを使用して構築できます。

## Mycroft Preciseによるオープンソースのキーワード検出

Picovoiceに加えて、Mycroft Preciseというオープンソースのリアルタイムキーワード検出パッケージに対する限定的なサポートも提供しています。Mycroft Preciseは完全にオープンソースであり、名前から咳まで何でも認識するようにトレーニングすることができます。PreciseはLinux上で動作するよう設計されており、Debian、Ubuntu、Raspbianを含むさまざまなLinuxディストリビューションで動作することが知られています。公式READMEファイルによると、「他の*nixディストリビューションでも動作する可能性があります。」

Mycroft PreciseはApache-2.0ライセンスプロジェクトであり、これを修正および配布することが可能です。商業目的で使用する場合でも、唯一の要件は元のライセンスを保持することです。

**Picovoice製品とMycroft Preciseの両方の例は、対応するプラットフォームの「Getting Started」ドキュメントで確認できます。**

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/ReSpeaker 2-Mics Pi HAT.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

* **[Eagle]** [Respeaker_2_Mics_Pi_HAT_SCH](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_SCH.zip)
* **[Eagle]** [Respeaker_2_Mics_Pi_HAT_PCB](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_PCB.zip)
* **[PDF]** [Respeaker_2_Mics_Pi_HAT_SCH](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_SCH.pdf)
* **[PDF]** [Respeaker_2_Mics_Pi_HAT_PCB](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_PCB.pdf)
* **[3D]** [ReSpeaker 2 Mics Pi HAT 3D](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT.zip)
* **[Driver]** [Seeed-Voice Driver](https://github.com/respeaker/seeed-voicecard)
* **[Algorithms]** [DOA、VAD、NSを含むアルゴリズム](https://github.com/respeaker/mic_array)
* **[Voice Engine]** [音声対応オブジェクトを作成するためのビルディングブロックを提供するVoice Engineプロジェクト](https://github.com/voice-engine/voice-engine)
* **[Algorithms]** [AEC](https://github.com/voice-engine/ec)

## プロジェクト

**RPIとReSpeaker HATを使用して自分だけのAmazon Echoを作成する**: Raspberry PiとReSpeaker 2-Mics HATを使用して、自分だけのAmazon Echoを作成する方法。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/idreams/build-your-own-amazon-echo-using-a-rpi-and-respeaker-hat-7f44a0/embed' width='350'></iframe>

**音声対応のコーヒーマシンで自宅のバリスタが実現**: オープンソースでプライバシーを重視した設計のコーヒーマシン。お気に入りのコーヒーやカフェインスケジュールをプライベートに保つことができます。

<iframe width="800" height="450" src="https://www.youtube.com/embed/4gN1bvl24ZM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>