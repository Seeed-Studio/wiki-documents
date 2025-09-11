---
description: SenseCAP Vision AI の使い方
title: SenseCAP Vision AI の使い方
keywords:
- Sensor Vision_AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP-Vision-AI-Get-Started
last_update:
  date: 05/15/2025
  author: Kewei Li
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center"><img width ={400} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/101990962-a1101-first-new-10.17.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

# はじめに

SenseCAP A1101 - LoRaWAN Vision AI Sensor は、TinyML Edge AI 対応のスマート画像センサーです。画像認識、人数カウント、ターゲット検出、メーター認識など、さまざまなAIモデルをサポートしています。また、TensorFlow Lite を使用してモデルをトレーニングすることも可能です。<br />

# 特徴
- 超低消費電力で強力な Himax カメラ: 400MHz DSP、最大カメラフレームレート 640*480*VGA 60 FPS、ローカル推論

- 低消費電力で長距離通信: スリープモードで 2.3uWh の消費電力、Wio-E5 LoRaWAN モジュールによるデータ転送で数マイルまで対応

- エッジコンピューティングによる高いデータセキュリティ: ローカル画像推論を行い、最終結果データをクラウドに転送。データ送信が制限され、高いデータプライバシーが必要なアプリケーションに適しています。

- データの視覚化が簡単: SenseCAP Mate App と SenseCAP Dashboard を使用して数クリックでデータを表示および管理可能。他のサードパーティツールとも広く互換性あり

- 高い工業保護グレード: -40 ~ 85℃ の動作温度と IP66 等級で、屋内外での展開に適しています

- スケーラブルな展開が容易: デバイス QR コードをスキャンして 1 分でデバイスを追加および構成可能。低コストの LoRaWAN ネットワークとメンテナンスコストでビジネスの拡張性を確保

# 仕様

詳細については、[仕様書](https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_spec.pdf)をご覧ください。

# 始め方

1. A1101 にはいくつかの組み込み AI モデルがあり、ユーザーはニーズに応じてモデルを選択できます。現在、以下のアルゴリズムとモデルが利用可能です:

|**アルゴリズム**|**AI モデル**|
|---|---|
|オブジェクト検出|人体検出; ユーザー定義|
|オブジェクトカウント|人数カウント; ユーザー定義|
|画像分類|人物＆パンダ認識; ユーザー定義|

モデルの選択と構成は設定インターフェースで行います。まずアルゴリズムを選択します。異なるアルゴリズムは異なる機能を実現し、アプリのプレビューで異なる結果を表示します。アルゴリズムの後ろにあるドロップダウン三角形をクリックすると選択ボックスが表示されます。その後、AI モデルを選択します。モデルをクリックすると選択ボックスが表示され、モデルを選択します。

2. 独自の AI モデルをトレーニングしたい場合、以下の2つの方法があります。詳細は以下を参照してください:

**1.[Edge Impulse を使用したワンストップモデルトレーニング](https://wiki.seeedstudio.com/ja/One-Stop-Model-Training-with-Edge-Impulse)** 簡単に実行可能。

**2.[Roboflow、YOLOv5、TensorFlow Lite を使用した AI モデルのトレーニング](https://wiki.seeedstudio.com/ja/Train-Deploy-AI-Model-A1101)** 時間をかけて実行可能。

# LoraWAN® への接続
LoRaWAN® (Long Range Wide Area Network) は、IoT (Internet of Things) デバイスとゲートウェイ間で低消費電力、長距離通信を実現するために設計されたワイヤレス通信プロトコルです。通常、ヨーロッパでは 868 MHz、アメリカでは 915 MHz の産業、科学、医療 (ISM) バンドの免許不要の無線スペクトラムを使用します。LoRaWAN® は、長距離で IoT デバイスを接続するための低コストでエネルギー効率の高いソリューションを提供します。この技術はデバイスとゲートウェイ間の双方向通信を可能にし、さまざまなアプリケーションに対応するためのデータレートをサポートします。

## ゲートウェイと LoraWAN® の選択方法
センサーを使用する際には LoRaWAN® ネットワークのカバレッジが必要です。選択肢は以下の2つです。
![p21](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/4.png)

## センサーの使用方法
リアルタイム検出データをコンピュータに直接接続して表示するだけでなく、これらのデータを LoraWAN® を介して送信し、最終的に [SenseCAP クラウドプラットフォーム](https://sensecap.seeed.cc/) またはサードパーティのクラウドプラットフォームにアップロードすることもできます。SenseCAP クラウドプラットフォームでは、データを周期的に表示し、モバイルやコンピュータを通じてグラフィカルに表示することができます。SenseCAP クラウドプラットフォームと SenseCAP Mate App は同じアカウントシステムを使用しています。

ここではモデルトレーニングプロセスの説明に焦点を当てているため、クラウドプラットフォームのデータ表示の詳細には触れません。しかし、興味がある場合は、SenseCAP クラウドプラットフォームを訪問してデバイスを追加し、データを表示してみてください。プラットフォームの機能をよりよく理解するための素晴らしい方法です！

![p22](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/11.png)

# 技術サポート

弊社製品をお選びいただきありがとうございます！製品の使用体験をスムーズにするために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>