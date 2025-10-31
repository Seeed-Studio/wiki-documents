---
description: NVIDIA Jetson Orin でリアルタイム音声テキスト変換のための Whisper をデプロイ
title: Whisper による音声テキスト変換
keywords:
  - Edge
  - reComputer
  - Jetson
  - whisper
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Whisper_on_Jetson_for_Real_Time_Speech_to_Text

last_update:
  date: 03/14/2024
  author: Jiahao

no_comments: false # for Disqus

---

# NVIDIA Jetson Orin でリアルタイム音声テキスト変換のための Whisper をデプロイ

## はじめに

リアルタイム音声テキスト変換（STT）システムは、音声アシスタントから転写サービスまで、現代のアプリケーションにおいて重要な役割を果たしています。人気のある STT モデルには以下があります：Whisper、Riva、DeepSpeech、Google Cloud Speech-to-Text API、Microsoft Azure Speech Service、IBM Watson Speech to Text、Kaldi、Wit.ai など。高性能とエネルギー効率で知られる NVIDIA Jetson Orin は、エッジでこのような要求の厳しいアプリケーションをデプロイするための有望なプラットフォームを提供します。

深層学習を活用した高度な STT システムである [Whisper](https://github.com/openai/whisper) は、精度と効率において優れています。[Riva](https://github.com/nvidia-riva) は、NVIDIA が開発した包括的なマルチモーダル会話 AI フレームワークです。Jetson Orin に Whisper や Riva をデプロイすることで、開発者はその強力な GPU と CPU コア、および Tensor Cores などのハードウェア加速技術を活用して、低遅延でリアルタイム STT を実現できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Real-Time-Whisper.gif" /></div>

この wiki では、[Real Time Whisper on Jetson](https://github.com/LJ-Hao/Deploy-Whisper-on-NVIDIA-Jetson-Orin-for-Real-time-Speech-to-Text.git) を紹介します。この統合により、デバイス上で直接音声処理が可能になり、常時ネットワーク接続の必要性を排除し、プライバシーとセキュリティを向上させます。さらに、同じ Jetson Orin デバイスにデプロイした際の Whisper と Riva の推論速度を比較します。最終的に、Jetson Orin に Whisper をデプロイすることで、開発者はスマートホームから産業オートメーションまで、さまざまな分野で高精度と低遅延を実現する堅牢で効率的な STT アプリケーションを構築できます。

## ハードウェアセットアップ

### ハードウェアコンポーネント

<div class="table-center">
 <table align="center">
  <tr>
   <th>reComputer（または Jetson ベースの他のデバイス）</th>
      <th>reSpeaker（または他の USB インターフェースマイク）</th>
  </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputer_industrial_j3011_orin_nano_8gb.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/ReSpeaker_Mic_Array_v2.0.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-J3011-p-5682.html?queryID=c1e6f0b0bd38a98233ce64bce8083a22&objectID=5682&indexName=bazaar_retailer_products" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html?queryID=2baffb980bdb6d5e65b2b3f511657cb2&objectID=139&indexName=bazaar_retailer_products" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### ハードウェア接続

<p style={{textAlign: 'center'}}><img src="https://github.com/Seeed-Projects/Real-time-Subtitle-Recorder-on-Jetson/raw/main/sources/recorder_hardware_connection.png" alt="pir" width={800} height="auto"/></p>

## ランタイム環境の準備

#### ステップ1. 依存関係をインストール：

```shell
git clone https://github.com/LJ-Hao/Deploy-Whisper-on-NVIDIA-Jetson-Orin-for-Real-time-Speech-to-Text.git
cd Deploy-Whisper-on-NVIDIA-Jetson-Orin-for-Real-time-Speech-to-Text
pip install -r requirements.txt
sudo apt update && sudo apt install ffmpeg
arecord -D hw:2,0 --dump-hw-params #set microphone rate to 16000
```

#### ステップ2. テスト環境

```shell
python test.py
```

ターミナルに以下の情報が表示された場合、必要なライブラリが正常にインストールされたことを意味します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Deploy-whisper-on-Nvidia-Jetson-orin-for-real-time-speech-to-text-test.png" alt="pir" width={1000} height="auto"/></p>

ターミナル（Ctrl+Alt+T）で ```ffmpeg -version``` を入力し、以下のような結果が表示された場合、ffmpegがインストールされています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Whisper-ffmpeg.png" alt="pir" width={1000} height="auto"/></p>

## 実行してみましょう

```shell
python main.py
```

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/KR0GYqUuo5Y?si=uSGUkKmCSZmaq5f7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Riva vs Whisper

Rivaは、高度なAI駆動の音声認識と自然言語処理で知られており、リアルタイムの転写、翻訳、および音声会話の分析機能をユーザーに提供します。

Whisperは、ウェブから収集された68万時間の多言語・多タスク教師ありデータで訓練された自動音声認識（ASR）システムです。さらに、複数の言語での転写や、それらの言語から英語への翻訳を可能にします。

今後の比較動画では、Nvidia Jetson上で開発された音声テキスト変換における[Riva](https://wiki.seeedstudio.com/ja/Real%20Time%20Subtitle%20Recoder%20on%20Nvidia%20Jetson/)とWhisperの能力を比較します。

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/2l7yus611DI?si=XdEjwzpZdJkLC8aB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## プロジェクトの展望

このプロジェクトでは、Whisperを使用してマイク入力からリアルタイムでデータを取得し、ウェブページに表示します。将来的には、Whisperのリアルタイム処理能力を強化してレイテンシをさらに削減し、音声認識の精度を向上させ、他のAIサービスやAPIとの統合を探求してアプリケーションの機能を強化する予定です。
