---
description: NVIDIA Jetson Orin 上で Whisper を展開し、リアルタイム音声からテキストへの変換を実現
title: Whisper を使用した Speech2Text
keywords:
  - Edge
  - reComputer
  - Jetson
  - whisper
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/jaWhisper_on_Jetson_for_Real_Time_Speech_to_Text

last_update:
  date: 05/15/2025
  author: Jiahao

no_comments: false # Disqus 用

---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# NVIDIA Jetson Orin 上で Whisper を展開し、リアルタイム音声からテキストへの変換を実現

## はじめに

リアルタイム音声からテキスト（STT）への変換システムは、音声アシスタントから文字起こしサービスに至るまで、現代のアプリケーションにおいて重要な役割を果たしています。以下は、いくつかの人気のある STT モデルです：Whisper、Riva、DeepSpeech、Google Cloud Speech-to-Text API、Microsoft Azure Speech Service、IBM Watson Speech to Text、Kaldi、Wit.ai など。高性能かつ省エネルギーで知られる NVIDIA Jetson Orin は、エッジでこのような高負荷なアプリケーションを展開するための有望なプラットフォームを提供します。

[Whisper](https://github.com/openai/whisper) は、深層学習を活用した高度な STT システムで、精度と効率性に優れています。[Riva](https://github.com/nvidia-riva) は、NVIDIA によって開発された包括的なマルチモーダル会話型 AI フレームワークです。Whisper または Riva を Jetson Orin 上に展開することで、Tensor Cores などのハードウェアアクセラレーション技術を活用し、強力な GPU と CPU コアを駆使して、低遅延でリアルタイムの STT を実現できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Real-Time-Whisper.gif" /></div>

この Wiki では、[Jetson 上でのリアルタイム Whisper](https://github.com/LJ-Hao/Deploy-Whisper-on-NVIDIA-Jetson-Orin-for-Real-time-Speech-to-Text.git) を紹介します。この統合により、デバイス上で直接音声処理が可能となり、常時ネットワーク接続の必要性を排除し、プライバシーとセキュリティを向上させます。さらに、同じ Jetson Orin デバイス上で Whisper と Riva の推論速度を比較します。最終的に、Jetson Orin 上で Whisper を展開することで、スマートホームから産業オートメーションに至るまで、さまざまな分野で高精度かつ低遅延の STT アプリケーションを構築するための強力で効率的な手段を開発者に提供します。

## ハードウェアセットアップ
### ハードウェア構成
<div class="table-center">
	<table align="center">
		<tr>
			<th>reComputer(または Jetson ベースの他のデバイス)</th>
			<th>reSpeaker (または他の USB インターフェースマイク)</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputer_industrial_j3011_orin_nano_8gb.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/ReSpeaker_Mic_Array_v2.0.png" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-J3011-p-5682.html?queryID=c1e6f0b0bd38a98233ce64bce8083a22&objectID=5682&indexName=bazaar_retailer_products" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html?queryID=2baffb980bdb6d5e65b2b3f511657cb2&objectID=139&indexName=bazaar_retailer_products" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

### ハードウェア接続
<p style={{textAlign: 'center'}}><img src="https://github.com/Seeed-Projects/Real-time-Subtitle-Recorder-on-Jetson/raw/main/sources/recorder_hardware_connection.png" alt="pir" width={800} height="auto"/></p>

## 実行環境の準備

#### ステップ1. 依存関係のインストール:

```shell
git clone https://github.com/LJ-Hao/Deploy-Whisper-on-NVIDIA-Jetson-Orin-for-Real-time-Speech-to-Text.git
cd Deploy-Whisper-on-NVIDIA-Jetson-Orin-for-Real-time-Speech-to-Text
pip install -r requirements.txt
sudo apt update && sudo apt install ffmpeg
arecord -D hw:2,0 --dump-hw-params # マイクのレートを16000に設定
```

#### ステップ2. 環境のテスト:

```shell
python test.py
```

ターミナルに以下の情報が表示された場合、必要なライブラリが正常にインストールされています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Deploy-whisper-on-Nvidia-Jetson-orin-for-real-time-speech-to-text-test.png" alt="pir" width={1000} height="auto"/></p>

ターミナル（Ctrl+Alt+T）で``` ffmpeg -version```と入力し、以下のような出力が得られた場合、ffmpegがインストールされています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Whisper-ffmpeg.png" alt="pir" width={1000} height="auto"/></p>

## 実行してみましょう

```shell
python main.py
``` 
<iframe width="800" height="400" src="https://www.youtube.com/embed/KR0GYqUuo5Y?si=uSGUkKmCSZmaq5f7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Riva と Whisper の比較

Rivaは、高度なAI駆動の音声認識および自然言語処理で知られており、リアルタイムでの会話の文字起こし、翻訳、分析を可能にします。

Whisperは、ウェブから収集された68万時間の多言語・多タスクの教師ありデータで訓練された自動音声認識（ASR）システムです。さらに、複数の言語での文字起こしや、それらの言語から英語への翻訳も可能です。

次の比較動画では、Nvidia Jetson上で開発された音声からテキストへの変換における[Riva](https://wiki.seeedstudio.com/ja/Real%20Time%20Subtitle%20Recoder%20on%20Nvidia%20Jetson/)とWhisperの能力を比較します。

<iframe width="800" height="400" src="https://www.youtube.com/embed/2l7yus611DI?si=XdEjwzpZdJkLC8aB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## プロジェクトの展望

このプロジェクトでは、Whisperを使用してマイク入力からリアルタイムでデータを取得し、それをウェブページに表示します。将来的には、Whisperのリアルタイム処理能力を強化し、遅延をさらに削減し、音声認識の精度を向上させる予定です。また、アプリケーションの機能を拡張するために、他のAIサービスやAPIとの統合も検討します。