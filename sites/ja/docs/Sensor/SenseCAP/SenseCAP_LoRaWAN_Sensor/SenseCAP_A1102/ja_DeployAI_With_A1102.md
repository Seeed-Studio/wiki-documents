---
description: Deploy_AI_With_A1102
title: SenseCraft AI を使用した SenseCAP A1102 への AI モデルのデプロイ
keywords:
- Sensor Vision_AI_V2
- SenseCAP A1102
- SenseCraft AI
- Custom AI model
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/20.webp
slug: /ja/deploy_ai_with_a1102
sidebar_position: 3
# sidebar_class_name: hidden
last_update:
  date: 12/31/2025
  author: Twelve
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SenseCraft AI を使用した SenseCAP A1102 への AI モデルのデプロイ

## 概要

SenseCAP A1102 は、高度な AI 機能とデプロイの容易さを組み合わせた強力なセンサーデバイスです。このガイドでは、**SenseCraft AI** ウェブサイトを使用して A1102 に公式またはカスタム AI モデルをデプロイする方法を、設定、デプロイ、テストの段階的な手順とともに説明します。

<div class="info-section">
  <div class="section-header">
      <h2>SenseCAP A1102 への AI モデルのデプロイ</h2>
      <p>AI モデルの訓練とデプロイ：リアルタイム分析のためのカスタムまたは公式 AI モデルで LoRaWAN カメラを強化します。SenseCAP A1102 は、AI 駆動のインサイトをアプリケーションに導入する柔軟性を提供します。</p>
  </div>
  <ul class="info-list">
      <li class="info-item">
          <div class="info-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 5h-4l-1-1h-6l-1 1H4c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2V7c0-1.104-.896-2-2-2zM12 17c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
            </svg>
          </div>
          <div class="info-content">
              <h3>LoRaWAN カメラでのカスタム AI モデルデプロイ</h3>
              <p>SenseCAP A1102 では、独自の AI モデルを訓練し、LoRaWAN 対応カメラに直接デプロイできます。これにより、リアルタイムの物体検出が可能になります。LoRaWAN とのシームレスな統合により、AI 駆動のインサイトが現場でアクセス可能かつ実用的になります。</p>
          </div>
      </li>
      <li class="info-item">
          <div class="info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                  <path d="M3 3v5h5"></path>
                  <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
                  <path d="M16 21h5v-5"></path>
              </svg>
          </div>
          <div class="info-content">
              <h3>事前訓練済みモデルまたはカスタムモデルの使用</h3>
              <p>SenseCAP A1102 は、幅広い事前訓練済み AI モデルをサポートし、Roboflow Universe などで見つかる公開データセットやカスタムデータセットを使用してカスタムモデルを訓練する機能も提供します。この柔軟性により、ユースケースに特化したモデルを簡単にデプロイできます。</p>
          </div>
      </li>
      <li class="info-item">
          <div class="info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  <line x1="6" y1="6" x2="6.01" y2="6"></line>
                  <line x1="6" y1="18" x2="6.01" y2="18"></line>
              </svg>
          </div>
          <div class="info-content">
              <h3>多様なアプリケーション</h3>
              <p>SenseCAP A1102 は、様々な実世界のアプリケーションにデプロイできます。農業での植物の葉の健康状態の監視、都市環境での駐車スペースの占有状況の検出、海域での船舶位置の追跡など、AI モデルは特定のニーズに適応できます。</p>
          </div>
      </li>
  </ul>
</div>


## 前提条件

### 必要なハードウェア

- SenseCAP A1102 デバイス  
- USB Type-C データケーブル  
- PC  

### 必要なソフトウェア
- [SenseCraft AI プラットフォーム](https://sensecraft.seeed.cc/ai/home)

## 公式 AI モデルデプロイプロセス

### ステップ 1. プラットフォームを開き、ワークスペースで A1102 を選択

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture2.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 2. シリアルポート経由でプラットフォームに接続

- Type-C ケーブルを使用してデバイスを PC に接続します（下の画像に示すように、Himax シリアルポートである上部の Type-C ポートに接続していることを確認してください）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture3.png" style={{width:400, height:'auto'}}/></div>

- `Connect` をクリック 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture4.png" style={{width:1000, height:'auto'}}/></div>

- ポップアップウィンドウで正しいシリアルポートを選択し、`Connect` をクリック

正しいポートが選択されている場合、Invoke を通じてプレビュービデオストリームを表示でき、モデルの選択とフラッシュを正常に進めることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture5.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 3. デバイスにデプロイしたい AI モデルを選択

- `Select Model` をクリック

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture6.png" style={{width:500, height:'auto'}}/></div>

- パブリックモデルまたは SenseCraft AI で訓練した独自のモデルから選択

- モデルをクリックするとフラッシュプロセスが開始されます

:::note
デバイスは現在、デプロイした AI モデルを使用して検出し、結果をアップロードしています！APP または他のプラットフォームに移動して表示してください。
:::

## カスタム AI モデルデプロイプロセス

:::warning note
AI モデルは多くのクラスで訓練できますが、認識結果は **S2100** 経由で送信されるため、レポートには **最初の 9 クラス** のみが効果的にサポートされます。
:::

### ステップ 1. Roboflow からデータセットを取得

- [無料の Roboflow アカウントを作成](https://app.roboflow.com/) 

- オープンソースデータセットが必要な場合は、[Roboflow Universe](https://universe.roboflow.com/) に移動してください

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p1.png" style={{width:800, height:'auto'}}/></div>

- 独自の画像を使用してラベル付けしてデータセットを取得したい場合は、[Roboflow](https://app.roboflow.com/) に移動して **プロジェクト** を作成してください

:::warning note
独自の画像を使用する場合は、ラベルの順序に特に注意してください。
最初の 9 クラス（ラベルインデックス 0–8）のみが有効で、A1102 で認識できます。
データセットに 9 つ以上のクラスが含まれている場合は、モデルをエクスポートする前に他のクラスを削除して、必要な 9 つのクラスのみを選択する必要があります。
:::

### ステップ 2. Roboflow からデータセットをエクスポート

- Overview をクリックしてクラスを確認

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p7.png" style={{width:800, height:'auto'}}/></div>

:::danger note 
表示されるクラスの順序は、ラベルインデックスの順序に対応します。したがって、A1102 では最初の 9 クラス（ラベルインデックス 0–8）のみが認識結果として正しくアップロードできます。
モデルに 9 つ以上のクラスが含まれている場合は、データセットを独自のプロジェクトにクローンし、他のラベルを削除してから、データセットを再度エクスポートして、必要な 9 つのクラスを選択する必要があります。
:::

- プロジェクトで `Dataset` をクリック

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p2.png" style={{width:300, height:'auto'}}/></div>

- `Download Dataset` をクリック

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p3.png" style={{width:800, height:'auto'}}/></div>

- `Download Dataset` をクリック

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p4.png" style={{width:500, height:'auto'}}/></div>

- `COCO` と `Show download code` を選択し、`Continue` をクリック

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p5.png" style={{width:500, height:'auto'}}/></div>

- AI モデル訓練プロセスで使用される **Raw URL** をコピー

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p6.png" style={{width:600, height:'auto'}}/></div>

### ステップ 3. データセットで AI モデルを訓練

- [モデル訓練クイックスタート](https://wiki.seeedstudio.com/ja/grove_vision_ai_v2_sscma#training-dataset-exported-model) に従って、準備したデータセットで AI モデルを訓練します。

- 訓練が完了したら、訓練済みモデルを .tflite 形式でエクスポートします。これはデバイスへのデプロイに使用されます。

### ステップ 4. カスタム AI モデルをアップロードしてフラッシュ

- [プラットフォーム](https://sensecraft.seeed.cc/ai/home) を開き、ワークスペースで A1102 を選択

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture2.png" style={{width:1000, height:'auto'}}/></div>

- シリアルポート経由でプラットフォームに接続

- Type-C ケーブルを使用してデバイスを PC に接続します（下の画像に示すように、Himax シリアルポートである上部の Type-C ポートに接続していることを確認してください）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture3.png" style={{width:400, height:'auto'}}/></div>

- `Connect` をクリック 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture4.png" style={{width:1000, height:'auto'}}/></div>

- 正しいシリアルポートを選択し、ポップアップウィンドウで `Connect` をクリックします

- `Upload Model` をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture7.png" style={{width:500, height:'auto'}}/></div>

- モデル情報を設定します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture8.png" style={{width:500, height:'auto'}}/></div>

- `Model File`: TFLiteモデルの訓練とエクスポートの詳細な手順については、この[ガイド](https://wiki.seeedstudio.com/ja/grove_vision_ai_v2_sscma/)を参照してください

- `Object`: モデルのラベル順序（0から8）に対応するカテゴリ名。最大9つのクラスまでサポートされており、追加のクラスは表示されません。

- `Send` をクリックし、フラッシュプロセスが完了するまで待ちます

## [Seeed Portal](https://sensecap.seeed.cc/portal/#/dashboard)での結果分析

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture11.png" style={{width:1000, height:'auto'}}/></div>

- 最初の値はデータ報告のタイムスタンプです

- 次の9つの値は、各クラスインデックス（0から8）の信頼度スコア（measurementValue）を表します。

- 最後の値は、デプロイされたAIモデルに関連するメタデータを含むモデル情報を含んでいます。

## [TTN](https://eu1.cloud.thethings.network/console/)での結果分析

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture9.png" style={{width:1000, height:'auto'}}/></div>

- 各結果には10の測定値が含まれており、これらは10のRS485チャンネルに対応しています。

- 最初の9つの測定値は、各クラスインデックス（0から8）の信頼度スコア（measurementValue）を表します。

- 10番目の測定値は、デプロイされたAIモデルに関連するメタデータを含むモデル情報を含んでいます。

## FAQ

**Q: どのようなタイプのカスタムモデルをアップロードできますか？**

A: .tfliteファイル拡張子のモデルをアップロードできます。[モデル訓練クイックスタート](https://wiki.seeedstudio.com/ja/grove_vision_ai_v2_sscma/#training-dataset-exported-model)の手順に従って、独自のモデルを訓練およびエクスポートできます。

## **技術サポート & 製品ディスカッション**

弊社製品をお選びいただき、ありがとうございます！弊社では、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
