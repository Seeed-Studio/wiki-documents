---
sidebar_position: 3
description: SenseCraft AI でクイックトレーニングまたは画像収集ワークフローを使用して、カスタム物体検出モデルを作成、学習、テスト、およびデプロイします。
title: SenseCraft AI を使った物体検出トレーニング
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/1.9.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-training-object-detection
aliases:
  - /sensecraft_ai_training_object_detection
last_update:
  date: 11/27/2024
  author: qiuyu wei
createdAt: '2024-11-27'
updatedAt: '2026-08-13'
url: https://wiki.seeedstudio.com/ja/sensecraft-ai/tutorials/sensecraft-ai-training-object-detection/
---

# SenseCraft AI で物体検出モデルをトレーニングする

## 物体検出の特長

Seeed SenseCraft AI プラットフォームは、物体検出タスク向けに最適化された効率的な AI トレーニングツールです。高度な **YOLO - World 物体検出モデル** をベースとしており、次の 2 つの便利なトレーニング方法を提供します。

- **クイックトレーニング**

特長：画像データは不要です。ターゲット名を入力するだけで、単一クラスの物体検出モデルを素早く生成できます。
利点：シンプルなシナリオに最適で、モデルの高速な作成とデプロイを可能にします。

- **画像収集トレーニング**

特長：ターゲット名とアップロードした画像データを組み合わせてトレーニングを行います。

利点：多様な画像データを活用することで生成されたモデルの検出精度を大幅に向上させ、高精度が求められるアプリケーションに適しています。

これら 2 つの方法により、SenseCraft プラットフォームは多様な物体検出モデルのトレーニングニーズに対応し、AI 開発の複雑さを軽減しつつ、使いやすさと精度の両立を実現します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.0.png" style={{width:750, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_training#/training" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Open SenseCraft AI Training 🖱️</font></span></strong>
    </a>
</div><br />

## クイックトレーニング

ここでは **人を認識する** シンプルなデモを作成します。クイックトレーニング機能は、YOLO – World 物体検出モデルの次のような中核的な特性を活用します。

クイックトレーニング機能は、YOLO の強みを活かして単一クラス検出モデルを効率的に作成します。事前学習済み重み、テキストの意味情報、効率的な特徴抽出を組み合わせることで、「human」のような対象に特化したモデルを、画像データなしで生成します。

### ステップ 1. オブジェクト名を決める

テキストボックスにターゲット名を入力します。その後 **'Start Training'** をクリックします。

:::tip
トレーニングセッションは 1〜3 分ほどかかりますので、完了までお待ちください。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.1.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 2. モデルのトレーニングとアップロード

モデルのトレーニングが完了すると、モデルがデプロイされ、デプロイ先として Grove Vision AI (V2) が選択されます。その後、接続する正しいシリアルポートを選択し、最後に 1〜3 分ほど待てばモデルのトレーニング完了が確認できます。

:::caution
現在、物体検出で選択できるデバイスは **Grove Vision AI (V2)** のみです。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.2.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.3.png" style={{width:1000, height:'auto'}}/></div>

### 結果のデモ

上記の手順が完了すると、モデルは正常にデプロイされ実行されますが、**Confidence Threshold** と **IoU Threshold value** の設定には注意が必要です。これらはモデルの認識性能に影響します。

:::tip
**Confidence Threshold:** 検出を有効と見なすためにモデルが持つべき最小の信頼度スコアであり、信頼度の低い予測を除外します。

**IoU Threshold:** 予測されたバウンディングボックスを真陽性と判定するために必要な最小の Intersection over Union (IoU) 値であり、予測ボックスと正解ボックスの重なり具合を正確に評価するための指標です。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.4.png" style={{width:800, height:'auto'}}/></div>

## 画像収集トレーニング

ここでは **イヤホンを認識する** デモを作成します。YOLO – World 物体検出モデルに基づき、テキストと画像の両方をカスタマイズしてトレーニングでき、生成されるモデルの検出精度を向上させることができます。

### ステップ 1. オブジェクト名を決める

まずテキストボックスにターゲット名を入力し、その後 **Grove Vision AI (V2)** を選択して接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.2.png" style={{width:1000, height:'auto'}}/></div>

:::tip
接続に成功すると、右側のボックスにカメラのライブプレビューが表示されます。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.3.png" style={{width:1000, height:'auto'}}/></div>

### ステップ 2. 画像を撮影する

次にカメラをターゲットオブジェクトに向けて **'Capture'** をクリックし、赤いボックスでターゲットオブジェクトを囲んでから、最後に **'Confirm'** をクリックします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.4.png" style={{width:1000, height:'auto'}}/></div>

:::tip
画像素材が多いほど、モデルの認識性能は向上します。
:::

### ステップ 3. モデルのトレーニングとアップロード

**'Training'** をクリックし、モデルのトレーニングが完了するまでしばらくお待ちください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.5.png" style={{width:1000, height:'auto'}}/></div>

最後に、モデルをデプロイする段階になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.6.png" style={{width:1000, height:'auto'}}/></div>

### 結果のデモ

上記の手順が完了すると、モデルは正常にトレーニングおよびデプロイされます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.7.gif" style={{width:1000, height:'auto'}}/></div>

## 関連ガイド

- [SenseCraft AI で分類モデルをトレーニングする](/ja/sensecraft-ai/tutorials/sensecraft-ai-training-classification/)
- [SenseCraft AI プラットフォームを探索する](/ja/sensecraft-ai/overview/)
- [SenseCraft AI ドキュメントセンターを閲覧する](/ja/sensecraft-ai/sensecraft-ai-main/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じてお選びいただける複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
