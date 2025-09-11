---
sidebar_position: 3
description: Training（物体検出）の使用方法
title: Training - 物体検出
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/1.9.webp
slug: /ja/sensecraft-ai/tutorials/sensecraft-ai-training-object-detection
aliases:
  - /ja/sensecraft_ai_training_object_detection
last_update:
  date: 11/27/2024
  author: qiuyu wei
---

# トレーニングの種類 - 物体検出

## 物体検出の特徴

Seeed SenseCraft AIプラットフォームは、物体検出タスクに特化した効率的なAIトレーニングツールです。先進的な**YOLO - World物体検出モデル**をベースに構築され、2つの便利なトレーニング方法を提供します：

- **クイックトレーニング**

特徴：画像データは不要です。ターゲット名を入力するだけで、単一クラスの物体検出モデルを素早く生成できます。
利点：シンプルなシナリオに最適で、高速なモデル作成とデプロイメントを可能にします。

- **画像収集トレーニング**

特徴：ターゲット名とアップロードされた画像データを組み合わせてトレーニングを行います。

利点：多様な画像データを活用して生成されたモデルの検出精度を大幅に向上させ、高精度が要求されるアプリケーションに適しています。

これら2つの方法により、SenseCraftプラットフォームは多様な物体検出モデルトレーニングのニーズに対応し、AI開発の複雑さを簡素化しながら、使いやすさと精度の両方を確保しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.0.png" style={{width:750, height:'auto'}}/></div>

## クイックトレーニング

**人間認識**のシンプルなデモを作成します。クイックトレーニング機能は、YOLO – World物体検出モデルの以下の核となる特性を活用しています：

クイックトレーニング機能は、YOLOの強みを活用して単一クラス検出モデルを効率的に作成します。事前訓練済み重み、テキストセマンティクス、効率的な特徴抽出を組み合わせることで、画像データを必要とせずに「人間」などの専用モデルを生成します。

### ステップ1. オブジェクト名の決定

テキストボックスにターゲット名を入力します。次に**'Start Training'**をクリックします。

:::tip
トレーニングセッションは1-3分間続きますので、しばらくお待ちください！
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.1.png" style={{width:1000, height:'auto'}}/></div>

### ステップ2. モデルのトレーニングとアップロード

モデルトレーニングが完了した後、モデルがデプロイされ、Grove Vision AI (V2)がデプロイメント用に選択されます。次に、接続する正しいシリアルポートを選択し、最後に1-3分間辛抱強く待って、モデルトレーニングが完了したことを確認してください！

:::caution
現在、物体検出でのデバイス選択は**Grove Vision AI (V2)**のみをサポートしています。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.2.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.3.png" style={{width:1000, height:'auto'}}/></div>

### 結果のデモンストレーション

上記のステップを完了すると、モデルが正常にデプロイされて実行されますが、**Confidence Threshold**と**IoU Threshold値**の設定に注意が必要です。これらはモデルの認識能力に影響を与えます。

:::tip
**Confidence Threshold:** モデルが検出を有効と見なすために必要な最小信頼度スコアで、低信頼度の予測をフィルタリングします。

**IoU Threshold:** 予測されたバウンディングボックスを真陽性として分類するために必要な最小Intersection over Union（IoU）値で、予測と正解ボックス間の重複測定の精度を確保します。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.4.png" style={{width:800, height:'auto'}}/></div>

## 画像収集トレーニング

**イヤホンを認識する**デモを作成します。YOLO – World物体検出モデルに基づいて、テキストと画像のカスタムトレーニングを行うことができ、生成されたモデルの検出精度を向上させることができます。

### ステップ1. オブジェクト名を決定する

まずテキストボックスにターゲット名を入力し、次に**Grove Vision AI (V2)**を選択して接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.2.png" style={{width:1000, height:'auto'}}/></div>

:::tip
接続が成功すると、右側のボックスにカメラのライブプレビューが表示されます。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.3.png" style={{width:1000, height:'auto'}}/></div>

### ステップ2. 画像をキャプチャする

次に、カメラをターゲットオブジェクトに向けて**'Capture'**をクリックし、ターゲットオブジェクトを赤いボックスで囲み、最後に**'Confirm'**をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.4.png" style={{width:1000, height:'auto'}}/></div>

:::tip
画像素材が多いほど、モデルの認識精度が向上します。
:::

### ステップ3. モデルをトレーニングしてアップロードする

**'Training'**をクリックし、モデルのトレーニングが完了するまで辛抱強く待ちます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.5.png" style={{width:1000, height:'auto'}}/></div>

そして最後にモデルのデプロイメントを行います。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.6.png" style={{width:1000, height:'auto'}}/></div>

### 結果のデモンストレーション

上記のステップが完了すると、モデルが正常にトレーニングされ、デプロイされます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.7.gif" style={{width:1000, height:'auto'}}/></div>

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
