---
description: SenseCAP Vision AI の使用開始
title: SenseCAP Vision AI の使用開始
keywords:
- Sensor Vision_AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP-Vision-AI-Get-Started
last_update:
  date: 1/31/2023
  author: Kewei Li
---

<div align="center"><img width ={400} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/101990962-a1101-first-new-10.17.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

# はじめに

SenseCAP A1101 - LoRaWAN Vision AI センサーは、TinyML Edge AI 対応のスマート画像センサーです。画像認識、人数カウント、ターゲット検出、メーター認識などの様々な AI モデルをサポートしています。また、TensorFlow Lite でのモデル訓練もサポートしています。<br />

# 特徴
- 超低消費電力で強力な Himax カメラ：400Mhz DSP、最大カメラフレームレート 640*480*VGA 60 FPS、ローカル推論

- 低消費電力で長距離伝送：2.3uWh のスリープモード消費電力まで低減、Wio-E5 LoRaWAN モジュールを搭載し、数マイルまでのデータ転送が可能

- エッジコンピューティングによる高いデータセキュリティ：ローカル画像推論を行い、最終結果データをクラウドに転送、限定的なデータ転送と高いデータプライバシーが必要なアプリケーションに適している

- データの可視化が簡単：SenseCAP Mate App と SenseCAP Dashboard を通じて数クリックでデータを表示・管理、他のサードパーティツールとの幅広い互換性

- 高い産業保護等級：-40 ~ 85℃ の動作温度と IP66 等級、屋内外での展開に適している

- スケーラブルな展開が簡単：デバイス QR コードをスキャンして 1 分でデバイスの追加と設定が可能、低い LoRaWAN ネットワークコストとメンテナンスコストでビジネスのスケーラビリティを確保

# 仕様

詳細については[仕様書](https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_spec.pdf)をご参照ください。

# 使用開始

1. A1101 には複数の組み込み AI モデルがあり、ユーザーはニーズに応じてモデルを選択できます。現在、以下のアルゴリズムとモデルが利用可能です：

|**アルゴリズム**|**AI モデル**|
|---|---|
|物体検出|人体検出；ユーザー定義|
|物体カウント|人数カウント；ユーザー定義|
|画像分類|人物・パンダ認識；ユーザー定義|

モデルの選択と設定も設定インターフェースで行います。まずアルゴリズムを選択します。異なるアルゴリズムは異なる機能を実現し、APP プレビューで異なる結果を表示します。アルゴリズムの後ろにある下向き三角形をクリックすると選択ボックスが表示されます。次に AI モデルを選択し、モデルをクリックすると選択ボックスがポップアップするので、モデルを選択します。

2. 独自の AI モデルを訓練したい場合は、2つの方法があります。以下を参照してください：

**1.[Edge Impulse でのワンストップモデル訓練](https://wiki.seeedstudio.com/ja/One-Stop-Model-Training-with-Edge-Impulse)** 簡単に従えます。

**2.[Roboflow、YOLOv5、TensorFlow Lite で AI モデルを訓練](https://wiki.seeedstudio.com/ja/Train-Deploy-AI-Model-A1101)** 時間がかかります。

# LoraWAN® への接続
LoRaWAN® (Long Range Wide Area Network) は、IoT (Internet of Things) デバイスとゲートウェイ間の低消費電力、長距離通信用に設計された無線通信プロトコルです。産業・科学・医療 (ISM) バンドの無免許無線スペクトラムを使用し、通常ヨーロッパでは 868 MHz、米国では 915 MHz で動作します。LoRaWAN® は、長距離での IoT デバイス接続に低コストで省エネルギーなソリューションを提供します。この技術はデバイスとゲートウェイ間の双方向通信を可能にし、異なるタイプのアプリケーションに対応するための様々なデータレートをサポートします。

## ゲートウェイと LoraWAN® の選択方法
センサーを使用する際は LoRaWAN® ネットワークカバレッジが必要で、2つのオプションがあります。
![p21](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/4.png)

## センサーの使用方法
コンピューターに直接接続してリアルタイム検出データを表示するだけでなく、これらのデータを LoraWAN® を通じて送信し、最終的に [SenseCAP クラウドプラットフォーム](https://sensecap.seeed.cc/) またはサードパーティクラウドプラットフォームにアップロードすることもできます。SenseCAP クラウドプラットフォームでは、データをサイクルで表示し、携帯電話やコンピューターを通じてグラフィカルに表示できます。SenseCAP クラウドプラットフォームと SenseCAP Mate App は同じアカウントシステムを使用しています。

ここでの焦点はモデル訓練プロセスの説明にあるため、クラウドプラットフォームのデータ表示の詳細には触れません。しかし、興味がある場合は、いつでも SenseCAP クラウドプラットフォームにアクセスしてデバイスの追加やデータの表示を試すことができます。プラットフォームの機能をより良く理解するための素晴らしい方法です！

![p22](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/11.png)

## 技術サポート


弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、様々なサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>