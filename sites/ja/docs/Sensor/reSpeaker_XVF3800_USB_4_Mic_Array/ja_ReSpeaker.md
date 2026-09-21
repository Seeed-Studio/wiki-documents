---
description: Seeed Studio の reSpeaker は、インテリジェントな音声インタラクション製品を作成するための、オープンソースのモジュラー音声インターフェースプラットフォームです。遠距離認識、ノイズ抑制、オーディオ処理アルゴリズムを備えた高度なマイクアレイを特徴とし、騒がしい環境でもクリアな音声キャプチャを実現します。複数のプラットフォームと言語に対応し、柔軟な開発、オープンソース設計、強力なコミュニティサポートを提供します。
title: reSpeaker 概要
keywords:
  - reSpeaker
  - Voice AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /respeaker
sku: 114993702,114993700,110061601,107100001,107990273
last_update:
  date: 2/26/2026
  author: Kasun Thushara
createdAt: '2025-08-12'
updatedAt: '2026-04-16'
url: https://wiki.seeedstudio.com/ja/respeaker/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/family.jpg" alt="pir" width={900} height="auto" /></p>

## reSpeaker とは？

reSpeaker は、Seeed Studio によって開発されたオープンソースのモジュラー音声インターフェースプラットフォームであり、メイカー、開発者、企業がインテリジェントな音声インタラクション製品を作成できるよう設計されています。マイクアレイ、オーディオプロセッサ、さまざまな接続オプションを統合しており、プロジェクトに音声認識とインタラクション機能を簡単に追加できます。

## 製品シリーズ

### reSpeaker Flex

reSpeaker Flex は XMOS XVF3800 を中心に構成されたモジュラー音声処理システムで、ロボットやインテリジェントインタラクションデバイス向けに設計されています。処理ボードとマイクアレイが分離され、柔軟な FPC ケーブルで接続される分割アーキテクチャを採用しており、製品筐体内で柔軟に配置できます。このシステムは、交換可能な 2 種類の 4 マイクアレイオプションをサポートします。360° 音声キャプチャ用の円形アレイと、ノイズ抑制付き指向性ピックアップ用のリニアアレイです。どちらのアレイも標準化された 24 ピンインターフェースを介して接続され、USB（UAC 2.0）または I2S モードで動作し、さまざまな統合ニーズに対応します。オプションの XIAO ESP32S3 を追加することで、ワイヤレス接続と拡張制御機能を有効にできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg" alt="pir" width={600} height="auto" /></p>

<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center', rowGap: '10px', columnGap: 'clamp(4px, 15%, 150px)' }}>
  <a className="get_one_now_item" style={{ flexShrink: 0 }} href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Linear-4-with-XIAO-ESP32S3-p-6736.html" target="_blank" rel="noopener noreferrer"><strong><font color="#FFFFFF" size="4">🖱️ Buy Now</font></strong></a>
  <a className="get_one_now_item" style={{ flexShrink: 0 }} href="https://wiki.seeedstudio.com/ja/respeaker_flex_introduction/" target="_blank" rel="noopener noreferrer"><strong><font color="#FFFFFF" size="3">📚 Getting Started Page</font></strong></a>
</div>

### reSpeaker XVF3800

reSpeaker XMOS XVF3800 シリーズは、現実世界の騒がしい環境でも極めてクリアな音声キャプチャを求めるメイカー、開発者、プロダクトデザイナー向けに構築されています。高度な XVF3800 AI オーディオプロセッサと高精度な 4 マイク円形アレイを搭載し、360° の遠距離ピックアップ、強力なビームフォーミング、最大 5 メートル離れた場所まで対応する業界水準のノイズおよびエコーキャンセルを実現します。プロジェクトに合わせて柔軟に選択できます。ESPHome や組み込み統合をすぐに行える **XIAO ESP32S3 をあらかじめはんだ付けした reSpeaker XVF3800**、または洗練された筐体に収められた **reSpeaker XVF3800 エンクローズド AI 音声ソリューション** などです。スマートアシスタント、ロボット、インタラクティブキオスクなど、用途を問わず、XVF3800 シリーズはコンパクトでメイカーに優しいフォームファクタでプロフェッショナルグレードの音声性能を提供します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/xvf3800.png" alt="pir" width={600} height="auto" /></p>

<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center', rowGap: '10px', columnGap: 'clamp(4px, 15%, 150px)' }}>
  <a className="get_one_now_item" style={{ flexShrink: 0 }} href="https://www.seeedstudio.com/ReSpeaker-XVF3800-USB-Mic-Array-p-6488.html" target="_blank" rel="noopener noreferrer"><strong><font color="#FFFFFF" size="4">🖱️ Buy Now</font></strong></a>
  <a className="get_one_now_item" style={{ flexShrink: 0 }} href="https://wiki.seeedstudio.com/ja/respeaker_xvf3800_introduction/" target="_blank" rel="noopener noreferrer"><strong><font color="#FFFFFF" size="3">📚 Getting Started Page</font></strong></a>
</div>

### reSpeaker Lite

reSpeaker Lite シリーズは、強力で高品質な音声対応プロジェクトを簡単に構築するためのゲートウェイです。XMOS XU316 AI オーディオチップセットと高精度なデュアルマイクアレイを搭載し、クリアな遠距離音声キャプチャ（最大 3 メートル）、高度なノイズ抑制、エコーキャンセルを実現し、音声認識、スマートアシスタント、インタラクティブデバイスに最適です。ニーズに合わせて複数のバージョンから選択できます。ESPHome 対応の XIAO ESP32S3 をあらかじめはんだ付けし、すぐにセットアップできる **reSpeaker Lite 2-Mic Array Voice Kit**、またはアクリル筐体とスピーカーを備えた、完全なすぐに使えるソリューションである **reSpeaker Lite Voice Assistant Kit** です。メイカー、開発者、イノベーターのいずれであっても、reSpeaker Lite は、音声プロジェクトを実現するための性能、柔軟性、そしてオープンソースならではの自由度を提供します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeakerlite.png" alt="pir" width={600} height="auto" /></p>

<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center', rowGap: '10px', columnGap: 'clamp(4px, 15%, 150px)' }}>
  <a className="get_one_now_item" style={{ flexShrink: 0 }} href="https://www.seeedstudio.com/ReSpeaker-Lite-p-5928.html" target="_blank" rel="noopener noreferrer"><strong><font color="#FFFFFF" size="4">🖱️ Buy Now</font></strong></a>
  <a className="get_one_now_item" style={{ flexShrink: 0 }} href="https://wiki.seeedstudio.com/ja/reSpeaker_usb_v3/" target="_blank" rel="noopener noreferrer"><strong><font color="#FFFFFF" size="3">📚 Getting Started Page</font></strong></a>
</div>

### reSpeaker 2-Mics Pi HAT

reSpeaker 2-Mics Pi HAT V2.0 は、Raspberry Pi を強力な音声対応プラットフォームへと変身させ、スマートアシスタント、音声制御デバイス、インタラクティブな AI プロジェクトの構築に最適です。TLV320AIC3104 オーディオコーデック、デュアルアナログマイク、VAD、DOA、KWS 用の組み込み NLU アルゴリズムを備え、応答性の高いインタラクションのために、クリアで正確な音声キャプチャを実現します。プログラム可能な RGB LED、ユーザーボタン、シンプルなプラグアンドプレイ設計により、Alexa、Google Assistant、あるいは独自の音声インターフェースを統合する場合でも、プロトタイピングやカスタマイズを容易に行えます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/hat.png" alt="pir" width={600} height="auto" /></p>

<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center', rowGap: '10px', columnGap: 'clamp(4px, 15%, 150px)' }}>
  <a className="get_one_now_item" style={{ flexShrink: 0 }} href="https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html" target="_blank" rel="noopener noreferrer"><strong><font color="#FFFFFF" size="4">🖱️ Buy Now</font></strong></a>
  <a className="get_one_now_item" style={{ flexShrink: 0 }} href="https://wiki.seeedstudio.com/ja/ReSpeaker_2_Mics_Pi_HAT/" target="_blank" rel="noopener noreferrer"><strong><font color="#FFFFFF" size="3">📚 Getting Started Page</font></strong></a>
</div>

### reSpeaker XVF3000

reSpeaker XVF3000 USB Mic Array は、すぐに使用できるプラグアンドプレイの遠距離音声キャプチャソリューションであり、ベアな開発ボードや複雑なセットアップを必要とせず、アプリケーションへ即座に統合できるよう設計されています。4 マイクアレイ、USB Audio Class 1.0 互換性、12 個のプログラム可能な RGB LED を備え、スマートアシスタント、会議システム、インタラクティブな音声プロジェクトの構築に最適です。VAD、DOA、ビームフォーミング、ノイズ抑制、残響除去、アコースティックエコーキャンセルなどの音声アルゴリズムを内蔵し、厳しい環境下でも非常にクリアな音声ピックアップを実現します。洗練された保護ケース付きバージョンを選択すれば、プロトタイピングにも量産展開にも適した、完成度の高いデプロイ準備済みセットアップとして利用できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/xvf3000.png" alt="pir" width={600} height="auto" /></p>

<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center', rowGap: '10px', columnGap: 'clamp(4px, 15%, 150px)' }}>
  <a className="get_one_now_item" style={{ flexShrink: 0 }} href="https://www.seeedstudio.com/ReSpeaker-USB-Mic-Array-p-4247.html" target="_blank" rel="noopener noreferrer"><strong><font color="#FFFFFF" size="4">🖱️ Buy Now</font></strong></a>
  <a className="get_one_now_item" style={{ flexShrink: 0 }} href="https://wiki.seeedstudio.com/ja/ReSpeaker_Mic_Array_v2.0/#version" target="_blank" rel="noopener noreferrer"><strong><font color="#FFFFFF" size="3">📚 Getting Started Page</font></strong></a>
</div>

---

<p style={{textAlign: 'center'}}>アクセサリやバンドルを含む、すべてのラインナップをお探しですか？</p>

<div className="button-container">
  <a className="button-style" href="https://www.seeedstudio.com/respeaker-series" target="_blank" rel="noopener noreferrer">🎙️ すべての reSpeaker 製品を見る</a>
</div>

## コア機能

**高度なマイクアレイ技術**

2～4 個の MEMS マイクを備えた円形またはリニアアレイを採用し、遠距離音声認識、音源定位、ノイズ抑制をサポートします。騒がしい環境でも、5 メートル以内の音声コマンドを正確にキャプチャします。

**強力なオーディオ処理**

Acoustic Echo Cancellation（AEC）、Noise Suppression（NS）、Voice Activity Detection（VAD）、ビームフォーミング技術など、プロフェッショナルなオーディオ処理アルゴリズムを内蔵し、クリアな音声信号品質を保証します。

**柔軟な開発オプション**

Python、JavaScript、C/C++ など、複数の開発プラットフォームと言語をサポートします。Raspberry Pi、Arduino、各種 Linux 開発ボードと互換性があり、充実した SDK と API インターフェースを提供します。

**オープンソースエコシステム**

ハードウェア設計とソフトウェアスタックを完全にオープンソース化しており、活発な開発者コミュニティが継続的な技術サポートを提供します。特定のアプリケーション要件に合わせて、機能を自由にカスタマイズおよび拡張できます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
