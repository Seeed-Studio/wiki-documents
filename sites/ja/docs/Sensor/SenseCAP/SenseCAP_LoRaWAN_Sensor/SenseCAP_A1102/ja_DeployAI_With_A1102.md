---
description: Deploy_AI_With_A1102
title: SenseCraft AI を使用して SenseCAP A1102 に AI モデルをデプロイする
keywords:
  - Sensor Vision_AI_V2
  - SenseCAP A1102
  - SenseCraft AI
  - Custom AI model
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/20.webp
slug: /deploy_ai_with_a1102
sidebar_position: 3
last_update:
  date: 12/31/2025
  author: Twelve
createdAt: '2025-11-26'
updatedAt: '2025-12-31'
url: https://wiki.seeedstudio.com/ja/deploy_ai_with_a1102/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SenseCraft AI を使用して SenseCAP A1102 に AI モデルをデプロイする

## 概要

SenseCAP A1102 は、高度な AI 機能と容易なデプロイを両立した高性能センサーデバイスです。本ガイドでは、**SenseCraft AI** ウェブサイトを使用して、A1102 に公式またはカスタム AI モデルをデプロイする手順を、設定・デプロイ・テストまでステップバイステップで説明します。

<div class="info-section">
  <div class="section-header">
      <h2>SenseCAP A1102 に AI モデルをデプロイする</h2>
      <p>AI モデルをトレーニングしてデプロイ：LoRaWAN カメラにカスタムまたは公式の AI モデルを搭載し、リアルタイム解析を実現します。SenseCAP A1102 は、アプリケーションに AI 駆動のインサイトをもたらすための柔軟性を提供します。</p>
  </div>
  <ul class="info-list">
      <li class="info-item">
          <div class="info-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 5h-4l-1-1h-6l-1 1H4c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2V7c0-1.104-.896-2-2-2zM12 17c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
            </svg>
          </div>
          <div class="info-content">
              <h3>LoRaWAN カメラを用いたカスタム AI モデルのデプロイ</h3>
              <p>SenseCAP A1102 を使用すると、独自の AI モデルをトレーニングし、LoRaWAN 対応カメラに直接デプロイできます。これにより、リアルタイムの物体検出が可能になります。LoRaWAN とのシームレスな統合により、AI によるインサイトを現場で活用しやすくなります。</p>
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
              <h3>事前学習済みモデルまたはカスタムモデルの利用</h3>
              <p>SenseCAP A1102 は、幅広い事前学習済み AI モデルをサポートするとともに、Roboflow Universe などで公開されているデータセットや独自のデータセットを用いてカスタムモデルをトレーニングすることも可能です。この柔軟性により、ユースケースに特化したモデルを容易にデプロイできます。</p>
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
              <p>SenseCAP A1102 は、さまざまな実環境のアプリケーションに展開できます。農業分野での植物の葉の健康状態のモニタリング、都市環境での駐車スペースの占有状況の検出、海事エリアでの船舶位置の追跡など、AI モデルをニーズに合わせて適応させることができます。</p>
          </div>
      </li>
  </ul>
</div>


## 前提条件

### 必要なハードウェア

- SenseCAP  A1102 デバイス  
- USB Type-C データケーブル  
- PC  

### 必要なソフトウェア
- [SenseCraft AI Platform](https://sensecraft.seeed.cc/ai/home)

## 公式 AI モデルのデプロイ手順

**Step 1.** **[`SenseCraft AI`](https://sensecraft.seeed.cc/ai)** > **`Models`** > **`Workspace`** > **`SenseCAP A1102`** から SenseCAP A1102 のワークスペースにアクセスするか、[ワークスペースへの直接リンク](https://sensecraft.seeed.cc/ai/device/local/37)を使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/sensecap_a1102_workspace.png" style={{width:1000, height:'auto'}}/></div>

**Step 2. シリアルポート経由でプラットフォームに接続する**

- Type-C ケーブルを使用してデバイスを PC に接続します（下図のように、上側の Type-C ポートが Himax シリアルポートなので、必ずそちらに接続してください）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture3.png" style={{width:400, height:'auto'}}/></div>

- `Connect` をクリックします 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture4.png" style={{width:1000, height:'auto'}}/></div>

- ポップアップウィンドウで正しいシリアルポートを選択し、`Connect` をクリックします

正しいポートが選択されていれば、Invoke を通じてプレビューのビデオストリームを確認でき、そのままモデルの選択とフラッシュを通常どおり進めることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture5.png" style={{width:1000, height:'auto'}}/></div>

**Step 3. デバイスにデプロイしたい AI モデルを選択する**

- `Select Model` をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture6.png" style={{width:500, height:'auto'}}/></div>

- Public Models から、または SenseCraft AI 内で自分がトレーニングしたモデルから選択します

- モデルをクリックすると、フラッシュ処理が開始されます

:::note
これでデバイスは、デプロイした AI モデルを使用して検出を行い、結果をアップロードしています！APP または他のプラットフォームに移動して確認してください。
:::

## カスタム AI モデルのデプロイ手順

:::warning note
当社の AI モデルは多くのクラスでトレーニングできますが、認識結果は **S2100** を介して送信されるため、レポートに有効に対応できるのは **最初の 9 クラス** のみです。
:::

**Step 1. Roboflow からデータセットを取得する**

- [無料の Roboflow アカウントを作成](https://app.roboflow.com/) します 

- オープンソースのデータセットが必要な場合は、[Roboflow Universe](https://universe.roboflow.com/) にアクセスしてください

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p1.png" style={{width:800, height:'auto'}}/></div>

- 自分の画像を使用してラベリングし、データセットを作成したい場合は、[Roboflow](https://app.roboflow.com/) にアクセスして **Project** を作成してください

:::warning note
自分の画像を使用する場合は、ラベルの順序に特に注意してください。
最初の 9 クラス（ラベルインデックス 0–8）のみが有効で、A1102 によって認識されます。
データセットに 9 クラスを超えるクラスが含まれている場合は、モデルをエクスポートする前に不要なクラスを削除し、必要な 9 クラスのみを選択する必要があります。
:::

**Step 2. Roboflow からデータセットをエクスポートする**

- Overview をクリックしてクラスを確認します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p7.png" style={{width:800, height:'auto'}}/></div>

:::danger note 
表示されているクラスの順序は、ラベルインデックスの順序に対応しています。そのため、A1102 上で認識結果として正しくアップロードできるのは、最初の 9 クラス（ラベルインデックス 0–8）のみです。
モデルに 9 クラスを超えるクラスが含まれている場合は、データセットを自分のプロジェクトにクローンし、不要なラベルを削除してからデータセットを再エクスポートすることで、必要な 9 クラスを選択する必要があります。
:::

- プロジェクト内で `Dataset` をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p2.png" style={{width:300, height:'auto'}}/></div>

- `Download Dataset` をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p3.png" style={{width:800, height:'auto'}}/></div>

- `Download Dataset` をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p4.png" style={{width:500, height:'auto'}}/></div>

- `COCO` と `Show download code` を選択し、`Continue` をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p5.png" style={{width:500, height:'auto'}}/></div>

- AI モデルのトレーニングプロセスで使用する **Raw URL** をコピーします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p6.png" style={{width:600, height:'auto'}}/></div>

**Step 3. データセットを用いて AI モデルをトレーニングする**

- 準備したデータセットを使用して AI モデルをトレーニングするには、[Model training quick start](https://wiki.seeedstudio.com/ja/grove_vision_ai_v2_sscma#training-dataset-exported-model) に従ってください。

- トレーニングが完了したら、デバイスへのデプロイに使用するため、トレーニング済みモデルを .tflite 形式でエクスポートします。

**Step 4. カスタム AI モデルをアップロードしてフラッシュする**

- **[`SenseCraft AI`](https://sensecraft.seeed.cc/ai)** > **`Models`** > **`Workspace`** > **`SenseCAP A1102`** から SenseCAP A1102 のワークスペースにアクセスするか、[ワークスペースへの直接リンク](https://sensecraft.seeed.cc/ai/device/local/37)を使用します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/sensecap_a1102_workspace.png" style={{width:1000, height:'auto'}}/></div>

- シリアルポート経由でプラットフォームに接続します

- Type-C ケーブルを使用してデバイスを PC に接続します（下図のように、上側の Type-C ポートが Himax シリアルポートなので、必ずそちらに接続してください）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture3.png" style={{width:400, height:'auto'}}/></div>

- `Connect` をクリックします 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture4.png" style={{width:1000, height:'auto'}}/></div>

- 正しいシリアルポートを選択し、ポップアップウィンドウで `Connect` をクリックします

- `Upload Model` をクリックします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture7.png" style={{width:500, height:'auto'}}/></div>

- モデル情報を設定します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture8.png" style={{width:500, height:'auto'}}/></div>

- `Model File`: TFLite モデルの学習およびエクスポートに関する詳細な手順については、この[ガイド](https://wiki.seeedstudio.com/ja/grove_vision_ai_v2_sscma/)を参照してください

- `Object`: モデルのラベル順（0 から 8）に対応するカテゴリ名です。最大 9 クラスまでサポートされており、それ以上のクラスは表示されません。

- `Send` をクリックし、フラッシュ処理が完了するまで待ちます

## [Seeed Portal](https://sensecap.seeed.cc/portal/#/dashboard) での結果解析

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture11.png" style={{width:1000, height:'auto'}}/></div>

- 最初の値はデータ送信のタイムスタンプです

- 次の 9 つの値は、各クラスインデックス（0 から 8）の信頼度スコア（measurementValue）を表します。

- 最後の値には、デプロイされた AI モデルに関連するメタデータを含むモデル情報が格納されています。

## [TTN](https://eu1.cloud.thethings.network/console/) での結果解析

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture9.png" style={{width:1000, height:'auto'}}/></div>

- 各結果には 10 個の測定値が含まれており、10 個の RS485 チャネルに対応しています。

- 最初の 9 個の測定値は、各クラスインデックス（0 から 8）の信頼度スコア（measurementValue）を表します。

- 10 番目の測定値には、デプロイされた AI モデルに関連するメタデータを含むモデル情報が格納されています。

## FAQ

**Q: どの種類のカスタムモデルをアップロードできますか？**

A: `.tflite` ファイル拡張子のモデルをアップロードできます。[Model training quick start](https://wiki.seeedstudio.com/ja/grove_vision_ai_v2_sscma/#training-dataset-exported-model) の手順に従って、独自のモデルを学習およびエクスポートできます。

## **技術サポート & 製品ディスカッション**

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
